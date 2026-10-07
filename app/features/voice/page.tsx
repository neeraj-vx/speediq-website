import { pageMeta } from "@/lib/landing/seo";
import Footer from "@/components/landing/Footer";
import {
  MarketingHero,
  FeatureRows,
  FeatureSection,
  StatsBand,
  StatusCard,
  BarsCard,
  GaugeCard,
  FAQ,
  type Feature,
} from "@/components/landing/marketing";

export const metadata = pageMeta(
  "Voice & Calling",
  "Call leads from the CRM with an in-app dialer, local numbers, WhatsApp calling, an AI voice agent, call logging, and optional recordings on the contact timeline.",
  "/features/voice",
);

const ACCENT = "#d97706";

const capabilities: Feature[] = [
  { title: "In-app dialer", body: "Call any lead or contact from inside SpeedIQ, no separate phone, no switching apps, no copy-pasting numbers.", icon: DialerIcon },
  { title: "Click-to-call", body: "Dial straight from a lead record or the inbox. The right context is on screen before the call even connects.", icon: CursorIcon },
  { title: "Call logging", body: "Every call is logged automatically with duration, direction, and outcome, so nothing depends on someone remembering to note it.", icon: LogIcon },
  { title: "Optional recordings", body: "Enable call recording for training and quality, then replay available recordings from the contact's timeline.", icon: RecordIcon },
  { title: "Local numbers", body: "Search and buy local numbers in supported countries without leaving SpeedIQ. Availability varies by country.", icon: GlobeIcon },
  { title: "On the timeline", body: "Calls sit alongside WhatsApp, email, and SMS on one timeline, so the full conversation history is always in one place.", icon: TimelineIcon },
  { title: "WhatsApp calling", body: "Answer and place WhatsApp voice calls on your connected business number. Calls you place need the customer's permission first.", icon: BubbleCallIcon },
  { title: "AI voice agent", body: "Let an AI voice agent answer inbound calls, every call or only the ones your team can't pick up.", icon: SparkIcon },
  { title: "AI voice calls", body: "Start consent-based AI calls with transcripts and tool-call history recorded. Calls started by hand are US and Canada only for now.", icon: DialerIcon },
];

