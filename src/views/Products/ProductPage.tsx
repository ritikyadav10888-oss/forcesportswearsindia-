"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS, Product } from '../../data/products';
import Link from 'next/link';
import { Filter, X, Check, Activity, MessageCircle, Loader2, ChevronRight } from 'lucide-react';
import { getCDNUrl } from '../../utils/cdnUtils';
import SEO from '../../components/seo/SEO';
import { SEO_KEYWORDS } from '../../data/seoKeywords';
import { BRAND_DETAILS } from '../../data/brandData';
import ProductCustomizeModal from '../../components/products/ProductCustomizeModal';
import ProductCardDetails from '../../components/products/ProductCardDetails';
import { getProductSportexFabric } from '../../utils/fabricMatching';
import { SPORTEX_FABRICS } from '../../data/sportexFabrics';
import { mergeLiveProductCatalog, mergeProductWithLocal, productFromFirestore, is3dInnovation, compare3dInnovations } from '../../utils/productUtils';
import { db } from '../../lib/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const Categories = ['T-Shirts', 'Track Pants', 'Shorts', 'Jackets', 'Bags', 'Caps', '3D Innovations'] as const;
const Sports = ['Badminton', 'Cricket', 'Football', 'Volleyball', 'Kabaddi', 'Pickleball', 'Tennis'] as const;
const UsageTypes = ['T20', 'Practice', 'Travel', 'Coaches', 'Officials'] as const;

interface ProductPageProps {
    initialSport?: string;
}

