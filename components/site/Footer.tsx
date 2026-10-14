import { featureGroups, resourceItems } from "@/components/landing/nav-data";
import { LOGIN_URL, SIGN_UP_URL } from "@/lib/landing/links";

import { LogoMark } from "./icons";
import { CircleLink } from "./pills";
import { Container } from "./primitives";

const legal = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Cookies", href: "/legal/cookies" },
  { label: "Acceptable use", href: "/legal/acceptable-use" },
  { label: "DPA", href: "/legal/dpa" },
  { label: "Refunds", href: "/legal/refund" },
];

/* The footer is a single rounded white card on the paper background. */
export default function Footer() {
  return (
    <footer className="pb-6 pt-4 sm:pb-8">
      <Container>
        <div className="rounded-[28px] bg-white p-6 ring-1 ring-mist-line sm:rounded-[34px] sm:p-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <a href="/" className="inline-flex items-center gap-2.5 text-ink">
                <LogoMark className="h-6 w-auto" />
                <span className="font-display text-[20px] font-medium tracking-tight">SpeedIQ</span>
              </a>
              <p className="mt-4 max-w-[300px] text-[14px] leading-[1.7] text-body">
                One inbox for WhatsApp, Instagram, Facebook, website chat, email, SMS and calls, with a CRM, booking, forms,
                campaigns and an AI assistant built in.
              </p>
              <p className="mt-4 text-[13px] text-muted">
                <a href="mailto:hello@speediq.ai" className="hover:text-ink">hello@speediq.ai</a>
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <CircleLink href={SIGN_UP_URL} size="sm">
                  Get started
                </CircleLink>
                <a href={LOGIN_URL} className="text-[14.5px] font-medium text-body transition-colors hover:text-ink">
                  Log in
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
              {featureGroups.map((group) => (
                <div key={group.label}>
                  <h4 className="text-[13.5px] font-normal text-muted">{group.label}</h4>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-[14.5px] font-medium text-ink transition-colors hover:text-accent">{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div>
                <h4 className="text-[13.5px] font-normal text-muted">Company</h4>
                <ul className="mt-4 space-y-2.5">
                  <li><a href="/product" className="text-[14.5px] font-medium text-ink transition-colors hover:text-accent">Product</a></li>
                  <li><a href="/pricing" className="text-[14.5px] font-medium text-ink transition-colors hover:text-accent">Pricing</a></li>
                  {resourceItems.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-[14.5px] font-medium text-ink transition-colors hover:text-accent">{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[12.5px] text-muted">
              {legal.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-ink">{l.label}</a>
                </li>
              ))}
            </ul>
            <p className="text-[12.5px] text-muted">© {new Date().getFullYear()} SpeedIQ Inc. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
