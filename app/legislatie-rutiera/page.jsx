// Generated from legacy/legislatie-rutiera/index.html by tools/html2jsx.py, then edited by hand where noted.
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageEffects from "@/components/PageEffects";

export const metadata = {
  "title": "Legislație rutieră offline: sancțiuni, proceduri, punct-amendă | JAC",
  "description": "Legislația rutieră în aplicația JAC: sancțiunile și procedurile din OUG 195/2002, valoarea punctului-amendă, atenționări speciale și textul integral, fără semnal.",
  "alternates": {
    "canonical": "https://aplicatiajac.ro/legislatie-rutiera/"
  },
  "openGraph": {
    "title": "Legislație rutieră offline | JAC",
    "description": "Sancțiuni și proceduri din OUG 195/2002, punct-amendă și text integral, în telefon.",
    "url": "https://aplicatiajac.ro/legislatie-rutiera/",
    "siteName": "JAC",
    "locale": "ro_RO",
    "type": "website",
    "images": [{ "url": "https://aplicatiajac.ro/assets/img/og-jac.jpg", "width": 1200, "height": 630 }]
  },
  "twitter": {
    "card": "summary_large_image"
  }
};

export default function RutieraPage() {
  return (
    <>
      <SiteHeader current="legislatie-rutiera" />
      <main id="continut">
  <section className="page-hero" aria-labelledby="page-title">
    <div>
      <nav className="crumbs" aria-label="Unde ești"><Link href="/">Acasă</Link><span aria-hidden="true">/</span><span>Legislație rutieră</span></nav>
      <h1 id="page-title" className="display">Codul rutier,<br />fără semnal.</h1>
      <p className="sub">Sancțiunile și procedurile din OUG 195/2002, punctul-amendă și textul integral, direct în telefon.</p>
      <a className="btn btn--blue magnetic" href="#acces"><span>Cere acces la beta</span></a>
    </div>
    <div className="feature__stage" data-fx="rise-tilt">
      <figure className="device device--solo">
        <div className="device__screen">
          <img src="/assets/img/screens/cod-rutier-800.webp" srcSet="/assets/img/screens/cod-rutier-480.webp 480w, /assets/img/screens/cod-rutier-800.webp 800w, /assets/img/screens/cod-rutier-1175.webp 1175w" sizes="(min-width: 1024px) 320px, 66vw" width="1175" height="2560" alt="Secțiunea Cod rutier din JAC: 2 module operative, 75 de articole. Sancțiuni rutiere, 60 de articole; Proceduri rutiere, 15 articole; valoarea punctului-amendă, 216,25 lei, valabilă de la 1 iulie 2026." fetchPriority="high" />
        </div>
      </figure>
      <span className="float float--1" aria-hidden="true">60 sancțiuni</span>
      <span className="float float--2 float--blue" aria-hidden="true">216,25 lei / punct</span>
      <span className="float float--3" aria-hidden="true">15 proceduri</span>
    </div>
  </section>

  <section className="section" aria-labelledby="mod-title">
    <div className="section__head" data-fx="slide-right">
      <h2 id="mod-title" className="display">Două module operative</h2>
      <p className="claim">75 de articole. Cele de pe teren.</p>
    </div>
    <div className="blocks blocks--3">
      <article className="block" data-fx="slide-left">
        <h3>Sancțiuni rutiere</h3>
        <p className="block__num"><span data-count="60">60</span> <small>articole</small></p>
        <p>Contravențiile din OUG 195/2002, cu încadrarea și sancțiunea.</p>
      </article>
      <article className="block" data-fx="blur">
        <h3>Proceduri rutiere</h3>
        <p className="block__num"><span data-count="15">15</span> <small>articole</small></p>
        <p>Reținerea permisului, dovada înlocuitoare și alte măsuri tehnico-administrative.</p>
      </article>
      <article className="block" data-fx="rise">
        <p className="block__num">216,25</p>
        <h3>Lei, punctul-amendă</h3>
        <p>Valabil de la 1 iulie 2026, cum apare în aplicație.</p>
      </article>
    </div>
  </section>

  <section className="section hud" id="flux" aria-labelledby="hud-title" data-hud="">
    <div className="section__head" data-fx="slide-left">
      <h2 id="hud-title" className="display">La volan, în aplicație</h2>
      <p className="claim">Bordul tău de lucru. De la viteză la amendă.</p>
      <p className="sub">Derulează: acul urcă, iar bordul îți arată exact ce afișează aplicația pentru fiecare prag.</p>
    </div>

    <div className="hud__wrap">
      <div className="hud__stage" data-mode="gauge" aria-hidden="true">
        <div className="hud__road"><i></i></div>
        <div data-ui="" className="hud__dash">
          <div className="hud__inst hud__inst--gauge">
            <svg className="gauge" viewBox="0 0 240 190" aria-hidden="true">
              <path className="gauge__track" d="M36.9 168 A96 96 0 1 1 203.1 168" />
              <path className="gauge__zone gauge__zone--1" d="M36.9 72 A96 96 0 0 1 120 24" />
              <path className="gauge__zone gauge__zone--2" d="M120 24 A96 96 0 0 1 203.1 72" />
              <g className="gauge__ticks"><text x="56" y="160">0</text><text x="56" y="88">10</text><text x="120" y="50">20</text><text x="184" y="88">30</text><text x="184" y="160">40</text></g>
              <g className="gauge__needle"><path d="M117 120 L120 34 L123 120 Z" /><circle cx="120" cy="120" r="9" /></g>
            </svg>
            <p className="hud__speed"><b data-hud-speed="">+0</b><span>km/h peste limită</span></p>
          </div>
          <div className="hud__inst hud__inst--timer">
            <svg className="ring" viewBox="0 0 180 180" aria-hidden="true">
              <circle className="ring__track" cx="90" cy="90" r="70" />
              <circle className="ring__a" cx="90" cy="90" r="70" />
              <circle className="ring__b" cx="90" cy="90" r="70" />
            </svg>
            <p className="hud__days"><b data-hud-days="">15</b><span data-hud-days-label="">zile cu dovada înlocuitoare</span></p>
          </div>
          <div className="hud__inst hud__inst--board">
            <p className="board__k">Punctul-amendă</p>
            <div className="board__val" role="img" aria-label="216,25 lei"><span className="roll" style={{ "--d": "2" }}><span><i>0</i><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i><i>7</i><i>8</i><i>9</i></span></span><span className="roll" style={{ "--d": "1" }}><span><i>0</i><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i><i>7</i><i>8</i><i>9</i></span></span><span className="roll" style={{ "--d": "6" }}><span><i>0</i><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i><i>7</i><i>8</i><i>9</i></span></span><span className="roll roll--sep">,</span><span className="roll" style={{ "--d": "2" }}><span><i>0</i><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i><i>7</i><i>8</i><i>9</i></span></span><span className="roll" style={{ "--d": "5" }}><span><i>0</i><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i><i>7</i><i>8</i><i>9</i></span></span><em>lei</em></div>
            <p className="board__eq">5% × 4.325 lei, salariul minim din 1 iulie 2026</p>
          </div>
        </div>
        <figure className="device hud__phone"><div className="device__screen hud__screens">
          <img className="is-active" src="/assets/img/screens/rutier-1-sanctiuni-800.webp" srcSet="/assets/img/screens/rutier-1-sanctiuni-480.webp 480w, /assets/img/screens/rutier-1-sanctiuni-800.webp 800w" sizes="(min-width: 1024px) 240px, 34vw" width="1175" height="2560" alt="" decoding="async" /><img src="/assets/img/screens/rutier-3-sanctiune-800.webp" srcSet="/assets/img/screens/rutier-3-sanctiune-480.webp 480w, /assets/img/screens/rutier-3-sanctiune-800.webp 800w" sizes="(min-width: 1024px) 240px, 34vw" width="1175" height="2560" alt="" loading="lazy" decoding="async" /><img src="/assets/img/screens/rutier-5-procedura-800.webp" srcSet="/assets/img/screens/rutier-5-procedura-480.webp 480w, /assets/img/screens/rutier-5-procedura-800.webp 800w" sizes="(min-width: 1024px) 240px, 34vw" width="1175" height="2560" alt="" loading="lazy" decoding="async" /><img src="/assets/img/screens/rutier-6-atentionari-800.webp" srcSet="/assets/img/screens/rutier-6-atentionari-480.webp 480w, /assets/img/screens/rutier-6-atentionari-800.webp 800w" sizes="(min-width: 1024px) 240px, 34vw" width="1175" height="2560" alt="" loading="lazy" decoding="async" /><img src="/assets/img/screens/rutier-7-punct-amenda-800.webp" srcSet="/assets/img/screens/rutier-7-punct-amenda-480.webp 480w, /assets/img/screens/rutier-7-punct-amenda-800.webp 800w" sizes="(min-width: 1024px) 240px, 34vw" width="1175" height="2560" alt="" loading="lazy" decoding="async" />
        </div></figure>
      </div>

      <ol className="hud__steps">
        <li className="hud__step" data-mode="gauge" data-screen="0" data-speed="0">{" "}
          <div className="hud__card">
            <h3>Cauți fapta</h3>
            <p>În Sancțiuni rutiere găsești contravenția după articol, faptă sau cuvânt-cheie. Bordul pornește de la zero.</p>
            <ul className="hud__read"><li><span>Modul</span><b>Sancțiuni rutiere</b></li><li><span>Articole</span><b>60</b></li></ul>
          </div>{" "}
        </li>
        <li className="hud__step" data-mode="gauge" data-screen="1" data-speed="15">{" "}
          <div className="hud__card">
            <h3>+15 km/h peste limită</h3>
            <p>Depășirea cu 10–20 km/h. Fișa îți arată clasa, punctele-amendă, punctele de penalizare și amenda calculată.</p>
            <ul className="hud__read"><li><span>Clasa</span><b>I</b></li><li><span>Puncte-amendă</span><b>2–3</b></li><li><span>Amendă</span><b>432,50–648,75 lei</b></li><li><span>Penalizare</span><b>2 puncte</b></li></ul>
          </div>{" "}
        </li>
        <li className="hud__step" data-mode="gauge" data-screen="0" data-speed="25">{" "}
          <div className="hud__card">
            <h3>+25 km/h peste limită</h3>
            <p>Depășirea cu 21–30 km/h urcă în clasa următoare, chiar în lista de sancțiuni.</p>
            <ul className="hud__read"><li><span>Clasa</span><b>a II-a</b></li><li><span>Puncte-amendă</span><b>4–5</b></li></ul>
          </div>{" "}
        </li>
        <li className="hud__step" data-mode="timer" data-screen="2" data-days="15">{" "}
          <div className="hud__card">
            <h3>Permisul, reținut 15 zile</h3>
            <p>Pentru contravențiile cu suspendare: procedura pas cu pas și dovada înlocuitoare cu drept de circulație.</p>
            <ul className="hud__read"><li><span>Temei</span><b>Art. 111 OUG 195/2002</b></li><li><span>Dovadă</span><b>15 zile</b></li></ul>
          </div>{" "}
        </li>
        <li className="hud__step" data-mode="timer" data-screen="3" data-days="45">{" "}
          <div className="hud__card">
            <h3>+30 de zile la nepredare</h3>
            <p>Atenționarea specială: dacă permisul nu e predat după suspendare, suspendarea crește cu 30 de zile.</p>
            <ul className="hud__read"><li><span>Atenționare</span><b>majorare +30 zile</b></li><li><span>Constată</span><b>Polițist</b></li></ul>
          </div>{" "}
        </li>
        <li className="hud__step" data-mode="board" data-screen="4">{" "}
          <div className="hud__card">
            <h3>Punctul-amendă, explicat</h3>
            <p>Valoarea folosită la calculul amenzilor, cu baza legală și sursa oficială, cum o afișează aplicația.</p>
            <ul className="hud__read"><li><span>Baza legală</span><b>Art. 98 alin. (2)</b></li><li><span>Valabil din</span><b>1 iulie 2026</b></li></ul>
          </div>{" "}
        </li>
      </ol>
    </div>
    <ul className="sr-only"><li>Lista Sancțiuni rutiere, cu depășirea vitezei cu 10–20 km/h (Clasa I) și 21–30 km/h (Clasa a II-a).</li><li>Sancțiunea pentru depășirea cu 10–20 km/h: Clasa I, 2–3 puncte-amendă, 432,50–648,75 lei, 2 puncte de penalizare.</li><li>Procedura de reținere a permisului cu dovadă înlocuitoare 15 zile, Art. 111 OUG 195/2002.</li><li>Atenționarea specială: nepredarea permisului atrage majorarea suspendării cu 30 de zile.</li><li>Valoarea punctului-amendă: 216,25 lei de la 1 iulie 2026, Art. 98 alin. (2) OUG 195/2002.</li></ul>
    <p className="fine">Sumele, clasele și articolele sunt cele afișate în aplicație, în capturi. Forma oficială și actualizată se verifică pe <a href="https://legislatie.just.ro/" rel="noopener">legislatie.just.ro</a>.</p>
  </section>

  <section className="section split" aria-labelledby="warn-title">
    <div className="section__head" data-fx="blur">
      <h2 id="warn-title" className="display">Atenționări speciale</h2>
      <p className="claim">Nu greșești procedura.</p>
      <p className="sub">Ce contează pe teren apare separat pe fișă. O salvezi la Favorite și o ai la un tap.</p>
    </div>
    <blockquote className="quote" data-fx="wipe">{" "}
      <p>„În cele 15 zile conducătorul poate circula doar cu dovada înlocuitoare asupra sa. Nepredarea permisului după expirarea perioadei de suspendare atrage majorarea suspendării cu 30 de zile.”</p>{" "}
      <footer>Atenționare afișată în JAC, Art. 111 OUG 195/2002, reținerea permisului de conducere</footer>{" "}
    </blockquote>
  </section>

  <section className="section split" aria-labelledby="int-title">
    <div className="section__head" data-fx="rise">
      <h2 id="int-title" className="display">Legislație integrală</h2>
      <p className="claim">Textul complet, pe articole.</p>
      <p className="sub">Cauți după denumire sau direct în textul articolelor.</p>
    </div>
    <ul className="list-rows" data-fx="pop">
      <li data-fx-child="">OUG nr. 195/2002 <span>circulația pe drumurile publice</span></li>
      <li data-fx-child="">HG nr. 1391/2006 <span>regulamentul de aplicare a OUG 195/2002</span></li>
      <li data-fx-child="">Alte 25 de acte normative <span>penal, ordine publică, silvic, arme</span></li>
    </ul>
  </section>

  <section className="section faq faq-wrap" aria-labelledby="faq-title">
    <h2 id="faq-title" className="display">Întrebări.</h2>
    <div className="faq__list">
      <details>
        <summary>Văd amenda pentru o faptă rutieră?</summary>
        <p>Da. Fișa faptei arată actul normativ, articolul care o prevede, articolul care o sancționează și plaja amenzii.</p>
      </details>
      <details>
        <summary>Merge fără internet?</summary>
        <p>Da. Conținutul e stocat în telefon. Actualizările se descarcă prin sincronizare, când ai conexiune.</p>
      </details>
      <details>
        <summary>Informațiile sunt oficiale?</summary>
        <p>Nu. JAC are caracter orientativ. Forma oficială se verifică pe <a href="https://legislatie.just.ro/" rel="noopener">legislatie.just.ro</a> și în Monitorul Oficial.</p>
      </details>
    </div>
  </section>

  <section className="section" aria-labelledby="next-title">
    <h2 id="next-title" className="next__title">Mai vezi și</h2>
    <div className="next-modules" data-fx="rise">
      <Link className="module" href="/legislatie-penala/"><span className="module__text"><b>Legislație penală</b><span>Trei module: infracțiuni, partea generală și procedură.</span><i>Vezi modulul</i></span><img className="module__shot" src="/assets/img/screens/penal-1-module-480.webp" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></Link>
      <Link className="module" href="/ghid-operativ/"><span className="module__text"><b>Ghid operativ</b><span>16 capitole, spețe și tipizate.</span><i>Vezi modulul</i></span><img className="module__shot" src="/assets/img/screens/ghid-operativ-480.webp" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></Link>
      <Link className="module" href="/shiftr/"><span className="module__text"><b>Shiftr</b><span>Ture, normă și ore suplimentare.</span><i>Vezi modulul</i></span><img className="module__shot" src="/assets/img/screens/shiftr-calendar-480.webp" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></Link>
      <Link className="module" href="/#preturi"><span className="module__text"><b>Prețuri</b><span>De la 3,33 lei / lună de persoană.</span><i>Vezi planurile</i></span><img className="module__shot" src="/assets/img/screens/crew-redactat-480.webp" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></Link>
    </div>
  </section>

  <section className="access" id="acces" aria-labelledby="access-title">
    <h2 id="access-title" className="display display--xl">Intră în beta.</h2>
    <p>JAC e în testare închisă, doar pentru Android. Trimite un e-mail și cere acces.</p>
    <a className="btn btn--blue btn--lg magnetic" href="mailto:vladticu100@gmail.com?subject=Acces%20beta%20JAC"><span>Cere acces la beta</span></a>
    <p className="access__note">Se deschide un e-mail către vladticu100@gmail.com</p>
  </section>
</main>
      <SiteFooter />
      <PageEffects page="legislatie-rutiera" />
    </>
  );
}
