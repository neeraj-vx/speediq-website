"use client";

import { useEffect, useRef, useState } from "react";

import { usePathname } from "next/navigation";

import { FeaturesMenu, ResourcesMenu } from "@/components/landing/MegaMenu";
import { featureGroups, resourceItems } from "@/components/landing/nav-data";
import { LOGIN_URL, SIGN_UP_URL } from "@/lib/landing/links";

import { Icon, LogoMark } from "./icons";
import { CircleLink } from "./pills";
import { Container } from "./primitives";

/* Site-wide sticky header. Desktop: logo, Product, two hover mega menus
   (Features, Resources), Pricing, Docs, then Log in / Get started. Mobile: a
   full-screen sheet with the same groups as accordions. No session: the CTAs
   always lead to the app. */

type MenuId = "features" | "resources";

export default function Navbar() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuId | null>(null);
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (prefix: string) => pathname === prefix || pathname.startsWith(`${prefix}/`);
  const featuresActive = isActive("/features");
  const resourcesActive = ["/use-cases", "/compare", "/why-us", "/about"].some(isActive);

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeNow();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openMenu]);

  useEffect(() => () => cancelClose(), []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close everything on navigation.
  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  const link = (active: boolean) =>
    `inline-flex h-9 items-center gap-1 rounded-full px-3.5 text-[14.5px] font-medium transition-colors ${
      active ? "bg-mist text-ink" : "text-ink/80 hover:bg-mist-2 hover:text-ink"
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-colors ${
          scrolled ? "border-mist-line bg-paper/85 backdrop-blur-md" : "border-transparent bg-paper/0"
        }`}
      >
        <Container>
          <div className="relative flex h-16 items-center justify-between">
            <a href="/" className="inline-flex items-center gap-2.5 text-ink">
              <LogoMark className="h-6 w-auto" />
              <span className="font-display text-[19px] font-semibold tracking-tight">SpeedIQ</span>
            </a>

            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 md:flex" aria-label="Main">
              <a href="/product" onMouseEnter={closeNow} className={link(isActive("/product"))}>
                Product
              </a>
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={openMenu === "features"}
                onMouseEnter={() => openNow("features")}
                onMouseLeave={scheduleClose}
                onClick={() => setOpenMenu((v) => (v === "features" ? null : "features"))}
                className={link(featuresActive || openMenu === "features")}
              >
                Features
                <Chevron open={openMenu === "features"} />
              </button>
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={openMenu === "resources"}
                onMouseEnter={() => openNow("resources")}
                onMouseLeave={scheduleClose}
                onClick={() => setOpenMenu((v) => (v === "resources" ? null : "resources"))}
                className={link(resourcesActive || openMenu === "resources")}
              >
                Resources
                <Chevron open={openMenu === "resources"} />
              </button>
              <a href="/pricing" onMouseEnter={closeNow} className={link(isActive("/pricing"))}>
                Pricing
              </a>
              <a href="/docs" onMouseEnter={closeNow} className={link(isActive("/docs"))}>
                Docs
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <a href={LOGIN_URL} className="hidden h-10 items-center rounded-full bg-mist px-5 text-[14.5px] font-medium text-ink transition-colors hover:bg-[#e3e7f1] md:inline-flex">
                Log in
              </a>
              <div className="hidden pl-1 md:block">
                <CircleLink href={SIGN_UP_URL} size="sm">
                  Get started
                </CircleLink>
              </div>
              <button
                type="button"
                aria-label="Menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink md:hidden"
              >
                {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
              </button>
            </div>

            {openMenu ? (
              <div className="pointer-events-none absolute left-0 right-0 top-full z-50 hidden justify-center md:flex">
                <div className="pt-2">
                  <div
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                    className="pointer-events-auto overflow-hidden rounded-[26px] bg-white p-5 shadow-[0_30px_80px_-24px_rgba(11,15,25,0.35)] ring-1 ring-mist-line"
                    style={{ width: openMenu === "features" ? "min(920px, calc(100vw - 2rem))" : "min(560px, calc(100vw - 2rem))" }}
                  >
                    {openMenu === "features" ? <FeaturesMenu onNavigate={closeNow} /> : <ResourcesMenu onNavigate={closeNow} />}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </Container>
      </header>

      {open ? (
        <div className="fixed inset-0 z-[60] flex flex-col bg-paper px-5 pb-6 pt-3 md:hidden">
          <div className="flex h-12 items-center justify-between">
            <a href="/" className="inline-flex items-center gap-2.5 text-ink">
              <LogoMark className="h-6 w-auto" />
              <span className="font-display text-[19px] font-semibold tracking-tight">SpeedIQ</span>
            </a>
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink">
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-3" aria-label="Mobile">
            <a href="/product" className="flex items-center justify-between border-b border-line py-4 font-display text-[24px] font-medium text-ink">
              Product
            </a>
            <MobileAccordion label="Features" expanded={mobileSection === "features"} onToggle={() => setMobileSection((s) => (s === "features" ? null : "features"))}>
              <div className="flex flex-col gap-5 pb-2">
                {featureGroups.map((group) => (
                  <div key={group.label}>
                    <div className="mb-1 px-2 text-[13px] font-medium text-muted">{group.label}</div>
                    {group.items.map((item) => (
                      <MobileLink key={item.name} item={item} />
                    ))}
                  </div>
                ))}
              </div>
            </MobileAccordion>
            <MobileAccordion label="Resources" expanded={mobileSection === "resources"} onToggle={() => setMobileSection((s) => (s === "resources" ? null : "resources"))}>
              <div className="pb-2">
                {resourceItems.map((item) => (
                  <MobileLink key={item.name} item={item} />
                ))}
              </div>
            </MobileAccordion>
            <a href="/pricing" className="flex items-center justify-between border-b border-line py-4 font-display text-[24px] font-medium text-ink">
              Pricing
            </a>
            <a href="/docs" className="flex items-center justify-between border-b border-line py-4 font-display text-[24px] font-medium text-ink">
              Docs
            </a>
          </nav>

          <div className="grid grid-cols-2 gap-3">
            <a href={LOGIN_URL} className="inline-flex h-12 items-center justify-center rounded-full bg-mist text-[15px] font-medium text-ink">
              Log in
            </a>
            <a href={SIGN_UP_URL} className="inline-flex h-12 items-center justify-center rounded-full bg-ink text-[15px] font-medium text-white">
              Get started
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}

function MobileAccordion({ label, expanded, onToggle, children }: { label: string; expanded: boolean; onToggle: () => void; children: React.ReactNode }) {
  return (
    <div className="border-b border-line">
      <button type="button" aria-expanded={expanded} onClick={onToggle} className="flex w-full items-center justify-between py-4 text-left">
        <span className="font-display text-[24px] font-medium text-ink">{label}</span>
        <span className={`flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink transition-transform duration-300 ${expanded ? "rotate-45" : ""}`}>
          <Icon name="plus" className="h-3.5 w-3.5" strokeWidth={2} />
        </span>
      </button>
      {expanded ? <div className="pb-3">{children}</div> : null}
    </div>
  );
}

function MobileLink({ item }: { item: { name: string; href: string; blurb: string; color: string; icon: (p: { className?: string }) => React.ReactNode } }) {
  const { name, href, blurb, icon: ItemIcon } = item;
  return (
    <a href={href} className="flex items-center gap-3 rounded-[16px] px-2 py-2.5 transition-colors hover:bg-mist-2">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist text-accent">
        <ItemIcon className="h-[17px] w-[17px]" />
      </span>
      <span className="min-w-0">
        <span className="block text-[15px] font-medium text-ink">{name}</span>
        <span className="block truncate text-[12.5px] text-muted">{blurb}</span>
      </span>
    </a>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} aria-hidden>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
