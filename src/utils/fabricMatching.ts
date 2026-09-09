import { PRODUCTS } from '../data/products';
import { UNIFORMS } from '../data/uniforms';
import { SPORTEX_FABRICS, SportexFabric } from '../data/sportexFabrics';

export interface FabricLinkedItem {
    id: string;
    title: string;
    href: string;
    image: string;
    type: 'product' | 'uniform';
}

export interface FabricWithLinks extends SportexFabric {
    products: FabricLinkedItem[];
    uniforms: FabricLinkedItem[];
}

/** Explicit product → Sportex fabric (overrides keyword rules) */
const PRODUCT_FABRIC: Record<string, string> = {
    'force-tn-5111': 'Super Softy',
    'force-tn-5112': 'Super Softy',
    'force-pro-kit': 'Honeycomb',
    'force-aero-tee': 'Taiwan',
    'force-compression-tee': '4 Way Lycra',
    'force-stealth-joggers': 'Tracko',
    'force-flex-shorts': 'NS Lycra',
    'force-travel-polo': 'Golflink',
    'force-coach-tee': 'Dryfit',
    'force-official-shirt': 'Dryfit',
    'force-activity-t20': 'Dryfit',
    'force-activity-practice': 'Dryfit',
    'force-badminton-pro': 'Dryfit',
    'force-football-travel': 'Dryfit',
    'force-volleyball-coach': 'Honeycomb',
    'force-kabaddi-official': 'Maxplus',
    'force-element-jacket': 'Super Poly',
};

/** Explicit uniform → Sportex fabric */
const UNIFORM_FABRIC: Record<string, string> = {
    'uni-sch-polo': 'Golflink',
    'uni-sch-raglan': 'Nirmalknit',
    'uni-sch-house': 'Dryfit',
    'uni-sch-event': 'Nirmalknit',
    'uni-sch-trackpant': 'Super Poly',
    'uni-sch-shorts': 'Twill',
    'uni-sch-cap': 'Twill',
    'uni-corp-polo': 'Golflink',
    'uni-corp-tshirt': 'Nirmalknit',
    'uni-corp-polo-perf': 'Dotknit',
    'uni-corp-crew-tee': 'Cocktail',
    'uni-corp-trackpant': 'NS Lycra',
    'uni-corp-shorts': 'Twill',
    'uni-corp-cap': 'Twill',
    'uni-ff-service-tshirt': 'Dryfit',
    'uni-ff-cap': 'Mesh',
    'uni-ind-workwear': 'Super Poly',
    'uni-ind-cargo': 'Twill',
    'uni-ind-safecap': 'Mesh',
    'uni-qds-rider-jersey': 'Dryfit',
    'uni-qds-safecap': 'Mesh',
};

/** Keyword rules — first matching fabric wins (order = specificity) */
const FABRIC_RULES: { fabric: string; patterns: RegExp[] }[] = [
    { fabric: 'Honeycomb', patterns: [/honeycomb/i, /honey comb/i] },
    { fabric: 'Super Softy', patterns: [/softy/i, /super soft/i, /interlock knit \/ softy/i] },
    { fabric: '4 Way Lycra', patterns: [/4[- ]?way/i, /compression/i, /\d+%\s*spandex/i, /nylon.*spandex/i] },
    { fabric: 'NS Lycra', patterns: [/ns lycra/i] },
    { fabric: 'Super Poly', patterns: [/super poly/i] },
    { fabric: 'Tracko', patterns: [/trackpant/i, /track pant/i, /jogger/i] },
    { fabric: 'Twill', patterns: [/twill/i, /drill/i, /heavy-duty twill/i, /poly-twill/i] },
    { fabric: 'Mesh', patterns: [/mesh/i, /aero-mesh/i] },
    { fabric: 'Golflink', patterns: [/golflink/i, /mercerized pique/i, /micro-pique/i, /pique cotton/i] },
    { fabric: 'Jacquard', patterns: [/jacquard/i] },
    { fabric: 'Dotknit', patterns: [/dotknit/i, /dot knit/i] },
    { fabric: 'Nirmalknit', patterns: [/nirmal/i, /combed cotton/i, /bio-wash/i, /raglan/i, /pique/i] },
    { fabric: 'Silkysofty', patterns: [/silky/i, /140\s*gsm/i, /featherlight\s*120/i] },
    { fabric: 'Monopoly', patterns: [/monopoly/i] },
    { fabric: 'Cocktail', patterns: [/cocktail/i, /luxury combed/i] },
    { fabric: 'Bricks', patterns: [/brick/i] },
    { fabric: 'Maxplus', patterns: [/maxplus/i, /max plus/i] },
    { fabric: 'Superplus', patterns: [/superplus/i, /super plus/i] },
    { fabric: 'Spaun Matty', patterns: [/matty/i, /spun matty/i] },
    { fabric: 'Taiwan', patterns: [/taiwan/i, /recycled poly.*elastane/i] },
    { fabric: 'Dryfit', patterns: [/dryfit/i, /dry-fit/i, /dry fit/i, /160\s*gsm/i, /moisture-wicking/i, /performance polyester/i] },
    { fabric: 'Polyester', patterns: [/polyester/i, /performance poly/i, /micro polyester/i] },
    { fabric: 'RIB', patterns: [/rib knit/i, /\brib\b/i, /collar.*trim/i] },
];

