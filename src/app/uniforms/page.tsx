import type { Metadata } from 'next';
import UniformsPage from '../../views/Uniforms/UniformsPage';
import { SEO_KEYWORDS } from '../../data/seoKeywords';

export const metadata: Metadata = {
    title: 'Professional Uniforms | Schools, Corporates & Delivery | Force Sports India',
    description: 'Custom uniforms for schools, colleges, delivery companies, corporates, hospitality and events. Premium quality, bulk orders, pan-India delivery. Force Sports & Wears India, Mumbai.',
    keywords: SEO_KEYWORDS.uniforms,
    openGraph: {
        title: 'Professional Uniforms | Force Sports & Wears India',
        description: 'Custom uniforms for schools, corporates, delivery and hospitality. Premium quality bulk orders. Mumbai-based.',
        type: 'website',
    },
};

export default function Page() { return <UniformsPage />; }