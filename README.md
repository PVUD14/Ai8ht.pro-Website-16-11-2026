# AI8HT Website

The AI8HT company website and product portfolio, including ONE, ScamsDada, Scaanit, and TicketX. This repository contains the complete website source, styles, images, brochure, dependency lockfile, and configuration needed to run it locally or on a compatible server.

## Run locally

Use Node.js 20.20.2 or a newer compatible Node.js release and npm. The dependency versions are recorded in `package-lock.json`; use `npm ci` for reproducible installation.

```sh
git clone https://github.com/PVUD14/Ai8ht.pro-Website-16-11-2026.git
cd Ai8ht.pro-Website-16-11-2026
npm ci
npm run dev -- --port 3001
```

Open [http://localhost:3001](http://localhost:3001). Running `npm run dev` without a port uses Next.js's default port, 3000, when available.

Environment variables are optional for browsing the website. To configure contact emails or analytics, copy `.env.example` to `.env.local` and supply your own values. Never commit the populated environment file.

## Pages and products

| Page | Local route | Application launch destination |
| --- | --- | --- |
| Home | `/` | — |
| ONE | `/one` | https://one.ai8ht.pro |
| ScamsDada | `/scams-dada` | https://www.scamsdada.ai8ht.pro |
| Scaanit | `/scaanit` | https://scaanit.ai8ht.pro |
| TicketX | `/ticketx` | https://ticketx.ai8ht.pro |
| Capabilities | `/capabilities` | — |
| Cybersecurity Assessment | `/cybersecurity-assessment` | — |
| Security Operations | `/security-operations` | — |
| Compliance & Training | `/compliance-training` | — |
| Enterprise Operations | `/enterprise-operations` | — |
| AI & Analytics | `/ai-analytics` | — |
| Whitepaper | `/whitepaper` | — |
| Contact | `/contact` | — |

The product pages describe the products; the Launch buttons open their separate applications. Those applications and their backends are not part of this repository. The launch destinations are configured links, not a guarantee of external service availability.

The shared site navigation is Home, Services, Products, Whitepaper, and Contact. Services groups the service overview and five service pages. Products links to ONE, ScamsDada, Scaanit, and TicketX, with a short explanation of each tool. The same header and mobile navigation are used on every public page. Explore explains a product; Launch opens its separate website.

Service pages use short headings and practical descriptions. Related links help visitors continue to another service or product. TicketX shows its main features first and keeps additional information in expandable sections. The whitepaper provides a short guide to choosing a service and getting started.

## Current presentation

The homepage balances four equally presented service groups: Enterprise Operations, AI & Analytics, Compliance & Training, and Cybersecurity. Its sequence is introduction, services, products, shared benefits, and contact. The Capabilities page groups all ten original capabilities under these same four areas, preserving their artwork and identifiers. Shared messaging and social metadata describe the whole portfolio; repeating tickers show the four service areas and legal notices.

- Homepage product content and Explore/Launch buttons are on the left, with previews on the right. The layout stacks on smaller screens.
- Product headings use a consistent size. The centered AI8HT Products label has decorative lines on both sides.
- Homepage products share navy cards; ScamsDada retains the supplied dashboard screenshot.
- ONE uses the included dashboard images. Scaanit and TicketX previews are clearly labeled illustrations, not production screenshots.
- All public pages use the approved navy design system and a persistent Three.js network wave, with quieter treatment on contact and whitepaper pages.
- Public product copy focuses on features and benefits rather than implementation details.

The wave loads lazily, pauses when offscreen or hidden, and uses a static capture of the same scene for reduced motion, constrained devices, or unavailable WebGL. One canvas persists through client route changes. See [FULL_SITE_IMPLEMENTATION.md](FULL_SITE_IMPLEMENTATION.md), [FULL_SITE_AUDIT.md](FULL_SITE_AUDIT.md), and [FULL_SITE_REPORT.md](FULL_SITE_REPORT.md) for the current architecture, route inventory, validation and screenshots. [REDESIGN_NOTES.md](REDESIGN_NOTES.md) records the earlier homepage phase. No production deployment has been performed.

## Project structure

```text
src/
  app/                  Pages, shared layout, global styles, metadata, contact API
    api/contact/        Contact form email handler
    one/                ONE product page
    scams-dada/         ScamsDada product page
    scaanit/            Scaanit product page
    ticketx/            TicketX product page
  components/           Navigation, footer, product cards, previews, shared UI
  data/                 Company, navigation, and product content
  lib/seo.ts            Site URL, public routes, and page metadata helpers
public/
  assets/               Logos, page artwork, ONE screenshots, brochure PDF
  images/               ScamsDada dashboard screenshot
.env.example            Empty settings template with safe defaults
next.config.ts          Next.js configuration
package.json            Scripts and dependencies
package-lock.json       Locked dependency versions
tsconfig.json           TypeScript configuration
```

The website uses Next.js App Router, React, TypeScript, CSS/CSS Modules, Framer Motion, Lucide icons, and Nodemailer. Technical information here is for repository maintainers and is not added to the public product pages.

## Environment settings

| Variable | Purpose |
| --- | --- |
| `SMTP_HOST` | Outgoing email server |
| `SMTP_PORT` | SMTP port; `465` enables implicit TLS, otherwise the handler defaults to `587` when unset |
| `SMTP_USER` | SMTP account username |
| `SMTP_PASS` | SMTP account password or app password; keep private |
| `SMTP_FROM_EMAIL` | Sender address accepted by the SMTP provider |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL; defaults to `https://ai8ht.pro` |
| `NEXT_PUBLIC_GA_ID` | Optional Google Analytics ID |
| `NEXT_PUBLIC_CLARITY_ID` | Optional Microsoft Clarity ID |
| `GOOGLE_SITE_VERIFICATION` | Optional Google ownership verification value |
| `BING_SITE_VERIFICATION` | Optional Bing ownership verification value |

The contact handler sends enquiries to `info@ai8ht.pro`. If `SMTP_HOST` is absent, it currently simulates success and logs the submitted email payload; no email is delivered. Configure SMTP before relying on contact-form delivery. A working email delivery setup has not been verified as part of this repository upload.

Analytics load only when their corresponding IDs are supplied. Rebuild after changing public site, analytics, or verification settings.

## Build and check

```sh
npx tsc --noEmit
npm run build
npm run start -- --port 3001
```

Stop any existing server using the chosen port before starting another. The production server requires a successful build first.

The existing `npm run lint` script references `next lint`, which is unavailable in the installed Next.js 16 version. The existing `npm test` script references `tests/site-data.test.js`, which is not present in the supplied project. Neither command should currently be treated as a passing check. Type checking and the production build are the available validation commands; the legacy scripts are preserved.

## Hosting

Use a Node.js host that supports Next.js. Install dependencies with `npm ci`, build with `npm run build`, and run with `npm run start` or the host's Next.js integration. Configure environment variables privately on the host.

The `/api/contact` endpoint requires a server runtime; publishing only static files to GitHub Pages does not provide the contact API. Pushing this repository does not deploy the website or the separate product applications.

## What is included

All current website source files and public assets are included, along with the package lockfile and configuration. The brochure is available at `public/assets/AI8HT_BROCHURE.pdf`.

Installed packages, generated `.next` output, TypeScript caches, local browser profiles, verification captures, logs, archives, and private environment files are intentionally excluded by `.gitignore`. `npm ci`, development, and build commands regenerate the required dependencies and generated files. `.env.example` is included so configuration can be recreated without sharing credentials.
