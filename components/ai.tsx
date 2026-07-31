"use client";

import { Reveal } from "./reveal";
import { IconSpark, IconCheck, IconArrow } from "./icons";
import { ChatbotMock } from "./mockups";
import { useLang } from "./i18n";

/**
 * Operator-side AI: a copiloto that discusses and executes actions in the
 * wedding cockpit, plus the behind-the-scenes work (reading contracts,
 * proposing tasks, extracting songs). Deliberately NOT the guest-facing
 * AI (live translation, photo curation), which stays a surprise.
 */
const COPY = {
  pt: {
    badge: "Inteligência artificial",
    titleA: "Fala com o teu casamento.",
    titleB: "Ele trata do resto.",
    bodyA: "Um copiloto que percebe o vosso casamento e ",
    bodyStrong: "executa ações",
    bodyB:
      " no cockpit por comando. Faz as perguntas certas, e o trabalho chato acontece sozinho.",
    cta: "Pedir acesso",
    points: [
      "Executa ações por comando: marca pagamentos, cria tarefas, atualiza mesas.",
      "Lê os contratos dos fornecedores e extrai datas, valores e prazos.",
      "Sugere as próximas tarefas conforme a fase em que estão.",
      "Extrai as músicas das listas dos fornecedores, prontas a ouvir na plataforma.",
    ],
  },
  en: {
    badge: "Artificial intelligence",
    titleA: "Talk to your wedding.",
    titleB: "It handles the rest.",
    bodyA: "A copilot that understands your wedding and ",
    bodyStrong: "executes actions",
    bodyB:
      " in the cockpit on command. Ask the right questions, and the tedious work happens on its own.",
    cta: "Request access",
    points: [
      "Executes actions on command: marks payments, creates tasks, updates tables.",
      "Reads supplier contracts and extracts dates, amounts and deadlines.",
      "Suggests the next tasks based on the stage you're in.",
      "Extracts songs from supplier lists, ready to play inside the platform.",
    ],
  },
};

export function Ai() {
  const { lang } = useLang();
  const t = COPY[lang];

  return (
    <section id="ia" className="scroll-mt-20 paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-olive-700/40 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-gold-400">
              <IconSpark className="h-3.5 w-3.5" />
              {t.badge}
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-ink-900 sm:text-[2.7rem]">
              {t.titleA}
              <br />
              {t.titleB}
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-700">
              {t.bodyA}
              <span className="font-medium text-ink-900">{t.bodyStrong}</span>
              {t.bodyB}
            </p>

            <ul className="mt-7 space-y-3">
              {t.points.map((p) => (
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
              {t.cta}
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