const ProductPage = ({ initialSport }: ProductPageProps = {}) => {
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedSports, setSelectedSports] = useState<string[]>(() => {
        if (initialSport) {
            // Find case-insensitive match in Sports array
            const matchedSport = Sports.find(s => s.toLowerCase() === initialSport.toLowerCase());
            return matchedSport ? [matchedSport] : [];
        }
        return [];
    });
    const [selectedUsages, setSelectedUsages] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [customizingProduct, setCustomizingProduct] = useState<Product | null>(null);
    
    // Live catalog — Force HQ / Firestore first, then remaining static items
    const [liveProducts, setLiveProducts] = useState<Product[]>(() =>
        PRODUCTS.map((p) => mergeProductWithLocal(p))
    );
    const [loading, setLoading] = useState(false);
    const [liveError, setLiveError] = useState('');
    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, 'products'),
            (snapshot) => {
                try {
                    const remote = snapshot.docs.map((d) =>
                        productFromFirestore(d.id, d.data() as Record<string, unknown>)
                    );
                    setLiveProducts(mergeLiveProductCatalog(remote));
                    setLiveError('');
                } catch (err) {
                    console.error('Failed to merge live products', err);
                    setLiveError('Could not merge the live catalog. Showing the last known list.');
                }
                setLoading(false);
            },
            (error) => {
                console.error('Failed to load live products', error);
                setLiveError('Could not load saved products from Force HQ.');
                setLiveProducts(PRODUCTS.map((p) => mergeProductWithLocal(p)));
                setLoading(false);
            }
        );
        return () => unsubscribe();
    }, []);
    const filteredProducts = liveProducts.filter(p => {
        const categoryMatch = selectedCategories.length === 0 || 
            selectedCategories.includes(p.category);

        const sportMatch = selectedSports.length === 0 ||
            !p.sport ||
            p.sport === 'All' ||
            selectedSports.includes(p.sport) ||
            ['Bags', 'Caps', 'Track Pants', 'Shorts', 'Jackets', '3D Innovations'].includes(p.category);
        const usageMatch = selectedUsages.length === 0 || (p.usageType && selectedUsages.includes(p.usageType));
        const q = searchQuery.trim().toLowerCase();
        const textMatch = !q ||
            (p.title || '').toLowerCase().includes(q) ||
            (p.productCode || '').toLowerCase().includes(q);
        return categoryMatch && sportMatch && usageMatch && textMatch;
    }).sort((a, b) => {
        if (is3dInnovation(a) && is3dInnovation(b)) return compare3dInnovations(a, b);
        return 0;
    });

    const openWhatsApp = (product: Product, displayCategory?: string) => {
        const cat = displayCategory || product.category;
        const message = `Hi! I am interested in ${product.title} (${product.productCode || 'N/A'}).\n\nCategory: ${cat}\n\nPlease share bulk pricing, MOQ, and delivery timeline.`;
        const encoded = encodeURIComponent(message);
        window.open(`${BRAND_DETAILS.contacts.whatsappLink}&text=${encoded}`, '_blank');
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <SEO 
                title="Our Products | Customized Sports Apparel & Gear"
                description="Explore our range of premium sports apparel, including T-shirts, track pants, shorts, and jackets. 100% customizable for teams and individuals."
                keywords={SEO_KEYWORDS.products}
            />
            {/* Header */}
            <section className="bg-slate-900 py-10 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter relative z-10"
                >
                    Gear Up <span className="text-cyan-500">Pro</span>
                </motion.h1>
                <p className="text-slate-400 mt-4 max-w-2xl mx-auto uppercase tracking-[0.3em] text-[10px] font-black relative z-10">
                    Premium Sports Apparel & Custom Solutions
                </p>
            </section>

            <div className="max-w-[1600px] mx-auto px-6 py-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Mobile Filter Overlay */}
                    {isMobileFiltersOpen && (
                        <div 
                            className="fixed inset-0 bg-slate-900/50 z-[50] lg:hidden backdrop-blur-sm"
                            onClick={() => setIsMobileFiltersOpen(false)}
                        />
                    )}

                    {/* Sidebar / Filter Drawer */}
                    <aside 
                        className={`
                            fixed inset-y-0 right-0 w-[280px] bg-white z-[60] p-8 shadow-2xl border-l border-slate-100 flex flex-col transition-transform duration-300 ease-in-out
                            ${isMobileFiltersOpen ? 'translate-x-0' : 'translate-x-full'}
                            lg:translate-x-0 lg:sticky lg:top-32 lg:w-72 lg:p-0 lg:shadow-none lg:border-none lg:bg-transparent lg:z-auto lg:max-h-[calc(100vh-10rem)]
                        `}
                    >
                                <div className="lg:hidden flex items-center justify-between mb-8">
                                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                                        <Filter size={18} className="text-cyan-600" /> Filters
                                    </h3>
                                    <button 
                                        onClick={() => setIsMobileFiltersOpen(false)}
                                        className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                                    >
                                        <X size={20} className="text-slate-400" />
                                    </button>
                                </div>

                                <div className="flex-1 space-y-6 overflow-y-auto pr-2 no-scrollbar">
                                    <style>{`
                                        .no-scrollbar::-webkit-scrollbar { display: none; }
                                        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                                    `}</style>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                                <Filter size={14} className="text-cyan-600" /> Filters
                                            </h3>

                                            {/* Search Bar */}
                                            <div className="mb-8">
                                                <input
                                                    type="text"
                                                    placeholder="Search products or codes..."
                                                    value={searchQuery}
                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:ring-2 focus:ring-cyan-500 outline-none text-slate-900 placeholder:text-slate-400"
                                                />
                                            </div>

                                            {/* Categories Filter */}
                                            <div className="mb-8">
                                                <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest mb-4">Categories</h4>
                                                <div className="space-y-3">
                                                    {Categories.map(cat => (
                                                        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                                            <input 
                                                                type="checkbox" 
                                                                className="hidden" 
                                                                checked={selectedCategories.includes(cat)}
                                                                onChange={() => {
                                                                    setSelectedCategories(prev => 
                                                                        prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
                                                                    );
                                                                }}
                                                            />
                                                            <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${selectedCategories.includes(cat) ? 'bg-cyan-600 border-cyan-600' : 'bg-white border-slate-300 group-hover:border-cyan-400'}`}>
                                                                {selectedCategories.includes(cat) && <Check size={10} className="text-white" />}
                                                            </div>
                                                            <span className={`text-[10px] uppercase font-black tracking-widest transition-colors ${selectedCategories.includes(cat) ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-800'}`}>
                                                                {cat}
                                                            </span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Sports Filter */}
                                            <div className="mb-8">
                                                <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest mb-4">Sports</h4>
                                                <div className="space-y-4">
                                                    {Sports.map(sport => (
                                                        <div key={sport}>
                                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                                <input 
                                                                    type="checkbox" 
                                                                    className="hidden" 
                                                                    checked={selectedSports.includes(sport)}
                                                                    onChange={() => {
                                                                        setSelectedSports(prev => 
                                                                            prev.includes(sport) ? prev.filter(s => s !== sport) : [...prev, sport]
                                                                        );
                                                                    }}
                                                                />
                                                                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${selectedSports.includes(sport) ? 'bg-cyan-600 border-cyan-600' : 'bg-white border-slate-300 group-hover:border-cyan-400'}`}>
                                                                    {selectedSports.includes(sport) && <Check size={10} className="text-white" />}
                                                                </div>
                                                                <span className={`text-[10px] uppercase font-black tracking-widest transition-colors ${selectedSports.includes(sport) ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-800'}`}>
                                                                    {sport}
                                                                </span>
                                                            </label>
                                                            
                                                            <AnimatePresence>
                                                                {selectedSports.includes(sport) && (
                                                                    <motion.div 
                                                                        initial={{ opacity: 0, height: 0 }}
                                                                        animate={{ opacity: 1, height: 'auto' }}
                                                                        exit={{ opacity: 0, height: 0 }}
                                                                        className="mt-3 ml-7 space-y-3 border-l-2 border-slate-100 pl-4 overflow-hidden"
                                                                    >
                                                                        {UsageTypes.filter(usage => {
                                                                            if (usage === 'T20' && sport !== 'Cricket') return false;
                                                                            return true;
                                                                        }).map(usage => (
                                                                            <label key={`${sport}-${usage}`} className="flex items-center gap-2 cursor-pointer group">
                                                                                <input 
                                                                                    type="checkbox" 
                                                                                    className="hidden" 
                                                                                    checked={selectedUsages.includes(usage)}
                                                                                    onChange={() => {
                                                                                        setSelectedUsages(prev => 
                                                                                            prev.includes(usage) ? prev.filter(u => u !== usage) : [...prev, usage]
                                                                                        );
                                                                                    }}
                                                                                />
                                                                                <div className={`w-3 h-3 rounded-[3px] border flex items-center justify-center transition-all ${selectedUsages.includes(usage) ? 'bg-cyan-600 border-cyan-600' : 'bg-white border-slate-300 group-hover:border-cyan-400'}`}>
                                                                                    {selectedUsages.includes(usage) && <Check size={8} className="text-white" />}
                                                                                </div>
                                                                                <span className={`text-[9px] uppercase font-black tracking-widest transition-colors ${selectedUsages.includes(usage) ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'}`}>
                                                                                    {usage}
                                                                                </span>
                                                                            </label>
                                                                        ))}
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-8 bg-cyan-600 rounded-[2.5rem] text-white relative overflow-hidden group mb-6">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                                            <h4 className="text-xl font-black uppercase tracking-tighter mb-4 relative z-10">Custom Design?</h4>
                                            <p className="text-cyan-100 text-[10px] font-bold uppercase tracking-wider leading-relaxed mb-6 relative z-10 opacity-80">
                                                Create your unique team identity.
                                            </p>
                                            <Link href="/inquiry" onClick={() => setIsMobileFiltersOpen(false)} className="inline-block px-6 py-3 bg-white text-cyan-600 rounded-xl text-[9px] font-black uppercase tracking-widest relative z-10 hover:scale-105 transition-transform text-center font-black">
                                                Start Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                    </aside>

                    {/* Backdrop */}
                    <AnimatePresence>
                        {isMobileFiltersOpen && (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsMobileFiltersOpen(false)}
                                className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 lg:hidden"
                            />
                        )}
                    </AnimatePresence>

                    {/* Main Content Area */}
                    <main className="flex-1">
                        {/* Mobile Filter Toggle */}
                        <div className="lg:hidden mb-8">
                            <button 
                                onClick={() => setIsMobileFiltersOpen(true)}
                                className="w-full py-5 bg-white rounded-2xl border border-slate-100 shadow-sm shadow-slate-200/50 flex items-center justify-center gap-3 text-slate-900 font-black uppercase tracking-widest text-[11px] active:scale-95 transition-all"
                            >
                                <Filter size={18} className="text-cyan-600" />
                                Refine Your Gear
                            </button>
                        </div>

                        {liveError && (
                            <p className="text-xs font-bold text-red-500 mb-4">{liveError}</p>
                        )}

                        {loading && (
                            <div className="flex items-center justify-center gap-3 py-16 text-slate-400">
                                <Loader2 className="animate-spin text-cyan-500" size={24} />
                                <span className="text-[10px] font-black uppercase tracking-widest">Loading catalog…</span>
                            </div>
                        )}

                        {!loading && (
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">
                                Showing {filteredProducts.length} of {liveProducts.length} products
                                {(selectedCategories.length > 0 || selectedSports.length > 0 || selectedUsages.length > 0 || searchQuery) && ' · filters active'}
                            </p>
                        )}

                        {/* Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6 lg:gap-8">
                            {!loading && filteredProducts.map((product) => {
                                    const sportexFabric = getProductSportexFabric(
                                        product.id,
                                        product.title,
                                        product.description,
                                        product.longDescription,
                                        product.features,
                                        product.specs
                                    );
                                    const sportexGsm = SPORTEX_FABRICS.find((f) => f.name === sportexFabric)?.gsm;
                                    
                                    const isProductSportKit = product.category === 'T-Shirts' && product.sport && [
                                        'Cricket', 'Football', 'Volleyball', 'Kabaddi', 'Pickleball', 'Tennis', 'Badminton', 'Table Tennis'
                                    ].includes(product.sport);
                                    const displayCategory = (() => {
                                        if (isProductSportKit) {
                                            if (selectedCategories.includes('Shorts')) return 'Shorts';
                                            if (selectedCategories.includes('Track Pants')) return 'Track Pants';
                                            return 'T-Shirts';
                                        }
                                        return product.category;
                                    })();

                                    return (
                                    <div
                                        key={(product as { firestoreId?: string }).firestoreId || product.id}
                                        className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all border border-slate-100 group flex flex-col h-full"
                                    >
                                        <div className="relative aspect-[4/5] bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.08),transparent_60%)] flex items-center justify-center overflow-hidden p-5 sm:p-6 group/img">
                                            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-slate-50" />
                                            {product.image ? (
                                                <img
                                                    src={getCDNUrl(product.image, { width: 600 })}
                                                    alt={product.title}
                                                    loading="lazy"
                                                    className={`relative z-10 max-w-full max-h-full object-contain transition-all duration-700 drop-shadow-[0_20px_30px_rgba(15,23,42,0.10)]
                                                        ${product.imageBack ? 'group-hover/img:opacity-0 group-hover/img:scale-110' : 'group-hover/img:scale-110'}`}
                                                />
                                            ) : (
                                                <div className="relative z-10 text-[10px] font-black text-slate-300 uppercase tracking-widest">No Preview</div>
                                            )}
                                            {product.imageBack && product.image && (
                                                <img 
                                                    src={getCDNUrl(product.imageBack, { width: 600 })} 
                                                    alt={`${product.title} - Back View`}
                                                    loading="lazy"
                                                    className="absolute inset-0 w-full h-full object-contain p-5 sm:p-6 opacity-0 group-hover/img:opacity-100 transition-all duration-700 scale-110 group-hover/img:scale-100 drop-shadow-[0_20px_30px_rgba(15,23,42,0.10)]"
                                                />
                                            )}
                                            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-col gap-2 z-20">
                                                <div className="flex gap-2">
                                                    {product.sport && !['Other', 'Activity', 'General', 'All'].includes(product.sport) && (
                                                        <div className="bg-cyan-500 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl shadow-cyan-900/20">
                                                            {product.sport}
                                                        </div>
                                                    )}
                                                    {product.usageType && product.usageType !== 'General' && (
                                                        <div className="bg-white/90 backdrop-blur text-slate-900 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm">
                                                            {product.usageType}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20">
                                                {product.productCode && (
                                                    <div className="bg-slate-900/90 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                                                        {product.productCode}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="p-6 sm:p-8 flex flex-col flex-1">
                                            <div className="mb-4">
                                                <div className="flex items-start justify-between gap-4">
                                                    <div>
                                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 block">
                                                            {displayCategory}
                                                            {product.sport && !['Other', 'Activity', 'General', 'All'].includes(product.sport) && ` • ${product.sport}`}
                                                            {product.usageType && product.usageType !== 'General' && ` • ${product.usageType}`}
                                                        </span>
                                                        <h3 className="text-lg sm:text-xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
                                                            {product.title}
                                                        </h3>
                                                    </div>
                                                </div>
                                                <p className="mt-2 text-slate-600 text-sm leading-relaxed font-medium">
                                                    {product.description}
                                                </p>
                                                <div className="mt-2 flex flex-wrap gap-2">
                                                    {product.brand && (
                                                        <span className="text-[9px] font-black text-cyan-700 uppercase tracking-widest px-2 py-0.5 bg-cyan-50 rounded-md">
                                                            {product.brand}
                                                        </span>
                                                    )}
                                                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
                                                        {displayCategory}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="mb-5 flex-1">
                                                <ProductCardDetails
                                                    product={product}
                                                    sportexFabric={sportexFabric}
                                                    sportexGsm={sportexGsm}
                                                    detailed
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-auto">
                                                <button
                                                    onClick={() => setCustomizingProduct(product)}
                                                    className="py-4 bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest rounded-2xl hover:bg-cyan-600 transition-all"
                                                >
                                                    Customize
                                                </button>
                                                <Link
                                                    href={`/products/${product.id}`}
                                                    className="py-4 bg-white text-slate-900 text-[11px] font-black uppercase tracking-widest rounded-2xl hover:bg-slate-50 transition-all border border-slate-200 text-center flex items-center justify-center gap-1"
                                                >
                                                    Full details <ChevronRight size={14} />
                                                </Link>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => openWhatsApp(product, displayCategory)}
                                                className="mt-3 w-full py-3 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#128C7E] text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white transition-all"
                                            >
                                                <MessageCircle size={16} /> WhatsApp Quote
                                            </button>
                                        </div>
                                    </div>
                                    );
                                })}
                        </div>

                        {!loading && filteredProducts.length === 0 && (
                            <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-slate-200">
                                <AnimatePresence>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                    >
                                        <Activity size={48} className="mx-auto text-slate-200 mb-6" />
                                        <p className="text-slate-400 font-black uppercase tracking-widest text-xs">No matches found in this configuration</p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        )}
                    </main>
                </div>
            </div>

            <AnimatePresence>
                {customizingProduct && (
                    <ProductCustomizeModal
                        product={customizingProduct}
                        onClose={() => setCustomizingProduct(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProductPage;
