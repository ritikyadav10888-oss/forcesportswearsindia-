import type { Metadata } from 'next';
import TestimonialPage from '../../views/Testimonials/TestimonialPage';
import { SEO_KEYWORDS } from '../../data/seoKeywords';

export const metadata: Metadata = {
    title: 'Submit Team Review | Force Sports & Wears India',
    description: 'Share your review, team details, and jersey photo with Force Sports & Wears India.',
    keywords: SEO_KEYWORDS.testimonial,
};

export default function Page() {
    return <TestimonialPage />;
}
