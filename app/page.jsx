import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageEffects from "@/components/PageEffects";
import { FACTS as F, Stage, Chip, Phone, Lock, MainCta, Disclaimer, CtaBand } from "@/components/ui";

const DESC = "JAC – Legislație și Ture: 33 de module offline, peste 3.500 de fișe, 28 de acte integrale, 6 ghiduri vizuale cu fotografii, ghidul operativ și planificatorul de ture Shiftr. Aplicație Android independentă.";

export const metadata = {
  title: "JAC – Legislație și Ture | Unicul instrument legislativ care le are pe toate",
  description: DESC,
  alternates: { canonical: "https://aplicatiajac.ro/" },
  openGraph: {
    title: "JAC – Legislație și Ture",
    description: "Unicul instrument legislativ care le are pe toate. 33 de module, peste 3.500 de fișe, 100% offline.",
    url: "https://aplicatiajac.ro/",
    siteName: "JAC",
    locale: "ro_RO",
    type: "website",
    images: [{ url: "https://aplicatiajac.ro/assets/img/og-jac.jpg", width: 1200, height: 630, alt: "JAC – Legislație și Ture: unicul instrument legislativ care le are pe toate." }],
  },
  twitter: { card: "summary_large_image" },
};

const LD = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "JAC – Legislație și Ture",
  operatingSystem: "Android",
  applicationCategory: "ReferenceApplication",
  description: DESC,
  url: "https://aplicatiajac.ro/",
  inLanguage: "ro",
  contentRating: "PEGI 3",
};

const RUTIER = [
  { c: "#DC2626", t: "Codul rutier", a: "OUG 195/2002 + HG 1391/2006" },
  { c: "#F59E0B", t: "Taxi și închiriere", a: "Legea 38/2003" },
  { c: "#22C55E", t: "Transport alternativ", a: "OUG 49/2019 (ride-sharing)" },
  { c: "#38BDF8", t: "Rovinieta / tarife rutiere", a: "Legea 226/2023" },
  { c: "#8B5CF6", t: "Transport rutier (norme UE)", a: "HG 1317/2023" },
  { c: "#A3A3A3", t: "Regimul drumurilor", a: "OG 43/1997" },
  { c: "#EF7A73", t: "Tahograf, conducere și odihnă", a: "OG 37/2007" },
  { c: "#F08A5D", t: "Parcări gravide și copii", a: "Legea 280/2023" },
  { c: "#69BFAE", t: "RCA", a: "Legea 132/2017" },
  { c: "#2F6BFF", t: "Proceduri rutiere", a: "Permis reținut, dovadă înlocuitoare, minori" },
];

