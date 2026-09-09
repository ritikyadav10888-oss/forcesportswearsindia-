"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Filter, Check, Briefcase, Activity, MessageCircle, Info, X } from 'lucide-react';
import { BRAND_DETAILS } from '../../data/brandData';
import { getCDNUrl } from '../../utils/cdnUtils';
import { UNIFORMS, UniformProduct, UniformCategories } from '../../data/uniforms';
import { mergeLiveUniformCatalog, mergeUniformWithLocal, uniformFromFirestore } from '../../utils/uniformUtils';
import { db } from '../../lib/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const UniformsPage = () => {
    const router = useRouter();
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);

    // Live catalog — Force HQ / Firestore first, then remaining static items
    const [liveUniforms, setLiveUniforms] = useState<UniformProduct[]>(() =>
        UNIFORMS.map((u) => mergeUniformWithLocal(u))
    );

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, 'uniforms'),
            (snapshot) => {
                try {
                    const remote = snapshot.docs.map((d) =>
                        uniformFromFirestore(d.id, d.data() as Record<string, unknown>)
                    );
                    setLiveUniforms(mergeLiveUniformCatalog(remote));
                } catch (err) {
                    console.error('Failed to merge live uniforms', err);
                }
            },
            (error) => {
                console.error('Failed to load live uniforms', error);
                setLiveUniforms(UNIFORMS.map((u) => mergeUniformWithLocal(u)));
            }
        );
        return () => unsubscribe();
    }, []);

    const filteredUniforms = liveUniforms.filter(u => {
        if (selectedCategories.length === 0) return true;
        
        const categoryMatch = selectedCategories.includes(u.category);
        const subcategoryMatch = selectedSubcategories.length === 0 || (u.subcategory && selectedSubcategories.includes(u.subcategory));
        
        if (categoryMatch) {
            return subcategoryMatch;
        }
        
        return false;
    });

    const openWhatsApp = (product: UniformProduct) => {
        const message = `Hi! I am interested in the ${product.title} from the ${product.category} section.\n\nSpecs: ${product.specs.Fabric || product.specs.fabric || 'N/A'}.\n\nPlease provide pricing for a bulk order.`;
        const encoded = encodeURIComponent(message);
        window.open(`${BRAND_DETAILS.contacts.whatsappLink}&text=${encoded}`, '_blank');
    };

    const toggleSubcategory = (sub: string) => {
        setSelectedSubcategories(prev => 
            prev.includes(sub) ? prev.filter(s => s !== sub) : [...prev, sub]
        );
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <section className="bg-slate-900 py-20 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter relative z-10"
                >
                    Professional <span className="text-cyan-500">Uniforms</span>
                </motion.h1>
                <p className="text-slate-400 mt-6 max-w-2xl mx-auto uppercase tracking-[0.3em] text-[10px] font-black relative z-10">
                    Schools • Delivery • Corporates • Hospitality
                </p>
            </section>

            <div className="max-w-[1600px] mx-auto px-6 py-12">
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
                            lg:translate-x-0 lg:sticky lg:top-32 lg:w-72 lg:p-0 lg:shadow-none lg:border-none lg:bg-transparent lg:z-auto lg:h-fit
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

                                <div className="flex-1 space-y-6 overflow-y-auto pr-2 scrollbar-none">
                                    <div className="lg:sticky lg:top-32 space-y-6">
                                        <div>
                                            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                                <Briefcase size={14} className="text-cyan-600" /> Industry Needs
                                            </h3>

                                            {/* Categories Filter */}
                                            <div className="mb-6">
                                                <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest mb-4">Sectors</h4>
                                                <div className="space-y-4">
                                                    {UniformCategories.map(cat => {
                                                        const isSelected = selectedCategories.includes(cat);
                                                        const showSubcategories = isSelected;
                                                        const subcategories = ['T-shirt', 'Shorts', 'Bags', 'Caps', 'Trackpant'];

                                                        return (
                                                            <div key={cat} className="space-y-3">
                                                                <label className="flex items-center gap-3 cursor-pointer group">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        className="hidden" 
                                                                        checked={isSelected}
                                                                        onChange={() => {
                                                                            setSelectedCategories(prev => {
                                                                                const isRemoving = prev.includes(cat);
                                                                                const newCats = isRemoving ? prev.filter(c => c !== cat) : [...prev, cat];
                                                                                if (newCats.length === 0) {
                                                                                    setSelectedSubcategories([]);
                                                                                }
                                                                                return newCats;
                                                                            });
                                                                        }}
                                                                    />
                                                                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${isSelected ? 'bg-cyan-600 border-cyan-600' : 'bg-white border-slate-300 group-hover:border-cyan-400'}`}>
                                                                        {isSelected && <Check size={10} className="text-white" />}
                                                                    </div>
                                                                    <span className={`text-[10px] uppercase font-black tracking-widest transition-colors ${isSelected ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-800'}`}>
                                                                        {cat}
                                                                    </span>
                                                                </label>

                                                                {/* Subcategories - ONLY for School */}
                                                                {showSubcategories && (
                                                                    <motion.div 
                                                                        initial={{ opacity: 0, x: -10 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        className="ml-7 space-y-2 border-l-2 border-slate-100 pl-4 py-1"
                                                                    >
                                                                        {subcategories.map(sub => (
                                                                            <label key={sub} className="flex items-center gap-3 cursor-pointer group">
                                                                                <input 
                                                                                    type="checkbox" 
                                                                                    className="hidden" 
                                                                                    checked={selectedSubcategories.includes(sub)}
                                                                                    onChange={() => toggleSubcategory(sub)}
                                                                                />
                                                                                <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-all ${selectedSubcategories.includes(sub) ? 'bg-slate-900 border-slate-900' : 'bg-white border-slate-200 group-hover:border-slate-400'}`}>
                                                                                    {selectedSubcategories.includes(sub) && <Check size={8} className="text-white" />}
                                                                                </div>
                                                                                <span className={`text-[9px] uppercase font-bold tracking-widest transition-colors ${selectedSubcategories.includes(sub) ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'}`}>
                                                                                    {sub}
                                                                                </span>
                                                                            </label>
                                                                        ))}
                                                                    </motion.div>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-8 bg-cyan-600 rounded-[2rem] text-white relative overflow-hidden group mb-6">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                                            <h4 className="text-xl font-black uppercase tracking-tighter mb-4 relative z-10">Bulk Uniforms?</h4>
                                            <p className="text-cyan-100 text-[10px] font-bold uppercase tracking-wider leading-relaxed mb-6 relative z-10 opacity-80">
                                                Get specialized quotes for bulk orders.
                                            </p>
                                            <div className="flex flex-col gap-3">
                                                <Link href="/inquiry" onClick={() => setIsMobileFiltersOpen(false)} className="inline-block px-6 py-3 bg-white text-cyan-600 rounded-xl text-[9px] font-black uppercase tracking-widest relative z-10 hover:scale-105 transition-transform text-center font-black">
                                                    Email Inquiry
                                                </Link>
                                            </div>
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
                                Customise Your Search
                            </button>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            <AnimatePresence>
                                {filteredUniforms.map(uniform => (
                                    <motion.div
                                        key={uniform.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all border border-slate-100 group flex flex-col h-full cursor-pointer"
                                        onClick={() => router.push(`/uniforms/${uniform.id}`)}
                                    >
                                        <div className="h-72 bg-slate-100 overflow-hidden relative group/img">
                                            <img
                                                src={getCDNUrl(uniform.image, { width: 800 })}
                                                alt={uniform.title}
                                                loading="lazy"
                                                className={`w-full h-full object-contain transition-all duration-700 ${
                                                    uniform.imageBack ? 'group-hover/img:opacity-0 group-hover/img:scale-110' : 'group-hover:scale-110'
                                                }`}
                                            />
                                            {uniform.imageBack && (
                                                <img
                                                    src={getCDNUrl(uniform.imageBack, { width: 800 })}
                                                    alt={`${uniform.title} - Back View`}
                                                    loading="lazy"
                                                    className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover/img:opacity-100 transition-all duration-700 scale-110 group-hover/img:scale-100"
                                                />
                                            )}
                                            <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                                                <div className="bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-[9px] font-black text-white uppercase tracking-widest">
                                                    {uniform.category}
                                                </div>
                                            </div>
                                            {!uniform.imageBack && (
                                            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                                    <Info size={16} className="text-white" />
                                                    <span className="text-[10px] font-black text-white uppercase tracking-widest">View Deep Details</span>
                                                </div>
                                            </div>
                                            )}
                                        </div>
                                        <div className="p-8 flex flex-col flex-1">
                                            <div className="mb-4">
                                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 block">
                                                    {uniform.category} {uniform.subcategory && ` • ${uniform.subcategory}`}
                                                </span>
                                                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-2">{uniform.title}</h3>
                                                <p className="text-slate-500 text-xs leading-relaxed font-medium line-clamp-2">{uniform.description}</p>
                                            </div>

                                            <div className="mt-auto flex gap-2 md:gap-3">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        router.push(`/uniforms/${uniform.id}`);
                                                    }}
                                                    className="flex-1 py-3 md:py-4 bg-slate-50 text-slate-900 text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-cyan-600 hover:text-white transition-all border border-slate-100 text-center"
                                                >
                                                    View Specs
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        openWhatsApp(uniform);
                                                    }}
                                                    className="px-3 md:px-4 py-3 md:py-4 bg-[#25D366]/10 text-[#25D366] rounded-xl hover:bg-[#25D366] hover:text-white transition-all border border-[#25D366]/20"
                                                >
                                                    <MessageCircle size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {filteredUniforms.length === 0 && (
                            <div className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-slate-200">
                                <AnimatePresence>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                    >
                                        <Activity size={48} className="mx-auto text-slate-200 mb-6" />
                                        <p className="text-slate-400 font-black uppercase tracking-widest text-xs">No matching uniform styles found.</p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default UniformsPage;
