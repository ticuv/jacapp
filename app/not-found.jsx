import Link from "next/link";

export const metadata = { title: "Pagina nu există | JAC", robots: { index: false } };

export default function NotFound() {
  return (
    <main className="nf">
      <Link className="brand" href="/" aria-label="JAC, pagina principală">
        <span className="brand__mark"><img src="/assets/img/logo-white-64.webp" width="20" height="27" alt="" /></span>
        <span>JAC</span>
      </Link>
      <p className="nf__code" aria-hidden="true">404</p>
      <h1 className="h2">Pagina nu există.</h1>
      <p className="lead">Adresa s-a schimbat sau a fost scrisă greșit.</p>
      <div className="btns">
        <Link className="btn btn--primary" href="/"><span>Pagina principală</span></Link>
        <Link className="btn btn--glass" href="/legislatie-rutiera/">Regim rutier</Link>
        <Link className="btn btn--glass" href="/ghiduri-vizuale/">Ghiduri vizuale</Link>
      </div>
    </main>
  );
}
