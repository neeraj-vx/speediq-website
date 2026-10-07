"use client";

import { useEffect, useRef, useState } from "react";

import { FeaturesMenu, ResourcesMenu } from "@/components/landing/MegaMenu";
import {
  featureGroups,
  resourceItems,
  resourceActiveKeys,
} from "@/components/landing/nav-data";
import { LOGIN_URL } from "@/lib/landing/links";

/* Shared top navigation used across pages, sitting on the hero gradient.
   The desktop nav is condensed into two hover mega menus (Features & Resources)
   plus a Pricing link; the fullscreen mobile menu mirrors them as accordions.
   The marketing site has no session: the CTA always leads to the app's login. */

type MenuId = "features" | "resources";

export default function Navbar({
  active,
  variant = "dark",
}: {
  active?: string;
  variant?: "dark" | "light";
}) {
  const light = variant === "light";
  const [open, setOpen] = useState(false); // mobile fullscreen menu
  const [mobileSection, setMobileSection] = useState<MenuId | null>(null);
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const featuresActive = active === "Features" || active === "Inbox";
  const resourcesActive = active ? resourceActiveKeys.has(active) : false;

  /* ---- Desktop mega-menu open/close with a small hover-intent delay ---- */
  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const openNow = (id: MenuId) => {
    cancelClose();
    setOpenMenu(id);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };
  const closeNow = () => {
    cancelClose();
    setOpenMenu(null);
  };

  // Close the mega menu on Escape, and clean up the hover timer on unmount.
  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpenMenu(null);
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
        closeTimer.current = null;
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openMenu]);

  useEffect(() => () => cancelClose(), []);

  // Lock background scroll while the fullscreen menu is open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const triggerClass = (activeOrOpen: boolean) =>
    `group inline-flex items-center gap-1 rounded-full px-4 py-2.5 text-[15px] font-medium transition-colors ${
      activeOrOpen
        ? light
          ? "bg-black/[0.05] text-[#11161f]"
          : "bg-white/10 text-white"
        : light
          ? "text-[#11161f]/75 hover:bg-black/[0.04] hover:text-[#11161f]"
          : "text-white/80 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <>
      <header
        className="animate-fade-down relative z-50 flex items-center justify-between pt-6"
        style={{ animationDelay: "0s" }}
      >
      {/* Logo + wordmark, color follows the nav variant so it never blends in */}
      <a
        href="/"
        className={`floaty inline-flex items-center gap-2.5 ${light ? "text-[#11161f]" : "text-white"}`}
      >
        <LogoMark className="h-7 w-auto" />
        <span className="font-display text-[20px] font-semibold tracking-tight">SpeedIQ</span>
      </a>

      {/* Center nav (desktop): Product + two mega menus + Pricing */}
      <nav className="hidden items-center gap-1 md:flex">
        <a
          href="/product"
          onMouseEnter={closeNow}
          className={`rounded-full px-4 py-2.5 text-[15px] font-medium transition-colors ${
            active === "Product"
              ? light
                ? "text-[#11161f]"
                : "text-white"
              : light
                ? "text-[#11161f]/75 hover:bg-black/[0.04] hover:text-[#11161f]"
                : "text-white/80 hover:bg-white/5 hover:text-white"
          }`}
        >
          Product
        </a>

        <button
          type="button"
          aria-haspopup="true"
          aria-expanded={openMenu === "features"}
          onMouseEnter={() => openNow("features")}
          onMouseLeave={scheduleClose}
          onClick={() => setOpenMenu((v) => (v === "features" ? null : "features"))}
          className={triggerClass(featuresActive || openMenu === "features")}
        >
          Features
          <ChevronMini
            className={`h-3.5 w-3.5 transition-transform duration-300 ${
              openMenu === "features" ? "rotate-180" : ""
            }`}
          />
        </button>

        <button
          type="button"
          aria-haspopup="true"
          aria-expanded={openMenu === "resources"}
          onMouseEnter={() => openNow("resources")}
          onMouseLeave={scheduleClose}
          onClick={() => setOpenMenu((v) => (v === "resources" ? null : "resources"))}
          className={triggerClass(resourcesActive || openMenu === "resources")}
        >
          Resources
          <ChevronMini
            className={`h-3.5 w-3.5 transition-transform duration-300 ${
              openMenu === "resources" ? "rotate-180" : ""
            }`}
          />
        </button>

        <a
          href="/pricing"
          onMouseEnter={closeNow}
          className={`rounded-full px-4 py-2.5 text-[15px] font-medium transition-colors ${
            active === "Pricing"
              ? light
                ? "text-[#11161f]"
                : "text-white"
              : light
                ? "text-[#11161f]/75 hover:bg-black/[0.04] hover:text-[#11161f]"
                : "text-white/80 hover:bg-white/5 hover:text-white"
          }`}
        >
          Pricing
        </a>
      </nav>

      <div className="flex items-center gap-3">
        <a
          href={LOGIN_URL}
          className="group hidden items-center gap-2.5 rounded-full bg-lime py-2 pl-6 pr-2 text-[15px] font-medium text-white transition-transform hover:scale-[1.04] md:inline-flex"
        >
          Login
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:rotate-45">
            <ArrowIcon className="h-3.5 w-3.5" />
          </span>
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors md:hidden ${
            light
              ? "border-black/10 text-[#11161f] hover:bg-black/[0.04]"
              : "border-white/15 text-white hover:bg-white/10"
          }`}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {/* ---- Desktop mega-menu panel ---- */}
      {openMenu ? (
        <div className="pointer-events-none absolute left-0 right-0 top-full z-50 hidden justify-center md:flex">
          <div className="pt-3">
            <div
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
              className="animate-fade-down pointer-events-auto overflow-hidden rounded-2xl border border-[#e6e9f1] bg-white p-5 shadow-[0_30px_80px_-24px_rgba(16,24,40,0.4)]"
              style={{
                animationDuration: "0.34s",
                width:
                  openMenu === "features"
                    ? "min(920px, calc(100vw - 2rem))"
                    : "min(560px, calc(100vw - 2rem))",
              }}
            >
              {openMenu === "features" ? (
                <FeaturesMenu onNavigate={closeNow} />
              ) : (
                <ResourcesMenu onNavigate={closeNow} />
              )}
            </div>
          </div>
        </div>
      ) : null}
      </header>

      {/* Fullscreen mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#0a1422] px-6 pb-8 pt-5 md:hidden">
          <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />

          <div className="relative flex items-center justify-between">
            <div className="inline-flex items-center gap-2.5 text-white">
              <LogoMark className="h-7 w-auto" />
              <span className="font-display text-[20px] font-semibold tracking-tight">SpeedIQ</span>
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <nav className="relative flex-1 overflow-y-auto py-4">
            {/* Product - plain link */}
            <a
              href="/product"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-white/10 py-4 font-display text-[26px] font-medium tracking-tight text-white/85 transition-colors hover:text-white"
            >
              Product
            </a>

            {/* Features accordion */}
            <MobileAccordion
              label="Features"
              expanded={mobileSection === "features"}
              onToggle={() =>
                setMobileSection((s) => (s === "features" ? null : "features"))
              }
            >
              <div className="flex flex-col gap-5 pb-2">
                {featureGroups.map((group) => (
                  <div key={group.label}>
                    <div className="mb-1 flex items-center gap-2 px-3 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/40">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#f47b3f]" />
                      {group.label}
                    </div>
                    {group.items.map((item) => (
                      <MobileMegaLink
                        key={item.name}
                        item={item}
                        onNavigate={() => setOpen(false)}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </MobileAccordion>

            {/* Resources accordion */}
            <MobileAccordion
              label="Resources"
              expanded={mobileSection === "resources"}
              onToggle={() =>
                setMobileSection((s) => (s === "resources" ? null : "resources"))
              }
            >
              <div className="pb-2">
                {resourceItems.map((item) => (
                  <MobileMegaLink
                    key={item.name}
                    item={item}
                    onNavigate={() => setOpen(false)}
                  />
                ))}
              </div>
            </MobileAccordion>

            {/* Pricing - plain link */}
            <a
              href="/pricing"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-white/10 py-4 font-display text-[26px] font-medium tracking-tight text-white/85 transition-colors hover:text-white"
            >
              Pricing
            </a>
          </nav>

          <a
            href={LOGIN_URL}
            className="group relative flex items-center justify-center gap-2.5 rounded-full bg-lime py-4 text-[16px] font-medium text-white"
          >
            Login
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:rotate-45">
              <ArrowIcon className="h-3 w-3" />
            </span>
          </a>
        </div>
      )}
    </>
  );
}

/* ---------------- Mobile helpers ---------------- */

function MobileAccordion({
  label,
  expanded,
  onToggle,
  children,
}: {
  label: string;
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        aria-expanded={expanded}
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span
          className={`font-display text-[26px] font-medium tracking-tight transition-colors ${
            expanded ? "text-white" : "text-white/85"
          }`}
        >
          {label}
        </span>
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white transition-transform duration-300 ${
            expanded ? "rotate-45" : ""
          }`}
        >
          <PlusMini className="h-3.5 w-3.5" />
        </span>
      </button>
      {expanded ? <div className="pb-3">{children}</div> : null}
    </div>
  );
}

function MobileMegaLink({
  item,
  onNavigate,
}: {
  item: { name: string; href: string; blurb: string; color: string; icon: (p: { className?: string }) => React.ReactNode };
  onNavigate: () => void;
}) {
  const { name, href, blurb, color, icon: Icon } = item;
  return (
    <a
      href={href}
      onClick={onNavigate}
      className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5"
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.06]"
        style={{ color }}
      >
        <Icon className="h-[17px] w-[17px]" />
      </span>
      <span className="min-w-0">
        <span className="block text-[15px] font-medium text-white">{name}</span>
        <span className="block truncate text-[12px] text-white/45">{blurb}</span>
      </span>
    </a>
  );
}

/* ---------------- Icons ---------------- */

export function ArrowIcon({ className }: { className?: string }) {
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

function ChevronMini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
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
