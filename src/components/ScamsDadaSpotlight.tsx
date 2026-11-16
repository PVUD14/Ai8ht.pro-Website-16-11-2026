import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { scamsDadaProduct } from "@/data/site";
import styles from "./ScamsDadaSpotlight.module.css";

export function ScamsDadaSpotlight() {
  return (
    <article className={`glass-panel ${styles.card}`} aria-labelledby="scamsdada-spotlight-title">
      <div className={styles.copy}>
        <p className={styles.category}>{scamsDadaProduct.category}</p>
        <h2 id="scamsdada-spotlight-title">{scamsDadaProduct.name}</h2>
        <p className={styles.headline}>{scamsDadaProduct.headline}</p>
        <p className={styles.description}>{scamsDadaProduct.description}</p>
        <div className={styles.actions}>
          <Link className={"button " + styles.cta} href={scamsDadaProduct.path}>
            Explore ScamsDada <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <a className={"button ghost " + styles.launch} href="https://www.scamsdada.ai8ht.pro">Launch ScamsDada</a>
        </div>
      </div>
      <div className={"one-shot " + styles.preview}>
        <Link href={scamsDadaProduct.path} aria-label="Explore the ScamsDada product and dashboard">
          <Image
            src={scamsDadaProduct.dashboardImage}
            alt="ScamsDada dashboard preview with Screenshot, Message, Link and Get Help options"
            width={1522}
            height={823}
            sizes="(max-width: 900px) calc(100vw - 80px), 600px"
            unoptimized
          />
        </Link>
        <p className="one-shot-note">Product preview</p>
      </div>
    </article>
  );
}
