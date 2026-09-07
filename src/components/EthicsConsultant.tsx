import React, { useState } from 'react';
import {
  Bot,
  Send,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  Gavel,
  ShieldCheck,
  RefreshCw,
  Lightbulb
} from 'lucide-react';

interface ConsultationResult {
  question: string;
  moralVerdict: string;
  verdictType: 'safe' | 'caution' | 'prohibited';
  legalConsiderations: string;
  socialImpact: string;
  actionSteps: string[];
}

const PRESET_QUERIES = [
  'Bolehkah saya screenshoot chat pribadi dan posting di Twitter/TikTok?',
  'Bagaimana menegur anggota keluarga yang sering membagikan hoaks di WhatsApp?',
  'Bolehkah memakai ChatGPT untuk membuat seluruh tugas skripsi saya?',
  'Apakah aman mengunggah foto anak kecil / keponakan di media sosial publik?'
];

export const EthicsConsultant: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<ConsultationResult | null>(null);

  const analyzeDilemma = (query: string) => {
    setIsAnalyzing(true);
    setInputText(query);

    // Smart heuristic analysis engine grounded in UU ITE, UU PDP & Netiquette
    setTimeout(() => {
      const q = query.toLowerCase();
      let res: ConsultationResult;

      if (q.includes('screenshoot') || q.includes('screenshot') || q.includes('tangkapan layar') || q.includes('chat pribadi')) {
        res = {
          question: query,
          moralVerdict: 'TIDAK DISARANKAN & BERPOTENSI PIDANA jika tanpa persetujuan eksplisit kedua belah pihak.',
          verdictType: 'prohibited',
          legalConsiderations: 'Dapat melanggar UU Perlindungan Data Pribadi No. 27/2022 (Pasal 65 & 67) mengenai penyebaran data pribadi tanpa hak, serta UU ITE Pasal 27 ayat 3 jika mencemarkan nama baik.',
          socialImpact: 'Menghancurkan rasa saling percaya dalam persahabatan/relasi profesional, serta berpotensi memicu cyberbullying massal.',
          actionSteps: [
            'Minta persetujuan (consent) tertulis dari pihak yang bersangkutan sebelum membagikan.',
            'Jika terpaksa untuk bukti pelaporan resmi kepolisian/HRD, kirim langsung ke instansi terkait secara privat, bukan ke media sosial.',
            'Jika untuk keperluan contoh edukatif, lakukan SENSOR TOTAL terhadap nama, foto profil, nomor HP, dan detail unik percakapan.'
          ]
        };
      } else if (q.includes('keluarga') || q.includes('hoaks') || q.includes('hoax') || q.includes('whatsapp') || q.includes('grup wa')) {
        res = {
          question: query,
          moralVerdict: 'WAJIB DIKLARIFIKASI DENGAN KESANTUNAN TINGGI (Jalur Pribadi).',
          verdictType: 'caution',
          legalConsiderations: 'Penyebaran hoaks diatur dalam UU ITE Pasal 28 ayat 1. Membiarkannya dapat membahayakan keselamatan kesehatan anggota keluarga.',
          socialImpact: 'Menegur di grup publik dapat membuat orang tua/kerabat merasa dipermalukan dan defensif.',
          actionSteps: [
            'Jangan mendebat langsung di grup besar dengan kata-kata meremehkan.',
            'Kirim pesan WhatsApp secara personal (Japri) dengan bahasa hormat: "Izin berbagi info resmi bantahan dari Kemenkes ya Om/Tante agar kita tetap aman."',
            'Sertakan tautan situs cek fakta kredibel seperti TurnBackHoax.id atau Kominfo.'
          ]
        };
      } else if (q.includes('chatgpt') || q.includes('ai') || q.includes('skripsi') || q.includes('tugas') || q.includes('esai')) {
        res = {
          question: query,
          moralVerdict: 'DIPERBOLEHKAN SEBAGAI ASISTEN RISET, DILARANG SEBAGAI JOKI KARYA ORISINAL.',
          verdictType: 'caution',
          legalConsiderations: 'Peraturan Mendikbudristek & Kode Etik Akademik mengkategorikan penggunaan teks AI tanpa sitasi sebagai pelanggaran integritas ilmiah (akademik fraud).',
          socialImpact: 'Menumpulkan kemampuan analisis kritis dan merusak kredibilitas gelar akademik yang disandang.',
          actionSteps: [
            'Gunakan AI untuk membuat kerangka (outline), mencari ide analogi, atau mengoreksi tata bahasa.',
            'Tulis ulang seluruh analisis dengan sintesis dan daya nalar pemikiranmu sendiri.',
            'Sertakan halaman pengakuan transparansi: "Studi ini memanfaatkan alat bantu AI [Nama Model] dalam proses kompilasi referensi."'
          ]
        };
      } else if (q.includes('anak') || q.includes('sharenting') || q.includes('bayi') || q.includes('balita')) {
        res = {
          question: query,
          moralVerdict: 'HARUS DIBATASI KETAT & WAJIB ATAS IZIN ORANG TUA KANDUNG.',
          verdictType: 'caution',
          legalConsiderations: 'Hak privasi anak dilindungi oleh Konvensi Hak Anak PBB dan UU Perlindungan Anak. Foto anak rawan disalahgunakan predator siber dan teknologi deepfake.',
          socialImpact: 'Anak kehilangan hak atas jejak digital mereka sendiri sebelum mereka cukup dewasa untuk membuat keputusan.',
          actionSteps: [
            'Jangan pernah mengunggah foto anak dalam keadaan minim busana atau saat mandi.',
            'Sensor seragam sekolah atau lokasi tempat bermain rutin anak.',
            'Gunakan fitur "Close Friends" atau kunci akun menjadi privat jika membagikan momen keluarga.'
          ]
        };
      } else {
        res = {
          question: query,
          moralVerdict: 'ANALISIS ETIKA: Perlu Evaluasi Kesadaran Diri & Dampak Ruang Publik.',
          verdictType: 'safe',
          legalConsiderations: 'Pastikan tindakanmu selaras dengan prinsip UU ITE (tidak menghina, tidak menyebar hoaks) dan UU PDP (tidak menyebar data orang lain tanpa izin).',
          socialImpact: 'Pertimbangkan: "Apakah saya bersedia jika perlakuan ini dilakukan orang lain kepada diri saya?" (Golden Rule).',
          actionSteps: [
            'Tanyakan pada dirimu 3 hal: Apakah ini Benar? Apakah ini Bermanfaat? Apakah ini Santun?',
            'Beri jeda 10 menit sebelum memposting sesuatu saat emosi sedang tidak stabil.',
            'Konsultasikan dengan rekan terpercaya jika kamu ragu akan keabsahan etikanya.'
          ]
        };
      }

      setResult(res);
      setIsAnalyzing(false);
    }, 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    analyzeDilemma(inputText);
  };

  return (
    <section id="konsultan" className="py-20 bg-neutral-100/60 border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 text-white text-xs font-semibold">
            <Bot className="w-3.5 h-3.5 text-amber-400" />
            <span>Asisten Cerdas Konsultasi Etika Digital</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Tanya AI: Panduan Tindakan Etis
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm">
            Punya dilema moral atau keraguan etis di media sosial dan internet? Tanyakan atau pilih kasus umum di bawah ini untuk memperoleh telaah etika dan hukum.
          </p>
        </div>

        {/* Preset Query Chips */}
        <div className="space-y-2 mb-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
            Studi Kasus Sering Ditanyakan:
          </span>
          <div className="flex flex-wrap gap-2">
            {PRESET_QUERIES.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => analyzeDilemma(preset)}
                className="text-left text-xs bg-white border border-neutral-200 hover:border-neutral-400 px-3 py-1.5 rounded-xl text-neutral-700 hover:text-neutral-950 transition-colors shadow-2xs"
              >
                💡 {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="relative mb-8">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Tuliskan dilema etika digitalmu... (Contoh: Bolehkah repost karya orang tanpa izin?)"
            className="w-full p-4 pr-14 rounded-2xl border border-neutral-300 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900"
          />
          <button
            type="submit"
            disabled={isAnalyzing || !inputText.trim()}
            className="absolute right-2.5 top-2.5 p-2.5 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            title="Analisis Kasus"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

        {/* Loading Spinner */}
        {isAnalyzing && (
          <div className="p-8 text-center bg-white rounded-2xl border border-neutral-200 space-y-3">
            <RefreshCw className="w-6 h-6 animate-spin text-neutral-800 mx-auto" />
            <p className="text-xs font-semibold text-neutral-600">
              Menganalisis dilema berdasarkan UU ITE, UU PDP & Kaidah Netiket...
            </p>
          </div>
        )}

        {/* Result Display */}
        {result && !isAnalyzing && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm space-y-6 animate-in fade-in-50">
            
            <div className="border-b border-neutral-100 pb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-1">
                Pertanyaan Kasus:
              </span>
              <h3 className="text-base sm:text-lg font-bold text-neutral-900">
                "{result.question}"
              </h3>
            </div>

            {/* Verdict Box */}
            <div className={`p-4 rounded-2xl border ${
              result.verdictType === 'prohibited'
                ? 'bg-red-50 border-red-200 text-red-900'
                : result.verdictType === 'caution'
                ? 'bg-amber-50 border-amber-200 text-amber-950'
                : 'bg-emerald-50 border-emerald-200 text-emerald-950'
            }`}>
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Kesimpulan Penilaian Etika:</span>
              </div>
              <p className="text-sm font-extrabold">{result.moralVerdict}</p>
            </div>

            {/* Legal & Social Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-1.5 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-neutral-900">
                  <Gavel className="w-4 h-4 text-neutral-700" />
                  <span>Tinjauan Hukum Indonesia:</span>
                </div>
                <p className="text-neutral-600 leading-relaxed">{result.legalConsiderations}</p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-1.5 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-neutral-900">
                  <Lightbulb className="w-4 h-4 text-neutral-700" />
                  <span>Dampak Psikososial:</span>
                </div>
                <p className="text-neutral-600 leading-relaxed">{result.socialImpact}</p>
              </div>
            </div>

            {/* Step by Step Solution */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                Langkah Solusi Bijak yang Direkomendasikan:
              </h4>
              <div className="space-y-2">
                {result.actionSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50 border border-neutral-200/80 text-xs text-neutral-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
