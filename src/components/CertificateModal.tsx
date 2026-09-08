import React, { useState, useRef } from 'react';
import { Logo } from './Logo';
import {
  X,
  Printer,
  Download,
  Award,
  ShieldCheck,
  Calendar,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  FileCheck2
} from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  score: number;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  userName,
  score,
}) => {
  const [isGeneratingImg, setIsGeneratingImg] = useState(false);
  const certRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const issueDate = new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date());

  const certNumber = `ED-CERT-${Math.floor(100000 + Math.random() * 900000)}`;

  const handlePrint = () => {
    window.print();
  };

  // High-Resolution 1400x1000 Canvas PNG Generator
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

      // 1. Background Canvas
      ctx.fillStyle = '#fdfdfb';
      ctx.fillRect(0, 0, width, height);

      // Subtle textured grid
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

      ctx.strokeStyle = '#d97706'; // Amber gold border
      ctx.lineWidth = 3;
      ctx.strokeRect(66, 66, width - 132, height - 132);

      ctx.strokeStyle = '#e5e5e5';
      ctx.lineWidth = 1;
      ctx.strokeRect(74, 74, width - 148, height - 148);

      // Corner geometric brackets
      const cornerSize = 28;
      ctx.strokeStyle = '#171717';
      ctx.lineWidth = 3;

      // Top-Left
      ctx.beginPath();
      ctx.moveTo(85, 85 + cornerSize);
      ctx.lineTo(85, 85);
      ctx.lineTo(85 + cornerSize, 85);
      ctx.stroke();

      // Top-Right
      ctx.beginPath();
      ctx.moveTo(width - 85 - cornerSize, 85);
      ctx.lineTo(width - 85, 85);
      ctx.lineTo(width - 85, 85 + cornerSize);
      ctx.stroke();

      // Bottom-Left
      ctx.beginPath();
      ctx.moveTo(85, height - 85 - cornerSize);
      ctx.lineTo(85, height - 85);
      ctx.lineTo(85 + cornerSize, height - 85);
      ctx.stroke();

      // Bottom-Right
      ctx.beginPath();
      ctx.moveTo(width - 85 - cornerSize, height - 85);
      ctx.lineTo(width - 85, height - 85);
      ctx.lineTo(width - 85, height - 85 - cornerSize);
      ctx.stroke();

      // 3. Header Symbol & Organization
      ctx.textAlign = 'center';

      // ED Monogram Logo Symbol
      ctx.fillStyle = '#171717';
      ctx.font = 'bold 36px monospace';
      ctx.fillText('[ ED ]', width / 2, 135);

      ctx.font = '900 20px sans-serif';
      ctx.fillStyle = '#171717';
      ctx.fillText('ETIKA DIGITAL INDONESIA', width / 2, 170);

      ctx.font = 'bold 13px sans-serif';
      ctx.fillStyle = '#737373';
      ctx.fillText('LEMBAGA PENGUATAN LITERASI & KEADABAN SIBER NASIONAL', width / 2, 192);

      // Certificate Title
      ctx.font = 'bold 15px sans-serif';
      ctx.fillStyle = '#d97706';
      ctx.fillText('SERTIFIKAT KOMPETENSI RESMI', width / 2, 235);

      ctx.font = '900 38px sans-serif';
      ctx.fillStyle = '#0a0a0a';
      ctx.fillText('DUTA ETIKA & KEADABAN DIGITAL', width / 2, 280);

      // Registration Number
      ctx.font = 'bold 14px monospace';
      ctx.fillStyle = '#737373';
      ctx.fillText(`No. Registrasi: ${certNumber}`, width / 2, 315);

      // Divider line
      ctx.strokeStyle = '#e5e5e5';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(350, 335);
      ctx.lineTo(width - 350, 335);
      ctx.stroke();

      // Recipient Pre-text
      ctx.font = 'italic 18px serif';
      ctx.fillStyle = '#525252';
      ctx.fillText('Dengan bangga diberikan kepada:', width / 2, 375);

      // User Full Name (Prominent)
      ctx.font = '900 46px sans-serif';
      ctx.fillStyle = '#0a0a0a';
      const displayName = (userName.trim() || 'Warga Digital Indonesia').toUpperCase();
      ctx.fillText(displayName, width / 2, 440);

      // Name underline
      ctx.strokeStyle = '#d97706';
      ctx.lineWidth = 3;
      const textWidth = ctx.measureText(displayName).width;
      ctx.beginPath();
      ctx.moveTo((width - textWidth) / 2 - 20, 458);
      ctx.lineTo((width + textWidth) / 2 + 20, 458);
      ctx.stroke();

      // Body Description Statement
      ctx.font = '16px sans-serif';
      ctx.fillStyle = '#404040';
      ctx.fillText(
        'Atas kelulusan evaluasi komprehensif dalam pemahaman Etika Siber, Netiket Internasional,',
        width / 2,
        515
      );
      ctx.fillText(
        'Perlindungan Data Pribadi (UU PDP No. 27/2022), serta komitmen aktif mewujudkan ruang internet',
        width / 2,
        545
      );
      ctx.fillText(
        `Indonesia yang santun, aman, dan berintegritas dengan nilai kelulusan ${score}%.`,
        width / 2,
        575
      );

      // 4. Competency Badges Box
      ctx.fillStyle = '#fafafa';
      ctx.fillRect(200, 620, width - 400, 110);
      ctx.strokeStyle = '#e5e5e5';
      ctx.lineWidth = 1;
      ctx.strokeRect(200, 620, width - 400, 110);

      ctx.font = 'bold 13px sans-serif';
      ctx.fillStyle = '#171717';
      ctx.fillText('KOMPETENSI TERUJI & TERVERIFIKASI:', width / 2, 650);

      ctx.font = '13px sans-serif';
      ctx.fillStyle = '#525252';
      ctx.fillText('• 10 Kaidah Netiket Virginia Shea  • Prinsip Saring Sebelum Sharing  • Anti-Doxing & Privasi', width / 2, 678);
      ctx.fillText('• Etika Penggunaan Generative AI  • Mitigasi Malware & Modus Penipuan Siber', width / 2, 704);

      // 5. Footer Signatures & Official Stamp
      // Left side: Verification Committee
      ctx.font = '13px monospace';
      ctx.fillStyle = '#737373';
      ctx.fillText(`Diterbitkan: ${issueDate}`, 340, 810);

      ctx.font = 'italic bold 18px serif';
      ctx.fillStyle = '#171717';
      ctx.fillText('Komite Verifikasi', 340, 860);

      ctx.strokeStyle = '#525252';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(240, 875);
      ctx.lineTo(440, 875);
      ctx.stroke();

      ctx.font = 'bold 13px sans-serif';
      ctx.fillStyle = '#171717';
      ctx.fillText('Dewan Etika Digital Indonesia', 340, 898);

      // Right side: Official Seal Stamp
      const sealX = width - 340;
      const sealY = 855;

      ctx.strokeStyle = '#d97706';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(sealX, sealY, 52, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = '#b45309';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(sealX, sealY, 46, 0, Math.PI * 2);
      ctx.stroke();

      ctx.font = 'bold 11px sans-serif';
      ctx.fillStyle = '#b45309';
      ctx.fillText('STATUS: VERIFIED', sealX, sealY - 12);
      ctx.font = '900 13px sans-serif';
      ctx.fillText('DIGITAL RESMI', sealX, sealY + 6);
      ctx.font = 'bold 10px monospace';
      ctx.fillText(`SKOR: ${score}%`, sealX, sealY + 22);

      // 6. Download Trigger
      const pngUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = pngUrl;
      const sanitizedName = (userName.trim() || 'warga').toLowerCase().replace(/[^a-z0-9]/g, '-');
      a.download = `sertifikat-duta-etika-digital-${sanitizedName}.png`;
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-neutral-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-300 my-4 sm:my-8 flex flex-col max-h-[92vh]">
        
        {/* Sticky Modal Top Bar with Clear Actions */}
        <div className="sticky top-0 z-20 px-4 sm:px-6 py-3.5 bg-neutral-900 text-white flex flex-wrap items-center justify-between gap-3 shadow-md no-print border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-200 hover:text-white transition-colors"
              title="Kembali ke tampilan kuis"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali</span>
            </button>
            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-neutral-700">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold tracking-wide">Sertifikat Resmi Duta Etika Digital</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadCertificatePng}
              disabled={isGeneratingImg}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-400 text-neutral-950 hover:bg-amber-300 text-xs font-bold transition-all shadow-xs disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{isGeneratingImg ? 'Menyiapkan...' : 'Download (PNG HD)'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Cetak / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors ml-1"
              aria-label="Tutup Modal"
              title="Tutup & Kembali"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Canvas Frame (Scrollable on small viewports) */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-8 bg-neutral-100/70">
          <div ref={certRef} className="bg-white rounded-2xl p-6 sm:p-12 print:p-0 print:bg-white shadow-sm">
            <div className="relative border-8 border-double border-neutral-900 bg-white p-6 sm:p-12 text-center shadow-lg space-y-6">
              
              {/* Corner geometric accents */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-neutral-900" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-neutral-900" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-neutral-900" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-neutral-900" />

              {/* Header Logo */}
              <div className="flex justify-center mb-1">
                <Logo variant="stacked" size="md" symbolColor="#000000" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
                  SERTIFIKAT KOMPETENSI RESMI
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
                  DUTA ETIKA & KEADABAN DIGITAL
                </h2>
                <p className="text-xs text-neutral-500 font-mono">
                  No. Registrasi: {certNumber}
                </p>
              </div>

              <div className="py-2">
                <p className="text-xs sm:text-sm text-neutral-600 font-serif italic">
                  Dengan bangga diberikan kepada:
                </p>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 border-b-2 border-neutral-300 pb-2 inline-block min-w-[280px] mt-2 font-sans">
                  {userName.trim() || 'Warga Digital Indonesia'}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-neutral-700 max-w-2xl mx-auto leading-relaxed">
                Atas kelulusan evaluasi komprehensif dalam pemahaman <strong>Etika Siber</strong>, <strong>Netiket Internasional</strong>, <strong>Perlindungan Data Pribadi (UU PDP)</strong>, serta komitmen aktif mewujudkan ruang internet Indonesia yang santun, aman, dan berintegritas dengan nilai kelulusan <span className="font-bold text-neutral-900 font-mono">{score}%</span>.
              </p>

              {/* Signatures & Badges */}
              <div className="pt-6 grid grid-cols-2 gap-8 max-w-lg mx-auto border-t border-neutral-200">
                <div className="text-center space-y-1">
                  <div className="font-mono text-[11px] text-neutral-500 flex items-center justify-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{issueDate}</span>
                  </div>
                  <div className="h-10 flex items-center justify-center">
                    <span className="font-serif italic font-bold text-base text-neutral-800">Komite Verifikasi</span>
                  </div>
                  <div className="border-t border-neutral-400 pt-1 text-[11px] font-bold text-neutral-900">
                    Dewan Etika Digital Indonesia
                  </div>
                </div>

                <div className="text-center space-y-1">
                  <div className="font-mono text-[11px] text-neutral-500 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Status: Terverifikasi</span>
                  </div>
                  <div className="h-10 flex items-center justify-center">
                    <span className="font-mono font-black text-xs px-2.5 py-1 bg-neutral-900 text-white rounded">
                      DIGITAL VERIFIED
                    </span>
                  </div>
                  <div className="border-t border-neutral-400 pt-1 text-[11px] font-bold text-neutral-900">
                    Sistem Sertifikasi Terpadu
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Sticky Modal Bottom Action Bar */}
        <div className="sticky bottom-0 z-20 p-4 bg-white border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg no-print">
          <div className="text-xs text-neutral-600 text-center sm:text-left">
            💡 <strong>Format Lengkap:</strong> Klik <strong>Download</strong> untuk menyimpan gambar PNG HD atau <strong>Cetak/PDF</strong>.
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-700 text-xs font-bold transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali</span>
            </button>

            <button
              onClick={handleDownloadCertificatePng}
              disabled={isGeneratingImg}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 text-neutral-950 hover:bg-amber-300 text-xs font-extrabold transition-all shadow-sm disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{isGeneratingImg ? 'Memproses...' : 'Download Sertifikat (PNG)'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

