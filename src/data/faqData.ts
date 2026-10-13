import { FaqItem } from '../types';

export const faqData: FaqItem[] = [
  {
    category: 'general',
    question: 'Este aplicația JAC afiliată vreunei instituții a statului?',
    answer: 'Nu. JAC este o aplicație independentă de informare legislativă. Nu este afiliată, aprobată, sponsorizată sau administrată de Ministerul Afacerilor Interne (MAI), Poliția Română ori de alte instituții ale statului român.',
  },
  {
    category: 'general',
    question: 'Care este statusul lansării pe Google Play?',
    answer: 'Aplicația JAC este în etapa de pregătire pentru publicare. Nu afirmăm disponibilitatea descărcării până la confirmarea aprobării în magazinul Google Play.',
  },
  {
    category: 'versiuni',
    question: 'Care este diferența dintre versiunea Basic și versiunea Premium?',
    answer: 'Versiunea Basic (gratuită) oferă acces la modulele incluse gratuit, căutare în cadrul acestora, până la 5 favorite și afișează reclame. Versiunea Premium este concepută pentru acces complet la toate modulele, fără reclame și cu favorite nelimitate.',
  },
  {
    category: 'versiuni',
    question: 'Pot cumpăra acum un abonament Premium?',
    answer: 'Nu. Facturarea și abonamentele Premium nu sunt încă implementate în JAC. Condițiile de achiziție vor fi prezentate separat, înainte de orice cumpărare, atunci când mecanismul de abonament va fi disponibil.',
  },
  {
    category: 'legislatie',
    question: 'Ce conține aplicația?',
    answer: 'Aplicația organizează legislația pe module tematice (de exemplu circulație rutieră, contravenții și fapte penale), cu fișe de fapte, articole și sancțiuni. O parte dintre module sunt incluse gratuit (Basic), restul sunt prevăzute pentru versiunea Premium.',
  },
  {
    category: 'legislatie',
    question: 'Funcționează consultarea articolelor fără conexiune la internet?',
    answer: 'Da. Conținutul legislativ este stocat local pe dispozitiv; fără conexiune puteți căuta și citi conținutul deja descărcat. Sincronizarea actualizărilor necesită internet.',
  },
  {
    category: 'confidentialitate',
    question: 'Ce date colectează aplicația?',
    answer: 'Aplicația nu are conturi de utilizator și nu colectează nume sau adrese de e-mail. Favoritele, istoricul și preferințele rămân local, pe dispozitiv. În versiunea Basic, reclamele sunt gestionate prin Google Mobile Ads, cu consimțământ gestionat prin Google UMP în SEE/Regatul Unit. Detalii: Politica de Confidențialitate.',
  },
  {
    category: 'confidentialitate',
    question: 'Site-ul folosește cookie-uri?',
    answer: 'Nu. Site-ul documentelor JAC este static și nu utilizează cookie-uri sau tehnologii de urmărire. Detalii: Politica de Cookie-uri.',
  },
];
