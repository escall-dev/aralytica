# ARALytica Sanity CMS Content Architecture Setup & Operations Guide

This guide documents the Sanity CMS integration implemented in Phase 5 for ARALytica.

---

## 1. Sanity Architecture Overview

The Sanity CMS integration provides structured, headless content management for:

- **Research & Publications** (`research`)
- **Insights & Commentary** (`insight`)
- **Team & Leadership** (`teamMember`)

All core brand identity, navigation, homepage architecture, services structure, site configuration, and contact workflows remain governed in the Next.js application layer.

```
aralytica/
├── app/
│   ├── research/
│   │   ├── page.tsx            # Research repository feed (with CMS & fallback)
│   │   └── [slug]/page.tsx     # Dynamic research publication detail
│   ├── insights/
│   │   ├── page.tsx            # Editorial desks feed (with CMS & fallback)
│   │   └── [slug]/page.tsx     # Dynamic editorial article detail
│   ├── team/
│   │   └── page.tsx            # Leadership & network (with CMS & fallback)
│   └── studio/[[...tool]]/
│       └── page.tsx            # Embedded Sanity Studio route (/studio)
├── components/
│   └── portable-text/
│       └── portable-text.tsx   # Safe Portable Text block renderer
├── lib/
│   └── sanity/
│       ├── client.ts           # Sanity client & cached fetch wrappers
│       ├── queries.ts          # Centralized GROQ queries & fetchers
│       ├── image.ts            # Sanity image URL builder & responsive helpers
│       ├── adapters.ts         # Data adapters bridging CMS models to UI types
│       └── types.ts            # TypeScript interfaces
├── sanity/
│   ├── env.ts                  # Sanity configuration variables
│   ├── structure.ts            # Studio desk organization
│   └── schemaTypes/
│       ├── index.ts            # Schema registry
│       ├── research.ts         # Research document schema
│       ├── insight.ts          # Insight document schema
│       ├── teamMember.ts       # Team member document schema
│       ├── seo.ts              # Reusable SEO metadata object
│       └── blockContent.ts     # Rich text (Portable Text) schema
└── sanity.config.ts            # Sanity Studio configuration at root
```

---

## 2. Local Studio Startup

The Sanity Studio is embedded directly into the Next.js application using `next-sanity`.

### Launching the Studio:

1. Start the Next.js local development server:
   ```bash
   npm run dev
   ```
2. Navigate to the Studio URL in your browser:
   ```
   http://localhost:3000/studio
   ```

Because the Studio is embedded, content editors can manage content locally alongside the Next.js preview without running a separate Node server or database.

---

## 3. Required Environment Variables

Configuration is managed via `.env.local` (template provided in `.env.example`).

### Public Configuration (Browser and Server Safe)

```bash
# Sanity project ID (found in Sanity Management Console: https://sanity.io/manage)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here

# Sanity dataset (defaults to "production")
NEXT_PUBLIC_SANITY_DATASET=production

# Sanity API version (ISO date format)
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01
```

### Server-Only Configuration (Private)

```bash
# Optional API Read Token (only needed for private datasets or draft previews)
SANITY_API_READ_TOKEN=

# Optional Authenticated Write Token (for migrations or seeding scripts)
SANITY_API_WRITE_TOKEN=

# Optional Webhook Secret for on-demand ISR revalidation
SANITY_REVALIDATE_SECRET=
```

> **Security Rule:** Never commit tokens or project secrets to Git.

---

## 4. Schema Overview

### A. Research (`research`)

- **`title`**: Full institutional title of the paper or evaluation report.
- **`slug`**: URL slug (generated automatically from title).
- **`publicationType`**: Standard classification:
  - Working Paper
  - Policy Note
  - Evaluation Brief
  - Technical Report
- **`status`**: `Draft`, `Published`, or `Archived`. Only `Published` items appear publicly.
- **`domains`**: Controlled ARALytica focus areas:
  - Education Systems & Human Capital
  - Governance & Institutional Diagnostics
  - Evaluation Methodologies & Data Systems
- **`publicationDate`**: Date of formal release (`YYYY-MM-DD`).
- **`authors`**: List of contributing researchers/evaluators.
- **`excerpt`**: Executive summary/abstract for cards and search snippets (max 400 characters).
- **`description`**: Extended methodological scope and context.
- **`documentUrl`**: Direct link to the downloadable PDF.
- **`featured`**: Boolean flag to highlight prominently.
- **`body`**: Rich Portable Text sections including headings, callouts, lists, and citations.
- **`seo`**: Custom meta title, description, and social share image.

### B. Insight (`insight`)

- **`title`**: Editorial headline.
- **`slug`**: URL slug.
- **`category`**: Controlled editorial desk:
  - Featured Articles
  - Research Briefs
  - Data Insights
  - Methodological Notes
