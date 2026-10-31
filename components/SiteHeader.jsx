import Link from "next/link";

// One list drives the desktop nav and the phone menu, so both always share the same order and the same "you are here".
const PAGES = [
  { key: "legislatie-penala", href: "/legislatie-penala/", label: "Legislație penală" },
  { key: "legislatie-rutiera", href: "/legislatie-rutiera/", label: "Legislație rutieră" },
  { key: "legi-speciale", href: "/legi-speciale/", label: "Legi speciale" },
  { key: "ghid-operativ", href: "/ghid-operativ/", label: "Ghid operativ" },
  { key: "shiftr", href: "/shiftr/", label: "Shiftr" },
];
const LEGAL = [
  { href: "/legal/terms.html", label: "Termeni și condiții" },
  { href: "/legal/privacy.html", label: "Confidențialitate" },
  { href: "/legal/cookies.html", label: "Cookie-uri" },
  { href: "/legal/asistenta.html", label: "Asistență" },
];

export default function SiteHeader({ current }) {
  const here = (key) => (key === current ? { "aria-current": "page" } : {});
  return (
    <>
      <a className="skip" href="#continut">Sari la conținut</a>
      <header className="top">
        <div className="top__bar">
          <Link className="brand" href="/" aria-label="JAC, pagina principală">
            <img src="/assets/img/logo-64.webp" width="22" height="25" alt="" />
            <span>JAC</span>
          </Link>
          <nav className="nav" aria-label="Navigare principală">
            {PAGES.map((p) => <Link key={p.key} href={p.href} {...here(p.key)}>{p.label}</Link>)}
            <Link href="/#preturi">Prețuri</Link>
          </nav>
          <a className="pill" href="#acces">Acces beta</a>
          <details className="mnav">
            <summary aria-label="Meniu">
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            </summary>
            <nav aria-label="Navigare pe telefon">
              <ul>
                <li><Link className="mnav__home" href="/" {...here("home")}>Pagina principală</Link></li>
                {PAGES.map((p) => <li key={p.key}><Link href={p.href} {...here(p.key)}>{p.label}</Link></li>)}
                <li><Link href="/#preturi">Prețuri</Link></li>
              </ul>
              <ul className="mnav__legal" aria-label="Documente">
                {LEGAL.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
              </ul>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}

export { PAGES, LEGAL };
