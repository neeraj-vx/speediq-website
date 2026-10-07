/* Homepage channel + lead-source band - brand logos and simple glyphs for the
   messaging, social, ad, and website sources SpeedIQ connects, shown as clean
   app-icon tiles. */

import {
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
  WhatsAppIcon,
  EmailIcon,
  SmsIcon,
} from "@/components/landing/brand-icons";

type Glyph = (props: { className?: string }) => React.ReactNode;

type Tile = {
  name: string;
  /** Tile background color class. */
  tile: string;
  /** Icon color class (unset for marks that carry their own color). */
  ink?: string;
  Icon: Glyph;
};

const TILES: Tile[] = [
  { name: "WhatsApp", tile: "bg-white shadow-[0_2px_10px_-3px_rgba(16,24,40,0.15)]", Icon: WhatsAppIcon },
  { name: "Instagram", tile: "bg-[#E1306C]", ink: "text-white", Icon: InstagramIcon },
  { name: "Facebook", tile: "bg-[#1877F2]", ink: "text-white", Icon: FacebookIcon },
  { name: "Google Ads", tile: "bg-white shadow-[0_2px_10px_-3px_rgba(16,24,40,0.15)]", Icon: GoogleIcon },
  { name: "Website chat", tile: "bg-[#0526D9]", ink: "text-white", Icon: ChatGlyph },
  { name: "Forms", tile: "bg-[#111318]", ink: "text-white", Icon: FormGlyph },
  { name: "Email", tile: "bg-[#4a7bc9]", ink: "text-white", Icon: EmailIcon },
  { name: "SMS", tile: "bg-[#e5b32f]", ink: "text-white", Icon: SmsIcon },
  { name: "Voice", tile: "bg-[#d97706]", ink: "text-white", Icon: VoiceGlyph },
];

export default function ChannelsBand() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6">
      <div className="reveal max-w-2xl">
        <h2 className="font-display text-[38px] leading-[1.02] tracking-[-0.025em] text-[#0d1220] sm:text-[52px]">
          Meet customers where they are, answer from{" "}
          <span className="text-[#0526D9]">one place.</span>
        </h2>
        <p className="mt-5 text-[16px] leading-[1.65] text-[#565d6b]">
          Connect the channels and lead sources you already use. Messages,
          comments, and lead forms land in the same inbox and CRM, with AI ready
          to assist.
        </p>
      </div>

      <div className="reveal mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        {TILES.map(({ name, tile, ink, Icon }) => (
          <div
            key={name}
            className="flex items-center gap-3.5 rounded-[20px] bg-[#F5F6FB] p-4 transition-colors hover:bg-[#eef1f6]"
          >
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] ${tile} ${ink ?? ""}`}
            >
              <Icon className="h-[22px] w-[22px]" />
            </span>
            <span className="text-[14px] font-medium text-[#11161f]">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function VoiceGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l1.9-1.9c.24-.24.58-.31.88-.2 1 .33 2.06.5 3.12.5.55 0 1 .45 1 1V19c0 .55-.45 1-1 1C10.5 20 4 13.5 4 5c0-.55.45-1 1-1h2.2c.55 0 1 .45 1 1 0 1.06.17 2.12.5 3.12.11.3.04.64-.2.88L6.6 10.8Z" />
    </svg>
  );
}

function ChatGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 3c-5.1 0-9 3.47-9 7.75 0 2.3 1.13 4.36 2.93 5.78L5.2 20.2a.6.6 0 0 0 .84.66l4.13-1.95c.6.1 1.2.14 1.83.14 5.1 0 9-3.47 9-7.75S17.1 3 12 3Zm-4 8.9a1.15 1.15 0 1 1 0-2.3 1.15 1.15 0 0 1 0 2.3Zm4 0a1.15 1.15 0 1 1 0-2.3 1.15 1.15 0 0 1 0 2.3Zm4 0a1.15 1.15 0 1 1 0-2.3 1.15 1.15 0 0 1 0 2.3Z" />
    </svg>
  );
}

function FormGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6.5 3h11A2.5 2.5 0 0 1 20 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5v-13A2.5 2.5 0 0 1 6.5 3Zm1.5 4a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8Zm0 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Zm0 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H8Z" />
    </svg>
  );
}
