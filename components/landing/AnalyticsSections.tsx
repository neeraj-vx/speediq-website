/* Homepage analytics section — unified inbox showcase, headline stats, and the
   four analytics capabilities. Photo-forward / borderless: real imagery carries
   each card, with a few clean floating chips merged on top. */

import {
  WhatsAppIcon,
  EmailIcon,
  SmsIcon,
} from "@/components/landing/brand-icons";

export default function AnalyticsSections() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6">
      {/* Header */}
      <div className="reveal max-w-2xl">
        <h2 className="font-display text-[38px] leading-[1.02] tracking-[-0.025em] text-[#0d1220] sm:text-[52px]">
          Turn every conversation into{" "}
          <span className="text-[#0526D9]">conversions.</span>
        </h2>
        <p className="mt-5 text-[16px] leading-[1.65] text-[#565d6b]">
          Stop guessing what works. Review delivery and engagement across
          WhatsApp, Email and SMS, plus the sources feeding your CRM.
        </p>
      </div>

      {/* Featured bento: photo-forward inbox card + stat + photo */}
      <div className="reveal mt-10 grid gap-4 lg:grid-cols-3">
        {/* One inbox — polished product mockup */}
        <div className="rounded-[28px] bg-[#F5F6FB] p-6 sm:p-8 lg:col-span-2">
          <h3 className="text-[22px] font-semibold text-[#11161f]">
            One inbox for every channel.
          </h3>
          <p className="mt-2 max-w-md text-[14.5px] leading-[1.6] text-[#7a808b]">
            Every WhatsApp, Email and SMS conversation lands in one shared inbox,
            with assignment, notes and automatic contact merging.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-5">
            {/* Inbox rows */}
            <div className="rounded-2xl bg-white p-2.5 sm:col-span-3">
              <div className="flex items-center justify-between px-2 pb-2 pt-1">
                <span className="text-[12.5px] font-semibold text-[#11161f]">
                  Shared inbox
                </span>
                <span className="rounded-full bg-[#eef1f6] px-2.5 py-0.5 text-[10px] font-medium text-[#475065]">
                  All channels
                </span>
              </div>
              <InboxRow
                Icon={WhatsAppIcon}
                tint="bg-[#eafaf0]"
                name="Priya Shah"
                text="Is the studio free Saturday?"
                time="2m"
                unread
              />
              <InboxRow
                Icon={EmailIcon}
                ink="text-[#4a7bc9]"
                tint="bg-[#eef3fb]"
                name="Anita Rao"
                text="Thanks, that works for us!"
                time="18m"
              />
              <InboxRow
                Icon={SmsIcon}
                ink="text-[#e5b32f]"
                tint="bg-[#fbf5e6]"
                name="Karan Mehta"
                text="Can you send the invoice?"
                time="1h"
              />
            </div>

            {/* Channel activity mini */}
            <div className="flex flex-col rounded-2xl bg-white p-5 sm:col-span-2">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-medium text-[#7a808b]">
                  Reporting view
                </span>
                <span className="rounded-full bg-[#eafaf0] px-2 py-0.5 text-[11px] font-semibold text-[#217b4c]">
                  Current
                </span>
              </div>
              <div className="mt-1 font-display text-[27px] font-semibold leading-none text-[#0526D9]">
                Delivery + engagement
              </div>
              <div className="mt-auto space-y-3 pt-5">
                <ActivityRow label="Delivery states" color="#25D366" />
                <ActivityRow label="Email opens & clicks" color="#4a7bc9" />
                <ActivityRow label="CRM source reports" color="#e5b32f" />
              </div>
            </div>
          </div>
        </div>

        {/* Right column: stat + photo */}
        <div className="grid gap-4">
          <div className="rounded-[28px] bg-[#e8edff] p-6">
            <div className="font-display text-[40px] font-semibold leading-none text-[#0526D9]">
              Reporting
            </div>
            <p className="mt-2 text-[13.5px] leading-snug text-[#5b6270]">
              delivery, replies and credits in one place
            </p>
          </div>
          <div className="flex min-h-[180px] flex-col justify-between rounded-[28px] bg-[#0526D9] p-6 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
              <TrendIcon />
            </span>
            <div>
              <div className="font-display text-[40px] font-semibold leading-none">
                AI + workflows
              </div>
              <p className="mt-2 text-[13.5px] leading-snug text-white/75">
                draft, route and follow up with guardrails
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Four analytics capabilities — clean icon cards, no fake charts */}
      <div className="reveal mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <CapabilityCard
          title="Delivery & engagement"
          body="Review sent, delivered, opened, clicked, replied and failed activity where the channel reports it."
          icon={<GridIcon />}
        />
        <CapabilityCard
          title="Lead sources"
          body="See whether forms, ads, social, webhooks or prospecting are creating leads in your CRM."
          icon={<BarsIcon />}
        />
        <CapabilityCard
          title="Sales & revenue"
          body="Track pipeline value, won deals, sources and revenue from the CRM reporting views."
          icon={<TargetIcon />}
        />
        <CapabilityCard
          title="Credit usage"
          body="See consumption by credit bucket and campaign so top-ups and renewals are easier to plan."
          icon={<TrendIcon />}
        />
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

type Glyph = (props: { className?: string }) => React.ReactNode;

function ActivityRow({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex items-center gap-2.5 text-[12px] font-medium text-[#7a808b]">
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
      <span>{label}</span>
    </div>
  );
}

function InboxRow({
  Icon,
  name,
  text,
  time,
  tint,
  ink,
  unread,
}: {
  Icon: Glyph;
  name: string;
  text: string;
  time: string;
  tint: string;
  ink?: string;
  unread?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl px-2.5 py-2.5 transition-colors hover:bg-[#f7f8fb]">
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${tint} ${ink ?? ""}`}
      >
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <div className="min-w-0 flex-1 leading-tight">
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-semibold text-[#11161f]">{name}</span>
          <span className="text-[11px] text-[#9ca3af]">{time}</span>
        </div>
        <div className="truncate text-[12px] text-[#7a808b]">{text}</div>
      </div>
      {unread && <span className="h-2 w-2 shrink-0 rounded-full bg-[#0526D9]" />}
    </div>
  );
}

function CapabilityCard({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-[28px] bg-[#F5F6FB] p-6">
      <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-white text-[#0526D9]">
        {icon}
      </span>
      <h3 className="mt-5 text-[16px] font-semibold text-[#11161f]">{title}</h3>
      <p className="mt-2 text-[13px] leading-[1.6] text-[#7a808b]">{body}</p>
    </div>
  );
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[21px] w-[21px]">
      <rect x="3" y="3" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="3" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="3" y="14" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="14" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function BarsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[21px] w-[21px]">
      <path d="M5 20V11M12 20V4M19 20v-6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[21px] w-[21px]">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[21px] w-[21px]">
      <path
        d="M4 15l5-5 4 4 7-8M16 6h4v4"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
