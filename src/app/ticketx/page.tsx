import Link from "next/link";
import { ArrowRight, BookOpen, Boxes, ChartColumn, Check, ChevronDown, ClipboardCheck, Clock3, History, Layers, Network, ShieldCheck, Ticket, Workflow } from "lucide-react";
import { TicketXPreview, type TicketXPreviewKind } from "@/components/TicketXPreview";
import { ticketxAudiences, ticketxChallenges, ticketxFaqs, ticketxFeatures, ticketxProduct, ticketxSecurity, ticketxSteps } from "@/data/ticketx";
import { pageMetadata } from "@/lib/seo";
import styles from "./ticketx.module.css";

export const metadata = pageMetadata({
  title: "TicketX — Enterprise ITSM & Ticketing",
  description: "Discover TicketX, an enterprise IT service management platform for centralized ticketing, workflow automation, secure access control, and IT operations visibility.",
  path: ticketxProduct.path
});

const featureIcons = {
  tickets: Ticket, routing: Workflow, dashboard: ChartColumn, access: ShieldCheck,
  approvals: ClipboardCheck, knowledge: BookOpen, assets: Boxes, sla: Clock3,
  tenants: Layers, integrations: Network, history: History
};

const previewScreens: { kind: TicketXPreviewKind; title: string }[] = [
  { kind: "login", title: "Login Interface" },
  { kind: "dashboard", title: "Operational Dashboard" },
  { kind: "create", title: "Ticket Creation" },
  { kind: "queue", title: "Ticket Queue" },
  { kind: "detail", title: "Ticket Details & Activity" },
  { kind: "admin", title: "Administrative Controls" }
];

