"use client";

import React, { useEffect, useState, useRef } from 'react';
import { db, storage } from '../../../lib/firebase';
import { collection, query, onSnapshot, doc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Loader2, Plus, Edit2, Trash2, Image as ImageIcon, X, Save, ArrowLeft, UploadCloud } from 'lucide-react';
import imageCompression from 'browser-image-compression';
import { getCDNUrl } from '../../../utils/cdnUtils';
import { catalogRecencyMs } from '../../../utils/uniformUtils';

interface Uniform {
    id: string;
    title: string;
    category: string;
    subcategory: string;
    description: string;
    longDescription: string;
    image: string;
    imageBack?: string;
    gallery?: string[];
    fabrics?: string[];
    gsms?: string[];
    features: string[];
    specs: Record<string, string>;
    createdAt?: any;
}

const CATEGORIES = ['School /colleges', 'Corporate staff', 'Fast Food floor staff', 'Industrial', 'Quick Delivery services'];
const SUBCATEGORIES = ['T-shirt', 'Trackpant', 'Shorts', 'Caps', 'Shirt', 'Trousers'];
const COMMON_GSMS = ['110', '120', '130', '140', '150', '160', '170', '180', '190', '200', '210', '220', '230', '240', '250', '260', '280', '300', '320', '350', 'Other'];

