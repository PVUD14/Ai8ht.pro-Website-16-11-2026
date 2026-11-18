# Full-site redesign implementation

Preview: http://localhost:3001. All work is local; no deployment or infrastructure change.

## Architecture and scope

The route audit is in FULL_SITE_AUDIT.md. Next.js App Router has 13 public pages and the shared not-found page; no additional nested/dynamic page routes were found. Robots, sitemap, Open Graph and Twitter image endpoints are metadata/media, and `/api/contact` is a backend endpoint. There is no standalone About or Company page to invent.

The approved navy theme now lives in `src/app/design-system.css`, with shared color, typography, spacing, border, radius, shadow and motion tokens. Existing page content and routes are retained. All pages use HomeNavigation through SiteHeader, the shared footer and consistent controls. Product screenshots keep their original colors. Illustrative previews remain explicitly labeled and use scoped light UI colors rather than pretending to show live data.

`AI8HTMotionBackground` is mounted once in the root layout. Its child, the existing lazy Three.js renderer, survives Next.js client navigation. Route changes select home, service, product or quiet treatments through CSS. Services mirror the wave composition, products adjust scale, and contact/resources reduce visibility so motion stays away from forms and reading content. Each page has live motion in its introduction; scrolling beyond that region pauses rendering rather than running a full-screen GPU effect behind long content. Reduced motion, constrained-device and unavailable-WebGL fallbacks are retained. The pointer listener is global because the decorative layer does not intercept input.

Purpose-specific changes:

- Capabilities: four grouped areas, linked section index and all ten capability descriptions.
- Five services: animated introduction, breadcrumb, service-specific anchored directory, descriptions, outcomes and contact action. Each directory is driven by that service's existing verified content.
- ONE: compact introduction and authentic persona dashboard imagery.
- ScamsDada: product introduction, original dashboard, accessible FAQs and process guidance.
- Scaanit: product and availability information, ingredient workflow and labeled illustration.
- TicketX: product introduction, request workflow, service features, illustrative workspaces and FAQs.
- Whitepaper: a readable chapter layout with buttons and Previous/Next controls, replacing hover-only expanding panels. All chapters are retained.
- Contact: dark form controls, native required/email validation, busy state, and live success/error announcements. Submission logic and API are unchanged.
- 404: shared navigation, motion, readable recovery panel and return-home action.

## Changed source files

Created `src/app/design-system.css` and `src/components/AI8HTMotionBackground.tsx`.

Updated shared components: SiteHeader, HomeNavigation, HomeHero and its CSS module, HeroWaveBackground, PageHero, ServicePage, PortfolioServices and its CSS module, StackedPages, ContactForm, Reveal, Cards, ScaanitPreview and TicketXPreview.

Updated pages/styles: root layout, Capabilities, Contact, Whitepaper, and the ScamsDada/Scaanit/TicketX page CSS modules. Shared styling updates the remaining service, ONE and not-found routes without duplicating their page files. README, route audit, completion report and design QA document the changes. No dependencies were added for this extension.

The contact API, Analytics component and SEO route/metadata helper were checked against the pre-change snapshot and are byte-for-byte unchanged. Earlier uncommitted changes are preserved.

## Validation

See FULL_SITE_REPORT.md for the final route-by-route results and screenshot links. Evidence and automation scripts are under `.phase2-verification/full-site/`. Browser form success/error tests mock the request locally; they do not send real emails. External application URLs are checked as destinations, not as proof of the separate applications' availability.

The existing lint command uses removed `next lint`; the existing test command references an absent `tests/site-data.test.js`. These baseline failures are reported rather than presented as passing tests. TypeScript, build and browser validation are run separately.

## Release and rollback

No production promotion is authorized by this task. Review the local release and evidence first, identify the existing hosting project, then use its staging preview with `npm ci` and `npm run build`. Verify production environment settings privately and perform controlled email delivery and physical-device/browser checks. Only a separately approved release may be promoted to www.ai8ht.pro; no DNS or database changes are needed for this UI work.

For production rollback, restore the prior hosting release and its matching dependency lockfile. For local rollback, the exact pre-extension source is in `.phase2-verification/full-site/before/`; restore changed files from it and remove only the two new implementation files above. Preserve any later changes first. Do not reset to Git HEAD because earlier approved homepage and portfolio changes were uncommitted.
