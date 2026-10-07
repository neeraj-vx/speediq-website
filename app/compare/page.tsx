import { pageMeta } from "@/lib/landing/seo";
import Footer from "@/components/landing/Footer";
import {
  MarketingHero,
  HeroCampaigns,
  SectionLabel,
  StatsBand,
  ValuesList,
  FAQ,
  type Value,
} from "@/components/landing/marketing";

export const metadata = pageMeta(
  "Compare",
  "See how SpeedIQ compares to juggling separate WhatsApp, email, and SMS tools, one inbox, credit pricing, and no per-seat fees.",
  "/compare",
);

/* Comparison matrix: SpeedIQ vs a typical stitched-together stack vs single-channel point tools. */
const cols = ["SpeedIQ", "Separate tools", "Point solutions"];

type Cell = boolean | "partial";
const rows: { feature: string; cells: Cell[] }[] = [
  { feature: "WhatsApp, Email & SMS in one inbox", cells: [true, false, false] },
  { feature: "No per-seat fees", cells: [true, false, "partial"] },
  { feature: "Transparent credit pricing", cells: [true, false, "partial"] },
  { feature: "No-code automations across channels", cells: [true, "partial", false] },
  { feature: "Unified contact history", cells: [true, false, false] },
  { feature: "Cross-channel analytics", cells: [true, "partial", "partial"] },
  { feature: "Lead capture, CRM & routing", cells: [true, "partial", false] },
  { feature: "One workspace for channel activity", cells: [true, false, "partial"] },
];

const reasons: Value[] = [
  {
    title: "One workspace, not five",
    body: "Stop paying for and switching between a separate tool per channel. SpeedIQ collapses WhatsApp, Email, and SMS into a single shared inbox.",
    icon: LayersIcon,
  },
  {
    title: "Pay for messages, not seats",
    body: "There are no per-seat charges. Plans still define member limits and channel access, while usage is tracked in channel-specific credit buckets.",
    icon: CoinIcon,
  },
  {
    title: "Automations without engineering",
    body: "Build branching, trigger-based flows yourself. No connecting three tools with brittle integrations, no waiting on a sprint.",
    icon: BoltIcon,
  },
  {
    title: "Analytics that already line up",
    body: "Because every channel lives in one platform, delivery, opens, and replies are comparable out of the box, no manual stitching in a spreadsheet.",
    icon: ChartIcon,
  },
];

function Mark({ cell }: { cell: Cell }) {
  if (cell === true)
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#eef7f1] text-[#1c7a47]">
        <CheckIcon className="h-3.5 w-3.5" />
      </span>
    );
  if (cell === "partial")
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#fbf3e6] text-[#b6862a]">
        <DashIcon className="h-3.5 w-3.5" />
      </span>
    );
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f6ecea] text-[#c0593f]">
      <XIcon className="h-3.5 w-3.5" />
    </span>
  );
}

export default function ComparePage() {
  return (
    <main>
      <MarketingHero
        active="Compare"
        eyebrow="COMPARE"
        title="One platform vs. a"
        accent="patchwork of tools."
        subtitle="Teams stitch together a tool per channel, then pay per seat for each. Here's how SpeedIQ stacks up against the usual alternatives."
        secondaryCta={{ label: "View pricing", href: "/pricing" }}
        highlights={["One workspace", "No per-seat fees", "Channel-aware billing"]}
        visual={<HeroCampaigns />}
      />

      {/* Comparison matrix */}
      <div className="w-full bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mb-8 px-2">
            <SectionLabel>Feature by feature</SectionLabel>
            <h2 className="mt-5 max-w-xl font-display text-[32px] font-semibold leading-[1.1] tracking-tight text-[#11161f] sm:text-[38px]">
              What you get, side by side.
            </h2>
          </div>

          <div className="reveal overflow-hidden rounded-md border border-[#d4d9e4] bg-white shadow-sm">
            {/* Header row */}
            <div className="grid grid-cols-[1.6fr_repeat(3,1fr)] border-b border-[#d4d9e4] bg-[#f8f9fc]">
              <div className="px-5 py-4 text-[12px] font-medium tracking-[0.08em] text-[#9aa0ac]">
                CAPABILITY
              </div>
              {cols.map((c, i) => (
                <div
                  key={c}
                  className={`border-l border-[#d4d9e4] px-3 py-4 text-center text-[13px] font-semibold ${
                    i === 0 ? "text-[#11161f]" : "text-[#7a808b]"
                  }`}
                >
                  {i === 0 ? (
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#f47b3f]" />
                      {c}
                    </span>
                  ) : (
                    c
                  )}
                </div>
              ))}
            </div>

            {/* Body rows */}
            {rows.map((r) => (
              <div
                key={r.feature}
                className="grid grid-cols-[1.6fr_repeat(3,1fr)] border-b border-[#eef0f5] last:border-b-0"
              >
                <div className="px-5 py-4 text-[13px] font-medium text-[#3b4150]">
                  {r.feature}
                </div>
                {r.cells.map((cell, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-center border-l border-[#eef0f5] px-3 py-4 ${
                      i === 0 ? "bg-[#fbfdfb]" : ""
                    }`}
                  >
                    <Mark cell={cell} />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="reveal mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 px-2 text-[12px] text-[#8a8f9b]">
            <span className="inline-flex items-center gap-2">
              <Mark cell={true} /> Included
            </span>
            <span className="inline-flex items-center gap-2">
              <Mark cell={"partial"} /> Limited or add-on
            </span>
            <span className="inline-flex items-center gap-2">
              <Mark cell={false} /> Not available
            </span>
          </div>
        </div>
      </div>

      <ValuesList
        label="Why teams switch"
        title="The case for"
        accent="consolidating."
        values={reasons}
      />

      <StatsBand
        stats={[
          { value: "3-in-1", label: "Channels unified" },
          { value: "0", label: "Per-seat fees" },
          { value: "1", label: "Bill to manage" },
          { value: "<1 day", label: "Time to launch" },
        ]}
      />

      <FAQ
        label="Comparison FAQ"
        title="Switching questions, answered."
        intro="What teams usually ask when moving off a patchwork of tools."
        items={[
          {
            q: "How is SpeedIQ cheaper than separate tools?",
            a: "There are no per-seat charges. Plans define channel access and member limits, and usage is tracked in the relevant credit bucket.",
          },
          {
            q: "Is migrating off my current tools painful?",
            a: "SpeedIQ supports CSV imports, guided channel connections, forms, ad and social connections, prospecting, bookings, and webhook lead sources.",
          },
          {
            q: "What do I lose by consolidating?",
            a: "Not the features that matter, campaigns, automations, templates, and analytics all come built in, and they finally share one contact history.",
          },
          {
            q: "Do the analytics really line up across channels?",
            a: "Yes. Because every channel lives in one platform, delivery, opens, and replies are comparable out of the box, no spreadsheet stitching.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}

/* ---------------- Icons ---------------- */

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M7 7l10 10M17 7L7 17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
function DashIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 12h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
function LayersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 4l8 4-8 4-8-4 8-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 12l8 4 8-4M4 16l8 4 8-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CoinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v10M9.5 9.2c0-1 1.1-1.7 2.5-1.7s2.5.7 2.5 1.7-1.1 1.6-2.5 1.6-2.5.8-2.5 1.8 1.1 1.7 2.5 1.7 2.5-.7 2.5-1.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
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
function ChartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 4v16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 14l3-3 2.5 2.5L19 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
