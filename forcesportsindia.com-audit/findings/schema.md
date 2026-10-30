# Structured Data & Schema Audit - forcesportsindia.com

## Executive Summary
- **Schema Score:** 75 / 100
- **Implementation:** Custom JSON-LD component via `Schema.tsx`

---

## 1. Existing Schemas
### Schema 1: `schema.org/Organization`
- **Fields:** Name, Alternate Names (`Force Sports`, `Force Sports India`), URL, Logo, Description, Founder (`Anand Sanghai`), Founding Date (`2007`), Slogan.
- **`knowsAbout`:** 15 highly targeted industry entities (Sublimation Printing, Sportex Fabrics, Custom Sportswear Manufacturing, Cricket Jerseys, etc.).
- **`sameAs`:** Facebook, Instagram, YouTube, and IndiaMart profiles.

### Schema 2: `schema.org/SportsStore`, `Manufacturer`, `WholesaleStore`
- **Fields:** Multitype B2B store & manufacturer.
- **Physical Details:** Complete Mumbai address (`5/31, near Jain Hospital, Motilal Nagar III, Goregaon West, Mumbai 400062`), Phone (`+91 9594021303`), Geo-coordinates (`19.1601, 72.8421`), and Opening Hours.

---

## 2. Missing Schema Opportunities
1. **`schema.org/Product` with `Offer`:**
   - Missing on `/products/[productId]`.
   - Adding Product schema will qualify product URLs for Google Rich Results (Merchant Center, Price/Inquiry display, image previews).
2. **`schema.org/BreadcrumbList`:**
   - Missing across `/products/...`, `/catalog/...`, `/uniforms/...`.
   - Breadcrumb schema helps Google display clean breadcrumb trails in search listings instead of raw URLs.
3. **`schema.org/WebSite`:**
   - Missing search action definition for sitelinks search box.

