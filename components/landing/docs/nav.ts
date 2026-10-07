/**
 * Docs navigation metadata, the single source of truth for the docs sidebar,
 * the /docs index, and slug validation. Pure data (no JSX), safe to import in
 * the client sidebar without pulling article bodies into the client bundle.
 *
 * To add a doc: add an item here, then register its body in
 * components/landing/docs/articles.tsx under the same slug.
 */

export interface DocItem {
  slug: string;
  group: string;
  title: string;
  summary: string;
}

/** Sidebar / index group order. */
export const DOC_GROUPS = [
  "Getting started",
  "Channels & inbox",
  "CRM",
  "Automations",
  "Billing",
  "Team & settings",
  "Administration",
] as const;

export const DOC_ITEMS: DocItem[] = [
  // Getting started
  {
    slug: "overview",
    group: "Getting started",
    title: "What is SpeedIQ",
    summary: "The whole platform at a glance, channels, inbox, CRM, campaigns, automations, and billing.",
  },
  {
    slug: "projects",
    group: "Getting started",
    title: "Projects & the dashboard",
    summary: "Projects are your workspaces. Switch between them and read the dashboard overview.",
  },

  // Channels & inbox
  {
    slug: "inbox",
    group: "Channels & inbox",
    title: "Inbox (unified)",
    summary: "One inbox for every channel — WhatsApp, Email, and social DMs — with a channel rail, archive, and star.",
  },
  {
    slug: "social",
    group: "Channels & inbox",
    title: "Social (Facebook, Instagram)",
    summary: "Capture ad leads, comments, and DMs from Facebook and Instagram, plus Google Ads lead forms — with AI auto-reply.",
  },
  {
    slug: "whatsapp",
    group: "Channels & inbox",
    title: "WhatsApp",
    summary: "Connect WhatsApp Business, manage templates, and chat 1:1 within the 24-hour window.",
  },
  {
    slug: "email",
    group: "Channels & inbox",
    title: "Email",
    summary: "Set up sending, manage subscribers and templates, and reply to inbound email in-platform.",
  },
  {
    slug: "sms",
    group: "Channels & inbox",
    title: "SMS",
    summary: "Connect Twilio, manage senders and contacts, chat 1:1, and read SMS analytics.",
  },
  {
    slug: "voice",
    group: "Channels & inbox",
    title: "Voice",
    summary: "Call leads and contacts from the in-app dialer, with logging and recordings.",
  },
  {
    slug: "campaigns",
    group: "Channels & inbox",
    title: "Campaigns",
    summary: "Send broadcasts on WhatsApp, email, or SMS, audience, content, scheduling, and delivery.",
  },
  {
    slug: "booking",
    group: "Channels & inbox",
    title: "Booking pages",
    summary: "Share a booking page, let invitees pick a slot in their own timezone, and turn every booking into a lead with reminders and calendar invites.",
  },

  // CRM
  {
    slug: "pipelines",
    group: "CRM",
    title: "Pipelines & stages",
    summary: "Model your sales process as stages, run more than one pipeline, and track won/lost.",
  },
  {
    slug: "leads",
    group: "CRM",
    title: "Leads",
    summary: "The lead record: owner, value, score, tags, custom fields, and the cross-channel timeline.",
  },
  {
    slug: "contacts",
    group: "CRM",
    title: "Contacts",
    summary: "The unified people directory that merges each person’s WhatsApp, email, SMS, and social identities.",
  },
  {
    slug: "capturing-leads",
    group: "CRM",
    title: "Capturing leads",
    summary: "Bring leads in from forms, social & ad platforms, comments, webhooks, prospecting, and inbound messages.",
  },
  {
    slug: "forms",
    group: "CRM",
    title: "Forms",
    summary: "Build no-code forms with logic, validation, and file uploads; every submission lands in your CRM as a lead.",
  },
  {
    slug: "lead-routing",
    group: "CRM",
    title: "Lead routing",
    summary: "Automatically assign new leads to the right person with round-robin, weighted, or fixed rules.",
  },

  // Automations
  {
    slug: "automations-overview",
    group: "Automations",
    title: "How automations work",
    summary: "The trigger → conditions → actions model, pipeline scope, and how rules run.",
  },
  {
    slug: "triggers",
    group: "Automations",
    title: "Triggers",
    summary: "Every event that can start an automation, and how to narrow each one.",
  },
  {
    slug: "conditions",
    group: "Automations",
    title: "Conditions",
    summary: "Filter which leads an automation runs for using match-all / match-any rules.",
  },
  {
    slug: "actions",
    group: "Automations",
    title: "Actions",
    summary: "Everything an automation can do, assign, tag, move stage, message, task, webhook, AI reply.",
  },
  {
    slug: "ai-auto-reply",
    group: "Automations",
    title: "AI auto-reply",
    summary: "Draft or send AI replies to inbound messages and social DMs, with models, guardrails, and billing.",
  },
  {
    slug: "run-history",
    group: "Automations",
    title: "Run history & troubleshooting",
    summary: "See what fired, why a rule didn’t match, and the most common fixes.",
  },

  // Billing
  {
    slug: "plans-credits",
    group: "Billing",
    title: "Plans, credits & top-ups",
    summary: "Plan tiers, how credits work, per-message costs by country, top-ups, and auto-recharge.",
  },
  {
    slug: "usage-limits",
    group: "Billing",
    title: "Usage & limits",
    summary: "Track consumption, and what happens when you hit a plan limit or run out of credits.",
  },

  // Team & settings
  {
    slug: "team",
    group: "Team & settings",
    title: "Team & roles",
    summary: "Invite members and understand each role, including the masked agent role that hides PII.",
  },
  {
    slug: "settings",
    group: "Team & settings",
    title: "Settings",
    summary: "Where you configure each channel, tags, canned messages, and CRM behavior.",
  },

  // Administration
  {
    slug: "admin",
    group: "Administration",
    title: "Admin panel",
    summary: "For platform admins: plans, credit weights, the country rate card, users, transactions, and the audit log.",
  },
];

export function getDocItem(slug: string): DocItem | undefined {
  return DOC_ITEMS.find((d) => d.slug === slug);
}

/** Items grouped by their group, in DOC_GROUPS order. */
export function docsByGroup(): { group: string; items: DocItem[] }[] {
  return DOC_GROUPS.map((group) => ({
    group,
    items: DOC_ITEMS.filter((d) => d.group === group),
  })).filter((g) => g.items.length > 0);
}

/** Previous / next item in reading order, for article footers. */
export function adjacentDocs(slug: string): { prev?: DocItem; next?: DocItem } {
  const i = DOC_ITEMS.findIndex((d) => d.slug === slug);
  if (i === -1) return {};
  return { prev: DOC_ITEMS[i - 1], next: DOC_ITEMS[i + 1] };
}
