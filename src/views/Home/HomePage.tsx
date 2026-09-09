"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
    ChevronRight, Sparkles, Zap, Shield, Truck, Award, Trophy,
    Building2, Building, Landmark, Factory, Bike, Signal, Palette,
    ShieldCheck, Globe2, ShoppingCart, Star, CarFront, BookOpen,
    Layers, Shirt, MessageCircle, MapPin, Users, CheckCircle2, Compass,
} from 'lucide-react';
import Link from 'next/link';
import { PRODUCTS } from '../../data/products';
import { SPORTEX_FABRICS } from '../../data/sportexFabrics';
import { BRAND_DETAILS } from '../../data/brandData';
import { getCDNUrl } from '../../utils/cdnUtils';
import { getProductSportexFabric, fabricSlug } from '../../utils/fabricMatching';
import SEO from '../../components/seo/SEO';
import ProductCardDetails from '../../components/products/ProductCardDetails';
import { db } from '../../lib/firebase';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { findLiveProduct, mergeLiveProductCatalog, productFromFirestore } from '../../utils/productUtils';
import { FALLBACK_TESTIMONIALS, Testimonial } from '../../data/testimonials';
import TestimonialForm from '../../components/forms/TestimonialForm';
import { SEO_KEYWORDS } from '../../data/seoKeywords';

const FEATURED_PRODUCT_IDS = ['force-3d-inv-01', 'force-stealth-joggers', 'force-plain-cap-black'];

const CUSTOMIZE_STEPS = [
    { step: '01', title: 'Pick your gear', desc: 'Jerseys, polos, track pants, caps, 3D kits & team uniforms.', icon: Shirt },
    { step: '02', title: 'Choose fabric & design', desc: 'Sportex GSM, logo placement, front/back preview & size.', icon: Palette },
    { step: '03', title: 'Request bulk quote', desc: 'WhatsApp or inquiry — MOQ, timeline & pricing from Mumbai.', icon: MessageCircle },
];

const EXPLORE_LINKS = [
    { href: '/products', label: 'All Products', desc: 'Full catalog — customize any item online', icon: Shirt, highlight: true },
    { href: '/uniforms', label: 'Team Uniforms', desc: 'Cricket, football, kabaddi & corporate kits', icon: Trophy, highlight: true },
    { href: '/fabrics', label: 'Sportex Fabrics', desc: '23+ materials with GSM & printing specs', icon: Layers, highlight: false },
    { href: '/catalog', label: 'Digital Catalog', desc: 'Flip through collections & design ideas', icon: BookOpen, highlight: false },
    { href: '/about', label: 'Our Story', desc: '18+ years · Goregaon manufacturing', icon: MapPin, highlight: false },
    { href: '/inquiry', label: 'Bulk Inquiry', desc: 'MOQ, pricing & delivery timelines', icon: MessageCircle, highlight: false },
];

const CLIENTS = [
    { name: "HDFC BANK", logo: "/client logo/hdfc-bank-logo.png", icon: Building2, color: "bg-blue-700" },
    { name: "Goregaon Sports Club", logo: "/client logo/goregaon sports club.jpg", icon: Trophy, color: "bg-slate-900" },
    { name: "KOTAK MAHINDRA", logo: "/client logo/kotak-mahindra-bank.png", icon: Building, color: "bg-red-600" },
    { name: "J.P.MORGAN", logo: "/client logo/jp morgan.jpg", icon: Landmark, color: "bg-slate-800" },
    { name: "RELIANCE INDUSTRIES", logo: "/client logo/reliance.jpg", icon: Factory, color: "bg-blue-800" },
    { name: "TOYOTA", logo: "/client logo/toyota.jpg", icon: CarFront, color: "bg-red-700" },
    { name: "DECATHLON", logo: "/client logo/decathlon.png", icon: Bike, color: "bg-cyan-600" },
    { name: "AIRTEL", logo: "/client logo/airtel.jpg", icon: Signal, color: "bg-red-600" },
    { name: "ASIAN PAINTS", logo: "/client logo/asianpaints.jpg", icon: Palette, color: "bg-yellow-500" },
    { name: "BAJAJ ALLIANZ", logo: "/client logo/bajaj allianz.png", icon: ShieldCheck, color: "bg-blue-600" },
    { name: "GM SWITCHES", logo: "/client logo/GM switches.png", icon: Zap, color: "bg-red-700" },
    { name: "ROTARY", logo: "/client logo/rotary-international.svg", icon: Globe2, color: "bg-yellow-600" },
    { name: "DMART", logo: "/client logo/DMart-Logo-Vector.jpg", icon: ShoppingCart, color: "bg-green-700" },
] as const;

