import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/landing/site";

// Everything on this site is public marketing content, so all of it is indexable.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
