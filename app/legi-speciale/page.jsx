import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageEffects from "@/components/PageEffects";
import { FACTS as F, Stage, Chip, MainCta, CtaBand, Disclaimer, Lock } from "@/components/ui";

export const metadata = {
  title: "Legi speciale: 19 pachete, 1.161 de fapte | JAC",
  description: "Ordine publică, adunări, violența în sport, câini periculoși, fumat, violența domestică, picnic, evidența persoanelor, silvic, arme, 112, drone, pescuit, vânătoare, comerț electronic, pază, piață agricolă, droguri și pirotehnice: legi speciale offline, cu încadrarea, amenda și ghidurile vizuale.",
  alternates: { canonical: "https://aplicatiajac.ro/legi-speciale/" },
  openGraph: { title: "Legi speciale în JAC: 19 pachete, offline", url: "https://aplicatiajac.ro/legi-speciale/", siteName: "JAC", locale: "ro_RO", type: "website", images: [{ url: "https://aplicatiajac.ro/assets/img/og-jac-2026-11.jpg", width: 1200, height: 630 }] },
};

// The first 8 are BASIC (free); the rest are PREMIUM, free for Founders (signed in with Google by 15 January 2027) until the commercial launch.
const LAWS = [
  { d: "Ordine și liniște publică", a: "Legea 61/1991", basic: true },
  { d: "Adunări publice", a: "Legea 60/1991", basic: true },
  { d: "Violența în sport", a: "Legea 4/2008", basic: true, g: "Stadion" },
  { d: "Câini periculoși", a: "OUG 55/2002", basic: true, g: "Câini periculoși" },
  { d: "Tutun și fumat", a: "Legea 349/2002", basic: true, g: "Fumat" },
  { d: "Violența domestică", a: "Legea 217/2003", basic: true },
  { d: "Picnic", a: "Legea 54/2012", basic: true },
  { d: "Evidența persoanelor", a: "OUG 97/2005", basic: true },
  { d: "Silvic", a: "Legea 171/2010 + Codul silvic, Legea 331/2024" },
  { d: "Arme", a: "Legea 295/2004 + HG 11/2018" },
  { d: "112", a: "OUG 34/2008" },
  { d: "Codul aerian și drone", a: "Legea 21/2020, HG 643/2020, HG 859/2021", g: "Drone" },
  { d: "Pescuit", a: "Legea 176/2024" },
  { d: "Vânătoare", a: "Legea 407/2006" },
  { d: "Comerț electronic", a: "Legea 365/2002" },
  { d: "Paza obiectivelor", a: "Legea 333/2003 + HG 301/2012" },
  { d: "Piață agricolă", a: "Legea 145/2014" },
  { d: "Droguri", a: "Legea 143/2000, Legea 194/2011, Legea 339/2005", g: "Droguri" },
  { d: "Explozive și pirotehnice", a: "Legea 126/1995, HG 1102/2014, HG 954/2001", g: "Pirotehnice" },
];

