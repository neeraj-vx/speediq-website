import { pageMeta } from "@/lib/landing/seo";
import Footer from "@/components/landing/Footer";
import {
  MarketingHero,
  HeroInbox,
  FeatureRows,
  FeatureSection,
  StatsBand,
  GaugeCard,
  StatusCard,
  BarsCard,
  FAQ,
  type Feature,
} from "@/components/landing/marketing";

export const metadata = pageMeta(
  "SMS",
  "SMS in SpeedIQ, two-way text, broadcasts, alerts, automated replies, consent controls, and delivery reporting.",
  "/features/sms",
);

const capabilities: Feature[] = [
  { title: "Two-way messaging", body: "Replies land back in the unified inbox, so a broadcast can turn into a real conversation.", icon: ChatIcon },
  { title: "Scheduled broadcasts", body: "Queue a campaign for a date and time, then monitor its recipient statuses as it runs.", icon: ClockIcon },
  { title: "Keywords & opt-out", body: "Auto-handle STOP and custom keywords to stay compliant without manual work.", icon: KeyIcon },
  { title: "Delivery receipts", body: "See delivered, failed, and pending states per message as the send goes out.", icon: CheckCircleIcon },
];

export default function SmsPage() {
  return (
    <main>
      <MarketingHero
        active="Features"
        eyebrow="FEATURES · SMS"
        title="Text that gets"
        accent="read in seconds."
        subtitle="Send alerts and broadcasts over SMS, schedule campaigns, and let replies flow straight into the same inbox as your other channels."
        secondaryCta={{ label: "All features", href: "/features" }}
        highlights={["Two-way messaging", "Scheduled campaigns", "Auto opt-out handling"]}
        visual={<HeroInbox accent="#e5b32f" heading="SMS" />}
      />

      <FeatureRows
        label="What you can do"
        rows={[
          {
            no: "01",
            eyebrow: "BROADCASTS",
            title: "Reach everyone, instantly",
            body: "Send a one-off broadcast or schedule a campaign to an audience. Recipient delivery states and failures are recorded as the send progresses.",
            mockup: (
              <GaugeCard
                label="DELIVERY STATUS"
                value="Tracked"
                sub="Delivery + failure states"
                footLeft="Campaign reporting"
                footRight="Available"
                pct={0.72}
              />
            ),
          },
          {
            no: "02",
            eyebrow: "ALERTS",
            title: "Automate the urgent stuff",
            body: "Order updates, appointment reminders, and verification codes fire automatically from triggers, no one has to be at a keyboard to send them.",
            reverse: true,
            mockup: (
              <StatusCard
                title="Reminder flow"
                sub="SMS · 2 steps"
                tag="RUNNING"
                progressLabel="Campaign status"
                progressValue="Recipient statuses"
                pct={94}
                primaryBtn="View flow"
              />
            ),
          },
          {
            no: "03",
            eyebrow: "TWO-WAY",
            title: "Replies become conversations",
            body: "When a customer texts back, the reply lands in the unified inbox next to their WhatsApp and email history, so context is never lost.",
            mockup: (
              <BarsCard
                label="REPLIES BY INTENT"
                bars={[
                  { name: "Confirmations", pct: 58, color: "#e5b32f" },
                  { name: "Questions", pct: 33, color: "#4a7bc9" },
                  { name: "Opt-outs", pct: 6, color: "#c0593f" },
                ]}
              />
            ),
          },
        ]}
      />

      <FeatureSection
        label="SMS toolkit"
        title="Built for speed and"
        accent="compliance."
        intro="Everything you need to run SMS responsibly, from time-zone scheduling to automatic opt-out handling."
        items={capabilities}
      />

      <StatsBand
        stats={[
          { value: "1", label: "SMS credit per message" },
          { value: "Status", label: "Delivery and failure reporting" },
          { value: "2-way", label: "Replies in inbox" },
          { value: "Auto", label: "Opt-out handling" },
        ]}
      />

      <FAQ
        label="SMS FAQ"
        title="SMS questions, answered."
        intro="What you need to know about sending SMS with SpeedIQ."
        items={[
          {
            q: "Is SMS two-way?",
            a: "Yes. Replies land back in the unified inbox next to a contact's WhatsApp and email history, so a broadcast can turn into a real conversation.",
          },
          {
            q: "How do you handle opt-outs?",
            a: "STOP and custom keywords are handled automatically, so you stay compliant without any manual list management.",
          },
          {
            q: "Can I schedule sends by time zone?",
            a: "You can schedule a campaign for a date and time. The current campaign flow does not independently localize the send time per recipient.",
          },
          {
            q: "How is SMS priced?",
            a: "An SMS credit covers one message segment to the US or Canada. Other countries cost more to reach, so a message there uses a few credits, and a long message is charged per segment. The pricing page lists the credits per country.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}

/* ---------------- Icons ---------------- */

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 5.5h14v10H9l-4 3.5V5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 10.5h6M9 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function KeyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="8" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11.5 12H20M17 12v3M20 12v2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
