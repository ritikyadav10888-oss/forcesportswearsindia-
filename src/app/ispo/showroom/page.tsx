import type { Metadata } from 'next';
import ShowroomPage from '../../../views/Ispo/ShowroomPage';

export const metadata: Metadata = {
    title: 'ISPO Digital Showroom | Force Sports & Wears India',
    description: 'Explore Force Sports & Wears India at ISPO Amsterdam: 3D Innovations jerseys in every colourway, official and fan jerseys for 8 sports, and how we make teamwear in Mumbai.',
    alternates: {
        canonical: 'https://ispo.forcesportsindia.com/',
    },
    openGraph: {
        title: 'Force × ISPO Amsterdam | Digital Showroom',
        description: 'Our collections, colours and factory, and what we are bringing to ISPO Amsterdam.',
        url: 'https://ispo.forcesportsindia.com/',
        type: 'website',
        images: [
            {
                url: '/hero-montage.png',
                width: 1200,
                height: 630,
                alt: 'Force Sports ISPO Digital Showroom',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Force × ISPO Amsterdam | Digital Showroom',
        description: 'Our collections, colours and factory, and what we are bringing to ISPO Amsterdam.',
        images: ['/hero-montage.png'],
    },
};

export default function Page() {
    return <ShowroomPage />;
}
