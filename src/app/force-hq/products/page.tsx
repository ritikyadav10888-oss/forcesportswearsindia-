"use client";

import React, { useEffect, useState, useRef } from 'react';
import { db, storage, auth } from '../../../lib/firebase';
import { collection, query, onSnapshot, doc, setDoc, deleteDoc, serverTimestamp, Timestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Loader2, Plus, Edit2, Trash2, Image as ImageIcon, X, Save, ArrowLeft, UploadCloud } from 'lucide-react';
import imageCompression from 'browser-image-compression';
import { getCDNUrl } from '../../../utils/cdnUtils';
import { catalogRecencyMs, compare3dInnovations } from '../../../utils/productUtils';

function httpAssetUrl(url?: string) {
    if (!url || url.startsWith('blob:') || url.startsWith('data:')) return '';
    return url;
}

function cleanStringArray(arr?: string[]) {
    return (arr || []).map((s) => (s || '').trim()).filter(Boolean);
}

function cleanSpecs(specs?: Record<string, string>) {
    const out: Record<string, string> = {};
    if (!specs || typeof specs !== 'object') return out;
    for (const [rawKey, rawVal] of Object.entries(specs)) {
        const key = String(rawKey || '').trim();
        if (!key) continue;
        out[key] = rawVal == null ? '' : String(rawVal);
    }
    return out;
}

function storagePath(folder: string, kind: string, file: File) {
    const ext = (file.name.split('.').pop() || 'jpg').replace(/[^a-zA-Z0-9]/g, '').toLowerCase() || 'jpg';
    return `${folder}/${kind}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}.${ext}`;
}

function saveErrorMessage(error: unknown) {
    const err = error as { code?: string; message?: string };
    const code = err.code || '';
    const message = err.message || 'Unknown error';
    if (code.includes('permission-denied') || message.toLowerCase().includes('permission')) {
        return 'Permission denied. Sign out and log in again, then save.';
    }
    if (code.includes('unauthenticated') || code.includes('unauthorized')) {
        return 'You are not signed in. Log in at Force HQ and try again.';
    }
    if (message.includes('invalid data') || message.includes('Unsupported field')) {
        return 'Product data could not be saved. Check title, images, and specs, then try again.';
    }
    return message;
}

interface Product {
    id: string;
    title: string;
    category: string;
    sport: string;
    usageType: string;
    productCode: string;
    description: string;
    longDescription: string;
    image?: string;
    imageBack?: string;
    gallery?: string[];
    fabrics?: string[];
    gsms?: string[];
    features: string[];
    specs: Record<string, string>;
    createdAt?: any;
}

const CATEGORIES = ['T-Shirts', 'Track Pants', 'Shorts', 'Jackets', 'Bags', 'Caps', '3D Innovations'];
const SPORTS = ['Badminton', 'Cricket', 'Football', 'Volleyball', 'Kabaddi', 'Pickleball', 'Tennis', 'Other', 'All'];
const USAGE_TYPES = ['T20', 'Practice', 'Travel', 'Coaches', 'Officials', 'General'];
const COMMON_GSMS = ['110', '120', '130', '140', '150', '160', '170', '180', '190', '200', '210', '220', '230', '240', '250', '260', '280', '300', '320', '350', 'Other'];

