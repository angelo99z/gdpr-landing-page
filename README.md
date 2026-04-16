# ClearConsent — GDPR Cookie Consent Landing Page

A modern, fully responsive SaaS landing page for **ClearConsent**, a fictional GDPR compliance and cookie consent management tool targeted at European businesses.

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16 (App Router) | React framework, SSG |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first styling |
| [React](https://react.dev/) | 19 | UI rendering |

## Project Structure

```
clearconsent/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navbar with mobile menu & language switcher
│   │   ├── Hero.tsx            # Hero section with headline, CTAs, mock dashboard
│   │   ├── Features.tsx        # 6-feature grid (icons, titles, descriptions)
│   │   ├── Pricing.tsx         # 3-tier pricing cards (Starter / Business / Enterprise)
│   │   ├── Testimonials.tsx    # 3 testimonial cards from fictional EU companies
│   │   ├── FAQ.tsx             # Accordion FAQ (5 GDPR questions)
│   │   ├── Footer.tsx          # Multi-column footer with social links
│   │   └── CookieBanner.tsx    # GDPR-compliant cookie consent banner
│   ├── contexts/
│   │   └── LanguageContext.tsx # EN/DE i18n context with full translation map
│   ├── globals.css             # Global styles (Tailwind import + base resets)
│   ├── layout.tsx              # Root layout (metadata, font, LanguageProvider)
│   └── page.tsx                # Main page — composes all sections
├── public/                     # Static assets
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Features

### Sections

| Section | Description |
|---|---|
| **Navbar** | Fixed/sticky navigation with logo, anchor links, EN/DE switcher, CTA button, and a hamburger menu on mobile |
| **Hero** | Headline split across two lines, subheadline, two CTA buttons (primary + secondary), trust stats, and a mock SaaS dashboard screenshot built entirely in JSX |
| **Features** | 6-card grid covering: Cookie Management, Consent Logging, GDPR Reports, Auto Scan, Multi-language, API Integration — each with a unique icon and colour accent |
| **Pricing** | Three tiers — Starter (€29/mo), Business (€79/mo, highlighted), Enterprise (custom pricing) — with feature lists and CTAs |
| **Testimonials** | Three cards from fictional European companies: MediaHaus GmbH (Germany), EuroRetail BV (Netherlands), Lumière SAS (France) |
| **FAQ** | Animated accordion with 5 GDPR-specific questions covering consent requirements, audit trails, banner customization, analytics integrations, and EU data residency |
| **Footer** | Three link columns (Product / Company / Legal), social icons, and a copyright bar with a "Made in Berlin" geo tag |

### Components

#### Language Switcher (EN / DE)
- Implemented as a React Context (`LanguageContext`) that wraps the entire app
- Toggling EN ↔ DE re-renders all text strings simultaneously without a page reload
- All 80+ translation keys are defined in `LanguageContext.tsx`

#### Cookie Consent Banner
- Appears on first visit (after a short delay) using `localStorage` to track state
- **Accept All** — sets all categories to `true`
- **Reject All** — enables only strictly necessary cookies
- **Customize** — shows a panel with per-category toggle switches:
  - Strictly Necessary (locked `on`)
  - Analytics
  - Marketing
- Consent state (+ timestamp) is persisted to `localStorage` under the key `cc_consent`
- Fully translatable via the language context

## Getting Started

### Prerequisites

- Node.js 18.17+ (LTS recommended)
- npm 9+

### Installation

```bash
# Clone the repository (or navigate into the project folder)
git clone <repo-url>
cd clearconsent

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Type Check

```bash
npx tsc --noEmit
```

## Design Decisions

### Mobile-First Responsive Layout
All sections are built mobile-first using Tailwind's `sm:`, `md:`, and `lg:` breakpoints:
- Navbar collapses to a hamburger menu below `md` (768px)
- Feature grid: 1 col → 2 cols (sm) → 3 cols (lg)
- Pricing cards: 1 col → 3 cols (md)
- Testimonials: 1 col → 3 cols (md)

### Colour Scheme
- **Primary**: `blue-600` (`#2563eb`) — buttons, highlights, accents
- **Background**: `white` / `slate-50` — alternating section backgrounds
- **Text**: `slate-900` (headings) / `slate-500` (body) / `slate-400` (secondary)
- **Success/positive**: `emerald-500` — checkmarks in pricing lists
- **Dark footer**: `slate-900` with `slate-400` text

### Performance
- All sections are React Server Components by default; only interactive components (`Navbar`, `FAQ`, `CookieBanner`, `CookieBanner`, `LanguageContext`) use `"use client"` directives
- Static export at build time (no server runtime needed)
- Fonts loaded via `next/font/google` with `display: swap` for zero layout shift

### Accessibility
- All interactive elements have visible focus states via Tailwind's `focus:outline-none` + ring utilities
- Cookie banner toggle buttons include `aria-label` attributes
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<blockquote>`
- Colour contrast ratios meet WCAG AA for primary text/background combinations

## Internationalisation (i18n)

Translation strings live in `app/contexts/LanguageContext.tsx`. To add a new language:

1. Add a new key to the `Language` type: `type Language = "en" | "de" | "fr";`
2. Add a new entry to the `translations` object with all required keys
3. Add a new button to the language switcher in `Navbar.tsx`

## Deployment

This project is a fully static Next.js app and can be deployed to:

- **Vercel** (recommended — zero config): `vercel deploy`
- **Netlify**: build command `npm run build`, publish directory `.next`
- **Any static host**: run `next export` (or use `output: 'export'` in `next.config.ts`)

## License

MIT — free to use as a starter template.
