import { Reveal } from "./reveal";
import { DashboardMock, PhoneInvite } from "./mockups";
import { IconArrow } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden paper">
      {/* soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-olive-100/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* copy */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-olive-200/70 bg-ivory-50/70 px-3.5 py-1.5 text-xs font-medium text-olive-700">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                Uma plataforma. Todo o casamento.
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl">
                O sistema operativo
                <br />
                do vosso{" "}
                <span className="relative whitespace-nowrap text-olive-700">
                  casamento
                  <svg
                    aria-hidden
                    viewBox="0 0 200 12"
                    className="absolute -bottom-1.5 left-0 w-full text-gold-400"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 8c40-5 158-5 196 0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-700">
                Convidados, orçamento, fornecedores, plano de mesas, convite
                digital e{" "}
                <span className="font-medium text-ink-900">
                  tradução ao vivo da cerimónia
                </span>{" "}
               : tudo num só sítio. Do «sim» à última dança.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#acesso"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-olive-700 px-7 py-3.5 text-base font-semibold text-ivory-50 shadow-[var(--shadow-soft)] transition-colors hover:bg-olive-800"
                >
                  Pedir acesso antecipado
                  <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#modulos"
                  className="inline-flex items-center justify-center rounded-full border border-olive-200 bg-ivory-50/60 px-7 py-3.5 text-base font-semibold text-olive-800 transition-colors hover:bg-ivory-50"
                >
                  Ver os módulos
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-500">
                <span className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-olive-500" />
                  9 módulos integrados
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-olive-500" />
                  Convite digital incluído
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-olive-500" />
                  Pensado para o telemóvel
                </span>
              </div>
            </Reveal>
          </div>

          {/* visual */}
          <Reveal delay={200} className="relative">
            {/* mobile: the phone reads cleanly on a small screen */}
            <div className="flex justify-center sm:hidden">
              <PhoneInvite />
            </div>
            {/* sm and up: dashboard with the phone as an accent */}
            <div className="relative hidden sm:block">
              <DashboardMock />
              <div className="absolute -bottom-8 -right-2 w-[140px] rotate-[4deg] lg:-right-6 lg:w-[150px]">
                <PhoneInvite />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
