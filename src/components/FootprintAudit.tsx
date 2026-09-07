import React, { useState } from 'react';
import { FootprintItem } from '../types';
import {
  Footprints,
  ShieldCheck,
  AlertTriangle,
  Flame,
  CheckSquare2,
  Square,
  Lock,
  RefreshCw,
  Sparkles
} from 'lucide-react';

const AUDIT_QUESTIONS: FootprintItem[] = [
  {
    id: 'f1',
    question: 'Saya sering mengunggah story/foto real-time saat sedang berlibur atau nongkrong lengkap dengan tagging lokasi spesifik.',
    riskWeight: 15,
    riskDescription: 'Oversharing lokasi real-time memberi sinyal rumah kosong bagi pelaku kejahatan fisik dan melacak pola rutinitas harianmu.',
    fixTip: 'Terapkan prinsip "Delay Posting": unggah foto liburan beberapa jam setelah meninggalkan lokasi atau setelah tiba kembali di rumah.'
  },
  {
    id: 'f2',
    question: 'Saya menggunakan satu kombinasi kata sandi (password) yang sama atau mirip untuk berbagai akun (email, medsos, e-commerce).',
    riskWeight: 20,
    riskDescription: 'Credential Stuffing: Jika satu situs e-commerce bocor, peretas akan langsung mencoba password yang sama untuk membobol email dan rekeningmu.',
    fixTip: 'Gunakan Password Manager (seperti Bitwarden atau Apple/Google Keychain) dan buat kata sandi unik minimal 14 karakter acak untuk tiap akun.'
  },
  {
    id: 'f3',
    question: 'Saya jarang atau belum mengaktifkan Verifikasi 2 Langkah (2FA/MFA) menggunakan Authenticator App di WhatsApp, Instagram, dan Google.',
    riskWeight: 15,
    riskDescription: 'Tanpa 2FA, akunmu rentan dibajak seketika hanya dengan menebak password atau melalui phishing.',
    fixTip: 'Aktifkan 2FA segera di Pengaturan Keamanan. Prioritaskan aplikasi Authenticator daripada SMS OTP.'
  },
  {
    id: 'f4',
    question: 'Saya pernah mengunggah foto tiket konser, boarding pass pesawat, atau dokumen yang memuat barcode / nama lengkap tanpa sensor.',
    riskWeight: 15,
    riskDescription: 'Barcode pada boarding pass dan tiket menyimpan kode PNR (Passenger Name Record) yang dapat dipakai untuk membatalkan penerbangan atau mencuri identitas.',
    fixTip: 'Sensor atau tutupi barcode, nomor paspor, dan tanggal lahir sebelum mengunggah foto dokumen apa pun ke media sosial.'
  },
  {
    id: 'f5',
    question: 'Saya membiarkan aplikasi di HP mengakses Izin Lokasi, Kontak, dan Mikrofon secara terus-menerus (Always Allow).',
    riskWeight: 10,
    riskDescription: 'Data lokasi dan audio dapat dikumpulkan di latar belakang oleh pihak ketiga untuk profiling iklan agresif atau kebocoran data.',
    fixTip: 'Ubah izin aplikasi menjadi "Hanya saat aplikasi digunakan" (Only While Using the App).'
  },
  {
    id: 'f6',
    question: 'Saat marah atau tersinggung oleh komentar netizen, saya membalas dengan kata-kata kasar atau sindiran personal.',
    riskWeight: 10,
    riskDescription: 'Jejak digital emosional tidak pernah hilang. Tangkapan layar (screenshot) komentar dapat diarsipkan dan mencoreng nama baik saat melamar kerja di masa depan.',
    fixTip: 'Terapkan aturan "24 Jam": saat emosi tersulut, matikan layar, jangan merespons dalam kondisi marah.'
  },
  {
    id: 'f7',
    question: 'Saya pernah mengetik nomor HP atau data pribadi di kuis online/tes kepribadian tidak jelas di media sosial.',
    riskWeight: 10,
    riskDescription: 'Kuis viral sering kali menjadi sarana terselubung data harvesting (penambangan data pribadi) untuk target spam telepon pinjol ilegal.',
    fixTip: 'Hindari mengikuti kuis pihak ketiga yang meminta izin login akun media sosial atau pengisian data identitas.'
  },
  {
    id: 'f8',
    question: 'Saya tidak pernah memeriksa riwayat login akun atau mencabut akses aplikasi lama yang sudah tidak terpakai.',
    riskWeight: 5,
    riskDescription: 'Sesi login lama yang tertinggal di komputer warnet atau perangkat lama dapat dimanfaatkan pihak lain.',
    fixTip: 'Lakukan audit keamanan berkala di Google Security Checkup dan "Keluar dari Semua Perangkat".'
  }
];

