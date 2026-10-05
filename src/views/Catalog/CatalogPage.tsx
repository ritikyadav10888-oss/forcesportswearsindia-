"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATALOG_DATA } from '../../data/catalogData';
import { PRODUCTS } from '../../data/products';
import { ChevronLeft, ChevronRight, Maximize2, X, BookOpen, Download, LayoutGrid, Loader2 } from 'lucide-react';
import { getCDNUrl } from '../../utils/cdnUtils';
const CatalogPage = () => {
    const catalogKeys = Object.keys(CATALOG_DATA) as (keyof typeof CATALOG_DATA)[];
    const [selectedCatalog, setSelectedCatalog] = useState<keyof typeof CATALOG_DATA>(catalogKeys[0]);
    const [currentPage, setCurrentPage] = useState(0);
    const [viewMode, setViewMode] = useState<'grid' | 'reader'>('reader');
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [catalogs, setCatalogs] = useState<any>(CATALOG_DATA);
    const [loading, setLoading] = useState(true);

    const currentCatalog = catalogs[selectedCatalog] || catalogs[catalogKeys[0]];
    const totalPages = currentCatalog?.pages?.length || 0;

    const getPageSrc = (page: any, colorFile?: string | null) => {
        if (typeof page === 'string') {
            return getCDNUrl(page, { width: 1200 });
        }
        if (colorFile) {
            if (colorFile.startsWith('http://') || colorFile.startsWith('https://')) {
                return colorFile;
            }
            if (colorFile.startsWith('/')) {
                return getCDNUrl(colorFile, { width: 1200 });
            }
            return getCDNUrl(`${page.folder}/${colorFile}`, { width: 1200 });
        }
        return getCDNUrl(page.master, { width: 1200 });
    };

    useEffect(() => {
        setCatalogs(CATALOG_DATA);
        setLoading(false);
    }, []);

    const nextPage = useCallback(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
        setSelectedColor(null);
    }, [totalPages]);
    
    const prevPage = useCallback(() => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
        setSelectedColor(null);
    }, [totalPages]);

    // Preload neighbors
    useEffect(() => {
        if (totalPages === 0) return;
        const preload = (pageIdx: number) => {
            if (pageIdx >= 0 && pageIdx < totalPages) {
                const img = new Image();
                img.src = getPageSrc(currentCatalog.pages[pageIdx]);
            }
        };
        preload(currentPage + 1);
        preload(currentPage + 2);
        preload(currentPage - 1);
    }, [currentPage, currentCatalog, totalPages]);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (fullscreenImage) return; 
            if (e.key === 'ArrowRight') nextPage();
            if (e.key === 'ArrowLeft') prevPage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextPage, prevPage, fullscreenImage]);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#050B14] px-6">
                <Loader2 className="animate-spin text-brand-500 mb-4" size={32} />
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Loading catalogs…</p>
            </div>
        );
    }

    return (
        <div className="bg-[#050B14] min-h-screen pt-24 pb-16 text-white overflow-hidden relative">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-600/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 md:mb-10"
                >
                    <span className="text-brand-400 font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-[9px] md:text-[10px] mb-3 md:mb-4 block">Interactive Experience</span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase mb-3 md:mb-4 drop-shadow-2xl">
                        Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">Catalogs</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-xs md:text-sm font-medium leading-relaxed px-4">
                        Explore our comprehensive range of high-performance athletic wear and custom team kits through our digital lookbooks.
                    </p>
                </motion.div>

                {/* Glassmorphic Tabs */}
                <div className="flex flex-nowrap sm:flex-wrap overflow-x-auto sm:overflow-visible justify-start sm:justify-center gap-2 md:gap-4 mb-8 md:mb-12 p-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-full w-full sm:w-max max-w-full mx-auto shadow-2xl scrollbar-none items-center">
                    {catalogKeys.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setSelectedCatalog(cat);
                                setCurrentPage(0);
                            }}
                            className={`shrink-0 relative px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl sm:rounded-full text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-widest transition-all group overflow-hidden ${
                                selectedCatalog === cat ? 'text-white' : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            {selectedCatalog === cat && (
                                <motion.div 
                                    layoutId="activeCatalogTab" 
                                    className="absolute inset-0 bg-gradient-to-r from-brand-600 to-blue-600 rounded-xl sm:rounded-full shadow-[0_0_30px_rgba(8,145,178,0.5)]"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2 transition-transform group-active:scale-95">
                                {CATALOG_DATA[cat].title}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Viewer Controls */}
                <div className="flex flex-row items-center justify-between gap-4 mb-6 bg-white/5 backdrop-blur-md p-3 md:p-4 rounded-2xl border border-white/10 shadow-xl overflow-x-auto scrollbar-none">
                    <div className="flex items-center gap-2 bg-black/40 rounded-full p-1 border border-white/5 shrink-0">
                        <button
                            onClick={() => setViewMode('reader')}
                            className={`flex items-center gap-2 px-4 md:px-5 py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'reader' ? 'bg-white/10 text-brand-400' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}
                        >
                            <BookOpen size={14} /> <span className="hidden sm:inline">Reader</span>
                        </button>
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`flex items-center gap-2 px-4 md:px-5 py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'grid' ? 'bg-white/10 text-brand-400' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}
                        >
                            <LayoutGrid size={14} /> <span className="hidden sm:inline">Grid</span>
                        </button>
                    </div>

                    <div className="hidden md:block shrink-0">
                        <p className="text-[10px] font-black text-brand-400 uppercase tracking-widest drop-shadow-md">
                            {currentCatalog.description}
                        </p>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                        {(currentCatalog as any).downloadUrl && (
                            <a
                                href={(currentCatalog as any).downloadUrl}
                                download={`${currentCatalog.title}.pdf`}
                                className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-3 bg-gradient-to-r from-brand-600 to-blue-600 hover:from-brand-500 hover:to-blue-500 text-white rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-brand-900/40 hover:shadow-brand-500/50 hover:-translate-y-0.5"
                            >
                                <Download size={14} /> <span className="hidden sm:inline">Download PDF</span>
                            </a>
                        )}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        {viewMode === 'reader' ? (
                            <motion.div
                                key="reader"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                className="flex flex-col items-center"
                            >
                                <div className="relative group max-w-6xl w-full">
                                    {/* Reader Container */}
                                    <div className="relative p-2 md:p-6 bg-white backdrop-blur-2xl border border-slate-200 rounded-2xl md:rounded-[2rem] shadow-2xl flex items-center justify-center min-h-[45vh] md:min-h-[50vh] transition-all hover:border-brand-300">
                                        <div className="absolute inset-0 bg-slate-50 rounded-2xl md:rounded-[2rem] flex items-center justify-center -z-10">
                                            <BookOpen className="text-slate-200" size={48} />
                                        </div>
                                        
                                        <motion.img
                                            key={`${selectedCatalog}-${currentPage}-${selectedColor}`}
                                            initial={{ opacity: 0, scale: 0.98 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                            src={getPageSrc(currentCatalog.pages[currentPage], selectedColor)}
                                            alt={`Page ${currentPage + 1}`}
                                            className="max-h-[75vh] w-auto h-auto object-contain relative z-10 rounded-xl cursor-zoom-in drop-shadow-2xl"
                                            onClick={() => setFullscreenImage(getPageSrc(currentCatalog.pages[currentPage], selectedColor))}
                                        />
                                        
                                        {/* Page Navigation Arrows */}
                                        <button
                                            onClick={(e) => { e.stopPropagation(); prevPage(); }}
                                            className="absolute left-1 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-16 md:h-16 bg-white/80 backdrop-blur-md rounded-full border border-slate-200 flex items-center justify-center text-slate-800 opacity-10 md:opacity-0 group-hover:opacity-100 transition-all hover:bg-brand-600 hover:text-white hover:scale-110 z-20 shadow-xl"
                                        >
                                            <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); nextPage(); }}
                                            className="absolute right-1 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-16 md:h-16 bg-white/80 backdrop-blur-md rounded-full border border-slate-200 flex items-center justify-center text-slate-800 opacity-10 md:opacity-0 group-hover:opacity-100 transition-all hover:bg-brand-600 hover:text-white hover:scale-110 z-20 shadow-xl"
                                        >
                                            <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
                                        </button>

                                        {/* Color Variants (if interactive 3D) */}
                                        {(currentCatalog as any).isInteractive && (
                                            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-nowrap overflow-x-auto gap-2 justify-start md:justify-center z-30 bg-slate-600 p-2 rounded-full shadow-2xl w-max max-w-[95%] md:max-w-[85%] items-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                                <button
                                                    onClick={() => setSelectedColor(null)}
                                                    className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full transition-transform hover:scale-110 ${!selectedColor ? 'border-2 border-brand-400 scale-110' : ''}`}
                                                    style={{ backgroundColor: '#fff' }}
                                                    title="Master View"
                                                />
                                                {(() => {
                                                    const prod = PRODUCTS.find((p: any) => p.productCode === `#3D-INV-${(currentPage + 1).toString().padStart(2, '0')}`);
                                                    const gallery = prod?.gallery || [];
                                                    return gallery.map((item: string, idx: number) => {
                                                        const isSelected = selectedColor === item;
                                                        let cleanFilename = '';
                                                        try {
                                                            const decoded = decodeURIComponent(item);
                                                            const urlPath = decoded.split('?')[0];
                                                            cleanFilename = urlPath.split('/').pop() || '';
                                                        } catch (e) {
                                                            cleanFilename = item.split('/').pop() || '';
                                                        }
                                                        return (
                                                            <button
                                                                key={item}
                                                                onClick={() => setSelectedColor(item)}
                                                                className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 transition-transform hover:scale-110 overflow-hidden bg-slate-500/50 ${isSelected ? 'border-brand-400 scale-110' : 'border-slate-500/50'}`}
                                                                title={cleanFilename || `Variant ${idx + 1}`}
                                                            >
                                                                <img src={getCDNUrl(item, { width: 80 })} alt={cleanFilename || `Variant ${idx + 1}`} className="w-full h-full object-cover bg-slate-100" />
                                                            </button>
                                                        );
                                                    });
                                                })()}
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Thumbnail Strip */}
                                    <div className="flex gap-2 md:gap-3 mt-6 md:mt-8 overflow-x-auto pb-4 md:pb-6 px-2 md:px-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                                        {currentCatalog.pages.map((page: any, idx: number) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentPage(idx)}
                                                className={`flex-shrink-0 w-16 md:w-24 aspect-[3/4] md:aspect-square rounded-lg md:rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                                                    currentPage === idx ? 'border-brand-400 scale-105 shadow-[0_0_15px_rgba(34,211,238,0.5)]' : 'border-transparent opacity-40 hover:opacity-100 hover:scale-105'
                                                }`}
                                            >
                                                <img 
                                                    src={getPageSrc(page)} 
                                                    alt={`Thumb ${idx + 1}`}
                                                    className="w-full h-full object-cover" 
                                                    loading="lazy"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="grid"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
                            >
                                {currentCatalog.pages.map((page: any, idx: number) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        className="group aspect-[3/4] bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden relative cursor-pointer shadow-lg border border-white/10 hover:border-brand-400/50 hover:shadow-brand-500/20 transition-all duration-300"
                                        onClick={() => {
                                            setCurrentPage(idx);
                                            setViewMode('reader');
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-slate-800 animate-pulse -z-10" />
                                        <img 
                                            src={getPageSrc(page)} 
                                            alt={`Page ${idx + 1}`}
                                            className="w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:scale-110" 
                                            loading="lazy"
                                            onLoad={(e) => {
                                                (e.target as HTMLImageElement).classList.remove('opacity-0');
                                                (e.target as HTMLImageElement).classList.add('opacity-100');
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                            <span className="text-[10px] font-black uppercase tracking-widest bg-brand-600/90 backdrop-blur-md px-5 py-2 rounded-full text-white shadow-xl">
                                                View Page {idx + 1}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Fullscreen Viewer */}
            <AnimatePresence>
                {fullscreenImage && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        className="fixed inset-0 z-[100] bg-white/90 flex items-center justify-center p-4"
                        onClick={() => setFullscreenImage(null)}
                    >
                        <button
                            onClick={(e) => { e.stopPropagation(); setFullscreenImage(null); }}
                            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-black/5 backdrop-blur-md border border-slate-300 rounded-full flex items-center justify-center hover:bg-red-500 hover:border-red-500 hover:text-white transition-all text-slate-800 hover:rotate-90 z-[110]"
                        >
                            <X size={20} className="md:w-6 md:h-6" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            src={fullscreenImage}
                            alt="Fullscreen"
                            className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default CatalogPage;
