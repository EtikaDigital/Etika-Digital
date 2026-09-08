import React, { useState } from 'react';
import { Logo } from './Logo';
import {
  Sparkles,
  Compass,
  Scale,
  Footprints,
  ShieldAlert,
  Users,
  Award,
  Menu,
  X,
  FileCheck2,
  Bot
} from 'lucide-react';

interface NavbarProps {
  onOpenPledge: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPledge,
  activeSection,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#handbook', label: 'About Us', icon: Users },
    { href: '#pilar', label: '4 Pilar', icon: Compass },
    { href: '#dilema', label: 'Uji Dilema', icon: Scale },
    { href: '#jejak', label: 'Audit Jejak', icon: Footprints },
    { href: '#deteksi', label: 'Spot Red Flags', icon: ShieldAlert },
    { href: '#netiket', label: 'Kaidah Netiket', icon: Sparkles },
    { href: '#konsultan', label: 'Konsultan AI', icon: Bot },
    { href: '#kuis', label: 'Kuis & Sertifikat', icon: Award },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-neutral-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          href="#"
          className="shrink-0 group flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.02]"
          aria-label="Kembali ke Beranda Etika Digital"
        >
          <div className="p-1.5 rounded-xl bg-neutral-100/80 group-hover:bg-neutral-200/60 transition-colors">
            <Logo variant="icon" size="sm" symbolColor="#0a0a0a" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-[0.14em] text-neutral-900 leading-none">
              ETIKA<span className="font-light tracking-[0.18em] text-neutral-600">DIGITAL</span>
            </span>
            <span className="text-[10px] font-medium tracking-wider text-neutral-600 mt-0.5">
              INDONESIA CYBER ETHICS
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-1.5 shrink-0 flex-nowrap">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 px-2 xl:px-2.5 2xl:px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  isActive
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Single Action Button for Aduan Siber & Pledge */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <a
            href="#aduan-siber"
            className="whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-lg border border-red-200 bg-red-50 text-xs font-bold text-red-700 hover:bg-red-100 transition-all shadow-xs"
            title="Layanan Aduan Kejahatan Siber Pemerintah"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-red-600 shrink-0" />
            <span className="whitespace-nowrap">Aduan Siber</span>
          </a>

          <button
            onClick={onOpenPledge}
            className="whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 px-2.5 xl:px-3 2xl:px-3.5 rounded-lg bg-neutral-900 text-xs font-semibold text-white hover:bg-neutral-800 transition-all shadow-xs"
          >
            <FileCheck2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="whitespace-nowrap">Ikrar Digital</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#aduan-siber"
            className="p-2 rounded-lg text-red-600 hover:bg-red-50 text-xs font-bold inline-flex items-center gap-1 border border-red-200"
            aria-label="Aduan Siber"
          >
            <ShieldAlert className="w-4 h-4 text-red-600" />
            <span className="text-[11px]">Aduan</span>
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 focus:outline-none"
            aria-label="Buka Menu Navigasi"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-neutral-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2.5 rounded-lg text-xs font-medium bg-neutral-50 hover:bg-neutral-100 text-neutral-700"
                >
                  <Icon className="w-4 h-4 text-neutral-500" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
            <a
              href="#aduan-siber"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-red-50 border border-red-200 text-xs font-bold text-red-700 hover:bg-red-100"
            >
              <ShieldAlert className="w-4 h-4 text-red-600" />
              <span>Aduan Siber</span>
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenPledge();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-neutral-900 text-xs font-semibold text-white"
            >
              <FileCheck2 className="w-4 h-4 text-amber-400" />
              <span>Tandatangani Ikrar Warga Digital</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

