import { pageMeta } from "@/lib/landing/seo";
import Footer from "@/components/landing/Footer";
import {
  MarketingHero,
  FeatureRows,
  FeatureSection,
  StatsBand,
  GaugeCard,
  BarsCard,
  StatusCard,
  FAQ,
  type Feature,
} from "@/components/landing/marketing";

export const metadata = pageMeta(
  "Automations & AI",
  "A no-code workflow builder plus AI auto-reply on Google Gemini by default, route leads, follow up, and answer DMs automatically, with a human hand-off anytime.",
  "/features/automations",
);

const capabilities: Feature[] = [
  { title: "Triggers & conditions", body: "Start a flow on a new lead, an inbound message, a stage change, or a tag, then branch on any field with conditions and delays.", icon: BranchIcon },
  { title: "AI auto-reply", body: "Add an AI step to draft or send on-brand replies across WhatsApp and social DMs, inside each platform's messaging window.", icon: SparkIcon },
  { title: "Lead routing", body: "Round-robin, weighted, or fixed assignment puts new leads with the right rep when they arrive, with the assignment recorded in the CRM.", icon: RouteIcon },
  { title: "Actions & webhooks", body: "Assign, tag, move stage, send a message, create a task, or call a webhook, chain as many actions as a flow needs.", icon: BoltIcon },
  { title: "AI guardrails", body: "Set draft or auto-send mode, business hours, rate limits, daily caps, and a human fallback so automated replies stay controlled.", icon: SparkIcon },
  { title: "Knowledge & instructions", body: "Ground replies in recent conversation, your tone, custom instructions, and project knowledge instead of asking the AI to guess.", icon: BoltIcon },
];

