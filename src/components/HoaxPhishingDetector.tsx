import React, { useState } from 'react';
import { HOAX_CASES } from '../data/hoaxes';
import { RedFlag } from '../types';
import {
  ShieldAlert,
  Mail,
  MessageCircle,
  FileWarning,
  Eye,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronRight
} from 'lucide-react';

export const HoaxPhishingDetector: React.FC = () => {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const [activeFlag, setActiveFlag] = useState<RedFlag | null>(null);
  const [discoveredFlags, setDiscoveredFlags] = useState<string[]>([]);

  const currentCase = HOAX_CASES[selectedCaseIdx];

  const handleFlagClick = (flag: RedFlag) => {
    setActiveFlag(flag);
    if (!discoveredFlags.includes(flag.id)) {
      setDiscoveredFlags((prev) => [...prev, flag.id]);
    }
  };

  const handleSelectCase = (idx: number) => {
    setSelectedCaseIdx(idx);
    setActiveFlag(null);
  };

  const currentCaseDiscoveredCount = currentCase.redFlags.filter((f) =>
    discoveredFlags.includes(f.id)
  ).length;

  return (
    <section id="deteksi" className="py-20 bg-gradient-to-b from-[#ebf5fe] via-[#e2f0fc] to-white border-b border-sky-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-sky-200 text-xs font-semibold border border-sky-400/30 shadow-xs">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>Simulator Interaktif: Spot The Red Flags</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Deteksi Jebakan Phishing &amp; Modus Hoaks
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Pelajari anatomi pesan berbahaya. Klik tanda titik merah pada mockup pesan di bawah untuk membongkar teknik manipulasi pelaku kejahatan siber!
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {HOAX_CASES.map((c, idx) => {
            const isSelected = selectedCaseIdx === idx;
            const Icon = c.type === 'phishing_email' ? Mail : c.type === 'apk_scam' ? MessageCircle : FileWarning;
            return (
              <button
                key={c.id}
                onClick={() => handleSelectCase(idx)}
                className={`p-4 rounded-2xl border text-left transition-all flex items-center gap-3.5 cursor-pointer ${
                  isSelected
                    ? 'border-sky-400 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white shadow-md'
                    : 'border-sky-200 bg-white hover:border-sky-300 text-slate-800'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-sky-500/20 text-sky-300 border border-sky-400/40' : 'bg-sky-50 border border-sky-200 text-sky-700'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className={`text-[11px] font-bold block uppercase tracking-wider ${isSelected ? 'text-sky-300' : 'text-sky-800'}`}>
                    Kasus {idx + 1}
                  </span>
                  <p className="text-xs font-bold truncate mt-0.5">{c.title}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Mockup Canvas */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-sky-200 shadow-md p-6 relative overflow-hidden">
            
            {/* Mockup Header Toolbar */}
            <div className="flex items-center justify-between border-b border-sky-200 pb-3 mb-4 text-xs text-slate-500 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                <span className="ml-2 font-medium text-slate-600">Simulasi Tampilan Pesan</span>
              </div>
              <div className="flex items-center gap-1.5 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-md text-[11px] font-semibold text-sky-800">
                <Eye className="w-3.5 h-3.5" />
                <span>Klik Pin Merah</span>
              </div>
            </div>

            {/* Simulated Content Card */}
            <div className="p-5 rounded-2xl bg-sky-50/50 border border-sky-200 space-y-4 text-xs font-sans text-slate-800 relative">
              
              {/* Sender info */}
              <div className="border-b border-sky-200 pb-3 space-y-1">
                <div className="flex items-center justify-between text-slate-500 text-[11px]">
                  <span>Dari: <strong className="text-blue-950 font-mono">{currentCase.sender}</strong></span>
                  <span>{currentCase.date}</span>
                </div>
                {currentCase.content.heading && (
                  <h4 className="text-sm font-extrabold text-blue-950 mt-2">
                    {currentCase.content.heading}
                  </h4>
                )}
              </div>

              {/* Body text */}
              <div className="text-slate-700 whitespace-pre-line leading-relaxed text-xs">
                {currentCase.content.body}
              </div>

              {/* Action Button or Attachment */}
              {currentCase.content.actionText && (
                <div className="pt-2">
                  <div className="inline-block p-3 rounded-xl bg-red-600 text-white font-bold text-xs tracking-wider shadow-sm">
                    {currentCase.content.actionText}
                  </div>
                  {currentCase.content.sourceUrl && (
                    <span className="block text-[10px] text-slate-600 font-mono mt-1">
                      Target Tautan: {currentCase.content.sourceUrl}
                    </span>
                  )}
                </div>
              )}

              {currentCase.content.attachmentName && (
                <div className="p-3 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileWarning className="w-5 h-5 text-red-600" />
                    <div>
                      <span className="font-bold text-slate-900 block">{currentCase.content.attachmentName}</span>
                      <span className="text-[10px] text-slate-500 font-mono">{currentCase.content.attachmentSize}</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded">
                    BAHAYA: .APK
                  </span>
                </div>
              )}

              {/* Clickable Pins overlay */}
              <div className="pt-4 border-t border-sky-200 space-y-2">
                <span className="text-[11px] font-bold text-sky-800 uppercase tracking-wider block">
                  Tanda Bahaya (Red Flags) yang Ditemukan:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentCase.redFlags.map((flag) => {
                    const isDiscovered = discoveredFlags.includes(flag.id);
                    const isSelected = activeFlag?.id === flag.id;
                    return (
                      <button
                        key={flag.id}
                        onClick={() => handleFlagClick(flag)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-red-600 text-white ring-2 ring-red-400'
                            : isDiscovered
                            ? 'bg-blue-950 text-white'
                            : 'bg-red-100 text-red-700 hover:bg-red-200 animate-pulse'
                        }`}
                      >
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{flag.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

          {/* Explanation Panel */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Discovery Progress */}
            <div className="p-4 rounded-2xl bg-white border border-sky-200 flex items-center justify-between shadow-2xs">
              <span className="text-xs font-bold text-slate-700">Kemampuan Deteksi:</span>
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                {currentCaseDiscoveredCount} / {currentCase.redFlags.length} Red Flags Ditemukan
              </span>
            </div>

            {/* Active Flag Explanation */}
            {activeFlag ? (
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950 via-[#0b2447] to-[#06162d] text-white space-y-3 animate-in fade-in-50 duration-200 shadow-md border border-sky-800/60">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>Penjelasan Tanda Bahaya:</span>
                </div>
                <h4 className="text-base font-bold text-white">{activeFlag.label}</h4>
                <p className="text-xs text-sky-100/90 leading-relaxed">
                  {activeFlag.description}
                </p>
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-white border border-dashed border-sky-300 text-center space-y-2 text-slate-500 text-xs">
                <HelpCircle className="w-8 h-8 text-sky-400 mx-auto" />
                <p className="font-semibold text-slate-700">Pilih salah satu tanda bahaya di sebelah kiri</p>
                <p className="text-[11px]">Pelajari trik psikologis dan teknis yang dipakai penipu untuk mengecoh korban.</p>
              </div>
            )}

            {/* Summary Lesson */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs text-amber-950 space-y-2 shadow-2xs">
              <span className="font-bold uppercase tracking-wider text-amber-900 block text-[11px]">
                🛡️ Pelajaran Emas Keamanan Siber:
              </span>
              <p className="leading-relaxed">{currentCase.summaryLesson}</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
