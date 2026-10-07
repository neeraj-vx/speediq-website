import { CTA, FAQ, FeatureGrid, PageHero } from "@/components/site/blocks";
import { Icon } from "@/components/site/icons";
import { Section, SectionHeader } from "@/components/site/primitives";
import { pageMeta } from "@/lib/landing/seo";

export const metadata = pageMeta(
  "Compare",
  "SpeedIQ versus a patchwork of a WhatsApp tool, an email tool, a helpdesk and a CRM: one inbox, one contact record, no per-seat fees.",
  "/compare",
);

type Cell = true | false | string;

const rows: { label: string; speediq: Cell; tools: Cell }[] = [
  { label: "WhatsApp, Instagram, Facebook, website chat, email, SMS and voice in one inbox", speediq: true, tools: "One tool per channel" },
  { label: "One contact record and timeline across channels", speediq: true, tools: "Stitched by hand, if at all" },
  { label: "Website live chat with an AI assistant", speediq: true, tools: "Separate chat product" },
  { label: "AI replies on WhatsApp and social DMs with hand-off", speediq: true, tools: "Add-on or integration" },
  { label: "CRM with pipelines, scoring, tasks and routing", speediq: true, tools: "Separate CRM, synced" },
  { label: "Forms, AI chat forms and booking pages", speediq: true, tools: "Two more subscriptions" },
  { label: "No-code workflows across every channel", speediq: true, tools: "Per tool, or a middleware" },
  { label: "Cross-channel analytics and revenue reports", speediq: true, tools: "Spreadsheet" },
  { label: "Pricing", speediq: "Fixed plan, credits per channel, no per-seat fees", tools: "Per seat, per tool" },
];

const values = [
  { icon: "inbox", title: "One workspace, not five", body: "Stop paying for and switching between a separate tool per channel. Every conversation shares one inbox and one record." },
  { icon: "wallet", title: "Pay for the plan, not the heads", body: "Fixed monthly plans with credit buckets for email, AI, SMS and voice. Add teammates within the plan's member limit at no extra cost." },
  { icon: "bolt", title: "Automations without engineering", body: "Trigger, branch and act across channels in one builder. No brittle integrations, no waiting on a sprint." },
  { icon: "chart", title: "Analytics that already line up", body: "Because every channel lives in one platform, delivery, replies and revenue are comparable out of the box." },
] as const;

const faq = [
  { q: "How is SpeedIQ cheaper than separate tools?", a: "There are no per-seat charges. Plans define channel access and member limits, and usage is tracked in channel-specific credit buckets, so the bill does not grow with every hire." },
  { q: "Is migrating off my current tools painful?", a: "SpeedIQ supports CSV imports, guided channel connections, forms, ad and social connections, prospecting, bookings and webhook lead sources. Most teams connect their channels in an afternoon." },
  { q: "What do I lose by consolidating?", a: "Not the features that matter: campaigns, workflows, templates, live chat, booking, forms and analytics all come built in, and they finally share one contact history." },
  { q: "Can I keep a tool I love?", a: "Yes. Project webhooks bring leads in from anywhere, and workflow webhook actions send data out, so SpeedIQ can sit alongside a tool you are not ready to replace." },
];

function CellView({ cell, strong }: { cell: Cell; strong?: boolean }) {
  if (cell === true)
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent-soft text-accent">
        <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.4} />
      </span>
    );
  if (cell === false) return <span className="text-faint">–</span>;
  return <span className={`text-[14px] ${strong ? "font-medium text-ink" : "text-body"}`}>{cell}</span>;
}

export default function ComparePage() {
  return (
    <main>
      <PageHero
        eyebrow="Compare"
        title="One platform versus"
        accent="a patchwork of tools."
        lede="Teams stitch together a tool per channel, then pay per seat for each. Here is what changes when the whole loop runs in one workspace."
        secondary={{ label: "See pricing", href: "/pricing" }}
        compact
      />

      <Section>
        <SectionHeader eyebrow="Feature by feature" title="What you get, side by side." size="sm" />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line">
                <th className="pb-4 pr-6 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">Capability</th>
                <th className="px-6 pb-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-accent">SpeedIQ</th>
                <th className="pl-6 pb-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">Separate tools</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-b border-line last:border-b-0">
                  <td className="py-4 pr-6 text-[15px] text-ink">{r.label}</td>
                  <td className="bg-accent-soft/40 px-6 py-4"><CellView cell={r.speediq} strong /></td>
                  <td className="py-4 pl-6"><CellView cell={r.tools} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeader eyebrow="Why it matters" title="Fewer tools, more context." size="sm" />
        <FeatureGrid items={[...values]} cols={2} className="mt-10" />
      </Section>

      <FAQ items={faq} title="Switching questions, answered." />
      <CTA />
    </main>
  );
}
