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
  const { name, href, blurb, icon: Icon, color } = item;
  return (
    <a
      href={href}
      onClick={onNavigate}
      className="group/link flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-[#F5F6FB]"
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#e3e7f0] bg-white shadow-sm transition-transform group-hover/link:scale-[1.06]"
        style={{ color }}
      >
        <Icon className="h-[17px] w-[17px]" />
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-1 text-[13.5px] font-semibold text-[#11161f]">
          {name}
          <span className="text-[#c3c9d4] opacity-0 transition-all group-hover/link:translate-x-0.5 group-hover/link:opacity-100">
            ↗
          </span>
        </span>
        <span className="mt-0.5 block text-[11.5px] leading-[1.45] text-[#7a808b]">
          {blurb}
        </span>
      </span>
    </a>
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2 px-2.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#9aa0ac]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#f47b3f]" />
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
        className="group/promo relative hidden w-[236px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl p-6 text-white lg:flex bg-[#0526D9]"
       
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
       
          <h4 className="mt-4 font-display text-[19px] font-semibold leading-[1.2] tracking-tight text-white">
            One workspace for every conversation.
          </h4>
          <ul className="mt-4 space-y-2">
            {["No per-seat fees", "Lead capture + routing", "AI with human hand-off"].map(
              (t) => (
                <li
                  key={t}
                  className="flex items-center gap-2 text-[12px] text-white/80"
                >
                  <CheckMini className="h-3.5 w-3.5 shrink-0 text-[#4ade80]" />
                  {t}
                </li>
              ),
            )}
          </ul>
        </div>
        <span className="relative mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-white">
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
      <div className="mt-3 flex items-center justify-between gap-3 border-t border-[#eef0f5] px-2.5 pt-4">
        <div className="text-[12px] text-[#7a808b]">
          Ready to see it in action?
        </div>
        <a
          href={SIGN_UP_URL}
          onClick={onNavigate}
          className="group/cta inline-flex items-center gap-2 rounded-full bg-[#15171d] py-1.5 pl-4 pr-1.5 text-[12.5px] font-semibold text-white transition-transform hover:scale-[1.03]"
        >
          Start free
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#15171d] transition-transform group-hover/cta:rotate-45">
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
