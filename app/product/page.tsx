import { CTA, FAQ, PageHero, SplitFeature, StatsStrip, Steps, toneAt } from "@/components/site/blocks";
import { ChannelGrid } from "@/components/home/sections";
import { Section, SectionHeader } from "@/components/site/primitives";
import { pageMeta } from "@/lib/landing/seo";

export const metadata = pageMeta(
  "Product tour",
  "A tour of SpeedIQ: the unified inbox and live chat, the AI assistant, WhatsApp and every other channel, the CRM, forms and booking, workflows and reporting.",
  "/product",
);

const faq = [
  { q: "Do I need separate tools for each channel?", a: "No. WhatsApp, Instagram, Facebook, website chat, email, SMS and voice run inside SpeedIQ, with messages and call history organised around one contact record." },
  { q: "How do leads get into the workspace?", a: "From hosted or embedded forms, AI chat forms, booking pages, connected ad and social accounts, comments, project webhooks, Google Maps prospecting, CSV imports and inbound conversations." },
  { q: "Can non-technical teammates build automations?", a: "Yes. Workflows are fully no-code: triggers, branching conditions, delays and actions, with a run history to check what happened." },
  { q: "Can I send data into SpeedIQ from another system?", a: "Yes. Create a project webhook lead source and post lead data into the CRM. Forms, CSV imports, ad connections, prospecting, bookings and inbound messages are supported sources too." },
];

export default function ProductPage() {
  return (
    <main>
      <PageHero
        eyebrow="Product tour"
        title="One platform for every"
        accent="customer message."
        lede="Run WhatsApp, Instagram, Facebook, website chat, email, SMS and voice from one workspace, with a CRM, lead capture, booking and an AI assistant around them."
        secondary={{ label: "Browse all features", href: "/features" }}
        compact
      />

      <ChannelGrid title="Channels and lead sources" />

      <Section size="sm">
        <StatsStrip
          stats={[
            { value: "10", label: "Channels and lead sources" },
            { value: "1", label: "Contact record per person" },
            { value: "$0", label: "Per-seat fees" },
            { value: "2", label: "Interface languages, EN and AR" },
          ]}
        />
      </Section>

      <Section size="sm">
        <div className="space-y-4 sm:space-y-5">
          <SplitFeature
            tone={toneAt(0)}
            eyebrow="01 · Inbox"
            title="Every channel,"
            accent="one thread."
            body="WhatsApp, social DMs, website chat, email and SMS land in a shared inbox with assignment, internal notes, canned replies and the merged contact history beside every reply."
            shot={{ src: "/product/inbox.png", alt: "The unified inbox", label: "Inbox" }}
            cta={{ label: "Unified inbox & live chat", href: "/features/inbox" }}
          />
          <SplitFeature
            reverse
            tone={toneAt(1)}
            eyebrow="02 · Capture"
            title="Leads from everywhere,"
            accent="routed automatically."
            body="Forms, AI chat forms, booking pages, ad lead forms, comments, webhooks, prospecting scans and inbound messages all create leads in one CRM, then routing rules hand them to the right person."
            shot={{ src: "/product/forms-builder.png", alt: "The form builder", label: "Forms" }}
            cta={{ label: "Forms", href: "/features/forms" }}
          />
          <SplitFeature
            tone={toneAt(2)}
            eyebrow="03 · AI"
            title="An assistant that answers,"
            accent="books and hands off."
            body="On website chat, WhatsApp and social DMs the AI replies from your knowledge base, captures details, books appointments and hands over to your team, with draft mode, office hours, caps and a full action log."
            shot={{ src: "/product/ai-conversations.png", alt: "AI Conversations", label: "AI Conversations" }}
            cta={{ label: "Workflows & AI", href: "/features/automations" }}
          />
          <SplitFeature
            reverse
            tone={toneAt(3)}
            eyebrow="04 · CRM"
            title="Pipelines, scoring"
            accent="and the whole timeline."
            body="Drag-and-drop pipelines, lead scoring from your rules, source attribution, tasks, custom fields and operations records, all on one contact."
            shot={{ src: "/product/pipeline.png", alt: "Pipeline board", label: "Pipeline" }}
            cta={{ label: "CRM & pipelines", href: "/features/crm" }}
          />
          <SplitFeature
            tone={toneAt(4)}
            eyebrow="05 · Campaigns"
            title="Broadcasts and sequences"
            accent="on every channel."
            body="Send WhatsApp templates, emails and SMS to audiences, schedule them, and run timed sequences that stop when the person replies. Delivery states per recipient."
            shot={{ src: "/product/campaigns.png", alt: "Campaigns", label: "Campaigns" }}
            cta={{ label: "WhatsApp", href: "/features/whatsapp" }}
          />
          <SplitFeature
            reverse
            tone={toneAt(5)}
            eyebrow="06 · Reporting"
            title="The numbers,"
            accent="in your currency."
            body="Delivery and engagement by channel, pipeline and revenue over time, lead-source attribution and credit usage, displayed in the currency you work in."
            shot={{ src: "/product/analytics.png", alt: "Analytics", label: "Analytics" }}
            cta={{ label: "Analytics & reporting", href: "/features/analytics" }}
          />
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Getting started" title="Three steps to a working workspace." size="sm" />
        <div className="mt-10">
          <Steps
            steps={[
              { icon: "webhook", title: "Connect channels", body: "WhatsApp via embedded signup, Instagram and Facebook, your email domain, an SMS number and the chat widget." },
              { icon: "upload", title: "Import or capture leads", body: "CSV import, forms, booking pages, ad accounts or a Maps scan. Everything lands in one CRM." },
              { icon: "bolt", title: "Automate", body: "Routing, sequences and the AI assistant take the first reply and the follow-up off your plate." },
            ]}
          />
        </div>
      </Section>

      <FAQ items={faq} title="How the platform works." />
      <CTA />
    </main>
  );
}
