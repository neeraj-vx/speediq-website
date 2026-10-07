import { pageMeta } from "@/lib/landing/seo";
import Footer from "@/components/landing/Footer";
import {
  MarketingHero,
  FeatureRows,
  FeatureSection,
  StatsBand,
  BarsCard,
  GaugeCard,
  StatusCard,
  FAQ,
  type Feature,
} from "@/components/landing/marketing";

export const metadata = pageMeta(
  "Analytics & Reporting",
  "Review what is working across core channels, delivery, opens, clicks and replies, plus sales and revenue reports, lead-source attribution, and credit usage in your currency.",
  "/features/analytics",
);

const ACCENT = "#4f46e5";

const capabilities: Feature[] = [
  { title: "Cross-channel delivery", body: "Sent, delivered, opened, clicked, and replied, compared side by side across WhatsApp, Email, and SMS in one view.", icon: ChartIcon },
  { title: "Sales & revenue", body: "Track pipeline value, won deals, and revenue over time, with period-over-period comparison so trends are obvious.", icon: RevenueIcon },
  { title: "Lead-source reports", body: "See which sources, forms, ads, social, prospecting, actually produce leads and pipeline, not just clicks.", icon: SourceIcon },
  { title: "Recorded activity", body: "Review the delivery, engagement, CRM, and credit events recorded by the platform instead of stitching together separate reports.", icon: PulseIcon },
  { title: "Credit & cost usage", body: "Watch credit consumption per channel and per campaign, so spend never surprises you at renewal.", icon: CoinIcon },
  { title: "Your currency", body: "Display revenue and spend in your currency, converted at daily rates, INR, USD, AED, and more.", icon: GlobeIcon },
];

