import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { LegalMarquee } from "@/components/LegalMarquee";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Analytics } from "@/components/Analytics";
import { contact } from "@/data/site";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";
import "./navy-home.css";
import "./design-system.css";
import { AI8HTMotionBackground } from "@/components/AI8HTMotionBackground";

const HOME_TITLE = "AI8HT | Practical Technology for People and Organizations";
const HOME_DESCRIPTION =
  "Explore AI8HT services and digital products for business operations, AI and analytics, compliance, training, cybersecurity, and everyday decisions.";

// Search Console / Bing ownership tags. Optional: set in .env.production and
// rebuild, or verify through a DNS TXT record instead (no rebuild needed).
const verificationOther: Record<string, string> = {};
if (process.env.BING_SITE_VERIFICATION) verificationOther["msvalidate.01"] = process.env.BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s | AI8HT"
  },
  description: HOME_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: "/",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: verificationOther
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/assets/ai8ht-logo-transparent-clean.png`,
      email: contact.email,
      description: HOME_DESCRIPTION
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` }
    }
  ]
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071425"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
        />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <AI8HTMotionBackground /><main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <LegalMarquee />
        <LogoMarquee />
        <Analytics />
      </body>
    </html>
  );
}
