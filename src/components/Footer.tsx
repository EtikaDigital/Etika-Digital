import React from 'react';
import { Logo } from './Logo';
import {
  ShieldCheck,
  Heart,
  Globe2,
  ExternalLink,
  Download,
  FileCheck2
} from 'lucide-react';

interface FooterProps {
  onOpenLogoKit: () => void;
  onOpenPledge: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLogoKit, onOpenPledge }) => {
  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white text-black inline-block">
                <Logo variant="icon" size="sm" symbolColor="#000000" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-[0.14em] text-white leading-none">
                  ETIKA<span className="font-light tracking-[0.18em] text-neutral-400">DIGITAL</span>
                </span>
                <span className="text-[10px] font-medium tracking-wider text-neutral-400 mt-0.5">
                  GERAKAN LITERASI SIBER INDONESIA
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Membangun peradaban ruang maya yang bermartabat, melindungi data pribadi, membudayakan saring sebelum sharing, dan merawat persatuan di era kecerdasan artifisial.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={onOpenLogoKit}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-200 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-neutral-400" />
                <span>Unduh Logo ED</span>
              </button>
              <button
                onClick={onOpenPledge}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-black hover:bg-neutral-200 text-xs font-bold transition-colors"
              >
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>Ikrar Digital</span>
              </button>
            </div>
          </div>

          {/* Interactive Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Fitur Interaktif
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#pilar" className="hover:text-white transition-colors">4 Pilar Literasi</a></li>
              <li><a href="#dilema" className="hover:text-white transition-colors">Simulasi Uji Dilema</a></li>
              <li><a href="#jejak" className="hover:text-white transition-colors">Audit Jejak Digital</a></li>
              <li><a href="#deteksi" className="hover:text-white transition-colors">Spot Red Flags Hoaks</a></li>
              <li><a href="#netiket" className="hover:text-white transition-colors">10 Kaidah Netiket</a></li>
              <li><a href="#konsultan" className="hover:text-white transition-colors">Asisten AI Etika</a></li>
              <li><a href="#kuis" className="hover:text-white transition-colors">Kuis & Sertifikasi</a></li>
            </ul>
          </div>

          {/* Legal Frameworks */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Landasan Hukum
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>UU PDP No. 27 Tahun 2022 (Perlindungan Data Pribadi)</li>
              <li>UU ITE No. 1 Tahun 2024 (Perubahan Kedua)</li>
              <li>SE Menkominfo No. 9/2023 (Etika AI)</li>
              <li>Pedoman Netiket Virginia Shea (1994 - Present)</li>
              <li>Etika Pancasila Ruang Siber</li>
            </ul>
          </div>

          {/* Official Verification Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Portal Cek Fakta
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li className="flex items-center gap-1.5">
                <ExternalLink className="w-3 h-3 text-neutral-500" />
                <span>TurnBackHoax.id</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ExternalLink className="w-3 h-3 text-neutral-500" />
                <span>CekFakta.com</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ExternalLink className="w-3 h-3 text-neutral-500" />
                <span>AduanKonten.id (Kominfo)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ExternalLink className="w-3 h-3 text-neutral-500" />
                <span>BSSN.go.id (Keamanan Siber)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} ETIKA DIGITAL. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-1">
            <span>Dirancang dengan integritas untuk warganet Indonesia yang cerdas & beradab.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
