/**
 * Lightweight, self-contained UI mockups that evoke the real product
 * without exposing any private data. Purely decorative — all figures,
 * supplier names and table names below are generic placeholders.
 */

export function DashboardMock({ className = "" }: { className?: string }) {
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
          {["Dashboard", "Convidados", "Mesas", "Fornecedores", "Orçamento"].map(
            (item, i) => (
              <div
                key={item}
                className={`rounded-md px-2 py-1.5 text-[10px] font-medium ${
                  i === 0
                    ? "bg-olive-100 text-olive-800"
                    : "text-ink-500"
                }`}
              >
                {item}
              </div>
            )
          )}
        </div>

        {/* content */}
        <div className="p-4 sm:p-5">
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { n: "120", l: "Convidados", c: "text-ink-900" },
              { n: "96", l: "Confirmados", c: "text-olive-600" },
              { n: "€40.0k", l: "Orçamento", c: "text-gold-600" },
            ].map((s) => (
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
              <span>Budget Overview</span>
              <span className="text-olive-600">exemplo</span>
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="font-display text-base font-semibold text-ink-900">
                €18 000 <span className="text-[10px] text-ink-500">pago</span>
              </span>
              <span className="font-display text-base font-semibold text-gold-600">
                €22 000{" "}
                <span className="text-[10px] text-ink-500">por liquidar</span>
              </span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-ivory-200">
              <div className="h-full w-[45%] rounded-full bg-olive-500" />
            </div>
            {/* P&L row */}
            <div className="mt-3 grid grid-cols-3 gap-2 border-t border-ivory-200 pt-2.5 text-[9px]">
              <div>
                <div className="text-ink-500">Pago</div>
                <div className="font-medium text-[#e0917f]">−€18 000</div>
              </div>
              <div>
                <div className="text-ink-500">Prendas</div>
                <div className="font-medium text-olive-600">+€6 000</div>
              </div>
              <div>
                <div className="text-ink-500">Saldo</div>
                <div className="font-medium text-ink-900">−€12 000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SeatingMock({ className = "" }: { className?: string }) {
  const tables = [
    { cx: 26, cy: 30, r: 15, label: "Noivos", seats: 8 },
    { cx: 68, cy: 24, r: 13, label: "Família", seats: 7 },
    { cx: 74, cy: 62, r: 15, label: "Amigos", seats: 9 },
    { cx: 30, cy: 70, r: 13, label: "Colegas", seats: 6 },
  ];
  return (
    <div
      aria-hidden
      className={`rounded-2xl border border-ivory-300/80 bg-surface-50 p-4 shadow-[var(--shadow-lift)] ${className}`}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[11px] font-medium text-ink-700">
          Plano de mesas
        </span>
        <span className="text-[10px] text-ink-500">8 mesas · 96 por sentar</span>
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
  const rows = [
    { name: "Espaço & Quinta", stage: "Final", due: "01 Out", amt: "€4 000" },
    { name: "Catering", stage: "Intercalar", due: "04 Set", amt: "€3 500" },
    { name: "Fotografia & Vídeo", stage: "Final", due: "04 Out", amt: "€1 800" },
    { name: "Banda / DJ", stage: "Final", due: "03 Out", amt: "€1 200" },
  ];
  return (
    <div
      aria-hidden
      className={`rounded-2xl border border-ivory-300/80 bg-surface-50 p-4 shadow-[var(--shadow-lift)] ${className}`}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[11px] font-medium text-ink-700">
          Plano de pagamentos
        </span>
        <span className="rounded-full bg-olive-100 px-2 py-0.5 text-[9px] font-medium text-olive-700">
          Plano mensal
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
 * Mobile view of the app (guest & RSVP management) — dark, legible,
 * and deliberately NOT the guest-facing digital invite.
 */
export function PhoneInvite({ className = "" }: { className?: string }) {
  const guests = [
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
              Convidados
            </p>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-display text-2xl font-semibold text-ivory-50">
                96
              </span>
              <span className="text-[11px] text-ivory-100/70">
                de 120 confirmados
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
              Adicionar convidado
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
