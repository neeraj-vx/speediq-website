import type { ReactNode } from "react";

import { EmailIcon, FacebookIcon, InstagramIcon, SmsIcon, WhatsAppIcon } from "@/components/landing/brand-icons";
import { Icon, LogoMark, type IconName } from "@/components/site/icons";
import { CircleLink, SoftLink } from "@/components/site/pills";
import { Container } from "@/components/site/primitives";
import { SIGN_UP_URL } from "@/lib/landing/links";

import { ArchShape, BoltShape, BubbleShape, DiamondShape, Dot } from "./Shapes";
import { ShotPanel, type PanelShot, type Tone } from "./ShotPanel";

/* Section building blocks for the home page. Light display type, cool grey
   cards, big radii, pastel gradient panels around real screenshots. */

/* ------------------------------------------------------------------ */
/* Headings                                                            */
/* ------------------------------------------------------------------ */

export function H2({ children, muted, className = "" }: { children: ReactNode; muted?: ReactNode; className?: string }) {
  return (
    <h2 className={`text-balance font-display text-[34px] font-light leading-[1.08] tracking-[-0.03em] text-ink sm:text-[46px] lg:text-[52px] ${className}`}>
      {children}
      {muted ? (
        <>
          {" "}
          <span className="text-accent">{muted}</span>
        </>
      ) : null}
    </h2>
  );
}

/* ------------------------------------------------------------------ */
/* Bento: Capture / Converse / Convert                                  */
/* ------------------------------------------------------------------ */

function ShapeBadge({ children }: { children: ReactNode }) {
  return <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e4e8f4]">{children}</span>;
}

