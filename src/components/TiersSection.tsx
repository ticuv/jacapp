import React from 'react';
import { Check, Search, Star, ShieldCheck, Crown, AlertCircle, Library } from 'lucide-react';
import { basicModules } from '../data/modules';

const basicModuleNames = basicModules.map((m) => m.title).join(', ');
const basicItems = [
  'Căutare în cadrul modulelor',
  'Până la 5 favorite',
  'Fișe complete: faptă, încadrare, amendă, reducere 15 zile',
  'Sincronizarea actualizărilor de conținut',
  'Reclame afișate (Google Mobile Ads, cu consimțământ UMP)',
];

const premiumItems = [
  'Toate cele 22 de module — inclusiv Codul Penal, silvic, arme, rutier complet',
  'Căutare globală în întreaga bază legislativă',
  'Favorite nelimitate',
  'Fără reclame',
  'Acces la modulele Premium pregătite tehnic',
];

export const TiersSection: React.FC = () => {
  return (
    <section id="versiuni" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Basic &amp; Premium</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Transparență completă între versiuni
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Versiunea Basic este gratuită și include modulele de bază. Versiunea Premium este pregătită tehnic,
            dar abonamentele nu sunt disponibile în prezent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic */}
          <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md px-2.5 py-1">GRATUIT</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Versiunea Basic</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Acces imediat la cele 8 module legislative de bază, susținut de publicitate.
            </p>
            <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-3.5">
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                <Library className="w-3.5 h-3.5" /> Module incluse
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{basicModuleNames}</p>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-700 flex-1">
              {basicItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-5 border-t border-slate-100 text-sm font-semibold text-slate-900">0 lei</div>
          </div>

          {/* Premium */}
          <div className="relative rounded-2xl bg-[#0B1424] text-white p-8 shadow-xl flex flex-col overflow-hidden">
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-amber-500/20 blur-3xl" aria-hidden="true" />
            <div className="relative flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <Crown className="w-5 h-5 text-amber-400" />
              </div>
              <span className="text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/30 rounded-md px-2.5 py-1">ÎN PREGĂTIRE</span>
            </div>
            <h3 className="relative text-2xl font-extrabold">Versiunea Premium</h3>
            <p className="relative text-sm text-slate-300 mt-2 leading-relaxed">
              Experiența completă, fără reclame, cu întreaga bibliotecă legislativă.
            </p>
            <p className="relative mt-3 text-xs text-slate-400 leading-relaxed">
              Biblioteca JAC este concepută să se extindă: noi acte normative și actualizări de conținut
              vor fi adăugate în timp, iar produsul continuă să fie îmbunătățit.
            </p>
            <ul className="relative mt-6 space-y-3 text-sm text-slate-200 flex-1">
              {premiumItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="relative mt-8 rounded-xl bg-amber-50/95 border border-amber-300 p-4">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
                <p className="text-xs text-amber-900 leading-normal">
                  <strong>Abonamentele Premium nu sunt disponibile în prezent.</strong> Facturarea și Google Play
                  Billing nu sunt încă implementate; nu se percep plăți și nu sunt solicitate date financiare.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-5xl mx-auto flex items-start gap-2.5 text-xs text-slate-500">
          <Search className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
          <span>
            În versiunea Basic, câmpul de căutare globală este blocat și deschide prezentarea Premium;
            căutarea rămâne disponibilă în cadrul fiecărui modul. Favoritele Basic sunt limitate la 5{' '}
            (<Star className="w-3 h-3 inline text-slate-400" />).
          </span>
        </div>
      </div>
    </section>
  );
};
