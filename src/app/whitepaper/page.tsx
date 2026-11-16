import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { Reveal } from "@/components/Reveal";
import { StackedPages, PageData } from "@/components/StackedPages";

export const metadata: Metadata = pageMetadata({
  title: "Whitepaper",
  description: "AI8HT's whitepaper on building operations that are secure, visible, and ready for automation.",
  path: "/whitepaper"
});

const pages: PageData[] = [
  {
    id: "cover",
    title: "WHITE PAPERS",
    content: (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: "40px 0" }}>
        <h2 style={{ fontSize: "3rem", marginBottom: "16px", color: "#11314a", background: "linear-gradient(135deg, #071827 30%, #1e82ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          AI8HT Whitepaper
        </h2>
        <h3 style={{ fontSize: "1.5rem", color: "#007b8e", marginBottom: "24px" }}>
          Building Secure, Visible, and Automation-Ready Operations
        </h3>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", lineHeight: "1.8" }}>
          Practical cybersecurity, compliance, enterprise workflow, and local-first AI capabilities for modern organizations. Select a section to begin exploring our capability-driven approach.
        </p>
      </div>
    )
  },
  {
    id: "executive-summary",
    title: "Executive Summary",
    content: (
      <>
        <p>Organizations are under pressure to operate faster, stay compliant, reduce risk, and make better decisions with limited visibility across systems, people, and processes. Security teams need clearer risk signals. Leaders need practical dashboards and reporting. Operations teams need workflows that reduce manual effort and improve accountability. Compliance teams need evidence, controls, and readiness without last-minute disruption.</p>
        <p>AI8HT provides a capability-driven technology portfolio focused on cybersecurity, compliance, enterprise operations, training, automation, and AI-assisted decision support. The portfolio is designed for organizations that need better visibility, stronger controls, faster response, and privacy-conscious digital capabilities.</p>
        <p>This whitepaper outlines AI8HT’s approach to practical, secure, and automation-first transformation across five core areas:</p>
        <ol>
          <li>Cybersecurity assessment and authorized testing</li>
          <li>Threat intelligence, security operations, and monitoring</li>
          <li>Compliance, audit readiness, and security training</li>
          <li>Enterprise operations, workflow automation, and IT service management</li>
          <li>Local-first AI, analytics, and executive decision support</li>
        </ol>
        <p>The goal is not technology for its own sake. The goal is operational usefulness: systems that help teams identify risk earlier, respond faster, improve accountability, and make decisions with confidence.</p>
      </>
    )
  },
  {
    id: "operational-challenge",
    title: "The Operational Challenge",
    content: (
      <>
        <p>Many organizations struggle with fragmented visibility. Security information may exist across different tools, logs, reports, spreadsheets, and manual processes. Compliance evidence may be scattered across teams. IT service requests may depend on inconsistent workflows. Leadership dashboards may not reflect real-time operational health or risk posture.</p>
        <p>These gaps create practical problems:</p>
        <ul>
          <li>Security weaknesses are discovered late.</li>
          <li>Teams spend too much time collecting evidence manually.</li>
          <li>Incident response depends on inconsistent processes.</li>
          <li>Service requests lack clear ownership and audit trails.</li>
          <li>Risk reporting is too technical for leaders or too vague for teams.</li>
          <li>AI adoption raises privacy, data control, and deployment concerns.</li>
        </ul>
        <p>Organizations need capabilities that connect risk, operations, compliance, and decision support into clear workflows. They need systems that are secure by design, measurable in impact, and practical for daily use.</p>
      </>
    )
  },
  {
    id: "capability-approach",
    title: "Capability-Driven Approach",
    content: (
      <>
        <p>AI8HT designs solutions around real business and operational outcomes. The focus is on building capabilities that help organizations see what matters, act faster, and maintain stronger control over their environments.</p>
        
        <h4>Better Visibility</h4>
        <p>Organizations need to see what matters across systems, users, workloads, processes, and risk areas. AI8HT supports this through monitoring, dashboards, reporting, risk scoring, and operational visibility.</p>
        
        <h4>Stronger Controls</h4>
        <p>Security and compliance depend on controls that are defined, measurable, and consistently enforced. AI8HT helps organizations assess gaps, validate security posture, map controls, and build audit-ready processes.</p>
        
        <h4>Faster Response</h4>
        <p>Security and operational events require speed and structure. AI8HT supports faster response through automated triage, repeatable workflows, incident support, ticketing, escalation rules, and SLA tracking.</p>
        
        <h4>Practical Workflows</h4>
        <p>Automation should reduce manual work and improve accountability. AI8HT helps organizations streamline enterprise workflows across HR, finance, projects, CRM, operations, and IT service management.</p>
      </>
    )
  },
  {
    id: "core-capabilities",
    title: "Core Capability Areas",
    content: (
      <>
        <h4>1. Cybersecurity Assessment & Authorized Testing</h4>
        <p>Cybersecurity assessment is the foundation for understanding real-world exposure. AI8HT provides practical assessment capabilities designed to help organizations identify exploitable weaknesses, reduce exposure, and improve defensive readiness.</p>
        <ul>
          <li>Vulnerability assessment and penetration testing</li>
          <li>Security testing automation</li>
          <li>Wireless and network security validation</li>
          <li>Security reporting for remediation and risk visibility</li>
        </ul>

        <h4>2. Threat Intelligence, Security Operations & Monitoring</h4>
        <p>Security teams need context, not just alerts. AI8HT supports organizations with capabilities that strengthen visibility, enrich detection context, and support faster operational response.</p>
        <ul>
          <li>Threat intelligence enrichment and reporting</li>
          <li>AI-assisted security operations</li>
          <li>Local SOC-style monitoring</li>
          <li>Alert handling and incident support workflows</li>
        </ul>

        <h4>3. Compliance, Audit Readiness & Security Training</h4>
        <p>Compliance is difficult when controls, policies, evidence, and responsibilities are scattered. AI8HT provides capabilities that help organizations strengthen governance, close control gaps, improve readiness, and build security-minded teams.</p>

        <h4>4. Enterprise Operations & IT Service Management</h4>
        <p>Operational efficiency depends on structured workflows, clear ownership, and reliable visibility. AI8HT supports organizations with operational capabilities that streamline work, improve accountability, and build structured digital workflows.</p>

        <h4>5. Local-First AI & Analytics</h4>
        <p>AI adoption must be practical, secure, and aligned with privacy requirements. AI8HT supports local-first AI decision support with privacy-conscious deployment for organizations that require control over data, models, and infrastructure.</p>
      </>
    )
  },
  {
    id: "conclusion",
    title: "Conclusion",
    content: (
      <>
        <p>Organizations need secure, practical, and automation-first capabilities that improve visibility, strengthen controls, accelerate response, and support better decisions. AI8HT provides a focused portfolio across cybersecurity, compliance, operations, training, automation, and local-first AI-enabled decision support.</p>
        <p>By combining assessment, monitoring, workflow automation, compliance readiness, analytics, and AI-assisted systems, AI8HT helps organizations build stronger security posture and more reliable operational execution.</p>
        
        <div style={{ padding: "24px", background: "rgba(30, 167, 255, 0.05)", borderRadius: "12px", border: "1px solid rgba(30, 167, 255, 0.2)", marginTop: "24px" }}>
          <h4 style={{ marginBottom: "12px", marginTop: "0", color: "#007b8e" }}>Prepared by AI8HT</h4>
          <p style={{ margin: "4px 0" }}><strong>Website:</strong> <a href="https://www.ai8ht.pro" style={{ color: "#005d91" }}>www.ai8ht.pro</a></p>
          <p style={{ margin: "4px 0" }}><strong>Email:</strong> <a href="mailto:info@ai8ht.pro" style={{ color: "#005d91" }}>info@ai8ht.pro</a></p>
        </div>
      </>
    )
  }
];

export default function WhitepaperPage() {
  return (
    <>
      <PageHero
        eyebrow="Whitepaper"
        title="Building Secure, Visible, and Automation-Ready Operations"
        summary="Practical cybersecurity, compliance, enterprise workflow, and local-first AI capabilities for modern organizations."
        icon="fileText"
        image="/assets/whitepaper.png"
      />

      <section className="section">
        <Reveal>
          <StackedPages pages={pages} />
        </Reveal>
      </section>

      <ContactCta />
    </>
  );
}
