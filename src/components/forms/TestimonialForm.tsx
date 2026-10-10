"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Send, Star, CheckCircle2, Upload, X, Camera, Sparkles, Heart } from 'lucide-react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const RATING_LABELS: Record<number, string> = {
    5: '🏆 5/5 — Phenomenal Quality!',
    4: '⚡ 4/5 — Great Apparel!',
    3: '👍 3/5 — Good Experience',
    2: '😐 2/5 — Average',
    1: '⚠️ 1/5 — Needs Improvement',
};

export default function TestimonialForm({ compact = false }: { compact?: boolean }) {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [quote, setQuote] = useState('');
    const [rating, setRating] = useState(5);
    const [hoverRating, setHoverRating] = useState(0);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert('Image size should be under 5MB');
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedName = name.trim();
        const trimmedQuote = quote.trim();
        if (trimmedName.length < 2 || trimmedQuote.length < 10) {
            setStatus('error');
            setMessage('Please enter your name and a review of at least 10 characters.');
            return;
        }

        setStatus('sending');
        setMessage('');

        try {
            const payload: Record<string, unknown> = {
                name: trimmedName.slice(0, 80),
                role: role.trim().slice(0, 80),
                quote: trimmedQuote.slice(0, 600),
                rating: Math.min(5, Math.max(1, Math.round(rating))),
                status: 'pending',
                createdAt: serverTimestamp(),
            };
            const trimmedEmail = email.trim();
            if (trimmedEmail) payload.email = trimmedEmail.slice(0, 120);
            if (imagePreview) payload.photoUrl = imagePreview;

            await addDoc(collection(db, 'testimonials'), payload);
            setStatus('success');
            setName('');
            setRole('');
            setEmail('');
            setQuote('');
            setImagePreview(null);
            setRating(5);
        } catch (error) {
            console.error('Testimonial submit failed', error);
            setStatus('error');
            setMessage('Could not send your review. Please try again.');
        }
    };

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-3xl border border-cyan-500/30 bg-slate-900/90 backdrop-blur-xl p-10 md:p-14 text-center shadow-2xl relative overflow-hidden"
            >
                {/* Floating ambient glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl" />

                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-cyan-500/20 relative z-10">
                    <Heart className="w-10 h-10 fill-current animate-bounce" />
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-widest mb-4">
                    <CheckCircle2 size={14} /> Review Submitted
                </div>

                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-3">
                    We Are Truly Humbled & Grateful!
                </h3>
                
                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-8 font-medium">
                    Thank you so much for taking the time to share your experience with Force Sports & Wears India. Your trust inspires our team to keep crafting champion-quality gear every day!
                </p>

                <button
                    onClick={() => {
                        setStatus('idle');
                        setMessage('');
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 text-xs font-black uppercase tracking-widest hover:bg-slate-700 hover:text-white transition-all"
                >
                    Write Another Review
                </button>
            </motion.div>
        );
    }

    const currentRating = hoverRating || rating;

    return (
        <form
            onSubmit={handleSubmit}
            className={`bg-slate-900/90 border border-slate-800/90 shadow-2xl backdrop-blur-xl ${
                compact ? 'rounded-3xl p-6 md:p-8' : 'rounded-[2.5rem] p-8 md:p-12'
            } space-y-6 relative overflow-hidden`}
        >
            {/* Form Header */}
            {!compact && (
                <div className="border-b border-slate-800/80 pb-6 mb-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-widest mb-3">
                        <Sparkles size={12} /> Share Your Team's Experience
                    </div>
                    <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
                        Review <span className="text-cyan-400">Force Sports & Wears India</span>
                    </h2>
                    <p className="text-slate-400 text-sm mt-2">
                        Tell us how your custom jerseys, fabric quality, and teamwear performed on the field.
                    </p>
                </div>
            )}

            {/* Grid Inputs: Name & Role */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2">
                        Your Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        maxLength={80}
                        className="w-full p-4 bg-slate-950/80 border border-slate-800 rounded-2xl outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 text-white placeholder-slate-600 transition-all font-medium"
                        placeholder="e.g. Rahul Sharma"
                    />
                </div>
                <div>
                    <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2">
                        Team / Academy / Company
                    </label>
                    <input
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        maxLength={80}
                        className="w-full p-4 bg-slate-950/80 border border-slate-800 rounded-2xl outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 text-white placeholder-slate-600 transition-all font-medium"
                        placeholder="e.g. Captain, Mumbai Cricket Club"
                    />
                </div>
            </div>

            {/* Email Field */}
            <div>
                <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2">
                    Email Address <span className="text-slate-500 font-medium lowercase">(private & not shown publicly)</span>
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={120}
                    className="w-full p-4 bg-slate-950/80 border border-slate-800 rounded-2xl outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 text-white placeholder-slate-600 transition-all font-medium"
                    placeholder="your.name@example.com"
                />
            </div>

            {/* Rating Stars */}
            <div>
                <div className="flex items-center justify-between mb-2">
                    <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400">
                        Overall Experience Rating <span className="text-cyan-400">*</span>
                    </label>
                    <span className="text-xs font-bold text-cyan-400">
                        {RATING_LABELS[currentRating] || `${currentRating}/5 Stars`}
                    </span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80 w-fit">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            onClick={() => setRating(star)}
                            className="p-1.5 transition-transform hover:scale-125 focus:outline-none"
                            aria-label={`${star} stars`}
                        >
                            <Star
                                size={26}
                                className={
                                    currentRating >= star
                                        ? 'text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]'
                                        : 'text-slate-700'
                                }
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Review Textarea */}
            <div>
                <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2">
                    Your Review & Experience <span className="text-cyan-400">*</span>
                </label>
                <textarea
                    required
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    maxLength={600}
                    rows={compact ? 4 : 5}
                    className="w-full p-4 bg-slate-950/80 border border-slate-800 rounded-2xl outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 text-white placeholder-slate-600 transition-all font-medium resize-y"
                    placeholder="Tell us about the fabric feel, sublimation print quality, stitching durability, delivery speed, or customer service…"
                />
                <p className="text-[10px] text-slate-500 mt-1.5 text-right font-medium">{quote.length}/600 characters</p>
            </div>

            {/* Team / Jersey Photo Upload */}
            <div>
                <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2">
                    Upload Team / Jersey Photo <span className="text-slate-500 lowercase font-medium">(optional)</span>
                </label>
                <div className="relative group">
                    <div
                        className={`w-full p-5 border-2 border-dashed rounded-2xl transition-all flex items-center justify-center gap-4 ${
                            imagePreview
                                ? 'border-cyan-400/80 bg-cyan-950/20'
                                : 'border-slate-800 hover:border-cyan-500/50 bg-slate-950/50'
                        }`}
                    >
                        {imagePreview ? (
                            <div className="relative flex items-center gap-4">
                                <img
                                    src={imagePreview}
                                    alt="Team Preview"
                                    className="h-16 w-auto object-contain rounded-xl border border-cyan-500/30 shadow-lg"
                                />
                                <div>
                                    <p className="text-xs font-bold text-white">Jersey Photo Attached</p>
                                    <p className="text-[10px] text-cyan-400 font-medium">Ready to submit with your review</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setImagePreview(null);
                                    }}
                                    className="bg-red-500/80 hover:bg-red-500 text-white p-1.5 rounded-full shadow-lg transition-colors ml-2"
                                >
                                    <X size={14} />
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3 text-slate-400 text-xs font-bold py-1">
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                                    <Camera size={20} />
                                </div>
                                <div>
                                    <p className="text-slate-300 font-bold">Click to attach photo of your team wearing Force gear</p>
                                    <p className="text-[10px] text-slate-500 font-medium">JPG, PNG or WebP under 5MB</p>
                                </div>
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={handleImageChange}
                        />
                    </div>
                </div>
            </div>

            {/* Error Message */}
            {status === 'error' && message && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold">
                    {message}
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 px-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black uppercase tracking-widest text-xs rounded-2xl shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50"
            >
                {status === 'sending' ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-950" /> Sending Review…
                    </>
                ) : (
                    <>
                        Submit Review <Send className="w-4 h-4" />
                    </>
                )}
            </button>
        </form>
    );
}