export function Bento({ shot }: { shot: PanelShot }) {
  const card = "relative flex min-h-[300px] flex-col rounded-[22px] sm:min-h-[340px] sm:rounded-[26px]";
  const pad = "p-6 sm:p-7";
  return (
    <section aria-labelledby="bento-title" className="pt-14 sm:pt-20">
      <Container>
        <h2 id="bento-title" className="sr-only">
          Capture, converse and convert
        </h2>
        <div className="rounded-[28px] bg-mist p-1.5 sm:rounded-[34px] sm:p-2">
          <div className="grid gap-1.5 sm:gap-2 lg:grid-cols-[1fr_1fr_2fr]">
            <div className={`${card} ${pad} bg-mist-2`}>
              <ShapeBadge>
                <BoltShape className="h-8 w-8" />
              </ShapeBadge>
              <div className="mt-auto pt-16">
                <h3 className="font-display text-[26px] font-light tracking-[-0.02em] text-ink">Capture</h3>
                <p className="mt-2 text-[15.5px] leading-[1.65] text-body">Fill the pipeline from forms, booking pages, ads, social and the map, without exports or copy-paste.</p>
              </div>
            </div>
            <div className={`${card} ${pad} bg-mist-2`}>
              <ShapeBadge>
                <BubbleShape className="h-8 w-8" />
              </ShapeBadge>
              <div className="mt-auto pt-16">
                <h3 className="font-display text-[26px] font-light tracking-[-0.02em] text-ink">Converse</h3>
                <p className="mt-2 text-[15.5px] leading-[1.65] text-body">Answer every channel from one inbox, with the AI handling the first reply.</p>
              </div>
            </div>
            <div className={`${card} overflow-hidden bg-white lg:grid lg:grid-cols-[0.82fr_1fr]`}>
              <div className="flex flex-col p-6 sm:p-7">
                <ShapeBadge>
                  <ArchShape className="h-6 w-8" />
                </ShapeBadge>
                <div className="mt-auto pt-16">
                  <h3 className="font-display text-[26px] font-light tracking-[-0.02em] text-ink">Convert</h3>
                  <p className="mt-2 text-[15.5px] leading-[1.65] text-body">Work every deal, automate the follow-up and see what is working.</p>
                </div>
              </div>
              <ShotPanel shot={shot} tone="indigo" mode="top" zoom={2.4} start={{ x: 0.05, y: 0.2 }} className="min-h-[260px] rounded-t-[22px] lg:h-full lg:rounded-l-[26px] lg:rounded-tr-none" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Channel grid                                                         */
/* ------------------------------------------------------------------ */

const CHANNELS: { name: string; href: string; color: string; icon: ReactNode }[] = [
  { name: "WhatsApp", href: "/features/whatsapp", color: "#0526d9", icon: <WhatsAppIcon className="h-6 w-6 fill-current" /> },
  { name: "Instagram", href: "/features/social", color: "#0526d9", icon: <InstagramIcon className="h-6 w-6" /> },
  { name: "Facebook", href: "/features/social", color: "#0526d9", icon: <FacebookIcon className="h-6 w-6" /> },
  { name: "Website chat", href: "/features/inbox", color: "#0526d9", icon: <Icon name="chat" className="h-6 w-6" /> },
  { name: "Email", href: "/features/email", color: "#0526d9", icon: <EmailIcon className="h-6 w-6" /> },
  { name: "SMS", href: "/features/sms", color: "#0526d9", icon: <SmsIcon className="h-6 w-6" /> },
  { name: "Voice", href: "/features/voice", color: "#0526d9", icon: <Icon name="phone" className="h-6 w-6" /> },
  { name: "Google Ads", href: "/features/social", color: "#0526d9", icon: <Icon name="ads" className="h-6 w-6" /> },
  { name: "Forms", href: "/features/forms", color: "#0526d9", icon: <Icon name="form" className="h-6 w-6" /> },
  { name: "Booking", href: "/features/booking", color: "#0526d9", icon: <Icon name="calendar" className="h-6 w-6" /> },
];

export function ChannelGrid({ title = "Every channel your customers already use" }: { title?: string }) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <p className="text-center text-[17px] font-light text-body">{title}</p>
        <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {CHANNELS.map((c) => (
            <li key={c.name} className="flex justify-center">
              <a href={c.href} className="group inline-flex items-center gap-2.5 text-[17px] font-medium text-body transition-colors hover:text-ink">
                <span style={{ color: c.color }} className="transition-transform duration-300 group-hover:scale-110">
                  {c.icon}
                </span>
                {c.name}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Feature cards                                                        */
/* ------------------------------------------------------------------ */

export interface FeatureCardData {
  title: string;
  body: string;
  chips: { icon: IconName; label: string }[];
  cta: { label: string; href: string };
  shot: PanelShot;
  tone: Tone;
  /** Crop of the screenshot shown in the panel (see ShotPanel). */
  zoom?: number;
  start?: { x: number; y: number };
  mode?: "corner" | "top";
}

function FeatureCard({ f }: { f: FeatureCardData }) {
  return (
    <article className="grid overflow-hidden rounded-[26px] bg-mist sm:rounded-[34px] lg:grid-cols-[1fr_1.15fr]">
      <div className="flex flex-col px-6 pb-8 pt-8 sm:px-10 sm:pt-10 lg:p-12">
        <h3 className="font-display text-[32px] font-light leading-[1.1] tracking-[-0.03em] text-ink sm:text-[40px]">{f.title}</h3>
        <p className="mt-4 max-w-[30rem] text-[15.5px] leading-[1.7] text-body">{f.body}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {f.chips.map((c) => (
            <li key={c.label} className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[14px] font-medium text-ink">
              <Icon name={c.icon} className="h-[17px] w-[17px] text-accent" />
              {c.label}
            </li>
          ))}
        </ul>
        <div className="mt-8 lg:mt-auto lg:pt-10">
          <CircleLink href={f.cta.href}>{f.cta.label}</CircleLink>
        </div>
      </div>
      {/* Flush to the card's top, right and bottom edges; the card's own radius rounds the outer corners. */}
      <ShotPanel
        shot={f.shot}
        tone={f.tone}
        mode={f.mode ?? "corner"}
        zoom={f.zoom}
        start={f.start}
        className="min-h-[300px] rounded-t-[24px] sm:min-h-[400px] lg:h-full lg:min-h-[500px] lg:rounded-l-[32px] lg:rounded-tr-none"
      />
    </article>
  );
}

export function FeatureCards({ items }: { items: FeatureCardData[] }) {
  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <H2>
          One workspace for the whole{" "}
          <span className="text-accent">conversation, from first message to signed deal.</span>
        </H2>
        <div className="mt-10 space-y-4 sm:mt-14 sm:space-y-5">
          {items.map((f) => (
            <FeatureCard key={f.title} f={f} />
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Team cards (staggered)                                               */
/* ------------------------------------------------------------------ */

export function TeamCards({ items }: { items: { icon: IconName; title: string; body: string; tag: string }[] }) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <H2>
            Add everyone. <span className="text-accent">Keep control.</span>
          </H2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-[1.6] text-body">
            Roles, privacy and workspaces that let a growing team work from one place without exposing customer data or paying by the head.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
          {items.map((t, i) => (
            <div key={t.title} className={`flex min-h-[270px] flex-col rounded-[24px] bg-white p-6 ring-1 ring-mist-line ${i % 2 === 1 ? "lg:mt-10" : ""}`}>
              <h3 className="font-display text-[23px] font-light leading-[1.2] tracking-[-0.02em] text-ink">{t.title}</h3>
              <p className="mt-3 text-[14.5px] leading-[1.65] text-body">{t.body}</p>
              <div className="mt-auto flex items-center justify-between pt-8">
                <span className="text-[13px] font-medium text-muted">{t.tag}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mist text-ink">
                  <Icon name={t.icon} className="h-5 w-5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Orbit: everything in one place                                       */
/* ------------------------------------------------------------------ */

const STAGE_W = 1100;
const STAGE_H = 640;

type OrbitItem = { name: string; node: ReactNode; ring: 1 | 2 | 3; angle: number };

const ORBIT: OrbitItem[] = [
  { name: "AI assistant", node: <Icon name="sparkle" className="h-full w-full text-accent" />, ring: 1, angle: 38 },
  { name: "WhatsApp", node: <WhatsAppIcon className="h-full w-full fill-current text-accent" />, ring: 1, angle: 90 },
  { name: "Email", node: <EmailIcon className="h-full w-full text-accent" />, ring: 1, angle: 142 },
  { name: "Instagram", node: <InstagramIcon className="h-full w-full text-accent" />, ring: 2, angle: 24 },
  { name: "Website chat", node: <Icon name="chat" className="h-full w-full text-accent" />, ring: 2, angle: 66 },
  { name: "Facebook", node: <FacebookIcon className="h-full w-full text-accent" />, ring: 2, angle: 114 },
  { name: "SMS", node: <SmsIcon className="h-full w-full text-accent" />, ring: 2, angle: 156 },
  { name: "Voice", node: <Icon name="phone" className="h-full w-full text-accent" />, ring: 3, angle: 20 },
  { name: "Forms", node: <Icon name="form" className="h-full w-full text-accent" />, ring: 3, angle: 54 },
  { name: "Booking", node: <Icon name="calendar" className="h-full w-full text-accent" />, ring: 3, angle: 90 },
  { name: "Workflows", node: <Icon name="bolt" className="h-full w-full text-accent" />, ring: 3, angle: 128 },
  { name: "Google Ads", node: <Icon name="ads" className="h-full w-full text-accent" />, ring: 3, angle: 160 },
];

const RING_R: Record<1 | 2 | 3, number> = { 1: 235, 2: 385, 3: 520 };

export function Orbit() {
  return (
    <section className="overflow-hidden pt-8 sm:pt-12">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <H2>Work smarter by keeping everything in one place</H2>
          <div className="mt-8 flex justify-center">
            <CircleLink href={SIGN_UP_URL} size="md">
              Get started free
            </CircleLink>
          </div>
        </div>

        <div className="relative mx-auto mt-6 w-full max-w-[1280px] overflow-hidden" style={{ aspectRatio: `${STAGE_W} / ${STAGE_H}` }}>
          {/* Rings */}
          {([1, 2, 3] as const).map((r) => (
            <span
              key={r}
              aria-hidden
              className="absolute bottom-0 left-1/2 aspect-square -translate-x-1/2 translate-y-1/2 rounded-full border border-mist-line"
              style={{ width: `${((RING_R[r] * 2) / STAGE_W) * 100}%`, background: "radial-gradient(closest-side, rgba(238,240,245,0.0), rgba(238,240,245,0.6))" }}
            />
          ))}
          <span
            aria-hidden
            className="absolute bottom-0 left-1/2 aspect-square -translate-x-1/2 translate-y-1/2 rounded-full border border-mist-line/70"
            style={{ width: `${((680 * 2) / STAGE_W) * 100}%` }}
          />

          {/* Channel bubbles */}
          {ORBIT.map((o, i) => {
            const rad = (o.angle * Math.PI) / 180;
            const r = RING_R[o.ring];
            const left = 50 + ((r * Math.cos(rad)) / STAGE_W) * 100;
            const bottom = ((r * Math.sin(rad)) / STAGE_H) * 100;
            const float = i % 3 === 0 ? "float-a" : i % 3 === 1 ? "float-b" : "float-c";
            return (
              <span
                key={o.name}
                title={o.name}
                className={`absolute -translate-x-1/2 translate-y-1/2 ${o.ring === 3 ? "hidden sm:block" : ""}`}
                style={{ left: `${left}%`, bottom: `${bottom}%` }}
              >
                <span className={`${float} flex h-[clamp(38px,5.4vw,68px)] w-[clamp(38px,5.4vw,68px)] items-center justify-center rounded-full bg-white p-[28%] shadow-[0_8px_24px_-10px_rgba(20,20,20,0.25)] ring-1 ring-black/[0.04]`}>
                  {o.node}
                  <span className="sr-only">{o.name}</span>
                </span>
              </span>
            );
          })}

          {/* Centre mark */}
          <span
            aria-hidden
            className="absolute bottom-0 left-1/2 aspect-square w-[25%] -translate-x-1/2 translate-y-1/2 rounded-full shadow-[0_20px_60px_-20px_rgba(5,38,217,0.5)]"
            style={{ background: "linear-gradient(150deg, #5a7dff 0%, #0526d9 100%)" }}
          />
          <LogoMark className="absolute bottom-[8%] left-1/2 w-[7.5%] -translate-x-1/2 text-white" />
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* How it works                                                         */
/* ------------------------------------------------------------------ */

/** Three numbered step cards in a shared grey tray. */
export function StepsTray({ steps, className = "" }: { steps: { icon: IconName; title: string; body: string }[]; className?: string }) {
  return (
    <ol className={`grid gap-1.5 rounded-[28px] bg-mist p-1.5 sm:gap-2 sm:rounded-[34px] sm:p-2 md:grid-cols-3 ${className}`}>
          {steps.map((s, i) => (
            <li key={s.title} className="flex min-h-[300px] flex-col rounded-[22px] bg-mist-2 p-6 sm:rounded-[26px] sm:p-7">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e4e8f4] text-ink">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <span className="font-display text-[15px] font-light text-muted">0{i + 1}</span>
              </div>
              <div className="mt-auto pt-14">
                <h3 className="font-display text-[24px] font-light leading-[1.2] tracking-[-0.02em] text-ink">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-body">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
  );
}

export function StepsRing({ steps }: { steps: { icon: IconName; title: string; body: string }[] }) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <H2 className="max-w-3xl">
            Up and running <span className="text-accent">in an afternoon. No engineers needed.</span>
          </H2>
          <SoftLink href="/product" size="sm" className="self-start sm:self-auto">
            See the product
          </SoftLink>
        </div>
        <StepsTray steps={steps} className="mt-10 sm:mt-12" />
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                  */
/* ------------------------------------------------------------------ */

export function FaqSection({
  items,
  title = "Questions, answered.",
  lede,
}: {
  items: { q: string; a: string }[];
  title?: string;
  lede?: string;
}) {
  // Anything after the first comma is set in blue, like the other headings.
  const [head, ...rest] = title.split(/(?<=,)\s/);
  return (
    <section className="py-12 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <H2 className="!text-[34px] sm:!text-[42px]">
              {head}
              {rest.length ? <> <span className="text-accent">{rest.join(" ")}</span></> : null}
            </H2>
            {lede ? <p className="mt-4 max-w-sm text-[16px] leading-[1.6] text-body">{lede}</p> : null}
          </div>
          <div className="space-y-2 lg:col-span-8">
            {items.map((f) => (
              <details key={f.q} className="faq group rounded-[22px] bg-mist-2 px-6 transition-colors open:bg-mist">
                <summary className="flex cursor-pointer items-start justify-between gap-6 py-5 text-left text-[16.5px] font-medium text-ink">
                  {f.q}
                  <span className="faq-chevron mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-transform">
                    <Icon name="plus" className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>
                </summary>
                <p className="pb-6 pr-10 text-[15px] leading-[1.7] text-body">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Closing call to action                                               */
/* ------------------------------------------------------------------ */

export function ClosingCta({
  title = "Bring every conversation into one place.",
  body = "Connect your channels, import your contacts and let the AI handle the first reply. No per-seat fees.",
  primary = { label: "Get started free", href: SIGN_UP_URL },
  secondary = { label: "See pricing", href: "/pricing" },
}: {
  title?: string;
  body?: string;
  primary?: { label: string; href: string } | null;
  secondary?: { label: string; href: string } | null;
}) {
  return (
    <section className="relative overflow-hidden pb-24 pt-20 sm:pb-32 sm:pt-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <DiamondShape className="float-c absolute left-[12%] top-[10%] hidden h-14 w-14 opacity-80 sm:block" />
        <Dot className="absolute right-[16%] top-[14%] h-6 w-6 bg-[#9fb4ff]" />
        <BoltShape className="float-a absolute left-[14%] top-[46%] hidden h-24 w-24 sm:block" style={{ ["--r" as string]: "-8deg" }} />
        <BubbleShape className="float-b absolute right-[13%] top-[40%] hidden h-24 w-24 sm:block" style={{ ["--r" as string]: "10deg" }} />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <H2 className="sm:text-[58px] lg:text-[64px]">{title}</H2>
          <p className="mx-auto mt-5 max-w-lg text-[17px] leading-[1.6] text-body">{body}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {primary ? (
              <CircleLink href={primary.href} size="lg">
                {primary.label}
              </CircleLink>
            ) : null}
            {secondary ? (
              <SoftLink href={secondary.href} size="lg">
                {secondary.label}
              </SoftLink>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Hero shapes                                                          */
/* ------------------------------------------------------------------ */

export function HeroShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block">
      <Dot className="absolute left-[46%] top-[1%] h-8 w-8 bg-[#9cc9ff]" />
      <BoltShape className="float-a absolute left-[7%] top-[16%] h-24 w-24 lg:left-[11%] lg:h-28 lg:w-28" style={{ ["--r" as string]: "-10deg" }} />
      <ArchShape className="float-b absolute right-[7%] top-[18%] h-20 w-28 lg:right-[11%] lg:h-24 lg:w-32" style={{ ["--r" as string]: "8deg" }} />
      <DiamondShape className="float-c absolute left-[24%] top-[60%] h-14 w-14 lg:left-[28%]" />
      <BubbleShape className="float-a absolute right-[17%] top-[60%] h-24 w-24 lg:right-[22%] lg:h-28 lg:w-28" style={{ ["--r" as string]: "6deg" }} />
    </div>
  );
}
