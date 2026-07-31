"use client";

import { useLang, type Lang } from "./i18n";

/**
 * Compact PT/EN segmented control. Sits in the top corner (header) so it is
 * always reachable while scrolling, styled to match the dark champagne brand.
 */
const OPTIONS: { code: Lang; label: string; aria: string }[] = [
  { code: "pt", label: "PT", aria: "Mudar para português" },
  { code: "en", label: "EN", aria: "Switch to English" },
];

export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label={lang === "en" ? "Language" : "Idioma"}
      className={`inline-flex items-center gap-0.5 rounded-full border border-ivory-300/70 bg-white/[0.04] p-0.5 ${className}`}
    >
      <span
        aria-hidden
        className="pl-1.5 pr-0.5 text-olive-700"
        title={lang === "en" ? "Language" : "Idioma"}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.5 2.5 3.8 5.7 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z" />
        </svg>
      </span>
      {OPTIONS.map((o) => {
        const active = lang === o.code;
        return (
          <button
            key={o.code}
            type="button"
            onClick={() => setLang(o.code)}
            aria-pressed={active}
            aria-label={o.aria}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
              active
                ? "bg-olive-700 text-[#17130a]"
                : "text-ink-500 hover:text-olive-700"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
