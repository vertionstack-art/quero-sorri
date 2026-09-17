import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
          background: "#0b4038",
          color: "#f2f4f1",
          fontSize: 40,
          fontFamily: "Georgia, serif",
          borderRadius: 14,
        }}
      >
        Q
      </div>
    ),
    size,
  );
}
