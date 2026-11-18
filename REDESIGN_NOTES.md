# AI8HT navy homepage redesign

Local preview: http://localhost:3001. Completed locally on 17 November 2026. No production deployment, DNS changes, hosting changes, database changes, or repository push was performed for this redesign.

## Scope and references

The existing Next.js website now has a compact navy hero, actual AI8HT logo, the requested headline and description, left-aligned actions, and an animated perspective network wave. Existing homepage services, four products, benefits and contact sections remain, with coordinated navy styling. Inner pages retain their existing presentation and routes. Product previews and all four Explore/Launch pairs remain intact.

Primary reference: `C:/Users/santh/Downloads/AI8HT_Selected_Layout_Reference (1).png` (502 x 182). Secondary wave reference: `C:/Users/santh/Downloads/AI8HT_Enhanced_Wave_Reference (1).png` (1672 x 940). These guide layout and color; neither screenshot is embedded as the live hero. The reference's numbered badge is omitted and its CNE label is correctly implemented as ONE Platform.

Homepage navigation uses Capabilities `/capabilities`, Solutions (existing services and ScamsDada, Scaanit, TicketX), ONE Platform `/one`, Company (Whitepaper and Contact), and Contact `/contact`. Company uses existing destinations because there is no company page. Hero actions open `/capabilities` and `/contact`.

## Files changed for this redesign

Created:

- `src/components/HomeHero.tsx` and `HomeHero.module.css`: copy, CTAs and responsive hero layout.
- `src/components/HomeNavigation.tsx` and `HomeNavigation.module.css`: desktop dropdowns and mobile navigation.
- `src/components/SiteHeader.tsx`: selects the new homepage header or existing inner-page header.
- `src/components/HeroWaveBackground.tsx` and `HeroWaveBackground.module.css`: lazy scene lifecycle, interaction, masking and fallback.
- `src/lib/heroWaveScene.ts`: Three.js scene and GPU shaders.
- `src/app/navy-home.css`: homepage-only styling for existing sections and footer.
- `public/images/hero-wave-fallback.png`: static capture of the implemented renderer.
- `REDESIGN_NOTES.md` and `design-qa.md`: implementation and visual verification records.

Modified: `src/app/page.tsx`, `src/app/layout.tsx`, `package.json`, `package-lock.json`, and `README.md`.

The working tree already contained the earlier portfolio-balancing changes. Those are preserved and are additional to this redesign file list. Contact API and Analytics component hashes match the pre-redesign snapshot. No private environment values were changed.

## Animation implementation

