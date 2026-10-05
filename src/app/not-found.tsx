"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden px-6">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600 rounded-full blur-[150px] opacity-20 mix-blend-screen" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20 mix-blend-screen" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
            </div>

            <div className="relative z-10 max-w-3xl text-center flex flex-col items-center">
                {/* 404 Glitch / Hero Text */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative mb-8"
                >
                    <h1 className="text-[150px] md:text-[250px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-brand-400 to-blue-600 drop-shadow-2xl">
                        404
                    </h1>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"
                    />
                </motion.div>

                {/* Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
                        Out of Bounds!
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl font-medium max-w-xl mx-auto mb-12 leading-relaxed">
                        Looks like you missed the goal. The page you're searching for has been moved, deleted, or never existed in our playbook.
                    </p>
                </motion.div>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Link
                        href="/"
                        className="px-8 py-4 bg-brand-500 hover:bg-brand-400 text-slate-950 font-black uppercase tracking-widest text-xs rounded-full transition-all shadow-[0_0_40px_-10px_rgba(241,90,36,0.5)] hover:shadow-[0_0_60px_-10px_rgba(241,90,36,0.6)] flex items-center justify-center gap-2 active:scale-95"
                    >
                        <ArrowLeft size={16} strokeWidth={3} /> Return Home
                    </Link>
                    <Link
                        href="/products"
                        className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-black uppercase tracking-widest text-xs rounded-full border border-slate-700 transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                        <ShoppingBag size={16} strokeWidth={2} /> Browse Catalog
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
