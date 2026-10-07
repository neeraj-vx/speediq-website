/* The two hosts this site knows about. Both come from env so previews and local
   dev can point elsewhere; the defaults are production. */

const clean = (value: string | undefined) => value?.trim().replace(/\/+$/, "") || "";

/** This marketing site (canonical URLs, sitemap, Open Graph). */
export const SITE_URL = clean(process.env.NEXT_PUBLIC_SITE_URL) || "https://speediq.ai";

/** The product app. Every sign-in / sign-up / dashboard link goes here. */
export const APP_URL = clean(process.env.NEXT_PUBLIC_APP_URL) || "https://app.speediq.ai";

/** Absolute URL of a path inside the product app. */
export function appUrl(path: string): string {
  return `${APP_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
