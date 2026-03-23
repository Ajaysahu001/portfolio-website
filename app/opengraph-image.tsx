import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const runtime = "edge";

export const alt = `${siteConfig.name} — Front-end Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#050505",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "rgba(99,102,241,0.25)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(6,182,212,0.15)",
            filter: "blur(80px)",
          }}
        />

        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.06) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 20px",
            background: "rgba(99,102,241,0.15)",
            border: "1px solid rgba(99,102,241,0.3)",
            borderRadius: 40,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#a78bfa",
            }}
          />
          <span style={{ color: "#a78bfa", fontSize: 18, fontWeight: 600 }}>
            Available for Opportunities
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 90,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1,
            marginBottom: 20,
            letterSpacing: "-3px",
          }}
        >
          Ajay Sahu
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 500,
            background: "linear-gradient(90deg,#818cf8,#a78bfa,#22d3ee)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 32,
          }}
        >
          Front-end Developer · React.js & Next.js
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.5)",
            maxWidth: 800,
            lineHeight: 1.6,
            marginBottom: 60,
          }}
        >
          2+ years building high-performance web apps · Redux · TypeScript · Tailwind CSS
        </div>

        {/* Tech pills row */}
        <div style={{ display: "flex", gap: 12 }}>
          {["React.js", "Next.js", "TypeScript", "Redux", "Tailwind CSS"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: "8px 20px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 40,
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>

        {/* Bottom site URL */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            color: "rgba(255,255,255,0.2)",
            fontSize: 20,
            fontWeight: 500,
          }}
        >
          ajaysahu.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
