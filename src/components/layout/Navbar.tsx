"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { BRAND_DETAILS } from '../../data/brandData';
import { ISPO_EVENT } from '../../data/ispoData';
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
        { name: 'About', path: '/about' },
        { name: 'FAQ', path: '/faq' },
    ];

    return (
        <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-16 lg:h-20 flex items-center justify-between gap-3 lg:gap-6">
                <Link
                    href="/"
                    className="flex items-center gap-2.5 min-w-0 shrink group max-w-[70%] sm:max-w-[60%] lg:max-w-none"
                    onClick={() => setIsOpen(false)}
                >
                    <span className="h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11 shrink-0 flex items-center justify-center">
                        <img
                            src={getCDNUrl(BRAND_DETAILS.logo)}
                            alt={BRAND_DETAILS.logoAlt ?? BRAND_DETAILS.name}
                            width={44}
                            height={44}
                            className="w-full h-full object-contain"
                        />
                    </span>
                    <span className="font-display text-sm sm:text-base lg:text-lg font-semibold tracking-wide text-slate-900 leading-tight uppercase lg:whitespace-nowrap">
                        {BRAND_DETAILS.navDisplayName}
                    </span>
                </Link>

                <div className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`text-sm font-medium transition-colors hover:text-slate-900 relative whitespace-nowrap ${
                                location === link.path ? 'text-slate-900' : 'text-slate-500'
                            }`}
                        >
                            {link.name}
                            {location === link.path && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-brand-500"
                                />
                            )}
                        </Link>
                    ))}
                    <Link
                        href="/ispo"
                        className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors ${
                            location === '/ispo'
                                ? 'border-brand-500 bg-brand-50 text-brand-700'
                                : 'border-brand-200 text-brand-700 hover:bg-brand-50'
                        }`}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />
                        {ISPO_EVENT.shortLabel}
                    </Link>
                    <Link
                        href="/inquiry"
                        className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-brand-600 transition-colors whitespace-nowrap shrink-0"
                    >
                        Get Quote
                    </Link>
                </div>

                <button
                    className="lg:hidden p-2 text-slate-900 focus:outline-none shrink-0"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
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
                        <div className="flex flex-col px-6 py-6 gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`py-3 border-b border-slate-100 font-display text-xl font-semibold uppercase ${
                                        location === link.path ? 'text-brand-700' : 'text-slate-900'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/ispo"
                                onClick={() => setIsOpen(false)}
                                className="py-3 border-b border-slate-100 font-display text-xl font-semibold uppercase text-brand-700 flex items-center gap-2"
                            >
                                <span className="w-2 h-2 rounded-full bg-brand-500" aria-hidden="true" />
                                {ISPO_EVENT.shortLabel}
                            </Link>
                            <Link
                                href="/inquiry"
                                onClick={() => setIsOpen(false)}
                                className="mt-5 w-full py-4 bg-slate-900 text-white text-center text-sm font-semibold rounded-full"
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
