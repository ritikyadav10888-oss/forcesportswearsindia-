"use client";

import React, { useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '../../data/products';
import { getCDNUrl } from '../../utils/cdnUtils';
import { getProductSportexFabric } from '../../utils/fabricMatching';
import { SLEEVE_PHOTOS } from '../../data/sleevePhotos';
import DesignStudio from '../design-studio/DesignStudio';

interface ProductCustomizeModalProps {
    product: Product;
    onClose: () => void;
    /** "Back to products" in the studio; defaults to the products page filtered to this product's category. */
    onBack?: () => void;
    /** "Official jersey" / "Fan jersey" from the sport-wise catalogue; shown in the design spec. */
    version?: string;
}

const FIREBASE_PREFIX = 'https://firebasestorage.googleapis.com/v0/b/force-sports-and-wears-i-a38aa.firebasestorage.app/o/';

// Route Firebase photos through /api/garment-image so the studio canvas can draw them (Firebase sends no CORS headers).
const studioImage = (path: string) => {
    const url = getCDNUrl(path);
    return url.startsWith(FIREBASE_PREFIX) ? `/api/garment-image?src=${encodeURIComponent(url)}` : url;
};

const fileName = (path: string) => decodeURIComponent(path.split('/').pop() || '').replace(/\.[a-z0-9]+$/i, '');

// Gallery images named after a colour (peach.png, "L grey.png") are colour variants of the
// front; numbered files (326.png) are other angles and are skipped.
const colourVariants = (product: Product) =>
    (product.gallery || [])
        .filter((g) => g !== product.image && g !== product.imageBack && /[a-z]/i.test(fileName(g)))
        .map((g) => ({ name: fileName(g), front: studioImage(g), ...SLEEVE_PHOTOS[g] }));

// Same slug rule as tools/force-kit/force_catalog.py, which names the catalog folders and files.
const slug = (s: string) => s.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'x';

// "/New folder/ppt 1/peach.png" (or its Firebase URL) -> { design: 'ppt-1', colour: 'peach' }
const catalogRef = (path?: string) => {
    const m = decodeURIComponent(path || '').match(/New folder\/([^/?]+)\/([^/?]+)\.png/i);
    return m ? { design: slug(m[1]), colour: slug(m[2]) } : null;
};

// Settings the studio reads: product name/code/fabric, photos, colour variants and catalog design.
function studioParams(product: Product, version?: string): URLSearchParams {
    const params = new URLSearchParams({
        embed: '1',
        name: product.title,
        front: studioImage(product.image),
    });
    if (product.imageBack) params.set('back', studioImage(product.imageBack));
    const sleeves = SLEEVE_PHOTOS[product.image];
    if (sleeves) {
        params.set('left', sleeves.left);
        params.set('right', sleeves.right);
    }
    const variants = colourVariants(product);
    if (variants.length) params.set('variants', JSON.stringify(variants));
    // Designs in the generated catalog get every colour with front, back and both sleeves.
    const ref = catalogRef(product.image) || catalogRef(product.imageBack);
    if (ref) {
        params.set('design', ref.design);
        params.set('colour', [product.image, product.imageBack].map((p) => catalogRef(p)?.colour).filter(Boolean).join(','));
        const sleeveOverrides = Object.fromEntries(
            Object.entries(SLEEVE_PHOTOS)
                .filter(([p]) => catalogRef(p)?.design === ref.design)
                .map(([p, v]) => [catalogRef(p)!.colour, v])
        );
        if (Object.keys(sleeveOverrides).length) params.set('sleeves', JSON.stringify(sleeveOverrides));
    }
    if (product.productCode) params.set('code', product.productCode);
    const fabric = getProductSportexFabric(
        product.id,
        product.title,
        product.description,
        product.longDescription,
        product.features,
        product.specs
    );
    if (fabric) params.set('fabric', fabric);
    if (version) params.set('version', version);
    return params;
}

/**
 * Full-screen Force Design Studio loaded with this product's photos and colours. Customers add
 * names, numbers, logos and a team roster, then send the design on WhatsApp or as a website enquiry.
 */
export default function ProductCustomizeModal({ product, onClose, onBack, version }: ProductCustomizeModalProps) {
    const router = useRouter();
    const params = useMemo(() => studioParams(product, version), [product, version]);

    useEffect(() => {
        const overflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = overflow;
        };
    }, []);

    const handleBack = () => {
        onClose();
        if (onBack) onBack();
        else router.push(`/products?category=${encodeURIComponent(product.category)}`);
    };

    const handleEnquiry = ({ spec, quantity }: { spec: string; quantity: number }) => {
        const query = new URLSearchParams({ product: version ? `${product.title} (${version})` : product.title, design: spec });
        if (product.productCode) query.set('code', product.productCode);
        if (quantity) query.set('quantity', String(quantity));
        onClose();
        router.push(`/inquiry?${query.toString()}`);
    };

    return (
        <div
            className="fixed inset-0 z-[200] overflow-auto bg-slate-100"
            role="dialog"
            aria-modal="true"
            aria-label={`Customize ${product.title}`}
        >
            <DesignStudio params={params} onClose={onClose} onBack={handleBack} onEnquiry={handleEnquiry} />
        </div>
    );
}
