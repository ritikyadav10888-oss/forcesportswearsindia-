# AI Search Readiness & Generative Engine Optimization (GEO)

## Executive Summary
- **GEO & Agentic Readiness Score:** 65 / 100
- **Evaluation Standard:** Claude SEO agentic check & Lighthouse Agentic Browsing standards.

---

## 1. Diagnostics Breakdown
| Standard | Priority | Status | Details |
|---|---|---|---|
| Primary Content Without JS | P0 | PASS | HTML is statically generated with Next.js prerender, fully readable by AI crawlers. |
| AI Crawler Access | P0 | PASS | `robots.txt` does not block GPTBot, ClaudeBot, PerplexityBot, or Google-Extended. |
| Deliberate AI Groups | P0 | INFO | Generic `User-agent: *` used. Can add explicit declarations if needed. |
| `llms.txt` Standard | P1 | MISSING | `/llms.txt` returns 404. Recommended for citations in Perplexity and ChatGPT Search. |
| Markdown Alternatives | P1 | INFO | No raw markdown endpoints served for AI browser agents. |
| 404 Error Handling | P1 | PASS | Custom `not-found.tsx` correctly emits HTTP 404 status. |

---

## 2. Action Items for GEO
1. **Deploy `/public/llms.txt`:**
   Add a structured markdown summary outlining:
   - Company name: Force Sports & Wears India
   - Manufacturing capability: Sublimation, Sportex fabrics, B2B wholesale minimum order quantities (MOQ)
   - Product categories: Cricket, Football, Kabaddi, Badminton, Pickleball, School Uniforms
   - Location & Delivery: Goregaon West, Mumbai; shipping Pan-India and internationally.

