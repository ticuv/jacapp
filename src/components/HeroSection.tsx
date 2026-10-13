import React from 'react';
import { InteractiveMockup } from './InteractiveMockup';
import { PageId } from '../types';
import { Scale, ShieldCheck, Database, Search, ArrowRight, Smartphone, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200">
      {/* Subtle background architectural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Slogan */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Status indicator unboxed text */}
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 mb-4">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Aplicație Android în pregătire pentru publicare</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500 font-normal">Ordine Publică România</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-slate-900 leading-[1.12] [text-wrap:balance]">
              Claritate în lege.{' '}
              <span className="text-amber-700">Siguranță în decizie.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl [text-wrap:pretty]">
              <strong className="text-slate-900 font-semibold">JAC</strong> este instrumentul digital conceput pentru consultarea rapidă, structurată și precisă a legislației din domeniul ordinii publice. Articole organizate pe acte normative, căutare instantanee în teren și salvare facilă la favorite.
            </p>

            {/* Quick value bullets */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 p-1 rounded bg-slate-100 text-slate-800">
                  <Database className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <span className="font-semibold block text-slate-900">Acte normative structurate</span>
                  <span className="text-xs text-slate-500">Module tematice: circulație rutieră, contravenții, fapte penale</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 p-1 rounded bg-slate-100 text-slate-800">
                  <Search className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <span className="font-semibold block text-slate-900">Căutare instantă în conținut</span>
                  <span className="text-xs text-slate-500">Găsiți fapta sau sancțiunea în fracțiuni de secundă</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  document.getElementById('functionalitati')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
              >
                <span>Descoperă funcționalitățile</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('terms')}
                className="px-5 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-2xs transition-colors whitespace-nowrap shrink-0"
              >
                Termeni & Politică
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-4 py-3 text-xs font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Asistență
              </button>
            </div>

            {/* Independence statement notice */}
            <div className="mt-8 pt-5 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" />
              <span>
                Proiect independent de documentare tehnică. Neafiliat autorităților de stat.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Simulated Android Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <InteractiveMockup />
          </div>
        </div>

        {/* 4-Column Proof & Rigor Strip below hero */}
        <div className="mt-16 pt-10 border-t border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="p-3 rounded-lg bg-white/60 border border-slate-200/80">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Bază legislativă</span>
            <span className="text-base font-bold text-slate-900 mt-1 block">Texte oficiale</span>
            <p className="text-xs text-slate-600 mt-0.5">Reproducere exactă din Monitorul Oficial</p>
          </div>

          <div className="p-3 rounded-lg bg-white/60 border border-slate-200/80">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Stocare locală</span>
            <span className="text-base font-bold text-slate-900 mt-1 block">Zero colectare</span>
            <p className="text-xs text-slate-600 mt-0.5">Favoritele și istoricul rămân pe dispozitiv</p>
          </div>

          <div className="p-3 rounded-lg bg-white/60 border border-slate-200/80">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Transparență reclame</span>
            <span className="text-base font-bold text-slate-900 mt-1 block">Google UMP</span>
            <p className="text-xs text-slate-600 mt-0.5">Control direct asupra consimțământului GDPR</p>
          </div>

          <div className="p-3 rounded-lg bg-white/60 border border-slate-200/80">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Statut Premium</span>
            <span className="text-base font-bold text-slate-900 mt-1 block">Fără plăți active</span>
            <p className="text-xs text-slate-600 mt-0.5">Abonamentele nu sunt încă implementate</p>
          </div>
        </div>
      </div>
    </section>
  );
};
