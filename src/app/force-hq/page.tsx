"use client";

import React, { useEffect, useState } from 'react';
import { Users, ShoppingBag, Layers, MessageSquare, TrendingUp, Star } from 'lucide-react';
import Link from 'next/link';
import { db } from '../../lib/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

export default function AdminDashboard() {
    const [counts, setCounts] = useState({ leads: 0, products: 0, uniforms: 0, fabrics: 0, testimonials: 0 });

    useEffect(() => {
        const unsubLeads = onSnapshot(collection(db, 'leads'), snap => setCounts(c => ({ ...c, leads: snap.size })));
        const unsubProducts = onSnapshot(collection(db, 'products'), snap => setCounts(c => ({ ...c, products: snap.size })));
        const unsubUniforms = onSnapshot(collection(db, 'uniforms'), snap => setCounts(c => ({ ...c, uniforms: snap.size })));
        const unsubFabrics = onSnapshot(collection(db, 'fabrics'), snap => setCounts(c => ({ ...c, fabrics: snap.size })));
        const unsubTestimonials = onSnapshot(collection(db, 'testimonials'), snap => setCounts(c => ({ ...c, testimonials: snap.size })));
        
        return () => {
            unsubLeads();
            unsubProducts();
            unsubUniforms();
            unsubFabrics();
            unsubTestimonials();
        };
    }, []);

    const stats = [
        { name: 'Total Leads', value: counts.leads, icon: MessageSquare, color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { name: 'Products', value: counts.products, icon: ShoppingBag, color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
        { name: 'Uniforms', value: counts.uniforms, icon: Users, color: 'text-purple-500', bg: 'bg-purple-500/10' },
        { name: 'Fabrics', value: counts.fabrics, icon: Layers, color: 'text-amber-500', bg: 'bg-amber-500/10' },
        { name: 'Testimonials', value: counts.testimonials, icon: Star, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Dashboard Overview</h1>
                <p className="text-slate-500 mt-2">Welcome to the Force Group CMS. What would you like to manage today?</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.name} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                            <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center`}>
                                <Icon className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-500">{stat.name}</p>
                                <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-3xl p-8 text-white shadow-xl shadow-blue-900/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                        <MessageSquare className="w-32 h-32" />
                    </div>
                    <h2 className="text-2xl font-black uppercase tracking-wide mb-2 relative z-10">New Leads Waiting</h2>
                    <p className="text-cyan-100 mb-6 relative z-10 max-w-sm">
                        You have new customer inquiries from the website. Follow up to convert these into sales.
                    </p>
                    <Link href="/force-hq/leads" className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider hover:scale-105 transition-transform relative z-10">
                        View Leads <TrendingUp className="w-4 h-4" />
                    </Link>
                </div>

                <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm relative overflow-hidden">
                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-wide mb-2">Catalog Manager</h2>
                    <p className="text-slate-500 mb-6 max-w-sm">
                        Add new products, update uniform specifications, or upload new fabric swatches.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/force-hq/products" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-slate-800 transition-colors">
                            Products
                        </Link>
                        <Link href="/force-hq/uniforms" className="inline-flex items-center gap-2 bg-slate-100 text-slate-900 px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-slate-200 transition-colors">
                            Uniforms
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
