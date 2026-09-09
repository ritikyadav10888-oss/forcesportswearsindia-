import { Product, PRODUCTS } from '../data/products';

const SPEC_HIGHLIGHT_KEYS = ['Material', 'Fabric Tech', 'Fabric', 'GSM', 'Fit', 'Usage'] as const;

export type LiveProduct = Product & { firestoreId?: string; updatedAt?: unknown; createdAt?: unknown };

function nonEmpty(value?: string | null): string | undefined {
    const trimmed = value?.trim();
    return trimmed ? trimmed : undefined;
}

export function normalizeProductCode(code?: string | null): string {
    return (code || '').trim().toLowerCase().replace(/^#/, '').replace(/\s+/g, '');
}

export function catalogRecencyMs(item: { updatedAt?: unknown; createdAt?: unknown }): number {
    return timestampMs(item.updatedAt) || timestampMs(item.createdAt);
}

function timestampMs(value: unknown): number {
    if (value == null) return 0;
    if (typeof value === 'number' && Number.isFinite(value)) return value;
    if (typeof value === 'string') {
        const parsed = Date.parse(value);
        return Number.isNaN(parsed) ? 0 : parsed;
    }
    if (typeof value !== 'object') return 0;
    const v = value as { toMillis?: () => number; seconds?: number };
    if (typeof v.toMillis === 'function') return v.toMillis();
    if (typeof v.seconds === 'number') return v.seconds * 1000;
    return 0;
}

/** Map a Firestore doc so the document id always wins over a stored `id` field */
export function productFromFirestore(id: string, data: Record<string, unknown>): LiveProduct {
    return { ...(data as object), id, firestoreId: id } as LiveProduct;
}

/** Match static catalog only by document id or product code — never by title */
export function findLocalProduct(remote: Pick<Product, 'id' | 'productCode' | 'title' | 'category'>): Product | undefined {
    if (remote.id) {
        const byId = PRODUCTS.find((p) => p.id === remote.id);
        if (byId) return byId;
    }

    const code = normalizeProductCode(remote.productCode);
    if (code) {
        return PRODUCTS.find((p) => normalizeProductCode(p.productCode) === code);
    }

    return undefined;
}

/** Normalize arrays and text so UI never breaks on partial Firestore docs */
export function normalizeProduct(product: Product): Product {
    const specs = product.specs && typeof product.specs === 'object' && !Array.isArray(product.specs)
        ? Object.fromEntries(
            Object.entries(product.specs).map(([k, v]) => [k, v == null ? '' : String(v)])
        )
        : {};

    return {
        ...product,
        title: product.title?.trim() || 'Untitled product',
        description: product.description?.trim() || '',
        longDescription: product.longDescription?.trim() || product.description?.trim() || '',
        features: Array.isArray(product.features) ? product.features.map(String).filter(Boolean) : [],
        specs,
        customizationOptions: Array.isArray(product.customizationOptions)
            ? product.customizationOptions.filter(Boolean)
            : undefined,
        fabrics: Array.isArray(product.fabrics) ? product.fabrics.filter(Boolean) : undefined,
        gsms: Array.isArray(product.gsms) ? product.gsms.filter(Boolean) : undefined,
        gallery: Array.isArray(product.gallery) ? product.gallery.filter((url) => typeof url === 'string' && !url.startsWith('blob:')) : undefined,
        image: nonEmpty(product.image) && !product.image.startsWith('blob:') ? product.image : '',
        imageBack: nonEmpty(product.imageBack) && !product.imageBack?.startsWith('blob:') ? product.imageBack : undefined,
    };
}

/** Prefer Firestore overrides but keep rich static catalog fields when admin data is sparse */
export function mergeProductWithLocal(remote: Product): LiveProduct {
    const local = findLocalProduct(remote);
    const base = local ? { ...local, ...remote } : remote;
    const firestoreId = (remote as LiveProduct).firestoreId || remote.id;

    const merged: LiveProduct = {
        ...base,
        id: remote.id || local?.id || '',
        firestoreId,
        title: remote.title || local?.title || base.title,
        description: remote.description || local?.description || '',
        longDescription: remote.longDescription || local?.longDescription || remote.description || local?.description || '',
        image: nonEmpty(remote.image) || local?.image || '',
        imageBack: nonEmpty(remote.imageBack) || local?.imageBack,
        productCode: remote.productCode || local?.productCode,
        brand: remote.brand || local?.brand,
        category: remote.category || local?.category || 'T-Shirts',
        sport: remote.sport || local?.sport,
        usageType: remote.usageType || local?.usageType,
        features:
            remote.features?.length ? remote.features : local?.features ?? [],
        specs: { ...(local?.specs ?? {}), ...(remote.specs ?? {}) },
        sizeCharts: remote.sizeCharts ?? local?.sizeCharts,
        customizationOptions: remote.customizationOptions?.length
            ? remote.customizationOptions
            : local?.customizationOptions,
        gallery: remote.gallery?.length ? remote.gallery : local?.gallery,
        fabrics: remote.fabrics?.length ? remote.fabrics : local?.fabrics,
        gsms: remote.gsms?.length ? remote.gsms : local?.gsms,
        updatedAt: (remote as { updatedAt?: unknown }).updatedAt,
        createdAt: (remote as { createdAt?: unknown }).createdAt,
    };

    return normalizeProduct(merged) as LiveProduct;
}

/**
 * Firestore is the live catalog. Each HQ document is its own card.
 * Recently saved items (updatedAt) appear first. Static leftovers follow.
 */
export function mergeLiveProductCatalog(remoteProducts: Product[]): LiveProduct[] {
    const sortedRemote = [...remoteProducts].sort(
        (a, b) => catalogRecencyMs(b as any) - catalogRecencyMs(a as any)
    );

    const fromHq: LiveProduct[] = [];
    const replacedLocalIds = new Set<string>();
    const usedPublicIds = new Set<string>();

    for (const remote of sortedRemote) {
        if (!remote.title && !remote.image && !remote.imageBack) continue;
        const merged = mergeProductWithLocal(remote);
        const local = findLocalProduct(remote);

        let publicId = merged.firestoreId || merged.id;
        if (local && !usedPublicIds.has(local.id) && (remote.id === local.id || normalizeProductCode(remote.productCode) === normalizeProductCode(local.productCode))) {
            publicId = local.id;
        }
        if (usedPublicIds.has(publicId)) {
            publicId = merged.firestoreId || remote.id;
        }
        if (usedPublicIds.has(publicId)) {
            publicId = `${merged.firestoreId || remote.id}-${fromHq.length}`;
        }

        fromHq.push({ ...merged, id: publicId });
        usedPublicIds.add(publicId);
        if (local && publicId === local.id) replacedLocalIds.add(local.id);
    }

    const rest = PRODUCTS
        .filter((p) => !replacedLocalIds.has(p.id) && !usedPublicIds.has(p.id))
        .map((p) => mergeProductWithLocal(p));

    return [...fromHq, ...rest];
}

export function extractDesignNumber(product: Pick<Product, 'id' | 'title' | 'productCode'>): number {
    const title = product.title || '';
    const code = product.productCode || '';
    const id = product.id || '';
    const fromTitle = title.match(/#\s*(\d+)/) || title.match(/\b(\d+)\s*$/);
    const fromCode = code.match(/(\d+)\s*$/);
    const fromId = id.match(/(\d+)\s*$/);
    const n = Number(fromTitle?.[1] || fromCode?.[1] || fromId?.[1] || NaN);
    return Number.isFinite(n) ? n : Number.MAX_SAFE_INTEGER;
}

export function is3dInnovation(product: Pick<Product, 'id' | 'title' | 'productCode' | 'category'>): boolean {
    if (product.category === '3D Innovations') return true;
    return /3d[- ]?inv/i.test(`${product.id} ${product.productCode} ${product.title}`);
}

export function compare3dInnovations(
    a: Pick<Product, 'id' | 'title' | 'productCode'>,
    b: Pick<Product, 'id' | 'title' | 'productCode'>
): number {
    const series = (p: Pick<Product, 'id' | 'title' | 'productCode'>) => {
        const hay = `${p.id} ${p.title} ${p.productCode}`.toLowerCase();
        if (hay.includes('3d-innov') || hay.includes('design')) return 0;
        if (hay.includes('3d-inv') || hay.includes('kit')) return 1;
        return 2;
    };
    const bySeries = series(a) - series(b);
    if (bySeries) return bySeries;
    const byNumber = extractDesignNumber(a) - extractDesignNumber(b);
    if (byNumber) return byNumber;
    return (a.title || '').localeCompare(b.title || '', undefined, { numeric: true });
}

export function findLiveProduct(live: LiveProduct[], id: string): LiveProduct | undefined {
    return live.find((p) => p.id === id || p.firestoreId === id);
}

export function getSpecHighlights(specs: Record<string, string>, limit = 4): [string, string][] {
    const safeSpecs = specs && typeof specs === 'object' ? specs : {};
    const entries = Object.entries(safeSpecs)
        .map(([k, v]) => [k, String(v ?? '').trim()] as [string, string])
        .filter(([, v]) => v);
    const ordered: [string, string][] = [];

    for (const key of SPEC_HIGHLIGHT_KEYS) {
        const val = String(safeSpecs[key] ?? '').trim();
        if (val) ordered.push([key, val]);
    }
    for (const [k, v] of entries) {
        if (!ordered.some(([ok]) => ok === k)) ordered.push([k, v]);
    }
    return ordered.slice(0, limit);
}