export const FootprintAudit: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleReset = () => {
    setCheckedItems([]);
  };

  // Calculate risk score based on selected risk behaviors
  const currentRiskScore = checkedItems.reduce((acc, id) => {
    const item = AUDIT_QUESTIONS.find((q) => q.id === id);
    return acc + (item ? item.riskWeight : 0);
  }, 0);

  // Status meter categorization
  let statusBadge = {
    title: 'Sangat Bersih & Aman',
    color: 'text-emerald-700 bg-emerald-100 border-emerald-300',
    barColor: 'bg-emerald-500',
    description: 'Hebat! Kamu memiliki kesadaran jejak digital yang tinggi dan disiplin menjaga privasi siber.'
  };

  if (currentRiskScore > 50) {
    statusBadge = {
      title: 'Tingkat Risiko Kritis (Bahaya)',
      color: 'text-red-700 bg-red-100 border-red-300',
      barColor: 'bg-red-600',
      description: 'Peringatan: Jejak digitalmu sangat terbuka bagi pelaku penipuan, peretasan, dan profiling data agresif.'
    };
  } else if (currentRiskScore > 20) {
    statusBadge = {
      title: 'Perlu Waspada (Risiko Menengah)',
      color: 'text-amber-800 bg-amber-100 border-amber-300',
      barColor: 'bg-amber-500',
      description: 'Ada beberapa celah keamanan dan privasi yang perlu segera kamu perbaiki agar tidak dimanfaatkan orang jahat.'
    };
  }

  return (
    <section id="jejak" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 text-white text-xs font-semibold">
            <Footprints className="w-3.5 h-3.5 text-amber-400" />
            <span>Kalkulator & Audit Jejak Digital Interaktif</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Seberapa Rentan Jejak Digitalmu?
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Centang kebiasaan online berikut yang pernah atau sering kamu lakukan untuk mengukur skor risiko paparan privasimu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Checklist on Left */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Pilih Kebiasaan yang Sering Kamu Lakukan:
              </span>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-900 font-medium"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset Pilihan</span>
              </button>
            </div>

            {AUDIT_QUESTIONS.map((item) => {
              const isChecked = checkedItems.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => handleToggle(item.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer select-none ${
                    isChecked
                      ? 'border-neutral-900 bg-neutral-900 text-white shadow-sm'
                      : 'border-neutral-200 bg-neutral-50 hover:bg-white hover:border-neutral-300 text-neutral-800'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      {isChecked ? (
                        <CheckSquare2 className="w-5 h-5 text-amber-400" />
                      ) : (
                        <Square className="w-5 h-5 text-neutral-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium leading-snug">{item.question}</p>
                      {isChecked && (
                        <div className="mt-3 p-3 rounded-xl bg-neutral-800 border border-neutral-700 text-xs space-y-1.5 animate-in fade-in-50">
                          <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span>Risiko: +{item.riskWeight}% Bahaya Paparan</span>
                          </div>
                          <p className="text-neutral-300 text-xs leading-normal">{item.riskDescription}</p>
                          <div className="text-emerald-300 font-semibold pt-1 border-t border-neutral-700/60">
                            💡 Solusi: {item.fixTip}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Real-time Risk Meter on Right */}
          <div className="lg:col-span-5 sticky top-24 space-y-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Meter Risiko Jejak Digital
                </span>
                <span className="font-mono text-2xl font-black text-neutral-950">
                  {currentRiskScore}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5">
                <div className="w-full h-4 rounded-full bg-neutral-200 overflow-hidden p-0.5">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${statusBadge.barColor}`}
                    style={{ width: `${Math.min(100, currentRiskScore)}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-neutral-600 font-mono">
                  <span>0% Aman</span>
                  <span>50% Waspada</span>
                  <span>100% Kritis</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className={`p-4 rounded-2xl border ${statusBadge.color} space-y-1.5`}>
                <div className="flex items-center gap-2 font-bold text-sm">
                  {currentRiskScore > 50 ? (
                    <Flame className="w-4 h-4 text-red-600" />
                  ) : currentRiskScore > 20 ? (
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                  ) : (
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  )}
                  <span>{statusBadge.title}</span>
                </div>
                <p className="text-xs leading-relaxed opacity-90">{statusBadge.description}</p>
              </div>

              {/* 3 Golden Hygiene Rules */}
              <div className="space-y-3 pt-2 border-t border-neutral-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  3 Langkah Bersih Jejak Digital Hari Ini:
                </h4>
                <ul className="space-y-2 text-xs text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-neutral-900">1.</span>
                    <span>Googling nama lengkapmu dalam tanda kutip (misal: "Nama Lengkap") untuk melihat apa yang bisa ditemukan publik.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-neutral-900">2.</span>
                    <span>Hapus postingan status lawas yang mengandung emosi negatif atau data pribadi.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-neutral-900">3.</span>
                    <span>Hapus akun di situs web jadul yang sudah tidak pernah kamu gunakan.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
