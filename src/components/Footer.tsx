import React from 'react';
import { Logo } from './Logo';
import {
  ShieldCheck,
  Heart,
  Globe2,
  ExternalLink,
  PhoneCall,
  FileCheck2,
  ShieldAlert
} from 'lucide-react';

interface FooterProps {
  onOpenPledge: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPledge }) => {
  return (
    <footer className="bg-[#030d1a] text-white border-t border-sky-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-sky-900/50">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white inline-block shadow-sm">
                <Logo variant="icon" size="sm" symbolColor="#ffffff" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-[0.14em] text-white leading-none">
                  ETIKA<span className="font-light tracking-[0.18em] text-sky-400">DIGITAL</span>
                </span>
                <span className="text-[10px] font-medium tracking-wider text-sky-300/80 mt-0.5">
                  GERAKAN LITERASI SIBER INDONESIA
                </span>
              </div>
            </div>

            <p className="text-xs text-sky-200/70 leading-relaxed max-w-sm">
              Membangun peradaban ruang maya yang bermartabat, melindungi data pribadi, membudayakan saring sebelum sharing, dan merawat persatuan di era kecerdasan artifisial.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="#aduan-siber"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-red-950/70 border border-red-700/60 hover:bg-red-900 text-xs font-bold text-red-200 transition-colors"
              >
                <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
                <span>Pusat Aduan Siber</span>
              </a>
              <button
                onClick={onOpenPledge}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:from-sky-300 hover:to-blue-400 text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>Ikrar Digital</span>
              </button>
            </div>
          </div>

          {/* Interactive Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-200">
              Fitur Interaktif
            </h4>
            <ul className="space-y-2 text-xs text-sky-200/70">
              <li><a href="#handbook" className="text-sky-400 font-semibold hover:text-sky-300 transition-colors">Handbook Pancasila (E-Book)</a></li>
              <li><a href="#pilar" className="hover:text-white transition-colors">4 Pilar Literasi</a></li>
              <li><a href="#dilema" className="hover:text-white transition-colors">Simulasi Uji Dilema</a></li>
              <li><a href="#jejak" className="hover:text-white transition-colors">Audit Jejak Digital</a></li>
              <li><a href="#deteksi" className="hover:text-white transition-colors">Spot Red Flags Hoaks</a></li>
              <li><a href="#netiket" className="hover:text-white transition-colors">10 Kaidah Netiket</a></li>
              <li><a href="#konsultan" className="hover:text-white transition-colors">Asisten AI Etika</a></li>
              <li><a href="#kuis" className="hover:text-white transition-colors">Kuis &amp; Sertifikasi</a></li>
              <li><a href="#aduan-siber" className="text-red-400 font-semibold hover:text-red-300 transition-colors">Kontak Aduan Siber</a></li>
            </ul>
          </div>

          {/* Legal Frameworks */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-200">
              Landasan Hukum
            </h4>
            <ul className="space-y-2 text-xs text-sky-200/70">
              <li>UU PDP No. 27 Tahun 2022 (Perlindungan Data Pribadi)</li>
              <li>UU ITE No. 1 Tahun 2024 (Perubahan Kedua)</li>
              <li>SE Menkominfo No. 9/2023 (Etika AI)</li>
              <li>Pedoman Netiket Virginia Shea (1994 - Present)</li>
              <li>Etika Pancasila Ruang Siber</li>
            </ul>
          </div>

          {/* Official Government Complaint Hotlines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-200">
              Kontak Aduan Siber RI
            </h4>
            <ul className="space-y-2 text-xs text-sky-200/70">
              <li className="flex items-center justify-between">
                <span>Polri (Patroli Siber):</span>
                <span className="font-mono text-white font-bold">110</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Satgas OJK (Pinjol):</span>
                <span className="font-mono text-white font-bold">157</span>
              </li>
              <li className="flex items-center justify-between">
                <span>KemenPPPA (SAPA):</span>
                <span className="font-mono text-white font-bold">129</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Komdigi (Aduan Konten):</span>
                <span className="font-mono text-white">aduankonten.id</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Cek Rekening Penipu:</span>
                <span className="font-mono text-white">cekrekening.id</span>
              </li>
              <li className="pt-1">
                <a href="#aduan-siber" className="text-xs text-red-400 hover:text-red-300 font-bold inline-flex items-center gap-1">
                  <span>Lihat semua hotline &amp; nomor WA →</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky-300/50">
          <p>© {new Date().getFullYear()} ETIKA DIGITAL. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-1">
            <span>Dirancang dengan integritas untuk warganet Indonesia yang cerdas, aman, &amp; beradab.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

