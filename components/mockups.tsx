"use client";

import { useLang } from "./i18n";

/**
 * Lightweight, self-contained UI mockups that evoke the real product
 * without exposing any private data. Purely decorative. All figures,
 * supplier names and table names below are generic placeholders.
 */

export function DashboardMock({ className = "" }: { className?: string }) {
  const { lang } = useLang();
  const en = lang === "en";
  const nav = en
    ? ["Dashboard", "Guests", "Tables", "Suppliers", "Budget"]
    : ["Dashboard", "Convidados", "Mesas", "Fornecedores", "Orçamento"];
  const stats = [
    { n: "260", l: en ? "Guests" : "Convidados", c: "text-ink-900" },
    { n: "208", l: en ? "Confirmed" : "Confirmados", c: "text-olive-600" },
    { n: "€95.0k", l: en ? "Budget" : "Orçamento", c: "text-gold-600" },
  ];

  return (
    <div
      aria-hidden
      className={`rounded-2xl border border-ivory-300/80 bg-surface-50 shadow-[var(--shadow-lift)] overflow-hidden ${className}`}
    >
      {/* window chrome */}
      <div className="flex items-center gap-1.5 border-b border-ivory-200 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-olive-300/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-gold-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-ivory-300" />
        <span className="ml-3 text-[11px] font-medium text-ink-500">
          Dashboard
        </span>
      </div>

      <div className="grid grid-cols-[92px_1fr] gap-0">
        {/* mini sidebar */}
        <div className="hidden sm:flex flex-col gap-1.5 border-r border-ivory-200 p-3">
          {nav.map((item, i) => (
            <div
              key={item}
              className={`rounded-md px-2 py-1.5 text-[10px] font-medium ${
                i === 0 ? "bg-olive-100 text-olive-800" : "text-ink-500"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* content */}
        <div className="p-4 sm:p-5">
          <div className="grid grid-cols-3 gap-2.5">
            {stats.map((s) => (
              <div
                key={s.l}
                className="rounded-lg border border-ivory-200 bg-surface-100 px-3 py-2.5"
              >
                <div className={`font-display text-lg font-semibold ${s.c}`}>
                  {s.n}
                </div>
                <div className="text-[9px] uppercase tracking-wide text-ink-500">
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          {/* budget bar */}
          <div className="mt-4 rounded-lg border border-ivory-200 bg-surface-100 p-3.5">
            <div className="flex items-center justify-between text-[10px] text-ink-500">
              <span>{en ? "Budget Overview" : "Resumo do orçamento"}</span>
              <span className="text-olive-600">{en ? "example" : "exemplo"}</span>
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="font-display text-base font-semibold text-ink-900">
                €58 000{" "}
                <span className="text-[10px] text-ink-500">
                  {en ? "paid" : "pago"}
                </span>
              </span>
              <span className="font-display text-base font-semibold text-gold-600">
                €37 000{" "}
                <span className="text-[10px] text-ink-500">
                  {en ? "outstanding" : "por liquidar"}
                </span>
              </span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-ivory-200">
              <div className="h-full w-[61%] rounded-full bg-olive-500" />
            </div>
            {/* P&L row */}
            <div className="mt-3 grid grid-cols-3 gap-2 border-t border-ivory-200 pt-2.5 text-[9px]">
              <div>
                <div className="text-ink-500">{en ? "Paid" : "Pago"}</div>
                <div className="font-medium text-[#e0917f]">−€58 000</div>
              </div>
              <div>
                <div className="text-ink-500">{en ? "Gifts" : "Prendas"}</div>
                <div className="font-medium text-olive-600">+€18 000</div>
              </div>
              <div>
                <div className="text-ink-500">{en ? "Balance" : "Saldo"}</div>
                <div className="font-medium text-ink-900">−€40 000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ChatbotMock({ className = "" }: { className?: string }) {
  const { lang } = useLang();
  const en = lang === "en";
  const c = {
    title: en ? "Wedding copilot" : "Copiloto do casamento",
    user1: en
      ? "Mark the catering payment as paid and close the task."
      : "Marca o pagamento do catering como pago e fecha a tarefa.",
    reply1: en
      ? "Done. I logged the payment and closed the task."
      : "Feito. Registei o pagamento e fechei a tarefa.",
    chip1: en ? "Catering marked as paid" : "Catering marcado como pago",
    chip2: en
      ? "Task «Pay catering» completed"
      : "Tarefa «Pagar catering» concluída",
    user2: en
      ? "How many guests haven't confirmed yet?"
      : "Quantos convidados ainda não confirmaram?",
    reply2: en
      ? "52 to go. Want me to send a reminder to the families still missing?"
      : "Faltam 52. Queres que envie um lembrete às famílias em falta?",
    placeholder: en
      ? "Ask the copilot something…"
      : "Pede alguma coisa ao copiloto…",
  };

  return (
    <div
      aria-hidden
      className={`overflow-hidden rounded-2xl border border-olive-700/30 bg-olive-900 shadow-[var(--glow-gold)] ${className}`}
    >
      {/* header */}
      <div className="flex items-center gap-2.5 border-b border-ivory-50/10 px-4 py-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ivory-50/10 text-gold-400">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3l1.6 3.6L17 8.2l-3.4 1.6L12 13.4l-1.6-3.6L7 8.2l3.4-1.6z" />
            <path d="M18 14l.8 1.8L20.6 16l-1.8.8L18 18.6l-.8-1.8L15.4 16l1.8-.2z" />
          </svg>
        </span>
        <span className="text-[12px] font-medium text-ivory-50">{c.title}</span>
        <span className="ml-auto flex items-center gap-1.5 text-[10px] text-ivory-100/60">
          <span className="h-1.5 w-1.5 rounded-full bg-[#A9D18E]" /> online
        </span>
      </div>

      {/* conversation */}
      <div className="space-y-3 p-4">
        {/* user */}
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-olive-700 px-3.5 py-2 text-[12px] leading-relaxed text-[#17130a]">
            {c.user1}
          </div>
        </div>
        {/* assistant */}
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-ivory-50/[0.06] px-3.5 py-2.5 text-[12px] leading-relaxed text-ivory-100/90">
            {c.reply1}
            <div className="mt-2 space-y-1.5">
              <div className="flex items-center gap-2 rounded-lg border border-ivory-50/10 bg-ivory-50/[0.04] px-2.5 py-1.5">
                <span className="text-gold-400">✓</span>
                <span className="text-[11px] text-ivory-100/80">{c.chip1}</span>
                <span className="ml-auto text-[11px] font-medium text-gold-400">
                  −€3 500
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-ivory-50/10 bg-ivory-50/[0.04] px-2.5 py-1.5">
                <span className="text-gold-400">✓</span>
                <span className="text-[11px] text-ivory-100/80">{c.chip2}</span>
              </div>
            </div>
          </div>
        </div>
        {/* user */}
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-olive-700 px-3.5 py-2 text-[12px] leading-relaxed text-[#17130a]">
            {c.user2}
          </div>
        </div>
        {/* assistant */}
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-ivory-50/[0.06] px-3.5 py-2.5 text-[12px] leading-relaxed text-ivory-100/90">
            {c.reply2}
          </div>
        </div>
      </div>

      {/* input */}
      <div className="border-t border-ivory-50/10 p-3">
        <div className="flex items-center gap-2 rounded-full border border-ivory-50/12 bg-ivory-50/[0.04] px-4 py-2">
          <span className="text-[12px] text-ivory-100/45">{c.placeholder}</span>
          <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-olive-700 text-[#17130a]">
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export function SeatingMock({ className = "" }: { className?: string }) {
  const { lang } = useLang();
  const en = lang === "en";
  const tables = [
    { cx: 26, cy: 30, r: 15, label: en ? "Couple" : "Noivos", seats: 8 },
    { cx: 68, cy: 24, r: 13, label: en ? "Family" : "Família", seats: 7 },
    { cx: 74, cy: 62, r: 15, label: en ? "Friends" : "Amigos", seats: 9 },
    { cx: 30, cy: 70, r: 13, label: en ? "Colleagues" : "Colegas", seats: 6 },
  ];
  return (
    <div
      aria-hidden
      className={`rounded-2xl border border-ivory-300/80 bg-surface-50 p-4 shadow-[var(--shadow-lift)] ${className}`}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[11px] font-medium text-ink-700">
          {en ? "Seating plan" : "Plano de mesas"}
        </span>
        <span className="text-[10px] text-ink-500">
          {en ? "18 tables · 260 to seat" : "18 mesas · 260 por sentar"}
        </span>
      </div>
      <div className="relative aspect-[4/3] w-full rounded-xl bg-[radial-gradient(circle_at_1px_1px,rgba(200,162,75,0.14)_1px,transparent_0)] [background-size:14px_14px] ring-1 ring-ivory-200">
        <svg viewBox="0 0 100 90" className="absolute inset-0 h-full w-full">
          {tables.map((t) => (
            <g key={t.label}>
              {Array.from({ length: t.seats }).map((_, i) => {
                const a = (i / t.seats) * Math.PI * 2;
                return (
                  <circle
                    key={i}
                    cx={t.cx + Math.cos(a) * (t.r + 3.2)}
                    cy={t.cy + Math.sin(a) * (t.r + 3.2)}
                    r={1.7}
                    fill="#c8a24b"
                  />
                );
              })}
              <circle
                cx={t.cx}
                cy={t.cy}
                r={t.r}
                fill="#211d16"
                stroke="#4c4230"
                strokeWidth={0.8}
              />
              <text
                x={t.cx}
                y={t.cy + 1}
                textAnchor="middle"
                fontSize="4.4"
                fill="#e8ce8a"
                fontWeight="600"
              >
                {t.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function SuppliersMock({ className = "" }: { className?: string }) {
  const { lang } = useLang();
  const en = lang === "en";
  const stageFinal = en ? "Final" : "Final";
  const stageInterim = en ? "Interim" : "Intercalar";
  const rows = en
    ? [
        { name: "Venue & Estate", stage: stageFinal, due: "01 Oct", amt: "€4 000" },
        { name: "Catering", stage: stageInterim, due: "04 Sep", amt: "€3 500" },
        { name: "Photo & Video", stage: stageFinal, due: "04 Oct", amt: "€1 800" },
        { name: "Band / DJ", stage: stageFinal, due: "03 Oct", amt: "€1 200" },
      ]
    : [
        { name: "Espaço & Quinta", stage: stageFinal, due: "01 Out", amt: "€4 000" },
        { name: "Catering", stage: stageInterim, due: "04 Set", amt: "€3 500" },
        { name: "Fotografia & Vídeo", stage: stageFinal, due: "04 Out", amt: "€1 800" },
        { name: "Banda / DJ", stage: stageFinal, due: "03 Out", amt: "€1 200" },
      ];
  return (
    <div
      aria-hidden
      className={`rounded-2xl border border-ivory-300/80 bg-surface-50 p-4 shadow-[var(--shadow-lift)] ${className}`}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[11px] font-medium text-ink-700">
          {en ? "Payment plan" : "Plano de pagamentos"}
        </span>
        <span className="rounded-full bg-olive-100 px-2 py-0.5 text-[9px] font-medium text-olive-700">
          {en ? "Monthly plan" : "Plano mensal"}
        </span>
      </div>
      <div className="space-y-1.5">
        {rows.map((r, i) => (
          <div
            key={r.name}
            className="flex items-center justify-between rounded-lg border border-ivory-200 bg-surface-100 px-3 py-2"
          >
            <div className="flex items-center gap-2.5">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  i < 2 ? "bg-olive-500" : "bg-gold-400"
                }`}
              />
              <div>
                <div className="text-[11px] font-medium text-ink-900">
                  {r.name}
                </div>
                <div className="text-[9px] text-ink-500">
                  {r.stage} · {r.due}
                </div>
              </div>
            </div>
            <span className="font-display text-[13px] font-semibold text-ink-900">
              {r.amt}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Mobile view of the app (guest & RSVP management): dark, legible,
 * and deliberately NOT the guest-facing digital invite.
 */
export function PhoneInvite({ className = "" }: { className?: string }) {
  const { lang } = useLang();
  const en = lang === "en";
  const guests = en
    ? [
        { name: "Silva Family", meta: "4 people", ok: true },
        { name: "Costa Family", meta: "2 people", ok: true },
        { name: "Friends · Ana", meta: "1 person", ok: true },
        { name: "Colleagues · João", meta: "2 people", ok: false },
      ]
    : [
        { name: "Família Silva", meta: "4 pessoas", ok: true },
        { name: "Família Costa", meta: "2 pessoas", ok: true },
        { name: "Amigos · Ana", meta: "1 pessoa", ok: true },
        { name: "Colegas · João", meta: "2 pessoas", ok: false },
      ];
  return (
    <div aria-hidden className={`relative mx-auto w-[230px] ${className}`}>
      <div className="rounded-[2.4rem] border-[7px] border-[#050509] bg-[#050509] p-0 shadow-[var(--shadow-lift)]">
        <div className="relative overflow-hidden rounded-[1.9rem] bg-gradient-to-b from-[#1b1922] to-[#0f0e15]">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-[#050509]" />
          <div className="flex aspect-[9/18] flex-col px-4 pb-5 pt-8 text-ivory-50">
            <p className="text-[10px] uppercase tracking-[0.22em] text-olive-500">
              {en ? "Guests" : "Convidados"}
            </p>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-display text-2xl font-semibold text-ivory-50">
                208
              </span>
              <span className="text-[11px] text-ivory-100/70">
                {en ? "of 260 confirmed" : "de 260 confirmados"}
              </span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-ivory-50/10">
              <div className="h-full w-[80%] rounded-full bg-olive-500" />
            </div>

            <div className="mt-4 space-y-2">
              {guests.map((g) => (
                <div
                  key={g.name}
                  className="flex items-center justify-between rounded-xl border border-ivory-50/10 bg-ivory-50/[0.04] px-3 py-2"
                >
                  <div>
                    <div className="text-[11px] font-medium text-ivory-50">
                      {g.name}
                    </div>
                    <div className="text-[9px] text-ivory-100/60">{g.meta}</div>
                  </div>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      g.ok ? "bg-gold-400" : "bg-ivory-50/25"
                    }`}
                  />
                </div>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-center gap-2 rounded-full bg-olive-700 px-4 py-2 text-[11px] font-semibold text-[#17130a]">
              {en ? "Add guest" : "Adicionar convidado"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
