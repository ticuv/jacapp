import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageEffects from "@/components/PageEffects";
import { Stage, Chip, Phone, MainCta, CtaBand } from "@/components/ui";

export const metadata = {
  title: "12 ghiduri vizuale pentru teren: drone, droguri, arme, adunări | JAC",
  description: "12 ghiduri vizuale în JAC, cu fotografii de identificare: drone, droguri, pirotehnice, stadion, fumat, câini periculoși, adunări publice, arme, pescuit, vânătoare, material lemnos și trotinete. Ce faci pas cu pas, ce verifici, ce soliciți și cum încadrezi, cu articolul exact.",
  alternates: { canonical: "https://aplicatiajac.ro/ghiduri-vizuale/" },
  openGraph: { title: "Ghiduri vizuale în JAC: pas cu pas, cu poze", url: "https://aplicatiajac.ro/ghiduri-vizuale/", siteName: "JAC", locale: "ro_RO", type: "website", images: [{ url: "https://aplicatiajac.ro/assets/img/og-jac-2026-11.jpg", width: 1200, height: 630 }] },
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
    t: "Droguri, cu modelul de PV.",
    p: "10 substanțe, fiecare cu două fotografii, în forme diferite. Pentru fiecare: cum arată, dacă e drog de risc sau de mare risc, consum sau trafic, siguranța agentului și un model de descriere pentru procesul-verbal.",
    list: ["Tab-urile Teren, Tipuri, Încadrare, Siguranță, Pedepse", "Drog de risc sau de mare risc, consum sau trafic", "Model de descriere a probei „în procesul-verbal”", "Siguranța agentului la contact"],
    alt: "Ghidul Droguri din JAC, tab-ul Tipuri de droguri: fișa Cannabis cu fotografia probei, ce găsești de obicei (pungi zip-lock, râșniță, foițe) și secțiunea „În procesul-verbal”, cu modelul de descriere al probei ridicate și sigilate.",
    chips: [["tl", "", "Substanțe", "10 · câte 2 poze"], ["br", "blue", "Model", "În procesul-verbal"]],
  },
  {
    id: "pirotehnice", tag: "Pirotehnice", law: "Legea 126/1995 · HG 1102/2014", shot: "app-ghid-pirotehnice",
    t: "Pirotehnice, după etichetă.",
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
    id: "caini", tag: "Câini periculoși", law: "OUG 55/2002", shot: "app-ghid-caini", back: "app-ghid-caini-2", backAlt: "Ghidul Câini periculoși din JAC, tab-ul Control pe teren: situația „Câine din listă, la plimbare” în cinci pași, fiecare cu articolul din OUG 55/2002, și concluzia — fără botniță sau lesă, 1.500–3.000 lei.",
    t: "Câini periculoși: rase, acte, agresivi.",
    p: "Catalog vizual pe cele două categorii din OUG 55/2002 — 3 rase în categoria I și 9 în categoria a II-a, cu portret, gabarit și trăsături — plus ce faci pe teren: situații reale pas cu pas, ce dovedește fiecare act arătat de proprietar, cum judeci un metis și regimul câinelui agresiv, de orice rasă.",
    list: ["Control pe teren: câine din listă, „e metis”, a mușcat, lăsat liber, lupte", "Acte: pedigree FCI și adeverința AChR dovedesc rasa; carnetul nu", "Câini agresivi (art. 2): orice rasă, cu botniță, lesă și plăcuță", "Fișa completă a sancțiunilor, art. 18–19 și infracțiunile art. 12–14"],
    alt: "Catalogul vizual Câini periculoși din JAC (OUG 55/2002): portretul din profil și din față al unui Pit Bull, categoria I, cu gabaritul și trăsăturile de recunoaștere; deasupra, sancțiunile categoriei și butonul spre controlul pe teren.",
    chips: [["tl", "red", "Categoria I", "Pit Bull"], ["br", "", "Rase", "3 + 9"]],
  },
];

