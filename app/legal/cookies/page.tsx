import { pageMeta } from "@/lib/landing/seo";
import { LegalLayout, type LegalSection } from "@/components/landing/legal";

export const metadata = pageMeta(
  "Cookie Policy",
  "How SpeedIQ uses cookies and similar technologies, the categories we use, why we use them, and how to manage your preferences.",
  "/legal/cookies",
);

const sections: LegalSection[] = [
  {
    heading: "What are cookies",
    blocks: [
      {
        type: "p",
        text: "Cookies are small text files stored on your device when you visit a website. They help the site remember your actions and preferences, and let us understand how the Services are used so we can improve them.",
      },
    ],
  },
  {
    heading: "Categories we use",
    blocks: [
      {
        type: "ul",
        items: [
          "Strictly necessary: required to sign in, keep you authenticated, and secure the platform. These cannot be switched off.",
          "Preferences: remember choices such as language and layout so the product feels consistent.",
          "Analytics: help us measure usage and performance so we can improve the Services.",
          "Marketing: used only with your consent to measure campaign effectiveness.",
        ],
      },
    ],
  },
  {
    heading: "Third-party cookies",
    blocks: [
      {
        type: "p",
        text: "Some cookies are set by trusted third parties that provide analytics, infrastructure, and the embedded support and marketing chat widget on our behalf. These providers are contractually bound to use the data only to deliver their service to us.",
      },
    ],
  },
  {
    heading: "Managing your preferences",
    blocks: [
      {
        type: "p",
        text: "You can accept or reject non-essential cookies through our consent banner at any time. You can also control cookies through your browser settings, though blocking some cookies may affect how the Services function.",
      },
    ],
  },
  {
    heading: "Changes to this policy",
    blocks: [
      {
        type: "p",
        text: "We may update this Cookie Policy as our use of cookies evolves. Material changes will be reflected here with an updated revision date.",
      },
    ],
  },
];

export default function CookiesPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Cookie"
      accent="Policy."
      subtitle="How SpeedIQ uses cookies and similar technologies, the categories we rely on, and how you can manage your consent."
      updated="July 7, 2026"
      intro="This policy explains how and why SpeedIQ uses cookies, and how you can control them across our website and product."
      sections={sections}
      currentHref="/legal/cookies"
    />
  );
}
