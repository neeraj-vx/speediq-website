/* Homepage before/after + getting-started sections. Photo-forward / borderless:
   real imagery carries the contrast, with a few clean floating channel chips. */

import Image from "next/image";
import {
  WhatsAppIcon,
  EmailIcon,
  SmsIcon,
} from "@/components/landing/brand-icons";

export default function CaseStudySections() {
  return (
    <section id="how-it-works" className="mx-auto w-full max-w-7xl space-y-24 px-6 lg:space-y-36">
      {/* Before & after */}
      <div>
        <div className="reveal max-w-2xl">
          <h2 className="font-display text-[38px] leading-[1.02] tracking-[-0.025em] text-[#0d1220] sm:text-[52px]">
            From channel chaos to{" "}
            <span className="text-[#0526D9]">one clear workspace.</span>
          </h2>
          <p className="mt-5 text-[16px] leading-[1.65] text-[#565d6b]">
            Every customer, campaign and conversation in a single view your whole
            team can trust. No tab-switching, no blind spots.
          </p>
        </div>

        <div className="reveal mt-10 grid items-stretch gap-4 lg:grid-cols-2">
          {/* Problem: channels scattered across separate tools */}
          <div className="flex flex-col rounded-[28px] bg-[#F5F6FB] p-7 sm:p-9">
            <span className="text-[13px] font-semibold uppercase tracking-wide text-[#9aa0ab]">
              The problem
            </span>
            <div className="relative mt-6 flex min-h-[190px] flex-1 items-center justify-center overflow-hidden rounded-2xl">
              <span className="absolute left-6 top-7 inline-flex -rotate-[6deg] items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-[#25D366] shadow-[0_8px_24px_-10px_rgba(16,24,40,0.35)]">
                <WhatsAppIcon className="h-3.5 w-3.5" /> WhatsApp
              </span>
              <span className="absolute right-6 top-12 inline-flex rotate-[5deg] items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-[#4a7bc9] shadow-[0_8px_24px_-10px_rgba(16,24,40,0.35)]">
                <EmailIcon className="h-3.5 w-3.5" /> Email
              </span>
              <span className="absolute bottom-8 left-12 inline-flex rotate-[3deg] items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-[#e5b32f] shadow-[0_8px_24px_-10px_rgba(16,24,40,0.35)]">
                <SmsIcon className="h-3.5 w-3.5" /> SMS
              </span>
              <span className="absolute bottom-7 right-10 inline-flex -rotate-[4deg] items-center rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-[#8a8f9b] shadow-[0_8px_24px_-10px_rgba(16,24,40,0.35)]">
                + social & voice
              </span>
            </div>
            <p className="mt-7 text-[16px] leading-[1.65] text-[#565d6b]">
              Most teams run a different tool for every channel. WhatsApp in one
              tab, email in another, SMS somewhere else. Conversations get lost,
              campaigns overlap, and no one sees the full history of a single
              customer.
            </p>
          </div>

          {/* Solution: one unified inbox */}
          <div className="flex flex-col rounded-[28px] bg-[#0526D9] p-7 text-white sm:p-9">
            <span className="text-[13px] font-semibold uppercase tracking-wide text-white/60">
              The solution
            </span>
            <div className="relative mt-6 min-h-[190px] flex-1 overflow-hidden rounded-2xl bg-[#0a1c9e]">
              <Image
                src="/landing/solution-team-v2.jpg"
                alt="A team working every channel from one shared workspace"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0526D9]/70 to-transparent" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-[#11161f] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                All channels · one inbox
              </span>
              <span className="absolute bottom-4 right-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-[#0526D9] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]">
                Single source of truth
              </span>
            </div>
            <p className="mt-7 text-[16px] leading-[1.65] text-white/85">
              SpeedIQ brings every channel, campaign and contact into one
              workspace. A shared inbox, a built-in CRM and reporting give
              your team a single source of truth.
            </p>
          </div>
        </div>
      </div>

      {/* Getting started */}
      <div>
        <div className="reveal grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          {/* Left: header + photo, spread top-to-bottom */}
          <div className="flex flex-col">
            <h2 className="font-display text-[38px] leading-[1.02] tracking-[-0.025em] text-[#0d1220] sm:text-[52px]">
              Start with the workflow you have today.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.65] text-[#565d6b]">
              Connect channels, bring in contacts, and build from the product surfaces your team already uses.
            </p>
            <div className="relative mt-8 min-h-[240px] flex-1 overflow-hidden rounded-[28px] bg-[#e8eaf0]">
              <Image
                src="/landing/onboarding-handshake-v2.jpg"
                alt="Getting started with SpeedIQ"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right: steps */}
          <div className="space-y-4">
            <Step
              n="01"
              title="Connect your channels"
              tags={["WhatsApp", "Email", "SMS"]}
              body="Connect WhatsApp, Email, SMS, voice, and supported social accounts from the dashboard settings."
            />
            <Step
              n="02"
              title="Bring in your contacts"
              tags={["CSV import", "CRM pipeline", "Custom fields"]}
              body="Import contacts or capture leads from forms, ads, webhooks, prospecting, and inbound conversations."
            />
            <Step
              n="03"
              title="Launch and automate"
              tags={["Campaigns", "No-code flows", "Delivery + CRM reports"]}
              body="Send a campaign, route follow-ups, and review delivery, engagement, and CRM reports as activity is recorded."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

function Step({
  n,
  title,
  tags,
  body,
}: {
  n: string;
  title: string;
  tags: string[];
  body: string;
}) {
  return (
    <div className="rounded-[28px] bg-[#F5F6FB] p-6 sm:p-7">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white font-display text-[16px] font-semibold text-[#0526D9]">
          {n}
        </span>
        <h3 className="text-[19px] font-semibold text-[#11161f]">{title}</h3>
      </div>
      <p className="mt-4 text-[14.5px] leading-[1.6] text-[#7a808b]">{body}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-white px-3 py-1 text-[12px] font-medium text-[#475065]"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
