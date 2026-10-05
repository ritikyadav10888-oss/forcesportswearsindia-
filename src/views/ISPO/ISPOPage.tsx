"use client";
import React, { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { BookOpen, Check, ChevronRight, Loader2, MapPin, MessageCircle, Truck } from 'lucide-react';
import { BRAND_DETAILS } from '../../data/brandData';
import { PRODUCTS } from '../../data/products';
import { SPORTEX_FABRICS } from '../../data/sportexFabrics';
import { ISPO_EVENT, ISPO_PRINTING, ISPO_REGIONS, ISPO_SPORTS } from '../../data/ispoData';
import { getCDNUrl } from '../../utils/cdnUtils';
import { fabricSlug } from '../../utils/fabricMatching';
import { db } from '../../lib/firebase';

type Sport = (typeof ISPO_SPORTS)[number];

const FEATURED_FABRICS = ['Dryfit', 'Dotknit', '4 Way Lycra', 'Jacquard', 'Super Softy', 'Honeycomb'];

const DELIVERY_STEPS = [
    { title: 'Share your design', desc: 'Send a logo or idea — our designers create the mock-up.' },
    { title: 'Approve the sample', desc: 'Confirm fabric, sizes and colours before bulk production.' },
    { title: 'Bulk production', desc: `Cut, printed, stitched and quality-checked in ${BRAND_DETAILS.manufacturing.unitLocation}.` },
    { title: 'Ship worldwide', desc: 'Packed per player or per size, dispatched by air or sea.' },
];

const DELIVERY_REGIONS = ['Europe', 'UK', 'Middle East', 'North America', 'Africa', 'Australia & NZ', 'Asia'];

const INTERESTS = ['Team jerseys & kits', 'Printing services', 'Promotional T-shirts', 'Private label / distribution', 'Fabrics', 'Just the lucky draw'];

const Eyebrow = ({ n, children }: { n: string; children: React.ReactNode }) => (
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600 mb-4">
        {n} — {children}
    </p>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-4xl md:text-5xl text-slate-900 uppercase leading-none">{children}</h2>
);

const inputClass =
    'w-full min-h-[48px] rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900';

export default function ISPOPage() {
    const [sport, setSport] = useState<Sport>('Cricket');
    const [country, setCountry] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
    const [entry, setEntry] = useState({ firstName: '', ticket: '' });
    const formRef = useRef<HTMLDivElement>(null);

    const sportProducts = useMemo(
        () => PRODUCTS.filter((p) => p.sport === sport && p.image).slice(0, 8),
        [sport]
    );

    const fabrics = useMemo(
        () => SPORTEX_FABRICS.filter((f) => FEATURED_FABRICS.includes(f.name)),
        []
    );

    const pickRegion = (region: string) => {
        setCountry(region);
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        if (String(form.get('website_hp') || '')) return;

        const fullName = String(form.get('fullName') || '').trim();
        const email = String(form.get('email') || '').trim();
        const phone = String(form.get('phone') || '').trim();
        const company = String(form.get('company') || '').trim();
        const interest = String(form.get('interest') || '');
        const visitingFrom = String(form.get('country') || '').trim();
        const ticket = `ISPO-${Math.floor(1000 + Math.random() * 9000)}`;
        const message = [
            `${ISPO_EVENT.name} lucky draw entry ${ticket}`,
            company && `Company: ${company}`,
            visitingFrom && `Visiting from: ${visitingFrom}`,
            `Interested in: ${interest}`,
        ].filter(Boolean).join('\n');

        setStatus('submitting');
        const results = await Promise.allSettled([
            addDoc(collection(db, 'inquiries'), {
                fullName, email, phone, productType: 'ISPO Lucky Draw', message,
                source: ISPO_EVENT.name, status: 'new', createdAt: serverTimestamp(),
            }),
            fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullName, email, phone, productType: 'ISPO Lucky Draw', message, source: ISPO_EVENT.name }),
            }).then((r) => { if (!r.ok) throw new Error('email failed'); }),
        ]);

        if (results.some((r) => r.status === 'fulfilled')) {
            setEntry({ firstName: fullName.split(' ')[0] || 'friend', ticket });
            setStatus('done');
        } else {
            setStatus('error');
        }
    };

    return (
        <div className="bg-white text-slate-900">
            {/* Hero */}
            <section className="border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-16 pb-16 md:pt-24 md:pb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600 mb-6"
                    >
                        Exhibitor · {ISPO_EVENT.name} · Made in India since {BRAND_DETAILS.established}
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 }}
                        className="text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.92] max-w-5xl"
                    >
                        Custom teamwear, made in Mumbai. <span className="text-slate-500">Shipped worldwide.</span>
                    </motion.h1>
                    <p className="mt-8 text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
                        {BRAND_DETAILS.name} manufactures customised sportswear in bulk — jerseys, tracksuits, promotional
                        T-shirts and team kits — for clubs, brands and distributors around the world.
                    </p>
                    <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 border-y border-slate-200 max-w-4xl">
                        {[
                            { label: 'Find us at', value: `${ISPO_EVENT.hall} · ${ISPO_EVENT.booth}` },
                            { label: 'Show dates', value: ISPO_EVENT.dates },
                            { label: 'Venue', value: ISPO_EVENT.venue },
                        ].map((d) => (
                            <div key={d.label} className="py-5 sm:pr-6">
                                <dt className="text-xs uppercase tracking-widest text-slate-500">{d.label}</dt>
                                <dd className="font-display text-2xl font-semibold mt-1">{d.value}</dd>
                            </div>
                        ))}
                    </dl>
                    <div className="mt-10 flex flex-col sm:flex-row gap-3">
                        <Link href="/catalog" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-slate-900 text-white font-semibold hover:bg-brand-600 transition-colors">
                            <BookOpen size={18} /> Browse the catalogue
                        </Link>
                        <a href="#draw" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-slate-300 font-semibold hover:border-slate-900 transition-colors">
                            Enter the lucky draw <ChevronRight size={18} />
                        </a>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-14">
                    <div>
                        <Eyebrow n="01">About us</Eyebrow>
                        <SectionTitle>Built for teams since {BRAND_DETAILS.established}</SectionTitle>
                        <p className="mt-6 text-lg text-slate-600 leading-relaxed">{BRAND_DETAILS.aboutIntro}</p>
                        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                            At ISPO we&apos;re meeting distributors, private-label partners and team buyers looking for a reliable
                            manufacturing partner in India.
                        </p>
                        <Link href="/about" className="mt-6 inline-flex items-center gap-1 font-semibold text-brand-700 hover:text-slate-900">
                            Our full story <ChevronRight size={16} />
                        </Link>
                    </div>
                    <dl className="grid grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden self-start">
                        {[
                            { v: String(BRAND_DETAILS.established), l: 'Established in Mumbai' },
                            { v: BRAND_DETAILS.experience, l: 'Of in-house manufacturing' },
                            { v: BRAND_DETAILS.employeeStrength, l: 'Team members' },
                            { v: '1,000+', l: 'Teams kitted out' },
                        ].map((s) => (
                            <div key={s.l} className="bg-white p-7">
                                <dd className="font-display text-4xl font-semibold">{s.v}</dd>
                                <dt className="text-slate-500 mt-1">{s.l}</dt>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* Director */}
            <section className="border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-5">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 max-w-md">
                            <img
                                src={getCDNUrl(BRAND_DETAILS.proprietorPhoto)}
                                alt={`${BRAND_DETAILS.proprietor}, Founder of ${BRAND_DETAILS.name}`}
                                className="w-full h-full object-cover object-[center_12%]"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-7">
                        <Eyebrow n="02">Meet the founder</Eyebrow>
                        <SectionTitle>{BRAND_DETAILS.proprietor}</SectionTitle>
                        <p className="mt-2 text-lg text-slate-500">Founder &amp; Proprietor, {BRAND_DETAILS.navDisplayName}</p>
                        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                            {BRAND_DETAILS.proprietor.replace('Mr. ', '')} founded {BRAND_DETAILS.shortName} in {BRAND_DETAILS.established} to bridge
                            premium quality and accessible sportswear in India. Today he leads a vertically integrated unit in{' '}
                            {BRAND_DETAILS.manufacturing.unitLocation} that designs, prints and stitches custom kits for teams at home and abroad.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <a href="#draw" className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-brand-600 transition-colors">
                                Meet him at the booth
                            </a>
                            <a href={`mailto:${BRAND_DETAILS.contacts.email}?subject=${encodeURIComponent(`Meeting at ${ISPO_EVENT.name}`)}`} className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-slate-300 font-semibold hover:border-slate-900 transition-colors">
                                Book a meeting
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & vision */}
            <section className="border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20 md:py-24">
                    <Eyebrow n="03">Mission &amp; vision</Eyebrow>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="rounded-2xl bg-slate-900 text-white p-9 md:p-11">
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 mb-4">Our mission</p>
                            <p className="font-display text-3xl font-medium leading-tight">{BRAND_DETAILS.aboutMission}</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 p-9 md:p-11">
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 mb-4">Our vision</p>
                            <p className="font-display text-3xl font-medium leading-tight">{BRAND_DETAILS.aboutVision}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products by sport */}
            <section className="border-b border-slate-100 bg-slate-50">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20 md:py-24">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
                        <div>
                            <Eyebrow n="04">Products by sport</Eyebrow>
                            <SectionTitle>Kit for every game</SectionTitle>
                        </div>
                        <div role="group" aria-label="Filter by sport" className="flex flex-wrap gap-2">
                            {ISPO_SPORTS.map((s) => (
                                <button
                                    key={s}
                                    type="button"
                                    aria-pressed={sport === s}
                                    onClick={() => setSport(s)}
                                    className={`min-h-[44px] px-4 rounded-full text-sm font-medium border transition-colors ${
                                        sport === s ? 'bg-slate-900 border-slate-900 text-white' : 'bg-white border-slate-300 text-slate-700 hover:border-slate-900'
                                    }`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                        {sportProducts.map((p) => (
                            <Link key={p.id} href={`/products/${p.id}`} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-900 transition-colors">
                                <div className="aspect-square p-5 bg-white">
                                    <img
                                        src={getCDNUrl(p.image, { width: 400 })}
                                        alt={p.title}
                                        loading="lazy"
                                        className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform"
                                    />
                                </div>
                                <div className="p-4 border-t border-slate-100">
                                    <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-600">{p.category}</p>
                                    <h3 className="mt-1 font-semibold text-slate-900 leading-snug line-clamp-2">{p.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-8">
                        <Link href="/products" className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:text-slate-900">
                            See all {sport.toLowerCase()} products <ChevronRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Fabrics */}
            <section className="border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20 md:py-24">
                    <div className="max-w-2xl mb-10">
                        <Eyebrow n="05">Fabrics</Eyebrow>
                        <SectionTitle>The right fabric for the game</SectionTitle>
                        <p className="mt-5 text-lg text-slate-600">
                            {SPORTEX_FABRICS.length}+ Sportex materials with GSM weights. Touch every swatch at our booth.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                        {fabrics.map((f) => (
                            <Link key={f.name} href={`/fabrics#fabric-${fabricSlug(f.name)}`} className="group rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-900 transition-colors">
                                <div className="aspect-[4/3] bg-white p-4">
                                    <img src={getCDNUrl(`/Sportex Fabrics/${f.file}`)} alt={f.name} loading="lazy" className="w-full h-full object-contain" />
                                </div>
                                <div className="p-5 border-t border-slate-100">
                                    <div className="flex items-baseline justify-between gap-3">
                                        <h3 className="font-display text-xl font-semibold uppercase">{f.name}</h3>
                                        <span className="text-sm text-slate-500 whitespace-nowrap">{/\d/.test(f.gsm) ? `${f.gsm} GSM` : f.gsm}</span>
                                    </div>
                                    <p className="mt-1 text-slate-600 text-sm leading-relaxed">{f.use || f.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Printing */}
            <section className="border-b border-slate-100 bg-slate-50">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-10">
                        <div>
                            <Eyebrow n="06">Printing</Eyebrow>
                            <SectionTitle>Every print method, under one roof</SectionTitle>
                        </div>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Our in-house print unit handles everything from individual player names to large bulk runs, so colours
                            match across the whole order and every piece passes our quality check.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {ISPO_PRINTING.map((m, i) => (
                            <div key={m.name} className="bg-white rounded-2xl border border-slate-200 p-7 flex flex-col">
                                <span className="font-display text-sm font-semibold text-slate-400">{String(i + 1).padStart(2, '0')}</span>
                                <h3 className="mt-2 font-display text-2xl font-semibold uppercase">{m.name}</h3>
                                <p className="mt-2 text-slate-600 leading-relaxed flex-1">{m.desc}</p>
                                <p className="mt-5 pt-4 border-t border-slate-100 text-sm text-slate-500">Best for: {m.best}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Promotional T-shirts */}
            <section className="border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <div>
                        <Eyebrow n="07">Promotional T-shirts</Eyebrow>
                        <SectionTitle>Your brand on every chest</SectionTitle>
                        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                            Bulk promotional tees for events, marathons, product launches, corporate days and retail merch — printed
                            with your logo and colours.
                        </p>
                        <dl className="mt-8 border-t border-slate-200">
                            {[
                                { k: 'Styles', v: 'Round neck, polo, V-neck, sleeveless' },
                                { k: 'Fabric', v: 'Cotton, dri-fit or blend' },
                                { k: 'Minimum order', v: ISPO_EVENT.promoMoq },
                                { k: 'Lead time', v: ISPO_EVENT.promoLeadTime },
                            ].map((r) => (
                                <div key={r.k} className="flex justify-between gap-6 py-4 border-b border-slate-200">
                                    <dt className="text-slate-500">{r.k}</dt>
                                    <dd className="text-right">{r.v}</dd>
                                </div>
                            ))}
                        </dl>
                        <Link href="/inquiry" className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-brand-600 transition-colors">
                            Get a promo tee quote <ChevronRight size={16} />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {PRODUCTS.filter((p) => p.category === 'T-Shirts' && p.sport === 'Other' && p.image).slice(0, 4).map((p) => (
                            <Link key={p.id} href={`/products/${p.id}`} className="rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-900 transition-colors">
                                <div className="aspect-square p-4">
                                    <img src={getCDNUrl(p.image, { width: 400 })} alt={p.title} loading="lazy" className="w-full h-full object-contain" />
                                </div>
                                <p className="px-4 py-3 border-t border-slate-100 text-sm font-semibold line-clamp-1">{p.title}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global delivery */}
            <section className="border-b border-slate-100 bg-slate-50">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20 md:py-24">
                    <div className="max-w-2xl mb-10">
                        <Eyebrow n="08">Global delivery</Eyebrow>
                        <SectionTitle>From Mumbai to your door</SectionTitle>
                        <p className="mt-5 text-lg text-slate-600">
                            We ship bulk orders worldwide by air and sea, with export paperwork handled by our team.
                        </p>
                    </div>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
                        {DELIVERY_STEPS.map((s, i) => (
                            <li key={s.title} className="bg-white p-7">
                                <span className="font-display text-3xl font-semibold text-brand-600">{String(i + 1).padStart(2, '0')}</span>
                                <h3 className="mt-2 font-semibold text-lg">{s.title}</h3>
                                <p className="mt-1 text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="mt-8 flex flex-wrap items-center gap-2">
                        <Truck size={18} className="text-slate-500 mr-1" aria-hidden="true" />
                        {DELIVERY_REGIONS.map((r) => (
                            <span key={r} className="px-4 py-2 rounded-full border border-slate-300 bg-white text-sm text-slate-700">{r}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Catalogue */}
            <section className="border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20 md:py-24">
                    <div className="rounded-3xl border border-slate-200 p-8 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-10">
                        <div className="max-w-xl">
                            <Eyebrow n="09">Catalogue showcase</Eyebrow>
                            <SectionTitle>The full range in one catalogue</SectionTitle>
                            <p className="mt-5 text-lg text-slate-600">
                                Flip through our design collections — jerseys, 3D kits, tracksuits, caps and more — or ask us to send
                                the catalogue on WhatsApp.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 shrink-0">
                            <Link href="/catalog" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-slate-900 text-white font-semibold hover:bg-brand-600 transition-colors">
                                <BookOpen size={18} /> Open digital catalogue
                            </Link>
                            <a href={BRAND_DETAILS.contacts.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-slate-300 font-semibold hover:border-slate-900 transition-colors">
                                <MessageCircle size={18} /> Request on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visitors from */}
            <section className="border-b border-slate-100 bg-slate-50">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20 md:py-24">
                    <Eyebrow n="10">Visitors from</Eyebrow>
                    <SectionTitle>Where are you visiting from?</SectionTitle>
                    <p className="mt-5 text-lg text-slate-600 max-w-2xl">
                        We&apos;re welcoming buyers from across Europe and beyond. Pick your region to check in and enter the lucky draw.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-2">
                        {ISPO_REGIONS.map((r) => (
                            <button
                                key={r}
                                type="button"
                                onClick={() => pickRegion(r)}
                                className={`min-h-[44px] px-4 rounded-full border text-sm font-medium inline-flex items-center gap-2 transition-colors ${
                                    country === r ? 'bg-slate-900 border-slate-900 text-white' : 'bg-white border-slate-300 text-slate-700 hover:border-slate-900'
                                }`}
                            >
                                <MapPin size={14} aria-hidden="true" /> {r}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lucky draw */}
            <section id="draw" className="scroll-mt-24">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
                    <div>
                        <Eyebrow n="11">Free giveaways &amp; lucky draw</Eyebrow>
                        <SectionTitle>Visit. Enter. Win.</SectionTitle>
                        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                            Every visitor to our booth gets a free Force giveaway. Leave your details to enter the daily lucky draw.
                        </p>
                        <ul className="mt-8 border-t border-slate-200">
                            {ISPO_EVENT.prizes.map((p) => (
                                <li key={p.rank} className="flex items-center gap-6 py-4 border-b border-slate-200">
                                    <span className="font-display text-2xl font-semibold text-brand-600 w-12">{p.rank}</span>
                                    <span className="text-lg">{p.label}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-slate-500">
                            Draw held daily at {ISPO_EVENT.drawTime} at {ISPO_EVENT.booth}. Winners announced at the booth and by email.
                        </p>
                    </div>

                    <div ref={formRef} className="scroll-mt-28 rounded-2xl border border-slate-200 p-7 md:p-9">
                        {status === 'done' ? (
                            <div className="flex flex-col items-start gap-4" role="status">
                                <span className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center">
                                    <Check size={28} aria-hidden="true" />
                                </span>
                                <p className="font-display text-3xl font-semibold uppercase">You&apos;re in, {entry.firstName}!</p>
                                <p className="text-slate-600 text-lg">
                                    Show this screen at {ISPO_EVENT.booth} to collect your free giveaway. Good luck in the draw!
                                </p>
                                <p className="font-display text-xl font-semibold tracking-wider border border-dashed border-slate-400 rounded-lg px-4 py-2">
                                    Entry #{entry.ticket}
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <p className="font-display text-2xl font-semibold uppercase">Lucky draw entry</p>
                                <input type="text" name="website_hp" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                                <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
                                    Full name
                                    <input required name="fullName" type="text" autoComplete="name" className={inputClass} />
                                </label>
                                <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
                                    Company
                                    <input name="company" type="text" autoComplete="organization" className={inputClass} />
                                </label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
                                        Email
                                        <input required name="email" type="email" autoComplete="email" className={inputClass} />
                                    </label>
                                    <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
                                        Phone / WhatsApp
                                        <input name="phone" type="tel" autoComplete="tel" className={inputClass} />
                                    </label>
                                </div>
                                <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
                                    Visiting from (country)
                                    <input name="country" type="text" value={country} onChange={(e) => setCountry(e.target.value)} autoComplete="country-name" className={inputClass} />
                                </label>
                                <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
                                    I&apos;m interested in
                                    <select name="interest" className={inputClass} defaultValue={INTERESTS[0]}>
                                        {INTERESTS.map((i) => <option key={i}>{i}</option>)}
                                    </select>
                                </label>
                                <label className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                                    <input required type="checkbox" className="mt-0.5 w-5 h-5 accent-slate-900" />
                                    I agree to be contacted by {BRAND_DETAILS.navDisplayName} about my entry and products.
                                </label>
                                {status === 'error' && (
                                    <p className="text-sm text-red-700" role="alert">Something went wrong. Please try again or ask us at the booth.</p>
                                )}
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="mt-1 min-h-[52px] rounded-full bg-slate-900 text-white font-semibold hover:bg-brand-600 disabled:opacity-60 transition-colors inline-flex items-center justify-center gap-2"
                                >
                                    {status === 'submitting' && <Loader2 size={18} className="animate-spin" aria-hidden="true" />}
                                    Enter the draw
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
