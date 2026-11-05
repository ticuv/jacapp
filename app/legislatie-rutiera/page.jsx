import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageEffects from "@/components/PageEffects";
import { FACTS as F, Stage, Chip, MainCta, CtaBand, Disclaimer } from "@/components/ui";

export const metadata = {
  title: "Regim rutier: 10 module, amenda calculată | JAC",
  description: "Codul rutier, taxi, ride-sharing, rovinieta, transport rutier, regimul drumurilor, tahograf, parcări, RCA și procedurile rutiere: 10 module offline, cu clasa de sancțiune, punctele-amendă (216,25 lei) și punctele de penalizare calculate pe fiecare fișă.",
  alternates: { canonical: "https://aplicatiajac.ro/legislatie-rutiera/" },
  openGraph: { title: "Regim rutier în JAC: 10 module, amenda calculată", url: "https://aplicatiajac.ro/legislatie-rutiera/", siteName: "JAC", locale: "ro_RO", type: "website", images: [{ url: "https://aplicatiajac.ro/assets/img/og-jac.jpg", width: 1200, height: 630 }] },
};

const MODULES = [
  { c: "#DC2626", t: "Codul rutier", a: "OUG 195/2002 + HG 1391/2006 (regulamentul)", n: "541 de fapte" },
  { c: "#2F6BFF", t: "Proceduri rutiere", a: "Măsuri tehnico-administrative, reținerea permisului, dovada înlocuitoare, reguli pentru minori", n: "31 de proceduri" },
  { c: "#F59E0B", t: "Taxi și închiriere", a: "Legea 38/2003", n: "71 de fapte" },
  { c: "#22C55E", t: "Transport alternativ (ride-sharing)", a: "OUG 49/2019", n: "20 de fapte" },
  { c: "#38BDF8", t: "Rovinieta / tarife rutiere", a: "Legea 226/2023", n: "17 fapte" },
  { c: "#8B5CF6", t: "Transport rutier (norme UE)", a: "HG 1317/2023", n: "173 de fapte" },
  { c: "#A3A3A3", t: "Regimul drumurilor", a: "OG 43/1997", n: "63 de fapte" },
  { c: "#EF7A73", t: "Tahograf, timpi de conducere și odihnă", a: "OG 37/2007", n: "91 de fapte" },
  { c: "#F08A5D", t: "Parcări pentru gravide și copii sub 5 ani", a: "Legea 280/2023", n: "" },
  { c: "#69BFAE", t: "RCA", a: "Legea 132/2017", n: "" },
];

const CLASSES = [
  ["I", "2–3", "432,50 – 648,75"],
  ["II", "4–5", "865,00 – 1.081,25"],
  ["III", "6–8", "1.297,50 – 1.730,00"],
  ["IV", "9–20", "1.946,25 – 4.325,00"],
  ["V", "21–100", "4.541,25 – 21.625,00"],
];

