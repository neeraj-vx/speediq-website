import type { ReactNode } from "react";

import Image from "next/image";

/* A pastel gradient panel with a screenshot "window" sitting in it. The window
   is offset from the panel's top edge and bleeds off the bottom (and, in corner
   mode, off the side), so the panel reads as a view onto a bigger app.

   PanelFrame draws the panel and window around any children. ShotPanel puts an
   image in it; with `cover` the screenshot fills the window whatever its shape,
   otherwise `zoom` and `start` choose which part of the screenshot shows:
   zoom is the screenshot's width as a multiple of the window, start is the
   point (0..1 of the screenshot's own size) that sits at the window's
   top-left. */

export type Tone = "periwinkle" | "sky" | "indigo" | "slate" | "blue";

export const TONE_CLASS: Record<Tone, string> = {
  periwinkle: "g-periwinkle",
  sky: "g-sky",
  indigo: "g-indigo",
  slate: "g-slate",
  blue: "g-blue",
};

/** A repeatable order for pages that show several panels in a row. */
export const TONE_CYCLE: Tone[] = ["periwinkle", "sky", "indigo", "slate", "blue"];

export interface PanelShot {
  src: string;
  alt: string;
}

export function PanelFrame({
  tone,
  mode = "corner",
  side = "right",
  className = "",
  children,
}: {
  tone: Tone;
  /** corner: window offset from one side, bleeds off the other. top: centred, bleeds bottom. */
  mode?: "corner" | "top";
  /** For corner mode: which side of the card the panel sits on. The window bleeds toward it. */
  side?: "right" | "left";
  className?: string;
  children: ReactNode;
}) {
  const windowClass =
    mode === "top"
      ? "left-[5%] right-[5%] top-[9%] rounded-t-[12px]"
      : side === "right"
        ? "left-[9%] right-0 top-[11%] rounded-tl-[16px]"
        : "left-0 right-[9%] top-[11%] rounded-tr-[16px]";
  return (
    <div className={`g-panel ${TONE_CLASS[tone]} relative overflow-hidden ${className}`}>
      <div className={`absolute bottom-0 overflow-hidden bg-white shadow-[0_24px_60px_-20px_rgba(20,30,110,0.4)] ring-1 ring-black/5 ${windowClass}`}>
        {children}
      </div>
    </div>
  );
}

export function ShotPanel({
  shot,
  tone,
  mode = "corner",
  side = "right",
  priority = false,
  sizes,
  zoom = 1.4,
  start = { x: 0, y: 0 },
  cover = false,
  className = "",
}: {
  shot: PanelShot;
  tone: Tone;
  mode?: "corner" | "top";
  side?: "right" | "left";
  priority?: boolean;
  sizes?: string;
  zoom?: number;
  start?: { x: number; y: number };
  /** Fill the whole window whatever its shape, anchored top-left, instead of using `zoom`/`start`. */
  cover?: boolean;
  className?: string;
}) {
  // The screenshot is drawn `zoom` times wider than its window, so ask next/image
  // for a source that wide; otherwise a small variant is scaled up and looks soft.
  const imageSizes = sizes ?? `(max-width: 1024px) ${Math.round(zoom * 92)}vw, ${Math.round(zoom * 48)}vw`;
  if (cover) {
    return (
      <PanelFrame tone={tone} mode={mode} side={side} className={className}>
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          priority={priority}
          sizes={sizes ?? "(max-width: 1024px) 100vw, 1100px"}
          className="object-cover object-left-top"
        />
      </PanelFrame>
    );
  }
  return (
    <PanelFrame tone={tone} mode={mode} side={side} className={className}>
      <Image
        src={shot.src}
        alt={shot.alt}
        width={2880}
        height={1800}
        priority={priority}
        sizes={imageSizes}
        className="absolute left-0 top-0 h-auto max-w-none"
        style={{ width: `${zoom * 100}%`, transform: `translate(${-start.x * 100}%, ${-start.y * 100}%)` }}
      />
    </PanelFrame>
  );
}
