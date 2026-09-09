"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Loader2, ArrowRight, Filter, X, Check, Search } from 'lucide-react';
import Link from 'next/link';
import { fabricSlug } from '../../utils/fabricMatching';
import SEO from '../../components/seo/SEO';
import { SEO_KEYWORDS } from '../../data/seoKeywords';
import { SPORTEX_FABRICS } from '../../data/sportexFabrics';
import { getCDNUrl } from '../../utils/cdnUtils';

interface Fabric {
    id: string;
    name: string;
    gsm: string;
    desc: string;
    use: string;
    printing?: string;
    file: string;
}

const staticFabrics: Fabric[] = SPORTEX_FABRICS.map((f, i) => ({
    id: `static-${i}`,
    name: f.name,
    gsm: f.gsm,
    desc: f.desc,
    use: f.use || '',
    printing: f.printing,
    file: `/Sportex Fabrics/${f.file}`,
}));

const GSM_BANDS = [
    { id: 'light', label: 'Lightweight', hint: '≤ 160 GSM' },
    { id: 'medium', label: 'Standard', hint: '161 – 210 GSM' },
    { id: 'heavy', label: 'Heavyweight', hint: '211+ GSM' },
    { id: 'special', label: 'Specialty', hint: 'Mesh / Rib / Blend' },
] as const;

const PRINTING_METHODS = [
    'Sublimation',
    'Screen Print',
    'DTF',
    'Embroidery',
    'Vinyl',
    'Yarn Dyed',
] as const;

function parseGsmMin(gsm: string): number | null {
    const m = gsm.match(/\d+/);
    return m ? parseInt(m[0], 10) : null;
}

function getGsmBand(gsm: string): (typeof GSM_BANDS)[number]['id'] {
    const lower = gsm.toLowerCase();
    if (!/\d/.test(gsm) || lower.includes('mesh') || lower.includes('rib')) return 'special';
    const min = parseGsmMin(gsm);
    if (min === null) return 'special';
    if (min <= 160) return 'light';
    if (min <= 210) return 'medium';
    return 'heavy';
}

function fabricMatchesPrinting(fabric: Fabric, methods: string[]): boolean {
    if (methods.length === 0) return true;
    const p = (fabric.printing || '').toLowerCase();
    return methods.some((m) => p.includes(m.toLowerCase()));
}

