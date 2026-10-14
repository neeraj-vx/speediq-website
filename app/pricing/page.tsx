import { pageMeta } from "@/lib/landing/seo";
import { FAQ, PageHero } from "@/components/site/blocks";
import { Eyebrow } from "@/components/site/primitives";
import PricingCalculator, { type CreditTypeOption } from "@/components/landing/PricingCalculator";
import { formatMoney } from "@/lib/pricing/config";
import { countryName } from "@/lib/pricing/country-credits";
import { PRICING } from "@/lib/pricing/data";

/** "4 credits · $0.11" — credits a send burns and what that costs at the credit price. */
function creditCell(credits: number | null, creditCents: number): string {
  if (credits == null) return "—";
  const usd = (credits * creditCents) / 100;
  return `${credits} credit${credits === 1 ? "" : "s"} · ${formatMoney(usd, "usd", { minFractionDigits: 3, maxFractionDigits: 3 })}`;
}

export const metadata = pageMeta(
  "Pricing",
  "Fixed monthly plans with separate credit buckets and no per-seat fees. Credits fund SMS, voice, email, and AI; WhatsApp and social DMs do not use SpeedIQ credits.",
  "/pricing",
);

const faqs = [
  {
    q: "How does billing work?",
    a: "You pay a fixed monthly subscription for your plan. It unlocks that plan's channels, features and limits, and includes separate monthly credit buckets. There are no per-seat fees, and the plan's member limit still applies.",
  },
  {
    q: "What do credits pay for?",
    a: "Each channel has its own credit bucket. Email and AI cost 1 credit per task: 1 per email sent, 1 per AI action (CRM auto-reply, the WhatsApp AI agent, inbox AI assist, and 1 per verified prospecting lead). SMS and voice credits cover a US or Canada SMS segment or call minute; other countries cost more to reach, so a send there uses a few credits (see the table above). Your plan includes a monthly allotment of each bucket and you can top up any of them any time.",
  },
  {
    q: "How are WhatsApp and social messages billed?",
    a: "SpeedIQ does not deduct credits for WhatsApp or social DMs. WhatsApp, Instagram and Facebook run through your connected platform accounts, so each platform's own eligibility rules and terms still apply.",
  },
  {
    q: "Which currency will I be billed in?",
    a: "Everything is priced and charged in US dollars (USD), plans and credit top-ups alike. International cards are accepted, and your bank handles any conversion.",
  },
  {
    q: "What happens if I run out of credits?",
    a: "SMS, voice, email, and AI actions pause when their bucket is empty until you top up or renew. WhatsApp and social do not draw from SpeedIQ credit buckets, but connected platform limits and provider terms still apply.",
  },
  {
    q: "Can I change plans anytime?",
    a: "Yes, from Billing in the app. An upgrade applies right away: you pay the prorated difference and get the bigger plan's credits for the rest of the cycle. A downgrade applies from your next billing cycle.",
  },
  {
    q: "Do unused credits roll over?",
    a: "Included monthly credits reset each cycle so pricing stays predictable. Top-up credits you buy separately don't expire while your subscription is active.",
  },
];

