import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — Wachstumspartner für B2B-Tech & Robotics`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** OG-Image: Wortmarke zentriert auf Ink, Markenverlauf als Akzentlinie */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A18",
          color: "#FAFAFC",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: 6,
          }}
        >
          LEVERISE
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: 22,
            color: "#A7ABC0",
          }}
        >
          GROWTH PARTNERS
        </div>
        <div
          style={{
            marginTop: 48,
            width: 420,
            height: 4,
            borderRadius: 2,
            backgroundImage: "linear-gradient(90deg, #2C13E3, #09DBFE)",
          }}
        />
        <div
          style={{
            marginTop: 48,
            fontSize: 28,
            color: "#A7ABC0",
          }}
        >
          Wachstumspartner für B2B-Tech &amp; Robotics
        </div>
      </div>
    ),
    { ...size }
  );
}
