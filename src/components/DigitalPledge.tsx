import React, { useState } from 'react';
import { Logo } from './Logo';
import {
  FileCheck2,
  X,
  CheckCircle2,
  Sparkles,
  Share2,
  Download,
  Copy,
  Check,
  ShieldCheck
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

  if (!isOpen) return null;

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 my-8">
        
        {/* Header */}
        <div className="p-5 bg-neutral-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-bold">Ikrar Komitmen Warga Digital Beradab</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {!isSigned ? (
            <form onSubmit={handleSign} className="space-y-5">
              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-neutral-900">
                  Janji Keadaban di Ruang Siber
                </h3>
                <p className="text-xs text-neutral-600">
                  Pilihlah komitmen etika digital yang siap kamu pegang teguh dalam kehidupan bersosial media sehari-hari:
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
                      className={`p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-start gap-3 select-none ${
                        isChecked
                          ? 'border-neutral-900 bg-neutral-900 text-white'
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
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-600 block">
                  Nama Lengkap Penandatangan:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ketik Nama Anda (Contoh: Budi Santoso)..."
                  required
                  className="w-full p-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!name.trim() || selectedPledges.length === 0}
                className="w-full py-3.5 rounded-xl bg-neutral-900 text-white text-sm font-bold hover:bg-neutral-800 disabled:opacity-40 transition-all shadow-md"
              >
                Tandatangani Ikrar Sekarang
              </button>
            </form>
          ) : (
            /* Badge & Signed Result */
            <div className="space-y-6 text-center animate-in fade-in-50">
              <div className="p-8 rounded-3xl bg-neutral-50 border-2 border-neutral-900 space-y-4 relative overflow-hidden shadow-inner">
                
                <div className="flex justify-center">
                  <Logo variant="stacked" size="md" symbolColor="#000000" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 font-bold block">
                    PIAGAM KOMITMEN RESMI
                  </span>
                  <h4 className="text-2xl font-black text-neutral-950">
                    WARGA DIGITAL BERADAB
                  </h4>
                </div>

                <p className="text-sm font-bold text-neutral-800">
                  Diberikan kepada: <span className="underline decoration-neutral-900">{name}</span>
                </p>

                <div className="p-4 rounded-2xl bg-white border border-neutral-200 text-xs text-neutral-700 text-left space-y-1.5">
                  <span className="font-bold text-neutral-900 block text-[11px] uppercase tracking-wider">
                    5 Komitmen Emas yang Dipegang:
                  </span>
                  <ul className="list-disc pl-4 space-y-1 text-[11px] text-neutral-600">
                    <li>Saring sebelum Sharing & verifikasi fakta</li>
                    <li>Anti-Cyberbullying & anti-Doxing</li>
                    <li>Hormati privasi & batasan pribadi sesama</li>
                    <li>Integritas penggunaan Generative AI</li>
                    <li>Kesantunan komunikasi di seluruh ruang digital</li>
                  </ul>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Ikrar Aktif & Terverifikasi</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleShareCopy}
                  className="flex-1 py-3 rounded-xl bg-neutral-900 text-white text-xs font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
                >
                  {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{isCopied ? 'Teks Ikrar Berhasil Disalin!' : 'Salin Ikrar untuk Media Sosial'}</span>
                </button>
                <button
                  onClick={() => setIsSigned(false)}
                  className="px-4 py-3 rounded-xl border border-neutral-200 text-xs font-semibold text-neutral-700 hover:bg-neutral-100"
                >
                  Ubah Komitmen
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
