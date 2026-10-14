import { pageMeta } from "@/lib/landing/seo";
import { LegalLayout, type LegalSection } from "@/components/landing/legal";

export const metadata = pageMeta(
  "Refund Policy",
  "SpeedIQ's refund policy: subscription fees, credit top-ups, service issues, and how to request a refund.",
  "/legal/refund",
);

const sections: LegalSection[] = [
  {
    heading: "Overview",
    blocks: [
      {
        type: "p",
        text: "We want you to be confident in SpeedIQ. This policy explains when subscription fees and credits are refundable, and how to request a refund. Subscriptions and credit top-ups are billed in US Dollars (USD).",
      },
    ],
  },
  {
    heading: "Before subscribing",
    blocks: [
      {
        type: "p",
        text: "You can create an account and explore the available product surfaces before subscribing. A paid plan begins when you complete checkout; there is no automatic 7-day paid-plan trial.",
      },
    ],
  },
  {
    heading: "Subscription fees",
    blocks: [
      {
        type: "p",
        text: "Subscriptions are billed in advance for each cycle. Subscription fees are non-refundable, including for partial billing periods after a cancellation, except where required by law. Your plan remains active until the end of the cycle you have paid for.",
      },
    ],
  },
  {
    heading: "Credits and top-ups",
    blocks: [
      {
        type: "p",
        text: "Credits represent usage for the Email, SMS, AI, and Voice buckets and are generally non-refundable once consumed. WhatsApp and social sends do not use SpeedIQ credits. Unused monthly credits reset at the end of each cycle and do not roll over or carry a cash value.",
      },
      {
        type: "ul",
        items: [
          "Consumed credits cannot be refunded.",
          "Unused monthly credits expire at the end of the billing cycle.",
          "One-time top-ups and auto-top-up charges are non-refundable once the credits are added.",
        ],
      },
    ],
  },
  {
    heading: "Service issues",
    blocks: [
      {
        type: "p",
        text: "If a confirmed platform fault prevents you from using the Services for an extended period, we may issue credits or a pro-rata refund at our discretion. Reach out to support so we can investigate and make it right.",
      },
    ],
  },
  {
    heading: "How to request a refund",
    blocks: [
      {
        type: "p",
        text: "Email billing@speediq.ai from the address associated with your account, including your organization name and the reason for the request. Approved refunds are returned to your original payment method within 5–10 business days.",
      },
    ],
  },
];

export default function RefundPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Refund"
      accent="Policy."
      subtitle="When subscription fees and credits are refundable, and how to request a refund."
      updated="October 6, 2026"
      intro="This policy sets out how refunds work at SpeedIQ so there are no surprises around billing, credits, or cancellations."
      sections={sections}
      currentHref="/legal/refund"
    />
  );
}
