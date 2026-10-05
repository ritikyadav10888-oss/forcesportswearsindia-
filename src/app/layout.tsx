import type { Metadata } from "next";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/500.css";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow/700.css";
import "@fontsource/barlow-condensed/500.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "../index.css";
import PublicLayoutWrapper from "../components/layout/PublicLayoutWrapper";
import { Analytics } from "@vercel/analytics/react";
import Schema from "../components/seo/Schema";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Force Sports & Wears India | Global Bulk T-Shirt & Custom Sportswear Manufacturer",
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
    "Force Sports ISPO Amsterdam",
  ],
  icons: {
    icon: "/brand-logo.png",
    apple: "/brand-logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="font-sans scroll-smooth">
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
