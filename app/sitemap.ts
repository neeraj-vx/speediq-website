import type { MetadataRoute } from "next";

import { DOC_ITEMS } from "@/components/landing/docs/nav";
import { SITE_URL as BASE_URL } from "@/lib/landing/site";

// Every page on the site.
// `path` is relative (no leading slash); "" is the home page.
const STATIC_PATHS: { path: string; changeFrequency: "daily" | "weekly" | "monthly" | "yearly"; priority: number }[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "product", changeFrequency: "monthly", priority: 0.8 },
  { path: "features", changeFrequency: "monthly", priority: 0.8 },
  { path: "features/inbox", changeFrequency: "monthly", priority: 0.6 },
  { path: "features/social", changeFrequency: "monthly", priority: 0.6 },
  { path: "features/whatsapp", changeFrequency: "monthly", priority: 0.6 },
  { path: "features/email", changeFrequency: "monthly", priority: 0.6 },
  { path: "features/sms", changeFrequency: "monthly", priority: 0.6 },
  { path: "features/voice", changeFrequency: "monthly", priority: 0.6 },
  { path: "features/prospecting", changeFrequency: "monthly", priority: 0.6 },
  { path: "features/automations", changeFrequency: "monthly", priority: 0.6 },
  { path: "features/crm", changeFrequency: "monthly", priority: 0.6 },
  { path: "features/forms", changeFrequency: "monthly", priority: 0.6 },
  { path: "features/booking", changeFrequency: "monthly", priority: 0.6 },
  { path: "features/analytics", changeFrequency: "monthly", priority: 0.6 },
  { path: "features/team", changeFrequency: "monthly", priority: 0.6 },
  { path: "pricing", changeFrequency: "monthly", priority: 0.8 },
  { path: "compare", changeFrequency: "monthly", priority: 0.7 },
  { path: "use-cases", changeFrequency: "monthly", priority: 0.7 },
  { path: "why-us", changeFrequency: "monthly", priority: 0.7 },
  { path: "about", changeFrequency: "monthly", priority: 0.6 },
  { path: "docs", changeFrequency: "weekly", priority: 0.7 },
  { path: "legal/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "legal/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "legal/cookies", changeFrequency: "yearly", priority: 0.3 },
  { path: "legal/dpa", changeFrequency: "yearly", priority: 0.3 },
  { path: "legal/refund", changeFrequency: "yearly", priority: 0.3 },
  { path: "legal/acceptable-use", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = STATIC_PATHS.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path ? `/${path}` : ""}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  // One entry per docs article, kept in sync with the docs nav registry.
  const docEntries = DOC_ITEMS.map((doc) => ({
    url: `${BASE_URL}/docs/${doc.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...docEntries];
}
