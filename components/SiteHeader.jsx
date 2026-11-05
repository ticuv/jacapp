import Link from "next/link";
import { PLAY_URL, BETA_MAIL } from "./ui";

// One list drives the desktop nav, the phone menu and the footer, so all three share the same order.
const PAGES = [
  { key: "legislatie-rutiera", href: "/legislatie-rutiera/", label: "Regim rutier" },
  { key: "legi-speciale", href: "/legi-speciale/", label: "Legi speciale" },
  { key: "ghiduri-vizuale", href: "/ghiduri-vizuale/", label: "Ghiduri vizuale" },
  { key: "shiftr", href: "/shiftr/", label: "Shiftr" },
  { key: "ghid-operativ", href: "/ghid-operativ/", label: "Ghid operativ" },
  { key: "legislatie-penala", href: "/legislatie-penala/", label: "Penal și CPP" },
];
const LEGAL = [
  { href: "/legal/privacy.html", label: "Confidențialitate" },
  { href: "/legal/terms.html", label: "Termeni" },
  { href: "/legal/cookies.html", label: "Cookie-uri" },
  { href: "/legal/asistenta.html", label: "Asistență" },
  { href: "/legal/stergere-cont.html", label: "Ștergerea contului" },
];

export default function SiteHeader({ current }) {
  const here = (key) => (key === current ? { "aria-current": "page" } : {});
  return (
    <>
      <a className="skip" href="#continut">Sari la conținut</a>
      <header className="hdr">
        <div className="hdr__bar">
          <Link className="brand" href="/" aria-label="JAC, pagina principală">
            <span className="brand__mark"><img src="/assets/img/logo-white-64.webp" width="20" height="27" alt="" /></span>
            <span>JAC</span>
          </Link>
          <nav className="nav" aria-label="Navigare principală">
            {PAGES.map((p) => <Link key={p.key} href={p.href} {...here(p.key)}>{p.label}</Link>)}
          </nav>
          <a className="btn btn--primary btn--sm hdr__cta" href={PLAY_URL || BETA_MAIL}>{PLAY_URL ? "Google Play" : "Acces beta"}</a>
          <details className="mnav" data-mnav="">
            <summary aria-label="Meniu">
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            </summary>
            <nav className="mnav__panel" aria-label="Navigare pe telefon">
              <ul>
                <li><Link href="/" {...here("home")}>Pagina principală</Link></li>
                {PAGES.map((p) => <li key={p.key}><Link href={p.href} {...here(p.key)}>{p.label}</Link></li>)}
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
