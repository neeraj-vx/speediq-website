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
  "Forms & Lead Capture",
  "Build beautiful forms without code, one-question-at-a-time or classic layouts, conditional logic, validation, file uploads, and on-brand theming. Every submission lands in your CRM as a lead.",
  "/features/forms",
);

const ACCENT = "#7c3aed";

const capabilities: Feature[] = [
  { title: "No-code builder", body: "Drag questions into place, short text, choices, ratings, uploads, and reorder in seconds. No developer, no embed headaches.", icon: BuilderIcon },
  { title: "Conditional logic", body: "Jump, show, or skip questions based on earlier answers, so every respondent only sees what's relevant to them.", icon: BranchIcon },
  { title: "Validation & uploads", body: "Require the right formats, emails, phone numbers, files, and let respondents attach documents or images inline.", icon: ShieldIcon },
  { title: "On-brand theming", body: "Match your colors, fonts, and cover, then serve the form full-page, embedded, or as a one-question flow.", icon: PaletteIcon },
  { title: "Submission analytics", body: "Track views, starts, completion rate, and drop-off per question, so you can tighten the form and capture more leads.", icon: ChartIcon },
  { title: "Instant notifications", body: "Get notified the moment someone submits, and route the new lead to the right person with automations.", icon: BellIcon },
];

