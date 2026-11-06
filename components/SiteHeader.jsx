import Link from "next/link";
import { PLAY_URL, BETA_MAIL } from "@/components/ui";

// One list drives the desktop links, the phone menu and the footer, so all three share the same order.
const PAGES = [
  { key: "legislatie-rutiera", href: "/legislatie-rutiera/", label: "Regim rutier" },
  { key: "legi-speciale", href: "/legi-speciale/", label: "Legi speciale" },
  { key: "ghiduri-vizuale", href: "/ghiduri-vizuale/", label: "Ghiduri vizuale" },
  { key: "shiftr", href: "/shiftr/", label: "Shiftr" },
  { key: "ghid-operativ", href: "/ghid-operativ/", label: "Ghid operativ" },
  { key: "legislatie-penala", href: "/legislatie-penala/", label: "Penal și CPP" },
];
// the bar shows four; the phone menu and the footer show every page
const NAV = ["legislatie-rutiera", "ghiduri-vizuale", "shiftr", "ghid-operativ"];
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
        <div className="wrap hdr__bar">
          <Link className="brand" href="/" aria-label="JAC, pagina principală">
            <img src="/assets/img/logo-white-64.webp" width="18" height="24" alt="" />
            <span>JAC</span>
          </Link>
          <nav className="nav" aria-label="Navigare principală">
            {PAGES.filter((p) => NAV.includes(p.key)).map((p) => <Link key={p.key} href={p.href} {...here(p.key)}>{p.label}</Link>)}
          </nav>
          <a className="hdr__cta" href={PLAY_URL || BETA_MAIL} aria-label={PLAY_URL ? "Descarcă JAC din Google Play" : "Cere acces la beta JAC"} {...(PLAY_URL ? { rel: "noopener" } : {})}>
            {PLAY_URL
              ? <><span className="hdr__cta-l">Descarcă din Google Play</span><span className="hdr__cta-s" aria-hidden="true">Descarcă</span></>
              : <><span className="hdr__cta-l">Cere acces la beta</span><span className="hdr__cta-s" aria-hidden="true">Acces beta</span></>}
          </a>
          <div className="mnav" data-mnav="">
            <button type="button" className="mnav__btn" aria-expanded="false" aria-controls="mnav-panel">Meniu</button>
            <nav className="mnav__panel" id="mnav-panel" aria-label="Navigare pe telefon" hidden>
              <ul>
                <li><Link href="/" {...here("home")}>Pagina principală</Link></li>
                {PAGES.map((p) => <li key={p.key}><Link href={p.href} {...here(p.key)}>{p.label}</Link></li>)}
              </ul>
              <ul className="mnav__legal" aria-label="Documente">
                {LEGAL.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export { PAGES, LEGAL };