export default function PricingPage() {
  // Plans, credit prices and the country rate card are a static snapshot of the
  // app's pricing tables (content/pricing.json) — this site has no database.
  const { tiers, creditTypes: creditTypeConfigs, countryRates } = PRICING;
  // Per-bucket top-up rates for the estimator (email/sms/ai/voice).
  const creditTypes: CreditTypeOption[] = creditTypeConfigs
    .filter((c) => c.active)
    .map((c) => ({
      credit_type: c.credit_type,
      credit_value_usd_cents: c.credit_value_usd_cents,
      min_topup: c.min_topup,
      topup_step: c.topup_step,
    }));
  const centsOf = (type: string) => creditTypeConfigs.find((c) => c.credit_type === type)?.credit_value_usd_cents ?? 0;
  const smsCents = centsOf("sms");
  const voiceCents = centsOf("voice");
  // Consumption rates for the flat-rate channels.
  const emailCredits = PRICING.emailCredits;
  const aiCredits = PRICING.aiCredits;

  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title="A plan that's perfect for you."
        lede="A fixed monthly plan unlocks your channels and features and includes a pool of credits. No lock-in, cancel anytime, and no per-seat charges; plan member limits apply. All prices are in US dollars."
        primary={null}
        compact
      />

      {/* Fixed tier cards + feature comparison + credit top-up estimator */}
      <PricingCalculator tiers={tiers} creditTypes={creditTypes} />

      {/* Credit costs */}
      <div className="w-full pb-16 sm:pb-24">
        <div className="mx-auto w-full max-w-site px-5 sm:px-8">
          <div className="flex w-full flex-col overflow-hidden rounded-[28px] bg-mist-2 sm:rounded-[34px]">
            <div className="border-b border-mist-line px-6 py-12 sm:px-8 lg:p-14">
              <Eyebrow>How credits work</Eyebrow>
              <h2 className="mt-5 max-w-xl font-display text-[32px] font-light leading-[1.1] tracking-[-0.02em] text-ink sm:text-[40px]">
                One bucket per channel.
              </h2>
              <p className="mt-4 max-w-[560px] text-[14px] leading-[1.7] text-muted">
                SMS, Voice, Email and AI each have their own credit bucket. An email or an AI action is
                1 credit. An SMS or voice credit covers one US or Canada SMS segment or call minute;
                other countries cost more to reach, so a send there uses a few credits. Your plan
                includes a monthly allotment of each bucket, and you can top up any of them any time.
              </p>
            </div>

            {/* Per-country SMS/Voice consumption */}
            <div className="px-6 py-10 sm:px-8 lg:p-12">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[440px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-mist-line">
                      <th className="pb-3 pr-4 text-[12px] font-semibold uppercase tracking-wide text-muted">
                        Country
                      </th>
                      <th className="px-4 pb-3 text-[12px] font-semibold uppercase tracking-wide text-muted">
                        SMS{" "}
                        <span className="font-normal normal-case tracking-normal text-faint">
                          (per segment)
                        </span>
                      </th>
                      <th className="pl-4 pb-3 text-[12px] font-semibold uppercase tracking-wide text-muted">
                        Voice{" "}
                        <span className="font-normal normal-case tracking-normal text-faint">
                          (per minute)
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {countryRates.map((r) => (
                      <tr key={r.country} className="border-b border-mist-line last:border-b-0">
                        <td className="py-3.5 pr-4 text-[14px] font-medium text-ink">{countryName(r.country)}</td>
                        <td className="px-4 py-3.5 text-[15px] font-semibold tracking-tight text-ink">
                          {creditCell(r.sms, smsCents)}
                        </td>
                        <td className="py-3.5 pl-4 text-[15px] font-semibold tracking-tight text-ink">
                          {creditCell(r.voice, voiceCents)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-[12px] leading-[1.7] text-muted">
                A long SMS is sent in segments (160 characters each, or 70 with emoji or non-Latin
                text). Calls are billed per started minute. Countries not listed use the highest rate
                shown.
              </p>
            </div>

            {/* Flat-rate channels (Email, AI) + non-credit social note */}
            <div className="grid grid-cols-1 border-t border-mist-line sm:grid-cols-3">
              <div className="px-6 py-8 sm:px-8 lg:p-12">
                <div className="text-[13px] text-muted">Email</div>
                <div className="mt-1 font-display text-[28px] font-light tracking-[-0.02em] text-ink">
                  {emailCredits} credit{emailCredits === 1 ? "" : "s"}
                </div>
                <p className="mt-2 max-w-sm text-[13px] leading-[1.7] text-muted">
                  One email credit per email sent, to any inbox worldwide.
                </p>
              </div>
              <div className="border-t border-mist-line px-6 py-8 sm:border-l sm:border-t-0 sm:px-8 lg:p-12">
                <div className="text-[13px] text-muted">AI</div>
                <div className="mt-1 font-display text-[28px] font-light tracking-[-0.02em] text-ink">
                  {aiCredits} credit{aiCredits === 1 ? "" : "s"}
                </div>
                <p className="mt-2 max-w-sm text-[13px] leading-[1.7] text-muted">
                  One AI credit per AI action — CRM auto-reply, the WhatsApp AI agent and inbox AI
                  assist. Prospecting &amp; deep research cost 1 AI credit per verified lead.
                </p>
              </div>
              <div className="border-t border-mist-line px-6 py-8 sm:border-l sm:border-t-0 sm:px-8 lg:p-12">
                <div className="text-[13px] text-muted">WhatsApp &amp; social DMs</div>
                <div className="mt-1 font-display text-[28px] font-light tracking-[-0.02em] text-ink">
                  0 credits
                </div>
                <p className="mt-2 max-w-sm text-[13px] leading-[1.7] text-muted">
                  SpeedIQ does not deduct credits for these sends. Connection, eligibility, and any
                  platform or provider terms remain separate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQ items={faqs} title="Questions, answered." />

    </main>
  );
}
