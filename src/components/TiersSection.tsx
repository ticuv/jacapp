import React from 'react';
import { Check, AlertCircle, Ban, Sparkles, Smartphone, ShieldCheck } from 'lucide-react';

export const TiersSection: React.FC = () => {
  return (
    <section id="versiuni" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-2">
            Niveluri de Acces
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Transparență deplină între Basic și planul Premium
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed [text-wrap:pretty]">
            Toți utilizatorii beneficiază de acces complet la textele legislative. Nu ascundem articole sau sancțiuni în spatele barierelor de plată.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic Tier */}
          <div className="p-8 rounded-2xl bg-white border-2 border-slate-300/80 shadow-xs flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Acces gratuit
                </span>
                <span className="px-2.5 py-1 text-xs font-semibold text-emerald-800 bg-emerald-50 rounded-md border border-emerald-200">
                  Disponibil la lansare
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Versiunea Basic
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Pachetul complet de consultare legislativă, susținut prin afișarea de publicitate discretă.
              </p>

              <div className="mt-6 space-y-3.5 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Acces integral la toate actele normative incluse</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Motor de căutare instant după număr articol și cuvinte</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Salvare articole la Favorite pe dispozitivul local</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Actualizări legislative periodice</span>
                </div>
                <div className="flex items-start gap-3 text-slate-500">
                  <span className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600 mt-0.5 shrink-0">
                    i
                  </span>
                  <span>Include reclame discrete (Google AdMob / UMP)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <span className="text-xs font-medium text-slate-500 block">
                Cost de acces: <strong className="text-slate-900 font-bold">0 lei (Gratuit)</strong>
              </span>
            </div>
          </div>

          {/* Premium Tier */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  Fără întreruperi
                </span>
                <span className="px-2.5 py-1 text-xs font-semibold text-amber-900 bg-amber-50 rounded-md border border-amber-300">
                  În pregătire tehnică
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Versiunea Premium
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Concepută arhitectural pentru o experiență fără reclame, dedicată consultării intensive.
              </p>

              <div className="mt-6 space-y-3.5 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>Toate facilitățile din versiunea Basic</span>
                </div>
                <div className="flex items-start gap-3 font-semibold text-slate-900">
                  <Ban className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>Complet fără reclame (Zero AdMob / Zero bannere)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>Ecran curat, concentrare maximă pe textul juridic</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>Prioritate la sincronizarea bazei de date</span>
                </div>
              </div>
            </div>

            {/* Crucial Disclosure Banner */}
            <div className="mt-8 pt-5 border-t border-amber-200/60 bg-amber-50/70 p-4 rounded-xl">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
                <div className="text-xs text-amber-900 leading-normal">
                  <strong className="font-bold block">Status facturare Premium:</strong>
                  Abonamentele și facturarea Premium <u>nu sunt încă implementate</u>. La data curentă nu se percep plăți și nu sunt solicitate date financiare.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
