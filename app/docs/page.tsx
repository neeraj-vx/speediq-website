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
      <p className="text-[12px] font-bold uppercase tracking-wide text-[#9aa1af]">Documentation</p>
      <h1 className="mt-3 font-display text-[34px] font-semibold leading-[1.1] tracking-tight text-[#11161f] sm:text-[40px]">
        Guides &amp; reference
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-[#5a6170]">
        Everything you need to run the SpeedIQ CRM, pipelines, capturing leads, routing, and
        automations. Start with the overview, or jump straight to a topic.
      </p>

      <div className="mt-12 flex flex-col gap-12">
        {groups.map(({ group, items }) => (
          <section key={group}>
            <h2 className="font-display text-[20px] font-semibold tracking-tight text-[#11161f]">{group}</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {items.map((item) => (
                <a
                  key={item.slug}
                  href={`/docs/${item.slug}`}
                  className="rounded-xl border border-[#e6e9f1] bg-white p-5 transition-colors hover:border-[#c9d2e6] hover:bg-[#fafbfd]"
                >
                  <div className="text-[15px] font-semibold text-[#11161f]">{item.title}</div>
                  <div className="mt-1.5 text-[13px] leading-[1.6] text-[#7a808b]">{item.summary}</div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </DocsShell>
  );
}
