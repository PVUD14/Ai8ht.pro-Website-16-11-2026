import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { Mail, Globe2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { contact, servicePages } from "@/data/site";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact AI8HT at info@ai8ht.pro about cybersecurity, compliance, operations, automation, or local-first AI for your organization.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact AI8HT"
        title="Discuss secure, practical capabilities for your organization"
        summary="Use the brochure contact details below to discuss cybersecurity, compliance, operations, automation, local-first AI, analytics, and executive decision support."
        icon="mail"
        image="/assets/contact.png"
      />

      <section className="section contact-page-grid">
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <Reveal>
            <div className="contact-card glass-panel">
              <h2>Contact details</h2>
              <a href={`https://${contact.website}`} target="_blank" rel="noreferrer">
                <Globe2 size={22} />
                {contact.website}
              </a>
              <a href={`mailto:${contact.email}`}>
                <Mail size={22} />
                {contact.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="contact-card glass-panel">
              <h2>Portfolio areas</h2>
              <ul>
                {servicePages.map((page) => (
                  <li key={page.slug}>{page.title}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={240} className="h-full">
          <div className="contact-card glass-panel" style={{ height: "100%" }}>
            <h2>Send us a message</h2>
            <p style={{ marginBottom: "24px" }}>
              Fill out the form below and our team will get back to you shortly.
            </p>
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