export default function UniformsManager() {
    const [uniforms, setUniforms] = useState<Uniform[]>([]);
    const [availableFabrics, setAvailableFabrics] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [view, setView] = useState<'list' | 'form'>('list');
    const [saving, setSaving] = useState(false);
    
    // Filters
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
    
    // Form State
    const [currentId, setCurrentId] = useState('');
    const [formData, setFormData] = useState<Partial<Uniform>>({
        category: 'Corporate staff',
        subcategory: 'T-shirt',
        features: [''],
        fabrics: [''],
        gsms: [''],
        specs: { 'Fabric': '', 'GSM': '' }
    });

    // Image States
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [imageBackFile, setImageBackFile] = useState<File | null>(null);
    const [imageBackPreview, setImageBackPreview] = useState<string>('');
    const backFileInputRef = useRef<HTMLInputElement>(null);

    const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
    const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);
    const galleryInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const q = query(collection(db, 'uniforms'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(d => ({ ...d.data(), id: d.id })) as Uniform[];
            data.sort((a, b) => catalogRecencyMs(b) - catalogRecencyMs(a));
            setUniforms(data);
            setLoading(false);
        }, (error) => {
            console.error('Failed to load HQ uniforms', error);
            setLoading(false);
        });

        const fq = query(collection(db, 'fabrics'));
        const fUnsubscribe = onSnapshot(fq, (snapshot) => {
            const fData = snapshot.docs.map(doc => doc.data().name);
            setAvailableFabrics(fData);
        });

        return () => {
            unsubscribe();
            fUnsubscribe();
        };
    }, []);

    const resetForm = () => {
        setCurrentId('');
        setFormData({ category: 'Corporate staff', subcategory: 'T-shirt', features: [''], fabrics: [''], gsms: [''], specs: { 'Fabric': '', 'GSM': '' } });
        setImageFile(null); setImagePreview('');
        setImageBackFile(null); setImageBackPreview('');
        setGalleryFiles([]); setGalleryPreviews([]);
        setView('list');
    };

    const handleEdit = (uniform: Uniform) => {
        setCurrentId(uniform.id);
        setFormData(uniform);
        setImagePreview(uniform.image || ''); setImageFile(null);
        setImageBackPreview(uniform.imageBack || ''); setImageBackFile(null);
        setGalleryPreviews(uniform.gallery || []); setGalleryFiles([]);
        setView('form');
    };

    const handleDelete = async (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        if (confirm('Delete this uniform permanently?')) {
            await deleteDoc(doc(db, 'uniforms', id));
        }
    };

    const compressImage = async (file: File) => {
        if (file.size > 5 * 1024 * 1024) {
            alert('File is too large! Please select an image under 5MB.');
            return null;
        }
        try {
            return await imageCompression(file, { maxSizeMB: 0.5, maxWidthOrHeight: 1200, useWebWorker: true });
        } catch (error) {
            console.error('Compression error:', error);
            alert('Failed to compress image.');
            return null;
        }
    };

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const compressed = await compressImage(file);
        if (compressed) {
            setImageFile(compressed);
            setImagePreview(URL.createObjectURL(compressed));
        }
    };

    const handleImageBackChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const compressed = await compressImage(file);
        if (compressed) {
            setImageBackFile(compressed);
            setImageBackPreview(URL.createObjectURL(compressed));
        }
    };

    const handleGalleryChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (!files.length) return;
        
        const validFiles = [];
        const validPreviews = [];
        for (const file of files) {
            const compressed = await compressImage(file);
            if (compressed) {
                validFiles.push(compressed);
                validPreviews.push(URL.createObjectURL(compressed));
            }
        }
        setGalleryFiles([...galleryFiles, ...validFiles]);
        setGalleryPreviews([...galleryPreviews, ...validPreviews]);
    };

    const removeGalleryImage = (idx: number) => {
        const newFiles = [...galleryFiles];
        const newPreviews = [...galleryPreviews];
        
        if (galleryPreviews[idx].startsWith('http')) {
            const existingGallery = [...(formData.gallery || [])];
            const urlToRemove = galleryPreviews[idx];
            setFormData({ ...formData, gallery: existingGallery.filter(url => url !== urlToRemove) });
        } else {
            const fileIdx = galleryPreviews.slice(0, idx).filter(p => !p.startsWith('http')).length;
            newFiles.splice(fileIdx, 1);
            setGalleryFiles(newFiles);
        }
        
        newPreviews.splice(idx, 1);
        setGalleryPreviews(newPreviews);
    };

    const setGalleryAsFront = (idx: number) => {
        if (galleryPreviews[idx].startsWith('http')) {
            setFormData({ ...formData, image: galleryPreviews[idx] });
            setImagePreview(galleryPreviews[idx]);
            setImageFile(null);
        } else {
            const fileIdx = galleryPreviews.slice(0, idx).filter(p => !p.startsWith('http')).length;
            setImageFile(galleryFiles[fileIdx]);
            setImagePreview(galleryPreviews[idx]);
            setFormData({ ...formData, image: '' });
        }
    };

    const setGalleryAsBack = (idx: number) => {
        if (galleryPreviews[idx].startsWith('http')) {
            setFormData({ ...formData, imageBack: galleryPreviews[idx] });
            setImageBackPreview(galleryPreviews[idx]);
            setImageBackFile(null);
        } else {
            const fileIdx = galleryPreviews.slice(0, idx).filter(p => !p.startsWith('http')).length;
            setImageBackFile(galleryFiles[fileIdx]);
            setImageBackPreview(galleryPreviews[idx]);
            setFormData({ ...formData, imageBack: '' });
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            let imageUrl = formData.image && !formData.image.startsWith('blob:') ? formData.image : '';
            if (imageFile) {
                const imageRef = ref(storage, `uniforms/${Date.now()}_main_${imageFile.name}`);
                await uploadBytes(imageRef, imageFile);
                imageUrl = await getDownloadURL(imageRef);
            }

            let imageBackUrl = formData.imageBack && !formData.imageBack.startsWith('blob:') ? formData.imageBack : '';
            if (imageBackFile) {
                const imageRef = ref(storage, `uniforms/${Date.now()}_back_${imageBackFile.name}`);
                await uploadBytes(imageRef, imageBackFile);
                imageBackUrl = await getDownloadURL(imageRef);
            }

            let finalGalleryUrls = [...(formData.gallery || [])].filter((url) => url && !url.startsWith('blob:'));
            if (galleryFiles.length > 0) {
                for (const file of galleryFiles) {
                    const imageRef = ref(storage, `uniforms/${Date.now()}_gallery_${file.name}`);
                    await uploadBytes(imageRef, file);
                    const url = await getDownloadURL(imageRef);
                    finalGalleryUrls.push(url);
                }
            }

            if (!imageUrl) {
                alert('Please upload a front image before saving.');
                setSaving(false);
                return;
            }

            const payload: Record<string, unknown> = {
                ...formData,
                title: (formData.title || '').trim(),
                image: imageUrl,
                imageBack: imageBackUrl,
                gallery: finalGalleryUrls,
                features: (formData.features || []).map((s) => s.trim()).filter(Boolean),
                fabrics: (formData.fabrics || []).map((s) => s.trim()).filter(Boolean),
                gsms: (formData.gsms || []).map((s) => s.trim()).filter(Boolean),
                createdAt: formData.createdAt || serverTimestamp(),
                updatedAt: serverTimestamp(),
            };

            delete payload.id;
            delete payload.firestoreId;
            Object.keys(payload).forEach((key) => payload[key] === undefined && delete payload[key]);

            const docId = currentId || `uni-${Date.now()}`;
            await setDoc(doc(db, 'uniforms', docId), payload);

            resetForm();
        } catch (error) {
            console.error('Error saving:', error);
            alert('Error saving uniform.');
        } finally {
            setSaving(false);
        }
    };

    const handleFeatureChange = (index: number, val: string) => {
        const newFeatures = [...(formData.features || [])];
        newFeatures[index] = val;
        setFormData({ ...formData, features: newFeatures });
    };
    const addFeature = () => setFormData({ ...formData, features: [...(formData.features || []), ''] });
    const removeFeature = (index: number) => {
        const newFeatures = [...(formData.features || [])];
        newFeatures.splice(index, 1);
        setFormData({ ...formData, features: newFeatures });
    };

    const handleFabricChange = (index: number, val: string) => {
        const newArr = [...(formData.fabrics || [])];
        newArr[index] = val;
        setFormData({ ...formData, fabrics: newArr });
    };
    const addFabric = () => setFormData({ ...formData, fabrics: [...(formData.fabrics || []), ''] });
    const removeFabric = (index: number) => {
        const newArr = [...(formData.fabrics || [])];
        newArr.splice(index, 1);
        setFormData({ ...formData, fabrics: newArr });
    };

    const handleGsmChange = (index: number, val: string) => {
        const newArr = [...(formData.gsms || [])];
        newArr[index] = val;
        setFormData({ ...formData, gsms: newArr });
    };
    const addGsm = () => setFormData({ ...formData, gsms: [...(formData.gsms || []), ''] });
    const removeGsm = (index: number) => {
        const newArr = [...(formData.gsms || [])];
        newArr.splice(index, 1);
        setFormData({ ...formData, gsms: newArr });
    };

    const handleSpecChange = (oldKey: string, newKey: string, val: string) => {
        const newSpecs = { ...formData.specs };
        if (oldKey !== newKey) delete newSpecs[oldKey];
        newSpecs[newKey] = val;
        setFormData({ ...formData, specs: newSpecs });
    };
    const addSpec = () => setFormData({ ...formData, specs: { ...(formData.specs || {}), 'New Spec': '' } });
    const removeSpec = (key: string) => {
        const newSpecs = { ...formData.specs };
        delete newSpecs[key];
        setFormData({ ...formData, specs: newSpecs });
    };

    if (loading) return <div className="flex justify-center p-20"><Loader2 className="w-8 h-8 animate-spin text-cyan-600" /></div>;

    if (view === 'form') {
        return (
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex items-center justify-between">
                    <button onClick={resetForm} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors">
                        <ArrowLeft className="w-5 h-5" /> Back to Uniforms
                    </button>
                    <h1 className="text-2xl font-black uppercase text-slate-900">{currentId ? 'Edit Uniform' : 'Add New Uniform'}</h1>
                </div>

                <form onSubmit={handleSave} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Title *</label>
                            <input required type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 text-slate-900" value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="e.g., Corporate Polo" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Category *</label>
                            <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 text-slate-900" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Subcategory *</label>
                            <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 text-slate-900" value={formData.subcategory} onChange={e => setFormData({...formData, subcategory: e.target.value})}>
                                {SUBCATEGORIES.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Short Description *</label>
                            <textarea required className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 text-slate-900 h-24" value={formData.description || ''} onChange={e => setFormData({...formData, description: e.target.value})} placeholder="Brief overview..." />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Long Description</label>
                            <textarea className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 text-slate-900 h-32" value={formData.longDescription || ''} onChange={e => setFormData({...formData, longDescription: e.target.value})} placeholder="Detailed explanation..." />
                        </div>
                    </div>

                    {/* Multiple Image Uploads */}
                    <div className="space-y-6 border-t border-slate-100 pt-6">
                        <h3 className="font-black text-slate-900 uppercase tracking-widest text-sm">Uniform Images</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Main Image */}
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Main Front Image *</label>
                                <div onClick={() => fileInputRef.current?.click()} className="border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center cursor-pointer hover:border-cyan-500 hover:bg-cyan-50 transition-all flex flex-col items-center justify-center min-h-[150px]">
                                    {imagePreview ? (
                                        <img src={imagePreview} alt="Preview" className="h-32 object-contain rounded-lg" />
                                    ) : (
                                        <><UploadCloud className="w-8 h-8 text-slate-300 mb-2" /><p className="text-xs font-bold text-slate-500">Upload Main Image</p></>
                                    )}
                                    <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" className="hidden" />
                                </div>
                            </div>

                            {/* Back Image */}
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Back Image (Optional)</label>
                                <div onClick={() => backFileInputRef.current?.click()} className="border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center cursor-pointer hover:border-cyan-500 hover:bg-cyan-50 transition-all flex flex-col items-center justify-center min-h-[150px]">
                                    {imageBackPreview ? (
                                        <img src={imageBackPreview} alt="Back Preview" className="h-32 object-contain rounded-lg" />
                                    ) : (
                                        <><UploadCloud className="w-8 h-8 text-slate-300 mb-2" /><p className="text-xs font-bold text-slate-500">Upload Back Image</p></>
                                    )}
                                    <input type="file" ref={backFileInputRef} onChange={handleImageBackChange} accept="image/*" className="hidden" />
                                </div>
                            </div>
                        </div>

                        {/* Gallery Images */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Gallery Images (Optional)</label>
                                <button type="button" onClick={() => galleryInputRef.current?.click()} className="text-cyan-600 hover:text-cyan-700 text-xs font-bold uppercase flex items-center gap-1">
                                    <Plus className="w-3 h-3" /> Add Photos
                                </button>
                                <input type="file" ref={galleryInputRef} onChange={handleGalleryChange} accept="image/*" multiple className="hidden" />
                            </div>
                            
                            {galleryPreviews.length > 0 ? (
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                                    {galleryPreviews.map((preview, idx) => (
                                        <div key={idx} className="relative group rounded-xl overflow-hidden border border-slate-200 bg-white flex flex-col">
                                            <img src={preview} alt="Gallery item" className="w-full h-24 object-cover" />
                                            <button type="button" onClick={() => removeGalleryImage(idx)} className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                                <X className="w-3 h-3" />
                                            </button>
                                            <div className="flex gap-1 p-1 bg-slate-50 border-t border-slate-200">
                                                <button type="button" onClick={() => setGalleryAsFront(idx)} className="flex-1 py-1 px-1 bg-white hover:bg-cyan-50 text-[9px] font-black uppercase text-cyan-700 border border-slate-200 rounded text-center transition-colors">Set Front</button>
                                                <button type="button" onClick={() => setGalleryAsBack(idx)} className="flex-1 py-1 px-1 bg-white hover:bg-slate-100 text-[9px] font-black uppercase text-slate-700 border border-slate-200 rounded text-center transition-colors">Set Back</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div onClick={() => galleryInputRef.current?.click()} className="border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center cursor-pointer hover:border-cyan-500 hover:bg-cyan-50 transition-all flex flex-col items-center justify-center">
                                    <ImageIcon className="w-8 h-8 text-slate-300 mb-2" />
                                    <p className="text-xs font-bold text-slate-500">Click to upload multiple gallery images</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Manufacturing Options (Fabrics & GSMs) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                        {/* Fabrics */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Fabric Materials</label>
                                <button type="button" onClick={addFabric} className="text-cyan-600 hover:text-cyan-700 text-xs font-bold uppercase flex items-center gap-1">
                                    <Plus className="w-3 h-3" /> Add Fabric
                                </button>
                            </div>
                            {(formData.fabrics || []).map((fabric, index) => (
                                <div key={index} className="flex gap-2">
                                    <select
                                        value={fabric}
                                        onChange={(e) => handleFabricChange(index, e.target.value)}
                                        className="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 font-medium text-slate-900 text-sm"
                                    >
                                        <option value="">Select Fabric...</option>
                                        {availableFabrics.map(f => <option key={f} value={f}>{f}</option>)}
                                        <option value="Other">Other</option>
                                    </select>
                                    <button type="button" onClick={() => removeFabric(index)} className="p-3 text-red-400 hover:bg-red-50 rounded-lg"><X className="w-4 h-4" /></button>
                                </div>
                            ))}
                        </div>

                        {/* GSMs */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Available GSM Options</label>
                                <button type="button" onClick={addGsm} className="text-cyan-600 hover:text-cyan-700 text-xs font-bold uppercase flex items-center gap-1">
                                    <Plus className="w-3 h-3" /> Add GSM
                                </button>
                            </div>
                            {(formData.gsms || []).map((gsm, idx) => (
                                <div key={idx} className="flex gap-2">
                                    <select className="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-cyan-500 text-slate-900 text-sm" value={gsm} onChange={e => handleGsmChange(idx, e.target.value)}>
                                        <option value="">Select GSM...</option>
                                        {COMMON_GSMS.map(g => <option key={g} value={g}>{g} GSM</option>)}
                                    </select>
                                    <button type="button" onClick={() => removeGsm(idx)} className="p-3 text-red-400 hover:bg-red-50 rounded-lg"><X className="w-4 h-4" /></button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Features List</label>
                                <button type="button" onClick={addFeature} className="text-cyan-600 hover:text-cyan-700 text-xs font-bold uppercase flex items-center gap-1"><Plus className="w-3 h-3" /> Add Feature</button>
                            </div>
                            {(formData.features || []).map((feat, idx) => (
                                <div key={idx} className="flex gap-2">
                                    <input type="text" className="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-cyan-500 text-slate-900 text-sm" value={feat} onChange={e => handleFeatureChange(idx, e.target.value)} />
                                    <button type="button" onClick={() => removeFeature(idx)} className="p-3 text-red-400 hover:bg-red-50 rounded-lg"><X className="w-4 h-4" /></button>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Specifications</label>
                                <button type="button" onClick={addSpec} className="text-cyan-600 hover:text-cyan-700 text-xs font-bold uppercase flex items-center gap-1"><Plus className="w-3 h-3" /> Add Spec</button>
                            </div>
                            {Object.entries(formData.specs || {}).map(([key, val], idx) => (
                                <div key={idx} className="flex gap-2">
                                    <input type="text" className="w-1/3 p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-cyan-500 text-slate-900 text-sm font-bold" value={key} onChange={e => handleSpecChange(key, e.target.value, val)} />
                                    <input type="text" className="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-cyan-500 text-slate-900 text-sm" value={val} onChange={e => handleSpecChange(key, key, e.target.value)} />
                                    <button type="button" onClick={() => removeSpec(key)} className="p-3 text-red-400 hover:bg-red-50 rounded-lg"><X className="w-4 h-4" /></button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-8 border-t border-slate-100 flex justify-end">
                        <button type="submit" disabled={saving || (!imagePreview && !formData.image)} className="bg-slate-900 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest flex items-center gap-3 hover:bg-slate-800 disabled:opacity-50">
                            {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />} {saving ? 'Saving...' : 'Save Uniform'}
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Uniforms Manager</h1>
                    <p className="text-slate-500 mt-1">Manage corporate, school, and industrial uniforms</p>
                </div>
                <button onClick={() => setView('form')} className="bg-purple-600 text-white px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-purple-700 transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Add Uniform
                </button>
            </div>

            {/* ── Category Stats ── */}
            <div>
                <div className="flex justify-between items-center mb-3">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Filter By Category</p>
                    {selectedCategory && <button onClick={() => setSelectedCategory(null)} className="text-[10px] font-black uppercase text-cyan-600 hover:text-cyan-700">Clear</button>}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                    {CATEGORIES.map(cat => {
                        const count = uniforms.filter(u => u.category === cat && (!selectedSubcategory || u.subcategory === selectedSubcategory)).length;
                        const isSelected = selectedCategory === cat;
                        return (
                            <button key={cat} onClick={() => setSelectedCategory(isSelected ? null : cat)} className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all hover:scale-105 ${isSelected ? 'ring-2 ring-purple-500 shadow-md bg-purple-50 border-purple-100 text-purple-700' : 'bg-slate-50 border-slate-200 text-slate-700 opacity-80 hover:opacity-100'}`}>
                                <span className="text-2xl font-black leading-none">{count}</span>
                                <span className="text-[9px] font-black uppercase tracking-widest mt-1 text-center opacity-70">{cat}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ── Subcategory Stats ── */}
            <div>
                <div className="flex justify-between items-center mb-3">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Filter By Subcategory</p>
                    {selectedSubcategory && <button onClick={() => setSelectedSubcategory(null)} className="text-[10px] font-black uppercase text-cyan-600 hover:text-cyan-700">Clear</button>}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {SUBCATEGORIES.map(subcat => {
                        const count = uniforms.filter(u => u.subcategory === subcat && (!selectedCategory || u.category === selectedCategory)).length;
                        const isSelected = selectedSubcategory === subcat;
                        return (
                            <button key={subcat} onClick={() => setSelectedSubcategory(isSelected ? null : subcat)} className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all hover:scale-105 ${isSelected ? 'ring-2 ring-blue-500 shadow-md bg-blue-50 border-blue-100 text-blue-700' : 'bg-slate-50 border-slate-200 text-slate-700 opacity-80 hover:opacity-100'}`}>
                                <span className="text-2xl font-black leading-none">{count}</span>
                                <span className="text-[9px] font-black uppercase tracking-widest mt-1 text-center opacity-70">{subcat}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                {uniforms.filter(u => (!selectedCategory || u.category === selectedCategory) && (!selectedSubcategory || u.subcategory === selectedSubcategory)).length === 0 ? (
                    <div className="p-12 text-center text-slate-400">
                        <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-20" />
                        <h3 className="text-lg font-bold text-slate-900 mb-2">No uniforms found</h3>
                        <p className="text-sm">Try clearing your filters or add a new uniform.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-100 text-[10px] uppercase tracking-widest text-slate-500 font-black">
                                    <th className="p-4 pl-6">Image</th>
                                    <th className="p-4">Details</th>
                                    <th className="p-4">Category</th>
                                    <th className="p-4 text-right pr-6">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {uniforms.filter(u => (!selectedCategory || u.category === selectedCategory) && (!selectedSubcategory || u.subcategory === selectedSubcategory)).map(uni => (
                                    <tr key={uni.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                                        <td className="p-4 pl-6 w-24">
                                            <div className="w-16 h-16 bg-white border border-slate-200 rounded-xl overflow-hidden flex items-center justify-center">
                                                {uni.image ? <img src={getCDNUrl(uni.image)} alt={uni.title} className="w-full h-full object-cover" /> : <ImageIcon className="text-slate-300 w-6 h-6" />}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <h4 className="font-bold text-slate-900">{uni.title}</h4>
                                            <p className="text-xs text-slate-500 font-medium">{uni.subcategory}</p>
                                        </td>
                                        <td className="p-4">
                                            <span className="bg-purple-50 text-purple-600 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">{uni.category}</span>
                                        </td>
                                        <td className="p-4 pr-6 text-right space-x-2">
                                            <button onClick={() => handleEdit(uni)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors inline-block"><Edit2 className="w-4 h-4" /></button>
                                            <button onClick={(e) => handleDelete(uni.id, e)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors inline-block"><Trash2 className="w-4 h-4" /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