const MORE = [
  { id: "adunari", t: "Adunări publice", law: "Legea 60/1991", img: "stadion_arme_albe", alt: "Arme albe și obiecte de lovire numerotate, fotografiate pe fond negru: obiecte interzise la o adunare publică.",
    list: ["Pe teren: trebuia declarată? ceri dovada, identifici organizatorii", "Ora, traseul și perimetrul; alcoolul și obiectele periculoase", "Contramanifestația, avertizarea și somațiile", "Declararea și sancțiunile, cu articolul exact"] },
  { id: "arme", t: "Arme", law: "Legea 295/2004 · HG 11/2018", img: "arma_cat_b_scurta", alt: "Un pistol și un revolver cu tocurile lor și o cutie de cartușe, numerotate, pe fond negru: arme din categoria B.",
    list: ["Pe teren: asiguri arma, stabilești categoria A–E", "Ce soliciți: permisul sau autorizația potrivită și valabilitatea", "Portul și transportul, s-a tras cu arma?", "Încadrarea: contravenție sau art. 342 Cod penal"] },
  { id: "pescuit", t: "Pescuit", law: "Legea 176/2024", img: "pescuit_setca", alt: "O setcă întinsă pe fond negru, cu plute și plumbi numerotați: unealtă de braconaj piscicol.",
    list: ["Permisul de pescuit recreativ și numărul de unelte", "Captura reținută și locul de pescuit", "Unelte permise și unelte de braconaj, cu fotografii", "Sancțiuni: contravenție sau infracțiune"] },
  { id: "vanatoare", t: "Vânătoare", law: "Legea 407/2006 · Legea 295/2004", img: "vanatoare_termoviziune", alt: "Armă de vânătoare cu lunetă cu termoviziune și imaginea termică a unui mistreț: metodă interzisă la vânătoare.",
    list: ["Identifici vânătorii și armele, ceri cele 4 documente", "Compari autorizația cu vânatul recoltat", "Metodele interzise: termoviziune, faruri, lațuri, ogari", "Reții permisul de vânătoare; la braconaj ridici bunurile"] },
  { id: "lemn", t: "Material lemnos", law: "Legea 171/2010 · Codul silvic", img: "lemn_fara_aviz", alt: "O căruță și un tractor cu remorcă încărcate cu lemne de foc, pe un drum de sat: transport de material lemnos care se verifică.",
    list: ["Oprești vehiculul și soliciți avizul de însoțire", "Verifici avizul în SUMAL 2.0 și compari încărcătura", "Volumul fără proveniență și cui se aplică amenda", "Reții lemnul și îl dai în custodie"] },
  { id: "trotinete", t: "Trotinete și biciclete", law: "OUG 195/2002 · HG 1391/2006", img: "trot_electrica", alt: "O trotinetă electrică pe fond negru, cu farul și stopul aprinse.",
    list: ["Ce vehicul e: trotinetă electrică, bicicletă, modificată", "Vârsta minimă, actul de identitate, pe unde circulă", "Pasagerul și dotările obligatorii", "Sancțiunile și cine le constată"] },
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
              <p className="eyebrow" data-r="">Nou · 12 ghiduri vizuale</p>
              <h1 className="h1" data-r="">Pas cu pas. <span className="blue">Cu poze.</span></h1>
              <p className="lead" data-r="">Ce faci pas cu pas, ce verifici, ce ceri și cum încadrezi, cu fotografii de identificare. Ghidurile apar ca buton în legea respectivă și merg fără semnal.</p>
              <div className="btns" data-r=""><MainCta /><a className="btn btn--glass" href="#drone">Vezi ghidurile</a></div>
              <ul className="tags" style={{ marginTop: 28 }} aria-label="Ghidurile">
                {["Drone", "Droguri", "Pirotehnice", "Stadion", "Fumat", "Câini periculoși", "Adunări publice", "Arme", "Pescuit", "Vânătoare", "Material lemnos", "Trotinete"].map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
            <Stage
              front="app-ghid-droguri"
              back="app-ghid-caini"
              backAlt="Catalogul vizual Câini periculoși din JAC (OUG 55/2002): portretul din profil și din față al unui Pit Bull, categoria I, cu gabaritul și trăsăturile de recunoaștere; deasupra, sancțiunile categoriei și butonul spre controlul pe teren."
              backRight
              priority
              frontAlt="Ghidul Droguri din JAC: fișa Cannabis cu fotografia probei și modelul de descriere „În procesul-verbal”."
            >
              <Chip pos="tl" tone="blue" k="Ghiduri vizuale">12</Chip>
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

        <section className="sec sec--tight" id="noi" aria-labelledby="new-title">
          <div className="wrap">
            <div className="sec__head">
              <p className="eyebrow" data-r="">Nou · încă 6 ghiduri</p>
              <h2 id="new-title" className="h2" data-r="">Adunări, arme, pescuit, <span className="soft">vânătoare, lemn, trotinete.</span></h2>
              <p className="lead" data-r="">Același format: pe teren pas cu pas, cu articolul exact la fiecare pas, ce soliciți, fotografii de identificare și sancțiunile. În toate cele 12, atingi un articol citat și se deschide textul lui integral; Back te întoarce în ghid.</p>
            </div>
            <ul className="gcards">
              {MORE.map((g, i) => (
                <li key={g.id} id={g.id} className="gcard glass" data-r="" style={{ "--d": i % 3 }}>
                  <img src={`/assets/img/ghiduri/${g.img}-600.webp`} srcSet={`/assets/img/ghiduri/${g.img}-600.webp 600w, /assets/img/ghiduri/${g.img}-1000.webp 1000w`} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw" width="1000" height="622" alt={g.alt} loading="lazy" decoding="async" />
                  <div className="gcard__body">
                    <p className="mono gcard__law">{g.law}</p>
                    <h3>{g.t}</h3>
                    <ul className="checks">{g.list.map((x) => <li key={x}>{x}</li>)}</ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="sec sec--tight" aria-labelledby="more-title">
          <div className="wrap">
            <div className="sec__head">
              <p className="eyebrow" data-r="">Și încă unul</p>
              <h2 id="more-title" className="h2" data-r="">Fumat și tutun încălzit.</h2>
            </div>
            <div className="split">
              <div className="copy">
                {TEXT_ONLY.map((g) => <p key={g.t} className="lead" style={{ marginTop: 0 }}>{g.p} <span className="soft">{g.law}.</span></p>)}
              </div>
              <div className="photos2">
                <figure><img src="/assets/img/ghiduri/fumat_vape-1000.webp" srcSet="/assets/img/ghiduri/fumat_vape-600.webp 600w, /assets/img/ghiduri/fumat_vape-1000.webp 1000w" sizes="(min-width: 1024px) 40vw, 92vw" width="1000" height="622" alt="Țigări electronice de mai multe tipuri, fotografiate pe fond negru, din ghidul Fumat." loading="lazy" decoding="async" /><figcaption><span className="mono">INTERZISĂ ÎN TRANSPORTUL ÎN COMUN</span> Țigara electronică (vape)</figcaption></figure>
                <figure><img src="/assets/img/ghiduri/fumat_tutun_incalzit-1000.webp" srcSet="/assets/img/ghiduri/fumat_tutun_incalzit-600.webp 600w, /assets/img/ghiduri/fumat_tutun_incalzit-1000.webp 1000w" sizes="(min-width: 1024px) 40vw, 92vw" width="1000" height="622" alt="Dispozitive de tutun încălzit și rezervele lor, fotografiate pe fond negru, din ghidul Fumat." loading="lazy" decoding="async" /><figcaption><span className="mono">NU E „FUMAT” ÎN SENSUL LEGII</span> Tutunul încălzit</figcaption></figure>
              </div>
            </div>
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
