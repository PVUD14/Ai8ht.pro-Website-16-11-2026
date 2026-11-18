# Full-site route audit

Audit before changes: Next.js App Router, React, TypeScript, global CSS plus CSS Modules. 13 page.tsx routes, one root layout and not-found.tsx. No nested or dynamic page routes, route groups, rewrites or redirects found. Sitemap route list matches filesystem. Contact API is the only API. Robots, sitemap and social image endpoints are machine/media routes, not page layouts. No Company/About page exists; Company links to Whitepaper and Contact.

Shared components: SiteHeader branches between new HomeNavigation and legacy Navigation/WarpSpeedLogo. Footer, tickers and Analytics are in root layout. PageHero/ServicePage serve service pages; product pages have dedicated modules; StackedPages is a hover-only whitepaper reader. HeroWaveBackground currently lives inside HomeHero. Preserve backend and SEO.

| Route | Purpose | Before | Required improvement | Motion | Implementation |
|---|---|---|---|---|---|
| / | Home | Approved | Retain composition; share motion | Shared persistent WebGL; restrained for reading/forms | Implemented; desktop/mobile passed |
| /capabilities | Capability directory | Old | Dark grouped capabilities and interactive section index | Shared persistent WebGL; restrained for reading/forms | Implemented; desktop/mobile passed |
| /cybersecurity-assessment | Assessment services | Old | Service layout and outcome hierarchy | Shared persistent WebGL; restrained for reading/forms | Implemented; desktop/mobile passed |
| /security-operations | Security operations | Old | Service layout and outcome hierarchy | Shared persistent WebGL; restrained for reading/forms | Implemented; desktop/mobile passed |
| /compliance-training | Compliance and training | Old | Service layout and outcome hierarchy | Shared persistent WebGL; restrained for reading/forms | Implemented; desktop/mobile passed |
| /enterprise-operations | Enterprise operations | Old | Service layout and outcome hierarchy | Shared persistent WebGL; restrained for reading/forms | Implemented; desktop/mobile passed |
| /ai-analytics | AI and analytics | Old | Service layout and outcome hierarchy | Shared persistent WebGL; restrained for reading/forms | Implemented; desktop/mobile passed |
| /one | Campus-to-career product | Old | Navy hero and authentic dashboard presentation | Shared persistent WebGL; restrained for reading/forms | Implemented; desktop/mobile passed |
| /scams-dada | Digital safety product | Old | Navy content; preserve dashboard and FAQs | Shared persistent WebGL; restrained for reading/forms | Implemented; desktop/mobile passed |
| /scaanit | Food information product | Old | Navy product flow; preserve illustrative preview | Shared persistent WebGL; restrained for reading/forms | Implemented; desktop/mobile passed |
| /ticketx | ITSM product | Old | Navy workflow, previews and FAQs | Shared persistent WebGL; restrained for reading/forms | Implemented; desktop/mobile passed |
| /whitepaper | Resource reader | Old | Keyboard/touch reader; quiet ambient motion | Shared persistent WebGL; restrained for reading/forms | Implemented; desktop/mobile passed |
| /contact | Enquiry form | Old | Dark form; accessible status states; quiet motion | Shared persistent WebGL; restrained for reading/forms | Implemented; desktop/mobile passed |
| /missing-page (404) | Recovery | Old | Shared navigation and recovery panel | Shared persistent WebGL; restrained for reading/forms | Implemented; desktop/mobile passed |
