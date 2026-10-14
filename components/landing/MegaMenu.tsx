/* Presentational panels for the header mega menus. The Navbar owns open/close
   state, positioning and the entrance animation; these components only render
   the panel contents. `onNavigate` lets the Navbar close the menu on click. */

import { SIGN_UP_URL } from "@/lib/landing/links";
import {
  featureGroups,
  resourceItems,
  type MegaItem,
} from "@/components/landing/nav-data";

function MegaLink({
  item,
  onNavigate,
}: {
  item: MegaItem;
  onNavigate?: () => void;
}) {
  const { name, href, blurb, icon: Icon } = item;
  return (
    <a
      href={href}
      onClick={onNavigate}
      className="group/link flex items-start gap-3 rounded-[18px] p-2.5 transition-colors hover:bg-mist-2"
    >
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist text-accent transition-transform group-hover/link:scale-[1.06]"
      >
        <Icon className="h-[17px] w-[17px]" />
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-1 text-[14px] font-medium text-ink">
          {name}
          <span className="text-faint opacity-0 transition-all group-hover/link:translate-x-0.5 group-hover/link:opacity-100">
            ↗
          </span>
        </span>
        <span className="mt-0.5 block text-[12px] leading-[1.45] text-muted">
          {blurb}
        </span>
      </span>
    </a>
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2 px-2.5 text-[13px] font-medium text-muted">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}

/* ---------------- Features ---------------- */

export function FeaturesMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex gap-6">
      <div className="grid flex-1 grid-cols-2 gap-x-4 gap-y-7 md:grid-cols-3">
        {featureGroups.map((group) => (
          <div key={group.label}>
            <GroupLabel>{group.label}</GroupLabel>
            <div className="mt-2 flex flex-col">
              {group.items.map((item) => (
                <MegaLink key={item.name} item={item} onNavigate={onNavigate} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Promo rail — navy card echoing the hero, hidden until there's room. */}
      <a
        href="/features"
        onClick={onNavigate}
        className="group/promo relative hidden w-[236px] shrink-0 flex-col justify-between overflow-hidden rounded-[22px] p-6 text-white lg:flex g-blue"
       
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="relative">
       
          <h4 className="mt-4 font-display text-[22px] font-light leading-[1.2] tracking-[-0.02em] text-white">
            One workspace for every conversation.
          </h4>
          <ul className="mt-4 space-y-2">
            {["No per-seat fees", "Lead capture + routing", "AI with human hand-off"].map(
              (t) => (
                <li
                  key={t}
                  className="flex items-center gap-2 text-[12px] text-white/80"
                >
                  <CheckMini className="h-3.5 w-3.5 shrink-0 text-white" />
                  {t}
                </li>
              ),
            )}
          </ul>
        </div>
        <span className="relative mt-6 inline-flex items-center gap-2 text-[13.5px] font-medium text-white">
          Explore all features
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#0c1726] transition-transform group-hover/promo:rotate-45">
            <ArrowMini className="h-3 w-3" />
          </span>
        </span>
      </a>
    </div>
  );
}

/* ---------------- Resources ---------------- */

export function ResourcesMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
        {resourceItems.map((item) => (
          <MegaLink key={item.name} item={item} onNavigate={onNavigate} />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between gap-3 border-t border-mist-line px-2.5 pt-4">
        <div className="text-[12.5px] text-muted">
          Ready to see it in action?
        </div>
        <a
          href={SIGN_UP_URL}
          onClick={onNavigate}
          className="group/cta inline-flex items-center gap-2 rounded-full bg-accent py-1.5 pl-4 pr-1.5 text-[13px] font-medium text-white transition-colors hover:bg-accent-ink"
        >
          Start free
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-accent transition-transform group-hover/cta:rotate-45">
            <ArrowMini className="h-3 w-3" />
          </span>
        </a>
      </div>
    </div>
  );
}

/* ---------------- Icons ---------------- */

function CheckMini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ArrowMini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M4 12L12 4M12 4H5.5M12 4V10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
