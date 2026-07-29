/**
 * Shared FAQ data — used by the FAQ section and by the FAQPage
 * structured data (JSON-LD) for SEO / AI discoverability.
 */
export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
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
];
