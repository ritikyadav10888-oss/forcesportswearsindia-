import type { Metadata } from 'next';
import AboutPage from '../../views/About/AboutPage';
import { SEO_KEYWORDS } from '../../data/seoKeywords';

export const metadata: Metadata = {
    title: 'About Force Sports and Wears India | Custom Sportswear Since 2007',
    description: 'Force Sports and Wears India is a Goregaon, Mumbai custom sportswear manufacturer founded in 2007 by Mr. Anand Sanghai. In-house sublimation, stitching, and team kits for clubs, schools, and corporates.',
    keywords: SEO_KEYWORDS.about,
    openGraph: {
        title: 'About Force Sports and Wears India | Since 2007',
        description: 'Mumbai custom sportswear manufacturer since 2007. Founded by Mr. Anand Sanghai. In-house design, print, and stitch in Goregaon.',
        type: 'website',
        locale: 'en_IN',
        siteName: 'Force Sports & Wears India',
    },
};

export default function Page() { return <AboutPage />; }
