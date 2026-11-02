# Kuldeep Sharma · Personal Portfolio Website

Where Creativity Meets Growth | Creative Strategy Backed by Performance.

A modern, high-performance personal portfolio website built with **[Astro](https://astro.build/)** and **[Tailwind CSS v4](https://tailwindcss.com/)**, highlighting AI automation, search intelligence (AEO · GEO · SEO), and scalable growth systems.

---

## 🚀 Key Highlights & Capabilities

- **Modern Astro Architecture**: Pure static site generation (SSG) with lightning-fast load times, zero unnecessary JavaScript, and component-driven structure.
- **Tailwind CSS v4**: Built with the official `@tailwindcss/vite` plugin and modern CSS theme tokens.
- **Search Intelligence Framework**: Dedicated breakdowns for:
  - **Traditional SEO**: Algorithmic crawlers, Core Web Vitals, and semantic clusters.
  - **Answer Engine Optimization (AEO)**: Direct Q&A structuring and citation indexing for Perplexity, ChatGPT Search, and Copilot.
  - **Generative Engine Optimization (GEO)**: Brand consensus engineering and entity graph alignment across Gemini and Claude.
- **Autonomous Growth & AI Pipeline**: 4-stage pipeline visualizer (Multi-Channel Ingestion → Autonomous AI Triage → CRM Sync → Automated Conversion).
- **Interactive UI Polish**:
  - Central 3D photo tilt and mobile gyroscope orientation support.
  - Interactive constellation particle canvas with mouse/touch attraction and repulsion.
  - Animated SVG circular progress gauges and metric counters on scroll.
  - Custom fluid cursor (dot & spring ring) for fine pointer devices.
  - Mobile drawer menu with quick WhatsApp, LinkedIn, email, and Instagram links.
  - Instant 1-click clipboard helpers for email, Discord handle, and certification IDs.

---

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- **Language**: TypeScript & Vanilla JavaScript
- **Fonts**: Abril Fatface, Inter, Plus Jakarta Sans, Space Grotesk
- **Form Handling**: Formspree API integration

---

## 📂 Project Structure

```text
├── .agents/                    # Agent skills & documentation
├── public/                     # Static assets (images, icons, resume.pdf)
│   ├── All info/
│   ├── images/
│   ├── favicon.ico
│   ├── linkedin_photo.jpg
│   ├── logo.png
│   └── resume.pdf
├── src/
│   ├── components/             # Reusable Astro components
│   │   ├── About.astro         # About Kuldeep, experience, photo deck
│   │   ├── AeoGeo.astro        # 3-Tier Search Framework (SEO · AEO · GEO)
│   │   ├── Automation.astro    # 4-stage lead-to-call AI workflow pipeline
│   │   ├── Contact.astro       # Contact methods & Formspree inquiry form
│   │   ├── Credentials.astro   # Google AI Essentials, JECRC degree, credentials
│   │   ├── Experience.astro    # Career journey timeline (Orielix, Growleads, etc.)
│   │   ├── Faq.astro           # Frequently asked questions accordion
│   │   ├── Footer.astro        # Signature footer & social links
│   │   ├── Hero.astro          # Hero section, 3D photo, particle canvas, typewriter
│   │   ├── Marquee.astro       # Integrated tech ecosystem ticker
│   │   ├── MobileMenu.astro    # Responsive mobile drawer navigation
│   │   ├── Navbar.astro        # Header navbar & call-to-action
│   │   ├── Services.astro      # High-impact growth services
│   │   ├── Skills.astro        # Technology matrix & animated circular gauges
│   │   └── Stats.astro         # Verified metric counters
│   ├── layouts/
│   │   └── Layout.astro        # HTML shell, SEO metadata, global scripts
│   ├── pages/
│   │   └── index.astro         # Homepage combining all sections
│   └── styles/
│       └── global.css          # Tailwind 4 directives and theme variables
├── astro.config.mjs            # Astro configuration
├── package.json
└── tsconfig.json
```

---

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.17.0 or higher recommended)
- [npm](https://www.npmjs.com/) (or pnpm / yarn)

### 1. Clone the repository

```bash
git clone https://github.com/kuldeep088-hub/kuldeepsharma.git
cd kuldeepsharma
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start local development server

```bash
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321) in your browser.

### 4. Build for production

```bash
npm run build
```

The production output is generated in the `dist/` directory, ready to be hosted on Cloudflare Pages, Vercel, Netlify, or GitHub Pages.

### 5. Preview production build

```bash
npm run preview
```

### 6. One-command git sync

```bash
npm run push
```

---

## 📜 License

This project is licensed under the ISC License.
