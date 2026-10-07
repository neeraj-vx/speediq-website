import Script from "next/script";

import { APP_URL } from "@/lib/landing/site";

/**
 * Optional live-chat bubble. The site has no backend of its own, so this just
 * drops in the SpeedIQ embed script the way any customer website would, keyed
 * by NEXT_PUBLIC_SPEEDIQ_CHAT_KEY. Unset (the default) renders nothing and the
 * site makes no runtime calls to the app.
 */
export function EmbedChat() {
  const key = process.env.NEXT_PUBLIC_SPEEDIQ_CHAT_KEY?.trim();
  if (!key) return null;
  return <Script src={`${APP_URL}/embed/chat.js`} data-key={key} strategy="lazyOnload" />;
}
