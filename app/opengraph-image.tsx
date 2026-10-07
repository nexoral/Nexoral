import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/constants";

export const alt = "Nexoral Systems — free and open-source infrastructure tools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LOGO = "https://avatars.githubusercontent.com/u/230163045?s=200&v=4";

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
          background: "#ffffff",
          padding: "72px",
          color: "#0a0a0a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <img src={LOGO} width={64} height={64} alt="" style={{ borderRadius: "16px" }} />
          <div style={{ fontSize: "36px", fontWeight: 600 }}>{SITE_CONFIG.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: "64px", fontWeight: 700, lineHeight: 1.1, maxWidth: "900px" }}>
            Free, open-source infrastructure tools
          </div>
          <div style={{ fontSize: "28px", color: "#52525b", maxWidth: "880px" }}>
            DNS · embedded databases · developer tooling — built for everyone.
          </div>
        </div>

        <div style={{ fontSize: "24px", color: "#71717a" }}>nexoral.in</div>
      </div>
    ),
    size
  );
}
