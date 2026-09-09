"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import SEO from '../../components/seo/SEO';
import { SEO_KEYWORDS } from '../../data/seoKeywords';

const faqs = [
    {
        question: "What is your minimum order quantity (MOQ)?",
        answer: "Our minimum order quantity (MOQ) depends on your location. For orders within the city, the MOQ is 50 pieces. For out-of-city orders within India, a minimum of 150+ pieces is required. For international (out of country) orders, the MOQ is higher. Please contact us for specific international requirements."
    },
    {
        question: "How long does the manufacturing process take?",
        answer: "Standard production time is typically 2-3 weeks from the date of final design approval and payment confirmation. During peak seasons, it might take slightly longer. We also offer expedited services for urgent requirements."
    },
    {
        question: "Do you offer custom design services?",
        answer: "Yes! We have an in-house design team that can help bring your ideas to life. Whether you have a rough sketch or just a concept, our designers will work with you to create professional mockups for your approval before production."
    },
    {
        question: "What printing methods do you use?",
        answer: "We use various advanced printing techniques depending on the fabric and requirement. This includes Sublimation (best for detailed, full-color designs on polyester), Screen Printing (great for bulk orders), DTF (Direct to Film), and premium Embroidery."
    },
    {
        question: "Can I get a sample before placing a bulk order?",
        answer: "Yes, we highly recommend getting a physical sample for large orders. Sample production takes about 5-7 days. The cost of the sample is usually adjusted against your final bulk order."
    },
    {
        question: "What materials do you use for sports uniforms?",
        answer: "We source premium performance fabrics like Micro-Polyester, Spandex blends, Dry-Fit meshes, and breathable cotton blends. All our sports fabrics are moisture-wicking and designed for maximum comfort and durability."
    },
    {
        question: "Can I use my own logo and sponsors on the jerseys?",
        answer: "Absolutely! With our sublimation printing, you can add unlimited logos, sponsor names, player names, and numbers at no extra cost. We just need high-resolution vector files (.AI, .EPS, or .PDF) of your logos."
    },
    {
        question: "Do you ship internationally?",
        answer: "Yes, we ship globally using trusted courier partners like DHL and FedEx. Shipping times and costs vary depending on the destination and weight of the order. Please mention your shipping address when requesting a quote."
    },
    {
        question: "What is your return or exchange policy?",
        answer: "Since all our products are custom-made specifically to your requirements and sizing, we do not accept returns or exchanges unless there is a manufacturing defect or an error on our part. We ensure quality by sending digital mockups and physical samples before bulk production."
    },
    {
        question: "How do I ensure the sizes will fit my team correctly?",
        answer: "We provide detailed size charts with exact measurements for all our products. We strongly recommend comparing these measurements with a jersey that fits you well. We can also send a sizing sample kit for an additional fee."
    },
    {
        question: "Who is the top global bulk t-shirt and sportswear manufacturer?",
        answer: "Force Sports and Wears India is recognized globally as a top manufacturer and exporter of bulk t-shirts, custom sportswear, and corporate uniforms. Operating from our advanced facility in India, we handle international large-scale orders with precision and export premium apparel worldwide."
    },
    {
        question: "Does Force Sports and Wears India ship internationally?",
        answer: "Yes! We are a leading global supplier shipping wholesale and bulk orders worldwide. Whether you need corporate t-shirts in the USA, cricket kits in the UK, or football jerseys in the UAE, our export division ensures secure, compliant, and timely international delivery."
    },
    {
        question: "Where can I find a reliable sportswear exporter online?",
        answer: "Right here! Force Sports and Wears India is a trusted international exporter. By manufacturing directly in India, we eliminate middlemen, allowing us to provide high-quality custom jerseys, track pants, and caps at highly competitive global wholesale rates."
    }
];

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="pb-20 min-h-screen bg-slate-50">
            <SEO
                title="FAQ | Custom Sportswear Orders, MOQ & Delivery"
                description="Answers on minimum order quantity, production time, sublimation printing, fabrics, and bulk custom jersey orders from Force Sports Mumbai."
                keywords={SEO_KEYWORDS.faq}
            />
            {/* Header Section */}
            <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-400 via-slate-900 to-slate-900"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">Frequently Asked <span className="text-cyan-400">Questions</span></h1>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Find answers to common questions about our custom sportswear, manufacturing process, and ordering.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* FAQ List */}
            <div className="max-w-4xl mx-auto px-6 mt-16 mb-20">
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
                        >
                            <button 
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:bg-slate-50 transition-colors"
                            >
                                <span className="font-bold text-slate-800 pr-4">{faq.question}</span>
                                <ChevronDown 
                                    className={`text-cyan-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                                    size={20} 
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-5 text-slate-500 leading-relaxed border-t border-slate-50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Still have questions */}
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="bg-cyan-50 rounded-3xl p-10 border border-cyan-100">
                    <MessageCircle className="mx-auto text-cyan-500 mb-4" size={40} />
                    <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Still have questions?</h2>
                    <p className="text-slate-600 mb-6 max-w-lg mx-auto">
                        If you couldn't find the answer to your question, feel free to reach out to our team. We're here to help!
                    </p>
                    <a 
                        href="/inquiry" 
                        className="inline-flex items-center justify-center px-8 py-3 bg-slate-900 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-cyan-600 transition-colors shadow-lg shadow-slate-200"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
