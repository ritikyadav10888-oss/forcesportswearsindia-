"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowDown, ArrowUpRight, CalendarDays, MapPin, Store, MessageCircle, Mail, Download, Palette,
    PenTool, Scissors, Factory, Truck, Layers, Hand, Sparkles, PackageCheck, UserPlus, Send, Globe,
} from 'lucide-react';
import { BRAND_DETAILS } from '../../data/brandData';
import { ISPO_EVENT, ispoWhatsApp } from '../../data/ispoEvent';
import { PDF_CATALOG_URL } from '../../data/jerseyVersions';
import { getCDNUrl } from '../../utils/cdnUtils';
import IspoSports from './IspoSports';
import IspoLeadForm from './IspoLeadForm';

type CatalogColour = { id: string; name: string; swatch: string };
type CatalogDesign = { id: string; name: string; colours: CatalogColour[] };
type View = 'front' | 'back' | 'left' | 'right';

const MAIN_SITE = 'https://www.forcesportsindia.com';
// vCard from src/app/ispo/contact.vcf; proxy.ts lets file paths through on the ispo host too
const SAVE_CONTACT = '/ispo/contact.vcf';
const CATALOG = '/design-studio/catalog';
const HERO_IMAGE = '/ispo/hero-india-2.webp';
const VIEWS: { id: View; label: string }[] = [
    { id: 'front', label: 'Front' }, { id: 'back', label: 'Back' }, { id: 'left', label: 'Left sleeve' }, { id: 'right', label: 'Right sleeve' },
];
const TBA = 'To be announced';
const SECTIONS = [
    ['collection', 'Collection'], ['sports', 'Sports'], ['process', 'How we work'], ['visit', 'Visit us'], ['details', 'Leave details'],
] as const;

const STATS = [
    { value: String(BRAND_DETAILS.established), label: 'Making sportswear since' },
    { value: '18+', label: 'Years of in-house manufacturing' },
    { value: '1M+', label: 'Teams kitted' },
    { value: '20+', label: 'Sports we make kits for' },
];

const PROCESS = [
    { icon: PenTool, title: 'Design', text: 'Our in-house team turns your idea, sketch or brand guide into a digital mockup.' },
    { icon: Scissors, title: 'Sample', text: 'A physical sample in about 5–7 days, so you can feel the fabric and check the fit.' },
    { icon: Factory, title: 'Production', text: 'Bulk production in our Mumbai factory, typically 2–3 weeks after approval.' },
    { icon: Truck, title: 'Worldwide delivery', text: 'Shipped with trusted courier partners such as DHL and FedEx.' },
];

const STAND = [
    { icon: Hand, title: 'Touch the fabrics', text: 'Performance polyester, dry-fit meshes, 4-way lycra and jacquards.' },
    { icon: Palette, title: 'Design your kit live', text: 'Your colours, crest, names and numbers on our Customize studio, in minutes.' },
    { icon: Layers, title: 'See every print method', text: 'Sublimation, screen printing, DTF and embroidery side by side.' },
    { icon: PackageCheck, title: 'Talk terms', text: 'MOQ, lead times and shipping options for your country.' },
];

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6 },
};

// hero animates on load (not on scroll) so it is visible straight away
const heroIn = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };

const displayColour = (c: CatalogColour, i: number) => (/^colour \d+$/i.test(c.name) ? `Colourway ${i + 1}` : c.name);
const designNumber = (id: string) => id.replace(/\D+/g, '');

