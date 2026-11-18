export const contact = {
  website: "www.ai8ht.pro",
  email: "info@ai8ht.pro"
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "All services", href: "/capabilities" },
  { label: "Business Operations", href: "/enterprise-operations", subitems: [
    { label: "Overview", href: "/enterprise-operations" },
    { label: "ONE Platform", href: "/one" },
    { label: "Scaanit", href: "/scaanit" },
    { label: "TicketX", href: "/ticketx" }
  ] },
  { label: "AI & Reports", href: "/ai-analytics" },
  { label: "Compliance & Training", href: "/compliance-training" },
  { label: "Security Checks", href: "/cybersecurity-assessment", subitems: [
    { label: "Security Checks", href: "/cybersecurity-assessment" },
    { label: "Security Monitoring", href: "/security-operations" },
    { label: "ScamsDada", href: "/scams-dada" }
  ] },
  { label: "Whitepaper", href: "/whitepaper" },
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
    "number": "01",
    "icon": "shieldSearch",
    "title": "Security checks",
    "description": "Find weaknesses in websites, apps and systems, with your permission."
  },
  {
    "number": "02",
    "icon": "fileChart",
    "title": "Threat information",
    "description": "Understand online threats and decide what needs attention."
  },
  {
    "number": "03",
    "icon": "wifi",
    "title": "Network safety",
    "description": "Check Wi-Fi, firewalls and network access settings."
  },
  {
    "number": "04",
    "icon": "monitorCog",
    "title": "Security monitoring",
    "description": "Review suspicious activity and help your team respond."
  },
  {
    "number": "05",
    "icon": "clipboardCheck",
    "title": "Audit preparation",
    "description": "Organize policies, records and actions needed for an audit."
  },
  {
    "number": "06",
    "icon": "presentation",
    "title": "Employee training",
    "description": "Help people learn safer everyday working practices."
  },
  {
    "number": "07",
    "icon": "workflow",
    "title": "Business workflows",
    "description": "Organize tasks and approvals across departments."
  },
  {
    "number": "08",
    "icon": "ticket",
    "title": "IT support",
    "description": "Track support requests, responsibilities and progress."
  },
  {
    "number": "09",
    "icon": "brainCircuit",
    "title": "AI assistance",
    "description": "Help teams review information and reduce repeated work."
  },
  {
    "number": "10",
    "icon": "barChart",
    "title": "Reports and dashboards",
    "description": "See important numbers, risks and progress in one place."
  }
];

export const clientValue = [
  { icon: "settings", title: "Simpler Workflows", description: "Bring requests, responsibilities, and everyday work into clearer processes." },
  { icon: "eye", title: "Clearer Decisions", description: "Turn available information into useful dashboards and practical insights." },
  { icon: "users", title: "Better Readiness", description: "Help teams prepare, learn, and keep track of their responsibilities." },
  { icon: "shieldCheck", title: "Safer Digital Experiences", description: "Recognize digital risks and make more informed choices online." }
];

export const serviceGroups = [
  { id: "operations", title: "Business Operations", icon: "settings",
    description: "Keep daily tasks, support requests and approvals organized.",
    capabilityNumbers: ["07", "08"],
    links: [{ label: "Explore Business Operations", href: "/enterprise-operations" }] },
  { id: "analytics", title: "AI & Reports", icon: "brainCircuit",
    description: "Understand your information with clear reports and AI-assisted tools.",
    capabilityNumbers: ["09", "10"],
    links: [{ label: "Explore AI & Reports", href: "/ai-analytics" }] },
  { id: "compliance", title: "Compliance & Training", icon: "clipboardCheck",
    description: "Prepare for audits and help employees learn safer ways to work.",
    capabilityNumbers: ["05", "06"],
    links: [{ label: "Explore Compliance & Training", href: "/compliance-training" }] },
  { id: "cybersecurity", title: "Cybersecurity", icon: "shieldCheck",
    description: "Find security weaknesses and keep track of suspicious activity.",
    capabilityNumbers: ["01", "02", "03", "04"],
    links: [{ label: "Explore Security Checks", href: "/cybersecurity-assessment" },
      { label: "Explore Security Monitoring", href: "/security-operations" }] }
];

