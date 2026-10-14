import { CTA, FAQ, FeatureGrid, PageHero } from "@/components/site/blocks";
import { Section, SectionHeader } from "@/components/site/primitives";
import { pageMeta } from "@/lib/landing/seo";

export const metadata = pageMeta(
  "About",
  "The story behind SpeedIQ: why we are building one calm home for every customer conversation, what we value, and how to reach the team.",
  "/about",
);

const values = [
  { icon: "users", title: "Customers over everything", body: "Every roadmap call starts with a real conversation a team is losing sleep over. If it doesn't help someone answer faster, it waits." },
  { icon: "wallet", title: "Radical transparency", body: "Clear credit pricing, a full usage ledger and no per-seat surprises. We would rather lose a sale than hide a fee." },
  { icon: "bolt", title: "Ship, listen, iterate", body: "We put real features in front of real teams early and iterate in the open instead of guessing behind a long roadmap." },
  { icon: "sparkle", title: "Small team, big leverage", body: "We stay lean and let automation and AI do the repetitive work, the same philosophy we build into the product." },
  { icon: "layers", title: "Own the whole journey", body: "One workspace from the first inbound message to the closed deal and the work after it. No hand-offs to five disconnected tools." },
  { icon: "language", title: "Built for more than one market", body: "English and Arabic interfaces, multi-currency reporting and per-country messaging rates, because our customers are not all in one place." },
] as const;

const faq = [
  { q: "Who is SpeedIQ for?", a: "Service businesses, agencies, clinics, schools, real-estate teams, online stores: anyone who lives in customer conversations and is tired of paying per seat to juggle five tools." },
  { q: "What makes you different from other inboxes?", a: "A CRM underneath rather than beside, an AI assistant that books and hands off rather than just chats, every channel in one thread, and fixed pricing with no per-seat fees. See the Why us page for the full breakdown." },
  { q: "How do I get in touch?", a: "Email hello@speediq.ai and a real person on the team will get back to you. No ticket queue, no bot maze." },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="We're building one calm home for"
        accent="every conversation."
        lede="SpeedIQ started with a simple frustration: growing teams were stitching together five tools to talk to their customers, then paying per seat for each. We set out to collapse all of it into a single, transparent workspace."
        primary={null}
        secondary={{ label: "Say hello", href: "mailto:hello@speediq.ai" }}
        compact
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Our mission" title="Every channel, one record, no surprises." size="sm" />
          </div>
          <div className="space-y-5 text-[16px] leading-[1.7] text-body lg:col-span-7">
            <p>
              Customer messaging moved to WhatsApp, Instagram and website chat, but the tools did not keep up. Teams ended up with a chat app here, an email tool there, a helpdesk and a CRM that barely talk to each other, and a bill that grows with every hire.
            </p>
            <p>
              SpeedIQ is our answer: one inbox for every channel, a CRM that fills itself from the conversations, an AI assistant that takes the first reply and books the meeting, and a fixed price that does not punish you for adding teammates.
            </p>
            <p>We are a small team. We ship often, we answer our own support inbox, and we build what our customers actually ask for.</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="What we value" title="How we work." size="sm" />
        <FeatureGrid items={[...values]} cols={3} className="mt-10" />
      </Section>

      <FAQ items={faq} title="A little more about us." />
      <CTA title="Come say hello." body="We're always glad to meet people who care about customer experience. Tell us what you're building." />
    </main>
  );
}
