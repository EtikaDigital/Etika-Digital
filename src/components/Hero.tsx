import React from 'react';
import { Logo } from './Logo';
import {
  Play,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Fingerprint,
  MessageSquareHeart,
  FileBadge
} from 'lucide-react';

interface HeroProps {
  onStartDilemma: () => void;
  onStartAudit: () => void;
  onOpenLogoKit: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartDilemma,
  onStartAudit,
  onOpenLogoKit,
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

              <button
                onClick={onOpenLogoKit}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
              >
                <span>Lihat Logo & Aset</span>
                <ArrowRight className="w-4 h-4" />
              </button>
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

          {/* Right / Visual Showcase Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Card Container */}
              <div className="p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-xl shadow-neutral-200/50 space-y-6 relative overflow-hidden">
                
                {/* Visual Header with Logo */}
                <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-neutral-50 border border-neutral-100">
                  <Logo variant="stacked" size="lg" symbolColor="#000000" />
                  <p className="text-[11px] font-medium text-neutral-600 mt-4 tracking-wider uppercase">
                    Logo Resmi Etika Digital (ED)
                  </p>
                </div>

                {/* Quick Interactive Snippet */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-neutral-800">Indeks Keadaban Siber</span>
                    <span className="font-mono font-bold text-neutral-900">Skor 68 / 100</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-neutral-100 overflow-hidden">
                    <div className="h-full bg-neutral-900 rounded-full w-[68%]" />
                  </div>
                  <p className="text-xs text-neutral-600 leading-normal">
                    Tantangan utama di Indonesia: Hoaks (47%), Ujaran Kebencian (39%), dan Penipuan Phishing (32%). Bersama kita tingkatkan!
                  </p>
                </div>

                {/* Mini Action Tag */}
                <div className="pt-2 flex items-center justify-between border-t border-neutral-100 text-xs">
                  <span className="text-neutral-600 font-medium">Format Logo:</span>
                  <span className="font-mono text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded">SVG • PNG • Vector</span>
                </div>
              </div>

              {/* Decorative Floating Card */}
              <div className="absolute -bottom-4 -left-4 p-3.5 bg-neutral-900 text-white rounded-2xl shadow-xl flex items-center gap-3 text-xs hidden sm:flex">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="font-semibold">100% Interaktif</div>
                  <div className="text-[11px] text-neutral-400">Simulasi, Audit, & Kuis Berhadiah Sertifikat</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
