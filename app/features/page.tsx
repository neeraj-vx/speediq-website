import { pageMeta } from "@/lib/landing/seo";
import Footer from "@/components/landing/Footer";
import {
  MarketingHero,
  SectionLabel,
  FeatureSection,
  StatsBand,
  FAQ,
  gradientCell,
  type Feature,
} from "@/components/landing/marketing";

export const metadata = pageMeta(
  "Features",
  "Everything in SpeedIQ, a unified inbox across WhatsApp, Email, SMS, Voice and social (Instagram, Facebook), plus CRM, booking, forms, campaigns, AI automations, and reporting.",
  "/features",
);

const channels = [
  {
    name: "Unified Inbox",
    href: "/features/inbox",
    blurb: "Every channel in one shared thread, with assignment, notes, and merged contact history.",
    icon: InboxIcon,
    color: "#16557a",
  },
  {
    name: "Social",
    href: "/features/social",
    blurb: "Capture leads, comments & DMs from Facebook & Instagram, plus Google lead forms, with AI-assisted replies.",
    icon: SocialIcon,
    color: "#a033ff",
  },
  {
    name: "Email",
    href: "/features/email",
    blurb: "Design, send, and automate email campaigns with templates, segments, and deliverability built in.",
    icon: MailIcon,
    color: "#4a7bc9",
  },
  {
    name: "SMS",
    href: "/features/sms",
    blurb: "Reach customers instantly with reliable, two-way SMS, broadcasts, alerts, and replies in one place.",
    icon: ChatIcon,
    color: "#e5b32f",
  },
  {
    name: "WhatsApp",
    href: "/features/whatsapp",
    blurb: "Run WhatsApp Business at scale, approved templates, rich media, and conversational automations.",
    icon: WhatsAppIcon,
    color: "#217b4c",
  },
  {
    name: "Voice",
    href: "/features/voice",
    blurb: "Call leads from an in-app dialer, with call details logged and optional recordings on the contact timeline.",
    icon: PhoneIcon,
    color: "#d97706",
  },
];

const capabilities: Feature[] = [
  { title: "Campaigns", body: "Broadcast to audiences across WhatsApp, Email, or SMS, schedule sends, and review delivery status per recipient.", icon: MegaphoneIcon },
  { title: "Automations", body: "Trigger-based, no-code flows with branching logic, delays, tasks, messages, AI replies, and webhooks.", icon: BoltIcon },
  { title: "Templates", body: "Reusable, on-brand message templates, including approved WhatsApp templates, shared across the team.", icon: TemplateIcon },
  { title: "Segments", body: "Group contacts by attributes and behavior, then target the right people on the right channel.", icon: FilterIcon },
  { title: "Analytics", body: "Review delivery, opens, clicks, replies, CRM sources, revenue, and credit usage in reporting views.", icon: ChartIcon },
  { title: "Team & roles", body: "Invite teammates without per-seat charges, within your plan's member limit, with set roles, a masked agent role, and assignment.", icon: UsersIcon },
  { title: "Lead capture & routing", body: "Bring in leads from forms, ads, comments, webhooks, prospecting, and inbound messages, then route them automatically.", icon: FormIcon },
  { title: "AI guardrails", body: "Let AI draft or auto-send replies with business hours, rate limits, caps, and human hand-off.", icon: BoltIcon },
];

const captureCards = [
  {
    name: "AI Prospecting",
    href: "/features/prospecting",
    blurb: "Scan Google Maps by business type and area to source local leads, enrich and dedupe them, then import them into your pipeline.",
    icon: MapIcon,
    color: "#0526D9",
  },
  {
    name: "Forms",
    href: "/features/forms",
    blurb: "Build on-brand, no-code forms with logic and file uploads. Every submission becomes a lead in your CRM.",
    icon: FormIcon,
    color: "#7c3aed",
  },
  {
    name: "Booking",
    href: "/features/booking",
    blurb: "Share a booking page and let customers pick a slot around your availability. Bookings land as leads, with reminders.",
    icon: CalendarIcon,
    color: "#0d9488",
  },
  {
    name: "Social & Ad Sync",
    href: "/features/social",
    blurb: "Lead ads, comments, and DMs from Facebook & Instagram, plus Google lead forms, flow into your CRM.",
    icon: SocialIcon,
    color: "#a033ff",
  },
  {
    name: "Webhooks & imports",
    href: "/features/forms",
    blurb: "Capture leads through hosted or embedded forms, CSV imports, inbound messages, and project-specific webhook sources.",
    icon: FormIcon,
    color: "#0f766e",
  },
];

