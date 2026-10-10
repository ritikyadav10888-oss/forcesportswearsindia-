import React from 'react';
import { Big_Shoulders, Familjen_Grotesk } from 'next/font/google';
import { Store, Download } from 'lucide-react';
import { BRAND_DETAILS } from '../../data/brandData';
import { ISPO_EVENT } from '../../data/ispoEvent';
import { PDF_CATALOG_URL } from '../../data/jerseyVersions';
import MumbaiClock from './MumbaiClock';
import s from './IspoPage.module.css';

// Next.js has no fallback metrics for Big Shoulders yet, so name the fallback ourselves instead of letting it warn
const display = Big_Shoulders({
    weight: ['600', '800'], subsets: ['latin'], display: 'swap', variable: '--font-ispo-display',
    adjustFontFallback: false, fallback: ['Arial Narrow', 'Impact', 'sans-serif'],
});
const body = Familjen_Grotesk({ weight: ['400', '500', '600'], subsets: ['latin'], display: 'swap', variable: '--font-ispo-body' });

const Chevron = () => (
    <svg className={s.go} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 6l6 6-6 6" /></svg>
);

type RowProps = { href: string; icon: React.ReactNode; title: string; detail: string; external?: boolean };

function Row({ href, icon, title, detail, external }: RowProps) {
    return (
        <a className={s.row} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
            <span className={s.ico}>{icon}</span>
            <span className={s.txt}><b>{title}</b><span>{detail}</span></span>
            <Chevron />
        </a>
    );
}

// ISPO digital card: what a visitor at our stand scans to save our contact and reach us.
export default function IspoPage() {
    const { contacts, social, established, name, headquarters } = BRAND_DETAILS;
    const stand = [ISPO_EVENT.hall, ISPO_EVENT.booth].filter(Boolean).join(' ');
    const phoneHref = `tel:${contacts.phone.replace(/\s/g, '')}`;
    const whatsapp = `${contacts.whatsappLink.split('?')[0]}?text=${encodeURIComponent(
        `Hi Force Sports, we met at ${ISPO_EVENT.name}${stand ? ` (Stand ${stand})` : ''}.`
    )}`;
    const instagram = social.instagram.split('?')[0];
    const instagramHandle = '@' + instagram.replace(/\/$/, '').split('/').pop();

    return (
        <div className={`${s.page} ${display.variable} ${body.variable}`}>
            <div className={s.wrap}>
                <header className={s.hero}>
                    <div className={s.streak} aria-hidden="true" />
                    <div className={s.mark} aria-hidden="true">
                        <svg viewBox="0 0 168 168">
                            <circle className={s.ringOrbit} cx="84" cy="84" r="83" />
                            <circle className={s.ringDraw} cx="84" cy="84" r="78" transform="rotate(-90 84 84)" />
                            <circle className={s.orbitDot} cx="84" cy="6" r="2.5" />
                        </svg>
                        <div className={s.emblem} />
                    </div>
                    <h1 className={s.wordmark} role="img" aria-label={name} />
                    <div className={s.tag}>Fueling champions since {established}</div>
                </header>

                <div className={`${s.actions} ${s.in} ${s.d1}`}>
                    <a className={s.save} href="/ispo/showroom">
                        <Store strokeWidth={2} />
                        Enter the digital showroom
                    </a>
                    <a className={`${s.save} ${s.saveAlt}`} href="/ispo/contact.vcf">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="8" r="4" /><path d="M2.5 20c.8-3.6 3.7-6 7.5-6 1.6 0 3 .4 4.2 1.1" /><path d="M19 15v6M16 18h6" /></svg>
                        Save our contact
                    </a>
                </div>

                <section className={`${s.stand} ${s.in} ${s.d2}`} aria-label={`${ISPO_EVENT.name} stand`}>
                    <div>
                        <div className={s.eyebrow}><span className={s.pin} />Meet us at ISPO</div>
                        <p>{ISPO_EVENT.dates ? `${ISPO_EVENT.dates} · ${ISPO_EVENT.city}` : 'Team kits, jerseys and performance wear, made in Mumbai.'}</p>
                    </div>
                    <div className={s.booth}><small>Stand</small>{stand || 'TBA'}</div>
                </section>

                <section className={`${s.group} ${s.in} ${s.d3}`} aria-labelledby="ispo-talk">
                    <div className={s.label} id="ispo-talk">Talk to us</div>
                    <div className={s.list}>
                        <Row href={whatsapp} external title="WhatsApp" detail={contacts.whatsapp}
                            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.5-4.3A8.5 8.5 0 1 1 20.5 11.6Z" /><path d="M9 8.6c.2-.4.5-.5.8-.5h.5l.9 2.1-.6.8c.5 1 1.3 1.8 2.3 2.3l.8-.6 2.1.9v.5c0 .3-.1.6-.5.8-.6.3-1.6.4-3-.4a8 8 0 0 1-3.2-3.2c-.6-1.2-.5-2.2-.1-2.7Z" /></svg>} />
                        <Row href={phoneHref} title="Call" detail={contacts.phone}
                            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3.5h3.2l1.6 4.2-2 1.4a11 11 0 0 0 5.1 5.1l1.4-2 4.2 1.6V17a2.5 2.5 0 0 1-2.7 2.5C9.4 19 5 14.6 4.5 7.2A2.5 2.5 0 0 1 5 3.5Z" /></svg>} />
                        <Row href={`mailto:${ISPO_EVENT.email}?subject=${encodeURIComponent(`Enquiry from ${ISPO_EVENT.name}`)}`} title="Email" detail={ISPO_EVENT.email}
                            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3.5 7l8.5 6 8.5-6" /></svg>} />
                    </div>
                </section>

                <section className={`${s.group} ${s.in} ${s.d4}`} aria-labelledby="ispo-see">
                    <div className={s.label} id="ispo-see">See our work</div>
                    <div className={s.list}>
                        <Row href={PDF_CATALOG_URL} external title="PDF catalogue" detail="Download the full range"
                            icon={<Download strokeWidth={1.8} />} />
                        <Row href="/" title="Website" detail="forcesportsindia.com"
                            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 3.6 5.5 3.6 9s-1.1 6.5-3.6 9c-2.5-2.5-3.6-5.5-3.6-9S9.5 5.5 12 3Z" /></svg>} />
                        <Row href={instagram} external title="Instagram" detail={instagramHandle}
                            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r=".6" fill="currentColor" /></svg>} />
                    </div>
                    <div className={s.socials}>
                        <a href={social.facebook} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 8H17V4.5h-2.5A4 4 0 0 0 10.5 8.5V11H8v3.5h2.5V21H14v-6.5h2.6L17 11h-3V9a1 1 0 0 1 1-1Z" /></svg>Facebook</a>
                        <a href={social.youtube} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><rect x="2.5" y="5.5" width="19" height="13" rx="4" /><path d="M10 9.2v5.6l4.8-2.8Z" fill="currentColor" /></svg>YouTube</a>
                    </div>
                </section>

                <footer className={`${s.foot} ${s.in} ${s.d5}`}>
                    <span className={s.clock}><span className={s.dot} /><MumbaiClock /></span>
                    <span>India Standard Time, UTC+5:30</span>
                    <small>{name} · {headquarters}</small>
                </footer>
            </div>
        </div>
    );
}
