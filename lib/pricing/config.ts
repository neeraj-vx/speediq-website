/**
 * Plan identifiers and money formatting for the public pricing page. Mirrors
 * the app's billing config; the live numbers come from content/pricing.json.
 */

export type PlanId = "starter" | "pro" | "business";
export type BillingCycle = "monthly" | "yearly";

export const PLAN_IDS: readonly PlanId[] = ["starter", "pro", "business"];

export function isPlanId(value: unknown): value is PlanId {
  return typeof value === "string" && (PLAN_IDS as readonly string[]).includes(value);
}

/** Per-channel credit buckets. SMS, Email, AI and Voice are priced independently. */
export type CreditType = "email" | "sms" | "ai" | "voice";

/** Format a USD amount, whole dollars when exact (cents only when needed). */
export function formatMoney(
  amount: number,
  currency = "usd",
  opts: { maxFractionDigits?: number; minFractionDigits?: number } = {},
): string {
  const code = (currency || "usd").toUpperCase();
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: code,
      minimumFractionDigits: opts.minFractionDigits ?? 0,
      maximumFractionDigits: opts.maxFractionDigits ?? 2,
    }).format(amount);
  } catch {
    return `${code} ${amount.toFixed(2)}`;
  }
}
