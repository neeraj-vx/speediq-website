import { pageMeta } from "@/lib/landing/seo";
import Footer from "@/components/landing/Footer";
import {
  MarketingHero,
  FeatureRows,
  ValuesList,
  StatsBand,
  BarsCard,
  StatusCard,
  GaugeCard,
  FAQ,
  type Value,
} from "@/components/landing/marketing";

export const metadata = pageMeta(
  "Unified Inbox",
  "The SpeedIQ unified inbox for WhatsApp, Email, SMS, Voice, and connected social messages, with assignment, internal notes, and merged contact history.",
  "/features/inbox",
);

const values: Value[] = [
  {
    title: "One thread per contact",
    body: "WhatsApp, Email, SMS, and connected social activity for the same person collapse into one contact timeline; voice calls appear there too.",
    icon: ThreadIcon,
  },
  {
    title: "Assignment & ownership",
    body: "Route conversations to the right teammate, see who's handling what, and avoid two people replying to the same customer.",
    icon: UserCheckIcon,
  },
  {
    title: "Internal notes",
    body: "Leave private notes and @mention colleagues inside a thread without the customer ever seeing them.",
    icon: NoteIcon,
  },
  {
    title: "Automatic contact merging",
    body: "When the same person reaches you on two channels, their records merge automatically into one profile.",
    icon: MergeIcon,
  },
];

export default function InboxPage() {
  return (
    <main>
      <MarketingHero
        active="Features"
        eyebrow="FEATURES · UNIFIED INBOX"
        title="Every conversation in"
        accent="one place."
        subtitle="The unified inbox is the heart of SpeedIQ. WhatsApp, Email, SMS, voice, and connected social activity share one contact timeline, so your team stops switching tabs and losing context."
        secondaryCta={{ label: "All features", href: "/features" }}
        highlights={["One thread per contact", "Assignment & notes", "Auto contact merging"]}
      />

      <FeatureRows
        label="How it works"
        rows={[
          {
            no: "01",
            eyebrow: "ONE INBOX",
            title: "Messages and social activity, one view",
            body: "Messages from WhatsApp, Email, SMS, and connected social accounts land in the shared inbox. Filter by channel, status, or owner, and reply from the channel the customer used.",
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
            eyebrow: "TEAMWORK",
            title: "Assign, note, and resolve",
            body: "Assign threads to teammates, drop internal notes, and track resolution, all without leaving the conversation or cc-ing anyone on an email.",
            reverse: true,
            mockup: (
              <StatusCard
                title="Open conversations"
                sub="Across all channels"
                tag="ASSIGNED"
                progressLabel="Resolved today"
                progressValue="Assignment + status"
                pct={88}
                primaryBtn="Open inbox"
              />
            ),
          },
          {
            no: "03",
            eyebrow: "RESPONSIVENESS",
            title: "Context across every channel",
            body: "With messages, notes, assignments, and call history in one queue, the team can respond with the full customer context in view.",
            mockup: (
              <GaugeCard
                label="FIRST RESPONSE"
                value="Tracked"
                sub="Assignment + reply activity"
                footLeft="All channels"
                footRight="Fast"
                pct={0.9}
              />
            ),
          },
        ]}
      />

      <ValuesList
        label="Why it matters"
        title="Built so context is"
        accent="never lost."
        values={values}
      />

      <StatsBand
        stats={[
          { value: "Multi", label: "Messaging and social channels" },
          { value: "1", label: "Contact timeline" },
          { value: "1", label: "Thread per contact" },
          { value: "0", label: "Per-seat fees" },
        ]}
      />

      <FAQ
        label="Inbox FAQ"
        title="Inbox questions, answered."
        intro="How the shared inbox keeps your team on the same page."
        items={[
          {
            q: "How do messages from different channels stay together?",
            a: "When the same person reaches you on WhatsApp, Email, SMS, or a connected social channel, SpeedIQ can merge the identities into one profile and timeline. Voice calls are shown on that timeline too.",
          },
          {
            q: "Can I assign conversations to teammates?",
            a: "Yes. Route threads to the right person, see who's handling what, and avoid two people replying to the same customer.",
          },
          {
            q: "Are internal notes visible to customers?",
            a: "Never. Notes and @mentions stay private to your team, inside the thread, so context lives with the conversation.",
          },
          {
            q: "Does it slow down at high volume?",
            a: "The inbox provides one queue with filters by channel, status, and owner. Performance still depends on your team, provider, and message volume.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}

/* ---------------- Icons ---------------- */

function ThreadIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 6.5h11v6H9l-4 3V6.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 9.5h7M19 10.5v6l-3-2.5h-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function UserCheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="10" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 19c0-2.8 2.7-5 6-5M15 13l2 2 3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function NoteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 4.5h14v11l-4 4H5v-15Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M15 19.5v-4h4M8.5 9h7M8.5 12h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function MergeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 4v4c0 3 2 5 5 5h3M6 20v-4M14 13l-2.5-2.5M14 13l-2.5 2.5M14 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
