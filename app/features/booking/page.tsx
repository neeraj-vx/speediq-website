import { pageMeta } from "@/lib/landing/seo";
import Footer from "@/components/landing/Footer";
import {
  MarketingHero,
  FeatureRows,
  FeatureSection,
  StatsBand,
  StatusCard,
  BarsCard,
  GaugeCard,
  FAQ,
  type Feature,
} from "@/components/landing/marketing";

export const metadata = pageMeta(
  "Booking & Scheduling",
  "Share a booking page, let customers pick a slot around your real availability, and every booking lands in your CRM with reminders, reschedule links, and calendar invites, no back-and-forth.",
  "/features/booking",
);

const ACCENT = "#0d9488";

const capabilities: Feature[] = [
  { title: "Shareable booking pages", body: "Spin up a branded booking page with your services, durations, and buffers, then share the link anywhere, no plugins or embeds required.", icon: LinkIcon },
  { title: "Real availability", body: "Set weekly hours once and add date overrides for holidays or one-off days. Slots only show when you're genuinely free.", icon: ClockIcon },
  { title: "Invitee timezones", body: "Every visitor sees times in their own timezone automatically, so you never trade three emails to land on a slot.", icon: GlobeIcon },
  { title: "Custom questions", body: "Ask exactly what you need before the call, contact details, context, budget, and it's captured on the lead the moment they book.", icon: FormIcon },
  { title: "Reminders & reschedule", body: "Automatic email reminders cut no-shows, and invitees can reschedule or cancel themselves from a self-serve link.", icon: BellIcon },
  { title: "Calendar invites", body: "Confirmations go out with an ICS attachment, so the meeting drops straight onto both calendars, no manual add.", icon: CalendarIcon },
];

