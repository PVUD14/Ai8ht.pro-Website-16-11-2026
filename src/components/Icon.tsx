import {
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  ClipboardCheck,
  Crosshair,
  Eye,
  FileCheck2,
  FileSearch,
  FileChartColumn,
  Gauge,
  Globe2,
  GraduationCap,
  Headphones,
  LayoutDashboard,
  LineChart,
  ListChecks,
  LockKeyhole,
  LucideIcon,
  MonitorCog,
  Network,
  Presentation,
  RefreshCw,
  Server,
  Settings,
  ShieldCheck,
  ShieldCheckIcon,
  ShieldQuestion,
  Target,
  TicketCheck,
  TrendingUp,
  UserCheck,
  Users,
  Wifi,
  Workflow
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  badgeCheck: BadgeCheck,
  barChart: BarChart3,
  brainCircuit: BrainCircuit,
  clipboardCheck: ClipboardCheck,
  crosshair: Crosshair,
  eye: Eye,
  fileCheck: FileCheck2,
  fileChart: FileChartColumn,
  gauge: Gauge,
  globeSearch: Globe2,
  graduationCap: GraduationCap,
  headphones: Headphones,
  layoutDashboard: LayoutDashboard,
  lineChart: LineChart,
  listChecks: ListChecks,
  lockKeyhole: LockKeyhole,
  monitorCog: MonitorCog,
  network: Network,
  presentation: Presentation,
  refreshCw: RefreshCw,
  server: Server,
  settings: Settings,
  shieldCheck: ShieldCheck,
  shieldQuestion: ShieldQuestion,
  shieldSearch: FileSearch,
  target: Target,
  ticket: TicketCheck,
  trendingUp: TrendingUp,
  userCheck: UserCheck,
  users: Users,
  wifi: Wifi,
  workflow: Workflow
};

type IconProps = {
  name: string;
  className?: string;
  size?: number;
};

export function Icon({ name, className, size = 24 }: IconProps) {
  const Component = icons[name] ?? ShieldCheckIcon;
  return <Component aria-hidden="true" className={className} size={size} strokeWidth={1.8} />;
}
