"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, ShoppingBag, Youtube } from 'lucide-react';
import { BRAND_DETAILS } from '../../data/brandData';
import { ISPO_EVENT } from '../../data/ispoData';
import { getCDNUrl } from '../../utils/cdnUtils';

const socialLinks = [
    { href: BRAND_DETAILS.social.instagram, label: 'Instagram', icon: Instagram },
    { href: BRAND_DETAILS.social.facebook, label: 'Facebook', icon: Facebook },
    { href: BRAND_DETAILS.social.youtube, label: 'YouTube', icon: Youtube },
    { href: BRAND_DETAILS.social.indiamart, label: 'IndiaMart Store', icon: ShoppingBag },
];

const navGroups = [
    {
        title: 'Explore',
        links: [
            { href: '/products', label: 'Products' },
            { href: '/uniforms', label: 'Team Uniforms' },
            { href: '/fabrics', label: 'Fabrics' },
            { href: '/catalog', label: 'Digital Catalog' },
        ],
    },
    {
        title: 'Company',
        links: [
            { href: '/about', label: 'Our Story' },
            { href: '/ispo', label: ISPO_EVENT.name },
            { href: '/testimonial', label: 'Write a Review' },
            { href: '/faq', label: 'FAQ' },
            { href: '/inquiry', label: 'Get a Quote' },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200 text-slate-900 pt-16 md:pt-20 pb-10 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 mb-14">
                    <div className="sm:col-span-2 lg:col-span-5">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <img
                                src={getCDNUrl(BRAND_DETAILS.logo)}
                                alt={BRAND_DETAILS.logoAlt ?? BRAND_DETAILS.name}
                                width={48}
                                height={48}
                                className="w-12 h-12 object-contain"
                            />
                            <span className="font-display text-xl font-semibold uppercase tracking-wide">
                                {BRAND_DETAILS.navDisplayName}
                            </span>
                        </Link>
                        <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
                            {BRAND_DETAILS.tagline}. Manufacturer and supplier of customised sports apparel since {BRAND_DETAILS.established}.
                        </p>
                        <div className="flex gap-2 mb-8">
                            {socialLinks.map(({ href, label, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    title={label}
                                    className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-900 transition-colors"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 border border-slate-200 rounded-full text-xs font-medium text-slate-600">ISO 9001:2015</span>
                            <span className="px-3 py-1.5 border border-slate-200 rounded-full text-xs font-medium text-slate-600">Make In India</span>
                        </div>
                    </div>

                    {navGroups.map((group) => (
                        <div key={group.title} className="lg:col-span-2">
                            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">{group.title}</h3>
                            <ul className="space-y-3">
                                {group.links.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-slate-700 hover:text-brand-700 transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="lg:col-span-3">
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">Contact</h3>
                        <ul className="space-y-4 text-slate-700">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-0.5 shrink-0 text-brand-600" aria-hidden="true" />
                                <a
                                    href={BRAND_DETAILS.addresses[0].googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-brand-700 transition-colors leading-relaxed"
                                >
                                    {BRAND_DETAILS.addresses[0].text}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="shrink-0 text-brand-600" aria-hidden="true" />
                                <a href={`tel:${BRAND_DETAILS.contacts.phone.replace(/\s+/g, '')}`} className="hover:text-brand-700 transition-colors">
                                    {BRAND_DETAILS.contacts.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="shrink-0 text-brand-600" aria-hidden="true" />
                                <a href={`mailto:${BRAND_DETAILS.contacts.email}`} className="hover:text-brand-700 transition-colors">
                                    {BRAND_DETAILS.contacts.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm text-center md:text-left">
                    <p>&copy; {new Date().getFullYear()} {BRAND_DETAILS.name}. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms</Link>
                        <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy</Link>
                    </div>
                    <p className="hidden md:block">Hand-crafted in Mumbai, India</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
