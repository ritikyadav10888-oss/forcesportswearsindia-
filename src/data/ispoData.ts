/**
 * ISPO Amsterdam 2026 — exhibition details shown on /ispo, the home banner and the navbar.
 * Fill in hall/booth, prizes and draw time here; every page reads from this one file.
 */
export const ISPO_EVENT = {
    name: 'ISPO Amsterdam 2026',
    shortLabel: 'ISPO 2026',
    dates: '3–5 November 2026',
    venue: 'RAI Amsterdam, Netherlands',
    /** TODO: replace with the confirmed hall and booth number */
    hall: 'Hall [X]',
    booth: 'Booth [NO.]',
    /** TODO: daily lucky-draw time at the booth */
    drawTime: '[TIME]',
    prizes: [
        { rank: '1st', label: '[Grand prize — e.g. full custom team kit]' },
        { rank: '2nd', label: '[Second prize]' },
        { rank: 'All', label: 'Free Force giveaway for every booth visitor' },
    ],
    /** TODO: promotional T-shirt terms */
    promoMoq: '[MOQ] pcs per design',
    promoLeadTime: '[X] days after approval',
};

/** Sports shown as filter chips on /ispo — products come from the live catalogue (data/products.ts). */
export const ISPO_SPORTS = ['Cricket', 'Football', 'Kabaddi', 'Volleyball', 'Badminton', 'Tennis', 'Table Tennis', 'Pickleball'] as const;

export const ISPO_PRINTING = [
    { name: 'Sublimation', desc: 'All-over, full-colour designs dyed into the fabric. Won’t crack, peel or fade.', best: 'Jerseys, esports, running kits' },
    { name: 'Screen Printing', desc: 'Bold, solid spot colours with the lowest cost per piece on large runs.', best: 'Promotional & event tees' },
    { name: 'DTF Printing', desc: 'Sharp, photo-quality detail on cotton, polyester and blends.', best: 'Detailed logos, short runs' },
    { name: 'Embroidery', desc: 'Premium stitched crests and logos that last the life of the garment.', best: 'Polos, caps, jackets' },
    { name: 'Heat Transfer', desc: 'Player names, numbers and sponsor patches, personalised piece by piece.', best: 'Names & numbers' },
    { name: 'Digital Design', desc: 'In-house designers turn your logo or idea into a mock-up before production.', best: 'Every order' },
];

export const ISPO_REGIONS = ['Netherlands', 'Germany', 'Rest of Europe', 'UK', 'Middle East', 'Asia', 'Americas', 'Africa & Oceania'];
