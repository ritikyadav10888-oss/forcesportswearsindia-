"use client";

import React from 'react';
import Link from 'next/link';
import SEO from '../../components/seo/SEO';
import TestimonialForm from '../../components/forms/TestimonialForm';
import { SEO_KEYWORDS } from '../../data/seoKeywords';

export default function TestimonialPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <SEO
                title="Write a Testimonial | Force Sports & Wears India"
                description="Share your experience with Force Sports custom jerseys, uniforms, and teamwear. Approved reviews appear on our homepage."
                keywords={SEO_KEYWORDS.testimonial}
            />
            <section className="bg-slate-900 py-12 px-6 text-center">
                <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                    Write a <span className="text-cyan-500">testimonial</span>
                </h1>
                <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
                    Tell teams across India how your Force kits performed. We publish reviews after a quick check.
                </p>
            </section>
            <div className="max-w-3xl mx-auto px-6 py-12">
                <TestimonialForm />
                <p className="text-center text-slate-400 text-sm mt-8">
                    Looking for bulk pricing instead?{' '}
                    <Link href="/inquiry" className="text-cyan-600 font-bold hover:underline">Get a quote</Link>
                </p>
            </div>
        </div>
    );
}
