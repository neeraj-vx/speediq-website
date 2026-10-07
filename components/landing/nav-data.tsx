/* Data + icons for the header mega menus (Features & Resources). Kept in its own
   module so both the desktop mega panels and the mobile menu in Navbar.tsx share a
   single source of truth. Server-safe (no "use client") — icons are plain SVGs. */

export type MegaItem = {
  name: string;
  href: string;
  blurb: string;
  icon: (props: { className?: string }) => React.ReactNode;
  color: string;
};

export type MegaGroup = { label: string; items: MegaItem[] };

/* Grouped exactly like the /features page so the menu mirrors the site map. */
export const featureGroups: MegaGroup[] = [
  {
    label: "Channels",
    items: [
      { name: "Unified Inbox", href: "/features/inbox", blurb: "Every channel in one shared thread.", icon: InboxIcon, color: "#16557a" },
      { name: "Social", href: "/features/social", blurb: "Leads, comments & DMs from social.", icon: SocialIcon, color: "#a033ff" },
      { name: "WhatsApp", href: "/features/whatsapp", blurb: "WhatsApp Business at scale.", icon: WhatsAppIcon, color: "#217b4c" },
      { name: "Email", href: "/features/email", blurb: "Design, send & automate email.", icon: MailIcon, color: "#4a7bc9" },
      { name: "SMS", href: "/features/sms", blurb: "Reliable, two-way SMS.", icon: ChatIcon, color: "#e5b32f" },
      { name: "Voice", href: "/features/voice", blurb: "In-app dialer, every call logged.", icon: PhoneIcon, color: "#d97706" },
    ],
  },
  {
    label: "Capture & grow",
    items: [
      { name: "AI Prospecting", href: "/features/prospecting", blurb: "Source local leads from Google Maps.", icon: MapIcon, color: "#0526D9" },
      { name: "Forms", href: "/features/forms", blurb: "No-code forms that become leads.", icon: FormIcon, color: "#7c3aed" },
      { name: "Booking", href: "/features/booking", blurb: "Share a page, take bookings.", icon: CalendarIcon, color: "#0d9488" },
    ],
  },
  {
    label: "Run & scale",
    items: [
      { name: "CRM & Pipeline", href: "/features/crm", blurb: "Contacts, pipelines & timelines.", icon: PipelineIcon, color: "#0526D9" },
      { name: "Automations & AI", href: "/features/automations", blurb: "No-code flows plus AI auto-reply.", icon: BoltIcon, color: "#16557a" },
      { name: "Analytics", href: "/features/analytics", blurb: "Cross-channel reporting.", icon: ChartIcon, color: "#4f46e5" },
      { name: "Team & Permissions", href: "/features/team", blurb: "Roles, plan limits & PII masking.", icon: UsersIcon, color: "#334155" },
    ],
  },
];

/* Everything a visitor reaches for that isn't a product feature. `active` values
   listed here light up the Resources trigger in the nav. (Overview/Product is a
   top-level nav link, so it deliberately isn't repeated here.) */
export const resourceItems: MegaItem[] = [
  { name: "Use cases", href: "/use-cases", blurb: "How real teams run on SpeedIQ.", icon: BriefcaseIcon, color: "#0d9488" },
  { name: "Compare", href: "/compare", blurb: "SpeedIQ vs. the alternatives.", icon: CompareIcon, color: "#7c3aed" },
  { name: "Docs", href: "/docs", blurb: "Guides & product documentation.", icon: BookIcon, color: "#16557a" },
  { name: "Why us", href: "/why-us", blurb: "What makes SpeedIQ different.", icon: SparkIcon, color: "#f47b3f" },
  { name: "About", href: "/about", blurb: "Our mission and the team.", icon: BuildingIcon, color: "#334155" },
];

/* The `active` labels that should highlight the Resources trigger. Product/Overview
   is intentionally excluded — it highlights its own top-level nav link instead. */
export const resourceActiveKeys = new Set([
  "Use cases",
  "Compare",
  "Docs",
  "Why us",
  "About",
]);

/* ---------------- Icons ---------------- */

function InboxIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 13l2.5-7h11L20 13v5H4v-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 13h4l1.5 2h5L16 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function SocialIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="6" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.1 10.9l6.8-3.8M8.1 13.1l6.8 3.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 19l1.1-3.3A7 7 0 1 1 9 18.2L5 19Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9.2 9.4c-.2 1 .4 2.2 1.3 3.1.9.9 2.1 1.5 3.1 1.3.4-.1.7-.5.6-.9l-.2-.7a.6.6 0 0 0-.7-.4l-.9.2-1.3-1.3.2-.9a.6.6 0 0 0-.4-.7l-.7-.2c-.4-.1-.8.2-.9.6Z" fill="currentColor" />
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
function ChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 5.5h14v10H9l-4 3.5V5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 10.5h6M9 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M7 3.8a1.4 1.4 0 0 1 1.4.85l1.1 2.6a1.4 1.4 0 0 1-.32 1.6l-.95.9a10.5 10.5 0 0 0 4.2 4.2l.9-.95a1.4 1.4 0 0 1 1.6-.32l2.6 1.1a1.4 1.4 0 0 1 .85 1.4v2.1a1.6 1.6 0 0 1-1.75 1.6C9.8 20.3 3.7 14.2 3.4 6.15A1.6 1.6 0 0 1 5 4.4h2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function MapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 4v14M15 6v14" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
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
function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="5.5" width="16" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 9.5h16M8 3.5v4M16 3.5v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function PipelineIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3.5" y="4.5" width="4" height="15" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="10" y="4.5" width="4" height="10" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="16.5" y="4.5" width="4" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
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
function ChartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 4v16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 14l3-3 2.5 2.5L19 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function UsersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 19c0-2.8 2.2-5 5-5s5 2.2 5 5M15 6.5a3 3 0 0 1 0 5.5M20 19c0-2.2-1.3-4-3.5-4.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3.5" y="7.5" width="17" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5M3.5 12.5h17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function CompareIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 4v16M6 8H3l3-4 3 4H6Zm0 0v6a2 2 0 0 1-4 0M18 8h-3l3-4 3 4h-3Zm0 0v6a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function BookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 4.5h9a2 2 0 0 1 2 2V20a2 2 0 0 0-2-2H5V4.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M16 6.5h3v11.5a2 2 0 0 0-2-2h-1M8.5 8.5h4M8.5 11.5h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function SparkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 3l1.8 4.9L18.7 9.7l-4.9 1.8L12 16.4l-1.8-4.9L5.3 9.7l4.9-1.8L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M18.5 15.5l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7.7-1.9Z" fill="currentColor" />
    </svg>
  );
}
function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 20V6l7-3v17M12 20V9l6 2.5V20M4 20h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 8v0M8 11.5v0M8 15v0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
