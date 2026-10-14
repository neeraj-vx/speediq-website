import type { ReactNode } from "react";

/* The two button shapes used by the site chrome and the home page: a blue
   circle with a chevron followed by a label, and a soft grey pill. */

const Chevron = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path d="M9.5 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Blue circle + chevron, then the label. The default call to action. */
export function CircleLink({
  href,
  children,
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const dot = size === "lg" ? "h-10 w-10" : size === "sm" ? "h-7 w-7" : "h-8 w-8";
  const text = size === "lg" ? "text-[17px]" : size === "sm" ? "text-[14.5px]" : "text-[15.5px]";
  return (
    <a href={href} className={`group inline-flex items-center gap-3 font-medium text-ink ${text} ${className}`}>
      <span className={`flex shrink-0 items-center justify-center rounded-full bg-accent text-white transition-[transform,background-color] duration-300 group-hover:translate-x-0.5 group-hover:bg-accent-ink ${dot}`}>
        <Chevron className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} />
      </span>
      {children}
    </a>
  );
}

/** Soft grey pill for the secondary action. */
export function SoftLink({
  href,
  children,
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const dims = size === "lg" ? "h-12 px-6 text-[16px]" : size === "sm" ? "h-9 px-4 text-[14.5px]" : "h-11 px-5 text-[15.5px]";
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-mist font-medium text-ink transition-colors duration-200 hover:bg-[#e3e7f1] ${dims} ${className}`}
    >
      {children}
    </a>
  );
}
