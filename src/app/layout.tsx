import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { LegalMarquee } from "@/components/LegalMarquee";
import { LogoMarquee } from "@/components/LogoMarquee";
import { WarpSpeedLogo } from "@/components/WarpSpeedLogo";
import { Analytics } from "@/components/Analytics";
import { contact } from "@/data/site";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

const HOME_TITLE = "AI8HT | Cybersecurity, Compliance, Operations & AI Automation";
const HOME_DESCRIPTION =
  "AI8HT delivers capability-driven technology across cybersecurity, compliance, enterprise operations, training, automation, and AI-assisted decision support.";

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
  themeColor: "#f8fbff"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
        />
        <div className="spatial-bg" aria-hidden="true" />
        <div style={{ width: "100%", height: "36px", overflow: "hidden", position: "sticky", top: 0, zIndex: 30 }}>
          <WarpSpeedLogo />
        </div>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <LegalMarquee />
        <LogoMarquee />
        <Analytics />
      </body>
    </html>
  );
}