export default function AnalyticsPage() {
  return (
    <main>
      <MarketingHero
        active="Features"
        eyebrow="FEATURES · ANALYTICS & REPORTING"
        title="Know what's working,"
        accent="with clarity."
        subtitle="Delivery, opens, clicks and replies across core channels, sales and revenue reports, lead-source attribution, and credit usage in your currency."
        secondaryCta={{ label: "All features", href: "/features" }}
        highlights={["Cross-channel delivery", "Sales & revenue dashboards", "Lead-source attribution"]}
        visual={<ReportCard />}
      />

      <FeatureRows
        label="How it works"
        rows={[
          {
            no: "01",
            eyebrow: "MEASURE",
            title: "Every channel, one scoreboard",
            body: "Delivery, opens, clicks, and replies for WhatsApp, Email, and SMS sit side by side, so you can compare performance across channels instead of stitching together three dashboards.",
            mockup: (
              <BarsCard
                label="DELIVERY BY CHANNEL"
                bars={[
                  { name: "WhatsApp", pct: 98, color: "#217b4c" },
                  { name: "Email", pct: 91, color: "#4a7bc9" },
                  { name: "SMS", pct: 96, color: "#e5b32f" },
                ]}
              />
            ),
          },
          {
            no: "02",
            eyebrow: "ATTRIBUTE",
            title: "Which source actually pays off",
            body: "Tie leads and revenue back to where they came from, forms, ads, social, or prospecting, so you invest in the sources that build pipeline, not just the ones that get clicks.",
            reverse: true,
            mockup: (
              <StatusCard
                title="Revenue · This quarter"
                sub="vs. last quarter"
                tag="REPORT"
                progressLabel="Pipeline view"
                progressValue="Value + stages"
                pct={84}
                primaryBtn="Open report"
              />
            ),
          },
          {
            no: "03",
            eyebrow: "ACT",
            title: "Recorded activity, better calls",
            body: "Reports read the sends, delivery events, lead activity, and credit usage recorded by the platform, so your team can review performance in one place.",
            mockup: (
              <GaugeCard
                label="REPLY REPORT"
                value="Tracked"
                sub="Delivery + replies"
                footLeft="Recorded activity"
                footRight="Report view"
                pct={0.27}
              />
            ),
          },
        ]}
      />

      <FeatureSection
        label="Reporting toolkit"
        title="The numbers that run"
        accent="your business."
        intro="From message delivery to closed revenue, review the metrics that matter in comparable reporting views and the currency you work in."
        items={capabilities}
        gridClass="sm:grid-cols-2 lg:grid-cols-3"
      />

      <StatsBand
        stats={[
          { value: "Recorded", label: "Delivery, engagement & CRM activity" },
          { value: "All", label: "Channels compared side by side" },
          { value: "Revenue", label: "Sales dashboards, not just sends" },
          { value: "Any ₹/$", label: "Displayed in your currency" },
        ]}
      />

      <FAQ
        label="Analytics FAQ"
        title="Reporting, answered."
        intro="How SpeedIQ measures what's working."
        items={[
          {
            q: "Where does the data come from?",
            a: "Reports read the delivery, engagement, CRM, and credit events recorded by SpeedIQ. Refresh a report to see the latest available activity.",
          },
          {
            q: "Can I compare channels against each other?",
            a: "Yes. WhatsApp, Email, and SMS metrics sit in one view, so you can see which channel delivers best and where your replies and revenue actually come from.",
          },
          {
            q: "Does it show revenue, not just message stats?",
            a: "It does. Sales and revenue dashboards track pipeline value and won deals over time with period-over-period comparison, alongside the messaging metrics.",
          },
          {
            q: "Which currency are figures shown in?",
            a: "Yours. Revenue and spend display in your chosen currency, converted at daily rates, so INR, USD, AED, and more all read correctly across reports.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}

/* ---------------- Hero visual: analytics report ---------------- */

function ReportCard() {
  const pts = [8, 24, 18, 40, 34, 58, 50, 72];
  const w = 300;
  const h = 90;
  const max = 80;
  const step = w / (pts.length - 1);
  const line = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`).join(" ");
  const area = `${line} L ${w} ${h} L 0 ${h} Z`;
  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      <div
        className="pointer-events-none absolute -inset-8 rounded-[40px]"
        style={{ background: `radial-gradient(55% 55% at 60% 15%, ${ACCENT}30, transparent 72%)` }}
      />
      <div className="absolute -top-4 left-6 right-6 h-16 rounded-2xl bg-black/[0.04]" />
      <div className="absolute -top-2 left-3 right-3 h-16 rounded-2xl bg-black/[0.06]" />

      <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_36px_90px_-28px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
        {/* header */}
        <div className="flex items-center justify-between border-b border-[#f0f2f5] px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg text-white" style={{ backgroundColor: ACCENT }}>
              <ChartIcon className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className="text-[13px] font-semibold text-[#11161f]">Revenue</div>
              <div className="text-[11px] text-[#9ca3af]">Last 8 weeks</div>
            </div>
          </div>
          <span className="rounded-full bg-[#edecfd] px-2.5 py-1 text-[10px] font-semibold" style={{ color: ACCENT }}>
            REPORT
          </span>
        </div>

        {/* big number */}
        <div className="px-5 pt-4">
          <div className="font-display text-[28px] font-semibold tracking-tight text-[#11161f]">Revenue report</div>
          <div className="text-[11px] text-[#9ca3af]">won deals · pipeline value · source attribution</div>
        </div>

        {/* chart */}
        <div className="px-5 pb-2 pt-3">
          <svg viewBox={`0 0 ${w} ${h}`} className="w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="rev-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={ACCENT} stopOpacity="0.22" />
                <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={area} fill="url(#rev-fill)" />
            <path d={line} fill="none" stroke={ACCENT} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* mini stats */}
        <div className="grid grid-cols-3 border-t border-[#f0f2f5]">
          {[
            { k: "Delivery", v: "Tracked" },
            { k: "Engagement", v: "Tracked" },
            { k: "Credit usage", v: "Tracked" },
          ].map((s, i) => (
            <div key={s.k} className={`px-4 py-3.5 ${i !== 0 ? "border-l border-[#f0f2f5]" : ""}`}>
              <div className="text-[15px] font-semibold text-[#11161f]">{s.v}</div>
              <div className="text-[10px] text-[#9ca3af]">{s.k}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="floaty absolute -bottom-5 -right-3 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-[0_18px_44px_rgba(0,0,0,0.4)] ring-1 ring-black/5">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg text-white" style={{ backgroundColor: "#217b4c" }}>
          <PulseIcon className="h-3.5 w-3.5" />
        </span>
        <div className="leading-tight">
          <div className="text-[11px] font-semibold text-[#11161f]">Report ready</div>
          <div className="text-[10px] text-[#9ca3af]">recorded activity</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Icons ---------------- */

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 4v16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 14l3-3 2.5 2.5L19 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function RevenueIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="4.5" width="16" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 15l2.5-3 2 1.8L16 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 5.5v1M12 17v1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function SourceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8.4v3M12 11.4l-4.5 4.2M12 11.4l4.5 4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function PulseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 12h4l2-5 3 10 2-5h7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CoinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14.5 9.5c-.5-.9-1.5-1.3-2.5-1.3-1.4 0-2.5.8-2.5 1.9 0 2.6 5 1.4 5 4 0 1.1-1.1 1.9-2.5 1.9-1 0-2-.4-2.5-1.3M12 6.5v11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 12h16M12 4c2.4 2.2 3.6 5 3.6 8s-1.2 5.8-3.6 8c-2.4-2.2-3.6-5-3.6-8s1.2-5.8 3.6-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
