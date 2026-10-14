/**
 * Docs prose primitives, the building blocks every documentation article is
 * composed from, styled to match the marketing site (light display type, one blue
 * accent, near-black text on white). Server-safe (no client hooks), so
 * article bodies render statically for SEO.
 *
 * To add a doc: compose these in components/landing/docs/articles.tsx and
 * register the slug in components/landing/docs/nav.ts.
 */

import type { ReactNode } from "react";

export function DocLead({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-[17px] leading-[1.7] text-body">{children}</p>;
}

export function DocH2({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-12 scroll-mt-24 font-display text-[26px] font-light tracking-[-0.02em] text-ink sm:text-[30px]"
    >
      {children}
    </h2>
  );
}

export function DocH3({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h3 id={id} className="mt-8 scroll-mt-24 font-display text-[21px] font-normal tracking-[-0.01em] text-ink">
      {children}
    </h3>
  );
}

export function DocP({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-[15px] leading-[1.8] text-body">{children}</p>;
}

export function DocList({ items, ordered = false }: { items: ReactNode[]; ordered?: boolean }) {
  const cls = "mt-4 flex flex-col gap-2 text-[15px] leading-[1.7] text-body";
  if (ordered) {
    return (
      <ol className={`${cls} list-decimal pl-5 marker:text-muted`}>
        {items.map((it, i) => (
          <li key={i} className="pl-1">{it}</li>
        ))}
      </ol>
    );
  }
  return (
    <ul className={`${cls} list-disc pl-5 marker:text-faint`}>
      {items.map((it, i) => (
        <li key={i} className="pl-1">{it}</li>
      ))}
    </ul>
  );
}

export function DocSteps({ items }: { items: { title: string; body: ReactNode }[] }) {
  return (
    <ol className="mt-6 flex flex-col gap-4">
      {items.map((s, i) => (
        <li key={i} className="flex gap-4">
          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-[13px] font-semibold text-white">
            {i + 1}
          </span>
          <div className="min-w-0">
            <div className="text-[15px] font-semibold text-ink">{s.title}</div>
            <div className="mt-1 text-[14px] leading-[1.7] text-body">{s.body}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

const CALLOUT_STYLES: Record<string, { box: string; label: string; text: string }> = {
  note: { box: "border-transparent bg-accent-soft", label: "text-accent", text: "text-body" },
  tip: { box: "border-transparent bg-mist-2", label: "text-ink", text: "text-body" },
  warning: { box: "border-transparent bg-mist", label: "text-ink", text: "text-body" },
};

export function DocCallout({
  type = "note",
  title,
  children,
}: {
  type?: "note" | "tip" | "warning";
  title?: string;
  children: ReactNode;
}) {
  const s = CALLOUT_STYLES[type] ?? CALLOUT_STYLES.note;
  return (
    <div className={`mt-6 rounded-[18px] border px-5 py-4 ${s.box}`}>
      {title && <div className={`text-[12px] font-bold uppercase tracking-wide ${s.label}`}>{title}</div>}
      <div className={`text-[14px] leading-[1.7] ${s.text} ${title ? "mt-1" : ""}`}>{children}</div>
    </div>
  );
}

export function DocCode({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="mt-5 overflow-hidden rounded-[18px] bg-[#0b1020]">
      {label && (
        <div className="border-b border-white/10 px-4 py-2 font-mono text-[11px] uppercase tracking-wide text-white/40">
          {label}
        </div>
      )}
      <pre className="overflow-x-auto px-4 py-3.5 font-mono text-[13px] leading-[1.7] text-[#e6e9f1]">
        <code>{children}</code>
      </pre>
    </div>
  );
}

/** Inline code. */
export function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-md bg-mist px-1.5 py-0.5 font-mono text-[13px] text-ink">{children}</code>
  );
}

export function DocTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-[18px] border border-mist-line">
      <table className="w-full min-w-[520px] border-collapse text-left text-[14px]">
        <thead>
          <tr className="bg-mist-2">
            {head.map((h, i) => (
              <th key={i} className="border-b border-mist-line px-4 py-2.5 text-[12px] font-semibold uppercase tracking-wide text-muted">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className="align-top">
              {row.map((cell, c) => (
                <td key={c} className="border-b border-mist-line px-4 py-3 text-body">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DocLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="font-medium text-accent underline-offset-2 hover:underline">
      {children}
    </a>
  );
}

export function DocDivider() {
  return <hr className="mt-12 border-t border-mist-line" />;
}
