"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

/**
 * Lightweight, dependency-free i18n for the landing page.
 *
 * The page is Portuguese-first (server-rendered PT for SEO). This provider
 * lets a visitor switch to curated English instantly, client-side, without a
 * reload. Non-Portuguese browsers default to English on first visit, which
 * matters for the foreign family & friends in our story.
 */
export type Lang = "pt" | "en";

const STORAGE_KEY = "weddingos-lang";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLangState] = useState<Lang>("pt");

  // Resolve the initial language after hydration: a saved choice wins;
  // otherwise a non-Portuguese browser gets English.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "pt" || stored === "en") {
        setLangState(stored);
        return;
      }
    } catch {
      // localStorage may be unavailable (private mode) — fall through.
    }
    if (
      typeof navigator !== "undefined" &&
      navigator.language &&
      !navigator.language.toLowerCase().startsWith("pt")
    ) {
      setLangState("en");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "pt-PT";
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore persistence failures
    }
  }, []);

  const toggle = useCallback(
    () => setLang(lang === "pt" ? "en" : "pt"),
    [lang, setLang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return ctx;
}
