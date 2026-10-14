// ISPO exhibition details shown on /ispo. Fill these in once confirmed; empty values show
// "To be announced" on the page, so nothing wrong is published in the meantime.
export const ISPO_EVENT = {
    name: 'ISPO Amsterdam',
    city: 'Amsterdam, Netherlands',
    /** e.g. "1–3 December 2026" */
    dates: '4–5 November 2026',
    /** e.g. "RAI Amsterdam" */
    venue: '',
    /** e.g. "Hall 5" */
    hall: '11',
    /** e.g. "C21" */
    booth: 'B30',
    /** sales address shown on the ISPO card, showroom and contact card */
    email: 'sale@forcesports.in',
    /** ISPO team mobiles; the first one also takes WhatsApp */
    phones: ['+91 90290 00493', '+91 95940 21303'],
};

/** wa.me link for the ISPO WhatsApp number, with a pre-filled message */
export const ispoWhatsApp = (text: string) =>
    `https://wa.me/${ISPO_EVENT.phones[0].replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;
