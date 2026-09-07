import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FourPillars } from './components/FourPillars';
import { DilemmaSimulator } from './components/DilemmaSimulator';
import { FootprintAudit } from './components/FootprintAudit';
import { HoaxPhishingDetector } from './components/HoaxPhishingDetector';
import { NetiquetteGuide } from './components/NetiquetteGuide';
import { EthicsConsultant } from './components/EthicsConsultant';
import { EthicsQuiz } from './components/EthicsQuiz';
import { DigitalPledge } from './components/DigitalPledge';
import { LogoKitModal } from './components/LogoKitModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isLogoKitOpen, setIsLogoKitOpen] = useState(false);
  const [isPledgeOpen, setIsPledgeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active scroll section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['pilar', 'dilema', 'jejak', 'deteksi', 'netiket', 'konsultan', 'kuis'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col selection:bg-neutral-900 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenLogoKit={() => setIsLogoKitOpen(true)}
        onOpenPledge={() => setIsPledgeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero with ED Logo Presentation */}
        <Hero
          onStartDilemma={() => scrollTo('dilema')}
          onStartAudit={() => scrollTo('jejak')}
          onOpenLogoKit={() => setIsLogoKitOpen(true)}
        />

        {/* 4 Pilar Literasi & Etika Digital */}
        <FourPillars />

        {/* Uji Dilema Moral Digital (Simulator) */}
        <DilemmaSimulator />

        {/* Audit & Kalkulator Jejak Digital */}
        <FootprintAudit />

        {/* Spot The Red Flags: Deteksi Phishing & Hoaks */}
        <HoaxPhishingDetector />

        {/* 10 Kaidah Emas Netiket Modern */}
        <NetiquetteGuide />

        {/* Tanya AI / Konsultan Etika Digital */}
        <EthicsConsultant />

        {/* Kuis Uji Kompetensi & Sertifikat Duta Etika */}
        <EthicsQuiz />
      </main>

      {/* Footer */}
      <Footer
        onOpenLogoKit={() => setIsLogoKitOpen(true)}
        onOpenPledge={() => setIsPledgeOpen(true)}
      />

      {/* Interactive Modals */}
      <LogoKitModal
        isOpen={isLogoKitOpen}
        onClose={() => setIsLogoKitOpen(false)}
      />

      <DigitalPledge
        isOpen={isPledgeOpen}
        onClose={() => setIsPledgeOpen(false)}
      />
    </div>
  );
}