export const servicePages = [
  {
    "slug": "cybersecurity-assessment",
    "href": "/cybersecurity-assessment",
    "image": "/assets/cybersecurityassesment.png",
    "eyebrow": "AI8HT services",
    "title": "Security Checks",
    "summary": "Find weaknesses in your websites, apps and networks. We test with your permission and explain what to fix first.",
    "accent": "blue",
    "services": [
      {
        "icon": "shieldSearch",
        "title": "Find security weaknesses",
        "description": "Check websites, apps and systems for problems that could put your information at risk."
      },
      {
        "icon": "refreshCw",
        "title": "Repeat important checks",
        "description": "Automate routine checks so your team can spot new problems as systems change."
      },
      {
        "icon": "wifi",
        "title": "Check your network",
        "description": "Review Wi-Fi, firewalls and network settings for unsafe access."
      },
      {
        "icon": "fileChart",
        "title": "Get a clear action plan",
        "description": "Understand the findings, their importance and the steps your team can take."
      }
    ],
    "outcomes": [
      {
        "icon": "shieldCheck",
        "title": "Know what needs attention",
        "description": "See which weaknesses matter most."
      },
      {
        "icon": "target",
        "title": "Plan the fixes",
        "description": "Give your team a clear list of actions."
      },
      {
        "icon": "badgeCheck",
        "title": "Check your protections",
        "description": "Find out whether existing safeguards work as expected."
      },
      {
        "icon": "trendingUp",
        "title": "Explain the risk",
        "description": "Share understandable findings with managers and technical teams."
      }
    ]
  },
  {
    "slug": "security-operations",
    "href": "/security-operations",
    "image": "/assets/Securityoperations.png",
    "eyebrow": "AI8HT services",
    "title": "Security Monitoring",
    "summary": "Keep track of suspicious activity and help your team respond. Bring alerts, investigations and next steps into a clear process.",
    "accent": "teal",
    "services": [
      {
        "icon": "globeSearch",
        "title": "Understand threats",
        "description": "Review information about online threats and what they could mean for your organization."
      },
      {
        "icon": "brainCircuit",
        "title": "Sort security alerts",
        "description": "Use AI-assisted tools to help review alerts and decide which need attention."
      },
      {
        "icon": "monitorCog",
        "title": "Monitor your systems",
        "description": "Watch activity across devices, accounts and networks from a shared view."
      },
      {
        "icon": "workflow",
        "title": "Respond to problems",
        "description": "Give your team clear steps for investigating, reporting and handling security incidents."
      }
    ],
    "outcomes": [
      {
        "icon": "eye",
        "title": "See activity in one place",
        "description": "Bring important security information together."
      },
      {
        "icon": "crosshair",
        "title": "Focus on useful alerts",
        "description": "Help your team separate urgent issues from routine activity."
      },
      {
        "icon": "workflow",
        "title": "Know the next step",
        "description": "Follow a clear process when a problem appears."
      },
      {
        "icon": "shieldCheck",
        "title": "Keep a record",
        "description": "Track what happened and how your team responded."
      }
    ],
    "note": "Tell us about your current tools and needs so we can discuss a suitable approach."
  },
  {
    "slug": "compliance-training",
    "href": "/compliance-training",
    "image": "/assets/Compliancetraining.png",
    "eyebrow": "AI8HT services",
    "title": "Compliance & Training",
    "summary": "Prepare for audits and help employees work safely. Organize the policies, records and training your organization needs.",
    "accent": "teal",
    "services": [
      {
        "icon": "listChecks",
        "title": "Find missing requirements",
        "description": "Compare your current policies and practices with the requirements you need to meet."
      },
      {
        "icon": "settings",
        "title": "Prepare for audits",
        "description": "Organize documents, evidence and responsibilities before an audit."
      },
      {
        "icon": "barChart",
        "title": "Track risks and progress",
        "description": "See what needs attention and who is responsible for the next step."
      },
      {
        "icon": "users",
        "title": "Train your team",
        "description": "Help employees recognize suspicious messages and follow safer everyday practices."
      },
      {
        "icon": "graduationCap",
        "title": "Manage employee learning",
        "description": "Organize learning materials and track participation and progress."
      }
    ],
    "outcomes": [
      {
        "icon": "shieldCheck",
        "title": "Understand the requirements",
        "description": "Know what your organization needs to work on."
      },
      {
        "icon": "eye",
        "title": "Keep records organized",
        "description": "Make important documents easier to find."
      },
      {
        "icon": "clipboardCheck",
        "title": "Prepare with less confusion",
        "description": "Track actions and responsibilities before an audit."
      },
      {
        "icon": "users",
        "title": "Build everyday awareness",
        "description": "Help employees make informed choices at work."
      }
    ]
  },
  {
    "slug": "enterprise-operations",
    "href": "/enterprise-operations",
    "image": "/assets/EnterpriseOperations.png",
    "eyebrow": "AI8HT services",
    "title": "Business Operations",
    "summary": "Make daily work easier to manage. Organize requests, approvals and team responsibilities without losing track of progress.",
    "accent": "blue",
    "services": [
      {
        "icon": "network",
        "title": "Organize daily work",
        "description": "Connect the steps in HR, finance, projects and customer support so teams know what happens next."
      },
      {
        "icon": "headphones",
        "title": "Manage IT support",
        "description": "Give employees a clear way to ask for help and let support teams track each request."
      },
      {
        "icon": "ticket",
        "title": "Handle requests and approvals",
        "description": "Send work to the right person and keep decisions in one place."
      },
      {
        "icon": "fileCheck",
        "title": "Track deadlines and changes",
        "description": "Set response targets and keep a record of updates, decisions and completed work."
      },
      {
        "icon": "layoutDashboard",
        "title": "See team progress",
        "description": "Use dashboards to review open work, delays and team activity."
      }
    ],
    "outcomes": [
      {
        "icon": "target",
        "title": "Clear steps",
        "description": "Help everyone understand the process."
      },
      {
        "icon": "userCheck",
        "title": "Clear ownership",
        "description": "Show who is responsible for each request."
      },
      {
        "icon": "gauge",
        "title": "Less chasing",
        "description": "Track progress without repeated follow-up messages."
      },
      {
        "icon": "barChart",
        "title": "Better visibility",
        "description": "See where work is moving and where help is needed."
      }
    ]
  },
  {
    "slug": "ai-analytics",
    "href": "/ai-analytics",
    "image": "/assets/AIAnalytics.png",
    "eyebrow": "AI8HT services",
    "title": "AI & Reports",
    "summary": "Turn your information into useful reports and dashboards. Use AI to help your team review information and reduce repetitive work.",
    "accent": "cyan",
    "services": [
      {
        "icon": "brainCircuit",
        "title": "Use AI for everyday tasks",
        "description": "Help teams review information and reduce repetitive work, with attention to how their data is handled."
      },
      {
        "icon": "lineChart",
        "title": "Build useful dashboards",
        "description": "Bring important numbers and progress into reports your team can understand."
      },
      {
        "icon": "shieldCheck",
        "title": "Review risks and priorities",
        "description": "See the issues, actions and progress that matter to your organization."
      }
    ],
    "outcomes": [
      {
        "icon": "target",
        "title": "Understand your information",
        "description": "Make reports easier to read and use."
      },
      {
        "icon": "lockKeyhole",
        "title": "Reduce repeated work",
        "description": "Support tasks that take time to do manually."
      },
      {
        "icon": "settings",
        "title": "Choose the next step",
        "description": "Use relevant information to guide decisions."
      },
      {
        "icon": "server",
        "title": "Consider data privacy",
        "description": "Discuss where information is stored and how it is used."
      }
    ],
    "note": "Tell us about your current tools and needs so we can discuss a suitable approach."
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
    "A shared workspace for students preparing for jobs, institutions managing placements and employers finding candidates.",
  personas: [
    {
      key: "students",
      image: "/assets/one/one-student.png",
      title: "For students",
      points: [
        "See your progress through learning, practice and assessments.",
        "Plan the skills and preparation needed for your chosen career.",
        "Find job openings and choose when to share your profile."
      ]
    },
    {
      key: "institutions",
      image: "/assets/one/one-institution.png",
      title: "For institutions",
      points: [
        "Manage students, assessments and placement activities in one dashboard.",
        "Organize questions and run assessments with varied papers.",
        "See which students may need extra support."
      ]
    },
    {
      key: "employers",
      image: "/assets/one/one-employer.png",
      title: "For employers",
      points: [
        "Review candidate profiles and assessment information shared with consent.",
        "Track applications, interviews and offers in one place.",
        "Coordinate hiring activities with institutions."
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
