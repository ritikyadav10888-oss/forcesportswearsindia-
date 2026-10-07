"use client";

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { collection, onSnapshot } from 'firebase/firestore';
import { CheckCircle2, Download, Palette, MessageSquare, Shirt, Users } from 'lucide-react';
import { db } from '../../lib/firebase';
import { PRODUCTS, Product } from '../../data/products';
import { getCDNUrl } from '../../utils/cdnUtils';
import {
    mergeLiveProductCatalog, mergeProductWithLocal, productFromFirestore, is3dInnovation, compare3dInnovations,
} from '../../utils/productUtils';
import {
    CATALOG_SPORTS, CatalogSport, JERSEY_VERSIONS, JerseyVersionId, PDF_CATALOG_URL,
} from '../../data/jerseyVersions';
import ProductCustomizeModal from '../../components/products/ProductCustomizeModal';

const JERSEY_CATEGORIES = ['T-Shirts', '3D Innovations'];

// 3D Innovations and general tees (sport "All" / "Other") go under Multi-sport.
export function catalogSportOf(p: Product): CatalogSport | null {
    if (!JERSEY_CATEGORIES.includes(p.category)) return null;
    if (is3dInnovation(p) || !p.sport || p.sport === 'All' || p.sport === 'Other') return 'Multi-sport';
    return (CATALOG_SPORTS as readonly string[]).includes(p.sport) ? (p.sport as CatalogSport) : null;
}

