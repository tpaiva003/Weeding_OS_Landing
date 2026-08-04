import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AudiencePage } from "@/components/audience-page";

export const metadata: Metadata = {
  title: "Wedding OS para wedding planners",
  description:
    "Gere todos os teus casamentos num só sistema: convidados, orçamento, fornecedores, mesas, equipa e um copiloto de IA. Menos horas de admin por evento.",
  alternates: { canonical: "/wedding-planners" },
  openGraph: {
    title: "Wedding OS para wedding planners",
    description:
      "Todos os teus casamentos num só sistema. Menos horas de admin por evento, equipa alinhada e clientes impressionados.",
    url: "/wedding-planners",
    type: "website",
  },
};

export default function WeddingPlannersPage() {
  return (
    <>
      <SiteHeader />
      <AudiencePage segment="planner" />
      <SiteFooter />
    </>
  );
}
