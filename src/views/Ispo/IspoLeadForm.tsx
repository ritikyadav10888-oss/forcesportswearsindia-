"use client";

import React, { useEffect, useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { db } from '../../lib/firebase';
import { trackEvent } from '../../lib/analytics';
import { BRAND_DETAILS } from '../../data/brandData';
import { ISPO_EVENT } from '../../data/ispoEvent';
import { DIAL_CODES } from '../../data/dialCodes';

// Visitor details from the ISPO showroom. Saved to the `inquiries` collection, so each one lands
// in the admin Leads page (/force-hq/leads) tagged with source "ISPO Showroom".
// Consent follows India's DPDP Act 2023: itemised notice, unticked opt-in, separate marketing opt-in,
// withdrawal/erasure contact, and the notice version stored with the record.
const NOTICE_VERSION = 'ispo-2026-10-v2'; // v2: consent now names WhatsApp
const PRIVACY_URL = 'https://www.forcesportsindia.com/privacy';
const INTERESTS = ['Official team jerseys', 'Fan jerseys', 'Full team kits', 'Uniforms', 'Private label / OEM', 'Other'];
// every country, India first, the rest A–Z by English name: [iso, dial code, name]
const countryOptions = () => {
    const names = new Intl.DisplayNames(['en'], { type: 'region' });
    return Object.entries(DIAL_CODES)
        .map(([iso, dial]) => [iso, dial, names.of(iso) ?? iso] as const)
        .sort((a, b) => (a[0] === 'IN' ? -1 : b[0] === 'IN' ? 1 : a[2].localeCompare(b[2])));
};
const EMPTY = { fullName: '', company: '', country: '', email: '', dialCode: '', phone: '', productType: '', quantity: '', message: '' };
const LIMITS: Record<keyof typeof EMPTY, number> = {
    fullName: 100, company: 120, country: 60, email: 200, dialCode: 2, phone: 20, productType: 60, quantity: 40, message: 2000,
};

const field = 'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent';
const label = 'block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1.5';

export default function IspoLeadForm() {
    const [form, setForm] = useState(EMPTY);
    const [consent, setConsent] = useState(false);
    const [marketing, setMarketing] = useState(false);
    const [trap, setTrap] = useState('');
    const [state, setState] = useState<'idle' | 'saving' | 'done' | 'error'>('idle');
    const [phoneError, setPhoneError] = useState('');
    // built in the browser: server and browser may name countries slightly differently
    const [countries, setCountries] = useState<ReturnType<typeof countryOptions>>([]);
    useEffect(() => setCountries(countryOptions()), []);

    const set = (key: keyof typeof EMPTY) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [key]: e.target.value.slice(0, LIMITS[key]) });
        if (key === 'dialCode' || key === 'phone') setPhoneError('');
    };

    // picking a country also fills the phone country code, unless the visitor already chose one
    const pickCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const iso = countries.find(([, , name]) => name === e.target.value)?.[0] ?? '';
        setForm({ ...form, country: e.target.value, dialCode: form.dialCode || iso });
        setPhoneError('');
    };

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        // bots fill the hidden field; pretend it worked and store nothing
        if (trap) { setState('done'); return; }

        const digits = form.phone.replace(/[^\d]/g, '').replace(/^0+/, '');
        const dial = DIAL_CODES[form.dialCode];
        if (digits && !dial) { setPhoneError('Choose your country code.'); return; }
        if (digits && (digits.length < 6 || digits.length > 14)) { setPhoneError('Enter a valid phone number.'); return; }
        setPhoneError('');

        setState('saving');
        try {
            const { dialCode, phone, ...rest } = form;
            const data = Object.fromEntries(Object.entries(rest).map(([k, v]) => [k, v.trim()]).filter(([, v]) => v));
            await addDoc(collection(db, 'inquiries'), {
                ...data,
                ...(digits ? { phone: `${dial} ${digits}` } : {}),
                source: `${ISPO_EVENT.name} Showroom`,
                status: 'new',
                consentGiven: true,
                marketingConsent: marketing,
                consentNotice: NOTICE_VERSION,
                createdAt: serverTimestamp(),
            });
            // best effort: the lead is already saved, a failed WhatsApp must not show an error
            if (digits) {
                fetch('/api/ispo-whatsapp', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: form.fullName, phone: `${dial}${digits}` }),
                }).catch(() => {});
            }
            trackEvent('generate_lead', { form: 'ispo', product_type: form.productType || undefined });
            setForm(EMPTY);
            setConsent(false);
            setMarketing(false);
            setState('done');
        } catch (err) {
            console.error('ISPO lead not saved', err);
            setState('error');
        }
    };

    if (state === 'done') {
        return (
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
                <CheckCircle2 size={40} className="mx-auto text-green-600" />
                <h3 className="mt-4 text-2xl font-black uppercase tracking-tight">Thank you!</h3>
                <p className="mt-2 text-slate-500">We have your details and will be in touch soon.</p>
                <button type="button" onClick={() => setState('idle')} className="mt-6 text-[10px] font-black uppercase tracking-widest text-cyan-600 hover:text-slate-900">
                    Add another visitor
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={submit} className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-sm grid sm:grid-cols-2 gap-4">
            <div>
                <label htmlFor="ispo-name" className={label}>Full name *</label>
                <input id="ispo-name" required minLength={2} autoComplete="name" value={form.fullName} onChange={set('fullName')} className={field} />
            </div>
            <div>
                <label htmlFor="ispo-company" className={label}>Company / club</label>
                <input id="ispo-company" autoComplete="organization" value={form.company} onChange={set('company')} className={field} />
            </div>
            <div>
                <label htmlFor="ispo-email" className={label}>Email *</label>
                <input id="ispo-email" type="email" required autoComplete="email" value={form.email} onChange={set('email')} className={field} />
            </div>
            <div>
                <label htmlFor="ispo-country" className={label}>Country</label>
                <select id="ispo-country" autoComplete="country-name" value={form.country} onChange={pickCountry} className={field}>
                    <option value="">Choose your country</option>
                    {countries.map(([iso, , name]) => <option key={iso} value={name}>{name}</option>)}
                </select>
            </div>
            {/* own row so the dropdown can show the full "Netherlands (+31)"; stacks on phones */}
            <div className="sm:col-span-2">
                <label htmlFor="ispo-phone" className={label}>Phone / WhatsApp</label>
                <div className="flex flex-col sm:flex-row gap-2">
                    <select aria-label="Country code" value={form.dialCode} onChange={set('dialCode')}
                        className={`${field.replace('w-full ', '')} w-full sm:w-[15rem] shrink-0`}>
                        <option value="">Country code</option>
                        {countries.map(([iso, dial, name]) => <option key={iso} value={iso}>{name} ({dial})</option>)}
                    </select>
                    <input id="ispo-phone" type="tel" inputMode="tel" autoComplete="tel-national" placeholder="612 345 678" value={form.phone} onChange={set('phone')}
                        aria-invalid={!!phoneError} aria-describedby={phoneError ? 'ispo-phone-error' : undefined} className={`${field} min-w-0`} />
                </div>
                {phoneError && <p id="ispo-phone-error" className="mt-1 text-xs text-red-600">{phoneError}</p>}
            </div>
            <div>
                <label htmlFor="ispo-qty" className={label}>Estimated quantity</label>
                <input id="ispo-qty" inputMode="numeric" placeholder="e.g. 500 pieces" value={form.quantity} onChange={set('quantity')} className={field} />
            </div>
            <div>
                <label htmlFor="ispo-interest" className={label}>Interested in</label>
                <select id="ispo-interest" value={form.productType} onChange={set('productType')} className={field}>
                    <option value="">Choose one</option>
                    {INTERESTS.map((i) => <option key={i}>{i}</option>)}
                </select>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="ispo-message" className={label}>Notes</label>
                <textarea id="ispo-message" rows={4} value={form.message} onChange={set('message')} className={field} placeholder="What you are looking for, timelines, sports…" />
            </div>

            {/* DPDP Act 2023 notice: what, why, how long, and the person's rights */}
            <div className="sm:col-span-2 rounded-2xl bg-slate-50 border border-slate-200 p-4 text-xs text-slate-600 leading-relaxed space-y-2">
                <p className="font-black uppercase tracking-widest text-[10px] text-slate-500">How we use your details</p>
                <p>
                    <strong>{BRAND_DETAILS.name}</strong> (Data Fiduciary, Mumbai, India) collects the details above only to reply to your
                    enquiry and send you quotes, samples and lead times. We keep them for up to 24 months after our last contact, then
                    delete them. We do not sell them or share them outside our team, except with service providers that store our data for us.
                </p>
                <p>
                    You can withdraw consent, or ask us to see, correct or delete your data, at any time by writing to{' '}
                    <a href={`mailto:${BRAND_DETAILS.contacts.email}?subject=Personal data request`} className="text-cyan-700 underline">{BRAND_DETAILS.contacts.email}</a>.
                    If you are not satisfied, you may complain to the Data Protection Board of India. Details in our{' '}
                    <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer" className="text-cyan-700 underline">Privacy Policy</a>.
                </p>
            </div>
            <label className="sm:col-span-2 flex items-start gap-3 text-sm text-slate-700 cursor-pointer">
                <input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 accent-cyan-600" />
                <span>I agree that {BRAND_DETAILS.name} may store and use these details to reply to my enquiry by email or WhatsApp, as described above. *</span>
            </label>
            <label className="sm:col-span-2 flex items-start gap-3 text-sm text-slate-700 cursor-pointer">
                <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 accent-cyan-600" />
                <span>Also send me new collections and offers (optional, unsubscribe any time).</span>
            </label>

            {/* honeypot: hidden from people, filled by bots */}
            <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" value={trap} onChange={(e) => setTrap(e.target.value)} className="hidden" name="website" />
            <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3">
                <button type="submit" disabled={state === 'saving' || !consent} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-cyan-600 text-white text-xs font-black uppercase tracking-widest hover:bg-slate-900 transition disabled:opacity-60 disabled:cursor-not-allowed">
                    {state === 'saving' ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />} Send my details
                </button>
                {state === 'error' && <p role="alert" className="text-sm text-red-600">Could not save. Please try again, or message us on WhatsApp.</p>}
            </div>
        </form>
    );
}
