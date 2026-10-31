import type { Metadata, Viewport } from 'next';
import IspoPage from '../../views/Ispo/IspoPage';

export const metadata: Metadata = {
    title: 'Meet Us at ISPO Amsterdam | Force Sports & Wears India',
    description: 'Meet Force Sports & Wears India at ISPO Amsterdam and explore our digital showroom: official and fan jerseys, 3D Innovations and team kits made in Mumbai since 2007.',
    keywords: ['ISPO Amsterdam', 'sportswear manufacturer India', 'custom team jerseys', 'sublimation jersey manufacturer', 'teamwear exporter'],
    alternates: {
        canonical: 'https://www.forcesportsindia.com/ispo',
    },
    openGraph: {
        title: 'Meet Force Sports & Wears India at ISPO Amsterdam',
        description: 'Visit our stand: official and fan jerseys and team kits from our Mumbai factory.',
        url: 'https://www.forcesportsindia.com/ispo',
        type: 'website',
        images: [
            {
                url: '/hero-montage.png',
                width: 1200,
                height: 630,
                alt: 'Meet Force Sports at ISPO Amsterdam',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Meet Force Sports & Wears India at ISPO Amsterdam',
        description: 'Visit our stand: official and fan jerseys and team kits from our Mumbai factory.',
        images: ['/hero-montage.png'],
    },
};

export const viewport: Viewport = {
    themeColor: '#E54B22',
    viewportFit: 'cover',
};

export default function Page() {
    return <IspoPage />;
}