export default function RutierPage() {
  return (
    <>
      <SiteHeader current="legislatie-rutiera" />
      <main id="continut">
        <section className="phero">
          <div className="wrap split">
            <div className="copy">
              <ol className="crumbs" aria-label="Unde ești"><li><Link href="/">Acasă</Link></li><li aria-current="page">Regim rutier</li></ol>
              <p className="eyebrow" data-r="">Regim rutier · {F.rutierModules} module · {F.rutierFapte} fapte și proceduri</p>
              <h1 className="h1" data-r="">Amenda, <span className="soft">calculată pe fișă.</span></h1>
              <p className="lead" data-r="">Clasa de sancțiune, punctele-amendă, amenda în lei și punctele de penalizare, pe aceeași fișă, fără semnal. Punctul-amendă este <b className="mono">216,25 lei</b> de la 01.07.2026.</p>
              <div className="btns" data-r=""><MainCta /><a className="btn btn--glass" href="#module">Cele 10 module</a></div>
            </div>
            <Stage
              front="app-rutier-module"
              back="app-rutier-cautare"
              backRight
              priority
              frontAlt="Lista Regim rutier din JAC: 10 module și 1.011 fapte și proceduri. Sus, valoarea punctului-amendă de 216,25 lei, valabilă de la 1 iulie 2026; apoi Codul rutier (541 de fapte), Proceduri rutiere (31), Legea 38/2003 (71), OUG 49/2019 (20), Legea 226/2023 (17), HG 1317/2023 (173), OG 43/1997 (63) și OG 37/2007 (91)."
            >
              <Chip pos="tl" tone="blue" k="Punct-amendă">216,25 lei</Chip>
              <Chip pos="br" k="Regim rutier">10 module</Chip>
            </Stage>
          </div>
        </section>

        <section className="sec sec--tight" id="module" aria-labelledby="mod-title">
          <div className="wrap">
            <div className="sec__head">
              <p className="eyebrow" data-r="">Modulele</p>
              <h2 id="mod-title" className="h2" data-r="">Tot traficul, în 10 module.</h2>
              <p className="lead" data-r="">De la Codul rutier și regulament la taxi, tahograf și RCA. Fiecare modul se deschide pe fișe căutabile, cu filtre pe act, contravenții, proceduri și infracțiuni.</p>
            </div>
            <ul className="mods" style={{ marginTop: 0 }}>
              {MODULES.map((m, i) => (
                <li key={m.t} className="glass" data-r="" style={{ "--d": i % 4, "--c": m.c }}>
                  <span className="dot" aria-hidden="true"><i></i></span>
                  <span><b>{m.t}</b><span>{m.a}{m.n ? ` · ${m.n}` : ""}</span></span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="sec" aria-labelledby="fisa-title">
          <div className="wrap split split--flip">
            <div className="copy">
              <p className="eyebrow" data-r="">Anatomia unei fișe</p>
              <h2 id="fisa-title" className="h2" data-r="">Tot ce scrii în PV, <span className="soft">într-un singur ecran.</span></h2>
              <ol className="anat">
                <li className="glass" data-r=""><b>Descrierea faptei</b>, exact cum o prevede actul normativ.</li>
                <li className="glass" data-r="" style={{ "--d": 1 }}><b>Referințele legale</b>: prevăzută de, sancționată de și cine o constată.</li>
                <li className="glass" data-r="" style={{ "--d": 2 }}><b>Clasa de sancțiune și punctele-amendă</b>, cu amenda în lei calculată.</li>
                <li className="glass" data-r="" style={{ "--d": 3 }}><b>Punctele de penalizare</b> și jumătatea din minimul amenzii, plătibilă în 15 zile.</li>
                <li className="glass" data-r="" style={{ "--d": 4 }}><b>Măsurile complementare</b>: suspendarea dreptului de a conduce, reținerea permisului, cumulul de puncte.</li>
              </ol>
            </div>
            <div>
              <Stage
                front="app-rutier-fisa"
                frontAlt="Fișa din Codul rutier pentru folosirea telefonului mobil fără dispozitiv mâini libere: descrierea faptei, prevăzută de art. 36 alin. (3) și sancționată de art. 101 alin. (2) din OUG 195/2002, constatată de polițistul rutier; clasa a III-a, 6–8 puncte-amendă, amendă 1.297,50–1.730,00 lei, 4 puncte de penalizare, jumătate din minim 648,75 lei."
                variant="stage--left"
              >
                <Chip pos="tl" k="Clasa a III-a">6–8 puncte-amendă</Chip>
                <Chip pos="mr" tone="red" k="Amenda">1.297,50 – 1.730 lei</Chip>
                <Chip pos="bl" k="Penalizare">4 puncte</Chip>
              </Stage>
            </div>
          </div>
        </section>

        <section className="sec sec--tight" aria-labelledby="calc-title">
          <div className="wrap split">
            <div className="copy">
              <p className="eyebrow" data-r="">Calculul automat</p>
              <h2 id="calc-title" className="h2" data-r="">Punctul-amendă <span className="mono blue">216,25</span> lei.</h2>
              <p className="lead" data-r="">Când se schimbă valoarea punctului-amendă, toate amenzile din aplicație se recalculează. Încearcă mai jos.</p>
              <div className="calc glass" data-rcalc="" data-point="216.25" data-r="" role="group" aria-labelledby="rcalc-k">
                <p className="calc__k" id="rcalc-k">Alege clasa de sancțiune</p>
                <fieldset className="seg">
                  <legend className="sr-only">Clasa de sancțiune</legend>
                  {["I", "II", "III", "IV", "V"].map((c, i) => (
                    <span key={c} style={{ display: "contents" }}>
                      <input type="radio" name="clasa" id={`cls-${c}`} value={c} defaultChecked={i === 0} />
                      <label htmlFor={`cls-${c}`}>Cl. {c}</label>
                    </span>
                  ))}
                </fieldset>
                <dl className="calc__out" aria-live="polite">
                  <div><dt>Puncte-amendă</dt><dd data-o="pts">2–3</dd></div>
                  <div><dt>Jumătate din minim, în 15 zile</dt><dd data-o="half">216,25 lei</dd></div>
                  <div className="wide is-red"><dt>Amenda</dt><dd data-o="fine">432,50 lei – 648,75 lei</dd></div>
                </dl>
              </div>
            </div>
            <div data-r="">
              <table className="plan glass">
                <caption className="sr-only">Clasele de sancțiune din OUG 195/2002 la punctul-amendă de 216,25 lei</caption>
                <thead><tr><th scope="col">Clasa</th><th scope="col">Puncte</th><th scope="col" style={{ width: "auto", textAlign: "right" }}>Amenda (lei)</th></tr></thead>
                <tbody>
                  {CLASSES.map(([c, p, f]) => (
                    <tr key={c}><td><b>Clasa {c}</b></td><td className="mono">{p}</td><td className="mono" style={{ textAlign: "right", width: "auto" }}>{f}</td></tr>
                  ))}
                </tbody>
              </table>
              <p className="fine" style={{ marginTop: 12 }}>Art. 98 din OUG 195/2002. Jumătatea din minim se plătește în 15 zile de la comunicarea procesului-verbal.</p>
            </div>
          </div>
        </section>

        <section className="sec sec--tight" aria-labelledby="proc-title">
          <div className="wrap">
            <div className="sec__head">
              <p className="eyebrow" data-r="">Proceduri rutiere</p>
              <h2 id="proc-title" className="h2" data-r="">Pașii de după amendă.</h2>
            </div>
            <ul className="tiles tiles--4">
              <li className="tile glass" data-r=""><span className="tile__k">01</span><h3>Reținerea permisului</h3><p>Când se reține, pentru cât timp și ce se consemnează.</p></li>
              <li className="tile glass" data-r="" style={{ "--d": 1 }}><span className="tile__k">02</span><h3>Dovada înlocuitoare</h3><p>Cu sau fără drept de circulație și termenele ei.</p></li>
              <li className="tile glass" data-r="" style={{ "--d": 2 }}><span className="tile__k">03</span><h3>Măsuri tehnico-administrative</h3><p>Retragerea certificatului, ridicarea vehiculului și celelalte măsuri.</p></li>
              <li className="tile glass" data-r="" style={{ "--d": 3 }}><span className="tile__k">04</span><h3>Reguli pentru minori</h3><p>Ce se aplică atunci când contravenientul nu are 18 ani.</p></li>
            </ul>
            <div style={{ marginTop: 28 }} data-r=""><Disclaimer /></div>
          </div>
        </section>

        <CtaBand title="Codul rutier, fără semnal." />
      </main>
      <SiteFooter />
      <PageEffects page="legislatie-rutiera" />
    </>
  );
}
