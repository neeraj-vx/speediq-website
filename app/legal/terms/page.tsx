import { pageMeta } from "@/lib/landing/seo";
import { LegalLayout, type LegalSection } from "@/components/landing/legal";

export const metadata = pageMeta(
  "Terms of Service",
  "The terms that govern your use of SpeedIQ: accounts, connected channels, AI features, acceptable use, billing, credits, liability, and termination.",
  "/legal/terms",
);

const sections: LegalSection[] = [
  {
    heading: "Agreement to terms",
    blocks: [
      {
        type: "p",
        text: "These Terms of Service govern your access to and use of the SpeedIQ platform, websites, and APIs (the \"Services\"). SpeedIQ is a unified conversations, CRM, and lead platform: it brings WhatsApp, Email, SMS, and social channels into one inbox, captures leads from ads, forms, and prospecting, and runs no-code automations and AI auto-reply on top. By creating an account or using the Services, you agree to be bound by these terms on behalf of yourself and any organization you represent.",
      },
      {
        type: "p",
        text: "If you do not agree to these terms, you may not access or use the Services.",
      },
    ],
  },
  {
    heading: "Accounts",
    blocks: [
      {
        type: "p",
        text: "You must provide accurate information when registering and keep your credentials secure. You are responsible for all activity that occurs under your account, including the actions of team members you invite and any roles or permissions you assign to them.",
      },
      {
        type: "ul",
        items: [
          "You must be at least 18 years old to use the Services.",
          "You are responsible for maintaining the confidentiality of your login details.",
          "Notify us promptly of any unauthorized use of your account.",
        ],
      },
    ],
  },
  {
    heading: "Connected accounts and third-party channels",
    blocks: [
      {
        type: "p",
        text: "SpeedIQ connects to third-party platforms so you can message and capture leads in one place, including WhatsApp Business, Meta (Facebook and Instagram), Google, LinkedIn, TikTok, email and SMS providers, and payment providers. Forms and project-specific webhooks can also bring data into the CRM. When you connect an account, you confirm you are authorized to do so and to grant SpeedIQ the access required to operate the Services on your behalf.",
      },
      {
        type: "ul",
        items: [
          "Your use of each connected platform remains subject to that platform's own terms and policies.",
          "Platforms may change, rate-limit, suspend, or revoke access at any time, and SpeedIQ is not responsible for their availability or actions.",
          "You are responsible for complying with each platform's messaging windows, template, opt-in, and lead-ad rules.",
        ],
      },
    ],
  },
  {
    heading: "AI features and your model keys",
    blocks: [
      {
        type: "p",
        text: "SpeedIQ's AI features, including AI auto-reply, drafting, and lead scoring, are model-agnostic and run on the AI provider you connect, such as Anthropic (Claude), OpenAI, or Google, using your own account and API key. You are responsible for your AI provider account, keys, usage costs, and compliance with that provider's terms.",
      },
      {
        type: "ul",
        items: [
          "AI output can be inaccurate or incomplete; you are responsible for the messages sent from your account.",
          "Where you enable auto-send, you accept that replies may be delivered without human review; a human hand-off is available at any time.",
          "You must not use AI features to deceive recipients or to generate content prohibited by our Acceptable Use Policy.",
        ],
      },
    ],
  },
  {
    heading: "Prospecting and sourced data",
    blocks: [
      {
        type: "p",
        text: "Prospecting tools let you source publicly available business information, such as names, phone numbers, websites, ratings, and categories, and import it into your CRM. You are solely responsible for using sourced contacts lawfully, including obtaining any consent required and complying with applicable marketing and data-protection laws before you reach out.",
      },
    ],
  },
  {
    heading: "Acceptable use",
    blocks: [
      {
        type: "p",
        text: "You agree to use the Services only for lawful purposes and in compliance with all applicable messaging regulations, including obtaining valid consent before contacting recipients on any channel. Detailed restrictions are set out in our Acceptable Use Policy, which forms part of these terms.",
      },
    ],
  },
  {
    heading: "Credits and billing",
    blocks: [
      {
        type: "p",
        text: "The Services are billed on a credit-based model with no per-seat fees. Plan member limits still apply. Email, SMS, AI, and voice use separate credit buckets; WhatsApp and social sends do not deduct SpeedIQ credits, and connected platform or provider terms apply separately. Subscription fees are billed in advance in US Dollars (USD). Fees are non-refundable except as described in our Refund Policy.",
      },
      {
        type: "ul",
        items: [
          "Credits reset at the start of each billing cycle and do not roll over.",
          "You can buy one-time credit top-ups and enable auto-top-up to avoid interruptions.",
          "Plan changes take effect from your next billing cycle.",
          "Sending pauses if your credit balance is exhausted, until you top up or renew.",
        ],
      },
    ],
  },
  {
    heading: "Intellectual property",
    blocks: [
      {
        type: "p",
        text: "SpeedIQ and its licensors retain all rights, title, and interest in the Services. You retain ownership of the content and contact data you bring to the platform and grant us a limited license to process it solely to provide the Services, including routing it to the connected channels and AI providers you choose.",
      },
    ],
  },
  {
    heading: "Termination",
    blocks: [
      {
        type: "p",
        text: "You may cancel your account at any time. We may suspend or terminate your access if you breach these terms, fail to pay fees, or use the Services in a way that risks harm to recipients, connected platforms, or the platform itself. On termination, your right to use the Services ends immediately.",
      },
    ],
  },
  {
    heading: "Disclaimers and liability",
    blocks: [
      {
        type: "p",
        text: "The Services are provided \"as is\" without warranties of any kind, and we do not warrant the availability, accuracy, or output of any third-party channel, connected platform, or AI provider. To the maximum extent permitted by law, SpeedIQ is not liable for indirect, incidental, or consequential damages, and our total liability is limited to the amount you paid in the twelve months preceding the claim.",
      },
    ],
  },
  {
    heading: "Changes to these terms",
    blocks: [
      {
        type: "p",
        text: "We may update these terms from time to time. We will notify you of material changes by email or in-app notice. Continued use of the Services after changes take effect constitutes acceptance of the revised terms.",
      },
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of"
      accent="Service."
      subtitle="The terms that govern your use of SpeedIQ. Please read them carefully, they set out your rights and responsibilities as a customer."
      updated="October 6, 2026"
      intro="This agreement is between you and SpeedIQ Inc. It explains the rules for using our unified conversations, CRM, and lead platform, and what you can expect from us in return."
      sections={sections}
      currentHref="/legal/terms"
    />
  );
}
