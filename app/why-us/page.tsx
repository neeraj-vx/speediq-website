import { pageMeta } from "@/lib/landing/seo";
import Footer from "@/components/landing/Footer";
import {
  MarketingHero,
  HeroCampaigns,
  Statement,
  ValuesList,
  StatsBand,
  FAQ,
  type Value,
} from "@/components/landing/marketing";

export const metadata = pageMeta(
  "Why us",
  "Why teams choose SpeedIQ, one unified inbox, transparent credit pricing with no per-seat fees, no-code automations, and built-in analytics.",
  "/why-us",
);

const values: Value[] = [
  {
    title: "No per-seat fees",
    body: "Add teammates without a per-seat charge. You pay for the plan and usage, while each plan's member limit still applies.",
    icon: CoinIcon,
  },
  {
    title: "One inbox, not five",
    body: "WhatsApp, Email, and SMS share a single thread, so your team stops switching tabs and losing context mid-conversation.",
    icon: InboxIcon,
  },
  {
    title: "Transparent credits",
    body: "Every message type has a clear, published credit cost tracked in a full ledger, no surprise overages at the end of the month.",
    icon: ReceiptIcon,
  },
  {
    title: "No-code automation",
    body: "Build trigger-based flows with branching logic yourself. No engineering tickets, no waiting on a sprint.",
    icon: BoltIcon,
  },
  {
    title: "A focused workspace",
    body: "Connect channels, import contacts, and keep inbox, CRM, campaigns, and automations in one workspace.",
    icon: RocketIcon,
  },
];

export default function WhyUsPage() {
  return (
    <main>
      <MarketingHero
        active="Why us"
        eyebrow="WHY SPEEDIQ"
        title="Built for teams who"
        accent="value clarity."
        subtitle="Most messaging tools bury you in channel sprawl and per-seat invoices. SpeedIQ does the opposite, one workspace, one ledger, no surprises."
        secondaryCta={{ label: "Compare us", href: "/compare" }}
        highlights={["No per-seat fees", "One transparent ledger", "Inbox + CRM together"]}
        visual={<HeroCampaigns />}
      />

      <Statement label="The problem">
        Teams stitch together{" "}
        <span className="text-[#7a808b]">
          one tool for WhatsApp, another for email, a third for SMS
        </span>
        , then pay per seat for each. We collapsed all of it into a single,
        transparent workspace.
      </Statement>

      <ValuesList
        label="What drives us"
        title="Principles we"
        accent="don't compromise on."
        values={values}
      />

      <StatsBand
        stats={[
          { value: "0", label: "Per-seat fees" },
          { value: "Multi", label: "Channels unified" },
          { value: "1", label: "Bill to manage" },
          { value: "CRM", label: "Inbox, leads & pipeline together" },
        ]}
      />

      <FAQ
        label="Why us FAQ"
        title="Fair questions to ask."
        intro="The things teams usually want to confirm before switching."
        items={[
          {
            q: "How is pricing actually different?",
            a: "You pay for the plan and usage, with no per-seat charges. Member counts still follow the limit on the selected plan, and usage is visible in the ledger.",
          },
          {
            q: "Will I really save time consolidating?",
            a: "One inbox means less tab-switching and less piecing history together across tools. Your team can see assignments, notes, and channel context in one place.",
          },
          {
            q: "Do I need engineers to set it up?",
            a: "No. Connect your channels, import contacts, and build automations yourself, no-code and no sprint required.",
          },
          {
            q: "What if I outgrow my plan?",
            a: "Upgrade or downgrade anytime. Pricing has no per-seat charge, while plan limits and channel access vary by tier.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}

/* ---------------- Icons ---------------- */

function CoinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v10M9.5 9.2c0-1 1.1-1.7 2.5-1.7s2.5.7 2.5 1.7-1.1 1.6-2.5 1.6-2.5.8-2.5 1.8 1.1 1.7 2.5 1.7 2.5-.7 2.5-1.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function InboxIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 13l2.5-7h11L20 13v5H4v-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 13h4l1.5 2h5L16 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ReceiptIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 3.5h12v17l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3-2 1.3v-17Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 8h6M9 11.5h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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
function RocketIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M14 4c3 1 6 4 6 6-2 0-3 .5-4 1.5L11 16l-3-3 4.5-5C13.5 7 14 6 14 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8 13l-2 2c-1 1-1 3-1 4 1 0 3 0 4-1l2-2M15 9.5h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
