import React from 'react';
import { Shield, BookOpen, AlertTriangle } from 'lucide-react';

export const DisclaimerBanner: React.FC = () => {
  return (
    <section className="py-12 bg-[#0E1830] border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-amber-400/10 border border-amber-400/25">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="p-2.5 rounded-xl bg-amber-400/15 text-amber-300 shrink-0">
              <Shield className="w-6 h-6" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-amber-100">
                  Transparență juridică & Independență instituțională
                </h3>
                <span className="text-xs font-semibold text-amber-300 bg-amber-400/15 px-2 py-0.5 rounded-sm">
                  Aviz oficial
                </span>
              </div>

              <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
                <strong>JAC este un proiect tehnic independent.</strong> Aplicația mobilă JAC și acest site web nu sunt afiliate, asociate, autorizate sau susținute oficial de nicio instituție publică sau autoritate de stat din România (inclusiv Ministerul Afacerilor Interne, Poliția Română, Jandarmeria Română sau Poliția Locală).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-amber-100/80">
                <div className="flex items-start gap-2">
                  <BookOpen className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>
                    <strong>Sursa textelor legale:</strong> Reproduceri ale actelor normative din domeniul public, publicate în Monitorul Oficial al României și pe portalul legislatie.just.ro.
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>
                    <strong>Fără valoare de consultanță:</strong> Informațiile au scop strict documentar și metodologic. Singurul text care produce efecte juridice este cel din Monitorul Oficial.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
