/* Shared building blocks for the marketing sub-pages. A kit of distinct section
   types, hero, statement, alternating feature rows with mockups, value list,
   steps, stats band, feature grid, so each page can be composed differently.
   Everything uses the site's `.reveal` scroll animation. */

import Navbar, { ArrowIcon } from "@/components/landing/Navbar";
import { SIGN_UP_URL } from "@/lib/landing/links";

export type CTA = { label: string; href: string };

export const gradientCell = "bg-[#f4f6f9]";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#e3e7f0] bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#475065]">
      <span className="h-2 w-2 rounded-full bg-[#0526D9]" />
      {children}
    </span>
  );
}

/* ---------------- Compact navy hero ---------------- */

export function MarketingHero({
  active,
  eyebrow,
  title,
  accent,
  subtitle,
  primaryCta = { label: "Get started free", href: SIGN_UP_URL },
  secondaryCta,
  highlights,
  visual,
  hideVisual = false,
}: {
  active?: string;
  eyebrow?: string;
  title: string;
  accent: string;
  subtitle: string;
  /** Primary hero button. Defaults to "Get started free". */
  primaryCta?: CTA;
  /** Optional ghost button beside the primary CTA. */
  secondaryCta?: CTA;
  /** Small trust/feature bullets shown under the CTAs. */
  highlights?: string[];
  /** Right-column visual. Falls back to the shared unified-inbox mock. */
  visual?: React.ReactNode;
  /** Drop the right-column visual entirely (e.g. legal pages) for a clean text hero. */
  hideVisual?: boolean;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#f6f7fb]">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Navbar active={active} variant="light" />
        <div
          className={`grid grid-cols-1 items-center gap-14 pb-16 pt-14 sm:pt-16 lg:gap-12 lg:pb-28 lg:pt-24 ${
            hideVisual ? "" : "lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)]"
          }`}
        >
          <div className={hideVisual ? "max-w-3xl" : "max-w-2xl"}>
            {eyebrow ? (
              <span
                className="reveal inline-flex items-center gap-2 rounded-full border border-[#e3e7f0] bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#475065]"
                style={{ transitionDelay: "0.05s" }}
              >
                <span className="h-2 w-2 rounded-full bg-[#0526D9]" />
                {eyebrow}
              </span>
            ) : null}
            <h1
              className="reveal mt-6 font-display text-[42px] leading-[1.0] tracking-[-0.035em] text-[#0d1220] sm:text-[58px] lg:text-[68px]"
              style={{ transitionDelay: "0.12s", fontWeight: 300 }}
            >
              {title} <span className="text-[#0526D9]">{accent}</span>
            </h1>
            <p
              className="reveal mt-6 max-w-xl text-[16px] leading-[1.65] text-[#565d6b] sm:text-[17px]"
              style={{ transitionDelay: "0.22s" }}
            >
              {subtitle}
            </p>

            <div
              className="reveal mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ transitionDelay: "0.32s" }}
            >
              <a
                href={primaryCta.href}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0526D9] py-3.5 pl-7 pr-3.5 text-[15px] font-medium text-white transition-transform hover:scale-[1.03]"
              >
                {primaryCta.label}
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0526D9] transition-transform group-hover:rotate-45">
                  <ArrowIcon className="h-3.5 w-3.5" />
                </span>
              </a>
              {secondaryCta ? (
                <a
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#dfe3ec] bg-white px-6 py-3.5 text-[15px] font-medium text-[#11161f] transition-colors hover:border-[#c4cad8]"
                >
                  {secondaryCta.label}
                </a>
              ) : null}
            </div>

            {highlights?.length ? (
              <ul
                className="reveal mt-9 flex flex-wrap gap-x-6 gap-y-2.5"
                style={{ transitionDelay: "0.42s" }}
              >
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="inline-flex items-center gap-2 text-[13px] text-[#7a808b]"
                  >
                    <CheckMini className="h-3.5 w-3.5 shrink-0 text-[#0526D9]" />
                    {h}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {hideVisual ? null : (
            <div className="reveal" style={{ transitionDelay: "0.36s" }}>
              {visual ?? <HeroInbox />}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Default hero visual: unified inbox mock ---------------- */

export function HeroInbox({
  accent = "#0526D9",
  heading = "Unified inbox",
}: {
  accent?: string;
  heading?: string;
}) {
  const rows = [
    { initials: "PS", name: "Priya Shah", snippet: "Thanks! When does it ship?", time: "2m", badge: "#217b4c", Icon: WaMini, active: true },
    { initials: "MR", name: "Marco Rossi", snippet: "Can I get the invoice?", time: "8m", badge: "#4a7bc9", Icon: MailMini },
    { initials: "AA", name: "Aisha Ali", snippet: "Yes to the reminder 🙌", time: "14m", badge: "#e5b32f", Icon: SmsMini },
  ];
  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      <div
        className="pointer-events-none absolute -inset-8 rounded-[40px]"
        style={{ background: `radial-gradient(55% 55% at 60% 15%, ${accent}30, transparent 72%)` }}
      />
      {/* depth cards behind */}
      <div className="absolute -top-4 left-6 right-6 h-16 rounded-2xl bg-black/[0.04]" />
      <div className="absolute -top-2 left-3 right-3 h-16 rounded-2xl bg-black/[0.06]" />

      <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_36px_90px_-28px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
        <div className="flex items-center justify-between border-b border-[#f0f2f5] px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg text-white"
              style={{ backgroundColor: accent }}
            >
              <InboxMini className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className="text-[13px] font-semibold text-[#11161f]">{heading}</div>
              <div className="text-[11px] text-[#9ca3af]">3 open · all channels</div>
            </div>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-[#eef7f1] px-2.5 py-1 text-[10px] font-semibold text-[#1c7a47]">
            <span className="leaf-pulse h-1.5 w-1.5 rounded-full bg-[#1c7a47]" />
            Ready
          </span>
        </div>

        <div className="flex flex-col">
          {rows.map((r) => (
            <div
              key={r.name}
              className={`flex items-center gap-3 px-5 py-3.5 ${r.active ? "bg-[#f7f9fc]" : ""}`}
            >
              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#11161f] text-[11px] font-bold text-white">
                {r.initials}
                <span
                  className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full text-white ring-2 ring-white"
                  style={{ backgroundColor: r.badge }}
                >
                  <r.Icon className="h-2.5 w-2.5" />
                </span>
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <div className="truncate text-[13px] font-semibold text-[#11161f]">{r.name}</div>
                  <div className="ml-2 shrink-0 text-[11px] text-[#9ca3af]">{r.time}</div>
                </div>
                <div className="truncate text-[12px] text-[#7a808b]">{r.snippet}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 border-t border-[#f0f2f5] px-5 py-3.5">
          <div className="flex-1 rounded-full bg-[#F5F6FB] px-3.5 py-2 text-[12px] text-[#9ca3af]">
            Reply to Priya…
          </div>
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full text-white"
            style={{ backgroundColor: accent }}
          >
            <SendMini className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>

      <div className="floaty absolute -bottom-5 -right-3 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-[0_18px_44px_rgba(0,0,0,0.4)] ring-1 ring-black/5">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#217b4c] text-white">
          <DoubleCheckMini className="h-3.5 w-3.5" />
        </span>
        <div className="leading-tight">
          <div className="text-[11px] font-semibold text-[#11161f]">Delivered</div>
          <div className="text-[10px] text-[#9ca3af]">Message status</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Hero visual: ad campaigns + spend ---------------- */

export function HeroCampaigns({ accent = "#0526D9" }: { accent?: string }) {
  const rows = [
    { name: "Spring Grants 2026", src: "Meta", dot: "#0866ff", spend: "$4.8k", leads: 41 },
    { name: "Search - Grants CA", src: "Google", dot: "#34a853", spend: "$6.2k", leads: 52 },
    { name: "SR&ED Q3 Push", src: "Meta", dot: "#0866ff", spend: "$9.1k", leads: 33 },
  ];
  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      <div
        className="pointer-events-none absolute -inset-8 rounded-[40px]"
        style={{ background: `radial-gradient(55% 55% at 60% 15%, ${accent}30, transparent 72%)` }}
      />
      <div className="absolute -top-4 left-6 right-6 h-16 rounded-2xl bg-black/[0.04]" />
      <div className="absolute -top-2 left-3 right-3 h-16 rounded-2xl bg-black/[0.06]" />

      <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_36px_90px_-28px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
        <div className="flex items-center justify-between border-b border-[#f0f2f5] px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg text-white" style={{ backgroundColor: accent }}>
              <MegaphoneMini className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className="text-[13px] font-semibold text-[#11161f]">Campaigns</div>
              <div className="text-[11px] text-[#9ca3af]">Meta · Google · last 30 days</div>
            </div>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-[#eef7f1] px-2.5 py-1 text-[10px] font-semibold text-[#1c7a47]">
            <span className="leaf-pulse h-1.5 w-1.5 rounded-full bg-[#1c7a47]" />
            Connected
          </span>
        </div>

        <div className="flex flex-col">
          {rows.map((r) => (
            <div key={r.name} className="flex items-center gap-3 px-5 py-3.5">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: r.dot }} />
              <div className="min-w-0 flex-1">
                <div className="truncate text-[13px] font-semibold text-[#11161f]">{r.name}</div>
                <div className="text-[11px] text-[#9ca3af]">{r.src} · synced campaign data</div>
              </div>
              <div className="shrink-0 rounded-full bg-[#F5F6FB] px-2.5 py-1 text-[11px] font-semibold text-[#41618c]">
                Lead source
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-[#f0f2f5] px-5 py-3.5">
          <span className="text-[11px] text-[#9ca3af]">Lead reporting</span>
          <span className="text-[13px] font-semibold text-[#11161f]">Source + pipeline</span>
        </div>
      </div>

      <div className="floaty absolute -bottom-5 -right-3 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-[0_18px_44px_rgba(0,0,0,0.4)] ring-1 ring-black/5">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#217b4c] text-white">
          <TrendDownMini className="h-3.5 w-3.5" />
        </span>
        <div className="leading-tight">
          <div className="text-[11px] font-semibold text-[#11161f]">Source attribution</div>
          <div className="text-[10px] text-[#9ca3af]">Lead source + value</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Hero visual: automation workflow ---------------- */

export function HeroAutomation({ accent = "#7c5cff" }: { accent?: string }) {
  const nodes = [
    { tag: "TRIGGER", label: "New lead from Meta", tone: "#0526D9" },
    { tag: "CONDITION", label: "If value > $10k", tone: "#f47b3f" },
    { tag: "ACTION", label: "Send WhatsApp + assign", tone: "#217b4c" },
  ];
  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      <div
        className="pointer-events-none absolute -inset-8 rounded-[40px]"
        style={{ background: `radial-gradient(55% 55% at 60% 15%, ${accent}30, transparent 72%)` }}
      />
      <div className="absolute -top-4 left-6 right-6 h-16 rounded-2xl bg-black/[0.04]" />
      <div className="absolute -top-2 left-3 right-3 h-16 rounded-2xl bg-black/[0.06]" />

      <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_36px_90px_-28px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
        <div className="flex items-center justify-between border-b border-[#f0f2f5] px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg text-white" style={{ backgroundColor: accent }}>
              <BoltMini className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className="text-[13px] font-semibold text-[#11161f]">Automation</div>
              <div className="text-[11px] text-[#9ca3af]">Lead follow-up</div>
            </div>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-[#eef7f1] px-2.5 py-1 text-[10px] font-semibold text-[#1c7a47]">
            <span className="leaf-pulse h-1.5 w-1.5 rounded-full bg-[#1c7a47]" />
            Active
          </span>
        </div>

        <div className="flex flex-col gap-2.5 px-5 py-5">
          {nodes.map((n, i) => (
            <div key={n.tag}>
              <div className="flex items-center gap-3 rounded-xl border border-[#eef0f4] bg-[#fafbfc] px-3.5 py-3">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: n.tone }} />
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-semibold tracking-[0.12em] text-[#9ca3af]">{n.tag}</div>
                  <div className="truncate text-[13px] font-semibold text-[#11161f]">{n.label}</div>
                </div>
              </div>
              {i < nodes.length - 1 && <div className="ml-[26px] h-3.5 w-px bg-[#d9dee8]" />}
            </div>
          ))}
        </div>
      </div>

      <div className="floaty absolute -bottom-5 -right-3 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-[0_18px_44px_rgba(0,0,0,0.4)] ring-1 ring-black/5">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg text-white" style={{ backgroundColor: accent }}>
          <BoltMini className="h-3.5 w-3.5" />
        </span>
        <div className="leading-tight">
          <div className="text-[11px] font-semibold text-[#11161f]">Runs when triggered</div>
          <div className="text-[10px] text-[#9ca3af]">With conditions and delays</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Statement (big lead text) ---------------- */

export function Statement({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full bg-white py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="reveal">
          <SectionLabel>{label}</SectionLabel>
          <p className="mt-7 max-w-4xl font-display text-[28px] leading-[1.35] tracking-[-0.02em] text-[#11161f] sm:text-[36px]">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Alternating feature rows with mockups ---------------- */

export type Row = {
  no: string;
  eyebrow: string;
  title: string;
  body: string;
  mockup: React.ReactNode;
  reverse?: boolean;
  href?: string;
};

export function FeatureRows({ label, rows }: { label?: string; rows: Row[] }) {
  return (
    <div className="w-full bg-white pb-24 pt-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {label ? (
          <div className="reveal mb-8">
            <SectionLabel>{label}</SectionLabel>
          </div>
        ) : null}
        <div className="flex w-full flex-col gap-4">
          {rows.map((r) => (
            <div
              key={r.no}
              className="reveal grid grid-cols-1 items-center gap-6 overflow-hidden rounded-[28px] bg-[#f4f6f9] lg:grid-cols-2 lg:gap-0"
            >
              <div
                className={`flex flex-col justify-center px-7 py-10 sm:px-10 lg:p-14 ${
                  r.reverse ? "lg:order-2" : ""
                }`}
              >
                <div className="flex items-center gap-3 text-[12px] font-medium tracking-[0.1em] text-[#9aa0ac]">
                  <span className="font-display text-[15px] font-semibold text-[#0526D9]">
                    {r.no}
                  </span>
                  {r.eyebrow}
                </div>
                <h3 className="mt-5 max-w-sm font-display text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#11161f] sm:text-[34px]">
                  {r.title}
                </h3>
                <p className="mt-4 max-w-[400px] text-[14.5px] leading-[1.7] text-[#7a808b]">
                  {r.body}
                </p>
                {r.href ? (
                  <a
                    href={r.href}
                    className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0526D9] transition-colors hover:opacity-80"
                  >
                    Learn more ↗
                  </a>
                ) : null}
              </div>
              <div
                className={`relative flex items-center justify-center px-7 pb-10 sm:px-10 lg:p-12 ${
                  r.reverse ? "lg:order-1" : ""
                }`}
              >
                {r.mockup}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Numbered values list ---------------- */

export type Value = {
  title: string;
  body: string;
  icon: (props: { className?: string }) => React.ReactNode;
};

export function ValuesList({
  label,
  title,
  accent,
  values,
}: {
  label: string;
  title: string;
  accent?: string;
  values: Value[];
}) {
  return (
    <div className="w-full bg-white pb-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-10">
          <SectionLabel>{label}</SectionLabel>
          <h2 className="mt-6 max-w-xl font-display text-[36px] leading-[1.05] tracking-[-0.025em] text-[#0d1220] sm:text-[46px]">
            {title}
            {accent ? <span className="text-[#0526D9]"> {accent}</span> : null}
          </h2>
        </div>
        <div className="flex flex-col">
          {values.map(({ title: t, body, icon: Icon }, i) => (
            <div
              key={t}
              className={`reveal flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:gap-10 ${
                i !== 0 ? "border-t border-[#eceef3]" : ""
              }`}
            >
              <div className="flex items-center gap-5 sm:w-[300px] sm:shrink-0">
                <span className="font-display text-[15px] font-semibold text-[#0526D9]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] bg-[#f4f6f9] text-[#0526D9]">
                  <Icon className="h-[20px] w-[20px]" />
                </span>
                <h3 className="text-[21px] font-semibold text-[#11161f]">{t}</h3>
              </div>
              <p className="text-[14px] leading-[1.7] text-[#7a808b] sm:flex-1">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Stats band ---------------- */

export function StatsBand({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div className="w-full bg-white pb-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="reveal rounded-[26px] bg-[#f4f6f9] p-7 sm:p-8"
            >
              <div className="font-display text-[40px] font-semibold leading-none tracking-[-0.02em] text-[#0d1220]">
                {s.value}
              </div>
              <div className="mt-3 text-[13.5px] leading-snug text-[#7a808b]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Feature card grid ---------------- */

export type Feature = {
  title: string;
  body: string;
  icon: (props: { className?: string }) => React.ReactNode;
};

export function FeatureSection({
  label,
  title,
  accent,
  intro,
  items,
  gridClass = "sm:grid-cols-2 lg:grid-cols-4",
}: {
  label: string;
  title: React.ReactNode;
  accent?: string;
  intro: string;
  items: Feature[];
  gridClass?: string;
}) {
  return (
    <div className="w-full bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-12">
          <div>
            <SectionLabel>{label}</SectionLabel>
            <h2 className="mt-6 font-display text-[36px] leading-[1.05] tracking-[-0.025em] text-[#0d1220] sm:text-[46px]">
              {title}
              {accent ? <span className="text-[#0526D9]"> {accent}</span> : null}
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-[1.7] text-[#565d6b] lg:pb-2">
            {intro}
          </p>
        </div>
        <div className={`mt-10 grid grid-cols-1 gap-4 ${gridClass}`}>
          {items.map(({ title: t, body, icon: Icon }) => (
            <div
              key={t}
              className={`reveal rounded-[26px] ${gradientCell} p-7`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-[15px] bg-white text-[#0526D9]">
                <Icon className="h-[20px] w-[20px]" />
              </span>
              <h3 className="mt-6 text-[19px] font-semibold text-[#11161f]">
                {t}
              </h3>
              <p className="mt-3 text-[13.5px] leading-[1.65] text-[#7a808b]">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Reusable mockups (for FeatureRows) ---------------- */

export function GaugeCard({
  label,
  value,
  sub,
  footLeft,
  footRight,
  pct = 0.98,
}: {
  label: string;
  value: string;
  sub: string;
  footLeft: string;
  footRight: string;
  pct?: number;
}) {
  const circ = Math.PI * 50;
  const filled = pct * circ;
  return (
    <div className="w-full max-w-[360px] rounded-2xl bg-white p-7 shadow-[0_20px_50px_-30px_rgba(16,24,40,0.25)] ring-1 ring-black/[0.04]">
      <div className="text-[11px] font-medium tracking-[0.1em] text-[#8a8f9b]">
        {label}
      </div>
      <div className="mt-4 flex flex-col items-center">
        <svg viewBox="0 0 120 72" className="w-44">
          <path d="M10 62 A50 50 0 0 1 110 62" stroke="#eaedf3" strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M10 62 A50 50 0 0 1 110 62" stroke="#1c7a47" strokeWidth="10" fill="none" strokeLinecap="round" strokeDasharray={`${filled} ${circ}`} />
        </svg>
        <div className="-mt-6 text-center">
          <div className="font-display text-[34px] font-semibold text-[#11161f]">
            {value}
          </div>
          <div className="text-[11px] text-[#8a8f9b]">{sub}</div>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-[#eef0f5] pt-4 text-[11px]">
        <span className="text-[#8a8f9b]">{footLeft}</span>
        <span className="font-semibold text-[#1c7a47]">{footRight}</span>
      </div>
    </div>
  );
}

export function BarsCard({
  label,
  bars,
}: {
  label: string;
  bars: { name: string; pct: number; color: string }[];
}) {
  return (
    <div className="w-full max-w-[360px] rounded-2xl bg-white p-7 shadow-[0_20px_50px_-30px_rgba(16,24,40,0.25)] ring-1 ring-black/[0.04]">
      <div className="text-[11px] font-medium tracking-[0.1em] text-[#8a8f9b]">
        {label}
      </div>
      <div className="mt-5 flex flex-col gap-5">
        {bars.map((b) => (
          <div key={b.name}>
            <div className="mb-2 flex items-center justify-between text-[12px]">
              <span className="font-semibold text-[#11161f]">{b.name}</span>
              <span className="text-[#8a8f9b]">{b.pct}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-[#eef0f5]">
              <div className="h-full rounded-full" style={{ width: `${b.pct}%`, backgroundColor: b.color }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StatusCard({
  title,
  sub,
  tag,
  progressLabel,
  progressValue,
  pct,
  primaryBtn,
}: {
  title: string;
  sub: string;
  tag: string;
  progressLabel: string;
  progressValue: string;
  pct: number;
  primaryBtn: string;
}) {
  return (
    <div className="w-full max-w-[360px] rounded-2xl bg-white p-7 shadow-[0_20px_50px_-30px_rgba(16,24,40,0.25)] ring-1 ring-black/[0.04]">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[14px] font-semibold text-[#11161f]">{title}</div>
          <div className="mt-0.5 text-[11px] text-[#8a8f9b]">{sub}</div>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-[#eef7f1] px-2.5 py-1 text-[10px] font-semibold text-[#1c7a47]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#1c7a47]" />
          {tag}
        </span>
      </div>
      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-[11px] text-[#8a8f9b]">
          <span>{progressLabel}</span>
          <span>{progressValue}</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-[#eef0f5]">
          <div className="h-full rounded-full bg-[#16557a]" style={{ width: `${pct}%` }} />
        </div>
      </div>
      <div className="mt-6 flex gap-2.5">
        <button className="flex-1 rounded-lg border border-[#e3e7f0] bg-white py-2 text-[12px] font-semibold text-[#11161f]">
          Pause
        </button>
        <button className="flex-1 rounded-lg bg-[#11161f] py-2 text-[12px] font-semibold text-white">
          {primaryBtn}
        </button>
      </div>
    </div>
  );
}

/* ---------------- FAQ (JS-free accordion) ---------------- */

export function FAQ({
  label = "FAQ",
  title = "Questions, answered.",
  intro = "Everything you need to know before you get started.",
  items,
}: {
  label?: string;
  title?: string;
  intro?: string;
  items: { q: string; a: string }[];
}) {
  return (
    <div className="w-full bg-white pb-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-16">
          <div className="reveal lg:sticky lg:top-24 lg:self-start">
            <SectionLabel>{label}</SectionLabel>
            <h2 className="mt-6 font-display text-[34px] leading-[1.05] tracking-[-0.025em] text-[#0d1220] sm:text-[44px]">
              {title}
            </h2>
            <p className="mt-4 max-w-sm text-[15px] leading-[1.7] text-[#565d6b]">{intro}</p>
          </div>
          <div className="flex flex-col">
            {items.map((f, i) => (
              <details
                key={f.q}
                className={`reveal group ${i !== 0 ? "border-t border-[#eceef3]" : ""}`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-[20px] font-semibold text-[#11161f]">{f.q}</h3>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f4f6f9] text-[#0526D9] transition-transform duration-300 group-open:rotate-45">
                    <PlusMini className="h-3.5 w-3.5" />
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 text-[14.5px] leading-[1.7] text-[#7a808b]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Compact icons for hero / faq ---------------- */

function CheckMini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PlusMini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function InboxMini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 13l2.5-7h11L20 13v5H4v-5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M4 13h4l1.5 2h5L16 13h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function SendMini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 12l16-7-7 16-2.5-6.5L4 12Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
function WaMini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Zm4.7 12.3c-.2.6-1.1 1.1-1.6 1.1-.4.1-.9.1-3-.8-2.5-1.1-4-3.6-4.1-3.8-.1-.2-1-1.3-1-2.5s.6-1.7.8-2c.2-.2.4-.3.6-.3h.5c.2 0 .4 0 .5.4l.7 1.7c.1.1.1.3 0 .5l-.4.5c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.7.9.8 1.6 1 1.9 1.2.2.1.4 0 .5-.1l.6-.7c.2-.2.3-.2.6-.1l1.6.8c.3.1.4.2.5.3 0 .2 0 .7-.2 1.3Z" />
    </svg>
  );
}
function MailMini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3.5" y="6" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M4.5 8l7.5 5 7.5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function SmsMini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 5.5h16v10H11l-4 3v-3H4v-10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
function DoubleCheckMini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M2 12.5l3.5 3.5L14 7M11 15l1 1 8.5-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function MegaphoneMini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 10v4l2 .5V9.5L4 10Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M6 9.5l11-4.5v14l-11-4.5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8 15v3l2.5.5V15.5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}
function TrendDownMini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 8l6 6 3-3 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 13v5h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function BoltMini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M13 3L5 13h5l-1 8 8-11h-5l1-7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}
