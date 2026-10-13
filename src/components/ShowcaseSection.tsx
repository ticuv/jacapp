import React from 'react';
import { PhoneFrame } from './PhoneFrame';
import { ListOrdered, Search, FileText, Star } from 'lucide-react';

const SCREENS = {
  home: '/screens/jac-home.webp',
  module: '/screens/jac-module-lista.webp',
  fisa: '/screens/jac-fisa-articol.webp',
  favorite: '/screens/jac-favorite.webp',
};

interface Block {
  step: string;
  icon: typeof Search;
  eyebrow: string;
  title: string;
  text: string;
  bullets: string[];
  src: string;
  alt: string;
  crop?: { aspect: string; position?: string };
  /** slightly larger frame for full-screen captures that carry a lot of detail */
  wide?: boolean;
  flip?: boolean;
}

const blocks: Block[] = [
  {
    step: '01',
    icon: ListOrdered,
    eyebrow: 'Catalog legislativ',
    title: 'Legislația, organizată pe acte normative',
    text:
      'Fiecare grupă reunește actele normative relevante, iar în dreptul fiecărui act vezi câte fapte conține. Nu cauți prin documente întregi: intri direct în legea de care ai nevoie.',
    bullets: [
      'Module tematice grupate pe domenii (ordine publică, rutier, silvic, arme, penal)',
      'Numărul de fapte afișat pentru fiecare act normativ',
      '22 de module și 1.268 de fapte și sancțiuni în catalogul aplicației',
    ],
    src: SCREENS.module,
    alt: 'Catalogul legislativ JAC: lista „Legi Speciale și Contravenții” cu actele normative și numărul de fapte pentru fiecare',
  },
  {
    step: '02',
    icon: Search,
    eyebrow: 'Căutare',
    title: 'Cauți fapta, articolul sau cuvântul-cheie',
    text:
      'Câmpul de căutare este primul lucru de pe ecranul principal. În versiunea Basic cauți în cadrul modulului deschis; căutarea globală în toată baza legislativă face parte din versiunea Premium și deschide prezentarea acesteia.',
    bullets: [
      'Căutare după faptă, articol sau cuvânt-cheie în modulul deschis',
      'Căutare globală în întreaga bibliotecă — funcție pregătită pentru Premium',
      'Bara de stare indică permanent baza locală, numărul de articole și starea sincronizării',
    ],
    src: SCREENS.home,
    alt: 'Ecranul principal JAC cu câmpul de căutare „Caută fapte, articole, instituții, procedură” și indicatorul bazei locale offline',
    flip: true,
  },
  {
    step: '03',
    icon: FileText,
    eyebrow: 'Fișa articolului',
    title: 'Încadrare, sancțiune și mod de aplicare',
    text:
      'Fișa unei fapte afișează încadrarea legală completă, intervalul sancțiunii, condițiile de plată și măsurile complementare sau circumstanțele agravante, atunci când legea le prevede.',
    bullets: [
      'Încadrare cu articolul care prevede fapta și articolul care o sancționează',
      'Intervalul sancțiunii (minim – maxim) și plata redusă în 15 zile, când se aplică',
      'Secțiune separată pentru măsuri complementare și agravante',
    ],
    src: SCREENS.fisa,
    alt: 'Fișa unei fapte din JAC (Codul Aerian): încadrarea legală, sancțiunea între 2.000 și 4.000 de lei și condițiile de plată în 15 zile',
  },
  {
    step: '04',
    icon: Star,
    eyebrow: 'Favorite',
    title: 'Faptele folosite des, la un singur tap',
    text:
      'Cardul „Salvate” de pe ecranul principal și fila „Favorite” duc direct la faptele marcate. Favoritele sunt păstrate local, pe dispozitiv.',
    bullets: [
      'Acces instant la faptele salvate, din prima filă de jos',
      'Până la 5 favorite în versiunea Basic; favorite nelimitate sunt pregătite pentru Premium',
      'Datele rămân pe telefon — fără cont și fără transmiterea favoritelor',
    ],
    src: SCREENS.favorite,
    alt: 'Ecranul „Favorite” din JAC: fapta salvată, cu încadrarea legală, sancțiunea între 500 și 1.500 de lei și fila Favorite activă',
    wide: true,
    flip: true,
  },
];

export const ShowcaseSection: React.FC = () => {
  return (
    <section id="interfata" className="border-b border-white/10 bg-[#0E1830] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300">Interfața aplicației</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-100 [text-wrap:balance] sm:text-4xl lg:text-[2.7rem]">
            Cum arată pe telefonul tău.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            Capturi reale din aplicația JAC — nu machete. Fiecare ecran de mai jos este preluat așa cum apare
            pe un telefon Android, încadrat într-o ramă de prezentare.
          </p>
        </div>

        <div className="mt-16 space-y-20 sm:space-y-28">
          {blocks.map((b) => (
            <article
              key={b.step}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              {/* copy */}
              <div className={b.flip ? 'lg:order-2' : 'lg:order-1'}>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B1424]">
                    <b.icon className="h-5 w-5 text-amber-400" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-300">{b.eyebrow}</span>
                  <span className="ml-auto font-mono text-sm font-bold text-slate-300">{b.step}</span>
                </div>
                <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-slate-100 [text-wrap:balance] sm:text-3xl">
                  {b.title}
                </h3>
                <p className="mt-4 leading-relaxed text-slate-300">{b.text}</p>
                <ul className="mt-6 space-y-3">
                  {b.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/100" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* real screenshot in a premium frame */}
              <div
                className={
                  'relative mx-auto w-full ' +
                  (b.wide ? 'max-w-[330px] lg:max-w-[356px] ' : 'max-w-[300px] lg:max-w-[320px] ') +
                  (b.flip ? 'lg:order-1' : 'lg:order-2')
                }
              >
                <div
                  className="absolute inset-x-2 top-10 bottom-10 rounded-[3rem] bg-amber-300/[0.12] blur-3xl"
                  aria-hidden="true"
                />
                <div className="relative">
                  {b.crop ? (
                    <PhoneFrame src={b.src} alt={b.alt} crop={b.crop} />
                  ) : (
                    <PhoneFrame src={b.src} alt={b.alt} />
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-16 text-xs text-slate-400">
          Capturile provin din versiunea audiată a aplicației Android JAC. Abonamentul Premium nu este disponibil
          în prezent: facturarea și Google Play Billing nu sunt implementate.
        </p>
      </div>
    </section>
  );
};
