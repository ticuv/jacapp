import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredFaqs = faqData.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <section className="py-20 bg-[#0E1830] border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-2">
            Întrebări Frecvente
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight [text-wrap:balance]">
            Răspunsuri directe despre JAC
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Informații clare despre funcționare, legislație, reclame și planurile de dezvoltare.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-white/[0.06] text-slate-300 hover:bg-white/[0.14]'
              }`}
            >
              Toate
            </button>
            <button
              onClick={() => setSelectedCategory('general')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                selectedCategory === 'general'
                  ? 'bg-slate-900 text-white'
                  : 'bg-white/[0.06] text-slate-300 hover:bg-white/[0.14]'
              }`}
            >
              General & Statut
            </button>
            <button
              onClick={() => setSelectedCategory('versiuni')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                selectedCategory === 'versiuni'
                  ? 'bg-slate-900 text-white'
                  : 'bg-white/[0.06] text-slate-300 hover:bg-white/[0.14]'
              }`}
            >
              Basic & Premium
            </button>
            <button
              onClick={() => setSelectedCategory('legislatie')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                selectedCategory === 'legislatie'
                  ? 'bg-slate-900 text-white'
                  : 'bg-white/[0.06] text-slate-300 hover:bg-white/[0.14]'
              }`}
            >
              Legislație
            </button>
            <button
              onClick={() => setSelectedCategory('confidentialitate')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                selectedCategory === 'confidentialitate'
                  ? 'bg-slate-900 text-white'
                  : 'bg-white/[0.06] text-slate-300 hover:bg-white/[0.14]'
              }`}
            >
              Confidențialitate
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border border-white/10 rounded-xl overflow-hidden transition-all bg-[#0B1424]/50"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-100 text-sm sm:text-base hover:bg-white/10/70 transition-colors focus:outline-none"
                >
                  <span className="[text-wrap:pretty]">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/10/60 bg-[#0E1830]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
