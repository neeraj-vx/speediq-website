/**
 * Shared plan feature-comparison definitions, used by both the marketing
 * /pricing calculator and the in-app billing page so the two never drift.
 *
 * Pure data/logic (no JSX) — each surface renders the cells in its own style
 * (marketing = hardcoded hex; dashboard = theme tokens).
 */

export interface PlanShape {
  id: string;
  name: string;
  max_contacts: number | null;
  max_seats: number | null;
  max_campaigns_per_month: number | null;
  analytics_retention_days: number | null;
  channels: Record<string, boolean> | null;
  features: Record<string, unknown> | null;
}

export type FeatureCell = { kind: "check" } | { kind: "dash" } | { kind: "text"; value: string };

const num = (n: number) => n.toLocaleString("en-US");
const check: FeatureCell = { kind: "check" };
const dash: FeatureCell = { kind: "dash" };
const text = (v: string): FeatureCell => ({ kind: "text", value: v });
const boolCell = (v: unknown): FeatureCell => (v ? check : dash);

export interface FeatureRow {
  /** Stable slug for i18n (dashboard translates via billing.planFeatures.rows.<key>). */
  key: string;
  label: string;
  cell: (p: PlanShape) => FeatureCell;
}
export interface FeatureSection {
  /** Stable slug for i18n (billing.planFeatures.sections.<key>). */
  key: string;
  title: string;
  rows: FeatureRow[];
}

export const PLAN_SECTIONS: FeatureSection[] = [
  {
    key: "limits",
    title: "Limits",
    rows: [
      { key: "contacts", label: "Contacts", cell: (p) => text(p.max_contacts == null ? "Unlimited" : num(p.max_contacts)) },
      { key: "teamMembers", label: "Team members", cell: (p) => text(p.max_seats == null ? "Unlimited" : String(p.max_seats)) },
      {
        key: "campaignsPerMonth",
        label: "Campaigns / month",
        cell: (p) => text(p.max_campaigns_per_month == null ? "Unlimited" : num(p.max_campaigns_per_month)),
      },
      {
        key: "analyticsRetention",
        label: "Analytics retention",
        cell: (p) => text(p.analytics_retention_days == null ? "Unlimited" : `${p.analytics_retention_days} days`),
      },
    ],
  },
  {
    key: "channels",
    title: "Channels",
    rows: [
      { key: "whatsapp", label: "WhatsApp", cell: (p) => boolCell(p.channels?.whatsapp) },
      { key: "email", label: "Email", cell: (p) => boolCell(p.channels?.email) },
      { key: "sms", label: "SMS", cell: (p) => boolCell(p.channels?.sms) },
      { key: "voice", label: "Voice", cell: (p) => boolCell(p.channels?.voice) },
    ],
  },
  {
    key: "features",
    title: "Features",
    // Only rows the product actually delivers. Plan-level flags that nothing
    // enforces or implements (api, custom_roles, audit_log, sla, custom_branding,
    // automation tiers) are deliberately not advertised here.
    rows: [
      { key: "liveInbox", label: "Unified live inbox", cell: (p) => boolCell(p.features?.live_inbox) },
      // AI is gated only by the AI credit bucket, never by plan.
      { key: "aiAgent", label: "AI agent & inbox AI (uses AI credits)", cell: () => check },
      // Every plan gets the same builder (triggers, branching, delays, webhooks).
      { key: "automations", label: "Workflow automations", cell: (p) => boolCell(p.features?.automations) },
      { key: "maskedAgent", label: "Masked agent role", cell: () => check },
      { key: "customEmailDomain", label: "Custom email domain", cell: (p) => boolCell(p.features?.custom_email_domain) },
    ],
  },
];

export function tierBlurb(id: string): string {
  if (id === "pro") return "Best for growing teams.";
  if (id === "business") return "Best for large teams.";
  return "Best for getting started.";
}
