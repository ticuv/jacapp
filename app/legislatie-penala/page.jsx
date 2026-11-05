import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageEffects from "@/components/PageEffects";
import { FACTS as F, Stage, Chip, MainCta, CtaBand, Disclaimer } from "@/components/ui";

export const metadata = {
  title: "Codul penal, CPP integral și 28 de acte în text complet | JAC",
  description: "Legislația penală din JAC, offline: 4 module și 1.369 de articole. Infracțiunile cu pedeapsa, competența și măsurile, partea generală, procedura operativă și Codul de procedură penală integral. Plus 28 de coduri și acte normative în text complet.",
  alternates: { canonical: "https://aplicatiajac.ro/legislatie-penala/" },
  openGraph: { title: "Codul penal și CPP integral în JAC", url: "https://aplicatiajac.ro/legislatie-penala/", siteName: "JAC", locale: "ro_RO", type: "website", images: [{ url: "https://aplicatiajac.ro/assets/img/og-jac.jpg", width: 1200, height: 630 }] },
};

const ACTS = [
  { g: "Coduri", items: [["Codul penal", "Legea nr. 286/2009"], ["Codul de procedură penală", "Legea nr. 135/2010"], ["Codul silvic", "Legea nr. 331/2024"], ["Codul aerian", "Legea nr. 21/2020"]] },
  {
    g: "Legi", items: [
      ["Legea nr. 4/2008", "competiții și jocuri sportive"], ["Legea nr. 54/2012", "activitățile de picnic"], ["Legea nr. 60/1991", "adunările publice"],
      ["Legea nr. 61/1991", "ordinea și liniștea publică"], ["Legea nr. 126/1995", "regimul materiilor explozive"], ["Legea nr. 143/2000", "traficul și consumul de droguri"],
      ["Legea nr. 145/2014", "piața produselor agricole"], ["Legea nr. 171/2010", "contravențiile silvice"], ["Legea nr. 176/2024", "pescuitul și resursa acvatică vie"],
      ["Legea nr. 194/2011", "produse cu efecte psihoactive"], ["Legea nr. 217/2003", "violența domestică"], ["Legea nr. 295/2004", "regimul armelor și munițiilor"],
      ["Legea nr. 333/2003", "paza obiectivelor, bunurilor și valorilor"], ["Legea nr. 349/2002", "consumul produselor din tutun"], ["Legea nr. 365/2002", "comerțul electronic"],
      ["Legea nr. 407/2006", "vânătoarea și fondul cinegetic"],
    ],
  },
  {
    g: "Ordonanțe și hotărâri", items: [
      ["OUG nr. 195/2002", "circulația pe drumurile publice"], ["HG nr. 1391/2006", "regulamentul OUG 195/2002"], ["OG nr. 2/2001", "regimul juridic al contravențiilor"],
      ["OUG nr. 34/2008", "sistemul 112"], ["OUG nr. 55/2002", "câinii periculoși sau agresivi"], ["OUG nr. 97/2005", "evidența și actele de identitate"],
      ["HG nr. 11/2018", "hotărârea de aprobare a normelor Legii 295/2004"], ["Normele metodologice", "de aplicare a Legii 295/2004 (HG 11/2018)"],
    ],
  },
];

