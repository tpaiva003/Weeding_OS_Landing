import { Reveal } from "./reveal";

/**
 * Origin story: Wedding OS was born from a real couple, Clara & Tiago,
 * planning their own wedding. Founder-market fit builds trust right after
 * the Problem section and before the modules.
 */
export function Story() {
  return (
    <section id="historia" className="scroll-mt-20 paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* narrative */}
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">
              A nossa história
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink-900 sm:text-[2.6rem]">
              Nasceu de um casamento a sério. O nosso.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-700">
              <p>
                Somos a{" "}
                <span className="font-medium text-olive-700">Clara</span> e o{" "}
                <span className="font-medium text-olive-700">Tiago</span>.
                Ficámos noivos cheios de vontade e, poucas semanas depois,
                afogados em listas. Percebemos cedo que planear um casamento não
                é um evento: são{" "}
                <span className="font-medium text-ink-900">
                  centenas de pequenas decisões
                </span>{" "}
                e tarefas a competir com a nossa vida.
              </p>
              <p>
                Convidados, mesas, menus, alergias, fornecedores, pagamentos,
                família que vinha de fora e não falava português. Cada tarefa
                vivia numa app diferente, cada decisão exigia abrir cinco
                separadores. Passávamos mais tempo a{" "}
                <span className="italic">gerir</span> o nosso casamento do que a{" "}
                <span className="italic">saboreá-lo</span>.
              </p>
              <p>
                Então construímos aquilo que gostávamos de ter tido desde o
                início: um sistema que junta tudo, fala com os convidados por
                nós e nos devolve o que mais importa —{" "}
                <span className="font-medium text-ink-900">
                  estar presentes no nosso próprio dia
                </span>
                . Chamámos-lhe Wedding&nbsp;OS. E agora é vosso também.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-display text-2xl italic text-olive-700">
                Clara &amp; Tiago
              </p>
              <p className="mt-1 text-sm text-ink-500">
                Fundadores · casam a 4 de Outubro de 2026, na Quinta da Pedra
                Salgada
              </p>
            </div>
          </Reveal>

          {/* quote / signal card */}
          <Reveal delay={140}>
            <figure className="relative rounded-3xl border border-olive-300/40 bg-olive-700 p-8 text-ivory-50 shadow-[var(--shadow-lift)] sm:p-10">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-9 w-9 text-gold-400"
                fill="currentColor"
              >
                <path d="M9.5 6C6.5 7.5 5 10 5 13v5h5v-6H7.8c0-2 .9-3.6 2.9-4.6L9.5 6Zm9 0c-3 1.5-4.5 4-4.5 7v5h5v-6h-2.2c0-2 .9-3.6 2.9-4.6L18.5 6Z" />
              </svg>
              <blockquote className="mt-5 font-display text-2xl font-medium leading-snug sm:text-[1.7rem]">
                O problema nunca foi falta de amor. Era falta de um sítio só para
                tudo o que tínhamos de decidir.
              </blockquote>

              <figcaption className="mt-8 grid grid-cols-3 gap-4 border-t border-ivory-50/15 pt-6">
                <div>
                  <div className="font-display text-2xl font-semibold text-ivory-50">
                    300+
                  </div>
                  <div className="mt-1 text-xs text-ivory-100/80">
                    decisões num casamento
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-semibold text-ivory-50">
                    9
                  </div>
                  <div className="mt-1 text-xs text-ivory-100/80">
                    módulos, um só sítio
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-semibold text-ivory-50">
                    1
                  </div>
                  <div className="mt-1 text-xs text-ivory-100/80">
                    dia para viver, não gerir
                  </div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
