import React, { useState } from 'react';
import { NETIQUETTE_RULES } from '../data/netiquette';
import {
  BookOpen,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Copy,
  Check,
  Sparkles
} from 'lucide-react';

export const NetiquetteGuide: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['Semua', 'Karakter', 'Sosial', 'Teknis'];

  const filteredRules = selectedCategory === 'Semua'
    ? NETIQUETTE_RULES
    : NETIQUETTE_RULES.filter((r) => r.category === selectedCategory);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="netiket" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 text-white text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Panduan Standar Internasional: Virginia Shea & Era Medsos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            10 Kaidah Emas Netiket Modern
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Tata krama berinternet untuk menjaga reputasi personal, hubungan profesional, dan keharmonisan ruang publik digital.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion Rules List */}
        <div className="space-y-4">
          {filteredRules.map((rule) => {
            const isExpanded = expandedIndex === rule.number;
            return (
              <div
                key={rule.number}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 overflow-hidden transition-all duration-200"
              >
                {/* Header Toggle */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : rule.number)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-neutral-100/60 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-mono font-extrabold text-xs shrink-0">
                      {rule.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-neutral-900">{rule.title}</h3>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-neutral-200/80 text-neutral-600 uppercase">
                          {rule.category}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 line-clamp-1 mt-0.5">{rule.summary}</p>
                    </div>
                  </div>
                  <div className="p-1 rounded-lg text-neutral-400">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="p-5 pt-0 space-y-4 border-t border-neutral-200/60 bg-white">
                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed pt-3">
                      {rule.detailedExplanation}
                    </p>

                    {/* Comparison Box (Bad vs Good) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                      
                      {/* Bad Example */}
                      <div className="p-4 rounded-xl bg-red-50/70 border border-red-200 text-xs space-y-2">
                        <div className="flex items-center gap-1.5 font-bold text-red-700">
                          <XCircle className="w-4 h-4" />
                          <span>Contoh yang Melanggar Netiket:</span>
                        </div>
                        <p className="text-neutral-800 italic font-mono text-[11px] bg-white/70 p-2.5 rounded-lg border border-red-100">
                          {rule.badExample}
                        </p>
                      </div>

                      {/* Good Example */}
                      <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs space-y-2 relative">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 font-bold text-emerald-700">
                            <CheckCircle className="w-4 h-4" />
                            <span>Contoh yang Santun & Beretika:</span>
                          </div>
                          <button
                            onClick={() => handleCopy(rule.goodExample, `good-${rule.number}`)}
                            className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-800 hover:text-emerald-950 bg-white px-2 py-0.5 rounded border border-emerald-200"
                            title="Salin template chat"
                          >
                            {copiedId === `good-${rule.number}` ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-600" />
                                <span>Tersalin</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Salin</span>
                              </>
                            )}
                          </button>
                        </div>
                        <p className="text-neutral-800 font-mono text-[11px] bg-white/70 p-2.5 rounded-lg border border-emerald-100">
                          {rule.goodExample}
                        </p>
                      </div>

                    </div>
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
