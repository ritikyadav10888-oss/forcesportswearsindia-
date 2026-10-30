import type { Metadata } from "next";
import { Roboto, Playfair_Display, Bodoni_Moda } from "next/font/google";
import "../index.css";
import PublicLayoutWrapper from "../components/layout/PublicLayoutWrapper";
import { Analytics } from "@vercel/analytics/react";
import Schema from "../components/seo/Schema";
import Script from "next/script";

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const playfair = Playfair_Display({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

// brand name wordmark ("Force Sports & Wears India")
const bodoni = Bodoni_Moda({
  weight: ['700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bodoni',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.forcesportsindia.com"),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "Force Sports & Wears India | Global Bulk T-Shirt & Custom Sportswear Manufacturer",
    template: "%s | Force Sports India",
  },
  description: "Leading global manufacturer and wholesale exporter of customized sports apparel, bulk t-shirts, and team uniforms. Based in India, shipping worldwide.",
  keywords: [
    "Force Sports",
    "Force Sports India",
    "Force Sports and Wears India",
    "Force Sports & Wears India",
    "Force Sports Mumbai",
    "Force Sports Goregaon",
    "Force Sports manufacturer",
    "Force Sports custom jersey",
    "Force Sports teamwear",
    "Force Sports bulk order",
    "Force Sports cricket jersey",
    "Force Sports football jersey",
    "Force Sports kabaddi kit",
    "Force Sports school uniform",
  ],
  icons: {
    icon: "/brand/logo-256.png",
    apple: "/brand/logo-256.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.forcesportsindia.com",
    siteName: "Force Sports & Wears India",
    title: "Force Sports & Wears India | Custom Sports Uniforms & Teamwear",
    description: "Leading global manufacturer and wholesale exporter of customized sports apparel, bulk t-shirts, and team uniforms. Based in India, shipping worldwide.",
    images: [
      {
        url: "/hero-montage.png",
        width: 1200,
        height: 630,
        alt: "Force Sports & Wears India - Custom Sports Uniforms & Apparel",
      },
      {
        url: "/brand/logo-256.png",
        width: 256,
        height: 256,
        alt: "Force Sports & Wears India Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Force Sports & Wears India | Custom Sports Uniforms",
    description: "Leading global manufacturer and wholesale exporter of customized sports apparel, bulk t-shirts, and team uniforms.",
    images: ["/hero-montage.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${playfair.variable} ${bodoni.variable} font-sans scroll-smooth`}>
      <body className="font-sans">
        <PublicLayoutWrapper>
          {children}
        </PublicLayoutWrapper>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QYY8VZXZS2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QYY8VZXZS2');
          `}
        </Script>
        <Analytics />
        <Schema />
      </body>
    </html>
  );
}