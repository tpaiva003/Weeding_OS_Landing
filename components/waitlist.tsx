"use client";

import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import { IconArrow, IconCheck } from "./icons";
import { useLang } from "./i18n";

/**
 * Early-access capture. Posts to /api/access, which emails the request via
 * SMTP. If the server isn't configured yet (no SMTP env vars), it falls back
 * to opening the visitor's mail client with a pre-filled message.
 *
 * The audience selector qualifies leads (couple / wedding planner / venue).
 * A `?perfil=planner|quinta|noivos` query param preselects it, so the
 * dedicated audience pages land visitors on the right profile.
 */
const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "tiago.paiva@weddingos.pt";

type AudienceKey = "noivos" | "planner" | "quinta";

// Canonical labels sent to the inbox, so it reads consistently regardless
// of the visitor's language.
const AUDIENCE_CANONICAL: Record<AudienceKey, string> = {
  noivos: "Noivos",
  planner: "Wedding planner",
  quinta: "Quinta",
};

const COPY = {
  pt: {
    problems: [
      "Gerir convidados e confirmações (RSVP)",
      "Plano de mesas",
      "Orçamento e fornecedores",
      "Catering e restrições alimentares",
      "Convidados internacionais",
      "Só quero perceber melhor",
    ],
    heading: "Prontos para começar?",
    sub: "Pede acesso antecipado ao Wedding OS. Dizemos-te como podes usar a plataforma, seja para o vosso casamento ou para o teu negócio.",
    bullets: [
      "Convidados, RSVP e plano de mesas",
      "Orçamento, fornecedores e catering",
      "Novas funcionalidades a chegar",
    ],
    audienceLegend: "Sou…",
    audiences: {
      noivos: "Noivos",
      planner: "Wedding planner",
      quinta: "Quinta / Espaço",
    },
    weddingsLegend: "Casamentos por ano",
    weddingsOptions: ["1–5", "6–15", "16–40", "40+"],
    nameLabel: "Nome",
    namePlaceholder: "Ana & João",
    emailLabel: "Email",
    emailPlaceholder: "voces@email.com",
    dateLabel: "Data do casamento",
    optional: "(opcional)",
    problemsLegend: "O que procuram resolver?",
    submit: "Pedir acesso",
    submitting: "A enviar…",
    sentTitle: "Pedido enviado!",
    almostTitle: "Quase lá!",
    sentBody: "Recebemos o vosso pedido. Respondemos pessoalmente, em breve.",
    almostBody:
      "Abrimos o teu email com o pedido pré-preenchido. É só enviar: respondemos em breve.",
    errorA: "Não foi possível enviar agora. Tenta de novo ou escreve para ",
    reassurance: "Sem compromisso. Respondemos pessoalmente.",
    // mailto body
    mailSubject: "Pedido de acesso",
    mailGreeting: "Olá,",
    mailIntro: "Gostaria de acesso antecipado ao Wedding OS.",
    mailAudience: "Perfil",
    mailWeddings: "Casamentos por ano",
    mailName: "Nome",
    mailEmail: "Email",
    mailDate: "Data do casamento",
    mailProblems: "O que procuro resolver:",
    mailNone: "(não indicado)",
    mailThanks: "Obrigado!",
  },
  en: {
    problems: [
      "Managing guests and confirmations (RSVP)",
      "Seating plan",
      "Budget and suppliers",
      "Catering and dietary needs",
      "International guests",
      "Just want to understand it better",
    ],
    heading: "Ready to start?",
    sub: "Request early access to Wedding OS. We'll tell you how to use the platform, whether for your own wedding or for your business.",
    bullets: [
      "Guests, RSVP and seating plan",
      "Budget, suppliers and catering",
      "New features on the way",
    ],
    audienceLegend: "I'm a…",
    audiences: {
      noivos: "Couple",
      planner: "Wedding planner",
      quinta: "Venue",
    },
    weddingsLegend: "Weddings per year",
    weddingsOptions: ["1–5", "6–15", "16–40", "40+"],
    nameLabel: "Name",
    namePlaceholder: "Alex & Sam",
    emailLabel: "Email",
    emailPlaceholder: "you@email.com",
    dateLabel: "Wedding date",
    optional: "(optional)",
    problemsLegend: "What are you looking to solve?",
    submit: "Request access",
    submitting: "Sending…",
    sentTitle: "Request sent!",
    almostTitle: "Almost there!",
    sentBody: "We've received your request. We'll reply personally, soon.",
    almostBody:
      "We've opened your email with the request pre-filled. Just hit send: we'll reply soon.",
    errorA: "We couldn't send just now. Try again or write to ",
    reassurance: "No commitment. We reply personally.",
    // mailto body
    mailSubject: "Access request",
    mailGreeting: "Hello,",
    mailIntro: "I'd like early access to Wedding OS.",
    mailAudience: "Profile",
    mailWeddings: "Weddings per year",
    mailName: "Name",
    mailEmail: "Email",
    mailDate: "Wedding date",
    mailProblems: "What I'm looking to solve:",
    mailNone: "(not specified)",
    mailThanks: "Thank you!",
  },
};

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

