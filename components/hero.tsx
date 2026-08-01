"use client";

import { Reveal } from "./reveal";
import { DashboardMock, PhoneInvite } from "./mockups";
import { IconArrow } from "./icons";
import { useLang } from "./i18n";

const COPY = {
  pt: {
    badge: "Uma plataforma. Todo o casamento.",
    line1a: "Planeiem o ",
    line1word: "casamento",
    line1b: ".",
    line2: "Nós tratamos do trabalho chato.",
    leadA: "Convidados, orçamento, fornecedores e plano de mesas ",
    leadStrong: "num só sítio",
    leadB:
      ", com um copiloto de IA que executa as tarefas por vocês. Menos separadores, mais presença.",
    ctaPrimary: "Pedir acesso antecipado",
    ctaSecondary: "Ver os módulos",
    microcopy: "Grátis para os primeiros casais · 2 minutos, sem compromisso.",
    madeBy: "Feito por um casal que está mesmo a casar.",
    tags: ["Módulos integrados", "Tudo ligado entre si", "Pensado para o telemóvel"],
  },
  en: {
    badge: "One platform. The whole wedding.",
    line1a: "Plan the ",
    line1word: "wedding",
    line1b: ".",
    line2: "We'll handle the boring bits.",
    leadA: "Guests, budget, suppliers and seating plan ",
    leadStrong: "in one place",
    leadB:
      ", with an AI copilot that runs the tasks for you. Fewer tabs, more presence.",
    ctaPrimary: "Request early access",
    ctaSecondary: "See the modules",
    microcopy: "Free for the first couples · 2 minutes, no commitment.",
    madeBy: "Built by a couple who are actually getting married.",
    tags: ["Integrated modules", "Everything connected", "Built for mobile"],
  },
};

export function Hero() {
  const { lang } = useLang();
  const t = COPY[lang];

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
              <span className="inline-flex items-center gap-2 rounded-full border border-olive-200/70 bg-white/[0.05] px-3.5 py-1.5 text-xs font-medium text-olive-700">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                {t.badge}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl">
                {t.line1a}
                <span className="relative whitespace-nowrap text-olive-700">
                  {t.line1word}
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
                {t.line1b}
                <br />
                {t.line2}
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-700">
                {t.leadA}
                <span className="font-medium text-ink-900">{t.leadStrong}</span>
                {t.leadB}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#acesso"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-olive-700 px-7 py-3.5 text-base font-semibold text-[#17130a] shadow-[var(--shadow-soft)] transition-colors hover:bg-olive-800"
                >
                  {t.ctaPrimary}
                  <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#modulos"
                  className="inline-flex items-center justify-center rounded-full border border-olive-700/40 bg-white/[0.04] px-7 py-3.5 text-base font-semibold text-ink-900 transition-colors hover:bg-white/[0.08]"
                >
                  {t.ctaSecondary}
                </a>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-4 text-sm text-ink-500">{t.microcopy}</p>
            </Reveal>

            <Reveal delay={340}>
              <p className="mt-5 flex items-center gap-2 text-sm font-medium italic text-olive-700">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                {t.madeBy}
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-500">
                {t.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-olive-500" />
                    {tag}
                  </span>
                ))}
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
