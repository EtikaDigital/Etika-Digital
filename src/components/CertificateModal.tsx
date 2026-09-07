import React, { useRef } from 'react';
import { Logo } from './Logo';
import {
  X,
  Printer,
  Download,
  Award,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  Hash
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 my-8">
        
        {/* Modal Controls Bar */}
        <div className="p-4 bg-neutral-900 text-white flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-bold tracking-wide">Sertifikat Resmi Duta Etika Digital</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Tutup Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Canvas Frame */}
        <div ref={certRef} className="p-8 sm:p-12 bg-neutral-50 print:p-0 print:bg-white">
          <div className="relative border-8 border-double border-neutral-900 bg-white p-8 sm:p-12 text-center shadow-lg space-y-6">
            
            {/* Corner geometric accents */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-neutral-900" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-neutral-900" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-neutral-900" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-neutral-900" />

            {/* Header Logo */}
            <div className="flex justify-center mb-2">
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
                {userName || 'Warga Digital Indonesia'}
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

        {/* Footer Note */}
        <div className="p-4 bg-neutral-100 border-t border-neutral-200 text-center text-xs text-neutral-600 no-print">
          💡 Tips: Klik "Cetak / Simpan PDF" lalu pilih printer tujuan "Save as PDF" untuk mengunduh sertifikat beresolusi tinggi.
        </div>

      </div>
    </div>
  );
};
