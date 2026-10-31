// Builds the ISPO showroom "Sport by sport" images from the original photos.
//   node scripts/build_ispo_sports.cjs "<folder with Badminton/, Cricket/, ..., Set/>"
// Each sport folder holds F1.png (front), B1.png (back), optional S1.png (sleeve) per design.
// Without S1.png the sleeve view is a close-up cut from the front photo (skipped for sleeveless designs).
// Fronts, backs and sets get their grey / white photo background removed (transparent webp); S photos stay as shot.
// Writes public/ispo/sports/<sport>/{f,b,s}<n>.webp and src/data/ispoSports.ts. Re-run after adding photos.
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC = process.argv[2];
if (!SRC || !fs.existsSync(SRC)) { console.error('usage: node scripts/build_ispo_sports.cjs "<photos folder>"'); process.exit(1); }
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'public', 'ispo', 'sports');
const ORDER = ['Cricket', 'Football', 'Badminton', 'Pickleball', 'Volleyball', 'Tennis', 'Basketball', 'Padel Ball', 'Marathon', 'Jackets'];
const LABEL = { 'Padel Ball': 'Padel' };
const SET_PAIRS = [
    { name: 'Aqua Teal', front: 'Aqua Teal FORCE Polo Jersey.png', back: 'Teal Geometric SACHIN 10 Jersey Mockup.png' },
    { name: 'Cyan Waveform', front: 'Cyan Waveform FORCE Jersey Mockup.png', back: 'Messi 10 Black and Cyan Jersey Mockup.png' },
    { name: 'Navy Green', front: 'Navy Green FORCE Jersey Mockup.png', back: 'Neon Splash Navy Athletic Jersey Back.png' },
    { name: 'Purple Geometric', front: 'Purple Geometric FORCE Polo Jersey.png', back: 'Purple Geometric Jersey Back Mockup.png' },
];
// vests: no sleeve to show. true = every design in that sport, or a list of design numbers
const SLEEVELESS = { Basketball: true, Marathon: [4] };
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const webp = (from, to) => sharp(from).resize({ height: 900, withoutEnlargement: true }).webp({ quality: 80 }).toFile(to);

// Background removal. The photos sit on plain grey or white: flood fill from the border through pixels that
// are grey, inside the border's brightness range and close to their neighbour (so gradients and grain are
// followed but white shirt panels are not), then keep the largest remaining piece (the garment).
async function cutout(from) {
    const { data: rgb, info } = await sharp(from).removeAlpha().raw().toBuffer({ resolveWithObject: true });
    const data = await sharp(from).removeAlpha().blur(1.5).raw().toBuffer();   // decide on a smoothed copy
    const { width: w, height: h } = info, n = w * h;
    const lum = (i) => (data[i*3] * 299 + data[i*3+1] * 587 + data[i*3+2] * 114) / 1000;
    const grey = (i) => Math.max(data[i*3], data[i*3+1], data[i*3+2]) - Math.min(data[i*3], data[i*3+1], data[i*3+2]) < 14;
    const diff = (a, b) => Math.max(Math.abs(data[a*3]-data[b*3]), Math.abs(data[a*3+1]-data[b*3+1]), Math.abs(data[a*3+2]-data[b*3+2]));
    const border = [];
    for (let x = 0; x < w; x++) border.push(x, (h-1)*w + x);
    for (let y = 0; y < h; y++) border.push(y*w, y*w + w-1);
    const ls = border.filter(grey).map(lum).sort((a, b) => a - b);
    const p5 = ls[Math.floor(ls.length * 0.05)] ?? 0, p95 = ls[Math.floor(ls.length * 0.95)] ?? 255;
    const lo = p5 - 12, hi = p95 + (p95 > 245 ? 2 : 12);   // white backdrops: tight, so off-white shirts stay
    const bgLike = (i) => grey(i) && lum(i) >= lo && lum(i) <= hi;
    const nb = (i) => { const x = i % w, y = (i / w) | 0; return [x > 0 ? i-1 : -1, x < w-1 ? i+1 : -1, y > 0 ? i-w : -1, y < h-1 ? i+w : -1]; };
    const bg = new Uint8Array(n), q = new Int32Array(n); let qh = 0, qt = 0;
    const push = (i) => { if (!bg[i]) { bg[i] = 1; q[qt++] = i; } };
    for (const i of border) if (bgLike(i)) push(i);
    while (qh < qt) { const i = q[qh++]; for (const j of nb(i)) if (j >= 0 && !bg[j] && diff(i, j) <= 6 && bgLike(j)) push(j); }
    // label what is left, keep the biggest piece (drops grain specks left in the background)
    const lab = new Int32Array(n); let best = 0, bestSize = 0, id = 0;
    for (let s = 0; s < n; s++) {
        if (bg[s] || lab[s]) continue;
        id++; let size = 0; qh = qt = 0; q[qt++] = s; lab[s] = id;
        while (qh < qt) { const i = q[qh++]; size++; for (const j of nb(i)) if (j >= 0 && !bg[j] && !lab[j]) { lab[j] = id; q[qt++] = j; } }
        if (size > bestSize) { bestSize = size; best = id; }
    }
    const alpha = Buffer.alloc(n);
    let L = w, R = 0, T = h, B = 0;
    for (let i = 0; i < n; i++) if (lab[i] === best) {
        alpha[i] = 255; const x = i % w, y = (i / w) | 0;
        if (x < L) L = x; if (x > R) R = x; if (y < T) T = y; if (y > B) B = y;
    }
    const a = await sharp(alpha, { raw: { width: w, height: h, channels: 1 } }).median(5).blur(0.8).extractChannel(0).raw().toBuffer();
    const png = await sharp(rgb, { raw: { width: w, height: h, channels: 3 } }).joinChannel(a, { raw: { width: w, height: h, channels: 1 } }).png().toBuffer();
    return { png, w, h, box: { L, T, W: R - L, H: B - T } };
}
const webpCut = async (from, to) => webp((await cutout(from)).png, to);

