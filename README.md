# Hercules Boxing Club CIC | High-Performance Digital Platform & CMS

A production-ready, lightning-fast web platform and content management system built for **Hercules Boxing Club CIC** (Islington, London). This platform supports their transition toward official **England Boxing Affiliation**, ensures rigorous child protection compliance, and acts as a digital portfolio to secure local authority funding.

Engineered with a relentless focus on performance, the site achieves **95–100 Lighthouse scores across all metrics** on both Mobile and Desktop devices, ensuring zero layout shifts, instant load times, and perfect accessibility.

---

## 🥊 Project Overview

Hercules Boxing Club is a registered Community Interest Company (CIC) dedicated to keeping session fees heavily subsidized for disadvantaged youth in Islington. This digital build was engineered from scratch to bridge the gap between their physical gym floor, national sports governance bodies, and everyday administrative management.

Featuring a built-in, passwordless CMS dashboard, club staff can instantly publish news, log fight results, update training timetables, and modify policy documents without touching a single line of code.

---

## 🚀 Performance & Technical Achievements

This site was optimized to pass Google's Core Web Vitals with elite scores, utilizing advanced frontend rendering techniques:

- **Zero Cumulative Layout Shift (CLS):** Dynamic JSON feeds (Timetable, News, Fight Results) are paired with precision-engineered HTML placeholder skeletons. The DOM reserves exact grid spaces before JavaScript executes, eliminating all layout jumping.
- **Interaction-Based Lazy Loading (Facade Pattern):** Heavy third-party scripts (Google Maps, Google Analytics, Elfsight Social Feeds) are blocked from the critical rendering path. They are injected asynchronously _only_ when the user interacts with the page (scroll, touch, mousemove) or after a safe 3.5s idle timeout.
- **Atomic DOM Updates:** JavaScript data fetching utilizes single-pass string accumulation (`innerHTML = accumulatedHtml`) rather than incremental loops, preventing forced browser reflows.
- **Optimized LCP (Largest Contentful Paint):** Hero background images are forcefully compressed to `WebP` and fetched with `fetchpriority="high"`, guaranteeing instant visual loading even on slow 3G/4G mobile connections.
- **Perfect SEO & Accessibility:** 100/100 Lighthouse scores for Accessibility and SEO. Fully semantic markup, ARIA roles, `sr-only` screen-reader classes, dynamic Open Graph social cards, and an automated `sitemap.xml`.

---

## 🛠️ Tech Stack & Architecture

- **Frontend:** HTML5, Tailwind CSS (Production-ready utility classes & responsive layouts)
- **CMS Admin:** Decap CMS (Git Gateway authentication)
- **Data Layer:** Structured JSON datasets powering dynamic client-side rendering
- **Content Formatting:** Markdown parsing (`marked.min.js`) for rich-text stories and policies
- **Interactivity:** Vanilla JavaScript for dynamic feeds, mobile menus, and reactive state management
- **Deployment & Hosting:** Configured for automated static deployment via GitHub Pages / Netlify.

---

## 📁 Repository Structure

```text
hercules-boxing-club/
├── admin/
│   └── config.yml       # Decap CMS collections configuration
├── css/
│   ├── style.css        # Compiled Tailwind stylesheet
│   └── custom.css       # Custom design overrides & animations
├── data/
│   ├── about.json       # Editable About the CIC content
│   ├── contact.json     # Editable contact info & visiting rules
│   ├── fight-results.json # Tournament & bout ledger dataset
│   ├── home.json        # Editable homepage hero & mission content
│   ├── news.json        # News articles & club updates
│   ├── safeguarding.json # Comprehensive child protection policy
│   ├── social.json      # Social media widget configurations
│   └── timetable.json   # Weekly training class schedule
├── js/
│   └── main.js          # Navigation & mobile drawer logic
├── index.html           # Homepage & Core Mission
├── about.html           # CIC Status & Grant Readiness
├── timetable.html       # Dynamic Weekly Class Schedule
├── news.html            # Dynamic News & Updates Feed
├── fight-results.html   # Dynamic Bout & Tournament Ledger
├── social.html          # Lazy-loaded Social Media Hub (IG, TikTok, FB)
├── safeguarding.html    # Comprehensive Child Protection Portal
├── contact.html         # Location Map & Trial Booking
├── governance.html      # Official PDF Documents & Constitution
├── sitemap.xml          # Search Engine indexing roadmap
├── robots.txt           # Crawler directives
└── README.md            # Project Documentation
```
