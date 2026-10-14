import type { ReactNode } from "react";

import { ClosingCta, FaqSection } from "@/components/home/sections";
import { TONE_CYCLE, type Tone } from "@/components/home/ShotPanel";
import { SIGN_UP_URL } from "@/lib/landing/links";

import { Icon, type IconName } from "./icons";
import { CircleLink } from "./pills";
import { Button, Checklist, Container, Eyebrow, Heading, Lede } from "./primitives";
import { ProductShot, type Shot } from "./ProductShot";

/* Building blocks for the inner pages, in the same look as the home page:
   white page, cool grey cards, big radii, pastel blue panels around
   screenshots. FAQ and CTA are the home page's own sections, re-exported so the
   two never drift apart. */

/** The i-th tone in a repeating order, for pages that stack several panels. */
export const toneAt = (i: number): Tone => TONE_CYCLE[i % TONE_CYCLE.length];

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
  tone = "mist",
}: {
  items: GridItem[];
  cols?: 2 | 3 | 4;
  className?: string;
  /** `mist` for cards on the white page, `white` for cards inside a grey surface. */
  tone?: "mist" | "white";
}) {
  const colClass = cols === 2 ? "sm:grid-cols-2" : cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
  const bg = tone === "white" ? "bg-white" : "bg-mist-2";
  return (
    <div className={`grid gap-3 sm:gap-4 ${colClass} ${className}`}>
      {items.map((item) => {
        const inner = (
          <>
            <span className={`flex h-12 w-12 items-center justify-center rounded-full ${tone === "white" ? "bg-mist-2" : "bg-white"} text-accent`}>
              <Icon name={item.icon} className="h-[22px] w-[22px]" />
            </span>
            <h3 className="mt-8 font-display text-[22px] font-light leading-[1.2] tracking-[-0.02em] text-ink">{item.title}</h3>
            <p className="mt-2.5 text-[15px] leading-[1.65] text-body">{item.body}</p>
            {item.href ? (
              <span className="mt-5 inline-flex items-center gap-1.5 text-[14.5px] font-medium text-accent">
                Learn more <Icon name="arrow" className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
            ) : null}
          </>
        );
        const cls = `flex flex-col rounded-[24px] ${bg} p-6 sm:rounded-[28px] sm:p-7 transition-colors`;
        return item.href ? (
          <a key={item.title} href={item.href} className={`${cls} hover:bg-mist`}>
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
/* Split feature: text card with a screenshot panel flush to its edge   */
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
  tone = "periwinkle",
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
  tone?: Tone;
  children?: ReactNode;
}) {
  return (
    <article className={`grid overflow-hidden rounded-[26px] bg-mist sm:rounded-[34px] ${reverse ? "lg:grid-cols-[1.15fr_1fr]" : "lg:grid-cols-[1fr_1.15fr]"}`}>
      <div className={`flex flex-col px-6 pb-8 pt-8 sm:px-10 sm:pt-10 lg:p-12 ${reverse ? "lg:order-2" : ""}`}>
        {eyebrow ? <Eyebrow className="mb-3">{eyebrow}</Eyebrow> : null}
        <Heading size="sm" accent={accent} as="h3">
          {title}
        </Heading>
        <p className="mt-4 max-w-[32rem] text-[15.5px] leading-[1.7] text-body">{body}</p>
        {bullets ? <Checklist items={bullets} className="mt-6" /> : null}
        {children}
        {cta ? (
          <div className="mt-8 lg:mt-auto lg:pt-10">
            <CircleLink href={cta.href}>{cta.label}</CircleLink>
          </div>
        ) : null}
      </div>
      <ProductShot
        shot={shot}
        tone={tone}
        side={reverse ? "left" : "right"}
        className={`min-h-[300px] sm:min-h-[400px] lg:h-full lg:min-h-[480px] ${
          reverse ? "rounded-t-[24px] lg:order-1 lg:rounded-r-[32px] lg:rounded-tl-none" : "rounded-t-[24px] lg:rounded-l-[32px] lg:rounded-tr-none"
        }`}
        sizes="(max-width: 1024px) 100vw, 760px"
      />
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Steps and stats                                                      */
/* ------------------------------------------------------------------ */

export { StepsTray as Steps } from "@/components/home/sections";

export function StatsStrip({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <dl className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-[24px] bg-mist-2 px-6 py-7 sm:rounded-[28px]">
          <dd className="font-display text-[40px] font-light leading-none tracking-[-0.03em] text-ink sm:text-[48px]">{s.value}</dd>
          <dt className="mt-3 text-[14px] leading-snug text-body">{s.label}</dt>
        </div>
      ))}
    </dl>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ and closing call to action (the home page's own sections)         */
/* ------------------------------------------------------------------ */

export function FAQ({ items, title = "Questions, answered.", lede }: { items: { q: string; a: string }[]; title?: string; eyebrow?: string; lede?: string }) {
  return <FaqSection items={items} title={title} lede={lede} />;
}

export function CTA({
  title = "Bring every conversation into one place.",
  body = "Connect your channels, import your contacts and let the AI handle the first reply. No per-seat fees.",
}: {
  title?: string;
  body?: string;
}) {
  return <ClosingCta title={title} body={body} />;
}

/* ------------------------------------------------------------------ */
/* Sub-page hero                                                       */
/* ------------------------------------------------------------------ */

/**
 * With a screenshot: text on the left, a free-standing gradient panel on the
 * right. Without one (or `compact`): a centred, text-only hero like the home
 * page's, which suits the index, legal and comparison pages.
 */
export function PageHero({
  eyebrow,
  title,
  accent,
  lede,
  bullets,
  shot,
  tone = "periwinkle",
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
  tone?: Tone;
  primary?: { label: string; href: string } | null;
  secondary?: { label: string; href: string };
  compact?: boolean;
}) {
  const buttons =
    primary || secondary ? (
      <div className={`rise rise-4 mt-8 flex flex-wrap items-center gap-4 ${shot ? "" : "justify-center"}`}>
        {primary ? (
          <Button href={primary.href} size="lg">
            {primary.label}
          </Button>
        ) : null}
        {secondary ? (
          <Button href={secondary.href} variant="secondary" size="lg">
            {secondary.label}
          </Button>
        ) : null}
      </div>
    ) : null;

  if (!shot) {
    return (
      <section>
        <Container className={compact ? "pb-6 pt-12 sm:pb-8 sm:pt-16" : "pb-8 pt-14 sm:pt-20"}>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="rise rise-1">{eyebrow}</Eyebrow>
            <Heading as="h1" size="lg" accent={accent} className="rise rise-2 mt-4">
              {title}
            </Heading>
            <Lede className="rise rise-3 mx-auto mt-5 max-w-2xl">{lede}</Lede>
            {bullets ? <Checklist items={bullets} className="rise rise-3 mx-auto mt-6 inline-block text-left" /> : null}
            {buttons}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section>
      <Container className="pb-6 pt-12 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Eyebrow className="rise rise-1">{eyebrow}</Eyebrow>
            <Heading as="h1" size="lg" accent={accent} className="rise rise-2 mt-4">
              {title}
            </Heading>
            <Lede className="rise rise-3 mt-5 max-w-xl">{lede}</Lede>
            {bullets ? <Checklist items={bullets} className="rise rise-3 mt-6" /> : null}
            {buttons}
          </div>
          <div className="rise rise-4 lg:col-span-7">
            <ProductShot
              shot={shot}
              tone={tone}
              priority
              className="aspect-[16/12] rounded-[26px] sm:rounded-[34px]"
              sizes="(max-width: 1024px) 100vw, 760px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
