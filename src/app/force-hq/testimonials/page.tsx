"use client";

import React, { useEffect, useState } from 'react';
import { db } from '../../../lib/firebase';
import { collection, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { Loader2, CheckCircle2, EyeOff, Trash2, Star } from 'lucide-react';
import { Testimonial } from '../../../data/testimonials';

function recency(value: unknown): number {
    if (!value || typeof value !== 'object') return 0;
    const v = value as { toMillis?: () => number; seconds?: number };
    if (typeof v.toMillis === 'function') return v.toMillis();
    if (typeof v.seconds === 'number') return v.seconds * 1000;
    return 0;
}

export default function TestimonialsManager() {
    const [items, setItems] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, 'testimonials'),
            (snapshot) => {
                const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() })) as Testimonial[];
                data.sort((a, b) => recency(b.createdAt) - recency(a.createdAt));
                setItems(data);
                setLoading(false);
            },
            (error) => {
                console.error('Failed to load testimonials', error);
                setLoading(false);
            }
        );
        return () => unsubscribe();
    }, []);

    const setStatus = async (id: string, status: Testimonial['status']) => {
        try {
            await updateDoc(doc(db, 'testimonials', id), { status });
        } catch (error) {
            console.error(error);
            alert('Could not update this review.');
        }
    };

    const remove = async (id: string) => {
        if (!confirm('Delete this testimonial permanently?')) return;
        try {
            await deleteDoc(doc(db, 'testimonials', id));
        } catch (error) {
            console.error(error);
            alert('Could not delete this review.');
        }
    };

    const visible = items.filter((t) => filter === 'all' || t.status === filter);

    if (loading) {
        return (
            <div className="flex justify-center p-20">
                <Loader2 className="w-8 h-8 animate-spin text-cyan-600" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Testimonials</h1>
                    <p className="text-slate-500 mt-1">Approve customer reviews to show them on the homepage</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                    {(['pending', 'approved', 'rejected', 'all'] as const).map((key) => (
                        <button
                            key={key}
                            onClick={() => setFilter(key)}
                            className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest ${
                                filter === key ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-500'
                            }`}
                        >
                            {key} {key !== 'all' ? `(${items.filter((t) => t.status === key).length})` : `(${items.length})`}
                        </button>
                    ))}
                </div>
            </div>

            {visible.length === 0 ? (
                <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center text-slate-400">
                    No {filter === 'all' ? '' : filter} testimonials yet.
                </div>
            ) : (
                <div className="space-y-4">
                    {visible.map((item) => (
                        <div key={item.id} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div className="min-w-0">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <h3 className="font-black text-slate-900 uppercase">{item.name}</h3>
                                        <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${
                                            item.status === 'approved' ? 'bg-emerald-50 text-emerald-700' :
                                            item.status === 'rejected' ? 'bg-slate-100 text-slate-500' :
                                            'bg-amber-50 text-amber-700'
                                        }`}>
                                            {item.status}
                                        </span>
                                    </div>
                                    {item.role && (
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-600 mb-2">{item.role}</p>
                                    )}
                                    <div className="flex gap-0.5 text-yellow-500 mb-3">
                                        {Array.from({ length: item.rating || 5 }).map((_, i) => (
                                            <Star key={i} size={14} fill="currentColor" />
                                        ))}
                                    </div>
                                    <p className="text-slate-600 italic leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                                    {item.email && (
                                        <p className="text-xs text-slate-400 mt-3">{item.email}</p>
                                    )}
                                </div>
                                <div className="flex md:flex-col gap-2 shrink-0">
                                    {item.status !== 'approved' && (
                                        <button
                                            onClick={() => setStatus(item.id, 'approved')}
                                            className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-1 hover:bg-emerald-700"
                                        >
                                            <CheckCircle2 className="w-3.5 h-3.5" /> Approve
                                        </button>
                                    )}
                                    {item.status === 'approved' && (
                                        <button
                                            onClick={() => setStatus(item.id, 'rejected')}
                                            className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-[10px] font-black uppercase tracking-widest flex items-center gap-1 hover:bg-slate-200"
                                        >
                                            <EyeOff className="w-3.5 h-3.5" /> Hide
                                        </button>
                                    )}
                                    <button
                                        onClick={() => remove(item.id)}
                                        className="px-4 py-2 rounded-xl bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-1 hover:bg-red-100"
                                    >
                                        <Trash2 className="w-3.5 h-3.5" /> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
