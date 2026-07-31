"use client";

import { Reveal } from "./reveal";
import { IconTeam, IconReport, IconShield } from "./icons";
import { useLang } from "./i18n";

/**
 * Operator-side depth that builds trust — all already available in the
 * product back-office. Deliberately excludes anything guest-facing, to
 * keep the wedding-day experience a surprise.
 */
const icons = [IconTeam, IconReport, IconShield];

const COPY = {
  pt: {
    eyebrow: "Nos bastidores",
    title: "A parte séria, tratada a sério.",
    intro:
      "Por trás da calma do grande dia está uma plataforma robusta: organizada, exportável e cuidadosa com os vossos dados.",
    items: [
      {
        title: "Equipa & permissões",
        desc: "Convida coordenadores e ajudantes e dá a cada um acesso só ao que precisa. Papéis e permissões página a página, sem partilhar palavras-passe.",
      },
      {
        title: "Relatórios & exportações",
        desc: "Catering em PDF, plano de pagamentos em CSV, custo por convidado e o balanço final. Números prontos a entregar a quem precisa deles.",
      },
      {
        title: "Privacidade & RGPD",
        desc: "Dados alojados na Europa e tratados com cuidado. Informação sensível é apagada automaticamente depois do casamento. A tua lista é sempre tua.",
      },
    ],
  },
  en: {
    eyebrow: "Backstage",
    title: "The serious part, handled seriously.",
    intro:
      "Behind the calm of the big day sits a robust platform: organised, exportable and careful with your data.",
    items: [
      {
        title: "Team & permissions",
        desc: "Invite coordinators and helpers and give each one access only to what they need. Roles and permissions page by page, without sharing passwords.",
      },
      {
        title: "Reports & exports",
        desc: "Catering as PDF, payment plan as CSV, cost per guest and the final balance. Numbers ready to hand to whoever needs them.",
      },
      {
        title: "Privacy & GDPR",
        desc: "Data hosted in Europe and handled with care. Sensitive information is deleted automatically after the wedding. Your list is always yours.",
      },
    ],
  },
};

export function Backstage() {
  const { lang } = useLang();
  const t = COPY[lang];

  return (
    <section
      id="bastidores"
      className="scroll-mt-20 border-y border-ivory-300/60 bg-surface-50"
    >
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

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((it, i) => {
            const Icon = icons[i];
            return (
              <Reveal
                as="article"
                key={it.title}
                delay={i * 80}
                className="flex flex-col rounded-2xl border border-ivory-300/70 bg-olive-900/40 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-olive-200"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-olive-100 text-olive-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">
                  {it.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-700">
                  {it.desc}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