// Sleeve close-up from a front photo: the garment's top-left shoulder and sleeve, background removed.
async function sleeveFromFront(from, to) {
    const { png, w, h, box: b } = await cutout(from);
    const left = Math.max(0, b.L - Math.round(b.W * 0.02)), top = Math.max(0, b.T - Math.round(b.H * 0.02));
    const cw = Math.round(b.W * 0.42);
    await sharp(png)
        .extract({ left, top, width: Math.min(cw, w - left), height: Math.min(Math.round(cw * 1.2), h - top) })
        .resize({ height: 900 }).webp({ quality: 80 }).toFile(to);
}

(async () => {
    fs.rmSync(OUT, { recursive: true, force: true });
    const sports = [];
    const folders = fs.readdirSync(SRC).filter((d) => fs.statSync(path.join(SRC, d)).isDirectory() && d !== 'Set')
        .sort((a, b) => (ORDER.indexOf(a) + 1 || 99) - (ORDER.indexOf(b) + 1 || 99) || a.localeCompare(b));
    for (const name of folders) {
        const dir = path.join(SRC, name), id = slug(name), files = fs.readdirSync(dir);
        const nums = [...new Set(files.map((f) => /^F(\d+)\.png$/i.exec(f)?.[1]).filter(Boolean))].map(Number).sort((a, b) => a - b);
        fs.mkdirSync(path.join(OUT, id), { recursive: true });
        const designs = [];
        for (const n of nums) {
            const has = (k) => files.find((f) => f.toUpperCase() === `${k}${n}.PNG`);
            await webpCut(path.join(dir, has('F')), path.join(OUT, id, `f${n}.webp`));
            const d = { n, back: false, sleeve: false };
            if (has('B')) { await webpCut(path.join(dir, has('B')), path.join(OUT, id, `b${n}.webp`)); d.back = true; }
            const sleeveless = SLEEVELESS[name] === true || (SLEEVELESS[name] || []).includes?.(n);
            if (has('S')) { await webp(path.join(dir, has('S')), path.join(OUT, id, `s${n}.webp`)); d.sleeve = true; }
            else if (!sleeveless) { await sleeveFromFront(path.join(dir, has('F')), path.join(OUT, id, `s${n}.webp`)); d.sleeve = true; }
            designs.push(d);
        }
        sports.push({ id, name: LABEL[name] || name, designs });
        console.log(`${name}: ${designs.length} designs`);
    }
    // Set folder: each T-shirt set is a front + back image with its own name (file names below)
    const setDir = path.join(SRC, 'Set');
    if (fs.existsSync(setDir)) {
        fs.mkdirSync(path.join(OUT, 'sets'), { recursive: true });
        const designs = [];
        for (const [i, set] of SET_PAIRS.entries()) {
            const n = i + 1;
            for (const [k, file] of [['f', set.front], ['b', set.back]]) {
                if (!fs.existsSync(path.join(setDir, file))) throw new Error(`Set photo missing: ${file}`);
                await webpCut(path.join(setDir, file), path.join(OUT, 'sets', `${k}${n}.webp`));
            }
            designs.push({ n, back: true, sleeve: false, name: set.name });
        }
        sports.push({ id: 'sets', name: 'Team sets', designs });
        console.log(`Set: ${designs.length} sets`);
    }
    const ts = `// Generated by scripts/build_ispo_sports.cjs - do not edit by hand; re-run the script after adding photos.
// Images: /ispo/sports/<id>/f<n>.webp (front), b<n>.webp (back), s<n>.webp (sleeve).
export type IspoSportDesign = { n: number; back: boolean; sleeve: boolean; name?: string };
export type IspoSport = { id: string; name: string; designs: IspoSportDesign[] };

export const ISPO_SPORTS: IspoSport[] = ${JSON.stringify(sports, null, 4)};
`;
    fs.writeFileSync(path.join(ROOT, 'src', 'data', 'ispoSports.ts'), ts);
    const size = (d) => fs.readdirSync(d, { withFileTypes: true }).reduce((t, e) => t + (e.isDirectory() ? size(path.join(d, e.name)) : fs.statSync(path.join(d, e.name)).size), 0);
    console.log(`done: ${(size(OUT) / 1e6).toFixed(1)} MB in public/ispo/sports`);
})().catch((e) => { console.error(e); process.exit(1); });
