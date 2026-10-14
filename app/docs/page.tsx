import { pageMeta } from "@/lib/landing/seo";
import { DocsShell } from "@/components/landing/docs/DocsShell";
import { docsByGroup } from "@/components/landing/docs/nav";

export const metadata = pageMeta(
  "Documentation",
  "Guides and reference for the SpeedIQ CRM, automations, lead routing, and AI auto-reply.",
  "/docs",
);

export default function DocsIndexPage() {
  const groups = docsByGroup();

  return (
    <DocsShell>
      <p className="text-[14.5px] font-medium text-accent">Documentation</p>
      <h1 className="mt-3 font-display text-[40px] font-light leading-[1.08] tracking-[-0.03em] text-ink sm:text-[52px]">
        Guides &amp; reference
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-body">
        Everything you need to run the SpeedIQ CRM, pipelines, capturing leads, routing, and
        automations. Start with the overview, or jump straight to a topic.
      </p>

      <div className="mt-12 flex flex-col gap-12">
        {groups.map(({ group, items }) => (
          <section key={group}>
            <h2 className="font-display text-[26px] font-light tracking-[-0.02em] text-ink">{group}</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {items.map((item) => (
                <a
                  key={item.slug}
                  href={`/docs/${item.slug}`}
                  className="rounded-[22px] bg-mist-2 p-5 transition-colors hover:bg-mist"
                >
                  <div className="text-[16px] font-medium text-ink">{item.title}</div>
                  <div className="mt-1.5 text-[13px] leading-[1.6] text-muted">{item.summary}</div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </DocsShell>
  );
}
