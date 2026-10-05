"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Lock, Database, Globe, UserCheck } from 'lucide-react';

const PrivacyPage = () => {
    const sections = [
        {
            title: "1. Information Collection",
            icon: <Database size={20} />,
            content: "We collect information you provide directly to us when you make an inquiry, subscribe to our newsletter, or communicate with us. This may include your name, email address, and contact number."
        },
        {
            title: "2. How We Use Data",
            icon: <Eye size={20} />,
            content: "The information we collect is used to provide, maintain, and improve our services, process your inquiries, and send you technical notices or promotional materials if you've opted in."
        },
        {
            title: "3. Data Security",
            icon: <Lock size={20} />,
            content: "Force Sports and Wears India implements strict security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction."
        },
        {
            title: "4. Cookies Policy",
            icon: <Globe size={20} />,
            content: "We use cookies to enhance your browsing experience and understand site usage. You can choose to disable cookies through your browser settings, though some features may not function properly."
        },
        {
            title: "5. Your Privacy Rights",
            icon: <UserCheck size={20} />,
            content: "You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us through our official inquiry form."
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <section className="bg-slate-900 py-20 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-600 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2"></div>
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter relative z-10"
                >
                    Privacy <span className="text-brand-500">Policy</span>
                </motion.h1>
                <p className="text-slate-400 mt-4 max-w-2xl mx-auto uppercase tracking-[0.3em] text-[10px] font-black relative z-10">
                    Your Data Security is Our Priority
                </p>
            </section>

            <section className="max-w-4xl mx-auto px-6 py-20">
                <div className="space-y-12">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
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
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 relative z-10">Secure Data</h3>
                    <p className="text-slate-400 text-sm font-medium mb-8 relative z-10">
                        We are committed to processing your data in accordance with global privacy standards.
                    </p>
                    <a href="/" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-brand-500 hover:text-white transition-all relative z-10">
                        Back To Home
                    </a>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPage;
