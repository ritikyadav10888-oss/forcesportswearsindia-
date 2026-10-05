"use client";

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
    X, Upload, ImageIcon, RotateCcw, ChevronLeft, ChevronRight,
    MessageCircle, Send, Layers, Check, ChevronDown,
} from 'lucide-react';
import { Product } from '../../data/products';
import { BRAND_DETAILS } from '../../data/brandData';
import { SPORTEX_FABRICS } from '../../data/sportexFabrics';
import { getProductSportexFabric } from '../../utils/fabricMatching';
import { getCDNUrl } from '../../utils/cdnUtils';
import {
    getDefaultPlacement,
    getPlacementOverlayClass,
    getLogoScaleClass,
    isBackPlacement,
    TSHIRT_PLACEMENTS,
    LogoSize,
} from './productCustomizeUtils';

export interface PlayerRosterItem {
    name: string;
    number: string;
    size: string;
}

export interface CustomizationState {
    logo: string;
    logoPreview: string | null;
    size: LogoSize;
    placement: string;
    fabric: string;
    quantity: string;
    mode: 'Team Roster Order';
    roster: PlayerRosterItem[];
    leftSleeveText: string;
    rightSleeveText: string;
    frontLeftLogoDesc: string;
    frontRightLogoText: string;
    frontMidSponsorText: string;
    backLeftBottomText: string;
}

interface ProductCustomizeModalProps {
    product: Product;
    onClose: () => void;
}

const STEPS = ['Design', 'Details', 'Review'] as const;
const LOGO_SIZES: LogoSize[] = ['Small', 'Medium', 'Large', 'Extra Large'];

