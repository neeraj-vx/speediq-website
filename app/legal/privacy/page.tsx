import { pageMeta } from "@/lib/landing/seo";
import { LegalLayout, type LegalSection } from "@/components/landing/legal";

export const metadata = pageMeta(
  "Privacy Policy",
  "How SpeedIQ collects, uses, shares, and protects personal data across channels, ads, prospecting, and AI features, plus your rights, retention, and transfers.",
  "/legal/privacy",
);

const sections: LegalSection[] = [
  {
    heading: "Information we collect",
    blocks: [
      {
        type: "p",
        text: "We collect information you provide directly, information generated as you use the Services, and information from third parties such as payment processors, channel gateways, ad platforms, and data sources you connect.",
      },
      {
        type: "ul",
        items: [
          "Account data: name, email, organization, and billing details.",
          "Contact and CRM data: the contacts, leads, pipelines, and notes you import or create.",
          "Message data: the content and metadata of conversations across WhatsApp, Email, SMS, and social DMs and comments.",
          "Social and ad-platform data: lead-form submissions, comments, and identifiers synced from Meta, Google, LinkedIn, and TikTok when you connect those accounts.",
          "Prospecting data: publicly available business details, such as name, phone, website, rating, and category, sourced when you run a map scan.",
          "Usage data: log files, device information, and analytics about how you use the platform.",
        ],
      },
    ],
  },
  {
    heading: "How we use information",
    blocks: [
      {
        type: "p",
        text: "We use personal data to provide and improve the Services, process payments, deliver messages across channels, capture and route leads, prevent abuse, and communicate with you about your account.",
      },
      {
        type: "ul",
        items: [
          "To operate the unified inbox, CRM, campaigns, and automations.",
          "To sync leads from ads and forms and source prospects you request.",
          "To run AI auto-reply, routing, and scoring on the model you connect.",
          "To meter credit usage and bill your subscription.",
          "To detect, prevent, and respond to fraud or policy violations.",
          "To send service updates and, where permitted, product news.",
        ],
      },
    ],
  },
  {
    heading: "AI processing",
    blocks: [
      {
        type: "p",
        text: "When you enable AI features such as auto-reply, drafting, or scoring, the relevant conversation content is sent to the AI provider you connect, such as Anthropic (Claude), OpenAI, or Google, using your own account and key, so it can generate a response. That provider processes the content under its own terms, and you control which provider is used and what is sent to it. SpeedIQ does not use your content to train its own models.",
      },
    ],
  },
  {
    heading: "How we share information",
    blocks: [
      {
        type: "p",
        text: "We do not sell personal data. We share it only with the sub-processors that help us run the Services, such as channel gateways, social and ad platforms, cloud hosting, prospecting and enrichment sources, and payment providers, under contracts that require appropriate safeguards; with the AI providers you choose to connect; and where required by law.",
      },
    ],
  },
  {
    heading: "Data retention",
    blocks: [
      {
        type: "p",
        text: "We retain personal data for as long as your account is active and as needed to provide the Services. After account closure we delete or anonymize data within a reasonable period, except where retention is required for legal or accounting purposes.",
      },
    ],
  },
  {
    heading: "Your rights",
    blocks: [
      {
        type: "p",
        text: "Depending on your location, you may have rights to access, correct, delete, or port your personal data, and to object to or restrict certain processing. To exercise these rights, contact us at privacy@speediq.ai.",
      },
    ],
  },
  {
    heading: "International transfers",
    blocks: [
      {
        type: "p",
        text: "Where we transfer personal data across borders, we rely on appropriate transfer mechanisms such as Standard Contractual Clauses. Our processing of customer personal data is further governed by our Data Processing Addendum.",
      },
    ],
  },
  {
    heading: "Security",
    blocks: [
      {
        type: "p",
        text: "We use encryption in transit and at rest, role-based access controls, contact-masking for restricted roles, and regular security reviews to protect personal data. No system is perfectly secure, but we work continuously to safeguard the information you trust us with.",
      },
    ],
  },
  {
    heading: "Contact us",
    blocks: [
      {
        type: "p",
        text: "If you have questions about this policy or how we handle your data, reach our privacy team at privacy@speediq.ai or write to SpeedIQ",
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy"
      accent="Policy."
      subtitle="How we collect, use, and protect personal data across the SpeedIQ platform, and the rights you have over your information."
      updated="July 7, 2026"
      intro="Your trust matters. This policy explains what data SpeedIQ processes across your channels, ads, prospecting, and AI features, why we process it, and the choices and rights available to you."
      sections={sections}
      currentHref="/legal/privacy"
    />
  );
}
