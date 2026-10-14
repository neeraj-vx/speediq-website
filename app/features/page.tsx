import { CTA, FAQ, FeatureGrid, PageHero, type GridItem } from "@/components/site/blocks";
import { Section, SectionHeader } from "@/components/site/primitives";
import { FEATURES, FEATURE_GROUPS } from "@/content/features";
import { pageMeta } from "@/lib/landing/seo";

export const metadata = pageMeta(
  "Features",
  "Everything in SpeedIQ: a unified inbox with live chat and an AI assistant, WhatsApp, Instagram, Facebook, email, SMS and voice, plus CRM, forms, booking, prospecting, workflows and reporting.",
  "/features",
);

const ICONS: Record<string, GridItem["icon"]> = {
  inbox: "inbox",
  whatsapp: "chat",
  social: "ads",
  email: "mail",
  sms: "sms",
  voice: "phone",
  forms: "form",
  booking: "calendar",
  prospecting: "map",
  crm: "pipeline",
  automations: "bolt",
  analytics: "chart",
  team: "users",
};

const alsoIncluded: GridItem[] = [
  { icon: "megaphone", title: "Campaigns", body: "Broadcast to an audience on WhatsApp, email or SMS, schedule the send and track every recipient." },
  { icon: "file", title: "Templates", body: "Reusable, on-brand messages per channel, including approved WhatsApp templates, shared with the team." },
  { icon: "users", title: "Audiences", body: "Group contacts by attributes, tags and behaviour, then target the right people on the right channel." },
  { icon: "check", title: "Tasks", body: "Follow-ups with due dates on any lead, assigned to a person, visible on the record and in one list." },
  { icon: "book", title: "Knowledge base", body: "The articles the AI assistant answers from, and a help tab for your live chat widget." },
  { icon: "note", title: "Canned messages & tags", body: "One-click answers to common questions, plus tags to label and filter conversations and contacts." },
  { icon: "webhook", title: "Webhooks & CSV import", body: "Send leads in from any system with a project webhook, or import contacts from a spreadsheet." },
  { icon: "bell", title: "Notifications", body: "In-app and push notifications for new leads, assignments, bookings and hand-offs." },
];

const faq = [
  { q: "Is the unified inbox included on every plan?", a: "Yes. The shared inbox with assignment, internal notes and merged contact history is core to SpeedIQ and available on every plan." },
  { q: "Do campaigns and automations work across all channels?", a: "They share the same concepts across WhatsApp, email and SMS, with channel-specific rules such as WhatsApp templates and messaging windows respected for you." },
  { q: "Can I invite my whole team?", a: "There are no per-seat charges. The number of members follows the member limit on the selected plan." },
  { q: "Which features use credits?", a: "Email, AI, SMS and voice each have their own credit bucket. WhatsApp and social DMs do not use SpeedIQ credits." },
];

export default function FeaturesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Features"
        title="Everything you need to"
        accent="run every channel."
        lede="A unified inbox at the centre, every messaging channel around it, and the CRM, forms, booking, prospecting, workflows and reporting that tie them together."
        secondary={{ label: "See the product tour", href: "/product" }}
        compact
      />

      {FEATURE_GROUPS.map((group) => (
        <Section key={group.label} size="sm">
          <SectionHeader eyebrow={group.label} title={group.blurb} size="sm" />
          <FeatureGrid
            className="mt-10"
            cols={3}
            items={FEATURES.filter((f) => f.group === group.label).map((f) => ({
              icon: ICONS[f.slug] ?? "layers",
              title: f.name,
              body: f.metaDescription,
              href: `/features/${f.slug}`,
            }))}
          />
        </Section>
      ))}

      <Section>
        <SectionHeader eyebrow="Also included" title="The toolkit around the channels." lede="The everyday pieces that keep a busy workspace from turning into chaos, built in from day one." size="sm" />
        <FeatureGrid items={alsoIncluded} cols={4} className="mt-10" />
      </Section>

      <FAQ items={faq} title="Feature questions, answered." />
      <CTA />
    </main>
  );
}
