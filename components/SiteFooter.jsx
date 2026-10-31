import Link from "next/link";
import { PAGES } from "./SiteHeader";

const DOCS = [
  { href: "/legal/privacy.html", label: "Confidențialitate" },
  { href: "/legal/terms.html", label: "Termeni" },
  { href: "/legal/cookies.html", label: "Cookie-uri" },
  { href: "/legal/asistenta.html", label: "Asistență" },
];

export default function SiteFooter() {
  return (
    <footer className="foot">
      <Link className="brand" href="/"><img src="/assets/img/logo-64.webp" width="22" height="25" alt="" loading="lazy" /><span>JAC</span></Link>
      <nav aria-label="Pagini și documente">
        {PAGES.map((p) => <Link key={p.key} href={p.href}>{p.label}</Link>)}
        {DOCS.map((d) => <a key={d.href} href={d.href}>{d.label}</a>)}
      </nav>
      <p>© 2026 JAC. Aplicație independentă de informare legislativă. Nu reprezintă Guvernul României, MAI, Poliția Română sau Jandarmeria Română.</p>
    </footer>
  );
}
