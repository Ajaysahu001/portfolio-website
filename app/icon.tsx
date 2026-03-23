import { ImageResponse } from "next/og";

export const runtime = "edge";

export const sizes = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
          borderRadius: "6px",
          fontFamily: "system-ui, sans-serif",
          fontWeight: 900,
          fontSize: 16,
          color: "#ffffff",
          letterSpacing: "-0.5px",
        }}
      >
        AS
      </div>
    ),
    { ...sizes }
  );
}
