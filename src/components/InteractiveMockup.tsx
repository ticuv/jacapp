import React, { useState } from 'react';
import { sampleLawArticles } from '../data/appFeatures';
import { MockLawArticle } from '../types';
import { Search, Star, BookmarkCheck, Scale, Wifi, Battery, Sparkles, SlidersHorizontal, Info } from 'lucide-react';

export const InteractiveMockup: React.FC = () => {
  const [articles, setArticles] = useState<MockLawArticle[]>(sampleLawArticles);
  const [activeTab, setActiveTab] = useState<'all' | 'favorites'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLaw, setSelectedLaw] = useState<string>('all');
  const [nightMode, setNightMode] = useState(false);

  const toggleFavorite = (articleNumber: string) => {
    setArticles((prev) =>
      prev.map((art) =>
        art.articleNumber === articleNumber
          ? { ...art, isFavorite: !art.isFavorite }
          : art
      )
    );
  };

  const filteredArticles = articles.filter((art) => {
    const matchesTab = activeTab === 'all' || (activeTab === 'favorites' && art.isFavorite);
    const matchesLaw = selectedLaw === 'all' || art.lawId === selectedLaw;
    const matchesSearch =
      searchQuery.trim() === '' ||
      art.articleNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.sanctionText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.lawName.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesLaw && matchesSearch;
  });

  const favoritesCount = articles.filter((a) => a.isFavorite).length;

  return (
    <div className="flex flex-col items-center">
      {/* Phone container */}
      <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[9/18.5] bg-slate-900 rounded-[44px] p-3 shadow-2xl shadow-slate-900/30 border-4 border-slate-700/80 ring-1 ring-slate-950/20 select-none">
        {/* Outer Phone Bezel Details */}
        <div className="absolute -left-[6px] top-28 w-1 h-10 bg-slate-700 rounded-l-sm" />
        <div className="absolute -left-[6px] top-42 w-1 h-10 bg-slate-700 rounded-l-sm" />
        <div className="absolute -right-[6px] top-32 w-1 h-14 bg-slate-700 rounded-r-sm" />

        {/* Screen Display */}
        <div
          className={`relative w-full h-full rounded-[34px] overflow-hidden flex flex-col transition-colors duration-300 ${
            nightMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'
          }`}
        >
          {/* Status Bar */}
          <div
            className={`px-5 pt-3 pb-1 flex items-center justify-between text-[11px] font-semibold tracking-tight ${
              nightMode ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            <span>12:00</span>
            {/* Camera Punch Hole */}
            <div className="w-3.5 h-3.5 bg-black rounded-full mx-auto" />
            <div className="flex items-center gap-1.5 text-[10px]">
              <Wifi className="w-3 h-3" />
              <span className="font-mono text-[9px]">5G</span>
              <Battery className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* App Header Inside Mockup */}
          <div
            className={`px-4 pt-2 pb-2.5 border-b transition-colors ${
              nightMode
                ? 'bg-slate-900/90 border-slate-800'
                : 'bg-white/95 border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xs">
                  <Scale className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-tight">JAC Ordine Publică</h4>
                  <p className="text-[9px] text-slate-500 font-medium">Bază legislativă actualizată</p>
                </div>
              </div>
              <button
                onClick={() => setNightMode(!nightMode)}
                className={`p-1.5 rounded-md text-[10px] font-medium border transition-colors ${
                  nightMode
                    ? 'bg-slate-800 border-slate-700 text-amber-400'
                    : 'bg-slate-100 border-slate-200 text-slate-600'
                }`}
                title="Comută tema ecranului"
              >
                {nightMode ? 'Noapte' : 'Zi'}
              </button>
            </div>

            {/* In-app Search bar */}
            <div className="mt-2 relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Caută articol, faptă sau cuvânt..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-8 pr-3 py-1.5 text-[11px] rounded-lg border outline-none transition-colors ${
                  nightMode
                    ? 'bg-slate-800/80 border-slate-700 text-white placeholder-slate-400 focus:border-amber-500'
                    : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-amber-600'
                }`}
              />
            </div>

            {/* Quick Filter Tabs */}
            <div className="flex items-center gap-1 mt-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-2 py-0.5 text-[10px] font-medium rounded-md transition-colors ${
                  activeTab === 'all'
                    ? nightMode
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-slate-900 text-white'
                    : nightMode
                    ? 'text-slate-400 hover:text-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Toate legile
              </button>
              <button
                onClick={() => setActiveTab('favorites')}
                className={`px-2 py-0.5 text-[10px] font-medium rounded-md transition-colors flex items-center gap-1 ${
                  activeTab === 'favorites'
                    ? nightMode
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-slate-900 text-white'
                    : nightMode
                    ? 'text-slate-400 hover:text-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Star className="w-2.5 h-2.5 fill-current text-amber-400" />
                Favorite ({favoritesCount})
              </button>
            </div>
          </div>

          {/* Quick Act Selector Chips */}
          <div
            className={`px-3 py-1.5 border-b text-[9px] flex items-center gap-1.5 overflow-x-auto no-scrollbar ${
              nightMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <button
              onClick={() => setSelectedLaw('all')}
              className={`px-1.5 py-0.5 rounded font-medium whitespace-nowrap ${
                selectedLaw === 'all'
                  ? 'bg-amber-600 text-white'
                  : nightMode
                  ? 'bg-slate-800 text-slate-400'
                  : 'bg-white text-slate-600 border border-slate-200'
              }`}
            >
              Toate actele
            </button>
            <button
              onClick={() => setSelectedLaw('L61-1991')}
              className={`px-1.5 py-0.5 rounded font-medium whitespace-nowrap ${
                selectedLaw === 'L61-1991'
                  ? 'bg-amber-600 text-white'
                  : nightMode
                  ? 'bg-slate-800 text-slate-400'
                  : 'bg-white text-slate-600 border border-slate-200'
              }`}
            >
              Legea 61/1991
            </button>
            <button
              onClick={() => setSelectedLaw('L218-2002')}
              className={`px-1.5 py-0.5 rounded font-medium whitespace-nowrap ${
                selectedLaw === 'L218-2002'
                  ? 'bg-amber-600 text-white'
                  : nightMode
                  ? 'bg-slate-800 text-slate-400'
                  : 'bg-white text-slate-600 border border-slate-200'
              }`}
            >
              Legea 218/2002
            </button>
            <button
              onClick={() => setSelectedLaw('L550-2004')}
              className={`px-1.5 py-0.5 rounded font-medium whitespace-nowrap ${
                selectedLaw === 'L550-2004'
                  ? 'bg-amber-600 text-white'
                  : nightMode
                  ? 'bg-slate-800 text-slate-400'
                  : 'bg-white text-slate-600 border border-slate-200'
              }`}
            >
              Legea 550/2004
            </button>
          </div>

          {/* Articles Feed */}
          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2">
            {filteredArticles.length === 0 ? (
              <div className="py-8 text-center">
                <p className="text-[11px] text-slate-400 font-medium">Niciun articol găsit</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedLaw('all');
                    setActiveTab('all');
                  }}
                  className="mt-2 text-[10px] text-amber-500 font-semibold underline"
                >
                  Resetează filtrele
                </button>
              </div>
            ) : (
              filteredArticles.map((art) => (
                <div
                  key={art.articleNumber}
                  className={`p-2.5 rounded-xl border transition-all ${
                    nightMode
                      ? 'bg-slate-900 border-slate-800'
                      : 'bg-white border-slate-200/90 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-1">
                    <div>
                      <div className="flex items-center gap-1.5 text-[9px] text-slate-400 font-semibold uppercase tracking-wider">
                        <span>{art.lawName}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-amber-600 dark:text-amber-400">{art.articleNumber}</span>
                      </div>
                      <h5
                        className={`text-[11px] font-bold mt-0.5 leading-snug ${
                          nightMode ? 'text-slate-100' : 'text-slate-900'
                        }`}
                      >
                        {art.title}
                      </h5>
                    </div>
                    <button
                      onClick={() => toggleFavorite(art.articleNumber)}
                      className="p-1 text-slate-400 hover:text-amber-400 transition-colors"
                      title={art.isFavorite ? 'Elimină din favorite' : 'Salvează la favorite'}
                    >
                      <Star
                        className={`w-3.5 h-3.5 ${
                          art.isFavorite
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-300 dark:text-slate-600'
                        }`}
                      />
                    </button>
                  </div>

                  <p
                    className={`mt-1.5 text-[10px] leading-relaxed line-clamp-3 font-serif-legal ${
                      nightMode ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    {art.sanctionText}
                  </p>

                  <div
                    className={`mt-2 pt-1.5 border-t flex flex-col gap-0.5 text-[9px] ${
                      nightMode ? 'border-slate-800/80' : 'border-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Sancțiune:</span>
                      <span className="font-semibold text-amber-700 dark:text-amber-300">
                        {art.fineRange}
                      </span>
                    </div>
                    {art.complementarySanction && (
                      <p className="text-[8px] text-slate-500 italic truncate">
                        {art.complementarySanction}
                      </p>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Ad Unit in Basic Version (Discreet, UMP compliant) */}
          <div
            className={`px-3 py-1.5 border-t flex items-center justify-between text-[8px] ${
              nightMode
                ? 'bg-slate-900 border-slate-800 text-slate-400'
                : 'bg-slate-50 border-slate-200 text-slate-500'
            }`}
          >
            <div className="flex items-center gap-1">
              <span className="font-bold uppercase tracking-wider text-slate-400 text-[7px] border border-slate-300 dark:border-slate-700 px-1 rounded-xs">
                Ad
              </span>
              <span>Reclamă discretă (Versiunea Basic)</span>
            </div>
            <span className="text-slate-400 text-[8px]">Google UMP</span>
          </div>

          {/* Virtual Android Navigation Bar */}
          <div
            className={`h-5 flex items-center justify-center ${
              nightMode ? 'bg-slate-950' : 'bg-slate-200'
            }`}
          >
            <div className="w-20 h-1 bg-slate-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Interactive controls under mockup */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
        <span className="text-slate-500 text-[11px] font-medium mr-1">Probează interfața:</span>
        <button
          onClick={() => {
            setSearchQuery('liniștii');
            setSelectedLaw('L61-1991');
          }}
          className="px-2.5 py-1 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 rounded-md text-[11px] font-medium shadow-2xs hover:bg-slate-50 transition-colors"
        >
          Caută „liniștii”
        </button>
        <button
          onClick={() => {
            setSearchQuery('legitimare');
            setSelectedLaw('all');
          }}
          className="px-2.5 py-1 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 rounded-md text-[11px] font-medium shadow-2xs hover:bg-slate-50 transition-colors"
        >
          Caută „legitimare”
        </button>
        <button
          onClick={() => {
            setActiveTab('favorites');
            setSearchQuery('');
          }}
          className="px-2.5 py-1 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 rounded-md text-[11px] font-medium shadow-2xs hover:bg-slate-50 transition-colors flex items-center gap-1"
        >
          <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
          Filtru Favorite
        </button>
        <button
          onClick={() => {
            setSearchQuery('');
            setSelectedLaw('all');
            setActiveTab('all');
          }}
          className="px-2.5 py-1 text-slate-500 hover:text-slate-800 text-[11px] font-medium transition-colors"
        >
          Resetează
        </button>
      </div>
    </div>
  );
};
