import { LegalDocument } from '../types';

export const legalDocuments: Record<'terms' | 'privacy' | 'cookies', LegalDocument> = {
  privacy: {
    id: 'privacy',
    title: 'Politica de Confidențialitate',
    subtitle: 'Cum sunt protejate și gestionate datele în cadrul aplicației Android JAC și al acestui site web',
    lastUpdated: 'Octombrie 2026',
    confirmationChecklist: [
      {
        item: 'Denumire Operator / Titular proiect',
        details: 'Completați numele complet al deținătorului proiectului (persoană fizică sau persoană juridică / SRL / PFA).',
        status: 'pending',
      },
      {
        item: 'Adresă de e-mail oficială de contact GDPR',
        details: 'Configurați adresa de e-mail dedicată pentru solicitările utilizatorilor (ex: contact@jac-app.ro sau suport@jac-app.ro).',
        status: 'pending',
      },
      {
        item: 'Configurare cont Google AdMob și UMP',
        details: 'Confirmați parametrii Message ID și Formularul de consimțământ UMP din consola Google AdMob.',
        status: 'pending',
      },
      {
        item: 'Includerea unor instrumente suplimentare de telemetrie (dacă există)',
        details: 'Dacă veți activa Firebase Crashlytics sau Google Analytics for Firebase, acestea trebuie declarate explicit aici.',
        status: 'pending',
      },
    ],
    sections: [
      {
        id: 'operator',
        title: '1. Operatorul de date și dispoziții generale',
        content: [
          'Prezenta Politică de Confidențialitate explică modul în care proiectul independent JAC („noi”, „aplicația”) respectă confidențialitatea utilizatorilor în conformitate cu Regulamentul (UE) 2016/679 (GDPR) și legislația națională aplicabilă.',
          'JAC este o aplicație mobilă Android creată pentru facilitarea consultării legislației din domeniul ordinii publice din România.',
          'Date de contact operator: [NECESITĂ CONFIRMARE: Denumire titular / Dezvoltator independent, Adresă de corespondență / Județ, România. E-mail de contact: suport@jac-app.ro].',
        ],
        requiresConfirmation: true,
        confirmationNotes: 'Înlocuiți datele din paranteză dreaptă cu datele oficiale de identificare ale titularului proiectului.',
      },
      {
        id: 'date-locale',
        title: '2. Date prelucrate și stocare locală pe dispozitiv',
        content: [
          'Aplicația JAC a fost proiectată pe principiul minimizării datelor („privacy by design”). Cea mai mare parte a interacțiunii dumneavoastră cu aplicația se desfășoară strict local, pe dispozitivul Android pe care este instalată.',
          'Date stocate exclusiv local în memoria dispozitivului dumneavoastră:',
          '• Articole legislative marcate la Favorite (stocate în baza de date locală SQLite / Room pe telefonul dvs.);',
          '• Istoricul recent al căutărilor legislative (pentru acces facil la verificări repetate);',
          '• Preferințele de afișare (dimensiune font, mod de afișare zi/noapte).',
          'Aceste date NU sunt transmise către servere externe, nu sunt asociate cu o identitate nominală și pot fi șterse oricând prin golirea memoriei aplicației (Clear Data / Clear Storage) din setările sistemului Android sau prin dezinstalarea aplicației.',
        ],
      },
      {
        id: 'sincronizare',
        title: '3. Comunicarea de rețea și sincronizarea conținutului legislativ',
        content: [
          'Pentru a vă asigura accesul la texte normative actualizate, aplicația poate iniția interogări tehnice către serverul de sincronizare a conținutului legislativ.',
          'Date transmise în cadrul sincronizării: la verificarea disponibilității unei versiuni noi a actelor normative, dispozitivul transmite exclusiv informații tehnice standard de nivel de rețea (adresa IP publică alocată de furnizorul dvs. de internet, versiunea aplicației instalate și versiunea locală a bazei de date legislative).',
          'Nu colectăm și nu stocăm pe server date de identificare personală, localizare GPS, contacte sau identificatori unici de dispozitiv în cadrul procesului de actualizare legislativă.',
        ],
      },
      {
        id: 'reclame-ump',
        title: '4. Publicitate (Google Mobile Ads) și acordul utilizatorului (Google UMP)',
        content: [
          'Versiunea Basic a aplicației JAC este pusă la dispoziție gratuit și este susținută prin afișarea de reclame discrete.',
          'Pentru livrarea reclamelor în versiunea Basic, integrăm kitul SDK Google Mobile Ads (Google AdMob).',
          'Pentru utilizatorii din Spațiul Economic European (SEE) și Regatul Unit, integrăm Google User Messaging Platform (UMP) SDK pentru gestionarea conformă a consimțământului.',
          'La prima lansare a aplicației, platforma Google UMP vă afișează un formular oficial prin care puteți alege dacă sunteți de acord cu reclame personalizate sau dacă optați pentru reclame non-personalizate.',
          'Puteți reveni oricând asupra opțiunii exprimate direct din ecranul de Setări al aplicației JAC, secțiunea „Preferințe confidențialitate și reclame”.',
          'În cazul reclamelor non-personalizate, Google poate utiliza identificatori contextuali strict pentru prevenirea fraudelor, limitarea frecvenței afișărilor și raportare agregată, fără a crea un profil de utilizator.',
        ],
      },
      {
        id: 'versiunea-premium',
        title: '5. Mențiune specială privind Versiunea Premium',
        content: [
          'Versiunea Premium a fost concepută arhitectural fără niciun modul de publicitate și fără module de urmărire publicitară.',
          'Important: Sistemul de abonamente, conturi de utilizator și facturare Premium NU este încă implementat în versiunea curentă. În momentul în care această funcționalitate va fi dezvoltată, prezenta politică va fi actualizată pentru a detalia procesarea plăților prin Google Play Billing.',
        ],
      },
      {
        id: 'drepturi',
        title: '6. Drepturile dumneavoastră conform GDPR',
        content: [
          'În calitate de utilizator, beneficiați de următoarele drepturi legale garantate de GDPR:',
          '• Dreptul de acces: posibilitatea de a solicita confirmarea dacă prelucrăm date cu caracter personal;',
          '• Dreptul la rectificare și ștergere: puteți șterge în orice secundă datele locale din telefon prin ștergerea datelor aplicației;',
          '• Dreptul de a retrage consimțământul acordat pentru publicitate personalizată în Google UMP;',
          '• Dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP - www.dataprotection.ro).',
          'Pentru orice întrebare sau solicitare legată de confidențialitate, ne puteți contacta la [NECESITĂ CONFIRMARE: e-mail oficial de suport].',
        ],
        requiresConfirmation: true,
        confirmationNotes: 'Confirmați adresa de e-mail destinată solicitărilor de exercitare a drepturilor GDPR.',
      },
      {
        id: 'securitate',
        title: '7. Securitatea datelor și modificări viitoare',
        content: [
          'Implementăm măsuri tehnice rezonabile pentru a proteja integritatea comunicațiilor de rețea (conexiuni securizate HTTPS / TLS).',
          'Ne rezervăm dreptul de a actualiza prezenta politică pe măsură ce aplicația evoluează sau cerințele legale se modifică. Orice modificare substanțială va fi adusă la cunoștința utilizatorilor prin notele de lansare din aplicație și pe acest site.',
        ],
      },
    ],
  },
  terms: {
    id: 'terms',
    title: 'Termeni și Condiții de Utilizare',
    subtitle: 'Reguli de utilizare a aplicației Android JAC și a serviciilor asociate',
    lastUpdated: 'Octombrie 2026',
    confirmationChecklist: [
      {
        item: 'Verificare statut entitate emitentă',
        details: 'Stabiliți dacă Termenii sunt emiși în nume propriu ca autor independent sau sub o entitate juridică înregistrată.',
        status: 'pending',
      },
      {
        item: 'Confirmare canal oficial de suport',
        details: 'Adresa de suport pentru raportarea erorilor legislative sau neconcordanțelor din teren.',
        status: 'pending',
      },
      {
        item: 'Data exactă de lansare în producție',
        details: 'Data de intrare în vigoare oficială a termenilor pe Google Play.',
        status: 'pending',
      },
    ],
    sections: [
      {
        id: 'scop',
        title: '1. Obiectul și scopul aplicației JAC',
        content: [
          'Aplicația mobilă JAC („Claritate în lege. Siguranță în decizie.”) este un instrument digital independent dezvoltat pentru facilitarea accesului, lecturii și căutării rapide în actele normative din domeniul ordinii publice din România (inclusiv, dar fără a se limita la: Legea nr. 61/1991, Legea nr. 218/2002, Legea nr. 550/2004, OUG nr. 195/2002).',
          'Scopul aplicației este strict documentar, informativ și de sprijin metodologic în consultarea rapidă a normelor legale și a cuantumurilor contravenționale.',
        ],
      },
      {
        id: 'afiliere',
        title: '2. Clauză expresă de independență și lipsă afilierii oficiale',
        content: [
          'JAC ESTE UN PROIECT TEHNIC INDEPENDENT. APLICAȚIA ȘI ACEST SITE WEB NU SUNT AFILIATE, ASOCIATE, AUTORIZATE, SPONSORIZATE SAU ÎN VREUN FEL CONECTATE OFICIAL CU GUVERNUL ROMÂNIEI, MINISTERUL AFACERILOR INTERNE (MAI), POLIȚIA ROMÂNĂ (IGPR), JANDARMERIA ROMÂNĂ, POLIȚIA LOCALĂ SAU ORICARE ALTĂ INSTITUȚIE SAU AUTORITATE PUBLICĂ.',
          'Textele actelor normative incluse în aplicație sunt reproduceri electronice ale textelor publicate în Monitorul Oficial al României și pe portalul legislativ oficial (legislatie.just.ro).',
          'Singurul text care produce efecte juridice oficiale este cel publicat în Monitorul Oficial al României. În caz de discrepanță între textul afișat în aplicație și textul din Monitorul Oficial, prevalează întotdeauna cel din urmă.',
        ],
      },
      {
        id: 'exonerare',
        title: '3. Limitarea răspunderii și lipsa valorii de consultanță juridică',
        content: [
          'Informațiile puse la dispoziție prin intermediul JAC nu constituie și nu trebuie interpretate sub nicio formă drept consultanță juridică, asistență juridică profesională sau îndrumare oficială de aplicare a legii.',
          'Dezvoltatorul depune eforturi continue pentru a asigura acuratețea, completitudinea și actualizarea textelor legislative, dar nu oferă nicio garanție expresă sau implicită privind infailibilitatea acestora, lipsa oricăror erori de tipar, modificări legislative survenite recent sau interpretarea dată în practică.',
          'Utilizatorul este pe deplin și exclusiv responsabil pentru orice decizie practică, acțiune sau inacțiune întreprinsă pe baza informațiilor consultate în aplicație. Dezvoltatorul este exonerat de orice răspundere pentru daune directe sau indirecte rezultate din utilizarea aplicației.',
        ],
      },
      {
        id: 'proprietate',
        title: '4. Proprietate intelectuală',
        content: [
          'Conform art. 9 lit. a) din Legea nr. 8/1996 privind dreptul de autor și drepturile conexe, textele oficiale de natură legislativă, administrativă sau judiciară și traducerile oficiale ale acestora NU beneficiază de protecția dreptului de autor și aparțin domeniului public.',
          'Cu toate acestea, codul sursă al aplicației JAC, designul grafic, arhitectura interfeței, baza de date structurată, algoritmii de căutare, denumirea comercială „JAC”, logo-ul și sloganul „Claritate în lege. Siguranță în decizie.” sunt proprietatea exclusivă a dezvoltatorului și sunt protejate de legislația națională și internațională privind drepturile de proprietate intelectuală.',
          'Este interzisă decompilarea, ingineria inversă, copierea sau redistribuirea neautorizată a aplicației sau a structurii software a acesteia.',
        ],
      },
      {
        id: 'versiuni',
        title: '5. Niveluri de acces: Basic și planul Premium',
        content: [
          'Versiunea Basic: Oferă acces complet la consultarea legilor incluse, funcția de căutare și salvarea articolelor la favorite. Include afișarea de reclame prin Google Mobile Ads.',
          'Versiunea Premium: Este proiectată pentru a oferi o experiență fără reclame.',
          'NOTĂ IMPORTANTĂ: Sistemul de abonamente și facturarea Premium NU sunt încă implementate. La data curentă, nu se percep plăți și nu se comercializează abonamente în cadrul JAC. Orice activare viitoare a serviciilor plătite va fi anunțată clar, cu specificarea prețurilor, termenilor de reînnoire și politicii de rambursare prin Google Play Billing.',
        ],
      },
      {
        id: 'conduita',
        title: '6. Reguli de utilizare și conduită',
        content: [
          'Vă angajați să utilizați aplicația exclusiv în scopuri legitime, fără a încerca să perturbați funcționarea normală a serverelor de sincronizare sau a modulelor integrate.',
          'Ne rezervăm dreptul de a suspenda accesul la actualizări pentru orice dispozitiv care generează solicitări abuzive sau automate nesancționate.',
        ],
      },
      {
        id: 'lege',
        title: '7. Legea aplicabilă și soluționarea disputelor',
        content: [
          'Prezentele clauze sunt guvernate de legea română. Orice dispută care nu poate fi rezolvată pe cale amiabilă va fi înaintată spre soluționare instanțelor judecătorești competente din România.',
          'Contact pentru semnalarea erorilor legislative: [NECESITĂ CONFIRMARE: e-mail de suport].',
        ],
        requiresConfirmation: true,
        confirmationNotes: 'Confirmați adresa de e-mail unde utilizatorii pot sesiza eventuale erori legislative.',
      },
    ],
  },
  cookies: {
    id: 'cookies',
    title: 'Politica privind Tehnologiile de Stocare și Cookie-uri',
    subtitle: 'Claritate deplină: Ce tehnologii folosește acest site web și ce tehnologii NU folosește',
    lastUpdated: 'Octombrie 2026',
    confirmationChecklist: [
      {
        item: 'Verificare domeniu găzduire finală',
        details: 'Confirmați dacă domeniul final de găzduire va include unelte de analiză web (ex: Google Analytics, Plausible, Cloudflare Web Analytics). Dacă DA, acestea trebuie listate aici. Dacă NU, mențiunea de zero-tracking rămâne exactă.',
        status: 'pending',
      },
    ],
    sections: [
      {
        id: 'transparenta-site',
        title: '1. Tehnologii utilizate pe acest site web',
        content: [
          'Acest site de prezentare este conceput pentru a vă oferi informații clare și transparente despre aplicația JAC, Termenii de Utilizare și Politica de Confidențialitate.',
          'Pe acest site web NU utilizăm cookie-uri de urmărire publicitară, cookie-uri de profilare comportamentală și nu partajăm datele dumneavoastră de navigare pe site cu rețele publicitare terțe.',
          'Stocare tehnică strict necesară: Site-ul poate folosi stocarea locală a browserului dumneavoastră (HTML5 LocalStorage) exclusiv pentru salvarea preferințelor dumneavoastră de interfață (de exemplu, preferința pentru vizualizarea secțiunilor de text sau a modului de afișare). Această stocare este strict tehnică, nu conține date personale și nu vă urmărește pe alte pagini web.',
        ],
      },
      {
        id: 'distinctie-aplicatie',
        title: '2. Diferența dintre acest site web și aplicația mobilă Android',
        content: [
          'Este important să faceți distincția între navigarea pe acest site web și funcționarea aplicației mobile JAC instalate din Google Play:',
          '• Pe acest site: Nu există reclame, nu există cookie-uri publicitare.',
          '• În aplicația mobilă Android (versiunea Basic): Nu se folosesc cookie-uri web tradiționale, însă Google Mobile Ads utilizează identificatori mobili specifici sistemului de operare (precum Android Advertising ID / GAID), reglementați prin consimțământul acordat în Google UMP (așa cum este detaliat pe larg în Politica de Confidențialitate a aplicației).',
        ],
      },
      {
        id: 'control-browser',
        title: '3. Cum puteți controla stocarea în browserul dumneavoastră',
        content: [
          'Puteți în orice moment să curățați memoria locală sau cookie-urile browserului dumneavoastră accesând setările de confidențialitate ale browserului pe care îl utilizați (Chrome, Firefox, Safari, Edge etc.).',
          'Ștergerea acestor date nu va afecta capacitatea dumneavoastră de a citi informațiile de pe acest site web.',
        ],
      },
    ],
  },
};
