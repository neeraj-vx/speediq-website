import type { ReactNode } from "react";

import { Icon } from "./icons";
import { CircleLink, SoftLink } from "./pills";

/* Layout and typography primitives shared by every page. Keep these dumb:
   spacing, type scale and the accent are decided here once. Light display
   type, white page, cool grey cards, one blue accent. */

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-site px-5 sm:px-8 ${className}`}>{children}</div>;
}

/**
 * A page section. `white` sits straight on the page; `surface` and `ink` wrap
 * their content in a large rounded card instead of a full-bleed band, so the
 * page keeps its inset, card-on-white look.
 */
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
  const pad = size === "sm" ? "py-8 sm:py-12" : size === "lg" ? "py-16 sm:py-24" : "py-12 sm:py-16";
  if (tone === "white") {
    return (
      <section id={id} className={`${pad} ${className}`}>
        <Container>{children}</Container>
      </section>
    );
  }
  const card = tone === "ink" ? "bg-ink text-white" : "bg-mist";
  return (
    <section id={id} className={`${pad} ${className}`}>
      <Container>
        <div className={`rounded-[28px] px-5 py-10 sm:rounded-[34px] sm:px-10 sm:py-14 ${card}`}>{children}</div>
      </Container>
    </section>
  );
}

/** A quiet blue label above a heading. Sentence case, no tracking. */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-[14.5px] font-medium text-accent ${className}`}>{children}</p>;
}

/** Heading. `accent` renders the trailing words in brand blue. */
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
    sm: "text-[28px] sm:text-[36px] leading-[1.1] tracking-[-0.025em]",
    md: "text-[34px] sm:text-[46px] lg:text-[52px] leading-[1.08] tracking-[-0.03em]",
    lg: "text-[40px] sm:text-[56px] lg:text-[68px] leading-[1.03] tracking-[-0.035em]",
    xl: "text-[44px] sm:text-[68px] lg:text-[84px] leading-[1.02] tracking-[-0.04em]",
  } as const;
  return (
    <Tag className={`text-balance font-display font-light text-ink ${sizes[size]} ${className}`}>
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
      {eyebrow ? <Eyebrow className="mb-3">{eyebrow}</Eyebrow> : null}
      <Heading size={size} accent={accent}>
        {title}
      </Heading>
      {lede ? <Lede className={`mt-5 ${center ? "mx-auto" : ""}`}>{lede}</Lede> : null}
    </div>
  );
}

/**
 * The site's button. `primary` is the blue circle-and-chevron link and
 * `secondary` the soft grey pill, the same two shapes the nav and home page use.
 * `arrow` is accepted for older call sites; the primary shape always has one.
 */
export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  className?: string;
}) {
  if (variant === "primary") {
    return (
      <CircleLink href={href} size={size} className={className}>
        {children}
      </CircleLink>
    );
  }
  if (variant === "secondary") {
    return (
      <SoftLink href={href} size={size} className={className}>
        {children}
      </SoftLink>
    );
  }
  const dims = size === "lg" ? "h-12 px-6 text-[16px]" : size === "sm" ? "h-9 px-4 text-[14.5px]" : "h-11 px-5 text-[15.5px]";
  const tone = variant === "inverse" ? "bg-white text-ink hover:bg-mist" : "text-ink hover:bg-mist-2";
  return (
    <a href={href} className={`inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 ${dims} ${tone} ${className}`}>
      {children}
    </a>
  );
}

export function Pill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full bg-mist-2 px-3 py-1 text-[13px] font-medium text-body ${className}`}>
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