export default function ProductsManager() {
    const [products, setProducts] = useState<Product[]>([]);
    const [availableFabrics, setAvailableFabrics] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [view, setView] = useState<'list' | 'form'>('list');
    const [saving, setSaving] = useState(false);
    const [saveNotice, setSaveNotice] = useState('');
    
    // Filters
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSport, setSelectedSport] = useState<string | null>(null);
    
    // Form State
    const [currentId, setCurrentId] = useState('');
    const [formData, setFormData] = useState<Partial<Product>>({
        category: 'T-Shirts',
        sport: 'All',
        usageType: 'General',
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
        const q = query(collection(db, 'products'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(d => ({ ...d.data(), id: d.id })) as Product[];
            data.sort((a, b) => catalogRecencyMs(b) - catalogRecencyMs(a));
            setProducts(data);
            setLoading(false);
        }, (error) => {
            console.error('Failed to load HQ products', error);
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
        setFormData({ category: 'T-Shirts', sport: 'All', usageType: 'General', features: [''], fabrics: [''], gsms: [''], specs: { 'Fabric': '', 'GSM': '' } });
        setImageFile(null); setImagePreview('');
        setImageBackFile(null); setImageBackPreview('');
        setGalleryFiles([]); setGalleryPreviews([]);
        setView('list');
    };

    const handleEdit = (product: Product) => {
        setCurrentId(product.id);
        setFormData(product);
        setImagePreview(product.image || ''); setImageFile(null);
        setImageBackPreview(product.imageBack || ''); setImageBackFile(null);
        setGalleryPreviews(product.gallery || []); setGalleryFiles([]);
        setView('form');
    };

    const handleDelete = async (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        if (confirm('Delete this product permanently?')) {
            await deleteDoc(doc(db, 'products', id));
        }
    };

    const handleDeleteAllFiltered = async () => {
        const filteredProducts = products.filter(p => {
            const categoryOk = !selectedCategory || p.category === selectedCategory;
            const sportOk = !selectedSport || p.sport === selectedSport || p.sport === 'All' || !p.sport;
            return categoryOk && sportOk;
        });
        if (filteredProducts.length === 0) return;
        
        if (confirm(`Are you sure you want to delete all ${filteredProducts.length} filtered products permanently?`)) {
            setLoading(true);
            try {
                for (const p of filteredProducts) {
                    await deleteDoc(doc(db, 'products', p.id));
                }
                alert('Successfully deleted all filtered products.');
            } catch (err) {
                console.error(err);
                alert('Error deleting some products.');
            } finally {
                setLoading(false);
            }
        }
    };

    const handleUploadFabrics = async () => {
        const fabrics = [
            '4 Way lycra', 'Bricks', 'Cocktail', 'Dotknit', 'Dryfit',
            'Golflink', 'Honeycomb', 'Jacquard', 'Maxplus', 'Mesh',
            'Monopoly', 'NS Lycra', 'Nirmalknit', 'Polyester', 'RIB',
            'Silkysofty', 'Spaun Matty', 'Super Poly', 'Super Softy',
            'Superplus', 'Taiwan', 'Tracko', 'Twill'
        ];
        
        if (confirm(`Upload ${fabrics.length} fabrics to database?`)) {
            setLoading(true);
            try {
                for (const f of fabrics) {
                    await setDoc(doc(db, 'fabrics', f), { name: f });
                }
                alert('Successfully uploaded all fabrics.');
            } catch (err) {
                console.error(err);
                alert('Error uploading fabrics.');
            } finally {
                setLoading(false);
            }
        }
    };

    const compressImage = async (file: File) => {
        try {
            return await imageCompression(file, { maxSizeMB: 0.8, maxWidthOrHeight: 1600, useWebWorker: true });
        } catch (error) {
            console.error('Compression error:', error);
            if (file.size <= 10 * 1024 * 1024) return file;
            alert('Could not process this image. Try a JPG or PNG under 10MB.');
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
        
        // If it's an existing URL from Firebase, we remove it from formData
        if (galleryPreviews[idx].startsWith('http')) {
            const existingGallery = [...(formData.gallery || [])];
            const urlToRemove = galleryPreviews[idx];
            setFormData({ ...formData, gallery: existingGallery.filter(url => url !== urlToRemove) });
        } else {
            // It's a newly added file
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
            setFormData({ ...formData, image: '' }); // Reset formData image since we have a file
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
        setSaveNotice('');
        try {
            if (!auth.currentUser) {
                throw new Error('You are not signed in. Log in at Force HQ and try again.');
            }

            const uploadOne = async (file: File, kind: string) => {
                const imageRef = ref(storage, storagePath('products', kind, file));
                await uploadBytes(imageRef, file, { contentType: file.type || 'image/jpeg' });
                return getDownloadURL(imageRef);
            };

            let imageUrl = httpAssetUrl(formData.image) || httpAssetUrl(imagePreview);
            if (imageFile) imageUrl = await uploadOne(imageFile, 'main');

            let imageBackUrl = httpAssetUrl(formData.imageBack) || httpAssetUrl(imageBackPreview);
            if (imageBackFile) imageBackUrl = await uploadOne(imageBackFile, 'back');

            const finalGalleryUrls = (formData.gallery || []).filter((url) => httpAssetUrl(url));
            if (galleryFiles.length > 0) {
                for (const file of galleryFiles) {
                    finalGalleryUrls.push(await uploadOne(file, 'gallery'));
                }
            }

            if (!imageUrl) {
                setSaving(false);
                setSaveNotice('Please upload a front image before saving.');
                return;
            }

            const createdAt = formData.createdAt instanceof Timestamp || (formData.createdAt && typeof formData.createdAt.toMillis === 'function')
                ? formData.createdAt
                : serverTimestamp();

            const payload = {
                title: (formData.title || '').trim(),
                category: formData.category || 'T-Shirts',
                sport: formData.sport || 'All',
                usageType: formData.usageType || 'General',
                productCode: (formData.productCode || '').trim(),
                description: (formData.description || '').trim(),
                longDescription: (formData.longDescription || formData.description || '').trim(),
                image: imageUrl,
                imageBack: imageBackUrl || '',
                gallery: finalGalleryUrls,
                features: cleanStringArray(formData.features),
                fabrics: cleanStringArray(formData.fabrics),
                gsms: cleanStringArray(formData.gsms),
                specs: cleanSpecs(formData.specs),
                createdAt,
                updatedAt: serverTimestamp(),
            };

            if (!payload.title) {
                setSaving(false);
                setSaveNotice('Please enter a product title.');
                return;
            }

            const docId = currentId || `prod-${Date.now()}`;
            await setDoc(doc(db, 'products', docId), payload);

            setSelectedCategory(null);
            setSelectedSport(null);
            setSaveNotice('Product saved. It is now at the top of the list.');
            resetForm();
        } catch (error) {
            console.error('Error saving:', error);
            setSaveNotice(saveErrorMessage(error));
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

    const matchesHqFilters = (p: Product) => {
        const categoryOk = !selectedCategory || p.category === selectedCategory;
        const sportOk = !selectedSport || p.sport === selectedSport || p.sport === 'All' || !p.sport;
        return categoryOk && sportOk;
    };

    const visibleProducts = products.filter(matchesHqFilters).sort((a, b) => {
        if (selectedCategory === '3D Innovations') return compare3dInnovations(a, b);
        return catalogRecencyMs(b) - catalogRecencyMs(a);
    });

    if (loading) return <div className="flex justify-center p-20"><Loader2 className="w-8 h-8 animate-spin text-cyan-600" /></div>;

    if (view === 'form') {
        return (
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex items-center justify-between">
                    <button onClick={resetForm} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors">
                        <ArrowLeft className="w-5 h-5" /> Back to Products
                    </button>
                    <h1 className="text-2xl font-black uppercase text-slate-900">
                        {currentId ? 'Edit Product' : 'Add New Product'}
                    </h1>
                </div>

                <form onSubmit={handleSave} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-8">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Product Title *</label>
                            <input required type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 text-slate-900" value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="e.g., T20 Pro Polo" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Product Code</label>
                            <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 text-slate-900" value={formData.productCode || ''} onChange={e => setFormData({...formData, productCode: e.target.value})} placeholder="e.g., #TN-101" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Category *</label>
                            <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 text-slate-900" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Sport *</label>
                            <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 text-slate-900" value={formData.sport} onChange={e => setFormData({...formData, sport: e.target.value})}>
                                {SPORTS.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>
                    </div>

                    {/* Descriptions */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Short Description *</label>
                            <textarea required className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 text-slate-900 h-24" value={formData.description || ''} onChange={e => setFormData({...formData, description: e.target.value})} placeholder="Brief overview of the product..." />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Long Description (Optional)</label>
                            <textarea className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 text-slate-900 h-32" value={formData.longDescription || ''} onChange={e => setFormData({...formData, longDescription: e.target.value})} placeholder="Detailed explanation..." />
                        </div>
                    </div>

                    {/* Multiple Image Uploads */}
                    <div className="space-y-6 border-t border-slate-100 pt-6">
                        <h3 className="font-black text-slate-900 uppercase tracking-widest text-sm">Product Images</h3>
                        
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

                    {/* Dynamic Lists (Features & Specs) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                        {/* Features */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Features List</label>
                                <button type="button" onClick={addFeature} className="text-cyan-600 hover:text-cyan-700 text-xs font-bold uppercase flex items-center gap-1">
                                    <Plus className="w-3 h-3" /> Add Feature
                                </button>
                            </div>
                            {(formData.features || []).map((feat, idx) => (
                                <div key={idx} className="flex gap-2">
                                    <input type="text" className="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-cyan-500 text-slate-900 text-sm" value={feat} onChange={e => handleFeatureChange(idx, e.target.value)} placeholder="e.g., Moisture Wicking" />
                                    <button type="button" onClick={() => removeFeature(idx)} className="p-3 text-red-400 hover:bg-red-50 rounded-lg"><X className="w-4 h-4" /></button>
                                </div>
                            ))}
                        </div>

                        {/* Specs */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Specifications</label>
                                <button type="button" onClick={addSpec} className="text-cyan-600 hover:text-cyan-700 text-xs font-bold uppercase flex items-center gap-1">
                                    <Plus className="w-3 h-3" /> Add Spec
                                </button>
                            </div>
                            {Object.entries(formData.specs || {}).map(([key, val], idx) => (
                                <div key={idx} className="flex gap-2">
                                    <input type="text" className="w-1/3 p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-cyan-500 text-slate-900 text-sm font-bold" value={key} onChange={e => handleSpecChange(key, e.target.value, val)} placeholder="Key" />
                                    <input type="text" className="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-cyan-500 text-slate-900 text-sm" value={val} onChange={e => handleSpecChange(key, key, e.target.value)} placeholder="Value" />
                                    <button type="button" onClick={() => removeSpec(key)} className="p-3 text-red-400 hover:bg-red-50 rounded-lg"><X className="w-4 h-4" /></button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {saveNotice && (
                        <div className={`p-4 rounded-2xl text-sm font-bold ${saveNotice.startsWith('Product saved') ? 'bg-emerald-50 text-emerald-800 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                            {saveNotice}
                        </div>
                    )}

                    <div className="pt-8 border-t border-slate-100 flex justify-end">
                        <button type="submit" disabled={saving || (!imageFile && !httpAssetUrl(imagePreview) && !httpAssetUrl(formData.image))} className="bg-slate-900 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest flex items-center gap-3 hover:bg-slate-800 disabled:opacity-50">
                            {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                            {saving ? 'Saving...' : 'Save Product'}
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
                    <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Products Manager</h1>
                    <p className="text-slate-500 mt-1">Manage your active catalog · <span className="font-bold text-slate-700">{products.length} total products</span></p>
                    {saveNotice && (
                        <p className={`mt-3 text-sm font-bold ${saveNotice.startsWith('Product saved') ? 'text-emerald-700' : 'text-red-600'}`}>
                            {saveNotice}
                        </p>
                    )}
                </div>
                <div className="flex gap-3">
                    {visibleProducts.length > 0 && (
                        <button onClick={handleDeleteAllFiltered} className="bg-red-600 text-white px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-red-700 transition-colors flex items-center gap-2">
                            <Trash2 className="w-4 h-4" /> Delete All Filtered
                        </button>
                    )}
                    <button onClick={() => setView('form')} className="bg-cyan-600 text-white px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-cyan-700 transition-colors flex items-center gap-2">
                        <Plus className="w-4 h-4" /> Add Product
                    </button>
                </div>
            </div>

            {/* ── Category Stats ── */}
            <div>
                <div className="flex justify-between items-center mb-3">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Filter By Category</p>
                    {selectedCategory && <button onClick={() => setSelectedCategory(null)} className="text-[10px] font-black uppercase text-cyan-600 hover:text-cyan-700">Clear</button>}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
                    {[
                        { label: 'T-Shirts',      key: 'T-Shirts',        emoji: '👕', color: 'bg-blue-50 border-blue-100 text-blue-700' },
                        { label: 'Track Pants',   key: 'Track Pants',     emoji: '🩲', color: 'bg-indigo-50 border-indigo-100 text-indigo-700' },
                        { label: 'Shorts',        key: 'Shorts',          emoji: '🩳', color: 'bg-purple-50 border-purple-100 text-purple-700' },
                        { label: 'Jackets',       key: 'Jackets',         emoji: '🧥', color: 'bg-orange-50 border-orange-100 text-orange-700' },
                        { label: 'Bags',          key: 'Bags',            emoji: '🎒', color: 'bg-amber-50 border-amber-100 text-amber-700' },
                        { label: 'Caps',          key: 'Caps',            emoji: '🧢', color: 'bg-green-50 border-green-100 text-green-700' },
                        { label: '3D Innovations',key: '3D Innovations',  emoji: '🏅', color: 'bg-cyan-50 border-cyan-100 text-cyan-700' },
                    ].map(({ label, key, emoji, color }) => {
                        const count = products.filter(p => p.category === key && (!selectedSport || p.sport === selectedSport || p.sport === 'All' || !p.sport)).length;
                        const isSelected = selectedCategory === key;
                        return (
                            <button key={key} onClick={() => setSelectedCategory(isSelected ? null : key)} className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all hover:scale-105 ${isSelected ? 'ring-2 ring-cyan-500 shadow-md ' + color : color + ' opacity-80 hover:opacity-100'}`}>
                                <span className="text-2xl mb-1">{emoji}</span>
                                <span className="text-2xl font-black leading-none">{count}</span>
                                <span className="text-[9px] font-black uppercase tracking-widest mt-1 text-center opacity-70">{label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ── Sport Stats ── */}
            <div>
                <div className="flex justify-between items-center mb-3">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Filter By Sport</p>
                    {selectedSport && <button onClick={() => setSelectedSport(null)} className="text-[10px] font-black uppercase text-cyan-600 hover:text-cyan-700">Clear</button>}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                    {[
                        { label: 'Cricket',     key: 'Cricket',     emoji: '🏏', color: 'bg-yellow-50 border-yellow-100 text-yellow-800' },
                        { label: 'Badminton',   key: 'Badminton',   emoji: '🏸', color: 'bg-green-50 border-green-100 text-green-700' },
                        { label: 'Football',    key: 'Football',    emoji: '⚽', color: 'bg-slate-50 border-slate-200 text-slate-700' },
                        { label: 'Volleyball',  key: 'Volleyball',  emoji: '🏐', color: 'bg-orange-50 border-orange-100 text-orange-700' },
                        { label: 'Kabaddi',     key: 'Kabaddi',     emoji: '🤼', color: 'bg-red-50 border-red-100 text-red-700' },
                        { label: 'Pickleball',  key: 'Pickleball',  emoji: '🎾', color: 'bg-lime-50 border-lime-100 text-lime-700' },
                        { label: 'Tennis',      key: 'Tennis',      emoji: '🎾', color: 'bg-teal-50 border-teal-100 text-teal-700' },
                    ].map(({ label, key, emoji, color }) => {
                        const count = products.filter(p => p.sport === key && (!selectedCategory || p.category === selectedCategory)).length;
                        const isSelected = selectedSport === key;
                        return (
                            <button key={key} onClick={() => setSelectedSport(isSelected ? null : key)} className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all hover:scale-105 ${isSelected ? 'ring-2 ring-cyan-500 shadow-md ' + color : color + ' opacity-80 hover:opacity-100'}`}>
                                <span className="text-2xl mb-1">{emoji}</span>
                                <span className="text-2xl font-black leading-none">{count}</span>
                                <span className="text-[9px] font-black uppercase tracking-widest mt-1 text-center opacity-70">{label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                {visibleProducts.length === 0 ? (
                    <div className="p-12 text-center text-slate-400">
                        <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-20" />
                        <h3 className="text-lg font-bold text-slate-900 mb-2">No products found</h3>
                        <p className="text-sm">Try clearing your filters or add a new product.</p>
                    </div>
                ) : (
                    <div className="divide-y divide-slate-100">
                        {/* Table Header */}
                        <div className="hidden md:grid grid-cols-[90px_1.2fr_1fr_160px_120px] gap-4 px-6 py-3 bg-slate-50 text-[10px] uppercase tracking-widest text-slate-500 font-black border-b border-slate-155">
                            <span>Images</span>
                            <span>Product Info</span>
                            <span>Fabric & Features</span>
                            <span>Tags</span>
                            <span className="text-right">Actions</span>
                        </div>

                        {visibleProducts.map(prod => (
                            <div key={prod.id} className="flex flex-col md:grid md:grid-cols-[90px_1.2fr_1fr_160px_120px] gap-4 px-4 sm:px-6 py-5 items-start hover:bg-slate-50/60 transition-colors group">

                                {/* Images — front + back stacked */}
                                <div className="flex md:flex-col gap-1.5 flex-wrap">
                                    <div className="w-[72px] h-[72px] bg-slate-100 border border-slate-200 rounded-xl overflow-hidden flex items-center justify-center shadow-sm shrink-0">
                                        {prod.image
                                            ? <img src={getCDNUrl(prod.image)} alt={prod.title} className="w-full h-full object-cover" />
                                            : <ImageIcon className="text-slate-300 w-6 h-6" />}
                                    </div>
                                    {prod.imageBack && (
                                        <div className="w-[72px] h-[72px] bg-slate-100 border border-slate-200 rounded-xl overflow-hidden flex items-center justify-center shadow-sm shrink-0">
                                            <img src={getCDNUrl(prod.imageBack)} alt="back" className="w-full h-full object-cover" />
                                        </div>
                                    )}
                                    {prod.gallery && prod.gallery.length > 0 && (
                                        <span className="text-[9px] text-slate-400 font-bold text-center self-center md:self-auto">+{prod.gallery.length} gallery</span>
                                    )}
                                </div>

                                {/* Product Info */}
                                <div className="space-y-1.5 min-w-0 w-full">
                                    <h4 className="font-black text-slate-900 text-sm leading-tight">{prod.title}</h4>
                                    {prod.productCode && (
                                        <span className="inline-block bg-slate-900 text-white px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-widest">
                                            {prod.productCode}
                                        </span>
                                    )}
                                    {prod.description && (
                                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mt-1">
                                            {prod.description}
                                        </p>
                                    )}
                                    {prod.usageType && (
                                        <span className="inline-block text-[9px] font-black uppercase tracking-widest text-slate-400 border border-slate-200 px-2 py-0.5 rounded-md">
                                            {prod.usageType}
                                        </span>
                                    )}
                                </div>

                                {/* Fabric & Features */}
                                <div className="space-y-2 min-w-0 w-full">
                                    {prod.fabrics && prod.fabrics.filter(Boolean).length > 0 && (
                                        <div>
                                            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Fabrics</p>
                                            <div className="flex flex-wrap gap-1">
                                                {prod.fabrics.filter(Boolean).map((f, i) => (
                                                    <span key={i} className="bg-cyan-50 border border-cyan-100 text-cyan-700 text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wide">
                                                        {f}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {prod.gsms && prod.gsms.filter(Boolean).length > 0 && (
                                        <div>
                                            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">GSM</p>
                                            <div className="flex flex-wrap gap-1">
                                                {prod.gsms.filter(Boolean).map((g, i) => (
                                                    <span key={i} className="bg-violet-50 border border-violet-100 text-violet-700 text-[9px] font-black px-2 py-0.5 rounded-md">
                                                        {g}g
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {prod.features && prod.features.filter(Boolean).length > 0 && (
                                        <div>
                                            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Features</p>
                                            <div className="flex flex-wrap gap-1">
                                                {prod.features.filter(Boolean).slice(0, 3).map((f, i) => (
                                                    <span key={i} className="bg-slate-100 text-slate-600 text-[9px] font-bold px-2 py-0.5 rounded-md">
                                                        {f}
                                                    </span>
                                                ))}
                                                {prod.features.filter(Boolean).length > 3 && (
                                                    <span className="text-[9px] text-slate-400 font-bold">+{prod.features.filter(Boolean).length - 3} more</span>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Tags — Category + Sport */}
                                <div className="space-y-2 w-full">
                                    {prod.category && (
                                        <div>
                                            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Category</p>
                                            <span className="inline-block bg-blue-50 border border-blue-100 text-blue-700 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
                                                {prod.category}
                                            </span>
                                        </div>
                                    )}
                                    {prod.sport && prod.sport !== 'All' && (
                                        <div>
                                            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Sport</p>
                                            <span className="inline-block bg-amber-50 border border-amber-100 text-amber-700 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
                                                {prod.sport}
                                            </span>
                                        </div>
                                    )}
                                    {prod.specs && Object.keys(prod.specs).filter(k => prod.specs![k]).length > 0 && (
                                        <div>
                                            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Specs</p>
                                            <div className="space-y-0.5">
                                                {Object.entries(prod.specs).filter(([, v]) => v).slice(0, 2).map(([k, v]) => (
                                                    <p key={k} className="text-[9px] text-slate-500"><span className="font-black text-slate-700">{k}:</span> {v}</p>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="flex md:flex-col gap-2 items-center md:items-end w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t border-slate-100 md:border-t-0">
                                    <button
                                        onClick={() => handleEdit(prod)}
                                        className="flex items-center gap-1.5 px-4 py-2.5 md:py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-xl text-xs font-black uppercase tracking-wider transition-colors flex-1 md:flex-initial w-full justify-center"
                                    >
                                        <Edit2 className="w-3.5 h-3.5" /> Edit
                                    </button>
                                    <button
                                        onClick={(e) => handleDelete(prod.id, e)}
                                        className="flex items-center gap-1.5 px-4 py-2.5 md:py-2 bg-red-50 text-red-500 hover:bg-red-100 rounded-xl text-xs font-black uppercase tracking-wider transition-colors flex-1 md:flex-initial w-full justify-center"
                                    >
                                        <Trash2 className="w-3.5 h-3.5" /> Delete
                                    </button>
                                </div>

                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
