// Generated from legacy/index.html by tools/html2jsx.py, then edited by hand where noted.
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageEffects from "@/components/PageEffects";

export const metadata = {
  "title": "JAC: legislație offline, ghid operativ și ture Shiftr pentru Android",
  "description": "Aplicație Android independentă pentru personal operativ și nu numai: 1.691 de articole offline, ghid operativ cu procese-verbale model și calendarul de ture Shiftr. JAC Crew: 5 membri, de la 3,33 lei/lună de persoană.",
  "alternates": {
    "canonical": "https://aplicatiajac.ro/"
  },
  "openGraph": {
    "title": "JAC: Claritate în lege. Siguranță în decizie.",
    "description": "1.691 de articole offline, procese-verbale model și planificare personală. Aplicație Android independentă.",
    "url": "https://aplicatiajac.ro/",
    "siteName": "JAC",
    "locale": "ro_RO",
    "type": "website",
    "images": [
      {
        "url": "https://aplicatiajac.ro/assets/img/og-jac.jpg",
        "width": 1200,
        "height": 630,
        "alt": "JAC: Claritate în lege. Siguranță în decizie. Lângă text, ecranul principal și ghidul operativ."
      }
    ]
  },
  "twitter": {
    "card": "summary_large_image"
  }
};

export default function HomePage() {
  return (
    <>
      <SiteHeader current="home" />
      <main id="continut">

  {/* ================= HERO ================= */}
  <section className="hero" aria-labelledby="hero-title">
    <div className="hero__copy">
      <h1 id="hero-title" className="hero__title"><span className="w">Claritate</span> <span className="w">în</span> <span className="w">lege.</span><br /><span className="w">Siguranță</span> <span className="w">în</span> <span className="w">decizie.</span></h1>
      <p className="lead hero__lead">1.691 de articole offline, procese-verbale model și planificare personală.</p>
      <div className="hero__cta">
        <a className="btn btn--blue magnetic" href="#acces"><span>Cere acces la beta</span></a>
        <a className="price-chip" href="#pro-echipaj">de la <b>3,33 lei</b>/lună</a>
      </div>
    </div>

    <div className="carousel" data-carousel="" aria-roledescription="carusel" aria-label="Ecrane din aplicație">
      <div className="carousel__stage">
        <div className="carousel__phones" data-tilt="">
          <figure className="device" data-pos="center" data-name="Acasă, toate modulele" data-link="#mod-title" aria-roledescription="ecran" aria-label="Acasă, ecranul principal">
            <div className="device__screen">
              <img src="/assets/img/screens/acasa-principal-800.webp" srcSet="/assets/img/screens/acasa-principal-480.webp 480w, /assets/img/screens/acasa-principal-800.webp 800w, /assets/img/screens/acasa-principal-1175.webp 1175w" sizes="(min-width: 1024px) 290px, 54vw" width="1175" height="2560" alt="Ecranul principal JAC: baza locală cu 1691 articole offline, căutare globală și acces rapid la Cod penal, Legi speciale și contravenții, Cod rutier, Salvate și Legislație integrală." fetchPriority="high" />
            </div>
          </figure>
          <figure className="device" data-pos="right" data-name="Legislație penală" data-link="legislatie-penala/" aria-roledescription="ecran" aria-label="Legislație penală">
            <div className="device__screen">
              <img src="/assets/img/screens/penal-1-module-800.webp" srcSet="/assets/img/screens/penal-1-module-480.webp 480w, /assets/img/screens/penal-1-module-800.webp 800w" sizes="(min-width: 1024px) 250px, 54vw" width="1175" height="2560" alt="Secțiunea Legislație penală din JAC: 3 module operative și 679 de articole: Codul Penal Infracțiuni (477), Codul Penal Partea Generală (187) și Procedură Penală Operativ (15)." loading="lazy" decoding="async" />
            </div>
          </figure>
          <figure className="device" data-pos="back" data-name="Legislație rutieră" data-link="legislatie-rutiera/" aria-roledescription="ecran" aria-label="Legislație rutieră">
            <div className="device__screen">
              <img src="/assets/img/screens/cod-rutier-800.webp" srcSet="/assets/img/screens/cod-rutier-480.webp 480w, /assets/img/screens/cod-rutier-800.webp 800w" sizes="(min-width: 1024px) 250px, 54vw" width="1175" height="2560" alt="Secțiunea Cod rutier din JAC: 2 module operative, 75 de articole. Sancțiuni rutiere, 60 de articole; Proceduri rutiere, 15 articole; valoarea punctului-amendă, 216,25 lei, valabilă de la 1 iulie 2026." loading="lazy" decoding="async" />
            </div>
          </figure>
          <figure className="device" data-pos="back" data-name="Legi speciale" data-link="legi-speciale/" aria-roledescription="ecran" aria-label="Legi speciale">
            <div className="device__screen">
              <img src="/assets/img/screens/legi-speciale-1-biblioteca-800.webp" srcSet="/assets/img/screens/legi-speciale-1-biblioteca-480.webp 480w, /assets/img/screens/legi-speciale-1-biblioteca-800.webp 800w" sizes="(min-width: 1024px) 250px, 54vw" width="1175" height="2560" alt="Legi speciale în JAC: 20 de pachete legislative, de la Legea 61/1991 (40 de fapte) la Domeniul Silvic (129 de fapte), cu butonul Reordonează." loading="lazy" decoding="async" />
            </div>
          </figure>
          <figure className="device" data-pos="back" data-name="Ghid operativ" data-link="ghid-operativ/" aria-roledescription="ecran" aria-label="Ghid operativ">
            <div className="device__screen">
              <img src="/assets/img/screens/ghid-operativ-800.webp" srcSet="/assets/img/screens/ghid-operativ-480.webp 480w, /assets/img/screens/ghid-operativ-800.webp 800w" sizes="(min-width: 1024px) 290px, 54vw" width="1175" height="2560" alt="Ghid operativ: 16 capitole tematice, actualizat 2026, de la regimul contravențiilor la regimul silvic." />
            </div>
          </figure>
          <figure className="device" data-pos="left" data-name="Shiftr, calendarul de ture" data-link="shiftr/" aria-roledescription="ecran" aria-label="Shiftr, calendarul de ture">
            <div className="device__screen">
              <img src="/assets/img/screens/shiftr-calendar-800.webp" srcSet="/assets/img/screens/shiftr-calendar-480.webp 480w, /assets/img/screens/shiftr-calendar-800.webp 800w" sizes="(min-width: 1024px) 290px, 54vw" width="1175" height="2560" alt="Calendarul Shiftr pentru octombrie 2026: ture de zi, noapte, schimbul 2, recuperări, concedii și zile libere, plus sumarul lunii." />
            </div>
          </figure>
        </div>
        <div className="floor" aria-hidden="true"></div>
      </div>
    </div>
  </section>


  {/* ================= MODULES ================= */}
  <section className="section" aria-labelledby="mod-title">
    <div className="section__head" data-fx="rise">
      <h2 id="mod-title" className="display">Alege ce te interesează.</h2>
    </div>

    <div className="demos">
      <article className="demo">
        <div className="demo__text" data-fx="slide-right">
          <h2 className="display">Legislație penală</h2>
          <p className="claim">Trei module. 679 de articole.</p>
          <p className="sub">Infracțiunile, partea generală și procedura penală, cu încadrare, descriere și pedeapsă.</p>
          <ul className="demo__specs" data-fx="rise"><li><b>679</b><span>articole penale</span></li><li><b>3</b><span>module</span></li><li><b>6</b><span>secțiuni pe fișă</span></li></ul>
          <Link className="btn btn--ghost magnetic" href="/legislatie-penala/">Vezi legislația penală</Link>
        </div>
        <div className="demo__art" data-fx="rise-tilt" aria-hidden="true">
          <figure className="device device--back"><div className="device__screen"><img src="/assets/img/screens/penal-2-infractiuni-480.webp" srcSet="/assets/img/screens/penal-2-infractiuni-480.webp 480w, /assets/img/screens/penal-2-infractiuni-800.webp 800w" sizes="(min-width: 1024px) 180px, 50vw" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></div></figure>
          <figure className="device device--front"><div className="device__screen"><img src="/assets/img/screens/penal-1-module-480.webp" srcSet="/assets/img/screens/penal-1-module-480.webp 480w, /assets/img/screens/penal-1-module-800.webp 800w" sizes="(min-width: 1024px) 215px, 50vw" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></div></figure>
          <div className="dw dw--cut">
            <span className="cut" style={{ "--i": "0" }}><small>Încadrare</small>Art. 188 alin. (1)</span>
            <span className="cut" style={{ "--i": "1" }}><small>Pedeapsa</small>10–20 ani închisoare</span>
            <span className="cut cut--blue" style={{ "--i": "2" }}><small>Competență</small>Procuror, Tribunal</span>
          </div>
        </div>
      </article>
      <article className="demo demo--flip">
        <div className="demo__text" data-fx="slide-left">
          <h2 className="display">Legislație rutieră</h2>
          <p className="claim">Codul rutier, fără semnal.</p>
          <p className="sub">Sancțiuni, proceduri și punctul-amendă din OUG 195/2002, cu atenționările de pe teren.</p>
          <ul className="demo__specs" data-fx="rise"><li><b>75</b><span>articole rutiere</span></li><li><b>2</b><span>module</span></li><li><b>216,25</b><span>lei / punct-amendă</span></li></ul>
          <Link className="btn btn--ghost magnetic" href="/legislatie-rutiera/">Vezi legislația rutieră</Link>
        </div>
        <div className="demo__art" data-fx="rise-tilt" aria-hidden="true">
          <figure className="device device--back"><div className="device__screen"><img src="/assets/img/screens/rutier-1-sanctiuni-480.webp" srcSet="/assets/img/screens/rutier-1-sanctiuni-480.webp 480w, /assets/img/screens/rutier-1-sanctiuni-800.webp 800w" sizes="(min-width: 1024px) 180px, 50vw" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></div></figure>
          <figure className="device device--front"><div className="device__screen"><img src="/assets/img/screens/cod-rutier-480.webp" srcSet="/assets/img/screens/cod-rutier-480.webp 480w, /assets/img/screens/cod-rutier-800.webp 800w" sizes="(min-width: 1024px) 215px, 50vw" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></div></figure>
          <span className="dw-chip dw-chip--fine">1 punct-amendă = <b>216,25 lei</b></span>
        </div>
      </article>
      <article className="demo">
        <div className="demo__text" data-fx="slide-right">
          <h2 className="display">Legi speciale</h2>
          <p className="claim">20 de pachete. Contravenții la vedere.</p>
          <p className="sub">Ordine publică, adunări publice, droguri, silvic și arme plus multe alte acte normative: încadrare, sancțiune și procedură.</p>
          <ul className="demo__specs" data-fx="rise"><li><b>20</b><span>de legi speciale</span></li><li><b>9</b><span>incluse în Basic</span></li><li><b>280</b><span>de fapte în Basic</span></li></ul>
          <Link className="btn btn--ghost magnetic" href="/legi-speciale/">Vezi legile speciale</Link>
        </div>
        <div className="demo__art" data-fx="rise-tilt" aria-hidden="true">
          <figure className="device device--back"><div className="device__screen"><img src="/assets/img/screens/legi-speciale-6-legea61-480.webp" srcSet="/assets/img/screens/legi-speciale-6-legea61-480.webp 480w, /assets/img/screens/legi-speciale-6-legea61-800.webp 800w" sizes="(min-width: 1024px) 180px, 50vw" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></div></figure>
          <figure className="device device--front"><div className="device__screen"><img src="/assets/img/screens/legi-speciale-1-biblioteca-480.webp" srcSet="/assets/img/screens/legi-speciale-1-biblioteca-480.webp 480w, /assets/img/screens/legi-speciale-1-biblioteca-800.webp 800w" sizes="(min-width: 1024px) 215px, 50vw" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></div></figure>
          <div className="dw dw--tags">
            <span className="ltag" style={{ "--i": "0", "--hue": "218" }}>Legea 61/1991 <b>40 de fapte</b></span>
            <span className="ltag" style={{ "--i": "1", "--hue": "150" }}>Domeniul Silvic <b>129 de fapte</b></span>
            <span className="ltag" style={{ "--i": "2", "--hue": "28" }}>Legea 4/2008 <b>40 de fapte</b></span>
            <span className="ltag ltag--pro" style={{ "--i": "3", "--hue": "270" }}>Regimul Drogurilor <b>PRO</b></span>
          </div>
        </div>
      </article>
        {/* ================= LEGISLATIE ================= */}
  <section className="feature feature-inline" id="legislatie" aria-labelledby="leg-title">
    <div className="feature__text">
      <h2 id="leg-title" className="display">Totul offline</h2>
      <p className="claim">Scrii un cuvânt. Găsești încadrarea.</p>
      <p className="sub">Actul, tipul faptei, amenda și articolul exact care o prevede și o sancționează. Fără semnal.</p>
    </div>
    <div className="feature__stage" data-reveal="3d">
      <figure className="device device--solo">
        <div className="device__screen">
          <img src="/assets/img/screens/acasa-cautare-800.webp" srcSet="/assets/img/screens/acasa-cautare-480.webp 480w, /assets/img/screens/acasa-cautare-800.webp 800w, /assets/img/screens/acasa-cautare-1175.webp 1175w" sizes="(min-width: 1024px) 320px, 66vw" width="1175" height="2560" alt="Căutare după „consumul”: contravenție din Legea 61/1991, amendă 100–500 lei, prevăzută de Art. 2 pct. 23 și sancționată de Art. 3 alin. (1) lit. e)." loading="lazy" decoding="async" />
        </div>
      </figure>
      <span className="float float--2 float--blue" aria-hidden="true">100–500 lei</span>
    </div>
    <ul className="stats" aria-label="Din aplicație">
      <li><b data-count="1691" data-sep="1">1.691</b><span>articole offline</span></li>
      <li><b data-count="679">679</b><span>articole penale</span></li>
      <li><b data-count="27">27</b><span>acte integrale</span></li>
    </ul>
  </section>

      <article className="demo demo--flip">
        <div className="demo__text" data-fx="slide-left">
          <h2 className="display">Ghid operativ</h2>
          <p className="claim">16 capitole. Gata de teren.</p>
          <p className="sub">Spețe, procese-verbale model și tipizate necompletate, pe fiecare capitol.</p>
          <ul className="demo__specs" data-fx="rise"><li><b>16</b><span>capitole</span></li></ul>
          <Link className="btn btn--ghost magnetic" href="/ghid-operativ/">Vezi ghidul operativ</Link>
        </div>
        <div className="demo__art" data-fx="rise-tilt" aria-hidden="true">
          <figure className="device device--back"><div className="device__screen"><img src="/assets/img/screens/ghid-1-cuprins-480.webp" srcSet="/assets/img/screens/ghid-1-cuprins-480.webp 480w, /assets/img/screens/ghid-1-cuprins-800.webp 800w" sizes="(min-width: 1024px) 180px, 50vw" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></div></figure>
          <figure className="device device--front"><div className="device__screen"><img src="/assets/img/screens/ghid-operativ-480.webp" srcSet="/assets/img/screens/ghid-operativ-480.webp 480w, /assets/img/screens/ghid-operativ-800.webp 800w" sizes="(min-width: 1024px) 215px, 50vw" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></div></figure>
          <div className="dw dw--pv">
            <p className="pvx__h">Proces-verbal</p>
            <i style={{ "--i": "0" }}></i><i style={{ "--i": "1" }}></i><i style={{ "--i": "2" }}></i><i style={{ "--i": "3" }}></i><i style={{ "--i": "4" }}></i>
            <span className="pvx__stamp">Model</span>
          </div>
          <span className="dw-chip dw-chip--pv">+ tipizatul gol</span>
        </div>
      </article>
        {/* ================= PV SLIDER ================= */}
  <section className="pv-wrap pv-inline" id="pv" aria-labelledby="pv-title">
    <div className="section__head" data-fx="rise">
      <h2 id="pv-title" className="display">Procese-verbale</h2>
      <p className="claim">Gol sau completat? Trage linia.</p>
      <p className="sub">Sus, exemplul completat. Jos, tipizatul gol. Speța e fictivă.</p>
      <p><Link className="arrow-link" href="/ghid-operativ/">Tot ghidul operativ</Link></p>
    </div>
    <div className="compare" data-compare="" style={{ "--pos": "50%" }}>
      <div className="compare__screen">
        <img className="compare__under" src="/assets/img/screens/pv-necompletat-800.webp" srcSet="/assets/img/screens/pv-necompletat-480.webp 480w, /assets/img/screens/pv-necompletat-800.webp 800w, /assets/img/screens/pv-necompletat-1175.webp 1175w" sizes="(min-width: 1024px) 380px, 84vw" width="1175" height="2150" alt="Tipizatul necompletat al procesului-verbal de constatare a infracțiunii flagrante, cu spații goale pentru dată, loc, agenți și constatări." loading="lazy" decoding="async" />
        <div className="compare__over">
          <img src="/assets/img/screens/pv-completat-800.webp" srcSet="/assets/img/screens/pv-completat-480.webp 480w, /assets/img/screens/pv-completat-800.webp 800w, /assets/img/screens/pv-completat-1175.webp 1175w" sizes="(min-width: 1024px) 380px, 84vw" width="1175" height="2150" alt="Același proces-verbal, completat pe o speță fictivă: data și ora, agenții, sesizarea prin 112 și deplasarea patrulei la un hipermarket din Iași." loading="lazy" decoding="async" />
        </div>
        <span className="compare__tag compare__tag--top" aria-hidden="true">Completat</span>
        <span className="compare__tag compare__tag--bottom" aria-hidden="true">Necompletat</span>
        <div className="compare__line" aria-hidden="true"><span className="compare__knob"><svg viewBox="0 0 24 24"><path d="M8 9l4-4 4 4M8 15l4 4 4-4" /></svg></span></div>
      </div>
      <label className="sr-only" htmlFor="pv-range">Poziția liniei dintre procesul-verbal completat (sus) și cel necompletat (jos)</label>
      <input className="compare__range" id="pv-range" type="range" min="0" max="100" defaultValue="50" step="1" />
    </div>
  </section>

      <article className="demo">
        <div className="demo__text" data-fx="slide-right">
          <h2 className="display">Shiftr</h2>
          <p className="claim">Tura, norma și orele suplimentare.</p>
          <p className="sub">Notezi turele, iar luna se adună singură: ore lucrate, normă legală și diferența.</p>
          <ul className="demo__specs" data-fx="rise"><li><b>20</b><span>de ture în lună</span></li><li><b>176h</b><span>normă legală</span></li><li className="is-red"><b>+18h</b><span>peste normă</span></li></ul>
          <Link className="btn btn--ghost magnetic" href="/shiftr/">Vezi Shiftr</Link>
        </div>
        <div className="demo__art" data-fx="rise-tilt" aria-hidden="true">
          <figure className="device device--back"><div className="device__screen"><img src="/assets/img/screens/shiftr-sumar-480.webp" srcSet="/assets/img/screens/shiftr-sumar-480.webp 480w, /assets/img/screens/shiftr-sumar-800.webp 800w" sizes="(min-width: 1024px) 180px, 50vw" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></div></figure>
          <figure className="device device--front"><div className="device__screen"><img src="/assets/img/screens/shiftr-calendar-480.webp" srcSet="/assets/img/screens/shiftr-calendar-480.webp 480w, /assets/img/screens/shiftr-calendar-800.webp 800w" sizes="(min-width: 1024px) 215px, 50vw" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></div></figure>
          <div data-ui="" className="dw dw--ot">
            <p className="ot__k">Sumar octombrie 2026</p>
            <p className="ot__big"><b data-count="194">194</b>h <small>lucrate</small></p>
            <div className="ot__bar"><i className="ot__norm"></i><i className="ot__over"></i></div>
            <p className="ot__legend"><span>Normă legală 176h</span><span className="ot__red">+<b data-count="18">18</b>h</span></p>
          </div>
        </div>
      </article>
      <article className="demo demo--flip acts" id="legislatie-integrala" data-acts="">
        <div className="demo__text" data-fx="slide-left">
          <h2 className="display">Legislație integrală</h2>
          <p className="claim">Textul complet. Verificat la sursă.</p>
          <p className="sub">27 de acte normative cu text complet, pe articole, încărcate local în aplicație. Cauți după denumire sau direct în textul articolelor.</p>
          <div className="acts__strip" aria-hidden="true"><i style={{ "--n": "4" }}></i><i style={{ "--n": "7" }}></i><i style={{ "--n": "14" }}></i><i style={{ "--n": "2" }}></i></div>
          <div className="acts__tabs" role="tablist" aria-label="Categorii de acte normative"><button type="button" role="tab" id="acts-tab-coduri" aria-controls="acts-coduri" aria-selected="true" tabIndex="0"><b>4</b><span>Coduri</span></button><button type="button" role="tab" id="acts-tab-ordine" aria-controls="acts-ordine" aria-selected="false" tabIndex="-1"><b>7</b><span>Ordine publică</span></button><button type="button" role="tab" id="acts-tab-operative" aria-controls="acts-operative" aria-selected="false" tabIndex="-1"><b>14</b><span>Domenii operative</span></button><button type="button" role="tab" id="acts-tab-rutier" aria-controls="acts-rutier" aria-selected="false" tabIndex="-1"><b>2</b><span>Rutier</span></button></div>
          <div className="acts__panels"><div className="acts__panel" role="tabpanel" id="acts-coduri" aria-labelledby="acts-tab-coduri"><p className="acts__group">Coduri</p><ul><li style={{ "--i": "0" }}><b>Codul penal</b><span>Cod nr. 286/2009</span></li><li style={{ "--i": "1" }}><b>Codul de procedură penală</b><span>Cod nr. 135/2010</span></li><li style={{ "--i": "2" }}><b>Codul Silvic</b><span>Legea nr. 331/2024</span></li><li style={{ "--i": "3" }}><b>Codul Aerian</b><span>Cod nr. 21/2020</span></li></ul></div><div className="acts__panel" role="tabpanel" id="acts-ordine" aria-labelledby="acts-tab-ordine" hidden><p className="acts__group">Ordine publică și contravenții</p><ul><li style={{ "--i": "0" }}><b>Legea nr. 61/1991</b><span>conviețuire socială, ordine și liniște publică</span></li><li style={{ "--i": "1" }}><b>Legea nr. 60/1991</b><span>organizarea și desfășurarea adunărilor publice</span></li><li style={{ "--i": "2" }}><b>OG nr. 2/2001</b><span>regimul juridic al contravențiilor</span></li><li style={{ "--i": "3" }}><b>Legea nr. 4/2008</b><span>competiții și jocuri sportive</span></li><li style={{ "--i": "4" }}><b>Legea nr. 407/2006</b><span>vânătoare și protecția fondului cinegetic</span></li><li style={{ "--i": "5" }}><b>Legea nr. 176/2024</b><span>pescuit și protecția resursei acvatice vii</span></li><li style={{ "--i": "6" }}><b>Legea nr. 54/2012</b><span>activități de picnic</span></li></ul></div><div className="acts__panel" role="tabpanel" id="acts-operative" aria-labelledby="acts-tab-operative" hidden><p className="acts__group">Domenii specifice și operative</p><ul><li style={{ "--i": "0" }}><b>Legea nr. 143/2000</b><span>prevenirea și combaterea traficului și consumului de droguri</span></li><li style={{ "--i": "1" }}><b>Legea nr. 194/2011</b><span>substanțe psihoactive</span></li><li style={{ "--i": "2" }}><b>Legea nr. 126/1995</b><span>regimul materiilor explozive</span></li><li style={{ "--i": "3" }}><b>Legea nr. 295/2004</b><span>regimul armelor, componentelor esențiale și al munițiilor</span></li><li style={{ "--i": "4" }}><b>HG nr. 11/2018</b><span>normele metodologice ale Legii 295/2004 (arme)</span></li><li style={{ "--i": "5" }}><b>Legea nr. 217/2003</b><span>prevenirea și combaterea violenței domestice</span></li><li style={{ "--i": "6" }}><b>Legea nr. 333/2003</b><span>paza obiectivelor, bunurilor și valorilor</span></li><li style={{ "--i": "7" }}><b>Legea nr. 349/2002</b><span>prevenirea efectelor consumului de tutun</span></li><li style={{ "--i": "8" }}><b>Legea nr. 365/2002</b><span>comerț electronic</span></li><li style={{ "--i": "9" }}><b>Legea nr. 145/2014</b><span>reglementarea pieței produselor agricole</span></li><li style={{ "--i": "10" }}><b>OUG nr. 55/2002</b><span>câini periculoși sau agresivi</span></li><li style={{ "--i": "11" }}><b>OUG nr. 97/2005</b><span>evidența, domiciliul și actele de identitate</span></li><li style={{ "--i": "12" }}><b>OUG nr. 34/2008</b><span>Sistemul național unic pentru apeluri de urgență (112)</span></li><li style={{ "--i": "13" }}><b>Legea nr. 171/2010</b><span>contravenții silvice</span></li></ul></div><div className="acts__panel" role="tabpanel" id="acts-rutier" aria-labelledby="acts-tab-rutier" hidden><p className="acts__group">Rutier</p><ul><li style={{ "--i": "0" }}><b>OUG nr. 195/2002</b><span>circulația pe drumurile publice</span></li><li style={{ "--i": "1" }}><b>HG nr. 1391/2006</b><span>regulamentul de aplicare a OUG 195/2002</span></li></ul></div></div>
        </div>
        <div className="demo__art acts__art" data-fx="rise-tilt" aria-hidden="true">
          <figure className="device device--back"><div className="device__screen"><img src="/assets/img/screens/legislatie-integrala-cautare-480.webp" srcSet="/assets/img/screens/legislatie-integrala-cautare-480.webp 480w, /assets/img/screens/legislatie-integrala-cautare-800.webp 800w" sizes="(min-width: 1024px) 195px, 46vw" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></div></figure>
          <figure className="device device--front"><div className="device__screen"><img src="/assets/img/screens/legislatie-integrala-480.webp" srcSet="/assets/img/screens/legislatie-integrala-480.webp 480w, /assets/img/screens/legislatie-integrala-800.webp 800w" sizes="(min-width: 1024px) 230px, 54vw" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></div></figure>
          <div className="dw dw--27"><b data-count="27">27</b><span>acte normative<br />cu text complet</span></div>
          <span className="dw-chip dw-chip--search">Cauți și în textul articolelor</span>
        </div>
      </article>
    </div>
  </section>

  {/* ================= PRICING ================= */}
  <section className="section" id="preturi" aria-labelledby="price-title">
    <div className="section__head" data-fx="rise">
      <h2 id="price-title" className="display">Prețuri</h2>
      <p className="claim">La prețul unei cafele. Pentru tot echipajul.</p>
    </div>
    <div className="plans">
      <article className="plan-card" data-reveal="up">
        <h3>Basic</h3>
        <p className="plan-card__price">0 lei <small>/ mereu</small></p>
        <p className="plan-card__for">Gratuit, cu reclame</p>
        <ul>
          <li>Funcționare offline</li>
          <li>Shiftr standard</li>
          <li>Căutare de bază</li>
        </ul>
      </article>
      <article className="plan-card plan-card--individual" data-billing="annual" data-msg-annual="Anual: 96 lei pe an, adică 8 lei pe lună." data-msg-monthly="Lunar: 120 lei pe an, adică 10 lei pe lună." aria-labelledby="ind-title">
        <h3 id="ind-title">PRO Individual</h3>
        <p className="plan-card__for">Pentru un singur utilizator</p>
        <fieldset className="switch">
          <legend className="sr-only">Perioada de facturare</legend>
          <input type="radio" name="billing-individual" id="bill-ind-annual" defaultValue="annual" defaultChecked />
          <label htmlFor="bill-ind-annual">Anual <em>cu 20% mai ieftin</em></label>
          <input type="radio" name="billing-individual" id="bill-ind-monthly" defaultValue="monthly" />
          <label htmlFor="bill-ind-monthly">Lunar</label>
          <span className="switch__thumb" aria-hidden="true"></span>
        </fieldset>
        <div data-plan="annual">
          <p className="plan-card__price">8 lei <small>/ lună</small></p>
          <p className="plan-card__total">96 lei pe an, plătit o dată</p>
        </div>
        <div data-plan="monthly">
          <p className="plan-card__price">10 lei <small>/ lună</small></p>
          <p className="plan-card__total">120 lei pe an, plătit lunar</p>
        </div>
        <p className="sr-only" aria-live="polite" data-billing-live=""></p>
        <ul>
          <li>Toate cele 1.691 de articole</li>
          <li>Atenționări speciale</li>
          <li>Shiftr nelimitat</li>
          <li>Fără reclame</li>
        </ul>
      </article>
      <article className="plan-card plan-card--crew" id="pro-echipaj" data-billing="annual" data-msg-annual="Anual: 200 lei pe an pentru toți cei 5 membri, adică 3,33 lei pe lună de persoană." data-msg-monthly="Lunar: 30 lei pe lună pentru toți cei 5 membri, adică 6 lei pe lună de persoană." aria-labelledby="crew-title">
        <h3 id="crew-title">PRO Echipaj</h3>
        <p className="plan-card__for">Un abonament pentru 5 membri</p>
        <p className="badge">Cel mai avantajos</p>
        <fieldset className="switch">
          <legend className="sr-only">Perioada de facturare</legend>
          <input type="radio" name="billing" id="bill-annual" defaultValue="annual" defaultChecked />
          <label htmlFor="bill-annual">Anual <em>cu 66,67% mai ieftin</em></label>
          <input type="radio" name="billing" id="bill-monthly" defaultValue="monthly" />
          <label htmlFor="bill-monthly">Lunar <em>cu 40% mai ieftin</em></label>
          <span className="switch__thumb" aria-hidden="true"></span>
        </fieldset>
        <div className="crew-plan" data-plan="annual">
          <p className="crew-plan__big"><span className="crew-plan__num">3,33</span><span className="crew-plan__unit">lei / lună<br />de persoană</span></p>
          <p className="crew-plan__line">Mai puțin decât o cafea pe lună.</p>
          <p className="crew-plan__total">Total: <b>200 lei pe an</b>, pentru toți cei 5 membri.</p>
        </div>
        <div className="crew-plan" data-plan="monthly">
          <p className="crew-plan__big"><span className="crew-plan__num">6</span><span className="crew-plan__unit">lei / lună<br />de persoană</span></p>
          <p className="crew-plan__line">Cât o cafea în timpul serviciului.</p>
          <p className="crew-plan__total">Total: <b>30 lei pe lună</b>, pentru toți cei 5 membri.</p>
        </div>
        <p className="sr-only" aria-live="polite" data-billing-live=""></p>
        <ul>
          <li>Acces PRO complet pentru toți cei 5 membri</li>
          <li>Împarți costul cu colegii de echipaj</li>
        </ul>
        <a className="btn btn--blue btn--block magnetic" href="#acces"><span>Cere acces la beta</span></a>
      </article>
    </div>
    <p className="fine">Reducerile sunt calculate față de abonamentul PRO Individual lunar (120 lei pe an). Achiziția se face în aplicație, prin Google Play Billing; prețul și condițiile apar înainte de cumpărare. Pe acest site nu se fac plăți. Conturile create în perioada de lansare au acces gratuit, conform <a href="/legal/terms.html">Termenilor</a>, secțiunile 3–4.</p>
  </section>

  {/* ================= TRUST ================= */}
  <section className="section" aria-labelledby="trust-title">
    <h2 id="trust-title" className="sr-only">Bine de știut</h2>
    <ul className="trust__row">
      <li><b>Independentă</b>Nu e aplicație a MAI, Poliției sau Jandarmeriei.</li>
      <li><b>Informativă</b>Forma oficială e în Monitorul Oficial și pe <a href="https://legislatie.just.ro/" rel="noopener">legislatie.just.ro</a>.</li>
      <li><b>Privată</b>Turele din Shiftr rămân pe telefon.</li>
    </ul>
  </section>

  {/* ================= FAQ ================= */}
  <section className="section faq faq-wrap" id="intrebari" aria-labelledby="faq-title">
    <h2 id="faq-title" className="display">Întrebări.</h2>
    <div className="faq__list">
      <details>
        <summary>Merge fără internet?</summary>
        <p>Da. Legislația și Shiftr sunt stocate pe telefon. Doar actualizările și JAC Crew au nevoie de conexiune.</p>
      </details>
      <details>
        <summary>Cine îmi vede turele?</summary>
        <p>Nimeni de la JAC. Datele Shiftr sunt prelucrate local. Dacă ai backup Android activ, pot ajunge în contul tău Google personal. <a href="/legal/privacy.html">Confidențialitate</a>.</p>
      </details>
      <details>
        <summary>Am nevoie de cont?</summary>
        <p>Doar pentru PRO și JAC Crew: te autentifici cu Google.</p>
      </details>
      <details>
        <summary>Unde cer ajutor?</summary>
        <p><a href="mailto:vladticu100@gmail.com">vladticu100@gmail.com</a> sau, din aplicație, Setări → „Trimite feedback”.</p>
      </details>
    </div>
  </section>

  {/* ================= ACCESS ================= */}
  <section className="access" id="acces" aria-labelledby="access-title">
    <h2 id="access-title" className="display display--xl">Intră în beta.</h2>
    <p>JAC e în testare închisă, doar pentru Android. Trimite un e-mail și cere acces.</p>
    <a className="btn btn--blue btn--lg magnetic" href="mailto:vladticu100@gmail.com?subject=Acces%20beta%20JAC"><span>Cere acces la beta</span></a>
    <p className="access__note">Se deschide un e-mail către vladticu100@gmail.com</p>
  </section>
</main>
      <SiteFooter />
      <PageEffects page="home" />
    </>
  );
}