const ClientMarqueeItem = ({ client, size = 'medium', logoMap = {} }: { client: (typeof CLIENTS)[number]; size?: 'small' | 'large' | 'medium'; logoMap?: Record<string, string> }) => {
    const [imageError, setImageError] = React.useState(false);
    const boxSize = size === 'large' ? 'w-16 h-16' : size === 'medium' ? 'w-14 h-14' : 'w-12 h-12';
    const iconSize = size === 'large' ? 26 : size === 'medium' ? 22 : 18;
    const textSize =
        size === 'large'
            ? 'text-xl md:text-2xl'
            : size === 'medium'
              ? 'text-base md:text-lg'
              : 'text-sm md:text-base';

    const fileName = client.logo.split('/').pop() || '';
    const resolvedLogo = logoMap[fileName] || getCDNUrl(client.logo);

    return (
        <div
            className={`${size === 'medium' ? 'mx-8 md:mx-12' : 'mx-10 md:mx-14'} flex items-center gap-4 md:gap-5 group/item shrink-0`}
        >
            <div
                className={`${boxSize} shrink-0 rounded-full bg-white flex items-center justify-center shadow-[0_8px_24px_rgba(15,23,42,0.08)] border border-slate-100/90 transition-transform duration-300 group-hover/item:scale-[1.03] overflow-hidden p-2`}
            >
                {resolvedLogo && !imageError ? (
                    <img
                        src={resolvedLogo}
                        alt={client.name}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain scale-[1.15] mix-blend-multiply"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <span
                        className={`w-full h-full rounded-xl flex items-center justify-center ${client.color} text-white`}
                    >
                        <client.icon size={iconSize} strokeWidth={2.5} />
                    </span>
                )}
            </div>
            <span
                className={`${textSize} font-black uppercase tracking-wide text-slate-400 group-hover/item:text-slate-600 transition-colors whitespace-nowrap`}
            >
                {client.name}
            </span>
        </div>
    );
};

