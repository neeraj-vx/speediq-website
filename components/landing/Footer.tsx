/* Site footer, a dark CTA card (navy, matching the hero) plus link columns and
   a legal bar. Uses the shared lime accent and logo mark. */

import { SIGN_UP_URL } from "@/lib/landing/links";

const columns = [
  {
    title: "Channels",
    links: [
      { label: "Unified Inbox", href: "/features/inbox" },
      { label: "Social", href: "/features/social" },
      { label: "WhatsApp", href: "/features/whatsapp" },
      { label: "Email", href: "/features/email" },
      { label: "SMS", href: "/features/sms" },
      { label: "Voice", href: "/features/voice" },
    ],
  },
  {
    title: "Grow & CRM",
    links: [
      { label: "CRM & Pipeline", href: "/features/crm" },
      { label: "Forms", href: "/features/forms" },
      { label: "Booking", href: "/features/booking" },
      { label: "AI Prospecting", href: "/features/prospecting" },
      { label: "Automations & AI", href: "/features/automations" },
      { label: "Analytics", href: "/features/analytics" },
      { label: "Team & Permissions", href: "/features/team" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Overview", href: "/product" },
      { label: "All features", href: "/features" },
      { label: "Docs", href: "/docs" },
      { label: "Pricing", href: "/pricing" },
      { label: "Compare", href: "/compare" },
      { label: "Use cases", href: "/use-cases" },
      { label: "Why us", href: "/why-us" },
      { label: "About us", href: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-slate-200 to-[#fff]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------- CTA card ---------- */}
        <div
          className="reveal relative overflow-hidden rounded-[28px] px-7 py-14 shadow-[0_30px_80px_-32px_rgba(37,99,235,0.55)] sm:px-14 sm:py-20"
          style={{
            background:
              "linear-gradient(105deg, #0526D9 0%, #3f74f0 34%, #6f9bf5 66%, #b6cbfb 100%)",
          }}
        >
          {/* soft light bloom, top-left */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 90% at 12% 15%, rgba(255,255,255,0.22), transparent 60%)",
            }}
          />
          {/* abstract 3D blades, right side */}
          <CtaBlades />

          <div className="relative max-w-xl">
            <h2 className="font-display text-[34px] font-semibold leading-[1.06] tracking-tight text-white sm:text-[46px]">
              Ready to unify every
              <br className="hidden sm:block" />
              conversation?
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-white/85 sm:text-[16px]">
              Every channel in one workspace: WhatsApp, Email, SMS &amp; social,
              with leads, CRM and AI automations. No per-seat fees.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href={SIGN_UP_URL}
                className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-7 pr-2 text-[15px] font-semibold text-[#11161f] shadow-[0_12px_30px_rgba(12,26,70,0.28)] transition-transform hover:scale-[1.03]"
              >
                Start free
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0526D9] text-white transition-transform group-hover:rotate-45">
                  <ArrowIcon className="h-3.5 w-3.5" />
                </span>
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center rounded-full border border-white/55 px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/15"
              >
                See pricing
              </a>
            </div>
          </div>
        </div>

        {/* ---------- Footer body ---------- */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-16 md:grid-cols-3 lg:grid-cols-5">
          {/* Brand + contact */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2.5 text-[#11161f]">
              <LogoMark className="h-7 w-auto" />
              <span className="font-display text-[20px] font-semibold tracking-tight">SpeedIQ</span>
            </div>
            <p className="mt-5 max-w-[260px] text-[13px] leading-[1.7] text-[#7a808b]">
              One inbox for WhatsApp, Email, SMS, Voice &amp; social, with CRM,
              booking, forms, campaigns and AI automations, no per-seat charges.
            </p>
            <div className="mt-5 space-y-1 text-[12px] leading-[1.7] text-[#9aa0ac]">
              <p>hello@speediq.ai</p>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-semibold text-[#11161f]">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-[#5b6170] transition-colors hover:text-[#11161f]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ---------- Legal bar ---------- */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#e3e7f0] py-7 sm:flex-row">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-[#7a808b]">
            <a href="/legal/privacy" className="transition-colors hover:text-[#11161f]">
              Privacy Policy
            </a>
            <a href="/legal/terms" className="transition-colors hover:text-[#11161f]">
              Terms of Service
            </a>
            <a href="/legal/cookies" className="transition-colors hover:text-[#11161f]">
              Cookie Policy
            </a>
            <a href="/legal/acceptable-use" className="transition-colors hover:text-[#11161f]">
              Acceptable Use
            </a>
            <a href="/legal/dpa" className="transition-colors hover:text-[#11161f]">
              DPA
            </a>
            <a href="/legal/refund" className="transition-colors hover:text-[#11161f]">
              Refund Policy
            </a>
          </div>
          <p className="text-[12px] text-[#9aa0ac]">
            © 2026 SpeedIQ Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* Abstract 3D "blades" that lean across the right of the CTA card, pure CSS,
   a fan of white slabs with a faux-shaded right edge, masked to fade into the
   gradient. Decorative only, hidden below lg. */
function CtaBlades() {
  const bars = [260, 300, 344, 322, 286, 244, 202];
  return (
    <div
      className="pointer-events-none absolute -right-14 top-[70%] hidden -translate-y-1/2 rotate-[-26deg] items-end gap-3.5 lg:flex"
      style={{
        WebkitMaskImage: "linear-gradient(255deg, #000 52%, transparent 90%)",
        maskImage: "linear-gradient(255deg, #000 52%, transparent 90%)",
      }}
    >
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-[38px] rounded-[8px]"
          style={{
            height: h,
            background: "linear-gradient(160deg, #ffffff 0%, #eef3ff 45%, #cbd8f8 100%)",
            boxShadow:
              "inset -7px 0 14px rgba(120,150,210,0.45), 0 24px 50px rgba(15,35,90,0.28)",
          }}
        />
      ))}
    </div>
  );
}

/* ---------------- Icons ---------------- */

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M4 12L12 4M12 4H5.5M12 4V10.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 409 290" fill="none" className={className}>
      <path
        d="M239.482 0.348289L114.082 0.608379L23.9201 112.704C-8.23713 152.685 -7.9415 209.739 24.6283 249.384C68.4223 302.691 150.222 302.034 193.154 248.03L319.313 89.3327L332.87 89.3046L332.87 101.999L188.503 289.663L312.209 289.406L408.209 165.226L407.58 -1.3369e-05L266.596 0.292406L121.046 183.381C116.816 188.702 108.739 188.719 104.487 183.415C101.392 179.555 101.381 174.068 104.459 170.195L239.482 0.348289Z"
        fill="currentColor"
      />
    </svg>
  );
}

