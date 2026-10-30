# On-Page & Content Quality Audit - forcesportsindia.com

## Executive Summary
- **Content Score:** 64 / 100
- **Primary Keyword Clusters:** Custom Sports Uniforms, Sports Jerseys Mumbai, B2B Bulk T-Shirts, Sublimation Printing India, School Sports Uniforms, Sportex Technical Fabric.

---

## 1. Title Tags & Meta Descriptions
| Page | Title Status | Meta Description Status | Finding |
|---|---|---|---|
| `/` (Homepage) | 65 chars (Optimal) | 207 chars (Too Long) | Title is well-targeted. Description exceeds 160 characters and will be truncated in SERPs. |
| `/uniforms` | 74 chars (Good) | 158 chars (Good) | Well optimized for B2B keywords. |
| `/catalog` | 60 chars (Good) | 165 chars (Good) | Good intent targeting. |
| `/about` | 66 chars (Good) | 160 chars (Good) | Good E-E-A-T background. |
| `/products/[productId]` | Duplicate root title | Duplicate root description | **CRITICAL:** Dynamic product routes lack `generateMetadata()`, falling back to root title and description on all 180+ pages. |

---

## 2. Heading Architecture (H1-H6)
- **Homepage H1:** Exactly 1 H1 (`Force Sports & Wears India`).
- **Homepage H2s:** 9 clean, logical section headings:
  - `Build your custom kit`
  - `Featured Products`
  - `There's more to discover`
  - `Technical Fabric Library`
  - `Vertically Integrated powerhouse`
- **Product Pages:** Proper single H1 representing the product title.

---

## 3. Media & Image Optimization
- **Image Count:** 36 images detected on the homepage.
- **Alt Text Coverage:** 32 images have alt text; 4 images lack alt tags.
- **Next.js Image Component:** Utilized across core banners and featured sections.

---

## Recommendations
1. **Dynamic Metadata on Product Pages:**
   In `src/app/products/[productId]/page.tsx`, export `generateMetadata` fetching the product details:
   ```typescript
   export async function generateMetadata({ params }): Promise<Metadata> {
     const { productId } = await params;
     const product = getProductById(productId);
     return {
       title: `${product.name} | Custom Sportswear | Force Sports India`,
       description: product.description || `Bulk order custom ${product.name} with sublimation printing and Sportex fabric.`,
       openGraph: {
         images: [product.image || '/hero-montage.png'],
       }
     };
   }
   ```
2. **Trim Homepage Meta Description:** Reduce length to ~155 characters:
   > *"Custom sports uniforms, team jerseys & apparel manufacturer in Mumbai. Bulk B2B orders for schools, clubs & corporates. Sportex fabric, pan-India delivery."*

