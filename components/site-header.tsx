"use client";

import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { LangToggle } from "./lang-toggle";
import { useLang } from "./i18n";

// Absolute "/#…" hrefs so the nav also works from the audience subpages.
const links = [
  { href: "/#para-quem", pt: "Para quem", en: "For whom" },
  { href: "/#modulos", pt: "Módulos", en: "Modules" },
  { href: "/#bastidores", pt: "Bastidores", en: "Backstage" },
  { href: "/#ia", pt: "IA", en: "AI" },
  { href: "/#como-funciona", pt: "Como funciona", en: "How it works" },
  { href: "/#faq", pt: "FAQ", en: "FAQ" },
];

export function SiteHeader() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const cta = lang === "en" ? "Request access" : "Pedir acesso";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-ivory-300/70 bg-[#0d0c11]/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="/" className="flex items-center" aria-label="Wedding OS">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-700 transition-colors hover:text-olive-700"
            >
              {lang === "en" ? l.en : l.pt}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LangToggle />
          <a
            href="/#acesso"
            className="inline-flex items-center rounded-full bg-olive-700 px-5 py-2.5 text-sm font-semibold text-[#17130a] shadow-sm transition-colors hover:bg-olive-800"
          >
            {cta}
          </a>
        </div>

        {/* mobile: toggle + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <LangToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink-900"
            aria-label={
              open
                ? lang === "en"
                  ? "Close menu"
                  : "Fechar menu"
                : lang === "en"
                  ? "Open menu"
                  : "Abrir menu"
            }
            aria-expanded={open}
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-ivory-300/70 bg-[#0d0c11]/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-800 hover:bg-olive-50"
              >
                {lang === "en" ? l.en : l.pt}
              </a>
            ))}
            <a
              href="/#acesso"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-olive-700 px-5 py-3.5 text-center text-base font-semibold text-[#17130a]"
            >
              {cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
