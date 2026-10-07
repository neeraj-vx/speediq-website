/* Homepage growth sections — CRM & pipeline, lead generation, and built-in
   productivity. Each block gets a distinct layout so the page never repeats the
   same shape twice. Photo-forward / borderless: real imagery carries the cards,
   with a few clean floating chips merged on top. */

import Image from "next/image";
import Link from "next/link";

export default function GrowthSections() {
  return (
    <section className="mx-auto w-full max-w-7xl space-y-24 px-6 lg:space-y-36">
      {/* ============ CRM & Pipeline ============ */}
      <div>
        <div className="reveal max-w-2xl">
          <SectionH>
            Turn every lead into a deal{" "}
            <span className="text-[#0526D9]">you can track.</span>
          </SectionH>
          <Lede>
            A native CRM sits right behind the inbox. Kanban stages, custom
            fields, lead scoring and auto-assignment, so nothing slips between a
            chat and a close.
          </Lede>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Custom fields", "Lead scoring", "Auto-assignment"].map((p) => (
              <span
                key={p}
                className="rounded-full bg-[#eef1f6] px-3.5 py-1.5 text-[13px] font-medium text-[#475065]"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal mt-10 grid gap-4 lg:grid-cols-3">
          {/* Pipeline — polished kanban mockup */}
          <div className="rounded-[28px] bg-[#F5F6FB] p-5 sm:p-7 lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[14px] font-semibold text-[#11161f]">
                Pipeline
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-[#7a808b]">
                Q3 · 12 deals
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <KanbanCol title="New" dot="#0526D9">
                <Deal name="Priya Shah" value="$4,200" />
                <Deal name="Karan Mehta" value="$1,850" />
              </KanbanCol>
              <KanbanCol title="Contacted" dot="#3b82f6">
                <Deal name="Anita Rao" value="$6,500" />
              </KanbanCol>
              <KanbanCol title="Qualified" dot="#e5b32f">
                <Deal name="Vikram Singh" value="$12,000" />
              </KanbanCol>
              <KanbanCol title="Won" dot="#217b4c">
                <Deal name="Neha Kapoor" value="$8,800" won />
              </KanbanCol>
            </div>
          </div>

          {/* Side — win-rate stat */}
          <div className="flex min-h-[260px] flex-col justify-between rounded-[28px] bg-[#e8edff] p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0526D9]">
              <TrophyIcon />
            </span>
            <div>
              <div className="font-display text-[38px] font-semibold leading-none text-[#0526D9]">
                Scored
              </div>
              <p className="mt-3 text-[14px] leading-snug text-[#5b6270]">
                prioritize leads with scoring, ownership, and follow-up tasks
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============ Lead generation (asymmetric photo bento) ============ */}
      <div>
        <div className="reveal max-w-2xl">
          <SectionH>
            Fill the pipeline before{" "}
            <span className="text-[#0526D9]">the first reply.</span>
          </SectionH>
          <Lede>
            SpeedIQ sources leads for you, not just conversations. Capture with
            forms, take bookings, scan the map, and sync social &amp; ads
            straight into the same CRM your team already works from.
          </Lede>
        </div>

        <div className="reveal mt-10 grid gap-4 lg:grid-cols-6">
          {/* Forms — clean feature card */}
          <FeatureCard
            href="/features/forms"
            className="lg:col-span-2"
            title="Smart capture forms"
            body="Multi-step forms with conditional logic and spam protection. Embed anywhere or host on your own branded link."
            icon={<FormIcon />}
          />

          {/* Maps — the one photo in this block */}
          <PhotoBento
            href="/features/prospecting"
            className="lg:col-span-2"
            title="Maps prospecting"
            body="Scan Google Maps by term and area to source and enrich local businesses."
            src="/landing/map-aerial.jpg"
            alt="Prospecting for local leads on the map"
            chip="Leads ready to import"
          />

          {/* Social — clean feature card */}
          <FeatureCard
            href="/features/social"
            className="lg:col-span-2"
            title="Ads & social sync"
            body="Lead forms, comments and DMs from Facebook and Instagram, plus Google Ads lead forms, flow straight into your CRM."
            icon={<ShareIcon />}
          />

          {/* Booking — text + polished slot-picker mockup */}
          <Link
            href="/features/booking"
            className="group flex flex-col gap-6 rounded-[28px] bg-[#F5F6FB] p-6 transition-colors hover:bg-[#eef1f6] sm:flex-row sm:items-center sm:p-8 lg:col-span-6"
          >
            <div className="sm:flex-1">
              <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-white text-[#0526D9]">
                <CalendarIcon />
              </span>
              <h3 className="mt-5 text-[18px] font-semibold text-[#11161f]">
                Booking pages
              </h3>
              <p className="mt-2 max-w-md text-[13.5px] leading-[1.6] text-[#7a808b]">
                Share a link and let customers pick a slot. Every booking becomes
                a lead, with reminders that cut no-shows.
              </p>
              <LearnMore />
            </div>
            <BookingMock />
          </Link>
        </div>
      </div>

      {/* ============ Built-in productivity ============ */}
      <div>
        <div className="reveal max-w-2xl">
          <SectionH>
            Small tools that save <span className="text-[#0526D9]">team time.</span>
          </SectionH>
          <Lede>
            The everyday details that keep a busy inbox from turning into chaos,
            built in from day one, not bolted on.
          </Lede>
        </div>

        <div className="reveal mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ToolCard
            n="01"
            title="Canned replies"
            body="Answer common questions in one click with saved responses your whole team can reuse."
            icon={<ReplyIcon />}
          />
          <ToolCard
            n="02"
            title="Tags & organization"
            body="Label conversations and contacts your way to filter, segment and report faster."
            icon={<TagIcon />}
          />
          <ToolCard
            n="03"
            title="One-click import"
            body="Bring in existing contacts via CSV and start messaging within minutes."
            icon={<ImportIcon />}
          />
          <ToolCard
            n="04"
            title="Unified identity"
            body="Every channel a contact uses merges automatically into one profile and history."
            icon={<MergeIcon />}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- shared bits ---------- */

function SectionH({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-[38px] leading-[1.02] tracking-[-0.025em] text-[#0d1220] sm:text-[52px]">
      {children}
    </h2>
  );
}

function Lede({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-5 text-[16px] leading-[1.65] text-[#565d6b]">{children}</p>
  );
}

function LearnMore() {
  return (
    <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-[#0526D9]">
      Learn more
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </span>
  );
}

/* Clean, photo-free feature card — icon + copy + learn more. */
function FeatureCard({
  href,
  className,
  title,
  body,
  icon,
}: {
  href: string;
  className?: string;
  title: string;
  body: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`group flex flex-col rounded-[28px] bg-[#F5F6FB] p-6 transition-colors hover:bg-[#eef1f6] sm:p-7 ${className ?? ""}`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-white text-[#0526D9]">
        {icon}
      </span>
      <h3 className="mt-5 text-[18px] font-semibold text-[#11161f]">{title}</h3>
      <p className="mt-2 max-w-md text-[13.5px] leading-[1.6] text-[#7a808b]">{body}</p>
      <LearnMore />
    </Link>
  );
}

/* Full-bleed photo card with text over a scrim and a merged chip. */
function PhotoBento({
  href,
  className,
  title,
  body,
  src,
  alt,
  chip,
}: {
  href: string;
  className?: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  chip: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[28px] bg-[#0b1220] ${className ?? ""}`}
    >
      <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/45 to-transparent" />
      <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-[#0526D9] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-sm">
        {chip}
      </span>
      <div className="relative p-6 sm:p-7">
        <h3 className="text-[18px] font-semibold text-white">{title}</h3>
        <p className="mt-2 text-[13.5px] leading-[1.6] text-white/70">{body}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-white">
          Learn more
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}

/* ---------- Pipeline mockup ---------- */

function KanbanCol({
  title,
  dot,
  children,
}: {
  title: string;
  dot: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2.5 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: dot }} />
        <span className="text-[12px] font-semibold text-[#7a808b]">{title}</span>
      </div>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}

function Deal({ name, value, won }: { name: string; value: string; won?: boolean }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("");
  return (
    <div className="rounded-xl bg-white p-2.5">
      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#eef1f6] text-[9px] font-bold text-[#475065]">
          {initials}
        </span>
        <span className="truncate text-[12px] font-medium text-[#11161f]">
          {name}
        </span>
      </div>
      <div
        className={`mt-2 text-[13px] font-bold ${won ? "text-[#217b4c]" : "text-[#0526D9]"}`}
      >
        {value}
      </div>
    </div>
  );
}

/* ---------- Booking mockup ---------- */

function BookingMock() {
  return (
    <div className="w-full rounded-2xl bg-white p-4 sm:w-[260px]">
      <div className="text-[12px] font-semibold text-[#11161f]">
        Discovery call · 30 min
      </div>
      <div className="mt-0.5 text-[11px] text-[#9ca3af]">Thu, Jul 16</div>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {["09:30", "10:15", "11:00", "13:30", "14:15", "15:00"].map((s, i) => (
          <span
            key={s}
            className={`rounded-md py-1.5 text-center text-[11px] font-medium ${
              i === 1 ? "bg-[#0526D9] text-white" : "bg-[#f4f6f9] text-[#475065]"
            }`}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Productivity toolkit ---------- */

function ToolCard({
  n,
  title,
  body,
  icon,
}: {
  n: string;
  title: string;
  body: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-[28px] bg-[#F5F6FB] p-6">
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-white text-[#0526D9]">
          {icon}
        </span>
        <span className="font-display text-[14px] font-semibold text-[#c4cad8]">
          {n}
        </span>
      </div>
      <h3 className="mt-5 text-[16px] font-semibold text-[#11161f]">{title}</h3>
      <p className="mt-2 text-[13px] leading-[1.6] text-[#7a808b]">{body}</p>
    </div>
  );
}

/* ---------- icons ---------- */

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[21px] w-[21px]">
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M9.5 14.5 9 20h6l-.5-5.5M8 20h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FormIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[21px] w-[21px]">
      <rect x="4" y="3" width="16" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[21px] w-[21px]">
      <circle cx="6" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="5.5" r="2.6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="18.5" r="2.6" stroke="currentColor" strokeWidth="1.8" />
      <path d="m8.3 10.7 7.4-3.9M8.3 13.3l7.4 3.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[21px] w-[21px]">
      <rect x="4" y="5" width="16" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 9h16M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ReplyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[21px] w-[21px]">
      <path d="M9 7 4 12l5 5M4 12h9a6 6 0 0 1 6 6v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[21px] w-[21px]">
      <path d="M3 12.5V5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.4.6l6 6a2 2 0 0 1 0 2.8l-6.6 6.6a2 2 0 0 1-2.8 0l-6-6a2 2 0 0 1-.5-1.1Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="8" cy="8" r="1.4" fill="currentColor" />
    </svg>
  );
}

function ImportIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[21px] w-[21px]">
      <path d="M12 3v11m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MergeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[21px] w-[21px]">
      <path d="M7 4v3a5 5 0 0 0 5 5 5 5 0 0 1 5 5v3M17 4v3a5 5 0 0 1-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7" cy="4" r="1.6" fill="currentColor" />
      <circle cx="17" cy="4" r="1.6" fill="currentColor" />
      <circle cx="12" cy="20" r="1.6" fill="currentColor" />
    </svg>
  );
}
