"use client";

import { useEffect, useRef, useState, type FocusEvent, type KeyboardEvent } from "react";

import Image from "next/image";

import { Icon, type IconName } from "@/components/site/icons";

import { TONE_CLASS, type Tone } from "./ShotPanel";

/* The hero product showcase: a row of pill tabs above one large gradient
   panel. Each tab swaps the panel colour and the real screenshot inside it.
   All panels are mounted and cross-fade, so switching never waits on a
   network request.

   The tabs advance on their own. Timing lives in the active tab's progress
   bar (a CSS animation): when it ends, the next tab activates. That keeps the
   bar and the switch in step, makes pausing a one-line style change, and means
   visitors who prefer reduced motion get no autoplay at all (the animation is
   turned off for them in globals.css). It pauses while the pointer is over the
   showcase, while a tab has keyboard focus, when the page is hidden and when
   the showcase is scrolled out of view. */

const TABS: { id: string; label: string; icon: IconName; tone: Tone; src: string; alt: string }[] = [
  { id: "inbox", label: "Inbox", icon: "inbox", tone: "periwinkle", src: "/product/inbox.png", alt: "The SpeedIQ inbox with a WhatsApp conversation, AI replies and the contact panel" },
  { id: "ai", label: "AI replies", icon: "sparkle", tone: "sky", src: "/product/ai-conversations.png", alt: "AI Conversations showing assistant replies sent and one waiting for review" },
  { id: "crm", label: "CRM", icon: "pipeline", tone: "indigo", src: "/product/pipeline.png", alt: "A sales pipeline board with leads grouped by stage and deal value" },
  { id: "workflows", label: "Workflows", icon: "branch", tone: "slate", src: "/product/workflow.png", alt: "The visual workflow builder with a trigger, a WhatsApp message and a yes/no branch" },
  { id: "chat", label: "Live chat", icon: "chat", tone: "blue", src: "/product/live-chat.png", alt: "Live chat widget set-up with a branded preview of the widget" },
];

export function HeroShowcase() {
  const [active, setActive] = useState(0);
  // Bumped on a manual pick so choosing the active tab again restarts its bar.
  const [cycle, setCycle] = useState(0);
  const [hover, setHover] = useState(false);
  const [kbFocus, setKbFocus] = useState(false);
  const [inView, setInView] = useState(true);
  const [pageHidden, setPageHidden] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const paused = hover || kbFocus || !inView || pageHidden;

  const select = (i: number) => {
    setActive(i);
    setCycle((c) => c + 1);
  };

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    // threshold 0: any visible part counts. The tab row is what moves, and it is on screen at load.
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onVis = () => setPageHidden(document.visibilityState === "hidden");
    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Keep the active tab in view when the row scrolls sideways (phones). The
  // row only, never the page: scrollTo on the container leaves the window alone.
  useEffect(() => {
    const list = listRef.current;
    const tab = document.getElementById(`hero-tab-${TABS[active].id}`);
    if (!list || !tab || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({ left: tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2, behavior: "smooth" });
  }, [active]);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (i + (e.key === "ArrowRight" ? 1 : -1) + TABS.length) % TABS.length;
    select(next);
    document.getElementById(`hero-tab-${TABS[next].id}`)?.focus();
  };

  // A mouse click leaves focus on the button; only keyboard focus should pause.
  const onFocus = (e: FocusEvent<HTMLElement>) => setKbFocus(e.target.matches(":focus-visible"));

  return (
    <div ref={rootRef} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div
        ref={listRef}
        role="tablist"
        aria-label="Product areas"
        onFocus={onFocus}
        onBlur={() => setKbFocus(false)}
        className="relative -mx-5 flex gap-1.5 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:justify-center sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {TABS.map((t, i) => {
          const on = i === active;
          return (
            <button
              key={t.id}
              id={`hero-tab-${t.id}`}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls={`hero-panel-${t.id}`}
              tabIndex={on ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={(e) => onKey(e, i)}
              className={`relative inline-flex h-11 shrink-0 items-center gap-2 overflow-hidden rounded-full px-4 text-[14.5px] font-medium transition-colors duration-200 sm:px-5 ${
                on ? "bg-mist text-ink" : "text-body hover:bg-mist-2 hover:text-ink"
              }`}
            >
              <Icon name={t.icon} className="h-[18px] w-[18px]" />
              {t.label}
              {on ? (
                <span aria-hidden className="tab-progress-track pointer-events-none absolute inset-x-5 bottom-1.5 h-[2px] rounded-full bg-accent/15">
                  <span
                    key={`${active}-${cycle}`}
                    className="tab-progress block h-full origin-left rounded-full bg-accent"
                    style={{ animationPlayState: paused ? "paused" : "running" }}
                    onAnimationEnd={() => select((active + 1) % TABS.length)}
                  />
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="relative mt-5 aspect-[16/10.4] overflow-hidden rounded-[22px] sm:rounded-[32px]">
        {TABS.map((t, i) => {
          const on = i === active;
          return (
            <div
              key={t.id}
              id={`hero-panel-${t.id}`}
              role="tabpanel"
              aria-labelledby={`hero-tab-${t.id}`}
              aria-hidden={!on}
              className={`g-panel ${TONE_CLASS[t.tone]} absolute inset-0 transition-opacity duration-500 ${on ? "opacity-100" : "pointer-events-none opacity-0"}`}
            >
              <div className="absolute left-[5.5%] right-[5.5%] top-[8%] overflow-hidden rounded-t-[10px] bg-white shadow-[0_30px_80px_-24px_rgba(40,20,90,0.4)] ring-1 ring-black/5 sm:rounded-t-[16px]">
                <Image
                  src={t.src}
                  alt={t.alt}
                  width={2880}
                  height={1800}
                  priority={i === 0}
                  sizes="(max-width: 1200px) 90vw, 1070px"
                  className="block h-auto w-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