export default function LegiSpecialePage() {
  return (
    <>
      <SiteHeader current="legi-speciale" />
      <main id="continut">
        <section className="phero">
          <div className="wrap split">
            <div className="copy">
              <ol className="crumbs" aria-label="Unde ești"><li><Link href="/">Acasă</Link></li><li aria-current="page">Legi speciale</li></ol>
              <p className="eyebrow" data-r="">Legi speciale · {F.speciale} pachete · {F.specialeFapte} fapte</p>
              <h1 className="h1" data-r="">Legile speciale, <span className="soft">la o căutare.</span></h1>
              <p className="lead" data-r="">Pentru fiecare faptă: încadrarea exactă („Prevăzută de / Sancționată de”), amenda, plata în 15 zile și măsurile complementare. Iar unde contează, ghidul vizual se deschide direct din lege.</p>
              <div className="btns" data-r=""><MainCta /><Link className="btn btn--glass" href="/ghiduri-vizuale/">Ghidurile vizuale</Link></div>
            </div>
            <Stage
              front="app-legi-speciale"
              back="app-ghid-caini"
              backAlt="Catalogul vizual Câini periculoși din JAC (OUG 55/2002): portretul din profil și din față al unui Pit Bull, categoria I, cu gabaritul și trăsăturile de recunoaștere; deasupra, sancțiunile categoriei și butonul spre controlul pe teren."
              backRight
              priority
              frontAlt="Lista Legi speciale din JAC: 19 pachete legislative și 1.161 de fapte, de la Legea 61/1991 (ordine și liniște publică, 44 de fapte), Legea 60/1991, Legea 4/2008, OUG 55/2002, Legea 349/2002, Legea 217/2003, Legea 54/2012 și OUG 97/2005 la Domeniul silvic (170 de fapte)."
            >
              <Chip pos="tl" k="Legi speciale">{F.speciale} pachete</Chip>
              <Chip pos="br" tone="blue" k="Fapte">{F.specialeFapte}</Chip>
            </Stage>
          </div>
        </section>

        <section className="sec sec--tight" aria-labelledby="list-title">
          <div className="wrap">
            <div className="sec__head">
              <p className="eyebrow" data-r="">Ce conține</p>
              <h2 id="list-title" className="h2" data-r="">19 domenii. <span className="soft">8 gratuite.</span></h2>
              <p className="lead" data-r="">Primele 8 legi speciale sunt în Basic, gratuit. Restul sunt PREMIUM, gratuite pentru Fondatori: intră cu Google până pe 15 ianuarie 2027 și le ai gratuit până la lansarea comercială.</p>
            </div>
            <ul className="mods" style={{ marginTop: 0 }}>
              {LAWS.map((l, i) => (
                <li key={l.d} className={`glass${l.basic ? "" : " tile--pro"}`} data-r="" style={{ "--d": i % 4, "--c": l.basic ? "#69BFAE" : "#E8B54A" }}>
                  {l.basic ? <span className="dot" aria-hidden="true"><i></i></span> : <Lock />}
                  <span>
                    <b>{l.d}{l.g ? <span className="sr-only"> (are ghid vizual)</span> : null}</b>
                    <span>{l.a}{l.g ? ` · ghid vizual: ${l.g}` : ""}{l.basic ? " · Basic" : " · PREMIUM"}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="sec" aria-labelledby="fisa-title">
          <div className="wrap split split--flip">
            <div className="copy">
              <p className="eyebrow" data-r="">O lege, deschisă</p>
              <h2 id="fisa-title" className="h2" data-r="">Ghidul, <span className="soft">deasupra faptelor.</span></h2>
              <p className="lead" data-r="">În Legea 4/2008, de exemplu, primul lucru e ghidul „Stadion · ce nu intră în arenă”, în 8 pași. Dedesubt, fișele: încadrarea, amenda și plata în 15 zile.</p>
              <ul className="checks" data-r="">
                <li><b>Filtre</b> pe act, contravenții, proceduri și infracțiuni.</li>
                <li><b>Favorite și ordine proprie</b>: legile pe care le aplici des, primele.</li>
                <li><b>Căutare în toate fișele</b>, după faptă, articol sau cuvânt-cheie.</li>
              </ul>
              <Link className="link-arrow" href="/ghiduri-vizuale/">Cele 6 ghiduri vizuale</Link>
            </div>
            <div>
              <Stage
                front="app-lege-cu-ghid"
                back="app-ghid-stadion-pasi"
                backAlt="Ghidul Stadion din JAC, tab-ul La poartă: pașii numerotați, de la controlul la intrare făcut de stewarzi la legitimare și verificarea interdicției de acces, fiecare cu articolul din Legea 4/2008."
                backRight
                frontAlt="Legea 4/2008 deschisă în JAC: butonul Ghid operativ „Stadion · ce nu intră în arenă” cu 8 pași, filtrele Toate, Contravenții, Proceduri, Infracțiuni, 73 de articole și prima fișă: spectatorilor le este interzis să pătrundă sau să încerce să pătrundă, amendă 80–200 lei."
              >
                <Chip pos="tr" tone="blue" k="Ghid">8 pași</Chip>
                <Chip pos="bl" k="Amenda">80–200 lei</Chip>
              </Stage>
            </div>
          </div>
          <div className="wrap" style={{ marginTop: 32 }} data-r=""><Disclaimer /></div>
        </section>

        <CtaBand title="Legea specială, în buzunar." />
      </main>
      <SiteFooter />
      <PageEffects page="legi-speciale" />
    </>
  );
}
