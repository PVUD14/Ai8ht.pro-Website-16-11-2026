import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { getServicePage } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "Compliance & Training",
  description: getServicePage("compliance-training")?.summary ?? "",
  path: "/compliance-training"
});

export default function ComplianceTrainingPage() {
  const page = getServicePage("compliance-training");
  if (!page) notFound();
  return <ServicePage page={page} />;
}
