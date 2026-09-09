"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

import { motion, AnimatePresence } from 'framer-motion';
import ProductCustomizeModal from '../../components/products/ProductCustomizeModal';
import { ArrowLeft, ArrowRight, ChevronRight, Zap, CheckCircle2, MessageCircle, Maximize2, X, Loader2, Layers, Palette } from 'lucide-react';
import { PRODUCTS, Product } from '../../data/products';
import { BRAND_DETAILS } from '../../data/brandData';
import { getProductSportexFabric, fabricSlug } from '../../utils/fabricMatching';
import { SPORTEX_FABRICS } from '../../data/sportexFabrics';
import { findLiveProduct, mergeLiveProductCatalog, mergeProductWithLocal, productFromFirestore } from '../../utils/productUtils';
import { getCDNUrl } from '../../utils/cdnUtils';
import SEO from '../../components/seo/SEO';
import SizeChartModal from '../../components/SizeChartModal';
import { Ruler } from 'lucide-react';
import { db } from '../../lib/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const DEFAULT_SIZE_CHARTS: Record<string, { label: string; values: Record<string, string>[] }[]> = {
    tshirt: [
        {
            label: "T-Shirt Sizes",
            values: [
                { "Size": "SMALL", "Full Chest": "38", "Body Length": "27" },
                { "Size": "MEDIUM", "Full Chest": "40", "Body Length": "28" },
                { "Size": "LARGE", "Full Chest": "42", "Body Length": "29" },
                { "Size": "EXTRA LARGE", "Full Chest": "44", "Body Length": "30" },
                { "Size": "2X LARGE", "Full Chest": "46", "Body Length": "31" },
                { "Size": "3X LARGE", "Full Chest": "48", "Body Length": "32" },
                { "Size": "4X LARGE", "Full Chest": "50", "Body Length": "33" },
                { "Size": "5X LARGE", "Full Chest": "52", "Body Length": "34" },
                { "Size": "6X LARGE", "Full Chest": "54", "Body Length": "35" },
            ]
        },
        {
            label: "Kids Sizes",
            values: [
                { "Age / Size": "1 TO 2 YEARS", "Chest": "22" },
                { "Age / Size": "3 TO 4 YEARS", "Chest": "24" },
                { "Age / Size": "5 TO 6 YEARS", "Chest": "26" },
                { "Age / Size": "7 TO 8 YEARS", "Chest": "28" },
                { "Age / Size": "9 TO 10 YEARS", "Chest": "30" },
                { "Age / Size": "11 TO 12 YEARS", "Chest": "32" },
                { "Age / Size": "13 TO 14 YEARS", "Chest": "34" },
                { "Age / Size": "15 TO 16 YEARS", "Chest": "36" },
            ]
        }
    ],
    trackpants: [
        {
            label: "Track Pant Sizes",
            values: [
                { "Size": "MEDIUM", "Waist": "30-32", "Length": "39" },
                { "Size": "LARGE", "Waist": "32-34", "Length": "40" },
                { "Size": "EXTRA LARGE", "Waist": "34-36", "Length": "41" },
                { "Size": "2x LARGE", "Waist": "36-38", "Length": "42" },
            ]
        }
    ],
    shorts: [
        {
            label: "Short Pant Sizes",
            values: [
                { "Size": "MEDIUM", "Waist": "30-32", "Length": "20" },
                { "Size": "LARGE", "Waist": "32-34", "Length": "21" },
                { "Size": "EXTRA LARGE", "Waist": "34-36", "Length": "22" },
                { "Size": "2x LARGE", "Waist": "36-38", "Length": "23" },
            ]
        }
    ]
};

const getDefaultChartsForCategory = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes('pant')) return DEFAULT_SIZE_CHARTS.trackpants;
    if (cat.includes('short')) return DEFAULT_SIZE_CHARTS.shorts;
    if (cat.includes('bag') || cat.includes('cap')) return null;
    return DEFAULT_SIZE_CHARTS.tshirt;
};

