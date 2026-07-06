/** Wedding OS wordmark: a small monogram tile + name. */
export function Logo({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const isLight = variant === "light";
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-lg font-display text-[15px] font-semibold ${
          isLight
            ? "bg-ivory-50 text-olive-800"
            : "bg-olive-700 text-ivory-50"
        }`}
      >
        W
      </span>
      <span
        className={`font-display text-[19px] font-semibold tracking-tight ${
          isLight ? "text-ivory-50" : "text-ink-900"
        }`}
      >
        Wedding<span className="text-gold-500">OS</span>
      </span>
    </span>
  );
}
