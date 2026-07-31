"use client";

import { Reveal } from "./reveal";
import {
  IconGuests,
  IconSeating,
  IconSuppliers,
  IconBudget,
  IconCatering,
  IconDay,
  IconTasks,
  IconMusic,
  IconSpark,
} from "./icons";
import { useLang } from "./i18n";

const icons = [
  IconGuests,
  IconSeating,
  IconSuppliers,
  IconBudget,
  IconCatering,
  IconDay,
  IconTasks,
  IconMusic,
  IconSpark,
];

const COPY = {
  pt: {
    eyebrow: "Os módulos",
    title: "Os módulos essenciais, a trabalhar como um só.",
    intro:
      "Marca um pagamento como pago e a tarefa fecha. Confirma um convidado e o plano de mesas atualiza. Tudo ligado: sem copiar e colar. E com mais a chegar.",
    modules: [
      {
        title: "Convidados & RSVP",
        desc: "Famílias, convidados e confirmações num só lugar. Importa a tua lista, agrupa por família e vê quem confirmou em tempo real.",
        tag: "Famílias · confirmações",
      },
      {
        title: "Plano de mesas",
        desc: "Arrasta convidados para as mesas, cria templates do teu fornecedor, guarda versões e vê a sala tal como vai ficar no dia.",
        tag: "Drag & drop · versões",
      },
      {
        title: "Fornecedores & Pagamentos",
        desc: "Fases de pagamento (sinal, intercalar, final), plano mensal, contratos anexados e tarefas por fornecedor. Nunca mais falhas um prazo.",
        tag: "Plano €/mês · anexos",
      },
      {
        title: "Orçamento & P&L",
        desc: "Orçamento total, pago e por liquidar. Um verdadeiro balanço do casamento: quanto saiu, quanto entrou em prendas e o saldo final.",
        tag: "P&L · custo por convidado",
      },
      {
        title: "Catering & Restrições",
        desc: "Restrições alimentares recolhidas no RSVP, agregadas automaticamente e exportáveis em PDF para entregares ao catering.",
        tag: "Export PDF",
      },
      {
        title: "Controlo do Dia",
        desc: "O guião do dia, a equipa e os momentos-chave: tudo coordenado a partir do telemóvel, para correr sem sobressaltos.",
        tag: "Timeline · equipa",
      },
      {
        title: "Tarefas & Checklist",
        desc: "A lista de tudo o que falta fazer, com prazos e responsáveis. As tarefas ligam-se aos fornecedores e aos pagamentos, para nada ficar esquecido.",
        tag: "Prazos · responsáveis",
      },
      {
        title: "Música & Momentos",
        desc: "Escolhe as músicas para cada momento (entrada, primeira dança, festa) e partilha a lista com a banda ou o DJ. Uma lista de «não tocar» para não haver surpresas.",
        tag: "Playlist · banda/DJ",
      },
      {
        title: "E mais a chegar",
        desc: "Estamos a preparar novas funcionalidades para os convidados e para o grande dia. Revelamo-las numa demo, e algumas ganham vida depois do nosso próprio casamento.",
        tag: "Demo · em breve",
        highlight: true,
      },
    ],
  },
  en: {
    eyebrow: "The modules",
    title: "The essential modules, working as one.",
    intro:
      "Mark a payment as paid and the task closes. Confirm a guest and the seating plan updates. Everything connected: no copy-pasting. And with more on the way.",
    modules: [
      {
        title: "Guests & RSVP",
        desc: "Families, guests and confirmations in one place. Import your list, group by family and see who has confirmed in real time.",
        tag: "Families · confirmations",
      },
      {
        title: "Seating plan",
        desc: "Drag guests to tables, build templates from your venue, save versions and see the room exactly as it'll look on the day.",
        tag: "Drag & drop · versions",
      },
      {
        title: "Suppliers & Payments",
        desc: "Payment stages (deposit, interim, final), monthly plan, attached contracts and tasks per supplier. Never miss a deadline again.",
        tag: "Monthly plan · attachments",
      },
      {
        title: "Budget & P&L",
        desc: "Total budget, paid and outstanding. A real wedding balance sheet: what went out, what came in as gifts and the final balance.",
        tag: "P&L · cost per guest",
      },
      {
        title: "Catering & Dietary",
        desc: "Dietary needs collected at RSVP, aggregated automatically and exportable as a PDF to hand to your caterer.",
        tag: "PDF export",
      },
      {
        title: "Day-of Control",
        desc: "The run-of-show, the team and the key moments: all coordinated from your phone, so the day runs without a hitch.",
        tag: "Timeline · team",
      },
      {
        title: "Tasks & Checklist",
        desc: "The list of everything still to do, with deadlines and owners. Tasks link to suppliers and payments, so nothing slips through.",
        tag: "Deadlines · owners",
      },
      {
        title: "Music & Moments",
        desc: "Pick the songs for each moment (entrance, first dance, party) and share the list with your band or DJ. A «do-not-play» list so there are no surprises.",
        tag: "Playlist · band/DJ",
      },
      {
        title: "And more on the way",
        desc: "We're preparing new features for guests and for the big day. We reveal them in a demo, and some come to life after our own wedding.",
        tag: "Demo · coming soon",
        highlight: true,
      },
    ],
  },
};

export function Features() {
  const { lang } = useLang();
  const t = COPY[lang];

  return (
    <section id="modulos" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink-900 sm:text-[2.6rem]">
            {t.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-700">{t.intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.modules.map((m, i) => {
            const Icon = icons[i];
            const highlight = "highlight" in m && m.highlight;
            return (
              <Reveal
                as="article"
                key={m.title}
                delay={(i % 3) * 80}
                className={`group flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5 ${
                  highlight
                    ? "border-olive-700/40 bg-olive-900 text-ivory-50 shadow-[var(--glow-gold)]"
                    : "border-ivory-300/70 bg-surface-50 hover:border-olive-200 hover:shadow-[var(--shadow-soft)]"
                }`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    highlight
                      ? "bg-ivory-50/15 text-gold-400"
                      : "bg-olive-100 text-olive-700"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3
                  className={`mt-5 font-display text-xl font-semibold ${
                    highlight ? "text-ivory-50" : "text-ink-900"
                  }`}
                >
                  {m.title}
                </h3>
                <p
                  className={`mt-2.5 flex-1 text-sm leading-relaxed ${
                    highlight ? "text-ivory-100/90" : "text-ink-700"
                  }`}
                >
                  {m.desc}
                </p>
                <span
                  className={`mt-5 inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-medium ${
                    highlight
                      ? "bg-ivory-50/15 text-gold-400"
                      : "bg-ivory-200 text-olive-700"
                  }`}
                >
                  {m.tag}
                </span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