export default function BookingPage() {
  return (
    <main>
      <MarketingHero
        active="Features"
        eyebrow="FEATURES · BOOKING"
        title="Let customers book you,"
        accent="around the clock."
        subtitle="Share one link and let people pick a time that works, in their timezone, around your real availability. Reminders, reschedules, and calendar invites are automatic, and every booking becomes a lead in your CRM."
        secondaryCta={{ label: "All features", href: "/features" }}
        highlights={["Shareable booking pages", "Auto reminders & reschedule", "Books into your CRM"]}
        visual={<BookingCard />}
      />

      <FeatureRows
        label="How it works"
        rows={[
          {
            no: "01",
            eyebrow: "PUBLISH",
            title: "Your own booking page",
                body: "Create a booking page with your services, meeting length, location, and buffer times. Share the link on your site, in an email signature, or in a DM, then manage availability from the dashboard.",
            mockup: (
              <StatusCard
                title="Discovery call · 30 min"
                sub="app.speediq.ai/book/acme"
                tag="LIVE"
                progressLabel="Booked this week"
                progressValue="18"
                pct={72}
                primaryBtn="Share link"
              />
            ),
          },
          {
            no: "02",
            eyebrow: "SCHEDULE",
            title: "Availability that respects your time",
            body: "Set weekly hours once, then add date overrides for holidays or busy days. Invitees see open slots in their own timezone and pick one, no back-and-forth, no double bookings.",
            reverse: true,
            mockup: (
              <BarsCard
                label="BOOKINGS BY DAY"
                bars={[
                  { name: "Mon–Wed", pct: 74, color: ACCENT },
                  { name: "Thu–Fri", pct: 52, color: "#5eead4" },
                  { name: "Weekend", pct: 12, color: "#c3c9d4" },
                ]}
              />
            ),
          },
          {
            no: "03",
            eyebrow: "REMIND",
            title: "Show-ups, not no-shows",
            body: "SpeedIQ emails a confirmation with a calendar invite, then reminders before the meeting. Need to move it? Invitees reschedule or cancel themselves, and your pipeline stays in sync.",
            mockup: (
              <GaugeCard
                label="SHOW-UP RATE"
                value="Tracked"
                sub="Confirmation + reminder status"
                footLeft="With reminders"
                footRight="Reschedule + cancel"
                pct={0.72}
              />
            ),
          },
        ]}
      />

      <FeatureSection
        label="Booking toolkit"
        title="Everything you need to"
        accent="fill your calendar."
        intro="A booking experience your customers will actually finish, wired into the same CRM, automations, and reminders as the rest of SpeedIQ."
        items={capabilities}
        gridClass="sm:grid-cols-2 lg:grid-cols-3"
      />

      <StatsBand
        stats={[
          { value: "1 link", label: "Booking page you share anywhere" },
          { value: "Any tz", label: "Invitees book in their own timezone" },
          { value: "Auto", label: "Reminders, reschedule & ICS invites" },
          { value: "Native", label: "Every booking becomes a lead" },
        ]}
      />

      <FAQ
        label="Booking FAQ"
        title="Scheduling, answered."
        intro="What you need to know about booking pages in SpeedIQ."
        items={[
          {
            q: "Do invitees need an account to book?",
            a: "No. Anyone with your booking link can pick a slot and confirm, they just fill in the details you ask for. They only interact with your public booking page.",
          },
          {
            q: "How are timezones handled?",
            a: "Automatically. Visitors see your open slots converted to their own timezone, and the confirmation and calendar invite reflect the right local times for everyone.",
          },
          {
            q: "Can people reschedule or cancel themselves?",
            a: "Yes. Every confirmation includes self-serve reschedule and cancel links, so invitees manage their own booking and your calendar and pipeline update automatically.",
          },
          {
            q: "Where do bookings show up?",
            a: "In your CRM. Each booking creates or updates a lead with the answers to your custom questions, so you can follow up, sequence, or assign it like any other lead.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}

/* ---------------- Hero visual: booking slot picker ---------------- */

function BookingCard() {
  const slots = ["09:30", "10:15", "11:00", "13:30", "14:15", "15:00"];
  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      <div
        className="pointer-events-none absolute -inset-8 rounded-[40px]"
        style={{ background: `radial-gradient(55% 55% at 60% 15%, ${ACCENT}30, transparent 72%)` }}
      />
      <div className="absolute -top-4 left-6 right-6 h-16 rounded-2xl bg-black/[0.04]" />
      <div className="absolute -top-2 left-3 right-3 h-16 rounded-2xl bg-black/[0.06]" />

      <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_36px_90px_-28px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
        {/* header */}
        <div className="flex items-center justify-between border-b border-[#f0f2f5] px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg text-white" style={{ backgroundColor: ACCENT }}>
              <CalendarIcon className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className="text-[13px] font-semibold text-[#11161f]">Discovery call</div>
              <div className="text-[11px] text-[#9ca3af]">30 min · Google Meet</div>
            </div>
          </div>
          <span className="rounded-full bg-[#e9faf6] px-2.5 py-1 text-[10px] font-semibold" style={{ color: ACCENT }}>
            IST · GMT+5:30
          </span>
        </div>

        {/* month strip */}
        <div className="flex items-center justify-between px-5 pt-4 text-[11px] text-[#9ca3af]">
          <span className="font-semibold text-[#11161f]">July 2026</span>
          <span>Thu, Jul 16</span>
        </div>
        <div className="grid grid-cols-7 gap-1 px-5 pt-2.5 text-center">
          {["9", "10", "11", "14", "15", "16", "17"].map((d, i) => (
            <span
              key={d}
              className={`rounded-md py-1.5 text-[11px] font-semibold ${
                i === 5 ? "text-white" : "text-[#5b6170]"
              }`}
              style={i === 5 ? { backgroundColor: ACCENT } : { backgroundColor: "#F5F6FB" }}
            >
              {d}
            </span>
          ))}
        </div>

        {/* time slots */}
        <div className="grid grid-cols-3 gap-2 px-5 pb-3 pt-4">
          {slots.map((t, i) => (
            <span
              key={t}
              className={`rounded-lg py-2 text-center text-[12px] font-semibold ${
                i === 1
                  ? "text-white"
                  : "border border-[#e3e7f0] text-[#11161f]"
              }`}
              style={i === 1 ? { backgroundColor: ACCENT } : undefined}
            >
              {t}
            </span>
          ))}
        </div>

        {/* confirm row */}
        <div className="flex items-center gap-2 border-t border-[#f0f2f5] px-5 py-3.5">
          <div className="flex-1 text-[12px] text-[#7a808b]">
            <span className="font-semibold text-[#11161f]">10:15</span> · Thu, Jul 16
          </div>
          <span className="rounded-lg px-3.5 py-1.5 text-[11px] font-semibold text-white" style={{ backgroundColor: "#11161f" }}>
            Confirm
          </span>
        </div>
      </div>

      <div className="floaty absolute -bottom-5 -right-3 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-[0_18px_44px_rgba(0,0,0,0.4)] ring-1 ring-black/5">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg text-white" style={{ backgroundColor: ACCENT }}>
          <BellIcon className="h-3.5 w-3.5" />
        </span>
        <div className="leading-tight">
          <div className="text-[11px] font-semibold text-[#11161f]">Reminder sent</div>
          <div className="text-[10px] text-[#9ca3af]">+ calendar invite</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Icons ---------------- */

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="5.5" width="16" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 9.5h16M8 3.5v4M16 3.5v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8v4.5l3 1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 12h16M12 4c2.4 2.2 3.6 5 3.6 8s-1.2 5.8-3.6 8c-2.4-2.2-3.6-5-3.6-8s1.2-5.8 3.6-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function LinkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function FormIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4.5" y="4" width="15" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 9h8M8 12.5h8M8 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function BellIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6.5 16V11a5.5 5.5 0 0 1 11 0v5l1.5 2H5l1.5-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
