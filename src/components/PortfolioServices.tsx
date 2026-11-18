import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/Icon";
import { capabilityCards, serviceGroups } from "@/data/site";
import styles from "./PortfolioServices.module.css";

export function PortfolioServices({ detailed = false }: { detailed?: boolean }) {
  const Heading = detailed ? "h2" : "h3";
  return (
    <div className={styles.grid}>
      {serviceGroups.map(group => (
        <article className={`glass-panel ${styles.card}`} id={`area-${group.id}`} key={group.id} aria-labelledby={`service-${group.id}`}>
          <div className={styles.icon}><Icon name={group.icon} size={28} /></div>
          <Heading id={`service-${group.id}`}>{group.title}</Heading>
          <p className={styles.summary}>{group.description}</p>
          {detailed ? (
            <ul className={styles.capabilities}>
              {group.capabilityNumbers.map(number => {
                const capability = capabilityCards.find(item => item.number === number)!;
                return (
                  <li key={number} data-capability={number}>
                    <Image src={`/assets/cards/${Number(number)}.png`} alt="" width={96} height={96} sizes="72px" />
                    <div><h3>{capability.title}</h3><p>{capability.description}</p></div>
                  </li>
                );
              })}
            </ul>
          ) : null}
          <div className={styles.links}>
            {group.links.map(link => <Link href={link.href} key={link.href}>{link.label}<ArrowRight size={16} aria-hidden="true" /></Link>)}
          </div>
        </article>
      ))}
    </div>); }
