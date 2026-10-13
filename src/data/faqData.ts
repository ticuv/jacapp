import { FaqItem } from '../types';

export const faqData: FaqItem[] = [
  {
    category: 'general',
    question: 'Este aplicația JAC afiliată vreunei instituții a statului?',
    answer: 'Nu. JAC este un proiect independent de documentare tehnică și nu este afiliat, asociat sau autorizat de Ministerul Afacerilor Interne (MAI), Poliția Română, Jandarmeria Română sau vreo altă autoritate publică. Textele legislative reproduse sunt acte normative oficiale din domeniul public, preluate din Monitorul Oficial al României.',
  },
  {
    category: 'general',
    question: 'Care este statusul lansării pe Google Play?',
    answer: 'Aplicația JAC se află în etapa de finalizare tehnică și pregătire a documentației pentru publicare în magazinul Google Play. Nu afirmăm disponibilitatea descărcării până la confirmarea aprobării pe platformă. Puteți lăsa un mesaj pe pagina de contact pentru a primi o notificare la momentul publicării.',
  },
  {
    category: 'versiuni',
    question: 'Care este diferența dintre versiunea Basic și versiunea Premium?',
    answer: 'Versiunea Basic oferă acces gratuit la consultarea completă a bazei legislative de ordine publică, căutare și salvare la favorite, fiind susținută de reclame discrete gestionate conform prin Google UMP. Versiunea Premium este concepută arhitectural pentru o experiență fără reclame.',
  },
  {
    category: 'versiuni',
    question: 'Pot cumpăra acum un abonament Premium?',
    answer: 'Nu. Sistemul de facturare, abonamente plătite și conturi de utilizator NU este încă implementat în JAC. La momentul lansării, toate funcționalitățile esențiale vor fi accesibile gratuit în versiunea Basic. Când sistemul Premium va fi activat tehnic, condițiile comerciale vor fi prezentate transparent.',
  },
  {
    category: 'legislatie',
    question: 'Ce legi sunt incluse în aplicație?',
    answer: 'Aplicația include actele normative de bază din domeniul ordinii și liniștii publice, cum ar fi Legea nr. 61/1991 (norme de conviețuire socială), Legea nr. 218/2002 (organizarea și funcționarea Poliției Române), Legea nr. 550/2004 (Jandarmeria Română), prevederi conexe din OUG nr. 195/2002 (circulația pe drumurile publice) și Legea nr. 333/2003.',
  },
  {
    category: 'legislatie',
    question: 'Funcționează consultarea articolelor fără conexiune la internet?',
    answer: 'Da. Baza de date cu textele legislative este salvată local în aplicație pe dispozitivul dumneavoastră Android, permițând consultarea rapidă a articolelor și a cuantumului amenzilor chiar și în zone fără semnal sau fără date mobile active.',
  },
  {
    category: 'confidentialitate',
    question: 'Ce date personale sunt colectate prin aplicația JAC?',
    answer: 'Aplicația a fost construită pe principiul minimizării datelor: articolele favorite și istoricul căutărilor rămân exclusiv pe memoria telefonului dumneavoastră. Pentru reclamele din versiunea Basic se utilizează Google Mobile Ads și Google UMP pentru colectarea consimțământului conform normelor GDPR.',
  },
  {
    category: 'confidentialitate',
    question: 'Înlocuiesc informațiile din JAC asistența juridică?',
    answer: 'Nu. Informațiile au caracter strict orientativ și documentar. Singurul text care produce efecte juridice este cel publicat în Monitorul Oficial al României. Nicio mențiune din aplicație nu constituie consultanță juridică sau sfat profesional.',
  },
];
