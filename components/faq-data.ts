/**
 * Shared FAQ data — used by the FAQ section (both languages) and by the
 * FAQPage structured data (JSON-LD) for SEO / AI discoverability. The
 * structured data uses the Portuguese set, matching the page's default
 * server-rendered language.
 */
export type Faq = { q: string; a: string };

export const faqsByLang: Record<"pt" | "en", Faq[]> = {
  pt: [
    {
      q: "Que módulos estão disponíveis já?",
      a: "No lançamento tens convidados & RSVP, plano de mesas, fornecedores & pagamentos, orçamento & P&L, catering & restrições e o controlo do dia, todos ligados entre si.",
    },
    {
      q: "Há mais funcionalidades a caminho?",
      a: "Sim. Estamos a preparar novidades, algumas pensadas para os convidados e para o próprio dia, que revelamos numa demo. Outras ganham vida depois do nosso casamento. Pede acesso e mostramos-te o que aí vem.",
    },
    {
      q: "Posso importar a minha lista de convidados?",
      a: "Sim. Podes importar famílias e convidados de uma vez, em vez de os adicionares um a um. Depois é só organizar por família, idade e mesa.",
    },
    {
      q: "Os fornecedores e os pagamentos ligam-se às tarefas?",
      a: "Ligam. Cada fornecedor tem as suas fases de pagamento e tarefas. Um pagamento por liquidar aparece como tarefa aberta: marca-o como pago num sítio e fecha automaticamente no outro.",
    },
    {
      q: "Funciona bem no telemóvel?",
      a: "Foi pensado para o telemóvel. A plataforma é instalável como aplicação (PWA) e o controlo do dia do casamento faz-se todo a partir do telemóvel, otimizado para o ecrã pequeno.",
    },
    {
      q: "Preciso de conhecimentos técnicos?",
      a: "Não. Tudo funciona no browser, sem instalações. Se souberes usar uma folha de cálculo, sabes usar o Wedding OS: com muito menos esforço.",
    },
  ],
  en: [
    {
      q: "Which modules are available now?",
      a: "At launch you get guests & RSVP, seating plan, suppliers & payments, budget & P&L, catering & dietary needs and day-of control, all connected to each other.",
    },
    {
      q: "Are more features on the way?",
      a: "Yes. We're preparing new things, some designed for guests and for the day itself, that we reveal in a demo. Others come to life after our own wedding. Request access and we'll show you what's coming.",
    },
    {
      q: "Can I import my guest list?",
      a: "Yes. You can import families and guests in one go, instead of adding them one by one. Then just organise by family, age and table.",
    },
    {
      q: "Do suppliers and payments link to tasks?",
      a: "They do. Each supplier has its own payment stages and tasks. An outstanding payment shows up as an open task: mark it paid in one place and it closes automatically in the other.",
    },
    {
      q: "Does it work well on mobile?",
      a: "It was built for mobile. The platform is installable as an app (PWA) and the wedding-day control is run entirely from your phone, optimised for the small screen.",
    },
    {
      q: "Do I need technical skills?",
      a: "No. Everything runs in the browser, with nothing to install. If you can use a spreadsheet, you can use Wedding OS: with far less effort.",
    },
  ],
};

// Portuguese set kept as the default export for the JSON-LD structured data.
export const faqs: Faq[] = faqsByLang.pt;
