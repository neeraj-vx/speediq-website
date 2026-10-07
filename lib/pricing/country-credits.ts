/**
 * Client-safe helpers for per-country SMS/voice credit consumption.
 *
 * SMS and voice credits have one flat USD price each. A send burns
 *   ceil(carrier cost × margin / credit price)
 * credits, at least 1 — so a US/Canada SMS segment or call minute is 1 credit
 * and pricier destinations burn more. Shared by the rate card (charging), the
 * pricing page, the billing page and the admin rate-card editor so they agree.
 */

/** Credits one SMS segment / voice minute burns for a carrier cost (US cents). */
export function creditsPerUnit(costCents: number, margin: number, creditValueCents: number): number {
  if (!Number.isFinite(costCents) || costCents <= 0) return 1;
  if (!Number.isFinite(creditValueCents) || creditValueCents <= 0) return 1;
  // Round before ceil so float noise (1.66 × 2 / 3.32 = 1.0000000002) doesn't add a credit.
  const raw = Math.round(((costCents * margin) / creditValueCents) * 1e6) / 1e6;
  return Math.max(1, Math.ceil(raw));
}

/** One destination's consumption, as shown to customers. */
export interface CountryCreditRate {
  /** ISO-3166 alpha-2. */
  country: string;
  /** Credits per SMS segment (null when SMS to this country isn't priced). */
  sms: number | null;
  /** Credits per voice minute (null when calls to this country aren't priced). */
  voice: number | null;
}

export const COUNTRY_NAMES: Record<string, string> = {
  US: "United States",
  CA: "Canada",
  IN: "India",
  AE: "UAE",
  GB: "United Kingdom",
  SA: "Saudi Arabia",
  AU: "Australia",
};

export function countryName(code: string): string {
  return COUNTRY_NAMES[code] ?? code;
}

/** Rate rows sorted cheapest first (US/Canada at the top), then by name. */
export function sortCountryRates(rows: CountryCreditRate[]): CountryCreditRate[] {
  return [...rows].sort(
    (a, b) =>
      (a.sms ?? a.voice ?? 0) - (b.sms ?? b.voice ?? 0) ||
      countryName(a.country).localeCompare(countryName(b.country)),
  );
}
