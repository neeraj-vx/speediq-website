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
  "CRM & Pipeline",
  "A CRM built for messaging. Unified contacts that merge every channel identity, drag-and-drop pipelines, lead scoring, source attribution, tasks, and a single cross-channel timeline for every person.",
  "/features/crm",
);

const ACCENT = "#0526D9";

const capabilities: Feature[] = [
  { title: "Unified contacts", body: "One record per person, with their WhatsApp, email, SMS, and social identities merged, so history never scatters across channels.", icon: ContactIcon },
  { title: "Pipelines & stages", body: "Model any sales process as drag-and-drop stages, run more than one pipeline, and track won and lost with values.", icon: PipelineIcon },
  { title: "Lead scoring", body: "Set scoring rules that add points for a lead's source, tags, stage, value, custom fields, or recent activity, for a 0–100 score.", icon: GaugeIcon },
  { title: "Source attribution", body: "See exactly where each lead came from, forms, ads, social, prospecting, or an inbound message, and what it's worth.", icon: SourceIcon },
  { title: "Tasks & reminders", body: "Attach follow-ups to any lead with due dates, so nothing slips between a first reply and a closed deal.", icon: TaskIcon },
  { title: "Custom fields & tags", body: "Shape records to your business with custom fields and tags, then segment and automate on top of them.", icon: TagIcon },
];

