"use client";

import { useState } from "react";
import { IconArrow, IconCheck } from "./icons";

/**
 * Early-access capture. With no backend yet, this composes a pre-filled
 * email to the team so the request genuinely goes somewhere. Swap the
 * mailto for a POST to an API route / form service when a backend exists.
 */
const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "tiago.paiva@weeding-os.online";

export function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Pedido de acesso: Wedding OS");
    const body = encodeURIComponent(
      `Olá,\n\nGostaria de acesso antecipado ao Wedding OS.\n\nNome: ${name}\nEmail: ${email}\nData do casamento: ${date || "-"}\n\nObrigado!`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

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
              {sent ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                    <IconCheck className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">
                    Quase lá!
                  </h3>
                  <p className="mt-2 text-sm text-ink-700">
                    Abrimos o teu email com o pedido pré-preenchido. É só
                    enviar: respondemos em breve.
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
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-olive-700 px-6 py-3.5 text-base font-semibold text-[#17130a] transition-colors hover:bg-olive-800"
                  >
                    Pedir acesso
                    <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
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
