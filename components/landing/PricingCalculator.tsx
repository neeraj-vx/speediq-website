"use client";

import { Fragment, useState } from "react";

import { formatMoney, isPlanId } from "@/lib/pricing/config";
import { billingIntentHref, signUpThenHref, type BillingIntent } from "@/lib/pricing/checkout-intent";
import {
  TOPUP_MAX,
  isTopUpBucket,
  itemPriceCents,
  normalizeItems,
  snapTopUpAmount,
  totalCredits,
} from "@/lib/pricing/topup-items";
import {
  PLAN_SECTIONS as SECTIONS,
  tierBlurb,
  type FeatureCell as Cell,
  type PlanShape,
} from "@/lib/pricing/plan-features";

import type { CreditType } from "@/lib/pricing/config";

/**
 * A marketing tier: the shared feature shape plus the FIXED subscription prices
 * and included monthly credit allotment that drive the card headline. Prices are
 * nullable because the DB columns are.
 */
export interface PricingTier extends PlanShape {
  price_usd_monthly: number | null;
  price_usd_yearly: number | null;
  monthly_credits: number | null;
  monthly_credits_email: number | null;
  monthly_credits_sms: number | null;
  monthly_credits_ai: number | null;
  monthly_credits_voice: number | null;
}

// NOTE: nothing inside this component may use the landing `.reveal` scroll
// animation (the old landing had one; keep className static): any state change that
// alters an element's className makes React rewrite the attribute and drop that
// class, snapping the element back to opacity 0 (cards vanished when the slider
// crossed a tier boundary).

type Cycle = "monthly" | "yearly";
const num = (n: number) => n.toLocaleString("en-US");

/** The plan we spotlight as the popular pick (replaces the old slider-active tier). */
const RECOMMENDED_TIER = "pro";

/** Plan/total amounts, whole dollars when exact (cents only when needed). */
const money = (amount: number) => formatMoney(amount);

/**
 * A top-up bucket as shown in the estimator: its per-credit USD price plus
 * top-up bounds, straight from credit_type_pricing. SMS/Voice/Email/AI are each
 * priced separately, so the estimator prices exactly the bucket you pick.
 */
export interface CreditTypeOption {
  credit_type: string;
  credit_value_usd_cents: number;
  min_topup: number;
  topup_step: number;
}

/** Short pill labels (the DB labels are "Email credits", "SMS credits", …). */
const BUCKET_SHORT: Record<string, string> = {
  email: "Email",
  sms: "SMS",
  ai: "AI",
  voice: "Voice",
};

/** Used only if the DB returns no buckets — mirrors the credit_type_pricing seed. */
const FALLBACK_BUCKETS: CreditTypeOption[] = [
  { credit_type: "email", credit_value_usd_cents: 0.18, min_topup: 500, topup_step: 500 },
  { credit_type: "sms", credit_value_usd_cents: 1.66, min_topup: 100, topup_step: 50 },
  { credit_type: "ai", credit_value_usd_cents: 1.2, min_topup: 100, topup_step: 50 },
  { credit_type: "voice", credit_value_usd_cents: 2.8, min_topup: 100, topup_step: 50 },
];

/** A starting mix so the estimator shows a combined top-up out of the box. */
const DEFAULT_TOPUP: Record<string, number> = { email: 10_000, sms: 0, ai: 1_000, voice: 0 };

/** USD price to top up `credits` of a bucket (whole cents, as checkout charges). */
function bucketPrice(credits: number, b: CreditTypeOption): number {
  return itemPriceCents(credits, b.credit_value_usd_cents) / 100;
}

const bucketMax = (b: CreditTypeOption) => (isTopUpBucket(b.credit_type) ? TOPUP_MAX[b.credit_type] : 50_000);

