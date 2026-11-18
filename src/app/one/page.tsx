import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ContactCta } from "@/components/ContactCta";
import { Reveal } from "@/components/Reveal";
import { oneProduct, trustItems } from "@/data/site";

export const metadata = pageMetadata({
  title: "ONE Platform",
  description:
    "ONE by AI8HT is the campus-to-career workspace where students, institutions and employers finally work in one place.",
  path: "/one"
});

export default function OnePage() {
  return (
    <>
      <section className="home-hero section">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow">Product</p>
            <h1>
              {oneProduct.name} — {oneProduct.tagline}
            </h1>
            <p>{oneProduct.summary}</p>
            <div className="hero-actions">
              <a
                className="button primary"
                href={oneProduct.url}
                target="_blank"
                rel="noreferrer"
              >
                Launch ONE
                <ExternalLink size={18} />
              </a>
              <Link className="button ghost" href="/contact">
                Talk to us
                <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {oneProduct.personas.map((persona) => (
        <section
          key={persona.key}
          className="section one-persona-section"
        >
          <div className="one-persona one-persona-detail">
            <Reveal>
              <div className="one-persona-copy">
                <p className="eyebrow">{persona.title}</p>
                <ul className="one-points">
                  {persona.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="one-shot">
                <div className="dashboard-image-frame" data-dashboard-frame="true">
                <Image
                  src={persona.image}
                  alt={`ONE ${persona.title} dashboard preview`}
                  width={1600}
                  height={1000}
                />
                </div>
                <p className="one-shot-note">Product preview</p>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section one-trust-section">
        <Reveal>
          <div className="section-heading centered">
            <p className="eyebrow">Trust &amp; compliance</p>
            <h2>Enterprise-grade security posture, verified.</h2>
          </div>
        </Reveal>
        <div className="pillar-grid one-trust-grid">
          {trustItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <article className="pillar-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCta related={[{ label: "Enterprise Operations", href: "/enterprise-operations" }]} />
    </>
  );
}