export function Waitlist() {
  const { lang } = useLang();
  const t = COPY[lang];
  const [audience, setAudience] = useState<AudienceKey>("noivos");
  const [weddings, setWeddings] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [problems, setProblems] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  const isBusiness = audience === "planner" || audience === "quinta";

  // Preselect the profile from ?perfil=… so the audience pages land here
  // on the right segment.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("perfil");
    if (p === "planner" || p === "quinta" || p === "noivos") setAudience(p);
    else if (p === "venue") setAudience("quinta");
    else if (p === "couple") setAudience("noivos");
  }, []);

  function toggleProblem(p: string) {
    setProblems((cur) =>
      cur.includes(p) ? cur.filter((x) => x !== p) : [...cur, p]
    );
  }

  function openMailto() {
    const subject = encodeURIComponent(
      `[${AUDIENCE_CANONICAL[audience]}] ${t.mailSubject}: ${name}`
    );
    const lines = [
      t.mailGreeting,
      "",
      t.mailIntro,
      "",
      `${t.mailAudience}: ${AUDIENCE_CANONICAL[audience]}`,
      ...(isBusiness && weddings
        ? [`${t.mailWeddings}: ${weddings}`]
        : []),
      `${t.mailName}: ${name}`,
      `${t.mailEmail}: ${email}`,
      `${t.mailDate}: ${date || "-"}`,
      "",
      t.mailProblems,
      ...(problems.length ? problems.map((p) => `- ${p}`) : [`- ${t.mailNone}`]),
      "",
      t.mailThanks,
    ];
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const payload = {
      name,
      email,
      date,
      problems,
      audience: AUDIENCE_CANONICAL[audience],
      weddingsPerYear: isBusiness ? weddings : "",
    };
    try {
      const res = await fetch("/api/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        track("pedir_acesso", { via: "api", motivos: problems.length, perfil: audience });
        setStatus("sent");
        return;
      }
      // Backend not configured (501) → graceful fallback to the mail client.
      if (res.status === 501) {
        track("pedir_acesso", { via: "mailto", motivos: problems.length, perfil: audience });
        openMailto();
        setStatus("mailto");
        return;
      }
      setStatus("error");
    } catch {
      // Network error → still let the request go through via mailto.
      track("pedir_acesso", { via: "mailto", motivos: problems.length, perfil: audience });
      openMailto();
      setStatus("mailto");
    }
  }

  const done = status === "sent" || status === "mailto";
  const audienceKeys: AudienceKey[] = ["noivos", "planner", "quinta"];

  return (
    <section id="acesso" className="scroll-mt-20 paper">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="overflow-hidden rounded-3xl border border-olive-700/30 bg-olive-900 shadow-[var(--glow-gold)]">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="text-ivory-50">
              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
                {t.heading}
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ivory-100/90">
                {t.sub}
              </p>
              <ul className="mt-7 space-y-2.5 text-[15px] text-ivory-100/90">
                {t.bullets.map((p) => (
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
                    {status === "sent" ? t.sentTitle : t.almostTitle}
                  </h3>
                  <p className="mt-2 text-sm text-ink-700">
                    {status === "sent" ? t.sentBody : t.almostBody}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <fieldset>
                    <legend className="mb-2 block text-xs font-medium text-ink-700">
                      {t.audienceLegend}
                    </legend>
                    <div className="grid grid-cols-3 gap-2">
                      {audienceKeys.map((key) => {
                        const active = audience === key;
                        return (
                          <button
                            type="button"
                            key={key}
                            onClick={() => setAudience(key)}
                            aria-pressed={active}
                            className={`rounded-xl border px-2 py-2.5 text-center text-[13px] font-medium transition-colors ${
                              active
                                ? "border-olive-500 bg-olive-100 text-olive-800"
                                : "border-ivory-300 bg-[#111016] text-ink-700 hover:border-olive-400"
                            }`}
                          >
                            {t.audiences[key]}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  {isBusiness && (
                    <fieldset>
                      <legend className="mb-2 block text-xs font-medium text-ink-700">
                        {t.weddingsLegend}{" "}
                        <span className="text-ink-500/70">{t.optional}</span>
                      </legend>
                      <div className="grid grid-cols-4 gap-2">
                        {t.weddingsOptions.map((opt) => {
                          const active = weddings === opt;
                          return (
                            <button
                              type="button"
                              key={opt}
                              onClick={() =>
                                setWeddings(active ? "" : opt)
                              }
                              aria-pressed={active}
                              className={`rounded-xl border px-2 py-2 text-center text-[13px] font-medium transition-colors ${
                                active
                                  ? "border-olive-500 bg-olive-100 text-olive-800"
                                  : "border-ivory-300 bg-[#111016] text-ink-700 hover:border-olive-400"
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>
                  )}

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-medium text-ink-700"
                    >
                      {t.nameLabel}
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.namePlaceholder}
                      className="w-full rounded-xl border border-ivory-300 bg-[#111016] px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-500/60 focus:border-olive-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-medium text-ink-700"
                    >
                      {t.emailLabel}
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.emailPlaceholder}
                      className="w-full rounded-xl border border-ivory-300 bg-[#111016] px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-500/60 focus:border-olive-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="date"
                      className="mb-1.5 block text-xs font-medium text-ink-700"
                    >
                      {t.dateLabel}{" "}
                      <span className="text-ink-500/70">{t.optional}</span>
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
                      {t.problemsLegend}{" "}
                      <span className="text-ink-500/70">{t.optional}</span>
                    </legend>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {t.problems.map((p) => {
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
                    {status === "sending" ? t.submitting : t.submit}
                    {status !== "sending" && (
                      <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    )}
                  </button>
                  {status === "error" && (
                    <p className="text-center text-xs text-[#e0917f]">
                      {t.errorA}
                      {CONTACT_EMAIL}.
                    </p>
                  )}
                  <p className="text-center text-xs text-ink-500">
                    {t.reassurance}
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
