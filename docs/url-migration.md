# ARALytica URL Migration & Redirect Map

**Document Purpose:** Reference plan for Phase 7 (Production Cutover & Vercel Redirects).  
**Notice:** Do NOT implement live production redirects or alter production DNS during developmental phases.

---

## URL Route Mapping Matrix

| Existing WordPress URL                             | Modern Next.js Route | Status & Content Reference                     | Redirect Type (Phase 7) |
| :------------------------------------------------- | :------------------- | :--------------------------------------------- | :---------------------- |
| `https://aralytica.com/`                           | `/`                  | Default blog feed -> Next.js Modern Homepage   | Direct Cutover          |
| `https://aralytica.com/home/`                      | `/`                  | Drafted Homepage -> Next.js Homepage           | 301 Permanent Redirect  |
| `https://aralytica.com/about-us/`                  | `/about`             | Drafted About Us -> Next.js About Page         | 301 Permanent Redirect  |
| `https://aralytica.com/our-services/`              | `/services`          | Drafted Services -> Next.js Services Page      | 301 Permanent Redirect  |
| `https://aralytica.com/our-team/`                  | `/team`              | Drafted Team -> Next.js Team Page              | 301 Permanent Redirect  |
| `https://aralytica.com/our-team/2/`                | `/team`              | Empty WordPress pagination artifact            | 301 Permanent Redirect  |
| `https://aralytica.com/contact/`                   | `/contact`           | 503 error on WP -> Next.js Contact Page        | 301 Permanent Redirect  |
| `https://aralytica.com/contact-us/`                | `/contact`           | Missing on WP -> Next.js Contact Page          | 301 Permanent Redirect  |
| `https://aralytica.com/research/`                  | `/research`          | New institutional section                      | 200 Native Route        |
| `https://aralytica.com/insights/`                  | `/insights`          | New editorial & briefs section                 | 200 Native Route        |
| `https://aralytica.com/uncategorized/hello-world/` | `/insights`          | Sample boilerplate WP post -> Archive/Insights | 301 Permanent Redirect  |
| `https://aralytica.com/feed/`                      | `/feed.xml`          | WordPress RSS Feed (Future Phase)              | 301 or Rewrite          |

---

## Planned `next.config.ts` Configuration for Phase 7

```typescript
// Sample redirect configuration to be activated in Phase 7 during production cutover:
async redirects() {
  return [
    { source: "/home", destination: "/", permanent: true },
    { source: "/about-us", destination: "/about", permanent: true },
    { source: "/our-services", destination: "/services", permanent: true },
    { source: "/our-team/:path*", destination: "/team", permanent: true },
    { source: "/contact-us", destination: "/contact", permanent: true },
    { source: "/uncategorized/:path*", destination: "/insights", permanent: true },
  ];
}
```
