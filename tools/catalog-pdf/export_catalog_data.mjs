// Writes tools/catalog-pdf/catalog-data.json for build_catalog_pdf.py from the site's own data files.
// Grouping matches src/views/Catalog/SportsCatalogPage.tsx (catalogSportOf).
// Run from the project root:  node tools/catalog-pdf/export_catalog_data.mjs   (Node 23.6+ runs .ts imports)
import { writeFileSync } from 'node:fs';
import { PRODUCTS } from '../../src/data/products.ts';
import { CATALOG_SPORTS, JERSEY_VERSIONS } from '../../src/data/jerseyVersions.ts';
import { BRAND_DETAILS } from '../../src/data/brandData.ts';

const FIREBASE = 'https://firebasestorage.googleapis.com/v0/b/force-sports-and-wears-i-a38aa.firebasestorage.app/o/';
const imageUrl = (p) => (/^https?:/.test(p) ? p : FIREBASE + encodeURIComponent(p.replace(/^\//, '')) + '?alt=media');
const is3d = (p) => p.category === '3D Innovations' || /3d[- ]?inv/i.test(`${p.id} ${p.productCode} ${p.title}`);
const num = (p) => Number((`${p.title} ${p.productCode} ${p.id}`.match(/(\d+)\D*$/) || [])[1] || 9999);

const sportOf = (p) => {
    if (!['T-Shirts', '3D Innovations'].includes(p.category)) return null;
    if (is3d(p) || !p.sport || p.sport === 'All' || p.sport === 'Other') return 'Multi-sport';
    return CATALOG_SPORTS.includes(p.sport) ? p.sport : null;
};

const groups = Object.fromEntries(CATALOG_SPORTS.map((s) => [s, []]));
const seen = new Set();
for (const p of PRODUCTS) {
    const s = sportOf(p);
    if (!s || seen.has(p.image)) continue;
    seen.add(p.image);
    groups[s].push({ id: p.id, title: p.title, code: p.productCode || '', image: imageUrl(p.image) });
}
groups['Multi-sport'].sort((a, b) => num(a) - num(b));

const c = BRAND_DETAILS.contacts;
writeFileSync(new URL('./catalog-data.json', import.meta.url), JSON.stringify({
    brand: { name: BRAND_DETAILS.navDisplayName, tagline: BRAND_DETAILS.tagline, established: BRAND_DETAILS.established,
        location: BRAND_DETAILS.location, experience: BRAND_DETAILS.experience, logo: imageUrl(BRAND_DETAILS.logo),
        phone: c.phone, whatsapp: c.whatsapp, email: c.email, website: 'www.forcesportsindia.com' },
    versions: JERSEY_VERSIONS,
    sports: CATALOG_SPORTS.map((s) => ({ name: s, designs: groups[s] })),
}, null, 1));
console.log(CATALOG_SPORTS.map((s) => `${s}: ${groups[s].length}`).join(', '));