export default function SportsCatalogPage() {
    const [products, setProducts] = useState<Product[]>(() => PRODUCTS.map((p) => mergeProductWithLocal(p)));
    const [sport, setSport] = useState<CatalogSport>('Cricket');
    const [version, setVersion] = useState<JerseyVersionId>('official');
    const [customizing, setCustomizing] = useState<Product | null>(null);

    // Same live catalogue as /products (Force HQ edits first, then the static list).
    useEffect(() => {
        const unsub = onSnapshot(
            collection(db, 'products'),
            (snap) => setProducts(mergeLiveProductCatalog(snap.docs.map((d) => productFromFirestore(d.id, d.data() as Record<string, unknown>)))),
            (err) => console.error('Failed to load live products', err)
        );
        return () => unsub();
    }, []);

    // ?sport=Football&version=fan deep links (QR codes, ISPO page)
    useEffect(() => {
        const q = new URLSearchParams(window.location.search);
        const s = CATALOG_SPORTS.find((x) => x.toLowerCase() === (q.get('sport') || '').toLowerCase());
        if (s) setSport(s);
        if (q.get('version') === 'fan' || q.get('version') === 'official') setVersion(q.get('version') as JerseyVersionId);
    }, []);

    const bySport = useMemo(() => {
        const map = new Map<CatalogSport, Product[]>(CATALOG_SPORTS.map((s) => [s, []]));
        const seen = new Set<string>();
        for (const p of products) {
            const s = catalogSportOf(p);
            if (!s || seen.has(p.image)) continue; // 3D "Kit" and "Design" entries share images
            seen.add(p.image);
            map.get(s)!.push(p);
        }
        map.get('Multi-sport')!.sort((a, b) => (is3dInnovation(a) && is3dInnovation(b) ? compare3dInnovations(a, b) : 0));
        return map;
    }, [products]);

    const designs = bySport.get(sport) || [];
    const info = JERSEY_VERSIONS[version];
    const versionLabel = info.label;

    return (
        <div className="bg-slate-50 min-h-screen">
            <section className="bg-slate-900 text-white pt-16 pb-24 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-400">Sport-wise catalogue</p>
                    <h1 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-tighter">Official &amp; Fan Jerseys</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-sm text-slate-300 leading-relaxed">
                        Every design is made in two versions: an official match kit for your players and a fan jersey for your supporters.
                        Pick a sport, choose the version, then customize it with your colours, names and logos.
                    </p>
                    <a
                        href={PDF_CATALOG_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-2 px-7 py-4 bg-cyan-600 hover:bg-cyan-500 rounded-2xl text-xs font-black uppercase tracking-widest transition"
                    >
                        <Download size={16} /> Download PDF catalogue
                    </a>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-12 pb-20">
                {/* Sport tabs */}
                <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/60 border border-slate-100 p-3 flex gap-2 overflow-x-auto">
                    {CATALOG_SPORTS.map((s) => (
                        <button
                            key={s}
                            type="button"
                            onClick={() => setSport(s)}
                            className={`shrink-0 px-4 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition ${
                                sport === s ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                            }`}
                        >
                            {s} <span className={sport === s ? 'text-cyan-400' : 'text-slate-300'}>{bySport.get(s)?.length || 0}</span>
                        </button>
                    ))}
                </div>

                {/* Version switch + explanation */}
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                    {(Object.keys(JERSEY_VERSIONS) as JerseyVersionId[]).map((id) => {
                        const v = JERSEY_VERSIONS[id];
                        const on = version === id;
                        const Icon = id === 'official' ? Shirt : Users;
                        return (
                            <button
                                key={id}
                                type="button"
                                onClick={() => setVersion(id)}
                                aria-pressed={on}
                                className={`text-left rounded-[1.5rem] border p-5 transition ${
                                    on ? 'bg-white border-cyan-500 ring-4 ring-cyan-500/10' : 'bg-white/60 border-slate-200 hover:border-slate-300'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center ${on ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                                        <Icon size={18} />
                                    </span>
                                    <div>
                                        <p className="text-sm font-black uppercase tracking-tight text-slate-900">{v.label}</p>
                                        <p className="text-xs text-slate-500">{v.tagline}</p>
                                    </div>
                                </div>
                                <ul className="mt-4 space-y-1.5">
                                    {v.points.map((pt) => (
                                        <li key={pt} className="flex gap-2 text-xs text-slate-600">
                                            <CheckCircle2 size={14} className={on ? 'text-cyan-600 shrink-0' : 'text-slate-300 shrink-0'} /> {pt}
                                        </li>
                                    ))}
                                </ul>
                            </button>
                        );
                    })}
                </div>

                {/* Designs */}
                <div className="mt-10 flex items-end justify-between gap-4">
                    <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900">
                        {sport} · <span className="text-cyan-600">{versionLabel}s</span>
                    </h2>
                    <p className="text-xs font-bold text-slate-400">{designs.length} designs</p>
                </div>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {designs.map((p) => (
                        <div key={p.id} className="bg-white rounded-[1.5rem] border border-slate-100 overflow-hidden flex flex-col">
                            <Link href={`/products/${p.id}`} className="relative block aspect-[5/6] bg-slate-50">
                                <img src={getCDNUrl(p.image)} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-contain p-3" />
                                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/85 text-[9px] font-black uppercase tracking-widest text-cyan-300">
                                    {version === 'official' ? 'Official' : 'Fan'}
                                </span>
                            </Link>
                            <div className="p-4 flex flex-col gap-3 flex-grow">
                                <div>
                                    <p className="text-sm font-black uppercase tracking-tight text-slate-900 leading-tight">{p.title}</p>
                                    {p.productCode && <p className="mt-1 text-[10px] font-bold text-slate-400">{p.productCode}</p>}
                                </div>
                                <div className="mt-auto grid grid-cols-2 gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setCustomizing(p)}
                                        className="py-2.5 bg-slate-900 hover:bg-cyan-600 text-white rounded-xl text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-1 transition"
                                    >
                                        <Palette size={12} /> Customize
                                    </button>
                                    <Link
                                        href={`/inquiry?${new URLSearchParams({ product: `${p.title} (${versionLabel})`, ...(p.productCode ? { code: p.productCode } : {}) }).toString()}`}
                                        className="py-2.5 border border-slate-200 hover:border-cyan-500 hover:text-cyan-600 text-slate-900 rounded-xl text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-1 transition"
                                    >
                                        <MessageSquare size={12} /> Enquire
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {!designs.length && <p className="mt-10 text-center text-sm text-slate-400">No designs in this sport yet.</p>}
            </div>

            <AnimatePresence>
                {customizing && (
                    <ProductCustomizeModal
                        product={customizing}
                        version={versionLabel}
                        onClose={() => setCustomizing(null)}
                        onBack={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
