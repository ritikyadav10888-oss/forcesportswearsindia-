"use client";

import React, { useEffect, useState } from 'react';
import { db } from '../../../lib/firebase';
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { Mail, Phone, Calendar, Loader2, CheckCircle2, Circle, Trash2, ExternalLink, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Lead {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    quantity: string;
    productType: string;
    message: string;
    imageUrl?: string;
    status: 'new' | 'contacted' | 'closed';
    createdAt: any;
}

export default function LeadsManager() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

    useEffect(() => {
        const q = query(collection(db, 'inquiries'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const leadsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Lead[];
            setLeads(leadsData);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const updateStatus = async (id: string, newStatus: 'new' | 'contacted' | 'closed') => {
        try {
            await updateDoc(doc(db, 'inquiries', id), { status: newStatus });
            if (selectedLead?.id === id) {
                setSelectedLead({ ...selectedLead, status: newStatus });
            }
        } catch (error) {
            console.error('Error updating status:', error);
            alert('Failed to update status.');
        }
    };

    const deleteLead = async (id: string) => {
        if (confirm('Are you sure you want to delete this lead? This cannot be undone.')) {
            try {
                await deleteDoc(doc(db, 'inquiries', id));
                if (selectedLead?.id === id) setSelectedLead(null);
            } catch (error) {
                console.error('Error deleting lead:', error);
                alert('Failed to delete lead.');
            }
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <Loader2 className="w-8 h-8 text-brand-500 animate-spin" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Leads & Inquiries</h1>
                    <p className="text-slate-500 mt-1">Manage incoming requests from the website</p>
                </div>
                <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100 flex gap-4">
                    <div className="text-center">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total</p>
                        <p className="text-lg font-black text-slate-900">{leads.length}</p>
                    </div>
                    <div className="w-px bg-slate-200"></div>
                    <div className="text-center">
                        <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">New</p>
                        <p className="text-lg font-black text-blue-600">{leads.filter(l => l.status === 'new').length}</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 h-[700px]">
                {/* Leads List */}
                <div className="lg:w-1/3 bg-white border border-slate-200 rounded-3xl overflow-hidden flex flex-col shadow-sm">
                    <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                        <h2 className="text-sm font-black text-slate-800 uppercase tracking-widest">Inbox</h2>
                    </div>
                    <div className="flex-1 overflow-y-auto p-2 space-y-2">
                        {leads.length === 0 ? (
                            <p className="text-center text-slate-400 py-10 text-sm font-medium">No leads yet.</p>
                        ) : (
                            leads.map(lead => (
                                <button
                                    key={lead.id}
                                    onClick={() => setSelectedLead(lead)}
                                    className={`w-full text-left p-4 rounded-2xl transition-all ${
                                        selectedLead?.id === lead.id 
                                        ? 'bg-brand-50 border-brand-200 shadow-sm' 
                                        : 'hover:bg-slate-50 border-transparent border'
                                    }`}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className={`font-bold ${lead.status === 'new' ? 'text-slate-900' : 'text-slate-600'}`}>
                                            {lead.fullName}
                                        </h3>
                                        {lead.status === 'new' && (
                                            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
                                        )}
                                        {lead.status === 'contacted' && (
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        )}
                                    </div>
                                    <p className="text-xs text-slate-500 truncate mb-2">{lead.productType || 'General Inquiry'}</p>
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        <Calendar className="w-3 h-3" />
                                        {lead.createdAt?.toDate().toLocaleDateString() || 'Just now'}
                                    </div>
                                </button>
                            ))
                        )}
                    </div>
                </div>

                {/* Lead Details */}
                <div className="lg:w-2/3 bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm flex flex-col">
                    {selectedLead ? (
                        <div className="flex-1 overflow-y-auto">
                            {/* Header */}
                            <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex justify-between items-start">
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900 mb-2">{selectedLead.fullName}</h2>
                                    <div className="flex gap-4">
                                        <a href={`mailto:${selectedLead.email}`} className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-medium">
                                            <Mail className="w-4 h-4" /> {selectedLead.email}
                                        </a>
                                        <a href={`tel:${selectedLead.phone}`} className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-medium">
                                            <Phone className="w-4 h-4" /> {selectedLead.phone}
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex gap-2">
                                    <select 
                                        value={selectedLead.status}
                                        onChange={(e) => updateStatus(selectedLead.id, e.target.value as any)}
                                        className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider outline-none appearance-none cursor-pointer border ${
                                            selectedLead.status === 'new' ? 'bg-blue-50 text-blue-600 border-blue-200' :
                                            selectedLead.status === 'contacted' ? 'bg-green-50 text-green-600 border-green-200' :
                                            'bg-slate-100 text-slate-600 border-slate-200'
                                        }`}
                                    >
                                        <option value="new">New Lead</option>
                                        <option value="contacted">Contacted</option>
                                        <option value="closed">Closed / Won</option>
                                    </select>

                                    <button 
                                        onClick={() => deleteLead(selectedLead.id)}
                                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors border border-transparent hover:border-red-100"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-8 space-y-8">
                                <div className="grid grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Product Type</p>
                                        <p className="font-medium text-slate-900">{selectedLead.productType || 'N/A'}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Estimated Quantity</p>
                                        <p className="font-medium text-slate-900">{selectedLead.quantity || 'Not specified'}</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Customer Message</p>
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 whitespace-pre-wrap text-slate-700 text-sm leading-relaxed">
                                        {selectedLead.message}
                                    </div>
                                </div>

                                {selectedLead.imageUrl && (
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Attached Reference Image</p>
                                        <a href={selectedLead.imageUrl} target="_blank" rel="noopener noreferrer" className="group relative block w-fit">
                                            <img src={selectedLead.imageUrl} alt="Reference" className="max-w-md h-auto rounded-2xl border border-slate-200" />
                                            <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center backdrop-blur-sm">
                                                <div className="flex items-center gap-2 text-white font-bold tracking-wider text-sm">
                                                    <ExternalLink className="w-5 h-5" /> Open Full Image
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-slate-400 p-8 text-center">
                            <MessageSquare className="w-16 h-16 mb-4 opacity-20" />
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Select a lead to view details</h3>
                            <p className="text-sm">Click on any inquiry from the inbox to read the message, view attachments, and update the status.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
