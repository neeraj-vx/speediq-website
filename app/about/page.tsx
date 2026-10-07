import { pageMeta } from "@/lib/landing/seo";
import Footer from "@/components/landing/Footer";
import {
  MarketingHero,
  Statement,
  ValuesList,
  StatsBand,
  FeatureSection,
  FAQ,
  type Value,
  type Feature,
} from "@/components/landing/marketing";

export const metadata = pageMeta(
  "About us",
  "The story behind SpeedIQ, why we're building one calm workspace for WhatsApp, Email, SMS and social, and the principles our small team refuses to compromise on.",
  "/about",
);

/* ---------------- Culture principles ---------------- */

const values: Value[] = [
  {
    title: "Customers over everything",
    body: "Every roadmap call starts with a real conversation a team is losing sleep over. If it doesn't help someone reply faster or win the next lead, it waits.",
    icon: HeartIcon,
  },
  {
    title: "Radical transparency",
    body: "Clear credit pricing, a full usage ledger, and no per-seat surprises. We'd rather lose a deal than bury a fee in the fine print.",
    icon: EyeIcon,
  },
  {
    title: "Ship, then polish",
    body: "We put real features in front of real teams early, listen hard, and iterate in the open instead of guessing behind a long roadmap.",
    icon: BoltIcon,
  },
  {
    title: "Small team, big leverage",
    body: "We stay lean and let automation and AI do the repetitive work, the same philosophy we build into the product for our customers.",
    icon: LayersIcon,
  },
  {
    title: "Own the whole journey",
    body: "One workspace, end to end, from the first inbound message to the closed deal. No hand-offs to five disconnected tools.",
    icon: CompassIcon,
  },
];

/* ---------------- What we're building toward ---------------- */

const building: Feature[] = [
  {
    title: "One unified inbox",
    body: "WhatsApp, Email, SMS and social threads sitting side by side, so context never gets lost between tabs.",
    icon: InboxIcon,
  },
  {
    title: "A CRM that stays out of the way",
    body: "Leads, pipelines and history captured automatically from the conversations your team is already having.",
    icon: PipelineIcon,
  },
  {
    title: "AI that does the busywork",
    body: "Auto-replies, follow-ups and routing that free your team to spend time on the conversations that actually move the needle.",
    icon: SparkIcon,
  },
  {
    title: "Pricing you can trust",
    body: "Pay for the plan and channel usage, invite teammates without per-seat charges, and watch every credit in a transparent ledger.",
    icon: ReceiptIcon,
  },
];

