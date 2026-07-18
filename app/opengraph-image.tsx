import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — Ihr Wachstumspartner für B2B-Tech & Robotic`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#111111",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 6,
          }}
        >
          R&amp;F CONSULTING
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            Ihr Wachstumspartner für B2B-Tech & Robotic
          </div>
          <div style={{ fontSize: 28, color: "#71717a", maxWidth: 880 }}>
            Sichtbarkeit · Direktansprache · Vertriebsstruktur — DACH
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #e4e4e7",
            paddingTop: 32,
            fontSize: 22,
            color: "#71717a",
          }}
        >
          <div>Qualifizierte B2B-Termine. Quellenverifiziert.</div>
          <div>{siteConfig.url.replace("https://", "")}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