Direct Three.js keeps this isolated decorative scene small in architectural scope without adding a React renderer. See the [Three.js documentation](https://threejs.org/docs/) for the renderer API. The scene uses a perspective camera, shader-deformed line meshes, luminous points and moving signals. Time uniforms deform geometry on the GPU; React does not rerender per frame. Cyan and blue dominate with restrained violet. Edge fading avoids visible rectangular mesh boundaries and the left-side mask protects text.

Desktop uses a 132 x 46 grid with two layers, a 1.5 pixel-ratio cap, and a 30 FPS target. Compact devices use a 72 x 26 grid, one layer, pixel ratio 1 and a 24 FPS target. There are no shadow maps, texture downloads or postprocessing passes. Desktop pointer movement adds restrained parallax.

Intersection and visibility observers pause rendering. Reduced motion, save-data, reported memory of 2 GB or less, unavailable WebGL2, context loss, and sustained slow frames select the static fallback. Preference changes are handled during the session. Cleanup cancels animation frames, removes listeners/observers, disposes geometries/materials/renderer and releases the WebGL context. The fallback is a screenshot of this actual scene, not generated or copied reference artwork.

## Validation and evidence

Evidence directory: `.phase2-verification/navy-redesign/` (local, ignored by Git).

| Check | Result |
| --- | --- |
| TypeScript `npx tsc --noEmit` | Passed |
| Production `npm run build` | Passed |
| Existing `npm run lint` | Fails before and after: legacy `next lint` unavailable in Next.js 16 |
| Existing `npm test` | Fails before and after: referenced `tests/site-data.test.js` is absent |
| Responsive Chrome checks | Passed at 1920x1080, 1440x900, 768x1024, 390x844, 360x800 |
| Images, overflow, hero CTA bounds, four launch destinations | Passed at all five widths |
| Motion / offscreen pause / reduced-motion transition | Passed |
| Simulated document visibility pause and resume | Passed; visibility was instrumented, not a physical background-tab test |
| Keyboard dropdowns, Escape, mobile menu, navigation | Passed |
| Route cleanup | Leaving home removed the wave and released one WebGL context; returning created one canvas |
| No WebGL / low-memory / context loss | All selected the static fallback |
| Existing routes | 13 pages plus sitemap and robots returned HTTP 200 |
| Browser console errors | None in the verification run |

Existing console warnings remain for deprecated Motion usage, unconfigured Next image quality 100, and smooth-scroll routing metadata. Installing dependencies reported seven npm advisories; no vulnerability remediation or security audit was performed. Contact form delivery was not exercised with a real enquiry, and external product availability is not established by checking launch hrefs.

Screenshots: [desktop](.phase2-verification/navy-redesign/homepage-1440.png), [large desktop](.phase2-verification/navy-redesign/homepage-1920.png), [tablet](.phase2-verification/navy-redesign/homepage-768.png), [mobile](.phase2-verification/navy-redesign/homepage-390.png), [small mobile](.phase2-verification/navy-redesign/homepage-360.png), [products](.phase2-verification/navy-redesign/products-desktop.png), [reduced motion](.phase2-verification/navy-redesign/reduced-motion.png), [no WebGL](.phase2-verification/navy-redesign/no-webgl.png). Machine-readable results are in `verification-report.json` and `performance-report.json` in the same directory.

## Performance observations and limits

Headless local Chrome observed approximately 90 rendered frames in three seconds at the desktop cap, using a diagnostic counter updated every 30 frames. Offscreen frame counts stopped. One memory snapshot reported 12,960,184 bytes of JS heap, 1 document and 1,847 DOM nodes; this is not a long-duration memory-leak proof. The route-unmount test verified explicit context release.

A separate local development-server observation at 1440x900 recorded first contentful paint at 1,264 ms, load at about 1,505 ms, and a summed layout-shift score of 0 during eight seconds. These are single local samples, not production Core Web Vitals, Lighthouse scores, or guarantees on physical mobile devices. Mobile validation used responsive Chrome viewports. Physical low-end GPU, Safari and extended session testing remain release checks.

## Deployment plan for www.ai8ht.pro (requires later approval)

1. Review the concrete local changes and resolve or explicitly accept the legacy check failures and dependency advisories. Confirm the existing hosting project, canonical hostname and current release; do not assume the GitHub repository is connected to production.
2. Prepare a release commit including source, assets and lockfile while excluding `.env`, logs, profiles, snapshots and build output. Preserve the prior production release identifier and environment configuration privately.
3. On the existing Next.js host, use `npm ci` and `npm run build` for a staging preview. Keep existing SMTP and analytics settings; validate their presence without exposing secrets. Smoke-test routes, responsive layouts, wave fallback, navigation and a controlled contact-form delivery.
4. Obtain explicit approval for that reviewed release before promoting it to the existing www.ai8ht.pro deployment. No DNS or database changes are required by this implementation.
5. After promotion, check homepage, products, contact, canonical URLs and analytics, then monitor errors and performance. Use the existing host's release promotion mechanism.

## Rollback

Production: restore the host's previous successful deployment/release, including its matching source and lockfile. Preserve existing environment settings and DNS. Repeat page/contact smoke tests.

Local: `.phase2-verification/navy-redesign/before/` contains the exact pre-redesign files and `before-files.txt` records the snapshot. Restore changed files from that snapshot and remove only the newly created redesign files listed above, then install using the restored lockfile and rebuild. Do not reset to Git HEAD: the pre-redesign portfolio-balancing work was uncommitted and would be lost. Inspect and back up any subsequent edits before any rollback.
