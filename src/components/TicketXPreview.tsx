import { ArrowUpRight, Check, LayoutDashboard, ListTodo, LockKeyhole, Plus, Search, Settings2, Ticket } from "lucide-react";
import styles from "./TicketXPreview.module.css";

export type TicketXPreviewKind = "login" | "dashboard" | "create" | "queue" | "detail" | "admin";

const labels: Record<TicketXPreviewKind, string> = {
  login: "Login interface", dashboard: "Operational dashboard", create: "Create a ticket",
  queue: "Ticket queue", detail: "Ticket details and activity", admin: "Administrative controls"
};

const sampleTickets = [
  { title: "Software access request", status: "In progress", team: "Service desk" },
  { title: "Workstation setup", status: "New", team: "Infrastructure" },
  { title: "Connectivity support", status: "Resolved", team: "Network support" }
];

export function TicketXPreview({ kind = "dashboard", compact = false }: { kind?: TicketXPreviewKind; compact?: boolean }) {
  return (
    <figure data-product-demo="true" className={`${styles.preview} ${compact ? styles.compact : ""}`}>
      <div className={styles.frame} role="img" aria-label={`Illustrative TicketX ${labels[kind].toLowerCase()} with example information; not an actual application screenshot.`}>
        <div aria-hidden="true">
          <div className={styles.topbar}>
            <span className={styles.brand}><Ticket size={18} />TicketX</span>
            <span className={styles.previewBadge}>Illustrative Preview</span>
          </div>
          <div className={styles.workspace}>
            {!compact && <div className={styles.sidebar}>
              <span className={styles.selected}><LayoutDashboard size={16} />Overview</span>
              <span><ListTodo size={16} />Tickets</span>
              <span><Settings2 size={16} />Admin</span>
              <small>Demo workspace</small>
            </div>}
            <div className={styles.screen}>
              <div className={styles.screenHeading}><span>{labels[kind]}</span>{kind === "login" ? <LockKeyhole size={18} /> : <ArrowUpRight size={18} />}</div>

              {(kind === "dashboard" || kind === "queue") && <>
                {kind === "dashboard" ? <div className={styles.metrics}>
                  <div><small>Open</small><strong>12</strong></div>
                  <div><small>In progress</small><strong>7</strong></div>
                  <div><small>Resolved</small><strong>5</strong></div>
                </div> : <div className={styles.search}><Search size={14} />Search service requests</div>}
                <div className={styles.tableHeading}><span>Service request</span><span>Status</span></div>
                <div className={styles.rows}>{sampleTickets.map(ticket => <div className={styles.row} key={ticket.title}>
                  <span>{ticket.title}<small>{ticket.team}</small></span>
                  <span className={`${styles.chip} ${ticket.status === "Resolved" ? styles.resolved : ""}`}>{ticket.status}</span>
                </div>)}</div>
                {!compact && <div className={styles.queueFoot}><span>Clear ownership. Shared context.</span><span>Sample data</span></div>}
              </>}

              {kind === "login" && <div className={styles.form}>
                <div className={styles.loginIcon}><LockKeyhole size={25} /></div>
                <strong>Welcome to your workspace</strong>
                <div><small>Work email</small><span className={styles.field}>Your organization account</span></div>
                <div><small>Password</small><span className={styles.field}>••••••••</span></div>
                <div className={styles.mockAction}>Sign in</div>
              </div>}

              {kind === "create" && <div className={styles.form}>
                <div><small>Request summary</small><span className={styles.field}>Workstation setup</span></div>
                <div className={styles.fieldPair}>
                  <div><small>Category</small><span className={styles.field}>Hardware</span></div>
                  <div><small>Priority</small><span className={styles.field}>Normal</span></div>
                </div>
                <div><small>Description</small><span className={`${styles.field} ${styles.description}`}>Prepare a workstation for a new team member.</span></div>
                <div className={styles.mockAction}><Plus size={14} />Create ticket</div>
              </div>}

              {kind === "detail" && <div className={styles.detail}>
                <small>DEMO-002 · Example ticket</small>
                <strong>Workstation setup</strong>
                <span className={styles.chip}>Infrastructure team</span>
                <div className={styles.timeline}>{["Request created", "Assigned to service team", "Resolution documented"].map(item => <div key={item}><Check size={13} /><span>{item}</span></div>)}</div>
              </div>}

              {kind === "admin" && <div className={styles.admin}>
                {[{title:"Team access",value:"Permissions"},{title:"Request assignment",value:"Team ownership"},{title:"Service targets",value:"Response & resolution"},{title:"Sign-in checks",value:"Account protection"}].map(item => <div key={item.title}><Settings2 size={15} /><span>{item.title}<small>{item.value}</small></span><ArrowUpRight size={14} /></div>)}
              </div>}
            </div>
          </div>
        </div>
      </div>
      <figcaption>Illustrative Preview · Example information</figcaption>
    </figure>
  );
}