export default function PricingCalculator({
  tiers,
  creditTypes,
}: {
  tiers: PricingTier[];
  creditTypes: CreditTypeOption[];
}) {
  const [cycle, setCycle] = useState<Cycle>("monthly");

  // Every CTA continues to checkout in the app: the visitor signs up (or logs
  // in) there and lands on Billing with the choice preselected.
  const checkoutHref = (intent: BillingIntent) => signUpThenHref(billingIntentHref(intent));

  // One-time top-up estimator: each channel (email/sms/ai/voice) is its own
  // separately-priced bucket with its own slider; whatever is picked is bought
  // together in one payment — the same numbers as the in-app top-up.
  const buckets = (creditTypes.length ? creditTypes : FALLBACK_BUCKETS).filter((b) => isTopUpBucket(b.credit_type));
  const [amounts, setAmounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(
      buckets.map((b) => [
        b.credit_type,
        snapTopUpAmount(DEFAULT_TOPUP[b.credit_type] ?? 0, { ...b, max: bucketMax(b) }),
      ]),
    ),
  );
  const topupItems = normalizeItems(
    buckets.map((b) => ({ creditType: b.credit_type as CreditType, credits: amounts[b.credit_type] ?? 0 })),
  );
  const topupTotal = money(
    buckets.reduce((sum, b) => sum + bucketPrice(amounts[b.credit_type] ?? 0, b), 0),
  );

  // Headline price for a tier at the chosen billing cycle.
  const tierPrice = (t: PricingTier): number | null =>
    cycle === "monthly" ? t.price_usd_monthly : t.price_usd_yearly;

  return (
    <div className="w-full pb-12 pt-2 sm:pb-16">
      <div className="mx-auto w-full max-w-site px-5 sm:px-8">
        {/* Model note + billing-cycle toggle */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-md text-[13px] leading-6 text-body">
            Fixed monthly plans, each with separate channel credit buckets included.{" "}
            <span className="font-medium text-ink">
              WhatsApp &amp; social DMs do not use SpeedIQ credits — platform and provider terms apply separately.
            </span>
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex rounded-full bg-mist p-0.5">
              {(["monthly", "yearly"] as Cycle[]).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCycle(c)}
                  className={`rounded-full px-3 py-1 text-[12px] font-semibold capitalize transition-colors ${
                    cycle === c ? "bg-ink text-white" : "text-body"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Plan cards merged as the comparison-table headers, columns aligned.
            pt/px give the recommended card's lift + ring/shadow room so the
            overflow-x wrapper (which also clips vertically) doesn't cut it off. */}
        {tiers.length > 0 && (
          <div className="mt-8 overflow-x-auto px-2 pb-3 pt-6">
            <div
              className="grid min-w-[880px] items-stretch"
              style={{ gridTemplateColumns: "minmax(0,1.5fr) repeat(3, minmax(0,1fr))" }}
            >
              {/* Header row: heading on the left, cards on the right */}
              <div className="flex flex-col justify-end self-end pb-3 pr-8">
                <div className="font-display text-[30px] font-light tracking-[-0.02em] text-ink">
                  Compare plans
                </div>
                <p className="mt-1 text-[13px] text-muted">
                  One fixed price per plan, credits included.
                </p>
              </div>
              {tiers.map((t) => {
                const recommended = t.id === RECOMMENDED_TIER;
                const price = tierPrice(t);
                return (
                  <div key={t.id} className="px-2">
                    <div
                      className={`flex h-full flex-col rounded-[28px] bg-mist-2 p-6 text-left transition-[border-color,box-shadow,transform] duration-300 ease-out ${
                        recommended
                          ? "z-10 !bg-white shadow-[0_24px_60px_-24px_rgba(5,38,217,0.5)] ring-2 ring-accent lg:-translate-y-2"
                          : ""
                      }`}
                    >
                      <div className="flex min-h-[24px] items-center justify-between">
                        <span className="text-[15px] font-semibold capitalize text-ink">{t.name}</span>
                        <span
                          className={`rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold tracking-wide text-white transition-opacity duration-300 ${
                            recommended ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          MOST POPULAR
                        </span>
                      </div>
                      <p className="mt-1 text-[13px] text-muted">{tierBlurb(t.id)}</p>

                      <div className="mt-5">
                        <div className="flex items-end gap-1.5">
                          <span className="font-display text-[40px] font-light leading-none tracking-[-0.03em] text-ink">
                            {price != null ? money(price) : "–"}
                          </span>
                          {price != null && (
                            <span className="pb-1 text-[13px] text-muted">
                              / {cycle === "monthly" ? "mo" : "yr"}
                            </span>
                          )}
                        </div>
                        <p
                          className={`mt-1 text-[12px] text-muted transition-opacity duration-300 ${
                            price != null && cycle === "yearly" ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          {price != null && cycle === "yearly"
                            ? `≈ ${money(Math.round(price / 12))} / mo, billed yearly`
                            : " "}
                        </p>
                      </div>

                      <p className={`mt-2 text-[12px] ${recommended ? "font-medium text-accent" : "text-muted"}`}>
                        {[
                          t.monthly_credits_email ? `${num(t.monthly_credits_email)} email` : null,
                          t.monthly_credits_sms ? `${num(t.monthly_credits_sms)} SMS` : null,
                          t.monthly_credits_ai ? `${num(t.monthly_credits_ai)} AI` : null,
                          t.monthly_credits_voice ? `${num(t.monthly_credits_voice)} voice` : null,
                        ]
                          .filter(Boolean)
                          .join(" · ") || "Credits included"}
                        <span className="text-muted"> credits / mo</span>
                      </p>
                      <p className="mt-1 text-[12px] text-muted">
                        + top up SMS, Voice &amp; AI anytime
                      </p>

                      <a
                        href={checkoutHref({ kind: "plan", plan: isPlanId(t.id) ? t.id : "starter", cycle })}
                        className={`mt-6 inline-flex w-full items-center justify-center rounded-full py-3 text-[14.5px] font-medium transition-colors duration-300 ${
                          recommended ? "bg-accent text-white hover:bg-accent-ink" : "bg-white text-ink hover:bg-mist"
                        }`}
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                );
              })}

              {/* Feature sections flow directly under the cards, columns aligned */}
              {SECTIONS.map((section) => (
                <Fragment key={section.title}>
                  <div className="col-span-full border-t border-mist-line pb-3 pt-8 text-[12px] font-semibold uppercase tracking-wide text-muted">
                    {section.title}
                  </div>
                  {section.rows.map((row) => (
                    <Fragment key={row.label}>
                      <div className="border-t border-mist-line py-3.5 pr-8 text-[13px] text-body">
                        {row.label}
                      </div>
                      {tiers.map((t) => (
                        <div
                          key={t.id}
                          className={`border-t border-mist-line py-3.5 text-center ${
                            t.id === RECOMMENDED_TIER ? "bg-accent-soft/60" : ""
                          }`}
                        >
                          <CellView cell={row.cell(t)} />
                        </div>
                      ))}
                    </Fragment>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Credit top-up estimator: what N credits cost as a one-time top-up */}
        <div className="mt-16 rounded-[28px] bg-mist-2 p-7 sm:rounded-[34px] sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:max-w-sm">
              <span className="text-[12px] font-semibold uppercase tracking-wide text-muted">
                Estimate a credit top-up
              </span>
              <h3 className="mt-2 font-display text-[34px] font-light tracking-[-0.025em] text-ink">
                Need more credits?
              </h3>
              <p className="mt-2 text-[14px] leading-7 text-muted">
                SMS, voice, email and AI each have their own credit bucket, priced separately. Slide
                each one to the amount you want and buy them together in one payment — any time, no
                plan change. Top-up credits never expire while your subscription is active.
              </p>
            </div>

            <div className="w-full lg:max-w-md">
              {/* One slider per bucket — each priced separately, bought together */}
              <div className="flex flex-col gap-5">
                {buckets.map((b) => {
                  const value = amounts[b.credit_type] ?? 0;
                  const max = bucketMax(b);
                  const pct = Math.round((value / max) * 100);
                  const label = BUCKET_SHORT[b.credit_type] ?? b.credit_type;
                  return (
                    <div key={b.credit_type}>
                      <div className="flex items-baseline justify-between">
                        <span className="text-[13px] font-medium text-ink">
                          {label}{" "}
                          <span className="font-normal text-muted">
                            {value > 0 ? `${num(value)} credits` : "none"}
                          </span>
                        </span>
                        <span className="text-[15px] font-semibold text-ink">
                          {value > 0 ? money(bucketPrice(value, b)) : "–"}
                        </span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={max}
                        step={b.topup_step}
                        value={value}
                        onChange={(e) =>
                          setAmounts((prev) => ({
                            ...prev,
                            [b.credit_type]: snapTopUpAmount(Number(e.target.value), { ...b, max }),
                          }))
                        }
                        aria-label={`${label} top-up credits`}
                        className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full"
                        style={{
                          background: `linear-gradient(to right, #0526D9 0%, #0526D9 ${pct}%, #dde1ec ${pct}%, #dde1ec 100%)`,
                        }}
                      />
                      <div className="mt-1 text-[11px] text-faint">≈ {money(bucketPrice(1000, b))} / 1,000</div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex items-baseline justify-between border-t border-mist-line pt-4">
                <span className="text-[13px] font-medium text-body">
                  {topupItems.length > 0 ? `${num(totalCredits(topupItems))} credits · one-time` : "Pick at least one bucket"}
                </span>
                <span className="font-display text-[26px] font-light text-ink">{topupTotal}</span>
              </div>
              {topupItems.length > 0 ? (
                <a
                  href={checkoutHref({ kind: "topup", items: topupItems })}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-accent py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-accent-ink"
                >
                  Buy these credits for {topupTotal}
                </a>
              ) : (
                <span className="mt-4 inline-flex w-full cursor-not-allowed items-center justify-center rounded-full bg-line-strong py-3.5 text-[15px] font-medium text-white">
                  Buy credits
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CellView({ cell }: { cell: Cell }) {
  if (cell.kind === "check")
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent-soft">
        <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 text-accent">
          <path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  if (cell.kind === "dash") return <span className="text-faint">–</span>;
  return <span className="text-[13px] font-medium text-ink">{cell.value}</span>;
}