export default function ProductCustomizeModal({ product, onClose }: ProductCustomizeModalProps) {
    const router = useRouter();
    const defaultFabric = useMemo(
        () =>
            getProductSportexFabric(
                product.id,
                product.title,
                product.description,
                product.longDescription,
                product.features,
                product.specs
            ),
        [product]
    );

    const [step, setStep] = useState(0);
    const [fabricOpen, setFabricOpen] = useState(false);
    const [viewSide, setViewSide] = useState<'front' | 'back'>('front');
    const [customization, setCustomization] = useState<CustomizationState>({
        logo: '',
        logoPreview: null,
        size: 'Medium',
        placement: getDefaultPlacement(product.category),
        fabric: defaultFabric,
        quantity: '',
        mode: 'Team Roster Order',
        roster: [{ name: '', number: '', size: 'M' }],
        leftSleeveText: '',
        rightSleeveText: '',
        frontLeftLogoDesc: '',
        frontRightLogoText: '',
        frontMidSponsorText: '',
        backLeftBottomText: '',
    });

    useEffect(() => {
        setCustomization((c) => ({ ...c, fabric: defaultFabric }));
    }, [defaultFabric]);

    useEffect(() => {
        if (isBackPlacement(customization.placement)) {
            setViewSide('back');
        }
    }, [customization.placement]);

    useEffect(() => {
        setFabricOpen(false);
    }, [step]);

    const productImage = useMemo(() => {
        const showBack =
            viewSide === 'back' &&
            product.imageBack &&
            (isBackPlacement(customization.placement) || viewSide === 'back');
        const src = showBack && product.imageBack ? product.imageBack : product.image;
        return getCDNUrl(src, { width: 800 });
    }, [viewSide, product, customization.placement]);

    const sportexMeta = SPORTEX_FABRICS.find((f) => f.name === customization.fabric);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (!file.type.startsWith('image/')) {
            alert('Please upload an image file (PNG, JPG, SVG).');
            return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            setCustomization((c) => ({
                ...c,
                logoPreview: reader.result as string,
                logo: file.name,
            }));
        };
        reader.readAsDataURL(file);
    };

    const tryLogoUrlPreview = useCallback((url: string) => {
        if (!url.trim()) {
            setCustomization((c) => ({ ...c, logoPreview: null }));
            return;
        }
        if (url.startsWith('http') || url.startsWith('data:')) {
            const img = new window.Image();
            img.onload = () => setCustomization((c) => ({ ...c, logoPreview: url }));
            img.onerror = () => setCustomization((c) => ({ ...c, logoPreview: null }));
            img.src = url;
        }
    }, []);

    const buildInquiryParams = () => {
        const params = new URLSearchParams({
            product: product.title,
            code: product.productCode || '',
            placement: customization.placement,
            size: customization.size,
            fabric: customization.fabric,
            mode: customization.mode,
            leftSleeve: customization.leftSleeveText,
            rightSleeve: customization.rightSleeveText,
            frontLeft: customization.frontLeftLogoDesc,
            frontRight: customization.frontRightLogoText,
            frontMid: customization.frontMidSponsorText,
            backBottom: customization.backLeftBottomText,
        });
        if (customization.logo) params.set('logo', customization.logo);
        if (customization.quantity) params.set('quantity', customization.quantity);
        params.set('roster', JSON.stringify(customization.roster));
        return params;
    };

    const openWhatsApp = () => {
        const rosterStr = customization.roster.map((r, idx) => `#${idx + 1} ${r.name || 'Unnamed'} (No. ${r.number || '-'}, Size ${r.size})`).join(', ');
            
        const lines = [
            `Hi! I want to customize: ${product.title}`,
            product.productCode ? `Code: ${product.productCode}` : '',
            `Fabric: ${customization.fabric}${sportexMeta && /\d/.test(sportexMeta.gsm) ? ` (${sportexMeta.gsm} GSM)` : ''}`,
            `Placement: ${customization.placement}`,
            `Logo size: ${customization.size}`,
            customization.logo ? `Logo: ${customization.logo}` : '',
            `Roster Info: ${rosterStr}`,
            customization.leftSleeveText ? `Left Sleeve: ${customization.leftSleeveText}` : '',
            customization.rightSleeveText ? `Right Sleeve: ${customization.rightSleeveText}` : '',
            customization.frontLeftLogoDesc ? `Front Left Logo: ${customization.frontLeftLogoDesc}` : '',
            customization.frontRightLogoText ? `Front Right Logo: ${customization.frontRightLogoText}` : '',
            customization.frontMidSponsorText ? `Front Mid Sponsor: ${customization.frontMidSponsorText}` : '',
            customization.backLeftBottomText ? `Back Bottom Text: ${customization.backLeftBottomText}` : '',
            customization.quantity ? `Qty: ${customization.quantity}` : '',
            'Please share MOQ, pricing, and timeline.',
        ].filter(Boolean);
        window.open(
            `${BRAND_DETAILS.contacts.whatsappLink}&text=${encodeURIComponent(lines.join('\n'))}`,
            '_blank'
        );
    };

    const goToInquiry = () => {
        onClose();
        router.push(`/inquiry?${buildInquiryParams().toString()}`);
    };

    const canNext = step === 0 ? true : step === 1 ? true : true;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-slate-900/70 backdrop-blur-md"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 24 }}
                className="bg-white w-full max-w-5xl rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row h-[94vh] max-h-[94vh] md:h-auto md:max-h-[92vh] min-h-0"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute top-3 right-3 sm:top-5 sm:right-5 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-200 z-30"
                >
                    <X size={20} />
                </button>

                {/* Live preview */}
                <div className="w-full md:w-[42%] bg-gradient-to-br from-slate-100 to-slate-50 flex flex-col p-4 sm:p-6 md:p-8 shrink-0 border-b md:border-b-0 md:border-r border-slate-100">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-[9px] font-black uppercase tracking-widest text-brand-600">Live preview</span>
                        {product.imageBack && (
                            <div className="flex rounded-full bg-white p-0.5 border border-slate-200 shadow-sm">
                                {(['front', 'back'] as const).map((side) => (
                                    <button
                                        key={side}
                                        type="button"
                                        onClick={() => setViewSide(side)}
                                        className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest transition-all ${
                                            viewSide === side ? 'bg-slate-900 text-white' : 'text-slate-400'
                                        }`}
                                    >
                                        {side}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="relative flex-1 flex items-center justify-center min-h-[200px] md:min-h-[320px]">
                        <motion.img
                            key={productImage}
                            initial={{ opacity: 0.6 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.25 }}
                            src={productImage}
                            alt={product.title}
                            className="w-full max-w-[280px] max-h-[42vh] md:max-h-[360px] object-contain"
                        />

                        <AnimatePresence mode="wait">
                            {(customization.logoPreview || customization.logo) && (
                                <motion.div
                                    key={`${customization.placement}-${customization.size}-${viewSide}`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                                    className={`absolute border-2 border-dashed border-brand-500 bg-brand-500/15 rounded-lg flex items-center justify-center overflow-hidden pointer-events-none ${getPlacementOverlayClass(
                                        customization.placement,
                                        product.category
                                    )} ${getLogoScaleClass(customization.size)}`}
                                >
                                    {customization.logoPreview ? (
                                        <img
                                            src={customization.logoPreview}
                                            alt="Logo preview"
                                            className="w-full h-full object-contain p-1"
                                        />
                                    ) : (
                                        <span className="text-[7px] font-black text-brand-700 uppercase px-1 text-center leading-tight">
                                            {customization.logo.slice(0, 24)}
                                        </span>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest text-center mt-2">
                        Placement & size update in real time
                    </p>
                </div>

                {/* Form */}
                <div className="flex-1 flex flex-col min-h-0 min-w-0">
                    <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-slate-100">
                        <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest">Customization</span>
                        <h2 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tighter mt-1 line-clamp-2">
                            {product.title}
                        </h2>
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">
                            {product.productCode}
                        </p>

                        <div className="flex gap-2 mt-4">
                            {STEPS.map((label, i) => (
                                <button
                                    key={label}
                                    type="button"
                                    onClick={() => setStep(i)}
                                    className={`flex-1 py-2 rounded-xl text-[8px] font-black uppercase tracking-widest border transition-all ${
                                        step === i
                                            ? 'bg-brand-600 text-white border-brand-600'
                                            : i < step
                                              ? 'bg-brand-50 text-brand-700 border-brand-200'
                                              : 'bg-white text-slate-400 border-slate-100'
                                    }`}
                                >
                                    {i + 1}. {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 space-y-6 overscroll-contain">
                        <AnimatePresence mode="wait">
                            {step === 0 && (
                                <motion.div
                                    key="step0"
                                    initial={{ opacity: 0, x: 12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -12 }}
                                    className="space-y-5"
                                >
                                    <div>
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">
                                            Upload logo
                                        </label>
                                        <label className="flex flex-col items-center justify-center gap-3 p-8 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50 cursor-pointer hover:border-brand-400 hover:bg-brand-50/50 transition-all group">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={handleFileUpload}
                                            />
                                            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-500 shadow-sm group-hover:scale-110 transition-transform">
                                                <Upload size={22} />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                                                Tap to upload PNG, JPG, or SVG
                                            </span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">
                                            Or paste logo URL / notes
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="https://... or describe your logo"
                                            value={customization.logo}
                                            onChange={(e) => {
                                                const v = e.target.value;
                                                setCustomization((c) => ({ ...c, logo: v }));
                                                tryLogoUrlPreview(v);
                                            }}
                                            className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-bold focus:ring-2 focus:ring-brand-500 outline-none"
                                        />
                                    </div>
                                </motion.div>
                            )}

                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -12 }}
                                    className="space-y-6"
                                >
                                    {product.category === 'T-Shirts' && (
                                        <div>
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">
                                                Logo placement
                                            </label>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[200px] overflow-y-auto pr-1">
                                                {TSHIRT_PLACEMENTS.map((p) => (
                                                    <button
                                                        key={p}
                                                        type="button"
                                                        onClick={() =>
                                                            setCustomization((c) => ({ ...c, placement: p }))
                                                        }
                                                        className={`px-2 py-2 rounded-xl text-[7px] font-black uppercase tracking-widest border transition-all ${
                                                            customization.placement === p
                                                                ? 'bg-slate-900 text-white border-slate-900'
                                                                : 'bg-white text-slate-400 border-slate-100 hover:border-brand-300'
                                                        }`}
                                                    >
                                                        {p}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div>
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">
                                            Logo size
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {LOGO_SIZES.map((s) => (
                                                <button
                                                    key={s}
                                                    type="button"
                                                    onClick={() => setCustomization((c) => ({ ...c, size: s }))}
                                                    className={`flex-1 min-w-[70px] px-3 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest border transition-all ${
                                                        customization.size === s
                                                            ? 'bg-brand-600 text-white border-brand-600 shadow-lg shadow-brand-200'
                                                            : 'bg-white text-slate-400 border-slate-100'
                                                    }`}
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1">
                                            <Layers size={12} className="text-brand-500" /> Sportex fabric
                                        </label>
                                        <button
                                            type="button"
                                            onClick={() => setFabricOpen((o) => !o)}
                                            className="w-full flex items-center justify-between gap-2 px-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-900 hover:border-brand-400 focus:ring-2 focus:ring-brand-500 outline-none transition-colors"
                                        >
                                            <span>
                                                {customization.fabric}
                                                {sportexMeta && /\d/.test(sportexMeta.gsm)
                                                    ? ` · ${sportexMeta.gsm} GSM`
                                                    : ''}
                                            </span>
                                            <ChevronDown
                                                size={18}
                                                className={`text-slate-500 shrink-0 transition-transform ${fabricOpen ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        <AnimatePresence>
                                            {fabricOpen && (
                                                <motion.ul
                                                    initial={{ opacity: 0, y: -4 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -4 }}
                                                    className="absolute z-50 left-0 right-0 mt-2 max-h-52 overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/80 py-1 scrollbar-thin"
                                                >
                                                    {SPORTEX_FABRICS.map((f) => {
                                                        const label = `${f.name}${/\d/.test(f.gsm) ? ` · ${f.gsm} GSM` : ''}`;
                                                        const selected = customization.fabric === f.name;
                                                        return (
                                                            <li key={f.name}>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => {
                                                                        setCustomization((c) => ({
                                                                            ...c,
                                                                            fabric: f.name,
                                                                        }));
                                                                        setFabricOpen(false);
                                                                    }}
                                                                    className={`w-full text-left px-4 py-2.5 text-sm font-bold transition-colors ${
                                                                        selected
                                                                            ? 'bg-brand-600 text-white'
                                                                            : 'text-slate-900 hover:bg-slate-100'
                                                                    }`}
                                                                >
                                                                    {label}
                                                                </button>
                                                            </li>
                                                        );
                                                    })}
                                                </motion.ul>
                                            )}
                                        </AnimatePresence>
                                    </div>



                                    {/* Team Members / Player List */}
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                                Team Members List
                                            </label>
                                                <button
                                                    type="button"
                                                    onClick={() => setCustomization((c) => ({
                                                        ...c,
                                                        roster: [...c.roster, { name: '', number: '', size: 'M' }]
                                                    }))}
                                                    className="px-3 py-1.5 bg-brand-50 hover:bg-brand-100/80 text-brand-600 rounded-lg text-[9px] font-black uppercase tracking-widest transition-colors flex items-center gap-1"
                                                >
                                                    + Add Player
                                                </button>
                                        </div>

                                        <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                                            {customization.roster.map((player, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <span className="text-[10px] font-black text-slate-400 w-4 text-center">
                                                        {idx + 1}
                                                    </span>
                                                    <input
                                                        type="text"
                                                        placeholder="Player Name"
                                                        value={player.name}
                                                        onChange={(e) => {
                                                            const newRoster = [...customization.roster];
                                                            newRoster[idx].name = e.target.value;
                                                            setCustomization((c) => ({ ...c, roster: newRoster }));
                                                        }}
                                                        className="flex-1 min-w-0 px-3 py-2 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:ring-1 focus:ring-brand-500 outline-none"
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="e.g. 7"
                                                        value={player.number}
                                                        onChange={(e) => {
                                                            const newRoster = [...customization.roster];
                                                            newRoster[idx].number = e.target.value;
                                                            setCustomization((c) => ({ ...c, roster: newRoster }));
                                                        }}
                                                        className="w-16 px-3 py-2 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:ring-1 focus:ring-brand-500 outline-none text-center"
                                                    />
                                                    <select
                                                        value={player.size}
                                                        onChange={(e) => {
                                                            const newRoster = [...customization.roster];
                                                            newRoster[idx].size = e.target.value;
                                                            setCustomization((c) => ({ ...c, roster: newRoster }));
                                                        }}
                                                        className="px-2 py-2 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:ring-1 focus:ring-brand-500 outline-none"
                                                    >
                                                        {['S', 'M', 'L', 'XL', 'XXL', '3XL'].map(sz => (
                                                            <option key={sz} value={sz}>{sz}</option>
                                                        ))}
                                                    </select>
                                                    {customization.roster.length > 1 && (
                                                        <button
                                                            type="button"
                                                            onClick={() => setCustomization((c) => ({
                                                                ...c,
                                                                roster: c.roster.filter((_, rIdx) => rIdx !== idx)
                                                            }))}
                                                            className="p-2 text-slate-400 hover:text-red-500 rounded-lg"
                                                        >
                                                            <X size={14} />
                                                        </button>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Sleeve Customization */}
                                    <div className="space-y-3 pt-2 border-t border-slate-100">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                                            Sleeve Customization
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1.5 block">Left Sleeve Text</span>
                                                <input
                                                    type="text"
                                                    placeholder="e.g. ACADEMY"
                                                    value={customization.leftSleeveText}
                                                    onChange={(e) => setCustomization((c) => ({ ...c, leftSleeveText: e.target.value }))}
                                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:ring-1 focus:ring-brand-500 outline-none"
                                                />
                                            </div>
                                            <div>
                                                <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1.5 block">Right Sleeve Text</span>
                                                <input
                                                    type="text"
                                                    placeholder="e.g. INDIA"
                                                    value={customization.rightSleeveText}
                                                    onChange={(e) => setCustomization((c) => ({ ...c, rightSleeveText: e.target.value }))}
                                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:ring-1 focus:ring-brand-500 outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Front Chest & Mid Prints */}
                                    <div className="space-y-3 pt-2 border-t border-slate-100">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                                            Front Chest & Mid Prints
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1.5 block">Front Left (Logo Description)</span>
                                                <input
                                                    type="text"
                                                    placeholder="e.g. Club Crest"
                                                    value={customization.frontLeftLogoDesc}
                                                    onChange={(e) => setCustomization((c) => ({ ...c, frontLeftLogoDesc: e.target.value }))}
                                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:ring-1 focus:ring-brand-500 outline-none"
                                                />
                                            </div>
                                            <div>
                                                <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1.5 block">Front Right (Text/Logo)</span>
                                                <input
                                                    type="text"
                                                    placeholder="e.g. Brand Logo"
                                                    value={customization.frontRightLogoText}
                                                    onChange={(e) => setCustomization((c) => ({ ...c, frontRightLogoText: e.target.value }))}
                                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:ring-1 focus:ring-brand-500 outline-none"
                                                />
                                            </div>
                                            <div className="col-span-2">
                                                <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1.5 block">Front Middle (Sponsor/Text)</span>
                                                <input
                                                    type="text"
                                                    placeholder="e.g. FORCE SPORTS"
                                                    value={customization.frontMidSponsorText}
                                                    onChange={(e) => setCustomization((c) => ({ ...c, frontMidSponsorText: e.target.value }))}
                                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:ring-1 focus:ring-brand-500 outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Other Placements */}
                                    <div className="space-y-3 pt-2 border-t border-slate-100">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                                            Other Placements
                                        </label>
                                        <div>
                                            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1.5 block">Back Left Bottom Text</span>
                                            <input
                                                type="text"
                                                placeholder="e.g. EST. 2026"
                                                value={customization.backLeftBottomText}
                                                onChange={(e) => setCustomization((c) => ({ ...c, backLeftBottomText: e.target.value }))}
                                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:ring-1 focus:ring-brand-500 outline-none"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -12 }}
                                    className="space-y-4"
                                >
                                    <div>
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">
                                            Estimated quantity
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g. 50, 100, 500 pieces"
                                            value={customization.quantity}
                                            onChange={(e) =>
                                                setCustomization((c) => ({ ...c, quantity: e.target.value }))
                                            }
                                            className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-bold focus:ring-2 focus:ring-brand-500 outline-none"
                                        />
                                    </div>

                                    <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-brand-400">
                                            Order summary
                                        </p>
                                        <ul className="space-y-2 text-xs font-medium text-slate-300">
                                            <li className="flex gap-2">
                                                <Check size={14} className="text-brand-400 shrink-0 mt-0.5" />
                                                <span>{product.title}</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <Check size={14} className="text-brand-400 shrink-0 mt-0.5" />
                                                <span>
                                                    Fabric: {customization.fabric}
                                                    {sportexMeta && /\d/.test(sportexMeta.gsm)
                                                        ? ` (${sportexMeta.gsm} GSM)`
                                                        : ''}
                                                </span>
                                            </li>
                                            <li className="flex gap-2">
                                                <Check size={14} className="text-brand-400 shrink-0 mt-0.5" />
                                                <span>
                                                    {customization.placement} · {customization.size}
                                                </span>
                                            </li>
                                            {customization.logo && (
                                                <li className="flex gap-2">
                                                    <ImageIcon size={14} className="text-brand-400 shrink-0 mt-0.5" />
                                                    <span className="truncate">{customization.logo}</span>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="px-6 sm:px-8 py-4 border-t border-slate-100 bg-white space-y-3">
                        <div className="flex gap-2">
                            {step > 0 && (
                                <button
                                    type="button"
                                    onClick={() => setStep((s) => s - 1)}
                                    className="px-4 py-4 rounded-2xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all"
                                >
                                    <ChevronLeft size={18} />
                                </button>
                            )}
                            {step < 2 ? (
                                <button
                                    type="button"
                                    disabled={!canNext}
                                    onClick={() => setStep((s) => s + 1)}
                                    className="flex-1 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-brand-600 transition-all flex items-center justify-center gap-2"
                                >
                                    Next <ChevronRight size={16} />
                                </button>
                            ) : (
                                <div className="flex-1 flex flex-col sm:flex-row gap-2">
                                    <button
                                        type="button"
                                        onClick={openWhatsApp}
                                        className="flex-1 py-4 bg-[#25D366] text-white rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                                    >
                                        <MessageCircle size={16} /> WhatsApp
                                    </button>
                                    <button
                                        type="button"
                                        onClick={goToInquiry}
                                        className="flex-1 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-brand-600 transition-all"
                                    >
                                        <Send size={16} /> Add to inquiry
                                    </button>
                                </div>
                            )}
                        </div>
                        {step === 2 && (
                            <button
                                type="button"
                                onClick={() => setStep(0)}
                                className="w-full py-2 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-600 flex items-center justify-center gap-1"
                            >
                                <RotateCcw size={12} /> Edit design
                            </button>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
