"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../../components/seo/SEO';
import { SEO_KEYWORDS } from '../../data/seoKeywords';
import { Mail, Phone, MapPin, Send, MessageCircle, Upload, X, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { BRAND_DETAILS } from '../../data/brandData';

const THANK_YOU_MESSAGES = [
    {
        emoji: "🏆",
        heading: "You're on the Winning Team!",
        body: "Your inquiry has landed safely with us. Our team at Force Sports will review your requirements and reach out within 24 hours. Champions don't wait — neither will we!",
        tag: "Response within 24 hrs",
    },
    {
        emoji: "🎽",
        heading: "Kit Request Received!",
        body: "Brilliant! We've captured every detail of your inquiry. Our designers and production team will craft the perfect solution for your team. Stay tuned — greatness is being assembled!",
        tag: "Your inquiry is saved",
    },
    {
        emoji: "🚀",
        heading: "Inquiry Launched!",
        body: "Consider it done — your message is in our hands. Force Sports has been fuelling champions since 2007 and we can't wait to gear up your team next. We'll be in touch very soon!",
        tag: "Est. since 2007",
    },
    {
        emoji: "✨",
        heading: "Thank You for Reaching Out!",
        body: "We've received your inquiry and it's already with our team. Whether it's 10 jerseys or 10,000 — we treat every order like a championship final. Expect a call shortly!",
        tag: "Premium quality, always",
    },
    {
        emoji: "🤝",
        heading: "Great to Hear from You!",
        body: "Your inquiry is confirmed! We take pride in building long-term partnerships, not just selling uniforms. Our team will personally review your requirements and come back to you fast.",
        tag: "Pan-India delivery",
    },
    {
        emoji: "⚡",
        heading: "Rapid Response Loading…",
        body: "Your details are with us! Force Sports moves at match speed — expect our team to reach out within the next 24 hours. In the meantime, feel free to WhatsApp us directly!",
        tag: "Quick turnaround",
    },
    {
        emoji: "🎯",
        heading: "Bullseye! Inquiry Confirmed.",
        body: "Perfect shot! We've got your inquiry and our experts are already on it. From fabric to finishing, we'll make sure your team looks and performs their absolute best.",
        tag: "Sportex fabrics used",
    },
    {
        emoji: "💪",
        heading: "Your Team's New Look Starts Here!",
        body: "We've received your request loud and clear. Force Sports & Wears India brings 18+ years of craftsmanship to every stitch. Our team will be in touch to make your vision a reality!",
        tag: "18+ years experience",
    },
];

const InquiryPage = () => {
    const searchParams = useSearchParams();
    const prefilledProduct = searchParams ? searchParams.get('product') : null;
    const prefilledCode    = searchParams ? searchParams.get('code') : null;
    const prefilledFabric  = searchParams ? searchParams.get('fabric') : null;
    const prefilledPlacement = searchParams ? searchParams.get('placement') : null;
    const prefilledSize    = searchParams ? searchParams.get('size') : null;
    const prefilledLogo    = searchParams ? searchParams.get('logo') : null;
    const prefilledQuantity = searchParams ? searchParams.get('quantity') : null;
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';

    // Build a rich pre-filled message for the admin
    const buildPrefilledMessage = () => {
        const parts = [];
        if (prefilledProduct) {
            parts.push(`I am interested in: ${prefilledProduct}`);
            if (prefilledCode)      parts.push(`Product Code: ${prefilledCode}`);
        }
        if (prefilledFabric)    parts.push(`Preferred Fabric: ${prefilledFabric}`);
        if (prefilledPlacement) parts.push(`Logo Placement: ${prefilledPlacement}`);
        if (prefilledSize)      parts.push(`Logo Size: ${prefilledSize}`);
        if (prefilledLogo)      parts.push(`Logo: ${prefilledLogo}`);
        if (prefilledQuantity)  parts.push(`Estimated Quantity: ${prefilledQuantity}`);
        
        if (parts.length > 0) {
            parts.push('\nPlease share bulk pricing, MOQ, and delivery timeline.');
            return parts.join('\n');
        }
        return '';
    };

    const [formData, setFormData] = useState({
        productType: (prefilledProduct || prefilledFabric) ? 'custom' : '',
        fullName: '',
        email: '',
        phone: '',
        quantity: prefilledQuantity || '',
        message: buildPrefilledMessage(),
        website_hp: '' // Honeypot field for bot detection
    });

    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [statusMsg, setStatusMsg] = useState('');
    const [thankYouMsg, setThankYouMsg] = useState(THANK_YOU_MESSAGES[0]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.fullName || !formData.email || !formData.message) {
            setStatus('error');
            setStatusMsg('Please fill in all required fields.');
            return;
        }

        setStatus('sending');
        setStatusMsg('Sending your inquiry...');

        try {
            let imageUrl = imagePreview || '';

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    quantity: formData.quantity,
                    productType: formData.productType,
                    message: formData.message,
                    website_hp: formData.website_hp,
                    imageUrl: imageUrl,
                    product: prefilledProduct || null,
                    productCode: prefilledCode || null,
                    fabric: prefilledFabric || null,
                    placement: prefilledPlacement || null,
                    logoSize: prefilledSize || null,
                    source: prefilledProduct ? 'Customize Button' : 'Main Contact Form'
                })
            });

            if (!response.ok) {
                throw new Error('Failed to send inquiry email');
            }

            // Pick a random thank-you message
            setThankYouMsg(THANK_YOU_MESSAGES[Math.floor(Math.random() * THANK_YOU_MESSAGES.length)]);
            setStatus('success');
            setStatusMsg('Thank you! Your inquiry has been received. Our team will contact you shortly.');
            setFormData({ productType: '', fullName: '', email: '', phone: '', quantity: '', message: '', website_hp: '' });
            setImage(null);
            setImagePreview(null);
            
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setStatusMsg('Could not send your inquiry. Please try again later.');
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <SEO 
                title="Get a Quote | Custom Teamwear Manufacturing"
                description="Contact Force Sports & Wears India for a custom quote on sports jerseys, uniforms, and athletic gear. Premium quality, best prices, manufactured in Mumbai."
                keywords={SEO_KEYWORDS.inquiry}
            />
            <section className="bg-slate-900 py-20 px-6 text-center">
                <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Get A Quote</motion.h1>
                <p className="text-cyan-400 mt-4 uppercase tracking-widest text-xs font-bold">Mumbai Headquarters: {BRAND_DETAILS.headquarters}</p>
            </section>

            <div className="max-w-6xl mx-auto px-6 -mt-16 pb-24">
                <div className="bg-white rounded-3xl shadow-2xl shadow-slate-300 overflow-hidden flex flex-col lg:flex-row">
                    {/* Contact Sidebar */}
                    <div className="bg-slate-900 p-8 md:p-12 text-white lg:w-1/3 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-black mb-10 border-b border-white/10 pb-6 uppercase tracking-tight">Need Help Fast?</h2>
                            <p className="text-slate-400 text-sm mb-8">Skip the form and reach out to our team directly. We are ready to assist you with any sizing, fabric, or design questions.</p>
                            
                            <div className="space-y-8">

                                {/* Address — fully clickable, opens Google Maps */}
                                <a
                                    href={BRAND_DETAILS.addresses[0].googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-4 group cursor-pointer"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-400 uppercase mb-1 tracking-widest group-hover:text-cyan-400 transition-colors">Our Address</h4>
                                        <p className="text-sm font-medium leading-relaxed text-white/80 group-hover:text-white transition-colors">
                                            {BRAND_DETAILS.addresses[0].text}
                                        </p>
                                    </div>
                                </a>

                                {/* WhatsApp */}
                                <div className="flex items-start gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white transition-all">
                                        <MessageCircle size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xs font-bold text-slate-400 uppercase mb-1 tracking-widest">WhatsApp Inquiry</h4>
                                        <a href={BRAND_DETAILS.contacts.whatsappLink} target="_blank" rel="noopener noreferrer" className="block text-sm font-bold leading-relaxed text-green-400 hover:text-green-300 transition-colors">
                                            {BRAND_DETAILS.contacts.whatsapp}
                                        </a>
                                    </div>
                                </div>

                                {/* Call Us */}
                                <div className="flex items-start gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-400 uppercase mb-1 tracking-widest">Call Us</h4>
                                        <a href={`tel:${BRAND_DETAILS.contacts.phone.replace(/\s+/g, '')}`} className="text-sm font-medium leading-relaxed hover:text-cyan-400 transition-colors">
                                            {BRAND_DETAILS.contacts.phone}
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-400 uppercase mb-1 tracking-widest">Email</h4>
                                        <a href={`mailto:${BRAND_DETAILS.contacts.email}`} className="text-sm font-bold leading-relaxed hover:text-cyan-400 transition-colors">
                                            {BRAND_DETAILS.contacts.email}
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5">
                            <p className="text-[10px] text-slate-500 leading-relaxed font-bold uppercase tracking-widest mb-1">Manufacturing Unit</p>
                            <p className="text-[11px] text-slate-400 font-medium">{BRAND_DETAILS.manufacturing.unitLocation}, Maharashtra</p>
                        </div>
                    </div>

                    {/* Form Area - Single Page */}
                    <div className="p-8 md:p-12 lg:w-2/3 bg-white">

                        {/* ═══════════════════════════════════ THANK YOU SCREEN ═══════════════════════════════════ */}
                        <AnimatePresence>
                        {status === 'success' && (
                            <motion.div
                                key="thankyou"
                                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.92, y: -20 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                className="flex flex-col items-center justify-center min-h-[520px] text-center px-4 py-12 relative overflow-hidden"
                            >
                                {/* Animated background blobs */}
                                <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                                <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" />

                                {/* Floating dots */}
                                {[...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 rounded-full bg-cyan-400/40"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{
                                            opacity: [0, 1, 0],
                                            scale: [0, 1.5, 0],
                                            x: [(i % 2 === 0 ? -1 : 1) * 20 * (i + 1), (i % 2 === 0 ? 1 : -1) * 40 * (i + 1)],
                                            y: [0, -(40 + i * 20)],
                                        }}
                                        transition={{ duration: 2, delay: i * 0.15, repeat: Infinity, repeatDelay: 1.5 }}
                                        style={{ left: `${20 + i * 12}%`, bottom: '30%' }}
                                    />
                                ))}

                                {/* Emoji badge */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -20 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                                    className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center text-5xl shadow-2xl shadow-cyan-200 mb-8 relative z-10"
                                >
                                    {thankYouMsg.emoji}
                                </motion.div>

                                {/* Tag pill */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.25 }}
                                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-600 text-[10px] font-black uppercase tracking-widest mb-5 relative z-10"
                                >
                                    <CheckCircle2 size={12} /> {thankYouMsg.tag}
                                </motion.div>

                                {/* Heading */}
                                <motion.h2
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter leading-tight mb-5 relative z-10"
                                >
                                    {thankYouMsg.heading}
                                </motion.h2>

                                {/* Body text */}
                                <motion.p
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md mb-10 relative z-10"
                                >
                                    {thankYouMsg.body}
                                </motion.p>

                                {/* Action buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex flex-col sm:flex-row gap-4 relative z-10"
                                >
                                    <a
                                        href={BRAND_DETAILS.contacts.whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:scale-105 transition-all shadow-xl shadow-green-200"
                                    >
                                        <MessageCircle size={18} /> Follow Up on WhatsApp
                                    </a>
                                    <button
                                        onClick={() => {
                                            setStatus('idle');
                                            setStatusMsg('');
                                        }}
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 text-slate-700 font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-slate-200 transition-all"
                                    >
                                        Send Another Inquiry
                                    </button>
                                </motion.div>
                            </motion.div>
                        )}
                        </AnimatePresence>

                        {/* ═══════════════════════════════════ QUOTATION FORM ═══════════════════════════════════ */}
                        {status !== 'success' && (
                        <div>
                        <div className="mb-8">
                            <h3 className="text-2xl font-black uppercase text-slate-900 mb-2">Quotation Form</h3>
                            <p className="text-slate-500 text-sm">Please fill out the details below to request a quote.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Honeypot field - hidden from humans, filled by spam bots */}
                            <div style={{ display: 'none', opacity: 0, position: 'absolute', left: '-9999px' }} aria-hidden="true">
                                <input
                                    type="text"
                                    name="website_hp"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    value={formData.website_hp}
                                    onChange={handleChange}
                                />
                            </div>
                            
                            {/* Pre-filled context badge */}
                            {(prefilledProduct || prefilledFabric) && (
                                <div className="flex items-start gap-3 p-4 rounded-2xl bg-cyan-50 border border-cyan-200">
                                    <div className="w-8 h-8 rounded-xl bg-cyan-500 flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle2 size={16} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-cyan-600 mb-1">
                                            {prefilledProduct ? 'Customizing From Product Page' : 'Inquiry From Fabric Library'}
                                        </p>
                                        <p className="text-sm font-bold text-slate-800">
                                            {prefilledProduct || prefilledFabric}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {prefilledCode && <span className="px-2 py-0.5 rounded-full bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest">{prefilledCode}</span>}
                                            {prefilledProduct && prefilledFabric && <span className="px-2 py-0.5 rounded-full bg-cyan-600 text-white text-[9px] font-black uppercase tracking-widest">{prefilledFabric}</span>}
                                            {prefilledPlacement && <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[9px] font-black uppercase tracking-widest">{prefilledPlacement}</span>}
                                            {prefilledSize && <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[9px] font-black uppercase tracking-widest">Size: {prefilledSize}</span>}
                                            {prefilledLogo && <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[9px] font-black uppercase tracking-widest truncate max-w-[200px]">Logo: {prefilledLogo}</span>}
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name *</label>
                                    <input 
                                        required 
                                        type="text" 
                                        name="fullName"
                                        className="w-full p-4 bg-slate-50 text-slate-900 rounded-2xl border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all" 
                                        placeholder="John Doe"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Email Address *</label>
                                    <input 
                                        required 
                                        type="email" 
                                        name="email"
                                        className="w-full p-4 bg-slate-50 text-slate-900 rounded-2xl border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all" 
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Phone Number *</label>
                                    <input 
                                        required 
                                        type="tel" 
                                        name="phone"
                                        className="w-full p-4 bg-slate-50 text-slate-900 rounded-2xl border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all" 
                                        placeholder="+91 00000 00000"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Quantity Needed</label>
                                    <input 
                                        type="number" 
                                        name="quantity"
                                        className="w-full p-4 bg-slate-50 text-slate-900 rounded-2xl border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all" 
                                        placeholder="E.g. 50"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Product Category *</label>
                                <select
                                    required
                                    name="productType"
                                    className="w-full p-4 bg-slate-50 text-slate-900 rounded-2xl border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all appearance-none"
                                    value={formData.productType}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Select a category</option>
                                    <option value="cricket">Cricket Kits</option>
                                    <option value="football">Football Kits</option>
                                    <option value="kabaddi">Kabaddi Uniforms</option>
                                    <option value="corporate">Corporate Polos</option>
                                    <option value="esports">Esports Jerseys</option>
                                    <option value="custom">Other Custom Wear</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Reference Design (Optional)</label>
                                <div className="relative group">
                                    <div className={`w-full p-8 border-2 border-dashed rounded-3xl transition-all flex flex-col items-center justify-center gap-4 ${imagePreview ? 'border-cyan-500 bg-cyan-50/10' : 'border-slate-200 hover:border-cyan-400 bg-slate-50'}`}>
                                        {imagePreview ? (
                                            <div className="relative">
                                                <img src={imagePreview} alt="Preview" className="h-24 w-auto object-contain rounded-xl shadow-lg" />
                                                <button 
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setImage(null); 
                                                        setImagePreview(null);
                                                    }}
                                                    className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full shadow-lg hover:bg-red-600 transition-colors z-10"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-400 group-hover:text-cyan-500 group-hover:scale-110 transition-all">
                                                    <Upload size={24} />
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-sm font-bold text-slate-900">Click to upload your design</p>
                                                </div>
                                            </>
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
                            
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Project Description *</label>
                                <textarea
                                    required
                                    name="message"
                                    rows={4}
                                    className="w-full p-4 bg-slate-50 text-slate-900 rounded-2xl border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all resize-none"
                                    placeholder="Please provide details about colors, sizing, and your team's requirements..."
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <AnimatePresence>
                                {status !== 'idle' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className={`flex items-center gap-3 p-4 rounded-xl text-sm font-bold ${
                                            status === 'error' ? 'bg-red-50 text-red-700' : 'bg-cyan-50 text-cyan-700'
                                        }`}
                                    >
                                        {status === 'error' && <AlertCircle size={18} />}
                                        {status === 'sending' && <Loader2 size={18} className="animate-spin" />}
                                        {statusMsg}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button 
                                type="submit" 
                                disabled={status === 'sending'}
                                className={`w-full py-4 bg-slate-900 text-white font-black uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-3 active:scale-95 group ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-cyan-600 shadow-xl shadow-cyan-100'}`}
                            >
                                {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
                                <Send size={18} className={status === 'sending' ? '' : 'group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'} />
                            </button>

                        </form>
                        </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default InquiryPage;
