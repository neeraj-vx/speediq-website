import { featureGroups, resourceItems } from "@/components/landing/nav-data";
import { LOGIN_URL, SIGN_UP_URL } from "@/lib/landing/links";

import { LogoMark } from "./icons";
import { Container } from "./primitives";

const legal = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Cookies", href: "/legal/cookies" },
  { label: "Acceptable use", href: "/legal/acceptable-use" },
  { label: "DPA", href: "/legal/dpa" },
  { label: "Refunds", href: "/legal/refund" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="/" className="inline-flex items-center gap-2.5 text-ink">
              <LogoMark className="h-6 w-auto" />
              <span className="font-display text-[19px] font-semibold tracking-tight">SpeedIQ</span>
            </a>
            <p className="mt-4 max-w-[300px] text-[14px] leading-[1.7] text-body">
              One inbox for WhatsApp, Instagram, Facebook, website chat, email, SMS and calls, with a CRM, booking, forms,
              campaigns and an AI assistant built in.
            </p>
            <p className="mt-4 text-[13px] text-muted">
              <a href="mailto:hello@speediq.ai" className="hover:text-ink">hello@speediq.ai</a>
            </p>
            <div className="mt-6 flex gap-2">
              <a href={SIGN_UP_URL} className="inline-flex h-9 items-center rounded-full bg-ink px-4 text-[13.5px] font-medium text-white hover:bg-accent">
                Get started
              </a>
              <a href={LOGIN_URL} className="inline-flex h-9 items-center rounded-full border border-line-strong px-4 text-[13.5px] font-medium text-ink hover:border-ink">
                Log in
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {featureGroups.map((group) => (
              <div key={group.label}>
                <h4 className="text-[13px] font-semibold text-ink">{group.label}</h4>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-[13.5px] text-body transition-colors hover:text-ink">{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h4 className="text-[13px] font-semibold text-ink">Company</h4>
              <ul className="mt-4 space-y-2.5">
                <li><a href="/product" className="text-[13.5px] text-body transition-colors hover:text-ink">Product</a></li>
                <li><a href="/pricing" className="text-[13.5px] text-body transition-colors hover:text-ink">Pricing</a></li>
                {resourceItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-[13.5px] text-body transition-colors hover:text-ink">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[12.5px] text-muted">
            {legal.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-ink">{l.label}</a>
              </li>
            ))}
          </ul>
          <p className="text-[12.5px] text-muted">© {new Date().getFullYear()} SpeedIQ Inc. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
