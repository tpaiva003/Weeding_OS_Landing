"use client";

import { Reveal } from "./reveal";
import { useLang } from "./i18n";

/**
 * Origin story: Wedding OS was born from a real couple planning their own
 * wedding. Founder-market fit builds trust right after the Problem section
 * and before the modules. Told first-person and name-free by choice.
 */
const COPY = {
  pt: {
    eyebrow: "A nossa história",
    title: "Nasceu de um casamento a sério. O nosso.",
    p1: {
      a: "Somos um casal. Conhecemo-nos na escola e estamos juntos ",
      since: "desde 2012",
      mid3:
        ". Quando decidimos casar, cheios de vontade, poucas semanas depois estávamos afogados em listas. Percebemos cedo que planear um casamento não é um evento: são ",
      decisions: "centenas de pequenas decisões",
      end: " e tarefas a competir com a nossa vida.",
    },
    p2a:
      "Convidados, mesas, menus, alergias, fornecedores, pagamentos. E ainda família e amigos que vinham de fora e não falavam português. Cada tarefa vivia numa app diferente, cada decisão exigia abrir cinco separadores. Passávamos mais tempo a ",
    manage: "gerir",
    p2b: " o nosso casamento do que a ",
    savor: "saboreá-lo",
    p2c: ".",
    p3a:
      "Então construímos aquilo que gostávamos de ter tido desde o início: um sistema que junta tudo, fala com os convidados por nós e nos devolve o que mais importa: ",
    present: "estar presentes no nosso próprio dia",
    p3b: ". Chamámos-lhe Wedding OS. E agora é vosso também.",
    signature: "Os fundadores do Wedding OS",
    role: "Casam a 4 de Outubro de 2026, na Quinta da Pedra Salgada",
    quote:
      "O problema nunca foi falta de amor. Era falta de um sítio só para tudo o que tínhamos de decidir.",
    stats: [
      { n: "2012", l: "juntos desde então" },
      { n: "300+", l: "decisões num casamento" },
      { n: "1", l: "plataforma para tudo" },
    ],
  },
  en: {
    eyebrow: "Our story",
    title: "Born from a real wedding. Ours.",
    p1: {
      a: "We're a couple. We met at school and have been together ",
      since: "since 2012",
      mid3:
        ". When we decided to get married, full of excitement, a few weeks later we were drowning in lists. We realised early that planning a wedding isn't an event: it's ",
      decisions: "hundreds of small decisions",
      end: " and tasks competing with our lives.",
    },
    p2a:
      "Guests, tables, menus, allergies, suppliers, payments. And family and friends coming from abroad who didn't speak Portuguese. Each task lived in a different app, each decision meant opening five tabs. We spent more time ",
    manage: "managing",
    p2b: " our wedding than ",
    savor: "savouring",
    p2c: " it.",
    p3a:
      "So we built what we wished we'd had from the start: a system that brings everything together, talks to the guests for us, and gives us back what matters most: ",
    present: "being present on our own day",
    p3b: ". We called it Wedding OS. And now it's yours too.",
    signature: "The founders of Wedding OS",
    role: "Marrying on 4 October 2026, at Quinta da Pedra Salgada",
    quote:
      "The problem was never a lack of love. It was the lack of one place for everything we had to decide.",
    stats: [
      { n: "2012", l: "together ever since" },
      { n: "300+", l: "decisions in a wedding" },
      { n: "1", l: "platform for it all" },
    ],
  },
};

export function Story() {
  const { lang } = useLang();
  const t = COPY[lang];
  const p1 = t.p1;

  return (
    <section id="historia" className="scroll-mt-20 paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* narrative */}
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">
              {t.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink-900 sm:text-[2.6rem]">
              {t.title}
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-700">
              <p>
                {p1.a}
                <span className="font-medium text-ink-900">{p1.since}</span>
                {p1.mid3}
                <span className="font-medium text-ink-900">{p1.decisions}</span>
                {p1.end}
              </p>
              <p>
                {t.p2a}
                <span className="italic">{t.manage}</span>
                {t.p2b}
                <span className="italic">{t.savor}</span>
                {t.p2c}
              </p>
              <p>
                {t.p3a}
                <span className="font-medium text-ink-900">{t.present}</span>
                {t.p3b}
              </p>
            </div>

            <div className="mt-8">
              <p className="font-display text-2xl italic text-olive-700">
                {t.signature}
              </p>
              <p className="mt-1 text-sm text-ink-500">{t.role}</p>
            </div>
          </Reveal>

          {/* quote / signal card */}
          <Reveal delay={140}>
            <figure className="relative rounded-3xl border border-olive-700/30 bg-olive-900 p-8 text-ivory-50 shadow-[var(--glow-gold)] sm:p-10">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-9 w-9 text-gold-400"
                fill="currentColor"
              >
                <path d="M9.5 6C6.5 7.5 5 10 5 13v5h5v-6H7.8c0-2 .9-3.6 2.9-4.6L9.5 6Zm9 0c-3 1.5-4.5 4-4.5 7v5h5v-6h-2.2c0-2 .9-3.6 2.9-4.6L18.5 6Z" />
              </svg>
              <blockquote className="mt-5 font-display text-2xl font-medium leading-snug sm:text-[1.7rem]">
                {t.quote}
              </blockquote>

              <figcaption className="mt-8 grid grid-cols-3 gap-4 border-t border-ivory-50/15 pt-6">
                {t.stats.map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-2xl font-semibold text-ivory-50">
                      {s.n}
                    </div>
                    <div className="mt-1 text-xs text-ivory-100/80">{s.l}</div>
                  </div>
                ))}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
