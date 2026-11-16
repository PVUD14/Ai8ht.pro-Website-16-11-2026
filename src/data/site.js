export const contact = {
  website: "www.ai8ht.pro",
  email: "info@ai8ht.pro"
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Whitepaper", href: "/whitepaper" },
  {
    label: "Cybersecurity Assessment",
    href: "/cybersecurity-assessment",
    subitems: [
      { label: "Overview", href: "/cybersecurity-assessment" },
      { label: "ScamsDada", href: "/scams-dada" }
    ]
  },
  { label: "Security Operations", href: "/security-operations" },
  { label: "Compliance & Training", href: "/compliance-training" },
  {
    label: "Enterprise Operations",
    href: "/enterprise-operations",
    subitems: [
      { label: "Overview", href: "/enterprise-operations" },
      { label: "ONE Platform", href: "/one" },
      { label: "Scaanit", href: "/scaanit" },
      { label: "TicketX", href: "/ticketx" }
    ]
  },
  { label: "AI & Analytics", href: "/ai-analytics" },
  { label: "Contact", href: "/contact" }
];

export const heroPillars = [
  {
    icon: "shieldCheck",
    title: "Assess risk and strengthen controls"
  },
  {
    icon: "users",
    title: "Train people and improve readiness"
  },
  {
    icon: "settings",
    title: "Streamline operations and workflows"
  },
  {
    icon: "brainCircuit",
    title: "Support faster decisions with secure AI-enabled systems"
  }
];

export const capabilityCards = [
  {
    number: "01",
    icon: "shieldSearch",
    title: "Cybersecurity assessment and authorized testing automation",
    description:
      "Automated attack surface discovery, vulnerability scanning, and controlled validation with actionable insights."
  },
  {
    number: "02",
    icon: "fileChart",
    title: "Threat intelligence enrichment and security reporting",
    description:
      "Curated threat feeds, correlation, and executive-ready reports tailored to your environment."
  },
  {
    number: "03",
    icon: "wifi",
    title: "Wireless and network security validation",
    description:
      "Validate wireless configurations, network segmentation, VPNs, and perimeter defenses."
  },
  {
    number: "04",
    icon: "monitorCog",
    title: "AI-assisted security operations and local SOC-style monitoring",
    description:
      "Local-first monitoring, alert triage, AI-assisted investigation, and response playbooks."
  },
  {
    number: "05",
    icon: "clipboardCheck",
    title: "Compliance gap analysis and audit-readiness tooling",
    description:
      "Map requirements, identify gaps, and streamline evidence collection and audit readiness."
  },
  {
    number: "06",
    icon: "presentation",
    title: "Security awareness training and employee learning platforms",
    description:
      "Phishing simulations, role-based training, and measurable awareness programs."
  },
  {
    number: "07",
    icon: "workflow",
    title: "Enterprise workflow orchestration across HR, finance, projects, CRM, and operations",
    description:
      "Automate and integrate cross-functional processes end-to-end."
  },
  {
    number: "08",
    icon: "ticket",
    title: "IT service management, ticketing, approvals, SLA tracking, and audit trails",
    description:
      "Streamlined service delivery with full visibility, accountability, and compliance."
  },
  {
    number: "09",
    icon: "brainCircuit",
    title: "Local-first AI decision support with privacy-conscious deployment",
    description:
      "Use AI where it matters, on your data, within your boundaries."
  },
  {
    number: "10",
    icon: "barChart",
    title: "Risk scoring, dashboards, analytics, and executive reporting",
    description:
      "Real-time risk scoring, KPIs, dashboards, and boardroom-ready insights."
  }
];

export const clientValue = [
  {
    icon: "eye",
    title: "Better visibility",
    description: "See what matters across systems, users, and processes."
  },
  {
    icon: "shieldCheck",
    title: "Stronger controls",
    description: "Reduce risk with proven frameworks and automated guardrails."
  },
  {
    icon: "gauge",
    title: "Faster response",
    description: "Detect, prioritize, and respond with speed and confidence."
  },
  {
    icon: "settings",
    title: "Practical workflows",
    description:
      "Automate routine work and enable teams to focus on outcomes."
  }
];

