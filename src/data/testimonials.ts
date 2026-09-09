export type TestimonialStatus = 'pending' | 'approved' | 'rejected';

export interface Testimonial {
    id: string;
    name: string;
    role?: string;
    quote: string;
    rating?: number;
    email?: string;
    status: TestimonialStatus;
    createdAt?: unknown;
}

export const FALLBACK_TESTIMONIALS: Omit<Testimonial, 'id' | 'status'>[] = [
    {
        name: 'Rajesh Kumar',
        role: 'Team Manager, HDFC Bank',
        quote: 'Force jerseys stayed vibrant after a full corporate league season — fabric and stitching are top tier.',
        rating: 5,
    },
    {
        name: 'Siddharth Mehta',
        role: 'Goregaon Sports Club',
        quote: 'Breathable Sportex fabrics and perfect fits for our club kits. Bulk order was seamless.',
        rating: 5,
    },
    {
        name: "Anil D'Souza",
        role: 'Elite Athlete',
        quote: 'Tracksuits and compression gear from Force Sports and Wears India are professional-grade.',
        rating: 5,
    },
];
