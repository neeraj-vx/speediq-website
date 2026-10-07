import type { Metadata } from "next";

const BRAND = "SpeedIQ";

/* Build per-page metadata with canonical + Open Graph + Twitter, derived from a
   short page title (the root layout's title template adds the "· SpeedIQ"
   suffix to the document <title>). */
const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630 };

export function pageMeta(
  title: string,
  description: string,
  path: string,
): Metadata {
  const ogTitle = `${title} · ${BRAND}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      type: "website",
      siteName: BRAND,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
