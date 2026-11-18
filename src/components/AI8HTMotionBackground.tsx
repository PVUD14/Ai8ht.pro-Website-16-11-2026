"use client";
import { usePathname } from "next/navigation";
import { HeroWaveBackground } from "./HeroWaveBackground";
// Root-layout lifetime preserves one GPU context through client navigation.
export function AI8HTMotionBackground() {
  const path = usePathname();
  const variant = path === "/" ? "home" : ["/contact", "/whitepaper"].includes(path) ? "quiet" : ["/one", "/ticketx", "/scaanit", "/scams-dada"].includes(path) ? "product" : "service";
  return <div className="brand-motion" data-motion-variant={variant}><HeroWaveBackground /></div>;
}
