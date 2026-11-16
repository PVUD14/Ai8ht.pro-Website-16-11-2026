"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type PageData = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export function StackedPages({ pages }: { pages: PageData[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="stacked-pages-container">
      <div className="stacked-pages-flex">
        {pages.map((page, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={page.id}
              layout
              className={`stacked-page-flex glass-panel ${isActive ? "active" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              style={{
                zIndex: isActive ? 10 : pages.length - index,
                cursor: isActive ? "default" : "pointer"
              }}
              animate={{
                flex: isActive ? 10 : 1,
                backgroundColor: isActive ? "rgba(255, 255, 255, 0.95)" : "rgba(240, 248, 255, 0.85)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <AnimatePresence mode="wait">
                {!isActive ? (
                  <motion.div 
                    key="collapsed-title"
                    className="stacked-page-short-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {page.title}
                  </motion.div>
                ) : (
                  <motion.div 
                    key="expanded-content"
                    className="stacked-page-expanded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="stacked-page-header-flex">
                      <h3>{page.title}</h3>
                      <div className="page-indicator">
                        {index + 1} / {pages.length}
                      </div>
                    </div>
                    
                    <div className="content-inner-flex">
                      {page.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