- **`status`**: `draft`, `published`, or `archived`.
- **`author`**: Writer or practice lead (defaults to "ARALytica Practice Lead").
- **`publicationDate`**: Date of article release.
- **`readingTime`**: Estimated reading time in minutes (e.g. 4).
- **`excerpt`**: Article lead paragraph and card summary.
- **`coverImage`**: Featured header image with hotspot and required alt text.
- **`featured`**: Highlight at the top of the feed.
- **`body`**: Structured narrative with rich text, blockquotes, and lists.
- **`seo`**: Page-level SEO metadata.

### C. Team Member (`teamMember`)

- **`name`**: Full name (e.g., Joel Paulin Mendoza).
- **`slug`**: URL slug.
- **`role`**: Official title (e.g., Founder & Technical Lead).
- **`category`**: `leadership`, `advisory`, or `associate`.
- **`initials`**: Avatar fallback initials (e.g. JPM).
- **`status`**: `draft` or `published`.
- **`photo`**: Professional portrait with hotspot and alt text.
- **`summary`**: Executive background summary.
- **`bio`**: Verified biographical narrative paragraphs.
- **`specialties`**: Verified core areas of specialization.
- **`organizations`**: Verified institutional experience (e.g. World Bank, USAID, DFAT).
- **`displayOrder`**: Numeric order for team page sorting.
- **`featured`**: Highlight flag.

### D. Reusable SEO Object (`seo`)

- **`metaTitle`**: Page title override (recommended < 70 chars).
- **`metaDescription`**: Search result snippet override (recommended < 160 chars).
- **`openGraphImage`**: 1200x630px social media preview card.
- **`noIndex`**: Instruct search crawlers to exclude the page.

---

## 5. Editorial & Publishing Workflows

### How to Create a Research Document

1. Open the Studio at `http://localhost:3000/studio`.
2. Click **Research & Publications** in the navigation desk.
3. Click the create button (+).
4. Enter the document title, generate the slug, select the publication type (e.g., _Working Paper_), choose the relevant institutional domain, and enter the executive abstract.
5. Provide the publication date and optional PDF document URL.
6. Set the status to **Published**.
7. Click **Publish** at the bottom of the Studio.

### How to Create an Insight Piece

1. In the Studio desk, select **Insights & Commentary**.
2. Click (+).
3. Enter the headline and click **Generate** for the URL slug.
4. Select the editorial desk (e.g., _Methodological Notes_).
5. Enter the author name, publication date, reading time, and lead excerpt.
6. (Optional) Upload a cover image and provide alternative text.
7. Compose the narrative using the rich Portable Text editor.
8. Set status to **published** and click **Publish**.

### How to Manage Team Entries

1. Select **Team & Leadership** in the Studio desk.
2. The verified founder profile (_Joel Paulin Mendoza_) can be managed here with verified institutional experience:
   - **Organizations**: World Bank, USAID, DFAT
   - **Specializations**: Impact Evaluation, Econometric Analysis, Education Policy, Governance Diagnostics, Institutional Capacity Assessment
3. Only verified information may be populated.
4. Click **Publish**.

---

## 6. Draft vs. Published Behavior

- **Public website isolation**: Public Next.js queries explicitly filter documents:
  `!(_id in path("drafts.**")) && status == "Published"` (or `"published"`).
- Draft documents created in Sanity Studio remain in draft state until published by an editor.
- Drafts are **never** exposed on public routes (`/research`, `/insights`, `/team`, `/sitemap.xml`).
- Unauthenticated visitors never receive draft data.

---

## 7. Graceful Degradation & Empty-State Behavior

If the Sanity project has not yet been connected, or contains zero published documents:

1. **Research**: Displays the official _Institutional Publication Archive_ empty state and the three _Repository Governance Standards_.
2. **Insights**: Displays the official _Editorial & Insights Desk_ lead banner and the 4 _Desk Architecture & Coverage_ cards.
3. **Team**: Displays the verified founder content for _Joel Paulin Mendoza_ from `lib/data/team.ts`.
4. **No Crashes**: The Next.js application handles missing environment variables without runtime exceptions or build failures.

---

## 8. Caching and Revalidation Strategy

- Next.js pages use Incremental Static Regeneration (ISR) with a 60-second revalidation period (`export const revalidate = 60`).
- Detail routes (`/research/[slug]` and `/insights/[slug]`) pre-render known published slugs at build time using `generateStaticParams()`, while allowing on-demand rendering of new documents via `dynamicParams = true`.
- Optional future upgrade: On-demand webhook revalidation can be configured using `SANITY_REVALIDATE_SECRET` when automated instant cache purging is desired.

---

## 9. Security & Image Optimization

- **No arbitrary HTML injection**: Portable Text is rendered via native React elements with strict URL scheme validation (`http:`, `https:`, `mailto:`, `tel:`).
- **Next.js Image CDN**: All Sanity images use Next.js `<Image>` with the Sanity CDN remote pattern (`cdn.sanity.io`) configured in `next.config.ts`.
- **Robots Policy**: Search engines are instructed to ignore `/studio` and `/api/` in `app/robots.ts`.

---

## 10. Production Safety Notes

- **Live WordPress Website**: The production website (`https://aralytica.com`) remains completely untouched during this phase.
- **Resend Sending Layer**: No email sending or contact form submissions were invoked during testing or development.
