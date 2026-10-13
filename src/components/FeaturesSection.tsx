import React from 'react';
import { appFeatures } from '../data/appFeatures';
import { BookOpen, Search, Star, Scale, Layers, Smartphone, CheckCircle } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="functionalitati" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-2">
            Funcționalități Principale
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Structurat pentru eficiență și claritate în deciziile de pe teren
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed [text-wrap:pretty]">
            Fiecare detaliu al aplicației JAC a fost gândit pentru a reduce timpul de căutare și pentru a elimina confuziile la consultarea normelor legale.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {appFeatures.map((feat) => (
            <div
              key={feat.number}
              className="p-8 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-slate-300 transition-all shadow-xs hover:shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                    {feat.number}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {feat.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                  {feat.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Optimizat pentru utilizare rapidă pe telefoane Android</span>
              </div>
            </div>
          ))}
        </div>

        {/* Legislative Corpus Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-1">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                Corpus Legislativ
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Acte normative incluse
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Legislație uzuală din sfera ordinii și siguranței publice, actualizată conform modificărilor legislative.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="font-bold text-amber-300 block text-sm mb-1">Legea nr. 61/1991</span>
                <p className="text-slate-300 leading-normal">
                  Sancționarea faptelor de încălcare a unor norme de conviețuire socială, a ordinii și liniștii publice.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="font-bold text-amber-300 block text-sm mb-1">Legea nr. 218/2002</span>
                <p className="text-slate-300 leading-normal">
                  Organizarea și funcționarea Poliției Române (drepturi, atribuții, legitimare, conducerea la sediu).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="font-bold text-amber-300 block text-sm mb-1">Legea nr. 550/2004</span>
                <p className="text-slate-300 leading-normal">
                  Organizarea și funcționarea Jandarmeriei Române (atribuții în asigurarea și restabilirea ordinii publice).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="font-bold text-amber-300 block text-sm mb-1">Prevederi conexe</span>
                <p className="text-slate-300 leading-normal">
                  Articole relevante din OUG nr. 195/2002 (circulație) și Legea nr. 333/2003 (pază și protecție).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
