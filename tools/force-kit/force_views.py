"""
Force polo: make FRONT / BACK / LEFT SLEEVE / RIGHT SLEEVE images from one front mockup PNG.
All Force polo mockups use the same template, so fixed coordinates work for every file.
Needs: Python 3, pillow, numpy, opencv-python   (pip install pillow numpy opencv-python)
"""
import numpy as np, cv2
from PIL import Image, ImageDraw, ImageFilter

CW, CH = 813, 1000                      # canonical template size
OUT_W, OUT_H = 900, 1008                # output canvas (same as the editor)

def canon(img):
    return img.convert('RGBA').resize((CW, CH), Image.LANCZOS)

def poly_mask(points, blur=0):
    m = Image.new('L', (CW, CH), 0); ImageDraw.Draw(m).polygon(points, fill=255)
    if blur: m = m.filter(ImageFilter.GaussianBlur(blur))
    return np.array(m).astype(np.float32) / 255

# ---- front-only parts to remove (collar, open neck, placket, chest logo) ----
NECK = [(250,55),(285,15),(330,0),(475,0),(520,12),(558,70),(558,120),(512,170),(472,198),(330,200),(290,180),(250,118)]
PLACKET = [(360,110),(436,110),(436,348),(360,348)]
LOGO = [(492,284),(568,284),(568,352),(492,352)]

