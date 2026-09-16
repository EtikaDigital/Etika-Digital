import React from 'react';
import {
  Play,
  ShieldCheck,
  ArrowRight,
  Fingerprint,
  MessageSquareHeart,
  FileBadge,
  ShieldAlert,
  FileCheck2,
  BookOpen
} from 'lucide-react';

interface HeroProps {
  onStartDilemma: () => void;
  onStartAudit: () => void;
  onOpenPledge: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartDilemma,
  onStartAudit,
  onOpenPledge,
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-[#b8daf7]/75 via-[#dbeafe]/50 to-white/95 border-b border-sky-200/80">
      {/* Subtle geometric pattern in background */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left / Main Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Mission badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-sky-200 text-xs font-semibold tracking-wide border border-sky-400/30 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Panduan Etika Siber & Netiket Indonesia</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-950 tracking-tight leading-[1.1]">
              Kecerdasan Teknologi,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-950 via-blue-700 to-sky-500">
                Keanggunan Beretika.
              </span>
            </h1>

            {/* Descriptive Body */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
              Internet adalah ruang bersama antarmanusia. Di balik setiap ketukan layar terdapat martabat, privasi, dan tanggung jawab sosial. Kuasai netiket modern, hindari jebakan siber, dan bangun jejak digital yang membanggakan.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#handbook"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-sm font-extrabold text-blue-950 transition-all shadow-md shadow-amber-500/20 active:scale-[0.98]"
              >
                <BookOpen className="w-4 h-4 text-blue-950" />
                <span>Handbook &amp; About Us</span>
              </a>

              <button
                onClick={onStartDilemma}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 text-sm font-semibold text-white hover:from-sky-400 hover:to-blue-600 transition-all shadow-md shadow-sky-500/25 hover:shadow-lg active:scale-[0.98]"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Simulasi Dilema</span>
              </button>

              <button
                onClick={onStartAudit}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-sky-200 bg-white/90 text-sm font-semibold text-blue-950 hover:bg-sky-50 hover:border-sky-300 transition-all shadow-xs"
              >
                <Fingerprint className="w-4 h-4 text-sky-700" />
                <span>Audit Jejak</span>
              </button>

              <a
                href="#aduan-siber"
                className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-xl text-sm font-bold text-red-600 hover:text-red-700 hover:bg-red-50 border border-red-200 transition-colors shadow-2xs"
              >
                <ShieldAlert className="w-4 h-4 text-red-600" />
                <span>Aduan Siber 🚨</span>
              </a>
            </div>

            {/* Key Pillars Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-sky-200/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-700 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">UU PDP & UU ITE</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquareHeart className="w-4 h-4 text-sky-700 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Netiket Virginia Shea</span>
              </div>
              <div className="flex items-center gap-2">
                <FileBadge className="w-4 h-4 text-sky-700 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Sertifikasi Duta Etika</span>
              </div>
            </div>
          </div>

          {/* Right / Interactive Civility Monitor Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Card Container */}
              <div className="p-7 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-sm border border-sky-200 shadow-xl shadow-sky-900/10 space-y-5 relative overflow-hidden">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-sky-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-950">
                      Radar Keadaban Siber RI
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-sky-100 text-sky-800 font-bold border border-sky-200">
                    Siaga 24/7
                  </span>
                </div>

                {/* Civility Score Meter */}
                <div className="p-4 rounded-2xl bg-gradient-to-b from-sky-50/80 to-blue-50/40 border border-sky-100 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">Indeks Keadaban Digital (DCI)</span>
                    <span className="font-mono font-black text-blue-950 text-sm">68 / 100</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-sky-200/70 overflow-hidden p-0.5">
                    <div className="h-full bg-gradient-to-r from-sky-500 to-blue-700 rounded-full w-[68%]" />
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Tantangan utama warganet: <strong className="text-slate-800">Hoaks (47%)</strong>, <strong className="text-slate-800">Ujaran Kebencian (39%)</strong>, & <strong className="text-slate-800">Penipuan Online (32%)</strong>.
                  </p>
                </div>

                {/* Emergency Contact Quick Access */}
                <div className="p-4 rounded-2xl bg-red-50/80 border border-red-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-red-700 font-bold text-xs">
                    <ShieldAlert className="w-4 h-4 text-red-600" />
                    <span>Layanan Pengaduan Siber Pemerintah</span>
                  </div>
                  <p className="text-[11px] text-red-900/90 leading-relaxed">
                    Menghadapi penipuan daring, doxing, atau pemerasan? Laporkan langsung ke Bareskrim Polri atau Komdigi.
                  </p>
                  <a
                    href="#aduan-siber"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 hover:text-red-800 hover:underline pt-1"
                  >
                    <span>Buka Daftar Kontak Resmi (6 Lembaga)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Action Tag: Ikrar Digital */}
                <div className="pt-2 flex items-center justify-between border-t border-sky-100 text-xs">
                  <span className="text-slate-600 font-medium">Aksi Bersama:</span>
                  <button
                    onClick={onOpenPledge}
                    className="inline-flex items-center gap-1.5 font-bold text-blue-900 hover:text-blue-700 transition-colors"
                  >
                    <FileCheck2 className="w-3.5 h-3.5 text-amber-500" />
                    <span>Tanda Tangan Ikrar Digital →</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