function itemText(
    title: string,
    description: string,
    features: string[],
    specs: Record<string, string>
): string {
    const featureList = Array.isArray(features) ? features.map(String) : [];
    const specValues = specs && typeof specs === 'object'
        ? Object.values(specs).map((v) => String(v ?? ''))
        : [];
    return [title || '', description || '', ...featureList, ...specValues].join(' ').toLowerCase();
}

function matchFabricFromText(text: string): string | null {
    for (const rule of FABRIC_RULES) {
        if (rule.patterns.some((p) => p.test(text))) {
            return rule.fabric;
        }
    }
    return null;
}

export function fabricSlug(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
}

export function getProductSportexFabric(
    id: string,
    title: string,
    description: string,
    longDescription: string,
    features: string[],
    specs: Record<string, string>
): string {
    return resolveProductFabric(
        id,
        itemText(title, description + ' ' + longDescription, features, specs)
    );
}

export function getUniformSportexFabric(
    id: string,
    title: string,
    description: string,
    longDescription: string | undefined,
    features: string[],
    specs: Record<string, string>
): string {
    return resolveUniformFabric(
        id,
        itemText(title, description + ' ' + (longDescription ?? ''), features, specs)
    );
}

function resolveProductFabric(id: string, text: string): string {
    if (id && PRODUCT_FABRIC[id]) return PRODUCT_FABRIC[id];
    if (id?.startsWith('force-elite-')) return 'Dryfit';
    if (id?.includes('mesh-cap') || id?.includes('pro-mesh')) return 'Mesh';
    return matchFabricFromText(text) ?? 'Polyester';
}

function resolveUniformFabric(id: string, text: string): string {
    if (UNIFORM_FABRIC[id]) return UNIFORM_FABRIC[id];
    return matchFabricFromText(text) ?? 'Polyester';
}

function buildLinkMap(): Map<string, { products: FabricLinkedItem[]; uniforms: FabricLinkedItem[] }> {
    const map = new Map<string, { products: FabricLinkedItem[]; uniforms: FabricLinkedItem[] }>();
    for (const f of SPORTEX_FABRICS) {
        map.set(f.name, { products: [], uniforms: [] });
    }

    for (const p of PRODUCTS) {
        const fabric = resolveProductFabric(
            p.id,
            itemText(p.title, p.description + ' ' + p.longDescription, p.features, p.specs)
        );
        map.get(fabric)?.products.push({
            id: p.id,
            title: p.title,
            href: `/products/${p.id}`,
            image: p.image,
            type: 'product',
        });
    }

    for (const u of UNIFORMS) {
        const fabric = resolveUniformFabric(
            u.id,
            itemText(u.title, u.description + ' ' + (u.longDescription ?? ''), u.features, u.specs)
        );
        map.get(fabric)?.uniforms.push({
            id: u.id,
            title: u.title,
            href: `/uniforms/${u.id}`,
            image: u.image,
            type: 'uniform',
        });
    }

    return map;
}

let cached: FabricWithLinks[] | null = null;

export function getFabricsWithLinks(): FabricWithLinks[] {
    if (cached) return cached;
    const linkMap = buildLinkMap();
    cached = SPORTEX_FABRICS.map((fabric) => {
        const links = linkMap.get(fabric.name) ?? { products: [], uniforms: [] };
        return { ...fabric, products: links.products, uniforms: links.uniforms };
    });
    return cached;
}
