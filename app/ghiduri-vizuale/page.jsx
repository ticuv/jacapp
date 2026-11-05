import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageEffects from "@/components/PageEffects";
import { Stage, Chip, Phone, MainCta, CtaBand } from "@/components/ui";

export const metadata = {
  title: "Ghiduri vizuale pentru teren: drone, droguri, pirotehnice, stadion | JAC",
  description: "6 ghiduri vizuale în JAC, cu fotografii de identificare: drone C0/C1/C2/FPV, droguri (10 substanțe și modelul de descriere în PV), pirotehnice F1–F4, T, P, stadion, fumat și câini periculoși. Ce faci pas cu pas, ce verifici, cum încadrezi.",
  alternates: { canonical: "https://aplicatiajac.ro/ghiduri-vizuale/" },
  openGraph: { title: "Ghiduri vizuale în JAC: pas cu pas, cu poze", url: "https://aplicatiajac.ro/ghiduri-vizuale/", siteName: "JAC", locale: "ro_RO", type: "website", images: [{ url: "https://aplicatiajac.ro/assets/img/og-jac.jpg", width: 1200, height: 630 }] },
};

const GUIDES = [
  {
    id: "drone", tag: "Drone", law: "Legea 21/2020 · HG 643/2020 · HG 859/2021", shot: "app-ghid-drone",
    t: "Drone: clasa, pilotul, regulile.",
    p: "Clasele C0, C1, C2 (cu două modele), FPV și dronele mari sau agricole, fiecare cu fotografie. Apoi documentele cerute pilotului, regulile de zbor după Reg. (UE) 2019/947 și sancțiunile.",
    list: ["Pe teren: observi, identifici pilotul, ceri documentele", "Tipuri de drone, după clasa marcată pe dronă", "Ce ceri: înregistrarea operatorului, certificatul A1/A3 sau A2", "Reguli de zbor și sancțiuni"],
    alt: "Ghidul Drone din JAC, tab-ul Tipuri de drone: cardul Clasa C2 cu fotografia unei drone semiprofesionale de până la 4 kg și regulile: înregistrarea operatorului, certificatul A2, cel puțin 30 m față de persoanele neimplicate, identificarea la distanță și geovigilența.",
    chips: [["tl", "blue", "Clasa", "C2 · până la 4 kg"], ["br", "", "Reg. (UE)", "2019/947"]],
  },
  {
    id: "droguri", tag: "Droguri", law: "Legea 143/2000 · Legea 194/2011 · C.pr.pen.", shot: "app-ghid-droguri", back: "app-ghid-droguri-teren", backAlt: "Ghidul Droguri din JAC, tab-ul Pe teren: pașii numerotați, de la observare și înregistrare la ridicarea probelor.",
    t: "Droguri: cum arată, cum încadrezi, ce scrii în PV.",
    p: "10 substanțe, fiecare cu două fotografii, în forme diferite. Pentru fiecare: cum arată, dacă e drog de risc sau de mare risc, consum sau trafic, siguranța agentului și un model de descriere pentru procesul-verbal.",
    list: ["Tab-urile Teren, Tipuri, Încadrare, Siguranță, Pedepse", "Drog de risc sau de mare risc, consum sau trafic", "Model de descriere a probei „în procesul-verbal”", "Siguranța agentului la contact"],
    alt: "Ghidul Droguri din JAC, tab-ul Tipuri de droguri: fișa Cannabis cu fotografia probei, ce găsești de obicei (pungi zip-lock, râșniță, foițe) și secțiunea „În procesul-verbal”, cu modelul de descriere al probei ridicate și sigilate.",
    chips: [["tl", "", "Substanțe", "10 · câte 2 poze"], ["br", "blue", "Model", "În procesul-verbal"]],
  },
  {
    id: "pirotehnice", tag: "Pirotehnice", law: "Legea 126/1995 · HG 1102/2014", shot: "app-ghid-pirotehnice",
    t: "Pirotehnice: categoria e pe etichetă.",
    p: "Categoriile F1–F4, T1–T2 și P1–P2, ce are voie publicul, orele și distanțele interzise, cine constată și plata a jumătate din amendă în 15 zile.",
    list: ["Pe teren: citești eticheta și categoria", "F1 permis publicului, de la 16 ani; restul doar pirotehnicienilor", "Unde și când e interzis", "Sancțiuni și plata în 15 zile"],
    alt: "Ghidul Pirotehnice din JAC, tab-ul Categorii: categoria F1, permisă publicului de la 16 ani, cu fotografia a patru articole numerotate (artificii de tort, steluțe, pocnitori) și regimul de vânzare din art. 37 alin. (1) din Legea 126/1995.",
    chips: [["tl", "blue", "Categoria", "F1 · de la 16 ani"], ["br", "", "Categorii", "F1–F4 · T · P"]],
  },
  {
    id: "stadion", tag: "Stadion", law: "Legea 4/2008 · Legea 61/1991", shot: "app-ghid-stadion", back: "app-ghid-stadion-pasi", backAlt: "Ghidul Stadion din JAC, tab-ul La poartă: pașii numerotați, de la controlul la intrare făcut de stewarzi la legitimare și verificarea interdicției de acces, fiecare cu articolul din Legea 4/2008.",
    t: "Stadion: ce nu intră în arenă.",
    p: "Obiectele interzise la intrare, cu fotografii, interdicțiile spectatorilor pe trepte de amendă și interdicția de acces. Plus pașii de la poartă: controlul stewarzilor, cine nu intră, legitimarea.",
    list: ["La poartă: controlul la intrare, în 8 pași", "Obiecte interzise, cu fotografii", "Interdicțiile spectatorilor, pe trepte de amendă", "Interdicția de acces"],
    alt: "Ghidul Stadion din JAC, tab-ul Obiecte interzise: cardul „Interzis la intrare” cu fotografia unor facle, petarde și artificii numerotate și ce trebuie reținut despre ascunderea lor și spectacolul pirotehnic al organizatorului.",
    chips: [["tl", "red", "Interzis la intrare", "Pirotehnice"], ["br", "", "La poartă", "8 pași"]],
  },
  {
    id: "caini", tag: "Câini periculoși", law: "OUG 55/2002", shot: "app-ghid-caini", back: "app-ghid-caini-2", backAlt: "Catalogul vizual Câini periculoși din JAC, categoria a II-a: portretul unui Rottweiler din profil și din față, gabaritul 40–50 kg, 56–68 cm, și trăsăturile de recunoaștere.",
    t: "Câini periculoși: rasa se vede din profil.",
    p: "Catalog vizual pe cele două categorii din OUG 55/2002: 3 rase în categoria I și 9 în categoria a II-a, fiecare cu portret uniform din profil și din față, gabaritul și trăsăturile de recunoaștere. Plus obligațiile deținătorului și sancțiunile.",
    list: ["Categoria I, regim strict: 3 rase", "Categoria a II-a: 9 rase", "Obligații: sterilizare, asigurare RC, plăcuța „Câine periculos”", "Metișii: asimilarea morfologică, pe trăsăturile dominante"],
    alt: "Catalogul vizual Câini periculoși din JAC (OUG 55/2002): portretul din profil și din față al unui Pit Bull, categoria I, cu gabaritul, trăsăturile de recunoaștere și nota despre asimilarea morfologică a metișilor.",
    chips: [["tl", "red", "Categoria I", "Pit Bull"], ["br", "", "Rase", "3 + 9"]],
  },
];

