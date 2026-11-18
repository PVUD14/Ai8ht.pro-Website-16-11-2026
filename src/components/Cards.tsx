"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

type Capability = {
  number: string;
  icon: string;
  title: string;
  description: string;
};

type Service = {
  icon: string;
  title: string;
  description: string;
  outcome?: string;
};

type Outcome = {
  icon: string;
  title: string;
  description: string;
};

export function CapabilityCard({ item, delay = 0, className = "" }: { item: Capability; delay?: number; className?: string }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className={`capability-card ${className}`}>
        <span>{item.number}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </article>
    </Reveal>
  );
}

export function ServiceCard({ item, delay = 0 }: { item: Service; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <article className="service-card">
        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.outcome ? <div className="outcome-line">Outcome: {item.outcome}</div> : null}
        </div>
      </article>
    </Reveal>
  );
}

export function OutcomeCard({ item, delay = 0 }: { item: Outcome; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <article className="outcome-card">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </article>
    </Reveal>
  );
}

export function ServiceLinkCard({
  page,
  delay = 0
}: {
  page: { href: string; title: string; summary: string; accent: string };
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        className={`service-link-card accent-${page.accent}`}
        href={page.href}
        style={{ display: "grid", height: "100%" }}
      >
        <span>{page.title}</span>
        <p>{page.summary}</p>
        <div>
          Explore page <ArrowRight size={16} />
        </div>
      </Link>
    </Reveal>
  );
}
