import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageEffects from "@/components/PageEffects";
import { Stage, Chip, MainCta, CtaBand } from "@/components/ui";

export const metadata = {
  title: "Shiftr: turele, norma și orele suplimentare, calculate | JAC",
  description: "Planificatorul de ture Shiftr din JAC: ture de zi, noapte, schimburi, concediu, recuperare și misiuni; norma lunii (zile lucrătoare × 8h minus sărbătorile legale), orele suplimentare și soldul calculate automat. Datele rămân pe telefon.",
  alternates: { canonical: "https://aplicatiajac.ro/shiftr/" },
  openGraph: { title: "Shiftr în JAC: norma și orele suplimentare, calculate", url: "https://aplicatiajac.ro/shiftr/", siteName: "JAC", locale: "ro_RO", type: "website", images: [{ url: "https://aplicatiajac.ro/assets/img/og-jac-2026-11.jpg", width: 1200, height: 630 }] },
};

const TYPES = [
  ["Z", "Zi", "#2F6BFF", "tura de zi"], ["N", "Noapte", "#F08A5D", "tura de noapte"], ["S1", "Schimbul 1", "#7FA6FF", "program în schimburi"], ["S2", "Schimbul 2", "#8B5CF6", "program în schimburi"],
  ["S3", "Schimbul 3", "#38BDF8", "program în schimburi"], ["C", "Concediu", "#E8B54A", "concediul și medicalul se calculează singure"], ["R", "Recuperare", "#69BFAE", "scade din soldul de ore suplimentare"], ["L", "Liber", "#8B97A1", "nu adaugă ore lucrate"],
];

const ROWS = [
  ["Calendarul de ture și șabloanele", "y", "y"],
  ["Toate tipurile de tură și misiunile speciale", "y", "y"],
  ["Program fracționat, în două intervale", "y", "y"],
  ["Norma lunii, cu sărbătorile legale", "y", "y"],
  ["Orele lucrate față de normă", "y", "y"],
  ["Partajarea calendarului cu colegii", "y", "y"],
  ["Soldul de ore suplimentare", "n", "p"],
  ["Recuperările scăzute din sold", "n", "p"],
  ["Ore adăugate manual din altă aplicație", "n", "p"],
  ["Raportul PDF lunar", "y", "y"],
  ["Soldul și recuperările în raportul PDF", "n", "p"],
  ["Concedii și medicale calculate automat", "n", "p"],
];
const MARK = { y: ["Da", "inclus"], p: ["PRO", "inclus în PRO"], n: ["Nu", "nu e inclus"] };

