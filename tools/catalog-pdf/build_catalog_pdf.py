"""
Force Sports sport-wise catalogue PDF (Official & Fan jerseys).

1. node tools/catalog-pdf/export_catalog_data.mjs        -> tools/catalog-pdf/catalog-data.json
2. python tools/catalog-pdf/build_catalog_pdf.py          -> public/catalog/force-sports-catalog.pdf
   optional: python build_catalog_pdf.py --edition "ISPO Amsterdam Edition"

Needs: pip install pillow   (product photos are downloaded once and cached in %TEMP%/force-catalog-cache)
"""
import os, sys, json, math, hashlib, argparse, tempfile, urllib.request
from concurrent.futures import ThreadPoolExecutor
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
OUT = os.path.join(ROOT, 'public', 'catalog', 'force-sports-catalog.pdf')
CACHE = os.path.join(tempfile.gettempdir(), 'force-catalog-cache')

W, H, M = 1240, 1754, 70                       # A4 at 150 dpi, page margin
NAVY, CYAN, INK, MUTED, LINE, SOFT = '#0F172A', '#0891B2', '#0F172A', '#64748B', '#E2E8F0', '#F1F5F9'
FONTS = 'C:/Windows/Fonts/' if os.name == 'nt' else '/usr/share/fonts/truetype/'

def font(name, size):
    for f in [name, 'arialbd.ttf', 'DejaVuSans-Bold.ttf']:
        try: return ImageFont.truetype(os.path.join(FONTS, f), size)
        except OSError: pass
    return ImageFont.load_default()

BLACK = lambda s: font('seguibl.ttf', s)
BOLD = lambda s: font('segoeuib.ttf', s)
REG = lambda s: font('segoeui.ttf', s)

def fetch(url):
    os.makedirs(CACHE, exist_ok=True)
    path = os.path.join(CACHE, hashlib.md5(url.encode()).hexdigest() + '.png')
    if not os.path.exists(path):
        try:
            with urllib.request.urlopen(url, timeout=60) as r: data = r.read()
            with open(path, 'wb') as f: f.write(data)
        except Exception as ex:
            print('  image failed:', url[-60:], ex); return None
    try:
        im = Image.open(path).convert('RGBA'); im.thumbnail((700, 800), Image.LANCZOS); return im
    except Exception as ex:
        print('  unreadable image:', url[-60:], ex); return None

def text_w(d, s, f): return d.textbbox((0, 0), s, font=f)[2]

def fit(d, s, f, maxw):
    if text_w(d, s, f) <= maxw: return s
    while s and text_w(d, s + '…', f) > maxw: s = s[:-1]
    return s + '…'

def pill(d, x, y, label, fill, color, f):
    w = text_w(d, label, f) + 24
    d.rounded_rectangle([x, y, x + w, y + 30], radius=15, fill=fill); d.text((x + 12, y + 4), label, font=f, fill=color)
    return x + w + 8

def new_page(bg='white'):
    return Image.new('RGB', (W, H), bg)

def footer(pg, n, brand):
    d = ImageDraw.Draw(pg); f = REG(18)
    d.line([M, H - 70, W - M, H - 70], fill=LINE, width=2)
    d.text((M, H - 55), f"{brand['name']}  ·  {brand['website']}", font=f, fill=MUTED)
    s = str(n); d.text((W - M - text_w(d, s, f), H - 55), s, font=BOLD(18), fill=INK)

