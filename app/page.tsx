import Image from "next/image";
import AnalyticsSections from "@/components/landing/AnalyticsSections";
import ChannelsBand from "@/components/landing/ChannelsBand";
import GrowthSections from "@/components/landing/GrowthSections";
import CaseStudySections from "@/components/landing/CaseStudySections";
import BottomSections from "@/components/landing/BottomSections";
import Footer from "@/components/landing/Footer";
import Navbar, { ArrowIcon } from "@/components/landing/Navbar";
import { SIGN_UP_URL } from "@/lib/landing/links";
import {
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
  EmailIcon,
  SmsIcon,
} from "@/components/landing/brand-icons";

export default function Home() {
  return (
    <main>
      <section className="relative w-full overflow-hidden">
        <div className="relative mx-auto w-full max-w-7xl px-6">
          <Navbar variant="light" />

          {/* Hero */}
          <div className="relative z-10 pt-10 text-left sm:pt-16 lg:pt-24">
            {/* Row 1: headline + subtitle */}
            <div className="grid gap-8 lg:grid-cols-[1.55fr_1fr] lg:items-start lg:gap-12">
              <h1
                className="reveal font-display text-[40px] leading-[1.02] tracking-[-0.035em] text-[#0d1220] min-[400px]:text-[44px] sm:text-[64px] lg:text-[78px]"
                style={{ transitionDelay: "0.04s", fontWeight: 300 }}
              >
                Turn every chat into
                <br />
                a{" "}
                <span className="relative whitespace-nowrap text-[#0526D9]">
                  happy customer
                  <svg
                    className="absolute -bottom-1 left-0 h-[0.28em] w-full text-[#0526D9]/35"
                    viewBox="0 0 300 12"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path
                      d="M2 8.5C60 3.5 140 2.5 298 6.5"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p
                className="reveal text-[20px] leading-[1.55] text-[#565d6b] lg:pt-3 lg:text-[23px]"
                style={{ transitionDelay: "0.14s" }}
              >
                WhatsApp, Instagram, Facebook, email, SMS and voice, all in one
                inbox, with CRM, booking and AI-assisted follow-up.
              </p>
            </div>

            {/* Row 2: buttons (left) + channel icons (far right) */}
            <div
              className="reveal mt-8 flex flex-col gap-7 sm:mt-12 sm:flex-row sm:items-center sm:justify-between lg:mt-14"
              style={{ transitionDelay: "0.22s" }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={SIGN_UP_URL}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#0526D9] py-3.5 pl-7 pr-3.5 text-[15px] font-medium text-white transition-transform hover:scale-[1.03]"
                >
                  Get started free
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0526D9] transition-transform group-hover:rotate-45">
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </span>
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 rounded-full bg-[#eef1f6] px-6 py-3.5 text-[15px] font-medium text-[#11161f] transition-colors hover:bg-[#e4e8f0]"
                >
                  See how it works
                </a>
              </div>

              {/* Minimal channel icons */}
              <div className="flex items-center gap-4 text-[#9aa0ab]">
                <WhatsAppIcon className="h-[19px] w-[19px] opacity-90 transition-opacity hover:opacity-100" />
                <InstagramIcon className="h-[19px] w-[19px] transition-colors hover:text-[#11161f]" />
                <FacebookIcon className="h-[19px] w-[19px] transition-colors hover:text-[#11161f]" />
                <EmailIcon className="h-[19px] w-[19px] transition-colors hover:text-[#11161f]" />
                <SmsIcon className="h-[19px] w-[19px] transition-colors hover:text-[#11161f]" />
              </div>
            </div>
          </div>

          {/* Card row - clear gap below the CTAs */}
          <div className="reveal relative z-20 mt-8 pb-16 sm:mt-10 sm:pb-24 lg:mt-12 lg:pb-32">
            <div className="grid grid-cols-2 items-stretch gap-4 sm:gap-5 lg:grid-cols-4">
              {/* A - accent statement card (tall) */}
              <div className="relative flex min-h-[200px] flex-col justify-between gap-4 overflow-hidden rounded-[28px] bg-[#0526D9] p-5 text-white sm:min-h-[240px] sm:p-6 lg:min-h-[380px]">
                <span className="inline-flex w-fit items-center gap-1.5 whitespace-nowrap rounded-full bg-white/15 px-2.5 py-1.5 text-[11px] font-medium text-white backdrop-blur-sm sm:px-3 sm:text-[12px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7CFFB0]" />
                  One shared inbox
                </span>
                <p className="text-[17px] font-light leading-snug sm:text-[21px] lg:text-[24px]">
                  Every message and every channel, handled in one calm place.
                </p>
              </div>

              {/* Stacked stats (bento column) */}
              <div className="flex flex-col gap-4 sm:gap-5">
                {/* B - shared context */}
                <div className="flex min-h-[128px] flex-1 flex-col justify-between rounded-[28px] sm:min-h-[150px] bg-[#e4e7ee] p-5">
                  <span className="flex h-9 w-9 items-center justify-center self-start rounded-full bg-white text-[#5b6270]">
                    <TrendIcon className="h-[17px] w-[17px]" />
                  </span>
                  <div>
                    <div className="font-display text-[38px] font-semibold leading-none text-[#11161f]">
                      CRM + inbox
                    </div>
                    <p className="mt-1.5 text-[13px] leading-snug text-[#7a808b]">
                      shared context for every conversation
                    </p>
                  </div>
                </div>

                {/* D - current status */}
                <div className="flex min-h-[128px] flex-1 flex-col justify-between rounded-[28px] sm:min-h-[150px] bg-[#d7e1ff] p-5">
                  <span className="flex h-9 w-9 items-center justify-center self-start rounded-full bg-white text-[#0526D9]">
                    <CheckBadgeIcon className="h-[17px] w-[17px]" />
                  </span>
                  <div>
                    <div className="font-display text-[36px] font-semibold leading-none text-[#0526D9]">
                      Current
                    </div>
                    <p className="mt-1.5 text-[13px] leading-snug text-[#5b6270]">
                      delivery, replies and credit usage
                    </p>
                  </div>
                </div>
              </div>

              {/* C - photo (medium) with review overlay */}
              <div className="relative min-h-[240px] overflow-hidden rounded-[28px] bg-[#e8eaf0] lg:min-h-[380px]">
                <Image
                  src="/landing/hero-scenic-old.jpg"
                  alt="Calm, effortless customer conversations"
                  fill
                  sizes="(max-width: 1024px) 45vw, 20vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white p-3.5 shadow-[0_8px_24px_-12px_rgba(16,24,40,0.4)]">
                  <div className="flex items-center gap-0.5 text-[#f5a623]">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <StarIcon key={i} className="h-3.5 w-3.5" />
                    ))}
                  </div>
                    <p className="mt-2 text-[13px] font-semibold leading-snug text-[#11161f]">
                    Cross-channel context, in one profile.
                  </p>
                  <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-[#8a8f9b]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0526D9]" />
                    Unified contact history
                  </div>
                </div>
              </div>

              {/* E - photo (tall) with merged UI chips */}
              <div className="relative min-h-[240px] overflow-hidden rounded-[28px] bg-[#e8eaf0] lg:min-h-[380px]">
                <Image
                  src="/landing/hero-phone.jpg"
                  alt="A business owner staying on top of every customer message with SpeedIQ"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 20vw"
                  className="object-cover object-[62%_center]"
                />
                <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-[#0526D9] shadow-[0_8px_24px_-12px_rgba(16,24,40,0.5)] backdrop-blur-sm">
                  AI draft ready
                </span>
                <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 rounded-2xl bg-white p-2 pr-3 shadow-[0_8px_24px_-12px_rgba(16,24,40,0.4)]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#eafaf0]">
                    <WhatsAppIcon className="h-4 w-4" />
                  </span>
                  <span className="text-[11.5px] font-medium text-[#11161f]">
                    New message · shared inbox
                  </span>
                  <DoubleCheckIcon className="ml-auto h-4 w-4 text-[#217b4c]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-20 pb-24 md:space-y-28 md:pb-28 lg:space-y-32 lg:pb-36">
        <ChannelsBand />
        <AnalyticsSections />
        <GrowthSections />
        <CaseStudySections />
        <BottomSections />
      </div>
      <Footer />
    </main>
  );
}

/* ---------- Hero helpers ---------- */

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.4l-5.81 3.05 1.11-6.47L2.6 9.35l6.5-.95L12 2.5Z" />
    </svg>
  );
}

function TrendIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 15l5-5 4 4 7-8M16 6h4v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckBadgeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2.5l2.3 1.7 2.8-.2 1 2.6 2.3 1.6-.7 2.8.7 2.8-2.3 1.6-1 2.6-2.8-.2L12 21.5l-2.3-1.7-2.8.2-1-2.6-2.3-1.6.7-2.8-.7-2.8 2.3-1.6 1-2.6 2.8.2L12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.8 12l2.2 2.2 4.2-4.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DoubleCheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M2 12.5l3.5 3.5L14 7M11 15l1 1 8.5-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
