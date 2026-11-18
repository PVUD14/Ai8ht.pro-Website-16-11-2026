export const ticketxProduct = {
  name: "TicketX",
  path: "/ticketx",
  url: "https://ticketx.ai8ht.pro",
  category: "IT support requests",
  tagline: "Every Request. One Workflow. Complete Visibility.",
  description: "TicketX is an enterprise IT service management platform that centralizes support requests, automates ticket routing, manages service workflows, and provides visibility into IT operations.",
  highlights: ["Centralized Ticketing", "Workflow Automation", "Enterprise Access Control", "IT Operations Visibility"]
};

export const ticketxChallenges = [
  "Disconnected support requests", "Manual ticket assignment", "Limited ownership visibility",
  "Inconsistent incident tracking", "Approval delays", "Fragmented communication",
  "Difficulty tracking operational workloads", "Limited audit transparency"
];

export const ticketxFeatures = [
  { icon: "tickets", title: "Track support requests", description: "Create a support request, assign it to someone and follow its progress." },
  { icon: "routing", title: "Send work to the right team", description: "Direct incoming requests to the right support team based on the type of help needed." },
  { icon: "dashboard", title: "See progress", description: "See open requests, priorities, and progress at a glance." },
  { icon: "access", title: "Team Access", description: "Give employees, support teams, and managers access to the information they need for their roles." },
  { icon: "approvals", title: "Approval Workflows", description: "Organize requests that need approval. Contact us to confirm availability for your organization.", note: "Ask about availability" },
  { icon: "knowledge", title: "Knowledge Base", description: "Help teams find answers and reuse guidance for common support questions." },
  { icon: "assets", title: "IT Asset Management", description: "Maintain asset records and give authorized users relevant asset visibility." },
  { icon: "sla", title: "Service Targets", description: "Set targets for responding to and resolving support requests." },
  { icon: "tenants", title: "Separate Workspaces", description: "Organize support for different groups with separate workspaces and permissions." },
  { icon: "integrations", title: "Connected Workflows", description: "Bring requests from your existing tools into a shared support process. Contact us to discuss compatibility." },
  { icon: "history", title: "Track changes", description: "Keep a record of ticket changes, comments, approval decisions, and relevant operational actions." }
] as const;

export const ticketxSteps = [
  { title: "Submit a Request", description: "Employees describe the help they need and create a support request." },
  { title: "Categorize and Assign", description: "Requests are organized by category and directed to the responsible team." },
  { title: "Investigate and Resolve", description: "Support teams collaborate, update statuses, and document resolutions." },
  { title: "Monitor and Improve", description: "Administrators review ticket activity, operational queues, and available dashboards." }
];

export const ticketxAudiences = [
  { title: "IT Service Desk Teams", description: "Centralize requests, manage queues, and coordinate everyday support work." },
  { title: "IT Infrastructure Teams", description: "Manage hardware, software, network, and infrastructure-related requests." },
  { title: "Cybersecurity Teams", description: "Track security-related tickets, remediation tasks, and assigned investigations." },
  { title: "Enterprise Operations", description: "Organize internal service workflows and cross-functional support requirements." },
  { title: "IT Leadership", description: "Review workloads, ticket ownership, and service management activity." }
];

export const ticketxSecurity = [
  { title: "Access for each role", description: "Manage what employees, support teams, and administrators can see and do." },
  { title: "Additional sign-in protection", description: "Extra sign-in checks can be enabled to help protect accounts." },
  { title: "Separate team workspaces", description: "Keep each group's requests organized within its workspace." },
  { title: "Clear activity history", description: "Follow ticket updates, decisions, and the people responsible for them." }
];

export const ticketxFaqs = [
  { question: "What is TicketX?", answer: "TicketX is an enterprise IT service management and ticketing platform for organizing support requests, service workflows, and IT operations." },
  { question: "Who can use TicketX?", answer: "TicketX is designed for employees, IT support teams, administrators, approvers, and other authorized organizational users." },
  { question: "Can TicketX assign requests automatically?", answer: "Yes. Requests can be directed to the right team based on their category and your organization's assignment preferences." },
  { question: "Can TicketX work with our existing tools?", answer: "TicketX can receive requests from other tools and share ticket updates. Contact our team to discuss compatibility with the tools you use." },
  { question: "Can different teams have different access?", answer: "Yes. Employees, support teams, and administrators can have different permissions for their work." },
  { question: "Can TicketX track service targets?", answer: "TicketX lets you set response and resolution targets for support requests. Contact our team to discuss your service needs." },
  { question: "Is TicketX available for organizations?", answer: "Contact the product team to discuss demonstration access and availability." }
];
