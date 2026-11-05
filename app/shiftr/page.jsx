import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageEffects from "@/components/PageEffects";
import { Stage, Chip, MainCta, CtaBand } from "@/components/ui";

export const metadata = {
  title: "Shiftr: turele, norma și orele suplimentare, calculate | JAC",
  description: "Planificatorul de ture Shiftr din JAC: ture de zi, noapte, schimburi, concediu, recuperare și misiuni; norma lunii (zile lucrătoare × 8h minus sărbătorile legale), orele suplimentare și soldul calculate automat. Datele rămân pe telefon.",
  alternates: { canonical: "https://aplicatiajac.ro/shiftr/" },
  openGraph: { title: "Shiftr în JAC: norma și orele suplimentare, calculate", url: "https://aplicatiajac.ro/shiftr/", siteName: "JAC", locale: "ro_RO", type: "website", images: [{ url: "https://aplicatiajac.ro/assets/img/og-jac.jpg", width: 1200, height: 630 }] },
};

const TYPES = [
  ["Z", "Zi", "#2F6BFF", "tura de zi"], ["N", "Noapte", "#F08A5D", "tura de noapte"], ["S1", "Schimbul 1", "#7FA6FF", "program în schimburi"], ["S2", "Schimbul 2", "#8B5CF6", "program în schimburi"],
  ["S3", "Schimbul 3", "#38BDF8", "program în schimburi"], ["C", "Concediu", "#E8B54A", "C/M în weekend sau de sărbători = 0h"], ["R", "Recuperare", "#69BFAE", "scade din soldul de ore suplimentare"], ["L", "Liber", "#8B97A1", "nu adaugă ore lucrate"],
];

const ROWS = [
  ["Calendarul de ture și șabloanele", "y", "y"],
  ["Toate tipurile de tură și misiunile speciale", "y", "y"],
  ["Norma lunii, cu sărbătorile legale", "y", "y"],
  ["Orele lucrate față de normă", "y", "y"],
  ["Partajarea calendarului cu colegii", "y", "y"],
  ["Soldul de ore suplimentare", "n", "p"],
  ["Recuperările scăzute din sold", "n", "p"],
  ["Ore adăugate manual din altă aplicație", "n", "p"],
  ["C/M în weekend și de sărbători (0h)", "n", "p"],
];
const MARK = { y: ["✓", "inclus"], p: ["PRO", "inclus în PRO"], n: ["–", "nu e inclus"] };

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
              <h1 className="h1" data-r="">Luna se adună <span className="soft">singură.</span></h1>
              <p className="lead" data-r="">Notezi turele, iar Shiftr calculează norma, orele suplimentare și soldul după recuperări. Datele rămân pe telefon.</p>
              <div className="btns" data-r=""><MainCta /><a className="btn btn--glass" href="#calcul">Cum calculează</a></div>
            </div>
            <Stage
              front="app-shiftr-luna"
              back="app-shiftr-editare"
              backRight
              priority
              frontAlt="Calendarul Shiftr pentru noiembrie 2026: ture de zi (Z), de noapte (N), zile libere grupate, o recuperare de cinci zile, iar dedesubt soldul de ore suplimentare +6h și norma 160h din 160h."
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
              <p className="lead" data-r="">Zi, noapte, cele trei schimburi, concediu, recuperare, liber și misiuni speciale. Șabloanele (ex. Zi 06:00–18:00, Noapte 18:00–06:00) se aplică dintr-o atingere.</p>
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
                <li className="glass" data-r="" style={{ "--d": 2 }}><b>Concediu în weekend sau de sărbători</b><span>Ziua de C/M care cade în weekend sau într-o sărbătoare legală contează <code>0h</code>.</span></li>
                <li className="glass" data-r="" style={{ "--d": 3 }}><b>Soldul</b><span>Scade cu recuperările acordate: <code>sold = peste normă − recuperări</code>.</span></li>
                <li className="glass" data-r="" style={{ "--d": 4 }}><b>Ore din altă aplicație</b><span>Orele aduse din altă evidență se adaugă manual, cu butonul „+” de lângă sold.</span></li>
              </ol>
            </div>
            <div>
              <div className="calc glass" data-shiftr="" data-norm="160" data-r="" style={{ marginTop: 0 }}>
                <p className="calc__k">Exemplu: luna cu normă de 160h</p>
                <div className="range">
                  <label htmlFor="sh-l">Ore lucrate <output data-o="lucrate" htmlFor="sh-l">172h</output></label>
                  <input id="sh-l" name="lucrate" type="range" min="120" max="220" step="1" defaultValue="172" />
                </div>
                <div className="range">
                  <label htmlFor="sh-r">Recuperări acordate <output data-o="rec" htmlFor="sh-r">12h</output></label>
                  <input id="sh-r" name="recuperari" type="range" min="0" max="12" step="1" defaultValue="12" />
                </div>
                <dl className="calc__out" aria-live="polite">
                  <div><dt>Peste normă</dt><dd data-o="extra">+12h</dd></div>
                  <div data-o="balbox" className="is-teal"><dt>Sold ore suplimentare</dt><dd data-o="bal">0h</dd></div>
                </dl>
                <p className="calc__note">160h normă, 172h lucrate → +12h. O recuperare de 12h → sold 0h. Calculele Shiftr sunt orientative.</p>
              </div>
              <div style={{ marginTop: "clamp(64px, 12vw, 120px)" }}>
                <Stage
                  front="app-shiftr-sumar"
                  variant="stage--left"
                  frontAlt="Sumarul lunii în Shiftr: 160h din 160h, sold de ore suplimentare +6h (acumulate +35h, 5 recuperări în lună −40h, +35h adăugate manual), 15 zile lucrate, 15 zile libere și norma legală: 21 de zile × 8h − 1 sărbătoare = 160h."
                >
                  <Chip pos="tl" k="Normă">21 × 8h − 1</Chip>
                  <Chip pos="br" tone="red" k="Sold">+6h</Chip>
                </Stage>
              </div>
            </div>
          </div>
        </section>

        <section className="sec sec--tight" aria-labelledby="plan-title">
          <div className="wrap split">
            <div className="copy">
              <p className="eyebrow" data-r="">Gratuit și PRO</p>
              <h2 id="plan-title" className="h2" data-r="">Calendarul e gratuit. <span className="soft">Soldul e PRO.</span></h2>
              <p className="lead" data-r="">Calendarul și orele lucrate față de normă sunt gratuite pentru toată lumea. Soldul de ore suplimentare și ce îl modifică sunt în PRO, deblocat acum prin contul Fondator.</p>
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
                      <td className={b}><span aria-hidden="true">✓</span><span className="sr-only">inclus</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <CtaBand title="Turele tale, socotite corect." />
      </main>
      <SiteFooter />
      <PageEffects page="shiftr" />
    </>
  );
}
