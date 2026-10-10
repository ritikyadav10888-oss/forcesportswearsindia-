"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { BRAND_DETAILS } from '../../data/brandData';
import { getCDNUrl } from '../../utils/cdnUtils';

const Navbar = () => {
    const location = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Uniforms', path: '/uniforms' },
        { name: 'Fabrics', path: '/fabrics' },
        { name: 'Catalog', path: '/catalog' },
        { name: 'ISPO', path: '/ispo' },
        { name: 'About', path: '/about' },
        { name: 'FAQ', path: '/faq' },
    ];

    return (
        <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-16 lg:h-20 flex items-center justify-between gap-3 lg:gap-6">
                <Link
                    href="/"
                    className="flex items-center gap-2 sm:gap-2.5 min-w-0 shrink group max-w-[70%] sm:max-w-[60%] lg:max-w-none"
                    onClick={() => setIsOpen(false)}
                >
                    <span className="h-9 w-9 sm:h-10 sm:w-10 lg:h-12 lg:w-12 shrink-0 rounded-[1.1rem] bg-white flex items-center justify-center shadow-[0_4px_14px_rgba(15,23,42,0.12)] border border-slate-200 p-1.5 transition-transform group-hover:scale-105">
                        <img
                            src={getCDNUrl(BRAND_DETAILS.logo)}
                            alt={BRAND_DETAILS.logoAlt ?? BRAND_DETAILS.name}
                            width={48}
                            height={48}
                            className="logo-mark w-full h-full object-contain"
                        />
                    </span>
                    <span className="font-bodoni text-[10px] sm:text-xs md:text-sm lg:text-base font-black tracking-tight text-slate-900 leading-tight uppercase lg:whitespace-nowrap group-hover:text-cyan-700 transition-colors">
                        {BRAND_DETAILS.navDisplayName}
                    </span>
                </Link>

                <div className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`text-xs xl:text-sm font-bold uppercase tracking-wide xl:tracking-widest transition-all hover:text-cyan-500 relative whitespace-nowrap ${
                                location === link.path ? 'text-cyan-600' : 'text-slate-600'
                            }`}
                        >
                            {link.name}
                            {location === link.path && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-600"
                                />
                            )}
                        </Link>
                    ))}
                    <Link
                        href="/inquiry"
                        className="px-5 py-2.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-200/50 transition-all active:scale-95 whitespace-nowrap shrink-0"
                    >
                        Get Quote
                    </Link>
                </div>

                <button
                    className="lg:hidden p-2 text-slate-900 focus:outline-none shrink-0"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-8 gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg font-black uppercase tracking-tighter transition-all ${
                                        location === link.path ? 'text-cyan-600' : 'text-slate-900'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/inquiry"
                                onClick={() => setIsOpen(false)}
                                className="w-full py-4 bg-slate-900 text-white text-center text-sm font-black uppercase tracking-widest rounded-2xl"
                            >
                                Get A Free Quote
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
