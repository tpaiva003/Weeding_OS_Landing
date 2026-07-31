"use client";

import { Reveal } from "./reveal";
import { useLang } from "./i18n";

const COPY = {
  pt: {
    eyebrow: "Como funciona",
    title: "Do primeiro convidado à última dança.",
    steps: [
      {
        n: "01",
        title: "Importa os convidados",
        desc: "Traz a tua lista de famílias e convidados de uma vez. Organiza por família, idade e mesa.",
      },
      {
        n: "02",
        title: "Monta orçamento e fornecedores",
        desc: "Adiciona fornecedores, fases de pagamento e prazos. O orçamento e o plano mensal montam-se sozinhos.",
      },
      {
        n: "03",
        title: "Recolhe as confirmações",
        desc: "Partilha o link de confirmação e as respostas e restrições alimentares entram direto na plataforma, em tempo real.",
      },
      {
        n: "04",
        title: "Vive o dia",
        desc: "No próprio dia, controla o guião e a equipa a partir do telemóvel, e deixa o resto connosco.",
      },
    ],
  },
  en: {
    eyebrow: "How it works",
    title: "From the first guest to the last dance.",
    steps: [
      {
        n: "01",
        title: "Import your guests",
        desc: "Bring in your list of families and guests in one go. Organise by family, age and table.",
      },
      {
        n: "02",
        title: "Set up budget and suppliers",
        desc: "Add suppliers, payment stages and deadlines. The budget and monthly plan build themselves.",
      },
      {
        n: "03",
        title: "Collect the RSVPs",
        desc: "Share the confirmation link and replies and dietary needs flow straight into the platform, in real time.",
      },
      {
        n: "04",
        title: "Live the day",
        desc: "On the day itself, run the timeline and your team from your phone, and leave the rest to us.",
      },
    ],
  },
};

export function HowItWorks() {
  const { lang } = useLang();
  const t = COPY[lang];

  return (
    <section id="como-funciona" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink-900 sm:text-[2.6rem]">
            {t.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="relative h-full rounded-2xl border border-ivory-300/70 bg-surface-50 p-6">
                <span className="font-display text-4xl font-semibold text-olive-200">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-700">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
