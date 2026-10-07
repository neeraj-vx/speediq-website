/**
 * Public pricing numbers. This site has no database: the plans, credit prices
 * and per-country rates are a static snapshot in content/pricing.json, edited
 * when plans change in the app's admin. The JSON mirrors the app's
 * subscription_plans / credit_type_pricing / channel_country_rates tables.
 */

import snapshot from "@/content/pricing.json";

import type { CountryCreditRate } from "./country-credits";
import type { CreditType } from "./config";
import type { PricingTier } from "@/components/landing/PricingCalculator";

export interface CreditTypeConfig {
  credit_type: CreditType;
  label: string;
  /** USD price of one credit, in cents (fractional, e.g. 0.18). */
  credit_value_usd_cents: number;
  min_topup: number;
  topup_step: number;
  sort_order: number;
  active: boolean;
}

export interface PricingData {
  generatedAt: string;
  tiers: PricingTier[];
  creditTypes: CreditTypeConfig[];
  /** Credits one SMS segment / voice minute burns per destination, cheapest first. */
  countryRates: CountryCreditRate[];
  /** Credits one sent email costs. */
  emailCredits: number;
  /** Credits one AI action costs. */
  aiCredits: number;
}

export const PRICING = snapshot as PricingData;
