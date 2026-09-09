"use client";
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { SEO_KEYWORDS } from '../../data/seoKeywords';


interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    article?: boolean;
    keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ 
    title, 
    description, 
    image = 'https://www.forcesportsindia.com/og-image.jpg', 
    article = false,
    keywords = SEO_KEYWORDS.default
}) => {
    const pathname = usePathname();
    
    // Base configuration
    const siteName = 'Force Sports & Wears India';
    const defaultTitle = 'Force Sports & Wears India | Custom Clothing Manufacturer Mumbai';
    const defaultDescription = 'Premium manufacturer of customized sports jerseys, athletic apparel, and technical gear based in Mumbai since 2007. Specializing in sublimation and technical fabrics.';
    const twitterHandle = '@forcesports'; // Replace with actual if available

    const seo = {
        title: title ? `${title} | ${siteName}` : defaultTitle,
        description: description || defaultDescription,
        image: image.startsWith('http') ? image : `https://www.forcesportsindia.com${image}`,
        url: `https://www.forcesportsindia.com${pathname}`,
    };

    useEffect(() => {
        // Update document title
        document.title = seo.title;

        // Helper to update or create meta tags
        const updateMetaTag = (attrName: string, attrValue: string, content: string) => {
            let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
            if (element) {
                element.setAttribute('content', content);
            } else {
                element = document.createElement('meta');
                element.setAttribute(attrName, attrValue);
                element.setAttribute('content', content);
                document.head.appendChild(element);
            }
        };

        // Standard Meta Tags
        updateMetaTag('name', 'description', seo.description);
        updateMetaTag('name', 'robots', 'index,follow');
        updateMetaTag('name', 'keywords', keywords);

        // Open Graph / Facebook
        updateMetaTag('property', 'og:type', article ? 'article' : 'website');
        updateMetaTag('property', 'og:title', seo.title);
        updateMetaTag('property', 'og:description', seo.description);
        updateMetaTag('property', 'og:image', seo.image);
        updateMetaTag('property', 'og:url', seo.url);
        updateMetaTag('property', 'og:site_name', siteName);
        updateMetaTag('property', 'og:locale', 'en_IN');

        // Twitter
        updateMetaTag('name', 'twitter:card', 'summary_large_image');
        updateMetaTag('name', 'twitter:creator', twitterHandle);
        updateMetaTag('name', 'twitter:title', seo.title);
        updateMetaTag('name', 'twitter:description', seo.description);
        updateMetaTag('name', 'twitter:image', seo.image);

        // Canonical
        let canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', seo.url);
        } else {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            canonical.setAttribute('href', seo.url);
            document.head.appendChild(canonical);
        }

    }, [seo.title, seo.description, seo.image, seo.url, article, keywords]);

    return null; // This component doesn't render anything
};

export default SEO;
