import type { Metadata } from 'next';
import HomePage from '../views/Home/HomePage';
import { SEO_KEYWORDS } from '../data/seoKeywords';

export const metadata: Metadata = {
    title: 'Force Sports & Wears India | Custom Sports Uniforms & Apparel Mumbai',
    description: 'Custom sports uniforms, team jerseys & apparel manufacturer in Mumbai. Bulk B2B orders for schools, clubs & corporates. Sportex fabric, pan-India delivery.',
    keywords: SEO_KEYWORDS.home,
    alternates: {
        canonical: 'https://www.forcesportsindia.com/',
    },
    openGraph: {
        title: 'Force Sports & Wears India | Custom Sports Uniforms',
        description: 'Custom sports uniforms, team jerseys & apparel manufacturer in Mumbai. Bulk B2B orders for schools, clubs & corporates. Sportex fabric, pan-India delivery.',
        type: 'website',
        locale: 'en_IN',
        url: 'https://www.forcesportsindia.com/',
        siteName: 'Force Sports & Wears India',
        images: [
            {
                url: '/hero-montage.png',
                width: 1200,
                height: 630,
                alt: 'Force Sports & Wears India - Custom Sports Uniforms & Teamwear',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Force Sports & Wears India | Custom Sports Uniforms',
        description: 'Custom sports uniforms, team jerseys & apparel manufacturer in Mumbai. Bulk B2B orders for schools, clubs & corporates.',
        images: ['/hero-montage.png'],
    },
};

export default function Page() { return <HomePage />; }
