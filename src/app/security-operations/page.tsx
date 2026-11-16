import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { getServicePage } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "Security Operations",
  description: getServicePage("security-operations")?.summary ?? "",
  path: "/security-operations"
});

export default function SecurityOperationsPage() {
  const page = getServicePage("security-operations");
  if (!page) notFound();
  return <ServicePage page={page} />;
}
