"use client";

import React, { useState } from 'react';
import { Loader2, Send, Star, CheckCircle2 } from 'lucide-react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export default function TestimonialForm({ compact = false }: { compact?: boolean }) {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [quote, setQuote] = useState('');
    const [rating, setRating] = useState(5);
    const [hoverRating, setHoverRating] = useState(0);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

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

            await addDoc(collection(db, 'testimonials'), payload);
            setStatus('success');
            setName('');
            setRole('');
            setEmail('');
            setQuote('');
            setRating(5);
        } catch (error) {
            console.error('Testimonial submit failed', error);
            setStatus('error');
            setMessage('Could not send your review. Please try again.');
        }
    };

    if (status === 'success') {
        return (
            <div className={`rounded-3xl border border-emerald-100 bg-emerald-50 text-center ${compact ? 'p-8' : 'p-10'}`}>
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-600 text-sm">
                    Thank you for sharing your review with us. We appreciate your feedback!
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={`bg-white border border-slate-200 shadow-sm ${compact ? 'rounded-3xl p-6' : 'rounded-[2rem] p-8 md:p-10'} space-y-5`}>
            {!compact && (
                <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-cyan-600 mb-2">Share your experience</p>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900">Write a testimonial</h3>
                    <p className="text-slate-500 text-sm mt-2">Tell us about your experience with Force Sports & Wears India.</p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Your name *</label>
                    <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        maxLength={80}
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 text-slate-900"
                        placeholder="e.g. Priya Sharma"
                    />
                </div>
                <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Team / company</label>
                    <input
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        maxLength={80}
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 text-slate-900"
                        placeholder="e.g. Cricket Club Captain"
                    />
                </div>
            </div>

            <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Email (not shown publicly)</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={120}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 text-slate-900"
                    placeholder="you@email.com"
                />
            </div>

            <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Rating</label>
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            onClick={() => setRating(star)}
                            className="p-1"
                            aria-label={`${star} stars`}
                        >
                            <Star
                                size={22}
                                className={(hoverRating || rating) >= star ? 'text-yellow-500' : 'text-slate-300'}
                                fill={(hoverRating || rating) >= star ? 'currentColor' : 'none'}
                            />
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Your review *</label>
                <textarea
                    required
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    maxLength={600}
                    rows={compact ? 4 : 5}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 text-slate-900 resize-y"
                    placeholder="Tell others about the kits, fabric, delivery, or service…"
                />
                <p className="text-[10px] text-slate-400 mt-1 text-right">{quote.length}/600</p>
            </div>

            {status === 'error' && message && (
                <p className="text-sm font-bold text-red-600">{message}</p>
            )}

            <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full md:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-cyan-600 disabled:opacity-50"
            >
                {status === 'sending' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                {status === 'sending' ? 'Sending…' : 'Submit review'}
            </button>
        </form>
    );
}
