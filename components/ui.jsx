// Shared building blocks for every page: the phone frame, the mesh stage it stands on, and the site-wide facts.

/* One place for the numbers the whole site quotes, so the home page and the detail pages never disagree. */
export const FACTS = {
  modules: 36,
  fise: "4.600",
  integrale: 65,
  ghiduri: 12,
  rutierModules: 10,
  rutierFapte: "1.015",
  speciale: 22,
  specialeFapte: "2.267",
  penalModules: 4,
  penalArticole: "1.369",
  capitole: 15,
  punctAmenda: "216,25",
};

/* The app on Google Play and the App Store. Every "Descarcă acum" button opens the store picker. */
export const PLAY_URL = "https://play.google.com/store/apps/details?id=com.ticuv.jac";
/* The app on the App Store (iPhone). */
export const APPSTORE_URL = "https://apps.apple.com/ro/app/jac/id6834487466";
export const BETA_MAIL = "mailto:vladticu100@gmail.com?subject=Acces%20beta%20JAC";

const W = [480, 800, 1175];

/* A real screen from the app inside a thin dark frame. `name` is the file stem in /assets/img/screens/. */
export function Phone({ name, alt = "", sizes = "(min-width: 1024px) 300px, 58vw", className = "", priority = false, ...rest }) {
  const base = `/assets/img/screens/${name}`;
  return (
    <figure className={`phone ${className}`.trim()} data-ui="" {...rest}>
      <img
        src={`${base}-800.webp`}
        srcSet={W.map((w) => `${base}-${w}.webp ${w}w`).join(", ")}
        sizes={sizes}
        width="1175"
        height="2560"
        alt={alt}
        {...(priority ? { fetchPriority: "high" } : { loading: "lazy", decoding: "async" })}
      />
    </figure>
  );
}

/* One phone, or two side by side: `front` is the main screen, `back` a second, standout feature beside it. */
export function Stage({ front, frontAlt, back, backAlt = "", backRight = false, priority = false, children, label }) {
  return (
    <div className="stage" data-r="scale" role={label ? "img" : undefined} aria-label={label}>
      <span className="hero__halo stage__halo" aria-hidden="true"></span>
      <div className="stage__phones">
        {back ? <Phone name={back} alt={backAlt} className={`phone--back${backRight ? " is-right" : ""}`} sizes="(min-width: 1024px) 230px, 40vw" /> : null}
        <Phone name={front} alt={frontAlt} className="phone--front" priority={priority} data-par="" />
      </div>
      {children}
    </div>
  );
}

/* Floating labels over the phones were retired with the v6 design; kept as a no-op so pages need no edits. */
export function Chip() {
  return null;
}

export function Lock() {
  return (
    <span className="lock" aria-hidden="true">
      <svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2.5" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
    </span>
  );
}

export function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.6 2.4 13.8 12l-9.2 9.6c-.4-.2-.6-.7-.6-1.2V3.6c0-.5.2-1 .6-1.2Zm10.4 8.4L6.3 1.9l11 6.2-2.3 2.7Zm0 2.4 2.3 2.7-11 6.2 8.7-8.9Zm4.3-3.8 2.2 1.3c.8.5.8 1.6 0 2.1l-2.2 1.3-2.6-2.4 2.6-2.3Z" /></svg>
  );
}

/* The primary action. Without script it is a plain link to Google Play; with script it opens the store picker. */
export function MainCta({ size = "", className = "btn btn--primary", label = "Descarcă acum", children }) {
  return (
    <a className={`${className} ${size}`.trim()} href={PLAY_URL} rel="noopener" data-open-store="" aria-haspopup="dialog">
      {children || <span>{label}</span>}
    </a>
  );
}

/* Google Play's four-colour mark, drawn inline. */
export function GooglePlayMark() {
  return (
    <svg className="gp-mark" viewBox="0 0 24 26" aria-hidden="true">
      <path fill="#00D7FE" d="M1.1.6C.8.9.6 1.4.6 2v22c0 .6.2 1.1.5 1.4l.1.1L13.6 13v-.3L1.2.5z" />
      <path fill="#FFCE00" d="M17.7 17.2 13.6 13v-.3l4.1-4.2.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-4.9 2.8z" />
      <path fill="#FF3A44" d="M17.8 17.1 13.6 12.9 1.1 25.4c.5.5 1.2.5 2.1.1l14.6-8.4" />
      <path fill="#00F076" d="M17.8 8.7 3.2.4C2.3-.1 1.6 0 1.1.5l12.5 12.4z" />
    </svg>
  );
}

export function AppleMark() {
  return (
    <svg className="ap-mark" viewBox="0 0 20 24" aria-hidden="true">
      <path fill="currentColor" d="M16.5 12.7c0-2.9 2.4-4.3 2.5-4.4-1.4-2-3.5-2.3-4.3-2.3-1.8-.2-3.5 1.1-4.4 1.1-.9 0-2.3-1-3.8-1-2 0-3.8 1.1-4.8 2.9-2 3.5-.5 8.8 1.5 11.6 1 1.4 2.1 3 3.6 2.9 1.4-.1 2-.9 3.8-.9s2.2.9 3.8.9c1.6 0 2.5-1.4 3.5-2.8 1.1-1.6 1.5-3.2 1.6-3.3-.1 0-3-1.2-3-4.7ZM13.6 4.1c.8-1 1.3-2.3 1.2-3.6-1.1 0-2.5.8-3.3 1.7-.7.8-1.4 2.2-1.2 3.5 1.3.1 2.5-.6 3.3-1.6Z" />
    </svg>
  );
}

