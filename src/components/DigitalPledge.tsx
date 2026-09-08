import React, { useState, useRef } from 'react';
import { Logo } from './Logo';
import {
  FileCheck2,
  X,
  CheckCircle2,
  Share2,
  Download,
  Copy,
  Check,
  ShieldCheck,
  Printer,
  Calendar,
  Award,
  Sparkles
} from 'lucide-react';

interface DigitalPledgeProps {
  isOpen: boolean;
  onClose: () => void;
}

const PLEDGE_ITEMS = [
  'Saya berkomitmen menerapkan prinsip "Saring sebelum Sharing" dan memverifikasi kebenaran setiap informasi.',
  'Saya menolak segala bentuk perundungan siber (cyberbullying), ujaran kebencian (hate speech), dan doxing.',
  'Saya akan menghormati privasi orang lain dan tidak menyebarkan pesan atau data pribadi tanpa izin eksplisit.',
  'Saya berkomitmen menggunakan teknologi kecerdasan buatan (GenAI) secara jujur, bertanggung jawab, dan transparan.',
  'Saya akan senantiasa menjaga kesantunan bertutur kata dan menghargai keberagaman di seluruh ruang digital.'
];

export const DigitalPledge: React.FC<DigitalPledgeProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [selectedPledges, setSelectedPledges] = useState<number[]>([0, 1, 2, 3, 4]);
  const [isSigned, setIsSigned] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isGeneratingImg, setIsGeneratingImg] = useState(false);
  const certPrintRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const issueDate = new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date());

  const certNumber = `IKRAR-${Math.floor(100000 + Math.random() * 900000)}`;

  const handleTogglePledge = (idx: number) => {
    setSelectedPledges((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleSign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || selectedPledges.length === 0) return;
    setIsSigned(true);
  };

  const handleShareCopy = () => {
    const text = `Saya, ${name}, telah menandatangani Ikrar Warga Digital Beradab bersama ETIKA DIGITAL Indonesia: Menolak hoaks, menjaga privasi, dan merawat keadaban di ruang siber! #EtikaDigital #WargaDigitalBeradab`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  // High-Resolution Canvas PNG Generator
  const handleDownloadCertificatePng = () => {
    setIsGeneratingImg(true);

    try {
      const canvas = document.createElement('canvas');
      const width = 1400;
      const height = 1000;
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        setIsGeneratingImg(false);
        return;
      }

      // 1. Background
      ctx.fillStyle = '#fdfdfb';
      ctx.fillRect(0, 0, width, height);

      // Subtle background grid/texture
      ctx.fillStyle = '#f5f5f0';
      for (let i = 40; i < width - 40; i += 40) {
        ctx.fillRect(i, 40, 1, height - 80);
      }
      for (let j = 40; j < height - 40; j += 40) {
        ctx.fillRect(40, j, width - 80, 1);
      }

      // White inner card
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(50, 50, width - 100, height - 100);

      // 2. Double Certificate Borders
      ctx.strokeStyle = '#171717';
      ctx.lineWidth = 10;
      ctx.strokeRect(50, 50, width - 100, height - 100);

      ctx.strokeStyle = '#d97706'; // Amber gold
      ctx.lineWidth = 3;
      ctx.strokeRect(66, 66, width - 132, height - 132);

      ctx.strokeStyle = '#e5e5e5';
      ctx.lineWidth = 1;
      ctx.strokeRect(74, 74, width - 148, height - 148);

      // Corner ornaments
      const corners = [
        [80, 80],
        [width - 80, 80],
        [80, height - 80],
        [width - 80, height - 80]
      ];
      ctx.fillStyle = '#171717';
      corners.forEach(([cx, cy]) => {
        ctx.beginPath();
        ctx.arc(cx, cy, 6, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Header Typography
      ctx.textAlign = 'center';
      
      // Top Subtitle
      ctx.font = 'bold 16px sans-serif';
      ctx.fillStyle = '#737373';
      ctx.fillText('GERAKAN LITERASI & ETIKA SIBER INDONESIA', width / 2, 130);

      // Certificate Title
      ctx.font = '900 38px sans-serif';
      ctx.fillStyle = '#0a0a0a';
      ctx.fillText('PIAGAM KOMITMEN RESMI', width / 2, 185);

      // Gold Banner Subtitle
      ctx.font = '800 24px sans-serif';
      ctx.fillStyle = '#b45309';
      ctx.fillText('WARGA DIGITAL BERADAB', width / 2, 225);

      // Registration Number
      ctx.font = 'bold 14px monospace';
      ctx.fillStyle = '#a3a3a3';
      ctx.fillText(`NO. REGISTRASI: ${certNumber}`, width / 2, 260);

      // Divider line
      ctx.strokeStyle = '#e5e5e5';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(350, 280);
      ctx.lineTo(width - 350, 280);
      ctx.stroke();

      // Recipient Pre-text
      ctx.font = 'italic 18px serif';
      ctx.fillStyle = '#525252';
      ctx.fillText('Piagam komitmen ini dengan penuh hormat dianugerahkan kepada:', width / 2, 320);

      // User Full Name (Prominent)
      ctx.font = '900 44px sans-serif';
      ctx.fillStyle = '#0a0a0a';
      const displayName = name.toUpperCase();
      ctx.fillText(displayName, width / 2, 380);

      // Name underline
      ctx.strokeStyle = '#0a0a0a';
      ctx.lineWidth = 3;
      const textWidth = ctx.measureText(displayName).width;
      ctx.beginPath();
      ctx.moveTo((width - textWidth) / 2 - 20, 395);
      ctx.lineTo((width + textWidth) / 2 + 20, 395);
      ctx.stroke();

      // Declaration statement
      ctx.font = '16px sans-serif';
      ctx.fillStyle = '#404040';
      ctx.fillText(
        'Atas ikrar kesungguhan dan komitmen teguh untuk senantiasa mengamalkan',
        width / 2,
        440
      );
      ctx.fillText(
        'prinsip etika siber, menjaga privasi sesama, serta merawat keadaban di ruang digital Indonesia.',
        width / 2,
        468
      );

      // 4. Box of Commitments
      ctx.fillStyle = '#fafafa';
      ctx.fillRect(180, 505, width - 360, 240);
      ctx.strokeStyle = '#e5e5e5';
      ctx.lineWidth = 1;
      ctx.strokeRect(180, 505, width - 360, 240);

      ctx.textAlign = 'left';
      ctx.font = 'bold 15px sans-serif';
      ctx.fillStyle = '#171717';
      ctx.fillText('5 KOMITMEN EMAS YANG DIIKRARKAN:', 210, 540);

      ctx.font = '14px sans-serif';
      ctx.fillStyle = '#404040';
      const commitments = [
        '1. Menerapkan prinsip "Saring sebelum Sharing" & selalu memverifikasi kebenaran fakta.',
        '2. Menolak perundungan siber (cyberbullying), ujaran kebencian, pemerasan, dan doxing.',
        '3. Menghormati privasi sesama & tidak menyebarkan data pribadi tanpa izin (UU PDP).',
        '4. Menggunakan teknologi kecerdasan buatan (GenAI) secara jujur, transparan, dan berintegritas.',
        '5. Menjaga kesantunan bertutur kata & merawat persatuan di seluruh platform ruang maya.'
      ];

      commitments.forEach((item, index) => {
        ctx.fillText(item, 210, 575 + index * 32);
      });

      // 5. Footer & Seal
      ctx.textAlign = 'center';
      // Left side: Date & Authority
      ctx.font = '13px monospace';
      ctx.fillStyle = '#737373';
      ctx.fillText(`Diterbitkan: ${issueDate}`, 320, 830);

      ctx.font = 'bold 15px sans-serif';
      ctx.fillStyle = '#171717';
      ctx.fillText('Dewan Keadaban Siber', 320, 885);
      ctx.font = '12px sans-serif';
      ctx.fillStyle = '#737373';
      ctx.fillText('Komite Pengawal Etika Digital', 320, 905);

      ctx.strokeStyle = '#525252';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(220, 865);
      ctx.lineTo(420, 865);
      ctx.stroke();

      // Right side: Official Seal Stamp
      const sealX = width - 320;
      const sealY = 860;

      ctx.strokeStyle = '#b45309';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(sealX, sealY, 48, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = '#d97706';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(sealX, sealY, 42, 0, Math.PI * 2);
      ctx.stroke();

      ctx.font = 'bold 11px sans-serif';
      ctx.fillStyle = '#b45309';
      ctx.fillText('TERVERIFIKASI', sealX, sealY - 8);
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('RESMI DIGITAL', sealX, sealY + 10);
      ctx.font = 'bold 9px monospace';
      ctx.fillText('2026 / ID-SAFE', sealX, sealY + 24);

      // 6. Download Trigger
      const pngUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = pngUrl;
      const sanitizedName = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      a.download = `piagam-ikrar-digital-${sanitizedName || 'warga'}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      console.error('Failed to generate certificate:', err);
    } finally {
      setIsGeneratingImg(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 my-8">
        
        {/* Header */}
        <div className="p-5 bg-neutral-900 text-white flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-bold">Ikrar Komitmen Warga Digital Beradab</span>
          </div>
          <div className="flex items-center gap-2">
            {isSigned && (
              <>
                <button
                  onClick={handleDownloadCertificatePng}
                  disabled={isGeneratingImg}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 text-neutral-950 text-xs font-bold hover:bg-amber-300 disabled:opacity-50 transition-all shadow-xs"
                  title="Unduh Piagam Format Gambar HD (PNG)"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isGeneratingImg ? 'Memproses...' : 'Unduh Gambar (PNG)'}</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 text-xs font-semibold transition-colors"
                  title="Cetak atau Simpan PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Cetak / PDF</span>
                </button>
              </>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
          {!isSigned ? (
            <form onSubmit={handleSign} className="space-y-5">
              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-neutral-900">
                  Janji Keadaban di Ruang Siber
                </h3>
                <p className="text-xs text-neutral-600">
                  Pilihlah komitmen etika digital yang siap kamu pegang teguh dalam kehidupan bersosial media sehari-hari. Setelah menandatangani, kamu dapat langsung <strong>mengunduh Piagam Penghargaan Resmi</strong> dalam resolusi tinggi.
                </p>
              </div>

              {/* Pledge Checkbox list */}
              <div className="space-y-2.5">
                {PLEDGE_ITEMS.map((item, idx) => {
                  const isChecked = selectedPledges.includes(idx);
                  return (
                    <div
                      key={idx}
                      onClick={() => handleTogglePledge(idx)}
                      className={`p-3.5 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-start gap-3 select-none ${
                        isChecked
                          ? 'border-neutral-900 bg-neutral-900 text-white shadow-xs'
                          : 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                      }`}
                    >
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isChecked ? 'text-amber-400' : 'text-neutral-400'
                        }`}
                      />
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>

              {/* Name Input */}
              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                  Nama Lengkap untuk Dicetak pada Piagam:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ketik Nama Lengkap Anda (Contoh: Budi Santoso)..."
                  required
                  className="w-full p-3.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 shadow-xs"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!name.trim() || selectedPledges.length === 0}
                className="w-full py-4 rounded-xl bg-neutral-900 text-white text-sm font-bold hover:bg-neutral-800 disabled:opacity-40 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Tandatangani Ikrar & Terbitkan Piagam</span>
              </button>
            </form>
          ) : (
            /* Badge & Signed Result (Certificate View) */
            <div className="space-y-6 text-center animate-in fade-in-50">
              
              {/* Notice Banner */}
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center justify-between gap-2 no-print">
                <div className="flex items-center gap-2 text-left">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Piagam Komitmen Berhasil Diterbitkan! Anda dapat mengunduh atau mencetaknya sekarang.</span>
                </div>
                <button
                  onClick={handleDownloadCertificatePng}
                  disabled={isGeneratingImg}
                  className="px-3 py-1.5 rounded-lg bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 shrink-0 transition-colors shadow-2xs"
                >
                  {isGeneratingImg ? 'Menyimpan...' : 'Unduh PNG'}
                </button>
              </div>

              {/* Printable Piagam Container */}
              <div
                ref={certPrintRef}
                className="p-8 sm:p-10 rounded-3xl bg-neutral-50 border-4 border-double border-neutral-900 space-y-5 relative overflow-hidden shadow-lg print:border-neutral-900 print:bg-white print:p-8"
              >
                {/* Corner geometric marks */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-neutral-900" />
                <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-neutral-900" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-neutral-900" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-neutral-900" />

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500 font-bold block">
                    GERAKAN LITERASI & ETIKA SIBER INDONESIA
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
                    PIAGAM KOMITMEN RESMI
                  </h4>
                  <span className="text-sm font-bold text-amber-700 block tracking-wide">
                    WARGA DIGITAL BERADAB
                  </span>
                  <p className="text-[11px] font-mono text-neutral-400">
                    No. Registrasi: {certNumber}
                  </p>
                </div>

                <div className="py-2">
                  <p className="text-xs text-neutral-600 font-serif italic">
                    Diberikan dengan penuh kehormatan kepada:
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-black text-neutral-950 border-b-2 border-neutral-900 pb-1 inline-block min-w-[240px] mt-1">
                    {name}
                  </h3>
                </div>

                <p className="text-xs text-neutral-700 max-w-xl mx-auto leading-relaxed">
                  Telah berikrar secara sadar untuk senantiasa mematuhi kaidah netiket, menjunjung tinggi nilai-nilai keadaban, dan melindungi ruang siber Indonesia dengan mengamalkan:
                </p>

                {/* The 5 Commitments Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200 text-xs text-neutral-700 text-left space-y-2 shadow-2xs">
                  <span className="font-bold text-neutral-900 block text-[11px] uppercase tracking-wider">
                    5 Janji Keadaban yang Dipegang Teguh:
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-amber-600">✓</span>
                      <span>Menerapkan prinsip "Saring sebelum Sharing" & memverifikasi kebenaran setiap informasi.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-amber-600">✓</span>
                      <span>Menolak perundungan siber (cyberbullying), ujaran kebencian, pemerasan, dan doxing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-amber-600">✓</span>
                      <span>Menghormati privasi sesama & tidak menyebarkan pesan/data pribadi tanpa izin (UU PDP).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-amber-600">✓</span>
                      <span>Menggunakan teknologi AI secara jujur, transparan, dan menjunjung orisinalitas karya.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-amber-600">✓</span>
                      <span>Menjaga kesantunan komunikasi & merawat kerukunan di seluruh ruang digital.</span>
                    </li>
                  </ul>
                </div>

                {/* Sign & Seal row */}
                <div className="pt-4 grid grid-cols-2 gap-6 max-w-md mx-auto border-t border-neutral-200">
                  <div className="text-center space-y-1">
                    <span className="text-[10px] font-mono text-neutral-500 block">{issueDate}</span>
                    <div className="h-8 flex items-center justify-center">
                      <span className="font-serif italic font-bold text-xs text-neutral-800">Komite Keadaban</span>
                    </div>
                    <div className="border-t border-neutral-300 pt-1 text-[10px] font-bold text-neutral-900">
                      Dewan Etika Digital Indonesia
                    </div>
                  </div>

                  <div className="text-center space-y-1">
                    <span className="text-[10px] font-mono text-emerald-600 font-bold block">STATUS: AKTIF</span>
                    <div className="h-8 flex items-center justify-center">
                      <span className="font-mono font-black text-[10px] px-2 py-0.5 bg-neutral-900 text-white rounded">
                        VERIFIED CITIZEN
                      </span>
                    </div>
                    <div className="border-t border-neutral-300 pt-1 text-[10px] font-bold text-neutral-900">
                      Sistem Verifikasi Nasional
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons Bar */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 no-print">
                <button
                  onClick={handleDownloadCertificatePng}
                  disabled={isGeneratingImg}
                  className="flex-1 py-3.5 rounded-xl bg-neutral-900 text-white text-xs font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>{isGeneratingImg ? 'Sedang Memproses...' : 'Unduh Piagam (PNG HD)'}</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="px-4 py-3.5 rounded-xl border border-neutral-300 bg-white text-xs font-bold text-neutral-800 hover:bg-neutral-50 transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <Printer className="w-4 h-4 text-neutral-600" />
                  <span>Cetak / PDF</span>
                </button>

                <button
                  onClick={handleShareCopy}
                  className="px-4 py-3.5 rounded-xl border border-neutral-300 bg-white text-xs font-semibold text-neutral-700 hover:bg-neutral-50 transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{isCopied ? 'Tersalin!' : 'Salin Medsos'}</span>
                </button>

                <button
                  onClick={() => setIsSigned(false)}
                  className="px-3 py-3.5 rounded-xl text-xs font-medium text-neutral-500 hover:text-neutral-900"
                >
                  Ubah
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};