export default function VoicePage() {
  return (
    <main>
      <MarketingHero
        active="Features"
        eyebrow="FEATURES · VOICE"
        title="Call your leads,"
        accent="right from the CRM."
        subtitle="An in-app dialer with numbers you buy inside SpeedIQ, WhatsApp calling, click-to-call from any lead, call logging, optional recordings, and the conversation on the contact's timeline next to their chats."
        secondaryCta={{ label: "All features", href: "/features" }}
        highlights={["In-app dialer", "Call logs + optional recording", "On the contact timeline"]}
        visual={<DialerCard />}
      />

      <FeatureRows
        label="How it works"
        rows={[
          {
            no: "01",
            eyebrow: "DIAL",
            title: "One click to call",
            body: "Open a lead and hit call, the in-app dialer connects with their details already on screen. No dialing digits, no jumping to another app, no losing context between the chat and the call.",
            mockup: (
              <StatusCard
                title="Call · Priya Shah"
                sub="Outbound · connected"
                tag="CONNECTED"
                progressLabel="Duration"
                progressValue="04:12"
                pct={68}
                primaryBtn="End call"
              />
            ),
          },
          {
            no: "02",
            eyebrow: "CAPTURE",
            title: "Logged automatically, recorded when enabled",
            body: "Calls are logged with duration, direction, and outcome. Enable recording when you need coaching or quality review, then replay available recordings from the record.",
            reverse: true,
            mockup: (
              <BarsCard
                label="CALLS THIS WEEK"
                bars={[
                  { name: "Connected", pct: 72, color: ACCENT },
                  { name: "Voicemail", pct: 34, color: "#fcd34d" },
                  { name: "Missed", pct: 18, color: "#c3c9d4" },
                ]}
              />
            ),
          },
          {
            no: "03",
            eyebrow: "UNIFY",
            title: "One timeline, every conversation",
            body: "Calls land on the same contact timeline as WhatsApp, email, and SMS, so anyone on the team can see the recorded history and outcome in one place.",
            mockup: (
              <GaugeCard
                label="CALL HISTORY"
                value="Logged"
                sub="Duration · direction · outcome"
                footLeft="Timeline"
                footRight="Optional recording"
                pct={0.72}
              />
            ),
          },
        ]}
      />

      <FeatureSection
        label="Voice toolkit"
        title="A phone that lives"
        accent="inside your CRM."
        intro="Calling that doesn't sit in a separate silo, dial, log, record, and review right where your leads and conversations already are."
        items={capabilities}
        gridClass="sm:grid-cols-2 lg:grid-cols-3"
      />

      <StatsBand
        stats={[
          { value: "1 click", label: "Call any lead from the CRM" },
          { value: "Auto", label: "Call details logged" },
          { value: "Optional", label: "Recordings for review" },
          { value: "1 timeline", label: "Calls beside every chat" },
        ]}
      />

      <FAQ
        label="Voice FAQ"
        title="Calling, answered."
        intro="What you need to know about voice in SpeedIQ."
        items={[
          {
            q: "Do I need a separate phone system?",
            a: "No. The dialer lives inside SpeedIQ, so you call leads directly from a record or the inbox, with their context already on screen, no extra phone or app to manage.",
          },
          {
            q: "Are calls logged and recorded?",
            a: "Yes. Every call is logged automatically with duration, direction, and outcome, and recordings are available to replay from the contact's timeline for coaching and quality.",
          },
          {
            q: "Which countries does calling work in?",
            a: "You can buy local numbers from inside SpeedIQ in supported countries, and availability varies by country. A voice credit covers one call minute to the US or Canada; other destinations use a few credits per minute. WhatsApp calling runs on your connected WhatsApp Business number, and AI calls started by hand are US and Canada only for now.",
          },
          {
            q: "Where do calls show up?",
            a: "On the same unified contact timeline as WhatsApp, email, and SMS, so the entire conversation history across every channel lives in one place.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}

/* ---------------- Hero visual: in-app dialer ---------------- */

function DialerCard() {
  const log = [
    { n: "Marco Rossi", t: "Outbound · 6:20", dir: "out", when: "12m" },
    { n: "Aisha Ali", t: "Inbound · 3:04", dir: "in", when: "1h" },
  ];
  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      <div
        className="pointer-events-none absolute -inset-8 rounded-[40px]"
        style={{ background: `radial-gradient(55% 55% at 60% 15%, ${ACCENT}30, transparent 72%)` }}
      />
      <div className="absolute -top-4 left-6 right-6 h-16 rounded-2xl bg-black/[0.04]" />
      <div className="absolute -top-2 left-3 right-3 h-16 rounded-2xl bg-black/[0.06]" />

      <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_36px_90px_-28px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
        {/* active call */}
        <div className="flex items-center gap-3 px-5 py-5" style={{ background: `linear-gradient(180deg, ${ACCENT}12, transparent)` }}>
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#11161f] text-[13px] font-bold text-white">
            PS
            <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full text-white ring-2 ring-white" style={{ backgroundColor: ACCENT }}>
              <PhoneMini className="h-2.5 w-2.5" />
            </span>
          </span>
          <div className="min-w-0 flex-1 leading-tight">
            <div className="text-[14px] font-semibold text-[#11161f]">Priya Shah</div>
            <div className="text-[11px] text-[#9ca3af]">Outbound · +91 ·· ·· 4821</div>
          </div>
          <div className="text-right">
            <div className="text-[13px] font-semibold" style={{ color: ACCENT }}>04:12</div>
            <div className="flex items-center gap-1 text-[10px] text-[#9ca3af]">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
              recording
            </div>
          </div>
        </div>

        {/* controls */}
        <div className="flex items-center justify-center gap-3 border-y border-[#f0f2f5] px-5 py-3.5">
          {["Mute", "Keypad", "Notes"].map((c) => (
            <span key={c} className="rounded-lg border border-[#e3e7f0] px-3 py-1.5 text-[11px] font-semibold text-[#5b6170]">
              {c}
            </span>
          ))}
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e5484d] text-white">
            <PhoneMini className="h-3.5 w-3.5 rotate-[135deg]" />
          </span>
        </div>

        {/* recent log */}
        <div className="px-5 py-3">
          <div className="mb-2 text-[10px] font-semibold tracking-[0.12em] text-[#9ca3af]">RECENT CALLS</div>
          <div className="flex flex-col gap-2.5">
            {log.map((l) => (
              <div key={l.n} className="flex items-center gap-3">
                <span className={`flex h-6 w-6 items-center justify-center rounded-full ${l.dir === "out" ? "text-white" : "border border-[#e3e7f0] text-[#7a808b]"}`} style={l.dir === "out" ? { backgroundColor: "#217b4c" } : undefined}>
                  <PhoneMini className={`h-3 w-3 ${l.dir === "out" ? "" : "rotate-180"}`} />
                </span>
                <div className="min-w-0 flex-1 leading-tight">
                  <div className="truncate text-[12px] font-semibold text-[#11161f]">{l.n}</div>
                  <div className="text-[11px] text-[#9ca3af]">{l.t}</div>
                </div>
                <span className="text-[11px] text-[#9ca3af]">{l.when}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="floaty absolute -bottom-5 -right-3 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-[0_18px_44px_rgba(0,0,0,0.4)] ring-1 ring-black/5">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg text-white" style={{ backgroundColor: ACCENT }}>
          <RecordIcon className="h-3.5 w-3.5" />
        </span>
        <div className="leading-tight">
          <div className="text-[11px] font-semibold text-[#11161f]">Call logged</div>
          <div className="text-[10px] text-[#9ca3af]">on Priya&apos;s timeline</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Icons ---------------- */

function PhoneMini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.6 3.5a1.5 1.5 0 0 1 1.5.9l1.2 2.8a1.5 1.5 0 0 1-.34 1.7l-1 .95a11 11 0 0 0 4.4 4.4l.95-1a1.5 1.5 0 0 1 1.7-.34l2.8 1.2a1.5 1.5 0 0 1 .9 1.5v2.3a1.7 1.7 0 0 1-1.9 1.7C10.3 20.8 3.2 13.7 2.9 5.4A1.7 1.7 0 0 1 4.6 3.5h2Z" />
    </svg>
  );
}
function DialerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M7 3.8a1.4 1.4 0 0 1 1.4.85l1.1 2.6a1.4 1.4 0 0 1-.32 1.6l-.95.9a10.5 10.5 0 0 0 4.2 4.2l.9-.95a1.4 1.4 0 0 1 1.6-.32l2.6 1.1a1.4 1.4 0 0 1 .85 1.4v2.1a1.6 1.6 0 0 1-1.75 1.6C9.8 20.3 3.7 14.2 3.4 6.15A1.6 1.6 0 0 1 5 4.4h2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function CursorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 4l6 15 2.2-6.2L19.5 10 5 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function LogIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4.5" y="4" width="15" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 9h8M8 12.5h8M8 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function RecordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}
function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 12h16M12 4c2.4 2.2 3.6 5 3.6 8s-1.2 5.8-3.6 8c-2.4-2.2-3.6-5-3.6-8s1.2-5.8 3.6-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function TimelineIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M7 4v16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="7" cy="8" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="7" cy="16" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 8h8M11 16h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function BubbleCallIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 19l1.1-3.3A7 7 0 1 1 9 18.2L5 19Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9.2 9.4c-.2 1 .4 2.2 1.3 3.1.9.9 2.1 1.5 3.1 1.3.4-.1.7-.5.6-.9l-.2-.7a.6.6 0 0 0-.7-.4l-.9.2-1.3-1.3.2-.9a.6.6 0 0 0-.4-.7l-.7-.2c-.4-.1-.8.2-.9.6Z" fill="currentColor" />
    </svg>
  );
}
function SparkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 3.5l1.9 5.1 5.1 1.9-5.1 1.9L12 17.5l-1.9-5.1L5 10.5l5.1-1.9L12 3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M18.5 16v4M16.5 18h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