/* The small store picker every "Descarcă acum" opens: Android goes to Google Play, iPhone to the App Store.
   One per page (it lives in the footer); script opens it as a modal, Esc or a click outside closes it. */
export function StoreDialog() {
  return (
    <dialog className="store" id="descarca" aria-labelledby="store-title">
      <div className="store__head">
        <h2 id="store-title" className="store__title" tabIndex="-1">Descarcă JAC</h2>
        <a className="store__close" href="#" data-close-store="" aria-label="Închide">×</a>
      </div>
      <p className="store__lead">Alege telefonul tău.</p>
      <div className="store__opts">
        <section className="store__opt store__opt--android" aria-label="Android">
          <p className="store__os">Android</p>
          <a className="gp-badge" href={PLAY_URL} rel="noopener">
            <GooglePlayMark />
            <span><small>Descarcă acum de pe</small><b>Google Play</b></span>
          </a>
        </section>
        <section className="store__opt store__opt--ios" aria-label="iOS">
          <p className="store__os">iOS</p>
          <a className="ap-badge" href={APPSTORE_URL} rel="noopener">
            <AppleMark />
            <span><small>Descarcă acum din</small><b>App Store</b></span>
          </a>
        </section>
      </div>
    </dialog>
  );
}

/* Two quiet silver marks under the bar: Android (Google Play) and Apple (App Store), each straight to its store. */
const SILVER = (
  <linearGradient id="silver-g" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stopColor="#f3f5f8" />
    <stop offset=".55" stopColor="#b9c0ca" />
    <stop offset="1" stopColor="#8a929e" />
  </linearGradient>
);

export function PlayBanner({ className = "" }) {
  return (
    <div className={`os-marks ${className}`.trim()}>
      <a className="os-mark" href={PLAY_URL} rel="noopener" aria-label="JAC pe Google Play (Android)">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <defs>{SILVER}</defs>
          <path fill="url(#silver-g)" d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.64.64 0 0 0-.83.22l-1.88 3.24a11.46 11.46 0 0 0-8.94 0L5.65 5.67a.64.64 0 0 0-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.78 10.78 0 0 0 1 18h22a10.78 10.78 0 0 0-5.4-8.52M7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5" />
        </svg>
      </a>
      <span className="os-marks__sep" aria-hidden="true" />
      <a className="os-mark" href={APPSTORE_URL} rel="noopener" aria-label="JAC pe App Store (iPhone)">
        <svg viewBox="0 0 20 24" aria-hidden="true">
          <path fill="url(#silver-g)" d="M16.5 12.7c0-2.9 2.4-4.3 2.5-4.4-1.4-2-3.5-2.3-4.3-2.3-1.8-.2-3.5 1.1-4.4 1.1-.9 0-2.3-1-3.8-1-2 0-3.8 1.1-4.8 2.9-2 3.5-.5 8.8 1.5 11.6 1 1.4 2.1 3 3.6 2.9 1.4-.1 2-.9 3.8-.9s2.2.9 3.8.9c1.6 0 2.5-1.4 3.5-2.8 1.1-1.6 1.5-3.2 1.6-3.3-.1 0-3-1.2-3-4.7ZM13.6 4.1c.8-1 1.3-2.3 1.2-3.6-1.1 0-2.5.8-3.3 1.7-.7.8-1.4 2.2-1.2 3.5 1.3.1 2.5-.6 3.3-1.6Z" />
        </svg>
      </a>
    </div>
  );
}

/* The independence and sources notice the app requires on the site (docs/rezumat_pentru_site.md), kept word for word. */
export function Disclaimer() {
  return (
    <div className="disclaimer">
      <p><strong>JAC este o aplicație dezvoltată independent și NU reprezintă o instituție publică.</strong> Nu este afiliată, aprobată sau susținută de Guvernul României, MAI, Poliția Română, Jandarmeria Română ori alte autorități.</p>
      <p>Textele legislative provin din actele publice de pe Portalul Legislativ (<a href="https://legislatie.just.ro" rel="noopener">https://legislatie.just.ro</a>). Aplicația are rol de orientare și nu înlocuiește forma oficială din Monitorul Oficial. Spețele și PV-urile model sunt exemple fictive. Calculele ÎnGrafic sunt orientative.</p>
    </div>
  );
}

/* Closing call to action, the same on every page. */
export function CtaBand({ title = "Toată legea, în buzunar.", text }) {
  return (
    <section className="sec sec--tight" aria-labelledby="cta-title">
      <div className="wrap">
        <div className="cta" data-r="scale">
          <h2 id="cta-title" className="h2">{title}</h2>
          <p>{text || "JAC e disponibilă pe Android, în Google Play, și pe iPhone, în App Store."}</p>
          <div className="btns"><MainCta /></div>
        </div>
      </div>
    </section>
  );
}