def paste_contain(pg, im, box, bg=SOFT, radius=28):
    x0, y0, x1, y1 = box; d = ImageDraw.Draw(pg)
    d.rounded_rectangle(box, radius=radius, fill=bg)
    if im is None:
        d.text((x0 + 20, y0 + 20), 'Image coming soon', font=REG(18), fill=MUTED); return
    pad = 18; bw, bh = x1 - x0 - 2 * pad, y1 - y0 - 2 * pad
    s = min(bw / im.width, bh / im.height); t = im.resize((max(1, int(im.width * s)), max(1, int(im.height * s))), Image.LANCZOS)
    pg.paste(t, (x0 + pad + (bw - t.width) // 2, y0 + pad + (bh - t.height) // 2), t)

def cover(data, logo, edition):
    pg = new_page(NAVY); d = ImageDraw.Draw(pg); b = data['brand']
    d.ellipse([W - 620, -260, W + 300, 660], fill='#0B3B4A'); d.ellipse([-300, H - 520, 520, H + 300], fill='#0C2A3A')
    d.rounded_rectangle([M, M, M + 130, M + 130], radius=34, fill='white')
    if logo: paste_contain(pg, logo, (M, M, M + 130, M + 130), bg='white', radius=34)
    d.text((M + 160, M + 30), b['name'].upper(), font=BLACK(34), fill='white')
    d.text((M + 160, M + 78), b['tagline'], font=REG(24), fill='#94A3B8')
    y = 560
    if edition:
        x = pill(d, M, y, edition.upper(), '#0E4F5C', '#67E8F9', BOLD(20)); y += 60
    d.text((M, y), 'SPORT-WISE', font=BLACK(110), fill='white')
    d.text((M, y + 120), 'CATALOGUE', font=BLACK(110), fill='#22D3EE')
    d.text((M, y + 280), 'Official & Fan Jerseys', font=BOLD(46), fill='white')
    d.text((M, y + 345), 'Every design in two versions, for your players and your supporters.', font=REG(28), fill='#CBD5E1')
    x, yy = M, y + 440
    for s in data['sports']:
        label = f"{s['name'].upper()}  {len(s['designs'])}"; w = text_w(d, label, BOLD(20)) + 30
        if x + w > W - M: x, yy = M, yy + 50
        d.rounded_rectangle([x, yy, x + w, yy + 38], radius=19, outline='#334155', width=2)
        d.text((x + 15, yy + 7), label, font=BOLD(20), fill='white'); x += w + 10
    d.text((M, H - 170), b['website'], font=BLACK(34), fill='white')
    d.text((M, H - 120), f"{b['email']}   ·   WhatsApp {b['whatsapp']}", font=REG(24), fill='#94A3B8')
    return pg

def intro(data, n):
    pg = new_page(); d = ImageDraw.Draw(pg); b = data['brand']; v = data['versions']
    d.text((M, M), 'EVERY DESIGN,', font=BLACK(64), fill=INK); d.text((M, M + 72), 'TWO VERSIONS', font=BLACK(64), fill=CYAN)
    d.text((M, M + 170), 'Choose a design from any sport, then order it as an official match kit, a fan jersey, or both.', font=REG(26), fill=MUTED)
    cw = (W - 2 * M - 30) // 2
    for i, key in enumerate(['official', 'fan']):
        x0 = M + i * (cw + 30); y0 = M + 250; vv = v[key]
        d.rounded_rectangle([x0, y0, x0 + cw, y0 + 470], radius=36, fill=NAVY if key == 'official' else SOFT)
        tc, mc = ('white', '#CBD5E1') if key == 'official' else (INK, MUTED)
        pill(d, x0 + 34, y0 + 34, key.upper(), CYAN, 'white', BOLD(18))
        d.text((x0 + 34, y0 + 90), vv['label'].upper(), font=BLACK(40), fill=tc)
        d.multiline_text((x0 + 34, y0 + 150), wrap(d, vv['tagline'], REG(24), cw - 68), font=REG(24), fill=mc, spacing=6)
        yy = y0 + 240
        for pt in vv['points']:
            d.ellipse([x0 + 34, yy + 8, x0 + 50, yy + 24], fill=CYAN)
            lines = wrap(d, pt, REG(22), cw - 110); d.multiline_text((x0 + 64, yy), lines, font=REG(22), fill=tc, spacing=4)
            yy += 34 * (lines.count('\n') + 1) + 14
    y = M + 800
    d.text((M, y), 'HOW ORDERING WORKS', font=BLACK(34), fill=INK); y += 70
    steps = [('1', 'Pick a design', 'Browse by sport in this catalogue or at ' + b['website'] + '/catalog/sports.'),
             ('2', 'Customize it', 'Add your colours, crest, sponsors, names and numbers with our online Customize studio.'),
             ('3', 'Approve a sample', 'Physical samples in about 5–7 days, with a digital mockup before that.'),
             ('4', 'Bulk production', 'Typically 2–3 weeks after design approval. We ship worldwide with DHL and FedEx.')]
    for k, t, s in steps:
        d.ellipse([M, y, M + 56, y + 56], fill=CYAN); d.text((M + 19, y + 6), k, font=BLACK(32), fill='white')
        d.text((M + 80, y), t.upper(), font=BLACK(26), fill=INK)
        d.multiline_text((M + 80, y + 38), wrap(d, s, REG(22), W - 2 * M - 80), font=REG(22), fill=MUTED, spacing=4); y += 125
    y += 20; d.rounded_rectangle([M, y, W - M, y + 150], radius=32, fill=SOFT)
    facts = [(f"SINCE {b['established']}", f"{b['experience']} in-house"), ('1,000+', 'teams kitted'), ('ALL PRINTS', 'sublimation to embroidery')]
    fw = (W - 2 * M) // 3
    for i, (a, c) in enumerate(facts):
        d.text((M + 40 + i * fw, y + 35), a, font=BLACK(32), fill=CYAN); d.text((M + 40 + i * fw, y + 85), fit(d, c, REG(20), fw - 60), font=REG(20), fill=MUTED)
    footer(pg, n, b); return pg

def wrap(d, s, f, maxw):
    out, line = [], ''
    for word in s.split():
        t = (line + ' ' + word).strip()
        if text_w(d, t, f) <= maxw: line = t
        else: out.append(line); line = word
    out.append(line); return '\n'.join(out)

COLS, CARD_H, GAP = 3, 470, 28
def sport_pages(sport, images, start_n, brand):
    pages, designs = [], sport['designs']
    cw = (W - 2 * M - GAP * (COLS - 1)) // COLS
    i, first = 0, True
    while i < len(designs) or first:
        pg = new_page(); d = ImageDraw.Draw(pg); y = M
        if first:
            d.rounded_rectangle([M, M, W - M, M + 220], radius=40, fill=NAVY)
            d.text((M + 50, M + 40), sport['name'].upper(), font=BLACK(84), fill='white')
            x = pill(d, M + 50, M + 150, f"{len(designs)} DESIGNS", CYAN, 'white', BOLD(18))
            pill(d, x, M + 150, 'OFFICIAL & FAN VERSIONS', '#1E293B', '#67E8F9', BOLD(18))
            y = M + 260
        rows = (H - 100 - y) // (CARD_H + GAP)
        for k in range(rows * COLS):
            if i >= len(designs): break
            p = designs[i]; r, c = divmod(k, COLS)
            x0, y0 = M + c * (cw + GAP), y + r * (CARD_H + GAP)
            paste_contain(pg, images.get(p['image']), (x0, y0, x0 + cw, y0 + 360))
            d.text((x0 + 6, y0 + 374), fit(d, p['title'].upper(), BLACK(22), cw - 12), font=BLACK(22), fill=INK)
            d.text((x0 + 6, y0 + 404), p['code'], font=REG(18), fill=MUTED)
            xx = pill(d, x0 + 6, y0 + 432, 'OFFICIAL', NAVY, 'white', BOLD(14)); pill(d, xx, y0 + 432, 'FAN', '#CFFAFE', '#0E7490', BOLD(14))
            i += 1
        footer(pg, start_n + len(pages), brand); pages.append(pg); first = False
        if not designs: break
    return pages

def contents(data, starts, n):
    pg = new_page(); d = ImageDraw.Draw(pg)
    d.text((M, M), 'CONTENTS', font=BLACK(64), fill=INK); y = M + 130
    for s in data['sports']:
        d.text((M, y), s['name'].upper(), font=BLACK(34), fill=INK)
        d.text((M + 420, y + 8), f"{len(s['designs'])} designs", font=REG(24), fill=MUTED)
        pn = str(starts[s['name']]); d.text((W - M - text_w(d, pn, BLACK(34)), y), pn, font=BLACK(34), fill=CYAN)
        d.line([M, y + 62, W - M, y + 62], fill=LINE, width=2); y += 88
    footer(pg, n, data['brand']); return pg

def back_cover(data):
    pg = new_page(NAVY); d = ImageDraw.Draw(pg); b = data['brand']
    d.text((M, 520), "LET'S MAKE", font=BLACK(96), fill='white'); d.text((M, 630), 'YOUR KIT.', font=BLACK(96), fill='#22D3EE')
    d.text((M, 780), 'Send us the designs you like, your quantities and sizes.', font=REG(30), fill='#CBD5E1')
    d.text((M, 822), 'We reply with pricing, MOQ and delivery time for your country.', font=REG(30), fill='#CBD5E1')
    y = 960
    for label, val in [('WEBSITE', b['website']), ('EMAIL', b['email']), ('WHATSAPP', b['whatsapp']), ('PHONE', b['phone']), ('FACTORY', b['location'])]:
        d.text((M, y), label, font=BOLD(20), fill='#67E8F9'); d.text((M + 220, y - 6), val, font=BOLD(32), fill='white'); y += 70
    return pg

if __name__ == '__main__':
    ap = argparse.ArgumentParser(); ap.add_argument('--edition', default='ISPO Amsterdam Edition'); ap.add_argument('--out', default=OUT)
    args = ap.parse_args()
    data = json.load(open(os.path.join(HERE, 'catalog-data.json'), encoding='utf-8'))
    urls = sorted({p['image'] for s in data['sports'] for p in s['designs']})
    print(f'{len(urls)} product photos (cached in {CACHE})')
    with ThreadPoolExecutor(12) as ex: images = dict(zip(urls, ex.map(fetch, urls)))
    logo = fetch(data['brand']['logo'])
    # page numbers: 1 cover, 2 intro, 3 contents, then sports
    n, starts, body = 4, {}, []
    for s in data['sports']:
        starts[s['name']] = n; ps = sport_pages(s, images, n, data['brand']); body += ps; n += len(ps)
    pages = [cover(data, logo, args.edition), intro(data, 2), contents(data, starts, 3)] + body + [back_cover(data)]
    os.makedirs(os.path.dirname(args.out), exist_ok=True)
    pages[0].save(args.out, 'PDF', save_all=True, append_images=pages[1:], resolution=150, quality=82)
    print(f'{len(pages)} pages -> {args.out} ({os.path.getsize(args.out) / 1e6:.1f} MB)')
