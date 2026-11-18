import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { getServicePage } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "Business Operations",
  description: getServicePage("enterprise-operations")?.summary ?? "",
  path: "/enterprise-operations"
});

export default function EnterpriseOperationsPage() {
  const page = getServicePage("enterprise-operations");
  if (!page) notFound();
  return <ServicePage page={page} />;
}
