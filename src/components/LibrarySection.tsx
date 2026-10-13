import React from 'react';
import { basicModules, premiumModules, totalModules, totalFapte } from '../data/modules';
import { ShieldCheck, Crown } from 'lucide-react';

const iconMap: Record<string, string> = {
  shield: '🛡️', users: '👥', ball: '⚽', paw: '🐕', smoke: '🚭', home: '🏠', tree: '🌳', id: '🪪',
  car: '🚗', route: '🛣️', gavel: '⚖️', scale: '🏛️', file: '📄', forest: '🌲', target: '🎯',
  phone: '📞', plane: '🛩️', fish: '🐟', deer: '🦌', cart: '🛒', lock: '🔒', wheat: '🌾',
};

function ModuleCard({ m, badge }: { m: typeof basicModules[number]; badge: string }) {
  const badgeClass = badge === 'PREMIUM'
    ? 'text-amber-300 bg-amber-400/10 border-amber-400/25'
    : 'text-emerald-300 bg-emerald-400/10 border-emerald-400/25';
  return (
    <div className="flex items-center gap-3 rounded-xl bg-[#0E1830] border border-white/10 p-3.5 hover:border-amber-400/40 hover:shadow-sm transition-all">
      <div className="w-10 h-10 shrink-0 rounded-lg bg-white/[0.06] flex items-center justify-center text-lg">{iconMap[m.icon] ?? '📜'}</div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-bold text-slate-100 truncate">{m.title}</div>
        <div className="text-xs text-slate-400 truncate">{m.subtitle}</div>
      </div>
      <div className="flex flex-col items-end gap-1 shrink-0">
        <span className="text-[10px] font-bold text-slate-400">{m.fapte} fapte</span>
        <span className={'text-[9px] font-bold px-1.5 py-0.5 rounded border ' + badgeClass}>{badge}</span>
      </div>
    </div>
  );
}

export const LibrarySection: React.FC = () => {
  return (
    <section id="biblioteca" className="py-20 bg-[#0E1830] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">Biblioteca legislativă</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight [text-wrap:balance]">
            {totalModules} module, {totalFapte.toLocaleString('ro-RO')} fapte și sancțiuni
          </h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Conținutul aplicației, așa cum este inclus în versiunea auditată — modulele Basic vin gratuit,
            modulele Premium sunt pregătite pentru accesul complet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">Basic — incluse gratuit</h3>
            </div>
            <div className="space-y-2.5">
              {basicModules.map((m) => <ModuleCard key={m.title} m={m} badge="BASIC" />)}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-4 h-4 text-amber-600" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">Premium — acces complet</h3>
            </div>
            <div className="space-y-2.5">
              {premiumModules.map((m) => <ModuleCard key={m.title} m={m} badge="PREMIUM" />)}
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-400">
          Numerele reflectă catalogul de conținut inclus în versiunea auditată a aplicației (v3, octombrie 2026).
        </p>
      </div>
    </section>
  );
};
