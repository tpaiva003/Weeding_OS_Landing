"use client";

import { useState } from "react";
import { IconArrow, IconCheck } from "./icons";

/**
 * Early-access capture. Posts to /api/access, which emails the request via
 * SMTP. If the server isn't configured yet (no SMTP env vars), it falls back
 * to opening the visitor's mail client with a pre-filled message.
 */
const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "tiago.paiva@weddingos.pt";

const PROBLEMS = [
  "Gerir convidados e confirmações (RSVP)",
  "Plano de mesas",
  "Orçamento e fornecedores",
  "Catering e restrições alimentares",
  "Convidados internacionais",
  "Só quero perceber melhor",
];

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

export function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [problems, setProblems] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  function toggleProblem(p: string) {
    setProblems((cur) =>
      cur.includes(p) ? cur.filter((x) => x !== p) : [...cur, p]
    );
  }

  function openMailto() {
    const subject = encodeURIComponent(`Pedido de acesso: ${name}`);
    const lines = [
      "Olá,",
      "",
      "Gostaria de acesso antecipado ao Wedding OS.",
      "",
      `Nome: ${name}`,
      `Email: ${email}`,
      `Data do casamento: ${date || "-"}`,
      "",
      "O que procuro resolver:",
      ...(problems.length ? problems.map((p) => `- ${p}`) : ["- (não indicado)"]),
      "",
      "Obrigado!",
    ];
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, date, problems }),
      });
      if (res.ok) {
        setStatus("sent");
        return;
      }
      // Backend not configured (501) → graceful fallback to the mail client.
      if (res.status === 501) {
        openMailto();
        setStatus("mailto");
        return;
      }
      setStatus("error");
    } catch {
      // Network error → still let the request go through via mailto.
      openMailto();
      setStatus("mailto");
    }
  }

  const done = status === "sent" || status === "mailto";

  return (
    <section id="acesso" className="scroll-mt-20 paper">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="overflow-hidden rounded-3xl border border-olive-700/30 bg-olive-900 shadow-[var(--glow-gold)]">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="text-ivory-50">
              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Prontos para planear com calma?
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ivory-100/90">
                Pede acesso antecipado ao Wedding OS. Dizemos-te como podes usar
                a plataforma no vosso casamento.
              </p>
              <ul className="mt-7 space-y-2.5 text-[15px] text-ivory-100/90">
                {[
                  "Convidados, RSVP e plano de mesas",
                  "Orçamento, fornecedores e catering",
                  "Novas funcionalidades a chegar",
                ].map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ivory-50/15 text-gold-400">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-surface-50 p-6 sm:p-7">
              {done ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                    <IconCheck className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">
                    {status === "sent" ? "Pedido enviado!" : "Quase lá!"}
                  </h3>
                  <p className="mt-2 text-sm text-ink-700">
                    {status === "sent"
                      ? "Recebemos o vosso pedido. Respondemos pessoalmente, em breve."
                      : "Abrimos o teu email com o pedido pré-preenchido. É só enviar: respondemos em breve."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-medium text-ink-700"
                    >
                      Nome
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Clara & Tiago"
                      className="w-full rounded-xl border border-ivory-300 bg-[#111016] px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-500/60 focus:border-olive-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-medium text-ink-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="voces@email.com"
                      className="w-full rounded-xl border border-ivory-300 bg-[#111016] px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-500/60 focus:border-olive-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="date"
                      className="mb-1.5 block text-xs font-medium text-ink-700"
                    >
                      Data do casamento{" "}
                      <span className="text-ink-500/70">(opcional)</span>
                    </label>
                    <input
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded-xl border border-ivory-300 bg-[#111016] px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-olive-400"
                    />
                  </div>

                  <fieldset>
                    <legend className="mb-2 block text-xs font-medium text-ink-700">
                      O que procuram resolver?{" "}
                      <span className="text-ink-500/70">(opcional)</span>
                    </legend>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {PROBLEMS.map((p) => {
                        const active = problems.includes(p);
                        return (
                          <button
                            type="button"
                            key={p}
                            onClick={() => toggleProblem(p)}
                            aria-pressed={active}
                            className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-left text-[13px] transition-colors ${
                              active
                                ? "border-olive-500 bg-olive-100 text-olive-800"
                                : "border-ivory-300 bg-[#111016] text-ink-700 hover:border-olive-400"
                            }`}
                          >
                            <span
                              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                                active
                                  ? "border-olive-600 bg-olive-600 text-[#17130a]"
                                  : "border-ivory-300"
                              }`}
                            >
                              {active && <IconCheck className="h-3 w-3" />}
                            </span>
                            {p}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-olive-700 px-6 py-3.5 text-base font-semibold text-[#17130a] transition-colors hover:bg-olive-800 disabled:opacity-70"
                  >
                    {status === "sending" ? "A enviar…" : "Pedir acesso"}
                    {status !== "sending" && (
                      <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    )}
                  </button>
                  {status === "error" && (
                    <p className="text-center text-xs text-[#e0917f]">
                      Não foi possível enviar agora. Tenta de novo ou escreve
                      para {CONTACT_EMAIL}.
                    </p>
                  )}
                  <p className="text-center text-xs text-ink-500">
                    Sem compromisso. Respondemos pessoalmente.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
