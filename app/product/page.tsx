import { pageMeta } from "@/lib/landing/seo";
import Footer from "@/components/landing/Footer";
import {
  MarketingHero,
  FeatureRows,
  BarsCard,
  StatusCard,
  GaugeCard,
  SectionLabel,
  StatsBand,
  FAQ,
} from "@/components/landing/marketing";

export const metadata = pageMeta(
  "Product",
  "One platform for WhatsApp, Email, SMS, Voice, social lead capture, a unified inbox, CRM, no-code automations, and reporting.",
  "/product",
);

const channels = [
  "WhatsApp",
  "Email",
  "SMS",
  "Voice",
  "Instagram",
  "Facebook",
  "Google Ads",
  "Website chat",
  "Webhooks",
  "Forms",
  "Booking",
  "AI replies",
];

export default function ProductPage() {
  return (
    <main>
      <MarketingHero
        active="Product"
        eyebrow="PRODUCT"
        title="One platform for every"
        accent="customer message."
        subtitle="Run WhatsApp, Instagram, Facebook, Email, SMS, and Voice from one workspace, with CRM, lead capture, booking, and AI-assisted follow-up around them."
        secondaryCta={{ label: "Explore features", href: "/features" }}
        highlights={[
          "Inbox + CRM across channels",
          "Lead capture & routing",
          "AI replies with human hand-off",
          "No per-seat fees",
        ]}
      />

      <FeatureRows
        rows={[
          {
            no: "01",
            eyebrow: "UNIFIED INBOX",
            title: "Every channel, one thread",
            body: "WhatsApp, Email, SMS, and connected social conversations land in a shared inbox with assignment, internal notes, and unified contact history.",
            mockup: (
              <BarsCard
                label="MESSAGES BY CHANNEL"
                bars={[
                  { name: "WhatsApp", pct: 62, color: "#217b4c" },
                  { name: "Email", pct: 48, color: "#4a7bc9" },
                  { name: "SMS", pct: 24, color: "#e5b32f" },
                ]}
              />
            ),
          },
          {
            no: "02",
            eyebrow: "AUTOMATIONS",
            title: "Capture and route every lead",
            body: "Bring in leads from forms, ads, comments, webhooks, prospecting, bookings, and inbound messages, then assign them with routing rules.",
            reverse: true,
            mockup: (
              <StatusCard
                title="New lead"
                sub="Form · assigned by rule"
                tag="ROUTED"
                progressLabel="Next action"
                progressValue="AI follow-up"
                pct={72}
                primaryBtn="Open lead"
              />
            ),
          },
          {
            no: "03",
            eyebrow: "ANALYTICS",
            title: "Automate replies and follow-up",
            body: "Build trigger-based flows with branching logic, delays, messages, tasks, webhooks, and AI replies, with draft mode and human hand-off when needed.",
            mockup: (
              <GaugeCard
                label="AI + WORKFLOW CONTROLS"
                value="Guarded"
                sub="Draft or auto-send"
                footLeft="Caps · hours · fallback"
                footRight="Configured"
              />
            ),
          },
        ]}
      />

      {/* Integrations strip, unique to this page */}
      <div className="w-full bg-white pb-28">
        <div className="mx-auto w-full max-w-4xl px-6 text-center">
          <div className="reveal flex justify-center">
            <SectionLabel>Connected</SectionLabel>
          </div>
          <h2 className="reveal mx-auto mt-5 max-w-2xl font-display text-[30px] font-semibold leading-[1.12] tracking-tight text-[#11161f] sm:text-[36px]">
            Channels and tools that
            <br className="hidden sm:block" />
            work together.
          </h2>
          <div className="reveal mt-9 flex flex-wrap justify-center gap-2.5">
            {channels.map((c, i) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 rounded-full border border-[#e3e7f0] bg-white px-4 py-2 text-[13px] font-medium text-[#3b4150] shadow-sm"
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: ["#217b4c", "#4a7bc9", "#e5b32f", "#df622d"][
                      i % 4
                    ],
                  }}
                />
            {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      <StatsBand
        stats={[
          { value: "Multi", label: "Messaging + social channels" },
          { value: "1", label: "Unified inbox and contact history" },
          { value: "Auto", label: "Lead capture and routing" },
          { value: "0", label: "Per-seat fees" },
        ]}
      />

      <FAQ
        title="How the platform works."
        intro="The short version of how SpeedIQ fits into your stack."
        items={[
          {
            q: "Do I need separate tools for each channel?",
            a: "No. WhatsApp, Email, SMS, Voice, and connected social activity run inside SpeedIQ, with messages and call history organized around the same contact record.",
          },
          {
            q: "How do leads get into the workspace?",
            a: "Leads can come from hosted or embedded forms, connected ad and social accounts, comments, project-specific webhooks, prospecting, bookings, CSV imports, and inbound conversations.",
          },
          {
            q: "Can non-technical teammates build automations?",
            a: "Yes. Automations are fully no-code, trigger-based flows with branching logic, delays, and webhooks, no engineering tickets required.",
          },
          {
            q: "Can I send data into SpeedIQ from another system?",
            a: "Yes. Create a project-specific webhook lead source and send lead data into the CRM. Forms, CSV imports, ad connections, prospecting, bookings, and inbound messages are supported sources too.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
