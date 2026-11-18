import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { StackedPages, PageData } from "@/components/StackedPages";

export const metadata = pageMetadata({title: "Whitepaper", description: "A plain-language guide to AI8HT services for daily operations, security, training and better use of information.", path: "/whitepaper"});
const pages: PageData[] = [
  { id: "cover", title: "Start here", content: <><h3>A guide to simpler, safer work</h3><p>This guide explains how AI8HT can help your organization manage work, protect information and make better use of data. You do not need specialist technical knowledge to read it.</p><p>Choose a chapter on the left, or use Next chapter below.</p></> },
  { id: "executive-summary", title: "What AI8HT does", content: <><p>AI8HT provides technology services and digital products for everyday needs. That includes organizing work, preparing for audits, training employees, checking security and building useful reports.</p><p>Start with the problem you want to solve. Your current tools, team and priorities help determine a suitable approach.</p></> },
  { id: "operational-challenge", title: "Common problems", content: <><p>Work becomes harder when information is spread across emails, spreadsheets and different tools.</p><ul><li>Requests get lost or have no clear owner.</li><li>Teams spend time collecting the same information.</li><li>Important documents are difficult to find before an audit.</li><li>Security alerts are hard to understand or prioritize.</li><li>Reports do not clearly show what needs attention.</li></ul></> },
  { id: "capability-approach", title: "How to get started", content: <><h4>Describe the problem</h4><p>Explain what happens today, who is affected and what you want to improve.</p><h4>Choose a clear first step</h4><p>Focus on a useful change, such as tracking support requests, organizing audit records or reviewing security weaknesses.</p><h4>Review what works</h4><p>Check whether the change makes work easier and decide what to improve next.</p></> },
  { id: "core-capabilities", title: "Choose a service", content: <><p>Use these links to read a short explanation of each service.</p><ul><li><Link href="/enterprise-operations">Business Operations</Link>: organize tasks, requests and approvals.</li><li><Link href="/ai-analytics">AI &amp; Reports</Link>: understand information and reduce repeated work.</li><li><Link href="/compliance-training">Compliance &amp; Training</Link>: prepare for audits and support employee learning.</li><li><Link href="/cybersecurity-assessment">Security Checks</Link>: find weaknesses and plan what to fix.</li><li><Link href="/security-operations">Security Monitoring</Link>: follow suspicious activity and coordinate a response.</li></ul></> },
  { id: "conclusion", title: "Your next step", content: <><p>You do not need to choose a specific technology before contacting us. Tell us what your team needs help with and what you already use.</p><p><Link href="/capabilities">Browse all services</Link> or <Link href="/contact">send us a message</Link>.</p><p>For a specific product, open the Products menu. Explore explains the product; Launch takes you to its separate website.</p></> }
];
export default function WhitepaperPage() {
  return <><PageHero eyebrow="Whitepaper" title="A practical guide to simpler, safer work" summary="Understand what AI8HT offers, the problems it can help with and how to choose a starting point." actionLabel="Read the guide" />
    <section className="section" id="page-details"><StackedPages pages={pages} /></section>
    <ContactCta related={[{label:"All services",href:"/capabilities"}]} />
  </>;
}
