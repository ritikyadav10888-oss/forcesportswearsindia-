import type { Metadata } from 'next';
import ProductPage from '../../views/Products/ProductPage';
import { SEO_KEYWORDS } from '../../data/seoKeywords';

export const metadata: Metadata = {
    title: 'Sports Products Catalog | Custom Jerseys, Shorts & Gear | Force Sports India',
    description: 'Browse our complete catalog of premium customizable sports products — T-shirts, track pants, shorts, jackets, bags and caps. Bulk orders for teams, schools, and corporates. Pan-India delivery.',
    keywords: SEO_KEYWORDS.products,
    openGraph: {
        title: 'Sports Products Catalog | Force Sports & Wears India',
        description: 'Browse 100+ customizable sports products. T-shirts, track pants, shorts, jackets and more. Bulk B2B orders welcome.',
        type: 'website',
    },
};

export default function Page() { return <ProductPage />; }