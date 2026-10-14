"""
FORCE SLEEVE MAKER
Ek side-view photo (kisi bhi ek colour ki) se har colour ki LEFT aur RIGHT sleeve image banata hai.

Kaise kaam karta hai:
  1. Side photo ka kaala/dark background hata kar transparent banata hai.
  2. Photo ke do rang pakadta hai: DARK (upar ka navy) aur MAIN (collar / pattern ka rang).
  3. Har colour ki FRONT photo se usi colour ke DARK aur MAIN rang nikalta hai.
  4. Side photo ke har pixel ko naye DARK -> MAIN rang mein badalta hai, shadow aur silai waisi hi rehti hai.
  5. RIGHT sleeve = photo,  LEFT sleeve = photo ka mirror.
  6. catalog.json (aur design ki .done file) mein us design par "sleeveView": "side" laga deta hai,
     taaki editor side-sleeve ka print area use kare. force_catalog.py dobara chalane par bhi ye bana rehta hai.

Run:
  python force_sleeves.py SIDE_PHOTO.png FRONTS_FOLDER OUT_FOLDER
  e.g. python force_sleeves.py "side ocean.png" "designs/halftone-pro" "catalog/halftone-pro"
  FRONTS_FOLDER = us design ke har colour ki front PNG (teal.png, red.png ...).
  OUT_FOLDER    = catalog ke andar us design ka folder (catalog/<design-id>).
  Output: OUT_FOLDER/<colour>-left.webp, <colour>-right.webp

Needs: pip install pillow numpy opencv-python
"""
import os, sys, glob, re, json
import numpy as np, cv2
from PIL import Image

OUT_W, OUT_H = 900, 1008          # editor ka image size (front/back jaisa hi)

# ---------- 1. background hatao ----------
def cut_background(img, dark_limit=38):
    a = np.array(img.convert('RGB'))
    v = cv2.cvtColor(a, cv2.COLOR_RGB2HSV)[..., 2].astype(np.float32)
    dark = (v < dark_limit).astype(np.uint8)
    _, lab = cv2.connectedComponents(dark)
    border = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}
    bg = np.isin(lab, list(border)).astype(np.uint8)            # sirf kinare se juda dark area = background
    bg = cv2.morphologyEx(bg, cv2.MORPH_OPEN, np.ones((5, 5), np.uint8))
    fg = cv2.morphologyEx(1 - bg, cv2.MORPH_CLOSE, np.ones((7, 7), np.uint8))
    alpha = cv2.GaussianBlur(fg.astype(np.float32), (0, 0), 1.2)
    edge = (cv2.dilate(fg, np.ones((5, 5))) - cv2.erode(fg, np.ones((5, 5)))) > 0
    alpha = np.where(edge, np.clip(alpha * np.clip((v - 10) / 40, 0, 1) * 1.6, 0, 1), alpha)
    return Image.fromarray(np.dstack([a, (alpha * 255).astype(np.uint8)]), 'RGBA')

# ---------- 2/3. DARK aur MAIN rang nikalo ----------
def region(a, x0, x1, y0, y1):
    h, w = a.shape[:2]
    r = a[int(y0*h):int(y1*h), int(x0*w):int(x1*w)]
    return r[r[..., 3] > 200][:, :3]

def dark_and_main(a, dark_box, main_box):
    """dark_box/main_box = (x0,x1,y0,y1) image ke hisse 0..1 mein"""
    r = region(a, *dark_box); lum = r.mean(1)
    D = np.median(r[lum <= np.percentile(lum, 40)], axis=0)
    L = np.median(region(a, *main_box), axis=0)
    return D, L

# front photo par: DARK = kandhe ke paas upar, MAIN = pet ke beech
FRONT_DARK_BOX = (0.20, 0.40, 0.09, 0.14)
FRONT_MAIN_BOX = (0.45, 0.55, 0.60, 0.66)
# side photo par: DARK = kandha, MAIN = collar
SIDE_DARK_BOX  = (0.22, 0.44, 0.04, 0.16)
SIDE_MAIN_BOX  = (0.75, 0.84, 0.07, 0.18)

