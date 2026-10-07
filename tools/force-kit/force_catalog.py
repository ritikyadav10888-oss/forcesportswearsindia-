"""
FORCE KIT CATALOG BUILDER
Turns folders of Force polo mockups into FRONT / BACK / LEFT / RIGHT images for every colour.

Input  : one folder per design, e.g.  designs/ppt 2/red.png, designs/ppt 2/339.png, designs/ppt 2/340.png ...
         - every PNG is a front of one colour, except back views, which are found automatically
         - if a design has a real back photo (any colour), every colour's back is made from it
         - if it has none, a back is built from the front (collar, placket and chest logo removed)
Output : out/<design>/<colour>-front.webp, -back.webp, -left.webp, -right.webp  +  out/catalog.json
Run    : python force_catalog.py "path/to/designs" out
Needs  : pip install pillow numpy opencv-python
Safe to stop and run again: finished designs are skipped.
"""
import os, sys, json, glob, hashlib, re
import numpy as np, cv2
from PIL import Image
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
import force_views as fv
from recolor import palette_map, apply_map, canon, CW, CH

BACK_T  = np.array(canon(Image.open(os.path.join(HERE, 'back_template.png'))))[...,3] > 128
FRONT_T = np.array(canon(Image.open(os.path.join(HERE, 'front_template.png'))))[...,3] > 128
fv.T = fv.Template(os.path.join(HERE, 'back_template.png'))

def iou(a, b): return (a & b).sum() / max((a | b).sum(), 1)
def is_back(img):
    al = np.array(canon(img))[...,3] > 128
    return iou(al, BACK_T) > iou(al, FRONT_T) + 0.004

def colour_signature(img):
    """Chroma-weighted a/b colour histogram (Lab) - tells sky blue from turquoise etc."""
    a = np.array(canon(img)); m = a[...,3] > 230
    lab = cv2.cvtColor(a[...,:3], cv2.COLOR_RGB2LAB)[m].astype(np.float32)
    ch = np.hypot(lab[:,1]-128, lab[:,2]-128)
    h, _, _ = np.histogram2d(lab[:,1], lab[:,2], bins=24, range=[[56,200],[56,200]], weights=ch)
    h = cv2.GaussianBlur(h.astype(np.float32), (3,3), 0); return h / max(h.sum(), 1e-6)

def swatch(img):
    a = np.array(canon(img)); reg = a[600:900, 260:560]; reg = reg[reg[...,3] > 230][:,:3]
    lab = cv2.cvtColor(reg[None].astype(np.uint8), cv2.COLOR_RGB2LAB)[0].astype(np.float32)
    chroma = np.hypot(lab[:,1]-128, lab[:,2]-128)
    pick = reg[chroma >= np.percentile(chroma, 60)] if chroma.max() > 12 else reg
    return '#%02x%02x%02x' % tuple(int(v) for v in np.median(pick, axis=0))

def slug(s): return re.sub(r'[^a-z0-9]+', '-', s.strip().lower()).strip('-') or 'x'
def save(im, path, q=78): im.save(path, 'WEBP', quality=q, method=3)

def process_design(ddir, out_root):
    name = os.path.basename(ddir.rstrip('/\\')); did = slug(name)
    od = os.path.join(out_root, did); done = os.path.join(od, '.done')
    files = sorted(glob.glob(os.path.join(ddir, '*.png')) + glob.glob(os.path.join(ddir, '*.PNG')))
    if not files: return None
    if os.path.exists(done): return json.load(open(done))
    os.makedirs(od, exist_ok=True)
    seen, imgs = set(), []
    for f in files:                                   # skip exact duplicate files
        h = hashlib.md5(open(f, 'rb').read()).hexdigest()
        if h in seen: continue
        seen.add(h)
        try: im = Image.open(f).convert('RGBA')
        except Exception as ex:                       # e.g. an empty / corrupted file: skip it, keep the rest
            print('  bad file skipped:', f, ex); continue
        imgs.append((os.path.splitext(os.path.basename(f))[0], im))
    backs  = [(n, im) for n, im in imgs if is_back(im)]
    fronts = [(n, im) for n, im in imgs if not is_back(im)]
    sig = {n: colour_signature(im) for n, im in fronts}
    pairs = []                                        # (back image, its matching front name)
    for bn, bim in backs:
        bs = colour_signature(bim)
        best = None
        if bn.strip().isdigit():                      # numbered pair: front N-1, back N
            prev = str(int(bn.strip()) - 1)
            best = next((n for n, _ in fronts if n.strip() == prev), None)
        if best is None and fronts:
            best = min(fronts, key=lambda f: np.abs(sig[f[0]] - bs).sum())[0]
        pairs.append((bim, best))
    colours = []
    for n, im in fronts:
        cid = slug(n)
        base = os.path.join(od, cid)
        save(fv.place(canon(im)), base + '-front.webp')
        for k, s in fv.make_sleeves(im).items(): save(s, f'{base}-{k}.webp')
        th = canon(im); th.thumbnail((150, 185), Image.LANCZOS); save(th, base + '-thumb.webp', 72)
        own = [b for b, ref in pairs if ref == n]
        if own:
            back, how = canon(own[0]), 'real'
        elif pairs:
            bim, ref = min(pairs, key=lambda p: np.abs(sig[p[1]] - sig[n]).sum())
            refim = dict(fronts)[ref]
            cent, shift = palette_map(refim, im); back, how = apply_map(bim, cent, shift), 'recoloured'
        else:
            back, how = fv.make_back(im), 'built'
        save(fv.place(back), base + '-back.webp')
        colours.append({'id': cid, 'name': n.strip().title() if not n.strip().isdigit() else 'Colour ' + n.strip(),
                        'swatch': swatch(im), 'back': how})
    entry = {'id': did, 'name': name.strip().title(), 'colours': colours}
    json.dump(entry, open(done, 'w'))
    return entry

if __name__ == '__main__':
    src, out = sys.argv[1], sys.argv[2]
    dirs = sorted({os.path.dirname(p) for p in glob.glob(os.path.join(src, '**', '*.[pP][nN][gG]'), recursive=True)},
                  key=lambda d: [int(t) if t.isdigit() else t for t in re.split(r'(\d+)', d)])
    print(len(dirs), 'design folders')
    catalog = []
    for i, d in enumerate(dirs, 1):
        try:
            e = process_design(d, out)
            if e: catalog.append(e); print(f'[{i}/{len(dirs)}] {e["name"]}: {len(e["colours"])} colours, backs: ' + ', '.join(sorted({c["back"] for c in e["colours"]})))
        except Exception as ex:
            print('SKIPPED', d, ex)
        json.dump(catalog, open(os.path.join(out, 'catalog.json'), 'w'), indent=1)
    print('Finished. Catalog:', os.path.join(out, 'catalog.json'))
