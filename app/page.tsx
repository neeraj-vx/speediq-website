import { ChannelStrip, CTA, FAQ, FeatureGrid, PricingTeaser, SplitFeature, Steps } from "@/components/site/blocks";
import { Icon, type IconName } from "@/components/site/icons";
import { ProductShot } from "@/components/site/ProductShot";
import { Button, Container, Eyebrow, Heading, Lede, Section, SectionHeader } from "@/components/site/primitives";
import { SIGN_UP_URL } from "@/lib/landing/links";

/* Home: the long landing page. Product-first; every visual is a screenshot
   of the app (components/site/ProductShot renders a placeholder until the
   file exists in public/product). */

const pillars: { icon: IconName; title: string; body: string; items: { label: string; href: string }[] }[] = [
  {
    icon: "target",
    title: "Capture",
    body: "Fill the pipeline from every source, without exports or copy-paste.",
    items: [
      { label: "Forms & AI chat forms", href: "/features/forms" },
      { label: "Booking pages", href: "/features/booking" },
      { label: "Instagram, Facebook & Google Ads leads", href: "/features/social" },
      { label: "Google Maps prospecting", href: "/features/prospecting" },
      { label: "Webhooks & CSV import", href: "/features" },
    ],
  },
  {
    icon: "inbox",
    title: "Converse",
    body: "Answer every channel from one inbox, with the AI handling the first reply.",
    items: [
      { label: "Unified inbox & live chat", href: "/features/inbox" },
      { label: "WhatsApp Business", href: "/features/whatsapp" },
      { label: "Email & SMS", href: "/features/email" },
      { label: "Voice & WhatsApp calling", href: "/features/voice" },
      { label: "AI assistant with hand-off", href: "/features/automations" },
    ],
  },
  {
    icon: "pipeline",
    title: "Convert",
    body: "Work every deal, automate the follow-up and see what is working.",
    items: [
      { label: "CRM & pipelines", href: "/features/crm" },
      { label: "Workflows & sequences", href: "/features/automations" },
      { label: "Lead routing", href: "/features/automations" },
      { label: "Campaigns & templates", href: "/features" },
      { label: "Analytics & reporting", href: "/features/analytics" },
    ],
  },
];

const steps = [
  { icon: "webhook", title: "Connect your channels", body: "WhatsApp through Meta's embedded signup, Instagram and Facebook, your email domain, an SMS number, and the chat widget on your site." },
  { icon: "upload", title: "Bring in your leads", body: "Import a CSV, publish a form or booking page, sync your ad accounts, or scan the map. Every lead lands in one CRM." },
  { icon: "bolt", title: "Automate the follow-up", body: "Route new leads, let the AI answer first, run sequences, and watch delivery and revenue in one place." },
] as const;

const teamItems = [
  { icon: "users", title: "No per-seat fees", body: "Invite the whole team within your plan's member limit. You pay for the plan and credits, not heads." },
  { icon: "eye-off", title: "Masked agent role", body: "Reps work leads while phone numbers and emails stay hidden, enforced at the database level." },
  { icon: "layers", title: "Projects as workspaces", body: "Separate brands or clients, each with its own channels, team, settings and billing." },
  { icon: "language", title: "English & Arabic", body: "A full right-to-left interface for Arabic-speaking teams, switchable per user." },
] satisfies { icon: IconName; title: string; body: string }[];

