import type { SVGProps } from "react";

/* A small, consistent 24px stroke icon set for the marketing site. Brand
   marks (WhatsApp, Instagram, Facebook) live in components/landing/brand-icons. */

export type IconName =
  | "inbox" | "chat" | "mail" | "sms" | "phone" | "globe" | "form" | "calendar" | "map" | "bolt"
  | "branch" | "sparkle" | "users" | "shield" | "chart" | "pipeline" | "tag" | "clock" | "check"
  | "arrow" | "arrow-up-right" | "plus" | "webhook" | "upload" | "bell" | "lock" | "layers"
  | "language" | "eye-off" | "file" | "search" | "star" | "target" | "route" | "headset" | "book"
  | "credit" | "history" | "note" | "merge" | "megaphone" | "ads" | "wallet" | "settings";

const PATHS: Record<IconName, string> = {
  inbox: "M4 13h4l1.5 2.5h5L16 13h4M4 13l2.4-7h11.2L20 13v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5Z",
  chat: "M5 5.5h14a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1H9l-4 3.5V6.5a1 1 0 0 1 1-1Z",
  mail: "M4 6.5h16v11H4v-11ZM4.5 7.5l7.5 5 7.5-5",
  sms: "M6 5h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-6l-4 3v-3H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2ZM8 10.5h.01M12 10.5h.01M16 10.5h.01",
  phone: "M7 3.8a1.4 1.4 0 0 1 1.4.85l1.1 2.6a1.4 1.4 0 0 1-.32 1.6l-.95.9a10.5 10.5 0 0 0 4.2 4.2l.9-.95a1.4 1.4 0 0 1 1.6-.32l2.6 1.1a1.4 1.4 0 0 1 .85 1.4v2.1a1.6 1.6 0 0 1-1.75 1.6C9.8 20.3 3.7 14.2 3.4 6.15A1.6 1.6 0 0 1 5 4.4h2Z",
  globe: "M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM3.5 12h17M12 3.5c2.5 2.6 3.8 5.4 3.8 8.5s-1.3 5.9-3.8 8.5c-2.5-2.6-3.8-5.4-3.8-8.5s1.3-5.9 3.8-8.5Z",
  form: "M6 4h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1ZM8.5 9h7M8.5 12.5h7M8.5 16h4",
  calendar: "M5 6.5h14a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.5a1 1 0 0 1 1-1ZM4 10.5h16M8 4v4M16 4v4",
  map: "M12 20.5s-6-5.3-6-10.5a6 6 0 0 1 12 0c0 5.2-6 10.5-6 10.5ZM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  bolt: "M13 2.5 5.5 13H11l-1 8.5L18.5 11H13l1-8.5Z",
  branch: "M7 4v6M7 10a3 3 0 0 0 3 3h4a3 3 0 0 1 3 3v1M7 10v10M17 4v3M7 4a1.5 1.5 0 1 0 0-.01M17 4a1.5 1.5 0 1 0 0-.01M17 20a1.5 1.5 0 1 0 0-.01M7 20a1.5 1.5 0 1 0 0-.01",
  sparkle: "M12 3.5c.6 3.4 1.9 4.7 5.3 5.3-3.4.6-4.7 1.9-5.3 5.3-.6-3.4-1.9-4.7-5.3-5.3 3.4-.6 4.7-1.9 5.3-5.3ZM18.5 14.5c.3 1.6.9 2.2 2.5 2.5-1.6.3-2.2.9-2.5 2.5-.3-1.6-.9-2.2-2.5-2.5 1.6-.3 2.2-.9 2.5-2.5Z",
  users: "M4 19c0-2.8 2.2-5 5-5s5 2.2 5 5M9 11.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM15 6.5a3 3 0 0 1 0 5.5M20 19c0-2.2-1.3-4-3.5-4.6",
  shield: "M12 3.5 5 6v6c0 4.3 3 7.6 7 8.5 4-.9 7-4.2 7-8.5V6l-7-2.5ZM9 12l2 2 4-4.5",
  chart: "M4 20h16M7 16v-5M12 16V7M17 16v-3",
  pipeline: "M4 6h4v12H4zM10 6h4v8h-4zM16 6h4v5h-4z",
  tag: "M4 4h7l9 9-7 7-9-9V4ZM8 8h.01",
  clock: "M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM12 7.5V12l3 2",
  check: "M5 12.5l4.5 4.5L19 7.5",
  arrow: "M5 12h14M13 6l6 6-6 6",
  "arrow-up-right": "M7 17 17 7M17 7H9M17 7v8",
  plus: "M12 5v14M5 12h14",
  webhook: "M12 4a3 3 0 0 1 3 3c0 1.1-.6 2-1.4 2.6L17 15.5M12 4a3 3 0 0 0-3 3c0 1.1.6 2 1.4 2.6L7 15.5M7 15.5a3 3 0 1 0 5 2.5h0M17 15.5a3 3 0 1 1-5 2.5",
  upload: "M12 16V5M7.5 9.5 12 5l4.5 4.5M5 16v3h14v-3",
  bell: "M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15L6 16ZM10 20a2 2 0 0 0 4 0",
  lock: "M6 11h12v9H6v-9ZM8.5 11V8a3.5 3.5 0 0 1 7 0v3",
  layers: "M12 4l8 4-8 4-8-4 8-4ZM4 12l8 4 8-4M4 16l8 4 8-4",
  language: "M4 6h10M9 4v2M12.5 6c-.8 3.6-3 6.6-6 8.5M7 9c1.2 2.4 3 4.3 5.5 5.5M13 20l4-9 4 9M14.3 17h5.4",
  "eye-off": "M3 3l18 18M10.6 10.7A2.5 2.5 0 0 0 13.4 13.4M9.9 5.2A9.8 9.8 0 0 1 12 5c5.5 0 9.5 7 9.5 7a17 17 0 0 1-3.2 3.9M6.6 6.6C4 8.4 2.5 12 2.5 12s4 7 9.5 7a9.4 9.4 0 0 0 4.5-1.1",
  file: "M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 20V4a.5.5 0 0 1 .5-.5ZM14 3.5v4h4",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM20 20l-4-4",
  star: "M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L12 16.9l-5.3 2.8 1.1-5.9-4.3-4.1 5.9-.8L12 3.5Z",
  target: "M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM12 11.5a.5.5 0 1 0 0 1",
  route: "M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7 17h7a3 3 0 0 0 3-3v-1M17 7h-4a3 3 0 0 0-3 3v1",
  headset: "M4 13v-1a8 8 0 0 1 16 0v1M4 13h3v5H5a1 1 0 0 1-1-1v-4ZM20 13h-3v5h2a1 1 0 0 0 1-1v-4ZM17 18v1a2 2 0 0 1-2 2h-3",
  book: "M4 5.5a1.5 1.5 0 0 1 1.5-1.5H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13ZM20 5.5A1.5 1.5 0 0 0 18.5 4H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13Z",
  credit: "M4 7h16v10H4V7ZM4 10.5h16M7.5 14.5h3",
  history: "M4 12a8 8 0 1 0 2.3-5.6M4 4v4.5h4.5M12 8v4l2.5 1.5",
  note: "M6 4h9l4 4v12H6V4ZM9 11h6M9 14.5h6M9 18h3",
  merge: "M7 4v5a4 4 0 0 0 4 4h2a4 4 0 0 1 4 4v3M17 4v5M7 20v-3M7 4a1.5 1.5 0 1 0 0-.01M17 4a1.5 1.5 0 1 0 0-.01M17 20a1.5 1.5 0 1 0 0-.01M7 20a1.5 1.5 0 1 0 0-.01",
  megaphone: "M4 10v4l9 4V6l-9 4ZM13 7.5l5-2v13l-5-2M6 14v3.5c0 .8.7 1.5 1.5 1.5",
  ads: "M4 6h16v10H4V6ZM4 19h16M8 10h5M8 12.5h8",
  wallet: "M4 7a1 1 0 0 1 1-1h13v3M4 7v11a1 1 0 0 0 1 1h15V9H5a1 1 0 0 1-1-1V7ZM16 13.5h.01",
  settings: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19.4 13.5a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5v.2a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1h-.2a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3h0a1.6 1.6 0 0 0 1-1.5v-.2a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8v0a1.6 1.6 0 0 0 1.5 1h.2a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z",
};

export function Icon({ name, className, strokeWidth = 1.7, ...rest }: { name: IconName; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className} {...rest}>
      <path d={PATHS[name]} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** The SpeedIQ mark. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 409 290" fill="none" className={className} aria-hidden>
      <path
        d="M239.482 0.348289L114.082 0.608379L23.9201 112.704C-8.23713 152.685 -7.9415 209.739 24.6283 249.384C68.4223 302.691 150.222 302.034 193.154 248.03L319.313 89.3327L332.87 89.3046L332.87 101.999L188.503 289.663L312.209 289.406L408.209 165.226L407.58 -1.3369e-05L266.596 0.292406L121.046 183.381C116.816 188.702 108.739 188.719 104.487 183.415C101.392 179.555 101.381 174.068 104.459 170.195L239.482 0.348289Z"
        fill="currentColor"
      />
    </svg>
  );
}
