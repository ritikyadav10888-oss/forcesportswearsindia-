import type { Metadata } from 'next';
import CatalogPage from '../../views/Catalog/CatalogPage';
import { SEO_KEYWORDS } from '../../data/seoKeywords';

export const metadata: Metadata = {
    title: 'Digital Catalog | Custom Jersey Lookbook | Force Sports India',
    description: 'Browse Force Sports digital catalogs — custom jerseys, uniforms, and kit designs. Sublimation teamwear ideas for cricket, football, kabaddi, and corporates.',
    keywords: SEO_KEYWORDS.catalog,
};

export default function Page() { return <CatalogPage />; }
