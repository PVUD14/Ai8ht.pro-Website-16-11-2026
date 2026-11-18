import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "AI8HT: Practical Technology for People and Organizations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/assets/ai8ht-logo-transparent-clean.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #ffffff 0%, #f5f9fd 55%, #dfe7ef 100%)",
          color: "#071827",
          fontFamily: "sans-serif"
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={330} height={160} alt="" style={{ objectFit: "contain" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.12, maxWidth: 1000 }}>
            Practical Technology for People and Organizations
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#495e6f" }}>
            Services and digital products for everyday progress
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", fontSize: 28, fontWeight: 600 }}>
          <div style={{ width: 56, height: 6, background: "#00a99d", marginRight: 18, borderRadius: 3 }} />
          ai8ht.pro
        </div>
      </div>
    ),
    size
  );
}
