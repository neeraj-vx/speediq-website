import type { Metadata } from "next";

import { FEATURE_BY_SLUG, type FeatureContent } from "@/content/features";
import { pageMeta } from "@/lib/landing/seo";

import { CTA, FAQ, FeatureGrid, PageHero, SplitFeature, toneAt } from "./blocks";
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
        tone="periwinkle"
        secondary={{ label: "See pricing", href: "/pricing" }}
      />

      <Section>
        <SectionHeader eyebrow="What's included" title={content.capabilitiesTitle} accent={content.capabilitiesAccent} lede={content.capabilitiesLede} />
        <FeatureGrid items={content.capabilities} cols={3} className="mt-10" />
      </Section>

      <Section size="sm">
        <div className="space-y-4 sm:space-y-5">
          {content.sections.map((s, i) => (
            <SplitFeature key={s.title} eyebrow={s.eyebrow} title={s.title} accent={s.accent} body={s.body} bullets={s.bullets} shot={s.shot} reverse={i % 2 === 1} tone={toneAt(i + 1)} />
          ))}
        </div>
      </Section>

      {related.length ? (
        <Section size="sm">
          <h2 className="font-display text-[26px] font-light tracking-[-0.02em] text-ink sm:text-[32px]">Works with</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <a key={r.slug} href={`/features/${r.slug}`} className="group flex items-center justify-between rounded-[22px] bg-mist-2 px-5 py-5 transition-colors hover:bg-mist">
                <span>
                  <span className="block text-[16px] font-medium text-ink">{r.name}</span>
                  <span className="block text-[13.5px] text-muted">{r.eyebrow}</span>
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink transition-transform group-hover:translate-x-0.5">
                  <Icon name="arrow" className="h-4 w-4" strokeWidth={2} />
                </span>
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