export default function AboutPage() {
  return (
    <main>
      <MarketingHero
        active="About"
        eyebrow="ABOUT SPEEDIQ"
        title="We're building one calm home for"
        accent="every conversation."
        subtitle="SpeedIQ started with a simple frustration: growing teams were stitching together five tools to talk to their customers, then paying per seat for each. We set out to collapse all of it into a single, transparent workspace."
        secondaryCta={{ label: "Why teams choose us", href: "/why-us" }}
        highlights={["One shared inbox", "CRM built in", "No per-seat fees"]}
        visual={<AboutCard />}
      />

      <Statement label="Why we exist">
        Customer conversations are where deals are won and lost, yet most teams
        run them through{" "}
        <span className="text-[#7a808b]">
          a patchwork of inboxes, spreadsheets and per-seat SaaS
        </span>
        . We&rsquo;re here to give every team one workspace where nothing, and
        no one, slips through the cracks.
      </Statement>

      <ValuesList
        label="What drives us"
        title="Principles we"
        accent="don't compromise on."
        values={values}
      />

      <StatsBand
        stats={[
          { value: "1", label: "Unified inbox and contact history" },
          { value: "Multi", label: "Messaging channels in one inbox" },
          { value: "Auto", label: "Lead capture and routing" },
          { value: "0", label: "Per-seat fees, ever" },
        ]}
      />

      <FeatureSection
        label="What we're building"
        title="One workspace,"
        accent="the whole journey."
        intro="From the first inbound message to the closed deal, we're bringing every part of the customer conversation under one roof, and letting AI handle the repetitive parts."
        items={building}
      />

      <FAQ
        label="About FAQ"
        title="The things people ask."
        intro="A little more about who we are and how to reach us."
        items={[
          {
            q: "Who is SpeedIQ for?",
            a: "Agencies, consultants, studios and service teams, anyone who lives in customer conversations and is tired of paying per seat to juggle five different tools.",
          },
          {
            q: "What makes you different from other inboxes?",
            a: "One transparent ledger instead of per-seat billing, WhatsApp, Email, SMS and social in a single thread, and no-code automations you build yourself. See the full breakdown on our Why us page.",
          },
          {
            q: "Are you hiring?",
            a: "We're always glad to meet people who care about customer experience. Say hello at hello@speediq.ai and tell us what you'd want to build.",
          },
          {
            q: "How do I get in touch?",
            a: "Email hello@speediq.ai and a real person on the team will get back to you, no ticket queue, no bot maze.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}

/* ---------------- Hero visual: company snapshot card ---------------- */

function AboutCard() {
  const team = [
    { initials: "AK", color: "#0526D9" },
    { initials: "MR", color: "#217b4c" },
    { initials: "PS", color: "#e5b32f" },
    { initials: "JD", color: "#7c4bd0" },
  ];
  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      <div
        className="pointer-events-none absolute -inset-8 rounded-[40px]"
        style={{
          background:
            "radial-gradient(55% 55% at 60% 15%, #0526D930, transparent 72%)",
        }}
      />
      {/* depth cards behind */}
      <div className="absolute -top-4 left-6 right-6 h-16 rounded-2xl bg-black/[0.04]" />
      <div className="absolute -top-2 left-3 right-3 h-16 rounded-2xl bg-black/[0.06]" />

      <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_36px_90px_-28px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
        <div className="flex items-center justify-between border-b border-[#f0f2f5] px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0526D9] text-white">
              <FlagMini className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className="text-[13px] font-semibold text-[#11161f]">
                Our mission
              </div>
              <div className="text-[11px] text-[#9ca3af]">Why SpeedIQ exists</div>
            </div>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-[#eef7f1] px-2.5 py-1 text-[10px] font-semibold text-[#1c7a47]">
            <span className="leaf-pulse h-1.5 w-1.5 rounded-full bg-[#1c7a47]" />
            Hiring
          </span>
        </div>

        <div className="px-5 py-5">
          <p className="font-display text-[17px] font-medium leading-[1.5] tracking-tight text-[#11161f]">
            &ldquo;One calm workspace where every customer conversation lives,
            and no one slips through the cracks.&rdquo;
          </p>

          <div className="mt-5 flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {team.map((m) => (
                <span
                  key={m.initials}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-bold text-white ring-2 ring-white"
                  style={{ backgroundColor: m.color }}
                >
                  {m.initials}
                </span>
              ))}
            </div>
            <div className="leading-tight">
              <div className="text-[12px] font-semibold text-[#11161f]">
                The SpeedIQ team
              </div>
              <div className="text-[11px] text-[#9ca3af]">Building SpeedIQ</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-[#f0f2f5]">
          <div className="border-r border-[#f0f2f5] px-5 py-4">
            <div className="font-display text-[22px] font-semibold text-[#11161f]">
              6
            </div>
            <div className="text-[11px] text-[#9ca3af]">Channels unified</div>
          </div>
          <div className="px-5 py-4">
            <div className="font-display text-[22px] font-semibold text-[#11161f]">
              0
            </div>
            <div className="text-[11px] text-[#9ca3af]">Per-seat fees</div>
          </div>
        </div>
      </div>

      <div className="floaty absolute -bottom-5 -right-3 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-[0_18px_44px_rgba(0,0,0,0.4)] ring-1 ring-black/5">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0526D9] text-white">
          <HeartMini className="h-3.5 w-3.5" />
        </span>
        <div className="leading-tight">
          <div className="text-[11px] font-semibold text-[#11161f]">
            Customer-first
          </div>
          <div className="text-[10px] text-[#9ca3af]">Every decision</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Icons ---------------- */

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 20s-7-4.35-9.2-8.5C1.2 8.3 3 5 6.2 5c2 0 3.2 1.2 3.8 2.2C10.6 6.2 11.8 5 13.8 5 17 5 18.8 8.3 21.2 11.5 19 15.65 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function EyeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function BoltIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13 2.5 5.5 13H11l-1 8.5L18.5 11H13l1-8.5Z" />
    </svg>
  );
}
function LayersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3.5 21 8l-9 4.5L3 8l9-4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M3 12l9 4.5L21 12M3 16l9 4.5L21 16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function CompassIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function InboxIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 13l2.5-7h11L20 13v5H4v-5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M4 13h4l1.5 2h5L16 13h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function PipelineIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3.5" y="4.5" width="4.5" height="15" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="9.75" y="4.5" width="4.5" height="10" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="16" y="4.5" width="4.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function SparkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3.5c.6 3.4 1.9 4.7 5.3 5.3-3.4.6-4.7 1.9-5.3 5.3-.6-3.4-1.9-4.7-5.3-5.3 3.4-.6 4.7-1.9 5.3-5.3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 14.5c.3 1.6.9 2.2 2.5 2.5-1.6.3-2.2.9-2.5 2.5-.3-1.6-.9-2.2-2.5-2.5 1.6-.3 2.2-.9 2.5-2.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ReceiptIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6 3.5h12v17l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3-2 1.3v-17Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 8h6M9 11.5h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/* --------- Mini icons for the hero card --------- */

function FlagMini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6 21V4M6 5h9l-1.5 3L15 11H6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function HeartMini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 20s-7-4.35-9.2-8.5C1.2 8.3 3 5 6.2 5c2 0 3.2 1.2 3.8 2.2C10.6 6.2 11.8 5 13.8 5 17 5 18.8 8.3 21.2 11.5 19 15.65 12 20 12 20Z" />
    </svg>
  );
}
