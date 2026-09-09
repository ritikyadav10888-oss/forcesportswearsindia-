"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, Zap, CheckCircle2, MessageCircle, Ruler, Loader2 } from 'lucide-react';
import { UNIFORMS, UniformProduct } from '../../data/uniforms';
import { BRAND_DETAILS } from '../../data/brandData';
import { getUniformSportexFabric, fabricSlug } from '../../utils/fabricMatching';
import { SPORTEX_FABRICS } from '../../data/sportexFabrics';
import SEO from '../../components/seo/SEO';
import { getCDNUrl } from '../../utils/cdnUtils';
import SizeChartModal from '../../components/SizeChartModal';
import { findLiveUniform, mergeLiveUniformCatalog, mergeUniformWithLocal, uniformFromFirestore } from '../../utils/uniformUtils';
import { db } from '../../lib/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const UniformDetailPage = () => {
    const { uniformId } = useParams();
    const router = useRouter();

    const rawUniformId = Array.isArray(uniformId) ? uniformId[0] : uniformId;
    const localProduct = UNIFORMS.find(u => u.id === rawUniformId);
    const [product, setProduct] = useState<UniformProduct | undefined>(
        localProduct ? mergeUniformWithLocal(localProduct) : undefined
    );
    const [loading, setLoading] = useState(!localProduct);
    const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
    const [images, setImages] = useState<string[]>([]);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        const id = Array.isArray(uniformId) ? uniformId[0] : uniformId;
        if (!id) {
            setProduct(undefined);
            setLoading(false);
            return;
        }

        const local = UNIFORMS.find((u) => u.id === id);
        if (local) {
            setProduct(mergeUniformWithLocal(local));
            setLoading(false);
        }

        const unsubscribe = onSnapshot(
            collection(db, 'uniforms'),
            (snapshot) => {
                const remote = snapshot.docs.map((d) =>
                    uniformFromFirestore(d.id, d.data() as Record<string, unknown>)
                );
                const live = mergeLiveUniformCatalog(remote);
                const found = findLiveUniform(live, id);
                if (found) {
                    setProduct(found);
                } else if (!local) {
                    setProduct(undefined);
                }
                setLoading(false);
            },
            (error) => {
                console.error('Failed to load uniform', error);
                setProduct(local ? mergeUniformWithLocal(local) : undefined);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, [uniformId]);

    useEffect(() => {
        if (!product) return;
        const uniq: string[] = [];
        const push = (src?: string) => {
            if (!src) return;
            if (!uniq.includes(src)) uniq.push(src);
        };
        push(product.image);
        if (product.imageBack) push(product.imageBack);
        for (const g of product.gallery ?? []) push(g);
        setImages(uniq);
    }, [product]);

    useEffect(() => {
        setActiveImageIndex(0);
        window.scrollTo(0, 0);
    }, [uniformId]);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6 pt-20">
                <Loader2 className="animate-spin text-cyan-500 mb-4" size={32} />
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Loading uniform…</p>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6">
                <h2 className="text-2xl font-black uppercase text-slate-900 mb-4">Uniform Style Not Found</h2>
                <Link href="/uniforms" className="text-cyan-600 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    <ArrowLeft size={16} /> Back to Uniforms
                </Link>
            </div>
        );
    }

    const activeImage = getCDNUrl(images[activeImageIndex] || product.image);
    const sportexFabric = getUniformSportexFabric(
        product.id,
        product.title,
        product.description,
        product.longDescription,
        product.features,
        product.specs
    );
    const sportexGsm = SPORTEX_FABRICS.find((f) => f.name === sportexFabric)?.gsm;

    const openWhatsApp = () => {
        const message = `Hi! I am interested in the ${product.title} from the ${product.category} section.\n\nSpecs: ${product.specs.Fabric || product.specs.fabric} / ${product.specs.Weight || product.specs.weight}.\n\nPlease provide pricing for a bulk order.`;
        const encoded = encodeURIComponent(message);
        window.open(`${BRAND_DETAILS.contacts.whatsappLink}&text=${encoded}`, '_blank');
    };

    return (
        <div className="bg-white pt-20">
            <SEO 
                title={`${product.title} | ${product.category}`}
                description={`${product.description}. Professional uniform solution by Force Sports India.`}
                image={getCDNUrl(product.image)}
                keywords={`${product.title}, custom ${product.category}, uniform manufacturer Mumbai, Force Sports India`}
            />
            {/* Breadcrumbs & Back Nav */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-600 transition-colors font-bold uppercase tracking-widest text-[10px]"
                >
                    <ArrowLeft size={14} /> Back to Collection
                </button>
            </div>

            {/* Main Product Section */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:sticky lg:top-32"
                    >
                        <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-slate-50 aspect-square shadow-2xl p-6 md:p-12 border border-slate-100">
                             <img src={activeImage} alt={product.title} className="w-full h-full object-contain mix-blend-multiply" />
                             {product.imageBack && (
                                <div className="absolute top-6 left-6 z-20 px-3 py-1 rounded-full bg-slate-900/90 text-white text-[10px] font-black uppercase tracking-widest">
                                    {(images[activeImageIndex] || product.image) === product.imageBack ? 'Back' : 'Front'}
                                </div>
                             )}
                        </div>
                            <div className="flex flex-wrap gap-2 md:gap-3 mt-4">
                                {images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImageIndex(idx)}
                                        className={`relative w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl overflow-hidden aspect-square border-2 transition-all p-1.5 md:p-2 bg-slate-50 ${activeImageIndex === idx ? 'border-cyan-500 shadow-lg shadow-cyan-100' : 'border-transparent opacity-60 hover:opacity-100'
                                            }`}
                                    >
                                        {product.imageBack && (img === product.image || img === product.imageBack) && (
                                            <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 z-10 px-1.5 py-0.5 rounded-full text-[7px] font-black uppercase tracking-wider shadow-sm ${
                                                img === product.imageBack ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 border border-slate-200'
                                            }`}>
                                                {img === product.imageBack ? 'Back' : 'Front'}
                                            </span>
                                        )}
                                        <img src={getCDNUrl(img)} alt={`View ${idx + 1}`} className="w-full h-full object-contain mix-blend-multiply" />
                                    </button>
                                ))}
                            </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 font-black uppercase tracking-widest text-[10px] rounded-full">
                                {product.category}
                            </span>
                            {product.subcategory && (
                                <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                                    {product.subcategory}
                                </span>
                            )}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4 leading-[0.9]">
                            {product.title}
                        </h1>
                        <Link
                            href={`/fabrics#fabric-${fabricSlug(sportexFabric)}`}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-slate-900 text-cyan-400 text-[10px] font-black uppercase tracking-widest hover:bg-cyan-600 hover:text-white transition-all"
                        >
                            Sportex {sportexFabric}
                            {sportexGsm && /\d/.test(sportexGsm) ? ` · ${sportexGsm} GSM` : ''}
                            <ChevronRight size={12} />
                        </Link>
                        <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-10">
                            {product.longDescription || product.description}
                        </p>

                        <div className="space-y-4 mb-6">
                            {product.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-cyan-500 transition-all">
                                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-cyan-500">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <span className="font-bold text-slate-700 uppercase tracking-tight text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setIsSizeChartOpen(true)}
                            className="flex items-center gap-3 px-5 py-3 mb-10 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors border border-slate-200"
                        >
                            <Ruler size={16} className="text-cyan-600" />
                            View Size Chart & Fit Guide
                        </button>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <button
                                onClick={openWhatsApp}
                                className="py-6 bg-[#25D366] text-white rounded-[2rem] font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-all shadow-2xl shadow-[#25D366]/20 active:scale-95 group"
                            >
                                WhatsApp Quote <MessageCircle className="group-hover:scale-110 transition-transform" />
                            </button>
                            <Link
                                href={`/inquiry?product=${encodeURIComponent(product.title)}`}
                                className="py-6 bg-slate-900 text-white rounded-[2rem] font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-cyan-600 transition-all shadow-2xl shadow-slate-900/20 active:scale-95 group"
                            >
                                Email Inquiry <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Technical Specs & Size Charts Section */}
            <section className="bg-slate-50 py-24 px-6 border-y border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Specs */}
                        <div className="lg:col-span-1">
                            <div className="mb-10">
                                <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-2 block">Technical Deep Dive</span>
                                <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900">Specifications</h2>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center p-5 bg-cyan-50 rounded-2xl border border-cyan-200 shadow-sm">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-cyan-700">Sportex Fabric</span>
                                    <Link
                                        href={`/fabrics#fabric-${fabricSlug(sportexFabric)}`}
                                        className="text-xs font-bold text-cyan-800 uppercase tracking-tight hover:text-cyan-600"
                                    >
                                        {sportexFabric}
                                    </Link>
                                </div>
                                {Object.entries(product.specs).map(([key, value], idx) => (
                                    <div key={idx} className="flex justify-between items-center p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{key}</span>
                                        <span className="text-xs font-bold text-slate-900 uppercase tracking-tight">{value}</span>
                                    </div>
                                ))}
                                <div className="flex justify-between items-center p-5 bg-white rounded-2xl border border-slate-200 shadow-sm mt-3">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Customization</span>
                                    <span className="text-xs font-bold text-slate-900 uppercase tracking-tight text-right text-balance">{product.customization.join(', ')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Size Charts */}
                        {product.sizeCharts && (
                            <div className="lg:col-span-2">
                                <div className="mb-10">
                                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-2 block">Fit Guide</span>
                                    <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900">Size Charts</h2>
                                </div>
                                <div className="space-y-8">
                                    {Object.entries(product.sizeCharts).map(([, chart]: [string, any], idx) => (
                                        <div key={idx} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
                                            <div className="px-8 py-4 bg-slate-900 flex justify-between items-center">
                                                <h4 className="text-white font-black uppercase tracking-widest text-[10px]">{chart.label}</h4>
                                                <span className="text-slate-400 text-[10px] font-bold">IN INCHES</span>
                                            </div>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-left">
                                                    <thead>
                                                        <tr className="border-b border-slate-100 bg-slate-50">
                                                            {Object.keys(chart.values[0]).map((header, hIdx) => (
                                                                <th key={hIdx} className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">{header}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {chart.values.map((row: any, rIdx: number) => (
                                                            <tr key={rIdx} className="border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                                                                {Object.values(row).map((val: any, vIdx) => (
                                                                    <td key={vIdx} className="px-8 py-4 text-xs font-bold text-slate-700 uppercase tracking-tight">{val}</td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {!product.sizeCharts && (
                             <div className="lg:col-span-2">
                                <div className="bg-slate-900 rounded-[3rem] p-12 text-center h-full flex flex-col items-center justify-center">
                                    <Zap size={48} className="text-cyan-500 mb-6" />
                                    <h3 className="text-2xl font-black text-white uppercase mb-4">Custom Sizing Available</h3>
                                    <p className="text-slate-400 text-sm max-w-md mx-auto">
                                        We provide tailored sizing solutions for bulk orders. Contact us to get a specialized size guide for your team or organization.
                                    </p>
                                </div>
                             </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Customization Promo */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden isolate text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="relative z-10 max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">Need Your Own Branding?</h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Our uniform customization service includes high-precision embroidery, long-lasting sublimation, and specialized logo placement to represent your identity perfectly.
                        </p>
                    </div>

                    <Link
                        href="/inquiry"
                        className="relative z-10 px-10 py-5 bg-cyan-500 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-slate-900 transition-all shadow-2xl shadow-cyan-500/30 active:scale-95"
                    >
                        Inquire Bulk Pricing
                    </Link>
                </div>
            </section>

            <SizeChartModal 
                isOpen={isSizeChartOpen} 
                onClose={() => setIsSizeChartOpen(false)} 
            />
        </div>
    );
};

export default UniformDetailPage;


