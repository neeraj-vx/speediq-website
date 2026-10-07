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
  "Social",
  "Capture leads, comments, and DMs from Facebook and Instagram, plus Google lead forms, with AI-assisted replies in one CRM.",
  "/features/social",
);

const capabilities: Feature[] = [
  { title: "Lead ad sync", body: "Facebook and Instagram lead forms flow into your CRM without CSV exports, with Google lead forms supported too.", icon: FormIcon },
  { title: "Comments to leads", body: "Turn comments on connected posts into leads automatically, with optional keyword filters.", icon: ChatIcon },
  { title: "DM auto-reply", body: "AI drafts or sends replies to Instagram and Facebook DMs inside the platform's messaging window.", icon: BoltIcon },
  { title: "One shared inbox", body: "Every social conversation joins WhatsApp and Email in one unified inbox, with assignment and human hand-off.", icon: InboxIcon },
];

export default function SocialPage() {
  return (
    <main>
      <MarketingHero
        active="Features"
        eyebrow="FEATURES · SOCIAL"
        title="Every social lead,"
        accent="in one place."
        subtitle="Capture leads, comments, and DMs from Facebook and Instagram, plus Google lead forms, then let AI draft or send replies inside your unified inbox and CRM."
        secondaryCta={{ label: "All features", href: "/features" }}
        highlights={["Facebook · Instagram · Google Ads", "Comments → leads", "AI DM draft or auto-send"]}
        visual={<HeroInbox accent="#a033ff" heading="Social" />}
      />

      <FeatureRows
        label="What you can do"
        rows={[
          {
            no: "01",
            eyebrow: "LEAD ADS",
            title: "Ad-form leads, the moment they submit",
            body: "Connect Facebook and Instagram, plus Google Ads for its lead forms. New lead-form submissions flow into the CRM, where pipeline, stage, routing, and assignment rules can take over.",
            mockup: (
              <StatusCard
                title="New lead · Instagram"
                sub="Lead ad · Priya S."
                tag="ROUTED"
                progressLabel="Synced today"
                progressValue="Lead form synced"
                pct={88}
                primaryBtn="View lead"
              />
            ),
          },
          {
            no: "02",
            eyebrow: "ENGAGEMENT",
            title: "Comments and mentions become leads",
            body: "People who comment on connected posts and ads can become leads automatically, filtered by optional keywords so your pipeline stays clean.",
            reverse: true,
            mockup: (
              <BarsCard
                label="LEADS BY SOURCE"
                bars={[
                  { name: "Instagram", pct: 62, color: "#a033ff" },
                  { name: "Facebook", pct: 44, color: "#1877F2" },
                  { name: "Google Ads", pct: 30, color: "#4285F4" },
                ]}
              />
            ),
          },
          {
            no: "03",
            eyebrow: "AUTO-REPLY",
            title: "AI drafts or sends DM replies",
            body: "Inbound DMs can trigger AI auto-reply in draft or auto-send mode inside the platform's messaging window. A human can take over at any time.",
            mockup: (
              <GaugeCard
                label="DM AUTO-REPLY"
                value="Configured"
                sub="Draft or auto-send"
                footLeft="Window + hand-off"
                footRight="Guarded"
                pct={0.71}
              />
            ),
          },
        ]}
      />

      <FeatureSection
        label="Social toolkit"
        title="Turn every social touch"
        accent="into a lead."
        intro="Ad forms, comments, and DMs from connected platforms, captured, answered, and organized without leaving SpeedIQ. Platform approval and account eligibility still apply."
        items={capabilities}
      />

      <StatsBand
        stats={[
          { value: "3", label: "Facebook, Instagram & Google Ads" },
          { value: "24h", label: "Meta DM reply window" },
          { value: "1", label: "Unified inbox" },
          { value: "Synced", label: "Lead + comment activity" },
        ]}
      />

      <FAQ
        label="Social FAQ"
        title="Social lead capture, answered."
        intro="What you need to know about connecting your social and ad accounts to SpeedIQ."
        items={[
          {
            q: "Which platforms are supported?",
            a: "Facebook and Instagram support lead ads, comments, DMs, and private replies to comments. Google Ads lead forms also sync. LinkedIn and TikTok are coming soon. X is not a native lead or outbound messaging channel here; use a web form for X traffic.",
          },
          {
            q: "Do you support AI auto-reply on social DMs?",
            a: "Yes. Facebook and Instagram DMs can be drafted or auto-sent by AI inside the platform's messaging window, with a human hand-off whenever you want one.",
          },
          {
            q: "Do comments really become leads?",
            a: "People who comment on connected posts and ads can be captured as leads automatically, with an optional keyword filter so only relevant comments reach your pipeline.",
          },
          {
            q: "Where do the leads and conversations end up?",
            a: "Everything lands in the same CRM and unified inbox as your WhatsApp, Email, and SMS, with routing, assignment, and automations applied consistently across every channel.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}

/* ---------------- Icons ---------------- */

function FormIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4.5" y="3.5" width="15" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function ChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 5.5h14v10H9l-4 3.5V5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 10.5h6M9 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function BoltIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M13 3L5 13h5l-1 8 8-10h-5l1-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
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
