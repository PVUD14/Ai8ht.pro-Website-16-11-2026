import { ContactCta } from "@/components/ContactCta";
import { OutcomeCard, ServiceCard } from "@/components/Cards";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

type ServicePageProps = {
  page: {
    slug: string;
    eyebrow: string;
    title: string;
    summary: string;
    accent: string;
    image?: string;
    services: Array<{
      icon: string;
      title: string;
      description: string;
      outcome?: string;
    }>;
    outcomes: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    note?: string;
  };
};

const relatedServices: Record<string, { label: string; href: string }[]> = {
  "enterprise-operations": [{ label: "TicketX for IT service requests", href: "/ticketx" }, { label: "ONE for campus placements", href: "/one" }],
  "cybersecurity-assessment": [{ label: "Security Monitoring", href: "/security-operations" }, { label: "Compliance & Training", href: "/compliance-training" }],
  "security-operations": [{ label: "Security Checks", href: "/cybersecurity-assessment" }, { label: "ScamsDada", href: "/scams-dada" }],
  "compliance-training": [{ label: "Security Checks", href: "/cybersecurity-assessment" }, { label: "AI8HT Whitepaper", href: "/whitepaper" }],
  "ai-analytics": [{ label: "Business Operations", href: "/enterprise-operations" }, { label: "All capabilities", href: "/capabilities" }]
};
export function ServicePage({ page }: ServicePageProps) {
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        summary={page.summary}
        icon={page.services[0]?.icon ?? "shieldCheck"}
        image={page.image}
      />
      <section id="page-details" className={`section service-section accent-${page.accent}`}>
        <Reveal>
          <div className="section-heading">
            <p className="eyebrow">Service portfolio</p>
            <h2>How we can help</h2>
          </div>
        </Reveal>
        <div className="service-directory"><nav aria-label="Service capabilities">{page.services.map((service,index) => <a key={service.title} href={`#service-detail-${index}`}><span className="side-nav-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span>{service.title}</span></a>)}</nav><div className="service-grid">
          {page.services.map((service, index) => (
            <div id={`service-detail-${index}`} key={service.title} style={{ scrollMarginTop: 100 }}><ServiceCard item={service} delay={index * 70} /></div>
          ))}
        </div>
        </div>{page.note ? <div className="note-panel glass-panel">{page.note}</div> : null}
      </section>
      <section className="section">
        <Reveal>
          <div className="section-heading centered">
            <p className="eyebrow">Benefits for your team</p>
            <h2>What this helps you do</h2>
          </div>
        </Reveal>
        <div className="outcome-grid">
          {page.outcomes.map((outcome, index) => (
            <OutcomeCard key={outcome.title} item={outcome} delay={index * 65} />
          ))}
        </div>
      </section>
      <ContactCta related={relatedServices[page.slug]} />
    </>
  );
}
