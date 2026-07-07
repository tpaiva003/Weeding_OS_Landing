import { Reveal } from "./reveal";
import { SeatingMock, SuppliersMock, PhoneInvite } from "./mockups";
import { IconCheck } from "./icons";

type SpotlightProps = {
  id?: string;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  visual: React.ReactNode;
  flip?: boolean;
};

function Spotlight({
  id,
  eyebrow,
  title,
  body,
  points,
  visual,
  flip,
}: SpotlightProps) {
  return (
    <div
      id={id}
      className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16"
    >
      <Reveal className={flip ? "lg:order-2" : ""}>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">
          {eyebrow}
        </p>
        <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
          {title}
        </h3>
        <p className="mt-5 text-lg leading-relaxed text-ink-700">{body}</p>
        <ul className="mt-7 space-y-3">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-ink-800">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                <IconCheck className="h-3.5 w-3.5" />
              </span>
              <span className="text-[15px] leading-relaxed">{p}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={120} className={flip ? "lg:order-1" : ""}>
        {visual}
      </Reveal>
    </div>
  );
}

export function Spotlights() {
  return (
    <section className="border-y border-ivory-300/60 bg-surface-50">
      <div className="mx-auto max-w-6xl divide-y divide-ivory-300/60 px-5 sm:px-8">
        <Spotlight
          eyebrow="Convidados & Convite"
          title="Do convite ao «sim, vamos» sem folhas de cálculo."
          body="Envia um convite digital elegante com RSVP integrado. Cada família recebe um link único e legível, e a confirmação entra direto na tua lista."
          points={[
            "Links de convite legíveis e impossíveis de adivinhar (ex.: /familia-silva-7k3q)",
            "Restrições alimentares recolhidas no momento da confirmação",
            "Contagem decrescente, a vossa história e mapa: tudo no convite",
            "Instalável no telemóvel como uma aplicação (PWA)",
          ]}
          visual={
            <div className="relative flex justify-center">
              <PhoneInvite />
            </div>
          }
        />

        <Spotlight
          flip
          eyebrow="Fornecedores & Orçamento"
          title="Controlo total do dinheiro: até ao balanço final."
          body="Cada fornecedor com as suas fases de pagamento e prazos. O plano mensal mostra-te exatamente o que sai em cada mês, e o dashboard fecha com um verdadeiro P&L do casamento."
          points={[
            "Fases de pagamento: sinal, intercalar e final, com estado e data",
            "Plano de pagamentos agrupado por mês, exportável em CSV",
            "Prendas recebidas registadas no Gift Log e ligadas aos convidados",
            "Custo por convidado e saldo (prendas − pago) sempre à vista",
          ]}
          visual={<SuppliersMock />}
        />

        <Spotlight
          eyebrow="Plano de mesas"
          title="A sala montada antes de o dia chegar."
          body="Cria as mesas a partir dos templates do teu fornecedor e arrasta cada convidado para o seu lugar. Guarda versões e experimenta cenários sem medo."
          points={[
            "Templates de mesa (forma + lugares) com um clique",
            "Vista de sala e vista de grelha, com estado de cada convidado",
            "Versões guardadas: volta atrás sempre que quiseres",
            "Sincronizado com os RSVPs: quem confirma aparece para sentar",
          ]}
          visual={<SeatingMock />}
        />
      </div>
    </section>
  );
}