def place(im, fill=0.96):
    s = OUT_H * fill / im.height
    im = im.resize((round(im.width*s), round(im.height*s)), Image.LANCZOS)
    c = Image.new('RGBA', (OUT_W, OUT_H)); c.paste(im, ((OUT_W-im.width)//2, (OUT_H-im.height)//2), im); return c

class Template:
    def __init__(self, back_path):
        b = np.array(canon(Image.open(back_path))).astype(np.float32)
        self.alpha = b[...,3]
        rgb = b[...,:3]; lum = rgb.mean(-1)
        yy, xx = np.mgrid[0:CH, 0:CW]
        # back collar band = the lighter band at the top centre of the template back
        top = (yy < 90) & (xx > 250) & (xx < 565) & (self.alpha > 200)
        body_ref = np.median(lum[(yy > 95) & (yy < 130) & (xx > 300) & (xx < 360)])
        self.collar = (top & (lum > body_ref + 18)).astype(np.float32)
        self.collar = cv2.morphologyEx(self.collar, cv2.MORPH_CLOSE, np.ones((5,5), np.uint8))
        self.collar = cv2.GaussianBlur(self.collar, (3,3), 0)
        cl = lum[self.collar > 0.5]; self.collar_shade = np.clip(lum / max(np.median(cl),1), 0.55, 1.35)
        # nape logo (white / black, low saturation) from the template
        mx, mn = rgb.max(-1), rgb.min(-1); sat = (mx-mn)/np.maximum(mx,1)
        box = (yy > 95) & (yy < 160) & (xx > 375) & (xx < 450)
        self.logo = (box & (sat < 0.22)).astype(np.float32)
        self.logo_rgb = rgb

T = None

def make_back(front):
    a = np.array(canon(front)).astype(np.float32); rgb = a[...,:3].copy()
    neck, plk, logo = poly_mask(NECK), poly_mask(PLACKET), poly_mask(LOGO)
    gap = ((T.alpha > 128) & (a[...,3] < 128)).astype(np.uint8)   # back silhouette not covered by the front
    fill = rgb.copy()
    # chest logo: take the mirrored spot from the other side of the chest
    ys, xs = np.where(logo > 0.5); fill[ys, xs] = rgb[ys, 796 - xs]
    # placket strip: mirror the fabric on each side of it inwards
    for x in range(360, 398): fill[:, x] = fill[:, 2*360 - x]
    for x in range(398, 437): fill[:, x] = fill[:, 2*436 - x]
    # open neck + front collar: reflect the rows just below it upwards
    yb = 200
    vert = fill[2*yb - np.arange(yb)].copy()
    fa = a[...,3]
    for y in range(yb):
        xs_ = np.where(neck[y] > 0.5)[0]
        if len(xs_) == 0: continue
        xl, xr = xs_.min(), xs_.max(); mid = (xl + xr) // 2
        for x in range(xl, xr + 1):
            src = 2*xl - x - 1 if x <= mid else 2*xr - x + 1
            if 0 <= src < CW and fa[y, src] > 200 and neck[y, src] < 0.5:
                fill[y, x] = rgb[y, src]
            else:
                fill[y, x] = vert[y, x]
    remove = np.maximum.reduce([neck, plk, logo])
    soft = cv2.GaussianBlur(remove, (0,0), 2.5)
    filled = rgb*(1-soft[...,None]) + fill*soft[...,None]
    filled = np.clip(filled, 0, 255).astype(np.uint8)
    # fill thin silhouette gaps and soften seams
    rem8 = (remove > 0.5).astype(np.uint8)
    edge = cv2.dilate(rem8, np.ones((7,7),np.uint8)) - cv2.erode(rem8, np.ones((7,7),np.uint8))
    filled = cv2.inpaint(filled, cv2.dilate(gap, np.ones((5,5),np.uint8)), 6, cv2.INPAINT_TELEA)
    filled = cv2.inpaint(filled, (edge > 0).astype(np.uint8) & (cv2.Canny(filled,60,160) > 0).astype(np.uint8), 3, cv2.INPAINT_TELEA).astype(np.float32)
    # 3) collar: template collar band recoloured with this design's collar colour
    fa = a[...,3]
    flap = poly_mask([(270,95),(300,140),(330,165),(300,170),(262,110)])  # front collar flap, left
    sel = (flap > 0.5) & (fa > 200)
    ccol = np.median(rgb[sel], axis=0) if sel.sum() > 50 else np.array([40,40,40.])
    collar_rgb = np.clip(ccol[None,None,:] * T.collar_shade[...,None], 0, 255)
    out = filled*(1-T.collar[...,None]) + collar_rgb*T.collar[...,None]
    # 4) nape logo
    out = out*(1-T.logo[...,None]) + T.logo_rgb*T.logo[...,None]
    img = np.dstack([np.clip(out,0,255), T.alpha]).astype(np.uint8)
    return Image.fromarray(img, 'RGBA')

def make_sleeves(front):
    a = np.array(canon(front)); H, W = a.shape[:2]
    yy, xx = np.mgrid[0:H, 0:W]; res = {}
    for side, (sx, sy, ax, ay), rot in [('right',(196,112,172,420),12), ('left',(617,112,641,420),-12)]:
        seam = sx + (ax-sx)*np.clip((yy-sy)/(ay-sy), 0, 1)
        m = (a[...,3] > 0) & (yy >= sy) & (yy <= 560) & ((xx < seam) if side=='right' else (xx > seam))
        b = a.copy(); b[...,3] = np.where(m, b[...,3], 0)
        s = Image.fromarray(b, 'RGBA'); s = s.crop(s.getbbox()).rotate(rot, resample=Image.BICUBIC, expand=True); s = s.crop(s.getbbox())
        res[side] = place(s, 0.80)
    return res

def make_views(front_path, back_template):
    global T
    if T is None: T = Template(back_template)
    f = Image.open(front_path)
    v = {'front': place(canon(f)), 'back': place(make_back(f))}
    v.update(make_sleeves(f)); return v

if __name__ == '__main__':
    import sys, os, glob
    src, dst = sys.argv[1], sys.argv[2]
    tpl = sys.argv[3] if len(sys.argv) > 3 else 'back_template.png'
    files = [p for p in glob.glob(os.path.join(src, '**', '*.png'), recursive=True)]
    print(len(files), 'files')
    for i, p in enumerate(sorted(files)):
        rel = os.path.splitext(os.path.relpath(p, src))[0]
        od = os.path.join(dst, os.path.dirname(rel)); os.makedirs(od, exist_ok=True)
        name = os.path.basename(rel).strip().replace(' ', '-').lower()
        if os.path.exists(os.path.join(od, name + '-right.webp')): continue   # resume support
        try:
            for k, im in make_views(p, tpl).items():
                im.save(os.path.join(od, f'{name}-{k}.webp'), 'WEBP', quality=80, method=3)
        except Exception as e:
            print('SKIP', p, e)
        if (i+1) % 50 == 0: print(i+1, 'done')
    print('Finished')
