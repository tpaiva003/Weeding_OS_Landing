import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AudiencePage } from "@/components/audience-page";

export const metadata: Metadata = {
  title: "Wedding OS para quintas e espaços",
  description:
    "Coordena todos os eventos da tua quinta: fornecedores, mesas à medida da tua sala e o guião do dia. Dá mais valor a cada casamento que recebes.",
  keywords: [
    "software para quintas de casamento",
    "gestão de eventos quinta",
    "software para espaços de eventos",
    "gestão de quinta de eventos",
    "wedding venue software",
    "wedding venue management software",
    "event venue management",
    "venue booking and coordination software",
    "software para casas de eventos",
  ],
  alternates: { canonical: "/quintas" },
  openGraph: {
    title: "Wedding OS para quintas e espaços",
    description:
      "Todos os eventos da tua quinta sob controlo. Fornecedores, mesas à medida da tua sala e um dia sem falhas.",
    url: "/quintas",
    type: "website",
  },
};

export default function QuintasPage() {
  return (
    <>
      <SiteHeader />
      <AudiencePage segment="venue" />
      <SiteFooter />
    </>
  );
}
