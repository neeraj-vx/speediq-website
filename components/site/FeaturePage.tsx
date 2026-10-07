import type { Metadata } from "next";

import { FEATURE_BY_SLUG, type FeatureContent } from "@/content/features";
import { pageMeta } from "@/lib/landing/seo";

import { CTA, FAQ, FeatureGrid, PageHero, SplitFeature } from "./blocks";
import { Icon } from "./icons";
import { Section, SectionHeader } from "./primitives";

/** Metadata for a feature page, from its content object. */
export function featureMetadata(content: FeatureContent): Metadata {
  return pageMeta(content.metaTitle, content.metaDescription, `/features/${content.slug}`);
}

/** The one template every /features/* page renders. */
export function FeaturePage({ content }: { content: FeatureContent }) {
  const related = content.related.map((slug) => FEATURE_BY_SLUG[slug]).filter(Boolean);
  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        accent={content.accent}
        lede={content.lede}
        bullets={content.heroBullets}
        shot={content.heroShot}
        secondary={{ label: "See pricing", href: "/pricing" }}
      />

      <Section>
        <SectionHeader eyebrow="What's included" title={content.capabilitiesTitle} accent={content.capabilitiesAccent} lede={content.capabilitiesLede} />
        <FeatureGrid items={content.capabilities} cols={3} className="mt-12" />
      </Section>

      <Section tone="surface">
        <div className="space-y-20 sm:space-y-28">
          {content.sections.map((s, i) => (
            <SplitFeature key={s.title} eyebrow={s.eyebrow} title={s.title} accent={s.accent} body={s.body} bullets={s.bullets} shot={s.shot} reverse={i % 2 === 1} />
          ))}
        </div>
      </Section>

      {related.length ? (
        <Section size="sm">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">Works with</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <a key={r.slug} href={`/features/${r.slug}`} className="group flex items-center justify-between rounded-md border border-line bg-white px-5 py-4 transition-colors hover:border-line-strong hover:bg-surface">
                <span>
                  <span className="block text-[15px] font-medium text-ink">{r.name}</span>
                  <span className="block text-[13px] text-muted">{r.eyebrow}</span>
                </span>
                <Icon name="arrow" className="h-4 w-4 text-faint transition-transform group-hover:translate-x-0.5 group-hover:text-ink" strokeWidth={2} />
              </a>
            ))}
          </div>
        </Section>
      ) : null}

      <FAQ items={content.faq} title={`${content.name}, answered.`} />
      <CTA />
    </main>
  );
}
