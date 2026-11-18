"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import styles from "./HomeNavigation.module.css";

const services = [
  ["All services", "/capabilities"],
  ["Business Operations", "/enterprise-operations"],
  ["AI & Reports", "/ai-analytics"],
  ["Compliance & Training", "/compliance-training"],
  ["Security Checks", "/cybersecurity-assessment"],
  ["Security Monitoring", "/security-operations"]
];
const products = [
  ["ONE - Campus placements", "/one"],
  ["ScamsDada - Check suspicious content", "/scams-dada"],
  ["Scaanit - Food information", "/scaanit"],
  ["TicketX - IT support requests", "/ticketx"]
];
export function HomeNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const close = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) {
        setOpen(false);
        header.current?.querySelectorAll("details").forEach(item => { item.open = false; });
      }
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, []);
  const dropdown = (label: string, links: string[][]) => (
    <details className={styles.dropdown} name="primary-menu">
      <summary data-active={links.some(([, href]) => href === pathname)}>{label}<ChevronDown size={13} aria-hidden="true" /></summary>
      <div className={styles.submenu}>
        {links.map(([name, href]) => <Link href={href} aria-current={pathname === href ? "page" : undefined} key={href} onClick={() => setOpen(false)}>{name}</Link>)}
      </div>
    </details>
  );
  return (
    <header className={styles.header} ref={header} onClick={event => { if ((event.target as HTMLElement).closest("a")) { setOpen(false); header.current?.querySelectorAll("details").forEach(item => { item.open = false; }); } }} onKeyDown={event => {
      if (event.key === "Escape") {
        const detail = (event.target as HTMLElement).closest("details");
        if (detail) { detail.open = false; detail.querySelector("summary")?.focus(); }
        else { setOpen(false); header.current?.querySelector<HTMLButtonElement>('button[aria-controls]')?.focus(); }
      }
    }}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="AI8HT home">
          <Image src="/assets/ai8ht-logo-transparent-clean.png" alt="AI8HT" width={180} height={80} priority />
        </Link>
        <button className={styles.toggle} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="home-navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav id="home-navigation" className={`${styles.nav} ${open ? styles.open : ""}`} aria-label="Primary navigation">
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>Home</Link>
          {dropdown("Services", services)}
          {dropdown("Tools", products)}
          <Link href="/whitepaper" aria-current={pathname === "/whitepaper" ? "page" : undefined}>Whitepaper</Link>
          <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
