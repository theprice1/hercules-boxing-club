# Hercules Boxing Club CIC: Digital Handover & Operations Guide

Welcome to the official technical and operational handover guide for the Hercules Boxing Club website repository. This document outlines how your digital ecosystem is structured, how your team can manage content using the built-in Content Management System (CMS), and how the site supports your transition to an **England Boxing Affiliated Club** and local authority funding applications.

---

## 📂 1. Repository & File Structure

The website is built as a lightning-fast, highly optimized static site hosted via **GitHub Pages**, ensuring **zero ongoing hosting costs**, top-tier Google PageSpeed scores (95+), and maximum reliability. All dynamic content is managed through structured JSON data files fed directly into a secure passwordless admin panel.

```text
hercules-boxing-club/
├── admin/
│   └── config.yml         # Decap CMS backend configuration
├── css/
│   ├── style.css          # Tailwind compiled stylesheet
│   └── custom.css         # Custom design overlays & animations
├── data/
│   ├── about.json         # Editable About the CIC content
│   ├── contact.json       # Editable emails, phone, address & visiting rules
│   ├── fight-results.json # Tournament & bout ledger dataset
│   ├── home.json          # Editable homepage hero text & mission highlights
│   ├── news.json          # News articles & club updates feed
│   ├── safeguarding.json  # Comprehensive child protection policy sections
│   ├── social.json        # Social media hub widget codes & intro
│   └── timetable.json     # Weekly training class schedule
├── js/
│   └── main.js            # Mobile navigation drawer interaction
├── index.html             # Homepage & Core Mission
├── about.html             # CIC Status & Grant Readiness
├── timetable.html         # Dynamic Weekly Class Schedule
├── news.html              # Dynamic News & Updates Feed
├── fight-results.html     # Dynamic Bout & Tournament Ledger
├── social.html            # Lazy-loaded Social Media Hub (IG, TikTok, FB)
├── safeguarding.html      # Comprehensive Child Protection Portal
├── contact.html           # Location Map & Trial Booking
├── governance.html        # Official PDF Documents & Constitution
├── sitemap.xml            # Search Engine indexing roadmap
├── robots.txt             # Crawler directives
├── HANDOVER.md            # This operational guide
└── README.md              # Technical documentation

✍️ 2. How to Update Content (No Coding Required)You do not need to touch code or use GitHub directly to update the website. A custom, passwordless Content Management System (CMS) dashboard has been integrated directly into your site.How to Log In & Update:Open your web browser and go to your admin URL (e.g., https://theprice1.github.io/hercules-boxing-club/admin/).Click "Log in with Netlify Identity" (or GitHub Git Gateway).Once logged in, you will see a clean dashboard with your managed collections.CollectionWhat You Can ManageHomeEdit your hero banner headline, affiliation tags, mission statement, and core highlights.NewsPublish, edit, and delete news stories with optional featured images and Markdown text.Fight ResultsLog amateur tournament outcomes (Points, KO/TKO, Losses, Draws, Exhibitions) with automatic badge color-coding.TimetableAdd, update, or remove weekly training classes, instructors, days, times, and descriptions.SafeguardingUpdate your Club Welfare Officer contact details and edit all 5 comprehensive child protection policy sections.ContactUpdate the public gym email, phone numbers, administrative contacts, address, and first-time visitor instructions.About the CICEdit your community mission statements, expansion goals, and grant/funding overviews.Social HubUpdate the introductory text and paste in your latest Elfsight widget codes for Instagram, TikTok, and Facebook feeds.When you click Publish, the changes are instantly saved to your repository and deployed live to the website within 1–2 minutes!📱 3. Social Media IntegrationYour official club social media handles are active across the website footers:Instagram: @herculesboxingclubTikTok: @herculesboxingclubFacebook: Hercules Boxing Club PageThe Social Hub (social.html):The dedicated Social Media Hub aggregates your live feeds. To guarantee ultra-fast page load speeds, these feeds use Interaction-Based Lazy Loading. This means the heavy widget feeds will only visually load after the user scrolls or touches the screen (or after 3 seconds). You can swap out the embed codes for these feeds at any time via the CMS dashboard under the "Social Hub" collection.🛡️ 4. Grant, Funding & England Boxing ComplianceTo assist with your upcoming grant applications and official England Boxing affiliation, the site has been pre-configured with industry-standard compliance assets:CIC Transparency: Clear positioning of your Community Interest Company status on the homepage and About page.Youth Subsidies: Explicit messaging highlighting affordable, subsidized session fees for Islington's youth.Comprehensive Safeguarding: A robust, multi-section child protection portal covering safe recruitment, vetting, codes of conduct, digital safety, and reporting procedures.Governance Portal: Dedicated space for official PDF documents, constitutions, and health & safety papers.Elite Web Performance: The site is optimized to score 95–100 on Google PageSpeed tests, ensuring the site is accessible to all users regardless of device or internet connection quality.🤝 5. Support & OwnershipThis repository and digital platform are 100% owned by Hercules Boxing Club CIC. You have complete control over your code, data, hosting, and domain.If your team ever needs assistance scaling the platform up, adding member portals, or expanding your digital footprint, your development framework is fully documented, beautifully structured, and ready for any future technical partner!
```
