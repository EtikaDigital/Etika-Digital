import React, { useState } from 'react';
import {
  HeartHandshake,
  ShieldAlert,
  Globe2,
  Cpu,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

export const FourPillars: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState(0);

  const pillars = [
    {
      title: 'Digital Ethics',
      subtitle: 'Etika Digital',
      icon: HeartHandshake,
      badge: 'Pilar Inti',
      tagline: 'Menjaga Kesantunan, Martabat & Hak Orang Lain',
      description: 'Kemampuan individu dalam menyadari, mencontohkan, menyesuaikan diri, merasionalkan, mempertimbangkan, dan mengembangkan tata krama serta etika berinternet (netiket) dalam kehidupan sehari-hari.',
      competencies: [
        'Kesadaran akan jejak digital (digital footprint) yang abadi',
        'Menghormati privasi dan batasan pribadi sesama pengguna',
        'Menolak cyberbullying, doxing, dan pelecehan siber',
        'Etika komunikasi asinkron (chat formal, email, media sosial)'
      ],
      legalBasis: 'Kaidah Netiket Internasional & Etika Pancasila di Ruang Siber',
      color: 'border-neutral-900 bg-neutral-900 text-white',
      accent: 'text-amber-400'
    },
    {
      title: 'Digital Safety',
      subtitle: 'Keamanan Digital',
      icon: ShieldAlert,
      badge: 'Perlindungan',
      tagline: 'Membentengi Data Pribadi dari Kejahatan Siber',
      description: 'Kemampuan mengenali, mempolakan, menerapkan, menganalisis, dan meningkatkan kesadaran perlindungan data pribadi serta keamanan siber di berbagai perangkat lunak maupun keras.',
      competencies: [
        'Penerapan autentikasi dua faktor (2FA) & sandi kuat',
        'Kewaspadaan terhadap rekayasa sosial (phishing, sniffing APK)',
        'Pemahaman hak subjek data sesuai regulasi UU PDP',
        'Manajemen izin aplikasi (kamera, mikrofon, lokasi, kontak)'
      ],
      legalBasis: 'UU Perlindungan Data Pribadi (UU No. 27/2022) & Regulasi BSSN',
      color: 'border-neutral-800 bg-neutral-800 text-white',
      accent: 'text-emerald-400'
    },
    {
      title: 'Digital Culture',
      subtitle: 'Budaya Digital',
      icon: Globe2,
      badge: 'Sosial & Nilai',
      tagline: 'Merawat Kebangsaan, Toleransi & Inklusivitas',
      description: 'Kemampuan membaca, menguraikan, membiasakan, membangun wawasan kebangsaan, nilai Pancasila, dan Bhinneka Tunggal Ika dalam keseharian serta digitalisasi kebudayaan.',
      competencies: [
        'Cinta tanah air dan perlindungan warisan budaya di internet',
        'Menolak ujaran kebencian berbasis suku, agama, ras (SARA)',
        'Mendorong inklusivitas bagi kaum difabel dan lansia',
        'Menjaga kerukunan di tengah polarisasi opini politik'
      ],
      legalBasis: 'Falsafah Pancasila & Piagam Hak Asasi Manusia Digital',
      color: 'border-neutral-800 bg-neutral-800 text-white',
      accent: 'text-cyan-400'
    },
    {
      title: 'Digital Skills',
      subtitle: 'Kecakapan Digital',
      icon: Cpu,
      badge: 'Teknis & AI',
      tagline: 'Kritis Mengolah Informasi & Berdaya Bersama AI',
      description: 'Kemampuan mengetahui, memahami, dan menggunakan perangkat keras dan peranti lunak TIK serta sistem operasi digital secara kritis, kreatif, dan berintegritas tinggi.',
      competencies: [
        'Keterampilan fact-checking (verifikasi hoaks dengan tools resmi)',
        'Penggunaan Generative AI yang transparan dan bersitasi',
        'Pemanfaatan mesin telusur lanjutan (advanced search boolean)',
        'Kolaborasi dokumen awan (cloud collaboration) yang rapi & aman'
      ],
      legalBasis: 'Standar Kerangka Kerja Kompetensi Digital UNESCO & Kominfo',
      color: 'border-neutral-800 bg-neutral-800 text-white',
      accent: 'text-violet-400'
    }
  ];

  const current = pillars[selectedPillar];
  const CurrentIcon = current.icon;

  return (
    <section id="pilar" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full">
            Kerangka Kerja Nasional
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            4 Pilar Literasi & Keadaban Digital
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Fondasi komprehensif yang dirancang untuk mewujudkan ekosistem digital Indonesia yang tangguh, etis, dan produktif.
          </p>
        </div>

        {/* 4 Cards Selection Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = selectedPillar === idx;
            return (
              <button
                key={pillar.title}
                onClick={() => setSelectedPillar(idx)}
                className={`text-left p-5 rounded-2xl border transition-all duration-200 relative overflow-hidden group ${
                  isSelected
                    ? 'border-neutral-900 bg-neutral-950 text-white shadow-lg -translate-y-1'
                    : 'border-neutral-200 bg-neutral-50 hover:bg-white hover:border-neutral-300 text-neutral-800'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-neutral-800 text-white' : 'bg-white border border-neutral-200 text-neutral-900 group-hover:bg-neutral-100'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${
                    isSelected ? 'bg-neutral-800 text-neutral-200' : 'bg-neutral-200/70 text-neutral-600'
                  }`}>
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="font-bold text-base leading-tight">{pillar.title}</h3>
                <p className={`text-xs mt-1 ${isSelected ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {pillar.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Interactive Viewer */}
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-10 shadow-sm transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-neutral-900 text-white">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-neutral-950">
                    {current.title} — <span className="font-medium text-neutral-700">{current.subtitle}</span>
                  </h3>
                  <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                    {current.tagline}
                  </p>
                </div>
              </div>

              <p className="text-sm text-neutral-700 leading-relaxed pt-2">
                {current.description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-600 mb-3">
                  Kompetensi Utama yang Wajib Dikuasai:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.competencies.map((comp, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-neutral-200/80 text-xs text-neutral-800 font-medium shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-neutral-900 text-white space-y-4 shadow-md">
                <div className="flex items-center justify-between text-xs text-neutral-400 border-b border-neutral-800 pb-3">
                  <span>Landasan Hukum & Norma</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono text-neutral-400 uppercase">Regulasi Relevan:</span>
                  <p className="text-sm font-semibold text-neutral-100">{current.legalBasis}</p>
                </div>
                <div className="p-3 rounded-xl bg-neutral-800/80 text-xs text-neutral-300 leading-relaxed border border-neutral-700/50">
                  💡 <strong>Refleksi Etis:</strong> Setiap aksi di dunia digital meninggalkan jejak (footprint). Integritas kita diuji saat tidak ada orang yang melihat langsung apa yang kita ketik di balik layar.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
