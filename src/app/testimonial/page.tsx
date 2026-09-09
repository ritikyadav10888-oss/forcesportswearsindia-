import type { Metadata } from 'next';
import TestimonialPage from '../../views/Testimonials/TestimonialPage';
import { SEO_KEYWORDS } from '../../data/seoKeywords';

export const metadata: Metadata = {
    title: 'Write a Testimonial | Force Sports & Wears India',
    description: 'Share your experience with Force Sports custom jerseys, uniforms, and teamwear. Approved reviews appear on our homepage.',
    keywords: SEO_KEYWORDS.testimonial,
};

export default function Page() {
    return <TestimonialPage />;
}
