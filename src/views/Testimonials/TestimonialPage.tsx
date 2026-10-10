"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Award, Trophy, ArrowRight, MessageSquareHeart, Quote, ThumbsUp, CheckCircle2 } from 'lucide-react';
import SEO from '../../components/seo/SEO';
import TestimonialForm from '../../components/forms/TestimonialForm';
import { SEO_KEYWORDS } from '../../data/seoKeywords';
import { db } from '../../lib/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { Testimonial, FALLBACK_TESTIMONIALS } from '../../data/testimonials';

function ApprovedTestimonialsWall() {
    const [approvedReviews, setApprovedReviews] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, 'testimonials'),
            (snapshot) => {
                const docs = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Testimonial[];

                // STRICT FILTER: Only show admin-approved testimonials
                const approvedOnly = docs.filter((item) => item.status === 'approved');
                setApprovedReviews(approvedOnly);
                setLoading(false);
            },
            (err) => {
                console.error('Failed to load public testimonials:', err);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, []);

    // If no custom approved reviews exist in DB yet, show fallback curated reviews
    const displayList: Testimonial[] = approvedReviews.length > 0 ? approvedReviews : FALLBACK_TESTIMONIALS.map((t, idx) => ({
        id: `fallback-${idx}`,
        name: t.name,
        role: t.role,
        quote: t.quote,
        rating: t.rating ?? 5,
        photoUrl: undefined,
        status: 'approved' as const,
    }));

    return (
        <div className="mt-20 border-t border-slate-800/80 pt-16">
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-black uppercase tracking-widest mb-3">
                    <CheckCircle2 size={13} /> Verified Team Feedback & Reviews
                </div>
                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
                    Approved <span className="text-cyan-400">Customer Testimonials</span>
                </h2>
                <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
                    Real feedback from captain teams, corporate leagues, and athletes across India.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {displayList.map((review, idx) => (
                    <motion.div
                        key={review.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 shadow-xl backdrop-blur-md flex flex-col justify-between relative group hover:border-cyan-500/40 transition-all"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex gap-1 text-amber-400">
                                    {Array.from({ length: review.rating || 5 }).map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <Quote className="w-6 h-6 text-cyan-500/30 group-hover:text-cyan-400/50 transition-colors" />
                            </div>

                            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium italic">
                                &ldquo;{review.quote}&rdquo;
                            </p>

                            {review.photoUrl && (
                                <div className="mb-4 rounded-2xl overflow-hidden border border-slate-800 max-h-44 bg-slate-950/60 flex items-center justify-center">
                                    <img
                                        src={review.photoUrl}
                                        alt={review.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="border-t border-slate-800/80 pt-4 flex items-center justify-between">
                            <div>
                                <h4 className="text-sm font-black uppercase text-white tracking-wide">{review.name}</h4>
                                {review.role && (
                                    <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 mt-0.5">{review.role}</p>
                                )}
                            </div>
                            <span className="w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                                <ThumbsUp size={14} />
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default function TestimonialPage() {
    return (
        <div className="bg-slate-950 min-h-screen text-white relative overflow-hidden">
            <SEO
                title="Review Force Sports & Wears India | Customer Feedback"
                description="Share your experience with Force Sports custom jerseys, uniforms, and athletic gear. Official feedback page for teams, schools & corporate clients."
                keywords={SEO_KEYWORDS.testimonial}
            />

            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-cyan-500/15 via-blue-600/10 to-transparent blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-t from-cyan-500/10 to-transparent blur-[140px] pointer-events-none" />

            {/* Hero Section */}
            <section className="relative pt-20 pb-12 px-6 text-center max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-black uppercase tracking-widest mb-6">
                        <MessageSquareHeart size={14} /> Official Customer Feedback Page
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                        Review <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">Force Sports & Wears India</span>
                    </h1>

                    <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                        Your voice fuels our craftsmanship. Tell teams, schools, and athletes across India how your custom sportswear performed on the field!
                    </p>

                    {/* Trust Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-10">
                        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md flex items-center justify-center gap-3">
                            <ShieldCheck className="text-cyan-400 w-5 h-5 shrink-0" />
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">18+ Years Manufacturing</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md flex items-center justify-center gap-3">
                            <Trophy className="text-amber-400 w-5 h-5 shrink-0" />
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">1M+ Teams Kitted</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md flex items-center justify-center gap-3">
                            <Award className="text-emerald-400 w-5 h-5 shrink-0" />
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Premium Sportex Quality</span>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Main Form & Showcase Container */}
            <div className="max-w-5xl mx-auto px-6 pb-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <TestimonialForm />
                </motion.div>

                {/* Public Approved Testimonials Section */}
                <ApprovedTestimonialsWall />

                {/* Footer Navigation */}
                <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-400 font-medium">
                    <span>Looking for custom teamwear or bulk pricing?</span>
                    <Link
                        href="/inquiry"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold uppercase tracking-wider text-xs hover:bg-cyan-500 hover:text-slate-950 transition-all group"
                    >
                        Request Bulk Quote <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
