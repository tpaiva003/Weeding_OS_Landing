import { faqs } from "./faq-data";

/**
 * JSON-LD structured data. Invisible to users, but read by search engines
 * (rich results / knowledge panel) and by AI models when describing the
 * product. No visual impact.
 */
const SITE_URL = "https://weddingos.pt";
const INSTAGRAM_URL = "https://instagram.com/weddingos.pt";

export function StructuredData() {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Wedding OS",
      url: SITE_URL,
      logo: `${SITE_URL}/icon`,
      slogan: "O sistema operativo do vosso casamento.",
      description:
        "Wedding OS é o sistema operativo do casamento: convidados e RSVP, plano de mesas, fornecedores e pagamentos, orçamento, catering e um copiloto de IA que executa ações. Nasceu do casamento do seu fundador, Tiago.",
      email: "tiago.paiva@weddingos.pt",
      sameAs: [INSTAGRAM_URL],
      founder: [{ "@type": "Person", name: "Tiago" }],
      areaServed: "PT",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Wedding OS",
      inLanguage: "pt-PT",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: "Wedding OS",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Wedding planning software",
      operatingSystem: "Web",
      url: SITE_URL,
      inLanguage: "pt-PT",
      screenshot: `${SITE_URL}/opengraph-image`,
      audience: {
        "@type": "Audience",
        audienceType: "Noivos, wedding planners e quintas",
      },
      description:
        "Plataforma de planeamento de casamento: convidados & RSVP, plano de mesas, fornecedores & pagamentos, orçamento & P&L, catering & restrições, controlo do dia, música e um copiloto de IA que lê contratos, sugere tarefas e executa ações.",
      featureList: [
        "Convidados & RSVP",
        "Plano de mesas",
        "Fornecedores & pagamentos",
        "Orçamento & P&L",
        "Catering & restrições",
        "Controlo do dia",
        "Tarefas & checklist",
        "Música & momentos",
        "Copiloto de IA",
        "Equipa & permissões",
        "Relatórios & exportações",
        "Privacidade & RGPD",
      ],
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/wedding-planners#webpage`,
      url: `${SITE_URL}/wedding-planners`,
      name: "Wedding OS para wedding planners",
      inLanguage: "pt-PT",
      description:
        "Gere todos os teus casamentos num só sistema: convidados, orçamento, fornecedores, mesas, equipa e um copiloto de IA. Menos horas de admin por evento.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#software` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/quintas#webpage`,
      url: `${SITE_URL}/quintas`,
      name: "Wedding OS para quintas e espaços",
      inLanguage: "pt-PT",
      description:
        "Coordena todos os eventos da tua quinta: fornecedores, mesas à medida da tua sala e o guião do dia. Dá mais valor a cada casamento que recebes.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#software` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  const json = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; no user input is included.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
