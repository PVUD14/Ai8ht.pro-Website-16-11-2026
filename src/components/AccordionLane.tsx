"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Icon } from "@/components/Icon";

type Capability = {
  number: string;
  icon: string;
  title: string;
  description: string;
};

export function AccordionLane({ items }: { items: Capability[] }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div 
      className="accordion-lane" 
      onMouseLeave={() => setHoveredIdx(null)}
    >
      {items.map((item, index) => {
        const isActive = hoveredIdx === index;
        
        return (
            <motion.div
            key={item.number}
            className={`glass-panel accordion-card ${isActive ? "active" : ""}`}
            onMouseEnter={() => setHoveredIdx(index)}
            layout
            initial={false}
            animate={{
              flex: isActive ? 6 : 1,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            style={{
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              padding: 0 // removed padding here, added to content container
            }}
          >
            {/* Background Image */}
            <motion.div 
              style={{ position: "absolute", inset: 0, zIndex: 0 }}
              initial={false}
              animate={{ filter: isActive ? "blur(0px)" : "blur(18px)" }}
              transition={{ duration: 0.4 }}
            >
              <Image 
                src={`/assets/cards/${parseInt(item.number, 10)}.png`} 
                alt={item.title} 
                fill 
                style={{ objectFit: "cover" }} 
              />
              {/* Slight overlay just to make sure text pops if the image is busy, but keeps it bright */}
              <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.15)" }} />
            </motion.div>

            {/* Content Container (placed above image) */}
            <div style={{ position: "relative", zIndex: 1, padding: "24px", display: "flex", flexDirection: "column", height: "100%" }}>
              {/* Header / Collapsed view */}
              <AnimatePresence>
                {!isActive && (
                  <motion.div 
                    className="accordion-short-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {item.title.split(" ").slice(0, 2).join(" ")}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Expanded content */}
              <AnimatePresence>
              {isActive && (
                <motion.div
                  className="accordion-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10, transition: { duration: 0.1 } }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                >
                  <h3 className="accordion-title">{item.title}</h3>
                  <p className="accordion-desc">{item.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
