import type { Metadata } from 'next';
import FAQPage from '../../views/FAQ/FAQPage';
import { SEO_KEYWORDS } from '../../data/seoKeywords';

export const metadata: Metadata = {
    title: 'FAQ | Custom Sportswear Orders, MOQ & Delivery | Force Sports India',
    description: 'Answers on minimum order quantity, production time, sublimation printing, fabrics, and bulk custom jersey orders from Force Sports Mumbai.',
    keywords: SEO_KEYWORDS.faq,
};

export default function Page() { return <FAQPage />; }
