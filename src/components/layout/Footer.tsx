"use client";
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, ShoppingBag, Youtube } from 'lucide-react';
import { BRAND_DETAILS } from '../../data/brandData';
import { getCDNUrl } from '../../utils/cdnUtils';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 sm:col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="h-12 w-12 md:h-14 md:w-14 shrink-0 rounded-[1.25rem] bg-white flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.2)] border border-white/10 p-2">
                                <img
                                    src={getCDNUrl(BRAND_DETAILS.logo)}
                                    alt={BRAND_DETAILS.logoAlt ?? BRAND_DETAILS.name}
                                    width={56}
                                    height={56}
                                    className="w-full h-full object-contain"
                                />
                            </span>
                            <h2 className="text-base sm:text-lg md:text-xl font-black tracking-wide leading-none text-slate-300 whitespace-nowrap uppercase">
                                {BRAND_DETAILS.navDisplayName}
                            </h2>
                        </div>
                        <p className="text-slate-400 max-w-sm mb-8 leading-relaxed text-sm md:text-base">
                            {BRAND_DETAILS.tagline}. Leading manufacturer and supplier of customized sports apparel since {BRAND_DETAILS.established}.
                        </p>
                        <div className="flex gap-4 mb-10">
                            <a href={BRAND_DETAILS.social.instagram} target="_blank" rel="noopener noreferrer" title="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 cursor-pointer transition-all border border-white/5 hover:border-cyan-400 shadow-lg">
                                <Instagram size={18} />
                            </a>
                            <a href={BRAND_DETAILS.social.facebook} target="_blank" rel="noopener noreferrer" title="Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 cursor-pointer transition-all border border-white/5 hover:border-cyan-400 shadow-lg">
                                <Facebook size={18} />
                            </a>
                            <a href={BRAND_DETAILS.social.youtube} target="_blank" rel="noopener noreferrer" title="YouTube" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 cursor-pointer transition-all border border-white/5 hover:border-cyan-400 shadow-lg">
                                <Youtube size={18} />
                            </a>
                            <a href={BRAND_DETAILS.social.indiamart} target="_blank" rel="noopener noreferrer" title="IndiaMart Store" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 cursor-pointer transition-all border border-white/5 hover:border-cyan-400 shadow-lg text-[10px] font-black">
                                <ShoppingBag size={17} />
                            </a>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 opacity-40">
                            <div className="px-3 py-1.5 border border-white/20 rounded-lg text-[8px] md:text-[9px] font-black uppercase tracking-widest bg-white/5">
                                ISO 9001:2015
                            </div>
                            <div className="px-3 py-1.5 border border-white/20 rounded-lg text-[8px] md:text-[9px] font-black uppercase tracking-widest bg-white/5">
                                Make In India
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Contact Us</h3>
                        <ul className="space-y-5 text-slate-400 text-sm">
                            <li className="flex items-start gap-3 group">
                                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-cyan-500 group-hover:scale-110 transition-transform" />
                                <a 
                                    href={BRAND_DETAILS.addresses[0].googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors leading-relaxed"
                                >
                                    {BRAND_DETAILS.addresses[0].text}
                                </a>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Phone size={18} className="flex-shrink-0 text-cyan-500 group-hover:scale-110 transition-transform" />
                                <a href={`tel:${BRAND_DETAILS.contacts.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                                    {BRAND_DETAILS.contacts.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Mail size={18} className="flex-shrink-0 text-cyan-500 group-hover:scale-110 transition-transform" />
                                <a href={`mailto:${BRAND_DETAILS.contacts.email}`} className="hover:text-white transition-colors">
                                    {BRAND_DETAILS.contacts.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Quick Navigation</h3>
                        <ul className="space-y-3 text-slate-400 text-sm font-medium">
                            <li><a href="/products" className="hover:text-cyan-400 transition-colors">Collections</a></li>
                            <li><a href="/fabrics" className="hover:text-cyan-400 transition-colors">All Fabrics</a></li>
                            <li><a href="/catalog" className="hover:text-cyan-400 transition-colors">Digital Catalog</a></li>
                            <li><a href="/about" className="hover:text-cyan-400 transition-colors">Our Story</a></li>
                            <li><a href="/inquiry" className="hover:text-cyan-400 transition-colors">Get A Quote</a></li>
                            <li><a href="/testimonial" className="hover:text-cyan-400 transition-colors">Write a Review</a></li>
                            <li><a href="/faq" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                </div>
                <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
                    <p>&copy; {new Date().getFullYear()} {BRAND_DETAILS.name}. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <a href="/terms" className="hover:text-cyan-500 transition-colors">Terms</a>
                        <a href="/privacy" className="hover:text-cyan-500 transition-colors">Privacy</a>
                    </div>
                    <p className="hidden md:block">Hand-crafted in Mumbai, India · ISO Certified</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
