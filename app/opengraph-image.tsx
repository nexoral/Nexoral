import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/constants";

export const alt = "Nexoral Systems | High-Performance Systems & Cloud Edge Infrastructure";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#f1f5f9";
const MUTED = "#94a3b8";
const PAPER = "#07080c";
const ACCENT = "#3b82f6";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: "76px",
          color: INK,
          fontFamily: "sans-serif",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: 28, height: 28, background: ACCENT, borderRadius: 8 }} />
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: "-0.01em" }}>
            {SITE_CONFIG.name}
          </div>
          <div style={{ fontSize: 18, color: ACCENT, marginLeft: 12, background: "rgba(59,130,246,0.15)", padding: "4px 12px", borderRadius: 12 }}>
            Incorporated 2025 · Udyam MSME
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: 74,
              fontWeight: 700,
              lineHeight: 1.06,
              letterSpacing: "-0.025em",
              maxWidth: "1000px",
            }}
          >
            High-Performance Systems & Cloud Edge Infrastructure.
          </div>
          <div style={{ fontSize: 28, color: MUTED, maxWidth: "940px" }}>
            Serverless Edge Routing (EdgeBalancer) & Embedded Databases (AxioDB).
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: MUTED,
          }}
        >
          <span>nexoral.in</span>
          <span>Dual-Engine: Open-Core + Managed Cloud</span>
        </div>
      </div>
    ),
    size
  );
}
