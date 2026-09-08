import React, { useState, useRef } from 'react';
import { 
  Download, 
  Eye, 
  Check, 
  Cloud, 
  ExternalLink, 
  Upload, 
  FileText,
  Sparkles,
  Info
} from 'lucide-react';
import { HANDBOOK_PAGES, HandbookPage, getPageLabel, getPageImageFileName } from '../data/handbookData';

interface HandbookPageSheetProps {
  pageNumber: number; // 1 to 20
  scale?: number;
  className?: string;
  onSelect?: () => void;
  isInteractive?: boolean;
  driveImageUrl?: string; // Direct URL from Google Drive or local Drive upload
  driveFolderUrl?: string;
  onUploadSinglePage?: (file: File, pageNumber: number) => void;
}

export const HandbookPageSheet: React.FC<HandbookPageSheetProps> = ({
  pageNumber,
  scale = 1,
  className = '',
  onSelect,
  isInteractive = true,
  driveImageUrl,
  driveFolderUrl,
  onUploadSinglePage
}) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const page: HandbookPage = 
    HANDBOOK_PAGES.find(p => p.pageNumber === pageNumber) || 
    HANDBOOK_PAGES[0];

  const label = page.pageLabel || getPageLabel(pageNumber);
  const fileName = page.imageFileName || getPageImageFileName(pageNumber);

  const handleCopyTag = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(page.hashtag);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!driveImageUrl) return;
    const a = document.createElement('a');
    a.href = driveImageUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && onUploadSinglePage) {
      onUploadSinglePage(e.target.files[0], pageNumber);
    }
  };

  const driveSearchUrl = driveFolderUrl || `https://drive.google.com/drive/search?q=${encodeURIComponent(fileName)}`;

  return (
    <div 
      id={`handbook-page-sheet-${pageNumber}`}
      onClick={onSelect}
      className={`relative group bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-sky-500/20 transition-all duration-300 ${
        onSelect ? 'cursor-pointer hover:border-sky-400 hover:shadow-sky-500/10' : ''
      } ${className}`}
      style={{
        aspectRatio: '1200 / 1700',
        width: '100%',
        maxWidth: `${780 * scale}px`
      }}
    >
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileInputChange} 
        accept="image/*" 
        className="hidden" 
      />

      {/* CASE 1: DRIVE IMAGE IS CONNECTED / UPLOADED */}
      {driveImageUrl && !imageError ? (
        <>
          {/* Loading Skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-b from-sky-950/60 via-slate-900 to-sky-950/80 animate-pulse flex flex-col items-center justify-center p-6 text-center z-0">
              <Cloud className="w-12 h-12 text-sky-400/40 mb-3 animate-bounce" />
              <p className="text-sky-200 font-bold text-sm">Memuat Gambar Asli dari Drive...</p>
              <p className="text-sky-400/70 text-xs mt-1">Halaman {label}: {fileName}</p>
            </div>
          )}

          {/* Authentic Drive Image */}
          <img
            src={driveImageUrl}
            alt={`Handbook Halaman ${label}: ${page.title}`}
            referrerPolicy="no-referrer"
            loading={pageNumber <= 3 ? 'eager' : 'lazy'}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-contain select-none transition-opacity duration-300 relative z-10 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Top Floating Badge */}
          <div className="absolute top-3 left-3 z-20 flex items-center gap-2 pointer-events-none">
            <span className="bg-neutral-950/85 backdrop-blur-md text-sky-400 border border-sky-400/40 text-[11px] font-black px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
              <Cloud className="w-3 h-3 text-sky-400" />
              <span>Hal. {label}</span>
            </span>
            <span className="hidden sm:inline-block bg-neutral-950/80 backdrop-blur-md text-neutral-200 border border-neutral-700/60 text-[11px] font-medium px-3 py-1 rounded-full truncate max-w-[220px]">
              {page.title}
            </span>
          </div>

          {/* Hover Action Overlay */}
          {isInteractive && (
            <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-neutral-950/95 via-neutral-950/75 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-between gap-2">
              <button
                onClick={handleCopyTag}
                title="Salin Tagar Resmi"
                className="text-[11px] text-sky-300 font-mono hover:text-white flex items-center gap-1.5 transition-colors bg-white/10 hover:bg-white/20 px-2.5 py-1.5 rounded-lg backdrop-blur-sm cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : null}
                <span>{copied ? 'Tersalin!' : page.hashtag}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownload}
                  title={`Unduh ${fileName}`}
                  className="bg-sky-500 hover:bg-sky-400 text-neutral-950 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Unduh PNG</span>
                </button>

                <a
                  href={driveSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  title="Lihat Berkas Ini di Google Drive"
                  className="bg-neutral-800 hover:bg-neutral-700 text-sky-300 hover:text-white p-1.5 rounded-lg transition-colors border border-neutral-700 flex items-center gap-1 text-xs px-2.5"
                >
                  <Cloud className="w-3.5 h-3.5 text-sky-400" />
                  <span className="hidden md:inline text-[11px]">Buka Drive</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </>
      ) : (
        /* CASE 2: GOOGLE DRIVE PLACEHOLDER (NOT AI-GENERATED) */
        <div className="absolute inset-0 bg-neutral-950 border border-sky-500/20 p-6 flex flex-col justify-between text-white overflow-hidden">
          {/* Ambient header glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3 relative z-10">
            <div className="flex items-center gap-2">
              <span className="bg-sky-500/20 text-sky-400 border border-sky-400/40 text-xs font-black px-3 py-1 rounded-full flex items-center gap-1.5">
                <Cloud className="w-3.5 h-3.5 text-sky-400" />
                <span>Halaman {label}</span>
              </span>
              <span className="text-[11px] text-neutral-400 font-mono hidden sm:inline">
                Google Drive Source
              </span>
            </div>
            <button
              onClick={handleCopyTag}
              className="text-[11px] text-sky-400/90 hover:text-sky-300 font-mono flex items-center gap-1 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : null}
              <span>{page.hashtag}</span>
            </button>
          </div>

          {/* Center Drive Document Identification */}
          <div className="my-auto py-6 space-y-4 text-center relative z-10">
            <div className="inline-flex p-4 rounded-2xl bg-sky-500/10 border border-sky-400/25 text-sky-400 mb-1 shadow-lg shadow-sky-500/5">
              <Cloud className="w-10 h-10 text-sky-400" />
            </div>

            <div className="space-y-1.5 max-w-md mx-auto">
              <span className="text-[11px] font-bold text-sky-400 tracking-wider uppercase block">
                Artefak Asli Google Drive
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                {page.title}
              </h3>
              {page.subtitle && (
                <p className="text-xs sm:text-sm text-neutral-300 font-medium">
                  {page.subtitle}
                </p>
              )}
            </div>

            {/* Drive File Name Box */}
            <div className="inline-block px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 max-w-full">
              <p className="text-[11px] text-neutral-400 font-mono truncate">
                📄 <strong className="text-neutral-200">{fileName}</strong>
              </p>
            </div>

            {/* Quick Content Highlights so user can read immediately */}
            {page.content.lead && (
              <p className="text-xs text-neutral-300 leading-relaxed max-w-md mx-auto line-clamp-3 text-left bg-neutral-900/50 p-3 rounded-xl border border-neutral-800/80">
                {page.content.lead}
              </p>
            )}

            {/* Action Buttons: Open Drive or Upload file */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
              <a
                href={driveSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-extrabold shadow-md shadow-sky-500/20 transition-all cursor-pointer"
              >
                <Cloud className="w-4 h-4" />
                <span>Buka Berkas di Drive</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>

              {onUploadSinglePage && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-bold border border-neutral-700 transition-all cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5 text-sky-400" />
                  <span>Unggah Gambar dari Drive</span>
                </button>
              )}
            </div>
          </div>

          {/* Bottom Note */}
          <div className="border-t border-neutral-800/80 pt-3 flex items-center justify-between text-[11px] text-neutral-400 relative z-10">
            <span>PPG PPKN UBP Karawang</span>
            <span className="text-sky-400/80 font-mono">SDGs 16 • Keadaban Siber</span>
          </div>
        </div>
      )}
    </div>
  );
};
