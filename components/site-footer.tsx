import { Logo } from "./logo";
import { IconInstagram } from "./icons";

const INSTAGRAM_URL = "https://instagram.com/weddingos.pt";

const groups = [
  {
    title: "Produto",
    links: [
      { href: "#historia", label: "A nossa história" },
      { href: "#modulos", label: "Módulos" },
      { href: "#bastidores", label: "Bastidores" },
      { href: "#ia", label: "IA" },
      { href: "#a-chegar", label: "A chegar" },
      { href: "#como-funciona", label: "Como funciona" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Módulos",
    links: [
      { href: "#modulos", label: "Convidados & RSVP" },
      { href: "#modulos", label: "Plano de mesas" },
      { href: "#modulos", label: "Fornecedores" },
      { href: "#modulos", label: "Catering & restrições" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ivory-300/70 bg-surface-50">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-700">
              O sistema operativo do vosso casamento. Planeiem, giram e vivam o
              dia: tudo num só sítio.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#acesso"
                className="inline-flex items-center rounded-full bg-olive-700 px-5 py-2.5 text-sm font-semibold text-[#17130a] transition-colors hover:bg-olive-800"
              >
                Pedir acesso
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @weddingos.pt"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory-300/70 text-ink-700 transition-colors hover:border-olive-400 hover:text-olive-700"
              >
                <IconInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                {g.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-ink-700 transition-colors hover:text-olive-700"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ivory-300/70 pt-6 text-sm text-ink-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Wedding OS. Todos os direitos reservados.</p>
          <p className="font-display text-olive-700">
            Feito com cuidado, para o dia mais importante.
          </p>
        </div>
      </div>
    </footer>
  );
}
