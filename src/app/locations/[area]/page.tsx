import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocationById, TARGET_LOCATIONS } from '../../../data/locations';
import { BRAND_DETAILS } from '../../../data/brandData';
import Link from 'next/link';
import { ChevronRight, MapPin, PackageOpen, Globe, Truck, CheckCircle2 } from 'lucide-react';
import SEO from '../../../components/seo/SEO';

interface Props {
    params: { area: string };
}

// Ensure Next.js statically generates these pages at build time
export function generateStaticParams() {
    return TARGET_LOCATIONS.map((loc) => ({
        area: loc.id,
    }));
}

export function generateMetadata({ params }: Props): Metadata {
    const location = getLocationById(params.area);
    if (!location) return { title: 'Location Not Found' };

    const title = `Top Bulk T-Shirt & Sportswear Manufacturer in ${location.name}`;
    const description = `Force Sports & Wears India is a premium manufacturer and wholesale exporter of custom sportswear, team uniforms, and bulk t-shirts delivering to ${location.name}.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
        }
    };
}

export default function LocationPage({ params }: Props) {
    const location = getLocationById(params.area);

    if (!location) {
        notFound();
    }

    const isInternational = location.region === 'International';

    return (
        <div className="bg-white pt-24 pb-16 min-h-screen">
            <SEO 
                title={`Top Bulk T-Shirt & Sportswear Manufacturer in ${location.name}`}
                description={`Leading manufacturer and wholesale exporter of custom sportswear, bulk t-shirts, and team uniforms. Serving ${location.name} with premium quality.`}
            />

            <div className="max-w-7xl mx-auto px-6">
                
                {/* Hero Section */}
                <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white mb-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.3)_0%,transparent_70%)]" />
                    <div className="relative z-10">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 font-bold uppercase tracking-widest text-xs mb-6">
                            {isInternational ? <Globe size={16} /> : <MapPin size={16} />}
                            Delivering to {location.name}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight">
                            Premium Custom Sportswear <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                Manufacturer in {location.name}
                            </span>
                        </h1>
                        <p className="text-slate-300 max-w-2xl mx-auto text-lg md:text-xl mb-10 leading-relaxed">
                            {BRAND_DETAILS.name} provides top-tier bulk t-shirts, cricket kits, and corporate uniforms to clients in {location.name}. We handle manufacturing and ensure seamless delivery directly to your door.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/products" className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-black uppercase tracking-widest text-sm rounded-full transition-colors inline-flex items-center justify-center gap-2">
                                Explore Products <ChevronRight size={16} />
                            </Link>
                            <Link href="/inquiry" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black uppercase tracking-widest text-sm rounded-full transition-colors inline-flex items-center justify-center gap-2">
                                Request Bulk Quote
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                        <PackageOpen size={32} className="text-cyan-600 mb-6" />
                        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-3">Bulk Manufacturing</h3>
                        <p className="text-slate-600 leading-relaxed">In-house production facility capable of handling large-scale corporate and sports team orders with precision.</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                        <Truck size={32} className="text-cyan-600 mb-6" />
                        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-3">
                            {isInternational ? 'Global Export' : 'Nationwide Shipping'}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                            Secure packaging and reliable logistics partners ensuring your customized apparel reaches {location.name} on time.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                        <CheckCircle2 size={32} className="text-cyan-600 mb-6" />
                        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-3">Sportex Fabrics</h3>
                        <p className="text-slate-600 leading-relaxed">Over 23+ technical fabrics including Dryfit, Dotknit, and Lycra, designed specifically for high-performance athletic wear.</p>
                    </div>
                </div>

                {/* SEO Text Section */}
                <div className="prose prose-lg prose-slate max-w-4xl mx-auto">
                    <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">Why choose us for orders in {location.name}?</h2>
                    <p>
                        Finding a reliable supplier for custom sportswear in {location.name} can be challenging. Many suppliers act as middlemen, driving up costs and delaying production. At <strong>{BRAND_DETAILS.name}</strong>, we are the direct manufacturers.
                    </p>
                    <p>
                        With {BRAND_DETAILS.experience} of industry experience, we offer 100% customizable jerseys, sublimation printing, and embroidery. Whether you are outfitting a corporate league, a school sports team, or launching your own apparel brand, we offer competitive wholesale pricing without compromising on quality.
                    </p>
                    <ul>
                        <li>Direct manufacturer pricing (no middlemen)</li>
                        <li>Advanced 3D design prototyping</li>
                        <li>Dedicated shipping channels to {location.name}</li>
                        <li>High-quality Sportex technical fabrics</li>
                    </ul>
                    <p>
                        Ready to start? <Link href="/inquiry" className="text-cyan-600 font-bold hover:underline">Contact our sales team</Link> today for a free quote on your bulk order.
                    </p>
                </div>
            </div>
        </div>
    );
}
