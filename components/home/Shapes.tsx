import { useId } from "react";

/* Decorative gradient shapes for the home page. Original, abstract and
   faceless: a speech bubble, a lightning tile, an arch and a diamond, in the
   same blue and neutral family as the screenshot panels. All are aria-hidden. */

type ShapeProps = { className?: string; style?: React.CSSProperties };

/* Gradient ids must be unique per instance: a url(#id) that resolves to a
   gradient inside a display:none ancestor renders as no fill. */
function useGradId(name: string) {
  return `${name}-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
}

/** Speech bubble in blue. The messaging motif. */
export function BubbleShape({ className = "", style }: ShapeProps) {
  const id = useGradId("sh-bubble");
  return (
    <svg viewBox="0 0 120 120" className={className} style={style} aria-hidden>
      <defs>
        <linearGradient id={id} x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#7db8ff" />
          <stop offset="55%" stopColor="#4a6dff" />
          <stop offset="100%" stopColor="#1a36e6" />
        </linearGradient>
        <radialGradient id={`${id}-hl`} cx="30%" cy="22%" r="55%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path d="M60 8c28.7 0 52 20.1 52 45s-23.3 45-52 45c-5.2 0-10.2-.7-14.9-1.9L22 108l5.6-19.3C16.6 79.7 8 67.5 8 53 8 28.1 31.3 8 60 8Z" fill={`url(#${id})`} />
      <path d="M60 8c28.7 0 52 20.1 52 45s-23.3 45-52 45c-5.2 0-10.2-.7-14.9-1.9L22 108l5.6-19.3C16.6 79.7 8 67.5 8 53 8 28.1 31.3 8 60 8Z" fill={`url(#${id}-hl)`} />
    </svg>
  );
}

/** Rounded blue tile with a bolt. The "speed" motif. */
export function BoltShape({ className = "", style }: ShapeProps) {
  const id = useGradId("sh-bolt");
  return (
    <svg viewBox="0 0 120 120" className={className} style={style} aria-hidden>
      <defs>
        <linearGradient id={id} x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#9fd0ff" />
          <stop offset="100%" stopColor="#3f66ff" />
        </linearGradient>
        <radialGradient id={`${id}-hl`} cx="28%" cy="20%" r="60%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="10" y="10" width="100" height="100" rx="34" fill={`url(#${id})`} />
      <rect x="10" y="10" width="100" height="100" rx="34" fill={`url(#${id}-hl)`} />
      <path d="M66 28 40 66h18l-4 26 26-38H62l4-26Z" fill="#ffffff" fillOpacity="0.95" />
    </svg>
  );
}

/** Periwinkle to sky arch. */
export function ArchShape({ className = "", style }: ShapeProps) {
  const id = useGradId("sh-arch");
  return (
    <svg viewBox="0 0 140 90" className={className} style={style} aria-hidden>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#aebcff" />
          <stop offset="100%" stopColor="#9fd0ff" />
        </linearGradient>
        <radialGradient id={`${id}-hl`} cx="25%" cy="20%" r="60%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path d="M10 88C10 44 36 8 70 8s60 36 60 80H94c0-22-10-40-24-40S46 66 46 88H10Z" fill={`url(#${id})`} />
      <path d="M10 88C10 44 36 8 70 8s60 36 60 80H94c0-22-10-40-24-40S46 66 46 88H10Z" fill={`url(#${id}-hl)`} />
    </svg>
  );
}

/** Soft blue diamond. */
export function DiamondShape({ className = "", style }: ShapeProps) {
  const id = useGradId("sh-diamond");
  return (
    <svg viewBox="0 0 80 80" className={className} style={style} aria-hidden>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a9bdff" />
          <stop offset="100%" stopColor="#4a6dff" />
        </linearGradient>
      </defs>
      <rect x="14" y="14" width="52" height="52" rx="12" transform="rotate(45 40 40)" fill={`url(#${id})`} />
    </svg>
  );
}

/** Small blurred dot used as filler. */
export function Dot({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`block rounded-full blur-[2px] ${className}`} />;
}
