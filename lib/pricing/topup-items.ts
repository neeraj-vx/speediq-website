/**
 * Multi-bucket credit top-ups (pure helpers shared with the app's billing page).
 * One top-up can buy any mix of the four buckets in a single payment; the chosen
 * amounts travel to the app as "email:5000,sms:500" on the checkout deep link.
 */

import type { CreditType } from "./config";

export interface TopUpItem {
  creditType: CreditType;
  credits: number;
}

export const TOPUP_BUCKETS: readonly CreditType[] = ["email", "sms", "ai", "voice"];

/** Most credits of one bucket a single top-up can buy (slider cap). */
export const TOPUP_MAX: Record<CreditType, number> = {
  email: 200_000,
  sms: 50_000,
  ai: 50_000,
  voice: 50_000,
};

export function isTopUpBucket(value: unknown): value is CreditType {
  return typeof value === "string" && (TOPUP_BUCKETS as readonly string[]).includes(value);
}

/** Price of one bucket's credits in whole US cents — the same rounding the app charges. */
export function itemPriceCents(credits: number, centsPerCredit: number): number {
  return Math.round(credits * centsPerCredit);
}

/**
 * Snap a requested amount onto a bucket's top-up grid: 0 stays 0 (not buying),
 * anything else is rounded to the step and kept within [min, max].
 */
export function snapTopUpAmount(value: number, bounds: { min_topup: number; topup_step: number; max: number }): number {
  if (!Number.isFinite(value) || value <= 0) return 0;
  const stepped = Math.round(value / bounds.topup_step) * bounds.topup_step;
  return Math.min(bounds.max, Math.max(bounds.min_topup, stepped));
}

/** Drop empty and duplicate buckets, keeping bucket display order. */
export function normalizeItems(items: readonly TopUpItem[]): TopUpItem[] {
  return TOPUP_BUCKETS.flatMap((creditType) => {
    const item = items.find((i) => i.creditType === creditType && i.credits > 0);
    return item ? [{ creditType, credits: item.credits }] : [];
  });
}

export function totalCredits(items: readonly TopUpItem[]): number {
  return items.reduce((sum, i) => sum + i.credits, 0);
}

/** URL form used by the pricing page → billing deep link: "email:5000,sms:500". */
export function formatTopUpParam(items: readonly TopUpItem[]): string {
  return normalizeItems(items)
    .map((i) => `${i.creditType}:${i.credits}`)
    .join(",");
}
