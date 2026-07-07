/**
 * Lightweight, self-contained UI mockups that evoke the real product
 * without exposing any private guest data. Purely decorative.
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
              { n: "134", l: "Convidados", c: "text-ink-900" },
              { n: "48", l: "Confirmados", c: "text-olive-600" },
              { n: "€48.3k", l: "Orçamento", c: "text-gold-600" },
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
              <span className="text-olive-600">11 fornecedores</span>
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="font-display text-base font-semibold text-ink-900">
                €15 540 <span className="text-[10px] text-ink-500">pago</span>
              </span>
              <span className="font-display text-base font-semibold text-gold-600">
                €32 249{" "}
                <span className="text-[10px] text-ink-500">por liquidar</span>
              </span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-ivory-200">
              <div className="h-full w-[33%] rounded-full bg-olive-500" />
            </div>
            {/* P&L row */}
            <div className="mt-3 grid grid-cols-3 gap-2 border-t border-ivory-200 pt-2.5 text-[9px]">
              <div>
                <div className="text-ink-500">Pago</div>
                <div className="font-medium text-[#e0917f]">−€15 540</div>
              </div>
              <div>
                <div className="text-ink-500">Prendas</div>
                <div className="font-medium text-olive-600">+€8 900</div>
              </div>
              <div>
                <div className="text-ink-500">Saldo</div>
                <div className="font-medium text-ink-900">−€6 640</div>
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
    { cx: 68, cy: 24, r: 13, label: "Valongo", seats: 7 },
    { cx: 74, cy: 62, r: 15, label: "PwC", seats: 9 },
    { cx: 30, cy: 70, r: 13, label: "Pai", seats: 6 },
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
        <span className="text-[10px] text-ink-500">8 mesas · 84 por sentar</span>
      </div>
      <div className="relative aspect-[4/3] w-full rounded-xl bg-[radial-gradient(circle_at_1px_1px,rgba(118,122,86,0.12)_1px,transparent_0)] [background-size:14px_14px] ring-1 ring-ivory-200">
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
                    fill="#b08d57"
                  />
                );
              })}
              <circle
                cx={t.cx}
                cy={t.cy}
                r={t.r}
                fill="#fdfcf9"
                stroke="#d8d3c2"
                strokeWidth={0.8}
              />
              <text
                x={t.cx}
                y={t.cy + 1}
                textAnchor="middle"
                fontSize="4.4"
                fill="#4b4b41"
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
    { name: "Coro Genisis", stage: "Final", due: "01 Out", amt: "€420" },
    { name: "Pedras Salgadas", stage: "Intercalar", due: "04 Set", amt: "€3 990" },
    { name: "Maria José", stage: "Final", due: "04 Out", amt: "€3 176" },
    { name: "Music Box", stage: "Final", due: "03 Out", amt: "€1 290" },
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
          Set 2026 · €22 519
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

export function PhoneInvite({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`relative mx-auto w-[230px] ${className}`}
    >
      <div className="rounded-[2.4rem] border-[7px] border-olive-900 bg-olive-900 p-0 shadow-[var(--shadow-lift)]">
        <div className="relative overflow-hidden rounded-[1.9rem] bg-olive-400">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-olive-900" />
          <div className="flex aspect-[9/18] flex-col items-center justify-center px-6 text-center text-ivory-50">
            <div className="mb-5 h-px w-10 bg-ivory-50/40" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-ivory-50/80">
              Contamos convosco
            </p>
            <h3 className="mt-3 font-display text-3xl font-semibold leading-tight">
              Clara
              <span className="mx-1.5 text-gold-400">&</span>
              Tiago
            </h3>
            <p className="mt-3 text-[11px] tracking-wide text-ivory-50/90">
              4 de Outubro de 2026
            </p>
            <div className="mt-6 rounded-full border border-ivory-50/40 px-5 py-1.5 text-[10px] font-medium">
              Abrir convite
            </div>
            <div className="mt-5 h-px w-10 bg-ivory-50/40" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function TranslationMock({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`rounded-2xl border border-ivory-300/80 bg-olive-900 p-4 shadow-[var(--shadow-lift)] ${className}`}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="flex items-center gap-2 text-[11px] font-medium text-ivory-100">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
          </span>
          Tradução ao vivo
        </span>
        <div className="flex gap-1">
          <span className="rounded-full bg-surface-50 px-2 py-0.5 text-[9px] font-semibold text-olive-800">
            PT
          </span>
          <span className="rounded-full bg-olive-700 px-2 py-0.5 text-[9px] font-medium text-[#17130a]">
            EN
          </span>
        </div>
      </div>
      <div className="space-y-2">
        <div className="rounded-xl rounded-tl-sm bg-olive-700/70 px-3 py-2 text-[11px] leading-relaxed text-ivory-100">
          «E assim, diante de todos, damos início a esta cerimónia.»
        </div>
        <div className="rounded-xl rounded-tr-sm bg-surface-100 px-3 py-2 text-[11px] leading-relaxed text-ink-900">
          “And so, before everyone, we begin this ceremony.”
        </div>
      </div>
    </div>
  );
}
