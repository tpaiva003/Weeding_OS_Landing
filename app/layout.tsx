import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { StructuredData } from "@/components/structured-data";

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

const siteUrl = "https://weddingos.pt";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wedding OS: O sistema operativo do vosso casamento",
    template: "%s · Wedding OS",
  },
  description:
    "Convidados & RSVP, plano de mesas, fornecedores, orçamento, catering e um copiloto de IA que executa ações: tudo num só sítio. Do «sim» à última dança.",
  applicationName: "Wedding OS",
  keywords: [
    "planeamento de casamento",
    "gestão de convidados",
    "RSVP",
    "plano de mesas",
    "orçamento de casamento",
    "gestão de fornecedores casamento",
    "copiloto de IA casamento",
    "software de casamento",
    "wedding planner software",
    "Wedding OS",
  ],
  authors: [{ name: "Wedding OS" }],
  creator: "Wedding OS",
  publisher: "Wedding OS",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Wedding OS: O sistema operativo do vosso casamento",
    description:
      "Convidados, plano de mesas, fornecedores, orçamento, catering e um copiloto de IA: tudo num só sítio para planear, gerir e viver o casamento.",
    type: "website",
    locale: "pt_PT",
    url: siteUrl,
    siteName: "Wedding OS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding OS: O sistema operativo do vosso casamento",
    description:
      "Convidados, fornecedores, orçamento, catering e um copiloto de IA: tudo num só sítio.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
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
      <body className="min-h-full flex flex-col">
        <StructuredData />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
