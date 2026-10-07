import { CTA, FAQ, PageHero } from "@/components/site/blocks";
import { Icon, type IconName } from "@/components/site/icons";
import { Section, SectionHeader } from "@/components/site/primitives";
import { pageMeta } from "@/lib/landing/seo";

export const metadata = pageMeta(
  "Use cases",
  "How service businesses, agencies, clinics, schools, real-estate teams and online stores run WhatsApp, social, email, SMS and calls from one SpeedIQ workspace.",
  "/use-cases",
);

const cases: { icon: IconName; title: string; body: string; plays: string[] }[] = [
  {
    icon: "headset",
    title: "Service businesses",
    body: "Auto shops, salons, clinics, home services. Enquiries arrive on WhatsApp, the AI books the slot, the team sees the job.",
    plays: ["AI assistant on WhatsApp and website chat answers and books", "Booking page with reminders and self-serve reschedule", "Operations records for the work after the booking"],
  },
  {
    icon: "layers",
    title: "Agencies",
    body: "Run messaging for every client from one login, with a project per brand and no per-seat fees as the team grows.",
    plays: ["A project per client with its own channels and billing", "Masked agent role so freelancers never see raw contact data", "Cross-channel reports per project"],
  },
  {
    icon: "map",
    title: "Real estate",
    body: "Lead ads, listing enquiries and site-visit bookings in one pipeline, with follow-up sequences that stop when the buyer replies.",
    plays: ["Facebook and Instagram lead ads straight into the CRM", "Round-robin routing to agents", "WhatsApp sequences and click-to-call from the lead"],
  },
  {
    icon: "book",
    title: "Education",
    body: "Admissions enquiries, reminders and announcements that actually get opened, with counsellors working from one inbox.",
    plays: ["AI chat form qualifies applicants and books a counselling slot", "Email and WhatsApp campaigns to segmented audiences", "Lead scoring to prioritise follow-up"],
  },
  {
    icon: "megaphone",
    title: "Online stores",
    body: "Order updates, abandoned-cart nudges and support on the channels customers already use, with the history in one place.",
    plays: ["Webhook lead source from your store", "SMS and WhatsApp template campaigns", "Support replies in the unified inbox"],
  },
  {
    icon: "globe",
    title: "Local prospecting teams",
    body: "Source businesses from Google Maps, import them to a pipeline and reach out the same day.",
    plays: ["Maps scans by business type and area", "Deduped against your contacts before import", "Email sequences and calls from the record"],
  },
];

const without = ["A different tool for every channel", "Context lost between inbox tabs", "Per-seat fees as the team grows", "Reports stitched together by hand"];
const withSpeedIQ = ["Every channel in one thread per customer", "Full history on every contact", "Fixed plan with credit buckets per channel", "Delivery, replies and revenue in one report"];

const faq = [
  { q: "I run an agency with several clients. Does that work?", a: "Yes. Use projects as separate workspaces for brands or clients, each with its own channels, team and billing. There are no per-seat charges; each plan has its own member limit." },
  { q: "Can I start from a template for my industry?", a: "Workflows, forms and booking pages are built from the same blocks for every industry. Start from the plays above and adjust the triggers, questions and messages to your process." },
  { q: "Which channels should my industry use?", a: "Most teams mix WhatsApp for conversations, email for depth and SMS for urgency, adding voice, website chat or social where relevant. SpeedIQ keeps the activity together regardless." },
  { q: "Is it suitable for regulated industries?", a: "SpeedIQ provides opt-out controls, consent tracking, email authentication, the masked agent role and the official WhatsApp Business API connection. You remain responsible for consent and the rules that apply to you." },
];

export default function UseCasesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Use cases"
        title="Built for every"
        accent="customer-facing team."
        lede="Wherever customers expect a fast reply, SpeedIQ keeps the conversation in one place, from the first message to the final follow-up."
        secondary={{ label: "See the product tour", href: "/product" }}
        compact
      />

      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <div key={c.title} className="flex flex-col rounded-lg border border-line bg-white p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-soft text-accent">
                <Icon name={c.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-[20px] font-medium text-ink">{c.title}</h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-body">{c.body}</p>
              <ul className="mt-5 space-y-2 border-t border-line pt-5">
                {c.plays.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[14px] leading-6 text-body">
                    <Icon name="check" className="mt-1.5 h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2.4} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeader eyebrow="Before and after" title="From scattered tools to one workspace." size="sm" />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-line bg-white p-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">Without SpeedIQ</p>
            <ul className="mt-5 space-y-3">
              {without.map((w) => (
                <li key={w} className="flex items-start gap-3 text-[15px] leading-6 text-body">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-line-strong" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-accent bg-white p-7 shadow-card">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent">With SpeedIQ</p>
            <ul className="mt-5 space-y-3">
              {withSpeedIQ.map((w) => (
                <li key={w} className="flex items-start gap-3 text-[15px] leading-6 text-ink">
                  <Icon name="check" className="mt-1.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.4} />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <FAQ items={faq} title="Will it fit my team?" />
      <CTA />
    </main>
  );
}