export default function FormsPage() {
  return (
    <main>
      <MarketingHero
        active="Features"
        eyebrow="FEATURES · FORMS"
        title="Forms people actually"
        accent="finish."
        subtitle="Build on-brand forms without code, one question at a time or classic layouts, with logic, validation, and file uploads. Every submission becomes a lead in your CRM, ready to route, message, and follow up."
        secondaryCta={{ label: "All features", href: "/features" }}
        highlights={["No-code builder", "Logic & validation", "Submissions become leads"]}
        visual={<FormCard />}
      />

      <FeatureRows
        label="How it works"
        rows={[
          {
            no: "01",
            eyebrow: "BUILD",
            title: "Drag, drop, done",
            body: "Add questions, short text, multiple choice, ratings, file uploads, and reorder them by dragging. Add logic so respondents jump straight to what's relevant, all without writing a line of code.",
            mockup: (
              <StatusCard
                title="Contact form · Draft"
                sub="7 questions · logic on"
                tag="EDITING"
                progressLabel="Build progress"
                progressValue="7 / 7"
                pct={100}
                primaryBtn="Publish"
              />
            ),
          },
          {
            no: "02",
            eyebrow: "SHARE",
            title: "Full-page, embedded, or conversational",
            body: "Theme the form to your brand, then serve it however you like, a hosted page, an embed on your site, or a focused one-question flow that keeps completion rates high.",
            reverse: true,
            mockup: (
              <GaugeCard
                label="FORM ANALYTICS"
                value="Tracked"
                sub="Views · starts · completion"
                footLeft="Question drop-off"
                footRight="Available"
                pct={0.71}
              />
            ),
          },
          {
            no: "03",
            eyebrow: "CAPTURE",
            title: "Straight into your pipeline",
            body: "Each submission creates a lead with every answer mapped to a field, tagged by source, and routed to the right owner. Analytics show where people drop off so you can capture even more.",
            mockup: (
              <BarsCard
                label="SUBMISSIONS BY SOURCE"
                bars={[
                  { name: "Website embed", pct: 64, color: ACCENT },
                  { name: "Shared link", pct: 44, color: "#c4b5fd" },
                  { name: "Ad landing", pct: 29, color: "#c3c9d4" },
                ]}
              />
            ),
          },
        ]}
      />

      <FeatureSection
        label="Forms toolkit"
        title="A form builder that pulls"
        accent="its weight."
        intro="Everything you need to design, theme, and analyze forms, wired into the same CRM and automations as every other lead source in SpeedIQ."
        items={capabilities}
        gridClass="sm:grid-cols-2 lg:grid-cols-3"
      />

      <StatsBand
        stats={[
          { value: "No-code", label: "Drag-and-drop form builder" },
          { value: "3 modes", label: "Full-page, embed, or conversational" },
          { value: "Logic", label: "Show, skip & jump on answers" },
          { value: "Native", label: "Every submission becomes a lead" },
        ]}
      />

      <FAQ
        label="Forms FAQ"
        title="Lead capture, answered."
        intro="What you need to know about building forms in SpeedIQ."
        items={[
          {
            q: "Do I need to code or embed anything?",
            a: "No. Build forms with drag-and-drop and publish them as a hosted page or a simple embed. There's no plugin to install and no code to write.",
          },
          {
            q: "Can forms show different questions to different people?",
            a: "Yes. Conditional logic lets you jump, show, or skip questions based on earlier answers, so each respondent only sees what's relevant to them.",
          },
          {
            q: "What happens after someone submits?",
            a: "A lead is created in your CRM with every answer mapped to a field and tagged by source. You're notified instantly, and automations can route or message the lead right away.",
          },
          {
            q: "Can respondents upload files?",
            a: "They can. Add file-upload questions with validation, and attachments arrive on the lead's record alongside their other answers.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}

/* ---------------- Hero visual: one-question form ---------------- */

function FormCard() {
  const options = [
    { key: "A", label: "WhatsApp & SMS", active: true },
    { key: "B", label: "Email campaigns", active: false },
    { key: "C", label: "Social & ads", active: false },
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
              <BuilderIcon className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className="text-[13px] font-semibold text-[#11161f]">Get a quote</div>
              <div className="text-[11px] text-[#9ca3af]">Question 3 of 7</div>
            </div>
          </div>
          <span className="rounded-full bg-[#f3ecff] px-2.5 py-1 text-[10px] font-semibold" style={{ color: ACCENT }}>
            Published
          </span>
        </div>

        {/* progress */}
        <div className="px-5 pt-4">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#eef0f5]">
            <div className="h-full rounded-full" style={{ width: "43%", backgroundColor: ACCENT }} />
          </div>
        </div>

        {/* question */}
        <div className="px-5 pb-2 pt-5">
          <div className="text-[10px] font-semibold tracking-[0.12em] text-[#9ca3af]">3 · MULTIPLE CHOICE</div>
          <div className="mt-1.5 text-[16px] font-semibold leading-tight text-[#11161f]">
            Which channels do you want to run?
          </div>
        </div>

        {/* options */}
        <div className="flex flex-col gap-2 px-5 pb-4 pt-2">
          {options.map((o) => (
            <div
              key={o.key}
              className={`flex items-center gap-3 rounded-xl border px-3.5 py-3 ${
                o.active ? "" : "border-[#e3e7f0]"
              }`}
              style={o.active ? { borderColor: ACCENT, backgroundColor: "#f7f3ff" } : undefined}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[11px] font-bold ${
                  o.active ? "text-white" : "border border-[#e3e7f0] text-[#7a808b]"
                }`}
                style={o.active ? { backgroundColor: ACCENT } : undefined}
              >
                {o.key}
              </span>
              <span className="text-[13px] font-medium text-[#11161f]">{o.label}</span>
            </div>
          ))}
        </div>

        {/* footer */}
        <div className="flex items-center justify-between border-t border-[#f0f2f5] px-5 py-3.5">
          <span className="text-[11px] text-[#9ca3af]">Press Enter ↵</span>
          <span className="rounded-lg px-3.5 py-1.5 text-[11px] font-semibold text-white" style={{ backgroundColor: "#11161f" }}>
            OK
          </span>
        </div>
      </div>

      <div className="floaty absolute -bottom-5 -right-3 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-[0_18px_44px_rgba(0,0,0,0.4)] ring-1 ring-black/5">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg text-white" style={{ backgroundColor: "#217b4c" }}>
          <CheckMini className="h-3.5 w-3.5" />
        </span>
        <div className="leading-tight">
          <div className="text-[11px] font-semibold text-[#11161f]">New lead captured</div>
          <div className="text-[10px] text-[#9ca3af]">routed to Sales</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Icons ---------------- */

function BuilderIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="4.5" width="16" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 9h8M8 12.5h8M8 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function BranchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="7" cy="5" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="7" cy="19" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 7.2v9.6M7 12h4.5a3 3 0 0 1 3 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 3.5l7 2.5v5c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-2.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8.5 12l2.2 2.2L15 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PaletteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 3.5a8.5 8.5 0 0 0 0 17c1.4 0 2-1 2-2 0-1.3 1-2 2.2-2H18a3 3 0 0 0 3-3c0-4.7-4-7-9-7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="8" cy="11" r="1.1" fill="currentColor" />
      <circle cx="12" cy="8.5" r="1.1" fill="currentColor" />
      <circle cx="16" cy="11" r="1.1" fill="currentColor" />
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
function BellIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6.5 16V11a5.5 5.5 0 0 1 11 0v5l1.5 2H5l1.5-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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