const FabricsPage = () => {
    const [fabrics, setFabrics] = useState<Fabric[]>(staticFabrics);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGsmBands, setSelectedGsmBands] = useState<string[]>([]);
    const [selectedPrinting, setSelectedPrinting] = useState<string[]>([]);
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    useEffect(() => {
        setLoading(false);
    }, []);

    const filteredFabrics = useMemo(() => {
        return fabrics.filter((fabric) => {
            const q = searchQuery.trim().toLowerCase();
            const textMatch =
                q === '' ||
                fabric.name.toLowerCase().includes(q) ||
                fabric.gsm.toLowerCase().includes(q) ||
                fabric.desc.toLowerCase().includes(q) ||
                (fabric.use && fabric.use.toLowerCase().includes(q)) ||
                (fabric.printing && fabric.printing.toLowerCase().includes(q));

            const gsmMatch =
                selectedGsmBands.length === 0 || selectedGsmBands.includes(getGsmBand(fabric.gsm));

            const printMatch = fabricMatchesPrinting(fabric, selectedPrinting);

            return textMatch && gsmMatch && printMatch;
        });
    }, [fabrics, searchQuery, selectedGsmBands, selectedPrinting]);

    const toggleGsm = (id: string) => {
        setSelectedGsmBands((prev) =>
            prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
        );
    };

    const togglePrinting = (method: string) => {
        setSelectedPrinting((prev) =>
            prev.includes(method) ? prev.filter((m) => m !== method) : [...prev, method]
        );
    };

    const clearFilters = () => {
        setSearchQuery('');
        setSelectedGsmBands([]);
        setSelectedPrinting([]);
    };

    const hasActiveFilters =
        searchQuery.trim() !== '' || selectedGsmBands.length > 0 || selectedPrinting.length > 0;

    const FilterPanel = () => (
        <div className="space-y-8">
            <div>
                <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Search size={12} className="text-cyan-600" /> Search
                </h4>
                <input
                    type="text"
                    placeholder="Fabric name, GSM, use…"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:ring-2 focus:ring-cyan-500 outline-none text-slate-900 placeholder:text-slate-400"
                />
            </div>

            <div>
                <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest mb-4">GSM weight</h4>
                <div className="space-y-3">
                    {GSM_BANDS.map((band) => (
                        <label key={band.id} className="flex items-start gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={selectedGsmBands.includes(band.id)}
                                onChange={() => toggleGsm(band.id)}
                            />
                            <div
                                className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all ${
                                    selectedGsmBands.includes(band.id)
                                        ? 'bg-cyan-600 border-cyan-600'
                                        : 'bg-white border-slate-300 group-hover:border-cyan-400'
                                }`}
                            >
                                {selectedGsmBands.includes(band.id) && (
                                    <Check size={10} className="text-white" />
                                )}
                            </div>
                            <span>
                                <span
                                    className={`block text-[10px] uppercase font-black tracking-widest transition-colors ${
                                        selectedGsmBands.includes(band.id)
                                            ? 'text-slate-900'
                                            : 'text-slate-500 group-hover:text-slate-800'
                                    }`}
                                >
                                    {band.label}
                                </span>
                                <span className="text-[9px] text-slate-400 font-medium">{band.hint}</span>
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest mb-4">Printing</h4>
                <div className="space-y-3">
                    {PRINTING_METHODS.map((method) => (
                        <label key={method} className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={selectedPrinting.includes(method)}
                                onChange={() => togglePrinting(method)}
                            />
                            <div
                                className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                                    selectedPrinting.includes(method)
                                        ? 'bg-cyan-600 border-cyan-600'
                                        : 'bg-white border-slate-300 group-hover:border-cyan-400'
                                }`}
                            >
                                {selectedPrinting.includes(method) && (
                                    <Check size={10} className="text-white" />
                                )}
                            </div>
                            <span
                                className={`text-[10px] uppercase font-black tracking-widest transition-colors ${
                                    selectedPrinting.includes(method)
                                        ? 'text-slate-900'
                                        : 'text-slate-500 group-hover:text-slate-800'
                                }`}
                            >
                                {method}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {hasActiveFilters && (
                <button
                    type="button"
                    onClick={clearFilters}
                    className="w-full py-3 text-[10px] font-black uppercase tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-100 rounded-xl hover:bg-cyan-100 transition-colors"
                >
                    Clear all filters
                </button>
            )}
        </div>
    );

    if (loading) {
        return (
            <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-cyan-500 animate-spin" />
            </div>
        );
    }

    return (
        <div className="bg-slate-50 min-h-screen pt-20 overflow-x-hidden">
            <SEO
                title="Sportex Fabric Library | All Fabrics with GSM"
                description="Browse Sportex India fabrics with GSM weights for custom sports uniforms."
                keywords={SEO_KEYWORDS.fabrics}
            />

            <section className="bg-slate-900 py-10 md:py-14 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold tracking-[0.2em] uppercase text-xs mb-6">
                        <Layers size={14} /> Sportex India — The Fabric Store
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-4">
                        All <span className="text-cyan-400">Fabrics</span>
                    </h1>
                    <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
                        {fabrics.length} premium Sportex materials — filter by GSM, printing method, or name.
                    </p>
                </div>
            </section>

            <div className="max-w-[1600px] mx-auto px-6 py-8">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
                    {isMobileFiltersOpen && (
                        <div
                            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 lg:hidden"
                            onClick={() => setIsMobileFiltersOpen(false)}
                        />
                    )}

                    <aside
                        className={`
                            fixed inset-y-0 right-0 w-[300px] bg-white z-[60] p-8 shadow-2xl border-l border-slate-100 flex flex-col transition-transform duration-300 ease-in-out
                            ${isMobileFiltersOpen ? 'translate-x-0' : 'translate-x-full'}
                            lg:translate-x-0 lg:sticky lg:top-32 lg:w-72 lg:p-6 lg:shadow-sm lg:rounded-2xl lg:border lg:border-slate-100 lg:h-fit
                        `}
                    >
                        <div className="lg:hidden flex items-center justify-between mb-6">
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                                <Filter size={18} className="text-cyan-600" /> Filters
                            </h3>
                            <button
                                type="button"
                                onClick={() => setIsMobileFiltersOpen(false)}
                                className="p-2 hover:bg-slate-100 rounded-full"
                            >
                                <X size={20} className="text-slate-400" />
                            </button>
                        </div>
                        <h3 className="hidden lg:flex text-[11px] font-black text-slate-400 uppercase tracking-widest mb-6 items-center gap-2">
                            <Filter size={14} className="text-cyan-600" /> Refine fabrics
                        </h3>
                        <div className="flex-1 overflow-y-auto pr-1">
                            <FilterPanel />
                        </div>
                    </aside>

                    <main className="flex-1 min-w-0">
                        <div className="lg:hidden mb-6">
                            <button
                                type="button"
                                onClick={() => setIsMobileFiltersOpen(true)}
                                className="w-full py-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center gap-3 text-slate-900 font-black uppercase tracking-widest text-[11px]"
                            >
                                <Filter size={18} className="text-cyan-600" />
                                Filter fabrics
                                {hasActiveFilters && (
                                    <span className="px-2 py-0.5 rounded-full bg-cyan-600 text-white text-[9px]">
                                        Active
                                    </span>
                                )}
                            </button>
                        </div>

                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">
                            Showing {filteredFabrics.length} of {fabrics.length} fabrics
                        </p>

                        {filteredFabrics.length === 0 ? (
                            <div className="text-center py-20 bg-white rounded-[2rem] border border-dashed border-slate-200">
                                <Layers size={40} className="mx-auto text-slate-200 mb-4" />
                                <p className="text-slate-500 font-black uppercase tracking-widest text-xs mb-4">
                                    No fabrics match these filters
                                </p>
                                <button
                                    type="button"
                                    onClick={clearFilters}
                                    className="text-cyan-600 text-[10px] font-black uppercase tracking-widest hover:underline"
                                >
                                    Clear filters
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                                {filteredFabrics.map((fabric, idx) => (
                                    <motion.article
                                        key={fabric.id}
                                        id={`fabric-${fabricSlug(fabric.name)}`}
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: (idx % 3) * 0.04 }}
                                        viewport={{ once: true }}
                                        className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all scroll-mt-28"
                                    >
                                        <div className="relative aspect-[4/3] overflow-hidden bg-white border-b border-slate-100 p-4 sm:p-6">
                                            <img
                                                src={getCDNUrl(fabric.file)}
                                                alt={fabric.name}
                                                loading="lazy"
                                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute top-3 right-3 z-10">
                                                <span className="inline-block px-2.5 py-1 rounded-full bg-cyan-600 text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                                                    {/\d/.test(fabric.gsm) ? `${fabric.gsm} GSM` : fabric.gsm}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-5 flex flex-col flex-1 bg-white">
                                            <h2 className="text-slate-900 font-black uppercase text-base tracking-tight mb-0.5">
                                                {fabric.name}
                                            </h2>
                                            {fabric.use && (
                                                <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest mb-1">
                                                    {fabric.use}
                                                </p>
                                            )}
                                            {fabric.printing && (
                                                <p className="text-amber-700 text-[9px] font-bold uppercase tracking-widest mb-2">
                                                    {fabric.printing}
                                                </p>
                                            )}
                                            <p className="text-slate-600 text-xs font-medium leading-relaxed mb-4 flex-1">
                                                {fabric.desc}
                                            </p>
                                            <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100 items-center">
                                                <Link
                                                    href={`/products?fabric=${encodeURIComponent(fabric.name)}`}
                                                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-slate-50 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 text-[9px] font-black uppercase tracking-widest text-slate-600 hover:text-cyan-700 transition-all"
                                                >
                                                    Products <ArrowRight size={8} />
                                                </Link>
                                                <Link
                                                    href={`/uniforms?fabric=${encodeURIComponent(fabric.name)}`}
                                                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-slate-50 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 text-[9px] font-black uppercase tracking-widest text-slate-600 hover:text-cyan-700 transition-all"
                                                >
                                                    Uniforms <ArrowRight size={8} />
                                                </Link>
                                                <Link
                                                    href={`/inquiry?fabric=${encodeURIComponent(fabric.name)}`}
                                                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-cyan-600 hover:bg-cyan-700 text-[9px] font-black uppercase tracking-widest text-white transition-all ml-auto"
                                                >
                                                    Inquire <ArrowRight size={8} />
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default FabricsPage;