export const servicePages = [
  {
    slug: "cybersecurity-assessment",
    href: "/cybersecurity-assessment",
    image: "/assets/cybersecurityassesment.png",
    eyebrow: "Authorized assessment",
    title: "Cybersecurity Assessment & Authorized Testing",
    summary:
      "Practical assessment capabilities designed to help organizations identify exploitable weaknesses, reduce exposure, and improve defensive readiness.",
    accent: "blue",
    services: [
      {
        icon: "shieldSearch",
        title: "Vulnerability assessment and penetration testing",
        description:
          "Comprehensive discovery and testing across networks, systems, applications, and cloud environments to identify real-world risks before attackers do.",
        outcome: "Risk-ranked findings and a clear path to fix."
      },
      {
        icon: "refreshCw",
        title: "Security testing automation for repeatable assessment workflows",
        description:
          "Leverage automation to scale assessments, reduce manual effort, and ensure consistent, repeatable testing across your environment.",
        outcome: "Faster cycle times and consistent results."
      },
      {
        icon: "wifi",
        title: "Wireless and network security validation",
        description:
          "Validate wireless configurations, network segmentation, firewall rules, and exposed services to reduce attack surface and strengthen resilience.",
        outcome: "Stronger network posture and fewer blind spots."
      },
      {
        icon: "fileChart",
        title: "Security reporting that supports remediation and risk visibility",
        description:
          "Executive-ready reports with technical detail, business impact, and actionable remediation guidance tailored to your environment.",
        outcome: "Clarity for leaders and action for teams."
      }
    ],
    outcomes: [
      {
        icon: "shieldCheck",
        title: "Identify gaps earlier",
        description: "Find exploitable weaknesses before they are exploited."
      },
      {
        icon: "target",
        title: "Prioritize remediation",
        description: "Focus on what matters most based on real-world risk."
      },
      {
        icon: "badgeCheck",
        title: "Validate controls",
        description: "Confirm that security controls are effective and enforced."
      },
      {
        icon: "trendingUp",
        title: "Improve confidence in security posture",
        description:
          "Strengthen resilience and support audit and compliance requirements."
      }
    ]
  },
  {
    slug: "security-operations",
    href: "/security-operations",
    image: "/assets/Securityoperations.png",
    eyebrow: "Core service portfolio",
    title: "Threat Intelligence, Security Operations & Monitoring",
    summary:
      "Capabilities that help organizations strengthen visibility, enrich detection context, and support faster operational response.",
    accent: "teal",
    services: [
      {
        icon: "globeSearch",
        title: "Threat intelligence enrichment and security reporting",
        description:
          "Collect, correlate, and contextualize threat intelligence from multiple sources to improve detection accuracy and prioritization. Deliver concise, executive-ready reports that highlight risk trends, key threats, and recommended actions.",
        outcome:
          "Richer context and clearer visibility into evolving threats."
      },
      {
        icon: "brainCircuit",
        title: "AI-assisted security operations",
        description:
          "Leverage AI to accelerate alert triage, correlate signals, identify anomalies, and surface high-confidence investigations. Automate repetitive tasks and recommend next-best actions.",
        outcome:
          "Faster triage, reduced noise, and higher analyst productivity."
      },
      {
        icon: "monitorCog",
        title: "Local SOC-style monitoring",
        description:
          "24/7 monitoring of endpoints, identities, networks and cloud workloads from a local operations center. Built on SIEM/SOAR best practices with scalable detection content and continuous tuning.",
        outcome:
          "Continuous monitoring, consistent visibility, local accountability."
      },
      {
        icon: "workflow",
        title: "Practical workflows for alert handling, visibility, and incident support",
        description:
          "Standardized workflows for alert triage, escalation, investigation and containment. Support incident response coordination, root cause analysis and post-incident reporting.",
        outcome:
          "Structured response, audit-ready documentation and better incident outcomes."
      }
    ],
    outcomes: [
      {
        icon: "eye",
        title: "Improved visibility",
        description:
          "Unified telemetry and monitoring for a clear view across environment, users and workloads."
      },
      {
        icon: "crosshair",
        title: "Better context for decisions",
        description:
          "Enriched intelligence and correlated signals to prioritize what matters."
      },
      {
        icon: "workflow",
        title: "More structured response workflows",
        description:
          "Repeatable processes reduce resolution time and increase consistency."
      },
      {
        icon: "shieldCheck",
        title: "Stronger operational resilience",
        description:
          "Continuous monitoring, faster response and less disruption to business operations."
      }
    ],
    note:
      "Designed to integrate with your existing tools and processes. Tool-agnostic approach, clean integrations, and flexible deployment models."
  },
  {
    slug: "compliance-training",
    href: "/compliance-training",
    image: "/assets/Compliancetraining.png",
    eyebrow: "Governance and readiness",
    title: "Compliance, Audit Readiness & Security Training",
    summary:
      "Capabilities built to help organizations strengthen governance, close control gaps, improve readiness, and build security-minded teams.",
    accent: "teal",
    services: [
      {
        icon: "listChecks",
        title: "Compliance gap analysis",
        description:
          "Assess current controls and policies against regulatory and industry standards to identify gaps and prioritize remediation."
      },
      {
        icon: "settings",
        title: "Audit-readiness tooling and support",
        description:
          "Provide frameworks, templates and evidence mapping to streamline audit preparation and reduce last-minute risk."
      },
      {
        icon: "barChart",
        title: "Risk scoring and control visibility",
        description:
          "Score risks, map controls and track coverage to give leaders clear visibility into posture and improvement areas."
      },
      {
        icon: "users",
        title: "Security awareness training",
        description:
          "Role-based training, phishing simulations and awareness programs that drive behavioral change and reduce human risk."
      },
      {
        icon: "graduationCap",
        title: "Employee learning platforms",
        description:
          "Deploy and manage modern learning platforms with curated content, tracking and reporting to build security capability at scale."
      }
    ],
    outcomes: [
      {
        icon: "shieldCheck",
        title: "Better alignment to requirements",
        description: "Map controls to frameworks and reduce compliance risk."
      },
      {
        icon: "eye",
        title: "Clearer risk visibility",
        description: "Understand exposure and focus on what matters most."
      },
      {
        icon: "clipboardCheck",
        title: "Improved readiness",
        description: "Be audit-ready at all times with less stress and rework."
      },
      {
        icon: "users",
        title: "Stronger employee awareness",
        description:
          "Build a security-minded culture across the organization."
      }
    ]
  },
  {
    slug: "enterprise-operations",
    href: "/enterprise-operations",
    image: "/assets/EnterpriseOperations.png",
    eyebrow: "Operational capability",
    title: "Enterprise Operations, Workflow Automation & IT Service Management",
    summary:
      "Operational capabilities that help organizations streamline work, improve accountability, and build structured digital workflows.",
    accent: "blue",
    services: [
      {
        icon: "network",
        title: "Enterprise workflow orchestration across HR, finance, projects, CRM, and operations",
        description:
          "Design, configure, and automate end-to-end workflows across core business functions. Reduce manual handoffs, align roles and responsibilities, and standardize process execution."
      },
      {
        icon: "headphones",
        title: "IT service management",
        description:
          "Deliver structured IT support with ITIL-aligned processes, service catalogs, incident management, change management, and request fulfilment that scale with your organization."
      },
      {
        icon: "ticket",
        title: "Ticketing and approvals",
        description:
          "Centralize service requests, incidents, and change approvals in an intelligent ticketing system with role-based routing, escalation rules, and automated notifications."
      },
      {
        icon: "fileCheck",
        title: "SLA tracking and audit trails",
        description:
          "Define SLAs, track performance in real time, and maintain immutable audit trails for every action. Ensure compliance, transparency, and continuous improvement."
      },
      {
        icon: "layoutDashboard",
        title: "Practical operational dashboards and workflow visibility",
        description:
          "Real-time dashboards and reports that provide end-to-end visibility into workflows, service health, team performance, and SLA compliance."
      }
    ],
    outcomes: [
      {
        icon: "target",
        title: "Improved process clarity",
        description:
          "Standardized workflows and defined ownership reduce confusion and execution gaps."
      },
      {
        icon: "userCheck",
        title: "Better accountability",
        description:
          "Clear roles, approvals and audit trails drive ownership and reduce risk."
      },
      {
        icon: "gauge",
        title: "Faster service handling",
        description:
          "Automated routing, escalations, and SLAs ensure timely resolution and happier users."
      },
      {
        icon: "barChart",
        title: "Stronger operational visibility",
        description:
          "Real-time insights help leaders make data-driven decisions and optimize performance."
      }
    ]
  },
  {
    slug: "ai-analytics",
    href: "/ai-analytics",
    image: "/assets/AIAnalytics.png",
    eyebrow: "Decision support",
    title: "Local-First AI, Analytics & Executive Decision Support",
    summary:
      "Privacy-conscious digital capabilities that help organizations make better decisions through locally deployable systems, analytics, and AI-assisted workflows.",
    accent: "cyan",
    services: [
      {
        icon: "brainCircuit",
        title: "Local-first AI decision support with privacy-conscious deployment",
        description:
          "AI-assisted workflows, intelligent automation, and decision support systems designed for organizations that require full control over data, models, and infrastructure."
      },
      {
        icon: "lineChart",
        title: "Dashboards, analytics, and executive reporting",
        description:
          "Real-time operational dashboards, KPI tracking, interactive reporting, and visual insights that help leadership make faster, more informed decisions."
      },
      {
        icon: "shieldCheck",
        title: "Risk scoring and practical management visibility",
        description:
          "Context-aware risk scoring, control effectiveness tracking, and management views that translate security posture into clear business impact."
      }
    ],
    outcomes: [
      {
        icon: "target",
        title: "Capability-driven approach",
        description:
          "Solutions designed around real business outcomes, not just technology."
      },
      {
        icon: "lockKeyhole",
        title: "Secure and practical delivery",
        description:
          "Security built in by design with a focus on usability, reliability, and measurable impact."
      },
      {
        icon: "settings",
        title: "Focus on operational usefulness",
        description:
          "Prioritize what helps teams act faster, respond stronger, and reduce risk every day."
      },
      {
        icon: "server",
        title: "Locally deployable thinking",
        description:
          "Solutions that can run where your data lives, with the controls, governance, and privacy you require."
      }
    ],
    note:
      "A compact, senior team with deep expertise across cybersecurity, AI, automation, and compliance."
  }
];

