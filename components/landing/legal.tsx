/* Shared layout for the long-form legal pages. Reuses the site's dark
   MarketingHero, then renders prose sections on white and a cross-link grid to
   the other policies so every legal page is reachable from any other. */

import Footer from "@/components/landing/Footer";
import { MarketingHero, SectionLabel } from "@/components/landing/marketing";

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
          <p
            key={i}
            className="mt-4 text-[14px] leading-[1.8] text-[#5a606c] first:mt-0"
          >
            {b.text}
          </p>
        ) : (
          <ul key={i} className="mt-4 flex flex-col gap-2.5">
            {b.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[14px] leading-[1.7] text-[#5a606c]"
              >
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#c3c9d4]" />
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
      <MarketingHero
        eyebrow={eyebrow}
        title={title}
        accent={accent}
        subtitle={subtitle}
        hideVisual
      />

      <div className="w-full bg-white py-20">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="reveal flex flex-col gap-1 border-b border-[#e6e9f1] pb-7">
            <span className="text-[13px] font-medium text-[#8a8f9b]">
              Last updated: {updated}
            </span>
            <p className="mt-3 text-[15px] leading-[1.8] text-[#5a606c]">
              {intro}
            </p>
          </div>

          <div className="mt-4 flex flex-col">
            {sections.map((s, i) => (
              <section
                key={s.heading}
                className="reveal border-b border-[#e6e9f1] py-9 last:border-b-0"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-[14px] font-semibold text-[#c3c9d4]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-[21px] font-semibold leading-[1.2] tracking-tight text-[#11161f]">
                    {s.heading}
                  </h2>
                </div>
                <div className="mt-4 sm:pl-[30px]">
                  <Blocks blocks={s.blocks} />
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      {/* Cross-links to the other policies */}
      <div className="w-full bg-white pb-28">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <SectionLabel>More policies</SectionLabel>
          </div>
          <div className="reveal mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {others.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="group flex items-center justify-between rounded-md border border-[#e3e7f0] bg-white px-5 py-4 text-[14px] font-medium text-[#11161f] shadow-sm transition-colors hover:border-[#c3c9d4]"
              >
                {p.label}
                <span className="text-[#9aa0ac] transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
