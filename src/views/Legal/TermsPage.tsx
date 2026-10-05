"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Scale, Info } from 'lucide-react';

const TermsPage = () => {
    const sections = [
        {
            title: "1. Acceptance of Terms",
            icon: <ShieldCheck size={20} />,
            content: "By accessing and using the Force Sports and Wears India website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our services."
        },
        {
            title: "2. Use of Website",
            icon: <FileText size={20} />,
            content: "The content on this website is for your general information and use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense."
        },
        {
            title: "3. Product Information",
            icon: <Info size={20} />,
            content: "We strive to display products and colors as accurately as possible. However, actual colors may vary depending on your monitor settings. Product specifications and availability are subject to change."
        },
        {
            title: "4. Intellectual Property",
            icon: <Scale size={20} />,
            content: "All trademarks, logos, and service marks displayed on this site are the property of Force Sports and Wears India or their respective owners. You are prohibited from using any marks without our written permission."
        },
        {
            title: "5. Orders & Payments",
            icon: <ShieldCheck size={20} />,
            content: "All orders are subject to acceptance and availability. Payments must be made through our authorized channels. We reserve the right to refuse or cancel any order for any reason."
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <section className="bg-slate-900 py-20 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-brand-500 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter relative z-10"
                >
                    Terms & <span className="text-brand-500">Conditions</span>
                </motion.h1>
                <p className="text-slate-400 mt-4 max-w-2xl mx-auto uppercase tracking-[0.3em] text-[10px] font-black relative z-10">
                    Legal Framework & Usage Policies
                </p>
            </section>

            <section className="max-w-4xl mx-auto px-6 py-20">
                <div className="space-y-12">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-brand-50 text-brand-600 rounded-xl">
                                    {section.icon}
                                </div>
                                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter">
                                    {section.title}
                                </h2>
                            </div>
                            <p className="text-slate-500 font-medium leading-relaxed">
                                {section.content}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-full blur-3xl"></div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 relative z-10">Need Clarification?</h3>
                    <p className="text-slate-400 text-sm font-medium mb-8 relative z-10">
                        If you have any questions regarding our terms, please feel free to reach out to our legal team.
                    </p>
                    <a href="/inquiry" className="inline-block px-8 py-4 bg-brand-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-brand-500 transition-all relative z-10">
                        Contact Support
                    </a>
                </div>
            </section>
        </div>
    );
};

export default TermsPage;