export function getServicePage(slug) {
  return servicePages.find((page) => page.slug === slug);
}


// --- ScamsDada product --------------------------------------------------------

export const scamsDadaProduct = {
  name: "ScamsDada",
  path: "/scams-dada",
  category: "Cybersecurity | Digital Fraud Prevention",
  headline: "Check Before You Trust.",
  description:
    "A digital safety platform designed to help people spot potential scams in screenshots, messages and links, with clear guidance on what to do next.",
  dashboardImage: "/images/scams-dada-dashboard.png"
};

// --- ONE product -------------------------------------------------------------

export const oneProduct = {
  name: "ONE",
  url: "https://one.ai8ht.pro",
  tagline: "The campus-to-career workspace",
  summary:
    "ONE brings the three sides of campus placement into a single platform. Students build real evidence and see exactly where they stand. Institutions run the whole placement season from one dashboard. Employers meet candidates through consented, evidence-backed profiles.",
  personas: [
    {
      key: "students",
      image: "/assets/one/one-student.png",
      title: "For students",
      points: [
        "A readiness view built from real evidence - learning, practice and proctored assessments",
        "A roadmap and advisory guidance anchored to a target career",
        "Real openings from real employers, applied to with a consented profile"
      ]
    },
    {
      key: "institutions",
      image: "/assets/one/one-institution.png",
      title: "For institutions",
      points: [
        "The placement season on one dashboard - roster, readiness, assessments and drives",
        "A governed question bank and exam engine with per-student shuffled papers",
        "The students who need attention surfaced before it is too late"
      ]
    },
    {
      key: "employers",
      image: "/assets/one/one-employer.png",
      title: "For employers",
      points: [
        "Candidates with proof, not just resumes - consented, evidence-backed profiles",
        "One pipeline from application through shortlist, interview and offer",
        "Structured campus engagement with partner institutions"
      ]
    }
  ]
};

export const trustItems = [
  {
    icon: "shieldCheck",
    title: "SOC 2",
    description: "SOC 2 attested controls for security, availability and confidentiality."
  },
  {
    icon: "fileChart",
    title: "ISO/IEC 27001",
    description: "Certified information security management system."
  },
  {
    icon: "users",
    title: "GDPR",
    description: "GDPR-aligned data practices, with consent-based sharing built into our products."
  }
];

export const legalLines = {
  copyright: `© ${new Date().getFullYear()} AI8HT. All rights reserved.`,
  trademark: "AI8HT®",
  compliance: "SOC 2 attested · ISO/IEC 27001 certified · GDPR-aligned"
};
