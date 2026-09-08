import React, { useState } from 'react';
import {
  ShieldAlert,
  PhoneCall,
  Globe,
  Mail,
  Copy,
  Check,
  ExternalLink,
  AlertTriangle,
  FileText,
  Clock,
  ShieldCheck,
  Search,
  Users,
  CreditCard,
  Lock,
  HeartHandshake
} from 'lucide-react';

interface GovernmentAgency {
  id: string;
  name: string;
  shortName: string;
  agency: string;
  category: 'polisi' | 'komdigi' | 'keuangan' | 'anak' | 'keamanan';
  description: string;
  handledCases: string[];
  website: string;
  hotline?: string;
  whatsapp?: string;
  email?: string;
  hours: string;
  isUrgent?: boolean;
}

const AGENCIES: GovernmentAgency[] = [
  {
    id: 'patroli-siber',
    name: 'Direktorat Tindak Pidana Siber (Dittipidsiber)',
    shortName: 'Patroli Siber Polri',
    agency: 'Bareskrim Kepolisian Negara Republik Indonesia',
    category: 'polisi',
    description: 'Pusat penanganan dan penegakan hukum terhadap tindak pidana siber, kejahatan digital terorganisir, dan ancaman keamanan digital publik.',
    handledCases: [
      'Penipuan online & transaksi belanja fiktif',
      'Pemerasan digital (Blackmail & Sextortion)',
      'Doxing, peretasan & pembajakan akun medsos',
      'Ujaran kebencian SARA & ancaman kekerasan siber',
      'Judi online & distribusi konten ilegal berbahaya'
    ],
    website: 'https://patrolisiber.id',
    hotline: '110',
    whatsapp: '0858-8558-8877',
    email: 'lapor@patrolisiber.id',
    hours: '24 Jam / 7 Hari (Setiap Hari)',
    isUrgent: true
  },
  {
    id: 'aduan-konten',
    name: 'Layanan Aduan Konten Negatif',
    shortName: 'Aduan Konten Komdigi',
    agency: 'Kementerian Komunikasi dan Digital RI (ex-Kominfo)',
    category: 'komdigi',
    description: 'Fasilitas resmi penerimaan laporan masyarakat terkait konten internet terlarang untuk dilakukan verifikasi, pemblokiran (take down), dan penindakan.',
    handledCases: [
      'Penyebaran hoaks & berita bohong meresahkan',
      'Pornografi anak & asusila tanpa konsen',
      'Situs judi online & promosi ilegal',
      'Pelanggaran privasi & penyebaran data pribadi (UU PDP)',
      'Radikalisme, terorisme, dan intoleransi digital'
    ],
    website: 'https://aduankonten.id',
    whatsapp: '0811-9224-545',
    email: 'aduankonten@kominfo.go.id',
    hours: '08.00 - 21.00 WIB (Sistem Portal 24 Jam)',
    isUrgent: true
  },
  {
    id: 'cek-rekening',
    name: 'Portal Cek & Lapor Rekening Penipuan',
    shortName: 'CekRekening.id',
    agency: 'Kementerian Komunikasi dan Digital RI',
    category: 'komdigi',
    description: 'Portal resmi untuk memeriksa dan melaporkan nomor rekening bank atau dompet elektronik (e-wallet) yang diindikasikan digunakan untuk tindak pidana.',
    handledCases: [
      'Rekening penipuan transaksi jual-beli online',
      'Rekening investasi bodong & trading ilegal',
      'Rekening penampung pinjaman online ilegal',
      'Rekening pemerasan & manipulasi sosial (social engineering)'
    ],
    website: 'https://cekrekening.id',
    hours: 'Layanan Online 24 Jam',
    isUrgent: false
  },
  {
    id: 'ojk-pasti',
    name: 'Satgas PASTI & Kontak OJK 157',
    shortName: 'Satgas PASTI (OJK)',
    agency: 'Otoritas Jasa Keuangan & 16 Kementerian/Lembaga',
    category: 'keuangan',
    description: 'Satuan Tugas Pemberantasan Aktivitas Keuangan Ilegal untuk menindak tegas pinjol ilegal, penawaran investasi ilegal, dan kejahatan sektor perbankan.',
    handledCases: [
      'Pinjaman online (Pinjol) ilegal tanpa izin OJK',
      'Pelecehan & teror penagihan pinjol ilegal (Debt Collector)',
      'Investasi bodong berskema ponzi',
      'Pengelabuan perbankan (phishing mobile banking)'
    ],
    website: 'https://kontak157.ojk.go.id',
    hotline: '157',
    whatsapp: '081-157-157-157',
    email: 'satgaspasti@ojk.go.id',
    hours: 'Senin - Jumat 08.00 - 17.00 WIB (WhatsApp Otomatis 24 Jam)',
    isUrgent: true
  },
  {
    id: 'sapa-129',
    name: 'Layanan Sahabat Perempuan & Anak (SAPA 129)',
    shortName: 'SAPA 129 KemenPPPA',
    agency: 'Kementerian Pemberdayaan Perempuan dan Perlindungan Anak RI',
    category: 'anak',
    description: 'Layanan terpadu pendampingan psikologis dan bantuan hukum bagi perempuan dan anak yang menjadi korban kekerasan di dunia nyata maupun ranah digital.',
    handledCases: [
      'Kekerasan Berbasis Gender Online (KBGO)',
      'Pelecehan seksual daring & eksploitasi foto/video intim',
      'Cyberbullying berat yang menyerang anak sekolah',
      'Eksploitasi anak secara online (CSAM / grooming)'
    ],
    website: 'https://kemenpppa.go.id',
    hotline: '129',
    whatsapp: '08111-129-129',
    hours: '24 Jam / 7 Hari (Siaga Penuh)',
    isUrgent: true
  },
  {
    id: 'bssn-csirt',
    name: 'Pusopskamsinas / CSIRT.ID Tanggap Insiden',
    shortName: 'BSSN (Insiden Siber)',
    agency: 'Badan Siber dan Sandi Negara RI',
    category: 'keamanan',
    description: 'Pusat operasi keamanan siber nasional untuk menangani serangan siber terhadap infrastruktur informasi vital, kebocoran data massal, dan ancaman digital strategis.',
    handledCases: [
      'Kebocoran basis data pribadi berskala besar (Data Breach)',
      'Serangan ransomware & pemblokiran sistem krusial',
      'Peretasan website instansi resmi pemerintah/sekolah',
      'Ancaman keamanan siber pada infrastruktur publik'
    ],
    website: 'https://csirt.id',
    hotline: '158',
    email: 'incident@bssn.go.id',
    hours: '24 Jam / 7 Hari (Monitoring Nasional)',
    isUrgent: false
  },
  {
    id: 'lpsk',
    name: 'Lembaga Perlindungan Saksi dan Korban',
    shortName: 'LPSK RI',
    agency: 'Lembaga Negara Independen RI',
    category: 'keamanan',
    description: 'Lembaga yang memberikan perlindungan fisik, hukum, pemenuhan hak prosedural, dan bantuan psikologis bagi saksi dan korban tindak pidana berisiko tinggi.',
    handledCases: [
      'Korban kejahatan siber yang diintimidasi secara fisik',
      'Ancaman keselamatan jiwa setelah melaporkan kejahatan siber',
      'Saksi kunci kasus kejahatan terorganisir di dunia digital'
    ],
    website: 'https://lpsk.go.id',
    hotline: '148',
    whatsapp: '0857-7001-0048',
    hours: '24 Jam Layanan Darurat',
    isUrgent: false
  }
];

