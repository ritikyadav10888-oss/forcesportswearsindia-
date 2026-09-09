"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { BRAND_DETAILS } from '../../data/brandData';

const FounderStory = ({ showAboutLink = false }: { showAboutLink?: boolean }) => (
    <section className="bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-16 md:py-24">
            <div className="grid grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-2 sm:gap-4 lg:gap-6 items-stretch">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="min-w-0 h-full flex flex-col"
                >
                    <h2 className="text-[13px] sm:text-3xl md:text-4xl font-black mb-2 sm:mb-6 border-l-2 sm:border-l-4 border-cyan-500 pl-2 sm:pl-6 uppercase tracking-tighter text-slate-900 leading-[1.15]">
                        {BRAND_DETAILS.name}
                    </h2>
                    <p className="text-slate-600 text-[10px] sm:text-lg md:text-xl leading-relaxed mb-2 sm:mb-5">
                        {BRAND_DETAILS.aboutIntro}
                    </p>

                    <div className="grid grid-cols-2 gap-1.5 sm:gap-3 mb-3 sm:mb-6">
                        <article className="rounded-lg sm:rounded-2xl bg-slate-50 border border-slate-100 p-2 sm:p-5">
                            <p className="text-[7px] sm:text-[11px] font-black uppercase tracking-[0.18em] text-cyan-600 mb-1 sm:mb-2">
                                Our Mission
                            </p>
                            <p className="text-slate-600 text-[9px] sm:text-sm md:text-base leading-snug sm:leading-relaxed">
                                {BRAND_DETAILS.aboutMission}
                            </p>
                        </article>
                        <article className="rounded-lg sm:rounded-2xl bg-slate-50 border border-slate-100 p-2 sm:p-5">
                            <p className="text-[7px] sm:text-[11px] font-black uppercase tracking-[0.18em] text-cyan-600 mb-1 sm:mb-2">
                                Our Vision
                            </p>
                            <p className="text-slate-600 text-[9px] sm:text-sm md:text-base leading-snug sm:leading-relaxed">
                                {BRAND_DETAILS.aboutVision}
                            </p>
                        </article>
                    </div>

                    <div className="mt-auto grid grid-cols-2 gap-2 sm:gap-8 p-2.5 sm:p-6 bg-slate-50 rounded-lg sm:rounded-2xl border border-slate-100">
                        <div>
                            <span className="block text-base sm:text-3xl md:text-4xl font-black text-slate-900">{BRAND_DETAILS.established}</span>
                            <span className="text-[7px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">Founded Year</span>
                        </div>
                        <div>
                            <span className="block text-base sm:text-3xl md:text-4xl font-black text-slate-900">{BRAND_DETAILS.employeeStrength}</span>
                            <span className="text-[7px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">Staff Members</span>
                        </div>
                    </div>
                    {showAboutLink && (
                        <Link href="/about" className="mt-2 sm:mt-4 text-cyan-600 font-black uppercase tracking-widest text-[8px] sm:text-xs inline-flex items-center gap-1 hover:text-slate-900">
                            Full story <ChevronRight size={14} />
                        </Link>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full min-w-0 h-full"
                >
                    <div className="relative bg-slate-900 rounded-xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl h-full min-h-[220px] sm:min-h-[480px]">
                        <img
                            src={BRAND_DETAILS.proprietorPhoto}
                            alt={`${BRAND_DETAILS.proprietor}, Founder of ${BRAND_DETAILS.name}`}
                            className="absolute inset-0 w-full h-full object-cover object-[center_12%]"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent px-2 sm:px-8 pb-2.5 sm:pb-8 pt-10 sm:pt-28">
                            <span className="block text-cyan-400 font-black uppercase tracking-widest text-[6px] sm:text-[10px] mb-0.5 sm:mb-1">
                                Founder & Proprietor
                            </span>
                            <h3 className="text-[11px] sm:text-2xl md:text-3xl font-black text-white tracking-tight">
                                {BRAND_DETAILS.proprietor}
                            </h3>
                            <p className="mt-0.5 sm:mt-3 text-slate-300 text-[8px] sm:text-sm leading-snug sm:leading-relaxed">
                                Founded in {BRAND_DETAILS.established} to bridge premium quality and accessible sportswear in India.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default FounderStory;
