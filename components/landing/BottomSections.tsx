/* Homepage closing section - "The SpeedIQ Advantage". Photo-forward: a real
   closing statement photo beside the three advantages. */

import Image from "next/image";

export default function BottomSections() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6">
      <div className="reveal max-w-2xl">
        <h2 className="font-display text-[38px] leading-[1.02] tracking-[-0.025em] text-[#0d1220] sm:text-[52px]">
          Confidence in{" "}
          <span className="text-[#0526D9]">every conversation.</span>
        </h2>
        <p className="mt-5 text-[16px] leading-[1.65] text-[#565d6b]">
          SpeedIQ removes the chaos from your customer messaging, so your team
          can focus on what truly matters: real conversations and real growth.
        </p>
      </div>

      <div className="reveal mt-10 grid items-stretch gap-4 lg:grid-cols-2">
        {/* Closing statement photo */}
        <div className="relative min-h-[380px] overflow-hidden rounded-[28px] bg-[#0b1220]">
          <Image
            src="/landing/closing-happy.jpg"
            alt="A happy SpeedIQ customer"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-[62%_28%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/40 to-transparent" />
          <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 text-[12px] font-semibold text-[#11161f] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-sm">
            <StarMini className="h-3.5 w-3.5 text-[#f5a623]" />
            Product capabilities
          </span>
          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
            <h3 className="text-[24px] font-semibold text-white sm:text-[27px]">
              Real conversations, real growth.
            </h3>
            <p className="mt-2.5 max-w-sm text-[14.5px] leading-[1.6] text-white/70">
              When the busywork disappears, your team gets back to what they do
              best: winning customers.
            </p>
          </div>
        </div>

        {/* Three advantages */}
        <div className="flex flex-col gap-4">
          <Advantage
            title="Absolute channel clarity"
            body="Every WhatsApp, Email and SMS conversation lands in one inbox, so you always know exactly where things stand."
            icon={<ChartIcon />}
          />
          <Advantage
            title="Frictionless automation"
            body="Automate repetitive replies and flows in the background, keeping every conversation moving without manual effort."
            icon={<BoltIcon />}
          />
          <Advantage
            title="Proactive peace of mind"
            body="Stay ahead of delivery and credit issues before they become problems, giving you the confidence to scale."
            icon={<ShieldIcon />}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

function Advantage({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 items-start gap-4 rounded-[28px] bg-[#F5F6FB] p-6 sm:p-7">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[15px] bg-[#0526D9] text-white">
        {icon}
      </span>
      <div>
        <h3 className="text-[18px] font-semibold text-[#11161f]">{title}</h3>
        <p className="mt-2 text-[14px] leading-[1.6] text-[#7a808b]">{body}</p>
      </div>
    </div>
  );
}

function StarMini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.4l-5.81 3.05 1.11-6.47L2.6 9.35l6.5-.95L12 2.5Z" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[21px] w-[21px]">
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[21px] w-[21px]">
      <path d="M13 2.5 5.5 13H11l-1 8.5L18.5 11H13l1-8.5Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[21px] w-[21px]">
      <path d="M12 3l7 2.5v5c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5v-5L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
