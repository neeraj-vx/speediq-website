import path from "node:path";
import type { NextConfig } from "next";

// The product app lives on its own host. Anything that looks like an app URL on
// the marketing domain is forwarded there so old links and muscle memory keep
// working (speediq.ai/dashboard → app.speediq.ai/dashboard).
const APP_URL = (process.env.NEXT_PUBLIC_APP_URL?.trim() || "https://app.speediq.ai").replace(/\/+$/, "");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Next 16 auto-writes AGENTS.md / CLAUDE.md into the repo root on boot; keep the repo clean.
  agentRules: false,
  // This site may sit inside another checkout during development; pin the
  // workspace root so Turbopack never picks up a parent lockfile or middleware.
  turbopack: {
    root: path.resolve(__dirname),
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  async redirects() {
    const to = (source: string, destination: string) => ({ source, destination, permanent: false });
    return [
      to("/auth/:path*", `${APP_URL}/auth/:path*`),
      to("/dashboard", `${APP_URL}/dashboard`),
      to("/dashboard/:path*", `${APP_URL}/dashboard/:path*`),
      to("/login", `${APP_URL}/auth/login`),
      to("/signup", `${APP_URL}/auth/register`),
      to("/register", `${APP_URL}/auth/register`),
    ];
  },
};

export default nextConfig;
