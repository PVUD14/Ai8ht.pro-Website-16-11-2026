"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

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
      <motion.article 
        className={`capability-card ${className}`}
        whileHover={{ y: -8, boxShadow: "0 24px 70px rgba(30, 167, 255, 0.15)", borderColor: "rgba(30, 167, 255, 0.4)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >

        <span>{item.number}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </motion.article>
    </Reveal>
  );
}

export function ServiceCard({ item, delay = 0 }: { item: Service; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <motion.article 
        className="service-card"
        whileHover={{ y: -6, boxShadow: "0 24px 70px rgba(30, 167, 255, 0.15)", borderColor: "rgba(30, 167, 255, 0.4)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >

        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.outcome ? <div className="outcome-line">Outcome: {item.outcome}</div> : null}
        </div>
      </motion.article>
    </Reveal>
  );
}

export function OutcomeCard({ item, delay = 0 }: { item: Outcome; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <motion.article 
        className="outcome-card"
        whileHover={{ y: -6, boxShadow: "0 24px 70px rgba(30, 167, 255, 0.15)", borderColor: "rgba(30, 167, 255, 0.4)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >

        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </motion.article>
    </Reveal>
  );
}

const MotionLink = motion.create(Link);

export function ServiceLinkCard({
  page,
  delay = 0
}: {
  page: { href: string; title: string; summary: string; accent: string };
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <MotionLink 
        className={`service-link-card accent-${page.accent}`} 
        href={page.href}
        whileHover={{ y: -8, boxShadow: "0 24px 70px rgba(30, 167, 255, 0.15)", borderColor: "rgba(30, 167, 255, 0.4)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ display: "grid", height: "100%" }}
      >
        <span>{page.title}</span>
        <p>{page.summary}</p>
        <div>
          Explore page <ArrowRight size={16} />
        </div>
      </MotionLink>
    </Reveal>
  );
}
