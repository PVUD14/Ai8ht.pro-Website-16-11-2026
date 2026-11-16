"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { navigation } from "@/data/site";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  value: string;
  dx: number;
  dy: number;
};

function NavItem({ item, pathname }: { item: any, pathname: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const isExpanded = isHovered || isFocused;
  const isActive = pathname === item.href || (item.subitems && item.subitems.some((sub: any) => pathname === sub.href));

  return (
    <div 
      style={{ position: "relative" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsFocused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          event.currentTarget.querySelector("a")?.focus();
          setIsHovered(false);
          setIsFocused(false);
        }
      }}
    >
      <Link
        href={item.href}
        className={`nav-link ${isActive ? "active" : ""}`}
        aria-expanded={item.subitems ? isExpanded : undefined}
        style={{ position: "relative", display: "flex", alignItems: "center", gap: "4px" }}
      >
        {isActive && (
          <motion.div
            layoutId="nav-indicator"
            className="nav-indicator"
            initial={false}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "8px",
              background: "rgba(241, 249, 255, 0.94)",
              border: "1px solid rgba(30, 167, 255, 0.24)",
              zIndex: -1
            }}
          />
        )}
        <span style={{ position: "relative", zIndex: 1, color: isActive ? "#005d91" : "inherit" }}>
          {item.label}
        </span>
        {item.subitems && (
          <ChevronDown size={14} style={{ position: "relative", zIndex: 1, color: isActive ? "#005d91" : "inherit" }} />
        )}
      </Link>

      <AnimatePresence>
        {isExpanded && item.subitems && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.1 } }}
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              paddingTop: "12px",
              zIndex: 50
            }}
          >
            <div 
              className="glass-panel" 
              style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: "4px",
                padding: "8px",
                minWidth: "160px",
                background: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(30, 167, 255, 0.2)",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)"
              }}
            >
              {item.subitems.map((sub: any) => (
                <Link 
                  key={sub.href} 
                  href={sub.href}
                  className="nav-link"
                  onClick={() => {
                    setIsHovered(false);
                    setIsFocused(false);
                  }}
                  style={{ 
                    padding: "10px 16px",
                    borderRadius: "6px",
                    fontWeight: pathname === sub.href ? 600 : 500,
                    color: pathname === sub.href ? "#007b8e" : "var(--foreground)",
                    background: pathname === sub.href ? "rgba(30, 167, 255, 0.1)" : "transparent"
                  }}
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const lastMouse = useRef({ x: 0, y: 0 });
  
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 25, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 25, mass: 0.5 });

  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdCounter = useRef(0);

  useEffect(() => {
    if (!isHovered) return;
    const interval = setInterval(() => {
      const id = particleIdCounter.current++;
      const val = Math.random() > 0.5 ? "1" : "0";
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 60 + 20; // 20 to 80px distance
      const dx = Math.cos(angle) * speed;
      const dy = Math.sin(angle) * speed;

      setParticles(prev => {
        const next = [...prev, { id, x: lastMouse.current.x, y: lastMouse.current.y, value: val, dx, dy }];
        return next.slice(-30); // max 30 particles
      });

      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== id));
      }, 800);
    }, 80); // Spawn every 80ms

    return () => clearInterval(interval);
  }, [isHovered]);

  function handlePointerMove(e: React.PointerEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    lastMouse.current = { x, y };
  }

  return (
    <>
    <header 
      className="site-header"
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      style={{ position: "sticky" }}
    >
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", borderRadius: "16px", pointerEvents: "none", zIndex: -1 }}>
        {/* Watercolor Dissolve Blob */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 400,
          height: 250,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 204, 255, 0.8) 0%, rgba(30, 167, 255, 0.4) 40%, transparent 80%)",
          filter: "blur(20px) contrast(1.4)",
          mixBlendMode: "overlay",
          x: useTransform(smoothX, (v) => v - 200),
          y: useTransform(smoothY, (v) => v - 125),
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.6,
          pointerEvents: "none",
          zIndex: -1,
        }}
        transition={{ opacity: { duration: 0.5 }, scale: { duration: 0.5 } }}
      />

      {/* Exploding Particles */}
      <AnimatePresence>
        {particles.map(p => (
          <motion.span
            key={p.id}
            initial={{ x: p.x, y: p.y, opacity: 1, scale: 0.5 }}
            animate={{ x: p.x + p.dx, y: p.y + p.dy, opacity: 0, scale: 1.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              position: "absolute",
              color: "#007b8e",
              fontWeight: 800,
              fontSize: "1.2rem",
              pointerEvents: "none",
              zIndex: 0,
              textShadow: "0 0 8px rgba(0, 123, 142, 0.5)"
            }}
          >
            {p.value}
          </motion.span>
        ))}
      </AnimatePresence>
      </div>

      <Link href="/" className="brand" aria-label="AI8HT home" onClick={() => setOpen(false)}>
        {/* The wordmark is split AI / 8 / HT so the 8 can spin in place. */}
        <span className="brand-wordmark" role="img" aria-label="AI8HT">
          <img src="/assets/ai8ht-left.png" alt="" draggable={false} />
          <img className="brand-eight" src="/assets/ai8ht-eight.png" alt="" draggable={false} />
          <img src="/assets/ai8ht-right.png" alt="" draggable={false} />
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <NavItem key={item.href} item={item} pathname={pathname} />
        ))}

      </nav>

      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div className={`mobile-panel ${open ? "open" : ""}`}>
        {navigation
          .flatMap((item: any) => [item, ...(item.subitems ?? [])])
          .filter((item: any, index: number, all: any[]) => all.findIndex((other) => other.href === item.href) === index)
          .map((item: any) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>

    {/* Floating Download Tab */}
    <a 
      href="/assets/AI8HT_BROCHURE.pdf" 
      download="AI8HT_Brochure.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="glass-panel"
      style={{
        position: "fixed",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        padding: "24px 12px",
        background: "linear-gradient(135deg, rgba(235, 245, 255, 0.9), rgba(30, 167, 255, 0.85))",
        color: "#005d91",
        fontWeight: 700,
        letterSpacing: "1px",
        border: "1px solid rgba(30, 167, 255, 0.4)",
        borderRight: "none",
        borderTopLeftRadius: "12px",
        borderBottomLeftRadius: "12px",
        textTransform: "uppercase",
        zIndex: 100,
        backdropFilter: "blur(20px)",
        cursor: "pointer",
        textDecoration: "none",
        boxShadow: "-4px 0 20px rgba(0,0,0,0.1)",
        transformOrigin: "right center"
      }}
    >
      Download Brochure
    </a>
    </>
  );
}
