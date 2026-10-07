import { pageMeta } from "@/lib/landing/seo";
import Footer from "@/components/landing/Footer";
import {
  MarketingHero,
  HeroAutomation,
  FeatureSection,
  StatsBand,
  SectionLabel,
  FAQ,
  type Feature,
} from "@/components/landing/marketing";

export const metadata = pageMeta(
  "Use cases",
  "How teams use SpeedIQ across e-commerce, real estate, education, fintech, SaaS, and agencies to run multi-channel customer messaging.",
  "/use-cases",
);

const without = [
  "A different tool for every channel",
  "Context lost between inbox tabs",
  "Per-seat fees as the team grows",
  "Reports stitched together by hand",
];

const withSpeedIQ = [
  "WhatsApp, Email & SMS in one thread",
  "Full history on every contact",
  "Channel-specific credit buckets",
  "Reporting for delivery and CRM activity",
];

const industries: Feature[] = [
  { title: "Education", body: "Send reminders, enrolment updates, and announcements that actually get opened.", icon: CapIcon },
  { title: "Fintech", body: "Deliver alerts, verification, and support on the channels customers already trust.", icon: BankIcon },
  { title: "SaaS", body: "Onboard users, drive activation, and re-engage trials with automated flows.", icon: CloudIcon },
  { title: "Agencies", body: "Run messaging for every client from one workspace, no per-seat fees as you scale.", icon: BriefcaseIcon },
  { title: "Hospitality", body: "Confirm bookings, send check-in details, and gather reviews automatically.", icon: BedIcon },
  { title: "Healthcare", body: "Appointment reminders and follow-ups on the channels patients actually read.", icon: HeartIcon },
];

export default function UseCasesPage() {
  return (
    <main>
      <MarketingHero
        active="Use cases"
        eyebrow="USE CASES"
        title="Every team, every"
        accent="industry."
        subtitle="Wherever customers expect a fast reply, SpeedIQ keeps the conversation in one place, from the first message to the final follow-up."
        secondaryCta={{ label: "See features", href: "/features" }}
        highlights={["Industry workflows", "One shared inbox", "Build your own playbook"]}
        visual={<HeroAutomation />}
      />

      <FeatureSection
        label="Who it's for"
        title="Built for any"
        accent="customer-facing team."
        intro="The same unified inbox, campaigns, and automations adapt to how each team works. Start from a workflow recipe or build your own."
        items={industries}
        gridClass="sm:grid-cols-2 lg:grid-cols-3"
      />

      {/* Before / after comparison, unique to this page */}
      <div className="w-full bg-white pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mb-8 px-2">
            <SectionLabel>The difference</SectionLabel>
            <h2 className="mt-5 max-w-xl font-display text-[32px] font-semibold leading-[1.1] tracking-tight text-[#11161f] sm:text-[38px]">
              From scattered tools to one workspace.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
            <div className="reveal rounded-2xl border border-[#f0dcd6] bg-[#fdf4f1] p-8">
              <span className="text-[11px] font-bold tracking-[0.12em] text-[#c0593f]">
                WITHOUT SPEEDIQ
              </span>
              <ul className="mt-5 flex flex-col gap-3.5">
                {without.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-[14px] text-[#7a5c52]">
                    <XMark className="mt-0.5 h-4 w-4 shrink-0 text-[#d8836a]" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal rounded-2xl border border-[#cfe3d6] bg-[#f1f9f4] p-8">
              <span className="text-[11px] font-bold tracking-[0.12em] text-[#1c7a47]">
                WITH SPEEDIQ
              </span>
              <ul className="mt-5 flex flex-col gap-3.5">
                {withSpeedIQ.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-[14px] text-[#2c5a40]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1c7a47]" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <StatsBand
        stats={[
          { value: "6", label: "Example industry workflows" },
          { value: "Multi", label: "Messaging and social channels" },
          { value: "CRM", label: "Lead capture and follow-up" },
          { value: "No-code", label: "Automations you configure" },
        ]}
      />

      <FAQ
        label="Use-case FAQ"
        title="Will it fit my team?"
        intro="How SpeedIQ adapts to different industries and workflows."
        items={[
          {
            q: "I run an agency, several clients. Does that work?",
            a: "Yes. Use projects as separate workspaces for brands or clients. There are no per-seat charges, and each plan has its own member limit.",
          },
          {
            q: "Can I start from a template for my industry?",
            a: "You can build workflows for reminders, onboarding, re-engagement, routing, or follow-up from scratch with the same automation tools.",
          },
          {
            q: "Which channels should my industry use?",
            a: "Many teams mix WhatsApp for conversations, email for depth, and SMS for urgency, adding voice or social where relevant. SpeedIQ keeps the activity together in one workspace.",
          },
          {
            q: "Is it compliant for regulated industries?",
            a: "SpeedIQ provides opt-out controls, email authentication tools, and the official WhatsApp Business API connection. You remain responsible for consent and applicable industry rules.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}

/* ---------------- Icons ---------------- */

function XMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M7 7l10 10M17 7L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function Check({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 9l9-4 9 4-9 4-9-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7 11v4c0 1.2 2.2 2.5 5 2.5s5-1.3 5-2.5v-4M21 9v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function BankIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 9l8-4 8 4M5 9v8M19 9v8M9 9v8M15 9v8M4 19h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CloudIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M7.5 18a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.7 1.3A3.6 3.6 0 0 1 17 18H7.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3.5" y="7.5" width="17" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3.5 12h17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function BedIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 8v9M3 12h18v5M21 17v-3a3 3 0 0 0-3-3h-7v3M7 11.5a1.5 1.5 0 1 0 0-.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 20s-7-4.3-7-9.5A3.8 3.8 0 0 1 12 7a3.8 3.8 0 0 1 7 3.5C19 15.7 12 20 12 20Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
