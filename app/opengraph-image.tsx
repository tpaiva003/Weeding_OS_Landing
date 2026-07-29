import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Wedding OS — O sistema operativo do vosso casamento";

// Branded, self-contained OG image (no external assets/fonts).
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
          padding: "72px",
          background:
            "radial-gradient(1000px 600px at 20% -10%, #1a1712 0%, #0d0c11 55%, #0a0a0d 100%)",
          color: "#f3efe6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(160deg,#c9a34c,#8a6e33)",
              color: "#17130a",
              fontSize: "30px",
              fontWeight: 800,
            }}
          >
            W
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "30px",
              fontWeight: 700,
              letterSpacing: "0.02em",
            }}
          >
            <span>Wedding</span>
            <span style={{ color: "#c9a34c" }}>OS</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: "68px",
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: "900px",
            }}
          >
            <span>O sistema operativo do&nbsp;</span>
            <span style={{ color: "#c9a34c" }}>vosso casamento</span>
            <span>.</span>
          </div>
          <div style={{ fontSize: "30px", color: "#b9b3a6", maxWidth: "880px" }}>
            Convidados, plano de mesas, fornecedores, orçamento e um copiloto de
            IA. Tudo num só sítio.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "26px",
            color: "#8b857b",
          }}
        >
          <div style={{ color: "#c9a34c", fontWeight: 600 }}>weddingos.pt</div>
          <div>Feito por um casal, para casais</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
