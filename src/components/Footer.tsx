import React from 'react';
import { PageId } from '../types';
import { Scale, ShieldAlert, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenChecklist: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenChecklist }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Slogan Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-sm">
                <Scale className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">JAC</span>
            </div>

            <p className="text-sm font-medium text-amber-400">
              „Claritate în lege. Siguranță în decizie.”
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Aplicație mobilă Android pentru consultarea rapidă și structurată a legislației din domeniul ordinii publice din România.
            </p>

            {/* Non-affiliation reminder */}
            <div className="p-3 bg-slate-800/80 border border-slate-700/80 rounded-xl text-[11px] text-slate-400 leading-normal">
              <strong className="text-slate-300 block mb-0.5">Aviz de independență:</strong>
              Proiect independent, fără asociere sau afiliere cu Ministerul Afacerilor Interne (MAI), Poliția Română sau alte autorități publice.
            </div>
          </div>

          {/* Nav Links Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Navigare
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Pagina Principală
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('functionalitati')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors"
                >
                  Funcționalități
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('versiuni')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors"
                >
                  Versiuni Basic & Premium
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Asistență & Suport
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Documents Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Documente Legale
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-white transition-colors text-left"
                >
                  Termeni și Condiții
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Politica de Confidențialitate
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cookies')}
                  className="hover:text-white transition-colors text-left"
                >
                  Politica de Cookie-uri
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenChecklist}
                  className="text-amber-400 hover:text-amber-300 font-semibold transition-colors flex items-center gap-1 mt-2"
                >
                  <ShieldAlert className="w-3 h-3" />
                  <span>Checklist pre-publicare</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Status Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Disponibilitate & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p>Platformă: <span className="text-slate-200 font-medium">Android</span></p>
              <p>Status: <span className="text-amber-400 font-medium">În pregătire pentru Google Play</span></p>
              <p>Format date: <span className="text-slate-200">Stocare locală SQLite</span></p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-md transition-colors flex items-center gap-1.5 text-xs font-medium"
                >
                  <Mail className="w-3 h-3 text-amber-400" />
                  <span>Contactează dezvoltatorul</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} JAC. Toate drepturile asupra structurii software și mărcii sunt rezervate. Textele legislative aparțin domeniului public.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">
              Termeni
            </button>
            <span aria-hidden="true">·</span>
            <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">
              Confidențialitate
            </button>
            <span aria-hidden="true">·</span>
            <button onClick={() => onNavigate('cookies')} className="hover:text-white transition-colors">
              Cookie-uri
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
