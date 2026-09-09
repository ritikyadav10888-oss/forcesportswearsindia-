"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Award, Users, ChevronRight } from 'lucide-react';
import { BRAND_DETAILS } from '../../data/brandData';
import Link from 'next/link';
import { getCDNUrl } from '../../utils/cdnUtils';
import SEO from '../../components/seo/SEO';
import FounderStory from '../../components/brand/FounderStory';
import { SEO_KEYWORDS } from '../../data/seoKeywords';

const ALPHA_FEATURES = [
    {
        icon: Target,
        title: 'Total Customization',
        desc: '100% customized sublimation printing. Your identity is integrated directly into the fabric.'
    },
    {
        icon: Award,
        title: 'Technical Fabrics',
        desc: 'Advanced moisture-wicking and breathable fabrics (Dri-Fit, Dot Knit).'
    },
    {
        icon: Users,
        title: 'In-House Precision',
        desc: 'Managing everything from digital design to final stitching in our Mumbai facility.'
    },
    {
        icon: Shield,
        title: 'Sport-Specific',
        desc: 'Tailored movement analysis for sport-specific cuts like Kabaddi or Cricket.'
    }
];

const GROUP = [
    { name: 'Force Sports and Wears India', desc: 'Custom Sportswear Manufacturing', logo: '/force sport and wears india.png' },
    { name: 'Force Playing Field India Private Limited', desc: 'Sports Infrastructure', logo: '/force group of company/force playing field logo .png' },
    { name: 'FORCE1LIVE', desc: 'Sports Media & Broadcasting', logo: '/force group of company/force1live .png', live: true },
    { name: 'Force Sports Infra', desc: 'Infrastructure & Development', logo: '/force group of company/force sport infra .png' },
    { name: 'Sportex India', desc: 'Fabrics & Manufacturing Unit', logo: '/force group of company/Sportex india.png' },
    { name: 'Fittooos', desc: 'Lifestyle & Streetwear', logo: '/force group of company/fittooos.png' },
    { name: 'Fit Sutra', desc: 'Fitness & Wellness', logo: '/force group of company/fit sutra .png' },
    { name: 'Shatak', desc: 'Premium Activewear', logo: '/force group of company/shatak logo.png' },
    { name: 'Jabraat', desc: 'Pro Team Kits', logo: '/force group of company/jabraat logo.png' },
    { name: 'Force Sports United', desc: 'Sports Event Management Company', logo: '/force group of company/force sports united logo.png' },
];

const AboutPage = () => {
    return (
        <div className="bg-white">
            <SEO
                title="About Force Sports and Wears India | Since 2007"
                description="Learn about Force Sports and Wears India — Mumbai-based custom sportswear manufacturing, our heritage since 2007, and our mission to fuel champions."
                keywords={SEO_KEYWORDS.about}
            />

            {/* Hero */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-20 pb-16">
                <div className="absolute inset-0 z-0">
                    <img
                        src={getCDNUrl('/about-hero.png')}
                        alt={`${BRAND_DETAILS.name} — custom sportswear manufacturing in Mumbai`}
                        className="w-full h-full object-cover object-center opacity-45"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/30" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-black text-white uppercase tracking-tighter leading-[0.9] mb-4 md:mb-6"
                    >
                        <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400">
                            About
                        </span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-black text-white uppercase tracking-tighter leading-[0.92]"
                    >
                        <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-50 to-slate-300">
                            {BRAND_DETAILS.nameLines[0]}
                        </span>
                        <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-1 md:mt-2 text-white/95">
                            {BRAND_DETAILS.nameLines[1]}
                        </span>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        Custom sportswear manufacturing in {BRAND_DETAILS.location} · Est. {BRAND_DETAILS.established}
                    </motion.p>
                </div>
            </section>

            <FounderStory />

            {/* What Sets Us Alpha */}
            <section className="bg-slate-50 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">What Sets Us Alpha?</h2>
                        <div className="w-20 h-1 bg-cyan-500 mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {ALPHA_FEATURES.map((feature, idx) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-cyan-500 transition-all group"
                            >
                                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-slate-900 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                    <feature.icon size={28} />
                                </div>
                                <h4 className="text-lg font-black mb-4 uppercase text-slate-900">{feature.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Manufacturing */}
            <section className="py-20 md:py-32 px-6 bg-slate-900 text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-cyan-400 font-bold tracking-widest uppercase mb-4 block">Manufacturing Excellence</span>
                            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter">
                                A Vertically <br /> Integrated Powerhouse
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-10">
                                Based in the heart of Mumbai, {BRAND_DETAILS.name}&apos;s {BRAND_DETAILS.manufacturing.unitLocation} facility manages the entire production cycle. From digital layout to final hand-stitching, we ensure every jersey meets the Force standard.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {BRAND_DETAILS.manufacturing.capabilities.slice(0, 4).map((cap) => (
                                    <div key={cap} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                                        <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                                        <span className="text-sm font-bold uppercase tracking-wide">{cap}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12">
                                <Link href="/fabrics" className="text-cyan-400 font-black uppercase tracking-[0.2em] text-xs flex items-center gap-2 hover:text-white transition-colors group">
                                    Browse All Fabrics & GSM <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src={getCDNUrl('/manufacturing-detail.png')}
                                alt="Production Detail"
                                className="rounded-3xl shadow-2xl w-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Force Group */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm mb-3 block">Our Corporate Ecosystem</span>
                    <h2 className="text-4xl font-black mb-16 text-slate-900 uppercase tracking-tighter">Force Group of Companies</h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {GROUP.map((company) => (
                            <div
                                key={company.desc}
                                className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:border-cyan-500 hover:shadow-xl transition-all group flex flex-col justify-center items-center text-center"
                            >
                                <div className="flex-1 flex items-center justify-center mb-4 min-h-[80px]">
                                    <img
                                        src={getCDNUrl(company.logo)}
                                        alt=""
                                        className="max-h-20 max-w-full object-contain group-hover:scale-105 transition-transform"
                                    />
                                </div>
                                <h4 className="text-lg md:text-xl font-black text-slate-900 mb-3 uppercase group-hover:text-cyan-600 transition-colors tracking-tight leading-tight flex items-center justify-center">
                                    {company.live ? (
                                        <span className="flex items-center justify-center gap-[2px]">
                                            FORCE<span className="text-[#F15A24] text-3xl md:text-4xl mx-[1px]">1</span>LIVE
                                        </span>
                                    ) : (
                                        company.name
                                    )}
                                </h4>
                                <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed font-bold uppercase tracking-widest opacity-60 mt-auto">
                                    {company.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
