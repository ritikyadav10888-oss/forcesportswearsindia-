"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowUpRight, MessageCircle, Ruler, X } from 'lucide-react';
import { ISPO_SPORTS, type IspoSport, type IspoSportDesign } from '../../data/ispoSports';
import { ISPO_EVENT, ispoWhatsApp } from '../../data/ispoEvent';
import { FIT_GUIDE, TSHIRT_BY_FIT } from '../../data/sizeCharts';

// "Sport by sport" in the ISPO showroom: one card per sport; a card opens that sport full screen with
// version + fit choices and every design (flip front / back / sleeve). Images: scripts/build_ispo_sports.cjs.
const IMG = '/ispo/sports';
// Every design comes in each version and fit, so these describe the enquiry rather than filter the photos.
const VERSIONS = ['Fan', 'Official', 'In-Stadia'] as const;
const FITS = ['Men', 'Women', 'Kids'] as const;
type Fit = (typeof FITS)[number];
type Side = 'f' | 'b' | 's';
const SIDES: { id: Side; label: string; has: (d: IspoSportDesign) => boolean }[] = [
    { id: 'f', label: 'Front', has: () => true },
    { id: 'b', label: 'Back', has: (d) => d.back },
    { id: 's', label: 'Sleeve', has: (d) => d.sleeve },
];