export default function ShiftrPage() {
  return (
    <>
      <SiteHeader current="shiftr" />
      <main id="continut">
        <section className="phero">
          <div className="wrap split">
            <div className="copy">
              <ol className="crumbs" aria-label="Unde ești"><li><Link href="/">Acasă</Link></li><li aria-current="page">Shiftr</li></ol>
              <p className="eyebrow" data-r="">Shiftr · planificatorul de ture</p>
              <h1 className="h1" data-r="">Orele se calculează <span className="soft">singure.</span></h1>
              <p className="lead" data-r="">Notezi turele, iar Shiftr calculează norma, orele suplimentare și soldul după recuperări. Datele rămân pe telefon.</p>
              <div className="btns" data-r=""><MainCta /><a className="btn btn--glass" href="#calcul">Cum calculează</a></div>
            </div>
            <Stage
              front="app-shiftr-a"
              back="app-shiftr-editare"
              backAlt="Foaia Modifică tura din Shiftr pentru 20 noiembrie: șabloanele Zi (06:00–18:00) și Noapte (18:00–06:00), apoi programul fracționat 08:00–12:00 și al doilea interval 18:00–22:00, durata 8h și alarma pusă la 07:00."
              backRight
              priority
              frontAlt="Calendarul Shiftr pentru noiembrie 2026: ture de zi (Z) și de noapte (N), zile libere, două zile de program, iar dedesubt 172h lucrate din 160h și soldul de ore suplimentare +12h."
            >
              <Chip pos="tl" k="Normă legală">160h</Chip>
              <Chip pos="mr" tone="red" k="Sold">+6h</Chip>
              <Chip pos="bl" tone="teal" k="Datele tale">Pe telefon</Chip>
            </Stage>
          </div>
        </section>

        <section className="sec sec--tight" aria-labelledby="types-title">
          <div className="wrap">
            <div className="sec__head">
              <p className="eyebrow" data-r="">Turele</p>
              <h2 id="types-title" className="h2" data-r="">Orice program, o literă.</h2>
              <p className="lead" data-r="">Zi, noapte, cele trei schimburi, concediu, recuperare, liber și misiuni speciale. Șabloanele (ex. Zi 06:00–18:00, Noapte 18:00–06:00) se aplică dintr-o atingere, iar o zi poate avea și program fracționat, în două intervale.</p>
            </div>
            <ul className="mods" style={{ marginTop: 0 }}>
              {TYPES.map(([k, t, c, d], i) => (
                <li key={k} className="glass" data-r="" style={{ "--d": i % 4, "--c": c }}>
                  <span className="dot" aria-hidden="true" style={{ fontFamily: "var(--mono)", fontWeight: 800, fontSize: 13, color: c }}>{k}</span>
                  <span><b>{t}</b><span>{d}</span></span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="sec" id="calcul" aria-labelledby="calc-title">
          <div className="wrap split split--flip">
            <div className="copy">
              <p className="eyebrow" data-r="">Calculele</p>
              <h2 id="calc-title" className="h2" data-r="">Normă, peste normă, <span className="soft">sold.</span></h2>
              <ol className="formula" style={{ marginTop: 28 }}>
                <li className="glass" data-r=""><b>Norma lunii</b><span><code>zile lucrătoare × 8h</code> minus sărbătorile legale. În noiembrie 2026: <code>21 × 8h − 1 sărbătoare = 160h</code>.</span></li>
                <li className="glass" data-r="" style={{ "--d": 1 }}><b>Orele suplimentare</b><span>Se calculează singure: <code>ore lucrate − normă</code>.</span></li>
                <li className="glass" data-r="" style={{ "--d": 2 }}><b>Concediile și medicalele</b><span>Fără bătăi de cap cu calcularea lor: Shiftr le calculează singur în normă, inclusiv când cad în weekend sau de sărbători.</span></li>
                <li className="glass" data-r="" style={{ "--d": 3 }}><b>Soldul</b><span>Scade cu recuperările acordate: <code>sold = peste normă − recuperări</code>.</span></li>
                <li className="glass" data-r="" style={{ "--d": 4 }}><b>Ore din altă aplicație</b><span>Orele aduse din altă evidență se adaugă manual, cu butonul „+” de lângă sold.</span></li>
              </ol>
            </div>
            <div className="live" data-shiftr2="" data-norm="160">
              <p className="live__num mono" aria-live="polite"><span className="sr-only">Sold ore suplimentare: </span><span data-o="bal">+12h</span></p>
              <div className="calc2" role="group" aria-label="Exemplu de calcul Shiftr, noiembrie 2026">
                <div className="calc2__row"><span>Normă</span><b className="mono">160h</b></div>
                <div className="calc2__row"><span>Lucrate</span><b className="mono" data-o="lucrate">172h</b></div>
                <label className="calc2__row calc2__check"><span>O noapte în plus, pe 23</span><span className="calc2__toggle"><input type="checkbox" data-extra="12" /><b className="mono">+12h</b></span></label>
                <label className="calc2__row calc2__check"><span>Tura din 17 devine recuperare de 8h</span><span className="calc2__toggle"><input type="checkbox" data-rec="8" /><b className="mono">−8h</b></span></label>
              </div>
              <div className="live__phone">
                <span className="hero__halo stage__halo" aria-hidden="true"></span>
                <figure className="phone shiftr-stack" data-ui=""><img className="shiftr-st is-on" data-st="a" src="/assets/img/screens/app-shiftr-a-800.webp" srcSet="/assets/img/screens/app-shiftr-a-480.webp 480w, /assets/img/screens/app-shiftr-a-800.webp 800w, /assets/img/screens/app-shiftr-a-1175.webp 1175w" sizes="(min-width: 1024px) 300px, 64vw" width="1175" height="2560" alt="Shiftr, noiembrie 2026: 172h lucrate din 160h normă, sold ore suplimentare +12h, acumulate +12h." loading="lazy" decoding="async" /><img className="shiftr-st" data-st="b" src="/assets/img/screens/app-shiftr-b-800.webp" srcSet="/assets/img/screens/app-shiftr-b-480.webp 480w, /assets/img/screens/app-shiftr-b-800.webp 800w, /assets/img/screens/app-shiftr-b-1175.webp 1175w" sizes="(min-width: 1024px) 300px, 64vw" width="1175" height="2560" alt="Shiftr, noiembrie 2026, cu tura de zi din 17 noiembrie trecută ca recuperare de 8h: 168h din 160h, sold 0h, acumulate +8h și 1 recuperare în lună −8h." loading="lazy" decoding="async" /><img className="shiftr-st" data-st="c" src="/assets/img/screens/app-shiftr-c-800.webp" srcSet="/assets/img/screens/app-shiftr-c-480.webp 480w, /assets/img/screens/app-shiftr-c-800.webp 800w, /assets/img/screens/app-shiftr-c-1175.webp 1175w" sizes="(min-width: 1024px) 300px, 64vw" width="1175" height="2560" alt="Shiftr, noiembrie 2026, cu o noapte în plus pe 23 noiembrie: 184h din 160h, sold +24h." loading="lazy" decoding="async" /><img className="shiftr-st" data-st="d" src="/assets/img/screens/app-shiftr-d-800.webp" srcSet="/assets/img/screens/app-shiftr-d-480.webp 480w, /assets/img/screens/app-shiftr-d-800.webp 800w, /assets/img/screens/app-shiftr-d-1175.webp 1175w" sizes="(min-width: 1024px) 300px, 64vw" width="1175" height="2560" alt="Shiftr, noiembrie 2026, cu o noapte în plus și o recuperare de 8h: 180h din 160h, sold +12h, acumulate +20h și 1 recuperare în lună −8h." loading="lazy" decoding="async" /></figure>
              </div>
              <p className="fine">Patru ecrane reale din aplicație, unul pentru fiecare combinație. Calculele Shiftr sunt orientative.</p>
            </div>
          </div>
        </section>

        <section className="sec" id="pdf" aria-labelledby="pdf-title">
          <div className="wrap">
            <div className="sec__head">
              <p className="eyebrow" data-r="">Nou · raportul lunar</p>
              <h2 id="pdf-title" className="h2" data-r="">Luna întreagă, <span className="soft">într-un PDF.</span></h2>
              <p className="lead" data-r="">Un buton deasupra calendarului: Shiftr scoate evidența lunii, gata de printat sau de trimis. Ziua, tura, intervalele lucrate și orele, cu turele de noapte împărțite corect pe cele două zile, weekendurile și sărbătorile marcate, legenda și observațiile.</p>
            </div>
            <figure className="glass" data-r="scale" style={{ margin: "36px auto 0", maxWidth: 1100, padding: 10, borderRadius: 28 }}>
              <img src="/assets/img/screens/app-shiftr-pdf-1400.webp" srcSet="/assets/img/screens/app-shiftr-pdf-800.webp 800w, /assets/img/screens/app-shiftr-pdf-1400.webp 1400w, /assets/img/screens/app-shiftr-pdf-2000.webp 2000w" sizes="(min-width: 1180px) 1080px, 94vw" width="2000" height="1413" alt="Raportul PDF Evidența turelor pentru noiembrie 2026, generat de Shiftr: norma lunii 160h, ore lucrate 164h, ore suplimentare 4h, soldul la zi 16h, ore de noapte 56h, weekend și sărbători 60h, recuperări 8h; tabelul pe zile cu tura (Z, N, L, R, P), intervalele lucrate și orele, legenda turelor și observațiile (20.11 program fracționat, 30.11 Sfântul Andrei)." loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "auto", borderRadius: 20 }} />
            </figure>
            <ul className="checks" data-r="" style={{ maxWidth: 820, margin: "28px auto 0" }}>
              <li><b>Ore pe fiecare zi.</b> Doar ce cade între 00:00 și 24:00, ca pe foaia de pontaj.</li>
              <li><b>Norma, noaptea, weekendul, sărbătorile.</b> Totalurile lunii, sus, pe carduri.</li>
              <li><b>Soldul și recuperările</b> apar în raport în PRO.</li>
            </ul>
          </div>
        </section>

        <section className="sec sec--tight" aria-labelledby="sold-title">
          <div className="wrap split">
            <div className="copy">
              <p className="eyebrow" data-r="">Soldul, explicat</p>
              <h2 id="sold-title" className="h2" data-r="">Știi de unde vine <span className="soft">fiecare oră.</span></h2>
              <p className="lead" data-r="">„Cum se calculează soldul” arată pe pași regula din Codul muncii: ce lucrezi peste normă intră în sold, se recuperează în 90 de zile cu timp liber plătit, iar ce nu recuperezi se plătește cu spor. Plus soldul tău, lună cu lună, și următorul termen de recuperare.</p>
              <ul className="checks" data-r="">
                <li><b>Art. 120–123 Codul muncii,</b> aplicate pe turele tale.</li>
                <li><b>Termenul de 90 de zile</b> pentru fiecare oră, nu pentru toată luna.</li>
              </ul>
            </div>
            <Stage
              front="app-shiftr-sold"
              frontAlt="Foaia Cum se calculează soldul din Shiftr: patru pași — pornești de la soldul adus, ce lucrezi peste normă intră în sold, le recuperezi în 90 de zile, ce nu recuperezi se plătește — apoi soldul tău: ore suplimentare noi +16h, recuperări efective 0h, sold +16h și următorul termen de recuperare, 28 decembrie 2026."
              back="app-shiftr-a"
              backAlt=""
              backRight
            />
          </div>
        </section>

        <section className="sec sec--tight" aria-labelledby="plan-title">
          <div className="wrap split">
            <div className="copy">
              <p className="eyebrow" data-r="">Gratuit și PRO</p>
              <h2 id="plan-title" className="h2" data-r="">Calendarul e gratuit. <span className="soft">Soldul e PRO.</span></h2>
              <p className="lead" data-r="">Calendarul și orele lucrate față de normă sunt gratuite pentru toată lumea. Soldul de ore suplimentare și ce îl modifică sunt în PRO, gratuit pentru Fondatori: intră cu Google până pe 15 ianuarie 2027.</p>
              <ul className="checks" data-r="">
                <li><b>Datele rămân pe telefon.</b> Nimeni de la JAC nu îți vede turele.</li>
                <li><b>Partajezi calendarul</b> cu colegii, când vrei tu.</li>
              </ul>
            </div>
            <div data-r="">
              <table className="plan glass">
                <caption className="sr-only">Ce e gratuit și ce e PRO în Shiftr</caption>
                <thead><tr><th scope="col">Funcție</th><th scope="col">Gratuit</th><th scope="col">PRO</th></tr></thead>
                <tbody>
                  {ROWS.map(([t, a, b]) => (
                    <tr key={t}>
                      <td>{t}</td>
                      <td className={a}><span aria-hidden="true">{MARK[a][0]}</span><span className="sr-only">{MARK[a][1]}</span></td>
                      <td className={b}><span aria-hidden="true">{b === "p" ? "PRO" : "Da"}</span><span className="sr-only">inclus</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <CtaBand title="Fără bătăi de cap la calculatul orelor lucrate." />
      </main>
      <SiteFooter />
      <PageEffects page="shiftr" />
    </>
  );
}
