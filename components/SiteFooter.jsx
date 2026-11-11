import Link from "next/link";
import { PAGES, LEGAL } from "./SiteHeader";
import { StoreDialog } from "./ui";

// The close of every page: the links and the independence notice, then the name, so large the screen's edge cuts it.
export default function SiteFooter() {
  return (
    <footer className="ft">
      <div className="wrap ft__top">
        <nav className="ft__nav" aria-label="Pagini">
          <Link href="/">Pagina principală</Link>
          {PAGES.map((p) => <Link key={p.key} href={p.href}>{p.label}</Link>)}
        </nav>
        <nav className="ft__nav" aria-label="Documente">
          {LEGAL.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <p className="ft__legal">JAC este o aplicație dezvoltată independent și nu reprezintă o instituție publică. Nu este afiliată, aprobată sau susținută de Guvernul României, MAI, Poliția Română, Jandarmeria Română ori alte autorități. Textele legislative provin din actele publice de pe <a href="https://legislatie.just.ro" rel="noopener">legislatie.just.ro</a>; aplicația are rol de orientare și nu înlocuiește forma oficială din Monitorul Oficial. Spețele și PV-urile model sunt exemple fictive. Calculele Shiftr sunt orientative. © 2026 JAC.</p>
      </div>
      <p className="ft__mark" aria-hidden="true">JAC</p>
      <StoreDialog />
    </footer>
  );
}
