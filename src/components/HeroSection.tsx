import React from 'react';
import { PageId } from '../types';
import { ArrowRight, BookOpen, Search, Star, Lock, Wifi, WifiOff, ShieldCheck, Scale } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[300px] sm:w-[330px]">
      {/* glow */}
      <div className="absolute -inset-8 bg-amber-500/20 blur-3xl rounded-full" aria-hidden="true" />
      {/* device frame */}
      <div className="relative rounded-[2.6rem] border border-white/10 bg-[#0B1424] p-2.5 shadow-2xl shadow-black/60">
        <div className="rounded-[2.1rem] overflow-hidden bg-[#0E1830]">
          {/* status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[9px] font-semibold text-slate-300">
            <span>21:07</span>
            <div className="flex items-center gap-1">
              <Wifi className="w-3 h-3" />
              <span className="inline-block w-4 h-2 rounded-sm bg-slate-600" />
            </div>
          </div>
          {/* app header */}
          <div className="flex items-center gap-2 px-4 pb-2">
            <img src="/icon-192.png" alt="JAC" className="w-7 h-7 rounded-lg" />
            <div className="leading-tight">
              <div className="text-[11px] font-extrabold text-white tracking-wide">JAC</div>
              <div className="text-[8px] text-slate-400">Ghid legislativ operativ</div>
            </div>
          </div>
          {/* search — locked (Basic) */}
          <div className="mx-4 mb-3 flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2.5">
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[10px] text-slate-400">Caută fapte, articole, instituții…</span>
            <Lock className="w-3 h-3 text-amber-400 ml-auto" />
          </div>
          {/* access modules */}
          <div className="px-4 pb-3">
            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Acces rapid</div>
            <div className="space-y-2">
              <div className="rounded-xl bg-white/5 border border-white/10 p-2.5 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center"><Scale className="w-4 h-4 text-slate-300" /></div>
                <div className="flex-1 leading-tight">
                  <div className="text-[10px] font-bold text-white">Codul Penal &amp; procedura penală</div>
                  <div className="text-[8px] text-slate-400">Infracțiuni, pedepse, măsuri</div>
                </div>
                <span className="text-[8px] font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded px-1.5 py-0.5">PREMIUM</span>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-2.5 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center"><ShieldCheck className="w-4 h-4 text-emerald-400" /></div>
                <div className="flex-1 leading-tight">
                  <div className="text-[10px] font-bold text-white">Legi speciale și contravenții</div>
                  <div className="text-[8px] text-slate-400">Ordine publică, silvic, arme</div>
                </div>
                <span className="text-[8px] font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded px-1.5 py-0.5">BASIC</span>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-2.5 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center"><BookOpen className="w-4 h-4 text-sky-400" /></div>
                <div className="flex-1 leading-tight">
                  <div className="text-[10px] font-bold text-white">Cod rutier</div>
                  <div className="text-[8px] text-slate-400">Circulația pe drumurile publice</div>
                </div>
                <span className="text-[8px] font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded px-1.5 py-0.5">BASIC</span>
              </div>
            </div>
          </div>
          {/* bottom nav */}
          <div className="flex items-center justify-around border-t border-white/10 px-2 py-2 text-[8px] text-slate-400">
            <span className="flex flex-col items-center gap-0.5 text-amber-400"><BookOpen className="w-3.5 h-3.5" />Acasă</span>
            <span className="flex flex-col items-center gap-0.5"><Scale className="w-3.5 h-3.5" />Module</span>
            <span className="flex flex-col items-center gap-0.5"><Star className="w-3.5 h-3.5" />Salvate</span>
          </div>
        </div>
      </div>
      {/* floating card: real fapta detail */}
      <div className="absolute -left-16 sm:-left-24 -bottom-10 w-56 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10 rotate-[-3deg]">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[9px] font-bold uppercase tracking-wider text-amber-700">Contravenție • Legea 61/1991</span>
        </div>
        <p className="text-[10px] text-slate-600 leading-snug line-clamp-3">
          săvârșirea în public de fapte, acte sau gesturi obscene, proferarea de injurii…
        </p>
        <div className="mt-2 flex items-baseline gap-1.5">
          <span className="text-base font-extrabold text-slate-900">200 – 1.000 lei</span>
        </div>
        <div className="mt-1 text-[9px] text-emerald-700 font-semibold">Jumătate din amendă, achitată în 15 zile</div>
      </div>
      {/* floating chip: offline */}
      <div className="absolute -right-6 sm:-right-10 top-24 flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-lg rotate-[4deg]">
        <WifiOff className="w-3.5 h-3.5 text-slate-700" />
        <span className="text-[10px] font-bold text-slate-800">Funcționează offline</span>
      </div>
    </div>
  );
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-[#0B1424] text-white">
      {/* background décor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,158,11,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,158,11,0.06)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]" aria-hidden="true" />
      <div className="absolute -top-32 right-0 w-[480px] h-[480px] rounded-full bg-amber-500/10 blur-3xl" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24 lg:pt-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-amber-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Aplicație Android independentă de informare legislativă
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight leading-[1.06] [text-wrap:balance]">
              Claritate în lege.{' '}
              <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">Siguranță în decizie.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl [text-wrap:pretty]">
              JAC pune legislația la îndemână: fapte, articole și sancțiuni organizate pe module, disponibile
              instantaneu — chiar și fără semnal. Fără conturi. Fără urmărire.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cum-functioneaza" className="inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-bold px-5 py-3 transition-colors">
                Descoperă aplicația <ArrowRight className="w-4 h-4" />
              </a>
              <button onClick={() => onNavigate('privacy')} className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-sm font-semibold px-5 py-3 transition-colors">
                Documentele legale
              </button>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <dt className="text-2xl font-extrabold text-white">22</dt>
                <dd className="text-[11px] text-slate-400 leading-tight">module legislative</dd>
              </div>
              <div>
                <dt className="text-2xl font-extrabold text-white">1.268</dt>
                <dd className="text-[11px] text-slate-400 leading-tight">fapte &amp; sancțiuni</dd>
              </div>
              <div>
                <dt className="text-2xl font-extrabold text-white">100%</dt>
                <dd className="text-[11px] text-slate-400 leading-tight">offline pe telefon</dd>
              </div>
            </dl>
          </div>
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
