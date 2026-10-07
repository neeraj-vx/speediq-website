import { pageMeta } from "@/lib/landing/seo";
import Footer from "@/components/landing/Footer";
import {
  MarketingHero,
  HeroInbox,
  FeatureRows,
  FeatureSection,
  StatsBand,
  BarsCard,
  StatusCard,
  GaugeCard,
  FAQ,
  type Feature,
} from "@/components/landing/marketing";

export const metadata = pageMeta(
  "Email",
  "Email campaigns in SpeedIQ, a rich HTML editor, templates, segments, automated flows, and delivery and engagement reporting.",
  "/features/email",
);

const capabilities: Feature[] = [
  { title: "Rich email editor", body: "Compose on-brand emails with formatting, images, links, variables, attachments, and saved templates.", icon: BrushIcon },
  { title: "Segments & personalization", body: "Target the right contacts and merge in personal fields for emails that feel one-to-one.", icon: FilterIcon },
  { title: "Delivery & engagement", body: "Track sent, delivered, opened, clicked, bounced, and complained messages from your campaigns.", icon: SplitIcon },
  { title: "Deliverability tools", body: "Authentication, list hygiene, and bounce handling help you monitor sender and delivery health.", icon: ShieldIcon },
];

export default function EmailPage() {
  return (
    <main>
      <MarketingHero
        active="Features"
        eyebrow="FEATURES · EMAIL"
        title="Email campaigns that"
        accent="actually land."
        subtitle="Design, segment, and automate email from the same workspace as WhatsApp and SMS, with authentication and delivery and engagement reporting."
        secondaryCta={{ label: "All features", href: "/features" }}
        highlights={["Rich email editor", "Templates & personalization", "Deliverability reporting"]}
        visual={<HeroInbox accent="#4a7bc9" heading="Email" />}
      />

      <FeatureRows
        label="What you can do"
        rows={[
          {
            no: "01",
            eyebrow: "CAMPAIGNS",
            title: "Broadcast to the right segment",
            body: "Build a campaign, choose a segment, and schedule the send. Personalization fields and saved templates keep every email on-brand and relevant.",
            mockup: (
              <BarsCard
                label="OPENS BY SEGMENT"
                bars={[
                  { name: "Active customers", pct: 64, color: "#4a7bc9" },
                  { name: "Trial users", pct: 41, color: "#217b4c" },
                  { name: "Re-engagement", pct: 22, color: "#e5b32f" },
                ]}
              />
            ),
          },
          {
            no: "02",
            eyebrow: "AUTOMATIONS",
            title: "Welcome and nurture on autopilot",
            body: "Trigger a flow when a lead is created, a message arrives, a stage changes, or a contact goes quiet. Branching logic adapts the follow-up to the data you collect.",
            reverse: true,
            mockup: (
              <StatusCard
                title="Welcome series"
                sub="Email · 3 steps"
                tag="RUNNING"
                progressLabel="Contacts"
                progressValue="1,240 / 1,800"
                pct={68}
                primaryBtn="View flow"
              />
            ),
          },
          {
            no: "03",
            eyebrow: "DELIVERABILITY",
            title: "Authenticate and monitor delivery",
            body: "Domain authentication, list hygiene, bounce handling, and engagement reporting help you understand how campaigns perform.",
            mockup: (
              <GaugeCard
                label="EMAIL REPORTING"
                value="Tracked"
                sub="Delivery + engagement"
                footLeft="SPF/DKIM · bounces"
                footRight="Available"
              />
            ),
          },
        ]}
      />

      <FeatureSection
        label="Email toolkit"
        title="Everything a sender"
        accent="needs."
        intro="From the first draft to the deliverability report, the email tools sit right next to your other channels."
        items={capabilities}
      />

      <StatsBand
        stats={[
          { value: "1", label: "Credit per email" },
          { value: "SPF/DKIM", label: "Domain authentication" },
          { value: "Open + click", label: "Engagement reporting" },
          { value: "0", label: "Per-seat fees" },
        ]}
      />

      <FAQ
        label="Email FAQ"
        title="Email questions, answered."
        intro="What you need to know about sending email with SpeedIQ."
        items={[
          {
            q: "Do I need to know HTML to build emails?",
            a: "No. The rich editor supports common formatting, images, links, variables, and attachments. An HTML mode is also available for teams that want more control.",
          },
          {
            q: "How do you protect deliverability?",
            a: "SPF/DKIM authentication, list hygiene, bounce handling, and campaign engagement reporting help you monitor delivery health.",
          },
          {
            q: "Can I personalize and segment sends?",
            a: "Yes. Target contacts by attributes or behavior and merge in personal fields so every email feels one-to-one.",
          },
          {
            q: "How much does email cost?",
            a: "Email uses one Email credit per send from its own bucket. There are no per-seat charges, and the selected plan's member limit still applies.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}

/* ---------------- Icons ---------------- */

function BrushIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 19c2 0 3-1 3-3 0-1.3-1-2-2-2s-2 .9-2 2c0 .7.3 1.3-.5 2 .5.7 1 1 1.5 1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7.5 13.5 16 5a2 2 0 0 1 3 3l-8.5 8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function FilterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 6h16l-6 7v5l-4-2v-3L4 6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function SplitIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 20V4M6 8h6a4 4 0 0 1 4 4v8M16 12V8M16 12l-2-2M16 12l2-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
