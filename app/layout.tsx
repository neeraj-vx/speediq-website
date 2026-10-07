import type { ReactNode } from "react";

import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";

import { EmbedChat } from "@/components/landing/EmbedChat";
import RevealObserver from "@/components/landing/RevealObserver";
import { SITE_URL } from "@/lib/landing/site";

import "./globals.css";

// Body type.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

// Fallback for the display font while Google Sans Flex loads.
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

// Display font — Google Sans Flex, self-hosted so it renders identically on
// every OS. Variable weight axis 300..700; headings use it at weight 400.
const googleSansFlex = localFont({
  src: "./fonts/google-sans-flex.woff2",
  variable: "--font-google-sans-flex",
  weight: "300 700",
  style: "normal",
  display: "swap",
  fallback: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
});

const TITLE = "SpeedIQ – WhatsApp & Email Marketing Platform";
const DESCRIPTION =
  "SpeedIQ puts WhatsApp, Instagram, Facebook, website chat, email, SMS and calls in one inbox, with a CRM and an AI agent built in.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | SpeedIQ",
  },
  description: DESCRIPTION,
  applicationName: "SpeedIQ",
  keywords: [
    "WhatsApp marketing",
    "WhatsApp Business API",
    "Email marketing",
    "SMS marketing",
    "Unified inbox",
    "Customer messaging platform",
    "WhatsApp broadcasts",
    "Bulk SMS",
    "Two-way SMS",
  ],
  authors: [{ name: "SpeedIQ" }],
  creator: "SpeedIQ",
  publisher: "SpeedIQ",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    siteName: "SpeedIQ",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@speediq",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

/*
 * Everything renders inside the `.speediq-landing` scope: the marketing styling
 * (blue accent, Google Sans Flex / Inter type, gradients, reveal animations)
 * lives under that class in globals.css.
 */
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${plusJakarta.variable} ${inter.variable} ${googleSansFlex.variable} min-h-screen antialiased`}>
        <div className="speediq-landing min-h-screen">
          {children}
          <RevealObserver />
          <EmbedChat />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