function SectionHeading({ id, eyebrow, title, description }: { id: string; eyebrow: string; title: string; description?: string }) {
  return (
    <div className={`section-heading ${styles.heading}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description ? <p className={styles.intro}>{description}</p> : null}
    </div>
  );
}

export default function TicketXPage() {
  return (
    <div className={styles.page}>
      <section className={`section ${styles.hero}`} id="ticketx" aria-labelledby="ticketx-title">
        <div className={styles.heroCopy}>
          <p className="eyebrow">{ticketxProduct.category}</p>
          <p className={styles.productName}><Ticket size={23} aria-hidden="true" />TicketX</p>
          <h1 id="ticketx-title">Every Request.<br />One Workflow.<br /><span>Complete Visibility.</span></h1>
          <p className={styles.summary}>Centralize IT service requests, streamline support workflows, automate ticket assignments, and gain greater operational visibility with TicketX.</p>
          <div className={`hero-actions ${styles.actions}`}>
            <a className="button primary" href={ticketxProduct.url}>Launch TicketX <ArrowRight size={18} aria-hidden="true" /></a>
            <Link className="button ghost" href="/contact">Contact Us <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
          <p className={styles.heroNote}>Contact AI8HT to discuss demonstration access and availability.</p>
        </div>
        <div className={styles.heroVisual}><TicketXPreview /></div>
      </section>

      <section className={`section ${styles.section}`} id="about-ticketx" aria-labelledby="about-title">
        <div className={styles.split}>
          <SectionHeading id="about-title" eyebrow="About TicketX" title="Simplify Enterprise IT Service Management" />
          <div className={styles.bodyCopy}>
            <p>TicketX brings internal support requests, operational incidents, ticket workflows, and service delivery into a centralized workspace.</p>
            <p>Employees submit requests while support teams coordinate assignments, communication, and resolution. Administrators gain a shared view of service activity and ownership.</p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.section}`} id="business-challenge" aria-labelledby="challenge-title">
        <div className={`glass-panel ${styles.challengePanel}`}>
          <SectionHeading id="challenge-title" eyebrow="The business challenge" title="Bring Structure to IT Operations" description="Centralized service workflows help teams replace fragmented handoffs with clearer ownership, consistent request handling, and a shared activity record." />
          <ul className={styles.challengeGrid}>{ticketxChallenges.map(challenge => <li key={challenge}><span aria-hidden="true" />{challenge}</li>)}</ul>
        </div>
      </section>

      <section className={`section ${styles.section}`} id="features" aria-labelledby="features-title">
        <SectionHeading id="features-title" eyebrow="Key features" title="A Connected Workspace for Service Delivery" description="Organize incoming work, coordinate teams, and follow each request through its lifecycle." />
        <div className={styles.featureGrid}>
          {ticketxFeatures.map(feature => {
            const Icon = featureIcons[feature.icon];
            return <article className={`glass-panel ${styles.featureCard}`} key={feature.title}>
              <span className={styles.icon}><Icon size={24} aria-hidden="true" /></span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              {"note" in feature ? <span className={styles.featureNote}>{feature.note}</span> : null}
            </article>;
          })}
        </div>
      </section>

      <section className={`section ${styles.section}`} id="how-it-works" aria-labelledby="workflow-title">
        <SectionHeading id="workflow-title" eyebrow="How TicketX works" title="From Request to Resolution" />
        <ol className={styles.steps}>{ticketxSteps.map((step, index) => <li key={step.title}>
          <span className={styles.stepNumber} aria-hidden="true">0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p>
        </li>)}</ol>
      </section>

      <section className={`section ${styles.section}`} id="audience" aria-labelledby="audience-title">
        <SectionHeading id="audience-title" eyebrow="Who is TicketX for?" title="Built for Modern Enterprise Teams" />
        <div className={styles.audienceGrid}>{ticketxAudiences.map(audience => <article className={`pillar-card ${styles.audienceCard}`} key={audience.title}>
          <h3>{audience.title}</h3><p>{audience.description}</p>
        </article>)}</div>
      </section>

      <section className={`section ${styles.section}`} id="security" aria-labelledby="security-title">
        <div className={styles.securityPanel}>
          <SectionHeading id="security-title" eyebrow="Access and accountability" title="The Right Access. Clear Responsibility." description="Help people find the information they need while keeping ownership and progress visible." />
          <div className={styles.securityGrid}>{ticketxSecurity.map(control => <article key={control.title}>
            <Check size={18} aria-hidden="true" /><div><h3>{control.title}</h3><p>{control.description}</p></div>
          </article>)}</div>
        </div>
      </section>

      <section className={`section ${styles.section}`} id="workspace" aria-labelledby="workspace-title">
        <SectionHeading id="workspace-title" eyebrow="Application preview" title="Explore the TicketX Workspace" description="Illustrative previews with example information. Actual application screens may differ." />
        <div className={styles.previewGrid}>{previewScreens.map(preview => <article key={preview.kind}>
          <h3>{preview.title}</h3><TicketXPreview kind={preview.kind} compact />
        </article>)}</div>
      </section>

      <section className={`section ${styles.section}`} id="faq" aria-labelledby="faq-title">
        <SectionHeading id="faq-title" eyebrow="Questions and answers" title="More About TicketX" />
        <div className={styles.faqs}>{ticketxFaqs.map(faq => <details key={faq.question}>
          <summary>{faq.question}<ChevronDown size={20} aria-hidden="true" /></summary>
          <p>{faq.answer}</p>
        </details>)}</div>
      </section>

      <section className={`section ${styles.section}`} id="contact-ticketx" aria-labelledby="contact-title">
        <div className={`contact-cta glass-panel ${styles.contact}`}>
          <div>
            <p className="eyebrow">Connect with AI8HT</p>
            <h2 id="contact-title">Bring Structure to Your IT Service Operations</h2>
            <p>Explore how TicketX can help centralize service requests, organize support workflows, and improve operational visibility.</p>
          </div>
          <div className={styles.contactActions}>
            <Link className="button primary" href="/contact">Contact Us <ArrowRight size={18} aria-hidden="true" /></Link>
            <a className="button ghost" href="#features">Explore Features <ArrowRight size={18} aria-hidden="true" /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
