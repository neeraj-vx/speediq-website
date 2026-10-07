/**
 * Deep links from the public pricing page into the app's billing page, so a
 * plan or top-up picked here continues straight to checkout after sign-up.
 *
 *   /dashboard/billing?plan=pro&cycle=yearly       → start that plan
 *   /dashboard/billing?topup=email:5000,sms:500    → open the top-up dialog prefilled
 */

import { appUrl } from "@/lib/landing/site";

import type { BillingCycle, PlanId } from "./config";
import { formatTopUpParam, type TopUpItem } from "./topup-items";

export const BILLING_PATH = "/dashboard/billing";

export type BillingIntent =
  | { kind: "plan"; plan: PlanId; cycle: BillingCycle }
  | { kind: "topup"; items: TopUpItem[] };

/** App-relative billing path carrying the chosen plan or top-up. */
export function billingIntentHref(intent: BillingIntent): string {
  const qs = new URLSearchParams();
  if (intent.kind === "plan") {
    qs.set("plan", intent.plan);
    qs.set("cycle", intent.cycle);
  } else {
    qs.set("topup", formatTopUpParam(intent.items));
  }
  return `${BILLING_PATH}?${qs.toString()}`;
}

/** The app's sign-up page, landing on `path` once the account (and a project) exists. */
export function signUpThenHref(path: string): string {
  return appUrl(`/auth/register?redirect=${encodeURIComponent(path)}`);
}
