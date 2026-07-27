import { Reveal } from "./reveal";
import { IconSpark, IconCheck, IconArrow } from "./icons";
import { ChatbotMock } from "./mockups";

/**
 * Operator-side AI: a copiloto that discusses and executes actions in the
 * wedding cockpit, plus the behind-the-scenes work (reading contracts,
 * proposing tasks, extracting songs). Deliberately NOT the guest-facing
 * AI (live translation, photo curation), which stays a surprise.
 */
const points = [
  "Executa ações por comando: marca pagamentos, cria tarefas, atualiza mesas.",
  "Lê os contratos dos fornecedores e extrai datas, valores e prazos.",
  "Sugere as próximas tarefas conforme a fase em que estão.",
  "Extrai as músicas das listas dos fornecedores, prontas a ouvir na plataforma.",
];

export function Ai() {
  return (
    <section id="ia" className="scroll-mt-20 paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-olive-700/40 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-gold-400">
              <IconSpark className="h-3.5 w-3.5" />
              Inteligência artificial
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-ink-900 sm:text-[2.7rem]">
              Fala com o teu casamento.
              <br />
              Ele trata do resto.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-700">
              Um copiloto que percebe o vosso casamento e{" "}
              <span className="font-medium text-ink-900">executa ações</span> no
              cockpit por comando. Faz as perguntas certas, e o trabalho chato
              acontece sozinho.
            </p>

            <ul className="mt-7 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-ink-800">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[15px] leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>

            <a
              href="#acesso"
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-olive-700 px-7 py-3.5 text-base font-semibold text-[#17130a] transition-colors hover:bg-olive-800"
            >
              Pedir acesso
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Reveal>

          <Reveal delay={140}>
            <div className="relative">
              <ChatbotMock />
              <div
                aria-hidden
                className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-olive-700/20"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
