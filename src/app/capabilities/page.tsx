import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { OutcomeCard, ServiceLinkCard } from "@/components/Cards";
import { AccordionLane } from "@/components/AccordionLane";
import { ContactCta } from "@/components/ContactCta";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { capabilityCards, clientValue, servicePages } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "Capabilities",
  description:
    "All AI8HT capabilities on one page: cybersecurity assessment, security operations, compliance and training, enterprise workflows, and local-first AI.",
  path: "/capabilities"
});

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities at a glance"
        title="A capability-driven portfolio for secure operations and decision support"
        summary="AI8HT delivers practical capabilities across cybersecurity, compliance, enterprise operations, training, automation, and AI-assisted decision support."
        icon="layoutDashboard"
        image="/assets/capabilities.png"
      />

      <section className="section" style={{ maxWidth: "1400px", width: "calc(100% - 32px)", margin: "0 auto" }}>
        <Reveal>
          <div className="section-heading">
            <p className="eyebrow">Portfolio map</p>
            <h2>Ten capability areas grounded in the AI8HT brochure.</h2>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <AccordionLane items={capabilityCards} />
        </Reveal>
      </section>

      <section className="section soft-band">
        <Reveal>
          <div className="section-heading centered">
            <p className="eyebrow">Service pages</p>
            <h2>Explore how each capability area is organized.</h2>
          </div>
        </Reveal>
        <div className="service-link-grid">
          {servicePages.map((page, index) => (
            <ServiceLinkCard key={page.slug} page={page} delay={index * 60} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="outcome-grid">
          {clientValue.map((item, index) => (
            <OutcomeCard key={item.title} item={item} delay={index * 65} />
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
