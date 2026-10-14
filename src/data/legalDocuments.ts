import { LegalDocument } from '../types';

// Documentele juridice reale JAC — informațiile confirmate provin din comportamentul
// auditat al aplicației; aspectele neverificate rămân marcate explicit (DE CONFIRMAT).
export const legalDocuments: Record<'terms' | 'privacy' | 'cookies', LegalDocument> = {
  privacy: {
    id: 'privacy',
    title: 'Politica de Confidențialitate',
    subtitle: 'Cum sunt gestionate datele în aplicația Android JAC și pe site-ul documentelor JAC',
    lastUpdated: '13 octombrie 2026',
    confirmationChecklist: [
      { item: 'Temeiurile juridice pentru fiecare prelucrare', details: 'Calificările art. 6 alin. (1) GDPR sunt marcate „DE CONFIRMAT — aviz juridic” în checklistul de confirmare.', status: 'pending' },
      { item: 'Rolurile Google și Cloudflare', details: 'Operator independent sau persoană împuternicită — de confirmat din contractele aplicabile conturilor reale.', status: 'pending' },
      { item: 'Mecanismele de transfer internațional', details: 'Condițiile concrete ale transferurilor — de confirmat din politicile și contractele furnizorilor.', status: 'pending' },
      { item: 'Reclame reale vs. identificatoare de test', details: 'La lansare se va decide configurația AdMob de producție.', status: 'pending' },
      { item: 'Detaliile stocărilor locale ale SDK-urilor Google', details: 'De confirmat din documentația Google (vezi Politica de cookie-uri).', status: 'pending' },
    ],
    sections: [

      {
        id: 'operator',
        title: '1. Operatorul datelor',
        content: [
          'Operatorul datelor: persoană fizică. Datele de identificare și de contact sunt disponibile la cerere, prin pagina de Asistență. „JAC” este numele aplicației și nu o entitate juridică distinctă.',
        ],
      },
      {
        id: 'date-locale',
        title: '2. Date stocate pe dispozitiv',
        content: [
          'Aplicația stochează local, pe dispozitivul dumneavoastră: favoritele, istoricul „Consultate recent”, preferința de temă, conținutul legislativ inclus în aplicație și versiunea de sincronizare a acestuia.',
          'Aplicația nu are conturi de utilizator și nu colectează nume, adrese de e-mail sau alte date de identificare. Aceste date locale nu sunt transmise automat către operator.',
          'În funcție de configurația și de funcțiile dispozitivului (de exemplu, backup-ul Android activ în contul Google sau transferul pe un dispozitiv nou), datele stocate local pot fi incluse în copiile de rezervă ale sistemului de operare.',
        ],
      },
      {
        id: 'comunicatii',
        title: '3. Sincronizarea conținutului și comunicațiile de rețea',
        content: [
          'Comunicările de rețea ale aplicației sunt: (i) sincronizarea conținutului legislativ — aplicația descarcă un manifest și fișiere de conținut de pe serverul de conținut configurat (găzduit prin Cloudflare); și (ii) cererile legate de publicitate și de consimțământ, efectuate prin SDK-urile Google Mobile Ads și Google UMP, descrise în secțiunea 4.',
          'Cloudflare poate procesa date tehnice de acces (de exemplu adresă IP, User-Agent, timpi de acces), în legătură cu servirea conținutului și cu eventualele jurnale Workers Logs configurate în cont.',
          'Favoritele și istoricul nu sunt transmise prin sincronizare.',
        ],
      },
      {
        id: 'publicitate',
        title: '4. Publicitate și consimțământ (Google Mobile Ads / UMP)',
        content: [
          'În versiunea gratuită (Basic), aplicația poate afișa publicitate furnizată prin Google Mobile Ads, în trei formate: bannere publicitare pe ecranele principale, reclame interstițiale afișate ocazional la închiderea unei fișe de faptă — niciodată în timpul citirii conținutului — și anunțuri native, marcate vizibil cu eticheta „Reclamă”, într-o singură poziție, la finalul ecranului principal. Versiunea Premium nu afișează nicio reclamă.',
          'Reclamele interstițiale sunt afișate cu o limită de frecvență (cel mult o dată la câteva minute) și numai dacă au fost încărcate în prealabil; dacă o reclamă nu este disponibilă, navigarea continuă normal. Niciun format nu este afișat în paginile juridice sau în dialoguri.',
          'Consimțământul pentru utilizatorii din SEE/Regatul Unit este gestionat prin Google User Messaging Platform (UMP). Reclamele sunt solicitate numai după ce procesul de consimțământ permite acest lucru; o eroare sau lipsa unui răspuns nu este tratată ca acord, iar reclamele rămân oprite.',
          'Prin intermediul SDK-urilor Google (Google Mobile Ads și UMP), Google poate prelucra date tehnice descrise în Politica de confidențialitate Google — de exemplu identificatorul de publicitate (atunci când consimțământul îl permite), informații despre dispozitiv și aplicație și interacțiunea cu reclamele — în funcție de alegerea dumneavoastră între reclame personalizate și nepersonalizate. Și în cazul reclamelor nepersonalizate au loc prelucrări de date tehnice, conform cadrului Google. Aplicația JAC nu colectează în mod propriu profiluri de interes pentru publicitate.',
          'Alegerile pot fi modificate din aplicație, în Setări → „Opțiuni de confidențialitate”, atunci când Google UMP pune această opțiune la dispoziție. Build-urile de dezvoltare folosesc exclusiv identificatoare de test Google, fără publicitate reală.',
          'Prelucrările Google și Cloudflare pot implica transferuri de date în afara Spațiului Economic European, în condițiile descrise de politicile și contractele acestora. Perioadele de păstrare pentru datele prelucrate de Google sunt cele descrise în Politica de confidențialitate Google.',
        ],
        requiresConfirmation: true,
        confirmationNotes: 'Temeiurile juridice, rolurile părților, perioadele de păstrare Google și mecanismele de transfer sunt marcate „DE CONFIRMAT — aviz juridic” în secțiunea 5.',
      },
      {
        id: 'cookie',
        title: '5. Cookie-uri și tehnologii similare',
        content: [
          'Site-ul documentelor JAC este un site static: nu utilizează cookie-uri și nu implementează tehnologii de urmărire între site-uri.',
          'În aplicație, publicitatea și consimțământul sunt gestionate prin Google Mobile Ads și Google UMP, care pot folosi identificatori de dispozitiv, conform secțiunii 4. Detalii în Politica de cookie-uri.',
        ],
      },
      {
        id: 'feedback',
        title: '6. Feedback',
        content: [
          'Funcția „Trimite feedback” deschide aplicația de e-mail a utilizatorului cu subiectul „Feedback JAC”. Aplicația nu trimite automat date, identificatori sau informații despre utilizator; mesajul este redactat și expediat de dumneavoastră.',
          'Mesajele de feedback se păstrează până la soluționarea solicitării și apoi maximum 6 luni, cu excepția situațiilor în care păstrarea suplimentară este necesară pentru respectarea unei obligații legale sau pentru constatarea, exercitarea ori apărarea unui drept. (Regulă stabilită de operator; nu a fost validată juridic.)',
        ],
      },
      {
        id: 'analitice',
        title: '7. Analitică și raportarea erorilor',
        content: [
          'În versiunea auditată a aplicației nu există servicii proprii de analitică, urmărire sau raportare automată a erorilor (nu sunt integrate Firebase Analytics, Crashlytics sau servicii similare).',
        ],
      },
      {
        id: 'drepturi',
        title: '8. Drepturile dumneavoastră',
        content: [
          'Pentru datele stocate de aplicație (favorite, istoric, temă), aveți drepturile prevăzute de Regulamentul (UE) 2016/679: acces, rectificare, ștergere, restricționare și portabilitate, precum și dreptul de a depune o plângere la ANSPDCP. Întrucât aceste date sunt stocate local, ele se șterg prin dezinstalarea aplicației.',
          'Pentru datele prelucrate în legătură cu publicitatea și consimțământul (Google Mobile Ads, Google UMP), informațiile sunt descrise în Politica de confidențialitate Google, iar prelucrările se desfășoară conform condițiilor și politicilor Google.',
          'Pentru orice solicitare, folosiți funcția „Trimite feedback” din aplicație sau canalele indicate pe pagina de Asistență.',
        ],
      },
      {
        id: 'publicare',
        title: '9. Modificări și versiunea publică',
        content: [
          'Versiunea publică a acestei politici este disponibilă pe site-ul documentelor JAC. Modificările importante vor fi comunicate prin aplicație sau prin această pagină. Data acestui document: 13 octombrie 2026.',
        ],
      },
    ],
  },

  terms: {
    id: 'terms',
    title: 'Termeni de Utilizare',
    subtitle: 'Condițiile de utilizare a aplicației Android JAC',
    lastUpdated: '13 octombrie 2026',
    confirmationChecklist: [
      { item: 'Cerința de transparență privind operatorul', details: 'Textul este neutru, fără date personale; modul de îndeplinire a art. 13 GDPR rămâne de rezolvat juridic înainte de lansare.', status: 'pending' },
      { item: 'Revizuirea juridică a documentelor', details: 'Acești termeni sunt un document preliminar și trebuie revizuiți juridic înainte de lansare.', status: 'pending' },
      { item: 'Abonamentul Premium', details: 'Facturarea și abonamentele Premium nu sunt implementate; condițiile de achiziție vor fi prezentate separat la implementare.', status: 'pending' },
    ],
    sections: [
      {
        id: 'scop',
        title: '1. Despre JAC',
        content: [
          'JAC este o aplicație independentă de informare legislativă. Conținutul este oferit în scop informativ. JAC nu este o sursă oficială a legislației și nu oferă consultanță juridică.',
          'Utilizarea aplicației este acordată sub o licență personală, neexclusivă și netransferabilă, pentru uz propriu, în condițiile acestor termeni. JAC este operată de o persoană fizică. Datele de identificare și de contact sunt disponibile pe pagina de Asistență.',
        ],
      },
      {
        id: 'verificare',
        title: '2. Verificarea actelor normative',
        content: [
          'Înainte de orice decizie, verificați forma oficială, consolidată și actualizată a legislației, astfel cum este publicată în Monitorul Oficial și pe paginile instituțiilor competente (de exemplu Portalul Legislativ — legislatie.just.ro).',
          'Conținutul aplicației poate înregistra întârzieri față de publicările oficiale, inclusiv atunci când dispozitivul nu este conectat la internet.',
        ],
      },
      {
        id: 'versiuni',
        title: '3. Versiunile aplicației',
        content: [
          'Basic (gratuit): acces la modulele incluse gratuit, căutare în cadrul acestora, până la 5 favorite și afișarea de reclame.',
          'Premium: acces complet la toate modulele, fără reclame și favorite nelimitate. Abonamentul Premium nu este disponibil în prezent; facturarea și abonamentele nu sunt implementate. Condițiile de achiziție vor fi prezentate separat, înainte de orice cumpărare, atunci când mecanismul de abonament va fi implementat.',
        ],
      },
      {
        id: 'limitari',
        title: '4. Limitări ale serviciului',
        content: [
          'JAC depune eforturi rezonabile pentru acuratețea conținutului, dar nu oferă garanții de completitudine sau de actualitate și nu își asumă răspunderea pentru deciziile luate exclusiv pe baza conținutului aplicației.',
          'Nimic din acești termeni nu limitează: (a) drepturile obligatorii ale consumatorilor prevăzute de lege; (b) răspunderea care nu poate fi exclusă sau limitată prin lege; (c) drepturile prevăzute de legislația aplicabilă conținutului și serviciilor digitale. Orice altă limitare a răspunderii operează numai în măsura în care legea o permite în mod expres.',
        ],
      },

      {
        id: 'raportare',
        title: '5. Raportarea erorilor legislative',
        content: [
          'Erorile sau sugestiile pot fi transmise prin funcția „Trimite feedback” din aplicație (subiect „Feedback JAC”) sau prin canalele indicate pe pagina de Asistență.',
          'Nu este garantat un termen fix de răspuns sau de remediere; solicitările sunt analizate în funcție de disponibilitate și de posibilitatea verificării informației în sursele oficiale. Corecțiile confirmate se distribuie prin actualizări de conținut.',
        ],
      },
      {
        id: 'neafiliere',
        title: '6. Neafiliere',
        content: [
          'JAC este o aplicație independentă de informare legislativă. Nu este afiliată, aprobată, sponsorizată sau administrată de Ministerul Afacerilor Interne (MAI), Poliția Română ori de alte instituții ale statului român.',
        ],
      },
      {
        id: 'revizuire',
        title: '7. Revizuire juridică',
        content: [
          'Acești termeni sunt un document preliminar și trebuie revizuiți juridic înainte de publicarea în Google Play.',
        ],
      },
    ],
  },

  cookies: {
    id: 'cookies',
    title: 'Politica de Cookie-uri',
    subtitle: 'Situația reală a site-ului documentelor JAC și distincția față de aplicația Android',
    lastUpdated: '13 octombrie 2026',
    confirmationChecklist: [
      { item: 'Detaliile stocărilor locale ale SDK-urilor Google', details: 'De confirmat din documentația Google (UMP / Mobile Ads).', status: 'pending' },
    ],
    sections: [
      {
        id: 'site',
        title: '1. Situația actuală a site-ului',
        content: [
          'Site-ul documentelor JAC este static: nu utilizează cookie-uri, nu setează cookie-uri de publicitate sau de urmărire între site-uri și nu folosește tehnologii de urmărire. Nu există conturi, formulare de autentificare sau conținut încorporat care să stocheze informații în browser.',
        ],
      },
      {
        id: 'aplicatie',
        title: '2. Aplicația Android JAC',
        content: [
          'Aplicația JAC nu utilizează cookie-uri în sensul clasic al site-urilor web. În versiunea Basic, publicitatea este gestionată prin Google Mobile Ads, iar consimțământul pentru utilizatorii din SEE/Regatul Unit prin Google User Messaging Platform (UMP).',
          'Aceste servicii pot folosi identificatori de dispozitiv (de exemplu identificatorul de publicitate) și pot stoca local starea consimțământului. Detaliile sunt descrise în Politica de confidențialitate, secțiunea 4.',
        ],
        requiresConfirmation: true,
        confirmationNotes: 'Detaliile stocărilor locale ale SDK-urilor Google — DE CONFIRMAT din documentația Google.',
      },
      {
        id: 'gestionare',
        title: '3. Gestionarea consimțământului',
        content: [
          'În aplicație, opțiunile de consimțământ sunt accesibile din Setări → „Opțiuni de confidențialitate”, atunci când Google UMP pune această opțiune la dispoziție.',
        ],
      },
      {
        id: 'viitor',
        title: '4. Dacă adăugăm analiză sau conținut încorporat în viitor',
        content: [
          'Dacă site-ul sau aplicația vor folosi în viitor analiză sau alte tehnologii similare, vom actualiza această pagină cu tehnologiile concrete, scopul și durata lor și, acolo unde legislația o cere, vom solicita mai întâi consimțământul.',
        ],
      },
    ],
  },
};
