import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.clara-tiago-4outubro2026.pt";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wedding OS: O sistema operativo do vosso casamento",
    template: "%s · Wedding OS",
  },
  description:
    "Convidados, orçamento, fornecedores, plano de mesas, convite digital e tradução ao vivo da cerimónia: tudo num só sítio. Do «sim» à última dança.",
  keywords: [
    "planeamento de casamento",
    "gestão de convidados",
    "RSVP",
    "plano de mesas",
    "orçamento de casamento",
    "convite digital",
    "tradução ao vivo cerimónia",
    "wedding planner software",
  ],
  authors: [{ name: "Wedding OS" }],
  openGraph: {
    title: "Wedding OS: O sistema operativo do vosso casamento",
    description:
      "Tudo o que precisam para planear, gerir e viver o dia do casamento: numa só plataforma.",
    type: "website",
    locale: "pt_PT",
    url: siteUrl,
    siteName: "Wedding OS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding OS: O sistema operativo do vosso casamento",
    description:
      "Convidados, fornecedores, orçamento, convite digital e tradução ao vivo: num só sítio.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-PT"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