# ---------- 4. rang badlo ----------
def recolour(side_rgba, Dp, Lp, D, L, gamma=0.8):
    a = np.array(side_rgba).astype(np.float32); rgb, al = a[..., :3], a[..., 3]
    v = Lp - Dp
    t = ((rgb - Dp) @ v) / (v @ v)                                  # pixel DARK->MAIN line par kahan hai
    proj = Dp + np.clip(t, -0.3, 1.4)[..., None] * v
    luma = lambda c: (c * [0.299, 0.587, 0.114]).sum(-1)
    shade = np.clip(luma(rgb) / np.maximum(luma(proj), 1), 0.45, 1.8)   # roshni / shadow
    mx, mn = rgb.max(-1), rgb.min(-1)
    keep = ((mx - mn) / np.maximum(mx, 1) < 0.25) & (mx > 120)    # safed button, highlight jaise ke taise
    tt = np.clip(t, -0.05, 1.15); tt = np.where(tt > 0, np.abs(tt) ** gamma, tt)
    out = (D + tt[..., None] * (L - D)) * shade[..., None]
    out = np.where(keep[..., None], rgb, out)
    return Image.fromarray(np.dstack([np.clip(out, 0, 255), al]).astype(np.uint8), 'RGBA')

def place(im):
    s = min(OUT_W / im.width, OUT_H / im.height)
    im = im.resize((round(im.width * s), round(im.height * s)), Image.LANCZOS)
    c = Image.new('RGBA', (OUT_W, OUT_H)); c.paste(im, ((OUT_W - im.width) // 2, (OUT_H - im.height) // 2), im)
    return c

def slug(s): return re.sub(r'[^a-z0-9]+', '-', s.strip().lower()).strip('-')

# ---------- 6. catalog mein "side" likho ----------
def mark_side(out_dir):
    """catalog/<design>/  ->  catalog.json aur catalog/<design>/.done mein "sleeveView": "side" """
    did = os.path.basename(os.path.normpath(out_dir))
    cat_path = os.path.join(os.path.dirname(os.path.normpath(out_dir)), 'catalog.json')
    if os.path.exists(cat_path):
        cat = json.load(open(cat_path, encoding='utf-8'))
        hit = [e for e in cat if e.get('id') == did]
        for e in hit: e['sleeveView'] = 'side'
        json.dump(cat, open(cat_path, 'w', encoding='utf-8'), indent=1)
        print('catalog.json:', did, '-> sleeveView side' if hit else '-> NOT FOUND (design id check karo)')
    else:
        print('catalog.json nahi mila:', cat_path, '- haath se "sleeveView": "side" likhna padega')
    done = os.path.join(out_dir, '.done')
    if os.path.exists(done):                               # force_catalog.py dobara chale to bhi side bana rahe
        e = json.load(open(done, encoding='utf-8')); e['sleeveView'] = 'side'
        json.dump(e, open(done, 'w', encoding='utf-8'))

if __name__ == '__main__':
    side_path, fronts_dir, out_dir = sys.argv[1], sys.argv[2], sys.argv[3]
    os.makedirs(out_dir, exist_ok=True)
    side = place(cut_background(Image.open(side_path)))
    Dp, Lp = dark_and_main(np.array(side), SIDE_DARK_BOX, SIDE_MAIN_BOX)
    print('side photo  DARK', Dp.astype(int), ' MAIN', Lp.astype(int))
    fronts = sorted(glob.glob(os.path.join(fronts_dir, '*.png')) + glob.glob(os.path.join(fronts_dir, '*.PNG')))
    for f in fronts:
        a = np.array(Image.open(f).convert('RGBA'))
        D, L = dark_and_main(a, FRONT_DARK_BOX, FRONT_MAIN_BOX)
        name = slug(os.path.splitext(os.path.basename(f))[0])
        right = recolour(side, Dp, Lp, D, L)
        right.save(os.path.join(out_dir, f'{name}-right.webp'), 'WEBP', quality=80, method=3)
        right.transpose(Image.FLIP_LEFT_RIGHT).save(os.path.join(out_dir, f'{name}-left.webp'), 'WEBP', quality=80, method=3)
        print('done', name)
    if fronts: mark_side(out_dir)
