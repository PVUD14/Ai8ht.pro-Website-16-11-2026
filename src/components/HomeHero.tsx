import Link from "next/link";
import { ArrowRight } from "lucide-react";

import styles from "./HomeHero.module.css";

export function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-title">
      
      <div className={styles.content}>
        <p className={styles.eyebrow}>Security · Operations · AI</p>
        <h1 id="home-title">Smarter solutions.<br /><span>Stronger businesses.</span></h1>
        <p className={styles.description}>Simplify daily work, understand your data, train your team and protect your business. Explore AI8HT services and digital tools.</p>
        <div className={styles.actions}>
          <Link className={styles.primary} href="/capabilities">Find a service<ArrowRight size={21} aria-hidden="true" /></Link>
          <Link className={styles.secondary} href="/contact">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
