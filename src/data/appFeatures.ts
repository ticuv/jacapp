import { MockLawArticle } from '../types';

export interface AppFeature {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export const appFeatures: AppFeature[] = [
  {
    number: '01',
    title: 'Organizare clară pe acte normative',
    description: 'Legislația este structurată ierarhic pe legi, capitole și articole. Găsiți textul legal exact fără să parcurgeți pagini stufoase sau fișiere PDF greoaie.',
    highlight: 'Module tematice: rutier, contravenții, penal',
  },
  {
    number: '02',
    title: 'Căutare rapidă în conținut',
    description: 'Motor de căutare instant după numărul articolului, denumirea faptei sau cuvinte-cheie din textul contravențional, conceput special pentru viteză în teren.',
    highlight: 'Indexare locală pentru rezultate în câteva milisecunde',
  },
  {
    number: '03',
    title: 'Marcare la Favorite pentru acces instant',
    description: 'Salvați articolele și contravențiile utilizate frecvent într-o listă dedicată de favorite, accesibilă cu o singură atingere de ecran direct din meniul principal.',
    highlight: 'Stocare securizată strict pe memoria telefonului dvs.',
  },
  {
    number: '04',
    title: 'Evidențierea sancțiunilor și măsurilor',
    description: 'Fiecare contravenție afișează vizibil cuantumul amenzii (minim - maxim legal) și măsurile complementare aplicabile (confiscare, suspendare, prestare activități).',
    highlight: 'Fără ambiguități la încadrarea faptei',
  },
];

export const sampleLawArticles: MockLawArticle[] = [
  {
    lawId: 'L61-1991',
    lawName: 'Legea nr. 61/1991',
    articleNumber: 'Art. 2 pct. 1',
    title: 'Săvârșirea în public de fapte, acte sau gesturi obscene',
    sanctionText: 'Săvârșirea în public de fapte, acte sau gesturi obscene, proferarea de injurii, expresii jignitoare sau vulgare, amenințări cu acte de violență împotriva persoanelor sau bunurilor acestora, de natură să tulbure ordinea și liniștea publică sau să provoace indignarea cetățenilor ori să lezeze demnitatea și onoarea acestora.',
    fineRange: '200 lei – 1.000 lei',
    complementarySanction: 'Avertisment sau amendă contravențională',
    isFavorite: true,
  },
  {
    lawId: 'L61-1991',
    lawName: 'Legea nr. 61/1991',
    articleNumber: 'Art. 2 pct. 25',
    title: 'Tulburarea liniștii locatarilor între orele de liniște',
    sanctionText: 'Tulburarea liniștii locatarilor între orele 22,00-8,00 și 13,00-14,00 de către orice persoană prin producerea de zgomote, larmă sau prin folosirea oricărui aparat, obiect ori instrument muzical la intensitate mare în localurile sau în imobilele cu destinația de locuințe.',
    fineRange: '500 lei – 1.500 lei',
    complementarySanction: 'Posibilitatea prestării a 50-100 ore activități în folosul comunității (la repetare în 24h)',
    isFavorite: false,
  },
  {
    lawId: 'L218-2002',
    lawName: 'Legea nr. 218/2002',
    articleNumber: 'Art. 31 alin. (1)',
    title: 'Legitimarea și stabilirea identității persoanelor',
    sanctionText: 'Polițistul este îndreptățit să legitimeze și să stabilească identitatea persoanei numai în situația în care: a) aceasta încalcă dispozițiile legale, ori există motive verosimile pentru a bănui că pregătește sau a comis o faptă ilegală; b) există motive verosimile pentru a bănui că a fost prezentă la locul săvârșirii unei fapte ilegale ori are cunoștință despre faptă; c) solicită sprijinul sau intervenția organelor de poliție.',
    fineRange: 'Normă de procedură / atribuții',
    isFavorite: true,
  },
  {
    lawId: 'L550-2004',
    lawName: 'Legea nr. 550/2004',
    articleNumber: 'Art. 27',
    title: 'Drepturile personalului Jandarmeriei în exercitarea atribuțiilor',
    sanctionText: 'În exercitarea atribuțiilor de serviciu, personalul Jandarmeriei Române este îndreptățit să legitimeze orice persoană când există indicii că a săvârșit, săvârșește sau se pregătește să săvârșească o faptă de natură penală ori contravențională sau este semnalată dispărută.',
    fineRange: 'Normă de atribuții jandarmerie',
    isFavorite: false,
  },
];
