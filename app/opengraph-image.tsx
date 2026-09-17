import { ImageResponse } from "next/og";
import { clinica } from "@/content/clinica";

export const alt = `${clinica.nome} — dentista em Gurupi, TO`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b4038",
          color: "#f2f4f1",
          padding: "68px 72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#f2f4f1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0b4038",
              fontSize: 34,
            }}
          >
            ⌣
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, letterSpacing: -0.5 }}>{clinica.nome}</span>
            <span style={{ fontSize: 19, color: "#bdd2c9" }}>
              Gurupi, Tocantins
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span style={{ fontSize: 68, lineHeight: 1.06, letterSpacing: -1.6 }}>
            {clinica.hero.titulo}
          </span>
          <span style={{ fontSize: 27, color: "#bdd2c9", maxWidth: 900 }}>
            {clinica.endereco.linha1} · {clinica.endereco.bairro} ·{" "}
            {clinica.telefoneExibicao}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            borderTop: "1px solid #234b43",
            paddingTop: 26,
            fontSize: 24,
            color: "#bdd2c9",
          }}
        >
          <span style={{ color: "#d99a0b" }}>★★★★★</span>
          <span>
            {clinica.google.nota.toLocaleString("pt-BR")} de média em{" "}
            {clinica.google.avaliacoes} avaliações no Google
          </span>
        </div>
      </div>
    ),
    size,
  );
}
