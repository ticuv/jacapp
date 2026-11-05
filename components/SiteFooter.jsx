import Link from "next/link";
import { PAGES, LEGAL } from "./SiteHeader";

export default function SiteFooter() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__grid">
          <div>
            <Link className="brand" href="/" aria-label="JAC, pagina principală">
              <span className="brand__mark"><img src="/assets/img/logo-white-64.webp" width="20" height="27" alt="" loading="lazy" /></span>
              <span>JAC</span>
            </Link>
            <p className="ftr__slogan">Unicul instrument legislativ care le are pe toate.</p>
          </div>
          <nav aria-labelledby="ftr-pages">
            <h2 id="ftr-pages">Aplicația</h2>
            <ul>
              <li><Link href="/">Pagina principală</Link></li>
              {PAGES.map((p) => <li key={p.key}><Link href={p.href}>{p.label}</Link></li>)}
            </ul>
          </nav>
          <nav aria-labelledby="ftr-legal">
            <h2 id="ftr-legal">Documente</h2>
            <ul>
              {LEGAL.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
            </ul>
          </nav>
        </div>
        <p className="ftr__legal">© 2026 JAC. Aplicație dezvoltată independent. Nu reprezintă o instituție publică și nu este afiliată, aprobată sau susținută de Guvernul României, MAI, Poliția Română, Jandarmeria Română ori alte autorități. Textele legislative provin de pe <a href="https://legislatie.just.ro" rel="noopener">legislatie.just.ro</a>.</p>
      </div>
    </footer>
  );
}
