"use client";

import React, { useState } from 'react';
import { Loader2, Send, Star, CheckCircle2, Upload, X, Camera } from 'lucide-react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';

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
            <div className={`rounded-3xl border border-emerald-100 bg-emerald-50 text-center ${compact ? 'p-8' : 'p-10'}`}>
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-2">We Are Truly Humbled & Grateful!</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
                    Thank you so much for taking the time to share your experience with Force Sports. Your trust and support inspire our team to keep crafting champion-quality gear every day.
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

            <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Team / Jersey Photo (Optional)</label>
                <div className="relative group">
                    <div className={`w-full p-4 border-2 border-dashed rounded-2xl transition-all flex items-center justify-center gap-3 ${imagePreview ? 'border-cyan-500 bg-cyan-50/10' : 'border-slate-200 hover:border-cyan-400 bg-slate-50'}`}>
                        {imagePreview ? (
                            <div className="relative flex items-center gap-3">
                                <img src={imagePreview} alt="Team Preview" className="h-16 w-auto object-contain rounded-lg shadow-sm" />
                                <span className="text-xs font-bold text-slate-700">Photo attached</span>
                                <button 
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setImagePreview(null);
                                    }}
                                    className="bg-red-500 text-white p-1 rounded-full shadow hover:bg-red-600 transition-colors ml-2"
                                >
                                    <X size={12} />
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2 text-slate-500 text-xs font-bold py-1">
                                <Camera size={18} className="text-cyan-600" />
                                <span>Upload photo of your team or jersey</span>
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
