import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "white",
          background: "linear-gradient(150deg, #084B7D 0%, #0A6FB8 65%, #38B6E8 100%)",
        }}
      >
        <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "#bfe8fa" }}>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 110, fontWeight: 800, lineHeight: 1 }}>{siteConfig.tagline}</div>
          <div style={{ fontSize: 36, marginTop: 24, opacity: 0.9 }}>{siteConfig.subline}</div>
        </div>
        <div style={{ display: "flex", gap: 24, fontSize: 34, fontWeight: 700 }}>
          <div style={{ background: "#F2762B", padding: "14px 28px", borderRadius: 999 }}>{siteConfig.phone.display}</div>
          <div style={{ padding: "14px 0" }}>Open 24/7 · 4.8 on Google</div>
        </div>
      </div>
    ),
    size,
  );
}
