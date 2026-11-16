"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
};

export function Reveal({ children, className = "", delay = 0, direction = "up" }: RevealProps) {
  const getVariants = () => {
    switch (direction) {
      case "up": return { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
      case "down": return { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } };
      case "left": return { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } };
      case "right": return { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } };
      case "none": return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
      default: return { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
    }
  };

  return (
    <motion.div
      className={className}
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
