import Image from "next/image";
import Link from "next/link";
import { Mail, Globe2 } from "lucide-react";
import { contact, navigation } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Image
            src="/assets/ai8ht-logo-transparent.png"
            alt="AI8HT"
            width={190}
            height={67}
          />
          <p>
            Practical services and digital products for people and organizations across operations, AI and analytics, compliance, training, and cybersecurity.
          </p>
        </div>
        <div className="footer-links">
          {navigation
            .slice(0)
            .flatMap((item) => [item, ...("subitems" in item ? (item as { subitems: { label: string; href: string }[] }).subitems : [])])
            .filter((item, index, all) => all.findIndex((other) => other.href === item.href) === index)
            .map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="footer-contact">
        <a href={`https://${contact.website}`} target="_blank" rel="noreferrer">
          <Globe2 size={18} />
          {contact.website}
        </a>
        <a href={`mailto:${contact.email}`}>
          <Mail size={18} />
          {contact.email}
        </a>
      </div>
    </footer>
  );
}
