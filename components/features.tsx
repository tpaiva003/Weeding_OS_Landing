import { Reveal } from "./reveal";
import {
  IconGuests,
  IconSeating,
  IconSuppliers,
  IconBudget,
  IconCatering,
  IconDay,
  IconTasks,
  IconGift,
  IconSpark,
} from "./icons";

const modules = [
  {
    icon: IconGuests,
    title: "Convidados & RSVP",
    desc: "Famílias, convidados e confirmações num só lugar. Importa a tua lista, agrupa por família e vê quem confirmou em tempo real.",
    tag: "Famílias · confirmações",
  },
  {
    icon: IconSeating,
    title: "Plano de mesas",
    desc: "Arrasta convidados para as mesas, cria templates do teu fornecedor, guarda versões e vê a sala tal como vai ficar no dia.",
    tag: "Drag & drop · versões",
  },
  {
    icon: IconSuppliers,
    title: "Fornecedores & Pagamentos",
    desc: "Fases de pagamento (sinal, intercalar, final), plano mensal, contratos anexados e tarefas por fornecedor. Nunca mais falhas um prazo.",
    tag: "Plano €/mês · anexos",
  },
  {
    icon: IconBudget,
    title: "Orçamento & P&L",
    desc: "Orçamento total, pago e por liquidar. Um verdadeiro balanço do casamento: quanto saiu, quanto entrou em prendas e o saldo final.",
    tag: "P&L · custo por convidado",
  },
  {
    icon: IconCatering,
    title: "Catering & Restrições",
    desc: "Restrições alimentares recolhidas no RSVP, agregadas automaticamente e exportáveis em PDF para entregares ao catering.",
    tag: "Export PDF",
  },
  {
    icon: IconDay,
    title: "Controlo do Dia",
    desc: "O guião do dia, a equipa e os momentos-chave: tudo coordenado a partir do telemóvel, para correr sem sobressaltos.",
    tag: "Timeline · equipa",
  },
  {
    icon: IconTasks,
    title: "Tarefas & Checklist",
    desc: "A lista de tudo o que falta fazer, com prazos e responsáveis. As tarefas ligam-se aos fornecedores e aos pagamentos, para nada ficar esquecido.",
    tag: "Prazos · responsáveis",
  },
  {
    icon: IconGift,
    title: "Prendas & Gift Log",
    desc: "Regista as prendas recebidas e liga-as aos convidados. O saldo (prendas menos gastos) fica sempre à vista no balanço do casamento.",
    tag: "Saldo · por convidado",
  },
  {
    icon: IconSpark,
    title: "E mais a chegar",
    desc: "Estamos a preparar novas funcionalidades para os convidados e para o grande dia. Revelamo-las numa demo, e algumas ganham vida depois do nosso próprio casamento.",
    tag: "Demo · em breve",
    highlight: true,
  },
];

export function Features() {
  return (
    <section id="modulos" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">
            Os módulos
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink-900 sm:text-[2.6rem]">
            Os módulos essenciais, a trabalhar como um só.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-700">
            Marca um pagamento como pago e a tarefa fecha. Confirma um convidado
            e o plano de mesas atualiza. Tudo ligado: sem copiar e colar. E com
            mais a chegar.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => {
            const Icon = m.icon;
            return (
              <Reveal
                as="article"
                key={m.title}
                delay={(i % 3) * 80}
                className={`group flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5 ${
                  m.highlight
                    ? "border-olive-700/40 bg-olive-900 text-ivory-50 shadow-[var(--glow-gold)]"
                    : "border-ivory-300/70 bg-surface-50 hover:border-olive-200 hover:shadow-[var(--shadow-soft)]"
                }`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    m.highlight
                      ? "bg-ivory-50/15 text-gold-400"
                      : "bg-olive-100 text-olive-700"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3
                  className={`mt-5 font-display text-xl font-semibold ${
                    m.highlight ? "text-ivory-50" : "text-ink-900"
                  }`}
                >
                  {m.title}
                </h3>
                <p
                  className={`mt-2.5 flex-1 text-sm leading-relaxed ${
                    m.highlight ? "text-ivory-100/90" : "text-ink-700"
                  }`}
                >
                  {m.desc}
                </p>
                <span
                  className={`mt-5 inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-medium ${
                    m.highlight
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
