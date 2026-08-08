import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Wedding OS",
    short_name: "Wedding OS",
    description:
      "O sistema operativo do casamento: convidados, plano de mesas, fornecedores, orçamento, catering e um copiloto de IA. Num só sítio.",
    start_url: "/",
    display: "standalone",
    lang: "pt-PT",
    background_color: "#0d0c11",
    theme_color: "#0d0c11",
    categories: ["business", "productivity", "lifestyle"],
    icons: [
      { src: "/icon", sizes: "48x48", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
