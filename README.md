# Keval Trivedi — Software Engineer & MERN Stack Developer Portfolio

A modern, premium, highly responsive personal portfolio website engineered for **Keval Trivedi**, Software Engineer & MERN Stack Developer with 3+ years of professional experience.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ⚡ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Theming**: `next-themes` (Dark mode default with smooth Light mode toggle)
- **Icons**: `lucide-react` & custom SVG developer icons
- **Animations**: `framer-motion` (scroll animations, layout transitions, interactive badges)
- **Interactive UI**: `canvas-confetti` (for feedback celebration)

---

## 📁 Centralized Content Management (Single Source of Truth)

All portfolio content is centralized in a single typed configuration file:
👉 **[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**

You do **not** need to modify individual component files to update your personal details. In `portfolioData.ts`, you can update:

- **Personal Info**: Name, Role, Bio, Years of Experience, Location, Status.
- **Contact & Socials**: Email address, GitHub URL, LinkedIn profile, Twitter/X handle.
- **Resume**: Path or URL to your downloadable resume (`public/resume.pdf` or external URL).
- **Key Stats**: Years of experience, full-stack projects built, production apps deployed.
- **Skills Matrix**: Add, remove, or modify skills across Languages, Frontend, Backend, Databases, Cloud & DevOps, and Tools.
- **Experience Timeline**: Company name, role, dates, summary, responsibilities, quantifiable metrics, and tech stacks used.
- **Featured Projects**: Project names, tags, problem statements, features, architecture highlights, metrics, GitHub source links, and live demo links.
- **Engineering Principles**: Core architecture principles and philosophies.
- **Education & Certifications**: Degrees, universities, issuing organizations, and credential links.
- **GitHub Highlights**: Repositories showcase and activity metrics.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Check
```bash
npm run build
npm run start
```

### 4. Code Linting & Type Checking
```bash
npm run lint
```

---

## 🌐 Deployment

This portfolio is production-ready for deployment on:
- **Vercel** (recommended for Next.js): Simply import the repository on [Vercel](https://vercel.com) and deploy with standard Next.js presets.
- **Netlify**: Use the Next.js runtime build plugin.
- **AWS / Docker**: Standard container deployment using Node.js 18+.

---

## 📝 License
MIT © Keval Trivedi

