import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/constants";

export const alt = "Nexoral Systems | open-source software you can run yourself";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#17191c";
const MUTED = "#575d64";
const PAPER = "#f4f5f2";
const ACCENT = "#2450d6";

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
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: 26, height: 26, background: ACCENT, borderRadius: 7 }} />
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: "-0.01em" }}>
            {SITE_CONFIG.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: "-0.025em",
              maxWidth: "940px",
            }}
          >
            Software you can run yourself.
          </div>
          <div style={{ fontSize: 30, color: MUTED, maxWidth: "900px" }}>
            Open-source infrastructure and developer tools, led by AxioDB.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: MUTED,
          }}
        >
          <span>nexoral.in</span>
          <span>MIT · GPL-3.0</span>
        </div>
      </div>
    ),
    size
  );
}