function DesignCard({ sport, sportName, d, fit, onSize }: { sport: string; sportName: string; d: IspoSportDesign; fit: Fit; onSize: () => void }) {
    const [side, setSide] = useState<Side>('f');
    const sides = SIDES.filter((s) => s.has(d));
    const label = SIDES.find((s) => s.id === side)!.label;
    return (
        <figure className="rounded-[1.5rem] bg-white border border-slate-200 overflow-hidden">
            <div className="relative aspect-square bg-white">
                <span className="absolute top-2 left-2 z-10 max-w-[calc(100%-3.5rem)] truncate px-2 py-1 rounded-full bg-slate-900/80 text-white text-[10px] font-black uppercase tracking-wide">
                    {fit} · {TSHIRT_BY_FIT[fit].range}
                </span>
                <button type="button" onClick={onSize} aria-label={`Size and fit, ${fit}`}
                    className="absolute top-1 right-1 z-10 h-11 w-11 rounded-full bg-white/90 border border-slate-200 shadow-sm flex items-center justify-center text-cyan-700 hover:bg-cyan-600 hover:text-white">
                    <Ruler size={18} />
                </button>
                <img src={`${IMG}/${sport}/${side}${d.n}.webp`} alt={`${d.name ?? `${sportName} design ${d.n}`}, ${label.toLowerCase()}`} loading="lazy"
                    className={`w-full h-full ${side === 's' ? 'object-cover' : 'object-contain p-3'}`} />
            </div>
            <figcaption className="px-3 pb-3 pt-1">
                <p className="text-xs font-black uppercase tracking-wide">{d.name ?? `${sportName} #${d.n}`}</p>
                {sides.length > 1 && (
                    <div className="mt-2 grid gap-1.5" style={{ gridTemplateColumns: `repeat(${sides.length}, minmax(0, 1fr))` }}>
                        {sides.map((s) => (
                            <button key={s.id} type="button" onClick={() => setSide(s.id)} aria-pressed={side === s.id}
                                className={`h-10 rounded-lg text-[10px] font-black uppercase tracking-wider transition ${
                                    side === s.id ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                                {s.label}
                            </button>
                        ))}
                    </div>
                )}
            </figcaption>
        </figure>
    );
}

function SizePanel({ fit, onFit, onClose }: { fit: Fit; onFit: (f: Fit) => void; onClose: () => void }) {
    const chart = TSHIRT_BY_FIT[fit];
    const kids = fit === 'Kids';
    return (
        <div role="dialog" aria-modal="true" aria-label="Size chart and fit" className="fixed inset-0 z-[70] bg-slate-900/60 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4" onClick={onClose}>
            <div className="bg-white w-full sm:max-w-lg max-h-[88vh] rounded-t-[2rem] sm:rounded-[2rem] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
                <div className="shrink-0 px-5 py-4 border-b border-slate-100 flex items-center justify-between gap-3">
                    <p className="flex items-center gap-2 text-lg font-black uppercase tracking-tight"><Ruler size={20} className="text-cyan-600" /> Size &amp; fit</p>
                    <button type="button" onClick={onClose} aria-label="Close size chart" className="h-11 w-11 rounded-full border border-slate-200 flex items-center justify-center"><X size={18} /></button>
                </div>
                <div className="overflow-y-auto px-5 py-4 space-y-5">
                    <Choice label="For" options={FITS} value={fit} onChange={onFit} />
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{chart.title} (inches)</p>
                        {chart.rows.length ? (
                            <table className="mt-2 w-full text-sm rounded-xl overflow-hidden border border-slate-200">
                                <thead className="bg-slate-100 text-[11px] uppercase tracking-wider text-slate-700">
                                    <tr><th className="text-left px-3 py-2">{kids ? 'Age' : 'Size'}</th><th className="text-left px-3 py-2">Chest</th>{!kids && <th className="text-left px-3 py-2">Length</th>}</tr>
                                </thead>
                                <tbody>
                                    {chart.rows.map((r, i) => (
                                        <tr key={r.label} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
                                            <td className="px-3 py-2 font-black">{r.label}</td><td className="px-3 py-2">{r.chest}</td>{!kids && <td className="px-3 py-2">{r.length}</td>}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p className="mt-2 rounded-xl bg-slate-50 border border-slate-200 p-3 text-sm text-slate-600">
                                Women&apos;s sizes are made to order. Ask us on WhatsApp and we&apos;ll share the women&apos;s chart.
                            </p>
                        )}
                        <p className="mt-2 text-[11px] text-slate-500">Measurements are approximate, ±0.5 inch.</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Fit</p>
                        <div className="mt-2 grid gap-2">
                            {FIT_GUIDE.map((f) => (
                                <div key={f.name} className="rounded-xl bg-slate-50 border border-slate-100 p-3">
                                    <p className="text-sm font-black">{f.name}</p>
                                    <p className="text-xs text-slate-600 leading-relaxed">{f.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Choice<T extends string>({ label, options, value, onChange }: { label: string; options: readonly T[]; value: T; onChange: (v: T) => void }) {
    return (
        <div role="radiogroup" aria-label={label}>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{label}</p>
            <div className="mt-2 grid gap-2" style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}>
                {options.map((o) => (
                    <button key={o} type="button" role="radio" aria-checked={value === o} onClick={() => onChange(o)}
                        className={`h-11 rounded-xl border-2 text-xs font-black uppercase tracking-wide transition ${
                            value === o ? 'bg-cyan-600 border-cyan-600 text-white' : 'bg-white border-slate-200 text-slate-700 hover:border-cyan-600'}`}>
                        {o}
                    </button>
                ))}
            </div>
        </div>
    );
}

// One sport opened full screen: version + who it is for, then every design. The choices go into the WhatsApp enquiry.
function SportSheet({ sport, onClose }: { sport: IspoSport; onClose: () => void }) {
    const [version, setVersion] = useState<(typeof VERSIONS)[number]>('Fan');
    const [fit, setFit] = useState<Fit>('Men');
    const [sizeOpen, setSizeOpen] = useState(false);
    const sizeOpenRef = useRef(false);
    sizeOpenRef.current = sizeOpen;
    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeRef.current?.focus();
        const onKey = (e: KeyboardEvent) => { if (e.key !== 'Escape') return; if (sizeOpenRef.current) setSizeOpen(false); else onClose(); };
        window.addEventListener('keydown', onKey);
        return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); };
    }, [onClose]);

    const ask = ispoWhatsApp(`Hi Force Sports! I saw your ${ISPO_EVENT.name} showroom. I'm interested in ${sport.name} jerseys: ${version} version, for ${fit}.`);
    return (
        <div role="dialog" aria-modal="true" aria-label={`${sport.name} jerseys`} className="fixed inset-0 z-[60] bg-slate-50 flex flex-col">
            <div className="shrink-0 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-3">
                    <button ref={closeRef} type="button" onClick={onClose} aria-label="Back to all sports"
                        className="h-11 w-11 shrink-0 rounded-full border-2 border-slate-200 flex items-center justify-center hover:border-cyan-600">
                        <ArrowLeft size={18} />
                    </button>
                    <div className="min-w-0">
                        <p className="text-[10px] font-black uppercase tracking-widest text-cyan-600">Sport by sport</p>
                        <h3 className="text-xl font-black uppercase tracking-tight truncate">{sport.name} <span className="text-slate-400">· {sport.designs.length}</span></h3>
                    </div>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto overscroll-contain">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-8">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 rounded-[1.5rem] bg-white border border-slate-200 p-4 sm:p-5">
                        <Choice label="Version" options={VERSIONS} value={version} onChange={setVersion} />
                        <Choice label="For" options={FITS} value={fit} onChange={setFit} />
                    </div>
                    <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                        {sport.designs.map((d) => <DesignCard key={`${sport.id}-${d.n}`} sport={sport.id} sportName={sport.name} d={d} fit={fit} onSize={() => setSizeOpen(true)} />)}
                    </div>
                </div>
            </div>
            <div className="shrink-0 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
                <a href={ask} target="_blank" rel="noopener noreferrer"
                    className="max-w-md mx-auto h-14 rounded-2xl bg-[#25D366] text-slate-950 flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest">
                    <MessageCircle size={18} /> Ask about {sport.name} · {version} · {fit}
                </a>
            </div>
            {sizeOpen && <SizePanel fit={fit} onFit={setFit} onClose={() => setSizeOpen(false)} />}
        </div>
    );
}

export default function IspoSports() {
    const [openId, setOpenId] = useState<string | null>(null);
    const open = ISPO_SPORTS.find((s) => s.id === openId);
    const close = useCallback(() => setOpenId(null), []);
    return (
        <div className="mt-8 lg:mt-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
                {ISPO_SPORTS.map((s) => (
                    <button key={s.id} type="button" onClick={() => setOpenId(s.id)}
                        className="group text-left rounded-[1.5rem] bg-white border border-slate-200 overflow-hidden hover:border-cyan-600 hover:shadow-lg transition">
                        <div className="aspect-square bg-white">
                            <img src={`${IMG}/${s.id}/f1.webp`} alt="" loading="lazy" className="w-full h-full object-contain p-3 group-hover:scale-105 transition duration-500" />
                        </div>
                        <div className="px-3 pb-3 flex items-end justify-between gap-2">
                            <div className="min-w-0">
                                <p className="text-sm font-black uppercase tracking-tight leading-tight">{s.name}</p>
                                <p className="mt-0.5 text-[11px] font-bold text-slate-500">{s.designs.length} {s.id === 'sets' ? 'sets' : 'designs'}</p>
                            </div>
                            <ArrowUpRight size={18} className="shrink-0 text-slate-500 group-hover:text-cyan-600" />
                        </div>
                    </button>
                ))}
            </div>
            {open && <SportSheet sport={open} onClose={close} />}
        </div>
    );
}