export default function PenalPage() {
  const total = ACTS.reduce((n, a) => n + a.items.length, 0);
  return (
    <>
      <SiteHeader current="legislatie-penala" />
      <main id="continut">
        <section className="phero">
          <div className="wrap split">
            <div className="copy">
              <ol className="crumbs" aria-label="Unde ești"><li><Link href="/">Acasă</Link></li><li aria-current="page">Penal și CPP</li></ol>
              <p className="eyebrow" data-r="">Legislație penală · {F.penalModules} module · {F.penalArticole} articole</p>
              <h1 className="h1" data-r="">Fapta, pedeapsa, <span className="soft">competența.</span></h1>
              <p className="lead" data-r="">Codul penal și Codul de procedură penală, aduse la forma în vigoare. Pe fiecare fișă de infracțiune: descrierea faptei, pedeapsa, acțiunea penală, competența și măsurile procedurale.</p>
              <div className="btns" data-r=""><MainCta /><a className="btn btn--glass" href="#integrale">Cele {total} de acte integrale</a></div>
            </div>
            <Stage
              front="app-penal-module"
              back="app-penal-fisa"
              backRight
              priority
              frontAlt="Secțiunea Legislație penală din JAC: 4 module și 1.369 de articole: Codul penal – Infracțiuni (525), Codul penal – Partea generală (188), Procedură penală – Operativ (15) și Codul de procedură penală, Legea 135/2010, textul integral pe articole (641)."
            >
              <Chip pos="tl" k="Module">4</Chip>
              <Chip pos="br" tone="blue" k="Articole">1.369</Chip>
            </Stage>
          </div>
        </section>

        <section className="sec sec--tight" aria-labelledby="mod-title">
          <div className="wrap">
            <div className="sec__head">
              <p className="eyebrow" data-r="">Modulele</p>
              <h2 id="mod-title" className="h2" data-r="">Patru module penale.</h2>
            </div>
            <ul className="tiles tiles--4">
              <li className="tile glass" data-r=""><span className="tile__n">525</span><h3>Codul penal: Infracțiuni</h3><p>Partea specială, cu descrierea faptei, pedeapsa, competența și măsurile pe fiecare fișă.</p></li>
              <li className="tile glass" data-r="" style={{ "--d": 1 }}><span className="tile__n">188</span><h3>Codul penal: Partea generală</h3><p>Instituțiile și regulile de bază.</p></li>
              <li className="tile glass" data-r="" style={{ "--d": 2 }}><span className="tile__n">15</span><h3>Procedură penală: Operativ</h3><p>Măsuri procesuale, percheziții, flagrant.</p></li>
              <li className="tile glass" data-r="" style={{ "--d": 3 }}><span className="tile__k">Nou</span><span className="tile__n">641</span><h3>Codul de procedură penală</h3><p>Legea 135/2010, textul integral pe articole.</p></li>
            </ul>
          </div>
        </section>

        <section className="sec" aria-labelledby="fisa-title">
          <div className="wrap split split--flip">
            <div className="copy">
              <p className="eyebrow" data-r="">Fișa de infracțiune</p>
              <h2 id="fisa-title" className="h2" data-r="">Furtul, <span className="soft">de exemplu.</span></h2>
              <ol className="anat">
                <li className="glass" data-r=""><b>Încadrarea juridică</b>: art. 228 alin. (1) Cod penal.</li>
                <li className="glass" data-r="" style={{ "--d": 1 }}><b>Descrierea faptei</b>, din textul legii.</li>
                <li className="glass" data-r="" style={{ "--d": 2 }}><b>Pedeapsa</b>: închisoare de la 6 luni la 3 ani sau amendă.</li>
                <li className="glass" data-r="" style={{ "--d": 3 }}><b>Acțiunea penală</b> (din oficiu sau la plângere) și amenda alternativă.</li>
                <li className="glass" data-r="" style={{ "--d": 4 }}><b>Competența și măsurile procedurale</b> din CPP.</li>
              </ol>
            </div>
            <div>
              <Stage
                front="app-penal-fisa"
                back="app-cpp-integral"
                variant="stage--left"
                frontAlt="Fișa de infracțiune din JAC pentru furt, forma de bază: încadrarea juridică art. 228 alin. (1) Cod penal, descrierea faptei, pedeapsa de la 6 luni la 3 ani sau amendă, acțiunea din oficiu, amenda alternativă și secțiunea Competență și măsuri procedurale (CPP)."
              >
                <Chip pos="tl" k="Încadrare">Art. 228 (1) CP</Chip>
                <Chip pos="mr" tone="red" k="Pedeapsa">6 luni – 3 ani</Chip>
                <Chip pos="bl" k="Acțiune">Din oficiu</Chip>
              </Stage>
            </div>
          </div>
        </section>

        <section className="sec sec--tight" id="integrale" aria-labelledby="int-title">
          <div className="wrap">
            <div className="split" style={{ alignItems: "end", marginBottom: "clamp(32px, 6vw, 56px)" }}>
              <div className="sec__head" style={{ marginBottom: 0 }}>
                <p className="eyebrow" data-r="">Legislație integrală</p>
                <h2 id="int-title" className="h2" data-r=""><span className="mono">{total}</span> de acte, <span className="soft">în text complet.</span></h2>
                <p className="lead" data-r="">Coduri și acte normative cu tot textul, pe articole, salvate pe telefon. Cauți după denumire sau direct în conținutul articolelor.</p>
              </div>
              <Stage
                front="app-text-integral"
                frontAlt="Legislația integrală din JAC: grupa Coduri, cu Codul aerian (Legea 21/2020, 136 de articole), Codul silvic (Legea 331/2024, 163 de articole), Codul penal (Legea 286/2009, 459 de articole) și Codul de procedură penală (Legea 135/2010)."
              >
                <Chip pos="tl" tone="blue" k="Text integral">{total} de acte</Chip>
                <Chip pos="br" k="Căutare">în articole</Chip>
              </Stage>
            </div>
            <div className="acts">
              {ACTS.map((a, i) => (
                <section key={a.g} className="glass" data-r="" style={{ "--d": i }} aria-label={a.g}>
                  <h3>{a.g}<span>{a.items.length}</span></h3>
                  <ul>{a.items.map(([t, d]) => <li key={t}><b>{t}</b>{d}</li>)}</ul>
                </section>
              ))}
            </div>
            <div style={{ marginTop: 28 }} data-r=""><Disclaimer /></div>
          </div>
        </section>

        <CtaBand title="Codul, cu tot textul, offline." />
      </main>
      <SiteFooter />
      <PageEffects page="legislatie-penala" />
    </>
  );
}
