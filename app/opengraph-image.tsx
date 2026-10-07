import { ImageResponse } from "next/og";

export const alt = "SpeedIQ, one inbox for connected channels, CRM and lead workflows";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// SpeedIQ logo mark, rendered white for the dark OG background.
const LOGO_MARK =
  "M239.482 0.348289L114.082 0.608379L23.9201 112.704C-8.23713 152.685 -7.9415 209.739 24.6283 249.384C68.4223 302.691 150.222 302.034 193.154 248.03L319.313 89.3327L332.87 89.3046L332.87 101.999L188.503 289.663L312.209 289.406L408.209 165.226L407.58 -1.3369e-05L266.596 0.292406L121.046 183.381C116.816 188.702 108.739 188.719 104.487 183.415C101.392 179.555 101.381 174.068 104.459 170.195L239.482 0.348289Z";
const LOGO_URI = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 409 290'><path d='${LOGO_MARK}' fill='white'/></svg>`,
)}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "84px",
          background: "linear-gradient(135deg, #0a1422 0%, #0e1f33 55%, #12283f 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO_URI} width={52} height={37} alt="" />
          <div style={{ fontSize: 26, letterSpacing: 6, color: "rgba(255,255,255,0.7)" }}>
            SPEEDIQ
          </div>
        </div>
        <div
          style={{
            marginTop: 34,
            fontSize: 72,
            fontWeight: 600,
            lineHeight: 1.08,
            maxWidth: 940,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          One inbox for WhatsApp,&nbsp;
          <span style={{ color: "#60a5fa" }}>Email &amp; SMS</span>
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: 30,
            color: "rgba(255,255,255,0.55)",
            maxWidth: 800,
          }}
        >
          Campaigns, automations, and CRM reporting across connected channels, no per-seat fees.
        </div>
      </div>
    ),
    { ...size },
  );
}
