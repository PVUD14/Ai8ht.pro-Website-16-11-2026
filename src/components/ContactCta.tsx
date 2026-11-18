import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { contact } from "@/data/site";

export function ContactCta({ related = [] }: { related?: { label: string; href: string }[] }) {
  return (
    <section className="section tight">
      <div className="contact-cta glass-panel">
        <div>
          <p className="eyebrow">Discuss your goals</p>
          <h2>Not sure where to start? Talk to us.</h2>
          {related.length > 0 && <p>You may also need: {related.map((link, index) => <span key={link.href}>{index > 0 ? " / " : ""}<Link href={link.href} style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>{link.label}</Link></span>)}.</p>}
        </div>
        <div className="cta-actions">
          <a className="button primary" href={`mailto:${contact.email}`}>
            <Mail size={18} />
            {contact.email}
          </a>
          <Link className="button ghost" href="/contact">
            Talk to us
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
