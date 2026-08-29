# Hercules Boxing Club CIC | Digital Infrastructure & CMS

A production-ready, accessible web platform and content management system built for **Hercules Boxing Club CIC** (Islington, London) to support their transition toward official **England Boxing Affiliation**, ensure rigorous child protection compliance, and secure local authority funding.

---

## 🥊 Project Overview

Hercules Boxing Club is a registered Community Interest Company (CIC) dedicated to keeping session fees heavily subsidized for disadvantaged youth in Islington. This digital build was engineered from scratch to bridge the gap between their physical gym floor, national sports governance bodies, and everyday administrative management.

Featuring a built-in, passwordless CMS dashboard, club staff can instantly publish news, log fight results, update training timetables, and modify policy documents without touching a single line of code.

---

## 🛠️ Tech Stack & Architecture

- **Frontend:** HTML5, Tailwind CSS (Production-ready utility classes & responsive layouts)
- **CMS Admin:** Decap CMS (Git Gateway authentication via Netlify)
- **Data Layer:** Structured JSON datasets powering dynamic client-side rendering
- **Content Formatting:** Markdown parsing (`marked.min.js`) for rich-text stories and policies
- **Interactivity:** Vanilla JavaScript for dynamic feeds, mobile menus, and reactive state management
- **Accessibility & SEO:** Fully semantic markup with ARIA roles, screen-reader utilities (`sr-only`), Open Graph social sharing cards, and Google Analytics (GA4) integration.
- **Hosting:** Configured for automated static deployment via Netlify with Git Gateway.

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
│   └── timetable.json   # Weekly training class schedule
├── js/
│   └── main.js          # Navigation & mobile drawer logic
├── index.html           # Homepage & Core Mission
├── about.html           # CIC Status & Grant Readiness
├── timetable.html       # Dynamic Weekly Class Schedule
├── news.html            # Dynamic News & Updates Feed
├── fight-results.html   # Dynamic Bout & Tournament Ledger
├── safeguarding.html   # Comprehensive Child Protection Portal
├── contact.html         # Location Map & Trial Booking
├── governance.html      # Official PDF Documents & Constitution
└── README.md            # Project Documentation
```
