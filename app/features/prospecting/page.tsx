import { pageMeta } from "@/lib/landing/seo";
import Footer from "@/components/landing/Footer";
import {
  MarketingHero,
  FeatureRows,
  FeatureSection,
  StatsBand,
  StatusCard,
  BarsCard,
  FAQ,
  type Feature,
} from "@/components/landing/marketing";

export const metadata = pageMeta(
  "AI Prospecting",
  "Source local businesses from Google Maps or run AI deep research, enrich and dedupe results, then import verified leads into your CRM pipeline.",
  "/features/prospecting",
);

const capabilities: Feature[] = [
  { title: "Map radius scan", body: "Pick a business type, drop a pin, and set a radius, SpeedIQ pulls every matching local business with name, phone, website, rating, and category.", icon: MapIcon },
  { title: "Website enrichment", body: "Optionally visit each business's website to pull public emails and social profiles, so records arrive more complete before you reach out.", icon: GaugeIcon },
  { title: "Dedupe & enrich", body: "New prospects are checked against your existing contacts and enriched, so you never import a duplicate or a half-empty record.", icon: MergeIcon },
  { title: "Straight to CRM", body: "Import the ones you want into the right pipeline and stage, ready for a campaign, a sequence, or a call. No CSV round-trips.", icon: PipelineIcon },
  { title: "AI deep research", body: "When enabled for your workspace, research a target audience or known companies and pay one AI credit per verified lead delivered.", icon: SparkIcon },
];

