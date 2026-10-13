import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, Mail } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#101B2E]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
          >
            <img src="/logo-jac-white.png" alt="Logo JAC" className="h-9 w-auto transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-100 whitespace-nowrap shrink-0">
                JAC
              </span>
              <span className="text-[11px] font-medium text-slate-400 whitespace-nowrap -mt-1 hidden sm:inline">
                Claritate în lege
              </span>
            </div>
          </button>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                currentPage === 'home'
                  ? 'border-slate-900 text-slate-100 font-semibold'
                  : 'border-transparent'
              }`}
            >
              Acasă
            </button>
            <button
              onClick={() => {
                if (currentPage !== 'home') {
                  onNavigate('home');
                  setTimeout(() => {
                    document.getElementById('functionalitati')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  document.getElementById('functionalitati')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent"
            >
              Funcționalități
            </button>
            <button
              onClick={() => {
                if (currentPage !== 'home') {
                  onNavigate('home');
                  setTimeout(() => {
                    document.getElementById('versiuni')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  document.getElementById('versiuni')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent"
            >
              Niveluri de acces
            </button>
            <button
              onClick={() => handleNavClick('terms')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                currentPage === 'terms'
                  ? 'border-slate-900 text-slate-100 font-semibold'
                  : 'border-transparent'
              }`}
            >
              Termeni
            </button>
            <button
              onClick={() => handleNavClick('privacy')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                currentPage === 'privacy'
                  ? 'border-slate-900 text-slate-100 font-semibold'
                  : 'border-transparent'
              }`}
            >
              Confidențialitate
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">

            <button
              onClick={() => handleNavClick('contact')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                currentPage === 'contact'
                  ? 'bg-amber-600 text-white hover:bg-amber-700'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              Asistență & Contact
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Deschide meniul"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0E1830] px-4 pt-3 pb-5 space-y-2">
          <button
            onClick={() => handleNavClick('home')}
            className="w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 rounded-lg"
          >
            Acasă
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (currentPage !== 'home') onNavigate('home');
              setTimeout(() => {
                document.getElementById('functionalitati')?.scrollIntoView({ behavior: 'smooth' });
              }, 150);
            }}
            className="w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 rounded-lg"
          >
            Funcționalități
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (currentPage !== 'home') onNavigate('home');
              setTimeout(() => {
                document.getElementById('versiuni')?.scrollIntoView({ behavior: 'smooth' });
              }, 150);
            }}
            className="w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 rounded-lg"
          >
            Niveluri de acces (Basic & Premium)
          </button>
          <button
            onClick={() => handleNavClick('terms')}
            className="w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 rounded-lg"
          >
            Termeni și Condiții
          </button>
          <button
            onClick={() => handleNavClick('privacy')}
            className="w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 rounded-lg"
          >
            Politica de Confidențialitate
          </button>
          <button
            onClick={() => handleNavClick('cookies')}
            className="w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 rounded-lg"
          >
            Politica de Cookie-uri
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('contact');
            }}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-amber-300 bg-amber-400/10 hover:bg-amber-400/15 rounded-lg"
          >
            <Mail className="w-4 h-4 text-amber-600" />
            Asistență și contact
          </button>
        </div>
      )}
    </header>
  );
};
