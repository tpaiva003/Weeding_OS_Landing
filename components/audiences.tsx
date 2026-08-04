"use client";

import { Reveal } from "./reveal";
import { IconHeart, IconTeam, IconVenue, IconArrow } from "./icons";
import { useLang } from "./i18n";

/**
 * "For whom" section. Wedding OS sells to three audiences with different
 * jobs-to-be-done: couples (B2C), wedding planners and venues (B2B). Each
 * card routes to the right place — couples to the access form, planners and
 * venues to their dedicated pages.
 */
const icons = [IconHeart, IconTeam, IconVenue];

const COPY = {
  pt: {
    eyebrow: "Para quem é",
    title: "Feito para quem vive de casamentos.",
    intro:
      "Seja o vosso grande dia ou o vosso negócio, o Wedding OS adapta-se a quem está do outro lado.",
    cards: [
      {
        title: "Noivos",
        desc: "Planeiem o vosso casamento com calma: convidados, orçamento, fornecedores e mesas num só sítio. Menos administração, mais presença no grande dia.",
        cta: "Pedir acesso",
        href: "#acesso",
      },
      {
        title: "Wedding planners",
        desc: "Gere todos os teus casamentos num só sítio, com a tua equipa. Menos horas de admin por evento e uma imagem impecável perante os clientes.",
        cta: "Para wedding planners",
        href: "/wedding-planners",
      },
      {
        title: "Quintas & espaços",
        desc: "Coordena todos os eventos da tua quinta: fornecedores, mesas à medida da tua sala e um dia sem falhas. Dá mais valor a cada casamento que recebes.",
        cta: "Para quintas",
        href: "/quintas",
      },
    ],
  },
  en: {
    eyebrow: "Who it's for",
    title: "Built for everyone who lives and breathes weddings.",
    intro:
      "Whether it's your big day or your business, Wedding OS adapts to whoever is on the other side.",
    cards: [
      {
        title: "Couples",
        desc: "Plan your wedding calmly: guests, budget, suppliers and tables in one place. Less admin, more presence on the big day.",
        cta: "Request access",
        href: "#acesso",
      },
      {
        title: "Wedding planners",
        desc: "Run all your weddings in one place, with your team. Fewer admin hours per event and a flawless image in front of your clients.",
        cta: "For wedding planners",
        href: "/wedding-planners",
      },
      {
        title: "Venues & estates",
        desc: "Coordinate every event at your venue: suppliers, seating tailored to your room, and a flawless day. Add value to every wedding you host.",
        cta: "For venues",
        href: "/quintas",
      },
    ],
  },
};

export function Audiences() {
  const { lang } = useLang();
  const t = COPY[lang];

  return (
    <section id="para-quem" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink-900 sm:text-[2.6rem]">
            {t.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-700">{t.intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {t.cards.map((c, i) => {
            const Icon = icons[i];
            return (
              <Reveal
                as="article"
                key={c.title}
                delay={i * 90}
                className="group flex flex-col rounded-2xl border border-ivory-300/70 bg-surface-50 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-olive-200 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-olive-100 text-olive-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">
                  {c.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-700">
                  {c.desc}
                </p>
                <a
                  href={c.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-olive-700 transition-colors hover:text-olive-800"
                >
                  {c.cta}
                  <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
