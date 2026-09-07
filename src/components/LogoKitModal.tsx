import React, { useState } from 'react';
import { Logo } from './Logo';
import {
  Download,
  X,
  Copy,
  Check,
  Sparkles,
  Layers,
  Palette,
  FileCode,
  Image as ImageIcon
} from 'lucide-react';

interface LogoKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoKitModal: React.FC<LogoKitModalProps> = ({ isOpen, onClose }) => {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  if (!isOpen) return null;

  const rawSvgCode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
  <rect width="600" height="600" fill="#ffffff" />
  <g transform="translate(0, 0)">
    <!-- Monogram ED -->
    <path d="M 285 170 L 220 170 A 65 65 0 0 0 220 300 L 285 300 L 285 272 L 220 272 A 37 37 0 0 1 220 198 L 285 198 Z" fill="#000000" />
    <path d="M 285 221 L 225 221 A 14 14 0 0 0 225 249 L 285 249 Z" fill="#000000" />
    <path fill-rule="evenodd" d="M 300 170 L 375 170 A 65 65 0 0 1 375 300 L 300 300 Z M 328 198 L 370 198 A 37 37 0 0 1 370 272 L 328 272 Z" fill="#000000" />
    <g transform="translate(300, 355)" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif">
      <text font-size="34" letter-spacing="4" fill="#000000">
        <tspan font-weight="700">ETIKA</tspan><tspan font-weight="300">DIGITAL</tspan>
      </text>
    </g>
  </g>
</svg>`;

  const handleCopySvg = () => {
    navigator.clipboard.writeText(rawSvgCode);
    setCopiedFormat('svg-code');
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  const handleDownloadSvg = () => {
    const blob = new Blob([rawSvgCode], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'etika-digital-logo.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadPng = (darkBg = false) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1000;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background
    ctx.fillStyle = darkBg ? '#0a0a0a' : '#ffffff';
    ctx.fillRect(0, 0, 1000, 1000);

    const img = new Image();
    const svgToRender = darkBg
      ? rawSvgCode.replace(/fill="#000000"/g, 'fill="#ffffff"').replace(/fill="#ffffff"/, 'fill="#0a0a0a"')
      : rawSvgCode;

    const svgBlob = new Blob([svgToRender], { type: 'image/svg+xml;charset=utf-8' });
    const blobURL = URL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.drawImage(img, 0, 0, 1000, 1000);
      const pngUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = pngUrl;
      a.download = darkBg ? 'etika-digital-logo-dark.png' : 'etika-digital-logo-light.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobURL);
    };
    img.src = blobURL;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 my-8">
        
        {/* Header */}
        <div className="p-5 bg-neutral-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-sm font-bold">Logo & Brand Identity Kit — Etika Digital</h3>
              <p className="text-[11px] text-neutral-400">Aset Vektor, Panduan Penggunaan & Unduh Resmi</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Logo Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Light Mode Preview */}
            <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 flex flex-col items-center justify-center space-y-4 text-center">
              <Logo variant="stacked" size="lg" symbolColor="#000000" textColor="text-neutral-900" />
              <div className="pt-4 border-t border-neutral-200 w-full flex items-center justify-between text-xs">
                <span className="font-semibold text-neutral-700">Versi Standar (Light)</span>
                <button
                  onClick={() => handleDownloadPng(false)}
                  className="inline-flex items-center gap-1 font-bold text-neutral-900 hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh PNG</span>
                </button>
              </div>
            </div>

            {/* Dark Mode Preview */}
            <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col items-center justify-center space-y-4 text-center">
              <Logo variant="stacked" size="lg" symbolColor="#ffffff" textColor="text-white" />
              <div className="pt-4 border-t border-neutral-800 w-full flex items-center justify-between text-xs text-neutral-300">
                <span className="font-semibold text-neutral-300">Versi Inverted (Dark)</span>
                <button
                  onClick={() => handleDownloadPng(true)}
                  className="inline-flex items-center gap-1 font-bold text-amber-400 hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh PNG</span>
                </button>
              </div>
            </div>

          </div>

          {/* Quick Download & Copy Strip */}
          <div className="p-5 rounded-2xl bg-neutral-100 border border-neutral-200 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-neutral-900 block">Unduh Format Master Vektor (SVG):</span>
              <p className="text-[11px] text-neutral-600">Resolusi tanpa batas untuk kebutuhan cetak, web, aplikasi, dan banner.</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopySvg}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-neutral-300 bg-white text-xs font-semibold text-neutral-800 hover:bg-neutral-50 shadow-2xs"
              >
                {copiedFormat === 'svg-code' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedFormat === 'svg-code' ? 'Kode Tersalin!' : 'Salin Kode SVG'}</span>
              </button>
              <button
                onClick={handleDownloadSvg}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 text-white text-xs font-bold hover:bg-neutral-800 shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh File .SVG</span>
              </button>
            </div>
          </div>

          {/* Philosophy & Brand Specs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Meaning & Geometry */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Filosofi Desain Monogram "ED"</span>
              </h4>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Monogram <strong>ED</strong> memadukan kurva kapsul geometris huruf <strong>E</strong> dan <strong>D</strong>. Bentuk lengkung stadium melambangkan kelenturan adaptasi terhadap evolusi teknologi, sementara garis lurus horizontal merepresentasikan keteguhan prinsip moral dan batas etis yang tidak boleh dilanggar di dunia siber.
              </p>
            </div>

            {/* Colors & Typography */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                <Palette className="w-4 h-4 text-neutral-700" />
                <span>Palet Warna & Tipografi Resmi</span>
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-50 border border-neutral-200">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-black border border-neutral-300 inline-block" />
                    <span className="font-semibold text-neutral-900">Cyber Black</span>
                  </div>
                  <span className="font-mono text-neutral-600">#000000 / #0a0a0a</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-50 border border-neutral-200">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-white border border-neutral-300 inline-block" />
                    <span className="font-semibold text-neutral-900">Pure White</span>
                  </div>
                  <span className="font-mono text-neutral-600">#ffffff</span>
                </div>
                <div className="p-2 text-[11px] text-neutral-600">
                  Font: <strong>Plus Jakarta Sans</strong> (Uppercase, ETIKA 700 / DIGITAL 300).
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
