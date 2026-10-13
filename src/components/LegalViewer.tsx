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
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Înapoi la pagina principală</span>
          </button>


        </div>

        {/* Tab switchers between the 3 legal documents */}
        <div className="flex flex-wrap items-center gap-2 mb-8 bg-white p-1.5 rounded-xl border border-slate-200 shadow-2xs">
          <button
            onClick={() => {
              setActiveDocId('terms');
              setFilterQuery('');
            }}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeDocId === 'terms'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs">
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
                  className="w-full pl-8 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg outline-none focus:border-slate-800"
                />
              </div>

              <nav className="space-y-1 text-xs">
                {doc.sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block py-1.5 px-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors leading-snug truncate"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={handleCopyText}
                  className="flex-1 py-1.5 px-2.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700">Copiat!</span>
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
                  className="py-1.5 px-2.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  title="Tipărește sau salvează ca PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Tipărește</span>
                </button>
              </div>
            </div>

            {/* Disclaimer box for legal advice */}
            <div className="p-4 bg-slate-100 rounded-xl text-xs text-slate-600 leading-relaxed border border-slate-200">
              <span className="font-bold text-slate-800 block mb-1">Important:</span>
              Prezenta pagină nu constituie o garanție automată a conformității juridice absolute. Titularul aplicației are obligația de a verifica și adapta clauzele în funcție de structura juridică finală a proiectului.
            </div>
          </aside>

          {/* Right Column: Legal Text Content */}
          <main className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs">
            {/* Document Header */}
            <header className="mb-8 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
                <span>Document legal oficial</span>
                <span aria-hidden="true">·</span>
                <span>JAC – Claritate în lege. Siguranță în decizie.</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {doc.title}
              </h1>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {doc.subtitle}
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                <span>Versiune în vigoare: {doc.lastUpdated}</span>
                <span aria-hidden="true">·</span>
                <span>Jurisdicție: România (UE)</span>
              </div>
            </header>

            {/* Document Sections */}
            <div className="space-y-10 text-sm leading-relaxed text-slate-800 font-serif-legal">
              {filteredSections.map((sec) => (
                <section key={sec.id} id={sec.id} className="scroll-mt-24">
                  <h3 className="font-sans text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-3">
                    {sec.title}
                  </h3>

                  {sec.requiresConfirmation && (
                    <div className="mb-3 p-3 bg-amber-50 border border-amber-200 text-amber-900 rounded-lg font-sans text-xs flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-semibold">Informație ce necesită confirmare:</strong>
                        <span>{sec.confirmationNotes}</span>
                      </div>
                    </div>
                  )}

                  <div className="space-y-3 text-slate-700">
                    {sec.content.map((paragraph, pIdx) => {
                      const hasPendingTag = paragraph.includes('[NECESITĂ CONFIRMARE');
                      return (
                        <p
                          key={pIdx}
                          className={
                            hasPendingTag
                              ? 'bg-amber-100/60 p-2.5 rounded-lg border border-amber-300/80 font-sans text-xs text-amber-950 font-medium'
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
            <div className="mt-12 pt-6 border-t border-slate-200 font-sans text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span>JAC © {new Date().getFullYear()} · Toate drepturile rezervate</span>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-slate-700 hover:text-slate-900 font-semibold"
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
