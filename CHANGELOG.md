# Project Changelog & Architecture Documentation

All updates, architectural decisions, model structures, and bug fixes for the **Indian Law Firm Website** are logged below in chronological order.

---

## [2026-08-29] — Bar Council Compliance, GitHub Pages CI/CD & Project Push

### 1. GitHub Hosting & CI/CD Deployment Workflow
- **Static Export Architecture**: Updated `next.config.mjs` to enable static HTML export (`output: "export"`) and unoptimized image export for serverless static hosting.
- **Dynamic Base Path**: Configured automatic `basePath` resolution for GitHub Pages sub-path hosting (`https://Ronit-rout.github.io/Law_Firm`).
- **GitHub Actions Workflow**: Created `.github/workflows/deploy.yml` to automatically build and deploy the Next.js site to GitHub Pages on every push to `main`.
- **Git Push**: Initialized local Git repository, created main branch, and pushed full codebase to `https://github.com/Ronit-rout/Law_Firm.git`.

### 2. Bar Council of India (BCI) Regulatory Compliance (`/disclaimer`)
- **Compliance Standards**: Designed a dedicated compliance route in `app/disclaimer/page.tsx` adhering to **Rule 36, Section IV, Chapter II, Part VI of the Bar Council of India Rules**.
- **Mandatory Legal Clauses Added**:
  1. *Prohibition of Advertisement and Solicitation*: Declares site as strictly informational without commercial promotion.
  2. *Voluntary Access Confirmation*: Asserts user accessed the website on their own initiative.
  3. *No Legal Advice / Opinion*: Distinguishes general commentary from formal legal advice.
  4. *No Advocate-Client Relationship*: Disclaims preliminary relationship creation through web transmission.
  5. *Confidentiality & Privilege Caveat*: Outlines boundaries of non-privileged web inquiries.
  6. *Limitation of Liability*: Statutory liability disclaimers for informational content.
- **Footer Integration**: Integrated regulatory links in `components/Footer.tsx` across all 23 site pages.

### 3. Cache & Webpack Runtime Fix
- **Issue**: Concurrent execution of `npm run build` and `npm run dev` corrupted the `.next` development chunk cache (`Error: Cannot find module './682.js'`).
- **Fix**: Flushed and removed the `.next` build cache, re-verified build pipeline with zero compilation errors.

---

## [2026-08-28] — Editorial Alignment Refinements & Layout Architecture

### 1. Alignment Architecture
- **Framed Centering**: Applied `container-content` (`max-w-content mx-auto px-6`) to center all section wrappers across large screens.
- **Editorial Left-Alignment**:
  - Restored natural left-alignment to multi-line reading content, case descriptions, and metadata.
  - **`Navbar.tsx`**: Single-row desktop header with firm title left and navigation right.
  - **`PracticeCard.tsx`**: Restored docket row layout (docket ID left, title/description center, action arrow right).
  - **`AdvocateCard.tsx`**: Left-aligned advocate designations and practice areas under portraits.
  - **`ArticleCard.tsx`**: Left-aligned publication dates, categories, headlines, and excerpts.
  - **`ContactForm.tsx`**: Left-aligned form fields, labels, checkboxes, and action button.
- **Centered Callouts**: Kept the closing Contact CTA banner centered for visual focal anchoring before the footer.

---

## Core System Architecture & Data Models

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3.4.6 with custom typography and color tokens (`navy`, `parchment`, `brass`, `stone`, `ink`)
- **Animations**: CSS-based scroll reveal with `IntersectionObserver` (`RevealOnScroll.tsx`)

### Data Models (`/data`)
- **`firm.ts`**: Core metadata (firm name, tagline, descriptor, registered office, contact details, BCI disclaimer summary).
- **`practiceAreas.ts`**: Practice domain definitions (docket number, title, summary, intro, detailed commentary, matter types, related advocate/article slugs).
- **`advocates.ts`**: Advocate profiles (slug, name, designation, qualifications, bar enrollment, bar associations, focus areas, detailed biography).
- **`articles.ts`**: Legal commentary & updates (slug, title, date, category, excerpt, full article content).
- **`navigation.ts`**: Primary header and footer route mapping.
