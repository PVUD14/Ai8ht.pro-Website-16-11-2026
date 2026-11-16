"use client";

import { legalLines } from "@/data/site";
import { usePathname } from "next/navigation";

const defaultItems = [
  ...legalLines.compliance.split(" · "),
  legalLines.copyright,
  legalLines.trademark
];

export function LegalMarquee() {
  const pathname = usePathname();
  const items = pathname === "/ticketx"
    ? ["TicketX · Centralized support", "Clear ownership", "Service visibility", legalLines.copyright, legalLines.trademark]
    : defaultItems;

  return (
    <div className="legal-marquee-wrapper" aria-label="Compliance and legal notices">
      <div className="legal-marquee-track">
        {/* Rendered twice for a seamless loop. */}
        {[...items, ...items].map((text, index) => (
          <span key={index} aria-hidden={index >= items.length}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
