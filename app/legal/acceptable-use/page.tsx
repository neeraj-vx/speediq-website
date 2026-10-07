import { pageMeta } from "@/lib/landing/seo";
import { LegalLayout, type LegalSection } from "@/components/landing/legal";

export const metadata = pageMeta(
  "Acceptable Use Policy",
  "The rules for using SpeedIQ responsibly: consent, platform rules, sourced data, AI use, prohibited content, anti-spam, and enforcement.",
  "/legal/acceptable-use",
);

const sections: LegalSection[] = [
  {
    heading: "Purpose",
    blocks: [
      {
        type: "p",
        text: "This Acceptable Use Policy protects recipients, connected platforms, and the SpeedIQ platform. It applies to everyone who uses the Services to reach or manage contacts, across any channel, and forms part of our Terms of Service.",
      },
    ],
  },
  {
    heading: "Consent and opt-out",
    blocks: [
      {
        type: "p",
        text: "You may only message recipients who have given valid consent to be contacted on the relevant channel, whether they came from a chat, an ad, a form, or prospecting. You must honor opt-out requests promptly and include clear unsubscribe instructions where required by law or channel rules.",
      },
      {
        type: "ul",
        items: [
          "Maintain records of consent for the contacts you message.",
          "Process opt-outs without undue delay across every channel.",
          "Never re-add a contact who has opted out without fresh consent.",
        ],
      },
    ],
  },
  {
    heading: "Third-party platform rules",
    blocks: [
      {
        type: "p",
        text: "When you connect WhatsApp Business, Meta, Google, LinkedIn, TikTok, or any other platform, you must comply with that platform's own rules, including messaging windows, template and opt-in requirements, and lead-ad policies. Violations can cause the platform to throttle, suspend, or revoke your access, and may lead us to do the same.",
      },
    ],
  },
  {
    heading: "Sourced and prospecting data",
    blocks: [
      {
        type: "p",
        text: "Prospecting lets you source publicly available business information. You may only contact prospects where you are lawfully allowed to, and you must use sourced data in line with applicable marketing and data-protection laws. Honor do-not-contact requests and opt-outs for sourced contacts just as you would for any other.",
      },
    ],
  },
  {
    heading: "AI use",
    blocks: [
      {
        type: "p",
        text: "AI auto-reply and drafting help you respond faster, but you remain responsible for every message sent from your account. You must not use AI features to impersonate a person, deceive recipients, or generate content prohibited by this policy, and you must disclose automated or AI-assisted messaging where the law requires it.",
      },
    ],
  },
  {
    heading: "Prohibited content",
    blocks: [
      {
        type: "p",
        text: "You may not use the Services to send content that is unlawful, deceptive, or harmful. This includes, without limitation:",
      },
      {
        type: "ul",
        items: [
          "Phishing, fraud, scams, or malware of any kind.",
          "Hateful, harassing, or threatening messages.",
          "Sexually explicit material or content harmful to minors.",
          "Content that infringes others' intellectual property or privacy.",
          "Regulated goods or services where you lack the required authorization.",
        ],
      },
    ],
  },
  {
    heading: "Anti-spam",
    blocks: [
      {
        type: "p",
        text: "Unsolicited bulk messaging is prohibited. You must not purchase or scrape contact lists for spam, disguise the origin of a message, or use the Services in a way that generates excessive complaints or harms sender reputation.",
      },
    ],
  },
  {
    heading: "Technical limits",
    blocks: [
      {
        type: "p",
        text: "You must respect platform and channel rate limits and must not attempt to bypass security controls, reverse-engineer the Services, or disrupt the infrastructure that other customers rely on.",
      },
    ],
  },
  {
    heading: "Enforcement",
    blocks: [
      {
        type: "p",
        text: "We may investigate suspected violations and take action ranging from warnings to throttling, suspension, or termination. Where connected platforms require it, we may act immediately to protect recipients and the network. Report abuse to abuse@speediq.ai.",
      },
    ],
  },
];

export default function AcceptableUsePage() {
  return (
    <LegalLayout
      eyebrow="LEGAL"
      title="Acceptable Use"
      accent="Policy."
      subtitle="The rules for using SpeedIQ responsibly, consent, platform rules, AI use, prohibited content, and how we enforce them."
      updated="July 7, 2026"
      intro="Messaging is a privilege built on recipient trust. This policy sets out how to use SpeedIQ, across every channel, in a way that keeps that trust intact."
      sections={sections}
      currentHref="/legal/acceptable-use"
    />
  );
}
