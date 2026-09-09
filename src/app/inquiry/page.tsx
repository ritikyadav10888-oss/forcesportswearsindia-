import type { Metadata } from 'next';
import React, { Suspense } from 'react';
import InquiryPage from '../../views/Inquiry/InquiryPage';
import { SEO_KEYWORDS } from '../../data/seoKeywords';

export const metadata: Metadata = {
    title: 'Get a Quote | Custom Sports Uniforms & Teamwear | Force Sports India',
    description: 'Request a custom quote for sports jerseys, uniforms, or teamwear. Specify your fabric, quantity, logo placement and our Mumbai team will respond within 24 hours.',
    keywords: SEO_KEYWORDS.inquiry,
    openGraph: {
        title: 'Get a Quote | Force Sports & Wears India',
        description: 'Request a custom quote for sports jerseys, uniforms, or teamwear. Our Mumbai team will respond within 24 hours.',
        type: 'website',
    },
};

export default function Page() { 
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InquiryPage />
    </Suspense>
  ); 
}