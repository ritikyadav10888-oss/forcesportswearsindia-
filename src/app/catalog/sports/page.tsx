import type { Metadata } from 'next';
import SportsCatalogPage from '../../../views/Catalog/SportsCatalogPage';

export const metadata: Metadata = {
    title: 'Sport-wise Catalogue | Official & Fan Jerseys | Force Sports India',
    description: 'Official match jerseys and fan jerseys for cricket, football, badminton, kabaddi, volleyball, pickleball, tennis and table tennis. Customize any design or download the PDF catalogue.',
    keywords: ['official team jerseys', 'fan jerseys', 'custom cricket jersey', 'custom football kit', 'sportswear catalogue', 'ISPO'],
    openGraph: {
        title: 'Official & Fan Jerseys | Force Sports & Wears India',
        description: 'Every design in two versions: official match kit and fan jersey. Browse by sport or download the PDF.',
        type: 'website',
    },
};

export default function Page() {
    return <SportsCatalogPage />;
}