const HomePage = () => {
    const [featuredProducts, setFeaturedProducts] = React.useState(() =>
        PRODUCTS.filter((p) => FEATURED_PRODUCT_IDS.includes(p.id))
    );
    const [featuredFabrics, setFeaturedFabrics] = React.useState<any[]>([]);
    const [logoMap, setLogoMap] = React.useState<Record<string, string>>({});
    const [testimonials, setTestimonials] = React.useState<Testimonial[]>(
        FALLBACK_TESTIMONIALS.map((t, i) => ({ ...t, id: `fallback-${i}`, status: 'approved' as const }))
    );

    React.useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, 'products'),
            (snapshot) => {
                const remote = snapshot.docs.map((d) =>
                    productFromFirestore(d.id, d.data() as Record<string, unknown>)
                );
                const live = mergeLiveProductCatalog(remote);
                const featured = FEATURED_PRODUCT_IDS
                    .map((id) => findLiveProduct(live, id))
                    .filter((p): p is NonNullable<typeof p> => Boolean(p));
                if (featured.length) setFeaturedProducts(featured);
            },
            (error) => console.error('Failed to load featured products', error)
        );
        return () => unsubscribe();
    }, []);

    React.useEffect(() => {
        const q = query(collection(db, 'testimonials'), where('status', '==', 'approved'));
        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const live = snapshot.docs.map((d) => ({ id: d.id, ...d.data() })) as Testimonial[];
                live.sort((a, b) => {
                    const ms = (v: unknown) => {
                        if (!v || typeof v !== 'object') return 0;
                        const t = v as { toMillis?: () => number; seconds?: number };
                        if (typeof t.toMillis === 'function') return t.toMillis();
                        if (typeof t.seconds === 'number') return t.seconds * 1000;
                        return 0;
                    };
                    return ms(b.createdAt) - ms(a.createdAt);
                });
                if (live.length) setTestimonials(live);
                else {
                    setTestimonials(
                        FALLBACK_TESTIMONIALS.map((t, i) => ({ ...t, id: `fallback-${i}`, status: 'approved' as const }))
                    );
                }
            },
            (error) => console.error('Failed to load testimonials', error)
        );
        return () => unsubscribe();
    }, []);

    React.useEffect(() => {
        setLogoMap({});
    }, []);

    React.useEffect(() => {
        const fallback = SPORTEX_FABRICS.filter((f) =>
            ['Dryfit', 'Dotknit', '4 Way Lycra', 'Jacquard', 'Super Softy', 'Honeycomb'].includes(f.name)
        ).map(f => ({
            name: f.name,
            gsm: f.gsm,
            file: `/Sportex Fabrics/${f.file}`
        }));
        setFeaturedFabrics(fallback);
    }, []);

    return (
        <div className="bg-white overflow-x-hidden">
            <SEO
                title="Force Sports and Wears India | Global Bulk T-Shirt Manufacturer"
                description={`Top-rated global manufacturer and exporter of custom sportswear, bulk t-shirts, and team uniforms. Based in India, shipping premium quality worldwide. Worldwide sportswear partner, top global bulk t-shirt and sportswear manufacturer, international shipping wholesale.`}
                keywords={SEO_KEYWORDS.home}
            />

            {/* Hero */}
            <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src={getCDNUrl("/hero-montage-2.jpg")}
                        alt={BRAND_DETAILS.name}
                        className="w-full h-full object-cover opacity-60 scale-105 animate-[slow-zoom_20s_ease-in-out_infinite_alternate]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/75 to-slate-900/40" />
                </div>

                <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs mb-6">
                            {BRAND_DETAILS.tagline}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5.5rem] font-black text-white tracking-tighter mb-4 uppercase leading-[0.95] xl:whitespace-nowrap"
                    >
                        {BRAND_DETAILS.navDisplayName}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.35 }}
                        className="text-slate-300 max-w-2xl mx-auto mb-12 text-base md:text-xl leading-relaxed font-medium"
                    >
                        {BRAND_DETAILS.heroSubtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center"
                    >
                        <Link
                            href="/products"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 font-black uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Explore Products <ChevronRight size={18} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                        </Link>
                        <Link
                            href="/catalog"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-white/10 text-white font-black uppercase tracking-widest text-sm rounded-full transition-all hover:scale-105 hover:bg-slate-700/50"
                        >
                            <BookOpen size={18} /> View Digital Catalog
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.75 }}
                        className="mt-12 flex items-center gap-3 py-2.5 px-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10"
                    >
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 overflow-hidden"
                                >
                                    <img
                                        src={`https://i.pravatar.cc/100?u=force-team-${i}`}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col items-start leading-none">
                            <div className="flex text-yellow-400 mb-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} size={12} fill="currentColor" />
                                ))}
                            </div>
                            <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">
                                {BRAND_DETAILS.trustedTeamsLabel}
                            </span>
                        </div>
                    </motion.div>

                    <motion.a
                        href="#customize"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="mt-8 text-slate-500 hover:text-cyan-400 text-[10px] font-black uppercase tracking-widest transition-colors inline-flex items-center gap-1"
                    >
                        <Palette size={12} /> Customize your kit below
                        <ChevronRight size={12} />
                    </motion.a>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-white border-y border-slate-100 py-10 md:py-12">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {[
                        { value: String(BRAND_DETAILS.established), label: 'Founded' },
                        { value: BRAND_DETAILS.experience, label: 'Experience' },
                        { value: BRAND_DETAILS.employeeStrength, label: 'Team Size' },
                        { value: 'Mumbai', label: 'Headquarters' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
                            <span className="block text-2xl md:text-3xl font-black text-slate-900">{stat.value}</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Customize your kit */}
            <section id="customize" className="py-16 md:py-24 bg-white scroll-mt-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs mb-3 block">100% customizable</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
                            Build your custom kit
                        </h2>
                        <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                            Logo upload, Sportex fabric & GSM, front/back placement, and live preview — then send a bulk quote to our Mumbai team.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {CUSTOMIZE_STEPS.map((item, idx) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-cyan-300 transition-colors text-center md:text-left"
                            >
                                <span className="text-[10px] font-black text-cyan-600 uppercase tracking-widest mb-4 block">
                                    Step {item.step}
                                </span>
                                <div className="w-14 h-14 rounded-2xl bg-cyan-600 text-white flex items-center justify-center mx-auto md:mx-0 mb-5">
                                    <item.icon size={26} />
                                </div>
                                <h3 className="font-black text-slate-900 uppercase tracking-tight text-lg mb-2">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/products"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-cyan-600 transition-colors"
                        >
                            <Palette size={16} /> Start customizing <ChevronRight size={16} />
                        </Link>
                        <Link
                            href="/uniforms"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 font-black uppercase tracking-widest text-xs rounded-full hover:border-cyan-500 transition-colors"
                        >
                            Browse uniforms <ChevronRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured products */}
            <section className="py-14 md:py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                        <div>
                            <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs mb-2 block">Custom gear</span>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">Featured Products</h2>
                        </div>
                        <Link href="/products" className="font-black uppercase tracking-widest text-xs flex items-center gap-2 text-slate-900 hover:text-cyan-600">
                            Full catalog <ChevronRight size={16} />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProducts.map((product, idx) => {
                            const sportexFabric = getProductSportexFabric(
                                product.id,
                                product.title,
                                product.description,
                                product.longDescription,
                                product.features,
                                product.specs
                            );
                            const sportexGsm = SPORTEX_FABRICS.find((f) => f.name === sportexFabric)?.gsm;
                            return (
                                <motion.article
                                    key={product.id}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.08 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl flex flex-col"
                                >
                                    <div className="relative aspect-[4/5] bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.08),transparent_60%)] py-10 px-6 sm:py-12 sm:px-8">
                                        <img
                                            src={getCDNUrl(product.image, { width: 600 })}
                                            alt={product.title}
                                            className="w-full h-full object-contain mix-blend-darken"
                                        />
                                        {product.productCode && (
                                            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900 text-white text-[9px] font-black uppercase">
                                                {product.productCode}
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-6 flex flex-col flex-1 border-t border-slate-100">
                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">
                                            {product.category}
                                            {product.sport ? ` · ${product.sport}` : ''}
                                        </span>
                                        <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2">{product.title}</h3>
                                        <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">{product.description}</p>
                                        <ProductCardDetails product={product} sportexFabric={sportexFabric} sportexGsm={sportexGsm} detailed />
                                        <div className="grid grid-cols-2 gap-2 mt-5">
                                            <Link
                                                href={`/products/${product.id}`}
                                                className="py-3.5 bg-cyan-600 text-white text-center text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-900 transition-colors flex items-center justify-center gap-1"
                                            >
                                                <Palette size={12} /> Customize
                                            </Link>
                                            <Link
                                                href={`/products/${product.id}`}
                                                className="py-3.5 bg-slate-100 text-slate-900 text-center text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-colors border border-slate-200"
                                            >
                                                Details
                                            </Link>
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                    <div className="mt-12 text-center">
                        <a
                            href="#explore-more"
                            className="inline-flex items-center gap-2 text-slate-600 font-black uppercase tracking-widest text-xs hover:text-cyan-600 transition-colors"
                        >
                            <Compass size={16} /> Want to explore more? See everything we offer
                            <ChevronRight size={14} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Explore more — after custom section */}
            <section id="explore-more" className="py-16 md:py-24 bg-slate-900 text-white scroll-mt-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.25)_0%,transparent_55%)]" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-black uppercase tracking-widest text-[10px] mb-6">
                            <Compass size={14} /> Keep exploring
                        </span>
                        <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                            There&apos;s more to discover
                        </h2>
                        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                            Seen the custom options? Dive into our full product range, team uniforms, Sportex fabric library, digital catalog, and manufacturing story.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {EXPLORE_LINKS.map((item, idx) => (
                            <motion.div
                                key={item.href}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.06 }}
                                viewport={{ once: true }}
                            >
                                <Link
                                    href={item.href}
                                    className={`group flex gap-4 p-6 rounded-2xl border transition-all h-full ${
                                        item.highlight
                                            ? 'bg-cyan-600 border-cyan-500 hover:bg-cyan-500 shadow-lg shadow-cyan-900/30'
                                            : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-500/40'
                                    }`}
                                >
                                    <div
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                            item.highlight
                                                ? 'bg-white/20 text-white'
                                                : 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white'
                                        }`}
                                    >
                                        <item.icon size={22} />
                                    </div>
                                    <div>
                                        <h3
                                            className={`font-black uppercase tracking-tight text-sm mb-1 flex items-center gap-2 ${
                                                item.highlight ? 'text-white' : 'text-white group-hover:text-cyan-300'
                                            }`}
                                        >
                                            {item.label}
                                            <ChevronRight size={14} className="opacity-60 group-hover:translate-x-0.5 transition-transform" />
                                        </h3>
                                        <p className={`text-xs leading-relaxed ${item.highlight ? 'text-cyan-50' : 'text-slate-400'}`}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sportex fabrics */}
            <section className="py-14 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
                        <div>
                            <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs mb-2 block">Sportex India</span>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
                                Technical Fabric Library
                            </h2>
                            <p className="text-slate-500 mt-3 max-w-xl text-sm md:text-base">
                                {SPORTEX_FABRICS.length}+ premium materials with GSM weights — sublimation, screen print, DTF & embroidery ready.
                            </p>
                        </div>
                        <Link href="/fabrics" className="text-slate-900 font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:text-cyan-600">
                            View all fabrics <ChevronRight size={16} />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {featuredFabrics.map((fabric) => (
                            <Link
                                key={fabric.name}
                                href={`/fabrics#fabric-${fabricSlug(fabric.name)}`}
                                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-cyan-400 hover:shadow-md transition-all"
                            >
                                <div className="aspect-square bg-white p-3 border-b border-slate-100">
                                    <img
                                        src={getCDNUrl(fabric.file)}
                                        alt={fabric.name}
                                        loading="lazy"
                                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                                    />
                                </div>
                                <div className="p-3">
                                    <h3 className="text-[10px] font-black uppercase text-slate-900 tracking-tight">{fabric.name}</h3>
                                    <p className="text-[9px] font-bold text-cyan-700 mt-0.5">
                                        {/\d/.test(fabric.gsm) ? `${fabric.gsm} GSM` : fabric.gsm}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-14 md:py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs mb-3 block">In-house manufacturing</span>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter mb-6">
                                {BRAND_DETAILS.manufacturing.type}
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                Our {BRAND_DETAILS.manufacturing.unitLocation} facility handles design, printing, and stitching under one roof — so your team kits ship on spec and on time.
                            </p>
                            <Link href="/about" className="text-cyan-600 font-black uppercase tracking-widest text-xs inline-flex items-center gap-2 hover:text-slate-900">
                                Our story & heritage <ChevronRight size={14} />
                            </Link>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {BRAND_DETAILS.manufacturing.capabilities.map((cap) => (
                                <li
                                    key={cap}
                                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 text-sm font-bold uppercase tracking-wide text-slate-800 shadow-sm"
                                >
                                    <CheckCircle2 size={18} className="text-cyan-600 shrink-0" />
                                    {cap}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Why us */}
            <section className="py-14 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter">Why teams choose us</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Award, title: 'Total customization', desc: 'Sublimation, logos, names & numbers woven into every kit.' },
                            { icon: Layers, title: 'Sportex fabrics', desc: 'Matched GSM and material for each sport and usage type.' },
                            { icon: Users, title: 'In-house production', desc: `Design to stitch at our ${BRAND_DETAILS.manufacturing.unitLocation} unit.` },
                            { icon: Shield, title: 'Sport-specific fits', desc: 'Cuts engineered for cricket, football, kabaddi & corporate wear.' },
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-cyan-300 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center mb-5">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="font-black uppercase text-sm text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-14 md:py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs mb-2 block">The journey</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">How we craft perfection</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Sparkles, title: 'Consultation', desc: 'Share your sport, quantity, fabric & design goals.' },
                            { icon: Zap, title: 'Design lab', desc: '3D visualization, placement & color proofs.' },
                            { icon: Shield, title: 'Production', desc: 'Printing, embroidery & QC at our Mumbai facility.' },
                            { icon: Truck, title: 'Delivery', desc: 'Bulk packing and on-time dispatch across India.' },
                        ].map((step, idx) => (
                            <div key={idx} className="text-center p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
                                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-5 text-cyan-600">
                                    <step.icon size={26} />
                                </div>
                                <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-2">{step.title}</h4>
                                <p className="text-slate-500 text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">What our clients say</h2>
                        <div className="inline-flex gap-1 text-yellow-500 items-center">
                            {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={18} fill="currentColor" />)}
                            <span className="ml-2 font-black text-slate-900 text-sm">
                                {(
                                    testimonials.reduce((sum, t) => sum + (t.rating || 5), 0) / Math.max(testimonials.length, 1)
                                ).toFixed(1)}/5
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.slice(0, 9).map((testi) => (
                            <div key={testi.id} className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                                <div className="flex gap-0.5 text-yellow-500 mb-4">
                                    {Array.from({ length: Math.min(5, testi.rating || 5) }).map((_, i) => (
                                        <Star key={i} size={14} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-slate-600 italic leading-relaxed mb-6">&ldquo;{testi.quote}&rdquo;</p>
                                <div>
                                    <h4 className="font-black text-slate-900 text-sm uppercase">{testi.name}</h4>
                                    {testi.role && (
                                        <span className="text-cyan-600 text-[10px] font-bold uppercase tracking-widest">{testi.role}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="max-w-2xl mx-auto mt-14">
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">Share your review</h3>
                            <p className="text-slate-500 text-sm mt-2">It goes live on this page after we approve it.</p>
                        </div>
                        <TestimonialForm compact />
                    </div>
                </div>
            </section>



            {/* Clients marquee */}
            <section className="py-14 md:py-16 bg-[#f4f6f8] overflow-hidden isolate">
                <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
                    <span className="text-slate-400 font-bold tracking-[0.2em] uppercase text-xs mb-2 block">
                        Trusted nationwide
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase">Esteemed clients</h2>
                </div>
                <div className="flex overflow-hidden py-2">
                    <div className="flex animate-marquee items-center whitespace-nowrap [animation-duration:45s]">
                        {[...CLIENTS, ...CLIENTS].map((client, idx) => (
                            <ClientMarqueeItem key={idx} client={client} size="medium" logoMap={logoMap} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
