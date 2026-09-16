import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HandbookSection } from './components/HandbookSection';
import { FourPillars } from './components/FourPillars';
import { DilemmaSimulator } from './components/DilemmaSimulator';
import { FootprintAudit } from './components/FootprintAudit';
import { HoaxPhishingDetector } from './components/HoaxPhishingDetector';
import { NetiquetteGuide } from './components/NetiquetteGuide';
import { EthicsConsultant } from './components/EthicsConsultant';
import { EthicsQuiz } from './components/EthicsQuiz';
import { CyberReportContacts } from './components/CyberReportContacts';
import { DigitalPledge } from './components/DigitalPledge';
import { Footer } from './components/Footer';

export default function App() {
  const [isPledgeOpen, setIsPledgeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active scroll section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['handbook', 'pilar', 'dilema', 'jejak', 'deteksi', 'netiket', 'konsultan', 'kuis', 'aduan-siber'];
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
    <div className="min-h-screen bg-gradient-to-b from-[#ddecfa] via-[#f0f7fe] to-[#e1effc] text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white relative">
      {/* Ambient background blur circles resembling handbook sky-blue tones */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-sky-300/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-1/3 right-10 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      {/* Top Navbar */}
      <Navbar
        onOpenPledge={() => setIsPledgeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onStartDilemma={() => scrollTo('dilema')}
          onStartAudit={() => scrollTo('jejak')}
          onOpenPledge={() => setIsPledgeOpen(true)}
        />

        {/* Handbook Etika Digital Berbasis Pancasila */}
        <HandbookSection />

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

        {/* Kontak Aduan Siber Pemerintah RI */}
        <CyberReportContacts />
      </main>

      {/* Footer */}
      <Footer
        onOpenPledge={() => setIsPledgeOpen(true)}
      />

      {/* Interactive Pledge & Certificate Modal */}
      <DigitalPledge
        isOpen={isPledgeOpen}
        onClose={() => setIsPledgeOpen(false)}
      />
    </div>
  );
}

