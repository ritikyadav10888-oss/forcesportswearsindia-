import { UNIFORMS, UniformProduct } from '../data/uniforms';

export type LiveUniform = UniformProduct & { firestoreId?: string };

function nonEmpty(value?: string | null): string | undefined {
    const trimmed = value?.trim();
    return trimmed ? trimmed : undefined;
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

export function uniformFromFirestore(id: string, data: Record<string, unknown>): LiveUniform {
    return { ...(data as object), id, firestoreId: id } as LiveUniform;
}

/** Match static uniforms only by document id — never by title */
export function findLocalUniform(remote: Pick<UniformProduct, 'id' | 'title' | 'category'>): UniformProduct | undefined {
    if (!remote.id) return undefined;
    return UNIFORMS.find((u) => u.id === remote.id);
}

export function mergeUniformWithLocal(remote: UniformProduct): LiveUniform {
    const local = findLocalUniform(remote);
    const base = local ? { ...local, ...remote } : remote;
    const firestoreId = (remote as LiveUniform).firestoreId || remote.id;

    return {
        ...base,
        id: remote.id || local?.id || '',
        firestoreId,
        title: remote.title || local?.title || base.title,
        description: remote.description || local?.description || '',
        longDescription: remote.longDescription || local?.longDescription,
        image: nonEmpty(remote.image) || local?.image || '',
        imageBack: nonEmpty(remote.imageBack) || local?.imageBack,
        category: remote.category || local?.category || base.category,
        subcategory: remote.subcategory || local?.subcategory,
        features: Array.isArray(remote.features) && remote.features.length ? remote.features : local?.features ?? [],
        specs: { ...(local?.specs ?? {}), ...(remote.specs ?? {}) },
        customization: remote.customization?.length ? remote.customization : local?.customization ?? [],
        gallery: remote.gallery?.length ? remote.gallery : local?.gallery,
        sizeCharts: remote.sizeCharts ?? local?.sizeCharts,
    };
}

export function mergeLiveUniformCatalog(remoteUniforms: UniformProduct[]): LiveUniform[] {
    const sortedRemote = [...remoteUniforms].sort(
        (a, b) => catalogRecencyMs(b as any) - catalogRecencyMs(a as any)
    );

    const fromHq: LiveUniform[] = [];
    const replacedLocalIds = new Set<string>();
    const usedPublicIds = new Set<string>();

    for (const remote of sortedRemote) {
        if (!remote.title && !remote.image && !remote.imageBack) continue;
        const merged = mergeUniformWithLocal(remote);
        const local = findLocalUniform(remote);

        let publicId = merged.firestoreId || merged.id;
        if (local && !usedPublicIds.has(local.id) && remote.id === local.id) {
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

    const rest = UNIFORMS
        .filter((u) => !replacedLocalIds.has(u.id) && !usedPublicIds.has(u.id))
        .map((u) => mergeUniformWithLocal(u));

    return [...fromHq, ...rest];
}

export function findLiveUniform(live: LiveUniform[], id: string): LiveUniform | undefined {
    return live.find((u) => u.id === id || u.firestoreId === id);
}