export default function AutomationsPage() {
  return (
    <main>
      <MarketingHero
        active="Features"
        eyebrow="FEATURES · AUTOMATIONS & AI"
        title="Automations that reply,"
        accent="in your voice."
        subtitle="A visual, no-code workflow builder plus AI auto-reply on Google Gemini by default, or OpenAI, Claude, or Grok if you switch. Route leads, send follow-ups, and answer supported messages with guardrails and human hand-off."
        secondaryCta={{ label: "All features", href: "/features" }}
        highlights={["No-code flow builder", "AI auto-reply", "Switch models per project"]}
        visual={<FlowCard />}
      />

      <FeatureRows
        label="How it works"
        rows={[
          {
            no: "01",
            eyebrow: "BUILD",
            title: "Drag, connect, done",
            body: "A visual builder with triggers, branching conditions, and delays. Add actions, assign, tag, move stage, message, create a task, call a webhook, or run AI, and review each run in history.",
            mockup: (
              <StatusCard
                title="Flow · New lead follow-up"
                sub="3 triggers · 6 actions"
                tag="ACTIVE"
                progressLabel="Runs this week"
                progressValue="1,204"
                pct={76}
                primaryBtn="Open flow"
              />
            ),
          },
          {
            no: "02",
            eyebrow: "AI REPLY",
            title: "AI that answers like your team",
            body: "Add an AI action and it drafts or sends replies across supported channels inside their messaging rules, on Google Gemini by default or an OpenAI, Claude, or Grok model if you switch models for the project. A human can take over at any moment.",
            reverse: true,
            mockup: (
              <GaugeCard
                label="MESSAGES AUTO-HANDLED"
                value="Configured"
                sub="Draft or auto-send"
                footLeft="Window + hand-off"
                footRight="Guarded"
                pct={0.71}
              />
            ),
          },
          {
            no: "03",
            eyebrow: "ROUTE",
            title: "Every lead to the right rep",
            body: "Round-robin, weighted, or fixed routing assigns new leads when they arrive from a chat, ad, form, webhook, booking, or prospecting source, then automations can follow up.",
            mockup: (
              <BarsCard
                label="LEAD ROUTING · THIS WEEK"
                bars={[
                  { name: "Aisha", pct: 58, color: "#0526D9" },
                  { name: "Marco", pct: 47, color: "#60a5fa" },
                  { name: "Priya", pct: 39, color: "#93c5fd" },
                ]}
              />
            ),
          },
        ]}
      />

      <FeatureSection
        label="Automation toolkit"
        title="Put the busywork"
        accent="on autopilot."
        intro="Everything that keeps a lead moving, captured, answered, routed, and followed up, with channel-specific rules respected."
        items={capabilities}
      />

      <StatsBand
        stats={[
          { value: "No-code", label: "Visual flow builder" },
          { value: "Gemini", label: "By default · OpenAI, Claude or Grok" },
          { value: "Guarded", label: "Hours, caps & rate limits" },
          { value: "Anytime", label: "Human hand-off" },
        ]}
      />

      <FAQ
        label="Automations FAQ"
        title="Automations & AI, answered."
        intro="How the workflow builder and AI auto-reply fit into your day."
        items={[
          {
            q: "Which AI models can I use?",
            a: "Google Gemini by default. Each project can switch to an OpenAI (GPT-4o), Anthropic (Claude), or xAI (Grok) model instead. There's no API key to set up; AI actions use your plan's AI credits.",
          },
          {
            q: "Does the AI send automatically or just draft?",
            a: "Both, and you decide per flow. It can draft a reply for an agent to approve, or send automatically inside the platform's messaging window, with a human hand-off available at any point.",
          },
          {
            q: "What can an automation actually do?",
            a: "Trigger on new leads, inbound messages, stage changes, or tags; branch on any field with conditions and delays; then assign, tag, move a stage, send a message, create a task, reply with AI, or call a webhook.",
          },
          {
            q: "How does lead routing work?",
            a: "Choose round-robin, weighted, or fixed assignment per pipeline. New leads from any source, chat, ad, form, or map scan, are assigned instantly, and every run is logged in the history.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}

/* ---------------- Hero visual: automation flow + AI reply mock ---------------- */

function FlowCard() {
  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      <div
        className="pointer-events-none absolute -inset-8 rounded-[40px]"
        style={{ background: "radial-gradient(55% 55% at 60% 15%, #60a5fa30, transparent 72%)" }}
      />
      <div className="absolute -top-4 left-6 right-6 h-16 rounded-2xl bg-black/[0.04]" />
      <div className="absolute -top-2 left-3 right-3 h-16 rounded-2xl bg-black/[0.06]" />

      <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_36px_90px_-28px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
        {/* header */}
        <div className="flex items-center justify-between border-b border-[#f0f2f5] px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0526D9] text-white">
              <SparkIcon className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className="text-[13px] font-semibold text-[#11161f]">Auto-reply flow</div>
              <div className="text-[11px] text-[#9ca3af]">Instagram DM · connected</div>
            </div>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-[#eef7f1] px-2.5 py-1 text-[10px] font-semibold text-[#1c7a47]">
            <span className="leaf-pulse h-1.5 w-1.5 rounded-full bg-[#1c7a47]" />
            Running
          </span>
        </div>

        {/* flow */}
        <div className="relative px-5 py-5">
          <span className="absolute bottom-9 left-[30px] top-9 w-[2px] rounded bg-[#eef0f5]" />
          <div className="flex flex-col gap-3">
            <FlowStep dot="#0526D9" icon={<BoltIcon className="h-3.5 w-3.5" />} title="New DM received" sub="Trigger · Instagram" />
            <FlowStep dot="#60a5fa" icon={<BranchIcon className="h-3.5 w-3.5" />} title="Intent = pricing" sub="Condition" />
            <FlowStep dot="#7c3aed" icon={<SparkIcon className="h-3.5 w-3.5" />} title="AI drafts a reply" sub="Model · Gemini" active />
          </div>
        </div>

        {/* AI reply bubble */}
        <div className="border-t border-[#f0f2f5] bg-[#f7f9fc] px-5 py-4">
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#0526D9] px-3.5 py-2.5 text-[12px] leading-[1.5] text-white">
            Hi Priya! I can share the plan and channel details. Would you like the full breakdown? ✨
          </div>
          <div className="mt-2 flex items-center justify-end gap-2 text-[10px] text-[#9ca3af]">
            <SparkIcon className="h-3 w-3 text-[#7c3aed]" />
            Drafted by AI · awaiting review
          </div>
        </div>
      </div>

      <div className="floaty absolute -bottom-5 -left-3 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-[0_18px_44px_rgba(0,0,0,0.4)] ring-1 ring-black/5">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#1c7a47] text-white">
          <CheckMini className="h-3.5 w-3.5" />
        </span>
        <div className="leading-tight">
          <div className="text-[11px] font-semibold text-[#11161f]">Draft or auto-send</div>
          <div className="text-[10px] text-[#9ca3af]">with guardrails</div>
        </div>
      </div>
    </div>
  );
}

function FlowStep({
  dot,
  icon,
  title,
  sub,
  active,
}: {
  dot: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
  active?: boolean;
}) {
  return (
    <div className="relative flex items-center gap-3 pl-2.5">
      <span
        className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white ring-4 ring-white"
        style={{ backgroundColor: dot }}
      >
        {icon}
      </span>
      <div
        className={`flex-1 rounded-xl border px-3 py-2 ${
          active ? "border-[#ddd6fe] bg-[#f5f3ff]" : "border-[#eef0f5] bg-white"
        }`}
      >
        <div className="text-[12px] font-semibold text-[#11161f]">{title}</div>
        <div className="text-[10px] text-[#9ca3af]">{sub}</div>
      </div>
    </div>
  );
}

/* ---------------- Icons ---------------- */

function SparkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.5l1.7 5.1 5.1 1.7-5.1 1.7L12 16.1l-1.7-5.1L5.2 9.3l5.1-1.7L12 2.5ZM18.5 15l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
    </svg>
  );
}
function BranchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="6" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="6" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="18" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M6 8.2v3.3c0 1.7 1.4 3.1 3.1 3.1h6.7M6 15.8v-1.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function RouteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="6" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="18" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.2 18h5.3a3 3 0 0 0 3-3V8.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0.1 3.2" />
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
function CheckMini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
