import { Reveal } from "./reveal";
import { IconReport, IconTasks, IconMusic, IconSpark } from "./icons";

/**
 * Operator-side AI: work the platform does behind the scenes (reading
 * contracts, proposing tasks, extracting songs). Deliberately NOT the
 * guest-facing AI (live translation, photo curation), which stays a
 * surprise until after the wedding.
 */
const items = [
  {
    icon: IconReport,
    title: "Contratos lidos por IA",
    desc: "Carrega o contrato do fornecedor e a IA extrai datas, valores e prazos de pagamento, prontos a entrar no orçamento e nas tarefas.",
  },
  {
    icon: IconTasks,
    title: "Tarefas sugeridas",
    desc: "A partir da fase em que estão, a IA propõe as próximas tarefas e prazos. Nunca ficam sem saber o que fazer a seguir.",
  },
  {
    icon: IconMusic,
    title: "Músicas sem copy-paste",
    desc: "A IA extrai as músicas das listas dos fornecedores e podem ouvi-las dentro da plataforma, sem andar a copiar e a colar de um lado para o outro.",
  },
];

export function Ai() {
  return (
    <section id="ia" className="scroll-mt-20 paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-olive-700/40 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-gold-400">
            <IconSpark className="h-3.5 w-3.5" />
            Inteligência artificial
          </span>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-ink-900 sm:text-[2.6rem]">
            A IA faz o trabalho chato por vós.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-700">
            Nos bastidores, o Wedding OS lê, organiza e adianta trabalho, para
            decidirem mais depressa e com muito menos esforço.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal
                as="article"
                key={it.title}
                delay={i * 80}
                className="flex flex-col rounded-2xl border border-olive-700/30 bg-olive-900 p-6 shadow-[var(--glow-gold)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ivory-50/10 text-gold-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ivory-50">
                  {it.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ivory-100/85">
                  {it.desc}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
