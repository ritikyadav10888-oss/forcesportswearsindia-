import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';

interface CallToActionBannerProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
}

const CallToActionBanner: React.FC<CallToActionBannerProps> = ({
    title = "Ready to Upgrade Your Team's Gear?",
    subtitle = "Get a free 3D mockup and a custom quote tailored to your exact requirements.",
    buttonText = "Get A Quote Now"
}) => {
    return (
        <section className="relative py-24 overflow-hidden bg-slate-900 mt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-400 via-slate-900 to-slate-900"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-[10px] font-black uppercase tracking-widest mb-8">
                        <Zap size={14} className="animate-pulse" />
                        <span>Fast Turnaround</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 drop-shadow-lg">
                        {title}
                    </h2>
                    
                    <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                        {subtitle}
                    </p>

                    <Link href="/inquiry" className="group relative inline-flex items-center justify-center">
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-400 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative flex items-center gap-3 px-8 py-5 bg-white text-slate-900 rounded-full font-black uppercase tracking-widest text-sm transition-transform hover:scale-105 active:scale-95 shadow-2xl">
                            {buttonText}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToActionBanner;