export default function ShowroomPage() {
    const [designs, setDesigns] = useState<CatalogDesign[]>([]);
    const [designIdx, setDesignIdx] = useState(0);
    const [colourIdx, setColourIdx] = useState(0);
    const [view, setView] = useState<View>('front');
    // on ispo.forcesportsindia.com, links to other pages go to the main site
    const [base, setBase] = useState('');
    useEffect(() => {
        if (window.location.hostname.startsWith('ispo.')) setBase(MAIN_SITE);
        fetch(`${CATALOG}/catalog.json`)
            .then((r) => (r.ok ? r.json() : []))
            .then((list: CatalogDesign[]) => setDesigns(list.filter((d) => d.colours.length)))
            .catch(() => setDesigns([]));
    }, []);

    const design = designs[designIdx];
    const colour = design?.colours[colourIdx];
    const viewSrc = design && colour ? `${CATALOG}/${design.id}/${colour.id}-${view}.webp` : '';
    const link = (path: string) => base + path;
    const whatsapp = ispoWhatsApp(`Hi Force Sports! I saw your ${ISPO_EVENT.name} showroom and would like to talk.`);
    const boothLabel = [ISPO_EVENT.hall && `Hall ${ISPO_EVENT.hall}`, ISPO_EVENT.booth && `Booth ${ISPO_EVENT.booth}`].filter(Boolean).join(' · ');
    const eventDetails = [
        { icon: CalendarDays, label: 'Dates', value: ISPO_EVENT.dates || TBA },
        { icon: MapPin, label: 'Venue', value: ISPO_EVENT.venue ? `${ISPO_EVENT.venue}, ${ISPO_EVENT.city}` : ISPO_EVENT.city },
        { icon: Store, label: 'Hall & booth', value: boothLabel || TBA },
    ];

    const pickDesign = (i: number) => {
        setDesignIdx(i);
        setColourIdx(0);
    };

    return (
        <div className="bg-white text-slate-900 min-h-screen selection:bg-cyan-100 pb-20 md:pb-0">
            {/* Top bar */}
            <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[4.5rem] flex items-center justify-between gap-3">
                    <a href="#collection" className="flex items-center gap-2.5 min-w-0">
                        <span className="h-11 w-11 shrink-0 rounded-[1rem] bg-white p-1 flex items-center justify-center">
                            <img src={getCDNUrl(BRAND_DETAILS.logo)} alt={BRAND_DETAILS.logoAlt} className="logo-mark w-full h-full object-contain" />
                        </span>
                        <span className="min-w-0 leading-tight">
                            <span className="block font-bodoni text-[12.5px] sm:text-base font-black uppercase text-slate-900 whitespace-nowrap">{BRAND_DETAILS.navDisplayName}</span>
                            <span className="block text-[11px] sm:text-xs font-black uppercase tracking-widest text-cyan-700">× {ISPO_EVENT.name}</span>
                        </span>
                    </a>
                    <nav className="hidden xl:flex items-center gap-1">
                        {SECTIONS.map(([id, name]) => (
                            <a key={id} href={`#${id}`} className={`px-3.5 py-2 rounded-full whitespace-nowrap text-xs font-black uppercase tracking-wider transition-colors ${
                                id === 'details' ? 'bg-cyan-600 text-white hover:bg-cyan-700' : 'text-slate-900 hover:bg-cyan-50 hover:text-cyan-700'
                            }`}>{name}</a>
                        ))}
                    </nav>
                    <a
                        href={link('/')}
                        aria-label="Main website"
                        className="shrink-0 p-3 sm:px-4 xl:py-2 rounded-full bg-slate-900 text-[11px] font-black uppercase tracking-widest text-white hover:bg-cyan-600 transition-colors"
                    >
                        <Globe size={18} className="sm:hidden" /><span className="hidden sm:inline">Main website</span>
                    </a>
                </div>
                {/* phones: one row of four ("Leave details" is in the bottom bar); tablets: all five */}
                <nav aria-label="Showroom sections" className="xl:hidden grid grid-cols-4 md:grid-cols-5 gap-1.5 px-3 sm:px-4 pb-2.5 max-w-2xl mx-auto">
                    {SECTIONS.map(([id, name]) => (
                        <a key={id} href={`#${id}`} className={`flex items-center justify-center text-center h-9 px-1 rounded-full border text-[11px] sm:text-xs font-black uppercase leading-tight transition ${
                            id === 'details'
                                ? 'hidden md:flex border-cyan-600 bg-cyan-600 text-white'
                                : 'border-slate-200 bg-white text-slate-700 active:bg-cyan-600 active:border-cyan-600 active:text-white'
                        }`}>
                            {name}
                        </a>
                    ))}
                </nav>
            </header>

            {/* Collection viewer */}
            <section id="collection" className="max-w-7xl mx-auto px-4 sm:px-6 pt-36 xl:pt-32 pb-16 scroll-mt-32 xl:scroll-mt-20">
                <motion.div {...fadeUp} className="max-w-2xl">
                    <p className="text-[11px] font-black uppercase tracking-[0.3em] text-cyan-600">The collection</p>
                    <h2 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-tighter">3D Innovations</h2>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                        {designs.length || 31} sublimated designs, each in up to 12 colourways. Pick a design, change the colour and turn it
                        around: front, back and both sleeves.
                    </p>
                </motion.div>

                <div className="mt-6 lg:mt-8 grid lg:grid-cols-[1fr_380px] gap-8">
                    {/* fixed height + full width: aspect-ratio with max-height shrank the box to half width from 640px up */}
                    <div className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-b from-slate-50 to-slate-100 border border-slate-200 h-[min(68vh,620px)] min-h-[440px] lg:h-[66vh] lg:min-h-[520px] flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-[15%] rounded-full bg-cyan-500/10 blur-3xl" />
                        {viewSrc ? (
                            <motion.img
                                key={viewSrc}
                                initial={{ opacity: 0, scale: 0.97 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.35 }}
                                src={viewSrc}
                                alt={`Design ${designNumber(design!.id)} in ${colour!.name}, ${view}`}
                                className="relative w-full h-full object-contain p-4 pb-40 sm:p-6 sm:pb-40"
                            />
                        ) : (
                            <p className="text-sm text-slate-600">Loading the collection…</p>
                        )}
                        {/* controls inside the image: colours, then front/back/sleeves */}
                        <div className="absolute bottom-3 inset-x-3 sm:bottom-5 sm:inset-x-5 flex flex-col gap-2.5">
                            {design && colour && (
                                <div className="rounded-2xl bg-white/85 backdrop-blur-sm border border-slate-200 px-3 py-2">
                                    <p className="text-center text-[11px] font-black uppercase tracking-widest text-slate-600">
                                        Colour · <span className="text-cyan-600">{displayColour(colour, colourIdx)}</span>
                                    </p>
                                    <div className="mt-1.5 flex md:flex-wrap md:justify-center gap-2 overflow-x-auto p-1 snap-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                                        {design.colours.map((c, i) => (
                                            <button
                                                key={c.id}
                                                type="button"
                                                onClick={() => setColourIdx(i)}
                                                title={displayColour(c, i)}
                                                aria-label={displayColour(c, i)}
                                                aria-pressed={i === colourIdx}
                                                className={`shrink-0 snap-start w-9 h-9 rounded-full border-2 border-white transition ${
                                                    i === colourIdx ? 'ring-2 ring-cyan-600' : 'ring-1 ring-slate-300 hover:ring-slate-400'
                                                }`}
                                                style={{ background: c.swatch }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div className="grid grid-cols-4 sm:flex sm:flex-wrap sm:justify-center gap-1.5 sm:gap-2">
                                {VIEWS.map((v) => (
                                    <button
                                        key={v.id}
                                        type="button"
                                        onClick={() => setView(v.id)}
                                        aria-label={v.label}
                                        className={`min-h-11 px-2 sm:px-4 py-2 rounded-full border text-[11px] font-black uppercase tracking-wider sm:tracking-widest transition ${
                                            view === v.id ? 'bg-cyan-600 border-cyan-600 text-white shadow-sm' : 'bg-white text-slate-700 border-slate-200 hover:border-cyan-600'
                                        }`}
                                    >
                                        <span className="sm:hidden">{v.label.replace(' sleeve', '')}</span>
                                        <span className="hidden sm:inline">{v.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="min-w-0 flex flex-col gap-4 lg:gap-6">
                        <div className="rounded-[2rem] bg-white border border-slate-200 shadow-sm p-4">
                            <p className="px-2 text-[11px] font-black uppercase tracking-widest text-slate-600">All designs <span className="lg:hidden normal-case tracking-normal font-bold">· swipe →</span></p>
                            <div className="mt-3 flex lg:grid lg:grid-cols-4 gap-2 overflow-x-auto lg:overflow-x-visible lg:max-h-[300px] lg:overflow-y-auto pr-1 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                                {designs.map((d, i) => (
                                    <button
                                        key={d.id}
                                        type="button"
                                        onClick={() => pickDesign(i)}
                                        aria-pressed={i === designIdx}
                                        title={`3D Innovation #${designNumber(d.id)}`}
                                        className={`shrink-0 w-20 lg:w-auto snap-start rounded-xl p-1 bg-slate-50 border-2 lg:border transition ${i === designIdx ? 'border-cyan-600' : 'border-transparent hover:border-slate-300'}`}
                                    >
                                        <img src={`${CATALOG}/${d.id}/${d.colours[0].id}-thumb.webp`} alt="" loading="lazy" className="w-full aspect-[5/6] object-contain" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro: the India sports poster sits behind the right half (below the text on small screens) */}
            <section id="top" className="relative bg-white text-slate-900 flex items-center px-4 sm:px-6 py-12 lg:py-24 lg:min-h-[85vh] border-t border-slate-100 overflow-hidden">
                <motion.img
                    {...heroIn}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    src={HERO_IMAGE}
                    alt=""
                    aria-hidden="true"
                    className="hidden lg:block absolute inset-y-0 right-0 w-[58%] h-full object-contain object-right pointer-events-none"
                />
                <div className="hidden lg:block absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />
                <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <motion.p {...heroIn} className="text-[11px] font-black uppercase tracking-[0.3em] text-cyan-600">
                            Digital showroom · {ISPO_EVENT.name}
                        </motion.p>
                        <motion.h1 {...heroIn} transition={{ duration: 0.6, delay: 0.05 }} className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                            Teamwear,<br />made in <span className="text-[#F15A24]">Mumbai</span>.<br />Worn worldwide.
                        </motion.h1>
                        <motion.p {...heroIn} transition={{ duration: 0.6, delay: 0.1 }} className="mt-8 max-w-xl text-slate-600 leading-relaxed">
                            Step inside {BRAND_DETAILS.navDisplayName}: our collections, the colours, the factory behind them and what we
                            are bringing to {ISPO_EVENT.name}.
                        </motion.p>
                        <div className="mt-10 grid sm:grid-cols-3 gap-3 max-w-2xl">
                            {eventDetails.map(({ icon: Icon, label, value }) => (
                                <div key={label} className="rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm px-4 py-3">
                                    <Icon size={16} className="text-cyan-600" />
                                    <p className="mt-2 text-[11px] font-black uppercase tracking-widest text-slate-600">{label}</p>
                                    <p className="text-sm font-bold">{value}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 flex flex-wrap items-center gap-6">
                            <a href={SAVE_CONTACT} className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-cyan-600 text-white text-xs font-black uppercase tracking-widest hover:bg-slate-900 transition">
                                <UserPlus size={16} /> Save our contact
                            </a>
                            <a href="#sports" className="inline-flex items-center gap-2 py-3 text-[11px] font-black uppercase tracking-widest text-cyan-600 hover:text-slate-900">
                                Shop by sport <ArrowDown size={14} className="animate-bounce" />
                            </a>
                        </div>
                    </div>
                    <img src={HERO_IMAGE} alt="Map of India made of sportswear fabrics, with the Force Sports logo" className="lg:hidden w-full max-w-md mx-auto" />
                </div>
            </section>

            {/* Story in numbers */}
            <section className="bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {STATS.map((s) => (
                        <motion.div key={s.label} {...fadeUp}>
                            <p className="text-4xl md:text-5xl font-black tracking-tighter text-cyan-600">{s.value}</p>
                            <p className="mt-2 text-[11px] font-black uppercase tracking-widest text-slate-600">{s.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Sports */}
            <section id="sports" className="bg-slate-50 border-y border-slate-100 scroll-mt-32 xl:scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-24">
                    <motion.div {...fadeUp} className="max-w-2xl">
                        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-cyan-600">Sport by sport</p>
                        <h2 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-tighter">Official &amp; fan jerseys</h2>
                        <p className="mt-4 text-slate-600 leading-relaxed">
                            Tap a sport to see every design, then choose Fan, Official or In-Stadia, for men, women or kids.
                        </p>
                    </motion.div>
                    <IspoSports />
                </div>
            </section>

            {/* Process */}
            <section id="process" className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-24 scroll-mt-32 xl:scroll-mt-20">
                <motion.div {...fadeUp} className="max-w-2xl">
                    <p className="text-[11px] font-black uppercase tracking-[0.3em] text-cyan-600">How we work</p>
                    <h2 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-tighter">From idea to your door</h2>
                </motion.div>
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {PROCESS.map(({ icon: Icon, title, text }, i) => (
                        <motion.div key={title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="relative rounded-[2rem] bg-white border border-slate-200 shadow-sm p-6">
                            <span className="absolute top-5 right-6 text-5xl font-black text-slate-100">0{i + 1}</span>
                            <span className="w-11 h-11 rounded-2xl bg-cyan-600 text-white flex items-center justify-center"><Icon size={20} /></span>
                            <h3 className="mt-5 text-lg font-black uppercase tracking-tight">{title}</h3>
                            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* The stand */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14 lg:pb-24">
                <div className="rounded-[2.5rem] bg-gradient-to-br from-cyan-600 to-cyan-800 text-white p-8 md:p-14">
                    <motion.div {...fadeUp} className="max-w-2xl">
                        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-cyan-100">At our stand</p>
                        <h2 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-tighter">Come and feel it</h2>
                    </motion.div>
                    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {STAND.map(({ icon: Icon, title, text }) => (
                            <div key={title} className="rounded-[1.5rem] bg-slate-950/25 border border-white/15 p-5">
                                <Icon size={22} className="text-white" />
                                <h3 className="mt-4 text-sm font-black uppercase tracking-tight">{title}</h3>
                                <p className="mt-2 text-sm text-cyan-50/90 leading-relaxed">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visit + contact */}
            <section id="visit" className="max-w-7xl mx-auto px-4 sm:px-6 pb-14 lg:pb-24 scroll-mt-32 xl:scroll-mt-20">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <motion.div {...fadeUp}>
                        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-cyan-600">Visit us</p>
                        <h2 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-tighter">See you at {ISPO_EVENT.name}</h2>
                        <p className="mt-4 text-slate-600 leading-relaxed">
                            Message us before the show and we&apos;ll keep time for you at our stand, or simply stop by.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="px-6 py-4 rounded-2xl bg-[#25D366] text-slate-950 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:brightness-110 transition">
                                <MessageCircle size={16} /> WhatsApp us
                            </a>
                            <a href={SAVE_CONTACT} className="px-6 py-4 rounded-2xl bg-cyan-600 text-white text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-900 transition">
                                <UserPlus size={16} /> Save contact
                            </a>
                            <a href={`mailto:${ISPO_EVENT.email}?subject=${encodeURIComponent(`Meeting at ${ISPO_EVENT.name}`)}`} className="px-6 py-4 rounded-2xl border border-slate-200 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:border-cyan-600 hover:text-cyan-600 transition">
                                <Mail size={16} /> {ISPO_EVENT.email}
                            </a>
                        </div>
                    </motion.div>
                    <div className="grid gap-3">
                        {eventDetails.map(({ icon: Icon, label, value }) => (
                            <div key={label} className="flex items-center gap-4 rounded-2xl bg-white border border-slate-200 shadow-sm px-5 py-4">
                                <Icon size={20} className="text-cyan-600 shrink-0" />
                                <p className="text-[11px] font-black uppercase tracking-widest text-slate-600 w-20 sm:w-28 shrink-0">{label}</p>
                                <p className="font-bold">{value}</p>
                            </div>
                        ))}
                        <div className="grid sm:grid-cols-2 gap-3">
                            <a href={link('/catalog/sports')} className="rounded-2xl bg-cyan-600 text-white px-5 py-4 text-xs font-black uppercase tracking-widest flex items-center justify-between hover:bg-cyan-700 transition">
                                Full catalogue <ArrowUpRight size={16} />
                            </a>
                            <a href={PDF_CATALOG_URL} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-slate-200 px-5 py-4 text-xs font-black uppercase tracking-widest flex items-center justify-between hover:border-cyan-600 hover:text-cyan-600 transition">
                                PDF catalogue <Download size={16} />
                            </a>
                            <a href={link('/products')} className="sm:col-span-2 rounded-2xl border border-slate-200 px-5 py-4 text-xs font-black uppercase tracking-widest flex items-center justify-between hover:border-cyan-600 hover:text-cyan-600 transition">
                                <span className="flex items-center gap-2"><Sparkles size={16} /> Customize a jersey online</span> <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visitor details: saved to the Leads inbox */}
            <section id="details" className="bg-slate-50 border-t border-slate-100 scroll-mt-32 xl:scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-24 grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
                    <motion.div {...fadeUp}>
                        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-cyan-600">Stay in touch</p>
                        <h2 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-tighter">Leave your details</h2>
                        <p className="mt-4 text-slate-600 leading-relaxed">
                            Tell us who you are and what you need. Our team will send you prices, samples and lead times after {ISPO_EVENT.name}.
                        </p>
                    </motion.div>
                    <IspoLeadForm />
                </div>
            </section>

            <footer className="bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row gap-3 justify-between text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    <p>© {new Date().getFullYear()} {BRAND_DETAILS.navDisplayName} · {BRAND_DETAILS.location}</p>
                    <a href={link('/')} className="hover:text-cyan-400">forcesportsindia.com</a>
                </div>
            </footer>

            {/* same shape for all three; colour = role: WhatsApp green, secondary white, main action cyan */}
            <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_16px_rgba(15,23,42,0.06)] grid grid-cols-3 gap-2 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="h-14 rounded-2xl border border-[#25D366] bg-[#25D366] text-slate-950 flex flex-col items-center justify-center gap-1 text-[11px] font-black uppercase tracking-wide active:brightness-95">
                    <MessageCircle size={18} /> WhatsApp
                </a>
                <a href={SAVE_CONTACT} className="h-14 rounded-2xl border border-slate-200 bg-white text-slate-800 flex flex-col items-center justify-center gap-1 text-[11px] font-black uppercase tracking-wide active:bg-slate-50">
                    <UserPlus size={18} className="text-cyan-600" /> Save contact
                </a>
                <a href="#details" className="h-14 rounded-2xl border border-cyan-600 bg-cyan-600 text-white flex flex-col items-center justify-center gap-1 text-[11px] font-black uppercase tracking-wide active:bg-cyan-700">
                    <Send size={18} /> Leave details
                </a>
            </div>
        </div>
    );
}
