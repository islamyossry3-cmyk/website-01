# GoldinKollar — Modern Website (React + TypeScript + Tailwind)

This repository contains a modern, interactive website rebuild using:

- **Next.js (React)**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (scroll + hover animations)
- **Lenis** (smooth scrolling)

Design direction: **futuristic, professional, “human + data”** with interactive elements (particles, mouse glow, matrix explorer, animated hero).

---

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run the dev server

```bash
npm run dev
```

Open: `http://localhost:3000`

### 3) Build for production

```bash
npm run build
npm run start
```

---

## Content Editing

Most website content is centralized in these files:

- `src/content/products.ts` → all product pages (slug, copy, features, pricing tiers, FAQs)
- `src/content/domains.ts` → domains (IC / EX / EE / Culture / EB)
- `src/content/deliveryTypes.ts` → Measure / Strategize / Implement / Transfer / Document
- `src/content/matrix.ts` → the 5×5 matrix mapping (cell → recommended offerings)
- `src/lib/site.ts` → company info (tagline, regions, email, phone, etc.)

---

## Brand + Styling

- Brand colors are defined in `tailwind.config.ts`:
  - `brand.green` → `#0c554a`
  - `brand.pink` → `#f67782`
- Global styles and helper classes are in `src/app/globals.css`.

---

## Key Interactive Elements

- **Hero effects**: particles + mouse glow (`src/components/effects/*`)
- **Scroll reveal**: `src/components/effects/reveal.tsx`
- **Magnetic hover**: `src/components/effects/magnetic.tsx`
- **Matrix Navigator** (interactive 5×5): `src/components/sections/matrix-navigator.tsx`

---

## Deployment Notes

This is a standard Next.js site:
- Works well on Vercel, Netlify (Next adapter), or any Node hosting.
- `public/brand/logo.svg` is used as the primary logo.

---

## Replace Placeholder Legal Pages

Before production, replace these placeholders with your official legal text:

- `/privacy`
- `/terms`

---

## License

Private / internal use (update as needed).
