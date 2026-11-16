import Link from "next/link";
import { ArrowRight, Ticket } from "lucide-react";
import { ticketxProduct } from "@/data/ticketx";
import { TicketXPreview } from "@/components/TicketXPreview";
import styles from "./TicketXSpotlight.module.css";

export function TicketXSpotlight() {
  return (
    <article className={`glass-panel ${styles.card}`} aria-labelledby="ticketx-spotlight-title">
      <div className={styles.copy}>
        <span className={styles.icon}><Ticket size={30} aria-hidden="true" /></span>
        <p className="eyebrow">{ticketxProduct.category}</p>
        <h2 id="ticketx-spotlight-title">{ticketxProduct.name}</h2>
        <p className={styles.tagline}>{ticketxProduct.tagline}</p>
        <p className={styles.description}>{ticketxProduct.description}</p>
        <ul>{ticketxProduct.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
        <div className={styles.actions}>
          <Link className="button primary" href={ticketxProduct.path}>Explore TicketX <ArrowRight size={18} aria-hidden="true" /></Link>
          <a className="button ghost" href={ticketxProduct.url}>Launch TicketX</a>
        </div>
      </div>
      <div className={styles.preview}><TicketXPreview /></div>
    </article>
  );
}
