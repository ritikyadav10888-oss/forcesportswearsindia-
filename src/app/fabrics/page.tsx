import type { Metadata } from 'next';
import FabricsPage from '../../views/Fabrics/FabricsPage';
import { SEO_KEYWORDS } from '../../data/seoKeywords';

export const metadata: Metadata = {
    title: 'Sportex Fabric Library | GSM Guide & Technical Fabrics | Force Sports India',
    description: 'Explore 23+ premium Sportex India fabrics with GSM weights — Polyester, Dryfit, 4-Way Lycra, Jacquard, and more. Choose the right fabric for your custom sports uniform or teamwear.',
    keywords: SEO_KEYWORDS.fabrics,
    openGraph: {
        title: 'Sportex Fabric Library | Force Sports & Wears India',
        description: 'Explore 23+ premium fabrics with GSM weights for custom sports uniforms. Sublimation, screen print, embroidery-ready options.',
        type: 'website',
    },
};

export default function Page() {
    return <FabricsPage />;
}
