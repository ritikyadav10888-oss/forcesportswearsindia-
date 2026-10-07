import numpy as np, cv2
from PIL import Image
CW, CH = 813, 1000
def canon(img): return img.convert('RGBA').resize((CW, CH), Image.LANCZOS)

def to_lab(rgb): return cv2.cvtColor(rgb.astype(np.uint8), cv2.COLOR_RGB2LAB).astype(np.float32)
def to_rgb(lab): return cv2.cvtColor(np.clip(lab,0,255).astype(np.uint8), cv2.COLOR_LAB2RGB)

def palette_map(ref_front, tgt_front, K=28):
    """Learn how each colour of the reference front maps to the target front (same template, same pixels)."""
    r = np.array(canon(ref_front)); t = np.array(canon(tgt_front))
    m = (r[...,3] > 230) & (t[...,3] > 230)
    # ignore thin edges where tiny misalignment mixes colours
    m &= cv2.erode(m.astype(np.uint8), np.ones((3,3),np.uint8)) > 0
    rl, tl = to_lab(r[...,:3])[m], to_lab(t[...,:3])[m]
    idx = np.random.default_rng(0).choice(len(rl), min(60000, len(rl)), replace=False)
    crit = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 30, 0.5)
    _, lab_, cent = cv2.kmeans(rl[idx], K, None, crit, 2, cv2.KMEANS_PP_CENTERS)
    lab_ = lab_.ravel(); shift = np.zeros_like(cent)
    for k in range(K):
        sel = lab_ == k
        if sel.sum() > 20: shift[k] = np.median(tl[idx][sel] - rl[idx][sel], axis=0)
    return cent, shift

def apply_map(img, cent, shift, sigma=12.0):
    a = np.array(canon(img)); lab = to_lab(a[...,:3]); H, W = lab.shape[:2]
    flat = lab.reshape(-1,3)
    d2 = ((flat[:,None,:] - cent[None,:,:])**2).sum(-1)          # N x K
    near = np.argsort(d2, axis=1)[:, :3]
    dn = np.take_along_axis(d2, near, 1)
    w = np.exp(-(dn - dn[:, :1]) / (2*sigma**2)); w /= w.sum(1, keepdims=True)
    s = (shift[near] * w[...,None]).sum(1)
    # colours that don't appear on the reference front (e.g. a white back panel) stay as they are
    dmin = np.sqrt(dn[:, 0]); conf = np.exp(-np.maximum(0, dmin - 6)**2 / (2*7.0**2))
    chroma = np.sqrt((flat[:,1]-128)**2 + (flat[:,2]-128)**2)
    neutral_far = (chroma < 12) & (dmin > 5)
    conf = np.where(neutral_far, conf*0.15, conf)
    s *= conf[:, None]
    out = to_rgb((flat + s).reshape(H, W, 3))
    return Image.fromarray(np.dstack([out, a[...,3]]), 'RGBA')

def is_back(img, back_tpl_alpha, front_tpl_alpha):
    al = np.array(canon(img))[...,3] > 128
    iou = lambda m: (al & m).sum() / max((al | m).sum(), 1)
    return iou(back_tpl_alpha) > iou(front_tpl_alpha)