export const CyberReportContacts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredAgencies = AGENCIES.filter((agency) => {
    const matchesCategory = selectedCategory === 'all' || agency.category === selectedCategory;
    const matchesQuery =
      agency.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agency.agency.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agency.handledCases.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="aduan-siber" className="py-20 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold tracking-wide">
            <ShieldAlert className="w-4 h-4 text-red-400 animate-pulse" />
            <span>Kanal Resmi Tanggap Darurat & Penegakan Hukum RI</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Pusat Aduan & Bantuan Kejahatan Siber
          </h2>
          
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Menjadi korban penipuan online, pemerasan, peretasan, doxing, atau menemukan konten berbahaya? Laporkan langsung ke lembaga resmi pemerintah Indonesia berikut ini.
          </p>
        </div>

        {/* Emergency Procedure Checklist (Important Advice) */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-neutral-950/80 border border-neutral-800 shadow-xl space-y-4">
          <div className="flex items-center gap-2.5 text-amber-400 font-bold text-sm sm:text-base">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <span>Prosedur Cepat: 4 Bukti Wajib Sebelum Melapor</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800/80 space-y-1.5">
              <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">Langkah 1</span>
              <h4 className="text-xs font-bold text-white">Tangkapan Layar Utuh</h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Screenshot chat, postingan, nomor HP, URL website, serta tanggal dan jam kejadian sebelum pelaku menghapusnya.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800/80 space-y-1.5">
              <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">Langkah 2</span>
              <h4 className="text-xs font-bold text-white">Bukti Finansial & Rekening</h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Simpan bukti transfer, mutasi bank/e-wallet, nomor rekening pelaku, dan nama pemilik rekening penipu.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800/80 space-y-1.5">
              <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">Langkah 3</span>
              <h4 className="text-xs font-bold text-white">Salin Tautan Profil Pelaku</h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Salin link tautan profil akun pelaku (bukan hanya username), ID grup medsos, atau email pengirim.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800/80 space-y-1.5">
              <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">Langkah 4</span>
              <h4 className="text-xs font-bold text-white">Tulis Kronologi Runtut</h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Tulis kronologi singkat: waktu awal interaksi, modus operandi, janji pelaku, dan total kerugian yang diderita.
              </p>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {[
              { id: 'all', label: 'Semua Lembaga' },
              { id: 'polisi', label: 'Polisi / Siber (110)' },
              { id: 'komdigi', label: 'Konten & Rekening' },
              { id: 'keuangan', label: 'OJK / Pinjol (157)' },
              { id: 'anak', label: 'Perempuan & Anak (129)' },
              { id: 'keamanan', label: 'BSSN & LPSK' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-white text-neutral-950 shadow-md'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari jenis kejahatan atau lembaga..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-neutral-800/90 border border-neutral-700 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>

        </div>

        {/* Agency Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgencies.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 p-6 flex flex-col justify-between transition-all hover:shadow-2xl space-y-6"
            >
              
              {/* Card Top */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                      {item.agency}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 leading-snug">
                      {item.shortName}
                    </h3>
                  </div>
                  {item.isUrgent && (
                    <span className="px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/30 text-[10px] font-bold uppercase shrink-0">
                      Prioritas
                    </span>
                  )}
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Handled cases list */}
                <div className="space-y-2 pt-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                    Menangani Kasus:
                  </span>
                  <ul className="space-y-1.5">
                    {item.handledCases.map((c, i) => (
                      <li key={i} className="text-xs text-neutral-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Bottom / Contacts */}
              <div className="space-y-3 pt-4 border-t border-neutral-800/80">
                
                {/* Hours info */}
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 font-mono">
                  <Clock className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Waktu Operasional: {item.hours}</span>
                </div>

                {/* Contact Buttons */}
                <div className="space-y-2">
                  
                  {/* Hotline / Telepon */}
                  {item.hotline && (
                    <div className="flex items-center justify-between p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs">
                      <div className="flex items-center gap-2 text-neutral-300">
                        <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="font-mono font-bold text-white">{item.hotline}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(item.hotline!, `${item.id}-hotline`)}
                        className="text-[11px] text-neutral-400 hover:text-white flex items-center gap-1 font-semibold"
                        title="Salin Nomor"
                      >
                        {copiedId === `${item.id}-hotline` ? (
                          <span className="text-emerald-400 flex items-center gap-1">
                            <Check className="w-3 h-3" /> Tersalin
                          </span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <Copy className="w-3 h-3" /> Salin
                          </span>
                        )}
                      </button>
                    </div>
                  )}

                  {/* WhatsApp */}
                  {item.whatsapp && (
                    <div className="flex items-center justify-between p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs">
                      <div className="flex items-center gap-2 text-neutral-300">
                        <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">WA</span>
                        <span className="font-mono text-white">{item.whatsapp}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(item.whatsapp!, `${item.id}-wa`)}
                        className="text-[11px] text-neutral-400 hover:text-white flex items-center gap-1 font-semibold"
                        title="Salin WhatsApp"
                      >
                        {copiedId === `${item.id}-wa` ? (
                          <span className="text-emerald-400 flex items-center gap-1">
                            <Check className="w-3 h-3" /> Tersalin
                          </span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <Copy className="w-3 h-3" /> Salin
                          </span>
                        )}
                      </button>
                    </div>
                  )}

                  {/* Email */}
                  {item.email && (
                    <div className="flex items-center justify-between p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs">
                      <div className="flex items-center gap-2 text-neutral-300 truncate max-w-[200px]">
                        <Mail className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <span className="font-mono text-neutral-300 truncate text-[11px]">{item.email}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(item.email!, `${item.id}-email`)}
                        className="text-[11px] text-neutral-400 hover:text-white flex items-center gap-1 font-semibold shrink-0"
                        title="Salin Email"
                      >
                        {copiedId === `${item.id}-email` ? (
                          <span className="text-emerald-400 flex items-center gap-1">
                            <Check className="w-3 h-3" /> Tersalin
                          </span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <Copy className="w-3 h-3" /> Salin
                          </span>
                        )}
                      </button>
                    </div>
                  )}

                </div>

                {/* Primary Action Button */}
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-2 py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 group shadow-xs"
                >
                  <span>Buka Portal Pengaduan Resmi</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
                </a>

              </div>

            </div>
          ))}
        </div>

        {/* Bottom Safety Commitment */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-950 border border-neutral-800 text-center text-xs text-neutral-400 space-y-2">
          <p className="font-medium">
            🔒 <strong>Kerahasiaan Pelapor:</strong> Berdasarkan UU Tindak Pidana dan UU PDP, identitas saksi dan pelapor tindak kejahatan siber dilindungi oleh hukum. Jangan ragu melapor untuk menghentikan sindikat kejahatan digital.
          </p>
        </div>

      </div>
    </section>
  );
};
