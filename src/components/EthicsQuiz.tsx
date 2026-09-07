import React, { useState } from 'react';
import { ETHICS_QUIZ } from '../data/quiz';
import { CertificateModal } from './CertificateModal';
import {
  Award,
  CheckCircle,
  XCircle,
  ChevronRight,
  RotateCcw,
  Sparkles,
  HelpCircle,
  Trophy,
  UserCheck
} from 'lucide-react';

export const EthicsQuiz: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [userName, setUserName] = useState('');
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  const question = ETHICS_QUIZ[currentIdx];
  const userAnswer = selectedAnswers[question.id];
  const isAnswered = userAnswer !== undefined;

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswers((prev) => ({ ...prev, [question.id]: index }));
  };

  const handleNext = () => {
    if (currentIdx < ETHICS_QUIZ.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
  };

  // Calculate score
  const correctCount = Object.entries(selectedAnswers).reduce((acc, [qId, ansIdx]) => {
    const q = ETHICS_QUIZ.find((item) => item.id === Number(qId));
    return acc + (q && q.correctIndex === ansIdx ? 1 : 0);
  }, 0);

  const totalAnswered = Object.keys(selectedAnswers).length;
  const isFinished = totalAnswered === ETHICS_QUIZ.length;
  const scorePercent = Math.round((correctCount / ETHICS_QUIZ.length) * 100);

  return (
    <section id="kuis" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 text-white text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Kuis Uji Pengetahuan & Sertifikasi Resmi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Uji Kompetensi Etika Digitalmu
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Selesaikan 10 pertanyaan literasi dan etika siber. Dapatkan nilai kelulusan minimal 70% untuk mengklaim Sertifikat Resmi Duta Etika Digital!
          </p>
        </div>

        {/* Status Tracker */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Pertanyaan:</span>
            <span className="text-sm font-extrabold text-neutral-900">
              {currentIdx + 1} dari {ETHICS_QUIZ.length}
            </span>
          </div>

          <div className="flex items-center gap-1">
            {ETHICS_QUIZ.map((q, idx) => {
              const ans = selectedAnswers[q.id];
              const isCurrent = currentIdx === idx;
              let dotBg = 'bg-neutral-300';
              if (ans !== undefined) {
                dotBg = ans === q.correctIndex ? 'bg-emerald-500' : 'bg-red-500';
              }
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    isCurrent ? 'ring-2 ring-neutral-900 scale-125' : ''
                  } ${dotBg}`}
                  title={`Soal ${idx + 1}`}
                />
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-neutral-700 font-mono">
              Benar: {correctCount} / {totalAnswered}
            </span>
            <button
              onClick={handleRestart}
              className="p-1.5 rounded-lg border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
              title="Mulai Ulang Kuis"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Question Card */}
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10 shadow-sm space-y-6">
          
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-600">
              Soal Nomor {question.id}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 leading-snug">
              {question.question}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((opt, optIdx) => {
              const isThisSelected = userAnswer === optIdx;
              const isCorrectOption = question.correctIndex === optIdx;

              let optionStyle = 'border-neutral-200 hover:border-neutral-400 bg-neutral-50 text-neutral-800';
              if (isAnswered) {
                if (isCorrectOption) {
                  optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-500';
                } else if (isThisSelected) {
                  optionStyle = 'border-red-500 bg-red-50 text-red-950 font-semibold';
                } else {
                  optionStyle = 'border-neutral-200 opacity-40 bg-neutral-50';
                }
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-start gap-3 ${optionStyle} ${
                    !isAnswered ? 'cursor-pointer hover:bg-white shadow-2xs' : 'cursor-default'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full border border-current shrink-0 flex items-center justify-center text-[10px] font-bold mt-0.5">
                    {String.fromCharCode(65 + optIdx)}
                  </span>
                  <span className="flex-1 leading-snug">{opt}</span>
                  {isAnswered && (
                    <span className="shrink-0">
                      {isCorrectOption ? (
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                      ) : isThisSelected ? (
                        <XCircle className="w-5 h-5 text-red-600" />
                      ) : null}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {isAnswered && (
            <div className="p-5 rounded-2xl bg-neutral-900 text-white space-y-2 animate-in fade-in-50 text-xs">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                <div className="flex items-center gap-1.5 font-bold text-amber-400">
                  <Sparkles className="w-4 h-4" />
                  <span>Penjelasan Edukasi:</span>
                </div>
                {question.legalBasis && (
                  <span className="text-[10px] font-mono text-neutral-400">
                    Dasar: {question.legalBasis}
                  </span>
                )}
              </div>
              <p className="text-neutral-200 leading-relaxed text-xs">
                {question.explanation}
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
            <button
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-neutral-100 text-neutral-700 hover:bg-neutral-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Sebelumnya
            </button>

            {currentIdx < ETHICS_QUIZ.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={!isAnswered}
                className="inline-flex items-center gap-1.5 text-xs font-bold px-5 py-2.5 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <span>Soal Berikutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <span className="text-xs font-bold text-emerald-600">
                Semua Soal Telah Dijawab!
              </span>
            )}
          </div>

        </div>

        {/* Final Evaluation & Certificate Claim Section */}
        {isFinished && (
          <div className="mt-8 p-8 rounded-3xl bg-neutral-900 text-white shadow-xl space-y-6 animate-in fade-in-50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-neutral-800 pb-6">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Hasil Evaluasi Akhir
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  {scorePercent >= 70 ? 'Selamat! Kamu Lulus Ujian Etika Digital' : 'Belum Memenuhi Nilai Kelulusan (Min. 70%)'}
                </h3>
                <p className="text-xs text-neutral-400">
                  Skor Anda: <span className="font-mono text-white font-bold">{scorePercent}%</span> ({correctCount} dari {ETHICS_QUIZ.length} jawaban benar)
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-800 text-center min-w-[120px]">
                <span className="text-[10px] text-neutral-400 uppercase font-bold block">Nilai Anda</span>
                <span className="font-mono text-3xl font-black text-amber-400">{scorePercent}</span>
              </div>
            </div>

            {scorePercent >= 70 ? (
              <div className="space-y-4">
                <p className="text-xs text-neutral-300">
                  Masukkan nama lengkapmu untuk dicantumkan pada <strong>Sertifikat Resmi Duta Etika Digital</strong> dengan kode verifikasi resmi:
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Masukkan Nama Lengkap Anda..."
                    className="flex-1 p-3.5 rounded-xl bg-neutral-800 border border-neutral-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  <button
                    onClick={() => setIsCertificateOpen(true)}
                    disabled={!userName.trim()}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 text-neutral-950 font-bold text-sm hover:bg-amber-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    <Trophy className="w-4 h-4" />
                    <span>Terbitkan Sertifikat Saya</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-xs text-neutral-300">
                  Jangan berkecil hati! Pelajari kembali materi 10 Kaidah Netiket dan 4 Pilar Literasi, lalu coba lagi untuk meraih sertifikat.
                </p>
                <button
                  onClick={handleRestart}
                  className="px-5 py-2.5 rounded-xl bg-white text-neutral-900 text-xs font-bold hover:bg-neutral-100"
                >
                  Ulangi Kuis Sekarang
                </button>
              </div>
            )}
          </div>
        )}

        {/* Certificate Modal */}
        <CertificateModal
          isOpen={isCertificateOpen}
          onClose={() => setIsCertificateOpen(false)}
          userName={userName}
          score={scorePercent}
        />

      </div>
    </section>
  );
};