export default function ProspectingPage() {
  return (
    <main>
      <MarketingHero
        active="Features"
        eyebrow="FEATURES · AI PROSPECTING"
        title="Find your next customers,"
        accent="before they call."
        subtitle="Outbound, built in. Scan Google Maps by business type and area, or use AI deep research for a target audience or known companies, then import verified results into your CRM pipeline."
        secondaryCta={{ label: "All features", href: "/features" }}
        highlights={["Maps + AI research", "Enrich & dedupe", "Import to CRM"]}
        visual={<MapScanCard />}
      />

      <FeatureRows
        label="How it works"
        rows={[
          {
            no: "01",
            eyebrow: "SOURCE",
            title: "Scan a map, fill a list",
            body: "Choose a business type, “dentists in Austin”, “gyms near me”, and draw a radius on the map. SpeedIQ finds matching local businesses and pulls their name, phone, website, rating, and category automatically.",
            mockup: (
              <StatusCard
                title="Scan · Cafés, Bandra"
                sub="Radius · 3 km"
                tag="RUNNING"
                progressLabel="Businesses found"
                progressValue="128"
                pct={82}
                primaryBtn="Review"
              />
            ),
          },
          {
            no: "02",
            eyebrow: "CLEAN",
            title: "Only the leads worth your time",
            body: "Prospects can be enriched with emails and social profiles from their websites, then checked against the contacts you already have, so the list you review is clean and ready, not a raw dump.",
            reverse: true,
            mockup: (
              <BarsCard
                label="PROSPECTS BY STATUS"
                bars={[
                  { name: "New", pct: 68, color: "#0526D9" },
                  { name: "Imported", pct: 41, color: "#60a5fa" },
                  { name: "Duplicate / skipped", pct: 18, color: "#c3c9d4" },
                ]}
              />
            ),
          },
          {
            no: "03",
            eyebrow: "IMPORT",
            title: "From map to pipeline in one click",
            body: "Tick the prospects you want and import them into the right pipeline and stage. They arrive as real leads, ready for a WhatsApp broadcast, an email sequence, or a call, with routing and automations applied.",
            mockup: (
              <StatusCard
                title="Import · New pipeline"
                sub="Selected · 42 prospects"
                tag="READY"
                progressLabel="Imported"
                progressValue="42 / 42"
                pct={100}
                primaryBtn="Open pipeline"
              />
            ),
          },
        ]}
      />

      <FeatureSection
        label="Prospecting toolkit"
        title="Turn a search into"
        accent="a pipeline."
        intro="Everything you need to source, qualify, and import local leads, without a scraper, a spreadsheet, or a second tool."
        items={capabilities}
      />

      <StatsBand
        stats={[
          { value: "Maps", label: "Source local businesses by area" },
          { value: "Auto", label: "Deduped against your contacts" },
          { value: "1-click", label: "Import to your pipeline" },
          { value: "Native", label: "Lands in your CRM, no exports" },
        ]}
      />

      <FAQ
        label="Prospecting FAQ"
        title="Outbound prospecting, answered."
        intro="What you need to know about sourcing leads from the map."
        items={[
          {
            q: "How does Maps prospecting work?",
            a: "Pick a business type and an area, and SpeedIQ scans Google Maps for matching local businesses, collecting their public details, name, phone, website, rating, and category, then checks them against your existing contacts so duplicates are skipped.",
          },
          {
            q: "Where do the sourced leads go?",
            a: "Into the same CRM as the rest of your leads. Choose the pipeline and stage on import, and they arrive as real contacts you can immediately message, sequence, or assign.",
          },
          {
            q: "Will I get duplicates of contacts I already have?",
            a: "No. Every prospect is checked against your existing contacts before import, so duplicates are flagged and skipped and your pipeline stays clean.",
          },
          {
            q: "Can I message prospects right after importing?",
            a: "Yes. Imported prospects are ordinary leads, so campaigns, sequences, routing, and automations all apply, reach out on WhatsApp, Email, or SMS the same day.",
          },
          {
            q: "What is AI deep research?",
            a: "If it is enabled for your workspace, choose a target audience to discover or provide companies and domains to enrich. SpeedIQ advances the research run and charges one AI credit per verified lead delivered.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}

/* ---------------- Hero visual: Google-Maps scan mock ---------------- */

function MapScanCard() {
  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      <div
        className="pointer-events-none absolute -inset-8 rounded-[40px]"
        style={{ background: "radial-gradient(55% 55% at 60% 15%, #0526D930, transparent 72%)" }}
      />
      <div className="absolute -top-4 left-6 right-6 h-16 rounded-2xl bg-black/[0.04]" />
      <div className="absolute -top-2 left-3 right-3 h-16 rounded-2xl bg-black/[0.06]" />

      <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_36px_90px_-28px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
        {/* header */}
        <div className="flex items-center justify-between border-b border-[#f0f2f5] px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0526D9] text-white">
              <MapIcon className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className="text-[13px] font-semibold text-[#11161f]">Maps Prospecting</div>
              <div className="text-[11px] text-[#9ca3af]">Cafés · Bandra · 3 km</div>
            </div>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-[#eef4ff] px-2.5 py-1 text-[10px] font-semibold text-[#0526D9]">
            <span className="leaf-pulse h-1.5 w-1.5 rounded-full bg-[#0526D9]" />
            Scanning
          </span>
        </div>

        {/* map */}
        <div className="relative h-[190px] overflow-hidden bg-[#e9eef6]">
          <svg viewBox="0 0 400 190" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" fill="none">
            <path d="M-20 60 L200 100 L430 44" stroke="#d3ddec" strokeWidth="16" strokeLinecap="round" />
            <path d="M70 -20 L120 210" stroke="#d3ddec" strokeWidth="13" strokeLinecap="round" />
            <path d="M-20 150 L430 128" stroke="#dde4ef" strokeWidth="10" strokeLinecap="round" />
            <path d="M300 -20 L330 210" stroke="#dde4ef" strokeWidth="9" strokeLinecap="round" />
          </svg>
          <div
            className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-[#93c5fd]"
            style={{ background: "rgba(37,99,235,0.07)" }}
          />
          <ScanPin className="left-[30%] top-[34%]" />
          <ScanPin className="left-[52%] top-[52%]" solid />
          <ScanPin className="left-[66%] top-[30%]" />
          <ScanPin className="left-[44%] top-[70%]" />
          <ScanPin className="left-[74%] top-[60%]" />
          <div className="absolute bottom-3 left-3 rounded-md bg-white px-2.5 py-1 text-[11px] font-semibold text-[#11161f] shadow-sm">
            <span className="text-[#0526D9]">128</span> businesses found
          </div>
        </div>

        {/* result row */}
        <div className="flex items-center gap-3 border-t border-[#f0f2f5] px-5 py-3.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef4ff] text-[11px] font-bold text-[#0526D9]">
            94
          </span>
          <div className="min-w-0 flex-1 leading-tight">
            <div className="truncate text-[13px] font-semibold text-[#11161f]">Blue Tokai Coffee</div>
            <div className="truncate text-[12px] text-[#7a808b]">★ 4.6 · Café · +91 ·· ·· 4821</div>
          </div>
          <span className="shrink-0 rounded-lg bg-[#11161f] px-3 py-1.5 text-[11px] font-semibold text-white">
            Import
          </span>
        </div>
      </div>

      <div className="floaty absolute -bottom-5 -right-3 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-[0_18px_44px_rgba(0,0,0,0.4)] ring-1 ring-black/5">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0526D9] text-white">
          <PipelineIcon className="h-3.5 w-3.5" />
        </span>
        <div className="leading-tight">
          <div className="text-[11px] font-semibold text-[#11161f]">42 imported</div>
          <div className="text-[10px] text-[#9ca3af]">to New pipeline</div>
        </div>
      </div>
    </div>
  );
}

function ScanPin({ className, solid }: { className?: string; solid?: boolean }) {
  return (
    <span className={`absolute -translate-x-1/2 -translate-y-full ${className ?? ""}`}>
      <MapPinIcon className={`h-6 w-6 ${solid ? "text-[#1d4ed8]" : "text-[#0526D9]"}`} />
    </span>
  );
}

/* ---------------- Icons ---------------- */

function MapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 4v14M15 6v14" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(255,255,255,0.9)" />
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function GaugeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 18a8 8 0 1 1 14 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 18l4-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="18" r="1.4" fill="currentColor" />
    </svg>
  );
}
function SparkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.5l1.7 5.1 5.1 1.7-5.1 1.7L12 16.1l-1.7-5.1L5.2 9.3l5.1-1.7L12 2.5ZM18.5 15l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
    </svg>
  );
}
function MergeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M7 4v6a3 3 0 0 0 3 3h4a3 3 0 0 1 3 3v4M7 4L4 7M7 4l3 3M17 20l3-3M17 20l-3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PipelineIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3.5" y="4.5" width="4" height="15" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="10" y="4.5" width="4" height="10" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="16.5" y="4.5" width="4" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
