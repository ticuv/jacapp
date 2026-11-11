import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Laurels from "@/components/Laurels";
import PageEffects from "@/components/PageEffects";
import { Phone, MainCta, PlayBanner } from "@/components/ui";

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
    images: [{ url: "https://aplicatiajac.ro/assets/img/og-jac-2026-11.jpg", width: 1200, height: 630, alt: "JAC, singurul instrument legislativ care le are pe toate: ecranele Acasă, Shiftr și ghidul vizual Drone." }],
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

/* The hero deck: six real screens. One stands at the centre for a second, then they all slide one place right to
   left (the one on the right comes to the centre, the centre one goes left), the way the old home page did it. */
const DECK = ["app-acasa", "app-rutier-module", "app-penal-module", "app-shiftr-a", "app-ghid-capitole", "app-ghid-drone", "app-text-integral"];
const DECK_ALT = "Ecranul Acasă din JAC: salutul „Salutare, ticuv” cu avatarul PRO încadrat de lauri aurii, cardul Programul tău („Liber azi. De Zi duminică.”, 160h din 160h), căutarea în baza locală de 3.542 de articole offline și plăcile Cod penal, Legi speciale, Regim rutier și Text integral.";
const deckPos = (i, n) => (i === 0 ? "center" : i === 1 ? "right" : i === n - 1 ? "left" : i === n - 2 ? "out" : "back");

