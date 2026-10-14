import { notFound } from "next/navigation";

import type { Metadata } from "next";

import { pageMeta } from "@/lib/landing/seo";
import { DocsShell } from "@/components/landing/docs/DocsShell";
import { DOC_ITEMS, adjacentDocs, getDocItem } from "@/components/landing/docs/nav";
import { DOC_BODIES } from "@/components/landing/docs/articles";

type Ctx = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return DOC_ITEMS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Ctx): Promise<Metadata> {
  const { slug } = await params;
  const item = getDocItem(slug);
  if (!item) return pageMeta("Documentation", "SpeedIQ documentation.", "/docs");
  return pageMeta(`${item.title} · Docs`, item.summary, `/docs/${slug}`);
}

export default async function DocArticlePage({ params }: Ctx) {
  const { slug } = await params;
  const item = getDocItem(slug);
  const body = DOC_BODIES[slug];
  if (!item || !body) notFound();

  const { prev, next } = adjacentDocs(slug);

  return (
    <DocsShell>
      <article>
        <p className="text-[14.5px] font-medium text-accent">{item.group}</p>
        <h1 className="mt-3 font-display text-[40px] font-light leading-[1.08] tracking-[-0.03em] text-ink sm:text-[52px]">
          {item.title}
        </h1>
        {body}

        <nav className="mt-16 flex flex-col gap-3 border-t border-mist-line pt-8 sm:flex-row sm:justify-between">
          {prev ? (
            <a href={`/docs/${prev.slug}`} className="text-[14px] font-medium text-body transition-colors hover:text-ink">
              ← {prev.title}
            </a>
          ) : (
            <span />
          )}
          {next ? (
            <a href={`/docs/${next.slug}`} className="text-[14px] font-medium text-body transition-colors hover:text-ink">
              {next.title} →
            </a>
          ) : (
            <span />
          )}
        </nav>
      </article>
    </DocsShell>
  );
}