const GHIDURI = [
  { n: "app-ghid-drone", tag: "Drone", t: "Drone C0 · C1 · C2 · FPV", p: "Clasa după marcaj, documentele cerute pilotului, regulile de zbor după Reg. (UE) 2019/947 și sancțiunile.", alt: "Ghidul vizual Drone din JAC: cardul Clasa C2 cu fotografia unei drone semiprofesionale de până la 4 kg și regulile: înregistrarea operatorului, certificatul A2, distanța de 30 m față de persoane." },
  { n: "app-ghid-droguri", tag: "Droguri", t: "Droguri, cu model de PV", p: "10 substanțe, câte două fotografii, drog de risc sau de mare risc și cum descrii proba în procesul-verbal.", alt: "Ghidul vizual Droguri din JAC: fișa Cannabis cu fotografie, ce găsești de obicei și secțiunea „În procesul-verbal”, cu modelul de descriere al probei ridicate." },
  { n: "app-ghid-pirotehnice", tag: "Pirotehnice", t: "Pirotehnice F1–F4, T, P", p: "Categoria de pe etichetă, ce are voie publicul, orele și distanțele interzise, plata a jumătate din amendă.", alt: "Ghidul vizual Pirotehnice din JAC: categoria F1, permisă publicului de la 16 ani, cu fotografia articolelor numerotate și regimul de vânzare." },
  { n: "app-ghid-caini", tag: "Câini periculoși", t: "Câini periculoși, pe rase", p: "Catalog vizual pe categoriile I și a II-a din OUG 55/2002: portret din profil și din față, gabaritul și trăsăturile după care recunoști rasa.", alt: "Catalogul vizual Câini periculoși din JAC (OUG 55/2002): portretul din profil și din față al unui Pit Bull, categoria I, cu gabaritul, trăsăturile de recunoaștere și nota despre asimilarea morfologică a metișilor." },
  { n: "app-ghid-stadion", tag: "Stadion", t: "Stadion: ce nu intră", p: "Obiectele interzise la poartă, interdicțiile spectatorilor pe trepte de amendă și interdicția de acces.", alt: "Ghidul vizual Stadion din JAC: tab-ul Obiecte interzise, cu fotografia articolelor pirotehnice interzise la intrare și ce trebuie reținut." },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader current="home" />
      <main id="continut">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />

        {/* ================= 1. HERO ================= */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap">
            <div className="hero__grid">
              <div className="copy">
                <p className="eyebrow" data-r="">Aplicație Android · 100% offline</p>
                <h1 id="hero-title" className="h1" data-r="" style={{ "--d": 1 }}>JAC – Legislație <span className="soft">și</span> Ture</h1>
                <p className="hero__slogan" data-r="" style={{ "--d": 2 }}><b>Unicul instrument legislativ care le are pe toate.</b> Cod penal, legi speciale, regim rutier, text integral, ghiduri cu poze și turele tale, fără semnal.</p>
                <div className="btns" data-r="" style={{ "--d": 3 }}>
                  <MainCta />
                  <a className="btn btn--glass" href="#rutier">Vezi ce conține</a>
                </div>
                <p className="hero__note" data-r="" style={{ "--d": 4 }}>În testare închisă pe Google Play. Acces Fondator în perioada beta.</p>
              </div>
              <Stage
                front="app-acasa"
                back="app-ghid-caini"
                backAlt="Catalogul vizual Câini periculoși din JAC (OUG 55/2002): portretul din profil și din față al unui Pit Bull, categoria I, cu gabaritul, trăsăturile de recunoaștere și nota despre asimilarea morfologică a metișilor."
                backRight
                priority
                frontAlt="Ecranul Acasă din JAC: salutul „Salutare, ticuv” cu avatarul PRO încadrat de lauri aurii, cardul Programul tău („Liber azi. De Zi duminică.”, 160h din 160h), căutarea în baza locală de 3.542 de articole offline și plăcile Cod penal, Legi speciale, Regim rutier și Text integral."
              >
                <Chip pos="tl" tone="gold" k="Cont PRO">Lauri aurii</Chip>
                <Chip pos="mr" tone="red" k="Ghid vizual">Câini periculoși</Chip>
                <Chip pos="bl" tone="teal" k="Programul tău">Liber azi</Chip>
              </Stage>
            </div>

            <ul className="stats" aria-label="JAC în cifre">
              <li className="glass" data-r="" style={{ "--d": 0 }}><b data-count={F.modules}>{F.modules}</b><span>de module legislative</span></li>
              <li className="glass" data-r="" style={{ "--d": 1 }}><b>3.500+</b><span>de fișe cu încadrare și sancțiune</span></li>
              <li className="glass" data-r="" style={{ "--d": 2 }}><b data-count={F.integrale}>{F.integrale}</b><span>de acte în text integral</span></li>
              <li className="glass" data-r="" style={{ "--d": 3 }}><b data-count={F.ghiduri}>{F.ghiduri}</b><span>ghiduri vizuale cu fotografii</span></li>
              <li className="glass" data-r="" style={{ "--d": 4 }}><b>100%</b><span>offline, fără semnal</span></li>
            </ul>
          </div>
        </section>

        {/* ================= 2. REGIM RUTIER ================= */}
        <section className="sec" id="rutier" aria-labelledby="rutier-title">
          <div className="wrap split">
            <div className="copy">
              <p className="eyebrow" data-r="">Regim rutier · nou</p>
              <h2 id="rutier-title" className="h2" data-r="">10 module. <span className="soft">Amenda se calculează singură.</span></h2>
              <p className="lead" data-r="">Clasa de sancțiune, punctele-amendă și punctele de penalizare sunt pe fiecare fișă, cu amenda în lei la punctul-amendă de <b className="mono">216,25 lei</b> (de la 01.07.2026). Plus reținerea permisului, dovada înlocuitoare și procedurile rutiere.</p>

              <div className="calc glass" data-rcalc="" data-point="216.25" data-r="" role="group" aria-labelledby="rcalc-k">
                <p className="calc__k" id="rcalc-k">Încearcă: alege clasa de sancțiune</p>
                <fieldset className="seg">
                  <legend className="sr-only">Clasa de sancțiune</legend>
                  {["I", "II", "III", "IV", "V"].map((c, i) => (
                    <span key={c} style={{ display: "contents" }}>
                      <input type="radio" name="clasa" id={`cls-${c}`} value={c} defaultChecked={i === 2} />
                      <label htmlFor={`cls-${c}`}>Cl. {c}</label>
                    </span>
                  ))}
                </fieldset>
                <dl className="calc__out" aria-live="polite">
                  <div><dt>Puncte-amendă</dt><dd data-o="pts">6–8</dd></div>
                  <div><dt>Jumătate din minim, în 15 zile</dt><dd data-o="half">648,75 lei</dd></div>
                  <div className="wide is-red"><dt>Amenda</dt><dd data-o="fine">1.297,50 lei – 1.730,00 lei</dd></div>
                </dl>
                <p className="calc__note">Clasele I–V din art. 98 al OUG 195/2002. În aplicație fiecare fișă are și punctele de penalizare și măsurile complementare.</p>
              </div>
              <Link className="link-arrow" href="/legislatie-rutiera/">Toate cele 10 module rutiere</Link>
            </div>
            <div>
              <Stage
                front="app-rutier-fisa"
                back="app-rutier-module"
                backAlt="Lista Regim rutier din JAC: 10 module și 1.011 fapte și proceduri, cu punctul-amendă de 216,25 lei."
                frontAlt="Fișa din Codul rutier pentru folosirea telefonului mobil fără dispozitiv mâini libere: prevăzută de art. 36 alin. (3), sancționată de art. 101 alin. (2) din OUG 195/2002, clasa a III-a, 6–8 puncte-amendă, amendă 1.297,50–1.730,00 lei, 4 puncte de penalizare și jumătate din minim 648,75 lei."
              >
                <Chip pos="tl" k="Clasa a III-a">6–8 puncte</Chip>
                <Chip pos="mr" tone="red" k="Penalizare">4 puncte</Chip>
                <Chip pos="bl" tone="blue" k="1 punct-amendă">216,25 lei</Chip>
              </Stage>
            </div>
          </div>
          <div className="wrap">
            <ul className="mods" aria-label="Modulele rutiere">
              {RUTIER.map((m, i) => (
                <li key={m.t} className="glass" data-r="" style={{ "--d": i % 4, "--c": m.c }}>
                  <span className="dot" aria-hidden="true"><i></i></span>
                  <span><b>{m.t}</b><span>{m.a}</span></span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="divider" aria-hidden="true"></div>

        {/* ================= 3. LEGI SPECIALE + GHIDURI VIZUALE ================= */}
        <section className="sec" id="ghiduri" aria-labelledby="ghid-title">
          <div className="wrap">
            <div className="split">
              <div className="copy">
                <p className="eyebrow" data-r="">Legi speciale · ghiduri vizuale</p>
                <h2 id="ghid-title" className="h2" data-r="">Ce faci pas cu pas, ce verifici, cum încadrezi. <span className="blue">Cu poze.</span></h2>
                <p className="lead" data-r="">{F.speciale} pachete de legi speciale, de la ordinea publică la drone. Iar la drone, droguri, pirotehnice, stadion, fumat și câini periculoși, ghidul vizual se deschide direct din lege, cu fotografii de identificare.</p>
                <ul className="tags" style={{ marginTop: 24 }} aria-label="Domenii">
                  {["Ordine publică", "Adunări publice", "Violența în sport", "Arme", "Droguri", "Pirotehnice", "Silvic", "Pescuit", "Vânătoare", "Drone", "Câini periculoși", "Tutun și fumat", "Paza obiectivelor", "Violența domestică", "112"].map((t) => <li key={t}>{t}</li>)}
                </ul>
                <div className="btns">
                  <Link className="btn btn--glass" href="/ghiduri-vizuale/">Cele 6 ghiduri vizuale</Link>
                  <Link className="link-arrow" href="/legi-speciale/" style={{ alignSelf: "center" }}>Toate legile speciale</Link>
                </div>
              </div>
              <div>
                <Stage
                  front="app-lege-cu-ghid"
                  back="app-ghid-stadion"
                  backAlt="Ghidul Stadion din JAC: obiectele interzise la intrare, cu fotografia unor facle, petarde și artificii numerotate."
                  backRight
                  frontAlt="Legea 4/2008 în JAC: sus, butonul Ghid operativ „Stadion · ce nu intră în arenă”, 8 pași; dedesubt, fișele de contravenție pentru spectatori, cu încadrarea, amenda de 80–200 lei și plata în 15 zile."
                >
                  <Chip pos="tr" tone="blue" k="Din lege">Ghid · 8 pași</Chip>
                  <Chip pos="bl" k="Legi speciale">{F.speciale} pachete</Chip>
                </Stage>
              </div>
            </div>

            <ul className="gal" style={{ marginTop: "clamp(48px, 8vw, 88px)" }} aria-label="Ghidurile vizuale">
              {GHIDURI.map((g, i) => (
                <li key={g.n} className="glass" data-r="" style={{ "--d": i }}>
                  <Phone name={g.n} alt={g.alt} sizes="(min-width: 1024px) 250px, 70vw" />
                  <span className="gal__tag">{g.tag}</span>
                  <h3>{g.t}</h3>
                  <p>{g.p}</p>
                </li>
              ))}
            </ul>
            <p className="gal-hint">Glisează pentru celelalte ghiduri →</p>
          </div>
        </section>

        <div className="divider" aria-hidden="true"></div>

        {/* ================= 4. SHIFTR ================= */}
        <section className="sec" id="shiftr" aria-labelledby="shiftr-title">
          <div className="wrap split split--flip">
            <div className="copy">
              <p className="eyebrow" data-r="">Shiftr · planificatorul de ture</p>
              <h2 id="shiftr-title" className="h2" data-r="">Norma, orele suplimentare și soldul. <span className="soft">Calculate.</span></h2>
              <p className="lead" data-r="">Notezi turele în calendar, iar luna se adună singură. Datele rămân pe telefon.</p>

              <ol className="formula" style={{ marginTop: 28 }}>
                <li className="glass" data-r=""><b>Norma lunii</b><span><code>zile lucrătoare × 8h</code> minus sărbătorile legale.</span></li>
                <li className="glass" data-r="" style={{ "--d": 1 }}><b>Orele suplimentare</b><span>Se calculează singure: ore lucrate minus normă.</span></li>
                <li className="glass" data-r="" style={{ "--d": 2 }}><b>Concediu în weekend sau sărbători</b><span>Ziua de C/M căzută în weekend sau de sărbători contează <code>0h</code>.</span></li>
                <li className="glass" data-r="" style={{ "--d": 3 }}><b>Soldul</b><span>Scade cu recuperările acordate. Orele aduse din altă aplicație le adaugi manual.</span></li>
              </ol>

              <div className="calc glass" data-shiftr="" data-norm="160" data-r="">
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
                <p className="calc__note">160h normă, 172h lucrate → +12h. O recuperare de 12h → sold 0h. Calculele sunt orientative.</p>
              </div>
              <Link className="link-arrow" href="/shiftr/">Cum lucrează Shiftr</Link>
            </div>
            <div>
              <Stage
                front="app-shiftr-luna"
                back="app-shiftr-editare"
                backAlt="Foaia Modifică tura din Shiftr: șabloanele Zi (06:00–18:00) și Noapte (18:00–06:00), ora de început și de sfârșit, culoarea și denumirea turei."
                frontAlt="Calendarul Shiftr pentru noiembrie 2026: ture de zi (Z) și de noapte (N), zile libere, o recuperare de cinci zile, iar dedesubt soldul de ore suplimentare +6h și norma 160h din 160h."
              >
                <Chip pos="tl" k="Normă legală">160h</Chip>
                <Chip pos="mr" tone="red" k="Sold">+6h</Chip>
                <Chip pos="bl" tone="teal" k="Datele tale">Pe telefon</Chip>
              </Stage>
            </div>
          </div>
          <div className="wrap">
            <div className="tiles tiles--2" style={{ marginTop: "clamp(40px, 7vw, 64px)" }}>
              <div className="tile glass" data-r="">
                <span className="tile__k">Gratuit</span>
                <h3>Calendarul și orele lucrate față de normă</h3>
                <p>Toate tipurile de tură (Z, N, schimburile 1/2/3, C, R, L, misiuni), șabloanele, norma lunii cu sărbătorile legale și partajarea calendarului cu colegii.</p>
              </div>
              <div className="tile tile--pro glass" data-r="" style={{ "--d": 1 }}>
                <span className="tile__k" style={{ color: "var(--gold)" }}>PRO</span>
                <h3>Soldul de ore suplimentare</h3>
                <p>Recuperările scăzute din sold, orele adăugate manual din altă aplicație și concediul (C/M) pus corect în weekend și de sărbători.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" aria-hidden="true"></div>

        {/* ================= 5. GHID OPERATIV ================= */}
        <section className="sec" id="ghid-operativ" aria-labelledby="go-title">
          <div className="wrap split">
            <div className="copy">
              <p className="eyebrow" data-r="">Ghidul operativ · offline</p>
              <h2 id="go-title" className="h2" data-r="">{F.capitole} capitole. <span className="soft">Cu spețe și tipizate.</span></h2>
              <p className="lead" data-r="">Pe fiecare capitol, spețe cu documentele care se întocmesc. Iar într-un singur catalog, procesele-verbale model completate pe spețe fictive și formularele goale.</p>
              <ul className="checks" data-r="">
                <li><b>Spețe pe capitole</b>, de la regimul contravenției la mandatele de aducere.</li>
                <li><b>Catalog de tipizate</b>: PV-uri model completate și formulare necompletate.</li>
                <li><b>Fără semnal</b>: tot ghidul e salvat pe telefon.</li>
              </ul>
              <Link className="link-arrow" href="/ghid-operativ/">Capitolele ghidului</Link>
            </div>
            <div>
              <Stage
                front="app-ghid-capitole"
                frontAlt="Ghidul operativ din JAC, actualizat 2026: catalogul de tipizate completate și necompletate, apoi capitolele Regimul contravenției (OG 2/2001), Infracțiunea, Legea 61/1991, Legea 60/1991, Legea 4/2008, Legea 54/2012, pescuit și vânătoare, regimul silvic."
              >
                <Chip pos="tr" k="Catalog">PV model + gol</Chip>
                <Chip pos="bl" tone="blue" k="Ghid operativ">{F.capitole} capitole</Chip>
              </Stage>
            </div>
          </div>
        </section>

        <div className="divider" aria-hidden="true"></div>

        {/* ================= 6. PENAL + CPP ================= */}
        <section className="sec" id="penal" aria-labelledby="penal-title">
          <div className="wrap split split--flip">
            <div className="copy">
              <p className="eyebrow" data-r="">Codul penal și CPP</p>
              <h2 id="penal-title" className="h2" data-r="">Infracțiunea, pedeapsa, competența. <span className="soft">Și CPP integral.</span></h2>
              <p className="lead" data-r="">Patru module penale aduse la forma în vigoare: infracțiunile cu pedeapsa, competența și măsurile pe fiecare fișă, partea generală, procedura operativă și, nou, Codul de procedură penală pe articole.</p>
              <ul className="tiles tiles--2" style={{ marginTop: 26 }}>
                <li className="tile glass" data-r=""><span className="tile__n">525</span><h3>Infracțiuni</h3><p>Partea specială, cu descrierea faptei și pedeapsa.</p></li>
                <li className="tile glass" data-r="" style={{ "--d": 1 }}><span className="tile__n">188</span><h3>Partea generală</h3><p>Instituții și reguli de bază.</p></li>
                <li className="tile glass" data-r="" style={{ "--d": 2 }}><span className="tile__n">15</span><h3>Procedură operativă</h3><p>Măsuri procesuale, percheziții, flagrant.</p></li>
                <li className="tile glass" data-r="" style={{ "--d": 3 }}><span className="tile__n">641</span><h3>CPP integral</h3><p>Legea 135/2010, textul pe articole.</p></li>
              </ul>
              <Link className="link-arrow" href="/legislatie-penala/">Penal, CPP și cele 28 de acte integrale</Link>
            </div>
            <div>
              <Stage
                front="app-penal-fisa"
                back="app-cpp-integral"
                backAlt="Codul de procedură penală integral în JAC: 641 de articole, începând cu art. 1, normele de procedură penală și scopul acestora."
                frontAlt="Fișa de infracțiune din JAC pentru furt, forma de bază: încadrarea art. 228 alin. (1) Cod penal, descrierea faptei, pedeapsa de la 6 luni la 3 ani sau amendă, acțiunea din oficiu și secțiunea Competență și măsuri procedurale."
              >
                <Chip pos="tl" k="Încadrare">Art. 228 (1) CP</Chip>
                <Chip pos="mr" tone="red" k="Pedeapsa">6 luni – 3 ani</Chip>
                <Chip pos="bl" k="CPP integral">641 articole</Chip>
              </Stage>
            </div>
          </div>
        </section>

        {/* ================= 7. PRO / ECHIPAJ ================= */}
        <section className="sec" id="pro" aria-labelledby="pro-title">
          <div className="wrap">
            <div className="pro" data-r="scale">
              <div className="pro__grid">
                <div>
                  <p className="eyebrow eyebrow--gold">JAC PRO · Echipaj</p>
                  <h2 id="pro-title" className="h2">Laurii aurii. <span className="soft">Pentru tot echipajul.</span></h2>
                  <p className="lead" style={{ marginTop: 18 }}>Un echipaj are până la 5 colegi, care intră cu un cod de invitație și împart beneficiile PRO.</p>
                  <ul className="checks checks--gold">
                    <li><b>Toate legile speciale</b>, inclusiv cele PREMIUM, peste cele 8 gratuite.</li>
                    <li><b>Shiftr PRO</b>: soldul de ore suplimentare, recuperările și orele manuale.</li>
                    <li><b>Echipaj de până la 5 colegi</b>, cu un singur cod de invitație.</li>
                    <li><b>Avatarul cu lauri aurii</b> pe ecranul Acasă.</li>
                  </ul>
                  <div className="btns" style={{ marginTop: 30 }}>
                    <MainCta />
                  </div>
                </div>
                <div className="pro__badge">
                  <img src="/assets/img/pro-lauri.webp" width="240" height="240" alt="Avatarul unui cont PRO în JAC, încadrat de o coroană de lauri aurii." loading="lazy" decoding="async" />
                  <ul className="crew" aria-label="Echipaj de 5 colegi">
                    {["#2F6BFF", "#69BFAE", "#E8B54A", "#8B5CF6", "#EF7A73"].map((c, i) => <li key={c} style={{ "--c": c }} aria-hidden="true">{i + 1}</li>)}
                  </ul>
                  <span className="founder"><Lock />Acces Fondator în perioada beta</span>
                  <p className="fine" style={{ maxWidth: "28ch", margin: 0 }}>Abonamentele vin după lansarea comercială. Până atunci, PRO e deblocat prin contul Fondator.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 8. ÎNCREDERE ================= */}
        <section className="sec sec--tight" id="incredere" aria-labelledby="trust-title">
          <div className="wrap">
            <div className="sec__head">
              <p className="eyebrow" data-r="">Încredere</p>
              <h2 id="trust-title" className="h2" data-r="">Sobru. Offline. Independent.</h2>
            </div>
            <ul className="trust">
              <li className="glass" data-r=""><b>100% offline</b><span>Legislația, ghidurile și turele sunt pe telefon. Internetul trebuie doar pentru actualizări și echipaj.</span></li>
              <li className="glass" data-r="" style={{ "--d": 1 }}><b>Surse oficiale</b><span>Textele vin din actele publice de pe <a href="https://legislatie.just.ro" rel="noopener">legislatie.just.ro</a>.</span></li>
              <li className="glass" data-r="" style={{ "--d": 2 }}><b>Datele rămân la tine</b><span>Turele din Shiftr nu pleacă de pe telefon. Contul se șterge oricând, din aplicație sau de <a href="/legal/stergere-cont.html">aici</a>.</span></li>
            </ul>
            <div data-r=""><Disclaimer /></div>

            <h2 className="h3" style={{ margin: "clamp(48px, 8vw, 80px) 0 18px" }}>Întrebări frecvente</h2>
            <div className="faq">
              <details className="glass">
                <summary>Merge fără internet?</summary>
                <p>Da. Legislația, ghidurile vizuale, ghidul operativ și Shiftr sunt stocate pe telefon. Doar actualizările și echipajul (JAC Crew) au nevoie de conexiune.</p>
              </details>
              <details className="glass">
                <summary>Am nevoie de cont?</summary>
                <p>Doar pentru PRO și JAC Crew: te autentifici cu Google. Contul se poate șterge din Setări → „Șterge contul” sau urmând pașii de pe <a href="/legal/stergere-cont.html">pagina de ștergere a contului</a>.</p>
              </details>
              <details className="glass">
                <summary>Cine îmi vede turele?</summary>
                <p>Nimeni de la JAC. Datele Shiftr sunt prelucrate local, pe telefon. Detalii în <a href="/legal/privacy.html">Politica de confidențialitate</a>.</p>
              </details>
              <details className="glass">
                <summary>Cât costă?</summary>
                <p>În perioada beta, contul Fondator deblocează PRO. Abonamentele vor fi anunțate la lansarea comercială.</p>
              </details>
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
      <PageEffects page="home" />
    </>
  );
}
