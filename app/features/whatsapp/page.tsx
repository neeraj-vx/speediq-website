import { pageMeta } from "@/lib/landing/seo";
import Footer from "@/components/landing/Footer";
import {
  MarketingHero,
  HeroInbox,
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
  "WhatsApp",
  "WhatsApp Business in SpeedIQ, approved templates, rich media, conversational automations, and the official Business API.",
  "/features/whatsapp",
);

const capabilities: Feature[] = [
  { title: "Official Business API", body: "Send at scale on the official WhatsApp Business Platform with a verified sender profile.", icon: BadgeIcon },
  { title: "Approved templates", body: "Manage and reuse template messages, with approval status tracked right in the app.", icon: TemplateIcon },
  { title: "Rich media", body: "Send images, documents, buttons, and quick replies for richer conversations.", icon: ImageIcon },
  { title: "Session management", body: "Stay inside the 24-hour window with clear status, so you always know what you can send.", icon: ClockIcon },
  { title: "Calling & AI voice", body: "Use the connected WhatsApp calling setup for voice calls, with optional recording and AI call workflows where configured.", icon: PhoneIcon },
];

export default function WhatsAppPage() {
  return (
    <main>
      <MarketingHero
        active="Features"
        eyebrow="FEATURES · WHATSAPP"
        title="WhatsApp Business,"
        accent="done properly."
        subtitle="Run the official WhatsApp Business API at scale, approved templates, rich media, and conversational automations in your unified inbox."
        secondaryCta={{ label: "All features", href: "/features" }}
        highlights={["Official Business API", "Approved templates", "Rich media & calling"]}
        visual={<HeroInbox accent="#217b4c" heading="WhatsApp" />}
      />

      <FeatureRows
        label="What you can do"
        rows={[
          {
            no: "01",
            eyebrow: "TEMPLATES",
            title: "Send approved templates at scale",
            body: "Create and reuse template messages with media and buttons. Approval status is tracked in-app, so you always know what's ready to broadcast.",
            mockup: (
              <StatusCard
                title="Order update"
                sub="WhatsApp · Template"
                tag="APPROVED"
                progressLabel="Sent"
                progressValue="8,600 / 9,000"
                pct={95}
                primaryBtn="View template"
              />
            ),
          },
          {
            no: "02",
            eyebrow: "CONVERSATIONS",
            title: "Automate, then hand off",
            body: "Let automations answer common questions inside the 24-hour window, and route anything that needs a human straight to an agent in the shared inbox.",
            reverse: true,
            mockup: (
              <BarsCard
                label="MESSAGES BY TYPE"
                bars={[
                  { name: "Utility", pct: 54, color: "#217b4c" },
                  { name: "Marketing", pct: 38, color: "#4a7bc9" },
                  { name: "Service", pct: 28, color: "#e5b32f" },
                ]}
              />
            ),
          },
          {
            no: "03",
            eyebrow: "DELIVERY",
            title: "Watch every send land",
            body: "Sent, delivered, and read receipts are recorded, while WhatsApp charges remain on the connected Meta account rather than the SpeedIQ credit buckets.",
            mockup: (
              <GaugeCard
                label="MESSAGE RECEIPTS"
                value="Tracked"
                sub="Sent · delivered · read"
                footLeft="Templates + sessions"
                footRight="Meta-billed"
                pct={0.76}
              />
            ),
          },
        ]}
      />

      <FeatureSection
        label="WhatsApp toolkit"
        title="Everything the API"
        accent="makes possible."
        intro="The power of the official WhatsApp Business Platform, wrapped in tools your team can actually use day to day."
        items={capabilities}
      />

      <StatsBand
        stats={[
          { value: "0", label: "SpeedIQ credits per message" },
          { value: "Meta", label: "Connected account billing" },
          { value: "Rich", label: "Media & buttons" },
          { value: "API", label: "Official Business" },
        ]}
      />

      <FAQ
        label="WhatsApp FAQ"
        title="WhatsApp questions, answered."
        intro="What you need to know about running WhatsApp Business in SpeedIQ."
        items={[
          {
            q: "Do you use the official WhatsApp Business API?",
            a: "Yes. SpeedIQ sends on the official WhatsApp Business Platform with a verified sender profile, so you can message at scale, compliantly.",
          },
          {
            q: "How does template approval work?",
            a: "Create templates in-app and submit them for approval. Their status is tracked right in SpeedIQ, so you always know what's ready to broadcast.",
          },
          {
            q: "What's the 24-hour window?",
            a: "Outside a 24-hour customer service window you can only send approved templates. SpeedIQ shows each conversation's status so you know what you can send.",
          },
          {
            q: "How are WhatsApp messages priced?",
            a: "SpeedIQ does not deduct credits for WhatsApp sends. WhatsApp and Meta charges are handled through the connected Meta account, and the 24-hour window and template rules still apply.",
          },
          {
            q: "Does SpeedIQ support WhatsApp calling?",
            a: "Yes, when WhatsApp calling is enabled and configured for the account. Voice calls appear in the contact history, and recording or AI call behavior depends on the settings you enable.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}

/* ---------------- Icons ---------------- */

function BadgeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 3l2.2 1.6 2.7-.2.9 2.6 2.2 1.6-.8 2.6.8 2.6-2.2 1.6-.9 2.6-2.7-.2L12 21l-2.2-1.6-2.7.2-.9-2.6L4 15.6l.8-2.6L4 10.4l2.2-1.6.9-2.6 2.7.2L12 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function TemplateIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="4" width="16" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 9h16M9 9v11" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function ImageIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="5" width="16" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9" cy="10" r="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 17l4-4 3 3 3-3 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M7 3.8a1.4 1.4 0 0 1 1.4.85l1.1 2.6a1.4 1.4 0 0 1-.32 1.6l-.95.9a10.5 10.5 0 0 0 4.2 4.2l.9-.95a1.4 1.4 0 0 1 1.6-.32l2.6 1.1a1.4 1.4 0 0 1 .85 1.4v2.1a1.6 1.6 0 0 1-1.75 1.6C9.8 20.3 3.7 14.2 3.4 6.15A1.6 1.6 0 0 1 5 4.4h2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
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
