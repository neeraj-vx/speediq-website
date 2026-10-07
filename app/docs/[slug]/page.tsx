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
        <p className="text-[12px] font-bold uppercase tracking-wide text-[#9aa1af]">{item.group}</p>
        <h1 className="mt-3 font-display text-[34px] font-semibold leading-[1.1] tracking-tight text-[#11161f] sm:text-[40px]">
          {item.title}
        </h1>
        {body}

        <nav className="mt-16 flex flex-col gap-3 border-t border-[#eceef4] pt-8 sm:flex-row sm:justify-between">
          {prev ? (
            <a href={`/docs/${prev.slug}`} className="text-[14px] font-medium text-[#5a6170] transition-colors hover:text-[#11161f]">
              ← {prev.title}
            </a>
          ) : (
            <span />
          )}
          {next ? (
            <a href={`/docs/${next.slug}`} className="text-[14px] font-medium text-[#5a6170] transition-colors hover:text-[#11161f]">
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
