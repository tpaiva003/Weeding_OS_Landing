"use client";

import { Reveal } from "./reveal";
import { IconArrow, IconCheck } from "./icons";
import { DashboardMock, SeatingMock } from "./mockups";
import { useLang } from "./i18n";

/**
 * Dedicated B2B landing page body, shared by /wedding-planners and /quintas.
 * Each segment gets its own pain, benefits and a CTA that lands on the access
 * form with the profile preselected (?perfil=…).
 */
export type Segment = "planner" | "venue";

const COPY = {
  pt: {
    planner: {
      eyebrow: "Para wedding planners",
      h1a: "Todos os teus casamentos, ",
      h1word: "num só sistema",
      h1b: ".",
      sub: "Cada evento organizado ao detalhe, a tua equipa a par de tudo e clientes que confiam em ti. O Wedding OS trata da parte administrativa para te concentrares no que só tu fazes: criar dias memoráveis.",
      perfil: "planner",
      benefits: [
        "Cada casamento no seu espaço, com convidados, orçamento, fornecedores e mesas ligados entre si.",
        "A tua equipa com acessos por papel, sem partilhar palavras-passe nem perder o controlo.",
        "Relatórios e exportações prontos a entregar ao cliente: catering em PDF, pagamentos em CSV.",
        "Um copiloto de IA que lê contratos, sugere tarefas e executa ações, e te devolve horas em cada evento.",
      ],
      valueTitle: "Menos horas em admin. Mais casamentos, geridos com folga.",
      valueBody:
        "Imagina fechar a semana sem prazos esquecidos nem mil separadores abertos. É essa folga que te deixa aceitar mais casamentos sem abdicar da qualidade que te distingue.",
    },
    venue: {
      eyebrow: "Para quintas & espaços",
      h1a: "Todos os eventos da tua quinta, ",
      h1word: "sob controlo",
      h1b: ".",
      sub: "Fornecedores, mesas à medida da tua sala e o guião do dia, tudo alinhado. Dá a cada casal uma experiência impecável e transforma cada evento na tua melhor recomendação.",
      perfil: "quinta",
      benefits: [
        "Templates de mesas à medida da tua sala, prontos a reutilizar em cada evento.",
        "Fornecedores, pagamentos e prazos de cada evento organizados num só sítio.",
        "Guião do dia e equipa coordenados a partir do telemóvel, para tudo correr sem falhas.",
        "Relatórios e exportações que simplificam a coordenação com catering e parceiros.",
      ],
      valueTitle: "Mais valor em cada casamento que recebes.",
      valueBody:
        "Uma quinta que corre sem falhas fica na memória, e nas recomendações. Oferece aos noivos uma experiência à altura do teu espaço e deixa o boca a boca fazer o resto.",
    },
    benefitsEyebrow: "Porquê o Wedding OS",
    proof: "Feito por quem já viveu o caos de organizar um casamento.",
    ctaPrimary: "Pedir acesso",
    ctaSecondary: "Ver os módulos",
    bandTitle: "Vamos mostrar-te por dentro.",
    bandBody:
      "Pede acesso antecipado. Respondemos pessoalmente e mostramos-te como o Wedding OS encaixa no teu dia a dia.",
    bandReassurance: "Sem compromisso. Respondemos pessoalmente.",
  },
  en: {
    planner: {
      eyebrow: "For wedding planners",
      h1a: "All your weddings, ",
      h1word: "in one system",
      h1b: ".",
      sub: "Every event organised down to the detail, your team on the same page and clients who trust you. Wedding OS handles the admin so you can focus on what only you do: creating memorable days.",
      perfil: "planner",
      benefits: [
        "Every wedding in its own space, with guests, budget, suppliers and tables connected.",
        "Your team with role-based access, without sharing passwords or losing control.",
        "Reports and exports ready to hand to the client: catering as PDF, payments as CSV.",
        "An AI copilot that reads contracts, suggests tasks and runs actions, giving you hours back on every event.",
      ],
      valueTitle: "Less time on admin. More weddings, run with ease.",
      valueBody:
        "Picture closing the week with no missed deadlines and no thousand tabs open. That ease is what lets you take on more weddings without giving up the quality that sets you apart.",
    },
    venue: {
      eyebrow: "For venues & estates",
      h1a: "Every event at your venue, ",
      h1word: "under control",
      h1b: ".",
      sub: "Suppliers, seating tailored to your room and the run-of-show, all aligned. Give every couple a flawless experience and turn each event into your best recommendation.",
      perfil: "quinta",
      benefits: [
        "Seating templates tailored to your room, ready to reuse for every event.",
        "Suppliers, payments and deadlines for each event organised in one place.",
        "Run-of-show and team coordinated from your phone, so everything runs without a hitch.",
        "Reports and exports that make coordinating with catering and partners easy.",
      ],
      valueTitle: "More value in every wedding you host.",
      valueBody:
        "A venue that runs flawlessly stays in the memory, and in the recommendations. Give couples an experience worthy of your space and let word of mouth do the rest.",
    },
    benefitsEyebrow: "Why Wedding OS",
    proof: "Built by people who've lived the chaos of planning a wedding.",
    ctaPrimary: "Request access",
    ctaSecondary: "See the modules",
    bandTitle: "Let us show you the inside.",
    bandBody:
      "Request early access. We reply personally and show you how Wedding OS fits your day to day.",
    bandReassurance: "No commitment. We reply personally.",
  },
};

