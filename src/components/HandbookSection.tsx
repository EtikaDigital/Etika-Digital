import React, { useState } from 'react';
import {
  Download,
  Award,
  Building2,
  ExternalLink,
  Cloud,
  X,
  Users,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Compass,
  Globe2,
  Quote
} from 'lucide-react';

export const HandbookSection: React.FC = () => {
  // Google Drive configuration for Handbook Etika Digital
  const [driveUrl] = useState<string>(() => {
    return localStorage.getItem('handbook_drive_url') || 'https://drive.google.com/drive/search?q=Handbook%20Etika%20Digital';
  });
  const [showDriveToast, setShowDriveToast] = useState<boolean>(false);

  const handleDownloadHandbookClick = () => {
    setShowDriveToast(true);
    setTimeout(() => setShowDriveToast(false), 5000);
  };

  return (
    <section
      id="handbook"
      className="py-14 sm:py-20 bg-neutral-950 text-white relative overflow-hidden border-b border-neutral-800 scroll-mt-20"
    >
      {/* Invisible anchor for #about-us */}
      <div id="about-us" className="absolute -top-20" />
      <div id="tentang-kami" className="absolute -top-20" />

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-neutral-800">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-400 text-xs font-extrabold tracking-wider uppercase">
              <Users className="w-3.5 h-3.5" />
              <span>About Us • Projek Kepemimpinan Kelompok C</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Tentang Kami &amp; <span className="text-sky-400">Handbook Etika Digital</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Inisiatif pengabdian dan kepemimpinan dalam mengawal keadaban siber bangsa berbasis nilai luhur Pancasila di era transformasi digital.
            </p>
          </div>

          {/* Primary Action Button (Download Handbook directing to Google Drive) */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              id="btn-download-handbook"
              href={driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownloadHandbookClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs sm:text-sm font-black transition-all shadow-lg shadow-sky-500/25 cursor-pointer active:scale-98 group"
              title="Download Handbook (Buka Berkas/Folder di Google Drive)"
            >
              <Download className="w-4 h-4" />
              <span>Download Handbook (Google Drive)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* --- ABOUT US SPOTLIGHT HERO CARD --- */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-900/95 to-neutral-950 border border-sky-500/40 p-6 sm:p-10 shadow-2xl">
          {/* Subtle watermarked badge */}
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <GraduationCap className="w-64 h-64 text-white" />
          </div>

          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-sky-400">
              <Quote className="w-4 h-4" />
              <span>Tentang Proyek Kami</span>
            </div>

            {/* Verbatim Narrative Provided by User */}
            <blockquote className="text-lg sm:text-2xl font-medium text-white leading-relaxed tracking-tight">
              &ldquo;<span className="text-sky-300 font-semibold">Proyek ini merupakan bagian dari Projek Kepemimpinan PPG PPKN Universitas Buana Perjuangan Karawang yang dikembangkan oleh Kelompok C.</span> Melalui proyek ini, kami berupaya menghadirkan sebuah karya yang edukatif, kontekstual, dan dapat memberikan manfaat bagi masyarakat, khususnya dalam membangun kesadaran serta praktik kewarganegaraan yang baik di era digital.&rdquo;
            </blockquote>

            {/* Author Attribution & Badges */}
            <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-sky-500/20">
                  C
                </div>
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base text-white">
                    Kelompok C • Projek Kepemimpinan
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Pendidikan Profesi Guru (PPG) PPKN — Universitas Buana Perjuangan Karawang
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Karya Resmi 2026
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  <Award className="w-3.5 h-3.5" />
                  SDGs 16
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* --- 3 CORE MISSION PILLARS DERIVED FROM THE NARRATIVE --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Pillar 1: Edukatif */}
          <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-sky-500/40 transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-500/30 text-sky-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
              1. Edukatif &amp; Berlandaskan Pancasila
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Menghadirkan edukasi etika digital yang berakar kuat pada nilai-nilai luhur Pancasila (Ketuhanan, Kemanusiaan yang Adil &amp; Beradab, Persatuan, Musyawarah, dan Keadilan Sosial) agar pengguna teknologi memiliki kompas moral yang kokoh.
            </p>
          </div>

          {/* Pillar 2: Kontekstual */}
          <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-sky-500/40 transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
              2. Kontekstual &amp; Aplikatif
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Menjawab tantangan nyata warganet Indonesia: penanggulangan perundungan siber (cyberbullying), verifikasi hoaks &amp; phishing, manajemen jejak digital, kaidah netiket, hingga pemahaman instrumen hukum UU ITE.
            </p>
          </div>

          {/* Pillar 3: Kewarganegaraan Baik */}
          <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-sky-500/40 transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
              3. Praktik Kewarganegaraan Baik
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Membangun kesadaran warga (*digital citizenship*) agar aktif menciptakan ruang siber yang santun, damai, dan inklusif, selaras dengan komitmen global pembangunan berkelanjutan SDGs 16 (Peace, Justice, and Strong Institutions).
            </p>
          </div>
        </div>

        {/* --- DETAIL PROFIL PROYEK & AKREDITASI (3 KOLOM) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-sky-500/15 text-sky-400 shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] text-neutral-400 font-medium block">Institusi Penyelenggara</span>
              <span className="font-bold text-white text-sm block">Universitas Buana Perjuangan Karawang</span>
              <span className="text-[10px] text-neutral-400 mt-0.5 block">Program Studi PPG PPKN</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] text-neutral-400 font-medium block">Tim Pengembang</span>
              <span className="font-bold text-white text-sm block">Kelompok C</span>
              <span className="text-[10px] text-neutral-400 mt-0.5 block">Projek Kepemimpinan Mahasiswa PPG</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-400 shrink-0">
              <Globe2 className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] text-neutral-400 font-medium block">Tujuan Pembangunan Global</span>
              <span className="font-bold text-white text-sm block">SDGs 16</span>
              <span className="text-[10px] text-neutral-400 mt-0.5 block">Peace, Justice &amp; Strong Institutions</span>
            </div>
          </div>
        </div>

        {/* Drive Download Toast Notification */}
        {showDriveToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-neutral-900/95 backdrop-blur-md border border-sky-400/50 rounded-2xl p-4 shadow-2xl flex items-start gap-3 max-w-sm">
            <Cloud className="w-5 h-5 text-sky-400 shrink-0 mt-0.5 animate-pulse" />
            <div className="space-y-1 text-xs">
              <p className="font-bold text-white">Mengarahkan ke Google Drive</p>
              <p className="text-neutral-300">
                Membuka tautan pengunduhan berkas <strong>"Handbook Etika Digital"</strong>.
              </p>
              <div className="pt-1 flex items-center gap-2">
                <a
                  href={driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>Buka Ulang</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <button
              onClick={() => setShowDriveToast(false)}
              className="p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Tutup Notifikasi"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
