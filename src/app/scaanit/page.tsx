import Link from "next/link";
import { ArrowRight, Barcode, ChartColumn, ScanLine } from "lucide-react";
import { ScaanitPreview } from "@/components/ScaanitPreview";
import { scaanitProduct, scaanitSteps } from "@/data/scaanit";
import { pageMetadata } from "@/lib/seo";
import styles from "./scaanit.module.css";

export const metadata = pageMetadata({
  title: "Scaanit — Food Ingredient Scanner",
  description: "Discover Scaanit, an India-first food ingredient scanner for barcode lookup, ingredient label recognition, and transparent packaged food information.",
  path: scaanitProduct.path
});

const features = [
  { icon: Barcode, title: "Barcode Lookup", description: "Scan or enter a barcode to find available packaged food records." },
  { icon: ScanLine, title: "Read Ingredient Labels", description: "Capture an English ingredient label, then review and correct the recognized text." },
  { icon: ChartColumn, title: "Ingredients & Nutrition", description: "Explore available ingredients, nutrition values, and their sources." }
];

export default function ScaanitPage() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.hero}`} id="scaanit" aria-labelledby="scaanit-title">
        <div className={styles.heroCopy}>
          <p className="eyebrow">Scaanit · Food Ingredient Scanner</p>
          <span className={styles.status}>{scaanitProduct.status}</span>
          <h1 id="scaanit-title">Scan Your Food.<br /><span>Know What&apos;s Inside.</span></h1>
          <p>{scaanitProduct.description}</p>
          <div className={`hero-actions ${styles.actions}`}>
            <a className="button primary" href="https://scaanit.ai8ht.pro">Launch Scaanit <ArrowRight size={18} aria-hidden="true" /></a>
            <Link className="button ghost" href="/contact">Contact Us <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
          <p className={styles.heroNote}>For Android and iOS. Public availability has not yet been announced.</p>
        </div>
        <div className={styles.heroVisual}><ScaanitPreview /></div>
      </section>

      <section className={`section ${styles.section}`} id="features" aria-labelledby="features-title">
        <div className={`section-heading ${styles.heading}`}>
          <p className="eyebrow">Features in development</p>
          <h2 id="features-title">Food Information, Made Clearer.</h2>
        </div>
        <div className={styles.featureGrid}>
          {features.map(({ icon: Icon, title, description }) => (
            <article className={`glass-panel ${styles.featureCard}`} key={title}>
              <span className={styles.icon}><Icon size={25} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <p className={styles.note}>Product coverage depends on available sources. Scaanit provides general information, not medical advice.</p>
      </section>

      <section className={`section ${styles.section}`} id="how-it-works" aria-labelledby="how-title">
        <div className={`section-heading ${styles.heading}`}>
          <p className="eyebrow">How it works</p>
          <h2 id="how-title">Scan. Review. Explore.</h2>
        </div>
        <ol className={styles.steps}>
          {scaanitSteps.map(({ title, description }, index) => (
            <li key={title}>
              <span className={styles.stepNumber} aria-hidden="true">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={`section ${styles.section}`} id="contact-scaanit" aria-labelledby="contact-title">
        <div className={`contact-cta glass-panel ${styles.contact}`}>
          <div>
            <p className="eyebrow">Connect with AI8HT</p>
            <h2 id="contact-title">Interested in Scaanit?</h2>
            <p>Contact us to learn more about the app and upcoming availability.</p>
          </div>
          <Link className="button primary" href="/contact">Contact AI8HT <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
    </div>
  );
}
