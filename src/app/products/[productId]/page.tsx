import type { Metadata } from 'next';
import ProductDetailPage from '../../../views/Products/ProductDetailPage';
import ProductPage from '../../../views/Products/ProductPage';
import { PRODUCTS } from '../../../data/products';

const SPORTS = ['badminton', 'cricket', 'football', 'volleyball', 'kabaddi', 'pickleball', 'tennis'];

interface PageProps {
    params: Promise<{ productId: string }> | { productId: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await Promise.resolve(params);
    const productId = resolvedParams?.productId || '';
    const isSport = SPORTS.includes(productId.toLowerCase());

    if (isSport) {
        const sportName = productId.charAt(0).toUpperCase() + productId.slice(1);
        const title = `Custom ${sportName} Uniforms & Jerseys | Force Sports India`;
        const description = `Custom sublimated ${sportName} jerseys and team uniforms engineered with high-performance Sportex technical fabric. Bulk B2B orders with pan-India and global shipping.`;
        const url = `https://www.forcesportsindia.com/products/${productId}`;

        return {
            title,
            description,
            alternates: { canonical: url },
            openGraph: {
                title,
                description,
                url,
                type: 'website',
                siteName: 'Force Sports & Wears India',
                images: [{ url: '/hero-montage.png', width: 1200, height: 630, alt: `${sportName} Uniforms & Jerseys` }],
            },
            twitter: {
                card: 'summary_large_image',
                title,
                description,
                images: ['/hero-montage.png'],
            },
        };
    }

    const product = PRODUCTS.find((p) => p.id === productId || p.productCode === productId);
    const title = product ? `${product.title} | Force Sports India` : 'Custom Sports Apparel & Uniforms | Force Sports India';
    const rawDesc = product?.description || product?.longDescription || 'Premium custom sports apparel and team uniforms manufactured with Sportex high-performance fabric.';
    const description = rawDesc.length > 155 ? `${rawDesc.slice(0, 152)}...` : rawDesc;
    const url = `https://www.forcesportsindia.com/products/${productId}`;
    
    let imageUrl = '/hero-montage.png';
    if (product?.image) {
        imageUrl = product.image.startsWith('http') ? product.image : product.image;
    }

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            type: 'website',
            siteName: 'Force Sports & Wears India',
            images: [{ url: imageUrl, width: 800, height: 800, alt: product?.title || 'Custom Sportswear' }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [imageUrl],
        },
    };
}

export default async function Page({ params }: PageProps) {
    const resolvedParams = await Promise.resolve(params);
    const productId = resolvedParams?.productId || '';
    const isSport = SPORTS.includes(productId.toLowerCase());

    if (isSport) {
        return <ProductPage initialSport={productId} />;
    }

    const product = PRODUCTS.find((p) => p.id === productId || p.productCode === productId);
    const canonicalUrl = `https://www.forcesportsindia.com/products/${productId}`;
    const productImageUrl = product?.image 
        ? (product.image.startsWith('http') ? product.image : `https://www.forcesportsindia.com${product.image}`)
        : 'https://www.forcesportsindia.com/hero-montage.png';

    const productSchema = product ? {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': product.title,
        'description': product.description || product.longDescription || 'Custom B2B teamwear and sports jersey manufactured by Force Sports.',
        'image': productImageUrl,
        'sku': product.productCode || product.id,
        'category': product.category || 'Sportswear',
        'brand': {
            '@type': 'Brand',
            'name': 'Force Sports & Wears India',
        },
        'manufacturer': {
            '@type': 'Organization',
            'name': 'Force Sports & Wears India',
            'url': 'https://www.forcesportsindia.com',
        },
        'offers': {
            '@type': 'AggregateOffer',
            'priceCurrency': 'INR',
            'lowPrice': '299',
            'highPrice': '1999',
            'offerCount': '100',
            'availability': 'https://schema.org/InStock',
            'priceValidUntil': '2027-12-31',
            'seller': {
                '@type': 'Organization',
                'name': 'Force Sports & Wears India',
            },
        },
    } : null;

    const breadcrumbsSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://www.forcesportsindia.com',
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Products',
                'item': 'https://www.forcesportsindia.com/products',
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': product?.title || productId,
                'item': canonicalUrl,
            },
        ],
    };

    return (
        <>
            {productSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
                />
            )}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
            />
            <ProductDetailPage />
        </>
    );
}