const ProductDetailPage = () => {
    const { productId } = useParams();
    const router = useRouter();
    
    const rawProductId = Array.isArray(productId) ? productId[0] : productId;
    const localProduct = PRODUCTS.find((p) => p.id === rawProductId);
    const [product, setProduct] = useState<Product | undefined>(
        localProduct ? mergeProductWithLocal(localProduct) : undefined
    );
    const [loading, setLoading] = useState(!localProduct);
    const [images, setImages] = useState<string[]>([]);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [prevProductId, setPrevProductId] = useState(productId);
    const [isZoomOpen, setIsZoomOpen] = useState(false);
    const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
    const [showCustomize, setShowCustomize] = useState(false);
    const [fabricDetails, setFabricDetails] = useState<any>(null);

    const sportexFabric = product ? getProductSportexFabric(
        product.id,
        product.title,
        product.description,
        product.longDescription,
        product.features,
        product.specs
    ) : '';

    useEffect(() => {
        if (!sportexFabric) {
            setFabricDetails(null);
            return;
        }

        const fetchFabricDetails = async () => {
            const staticFabric = SPORTEX_FABRICS.find(
                (f) => f.name.toLowerCase().trim() === sportexFabric.toLowerCase().trim()
            );
            const fallbackObj = staticFabric ? {
                id: `static-${staticFabric.name}`,
                name: staticFabric.name,
                gsm: staticFabric.gsm,
                desc: staticFabric.desc,
                use: staticFabric.use || '',
                printing: staticFabric.printing,
                file: `/Sportex Fabrics/${staticFabric.file}`,
            } : null;

            setFabricDetails(fallbackObj);
        };

        fetchFabricDetails();
    }, [sportexFabric]);


    useEffect(() => {
        const id = Array.isArray(productId) ? productId[0] : productId;
        if (!id) {
            setProduct(undefined);
            setLoading(false);
            return;
        }

        const local = PRODUCTS.find((p) => p.id === id);
        if (local) {
            setProduct(mergeProductWithLocal(local));
            setLoading(false);
        }

        const unsubscribe = onSnapshot(
            collection(db, 'products'),
            (snapshot) => {
                const remote = snapshot.docs.map((d) =>
                    productFromFirestore(d.id, d.data() as Record<string, unknown>)
                );
                const live = mergeLiveProductCatalog(remote);
                const found = findLiveProduct(live, id);
                if (found) {
                    setProduct(found);
                } else if (!local) {
                    setProduct(undefined);
                }
                setLoading(false);
            },
            (error) => {
                console.error('Failed to load product', error);
                setProduct(local ? mergeProductWithLocal(local) : undefined);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, [productId]);

    useEffect(() => {
        if (!product) return;
        const front = product.image;
        const back = (product.category === 'Caps' || product.category === 'Bags') ? undefined : product.imageBack;
        const gallery = product.gallery ?? [];
        const uniq: string[] = [];
        const push = (src?: string) => {
            if (!src) return;
            if (!uniq.includes(src)) uniq.push(src);
        };
        push(front);
        if (back) push(back);
        for (const g of gallery) push(g);
        setImages(uniq);
    }, [product]);

    if (productId !== prevProductId) {
        setPrevProductId(productId);
        setActiveImageIndex(0);
        setIsZoomOpen(false);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [productId]);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6 pt-20">
                <Loader2 className="animate-spin text-cyan-500 mb-4" size={32} />
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Loading product…</p>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6 pt-20">
                <h2 className="text-2xl font-black uppercase text-slate-900 mb-4">Product Not Found</h2>
                <Link href="/products" className="text-cyan-600 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    <ArrowLeft size={16} /> Back to Catalog
                </Link>
            </div>
        );
    }

    const activeImage = getCDNUrl(images[activeImageIndex] || product.image);
    const activeRaw = images[activeImageIndex] || product.image;
    const isBackView = Boolean(product.category !== 'Caps' && product.category !== 'Bags' && product.imageBack && activeRaw === product.imageBack);
    const sportexGsm = fabricDetails?.gsm || SPORTEX_FABRICS.find((f) => f.name.toLowerCase().trim() === sportexFabric.toLowerCase().trim())?.gsm;

    const openWhatsApp = () => {
        const message = `Hi! I am interested in ${product.title} (${product.productCode || 'N/A'}) from ${product.category}.\n\nPlease share bulk pricing, MOQ, and delivery timeline.`;
        const encoded = encodeURIComponent(message);
        window.open(`${BRAND_DETAILS.contacts.whatsappLink}&text=${encoded}`, '_blank');
    };

    return (
        <div className="bg-white pt-20">
            <SEO 
                title={`${product.title} | ${product.category}`}
                description={`${product.description} | Product Code: ${product.productCode}. Custom manufactured by Force Sports India.`}
                image={getCDNUrl(product.image)}
                keywords={`${product.title}, custom ${product.category}, bulk ${product.category} India, Force Sports Mumbai`}
            />
            {/* Breadcrumbs & Back Nav */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-600 transition-colors font-bold uppercase tracking-widest text-[10px]"
                >
                    <ArrowLeft size={14} /> Back
                </button>
            </div>

            {/* Main Product Section */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="self-start lg:sticky lg:top-32"
                    >
                        <div className="relative rounded-[2.5rem] overflow-hidden bg-white aspect-square shadow-2xl p-12 border border-slate-100">
                            <button
                                type="button"
                                onClick={() => setIsZoomOpen(true)}
                                className="absolute inset-0 z-10"
                                aria-label="Open image zoom"
                                title="Open image zoom"
                            />
                            <img src={activeImage} alt={product.title} className="w-full h-full object-contain" />
                            {product.category !== 'Caps' && product.category !== 'Bags' && product.imageBack && (
                                <div
                                    data-testid="view-badge"
                                    className="absolute top-6 left-6 z-20 px-3 py-1 rounded-full bg-slate-900/90 text-white text-[10px] font-black uppercase tracking-widest"
                                >
                                    {isBackView ? 'Back' : 'Front'}
                                </div>
                            )}
                            <div className="absolute top-6 right-6 z-20">
                                <button
                                    type="button"
                                    onClick={() => setIsZoomOpen(true)}
                                    className="w-10 h-10 rounded-full bg-white/90 backdrop-blur border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-white transition-colors shadow-sm"
                                    aria-label="Zoom image"
                                    title="Zoom"
                                >
                                    <Maximize2 size={18} />
                                </button>
                            </div>
                        </div>
                            <div className="flex overflow-x-auto gap-2.5 md:gap-3 mt-4 pb-2 scrollbar-none">
                                {images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImageIndex(idx)}
                                        className={`relative w-12 h-12 md:w-14 md:h-14 rounded-lg flex-shrink-0 overflow-hidden border-2 transition-all p-1 bg-slate-50 ${activeImageIndex === idx ? 'border-cyan-500 shadow-lg shadow-cyan-100' : 'border-transparent opacity-60 hover:opacity-100'
                                            }`}
                                    >
                                        {product.category !== 'Caps' && product.category !== 'Bags' && product.imageBack && (img === product.image || img === product.imageBack) && (
                                            <span
                                                data-testid={img === product.imageBack ? 'thumb-badge-back' : 'thumb-badge-front'}
                                                className={`absolute bottom-1 left-1/2 -translate-x-1/2 z-10 px-1.5 py-0.5 rounded-full text-[7px] font-black uppercase tracking-wider shadow-sm ${
                                                img === product.imageBack ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 border border-slate-200'
                                            }`}>
                                                {img === product.imageBack ? 'Back' : 'Front'}
                                            </span>
                                        )}
                                        <img src={getCDNUrl(img)} alt={`View ${idx + 1}`} className="w-full h-full object-contain" />
                                    </button>
                                ))}
                            </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 font-black uppercase tracking-widest text-[10px] rounded-full">
                                {product.category}
                            </span>
                            {product.brand && (
                                <span className="px-3 py-1 bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] rounded-full">
                                    {product.brand}
                                </span>
                            )}
                            {product.sport && !['Other', 'Activity', 'General', 'All'].includes(product.sport) && (
                                <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 font-black uppercase tracking-widest text-[10px] rounded-full">
                                    {product.sport}
                                </span>
                            )}
                            {product.usageType && product.usageType !== 'General' && (
                                <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 font-black uppercase tracking-widest text-[10px] rounded-full">
                                    {product.usageType}
                                </span>
                            )}
                            {product.productCode && (
                                <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                                    {product.productCode}
                                </span>
                            )}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4 leading-[0.9]">
                            {product.title}
                        </h1>
                        {product.description && product.description !== product.longDescription && (
                            <p className="text-slate-700 text-sm md:text-base font-bold leading-relaxed mb-4">
                                {product.description}
                            </p>
                        )}
                        <Link
                            href={`/fabrics#fabric-${fabricSlug(sportexFabric)}`}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-slate-900 text-cyan-400 text-[10px] font-black uppercase tracking-widest hover:bg-cyan-600 hover:text-white transition-all"
                        >
                            <Layers size={12} />
                            Sportex {sportexFabric}
                            {sportexGsm && /\d/.test(sportexGsm) ? ` · ${sportexGsm} GSM` : ''}
                            <ChevronRight size={12} />
                        </Link>

                        {(product.fabrics?.length || product.gsms?.length) ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                {product.fabrics && product.fabrics.length > 0 && (
                                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-2">
                                            Fabric options
                                        </span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {product.fabrics.map((f) => (
                                                <span
                                                    key={f}
                                                    className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-bold text-slate-800 uppercase"
                                                >
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {product.gsms && product.gsms.length > 0 && (
                                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-2">
                                            GSM weights
                                        </span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {product.gsms.map((g) => (
                                                <span
                                                    key={g}
                                                    className="px-2.5 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-[10px] font-bold text-cyan-800 uppercase"
                                                >
                                                    {g} GSM
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : null}

                        <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-10">
                            {product.longDescription || product.description}
                        </p>

                        {product.customizationOptions && product.customizationOptions.length > 0 && (
                            <div className="mb-8 p-5 rounded-2xl bg-cyan-50/50 border border-cyan-100">
                                <div className="flex items-center gap-2 mb-3">
                                    <Palette size={16} className="text-cyan-600" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-cyan-800">
                                        Customization available
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {product.customizationOptions.map((opt) => (
                                        <span
                                            key={opt}
                                            className="px-3 py-1.5 rounded-full bg-white text-[10px] font-bold text-slate-700 uppercase border border-cyan-100"
                                        >
                                            {opt}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="space-y-4 mb-6">
                            {product.features.length > 0 ? product.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-cyan-500 transition-all">
                                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-cyan-500">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <span className="font-bold text-slate-700 uppercase tracking-tight text-sm">{feature}</span>
                                </div>
                            )) : (
                                <p className="text-sm text-slate-400 font-medium">Feature list coming soon.</p>
                            )}
                        </div>


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <button
                                type="button"
                                onClick={() => setShowCustomize(true)}
                                className="py-6 bg-cyan-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-2xl shadow-cyan-900/20 active:scale-95 group"
                            >
                                Customize <Zap className="group-hover:scale-110 transition-transform" />
                            </button>
                            <Link
                                href={`/inquiry?product=${encodeURIComponent(product.title)}`}
                                className="py-6 bg-slate-900 text-white rounded-[2rem] font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-cyan-600 transition-all shadow-2xl shadow-slate-900/20 active:scale-95 group"
                            >
                                Inquire Now <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <button
                            type="button"
                            onClick={openWhatsApp}
                            className="mt-4 w-full py-5 bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/20 rounded-[2rem] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-[#25D366] hover:text-white transition-all active:scale-95"
                        >
                            WhatsApp Quote <MessageCircle className="transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Zoom Modal */}
            {isZoomOpen && (
                <div className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
                    <button
                        type="button"
                        onClick={() => setIsZoomOpen(false)}
                        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                        aria-label="Close zoom"
                        title="Close"
                    >
                        <X size={22} />
                    </button>
                    <div className="max-w-6xl w-full">
                        <img
                            src={activeImage}
                            alt={`${product.title} zoomed`}
                            className="w-full max-h-[78vh] object-contain"
                        />
                        {images.length > 1 && (
                            <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
                                {images.map((img, idx) => (
                                    <button
                                        key={`zoom-${idx}`}
                                        type="button"
                                        onClick={() => setActiveImageIndex(idx)}
                                        className={`relative flex-shrink-0 w-20 aspect-square rounded-2xl overflow-hidden border-2 p-2 bg-white/5 ${
                                            activeImageIndex === idx ? 'border-cyan-400' : 'border-white/10 opacity-70 hover:opacity-100'
                                        }`}
                                        aria-label={`Select image ${idx + 1}`}
                                    >
                                        {product.imageBack && (img === product.image || img === product.imageBack) && (
                                            <span
                                                data-testid={img === product.imageBack ? 'zoom-thumb-badge-back' : 'zoom-thumb-badge-front'}
                                                className={`absolute top-2 left-2 z-10 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                                                img === product.imageBack ? 'bg-white text-slate-900' : 'bg-black/40 text-white border border-white/10'
                                            }`}>
                                                {img === product.imageBack ? 'Back' : 'Front'}
                                            </span>
                                        )}
                                        <img src={getCDNUrl(img)} alt="" className="w-full h-full object-contain" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            <SizeChartModal 
                isOpen={isSizeChartOpen} 
                onClose={() => setIsSizeChartOpen(false)} 
            />

            {/* Technical Specs & Size Charts Section */}
            <section className="bg-slate-50 py-24 px-6 border-y border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Specs */}
                        <div className={product.category === 'Bags' ? "lg:col-span-3 max-w-3xl mx-auto w-full" : "lg:col-span-1"}>
                            <div className="mb-10">
                                <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-2 block">Technical Deep Dive</span>
                                <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900">Specifications</h2>
                            </div>
                            <div className={product.category === 'Bags' ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "space-y-3"}>
                                <div className="flex justify-between items-center p-5 bg-cyan-50 rounded-2xl border border-cyan-200 shadow-sm">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-cyan-700">Sportex Fabric</span>
                                    <Link
                                        href={`/fabrics#fabric-${fabricSlug(sportexFabric)}`}
                                        className="text-xs font-bold text-cyan-800 uppercase tracking-tight hover:text-cyan-600"
                                    >
                                        {sportexFabric}
                                    </Link>
                                </div>
                                {Object.keys(product.specs).length > 0 ? (
                                    Object.entries(product.specs).map(([key, value], idx) => (
                                        <div key={idx} className="flex justify-between items-center p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{key}</span>
                                            <span className="text-xs font-bold text-slate-900 uppercase tracking-tight">{value}</span>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-sm text-slate-500 p-5 bg-white rounded-2xl border border-slate-200">
                                        Specifications will be updated shortly. Contact us for material and GSM details.
                                    </p>
                                )}
                            </div>

                            {fabricDetails && (
                                <div className="mt-8">
                                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-4 block">Fabric Details</span>
                                    <div
                                        id={`fabric-${fabricSlug(fabricDetails.name)}`}
                                        className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all scroll-mt-28"
                                    >
                                        <div className="relative aspect-[4/3] overflow-hidden bg-white border-b border-slate-100 p-4 sm:p-6">
                                            <img
                                                src={getCDNUrl(fabricDetails.file)}
                                                alt={fabricDetails.name}
                                                loading="lazy"
                                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute top-3 right-3 z-10">
                                                <span className="inline-block px-2.5 py-1 rounded-full bg-cyan-600 text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                                                    {/\d/.test(fabricDetails.gsm) ? `${fabricDetails.gsm} GSM` : fabricDetails.gsm}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-5 flex flex-col flex-1 bg-white">
                                            <h2 className="text-slate-900 font-black uppercase text-base tracking-tight mb-0.5">
                                                {fabricDetails.name}
                                            </h2>
                                            {fabricDetails.use && (
                                                <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest mb-1">
                                                    {fabricDetails.use}
                                                </p>
                                            )}
                                            {fabricDetails.printing && (
                                                <p className="text-amber-700 text-[9px] font-bold uppercase tracking-widest mb-2">
                                                    {fabricDetails.printing}
                                                </p>
                                            )}
                                            <p className="text-slate-600 text-xs font-medium leading-relaxed mb-4 flex-1">
                                                {fabricDetails.desc}
                                            </p>
                                            <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100 items-center">
                                                <Link
                                                    href={`/products?fabric=${encodeURIComponent(fabricDetails.name)}`}
                                                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-slate-50 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 text-[9px] font-black uppercase tracking-widest text-slate-600 hover:text-cyan-700 transition-all"
                                                >
                                                    Products <ArrowRight size={8} />
                                                </Link>
                                                <Link
                                                    href={`/uniforms?fabric=${encodeURIComponent(fabricDetails.name)}`}
                                                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-slate-50 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 text-[9px] font-black uppercase tracking-widest text-slate-600 hover:text-cyan-700 transition-all"
                                                >
                                                    Uniforms <ArrowRight size={8} />
                                                </Link>
                                                <Link
                                                    href={`/inquiry?fabric=${encodeURIComponent(fabricDetails.name)}`}
                                                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-cyan-600 hover:bg-cyan-700 text-[9px] font-black uppercase tracking-widest text-white transition-all ml-auto"
                                                >
                                                    Inquire <ArrowRight size={8} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Size Charts */}
                        {(() => {
                            if (product.category === 'Bags') return null;
                            const rawCharts = product.sizeCharts || getDefaultChartsForCategory(product.category);
                            const chartsToRender = rawCharts
                                ? (Array.isArray(rawCharts) ? rawCharts : Object.values(rawCharts))
                                : null;

                            if (chartsToRender && chartsToRender.length > 0) {
                                return (
                                    <div className="lg:col-span-2">
                                        <div className="mb-10">
                                            <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-2 block">Fit Guide</span>
                                            <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900">Size Charts</h2>
                                        </div>
                                        <div className="space-y-8">
                                            {chartsToRender.map((chart: any, idx: number) => (
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
                                );
                            } else {
                                return (
                                    <div className="lg:col-span-2">
                                        <div className="bg-slate-900 rounded-[3rem] p-12 text-center h-full flex flex-col items-center justify-center">
                                            <Ruler size={48} className="text-cyan-500 mb-6 mx-auto" />
                                            <h3 className="text-2xl font-black text-white uppercase mb-4">Sizing Details</h3>
                                            <p className="text-slate-400 text-sm max-w-md mx-auto">
                                                This product is available in standard sizes. Please inquire for specific dimensions or custom specifications.
                                            </p>
                                        </div>
                                    </div>
                                );
                            }
                        })()}
                    </div>
                </div>
            </section>

            {/* Customization Promo */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden isolate text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="relative z-10 max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">Need 100% Unique Design?</h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Our in-house design team specializes in creating custom sublimation layouts for your team. From pattern development to professional logo placement, we make sure you stand out.
                        </p>
                    </div>

                    <Link
                        href="/inquiry"
                        className="relative z-10 px-10 py-5 bg-cyan-500 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-slate-900 transition-all shadow-2xl shadow-cyan-500/30 active:scale-95"
                    >
                        Get Custom Design
                    </Link>
                </div>
            </section>

            <AnimatePresence>
                {showCustomize && product && (
                    <ProductCustomizeModal
                        product={product}
                        onClose={() => setShowCustomize(false)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProductDetailPage;


