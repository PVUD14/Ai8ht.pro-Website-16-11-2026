import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { CapabilityCard, OutcomeCard, ServiceLinkCard } from "@/components/Cards";
import { ContactCta } from "@/components/ContactCta";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ScamsDadaSpotlight } from "@/components/ScamsDadaSpotlight";
import { ScaanitSpotlight } from "@/components/ScaanitSpotlight";
import { TicketXSpotlight } from "@/components/TicketXSpotlight";
import {
  capabilityCards,
  clientValue,
  contact,
  heroPillars,
  servicePages,
  trustItems
} from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="home-hero section">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow">Capability-driven technology portfolio</p>
            <h1>Cybersecurity, Compliance, Operations & AI-Enabled Automation</h1>
            <p>
              Practical, secure, and automation-first digital capabilities for
              organizations that need better visibility, stronger controls,
              faster response, and privacy-conscious decision support.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/capabilities">
                Explore capabilities
                <ArrowRight size={18} />
              </Link>
              <a className="button ghost" href={`mailto:${contact.email}`}>
                <Mail size={18} />
                {contact.email}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="marquee-container" style={{ marginTop: 0 }}>
             <div className="marquee-content">
               <span>Local-first <strong>secure AI and operational visibility</strong></span>
             </div>
          </div>
        </Reveal>
      </section>

      <section className="section tight">
        <div className="pillar-grid">
          {heroPillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 70}>
              <article className="pillar-card">
                <h2>{pillar.title}</h2>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <div className="section-heading">
            <p className="eyebrow">Capabilities at a glance</p>
            <h2>Practical capabilities across security, readiness, operations, and decision support.</h2>
          </div>
        </Reveal>
        <div className="capability-grid compact">
          {capabilityCards.slice(0, 6).map((item, index) => {
            let bentoClass = "";
            if (index === 0) bentoClass = "wide tall";
            else if (index === 3 || index === 4 || index === 5) bentoClass = "wide";
            
            return (
              <CapabilityCard key={item.number} item={item} delay={index * 45} className={bentoClass} />
            );
          })}
        </div>
      </section>

      <section className="section soft-band" id="products" aria-label="AI8HT products">
        <Reveal>
          <div className="section-heading centered">
            <p className="eyebrow products-eyebrow">AI8HT products</p>
          </div>
        </Reveal>
        <div className="one-persona one-spotlight">
          <Reveal>
            <div className="one-persona-copy">
              <h2>ONE</h2>
              <p className="one-spotlight-tagline">The campus-to-career workspace.</p>
              <p>
                Students build real evidence and see exactly where they stand.
                Institutions run the entire placement season from one dashboard.
                Employers meet candidates with proof, not just resumes. One
                platform, on web and Android.
              </p>
              <div className="hero-actions">
                <Link className="button primary" href="/one">
                  Explore ONE
                  <ArrowRight size={18} />
                </Link>
                <a
                  className="button ghost"
                  href="https://one.ai8ht.pro"
                  target="_blank"
                  rel="noreferrer"
                >
                  Launch ONE
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="one-shot">
              <Image
                src="/assets/one/one-student.png"
                alt="ONE student dashboard preview"
                width={1600}
                height={1000}
              />
              <p className="one-shot-note">Product preview</p>
            </div>
          </Reveal>
        </div>
        <ScamsDadaSpotlight />
        <ScaanitSpotlight />
        <TicketXSpotlight />
      </section>

      <section className="section">
        <Reveal>
          <div className="section-heading centered">
            <p className="eyebrow">Core service portfolio</p>
            <h2>Focused pages for each part of the portfolio.</h2>
          </div>
        </Reveal>
        <div className="service-link-grid">
          {servicePages.map((page, index) => (
            <ServiceLinkCard key={page.slug} page={page} delay={index * 60} />
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <div className="section-heading centered">
            <p className="eyebrow">What this means for clients</p>
            <h2>Better visibility, stronger controls, faster response, and practical workflows.</h2>
          </div>
        </Reveal>
        <div className="outcome-grid">
          {clientValue.map((item, index) => (
            <OutcomeCard key={item.title} item={item} delay={index * 65} />
          ))}
        </div>
      </section>

      <section className="section soft-band">
        <Reveal>
          <div className="section-heading centered">
            <p className="eyebrow">Trust &amp; compliance</p>
            <h2>Security you can verify, not just trust.</h2>
          </div>
        </Reveal>
        <div className="pillar-grid">
          {trustItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <article className="pillar-card">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
