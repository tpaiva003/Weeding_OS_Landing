"use client";

import { Reveal } from "./reveal";
import { SeatingMock, SuppliersMock, PhoneInvite } from "./mockups";
import { IconCheck } from "./icons";
import { useLang } from "./i18n";

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

const COPY = {
  pt: {
    guests: {
      eyebrow: "Convidados & RSVP",
      title: "A tua lista de convidados, finalmente sob controlo.",
      body: "Importa famílias e convidados de uma vez, agrupa-os e acompanha as confirmações em tempo real. As restrições alimentares entram direto na tua gestão.",
      points: [
        "Importa famílias e convidados de uma vez, sem os adicionar um a um",
        "Confirmações e restrições alimentares recolhidas num só sítio",
        "Agrupa por família, idade e mesa",
        "Sincronizado com o plano de mesas e o catering",
      ],
    },
    money: {
      eyebrow: "Fornecedores & Orçamento",
      title: "Controlo total do dinheiro: até ao balanço final.",
      body: "Cada fornecedor com as suas fases de pagamento e prazos. O plano mensal mostra-te exatamente o que sai em cada mês, e o dashboard fecha com um verdadeiro P&L do casamento.",
      points: [
        "Fases de pagamento: sinal, intercalar e final, com estado e data",
        "Plano de pagamentos agrupado por mês, exportável em CSV",
        "Prendas recebidas registadas no Gift Log e ligadas aos convidados",
        "Custo por convidado e saldo (prendas − pago) sempre à vista",
      ],
    },
    seating: {
      eyebrow: "Plano de mesas",
      title: "A sala montada antes de o dia chegar.",
      body: "Cria as mesas a partir dos templates do teu fornecedor e arrasta cada convidado para o seu lugar. Guarda versões e experimenta cenários sem medo.",
      points: [
        "Templates de mesa (forma + lugares) com um clique",
        "Vista de sala e vista de grelha, com estado de cada convidado",
        "Versões guardadas: volta atrás sempre que quiseres",
        "Sincronizado com os RSVPs: quem confirma aparece para sentar",
      ],
    },
  },
  en: {
    guests: {
      eyebrow: "Guests & RSVP",
      title: "Your guest list, finally under control.",
      body: "Import families and guests in one go, group them and track confirmations in real time. Dietary needs flow straight into your management view.",
      points: [
        "Import families and guests in one go, no adding them one by one",
        "Confirmations and dietary needs collected in one place",
        "Group by family, age and table",
        "In sync with the seating plan and the catering",
      ],
    },
    money: {
      eyebrow: "Suppliers & Budget",
      title: "Full control of the money: down to the final balance.",
      body: "Each supplier with its own payment stages and deadlines. The monthly plan shows exactly what goes out each month, and the dashboard closes with a real wedding P&L.",
      points: [
        "Payment stages: deposit, interim and final, with status and date",
        "Payment plan grouped by month, exportable as CSV",
        "Gifts received logged in the Gift Log and linked to guests",
        "Cost per guest and balance (gifts − paid) always in view",
      ],
    },
    seating: {
      eyebrow: "Seating plan",
      title: "The room set up before the day arrives.",
      body: "Build the tables from your venue's templates and drag each guest into place. Save versions and try out scenarios without fear.",
      points: [
        "Table templates (shape + seats) in one click",
        "Room view and grid view, with each guest's status",
        "Saved versions: go back whenever you like",
        "In sync with RSVPs: whoever confirms shows up to be seated",
      ],
    },
  },
};

export function Spotlights() {
  const { lang } = useLang();
  const t = COPY[lang];

  return (
    <section className="border-y border-ivory-300/60 bg-surface-50">
      <div className="mx-auto max-w-6xl divide-y divide-ivory-300/60 px-5 sm:px-8">
        <Spotlight
          eyebrow={t.guests.eyebrow}
          title={t.guests.title}
          body={t.guests.body}
          points={t.guests.points}
          visual={
            <div className="relative flex justify-center">
              <PhoneInvite />
            </div>
          }
        />

        <Spotlight
          flip
          eyebrow={t.money.eyebrow}
          title={t.money.title}
          body={t.money.body}
          points={t.money.points}
          visual={<SuppliersMock />}
        />

        <Spotlight
          eyebrow={t.seating.eyebrow}
          title={t.seating.title}
          body={t.seating.body}
          points={t.seating.points}
          visual={<SeatingMock />}
        />
      </div>
    </section>
  );
}
