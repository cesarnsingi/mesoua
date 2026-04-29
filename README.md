MESO — Autonomous Systems for Africa

Sistemas autónomos para a infraestrutura crítica de África.
Autonomous systems for Africa's critical infrastructure.

A bilingual (PT/EN) marketing website for MESO, built in the style of Terra Industries — pure black and white, typographically driven, and modular.

Stack
LayerTechnologyFrameworkNext.js 14 (App Router)LanguageTypeScriptStylingTailwind CSSAnimationsFramer MotionFontsBarlow + Barlow Condensed (Google Fonts)IconsLucide ReactDeploymentVercel (recommended)

Getting Started
bash# 1. Clone the repo
git clone https://github.com/cesarnsingi/mesoua.git
cd mesoua

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
Open http://localhost:3000 in your browser.

Project Structure
meso/
├── app/
│   ├── globals.css        # Global styles, CSS variables, utility classes
│   ├── layout.tsx         # Root layout + metadata
│   └── page.tsx           # Main page — assembles all sections
│
├── components/
│   ├── LangContext.tsx    # PT/EN language context + toggle logic
│   ├── Navbar.tsx         # Fixed top navigation with language switcher
│   ├── Hero.tsx           # Full-screen hero with drone image + ticker
│   ├── Mission.tsx        # Mission statement + key stats
│   ├── Systems.tsx        # Product modules: Scout, Atlas, Duma
│   ├── Platform.tsx       # MESO Core AI OS section
│   ├── Industries.tsx     # 4-sector grid: Oil & Gas, Mining, Agri, Cities
│   ├── Newsroom.tsx       # Featured story + secondary news cards
│   ├── Vision.tsx         # Angola hub + factory expansion
│   ├── Contact.tsx        # Contact form + investor info
│   └── Footer.tsx         # Minimal footer with nav links
│
├── public/                # Static assets
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json

Bilingual Support (PT / EN)
Language switching is handled globally via React Context in LangContext.tsx.
tsx// In any component:
const { lang, t } = useLang();

// t(portuguese, english) returns the correct string based on current lang
<h1>{t("Sistemas Autónomos", "Autonomous Systems")}</h1>
The toggle in the Navbar switches the entire site instantly — no page reload, no routing.

Design System
Follows Terra Industries' visual language:
TokenValueBackground#000000Text primary#ffffffText secondaryrgba(255,255,255,0.4)Dividersrgba(255,255,255,0.06)Section labels11px · 0.18em tracking · uppercaseHeadline fontBarlow Condensed 900Body fontBarlow 400 / 300
Key CSS classes defined in globals.css:
css.label        /* Section tags — 11px condensed uppercase */
.spec-row     /* Key/value spec table rows */
.btn-outline  /* CTA button — white border, inverts on hover */
.img-zoom     /* Image container with hover scale */
.nav-link     /* Nav links — condensed, uppercase, fade on hover */
.font-condensed /* Barlow Condensed font-family */

Sections
SectionDescriptionHeroFull-screen drone image, scrolling news ticker, large condensed headlineMissionMission statement + 4 key metrics (systems, nations, success rate, factory)SystemsAlternating image/spec layout for Scout (VTOL), Atlas (UAV), Duma (UGV)PlatformMESO Core AI OS — split image + 4 feature rowsIndustries2×2 grid — Oil & Gas, Mining, Agriculture, Smart CitiesNewsroomFeatured story + 3 secondary cards with thumbnail imagesVisionFactory full-bleed image + 2-column copy + stats barContactSplit form (left: info + HQ image, right: enquiry form)Footer4-column link grid + status bar

Deployment
Vercel (recommended)
bashnpm install -g vercel
vercel
Or connect the GitHub repo directly at vercel.com/new — zero configuration needed.
Manual build
bashnpm run build   # Produces .next/ output
npm start       # Serves production build on :3000

Scripts
bashnpm run dev     # Development server with hot reload
npm run build   # Production build
npm start       # Serve production build

Environment
No environment variables are required. The site is fully static and client-rendered with no backend dependencies.

License
Private — MESO Technologies, Lda. © 2026. All rights reserved.