const faq = [
  { q: "Which channels does SpeedIQ support?", a: "WhatsApp (official Business Platform), Instagram and Facebook DMs, comments and lead ads, Google Ads lead forms, website live chat, email, SMS and voice calls, including WhatsApp calling." },
  { q: "What does the AI assistant actually do?", a: "It answers visitors and customers from your knowledge base and instructions on website chat, WhatsApp and social DMs, captures their details, books appointments against your real availability, and hands the conversation to your team when needed. Every action is logged." },
  { q: "Do I pay per user?", a: "No. Plans have a fixed monthly price with a member limit, and no per-seat charges. Usage is covered by credit buckets for email, AI, SMS and voice. WhatsApp and social DMs do not use credits." },
  { q: "Can I replace my CRM with SpeedIQ?", a: "For most messaging-led teams, yes. Contacts, pipelines, lead scoring, tasks, custom fields, routing and a cross-channel timeline are built in, and webhooks and CSV import bring data from anywhere else." },
  { q: "How long does setup take?", a: "Connecting a channel takes minutes. WhatsApp uses Meta's embedded signup, email needs a DNS record for your domain, and the chat widget is one script tag." },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-glow">
        <Container className="pt-14 sm:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="rise rise-1">Customer messaging platform</Eyebrow>
            <Heading as="h1" size="xl" className="rise rise-2 mt-5">
              Every customer conversation, <span className="text-accent">one inbox.</span>
            </Heading>
            <Lede className="rise rise-3 mx-auto mt-6 max-w-2xl">
              WhatsApp, Instagram, Facebook, website chat, email, SMS and calls land in one place. A CRM, booking, forms,
              campaigns and an AI assistant sit around it, so leads get answered, qualified and followed up without the
              tab-switching.
            </Lede>
            <div className="rise rise-4 mt-8 flex flex-wrap justify-center gap-3">
              <Button href={SIGN_UP_URL} size="lg" arrow>
                Get started free
              </Button>
              <Button href="/product" variant="secondary" size="lg">
                See how it works
              </Button>
            </div>
            <p className="rise rise-4 mt-4 text-[13px] text-muted">No per-seat fees · Official WhatsApp Business API · English & Arabic</p>
          </div>
          <div className="rise rise-4 mt-12 sm:mt-16">
            <ProductShot shot={{ src: "/product/inbox.png", alt: "The SpeedIQ inbox with WhatsApp, Instagram, email and website chat conversations in one list", label: "Inbox" }} priority />
          </div>
        </Container>
      </section>

      <Section size="sm">
        <ChannelStrip />
      </Section>

      {/* Capture / Converse / Convert */}
      <Section>
        <SectionHeader
          eyebrow="One platform"
          title="Capture, converse and convert"
          accent="from a single workspace."
          lede="Point tools give you a WhatsApp app, an email tool, a helpdesk and a CRM that barely talk to each other. SpeedIQ is the whole loop, with one contact record underneath."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-lg border border-line bg-white p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ink text-white">
                <Icon name={p.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-[22px] font-medium text-ink">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-body">{p.body}</p>
              <ul className="mt-6 divide-y divide-line border-t border-line">
                {p.items.map((it) => (
                  <li key={it.label}>
                    <a href={it.href} className="group flex items-center justify-between py-3 text-[14.5px] font-medium text-ink">
                      {it.label}
                      <Icon name="arrow" className="h-4 w-4 text-faint transition-transform group-hover:translate-x-0.5 group-hover:text-ink" strokeWidth={2} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Deep dives */}
      <Section tone="surface">
        <div className="space-y-20 sm:space-y-28">
          <SplitFeature
            eyebrow="Unified inbox & live chat"
            title="One thread per customer,"
            accent="whatever channel they pick."
            body="Messages from every channel the same person uses collapse into one timeline, with assignment, private notes and canned replies. Add the live chat widget to your site with one script tag and visitors land in the same queue."
            bullets={["Assign, note and resolve without leaving the thread", "Branded chat widget with starters, office hours and a help tab", "Calls, bookings and form submissions on the same timeline"]}
            shot={{ src: "/product/live-chat.png", alt: "Live chat widget set-up with the branded widget preview", label: "Live chat" }}
            cta={{ label: "Explore the inbox", href: "/features/inbox" }}
          />
          <SplitFeature
            reverse
            eyebrow="AI assistant"
            title="The first reply,"
            accent="handled."
            body="Give the assistant a personality and your knowledge base. On website chat, WhatsApp and social DMs it greets people by name, answers questions, captures details, books an open slot in one step and hands off to your team when a human should take over."
            bullets={["Draft-for-review or auto-send, with office hours, caps and rate limits", "Books appointments against your real availability", "Every AI action logged under AI Conversations"]}
            shot={{ src: "/product/ai-conversations.png", alt: "AI Conversations showing assistant replies and the action log", label: "AI Conversations" }}
            cta={{ label: "See workflows & AI", href: "/features/automations" }}
          />
          <SplitFeature
            eyebrow="CRM & pipelines"
            title="A CRM that fills itself"
            accent="from the conversations."
            body="Leads are created from chats, forms, bookings, ads and the map, then move through drag-and-drop pipelines with scoring, source attribution, tasks and custom fields. One record per person, every channel merged."
            bullets={["As many pipelines and stages as you sell with", "Lead scoring from rules you set", "Tasks, notes and operations records on the lead"]}
            shot={{ src: "/product/pipeline.png", alt: "A pipeline board with leads in stages", label: "Pipeline" }}
            cta={{ label: "Explore the CRM", href: "/features/crm" }}
          />
          <SplitFeature
            reverse
            eyebrow="Workflows"
            title="Follow-up that runs"
            accent="while you sleep."
            body="A visual, no-code builder: trigger on a new lead, a message, a stage change or a booking, branch on any field, then assign, tag, message, create a task, call a webhook or run AI. Sequences space the follow-up out and stop when the person replies."
            bullets={["Round-robin, weighted or fixed lead routing", "Multi-step sequences on email, SMS or WhatsApp", "Run history that shows what fired and why"]}
            shot={{ src: "/product/workflow.png", alt: "The visual workflow builder", label: "Workflow builder" }}
            cta={{ label: "See the builder", href: "/features/automations" }}
          />
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeader eyebrow="How it works" title="Up and running" accent="in an afternoon." lede="No engineers needed. Connect, import, automate." />
        <div className="mt-12">
          <Steps steps={[...steps]} />
        </div>
      </Section>

      {/* Team */}
      <Section tone="surface">
        <SectionHeader eyebrow="Built for teams" title="Add everyone." accent="Keep control." lede="Roles, privacy and workspaces that let a growing team work from one place without exposing customer data or paying by the head." />
        <FeatureGrid items={teamItems} cols={4} className="mt-12" />
      </Section>

      <PricingTeaser />
      <FAQ items={faq} />
      <CTA />
    </main>
  );
}