export default function HomePage() {
  return (
    <>
      <SiteHeader current="home" />
      <main id="continut">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />

        <section className="hero" aria-labelledby="hero-title" data-hero="">
          <PlayBanner className="gp-pill--hero" />
          <div className="hero__head">
            <h1 id="hero-title" className="hero__title">
              <span className="ln dim">Toată legea.</span>{" "}
              <span className="ln dim">În buzunarul tău.</span>
            </h1>
            <div className="hero__lit" aria-hidden="true">
              <span className="ln"><span><span data-t="Toată legea."></span></span></span>
              <span className="ln"><span><span data-t="În buzunarul tău."></span></span></span>
            </div>
          </div>
          <div className="hero__stage">
            <div className="hero__phone">
              <span className="hero__halo-wrap" aria-hidden="true"><span className="hero__halo"></span></span>
              <div className="hero__deck" data-deck="">
                {DECK.map((name, i) => (
                  <figure key={name} className="phone" data-ui="" data-pos={deckPos(i, DECK.length)} aria-hidden={i === 0 ? undefined : "true"}>
                    <img
                      src={`/assets/img/screens/${name}-800.webp`}
                      srcSet={`/assets/img/screens/${name}-480.webp 480w, /assets/img/screens/${name}-800.webp 800w, /assets/img/screens/${name}-1175.webp 1175w`}
                      sizes="(min-width: 1024px) 37svh, 62vw"
                      width="1175"
                      height="2560"
                      alt={i === 0 ? DECK_ALT : ""}
                      {...(i === 0 ? { fetchPriority: "high" } : { loading: i < 2 || i === DECK.length - 1 ? "eager" : "lazy", decoding: "async" })}
                    />
                  </figure>
                ))}
              </div>
              <span className="hero__screen-off" aria-hidden="true"></span>
              <span className="hero__blackout" aria-hidden="true"></span>
            </div>
          </div>
          <div className="hero__foot wrap">
            <p className="hero__line">Cod penal, rutier, legi speciale, ghiduri vizuale și turele tale. Offline.</p>
            <MainCta className="btn" />
          </div>
        </section>

        <section className="chap" id="capitole" aria-label="Ce conține aplicația" data-chapters="">
          <div className="chap__inner">
            <div className="chap__list">
              <article className="chap__item is-on" aria-labelledby="ch-rutier">
                <h2 id="ch-rutier" className="chap__num"><span className="sr-only">Regim rutier: </span><span className="chap__mask"><span className="mono">216,25 lei</span></span></h2>
                <p className="chap__text">Punctul-amendă de la 1 iulie 2026. Pe fiecare fișă din cele 10 module rutiere, încadrarea, clasa, punctele și amenda sunt deja calculate.</p>
                <p className="chap__meta mono">Clasa a III-a · 6–8 puncte · 1.297,50–1.730,00 lei</p>
                <Phone name="app-rutier-module" className="chap__phone-m" sizes="70vw" alt="Lista Regim rutier din JAC: sus, valoarea punctului-amendă de 216,25 lei, valabilă de la 1 iulie 2026; dedesubt 10 module și 1.011 fapte și proceduri, de la Codul rutier (541 de fapte) și Proceduri rutiere la Legea 38/2003, OUG 49/2019, Legea 226/2023, HG 1317/2023, OG 43/1997 și OG 37/2007." />
              </article>
              <article className="chap__item" aria-labelledby="ch-fise">
                <h2 id="ch-fise" className="chap__num"><span className="sr-only">Fișe offline: </span><span className="chap__mask"><span className="mono">3.542</span></span></h2>
                <p className="chap__text">De fișe în telefon, fără semnal: Codul penal, CPP, rutierul și 19 legi speciale. Scrii fapta și primești încadrarea exactă.</p>
                <p className="chap__meta mono">33 de module · 28 de acte integrale</p>
                <Phone name="app-legi-speciale" className="chap__phone-m" sizes="70vw" alt="Lista Legi speciale din JAC: 19 pachete legislative și 1.161 de fapte, de la Legea 61/1991 (ordine și liniște publică) la Domeniul silvic (170 de fapte)." />
              </article>
              <article className="chap__item" aria-labelledby="ch-shiftr" data-shiftr2="" data-norm="160">
                <h2 id="ch-shiftr" className="chap__num"><span className="sr-only">Shiftr, soldul de ore suplimentare: </span><span className="chap__mask"><span className="mono" data-o="bal" aria-live="polite">+12h</span></span></h2>
                <p className="chap__text">Notezi turele, Shiftr calculează norma, orele peste normă și soldul după recuperări. Datele rămân pe telefon.</p>
                <div className="calc2" role="group" aria-label="Exemplu de calcul Shiftr, noiembrie 2026">
                  <div className="calc2__row"><span>Normă</span><b className="mono">160h</b></div>
                  <div className="calc2__row"><span>Lucrate</span><b className="mono" data-o="lucrate">172h</b></div>
                  <label className="calc2__row calc2__check"><span>O noapte în plus, pe 23</span><span className="calc2__toggle"><input type="checkbox" data-extra="12" /><b className="mono">+12h</b></span></label>
                  <label className="calc2__row calc2__check"><span>Tura din 17 devine recuperare de 8h</span><span className="calc2__toggle"><input type="checkbox" data-rec="8" /><b className="mono">−8h</b></span></label>
                </div>
                <figure className="phone chap__phone-m shiftr-stack" data-ui=""><img className="shiftr-st is-on" data-st="a" src="/assets/img/screens/app-shiftr-a-800.webp" srcSet="/assets/img/screens/app-shiftr-a-800.webp 800w, /assets/img/screens/app-shiftr-a-1175.webp 1175w" sizes="70vw" width="1175" height="2560" alt="Shiftr, noiembrie 2026: 172h lucrate din 160h normă, sold ore suplimentare +12h, acumulate +12h." loading="lazy" decoding="async" /><img className="shiftr-st" data-st="b" src="/assets/img/screens/app-shiftr-b-800.webp" srcSet="/assets/img/screens/app-shiftr-b-800.webp 800w, /assets/img/screens/app-shiftr-b-1175.webp 1175w" sizes="70vw" width="1175" height="2560" alt="Shiftr, noiembrie 2026, cu tura de zi din 17 noiembrie trecută ca recuperare de 8h: 168h din 160h, sold 0h, acumulate +8h și 1 recuperare în lună −8h." loading="lazy" decoding="async" /><img className="shiftr-st" data-st="c" src="/assets/img/screens/app-shiftr-c-800.webp" srcSet="/assets/img/screens/app-shiftr-c-800.webp 800w, /assets/img/screens/app-shiftr-c-1175.webp 1175w" sizes="70vw" width="1175" height="2560" alt="Shiftr, noiembrie 2026, cu o noapte în plus pe 23 noiembrie: 184h din 160h, sold +24h." loading="lazy" decoding="async" /><img className="shiftr-st" data-st="d" src="/assets/img/screens/app-shiftr-d-800.webp" srcSet="/assets/img/screens/app-shiftr-d-800.webp 800w, /assets/img/screens/app-shiftr-d-1175.webp 1175w" sizes="70vw" width="1175" height="2560" alt="Shiftr, noiembrie 2026, cu o noapte în plus și o recuperare de 8h: 180h din 160h, sold +12h, acumulate +20h și 1 recuperare în lună −8h." loading="lazy" decoding="async" /></figure>
              </article>
              <article className="chap__item" aria-labelledby="ch-ghid">
                <h2 id="ch-ghid" className="chap__num"><span className="sr-only">Ghidul operativ: </span><span className="chap__mask"><span className="mono">15 capitole</span></span></h2>
                <p className="chap__text">Ghidul operativ, offline: spețe pe fiecare capitol, cu documentele care se întocmesc, și catalogul de procese-verbale model.</p>
                <p className="chap__meta mono">De la contravenție la mandatul de aducere</p>
                <Phone name="app-ghid-capitole" className="chap__phone-m" sizes="70vw" alt="Ghidul operativ din JAC, actualizat 2026: catalogul de tipizate completate și necompletate, apoi capitolele Regimul contravenției, Infracțiunea, Legea 61/1991, Legea 60/1991, Legea 4/2008, Legea 54/2012, pescuit și vânătoare și regimul silvic." />
              </article>
            </div>
            <div className="chap__car" aria-hidden="true">
              <span className="hero__halo chap__car-halo"></span>
              <figure className="phone" data-ui="" data-i="0"><img src="/assets/img/screens/app-rutier-module-800.webp" srcSet="/assets/img/screens/app-rutier-module-480.webp 480w, /assets/img/screens/app-rutier-module-800.webp 800w" sizes="62vw" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></figure>
              <figure className="phone" data-ui="" data-i="1"><img src="/assets/img/screens/app-legi-speciale-800.webp" srcSet="/assets/img/screens/app-legi-speciale-480.webp 480w, /assets/img/screens/app-legi-speciale-800.webp 800w" sizes="62vw" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></figure>
              <figure className="phone shiftr-stack" data-ui="" data-i="2"><img className="shiftr-st is-on" data-st="a" src="/assets/img/screens/app-shiftr-a-800.webp" srcSet="/assets/img/screens/app-shiftr-a-480.webp 480w, /assets/img/screens/app-shiftr-a-800.webp 800w" sizes="62vw" width="1175" height="2560" alt="" loading="lazy" decoding="async" /><img className="shiftr-st" data-st="b" src="/assets/img/screens/app-shiftr-b-800.webp" srcSet="/assets/img/screens/app-shiftr-b-480.webp 480w, /assets/img/screens/app-shiftr-b-800.webp 800w" sizes="62vw" width="1175" height="2560" alt="" loading="lazy" decoding="async" /><img className="shiftr-st" data-st="c" src="/assets/img/screens/app-shiftr-c-800.webp" srcSet="/assets/img/screens/app-shiftr-c-480.webp 480w, /assets/img/screens/app-shiftr-c-800.webp 800w" sizes="62vw" width="1175" height="2560" alt="" loading="lazy" decoding="async" /><img className="shiftr-st" data-st="d" src="/assets/img/screens/app-shiftr-d-800.webp" srcSet="/assets/img/screens/app-shiftr-d-480.webp 480w, /assets/img/screens/app-shiftr-d-800.webp 800w" sizes="62vw" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></figure>
              <figure className="phone" data-ui="" data-i="3"><img src="/assets/img/screens/app-ghid-capitole-800.webp" srcSet="/assets/img/screens/app-ghid-capitole-480.webp 480w, /assets/img/screens/app-ghid-capitole-800.webp 800w" sizes="62vw" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></figure>
            </div>
            <div className="chap__tabs" role="group" aria-label="Alege capitolul">
              <button type="button" data-go="0" aria-pressed="true">Rutier</button>
              <button type="button" data-go="1" aria-pressed="false">Fișe</button>
              <button type="button" data-go="2" aria-pressed="false">Shiftr</button>
              <button type="button" data-go="3" aria-pressed="false">Ghid</button>
            </div>
            <div className="chap__stage" aria-hidden="true">
              <figure className="phone chap__back is-on" data-ui="" data-for="0"><img src="/assets/img/screens/app-rutier-fisa-800.webp" srcSet="/assets/img/screens/app-rutier-fisa-800.webp 800w, /assets/img/screens/app-rutier-fisa-1175.webp 1175w" sizes="30svh" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></figure>
              <figure className="phone chap__back" data-ui="" data-for="1"><img src="/assets/img/screens/app-penal-module-800.webp" srcSet="/assets/img/screens/app-penal-module-800.webp 800w, /assets/img/screens/app-penal-module-1175.webp 1175w" sizes="30svh" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></figure>
              <figure className="phone chap__back chap__back--far" data-ui="" data-for="1"><img src="/assets/img/screens/app-rutier-module-800.webp" srcSet="/assets/img/screens/app-rutier-module-800.webp 800w, /assets/img/screens/app-rutier-module-1175.webp 1175w" sizes="30svh" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></figure>
              <div className="chap__device">
                <span className="hero__halo chap__halo"></span>
                <figure className="phone" data-ui="">
                  <div className="chap__screens">
                    <img className="is-on" src="/assets/img/screens/app-rutier-module-800.webp" srcSet="/assets/img/screens/app-rutier-module-800.webp 800w, /assets/img/screens/app-rutier-module-1175.webp 1175w" sizes="37svh" width="1175" height="2560" alt="" loading="lazy" decoding="async" />
                    <img src="/assets/img/screens/app-legi-speciale-800.webp" srcSet="/assets/img/screens/app-legi-speciale-800.webp 800w, /assets/img/screens/app-legi-speciale-1175.webp 1175w" sizes="37svh" width="1175" height="2560" alt="" loading="lazy" decoding="async" />
                    <div className="chap__shot shiftr-stack"><img className="shiftr-st is-on" data-st="a" src="/assets/img/screens/app-shiftr-a-800.webp" srcSet="/assets/img/screens/app-shiftr-a-800.webp 800w, /assets/img/screens/app-shiftr-a-1175.webp 1175w" sizes="37svh" width="1175" height="2560" alt="" loading="lazy" decoding="async" /><img className="shiftr-st" data-st="b" src="/assets/img/screens/app-shiftr-b-800.webp" srcSet="/assets/img/screens/app-shiftr-b-800.webp 800w, /assets/img/screens/app-shiftr-b-1175.webp 1175w" sizes="37svh" width="1175" height="2560" alt="" loading="lazy" decoding="async" /><img className="shiftr-st" data-st="c" src="/assets/img/screens/app-shiftr-c-800.webp" srcSet="/assets/img/screens/app-shiftr-c-800.webp 800w, /assets/img/screens/app-shiftr-c-1175.webp 1175w" sizes="37svh" width="1175" height="2560" alt="" loading="lazy" decoding="async" /><img className="shiftr-st" data-st="d" src="/assets/img/screens/app-shiftr-d-800.webp" srcSet="/assets/img/screens/app-shiftr-d-800.webp 800w, /assets/img/screens/app-shiftr-d-1175.webp 1175w" sizes="37svh" width="1175" height="2560" alt="" loading="lazy" decoding="async" /></div>
                    <img src="/assets/img/screens/app-ghid-capitole-800.webp" srcSet="/assets/img/screens/app-ghid-capitole-800.webp 800w, /assets/img/screens/app-ghid-capitole-1175.webp 1175w" sizes="37svh" width="1175" height="2560" alt="" loading="lazy" decoding="async" />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="gal2" id="ghiduri" aria-labelledby="gal2-title" data-gallery="">
          <div className="gal2__pin">
            <div className="gal2__head wrap">
              <h2 id="gal2-title" className="gal2__title">Ghidurile vizuale.</h2>
              <p className="gal2__lead">Drone, droguri, pirotehnice, competiții sportive, fumat și câini periculoși: ce faci pas cu pas și cum recunoști, cu fotografii de identificare.</p>
            </div>
            <ul className="gal2__track" aria-label="Fotografii din ghidurile vizuale">
              <li className="gal2__item">
                <figure>
                  <img src="/assets/img/ghiduri/drona_c2-1000.webp" srcSet="/assets/img/ghiduri/drona_c2-600.webp 600w, /assets/img/ghiduri/drona_c2-1000.webp 1000w" sizes="(min-width: 1024px) 90svh, 86vw" width="1000" height="622" alt="O dronă semiprofesională pliabilă, cu cameră, fotografiată pe fond negru." loading="lazy" decoding="async" />
                  <figcaption><span className="mono">CLASA C2</span><b>Dronă semiprofesională, până la 4 kg</b><small>Ghidul Drone</small></figcaption>
                </figure>
              </li>
              <li className="gal2__item">
                <figure>
                  <img src="/assets/img/ghiduri/drona_fpv-1000.webp" srcSet="/assets/img/ghiduri/drona_fpv-600.webp 600w, /assets/img/ghiduri/drona_fpv-1000.webp 1000w" sizes="(min-width: 1024px) 90svh, 86vw" width="1000" height="622" alt="O dronă FPV de curse, cu cadru din carbon și elice expuse, lângă ochelarii de pilotaj." loading="lazy" decoding="async" />
                  <figcaption><span className="mono">FĂRĂ CLASĂ, CONSTRUITĂ</span><b>Dronă FPV / de curse</b><small>Ghidul Drone</small></figcaption>
                </figure>
              </li>
              <li className="gal2__item">
                <figure>
                  <img src="/assets/img/ghiduri/drog_cannabis-1000.webp" srcSet="/assets/img/ghiduri/drog_cannabis-600.webp 600w, /assets/img/ghiduri/drog_cannabis-1000.webp 1000w" sizes="(min-width: 1024px) 90svh, 86vw" width="1000" height="622" alt="Inflorescențe uscate de cannabis într-o pungă zip-lock, lângă o râșniță și foițe, cu o riglă de scară." loading="lazy" decoding="async" />
                  <figcaption><span className="mono">DE RISC · TABELUL III</span><b>Cannabis (marijuana, „iarbă”)</b><small>Ghidul Droguri</small></figcaption>
                </figure>
              </li>
              <li className="gal2__item">
                <figure>
                  <img src="/assets/img/ghiduri/drog_cocaina-1000.webp" srcSet="/assets/img/ghiduri/drog_cocaina-600.webp 600w, /assets/img/ghiduri/drog_cocaina-1000.webp 1000w" sizes="(min-width: 1024px) 90svh, 86vw" width="1000" height="622" alt="Pulbere albă de cocaină în pliculețe și folie, lângă un cântar electronic de buzunar, cu o riglă de scară." loading="lazy" decoding="async" />
                  <figcaption><span className="mono">MARE RISC · TABELUL II</span><b>Cocaină</b><small>Ghidul Droguri</small></figcaption>
                </figure>
              </li>
              <li className="gal2__item">
                <figure>
                  <img src="/assets/img/ghiduri/drog_ecstasy-1000.webp" srcSet="/assets/img/ghiduri/drog_ecstasy-600.webp 600w, /assets/img/ghiduri/drog_ecstasy-1000.webp 1000w" sizes="(min-width: 1024px) 90svh, 86vw" width="1000" height="622" alt="Comprimate colorate, ștanțate, de tip ecstasy într-o pungă, lângă câteva capsule, cu o riglă de scară." loading="lazy" decoding="async" />
                  <figcaption><span className="mono">MARE RISC · TABELUL I</span><b>Comprimate tip ecstasy (MDMA)</b><small>Ghidul Droguri</small></figcaption>
                </figure>
              </li>
              <li className="gal2__item">
                <figure>
                  <img src="/assets/img/ghiduri/piro_f1-1000.webp" srcSet="/assets/img/ghiduri/piro_f1-600.webp 600w, /assets/img/ghiduri/piro_f1-1000.webp 1000w" sizes="(min-width: 1024px) 90svh, 86vw" width="1000" height="622" alt="Articole pirotehnice din categoria F1, numerotate: steluțe, artificii de tort, pocnitori." loading="lazy" decoding="async" />
                  <figcaption><span className="mono">PERMIS PUBLICULUI · DE LA 16 ANI</span><b>Categoria F1</b><small>Ghidul Pirotehnice</small></figcaption>
                </figure>
              </li>
              <li className="gal2__item">
                <figure>
                  <img src="/assets/img/ghiduri/piro_facle-1000.webp" srcSet="/assets/img/ghiduri/piro_facle-600.webp 600w, /assets/img/ghiduri/piro_facle-1000.webp 1000w" sizes="(min-width: 1024px) 90svh, 86vw" width="1000" height="622" alt="Facle și fumigene de semnalizare, numerotate, pe fond negru." loading="lazy" decoding="async" />
                  <figcaption><span className="mono">INTERZIS PUBLICULUI</span><b>Facle, fumigene, semnalizare (P1, P2)</b><small>Ghidul Pirotehnice</small></figcaption>
                </figure>
              </li>
              <li className="gal2__item">
                <figure>
                  <img src="/assets/img/ghiduri/stadion_pirotehnice-1000.webp" srcSet="/assets/img/ghiduri/stadion_pirotehnice-600.webp 600w, /assets/img/ghiduri/stadion_pirotehnice-1000.webp 1000w" sizes="(min-width: 1024px) 90svh, 86vw" width="1000" height="622" alt="Facle, o cutie fumigenă, petarde și o baterie de artificii, numerotate, cu o riglă de scară." loading="lazy" decoding="async" />
                  <figcaption><span className="mono">INTERZIS LA INTRARE</span><b>Pirotehnice la stadion</b><small>Ghidul Stadion</small></figcaption>
                </figure>
              </li>
              <li className="gal2__item">
                <figure>
                  <img src="/assets/img/ghiduri/pit_bull-1000.webp" srcSet="/assets/img/ghiduri/pit_bull-600.webp 600w, /assets/img/ghiduri/pit_bull-1000.webp 1000w" sizes="(min-width: 1024px) 90svh, 86vw" width="1000" height="622" alt="Portretul unui Pit Bull, din profil și din față, pe fond negru." loading="lazy" decoding="async" />
                  <figcaption><span className="mono">CATEGORIA I · OUG 55/2002</span><b>Pit Bull (American Pit Bull Terrier)</b><small>Ghidul Câini periculoși</small></figcaption>
                </figure>
              </li>
            </ul>
            <p className="gal2__note wrap">Ghidurile au scop exclusiv educativ și de identificare. Fotografiile sunt ilustrații.</p>
          </div>
        </section>

        <section className="pro2" aria-labelledby="pro-title" data-in="">
          <div className="wrap pro2__inner">
            <Laurels />
            <h2 id="pro-title" className="pro2__title">Perioada fondatorilor.</h2>
            <p className="pro2__text">Până pe 15 ianuarie 2027, toate funcțiile PRO sunt gratuite. Cine își face cont acum devine Fondator și păstrează apoi prețul de 5 lei pe lună, cât timp abonamentul rămâne activ.</p>
            <div className="plans2" data-plans="">
              <h3 className="sr-only">Prețuri</h3>
              <div className="plans2__names" role="group" aria-label="Alege planul">
                <button type="button" data-plan="basic" aria-pressed="false">Basic</button>
                <button type="button" data-plan="pro" aria-pressed="false">PRO</button>
                <button type="button" data-plan="fondator" aria-pressed="true">Fondator</button>
                <button type="button" data-plan="echipaj" aria-pressed="false">Echipaj</button>
              </div>
              <div className="plans2__stage" aria-live="polite">
                <section className="plans2__plan" data-for-plan="basic" aria-label="Basic">
                  <p className="plans2__price"><b className="mono">0 lei</b><span>gratuit, cu reclame</span></p>
                  <p className="plans2__text">Cele 8 legi speciale de bază, legislația integrală, ghidul vizual Fumat și calendarul Shiftr, cu reclame. Fără celelalte ghiduri vizuale, fără calculele avansate din Shiftr, fără ghidul operativ și fără modulele PRO.</p>
                </section>
                <section className="plans2__plan" data-for-plan="pro" aria-label="PRO">
                  <p className="plans2__price"><b className="mono">10 lei</b><span>pe lună</span></p>
                  <p className="plans2__text">Toate modulele PRO, ghidurile vizuale, ghidul operativ și calculele avansate din Shiftr: soldul, recuperările, orele manuale, concediile și medicalele. Fără reclame.</p>
                </section>
                <section className="plans2__plan" data-for-plan="fondator" aria-label="Fondator">
                  <p className="plans2__price"><span className="plans2__fig"><b className="mono">5 lei</b><sup className="plans2__off mono">−50%</sup></span><span>pe lună</span></p>
                  <p className="plans2__text">Tot ce are PRO, la jumătate de preț, fără să ai nevoie de echipaj. Prețul de fondator rămâne cât timp abonamentul e activ. Dacă îl oprești, revii la 10 lei pe lună.</p>
                </section>
                <section className="plans2__plan" data-for-plan="echipaj" aria-label="Echipaj">
                  <fieldset className="plans2__bill">
                    <legend className="sr-only">Plata echipajului</legend>
                    <label><input type="radio" name="bill" value="an" defaultChecked /> Anual</label>
                    <label><input type="radio" name="bill" value="luna" /> Lunar</label>
                  </fieldset>
                  <div data-bill="an">
                    <p className="plans2__price"><span className="plans2__fig"><b className="mono">3,33 lei</b><sup className="plans2__off mono">−66,67%</sup></span><span>pe lună, de persoană</span></p>
                    <p className="plans2__text">Abonament anual pentru tot echipajul de 5 colegi: 200 lei pe an, adică 40 lei de om. PRO complet pentru fiecare.</p>
                  </div>
                  <div data-bill="luna">
                    <p className="plans2__price"><span className="plans2__fig"><b className="mono">6 lei</b><sup className="plans2__off mono">−40%</sup></span><span>pe lună, de persoană</span></p>
                    <p className="plans2__text">Abonament lunar pentru tot echipajul de 5 colegi: 30 lei pe lună pentru toți. PRO complet pentru fiecare.</p>
                  </div>
                </section>
              </div>
            </div>
            <p className="plans2__fine">Toate reducerile sunt calculate în funcție de prețul standard de 120 de lei pe an. Plata se face în aplicație, prin Google Play, după perioada gratuită, care se încheie pe 15 ianuarie 2027. Pe acest site nu se fac plăți.</p>
            <a className="plans2__compare" href="#compara" data-open-compare="">Compară planurile</a>
            <dialog className="cmp" id="compara" aria-labelledby="cmp-title">
              <div className="cmp__head">
                <h3 id="cmp-title" className="cmp__title" tabIndex="-1" autoFocus>Basic sau PRO</h3>
                <a className="cmp__close" href="#pro-title" data-close-compare="" aria-label="Închide comparația">Închide</a>
              </div>
              <p className="cmp__lead">PRO e același pentru PRO, Fondator și Echipaj; diferă doar prețul.</p>
              <div className="cmp__scroll">
                <table className="cmp__table">
                  <caption className="sr-only">Ce include Basic și ce include PRO</caption>
                  <thead><tr><th scope="col">Funcție</th><th scope="col">Basic</th><th scope="col">PRO</th></tr></thead>
                  <tbody>
                    <tr className="cmp__group"><th scope="rowgroup" colSpan="3">Legislație</th></tr>
                    <tr><th scope="row">8 legi speciale de bază<small>Legea 61/1991, 60/1991, 4/2008, 349/2002, 217/2003, 54/2012, OUG 55/2002 și OUG 97/2005</small></th><td>Da</td><td className="cmp__pro">Da</td></tr>
                    <tr><th scope="row">Celelalte 11 legi speciale<small>arme, droguri, pirotehnice, silvic, drone, pescuit, vânătoare, pază, 112 și altele</small></th><td className="cmp__no">—</td><td className="cmp__pro">Da</td></tr>
                    <tr><th scope="row">Codul penal, CPP și procedura operativă<small>4 module, 1.369 de articole</small></th><td className="cmp__no">—</td><td className="cmp__pro">Da</td></tr>
                    <tr><th scope="row">Regim rutier, cu amenda calculată<small>10 module, 1.011 fapte și proceduri</small></th><td className="cmp__no">—</td><td className="cmp__pro">Da</td></tr>
                    <tr><th scope="row">Legislație integrală<small>28 de acte, în text complet</small></th><td>Da</td><td className="cmp__pro">Da</td></tr>
                    <tr><th scope="row">Căutare în toate fișele<small>din ecranul Acasă</small></th><td className="cmp__no">—</td><td className="cmp__pro">Da</td></tr>
                    <tr><th scope="row">Favorite</th><td>până la 5</td><td className="cmp__pro">nelimitat</td></tr>
                    <tr className="cmp__group"><th scope="rowgroup" colSpan="3">Pe teren</th></tr>
                    <tr><th scope="row">Ghiduri vizuale<small>Basic: doar Fumat · PRO: Drone, Droguri, Pirotehnice, Stadion, Fumat și Câini periculoși</small></th><td>1</td><td className="cmp__pro">toate 6</td></tr>
                    <tr><th scope="row">Ghidul operativ<small>15 capitole, spețe și tipizate</small></th><td className="cmp__no">—</td><td className="cmp__pro">Da</td></tr>
                    <tr className="cmp__group"><th scope="rowgroup" colSpan="3">Shiftr</th></tr>
                    <tr><th scope="row">Calendarul, norma și orele lucrate</th><td>Da</td><td className="cmp__pro">Da</td></tr>
                    <tr><th scope="row">Soldul de ore suplimentare</th><td className="cmp__no">—</td><td className="cmp__pro">Da</td></tr>
                    <tr><th scope="row">Recuperări și ore aduse din altă aplicație</th><td className="cmp__no">—</td><td className="cmp__pro">Da</td></tr>
                    <tr><th scope="row">Concedii și medicale calculate automat</th><td className="cmp__no">—</td><td className="cmp__pro">Da</td></tr>
                    <tr className="cmp__group"><th scope="rowgroup" colSpan="3">Contul</th></tr>
                    <tr><th scope="row">Reclame</th><td>Da</td><td className="cmp__pro">Fără reclame</td></tr>
                    <tr><th scope="row">Avatarul cu lauri aurii</th><td className="cmp__no">—</td><td className="cmp__pro">Da</td></tr>
                  </tbody>
                </table>
              </div>
            </dialog>
            <MainCta className="pro2__link" />
          </div>
        </section>
      </main>
      <SiteFooter />
      <PageEffects page="home" />
    </>
  );
}