const scaleCards = [
  {
    name: "CRM & Pipeline",
    href: "/features/crm",
    blurb: "Unified contacts, drag-and-drop pipelines, lead scoring, and a single cross-channel timeline for every person.",
    icon: PipelineIcon,
    color: "#0526D9",
  },
  {
    name: "Automations & AI",
    href: "/features/automations",
    blurb: "No-code workflows plus AI auto-reply, route leads, follow up, and answer DMs automatically.",
    icon: BoltIcon,
    color: "#16557a",
  },
  {
    name: "Analytics & Reporting",
    href: "/features/analytics",
    blurb: "Delivery, opens, clicks and replies across core channels, plus sales and revenue reports in your currency.",
    icon: ChartIcon,
    color: "#4f46e5",
  },
  {
    name: "Team & Permissions",
    href: "/features/team",
    blurb: "Invite teammates with no per-seat fees, set roles, and use the masked agent role to hide contact PII.",
    icon: UsersIcon,
    color: "#334155",
  },
];

export default function FeaturesPage() {
  return (
    <main>
      <MarketingHero
        active="Features"
        eyebrow="FEATURES"
        title="Everything you need to"
        accent="run every channel."
        subtitle="A unified inbox at the center, messaging and social channels around it, and the CRM, booking, forms, campaigns, automations, and reports that tie them together."
        secondaryCta={{ label: "View pricing", href: "/pricing" }}
        highlights={[
          "Unified inbox & CRM",
          "Booking, forms & prospecting",
          "Automations & reporting",
        ]}
      />

      {/* Channel cards, link to each channel sub-page */}
      <div className="w-full bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mb-8 px-2">
            <SectionLabel>Channels</SectionLabel>
            <h2 className="mt-5 max-w-xl font-display text-[32px] font-semibold leading-[1.1] tracking-tight text-[#11161f] sm:text-[38px]">
              One inbox, every way to reach people.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {channels.map(({ name, href, blurb, icon: Icon, color }) => (
              <a
                key={name}
                href={href}
                className={`reveal group flex flex-col rounded-2xl border border-[#e3e7f0] ${gradientCell} p-7 shadow-sm transition-colors hover:border-[#c3c9d4] lg:p-8`}
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-[#e3e7f0] bg-white shadow-sm"
                  style={{ color }}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <h3 className="mt-6 flex items-center gap-1.5 text-[22px] font-semibold text-[#11161f]">
                  {name}
                  <span className="text-[#9aa0ac] transition-transform group-hover:translate-x-0.5">
                    ↗
                  </span>
                </h3>
                <p className="mt-3 max-w-[420px] text-[13px] leading-[1.7] text-[#7a808b]">
                  {blurb}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Capture & grow: the lead-gen feature pages */}
      <div className="w-full bg-white pb-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mb-8 px-2">
            <SectionLabel>Capture &amp; grow</SectionLabel>
            <h2 className="mt-5 max-w-xl font-display text-[32px] font-semibold leading-[1.1] tracking-tight text-[#11161f] sm:text-[38px]">
              Fill the pipeline from every source.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {captureCards.map(({ name, href, blurb, icon: Icon, color }) => (
              <a
                key={name}
                href={href}
                className={`reveal group flex flex-col rounded-2xl border border-[#e3e7f0] ${gradientCell} p-7 shadow-sm transition-colors hover:border-[#c3c9d4] lg:p-8`}
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-[#e3e7f0] bg-white shadow-sm"
                  style={{ color }}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <h3 className="mt-6 flex items-center gap-1.5 text-[20px] font-semibold text-[#11161f]">
                  {name}
                  <span className="text-[#9aa0ac] transition-transform group-hover:translate-x-0.5">
                    ↗
                  </span>
                </h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-[#7a808b]">
                  {blurb}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Run & scale: the CRM, automation & reporting feature pages */}
      <div className="w-full bg-white pb-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mb-8 px-2">
            <SectionLabel>Run &amp; scale</SectionLabel>
            <h2 className="mt-5 max-w-xl font-display text-[32px] font-semibold leading-[1.1] tracking-tight text-[#11161f] sm:text-[38px]">
              Then work every deal on autopilot.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {scaleCards.map(({ name, href, blurb, icon: Icon, color }) => (
              <a
                key={name}
                href={href}
                className={`reveal group flex flex-col rounded-2xl border border-[#e3e7f0] ${gradientCell} p-7 shadow-sm transition-colors hover:border-[#c3c9d4] lg:p-8`}
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-[#e3e7f0] bg-white shadow-sm"
                  style={{ color }}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <h3 className="mt-6 flex items-center gap-1.5 text-[20px] font-semibold text-[#11161f]">
                  {name}
                  <span className="text-[#9aa0ac] transition-transform group-hover:translate-x-0.5">
                    ↗
                  </span>
                </h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-[#7a808b]">
                  {blurb}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <FeatureSection
        label="And everything around them"
        title="The toolkit that ties"
        accent="it together."
        intro="Campaigns, automations, and reporting connect the channels, leads, and workflows your team runs every day."
        items={capabilities}
        gridClass="sm:grid-cols-2 lg:grid-cols-3"
      />

      <StatsBand
        stats={[
          { value: "1 place", label: "Channels, CRM & campaigns" },
          { value: "Core", label: "Messaging channel reports" },
          { value: "CRM", label: "Sources, pipeline & revenue" },
          { value: "0", label: "Per-seat fees" },
        ]}
      />

      <FAQ
        title="Feature questions, answered."
        intro="A quick tour of what's included and how it fits together."
        items={[
          {
            q: "Is the unified inbox included on every plan?",
            a: "Yes. The shared inbox with assignment, internal notes, and merged contact history is core to SpeedIQ and available on every plan.",
          },
          {
            q: "Do campaigns and automations work across all channels?",
            a: "They share the same workflow concepts across WhatsApp, Email, and SMS, with channel-specific rules such as WhatsApp templates and messaging windows.",
          },
          {
            q: "Can I invite my whole team?",
            a: "There are no per-seat charges. The number of members still follows the member limit on the selected plan.",
          },
          {
            q: "How current is the analytics data?",
            a: "The reporting views read the delivery, engagement, CRM, and credit data recorded by the platform. Refresh a report to see the latest available activity.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}

/* ---------------- Icons ---------------- */

function InboxIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 13l2.5-7h11L20 13v5H4v-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 13h4l1.5 2h5L16 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function SocialIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="6" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.1 10.9l6.8-3.8M8.1 13.1l6.8 3.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function MapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 4v14M15 6v14" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4.5 7.5l7.5 5 7.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 5.5h14v10H9l-4 3.5V5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 10.5h6M9 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 19l1.1-3.3A7 7 0 1 1 9 18.2L5 19Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9.2 9.4c-.2 1 .4 2.2 1.3 3.1.9.9 2.1 1.5 3.1 1.3.4-.1.7-.5.6-.9l-.2-.7a.6.6 0 0 0-.7-.4l-.9.2-1.3-1.3.2-.9a.6.6 0 0 0-.4-.7l-.7-.2c-.4-.1-.8.2-.9.6Z" fill="currentColor" />
    </svg>
  );
}
function MegaphoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 10v4l9 4V6l-9 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M13 7.5l5-2v13l-5-2M6 14v3.5c0 .8.7 1.5 1.5 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function BoltIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13 2.5 5.5 13H11l-1 8.5L18.5 11H13l1-8.5Z" />
    </svg>
  );
}
function TemplateIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="4" width="16" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 9h16M9 9v11" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function FilterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 6h16l-6 7v5l-4-2v-3L4 6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function ChartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 4v16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 14l3-3 2.5 2.5L19 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function UsersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 19c0-2.8 2.2-5 5-5s5 2.2 5 5M15 6.5a3 3 0 0 1 0 5.5M20 19c0-2.2-1.3-4-3.5-4.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M7 3.8a1.4 1.4 0 0 1 1.4.85l1.1 2.6a1.4 1.4 0 0 1-.32 1.6l-.95.9a10.5 10.5 0 0 0 4.2 4.2l.9-.95a1.4 1.4 0 0 1 1.6-.32l2.6 1.1a1.4 1.4 0 0 1 .85 1.4v2.1a1.6 1.6 0 0 1-1.75 1.6C9.8 20.3 3.7 14.2 3.4 6.15A1.6 1.6 0 0 1 5 4.4h2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function FormIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4.5" y="4" width="15" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 9h8M8 12.5h8M8 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="5.5" width="16" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 9.5h16M8 3.5v4M16 3.5v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function PipelineIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3.5" y="4.5" width="4" height="15" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="10" y="4.5" width="4" height="10" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="16.5" y="4.5" width="4" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
