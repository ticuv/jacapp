import React, { useState } from 'react';
import { LegalDocument, PageId } from '../types';
import { legalDocuments } from '../data/legalDocuments';
import {
  FileText,
  Shield,
  Cookie,
  Printer,
  Copy,
  Check,
  AlertTriangle,
  ChevronRight,
  ArrowLeft,
  Search,
} from 'lucide-react';

interface LegalViewerProps {
  initialDocId: 'terms' | 'privacy' | 'cookies';
  onNavigate: (page: PageId) => void;
}

export const LegalViewer: React.FC<LegalViewerProps> = ({
  initialDocId,
  onNavigate,
}) => {
  const [activeDocId, setActiveDocId] = useState<'terms' | 'privacy' | 'cookies'>(initialDocId);
  const [copied, setCopied] = useState(false);
  const [filterQuery, setFilterQuery] = useState('');

  const doc: LegalDocument = legalDocuments[activeDocId];

  const handleCopyText = () => {
    const fullText = `${doc.title}\n${doc.subtitle}\nActualizat: ${doc.lastUpdated}\n\n` +
      doc.sections
        .map((s) => `${s.title}\n${s.content.join('\n')}`)
        .join('\n\n');

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredSections = doc.sections.filter((s) => {
    if (!filterQuery.trim()) return true;
    const q = filterQuery.toLowerCase();
    return (
      s.title.toLowerCase().includes(q) ||
      s.content.some((line) => line.toLowerCase().includes(q))
    );
  });

  return (
    <div className="py-10 bg-[#0B1424] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Înapoi la pagina principală</span>
          </button>


        </div>

        {/* Tab switchers between the 3 legal documents */}
        <div className="flex flex-wrap items-center gap-2 mb-8 bg-[#0E1830] p-1.5 rounded-xl border border-white/10 shadow-2xs">
          <button
            onClick={() => {
              setActiveDocId('terms');
              setFilterQuery('');
            }}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeDocId === 'terms'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Termeni de Utilizare</span>
          </button>

          <button
            onClick={() => {
              setActiveDocId('privacy');
              setFilterQuery('');
            }}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeDocId === 'privacy'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Politica de Confidențialitate</span>
          </button>

          <button
            onClick={() => {
              setActiveDocId('cookies');
              setFilterQuery('');
            }}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeDocId === 'cookies'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <Cookie className="w-3.5 h-3.5" />
            <span>Politica de Cookie-uri</span>
          </button>
        </div>

        {/* Main Grid: Sidebar TOC + Legal Document Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Table of Contents & Tools */}
          <aside className="lg:col-span-4 space-y-5 lg:sticky lg:top-24">
            <div className="p-5 bg-[#0E1830] border border-white/10 rounded-2xl shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Cuprins document
              </span>

              {/* In-doc search */}
              <div className="relative mb-3">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Caută în textul documentului..."
                  value={filterQuery}
                  onChange={(e) => setFilterQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs border border-white/10 rounded-lg outline-none focus:border-slate-800"
                />
              </div>

              <nav className="space-y-1 text-xs">
                {doc.sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block py-1.5 px-2 rounded-md text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors leading-snug truncate"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>

              <div className="mt-5 pt-4 border-t border-white/[0.07] flex items-center justify-between gap-2">
                <button
                  onClick={handleCopyText}
                  className="flex-1 py-1.5 px-2.5 text-xs font-medium text-slate-300 bg-white/[0.06] hover:bg-white/[0.14] rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-300">Copiat!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copiază text</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handlePrint}
                  className="py-1.5 px-2.5 text-xs font-medium text-slate-300 bg-white/[0.06] hover:bg-white/[0.14] rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  title="Tipărește sau salvează ca PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Tipărește</span>
                </button>
              </div>
            </div>

            {/* Disclaimer box for legal advice */}
            <div className="p-4 bg-white/[0.06] rounded-xl text-xs text-slate-300 leading-relaxed border border-white/10">
              <span className="font-bold text-slate-200 block mb-1">Important:</span>
              Prezenta pagină nu constituie o garanție automată a conformității juridice absolute. Titularul aplicației are obligația de a verifica și adapta clauzele în funcție de structura juridică finală a proiectului.
            </div>
          </aside>

          {/* Right Column: Legal Text Content */}
          <main className="lg:col-span-8 bg-[#0E1830] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xs">
            {/* Document Header */}
            <header className="mb-8 pb-6 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-2">
                <span>Document legal oficial</span>
                <span aria-hidden="true">·</span>
                <span>JAC – Claritate în lege. Siguranță în decizie.</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                {doc.title}
              </h1>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {doc.subtitle}
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
                <span>Versiune în vigoare: {doc.lastUpdated}</span>
                <span aria-hidden="true">·</span>
                <span>Jurisdicție: România (UE)</span>
              </div>
            </header>

            {/* Document Sections */}
            <div className="space-y-10 text-sm leading-relaxed text-slate-200 font-serif-legal">
              {filteredSections.map((sec) => (
                <section key={sec.id} id={sec.id} className="scroll-mt-24">
                  <h3 className="font-sans text-base sm:text-lg font-bold text-slate-100 tracking-tight mb-3">
                    {sec.title}
                  </h3>

                  {sec.requiresConfirmation && (
                    <div className="mb-3 p-3 bg-amber-400/10 border border-amber-400/25 text-amber-200 rounded-lg font-sans text-xs flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-semibold">Informație ce necesită confirmare:</strong>
                        <span>{sec.confirmationNotes}</span>
                      </div>
                    </div>
                  )}

                  <div className="space-y-3 text-slate-300">
                    {sec.content.map((paragraph, pIdx) => {
                      const hasPendingTag = paragraph.includes('[NECESITĂ CONFIRMARE');
                      return (
                        <p
                          key={pIdx}
                          className={
                            hasPendingTag
                              ? 'bg-amber-400/15/60 p-2.5 rounded-lg border border-amber-400/25/80 font-sans text-xs text-amber-100 font-medium'
                              : ''
                          }
                        >
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>

            {/* Footer of the document */}
            <div className="mt-12 pt-6 border-t border-white/10 font-sans text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span>JAC © {new Date().getFullYear()} · Toate drepturile rezervate</span>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-slate-300 hover:text-white font-semibold"
              >
                Reveniți la începutul paginii ↑
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