export function AudiencePage({ segment }: { segment: Segment }) {
  const { lang } = useLang();
  const t = COPY[lang];
  const s = t[segment];
  const accessHref = `/?perfil=${s.perfil}#acesso`;

  return (
    <main id="top" className="flex-1">
      {/* hero */}
      <section className="relative overflow-hidden paper">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-olive-100/50 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-olive-200/70 bg-white/[0.05] px-3.5 py-1.5 text-xs font-medium text-olive-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  {s.eyebrow}
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 font-display text-[2.4rem] font-semibold leading-[1.06] tracking-tight text-ink-900 sm:text-5xl">
                  {s.h1a}
                  <span className="relative whitespace-nowrap text-olive-700">
                    {s.h1word}
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
                  {s.h1b}
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-700">
                  {s.sub}
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={accessHref}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-olive-700 px-7 py-3.5 text-base font-semibold text-[#17130a] shadow-[var(--shadow-soft)] transition-colors hover:bg-olive-800"
                  >
                    {t.ctaPrimary}
                    <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="/#modulos"
                    className="inline-flex items-center justify-center rounded-full border border-olive-700/40 bg-white/[0.04] px-7 py-3.5 text-base font-semibold text-ink-900 transition-colors hover:bg-white/[0.08]"
                  >
                    {t.ctaSecondary}
                  </a>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <p className="mt-5 flex items-center gap-2 text-sm font-medium italic text-olive-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  {t.proof}
                </p>
              </Reveal>
            </div>

            <Reveal delay={200} className="relative">
              {segment === "planner" ? <DashboardMock /> : <SeatingMock />}
            </Reveal>
          </div>
        </div>
      </section>

      {/* benefits */}
      <section className="border-y border-ivory-300/60 bg-surface-50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">
              {t.benefitsEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink-900 sm:text-[2.4rem]">
              {s.valueTitle}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              {s.valueBody}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {s.benefits.map((b, i) => (
              <Reveal
                as="article"
                key={b}
                delay={(i % 2) * 90}
                className="flex items-start gap-3 rounded-2xl border border-ivory-300/70 bg-surface-100 p-6"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                <p className="text-[15px] leading-relaxed text-ink-800">{b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* cta band */}
      <section className="paper">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="rounded-3xl border border-olive-700/30 bg-olive-900 p-8 text-center text-ivory-50 shadow-[var(--glow-gold)] sm:p-12">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
              {t.bandTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ivory-100/90">
              {t.bandBody}
            </p>
            <a
              href={accessHref}
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-olive-700 px-7 py-3.5 text-base font-semibold text-[#17130a] transition-colors hover:bg-olive-800"
            >
              {t.ctaPrimary}
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <p className="mt-4 text-sm text-ivory-100/70">{t.bandReassurance}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
