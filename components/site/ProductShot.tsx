import fs from "node:fs";
import path from "node:path";

import { PanelFrame, ShotPanel, type Tone } from "@/components/home/ShotPanel";

import { Icon } from "./icons";

/**
 * A product screenshot in a pastel gradient panel. Screenshots live in
 * public/product and are checked at build time: while one is missing, a neutral
 * UI skeleton with the label renders in its place, so pages never ship a broken
 * image.
 */
export interface Shot {
  /** Path under /public, e.g. "/product/inbox.png". */
  src: string;
  alt: string;
  /** Short caption used by the placeholder. */
  label?: string;
}

function exists(src: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src));
  } catch {
    return false;
  }
}

export function ProductShot({
  shot,
  tone = "periwinkle",
  side = "right",
  priority = false,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 1100px",
}: {
  shot: Shot;
  tone?: Tone;
  side?: "right" | "left";
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  if (exists(shot.src)) {
    return <ShotPanel shot={shot} tone={tone} side={side} cover priority={priority} sizes={sizes} className={className} />;
  }
  return (
    <PanelFrame tone={tone} side={side} className={className}>
      <Placeholder label={shot.label ?? shot.alt} />
    </PanelFrame>
  );
}

/* A quiet three-pane UI skeleton that stands in for a missing screenshot. */
function Placeholder({ label }: { label: string }) {
  return (
    <div className="relative aspect-[16/10] w-full bg-white" role="img" aria-label={label}>
      <div className="absolute inset-0 grid grid-cols-[44px_1fr] sm:grid-cols-[150px_230px_1fr]">
        <div className="border-r border-line bg-surface p-3">
          <div className="mb-4 h-6 w-6 rounded-md bg-accent-soft-2" />
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className={`mb-2.5 h-2.5 rounded-full ${i === 1 ? "bg-accent-soft-2" : "bg-line"} w-[70%]`} />
          ))}
        </div>
        <div className="hidden border-r border-line p-3 sm:block">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={`mb-2 rounded-md border p-2.5 ${i === 0 ? "border-accent-soft-2 bg-accent-soft" : "border-line"}`}>
              <div className="mb-2 h-2.5 w-1/2 rounded-full bg-line-strong" />
              <div className="h-2 w-5/6 rounded-full bg-line" />
            </div>
          ))}
        </div>
        <div className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="h-3 w-40 rounded-full bg-line-strong" />
            <div className="h-6 w-20 rounded-full bg-accent" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-md border border-line p-3">
                <div className="mb-3 h-2 w-1/2 rounded-full bg-line" />
                <div className="h-4 w-2/3 rounded-full bg-line-strong" />
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-8 rounded-md border border-line" />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-3 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/90 px-3 py-1 text-[12px] font-medium text-muted backdrop-blur">
          <Icon name="layers" className="h-3.5 w-3.5" />
          {label}
        </span>
      </div>
    </div>
  );
}
