import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { getServicePage } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "Security Checks",
  description: getServicePage("cybersecurity-assessment")?.summary ?? "",
  path: "/cybersecurity-assessment"
});

export default function CybersecurityAssessmentPage() {
  const page = getServicePage("cybersecurity-assessment");
  if (!page) notFound();
  return <ServicePage page={page} />;
}
