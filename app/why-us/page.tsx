import { CTA, FAQ, FeatureGrid, PageHero } from "@/components/site/blocks";
import { Checklist, Section, SectionHeader } from "@/components/site/primitives";
import { pageMeta } from "@/lib/landing/seo";

export const metadata = pageMeta(
  "Why SpeedIQ",
  "Why teams choose SpeedIQ: one inbox for every channel, an AI assistant that books and hands off, a CRM underneath, fixed pricing with no per-seat fees.",
  "/why-us",
);

const values = [
  { icon: "inbox", title: "One inbox, not five", body: "WhatsApp, social, website chat, email, SMS and calls share a single thread per customer, so your team stops switching tabs and losing context." },
  { icon: "sparkle", title: "AI that does real work", body: "Not a chatbot bolted on: the assistant answers from your knowledge base, books appointments and hands off, with every action logged." },
  { icon: "pipeline", title: "A CRM underneath, not beside", body: "Contacts, pipelines, scoring and tasks are the same records your inbox and automations act on. Nothing to sync." },
  { icon: "wallet", title: "Pricing you can predict", body: "Fixed monthly plans with credit buckets for email, AI, SMS and voice. No per-seat fees, and every credit visible in a ledger." },
  { icon: "bolt", title: "No-code automation", body: "Trigger-based workflows with branching, delays, sequences and routing that you build yourself. No engineering tickets." },
  { icon: "shield", title: "Privacy by role", body: "The masked agent role hides phone numbers and emails from reps at the database level, so you can staff up without exposing customer data." },
] as const;

const faq = [
  { q: "How is pricing actually different?", a: "You pay for the plan and usage, with no per-seat charges. Member counts follow the limit on the selected plan, and usage is visible in the credit ledger." },
  { q: "Will I really save time consolidating?", a: "One inbox means less tab-switching and less piecing history together. Assignments, notes and channel context live in one place, and the AI takes the first reply." },
  { q: "Do I need engineers to set it up?", a: "No. Connect your channels, import contacts, publish a form or booking page and build automations yourself." },
  { q: "What if I outgrow my plan?", a: "Upgrade any time from Billing; an upgrade applies immediately with the prorated difference. A downgrade applies from the next cycle." },
];

export default function WhyUsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Why SpeedIQ"
        title="Built for teams who"
        accent="live in customer conversations."
        lede="Most messaging tools bury you in channel sprawl and per-seat invoices. SpeedIQ does the opposite: one workspace, one record per customer, one predictable bill."
        secondary={{ label: "Compare", href: "/compare" }}
        compact
      />

      <Section>
        <FeatureGrid items={[...values]} cols={3} />
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="What you get" title="The whole loop," accent="not a slice of it." size="sm" lede="Everything below is included on every plan, within its limits." />
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
              <Checklist items={["Unified inbox with assignment and notes", "Website live chat widget", "AI assistant with booking and hand-off", "WhatsApp Business Platform", "Instagram, Facebook and Google Ads leads", "Email and SMS campaigns", "Voice and WhatsApp calling"]} />
              <Checklist items={["CRM with pipelines, scoring and tasks", "Forms and AI chat forms", "Booking pages", "Google Maps prospecting", "Workflows, sequences and routing", "Analytics in your currency", "English and Arabic interface"]} />
            </div>
          </div>
        </div>
      </Section>

      <FAQ items={faq} title="Fair questions to ask." />
      <CTA />
    </main>
  );
}
