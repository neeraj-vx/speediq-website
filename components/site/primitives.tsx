import type { ReactNode } from "react";

import { Icon } from "./icons";

/* Layout and typography primitives shared by every page. Keep these dumb:
   spacing, type scale and the accent are decided here once. */

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-site px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({
  children,
  id,
  tone = "white",
  className = "",
  size = "md",
}: {
  children: ReactNode;
  id?: string;
  tone?: "white" | "surface" | "ink";
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const pad = size === "sm" ? "py-12 sm:py-16" : size === "lg" ? "py-20 sm:py-28" : "py-16 sm:py-24";
  const bg = tone === "surface" ? "bg-surface" : tone === "ink" ? "bg-ink text-white" : "bg-white";
  return (
    <section id={id} className={`${bg} ${pad} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-[12px] font-semibold uppercase tracking-[0.14em] text-accent ${className}`}>{children}</p>
  );
}

/** Section heading. `accent` renders the trailing words in brand blue. */
export function Heading({
  children,
  accent,
  as: Tag = "h2",
  size = "md",
  className = "",
}: {
  children: ReactNode;
  accent?: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const sizes = {
    sm: "text-[24px] sm:text-[28px] leading-[1.15]",
    md: "text-[32px] sm:text-[40px] leading-[1.08]",
    lg: "text-[38px] sm:text-[52px] leading-[1.04]",
    xl: "text-[40px] sm:text-[60px] lg:text-[72px] leading-[1.0] tracking-[-0.035em]",
  } as const;
  return (
    <Tag className={`text-balance font-display font-medium ${sizes[size]} ${className}`}>
      {children}
      {accent ? (
        <>
          {" "}
          <span className="text-accent">{accent}</span>
        </>
      ) : null}
    </Tag>
  );
}

export function Lede({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-pretty text-[17px] leading-[1.6] text-body sm:text-[19px] ${className}`}>{children}</p>;
}

/** Eyebrow + heading + lede in one block, the standard section opener. */
export function SectionHeader({
  eyebrow,
  title,
  accent,
  lede,
  align = "left",
  size = "md",
  className = "",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  accent?: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      {eyebrow ? <Eyebrow className="mb-4">{eyebrow}</Eyebrow> : null}
      <Heading size={size} accent={accent}>
        {title}
      </Heading>
      {lede ? <Lede className={`mt-5 ${center ? "mx-auto" : ""}`}>{lede}</Lede> : null}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  className?: string;
}) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-[background-color,color,border-color,transform] duration-200 active:scale-[0.98]";
  const sizes = { sm: "h-9 px-4 text-[14px]", md: "h-11 px-5 text-[15px]", lg: "h-12 px-6 text-[16px]" } as const;
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-ink",
    secondary: "border border-line-strong bg-white text-ink hover:border-ink",
    ghost: "text-ink hover:bg-surface",
    inverse: "bg-white text-ink hover:bg-surface-2",
  } as const;
  return (
    <a href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
      {arrow ? <Icon name="arrow" className="h-4 w-4" strokeWidth={2} /> : null}
    </a>
  );
}

export function Pill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-[13px] font-medium text-body ${className}`}>
      {children}
    </span>
  );
}

/** A check-marked bullet list used in heroes and split sections. */
export function Checklist({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[15px] leading-6 text-body">
          <span className="mt-1 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
            <Icon name="check" className="h-3 w-3" strokeWidth={2.4} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
