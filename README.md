# Indian Law Firm Website — Frontend Demo

A frontend-only, client-presentation-ready Next.js build for an Indian
advocate/law-firm website. Built to the specification in the supplied
project files, with content and features filtered against the supplied
BCI compliance checklist.

## Status: demo / placeholder content

**This is not launch-ready.** Every fact about the firm — its name, people,
practice focus, address, phone, email, and enrolment details — is a
bracketed placeholder (e.g. `[Advocate Name]`). Practice-area names are
generic, industry-standard categories used to demonstrate the layout, not a
factual claim about this firm's real work. Search the codebase for
`[Content required from firm.]` and `DEMO CONTENT NOTICE` to find every spot
that needs real, confirmed, compliance-reviewed content before publication.

## Why this looks the way it does

The two general "law firm website best practice" research documents supplied
alongside the BCI checklist are written for US/UK-style firms and recommend
things India's Bar Council rules do not allow on an advocate's website —
client testimonials, success-rate claims, "Free Consultation" CTAs, case
results, and lawyer-ranking features. None of that is implemented here.
Where those documents were useful (navigation patterns, page architecture,
editorial layout, technical best practice) they were used; where they
conflicted with the BCI checklist, the BCI checklist won. See
`data/firm.ts`, `data/practiceAreas.ts` and `data/advocates.ts` for inline
notes on this.

## Design system

- **Palette:** deep navy (`#10233D`) + warm parchment (`#F6F3EC`) + a
  restrained brass accent (`#A9822C`), used sparingly.
- **Type:** an editorial serif display role + a clean sans body role + a
  monospace utility role for the site's signature "matter index" motif
  (practice areas and sections are referenced like docket/file numbers —
  `MATTER NO. 01`, etc. — echoing how a firm actually references its own
  matters).
- **Motion:** IntersectionObserver-based scroll reveals (`components/RevealOnScroll.tsx`),
  a scroll-aware sticky nav, and hover micro-interactions — all respecting
  `prefers-reduced-motion` (see `app/globals.css`).

### On fonts

This build environment has no network access to Google Fonts, so
`app/globals.css` currently defines the display/body/mono roles as
high-quality **system font stacks** standing in for the intended pairing.
Before production, self-host **Fraunces** (display), **Inter** (body) and
**IBM Plex Mono** (utility) and update the three CSS variables in
`:root` — nothing else in the design system needs to change.

## Pages

| Route | Purpose |
|---|---|
| `/` | Homepage — hero, firm intro, practice areas, approach, people, insights, presence, contact CTA |
| `/about` | Firm history, values, registered office |
| `/practice-areas` | Practice area index |
| `/practice-areas/[slug]` | Practice area detail (6 demo entries, incl. related advocates/insights) |
| `/advocates` | Advocate directory |
| `/advocates/[slug]` | Advocate profile (4 demo entries) |
| `/insights` | Article index |
| `/insights/[slug]` | Article detail (3 demo entries) |
| `/contact` | Contact details + frontend-only form |

All content is data-driven from `/data` — swapping placeholders for real
firm content does not require touching any component or page file.

## Running locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## What's intentionally NOT built (per project scope)

No backend, database, authentication, CRM, real form submission, or
payment processing. The contact form validates and shows success/error
states entirely client-side; nothing is transmitted anywhere. Data
structures in `/data` are shaped so a future backend/CMS can be wired in
without redesigning the frontend.

## Compliance note

This is a design/engineering reference, not legal advice. Before launch,
the firm's own advocate/compliance counsel should review all live copy,
forms, and features against Bar Council of India Rule 36 and the
applicable State Bar Council requirements — the same recommendation made
in the supplied BCI compliance document.
