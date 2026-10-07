import type { ReactNode } from "react";

import { EmailIcon, FacebookIcon, InstagramIcon, SmsIcon, WhatsAppIcon } from "@/components/landing/brand-icons";
import { PRICING } from "@/lib/pricing/data";
import { formatMoney } from "@/lib/pricing/config";
import { SIGN_UP_URL } from "@/lib/landing/links";

import { Icon, type IconName } from "./icons";
import { Button, Checklist, Container, Eyebrow, Heading, Lede, Section, SectionHeader } from "./primitives";
import { ProductShot, type Shot } from "./ProductShot";

/* ------------------------------------------------------------------ */
/* Feature grid                                                        */
/* ------------------------------------------------------------------ */

export interface GridItem {
  icon: IconName;
  title: string;
  body: string;
  href?: string;
}

export function FeatureGrid({
  items,
  cols = 3,
  className = "",
}: {
  items: GridItem[];
  cols?: 2 | 3 | 4;
  className?: string;
}) {
  const colClass = cols === 2 ? "sm:grid-cols-2" : cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid gap-4 ${colClass} ${className}`}>
      {items.map((item) => {
        const inner = (
          <>
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-soft text-accent">
              <Icon name={item.icon} className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-[17px] font-medium text-ink">{item.title}</h3>
            <p className="mt-2 text-[14.5px] leading-[1.6] text-body">{item.body}</p>
            {item.href ? (
              <span className="mt-4 inline-flex items-center gap-1 text-[14px] font-medium text-accent">
                Learn more <Icon name="arrow" className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
            ) : null}
          </>
        );
        const cls = "flex flex-col rounded-lg border border-line bg-white p-6 transition-colors";
        return item.href ? (
          <a key={item.title} href={item.href} className={`${cls} hover:border-line-strong hover:bg-surface/60`}>
            {inner}
          </a>
        ) : (
          <div key={item.title} className={cls}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Split feature: text beside a product shot                            */
/* ------------------------------------------------------------------ */

export function SplitFeature({
  eyebrow,
  title,
  accent,
  body,
  bullets,
  shot,
  reverse = false,
  cta,
  children,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  body: string;
  bullets?: string[];
  shot: Shot;
  reverse?: boolean;
  cta?: { label: string; href: string };
  children?: ReactNode;
}) {
  return (
    <div className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-14 ${reverse ? "" : ""}`}>
      <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
        {eyebrow ? <Eyebrow className="mb-4">{eyebrow}</Eyebrow> : null}
        <Heading size="sm" accent={accent} as="h3">
          {title}
        </Heading>
        <p className="mt-4 text-[16px] leading-[1.65] text-body">{body}</p>
        {bullets ? <Checklist items={bullets} className="mt-6" /> : null}
        {children}
        {cta ? (
          <a href={cta.href} className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-accent hover:text-accent-ink">
            {cta.label} <Icon name="arrow" className="h-4 w-4" strokeWidth={2} />
          </a>
        ) : null}
      </div>
      <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
        <ProductShot shot={shot} sizes="(max-width: 1024px) 100vw, 700px" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Steps                                                               */
/* ------------------------------------------------------------------ */

