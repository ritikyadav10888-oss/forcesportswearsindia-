import React from 'react';
import Link from 'next/link';
import { ChevronRight, Layers, Palette, CheckCircle2 } from 'lucide-react';
import { Product } from '../../data/products';
import { fabricSlug } from '../../utils/fabricMatching';
import { getSpecHighlights } from '../../utils/productUtils';

interface ProductCardDetailsProps {
    product: Product;
    sportexFabric: string;
    sportexGsm?: string;
    /** Richer layout for product listing & home cards */
    detailed?: boolean;
}

export default function ProductCardDetails({
    product,
    sportexFabric,
    sportexGsm,
    detailed = false,
}: ProductCardDetailsProps) {
    const specLimit = detailed ? 5 : 3;
    const featureLimit = detailed ? 4 : 3;
    const specHighlights = getSpecHighlights(product.specs, specLimit);
    const features = (product.features || []).slice(0, featureLimit);
    const fabrics = product.fabrics?.filter(Boolean).slice(0, 3) ?? [];
    const gsms = product.gsms?.filter(Boolean).slice(0, 3) ?? [];
    const customization = product.customizationOptions?.filter(Boolean).slice(0, 2) ?? [];

    return (
        <div className="space-y-3">
            <div className="flex flex-wrap gap-1.5">
                <Link
                    href={`/fabrics#fabric-${fabricSlug(sportexFabric)}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 text-brand-400 text-[9px] font-black uppercase tracking-widest hover:bg-brand-600 hover:text-white transition-colors"
                >
                    <Layers size={10} />
                    Sportex {sportexFabric}
                    {sportexGsm && /\d/.test(sportexGsm) ? ` · ${sportexGsm} GSM` : ''}
                    <ChevronRight size={10} />
                </Link>
                {product.imageBack && (
                    <span className="px-2.5 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[9px] font-black uppercase tracking-widest border border-slate-200">
                        Front & back
                    </span>
                )}
                {product.sizeCharts && Object.keys(product.sizeCharts).length > 0 && (
                    <span className="px-2.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-[9px] font-black uppercase tracking-widest border border-brand-100">
                        Size chart
                    </span>
                )}
            </div>

            {detailed && product.longDescription && product.longDescription !== product.description && (
                <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 border-l-2 border-brand-200 pl-3">
                    {product.longDescription}
                </p>
            )}

            {specHighlights.length > 0 && (
                <dl className="grid grid-cols-1 gap-1.5">
                    {specHighlights.map(([key, value]) => (
                        <div
                            key={key}
                            className="flex justify-between gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-100"
                        >
                            <dt className="text-[9px] font-black uppercase tracking-widest text-slate-400 shrink-0">
                                {key}
                            </dt>
                            <dd className="text-[10px] font-bold text-slate-800 uppercase tracking-tight text-right">
                                {value}
                            </dd>
                        </div>
                    ))}
                </dl>
            )}

            {(fabrics.length > 0 || gsms.length > 0) && (
                <div className="space-y-2">
                    {fabrics.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                            {fabrics.map((f) => (
                                <span
                                    key={f}
                                    className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[9px] font-bold text-slate-700 uppercase"
                                >
                                    {f}
                                </span>
                            ))}
                        </div>
                    )}
                    {gsms.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                            {gsms.map((g) => (
                                <span
                                    key={g}
                                    className="px-2 py-0.5 rounded-md bg-brand-50 border border-brand-100 text-[9px] font-bold text-brand-800 uppercase"
                                >
                                    {g} GSM
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {features.length > 0 && (
                <ul className="space-y-1.5">
                    {features.map((feature) => (
                        <li
                            key={feature}
                            className="text-[10px] font-medium text-slate-600 flex items-start gap-1.5"
                        >
                            <CheckCircle2 size={12} className="text-brand-500 shrink-0 mt-0.5" />
                            <span className={detailed ? 'line-clamp-2' : 'line-clamp-1'}>{feature}</span>
                        </li>
                    ))}
                </ul>
            )}

            {customization.length > 0 && (
                <div className="flex flex-wrap gap-1 items-center">
                    <Palette size={10} className="text-brand-600" />
                    {customization.map((opt) => (
                        <span
                            key={opt}
                            className="px-2 py-0.5 rounded-full bg-brand-50 text-[9px] font-bold text-brand-800 uppercase border border-brand-100"
                        >
                            {opt}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}
