import React from 'react';
import { Search, BookOpen, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    step: '01',
    title: 'Deschizi modulul potrivit',
    text: 'Legislația este organizată pe module tematice — de la ordinea publică la codul rutier sau penal. Fiecare modul grupează faptele, articolele și sancțiunile relevante.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Cauți rapid',
    text: 'Cauți după faptă, articol sau cuvânt-cheie direct în modul. Rezultatele apar instant, iar în căutarea globală (Premium) cauți simultan în toată baza legislativă.',
  },
  {
    icon: ShieldCheck,
    step: '03',
    title: 'Verifici încadrarea și sancțiunea',
    text: 'Fiecare faptă vine cu încadrarea legală exactă, amenda între minim și maxim și detaliile de aplicare — inclusiv reducerea la jumătate în 15 zile.',
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="cum-functioneaza" className="py-20 bg-[#0B1424]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">Cum funcționează</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight [text-wrap:balance]">
            De la întrebare la răspuns, în câteva secunde
          </h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            JAC este construit pentru teren: informația corectă, structurată, fără căutări interminabile.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="group relative rounded-2xl bg-[#0E1830] border border-white/10 p-8 shadow-sm hover:shadow-md hover:border-amber-400/30 transition-all">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-[#0B1424] flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-sm font-mono font-bold text-slate-300">{s.step}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-100">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
