import Link from "next/link";
import { ArrowRight } from "lucide-react";
type PageHeroProps = { eyebrow: string; title: string; summary: string; icon?: string; image?: string; actionLabel?: string; actionHref?: string };
export function PageHero({ eyebrow, title, summary, actionLabel = "See how we can help", actionHref = "#page-details" }: PageHeroProps) {
  return <section className="page-hero section"><div className="page-hero-copy">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{title}</span></nav>
    <p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{summary}</p>
    <a className="page-jump" href={actionHref}>{actionLabel} <ArrowRight size={17} aria-hidden="true" /></a>
  </div></section>;
}
