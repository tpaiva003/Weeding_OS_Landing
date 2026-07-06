import { Reveal } from "./reveal";

const steps = [
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
    title: "Envia o convite digital",
    desc: "Cada família recebe um link único. As confirmações e restrições entram direto na plataforma.",
  },
  {
    n: "04",
    title: "Vive o dia",
    desc: "No próprio dia, controla o guião, o mural de fotos e a tradução ao vivo: tudo a partir do telemóvel.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">
            Como funciona
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink-900 sm:text-[2.6rem]">
            Do primeiro convidado à última dança.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="relative h-full rounded-2xl border border-ivory-300/70 bg-ivory-50 p-6">
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
