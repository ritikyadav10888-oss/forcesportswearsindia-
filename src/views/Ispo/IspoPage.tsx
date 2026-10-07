"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Store, MessageCircle, BookOpen, Download, ArrowUpRight } from 'lucide-react';
import { BRAND_DETAILS } from '../../data/brandData';
import { ISPO_EVENT } from '../../data/ispoEvent';
import { PDF_CATALOG_URL } from '../../data/jerseyVersions';

const TBA = 'To be announced';

// Short ISPO announcement on the main site; the full experience is the digital showroom (/ispo/showroom).
export default function IspoPage() {
    const boothLabel = [ISPO_EVENT.hall, ISPO_EVENT.booth && `Booth ${ISPO_EVENT.booth}`].filter(Boolean).join(' · ');
    const eventDetails = [
        { icon: CalendarDays, label: 'Dates', value: ISPO_EVENT.dates || TBA },
        { icon: MapPin, label: 'Venue', value: ISPO_EVENT.venue ? `${ISPO_EVENT.venue}, ${ISPO_EVENT.city}` : ISPO_EVENT.city },
        { icon: Store, label: 'Hall & booth', value: boothLabel || TBA },
    ];
    const whatsappIspo = `${BRAND_DETAILS.contacts.whatsappLink.split('?')[0]}?text=${encodeURIComponent(
        `Hi Force Sports! I'd like to meet your team at ${ISPO_EVENT.name}.`
    )}`;

    return (
        <div className="bg-white">
            <section className="relative bg-slate-900 text-white pt-20 pb-24 px-4 sm:px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#0891b2_0,transparent_45%),radial-gradient(circle_at_80%_80%,#0e7490_0,transparent_40%)]" />
                <div className="relative max-w-4xl mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-[10px] font-black uppercase tracking-[0.25em]"
                    >
                        <Store size={14} /> Exhibiting at {ISPO_EVENT.name}
                    </motion.span>
                    <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95]">
                        Meet Force at <span className="text-cyan-400">ISPO</span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
                        We are bringing our custom teamwear, made in our own Mumbai factory since {BRAND_DETAILS.established}, to {ISPO_EVENT.name}.
                    </p>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                        {eventDetails.map(({ icon: Icon, label, value }) => (
                            <div key={label} className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
                                <Icon className="text-cyan-400 shrink-0" size={20} />
                                <div className="min-w-0">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</p>
                                    <p className="text-sm font-bold text-white truncate">{value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link
                        href="/ispo/showroom"
                        className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-cyan-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-cyan-500 transition"
                    >
                        Enter the digital showroom <ArrowUpRight size={16} />
                    </Link>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 grid sm:grid-cols-3 gap-3">
                <Link href="/catalog/sports" className="rounded-2xl border border-slate-200 px-5 py-4 text-[10px] font-black uppercase tracking-widest text-slate-900 hover:border-cyan-500 hover:text-cyan-600 transition flex items-center gap-2">
                    <BookOpen size={16} /> Sport-wise catalogue
                </Link>
                <a href={PDF_CATALOG_URL} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-slate-200 px-5 py-4 text-[10px] font-black uppercase tracking-widest text-slate-900 hover:border-cyan-500 hover:text-cyan-600 transition flex items-center gap-2">
                    <Download size={16} /> PDF catalogue
                </a>
                <a href={whatsappIspo} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-[#25D366]/10 border border-[#25D366]/25 px-5 py-4 text-[10px] font-black uppercase tracking-widest text-[#128C7E] hover:bg-[#25D366] hover:text-white transition flex items-center gap-2">
                    <MessageCircle size={16} /> Meet us · WhatsApp
                </a>
            </section>
        </div>
    );
}
