import { Reveal } from "./reveal";
import { TranslationMock } from "./mockups";
import { IconTranslate, IconSpark, IconSound } from "./icons";

const highlights = [
  {
    icon: IconTranslate,
    title: "Legendas em direto",
    desc: "A cerimónia transcrita e traduzida ao vivo, no telemóvel de cada convidado.",
  },
  {
    icon: IconSpark,
    title: "Tradução com contexto",
    desc: "O tradutor usa as frases anteriores para acertar o sentido: «na segunda» não vira «segunda parte».",
  },
  {
    icon: IconSound,
    title: "Som opcional e discreto",
    desc: "Silêncio por defeito para o celebrante; o convidado ativa a voz se quiser, sem interromper ninguém.",
  },
];

export function Ceremony() {
  return (
    <section
      id="cerimonia"
      className="relative scroll-mt-20 overflow-hidden bg-olive-800 text-ivory-50"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-olive-600/40 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-ivory-50/20 bg-ivory-50/10 px-3.5 py-1.5 text-xs font-medium text-gold-400">
                <IconSpark className="h-3.5 w-3.5" />
                O que mais ninguém faz
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
                A cerimónia traduzida ao vivo, para todos.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ivory-100/90">
                Convidados de vários países? Cada um segue a cerimónia no seu
                idioma, em tempo real, a partir do próprio telemóvel: sem
                equipamento, sem intérprete na sala.
              </p>
            </Reveal>

            <div className="mt-9 space-y-5">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <Reveal key={h.title} delay={220 + i * 80}>
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ivory-50/10 text-gold-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-ivory-50">
                          {h.title}
                        </h3>
                        <p className="mt-1 text-[15px] leading-relaxed text-ivory-100/80">
                          {h.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={200}>
            <div className="relative">
              <TranslationMock />
              <div
                aria-hidden
                className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl border border-ivory-50/10"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
