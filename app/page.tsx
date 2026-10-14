import { HeroShowcase } from "@/components/home/HeroShowcase";
import {
  Bento,
  ChannelGrid,
  ClosingCta,
  FaqSection,
  FeatureCards,
  HeroShapes,
  Orbit,
  StepsRing,
  TeamCards,
  type FeatureCardData,
} from "@/components/home/sections";
import type { IconName } from "@/components/site/icons";
import { CircleLink, SoftLink } from "@/components/site/pills";
import { Container } from "@/components/site/primitives";
import { SIGN_UP_URL } from "@/lib/landing/links";

/* Home: white page, cool grey cards, blue gradient panels around real
   screenshots of the app (public/product). Content is SpeedIQ's own; nothing
   here claims customers, reviews or results we cannot back up. */

const features: FeatureCardData[] = [
  {
    title: "Inbox & live chat",
    body: "Messages from every channel the same person uses collapse into one timeline, with assignment, private notes and canned replies. Add the chat widget to your site with one script tag and visitors land in the same queue.",
    chips: [
      { icon: "users", label: "Assignment" },
      { icon: "note", label: "Private notes" },
      { icon: "chat", label: "Live chat widget" },
      { icon: "calendar", label: "Calls & bookings" },
    ],
    cta: { label: "Explore the inbox", href: "/features/inbox" },
    shot: { src: "/product/live-chat.png", alt: "Live chat widget set-up with a branded preview of the widget" },
    tone: "periwinkle",
    zoom: 3,
    start: { x: 0.66, y: 0.28 },
  },
  {
    title: "AI assistant",
    body: "Give the assistant a personality and your knowledge base. On website chat, WhatsApp and social DMs it greets people by name, answers questions, captures details, books an open slot and hands off to your team when a human should take over.",
    chips: [
      { icon: "sparkle", label: "Auto-send or review" },
      { icon: "clock", label: "Office hours & caps" },
      { icon: "calendar", label: "Books appointments" },
      { icon: "shield", label: "Every action logged" },
    ],
    cta: { label: "See AI & workflows", href: "/features/automations" },
    shot: { src: "/product/ai-conversations.png", alt: "AI Conversations showing assistant replies sent and one waiting for review" },
    tone: "sky",
    zoom: 1.4,
    start: { x: 0, y: 0.04 },
  },
  {
    title: "CRM & pipelines",
    body: "Leads are created from chats, forms, bookings, ads and the map, then move through drag-and-drop pipelines with scoring, source attribution, tasks and custom fields. One record per person, every channel merged.",
    chips: [
      { icon: "pipeline", label: "Drag-and-drop stages" },
      { icon: "target", label: "Lead scoring" },
      { icon: "tag", label: "Source attribution" },
      { icon: "note", label: "Tasks & notes" },
    ],
    cta: { label: "Explore the CRM", href: "/features/crm" },
    shot: { src: "/product/pipeline.png", alt: "A sales pipeline board with leads grouped by stage and deal value" },
    tone: "indigo",
    zoom: 1.45,
    start: { x: 0, y: 0.1 },
  },
  {
    title: "Workflows",
    body: "A visual, no-code builder: trigger on a new lead, a message, a stage change or a booking, branch on any field, then assign, tag, message, create a task, call a webhook or run AI. Sequences space the follow-up out and stop when the person replies.",
    chips: [
      { icon: "bolt", label: "Triggers" },
      { icon: "branch", label: "If / else branches" },
      { icon: "route", label: "Lead routing" },
      { icon: "history", label: "Run history" },
    ],
    cta: { label: "See the builder", href: "/features/automations" },
    shot: { src: "/product/workflow.png", alt: "The visual workflow builder with a trigger, a WhatsApp message and a yes/no branch" },
    tone: "slate",
    zoom: 1.8,
    start: { x: 0.25, y: 0.25 },
  },
];

const teamItems: { icon: IconName; title: string; body: string; tag: string }[] = [
  { icon: "users", title: "No per-seat fees", body: "Invite the whole team within your plan's member limit. You pay for the plan and credits, not heads.", tag: "Pricing" },
  { icon: "eye-off", title: "Masked agent role", body: "Reps work leads while phone numbers and emails stay hidden, enforced at the database level.", tag: "Privacy" },
  { icon: "layers", title: "Projects as workspaces", body: "Separate brands or clients, each with its own channels, team, settings and billing.", tag: "Workspaces" },
  { icon: "language", title: "English & Arabic", body: "A full right-to-left interface for Arabic-speaking teams, switchable per user.", tag: "Language" },
];

const steps: { icon: IconName; title: string; body: string }[] = [
  { icon: "webhook", title: "Connect your channels", body: "WhatsApp through Meta's embedded signup, Instagram and Facebook, your email domain, an SMS number, and the chat widget on your site." },
  { icon: "upload", title: "Bring in your leads", body: "Import a CSV, publish a form or booking page, sync your ad accounts, or scan the map. Every lead lands in one CRM." },
  { icon: "bolt", title: "Automate the follow-up", body: "Route new leads, let the AI answer first, run sequences, and watch delivery and revenue in one place." },
];

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
      <section className="relative">
        <HeroShapes />
        <Container className="relative pt-12 sm:pt-16">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="rise rise-1 text-balance font-display text-[44px] font-light leading-[1.02] tracking-[-0.04em] text-ink sm:text-[68px] lg:text-[84px]">
              Every customer conversation, <span className="text-accent">one inbox.</span>
            </h1>
            <p className="rise rise-3 mx-auto mt-6 max-w-2xl text-pretty text-[17px] leading-[1.6] text-body sm:text-[19px]">
              WhatsApp, Instagram, Facebook, website chat, email, SMS and calls land in one place. A CRM, booking, forms, campaigns and an AI assistant sit around it, so leads get answered, qualified and followed up without the tab-switching.
            </p>
            <div className="rise rise-4 mt-8 flex flex-wrap items-center justify-center gap-4">
              <CircleLink href={SIGN_UP_URL} size="lg">
                Get started free
              </CircleLink>
              <SoftLink href="/product" size="lg">
                See how it works
              </SoftLink>
            </div>
            <p className="rise rise-4 mt-5 text-[13px] text-muted">No per-seat fees · Set up in an afternoon</p>
          </div>
          <div className="rise rise-4 relative mt-12 sm:mt-16">
            <HeroShowcase />
          </div>
        </Container>
      </section>

      <Bento shot={{ src: "/product/pipeline.png", alt: "Pipeline stages with deal values and lead sources" }} />
      <ChannelGrid />
      <FeatureCards items={features} />
      <TeamCards items={teamItems} />
      <Orbit />
      <StepsRing steps={steps} />
      <FaqSection items={faq} />
      <ClosingCta />
    </main>
  );
}
