// Shared building blocks for every page: the phone frame, the mesh stage it stands on, and the site-wide facts.

/* One place for the numbers the whole site quotes, so the home page and the detail pages never disagree. */
export const FACTS = {
  modules: 33,
  fise: "3.500",
  integrale: 28,
  ghiduri: 6,
  rutierModules: 10,
  rutierFapte: "1.011",
  speciale: 19,
  specialeFapte: "1.161",
  penalModules: 4,
  penalArticole: "1.369",
  capitole: 15,
  punctAmenda: "216,25",
};

/* When the app is public on Google Play, set this to its store URL: every page then shows the Play button. */
export const PLAY_URL = null;
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

/* The primary action: Google Play once public, the closed beta until then. */
export function MainCta({ size = "" }) {
  if (PLAY_URL) {
    return (
      <a className={`btn btn--primary ${size}`.trim()} href={PLAY_URL} rel="noopener">
        <PlayIcon />
        <span>Descarcă din Google Play</span>
      </a>
    );
  }
  return (
    <a className={`btn btn--primary ${size}`.trim()} href={BETA_MAIL}>
      <span>Cere acces la beta</span>
    </a>
  );
}

/* The independence and sources notice the app requires on the site (docs/rezumat_pentru_site.md), kept word for word. */
export function Disclaimer() {
  return (
    <div className="disclaimer">
      <p><strong>JAC este o aplicație dezvoltată independent și NU reprezintă o instituție publică.</strong> Nu este afiliată, aprobată sau susținută de Guvernul României, MAI, Poliția Română, Jandarmeria Română ori alte autorități.</p>
      <p>Textele legislative provin din actele publice de pe Portalul Legislativ (<a href="https://legislatie.just.ro" rel="noopener">https://legislatie.just.ro</a>). Aplicația are rol de orientare și nu înlocuiește forma oficială din Monitorul Oficial. Spețele și PV-urile model sunt exemple fictive. Calculele Shiftr sunt orientative.</p>
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
          <p>{text || "JAC e în testare închisă pe Android. Scrie-ne și primești acces Fondator în perioada beta."}</p>
          <div className="btns"><MainCta /></div>
          {PLAY_URL ? null : <p className="fine">Se deschide un e-mail către vladticu100@gmail.com</p>}
        </div>
      </div>
    </section>
  );
}
