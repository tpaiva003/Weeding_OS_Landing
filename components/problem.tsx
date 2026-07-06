import { Reveal } from "./reveal";

const chaos = [
  "Folhas de Excel dispersas",
  "RSVPs perdidos no WhatsApp",
  "Pagamentos a fornecedores esquecidos",
  "Plano de mesas em papel",
  "Restrições alimentares em post-its",
  "Convites de papel que ninguém confirma",
];

export function Problem() {
  return (
    <section className="border-y border-ivory-300/60 bg-ivory-50">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">
              O problema
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink-900 sm:text-[2.6rem]">
              Planear um casamento é gerir vinte ferramentas ao mesmo tempo.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-700">
              A informação vive em sítios diferentes, nada fala entre si, e a
              meio do caminho perde-se o controlo do orçamento e de quem vem.
              O <span className="font-medium text-olive-700">Wedding OS</span>{" "}
              junta tudo numa única plataforma, e faz cada parte comunicar com
              as outras.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <ul className="grid gap-3 sm:grid-cols-2">
                {chaos.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 rounded-xl border border-ivory-300/70 bg-ivory-100 px-4 py-3.5 text-sm text-ink-700"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f0e3df] text-[#9a4b3f]">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      >
                        <path d="M6 6l12 12M18 6L6 18" />
                      </svg>
                    </span>
                    <span className="line-through decoration-ink-500/30">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-center gap-3 rounded-xl border border-olive-200 bg-olive-50 px-4 py-4 text-center">
                <span className="font-display text-lg font-semibold text-olive-800">
                  Um só sítio, do início ao fim.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
