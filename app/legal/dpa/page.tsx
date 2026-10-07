import { pageMeta } from "@/lib/landing/seo";
import { LegalLayout, type LegalSection } from "@/components/landing/legal";

export const metadata = pageMeta(
  "Data Processing Addendum",
  "SpeedIQ's Data Processing Addendum: roles, processing scope, AI sub-processing, sub-processors, security, and international transfer safeguards.",
  "/legal/dpa",
);

const sections: LegalSection[] = [
  {
    heading: "Scope and roles",
    blocks: [
      {
        type: "p",
        text: "This Data Processing Addendum (\"DPA\") forms part of the agreement between you (the \"Controller\") and SpeedIQ Inc. (the \"Processor\") and applies whenever SpeedIQ processes personal data on your behalf to provide the Services.",
      },
      {
        type: "p",
        text: "You determine the purposes and means of processing the personal data you upload or source; SpeedIQ processes it only on your documented instructions.",
      },
    ],
  },
  {
    heading: "Nature of processing",
    blocks: [
      {
        type: "p",
        text: "SpeedIQ processes personal data to deliver and receive messages across WhatsApp, Email, SMS, and social channels (Instagram, Facebook, LinkedIn, and TikTok), ingest leads from ad platforms and forms, source prospects from publicly available business information, operate the unified inbox, CRM, and automations, run AI auto-reply and routing, and provide analytics. The categories of data subjects and personal data are determined by the contacts and content you choose to upload, connect, or source.",
      },
    ],
  },
  {
    heading: "AI sub-processing",
    blocks: [
      {
        type: "p",
        text: "Where you enable AI features and connect your own AI provider, such as Anthropic (Claude), OpenAI, or Google, SpeedIQ transmits the relevant content to the provider you select so it can generate a response. That provider processes the content as a sub-processor under your account and instructions. You choose which provider is used, which flows invoke it, and what data is sent to it, and you remain responsible for your agreement with that provider.",
      },
    ],
  },
  {
    heading: "Sub-processors",
    blocks: [
      {
        type: "p",
        text: "You authorize SpeedIQ to engage sub-processors to support delivery of the Services. We maintain a current list and will give notice of changes so you can object on reasonable grounds. Categories include:",
      },
      {
        type: "ul",
        items: [
          "Channel gateways for WhatsApp, Email, and SMS delivery.",
          "Social and ad platforms, including Meta, Google, LinkedIn, and TikTok.",
          "Prospecting and enrichment sources used to source and clean leads.",
          "Cloud hosting and infrastructure providers.",
          "Payment providers used to process your subscription and top-ups.",
        ],
      },
    ],
  },
  {
    heading: "Security measures",
    blocks: [
      {
        type: "p",
        text: "SpeedIQ implements appropriate technical and organizational measures to protect personal data, including encryption in transit and at rest, role-based access controls, contact-masking for restricted roles, audit logging, and regular security testing.",
      },
      {
        type: "ul",
        items: [
          "Encryption of personal data in transit and at rest.",
          "Access restricted to personnel who need it to operate the Services.",
          "Contact-level masking so restricted roles cannot see raw contact details.",
          "Logging and monitoring of access to production systems.",
          "Documented incident response and breach-notification procedures.",
        ],
      },
    ],
  },
  {
    heading: "International transfers",
    blocks: [
      {
        type: "p",
        text: "Where personal data is transferred outside its country of origin, SpeedIQ relies on Standard Contractual Clauses or another lawful transfer mechanism, together with supplementary measures where required.",
      },
    ],
  },
  {
    heading: "Data subject requests and assistance",
    blocks: [
      {
        type: "p",
        text: "SpeedIQ will, taking into account the nature of processing, assist you in responding to data subject requests and in meeting your obligations around security, breach notification, and data protection impact assessments.",
      },
    ],
  },
  {
    heading: "Return and deletion",
    blocks: [
      {
        type: "p",
        text: "On termination of the Services, SpeedIQ will delete or return personal data processed on your behalf, except where retention is required by law. To request a copy or deletion, contact dpo@speediq.ai.",
      },
    ],
  },
];

export default function DpaPage() {
  return (
    <LegalLayout
      eyebrow="LEGAL"
      title="Data Processing"
      accent="Addendum."
      subtitle="How SpeedIQ processes personal data on your behalf, roles, sub-processors, security measures, and transfer safeguards."
      updated="July 7, 2026"
      intro="This addendum governs SpeedIQ's processing of personal data as your processor and supplements our Terms of Service and Privacy Policy."
      sections={sections}
      currentHref="/legal/dpa"
    />
  );
}
