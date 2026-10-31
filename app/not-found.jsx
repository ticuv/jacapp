import Link from "next/link";

export const metadata = { title: "Pagina nu există | JAC", robots: { index: false } };

export default function NotFound() {
  return (
    <main className="nf">
      <Link className="brand nf__brand" href="/" aria-label="JAC, pagina principală"><img src="/assets/img/logo-64.webp" width="22" height="25" alt="" /><span>JAC</span></Link>
      <p className="nf__code" aria-hidden="true">404</p>
      <h1 className="display">Pagina nu există.</h1>
      <p className="sub">Adresa s-a schimbat sau a fost scrisă greșit.</p>
      <div className="nf__links">
        <Link className="btn btn--blue" href="/"><span>Pagina principală</span></Link>
        <Link className="btn btn--ghost" href="/legislatie-rutiera/">Legislație rutieră</Link>
        <Link className="btn btn--ghost" href="/shiftr/">Shiftr</Link>
      </div>
    </main>
  );
}
