import { ContactCta } from "@/components/ContactCta";
import { OutcomeCard, ServiceCard } from "@/components/Cards";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

type ServicePageProps = {
  page: {
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
      <section className={`section service-section accent-${page.accent}`}>
        <Reveal>
          <div className="section-heading">
            <p className="eyebrow">Service portfolio</p>
            <h2>Capabilities built for practical outcomes</h2>
          </div>
        </Reveal>
        <div className="service-grid">
          {page.services.map((service, index) => (
            <ServiceCard key={service.title} item={service} delay={index * 70} />
          ))}
        </div>
        {page.note ? <div className="note-panel glass-panel">{page.note}</div> : null}
      </section>
      <section className="section">
        <Reveal>
          <div className="section-heading centered">
            <p className="eyebrow">What organizations gain</p>
            <h2>Clearer visibility, stronger execution, and usable controls.</h2>
          </div>
        </Reveal>
        <div className="outcome-grid">
          {page.outcomes.map((outcome, index) => (
            <OutcomeCard key={outcome.title} item={outcome} delay={index * 65} />
          ))}
        </div>
      </section>
      <ContactCta />
    </>
  );
}
