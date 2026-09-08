import React from 'react';
import {
  Play,
  ShieldCheck,
  ArrowRight,
  Fingerprint,
  MessageSquareHeart,
  FileBadge,
  ShieldAlert,
  FileCheck2
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
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-white via-neutral-50/50 to-neutral-100/40 border-b border-neutral-200">
      {/* Subtle geometric pattern in background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left / Main Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Mission badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 text-white text-xs font-medium tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Panduan Etika Siber & Netiket Indonesia</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-[1.1]">
              Kecerdasan Teknologi,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-500">
                Keanggunan Beretika.
              </span>
            </h1>

            {/* Descriptive Body */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
              Internet adalah ruang bersama antarmanusia. Di balik setiap ketukan layar terdapat martabat, privasi, dan tanggung jawab sosial. Kuasai netiket modern, hindari jebakan siber, dan bangun jejak digital yang membanggakan.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onStartDilemma}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 text-sm font-semibold text-white hover:bg-neutral-800 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Mulai Simulasi Dilema</span>
              </button>

              <button
                onClick={onStartAudit}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-300 bg-white text-sm font-semibold text-neutral-800 hover:bg-neutral-50 hover:border-neutral-400 transition-all shadow-xs"
              >
                <Fingerprint className="w-4 h-4 text-neutral-600" />
                <span>Audit Jejak Digital</span>
              </button>

              <a
                href="#aduan-siber"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-sm font-bold text-red-600 hover:text-red-700 hover:bg-red-50 border border-red-200 transition-colors shadow-2xs"
              >
                <ShieldAlert className="w-4 h-4 text-red-600" />
                <span>Kontak Aduan Siber 🚨</span>
              </a>
            </div>

            {/* Key Pillars Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-neutral-200/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-neutral-800 shrink-0" />
                <span className="text-xs font-medium text-neutral-700">UU PDP & UU ITE</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquareHeart className="w-4 h-4 text-neutral-800 shrink-0" />
                <span className="text-xs font-medium text-neutral-700">Netiket Virginia Shea</span>
              </div>
              <div className="flex items-center gap-2">
                <FileBadge className="w-4 h-4 text-neutral-800 shrink-0" />
                <span className="text-xs font-medium text-neutral-700">Sertifikasi Duta Etika</span>
              </div>
            </div>
          </div>

          {/* Right / Interactive Civility Monitor Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Card Container */}
              <div className="p-7 sm:p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-xl shadow-neutral-200/50 space-y-5 relative overflow-hidden">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                      Radar Keadaban Siber RI
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 font-semibold">
                    Siaga 24/7
                  </span>
                </div>

                {/* Civility Score Meter */}
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-neutral-800">Indeks Keadaban Digital (DCI)</span>
                    <span className="font-mono font-black text-neutral-950 text-sm">68 / 100</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-neutral-200/80 overflow-hidden p-0.5">
                    <div className="h-full bg-neutral-900 rounded-full w-[68%]" />
                  </div>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">
                    Tantangan utama warganet: <strong className="text-neutral-700">Hoaks (47%)</strong>, <strong className="text-neutral-700">Ujaran Kebencian (39%)</strong>, & <strong className="text-neutral-700">Penipuan Online (32%)</strong>.
                  </p>
                </div>

                {/* Emergency Contact Quick Access */}
                <div className="p-4 rounded-2xl bg-red-50/70 border border-red-100 space-y-2">
                  <div className="flex items-center gap-2 text-red-700 font-bold text-xs">
                    <ShieldAlert className="w-4 h-4 text-red-600" />
                    <span>Layanan Pengaduan Siber Pemerintah</span>
                  </div>
                  <p className="text-[11px] text-red-900/80 leading-relaxed">
                    Menghadapi penipuan daring, doxing, atau pemerasan? Laporkan langsung ke Bareskrim Polri atau Komdigi.
                  </p>
                  <a
                    href="#aduan-siber"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 hover:text-red-800 hover:underline pt-1"
                  >
                    <span>Buka Daftar Kontak Resmi (7 Lembaga)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Action Tag: Ikrar Digital */}
                <div className="pt-2 flex items-center justify-between border-t border-neutral-100 text-xs">
                  <span className="text-neutral-600 font-medium">Aksi Bersama:</span>
                  <button
                    onClick={onOpenPledge}
                    className="inline-flex items-center gap-1.5 font-bold text-neutral-900 hover:text-amber-700 transition-colors"
                  >
                    <FileCheck2 className="w-3.5 h-3.5 text-amber-600" />
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

