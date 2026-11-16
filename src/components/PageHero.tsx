"use client";

import Image from "next/image";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { motion, Variants } from "framer-motion";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  summary: string;
  icon?: string;
  image?: string;
};

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

export function PageHero({ eyebrow, title, summary, icon = "shieldCheck", image = "/assets/ai8ht-logo-transparent.png" }: PageHeroProps) {
  return (
    <section className="page-hero section">
      <motion.div 
        className="page-hero-copy"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="eyebrow">{eyebrow}</motion.p>
        <motion.h1 variants={itemVariants}>{title}</motion.h1>
        <motion.p variants={itemVariants}>{summary}</motion.p>
      </motion.div>
      <Reveal delay={140} direction="left">
        <motion.div 
          className="hero-emblem"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: '100%', height: '100%', minHeight: '400px', display: 'block', padding: 0 }}
        >
          <Image
            src={image}
            alt="Hero Image"
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'contain', mixBlendMode: 'multiply' }}
            priority
          />
        </motion.div>
      </Reveal>
    </section>
  );
}
