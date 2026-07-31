"use client";

import { Reveal } from "./reveal";
import { IconSpark } from "./icons";
import { useLang } from "./i18n";

/**
 * "A chegar" teaser. The couple is releasing Wedding OS ahead of their own
 * wedding, so upcoming guest-facing features are hinted at, not detailed,
 * and reserved for a live demo or after the big day.
 */
const COPY = {
  pt: {
    badge: "A chegar",
    title: "E há mais a caminho.",
    body: "Estamos a preparar novas funcionalidades que vamos revelar numa demo, e algumas ganham vida no dia certo, depois do nosso próprio casamento. Pede acesso e mostramos-te em primeira mão.",
    teasers: [
      "Experiências para os convidados no próprio dia",
      "Novidades pensadas para casamentos internacionais",
      "Memórias do casamento, reunidas automaticamente",
    ],
    cta: "Marcar uma demo",
  },
  en: {
    badge: "Coming soon",
    title: "And there's more on the way.",
    body: "We're preparing new features that we'll reveal in a demo, and some come to life at just the right moment, after our own wedding. Request access and we'll show you first-hand.",
    teasers: [
      "Experiences for guests on the day itself",
      "Features designed for international weddings",
      "Wedding memories, gathered automatically",
    ],
    cta: "Book a demo",
  },
};

export function Ceremony() {
  const { lang } = useLang();
  const t = COPY[lang];

  return (
    <section
      id="a-chegar"
      className="relative scroll-mt-20 overflow-hidden border-y border-ivory-300/60 bg-olive-900 text-ivory-50"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-olive-600/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-ivory-50/20 bg-ivory-50/10 px-3.5 py-1.5 text-xs font-medium text-gold-400">
            <IconSpark className="h-3.5 w-3.5" />
            {t.badge}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {t.title}
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ivory-100/90">
            {t.body}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <ul className="mx-auto mt-9 flex max-w-2xl flex-wrap justify-center gap-2.5">
            {t.teasers.map((teaser) => (
              <li
                key={teaser}
                className="rounded-full border border-ivory-50/12 bg-ivory-50/[0.05] px-4 py-2 text-[13px] font-medium text-ivory-100/90"
              >
                {teaser}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={300}>
          <a
            href="#acesso"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-olive-700 px-7 py-3.5 text-base font-semibold text-[#17130a] transition-colors hover:bg-olive-800"
          >
            {t.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
