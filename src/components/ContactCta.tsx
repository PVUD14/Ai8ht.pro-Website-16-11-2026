import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { contact } from "@/data/site";

export function ContactCta() {
  return (
    <section className="section tight">
      <div className="contact-cta glass-panel">
        <div>
          <p className="eyebrow">Discuss your goals</p>
          <h2>Let&apos;s discuss how AI8HT can support your security and operational goals.</h2>
        </div>
        <div className="cta-actions">
          <a className="button primary" href={`mailto:${contact.email}`}>
            <Mail size={18} />
            {contact.email}
          </a>
          <Link className="button ghost" href="/contact">
            Contact page
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
