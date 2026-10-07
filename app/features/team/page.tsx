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
  "Team & Permissions",
  "Invite teammates without per-seat charges, within your plan's member limit, with set roles, assignment, and a masked agent role that hides contact PII.",
  "/features/team",
);

const ACCENT = "#334155";

const capabilities: Feature[] = [
  { title: "No per-seat fees", body: "Invite everyone, sales, support, ops, without paying by the head. Your bill is for your plan and credits, not seats.", icon: UsersIcon },
  { title: "Roles & access", body: "Give each member one of the set roles, admin, editor, viewer, or agent, while the owner keeps full control.", icon: KeyIcon },
  { title: "Masked agent role", body: "The agent role hides contact PII, phone and email replaced by a masked ID, so reps work leads without seeing raw details.", icon: MaskIcon },
  { title: "Assignment & ownership", body: "Assign conversations and leads to the right person, and route new ones automatically so nothing sits unowned.", icon: AssignIcon },
  { title: "AI action log", body: "Review every tool the AI tried to use, with confirmations, results, failures, and timing, under AI Conversations.", icon: LogIcon },
  { title: "Easy invites", body: "Add a teammate with an email invite and they're in, scoped to the project and role you choose, in seconds.", icon: MailIcon },
];

export default function TeamPage() {
  return (
    <main>
      <MarketingHero
        active="Features"
        eyebrow="FEATURES · TEAM & PERMISSIONS"
        title="Your whole team,"
        accent="no per-seat fees."
        subtitle="Invite teammates without per-seat charges, within your plan's member limit, with set roles and assignment. A masked agent role hides contact PII behind a coded ID, so reps can work conversations without seeing raw phone numbers or emails."
        secondaryCta={{ label: "All features", href: "/features" }}
        highlights={["No per-seat charges", "Masked agent role", "Roles & assignment"]}
        visual={<TeamCard />}
      />

      <FeatureRows
        label="How it works"
        rows={[
          {
            no: "01",
            eyebrow: "INVITE",
            title: "Invite teammates without seat charges",
            body: "Add teammates with a simple email invite, scoped to the right project and role. There are no per-seat charges, while the number of members follows your selected plan's limit.",
            mockup: (
              <StatusCard
                title="Team · Acme"
                sub="14 members · 3 roles"
                tag="ACTIVE"
                progressLabel="Seats used"
                progressValue="Plan limit"
                pct={100}
                primaryBtn="Invite"
              />
            ),
          },
          {
            no: "02",
            eyebrow: "PROTECT",
            title: "Work leads without exposing PII",
            body: "Assign the masked agent role and contact details, phone numbers and emails, are replaced with a coded ID like CT-40912. Reps can still chat, assign, and move leads; they just never see raw personal data.",
            reverse: true,
            mockup: (
              <BarsCard
                label="ACCESS BY ROLE"
                bars={[
                  { name: "Admin · full", pct: 100, color: ACCENT },
                  { name: "Editor · day-to-day", pct: 68, color: "#64748b" },
                  { name: "Agent · masked", pct: 34, color: "#cbd5e1" },
                ]}
              />
            ),
          },
          {
            no: "03",
            eyebrow: "TRACK",
            title: "Clear ownership, built in",
            body: "Assignment keeps every conversation owned, routing hands new leads to the right person automatically, and the AI action log shows each tool the AI used, so you can check its work.",
            mockup: (
              <GaugeCard
                label="LEADS OWNED"
                value="Tracked"
                sub="Ownership + routing"
                footLeft="Auto-routing on"
                footRight="Assigned"
                pct={0.72}
              />
            ),
          },
        ]}
      />

      <FeatureSection
        label="Team toolkit"
        title="Scale the team,"
        accent="not the bill."
        intro="Roles, assignment, and privacy controls that let you add everyone and still keep customer data protected and every lead owned."
        items={capabilities}
        gridClass="sm:grid-cols-2 lg:grid-cols-3"
      />

      <StatsBand
        stats={[
          { value: "0", label: "Per-seat fees, invite everyone" },
          { value: "Masked", label: "Agent role hides contact PII" },
          { value: "Roles", label: "Right access for every member" },
          { value: "AI log", label: "Review each AI tool action" },
        ]}
      />

      <FAQ
        label="Team FAQ"
        title="Team & access, answered."
        intro="How roles and privacy work in SpeedIQ."
        items={[
          {
            q: "Is there really no per-seat charge?",
            a: "There are no per-seat charges. You pay for the plan and usage, while the number of members follows the team-member limit on that plan.",
          },
          {
            q: "What does the masked agent role do?",
            a: "It hides contact PII. Members with the agent role see a coded ID instead of raw phone numbers and emails, so they can work leads and conversations without ever accessing personal data. The masking is enforced at the database level.",
          },
          {
            q: "Can I control what each member sees?",
            a: "Yes, through set roles: admin, editor, viewer, and the masked agent role, with the owner in full control. Pick the role that fits each person's job. Custom roles aren't available.",
          },
          {
            q: "Can I review what the AI did?",
            a: "Yes. The AI action log under AI Conversations lists every tool the AI tried to use, with confirmations, results, failures, and timing.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}

/* ---------------- Hero visual: team & masked contact ---------------- */

function TeamCard() {
  const members = [
    { n: "Neeraj K.", role: "Admin", c: "#334155", tag: "Full access" },
    { n: "Sara P.", role: "Editor", c: "#4a7bc9", tag: "Edit access" },
    { n: "Agent 07", role: "Agent", c: "#94a3b8", tag: "Masked", masked: true },
  ];
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
              <UsersIcon className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className="text-[13px] font-semibold text-[#11161f]">Team</div>
              <div className="text-[11px] text-[#9ca3af]">14 members · plan limit applies</div>
            </div>
          </div>
          <span className="rounded-full bg-[#eef1f5] px-2.5 py-1 text-[10px] font-semibold text-[#475569]">
            Roles
          </span>
        </div>

        {/* members */}
        <div className="flex flex-col">
          {members.map((m) => (
            <div key={m.n} className="flex items-center gap-3 border-b border-[#F5F6FB] px-5 py-3 last:border-b-0">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ backgroundColor: m.c }}>
                {m.masked ? <MaskIcon className="h-3.5 w-3.5" /> : m.n.split(" ").map((w) => w[0]).join("")}
              </span>
              <div className="min-w-0 flex-1 leading-tight">
                <div className="truncate text-[12px] font-semibold text-[#11161f]">{m.n}</div>
                <div className="text-[11px] text-[#9ca3af]">{m.role}</div>
              </div>
              <span className="rounded-full bg-[#F5F6FB] px-2.5 py-1 text-[10px] font-semibold text-[#5b6170]">{m.tag}</span>
            </div>
          ))}
        </div>

        {/* masked contact preview */}
        <div className="border-t border-[#f0f2f5] bg-[#f9fafb] px-5 py-3.5">
          <div className="text-[10px] font-semibold tracking-[0.12em] text-[#9ca3af]">AGENT VIEW · CONTACT</div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-[12px] font-semibold text-[#11161f]">CT-40912</span>
            <span className="flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-[#475569] ring-1 ring-[#e3e7f0]">
              <MaskIcon className="h-3 w-3" /> PII hidden
            </span>
          </div>
          <div className="mt-1.5 flex items-center gap-3 text-[11px] text-[#9ca3af]">
            <span>+91 ····· ····</span>
            <span>·····@·····.com</span>
          </div>
        </div>
      </div>

      <div className="floaty absolute -bottom-5 -right-3 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-[0_18px_44px_rgba(0,0,0,0.4)] ring-1 ring-black/5">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg text-white" style={{ backgroundColor: "#217b4c" }}>
          <UsersIcon className="h-3.5 w-3.5" />
        </span>
        <div className="leading-tight">
          <div className="text-[11px] font-semibold text-[#11161f]">+ 6 invited</div>
          <div className="text-[10px] text-[#9ca3af]">$0 extra</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Icons ---------------- */

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 19c0-2.8 2.2-5 5-5s5 2.2 5 5M15 6.5a3 3 0 0 1 0 5.5M20 19c0-2.2-1.3-4-3.5-4.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function KeyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="8" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.5 11.5L19 20M16 17l2-2M14 15l1.5-1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function MaskIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M5 6l14 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function AssignIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="10" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 19c0-3 2.7-5.2 6-5.2 1.2 0 2.3.3 3.2.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15 17h6M18 14v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function LogIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4.5" y="4" width="15" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 9h8M8 12.5h8M8 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4.5 7.5l7.5 5 7.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