export default function CrmPage() {
  return (
    <main>
      <MarketingHero
        active="Features"
        eyebrow="FEATURES · CRM & PIPELINE"
        title="Every lead, every channel,"
        accent="one pipeline."
        subtitle="A CRM built for messaging. Contacts merge every channel into one timeline, leads move through drag-and-drop pipelines, and scoring, attribution, and tasks keep your team on the deals that matter, no spreadsheet, no second tool."
        secondaryCta={{ label: "All features", href: "/features" }}
        highlights={["Unified contact timeline", "Drag-and-drop pipelines", "Scoring & attribution"]}
        visual={<PipelineCard />}
      />

      <FeatureRows
        label="How it works"
        rows={[
          {
            no: "01",
            eyebrow: "UNIFY",
            title: "One record per person",
            body: "Every WhatsApp chat, email, SMS, and social DM from the same person merges into a single contact, with the full cross-channel timeline in one place. No more four half-records for one customer.",
            mockup: (
              <BarsCard
                label="CONTACT · IDENTITIES MERGED"
                bars={[
                  { name: "WhatsApp", pct: 100, color: "#217b4c" },
                  { name: "Email", pct: 100, color: "#4a7bc9" },
                  { name: "Instagram", pct: 100, color: "#a033ff" },
                ]}
              />
            ),
          },
          {
            no: "02",
            eyebrow: "MOVE",
            title: "Pipelines that fit how you sell",
            body: "Build stages for your process and drag leads across them as deals progress. Run separate pipelines for separate motions, and track value, owner, and score on every card.",
            reverse: true,
            mockup: (
              <StatusCard
                title="New pipeline"
                sub="Stages · owners · value"
                tag="ON TRACK"
                progressLabel="Qualified → Proposal"
                progressValue="61%"
                pct={61}
                primaryBtn="Open board"
              />
            ),
          },
          {
            no: "03",
            eyebrow: "PRIORITIZE",
            title: "Know who to call first",
            body: "Lead scoring adds up points from the rules you set, source attribution shows what's working, and tasks keep follow-ups on time, so the team always works the highest-value deals.",
            mockup: (
              <GaugeCard
                label="PIPELINE HEALTH"
                value="Scored"
                sub="Points from your rules"
                footLeft="Priority queue"
                footRight="Configured"
                pct={0.87}
              />
            ),
          },
        ]}
      />

      <FeatureSection
        label="CRM toolkit"
        title="The system of record for"
        accent="every customer."
        intro="Contacts, pipelines, scoring, and tasks that plug straight into your inbox, campaigns, and automations, one place your whole team actually works from."
        items={capabilities}
        gridClass="sm:grid-cols-2 lg:grid-cols-3"
      />

      <StatsBand
        stats={[
          { value: "1 record", label: "Every channel merged per contact" },
          { value: "Multi", label: "Run as many pipelines as you need" },
          { value: "Auto", label: "Scoring & source attribution" },
          { value: "0", label: "Per-seat fees, invite everyone" },
        ]}
      />

      <FAQ
        label="CRM FAQ"
        title="Your CRM, answered."
        intro="How the contact and pipeline layer fits together."
        items={[
          {
            q: "How do contacts get merged across channels?",
            a: "SpeedIQ links a person's WhatsApp number, email, SMS, and social identities into one contact automatically, so their whole history lives on a single record and timeline.",
          },
          {
            q: "Can I run more than one pipeline?",
            a: "Yes. Create as many pipelines as your business needs, each with its own stages, and move leads between stages with drag-and-drop while tracking value, owner, and score.",
          },
          {
            q: "Where does lead scoring come from?",
            a: "From rules you set. Each rule adds points when a lead matches it, for example its source, tags, stage, deal value, a custom field, or hours since last activity. The total is a 0–100 score your team can sort and filter by.",
          },
          {
            q: "Does the CRM connect to messaging and automations?",
            a: "Completely. Contacts and leads are the same records your inbox, campaigns, sequences, and automations act on, so a stage change or a new lead can trigger a message or a task instantly.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}

/* ---------------- Hero visual: pipeline board ---------------- */

function PipelineCard() {
  const cols = [
    { name: "New", count: 12, cards: [{ n: "Aisha Ali", v: "₹2.4L", c: "#a033ff" }, { n: "Marco Rossi", v: "₹1.1L", c: "#4a7bc9" }] },
    { name: "Qualified", count: 8, cards: [{ n: "Priya Shah", v: "₹4.8L", c: "#217b4c" }] },
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
        {/* header */}
        <div className="flex items-center justify-between border-b border-[#f0f2f5] px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg text-white" style={{ backgroundColor: ACCENT }}>
              <PipelineIcon className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className="text-[13px] font-semibold text-[#11161f]">New pipeline</div>
              <div className="text-[11px] text-[#9ca3af]">Stages · owners · value</div>
            </div>
          </div>
          <span className="rounded-full bg-[#eef4ff] px-2.5 py-1 text-[10px] font-semibold" style={{ color: ACCENT }}>
            Board
          </span>
        </div>

        {/* board */}
        <div className="grid grid-cols-2 gap-3 bg-[#f7f9fc] p-4">
          {cols.map((col) => (
            <div key={col.name}>
              <div className="mb-2 flex items-center justify-between px-1">
                <span className="text-[11px] font-semibold text-[#11161f]">{col.name}</span>
                <span className="text-[10px] text-[#9ca3af]">{col.count}</span>
              </div>
              <div className="flex flex-col gap-2">
                {col.cards.map((c) => (
                  <div key={c.n} className="rounded-lg bg-white p-2.5 shadow-sm ring-1 ring-black/[0.04]">
                    <div className="flex items-center gap-2">
                      <span className="h-6 w-6 shrink-0 rounded-full text-[9px] font-bold leading-6 text-center text-white" style={{ backgroundColor: c.c }}>
                        {c.n.split(" ").map((w) => w[0]).join("")}
                      </span>
                      <span className="truncate text-[11px] font-semibold text-[#11161f]">{c.n}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[11px] font-semibold" style={{ color: ACCENT }}>{c.v}</span>
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: c.c }} />
                    </div>
                  </div>
                ))}
                <div className="rounded-lg border border-dashed border-[#d4d9e4] py-2 text-center text-[10px] text-[#9ca3af]">
                  + drag here
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="floaty absolute -bottom-5 -right-3 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-[0_18px_44px_rgba(0,0,0,0.4)] ring-1 ring-black/5">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg text-white" style={{ backgroundColor: "#217b4c" }}>
          <GaugeIcon className="h-3.5 w-3.5" />
        </span>
        <div className="leading-tight">
          <div className="text-[11px] font-semibold text-[#11161f]">Score 92 · hot</div>
          <div className="text-[10px] text-[#9ca3af]">Priya Shah</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Icons ---------------- */

function PipelineIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3.5" y="4.5" width="4" height="15" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="10" y="4.5" width="4" height="10" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="16.5" y="4.5" width="4" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function ContactIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="4.5" width="16" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6.5 16c.6-1.6 2-2.4 3.5-2.4s2.9.8 3.5 2.4M15.5 9h2.5M15.5 12h2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function GaugeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 18a8 8 0 1 1 14 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 18l4-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="18" r="1.4" fill="currentColor" />
    </svg>
  );
}
function SourceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8.4v3M12 11.4l-4.5 4.2M12 11.4l4.5 4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function TaskIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4.5" y="4.5" width="15" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function TagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 11.5V5.5A1.5 1.5 0 0 1 5.5 4h6l8 8-6 6-9.5-6.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="8.5" cy="8.5" r="1.2" fill="currentColor" />
    </svg>
  );
}
