/* Shared layout for the long-form legal pages: a compact hero, numbered prose
   sections, and a cross-link grid to the other policies. */

import { PageHero } from "@/components/site/blocks";
import { Icon } from "@/components/site/icons";
import { Container, Eyebrow } from "@/components/site/primitives";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

const policies = [
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Cookie Policy", href: "/legal/cookies" },
  { label: "Data Processing Addendum", href: "/legal/dpa" },
  { label: "Refund Policy", href: "/legal/refund" },
  { label: "Acceptable Use Policy", href: "/legal/acceptable-use" },
];

function Blocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <>
      {blocks.map((b, i) =>
        b.type === "p" ? (
          <p key={i} className="mt-4 text-[15px] leading-[1.8] text-body first:mt-0">
            {b.text}
          </p>
        ) : (
          <ul key={i} className="mt-4 flex flex-col gap-2.5">
            {b.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.7] text-body">
                <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-line-strong" />
                {item}
              </li>
            ))}
          </ul>
        ),
      )}
    </>
  );
}

export function LegalLayout({
  eyebrow,
  title,
  accent,
  subtitle,
  updated,
  intro,
  sections,
  currentHref,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  subtitle: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  currentHref: string;
}) {
  const others = policies.filter((p) => p.href !== currentHref);

  return (
    <main>
      <PageHero eyebrow={eyebrow} title={title} accent={accent} lede={subtitle} primary={null} compact />

      <Container className="py-16">
        <div className="mx-auto max-w-3xl">
          <div className="border-b border-line pb-7">
            <span className="text-[13px] font-medium text-muted">Last updated: {updated}</span>
            <p className="mt-3 text-[15px] leading-[1.8] text-body">{intro}</p>
          </div>

          <div className="flex flex-col">
            {sections.map((s, i) => (
              <section key={s.heading} className="border-b border-line py-9 last:border-b-0">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-[14px] font-medium text-faint">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="font-display text-[22px] font-medium leading-[1.2] text-ink">{s.heading}</h2>
                </div>
                <div className="mt-4 sm:pl-[30px]">
                  <Blocks blocks={s.blocks} />
                </div>
              </section>
            ))}
          </div>

          <div className="mt-14">
            <Eyebrow>More policies</Eyebrow>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {others.map((p) => (
                <a key={p.href} href={p.href} className="group flex items-center justify-between rounded-md border border-line bg-white px-5 py-4 text-[14.5px] font-medium text-ink transition-colors hover:border-line-strong hover:bg-surface">
                  {p.label}
                  <Icon name="arrow-up-right" className="h-4 w-4 text-faint transition-colors group-hover:text-ink" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
