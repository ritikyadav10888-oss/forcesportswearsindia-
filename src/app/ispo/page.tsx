import type { Metadata } from 'next';
import ISPOPage from '../../views/ISPO/ISPOPage';
import { ISPO_EVENT } from '../../data/ispoData';

export const metadata: Metadata = {
    title: `Force Sports & Wears India at ${ISPO_EVENT.name} | ${ISPO_EVENT.dates}`,
    description: `Meet Force Sports & Wears India at ${ISPO_EVENT.name}, ${ISPO_EVENT.venue}, ${ISPO_EVENT.dates}. Custom teamwear, Sportex fabrics, in-house printing, promotional T-shirts and global delivery — plus free giveaways and a daily lucky draw.`,
    alternates: { canonical: 'https://www.forcesportsindia.com/ispo' },
    openGraph: {
        title: `Force Sports & Wears India at ${ISPO_EVENT.name}`,
        description: `Custom teamwear made in Mumbai, shipped worldwide. Visit us at ${ISPO_EVENT.venue}, ${ISPO_EVENT.dates}.`,
        type: 'website',
        locale: 'en_IN',
        siteName: 'Force Sports & Wears India',
    },
};

export default function Page() { return <ISPOPage />; }
