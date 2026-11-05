import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageEffects from "@/components/PageEffects";
import { Stage, Chip, MainCta, CtaBand, Disclaimer } from "@/components/ui";

export const metadata = {
  title: "Ghid operativ: 15 capitole, spețe și tipizate | JAC",
  description: "Ghidul operativ din JAC, offline: 15 capitole de la regimul contravenției la mandatele de aducere, spețe cu documentele care se întocmesc și catalogul de tipizate, cu procese-verbale model completate pe spețe fictive și formularele goale.",
  alternates: { canonical: "https://aplicatiajac.ro/ghid-operativ/" },
  openGraph: { title: "Ghid operativ în JAC: 15 capitole, spețe și tipizate", url: "https://aplicatiajac.ro/ghid-operativ/", siteName: "JAC", locale: "ro_RO", type: "website", images: [{ url: "https://aplicatiajac.ro/assets/img/og-jac.jpg", width: 1200, height: 630 }] },
};

const CHAPTERS = [
  "Regimul contravenției (OG 2/2001)", "Infracțiunea (Codul penal și CPP)", "Ordinea și liniștea publică (Legea 61/1991)",
  "Adunările publice (Legea 60/1991)", "Violența în sport (Legea 4/2008)", "Activitățile de picnic (Legea 54/2012)",
  "Pescuit și vânătoare", "Regimul silvic", "Câini periculoși", "Protecția mediului", "Paza obiectivelor",
  "Materii explozive", "Tutun", "Droguri", "Mandatele de aducere",
];

export default function GhidOperativPage() {
  return (
    <>
      <SiteHeader current="ghid-operativ" />
      <main id="continut">
        <section className="phero">
          <div className="wrap split">
            <div className="copy">
              <ol className="crumbs" aria-label="Unde ești"><li><Link href="/">Acasă</Link></li><li aria-current="page">Ghid operativ</li></ol>
              <p className="eyebrow" data-r="">Ghid operativ · offline · actualizat 2026</p>
              <h1 className="h1" data-r="">Speța, documentele, <span className="soft">tipizatul.</span></h1>
              <p className="lead" data-r="">15 capitole cu spețe pe fiecare, documentele care se întocmesc și un catalog cu procese-verbale model completate pe spețe fictive, lângă formularele goale.</p>
              <div className="btns" data-r=""><MainCta /><a className="btn btn--glass" href="#capitole">Cele 15 capitole</a></div>
            </div>
            <Stage
              front="app-ghid-capitole"
              priority
              frontAlt="Ghidul operativ din JAC, actualizat 2026: catalogul de tipizate completate și necompletate, apoi capitolele Regimul contravenției (OG 2/2001), Infracțiunea, Legea 61/1991, Legea 60/1991, Legea 4/2008, Legea 54/2012, pescuit și vânătoare și regimul silvic."
            >
              <Chip pos="tl" tone="blue" k="Ghid operativ">15 capitole</Chip>
              <Chip pos="br" k="Catalog">Tipizate</Chip>
            </Stage>
          </div>
        </section>

        <section className="sec sec--tight" id="capitole" aria-labelledby="cap-title">
          <div className="wrap">
            <div className="sec__head">
              <p className="eyebrow" data-r="">Capitolele</p>
              <h2 id="cap-title" className="h2" data-r="">De la contravenție <span className="soft">la mandatul de aducere.</span></h2>
            </div>
            <ol className="chaplist" data-r="">
              {CHAPTERS.map((c) => <li key={c}>{c}</li>)}
            </ol>
          </div>
        </section>

        <section className="sec" aria-labelledby="pv-title">
          <div className="wrap split">
            <div className="copy">
              <p className="eyebrow" data-r="">Catalogul de tipizate</p>
              <h2 id="pv-title" className="h2" data-r="">Gol sau completat? <span className="soft">Trage linia.</span></h2>
              <p className="lead" data-r="">Fiecare tipizat are alături modelul completat pe o speță fictivă. Sus, exemplul completat. Jos, formularul gol.</p>
              <ul className="checks" data-r="">
                <li><b>Spețe pe fiecare capitol</b>, cu documentele care se întocmesc.</li>
                <li><b>Procese-verbale model</b> completate pe spețe fictive.</li>
                <li><b>Formularele goale</b>, într-un singur loc.</li>
              </ul>
            </div>
            <div className="compare" data-compare="" style={{ "--pos": "50%" }} data-r="scale">
              <div className="compare__screen">
                <img src="/assets/img/screens/pv-necompletat-800.webp" srcSet="/assets/img/screens/pv-necompletat-480.webp 480w, /assets/img/screens/pv-necompletat-800.webp 800w, /assets/img/screens/pv-necompletat-1175.webp 1175w" sizes="(min-width: 1024px) 420px, 90vw" width="1175" height="2150" alt="Tipizatul necompletat al procesului-verbal de constatare a infracțiunii flagrante, cu spații goale pentru dată, loc, agenți și constatări." loading="lazy" decoding="async" />
                <div className="compare__over">
                  <img src="/assets/img/screens/pv-completat-800.webp" srcSet="/assets/img/screens/pv-completat-480.webp 480w, /assets/img/screens/pv-completat-800.webp 800w, /assets/img/screens/pv-completat-1175.webp 1175w" sizes="(min-width: 1024px) 420px, 90vw" width="1175" height="2150" alt="Același proces-verbal, completat pe o speță fictivă: data și ora, agenții, sesizarea prin 112 și deplasarea patrulei." loading="lazy" decoding="async" />
                </div>
                <span className="compare__tag compare__tag--top" aria-hidden="true">Completat</span>
                <span className="compare__tag compare__tag--bottom" aria-hidden="true">Necompletat</span>
                <div className="compare__line" aria-hidden="true"><span className="compare__knob"><svg viewBox="0 0 24 24"><path d="M8 9l4-4 4 4M8 15l4 4 4-4" /></svg></span></div>
              </div>
              <label className="sr-only" htmlFor="pv-range">Poziția liniei dintre procesul-verbal completat (sus) și cel necompletat (jos)</label>
              <input className="compare__range" id="pv-range" type="range" min="0" max="100" defaultValue="50" step="1" />
            </div>
          </div>
          <div className="wrap" style={{ marginTop: 40 }} data-r=""><Disclaimer /></div>
        </section>

        <CtaBand title="Ghidul operativ, fără semnal." />
      </main>
      <SiteFooter />
      <PageEffects page="ghid-operativ" />
    </>
  );
}
