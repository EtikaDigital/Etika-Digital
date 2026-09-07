import React, { useState } from 'react';
import { DILEMMA_SCENARIOS } from '../data/dilemmas';
import { DilemmaChoice } from '../types';
import {
  Scale,
  CheckCircle,
  XCircle,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  ChevronRight,
  Gavel,
  Users,
  Lightbulb,
  Award
} from 'lucide-react';

export const DilemmaSimulator: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState<Record<string, DilemmaChoice>>({});
  const [totalScore, setTotalScore] = useState(0);

  const scenario = DILEMMA_SCENARIOS[currentIdx];
  const userChoice = selectedChoices[scenario.id];

  const handleSelectChoice = (choice: DilemmaChoice) => {
    if (userChoice) return; // already answered
    const updated = { ...selectedChoices, [scenario.id]: choice };
    setSelectedChoices(updated);
    setTotalScore((prev) => prev + choice.score);
  };

  const handleNext = () => {
    if (currentIdx < DILEMMA_SCENARIOS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setSelectedChoices({});
    setCurrentIdx(0);
    setTotalScore(0);
  };

  const isCompleted = Object.keys(selectedChoices).length === DILEMMA_SCENARIOS.length;
  const maxPossibleScore = DILEMMA_SCENARIOS.length * 100;
  const normalizedScore = Math.max(0, Math.min(100, Math.round((totalScore / maxPossibleScore) * 100)));

  return (
    <section id="dilema" className="py-20 bg-neutral-100/60 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 text-white text-xs font-semibold">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>Simulasi Interaktif: Uji Moral & Keputusan Digital</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Bagaimana Kamu Bertindak Saat Dilema Terjadi?
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Dunia nyata penuh situasi abu-abu. Uji kompas moral digitalmu dalam skenario nyata yang sering dihadapi warganet Indonesia.
          </p>
        </div>

        {/* Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-neutral-200 shadow-2xs mb-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Skenario:</span>
            <span className="text-sm font-extrabold text-neutral-900">
              {currentIdx + 1} dari {DILEMMA_SCENARIOS.length}
            </span>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {DILEMMA_SCENARIOS.map((sc, i) => {
              const isAnswered = !!selectedChoices[sc.id];
              const isCurrent = currentIdx === i;
              return (
                <button
                  key={sc.id}
                  onClick={() => setCurrentIdx(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    isCurrent
                      ? 'ring-2 ring-neutral-900 bg-neutral-900 scale-110'
                      : isAnswered
                      ? 'bg-emerald-500'
                      : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  title={`Kasus ${i + 1}: ${sc.title}`}
                />
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-[11px] text-neutral-500 block uppercase font-medium">Skor Integritas</span>
              <span className="text-sm font-extrabold text-neutral-950">{totalScore} Poin</span>
            </div>
            <button
              onClick={handleReset}
              className="p-2 rounded-lg border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
              title="Mulai Ulang Simulasi"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Scenario Card */}
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10 shadow-sm space-y-6">
          
          {/* Scenario Meta */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">{scenario.avatar}</span>
              <div>
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block">
                  Kategori: {scenario.category}
                </span>
                <h3 className="text-xl font-bold text-neutral-900">{scenario.title}</h3>
              </div>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700">
              Tingkat: {scenario.difficulty}
            </span>
          </div>

          {/* Context Narrative */}
          <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 text-sm text-neutral-800 leading-relaxed">
            <p className="font-semibold text-neutral-900 mb-1 text-xs uppercase tracking-wider text-neutral-500">
              Skenario Kasus:
            </p>
            {scenario.context}
          </div>

          {/* Choices List */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-600 block">
              Apa tindakan yang akan kamu ambil?
            </label>

            <div className="grid grid-cols-1 gap-3">
              {scenario.choices.map((choice) => {
                const isThisSelected = userChoice?.id === choice.id;
                const showFeedback = !!userChoice;

                let borderClass = 'border-neutral-200 hover:border-neutral-400 bg-white';
                if (showFeedback) {
                  if (choice.isEthical) {
                    borderClass = isThisSelected
                      ? 'border-emerald-600 bg-emerald-50/60 ring-2 ring-emerald-500'
                      : 'border-emerald-300 bg-emerald-50/20';
                  } else {
                    borderClass = isThisSelected
                      ? 'border-red-500 bg-red-50/60 ring-2 ring-red-500'
                      : 'border-neutral-200 opacity-60';
                  }
                }

                return (
                  <button
                    key={choice.id}
                    onClick={() => handleSelectChoice(choice)}
                    disabled={showFeedback}
                    className={`text-left p-4 rounded-xl border transition-all text-sm font-medium flex items-start gap-3.5 ${borderClass} ${
                      !showFeedback ? 'hover:-translate-y-0.5 shadow-2xs' : 'cursor-default'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {showFeedback ? (
                        choice.isEthical ? (
                          <CheckCircle className="w-5 h-5 text-emerald-600" />
                        ) : isThisSelected ? (
                          <XCircle className="w-5 h-5 text-red-600" />
                        ) : (
                          <span className="w-5 h-5 rounded-full border border-neutral-300 inline-block" />
                        )
                      ) : (
                        <span className="w-5 h-5 rounded-full border-2 border-neutral-400 flex items-center justify-center text-[10px] font-bold text-neutral-600">
                          {choice.id.replace('c', '')}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <span className="text-neutral-900 leading-snug">{choice.text}</span>
                      {showFeedback && (
                        <span className={`block text-xs font-bold mt-1 ${choice.score > 0 ? 'text-emerald-700' : 'text-red-700'}`}>
                          {choice.score > 0 ? `+${choice.score} Poin (Pilihan Bijak)` : `${choice.score} Poin (Beresiko / Tidak Etis)`}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feedback & Deep Dive Analysis when answered */}
          {userChoice && (
            <div className="p-6 rounded-2xl bg-neutral-900 text-white space-y-4 animate-in fade-in-50 duration-300">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                    Analisis Dampak & Evaluasi Etika
                  </span>
                </div>
                <span className={`text-xs font-extrabold px-2.5 py-1 rounded-full ${
                  userChoice.isEthical ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-red-500/20 text-red-300 border border-red-500/40'
                }`}>
                  {userChoice.isEthical ? 'Tindakan Berintegritas' : 'Pelanggaran Etika Terdeteksi'}
                </span>
              </div>

              <p className="text-sm text-neutral-200 leading-relaxed">
                {userChoice.ethicalEvaluation}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-neutral-800/90 border border-neutral-700 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-amber-300">
                    <Gavel className="w-3.5 h-3.5" />
                    <span>Aspek Hukum & Regulasi:</span>
                  </div>
                  <p className="text-neutral-300 leading-normal">{userChoice.legalImpact}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-800/90 border border-neutral-700 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-cyan-300">
                    <Users className="w-3.5 h-3.5" />
                    <span>Dampak Sosial & Psikologis:</span>
                  </div>
                  <p className="text-neutral-300 leading-normal">{userChoice.socialImpact}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-800 border border-neutral-700 flex items-start gap-2.5 text-xs text-neutral-200">
                <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Rekomendasi Terbaik: </strong>
                  {userChoice.recommendation}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handlePrev}
                  disabled={currentIdx === 0}
                  className="text-xs font-semibold px-4 py-2 rounded-lg bg-neutral-800 text-neutral-300 hover:bg-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Kasus Sebelumnya
                </button>

                {currentIdx < DILEMMA_SCENARIOS.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 text-xs font-bold px-5 py-2.5 rounded-lg bg-white text-neutral-900 hover:bg-neutral-100 transition-colors"
                  >
                    <span>Lanjut ke Kasus Berikutnya</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <Award className="w-4 h-4" /> Seluruh Kasus Selesai!
                  </span>
                )}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
