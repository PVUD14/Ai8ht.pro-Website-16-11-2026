import Link from "next/link";
import { ArrowRight, ScanLine } from "lucide-react";
import { scaanitProduct } from "@/data/scaanit";
import { ScaanitPreview } from "@/components/ScaanitPreview";
import styles from "./ScaanitSpotlight.module.css";

export function ScaanitSpotlight() {
  return (
    <article className={`glass-panel ${styles.card}`} aria-labelledby="scaanit-spotlight-title">
      <div className={styles.copy}>
        <span className={styles.icon}><ScanLine size={32} aria-hidden="true" /></span>
        <h2 id="scaanit-spotlight-title">{scaanitProduct.name}</h2>
        <p className={styles.tagline}>{scaanitProduct.tagline}</p>
        <span className={styles.status}>{scaanitProduct.status}</span>
        <p className={styles.description}>{scaanitProduct.description}</p>
        <div className={styles.actions}>
          <Link className="button primary" href={scaanitProduct.path}>
            Explore Scaanit <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <a className="button ghost" href="https://scaanit.ai8ht.pro">Launch Scaanit</a>
        </div>
      </div>
      <div className={styles.preview}><ScaanitPreview /></div>
    </article>
  );
}
