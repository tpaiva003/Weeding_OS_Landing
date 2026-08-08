import { ImageResponse } from "next/og";

// Brand favicon: the Wedding OS "W" monogram on a champagne-gold tile.
export const size = { width: 48, height: 48 };
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
          background: "linear-gradient(160deg,#c9a34c,#8a6e33)",
          color: "#17130a",
          fontSize: 30,
          fontWeight: 800,
          fontFamily: "sans-serif",
          borderRadius: 11,
        }}
      >
        W
      </div>
    ),
    { ...size }
  );
}
