# ARALytica Web (`aralytica-web`)

Modern Next.js replacement for the [ARALytica](https://aralytica.com/) website.

> **Phase 0 Status:** Safe Development Setup & Project Foundation  
> **Production Status:** The live WordPress site at `https://aralytica.com/` remains active, unchanged, and isolated.

---

## 🛠 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Code Quality:** ESLint + Prettier
- **Target Deployment Platform:** Vercel

---

## 📁 Project Structure

```text
aralytica/
├── app/
│   ├── about/page.tsx        # Placeholder route: /about
│   ├── contact/page.tsx      # Placeholder route: /contact
│   ├── insights/page.tsx     # Placeholder route: /insights
│   ├── research/page.tsx     # Placeholder route: /research
│   ├── services/page.tsx     # Placeholder route: /services
│   ├── team/page.tsx         # Placeholder route: /team
│   ├── globals.css           # Brand tokens, theme, Tailwind CSS
│   ├── layout.tsx            # Global shell with Header & Footer
│   └── page.tsx              # Placeholder route: /
├── components/
│   ├── layout/
│   │   ├── header.tsx        # Responsive navigation bar with brand logo
│   │   └── footer.tsx        # Brand footer with tagline
│   └── ui/                   # Modular UI primitives (reserved for Phase 1+)
├── lib/
│   └── utils.ts              # Class name merging utility (clsx + tailwind-merge)
├── public/
│   ├── images/               # Preserved service illustrations
│   ├── icons/                # SVG icons and favicons
│   └── logo/                 # ARALytica brand logo
├── .env.example              # Environment variable template
├── .prettierrc               # Prettier configuration
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies and scripts
└── tsconfig.json             # TypeScript configuration
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the development application.

### 3. Build for production
```bash
npm run build
```

### 4. Code quality checks
```bash
npm run lint
npm run format
```

---

## 🎨 Brand Identity

- **Tagline:** *"Evidence. Insight. Impact."*
- **Primary Color:** `#650DD4`
- **Etymology:** Rooted in the Filipino word *"Aral"*, meaning study and disciplined learning.
