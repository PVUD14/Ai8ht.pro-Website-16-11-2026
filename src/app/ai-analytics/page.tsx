import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { getServicePage } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "AI & Analytics",
  description: getServicePage("ai-analytics")?.summary ?? "",
  path: "/ai-analytics"
});

export default function AiAnalyticsPage() {
  const page = getServicePage("ai-analytics");
  if (!page) notFound();
  return <ServicePage page={page} />;
}
