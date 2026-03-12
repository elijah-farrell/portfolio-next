# Elijah Farrell | Portfolio

![Project Status](https://img.shields.io/badge/System-ONLINE-success?style=for-the-badge&logo=vercel)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)

> **Software Architect and Developer** specializing in high-performance web applications, scalable systems, and immersive digital experiences.

This portfolio is a **minimal frontend** showcase—no backend, no API routes, no server actions. It uses "Cyberpunk" aesthetics, GSAP animations, and client-side interactivity. Contact is mailto/social links only.

**Credit:** Based on [t7sen/portfolio](https://github.com/t7sen/portfolio). Original design and code by t7sen. This project is used under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).

## 🚀 Key Features

- **Immersive UI:** Magnetic-style interactions, GSAP entrance animations, and sound effects (SFX) via a global `SoundProvider`.
- **Theme toggle:** Dark/light mode (footer on mobile, navbar on desktop).
- **Easter Eggs:** Konami code support and optional terminal/snake-style hooks.
- **Observability (optional):** Sentry and Google Analytics when env vars are set; site works without them.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Animation:** [GSAP](https://greensock.com/gsap/)
- **Testing:** [Playwright](https://playwright.dev/) (E2E), Vitest (unit)

## 📜 License & Using This in Your Own Repo

This project is licensed under **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**.

- **You may:** Copy, fork, or make your own repo and adapt the code for **non-commercial** use.
- **You must:** Give appropriate credit (e.g. “Based on [t7sen/portfolio](https://github.com/t7sen/portfolio)”), indicate if you changed anything, and include a link to the license: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).
- **You may not:** Use the work for commercial purposes without separate permission.

No backend is required; the app is a minimal frontend and runs with optional env vars for analytics only.

## ⚡ Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Optional – Environment variables**  
   Create a `.env.local` only if you use Sentry or Google Analytics:

   ```env
   NEXT_PUBLIC_APP_URL=https://your-domain.com
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-xxxx
   # Sentry (optional)
   SENTRY_AUTH_TOKEN=...
   NEXT_PUBLIC_SENTRY_DSN=...
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   To test on another device (e.g. phone) on the same network:

   ```bash
   npm run dev:host
   ```

   Then open `http://<your-pc-ip>:3000` on the other device.

## 🧪 Testing

Playwright (E2E) and Axe-core for accessibility:

```bash
npm run test:e2e
npm run test:e2e:ui
```
