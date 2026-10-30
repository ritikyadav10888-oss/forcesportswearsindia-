# Prioritized SEO Action Plan: forcesportsindia.com

## Phase 1: Critical Technical Fixes (Immediate)
- [x] **Fix Site-Wide Canonical Tags:**
  - Added `metadataBase: new URL('https://www.forcesportsindia.com')` and `alternates: { canonical: './' }` to `src/app/layout.tsx`.
- [x] **Implement Dynamic Product Metadata:**
  - Added `generateMetadata` in `src/app/products/[productId]/page.tsx` so each of the 180+ products gets its own unique title, description, and social share image.
- [x] **Configure Social Preview Images:**
  - Defined `openGraph.images` and `twitter.images` in `src/app/layout.tsx` and `src/app/page.tsx` pointing to `/hero-montage.png` and `/brand/logo-256.png`.

---

## Phase 2: High-Impact Structured Data & Sitemaps (Week 1)
- [x] **Product JSON-LD Schema:**
  - Injected `schema.org/Product` schema on `/products/[productId]` including name, description, brand ("Force Sports & Wears India"), SKU, image, and B2B wholesale offer availability.
- [x] **BreadcrumbList Schema:**
  - Injected `schema.org/BreadcrumbList` schema linking Home -> Products -> [Product Name].
  - Added `schema.org/WebSite` schema with search action in `src/components/seo/Schema.tsx`.
- [x] **Add `<lastmod>` to Sitemap:**
  - Updated all 181 URLs in `public/sitemap.xml` with `<lastmod>2026-10-30</lastmod>`.

---

## Phase 3: AI Search Readiness & Content Refinement (Week 2)
- [x] **Publish `public/llms.txt`:**
  - Created standard `/public/llms.txt` specifying company profile, manufacturing capacities, Sportex fabrics, B2B wholesale MOQs, and contact points for AI engines (Perplexity, ChatGPT Search, Claude).
- [x] **Trim Homepage Meta Description:**
  - Trimmed homepage description in `src/app/page.tsx` to 160 characters to prevent SERP snippet truncation.
- [x] **Add Alt Text to Remaining Images:**
  - Updated review avatars in `src/views/Home/HomePage.tsx` to include descriptive alt text.
- [x] **Add Security Headers in Next.js:**
  - Configured `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, and `Referrer-Policy: strict-origin-when-cross-origin` in `next.config.mjs`.
