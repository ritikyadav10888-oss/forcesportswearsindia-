"use client";

import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { BRAND_DETAILS } from '../../data/brandData';
import Link from 'next/link';

export default function LeadCaptureForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        website_hp: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            // Trigger Email Notification directly without saving to Firestore
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    website_hp: formData.website_hp,
                    productType: 'Lead Capture Form',
                    message: 'Customer requested contact via the inline lead capture section.',
                    source: 'Inline Lead Capture Section'
                })
            });

            if (!response.ok) {
                throw new Error('Failed to send lead email');
            }

            setStatus('success');
            setFormData({ fullName: '', email: '', phone: '', website_hp: '' });

        } catch (error) {
            console.error('Lead capture error:', error);
            setStatus('idle');
            alert('Something went wrong. Please try again.');
        }
    };

    if (status === 'success') {
        return (
            <section className="bg-slate-900 py-16 px-6 overflow-hidden">
                <div className="max-w-3xl mx-auto bg-slate-800/50 rounded-3xl p-10 text-center border border-slate-700 shadow-xl">
                    <CheckCircle2 className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                    <h3 className="text-3xl font-black text-white mb-3 tracking-tighter uppercase">Request Received!</h3>
                    <p className="text-slate-400 text-lg">Thank you. Our sports apparel experts will review your request and reach out to you shortly to discuss pricing and designs.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-slate-900 py-20 px-6 overflow-hidden">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                
                {/* Left Side: Text */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase leading-tight">
                        Need a <span className="text-cyan-400">Custom Quote?</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-4 leading-relaxed">
                        Whether you need 50 jerseys or 5,000, {BRAND_DETAILS.name} delivers premium quality at competitive wholesale prices. Drop your details below.
                    </p>
                    <p className="text-slate-500 text-sm mb-8">
                        Need fabric, quantity & design details?{' '}
                        <Link href="/inquiry" className="text-cyan-400 font-bold hover:text-cyan-300 underline-offset-2 hover:underline">
                            Use the full inquiry form
                        </Link>
                    </p>
                    
                    <div className="hidden md:flex gap-4">
                        <div className="bg-slate-800 p-4 rounded-2xl flex-1 border border-slate-700 shadow-lg">
                            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-1">Fast Response</h4>
                            <p className="text-slate-400 text-xs">Within 24 hours</p>
                        </div>
                        <div className="bg-slate-800 p-4 rounded-2xl flex-1 border border-slate-700 shadow-lg">
                            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-1">Direct Factory</h4>
                            <p className="text-slate-400 text-xs">Best wholesale prices</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="md:w-1/2 w-full">
                    <div className="bg-white rounded-3xl p-8 shadow-2xl">
                        <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Request Pricing</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Honeypot field */}
                            <div style={{ display: 'none', opacity: 0, position: 'absolute', left: '-9999px' }} aria-hidden="true">
                                <input
                                    type="text"
                                    name="website_hp"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    value={formData.website_hp}
                                    onChange={e => setFormData({ ...formData, website_hp: e.target.value })}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input 
                                    required
                                    type="text" 
                                    placeholder="Full Name *"
                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-900"
                                    value={formData.fullName}
                                    onChange={e => setFormData({...formData, fullName: e.target.value})}
                                />
                                <input 
                                    required
                                    type="tel" 
                                    placeholder="Phone Number *"
                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-900"
                                    value={formData.phone}
                                    onChange={e => setFormData({...formData, phone: e.target.value})}
                                />
                            </div>
                            <input 
                                required
                                type="email" 
                                placeholder="Email Address *"
                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-900"
                                value={formData.email}
                                onChange={e => setFormData({...formData, email: e.target.value})}
                            />
                            
                            <button 
                                disabled={status === 'submitting'}
                                type="submit"
                                className="w-full bg-slate-900 hover:bg-cyan-600 text-white font-black uppercase tracking-wider text-sm py-5 rounded-xl transition-colors flex items-center justify-center gap-3 mt-2 shadow-lg shadow-slate-200"
                            >
                                {status === 'submitting' ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <>Get My Quote <Send size={16} /></>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}
