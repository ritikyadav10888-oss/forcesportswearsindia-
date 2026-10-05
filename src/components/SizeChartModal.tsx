import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Ruler } from 'lucide-react';

interface SizeChartModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SizeChartModal({ isOpen, onClose }: SizeChartModalProps) {
    if (!isOpen) return null;

    const tshirtSizes = [
        { label: 'SMALL', chest: '38', length: '27' },
        { label: 'MEDIUM', chest: '40', length: '28' },
        { label: 'LARGE', chest: '42', length: '29' },
        { label: 'EXTRA LARGE', chest: '44', length: '30' },
        { label: '2X LARGE', chest: '46', length: '31' },
        { label: '3X LARGE', chest: '48', length: '32' },
        { label: '4X LARGE', chest: '50', length: '33' },
        { label: '5X LARGE', chest: '52', length: '34' },
        { label: '6X LARGE', chest: '54', length: '35' },
    ];

    const trackPantSizes = [
        { label: 'MEDIUM', waist: '30-32', length: '39' },
        { label: 'LARGE', waist: '32-34', length: '40' },
        { label: 'EXTRA LARGE', waist: '34-36', length: '41' },
        { label: '2X LARGE', waist: '36-38', length: '42' },
    ];

    const shortPantSizes = [
        { label: 'MEDIUM', waist: '30-32', length: '20' },
        { label: 'LARGE', waist: '32-34', length: '21' },
        { label: 'EXTRA LARGE', waist: '34-36', length: '22' },
        { label: '2X LARGE', waist: '36-38', length: '23' },
    ];

    const kidsSizes = [
        { label: '1 TO 2 YEARS', chest: '22' },
        { label: '3 TO 4 YEARS', chest: '24' },
        { label: '5 TO 6 YEARS', chest: '26' },
        { label: '7 TO 8 YEARS', chest: '28' },
        { label: '9 TO 10 YEARS', chest: '30' },
        { label: '11 TO 12 YEARS', chest: '32' },
        { label: '13 TO 14 YEARS', chest: '34' },
        { label: '15 TO 16 YEARS', chest: '36' },
    ];

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[200] bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="bg-white w-full max-w-2xl rounded-[2rem] overflow-hidden shadow-2xl"
                >
                    <div className="p-6 md:p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
                                <Ruler size={20} />
                            </div>
                            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-slate-900">Size Chart & Fit Guide</h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="p-6 md:p-8 space-y-8 max-h-[70vh] overflow-y-auto">
                        {/* T-Shirt Size Table */}
                        <div className="space-y-4">
                            <h3 className="font-bold text-slate-900 uppercase tracking-widest text-sm">T-Shirt Sizes (In Inches)</h3>
                            <div className="overflow-x-auto rounded-2xl border border-slate-200">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-xs uppercase bg-slate-100 text-slate-700 font-bold tracking-wider">
                                        <tr>
                                            <th className="px-6 py-4">Size</th>
                                            <th className="px-6 py-4">Full Chest</th>
                                            <th className="px-6 py-4">Body Length</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tshirtSizes.map((s, i) => (
                                            <tr key={s.label} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                                <td className="px-6 py-4 font-black text-slate-900">{s.label}</td>
                                                <td className="px-6 py-4 text-slate-600 font-medium">{s.chest}</td>
                                                <td className="px-6 py-4 text-slate-600 font-medium">{s.length}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Kids Size Table */}
                        <div className="space-y-4">
                            <h3 className="font-bold text-slate-900 uppercase tracking-widest text-sm">Kids Sizes (In Inches)</h3>
                            <div className="overflow-x-auto rounded-2xl border border-slate-200">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-xs uppercase bg-slate-100 text-slate-700 font-bold tracking-wider">
                                        <tr>
                                            <th className="px-6 py-4">Age / Size</th>
                                            <th className="px-6 py-4">Chest</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {kidsSizes.map((s, i) => (
                                            <tr key={s.label} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                                <td className="px-6 py-4 font-black text-slate-900">{s.label}</td>
                                                <td className="px-6 py-4 text-slate-600 font-medium">{s.chest}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Track Pant Size Table */}
                        <div className="space-y-4">
                            <h3 className="font-bold text-slate-900 uppercase tracking-widest text-sm">Track Pant Sizes (In Inches)</h3>
                            <div className="overflow-x-auto rounded-2xl border border-slate-200">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-xs uppercase bg-slate-100 text-slate-700 font-bold tracking-wider">
                                        <tr>
                                            <th className="px-6 py-4">Size</th>
                                            <th className="px-6 py-4">Waist</th>
                                            <th className="px-6 py-4">Length</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {trackPantSizes.map((s, i) => (
                                            <tr key={s.label} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                                <td className="px-6 py-4 font-black text-slate-900">{s.label}</td>
                                                <td className="px-6 py-4 text-slate-600 font-medium">{s.waist}</td>
                                                <td className="px-6 py-4 text-slate-600 font-medium">{s.length}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Short Pant Size Table */}
                        <div className="space-y-4">
                            <h3 className="font-bold text-slate-900 uppercase tracking-widest text-sm">Short Pant Sizes (In Inches)</h3>
                            <div className="overflow-x-auto rounded-2xl border border-slate-200">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-xs uppercase bg-slate-100 text-slate-700 font-bold tracking-wider">
                                        <tr>
                                            <th className="px-6 py-4">Size</th>
                                            <th className="px-6 py-4">Waist</th>
                                            <th className="px-6 py-4">Length</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {shortPantSizes.map((s, i) => (
                                            <tr key={s.label} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                                <td className="px-6 py-4 font-black text-slate-900">{s.label}</td>
                                                <td className="px-6 py-4 text-slate-600 font-medium">{s.waist}</td>
                                                <td className="px-6 py-4 text-slate-600 font-medium">{s.length}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-slate-500 italic mt-2">* Measurements are approximate. Tolerance of ±0.5 inches applies to all manufactured garments.</p>
                        </div>

                        {/* Fit Guide */}
                        <div className="space-y-4 pt-6 border-t border-slate-100">
                            <h3 className="font-bold text-slate-900 uppercase tracking-widest text-sm">Fit Guide</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <h4 className="font-black text-slate-900 mb-1">Slim Fit</h4>
                                    <p className="text-xs text-slate-600 leading-relaxed">Tapered body and slightly shorter sleeves for a modern, athletic silhouette.</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <h4 className="font-black text-slate-900 mb-1">Regular Fit</h4>
                                    <p className="text-xs text-slate-600 leading-relaxed">Traditional straight cut. Comfortable across the chest and shoulders for everyday use.</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <h4 className="font-black text-slate-900 mb-1">Relaxed Fit</h4>
                                    <p className="text-xs text-slate-600 leading-relaxed">Extra room throughout the body and sleeves for maximum ease of movement.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
