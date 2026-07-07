"use client";

import { useState } from "react";

const faqs = [
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

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-ivory-300/70">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg font-semibold text-ink-900">
          {q}
        </span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-olive-200 text-olive-700 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl text-[15px] leading-relaxed text-ink-700">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-20 border-t border-ivory-300/60">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">
            Perguntas frequentes
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink-900 sm:text-[2.6rem]">
            Ainda com dúvidas?
          </h2>
        </div>
        <div className="mt-12">
          {faqs.map((f, i) => (
            <FaqItem
              key={f.q}
              q={f.q}
              a={f.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
