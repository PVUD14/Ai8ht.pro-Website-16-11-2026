import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { OutcomeCard } from "@/components/Cards";
import { ContactCta } from "@/components/ContactCta";
import { Reveal } from "@/components/Reveal";
import { PortfolioServices } from "@/components/PortfolioServices";
import { ScamsDadaSpotlight } from "@/components/ScamsDadaSpotlight";
import { ScaanitSpotlight } from "@/components/ScaanitSpotlight";
import { TicketXSpotlight } from "@/components/TicketXSpotlight";
import { clientValue } from "@/data/site";
import { HomeHero } from "@/components/HomeHero";

export default function HomePage() {
  return (
    <div className="navy-home">
      <HomeHero />

      <section className="section" id="services" aria-labelledby="services-title">
        <div className="section-heading centered">
          <p className="eyebrow">AI8HT services</p>
          <h2 id="services-title">What do you need help with?</h2>
        </div>
        <PortfolioServices />
      </section>

      <section className="section soft-band" id="products" aria-label="AI8HT products">
        <Reveal>
          <div className="section-heading centered">
            <p className="eyebrow products-eyebrow">AI8HT products</p><p>Explore explains the product. Launch opens its separate website.</p>
          </div>
        </Reveal>
        <div className="one-persona one-spotlight glass-panel">
          <Reveal>
            <div className="one-persona-copy">
              <h2>ONE</h2>
              <p className="one-spotlight-tagline">The campus-to-career workspace.</p>
              <p>
                Connect students, institutions, and employers through one workspace for career readiness and campus placements.
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
              <div className="dashboard-image-frame" data-dashboard-frame="true">
              <Image
                src="/assets/one/one-student.png"
                alt="ONE student dashboard preview"
                width={1600}
                height={1000}
              />
              </div>
              <p className="one-shot-note">Product preview</p>
            </div>
          </Reveal>
        </div>
        <ScamsDadaSpotlight />
        <ScaanitSpotlight />
        <TicketXSpotlight />
      </section>


      <section className="section" aria-labelledby="benefits-title">
        <div className="section-heading centered">
          <p className="eyebrow">What this means for you</p>
          <h2 id="benefits-title">Practical support. Everyday progress.</h2>
        </div>
        <div className="outcome-grid">
          {clientValue.map((item, index) => <OutcomeCard key={item.title} item={item} delay={index * 65} />)}
        </div>
      </section>
      <ContactCta />
    </div>
  );
}