export function Steps({ steps }: { steps: { title: string; body: string; icon: IconName }[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-3">
      {steps.map((s, i) => (
        <li key={s.title} className="relative rounded-lg border border-line bg-white p-6">
          <div className="flex items-center justify-between">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ink text-white">
              <Icon name={s.icon} className="h-5 w-5" />
            </span>
            <span className="font-display text-[13px] font-medium text-faint">0{i + 1}</span>
          </div>
          <h3 className="mt-5 text-[17px] font-medium text-ink">{s.title}</h3>
          <p className="mt-2 text-[14.5px] leading-[1.6] text-body">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ */
/* Stats strip                                                         */
/* ------------------------------------------------------------------ */

export function StatsStrip({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-white px-6 py-6">
          <dt className="text-[13px] text-muted">{s.label}</dt>
          <dd className="mt-1 font-display text-[28px] font-medium tracking-tight text-ink sm:text-[32px]">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ------------------------------------------------------------------ */
/* Channel strip                                                       */
/* ------------------------------------------------------------------ */

const CHANNELS: { name: string; icon: ReactNode; href: string }[] = [
  { name: "WhatsApp", icon: <WhatsAppIcon className="h-5 w-5" />, href: "/features/whatsapp" },
  { name: "Instagram", icon: <InstagramIcon className="h-5 w-5" />, href: "/features/social" },
  { name: "Facebook", icon: <FacebookIcon className="h-5 w-5" />, href: "/features/social" },
  { name: "Website chat", icon: <Icon name="chat" className="h-5 w-5" />, href: "/features/inbox" },
  { name: "Email", icon: <EmailIcon className="h-5 w-5" />, href: "/features/email" },
  { name: "SMS", icon: <SmsIcon className="h-5 w-5" />, href: "/features/sms" },
  { name: "Voice", icon: <Icon name="phone" className="h-5 w-5" />, href: "/features/voice" },
  { name: "Google Ads leads", icon: <Icon name="ads" className="h-5 w-5" />, href: "/features/social" },
  { name: "Forms", icon: <Icon name="form" className="h-5 w-5" />, href: "/features/forms" },
  { name: "Booking", icon: <Icon name="calendar" className="h-5 w-5" />, href: "/features/booking" },
];

export function ChannelStrip({ title = "Every channel your customers already use" }: { title?: string }) {
  return (
    <div>
      <p className="text-center text-[13px] font-medium uppercase tracking-[0.14em] text-muted">{title}</p>
      <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
        {CHANNELS.map((c) => (
          <li key={c.name}>
            <a
              href={c.href}
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-4 py-2 text-[14px] font-medium text-ink transition-colors hover:border-line-strong hover:bg-surface"
            >
              <span className="text-body">{c.icon}</span>
              {c.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ (native details, no JS)                                         */
/* ------------------------------------------------------------------ */

export function FAQ({
  items,
  title = "Questions, answered.",
  eyebrow = "FAQ",
  lede,
}: {
  items: { q: string; a: string }[];
  title?: string;
  eyebrow?: string;
  lede?: string;
}) {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeader eyebrow={eyebrow} title={title} lede={lede} size="sm" />
        </div>
        <div className="lg:col-span-8">
          <div className="divide-y divide-line border-y border-line">
            {items.map((f) => (
              <details key={f.q} className="faq group">
                <summary className="flex cursor-pointer items-start justify-between gap-6 py-5 text-left text-[16px] font-medium text-ink">
                  {f.q}
                  <span className="faq-chevron mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-body transition-transform">
                    <Icon name="plus" className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>
                </summary>
                <p className="pb-6 pr-12 text-[15px] leading-[1.7] text-body">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Final CTA                                                           */
/* ------------------------------------------------------------------ */

export function CTA({
  title = "Bring every conversation into one place.",
  body = "Connect your channels, import your contacts and let the AI handle the first reply. No per-seat fees.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <Section size="sm" className="pb-20 sm:pb-28">
      <div className="relative overflow-hidden rounded-xl bg-ink px-7 py-14 text-white sm:px-14 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(60% 80% at 85% 20%, rgba(5,38,217,0.55), transparent 65%), radial-gradient(40% 60% at 10% 100%, rgba(5,38,217,0.35), transparent 60%)" }}
        />
        <div className="relative grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="text-balance font-display text-[32px] font-medium leading-[1.08] text-white sm:text-[44px]">{title}</h2>
            <p className="mt-4 max-w-xl text-[16px] leading-[1.6] text-white/75 sm:text-[17px]">{body}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <Button href={SIGN_UP_URL} variant="inverse" size="lg" arrow>
              Get started free
            </Button>
            <Button href="/pricing" variant="ghost" size="lg" className="text-white hover:bg-white/10">
              See pricing
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Pricing teaser                                                      */
/* ------------------------------------------------------------------ */

const num = (n: number | null) => (n == null ? "" : n.toLocaleString("en-US"));

export function PricingTeaser() {
  const tiers = PRICING.tiers;
  return (
    <Section tone="surface">
      <SectionHeader
        eyebrow="Pricing"
        title="One fixed price per plan."
        accent="No per-seat fees."
        lede="Every plan includes monthly credit buckets for email, AI, SMS and voice. Add teammates without paying by the head, within the plan's member limit."
        align="center"
      />
      <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-3">
        {tiers.map((t) => {
          const popular = t.id === "pro";
          const credits = [
            t.monthly_credits_email ? `${num(t.monthly_credits_email)} email` : null,
            t.monthly_credits_ai ? `${num(t.monthly_credits_ai)} AI` : null,
            t.monthly_credits_sms ? `${num(t.monthly_credits_sms)} SMS` : null,
            t.monthly_credits_voice ? `${num(t.monthly_credits_voice)} voice` : null,
          ].filter(Boolean);
          return (
            <div key={t.id} className={`rounded-lg border bg-white p-6 ${popular ? "border-accent shadow-card" : "border-line"}`}>
              <div className="flex items-center justify-between">
                <span className="text-[15px] font-medium text-ink">{t.name}</span>
                {popular ? <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">Popular</span> : null}
              </div>
              <div className="mt-4 flex items-end gap-1.5">
                <span className="font-display text-[36px] font-medium leading-none tracking-tight text-ink">
                  {t.price_usd_monthly != null ? formatMoney(t.price_usd_monthly) : "–"}
                </span>
                <span className="pb-1 text-[13px] text-muted">/ mo</span>
              </div>
              <p className="mt-3 text-[13px] leading-6 text-body">{credits.join(" · ")} credits included</p>
              <p className="text-[13px] leading-6 text-muted">
                {t.max_contacts == null ? "Unlimited" : num(t.max_contacts)} contacts · {t.max_seats == null ? "unlimited" : t.max_seats} members
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex justify-center">
        <Button href="/pricing" variant="secondary" arrow>
          Compare plans and credit costs
        </Button>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Sub-page hero                                                       */
/* ------------------------------------------------------------------ */

export function PageHero({
  eyebrow,
  title,
  accent,
  lede,
  bullets,
  shot,
  primary = { label: "Get started free", href: SIGN_UP_URL },
  secondary,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  lede: string;
  bullets?: string[];
  shot?: Shot;
  primary?: { label: string; href: string } | null;
  secondary?: { label: string; href: string };
  compact?: boolean;
}) {
  return (
    <section className="hero-glow">
      <Container className={compact ? "pb-10 pt-14 sm:pb-14 sm:pt-20" : "pb-6 pt-14 sm:pt-20"}>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className={shot ? "lg:col-span-6" : "lg:col-span-8"}>
            <Eyebrow className="rise rise-1">{eyebrow}</Eyebrow>
            <Heading as="h1" size="lg" accent={accent} className="rise rise-2 mt-4">
              {title}
            </Heading>
            <Lede className="rise rise-3 mt-5 max-w-xl">{lede}</Lede>
            {bullets ? <Checklist items={bullets} className="rise rise-3 mt-6" /> : null}
            {primary || secondary ? (
              <div className="rise rise-4 mt-8 flex flex-wrap gap-3">
                {primary ? (
                  <Button href={primary.href} size="lg" arrow>
                    {primary.label}
                  </Button>
                ) : null}
                {secondary ? (
                  <Button href={secondary.href} variant="secondary" size="lg">
                    {secondary.label}
                  </Button>
                ) : null}
              </div>
            ) : null}
          </div>
          {shot ? (
            <div className="rise rise-4 lg:col-span-6">
              <ProductShot shot={shot} priority sizes="(max-width: 1024px) 100vw, 600px" />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