const TEXT_ONLY = [
  { t: "Fumat", law: "Legea 349/2002", p: "Ce înseamnă „fumat” în sensul legii, tutunul încălzit, țigara electronică, narghileaua, unde e interzis și vânzarea către minori." },
];

export default function GhiduriPage() {
  return (
    <>
      <SiteHeader current="ghiduri-vizuale" />
      <main id="continut">
        <section className="phero">
          <div className="wrap split">
            <div className="copy">
              <ol className="crumbs" aria-label="Unde ești"><li><Link href="/">Acasă</Link></li><li aria-current="page">Ghiduri vizuale</li></ol>
              <p className="eyebrow" data-r="">Nou · 6 ghiduri vizuale</p>
              <h1 className="h1" data-r="">Pas cu pas. <span className="blue">Cu poze.</span></h1>
              <p className="lead" data-r="">Ce faci pas cu pas, ce verifici, ce ceri și cum încadrezi, cu fotografii de identificare. Ghidurile apar ca buton în legea respectivă și merg fără semnal.</p>
              <div className="btns" data-r=""><MainCta /><a className="btn btn--glass" href="#drone">Vezi ghidurile</a></div>
              <ul className="tags" style={{ marginTop: 28 }} aria-label="Ghidurile">
                {["Drone", "Droguri", "Pirotehnice", "Stadion", "Fumat", "Câini periculoși"].map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
            <Stage
              front="app-ghid-droguri"
              back="app-ghid-caini"
              backAlt="Catalogul vizual Câini periculoși din JAC (OUG 55/2002): portretul din profil și din față al unui Pit Bull, categoria I, cu gabaritul, trăsăturile de recunoaștere și nota despre asimilarea morfologică a metișilor."
              backRight
              priority
              frontAlt="Ghidul Droguri din JAC: fișa Cannabis cu fotografia probei și modelul de descriere „În procesul-verbal”."
            >
              <Chip pos="tl" tone="blue" k="Ghiduri vizuale">6</Chip>
              <Chip pos="br" k="Offline">Cu fotografii</Chip>
            </Stage>
          </div>
        </section>

        {GUIDES.map((g, i) => (
          <section key={g.id} className="sec sec--tight" id={g.id} aria-labelledby={`${g.id}-title`}>
            <div className={`wrap split${i % 2 ? "" : " split--flip"}`}>
              <div className="copy">
                <p className="eyebrow" data-r="">{g.tag} · {g.law}</p>
                <h2 id={`${g.id}-title`} className="h2" data-r="">{g.t}</h2>
                <p className="lead" data-r="">{g.p}</p>
                <ul className="checks" data-r="">{g.list.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
              <div>
                <Stage front={g.shot} back={g.back} backAlt={g.backAlt} backRight={i % 2 === 1} frontAlt={g.alt}>
                  {g.chips.map(([pos, tone, k, v]) => <Chip key={k} pos={pos} tone={tone} k={k}>{v}</Chip>)}
                </Stage>
              </div>
            </div>
          </section>
        ))}

        <section className="sec sec--tight" aria-labelledby="more-title">
          <div className="wrap">
            <div className="sec__head">
              <p className="eyebrow" data-r="">Și încă unul</p>
              <h2 id="more-title" className="h2" data-r="">Fumat.</h2>
            </div>
            <ul className="tiles tiles--2">
              {TEXT_ONLY.map((g, i) => (
                <li key={g.t} className="tile glass" data-r="" style={{ "--d": i }}>
                  <span className="tile__k">{g.law}</span>
                  <h3>{g.t}</h3>
                  <p>{g.p}</p>
                </li>
              ))}
            </ul>
            <div className="disclaimer glass" style={{ marginTop: 28 }} data-r="">
              <p><strong>Ghidurile vizuale au scop exclusiv educativ și de identificare.</strong> Fotografiile sunt ilustrații. Aspectul unei substanțe sau al unui obiect e doar orientativ.</p>
              <p>JAC este o aplicație dezvoltată independent și NU reprezintă o instituție publică. Nu este afiliată, aprobată sau susținută de Guvernul României, MAI, Poliția Română, Jandarmeria Română ori alte autorități.</p>
            </div>
          </div>
        </section>

        <CtaBand title="Ghidul potrivit, la momentul potrivit." />
      </main>
      <SiteFooter />
      <PageEffects page="ghiduri-vizuale" />
    </>
  );
}
