import { pageMetadata } from "@/lib/seo";
import { OutcomeCard } from "@/components/Cards";
import { PortfolioServices } from "@/components/PortfolioServices";
import { ContactCta } from "@/components/ContactCta";
import { PageHero } from "@/components/PageHero";
import { clientValue } from "@/data/site";

export const metadata = pageMetadata({
  title: "Our Services",
  description: "Explore AI8HT services across enterprise operations, AI and analytics, compliance and training, and cybersecurity.",
  path: "/capabilities"
});

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero actionLabel="Choose a service below" eyebrow="Our services" title="What would you like help with?"
        summary="Choose the area that matches your needs. Each service page explains what we do and how it can help your team."
        icon="layoutDashboard" image="/assets/capabilities.png" />
      <section id="page-details" className="section" aria-label="All ten capabilities by service area">
        <PortfolioServices detailed />
      </section>
      <section className="section">
        <div className="outcome-grid">
          {clientValue.map((item, index) => <OutcomeCard key={item.title} item={item} delay={index * 65} />)}
        </div>
      </section>
      <ContactCta />
    </>
  );
}
