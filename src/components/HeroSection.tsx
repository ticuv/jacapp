import React from 'react';
import { PageId } from '../types';
import { PhoneFrame } from './PhoneFrame';
import { ArrowRight, WifiOff, ShieldCheck, Lock } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
}

const SCREENS = {
  home: '/screens/jac-home.webp',
  module: '/screens/jac-module-lista.webp',
  fisa: '/screens/jac-fisa-articol.webp',
};

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-[#0B1424] text-white">
      {/* background décor */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,158,11,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,158,11,0.06)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,#000_55%,transparent_100%)]"
        aria-hidden="true"
      />
      <div className="absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-amber-400/100/10 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-sky-400/100/[0.07] blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-10">
          {/* ── Copy ───────────────────────────────────────────── */}
          <div>
            <img
              src="/logo-jac-white.png"
              alt="Logo JAC"
              className="mb-6 h-14 w-auto sm:h-16"
              width={454}
              height={512}
            />
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold text-amber-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Aplicație Android independentă de informare legislativă
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.06] tracking-tight [text-wrap:balance] sm:text-5xl lg:text-[3.6rem]">
              Claritate în lege.{' '}
              <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Siguranță în decizie.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 [text-wrap:pretty] sm:text-lg">
              Fapte, articole și sancțiuni organizate pe module legislative, disponibile instantaneu pe telefon —
              chiar și fără semnal. Fără conturi, fără urmărire.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#interfata"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400/100 px-5 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-400"
              >
                Vezi interfața reală <ArrowRight className="h-4 w-4" />
              </a>
              <button
                onClick={() => onNavigate('privacy')}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
              >
                Documentele legale
              </button>
            </div>

            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
              <div>
                <dt className="text-2xl font-extrabold text-white">22</dt>
                <dd className="text-[11px] leading-tight text-slate-400">module legislative</dd>
              </div>
              <div>
                <dt className="text-2xl font-extrabold text-white">1.268</dt>
                <dd className="text-[11px] leading-tight text-slate-400">fapte &amp; sancțiuni</dd>
              </div>
              <div>
                <dt className="text-2xl font-extrabold text-white">100%</dt>
                <dd className="text-[11px] leading-tight text-slate-400">offline pe telefon</dd>
              </div>
            </dl>

            <p className="mt-8 flex items-center gap-2 text-[11px] text-slate-400">
              <Lock className="h-3 w-3 text-amber-400" />
              Capturile de mai jos sunt din aplicația reală. Abonamentul Premium nu este disponibil în prezent.
            </p>
          </div>

          {/* ── Real screenshots in premium frames ─────────────── */}
          <div className="relative mx-auto w-full max-w-[520px]">
            {/* glow behind the composition */}
            <div className="absolute inset-x-8 top-10 bottom-10 rounded-[3rem] bg-amber-400/10 blur-3xl" aria-hidden="true" />

            <div className="relative flex items-end justify-center">
              {/* secondary — module list (left, angled) */}
              <div className="absolute -left-2 bottom-6 hidden w-[42%] max-w-[210px] origin-bottom-right -rotate-[9deg] opacity-95 sm:block lg:-left-8">
                <PhoneFrame
                  src={SCREENS.module}
                  alt="Catalog legislativ în JAC: lista de acte normative cu numărul de fapte pentru fiecare lege"
                />
              </div>

              {/* main — home screen */}
              <div className="relative z-20 w-[74%] max-w-[292px] jac-float-slow">
                <PhoneFrame
                  src={SCREENS.home}
                  priority
                  alt="Ecranul principal JAC: căutare, acces rapid la module legislative și consultate recent"
                />
              </div>

              {/* secondary — article sheet (right, angled) */}
              <div className="absolute -right-2 bottom-4 hidden w-[42%] max-w-[210px] origin-bottom-left rotate-[9deg] opacity-95 sm:block lg:-right-8">
                <PhoneFrame
                  src={SCREENS.fisa}
                  alt="Fișa unei fapte în JAC: încadrarea legală, intervalul sancțiunii și condițiile de plată"
                />
              </div>
            </div>

            {/* floating trust chips */}
            <div className="absolute -left-1 top-6 z-30 flex rotate-[-4deg] items-center gap-1.5 rounded-full border border-white/10 bg-[#101B2E]/95 px-3 py-1.5 shadow-xl ring-1 ring-white/10">
              <WifiOff className="h-3.5 w-3.5 text-slate-300" />
              <span className="text-[10px] font-bold text-slate-200">Funcționează offline</span>
            </div>
            <div className="absolute -right-1 bottom-24 z-30 flex rotate-[4deg] items-center gap-1.5 rounded-full border border-white/10 bg-amber-400/100 px-3 py-1.5 shadow-xl">
              <ShieldCheck className="h-3.5 w-3.5 text-slate-950" />
              <span className="text-[10px] font-bold text-slate-950">Bază locală • 1.268 articole</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
