export interface HandbookPage {
  pageNumber: number;
  pageLabel?: string;
  slug: string;
  title: string;
  subtitle?: string;
  hashtag: string;
  imageUrl?: string;
  imageFileName?: string;
  category: 'identitas' | 'pengantar' | 'konsep' | 'risiko' | 'aturan' | 'hukum' | 'rujukan';
  content: {
    lead?: string;
    points?: Array<{
      title: string;
      desc: string;
      citation?: string;
      badge?: string;
      iconName?: string;
    }>;
    quote?: {
      text: string;
      author: string;
    };
    callout?: {
      title: string;
      desc: string;
      type: 'warning' | 'info' | 'success' | 'danger';
    };
    rawHtmlOrNote?: string;
  };
}

export type HandbookPageData = HandbookPage;

export const getPageLabel = (pageNumber: number): string => {
  if (pageNumber === 1) return 'Cover';
  if (pageNumber === 2) return 'i';
  if (pageNumber === 3) return 'ii';
  if (pageNumber === 4) return 'iii';
  if (pageNumber <= 20) return (pageNumber - 4).toString();
  return pageNumber.toString();
};

export const getPageImageFileName = (pageNumber: number): string => {
  const map: Record<number, string> = {
    1: 'Project Handbook Etika Digital - Cover Depan [DONE].png',
    2: 'Project Handbook Etika Digital - Identitas Handbook [DONE].png',
    3: 'Project Handbook Etika Digital - Kata Pengantar [DONE].png',
    4: 'Project Handbook Etika Digital - Daftar Isi [DONE].png',
    5: 'Project Handbook Etika Digital - Latar Belakang [DONE].png',
    6: 'Project Handbook Etika Digital - Data dan Fakta Internet [DONE].png',
    7: 'Project Handbook Etika Digital - Risiko Digital dan 5 Sila [DONE].png',
    8: 'Project Handbook Etika Digital - Digital Citizenship [DONE].png',
    9: 'Project Handbook Etika Digital - Etika vs Etiket [DONE].png',
    10: 'Project Handbook Etika Digital - Digital Etiquette [DONE].png',
    11: 'Project Handbook Etika Digital - Mengapa Penting Diajarkan [DONE].png',
    12: 'Project Handbook Etika Digital - Indikator Etiket Digital [DONE].png',
    13: 'Project Handbook Etika Digital - 10 Aturan Inti Shea [DONE].png',
    14: 'Project Handbook Etika Digital - Panduan Brooks [DONE].png',
    15: 'Project Handbook Etika Digital - Do and Donts [DONE].png',
    16: 'Project Handbook Etika Digital - Kasus Komentar Buruk Netizen [DONE].png',
    17: 'Project Handbook Etika Digital - Instrumen Hukum UU ITE [DONE].png',
    18: 'Project Handbook Etika Digital - Daftar Rujukan Bagian 1 [DONE].png',
    19: 'Project Handbook Etika Digital - Daftar Rujukan Bagian 2 [DONE].png',
    20: 'Project Handbook Etika Digital - Cover Belakang [DONE].png',
  };
  return map[pageNumber] || `Project Handbook Etika Digital - Halaman ${pageNumber} [DONE].png`;
};

export const getPageImageUrl = (pageNumber: number): string => {
  return `/handbook/page-${pageNumber}.png`;
};

export interface HandbookMeta {
  title: string;
  subtitle: string;
  leadInstitution: string;
  institutionSub: string;
  program: string;
  projectTheme: string;
  sdgGoal: string;
  sdgDesc: string;
  targetAudience: string[];
  purpose: string;
  year: string;
  location: string;
}

export const HANDBOOK_META: HandbookMeta = {
  title: 'Handbook Etika Digital Berbasis Pancasila',
  subtitle: 'Panduan Praktis Bersama Beretika Digital untuk Masyarakat Berkeadaban',
  leadInstitution: 'Tim (C) Projek Kepemimpinan PPG PPKN',
  institutionSub: 'Universitas Buana Perjuangan Karawang',
  program: 'Program Studi Pendidikan Profesi Guru (PPG) Calon Guru',
  projectTheme: 'Kampanye Etika Digital Berbasis Pancasila di Desa Sukaluyu, Kecamatan Telukjambe Timur, Kabupaten Karawang',
  sdgGoal: 'SDG 16: Peace, Justice, and Strong Institutions',
  sdgDesc: 'Perdamaian, Keadilan, dan Kelembagaan yang Tangguh',
  targetAudience: [
    'Remaja dan Pemuda',
    'Karang Taruna',
    'Siswa SMA/SMK/sederajat',
    'Ibu-ibu PKK',
    'Pengurus RT / RW',
    'Tokoh Masyarakat & Tokoh Agama',
    'Perangkat Desa'
  ],
  purpose: 'Menjadi panduan praktis bagi warga dalam menerapkan etika digital berdasarkan nilai-nilai Pancasila untuk menciptakan interaksi digital yang santun, aman, bertanggung jawab, dan menjaga kerukunan masyarakat.',
  year: '2026',
  location: 'Desa Sukaluyu, Telukjambe Timur, Karawang'
};

const RAW_PAGES: HandbookPage[] = [
  {
    pageNumber: 1,
    slug: 'cover',
    title: 'Cover Handbook',
    subtitle: 'Etika Digital Berbasis Pancasila',
    hashtag: '#BERSAMABERETIKADIGITAL',
    category: 'identitas',
    content: {
      lead: 'Handbook resmi Projek Kepemimpinan PPG PPKN Universitas Buana Perjuangan Karawang dalam mengawal etika dan keadaban siber bangsa berbasis nilai-nilai luhur Pancasila.',
      points: [
        {
          title: 'Tema Utama',
          desc: 'Penguatan Literasi & Etika Digital Berlandaskan Falsafah Pancasila'
        },
        {
          title: 'Dukungan Global',
          desc: 'Mendukung Pencapaian SDGs 16 (Peace, Justice, and Strong Institutions)'
        },
        {
          title: 'Mitra Komunitas',
          desc: 'Desa Sukaluyu, Kec. Telukjambe Timur, Kab. Karawang'
        }
      ]
    }
  },
  {
    pageNumber: 2,
    slug: 'identitas',
    title: 'Identitas Handbook',
    subtitle: 'Data Proyek & Sasaran Pengguna',
    hashtag: '#ETIKADIBALIKLAYAR',
    category: 'identitas',
    content: {
      lead: 'Spesifikasi rujukan dan instrumen formal projek edukasi etika siber masyarakat.',
      points: [
        {
          title: 'Judul Handbook',
          desc: 'Handbook "Etika Digital Berbasis Nilai Pancasila"'
        },
        {
          title: 'Tema Projek',
          desc: 'Kampanye Etika Digital Berbasis Pancasila di Desa Sukaluyu, Kecamatan Telukjambe Timur, Kabupaten Karawang'
        },
        {
          title: 'Keterkaitan SDGs',
          desc: 'SDG 16: Peace, Justice, and Strong Institutions (Perdamaian, Keadilan, dan Kelembagaan yang Tangguh)'
        },
        {
          title: 'Penyusun & Penanggung Jawab',
          desc: 'Tim (C) Projek Kepemimpinan PPG PPKN Universitas Buana Perjuangan Karawang, 2026'
        }
      ],
      callout: {
        title: 'Tujuan Handbook',
        desc: 'Menjadi panduan praktis bagi warga dalam menerapkan etika digital berdasarkan nilai-nilai Pancasila untuk menciptakan interaksi digital yang santun, aman, bertanggung jawab, dan menjaga kerukunan masyarakat.',
        type: 'info'
      }
    }
  },
  {
    pageNumber: 3,
    slug: 'kata-pengantar',
    title: 'Kata Pengantar',
    subtitle: 'Amanat Edukatif & Nilai Luhur Bangsa',
    hashtag: '#DIGITALDENGANETIKA',
    category: 'pengantar',
    content: {
      lead: 'Puji syukur ke hadirat Tuhan Yang Maha Esa atas tersusunnya Handbook ini sebagai artefak Projek Kepemimpinan PPG PPKN Universitas Buana Perjuangan Karawang.',
      quote: {
        text: 'Nilai-nilai Pancasila dihadirkan sebagai landasan dalam membangun perilaku digital yang tidak hanya cakap secara teknologi, tetapi juga menjunjung kemanusiaan, persatuan, musyawarah, keadilan, dan toleransi.',
        author: 'Tim (C) Projek Kepemimpinan PPG PPKN UBP Karawang'
      },
      points: [
        {
          title: 'Tantangan Kemudahan Akses',
          desc: 'Perkembangan teknologi digital memberikan banyak kemudahan berkomunikasi dan memperoleh informasi, namun perlu diiringi kesadaran etika, tanggung jawab, dan saling menghargai.'
        },
        {
          title: 'Panduan Praktis & Sederhana',
          desc: 'Memuat panduan menyaring informasi sebelum membagikannya, berkomunikasi dengan empati, menjaga kerahasiaan data pribadi, hingga menyadari rekam jejak digital.'
        }
      ]
    }
  },
  {
    pageNumber: 4,
    slug: 'daftar-isi',
    title: 'Daftar Isi Handbook',
    subtitle: 'Struktur Navigasi & Pembahasan',
    hashtag: '#BERANIBERSUARABIJAKBERKATA',
    category: 'pengantar',
    content: {
      lead: 'Handbook ini terdiri dari 14 bab materi komprehensif yang dirancang sistematis dari fondasi teoretis hingga instrumen regulasi hukum.',
      points: [
        { title: 'Bagian 1: Fondasi & Fakta Lapangan', desc: 'Latar Belakang, Data APJII & BPS, serta Hasil Survei Microsoft DCI' },
        { title: 'Bagian 2: Risiko Siber & Nilai Pancasila', desc: 'Ancaman Dunia Digital serta Pengamalan 5 Sila di Ruang Siber' },
        { title: 'Bagian 3: Teori Kewarganegaraan & Etiket', desc: 'Digital Citizenship (9 Elemen Ribble), Perbedaan Etika vs Etiket, dan Digital Etiquette' },
        { title: 'Bagian 4: Pedoman Praktis Interaksi', desc: 'Indikator Kominfo, 10 Aturan Inti Shea, Panduan Brooks, serta Do & Don\'ts' },
        { title: 'Bagian 5: Studi Kasus & Penegakan Hukum', desc: 'Komentar Buruk Netizen Indonesia, UU ITE No. 19/2016, dan Daftar Rujukan Lengkap' }
      ]
    }
  },
  {
    pageNumber: 5,
    slug: 'latar-belakang',
    title: 'Latar Belakang',
    subtitle: 'Transformasi Ruang Hidup Masyarakat',
    hashtag: '#KLIKDENGANBIJAK',
    category: 'konsep',
    content: {
      lead: 'Perkembangan teknologi digital yang amat pesat telah membawa berbagai dampak yang signifikan bagi kehidupan manusia, baik positif maupun negatif.',
      points: [
        {
          title: 'Efisiensi & Kemudahan Akses',
          desc: 'Digitalisasi memberikan kemudahan dalam menyelesaikan berbagai pekerjaan, mempercepat penyebaran informasi, serta memfasilitasi komunikasi antar individu tanpa batas geografis.'
        },
        {
          title: 'Konektivitas Global Real-Time',
          desc: 'Menciptakan jembatan pertukaran pengetahuan seketika antar belahan dunia, namun membuka kerentanan konflik sosial jika tanpa kontrol etika.'
        },
        {
          title: 'Kebutuhan Kompas Moral',
          desc: 'Kecepatan teknologi yang tidak diimbangi dengan kedewasaan moral berpotensi mengubah ruang maya menjadi arena destruktif bagi kerukunan warga.'
        }
      ]
    }
  },
  {
    pageNumber: 6,
    slug: 'hasil-survei',
    title: 'Data & Fakta Pengguna Internet',
    subtitle: 'Paradoks Keramahan Nyata vs Keberadaban Siber',
    hashtag: '#SANTUNDIDUNIAMAYA',
    category: 'konsep',
    content: {
      lead: 'Berdasarkan data APJII (2023), jumlah pengguna internet di Indonesia pada periode 2022-2023 mencapai 215,63 juta orang, dari total proyeksi penduduk 278,8 juta jiwa (BPS, 2023). Penetrasi internet telah melampaui 77% populasi.',
      points: [
        {
          title: 'Fakta Mengejutkan Microsoft DCI',
          desc: 'Laporan Digital Civility Index (DCI) oleh Microsoft (16.000 responden di 32 negara) menunjukkan bahwa warganet Indonesia masuk ke dalam kelompok dengan tingkat kesopanan digital terendah, sejajar dengan Rusia, Afrika Selatan, dan Meksiko (Kurniawaty & Faiz, 2022, hal. 89).',
          badge: 'Skor Kritis'
        },
        {
          title: 'Paradoks Budaya Ramah',
          desc: 'Di dunia nyata, bangsa Indonesia diakui dunia internasional sebagai masyarakat yang sangat ramah, hangat, suka menyapa, dan saling tolong-menolong. Namun citra ini kontras terdegradasi di balik layar digital.'
        }
      ],
      callout: {
        title: 'Urgensi Perubahan Perilaku',
        desc: 'Tingginya kuantitas akses belum diimbangi kualitas adab digital. Dibutuhkan re-internalisasi nilai Pancasila agar karakter luhur bangsa tercermin nyata di jagat siber.',
        type: 'warning'
      }
    }
  },
  {
    pageNumber: 7,
    slug: 'risiko-pancasila',
    title: 'Kenali Risiko Digital & 5 Sila Pancasila',
    subtitle: 'Menjaga Nilai Moral Agar Tidak Tergerus',
    hashtag: '#BERSAMABERETIKADIGITAL',
    category: 'risiko',
    content: {
      lead: 'Dunia digital menawarkan banyak manfaat, tetapi juga memiliki risiko nyata: Hoaks, Penipuan Online, Cyberbullying, Kebocoran Data, dan Peretasan. Nilai Pancasila adalah benteng utamanya.',
      points: [
        {
          title: 'Sila 1: Ketuhanan Yang Maha Esa',
          desc: 'Hargai keyakinan dan kepercayaan orang lain di ruang digital; hindari penistaan agama dan ujaran kebencian berbasis keyakinan.',
          iconName: 'Sparkles'
        },
        {
          title: 'Sila 2: Kemanusiaan Yang Adil dan Beradab',
          desc: 'Perlakukan semua orang lain dengan hormat dan adil; tolak cyberbullying, perundungan siber, doxing, dan pelecehan online.',
          iconName: 'Heart'
        },
        {
          title: 'Sila 3: Persatuan Indonesia',
          desc: 'Jaga persatuan dan hindari perpecahan; jangan memproduksi atau menyebarkan hoaks provokatif pemecah belah bangsa.',
          iconName: 'Users'
        },
        {
          title: 'Sila 4: Kerakyatan Dipimpin Hikmat Kebijaksanaan...',
          desc: 'Sampaikan pendapat dan kritik dengan santun, utamakan musyawarah mufakat, tabayun (verifikasi), dan hormati perbedaan sudut pandang.',
          iconName: 'Scale'
        },
        {
          title: 'Sila 5: Keadilan Sosial Bagi Seluruh Rakyat Indonesia',
          desc: 'Hormati hak cipta dan kekayaan intelektual orang lain, jaga privasi sesama, serta jangan pernah mengambil keuntungan dengan merugikan hak digital sesama.',
          iconName: 'ShieldCheck'
        }
      ]
    }
  },
  {
    pageNumber: 8,
    slug: 'digital-citizenship',
    title: 'Digital Citizenship (Kewarganegaraan Digital)',
    subtitle: 'Konsep & 9 Elemen Standar Perilaku',
    hashtag: '#NETIZENBERETIKA',
    category: 'konsep',
    content: {
      lead: 'Digital Citizenship merupakan norma perilaku yang pantas dan bertanggung jawab sehubungan dengan penggunaan teknologi (Ribble & Bailey, 2007; Komalasari dkk., 2023, hal. 6).',
      points: [
        { title: '1. Digital Access', desc: 'Hak partisipasi elektronik penuh bagi seluruh lapisan masyarakat tanpa diskriminasi.' },
        { title: '2. Digital Commerce', desc: 'Aktivitas jual-beli dan transaksi elektronik yang aman, jujur, dan berkeadilan.' },
        { title: '3. Digital Communication', desc: 'Pertukaran informasi elektronik yang santun, proporsional, dan efektif.' },
        { title: '4. Digital Literacy', desc: 'Proses belajar-mengajar mengenai pemanfaatan teknologi secara kritis dan produktif.' },
        { title: '5. Digital Etiquette', desc: 'Standar perilaku dan tata krama elektronik yang disepakati bersama.' },
        { title: '6. Digital Law', desc: 'Tanggung jawab hukum atas setiap tindakan, karya, dan perkataan di ranah elektronik.' },
        { title: '7. Digital Rights & Responsibilities', desc: 'Keseimbangan antara hak kebebasan berekspresi dengan kewajiban melindungi sesama.' },
        { title: '8. Digital Health & Wellness', desc: 'Kesejahteraan fisik dan psikologis dari ancaman adiksi layar dan stres siber.' },
        { title: '9. Digital Security', desc: 'Langkah pencegahan dan proteksi mandiri untuk menjamin keselamatan data pribadi.' }
      ]
    }
  },
  {
    pageNumber: 9,
    slug: 'etika-vs-etiket',
    title: 'Perbedaan Mendasar Etika & Etiket',
    subtitle: 'Kajian Filosofis Bahasa & Teori Moral',
    hashtag: '#SARINGSEBELUMSHARING',
    category: 'konsep',
    content: {
      lead: 'Masyarakat sering menyamakan etika dan etiket, padahal keduanya memiliki cakupan dimensi yang sangat berbeda.',
      points: [
        {
          title: 'Etika (Ethics) — Internal & Universal',
          desc: 'Berasal dari bahasa Yunani "Ethos" (sifat, watak, kebiasaan) (Ferdinand dkk., 2017). Menurut Franz Magnis-Suseno (1989, hal. 15), etika adalah pemikiran sistematis tentang moralitas. Mempersoalkan keabsahan batiniah tentang apa yang baik dan apa yang buruk, berlaku di mana saja bahkan saat tidak ada orang yang melihat.',
          badge: 'Prinsip Moralitas'
        },
        {
          title: 'Etiket (Etiquette) — Eksternal & Situasional',
          desc: 'Menyangkut tata krama atau cara-cara perbuatan tertentu yang dianut masyarakat dalam pergaulan sosial (Yusuf, 2017, hal. 68). Merujuk pada perilaku yang diterima secara sosial (Miller, 2002, hal. 312), seperti gaya berbicara santun, cara berpakaian, dan sopan santun formal.',
          badge: 'Tata Krama Sosial'
        }
      ],
      callout: {
        title: 'Sintesis Penegasan',
        desc: 'Jika etika mempersoalkan bagaimana manusia harus bertindak secara benar dan jujur, maka etiket adalah kebiasaan baik dan sopan santun yang disepakati untuk ditaati bersama.',
        type: 'info'
      }
    }
  },
  {
    pageNumber: 10,
    slug: 'digital-etiquette',
    title: 'Digital Etiquette (Etiket Digital)',
    subtitle: 'Aturan Main Tak Tertulis di Dunia Siber',
    hashtag: '#BEDAPENDAPATTETAPHORMAT',
    category: 'aturan',
    content: {
      lead: 'Digital Etiquette adalah standar perilaku yang diharapkan oleh sesama pengguna teknologi digital dalam berinteraksi daring (Ribble & Bailey, 2007, hal. 10).',
      quote: {
        text: 'The reasons why digital etiquette is important and should be given because many people spend time with internet, it’s important for student to be aware of the long-term impact of internet use.',
        author: 'Dr. Mike Ribble (Digital Citizenship Educator)'
      },
      points: [
        {
          title: 'Urgensi dalam Keberagaman Komunitas',
          desc: 'Mutiah dkk. (2019, hal. 17) memaparkan bahwa "Etika dalam komunikasi amatlah penting", karena ketika berkomunikasi dalam sebuah komunitas terdapat individu dari beragam latar belakang, usia, dan kultur budaya.'
        },
        {
          title: 'Dampak Jangka Panjang',
          desc: 'Perilaku daring bukan sekadar konsumsi sesaat; apa yang kita ketik akan terarsip permanen dan membentuk rekam jejak reputasi seumur hidup.'
        }
      ]
    }
  },
  {
    pageNumber: 11,
    slug: 'mengapa-penting',
    title: 'Mengapa Etiket Digital Penting Diajarkan?',
    subtitle: '4 Alasan Krusial menurut Kusuma Astuti dkk. (2021)',
    hashtag: '#IZINSEBELUMSEBAR',
    category: 'aturan',
    content: {
      lead: 'Ada 4 alasan fundamental mengapa pendidikan etiket siber mendesak diajarkan kepada seluruh generasi (Kusuma Astuti dkk., 2021, hal. 10):',
      points: [
        {
          title: '1. Manusia Nyata di Balik Layar',
          desc: 'Meskipun berada di dunia digital, kita tetaplah manusia yang perlu mematuhi norma moral sebagaimana kehidupan nyata sehari-hari.'
        },
        {
          title: '2. Kemajemukan Lintas Budaya',
          desc: 'Pengguna internet berasal dari berbagai daerah dan negara dengan perbedaan bahasa, sensitivitas budaya, dan tradisi lokal.'
        },
        {
          title: '3. Bahaya Anonimitas Semu',
          desc: 'Internet memungkinkan interaksi secara anonim (tanpa identitas nyata). Hal ini menuntut integritas moral yang jauh lebih tinggi untuk tidak menyalahgunakan kebebasan.'
        },
        {
          title: '4. Ragam Fitur Membuka Peluang Perilaku',
          desc: 'Fitur komentar, siaran langsung, pesan instan, dan algoritma rekomendasi membuka peluang besar bagi seseorang untuk bertindak etis maupun tidak etis.'
        }
      ]
    }
  },
  {
    pageNumber: 12,
    slug: 'indikator-kominfo',
    title: 'Indikator dalam Etiket Digital',
    subtitle: 'Pedoman Roadmap Literasi Digital Kominfo 2021-2024',
    hashtag: '#PIKIRSEBELUMKLIK',
    category: 'aturan',
    content: {
      lead: 'Kementerian Komunikasi dan Informatika merumuskan 4 kompetensi inti pilar Netiket dalam Roadmap Literasi Digital Nasional:',
      points: [
        {
          title: '1. Pengetahuan Regulasi & Netiket',
          desc: 'Memahami peraturan perundang-undangan, tata krama, kaidah kesopanan, dan etika berinternet secara komprehensif.'
        },
        {
          title: '2. Pemilahan Hoaks & Konten Terlarang',
          desc: 'Kecakapan membedakan informasi faktual vs hoaks, serta menolak paparan konten negatif seperti pornografi, judi online, dan perundungan.'
        },
        {
          title: '3. Partisipasi & Kolaborasi Berkeadaban',
          desc: 'Kecakapan berinteraksi, berdiskusi, dan berkolaborasi dalam ruang virtual sesuai tata susila dan nilai musyawarah.'
        },
        {
          title: '4. Keamanan Transaksi Elektronik',
          desc: 'Pengetahuan dasar bertransaksi secara elektronik, e-commerce, dan perdagangan siber yang legal serta terhindar dari penipuan.'
        }
      ]
    }
  },
  {
    pageNumber: 13,
    slug: '10-aturan-shea',
    title: '10 Aturan Inti dalam Etiket Digital',
    subtitle: 'The Core Rules of Netiquette (Virginia Shea, 2011)',
    hashtag: '#BERSAMABERETIKADIGITAL',
    category: 'aturan',
    content: {
      lead: 'Standar netiket internasional paling diakui dunia yang wajib diadopsi dalam kehidupan bersosial media sehari-hari:',
      points: [
        { title: 'Rule 1: Remember the Human', desc: 'Ingat bahwa di balik layar ada manusia bernyawa. Gunakan kata-kata sopan dan hargai perasaan sesama.' },
        { title: 'Rule 2: Adhere to Real Life Standards', desc: 'Terapkan standar moral dan hukum yang sama persis sebagaimana di dunia nyata.' },
        { title: 'Rule 3: Know Where You Are in Cyberspace', desc: 'Pahami norma tiap platform; gaya obrolan di grup santai berbeda dengan forum profesional.' },
        { title: 'Rule 4: Respect Other\'s Time & Bandwidth', desc: 'Hargai waktu orang lain; jangan spam pesan berantai, broadcast hoaks, atau kirim file berat tanpa izin.' },
        { title: 'Rule 5: Make Yourself Look Good Online', desc: 'Tunjukkan pribadi berintegritas, ejaan yang baik, argumen berbobot, dan santun bertutur kata.' },
        { title: 'Rule 6: Share Expert Knowledge', desc: 'Bagikan informasi yang bermanfaat, akurat, dan dapat diverifikasi dari sumber terpercaya.' },
        { title: 'Rule 7: Help Keep Flame Wars Under Control', desc: 'Kendalikan amarah; jangan terpancing atau memprovokasi debat kusir yang berubah menjadi permusuhan.' },
        { title: 'Rule 8: Respect Other People\'s Privacy', desc: 'Jangan pernah menyebarkan tangkapan layar chat pribadi, nomor kontak, atau foto orang lain tanpa izin.' },
        { title: 'Rule 9: Don\'t Abuse Your Power', desc: 'Bila memiliki akses admin atau keahlian teknis lebih tinggi, gunakan untuk melindungi bukan menindas.' },
        { title: 'Rule 10: Be Forgiving of Others\' Mistakes', desc: 'Maafkan kekeliruan pemula; berikan koreksi dan nasihat santun secara privat di jalur pribadi (DM).' }
      ]
    }
  },
  {
    pageNumber: 14,
    slug: 'panduan-brooks',
    title: 'Netiquette Guidelines (Brooks, A., 2019)',
    subtitle: '3 Prinsip Praktis Saat Membuka Ponsel',
    hashtag: '#KOMENTARDENGANEMPATI',
    category: 'aturan',
    content: {
      lead: 'Dalam menerapkan etiket digital, setiap pengguna memerlukan panduan praktis yang mudah diingat sebelum bertindak:',
      points: [
        {
          title: '1. Read First (Baca Terlebih Dahulu!)',
          desc: 'Sebelum memberikan reaksi, komentar, atau penilaian, pahami secara utuh isi bacaan atau konteks video secara tuntas. Jangan menghakimi hanya dari judul sensasional.'
        },
        {
          title: '2. Think Before You Type (Jarimu, Harimaumu!)',
          desc: 'Berhati-hatilah sebelum mengetik. Pertimbangkan dampak psikologis dan hukum yang dapat ditimbulkan dari setiap kata terhadap nama baik dan perasaan orang lain.'
        },
        {
          title: '3. Be Kind and Professional (Bersikaplah Baik & Santun)',
          desc: 'Tunjukkan rasa hormat, empati, dan profesionalisme di ruang digital sama halnya dengan adab bertatap muka langsung.'
        }
      ],
      quote: {
        text: 'Jari kita mungkin hanya menyentuh layar, tetapi kata-kata yang kita tuliskan dapat menyentuh hati orang lain.',
        author: 'Brooks, A. (2019)'
      }
    }
  },
  {
    pageNumber: 15,
    slug: 'do-and-donts',
    title: 'Yuk, Jadi Warga Digital yang Bijak!',
    subtitle: 'Panduan Praktis Do & Don\'t di Ruang Digital',
    hashtag: '#BIJAKBERDIGITAL',
    category: 'aturan',
    content: {
      lead: 'Gunakan teknologi dengan cerdas, jaga sopan santun, dan hormati orang lain dengan menerapkan panduan berikut:',
      points: [
        { title: 'DO: Gunakan bahasa yang santun', desc: 'Pilihlah kosakata yang tidak menyinggung SARA dan hindari ALL CAPS yang bernada membentak.' },
        { title: 'DO: Cek informasi sebelum sharing', desc: 'Verifikasi keaslian berita ke portal resmi (CekFakta, Kominfo) sebelum meneruskannya.' },
        { title: 'DO: Lindungi data pribadi', desc: 'Amankan kata sandi, aktifkan 2FA, dan jaga kerahasiaan NIK serta nomor perbankan.' },
        { title: 'DO: Hargai orang lain di dunia maya', desc: 'Berikan apresiasi pada karya sesama dan dukung interaksi yang membangun.' },
        { title: 'DO: Pikirkan dampak sebelum unggah', desc: 'Pastikan unggahan tidak memicu perpecahan atau penyesalan jejak digital di masa depan.' },
        { title: 'DON\'T: Jangan sebar data pribadi (Doxing)', desc: 'Menyebarkan identitas orang lain tanpa persetujuan adalah kejahatan siber.' },
        { title: 'DON\'T: Jangan menyebarkan hoaks', desc: 'Kabar bohong menimbulkan kepanikan sosial dan memiliki konsekuensi pidana.' },
        { title: 'DON\'T: Jangan unggah foto orang tanpa izin', desc: 'Wajib meminta persetujuan sebelum mempublikasikan visual rekan atau anak-anak.' },
        { title: 'DON\'T: Jangan berkomentar kasar & mencela', desc: 'Komentar bernada ejekan, fitnah, dan hinaan fisik melanggar hukum serta merusak mental korban.' }
      ]
    }
  },
  {
    pageNumber: 16,
    slug: 'kasus-komentar-buruk',
    title: 'Komentar Buruk Netizen: Tidak untuk Ditiru!',
    subtitle: 'Studi Kasus & Bahaya Perundungan Siber',
    hashtag: '#JARIMUHARIMAUMU',
    category: 'risiko',
    content: {
      lead: 'Komentar buruk di ruang digital dapat berupa ancaman, ejekan, hinaan penampilan (body shaming), ujaran kebencian terhadap SARA, provokasi, dan pelecehan seksual online (sexual harassment).',
      points: [
        {
          title: 'Ilustrasi Nyata di Media Sosial',
          desc: 'Handbook ini mendokumentasikan contoh nyata komentar pelecehan verbal di kolom komentar artis/kreator (seperti Bernadya dll) yang memperlihatkan rendahnya empati sebagian oknum netizen.'
        },
        {
          title: 'Dampak Traumatis bagi Korban',
          desc: 'Perundungan digital dapat memicu kecemasan akut, depresi berat, penarikan diri dari lingkungan sosial, hingga hilangnya masa depan korban.'
        }
      ],
      quote: {
        text: 'Di ruang digital, setiap kata meninggalkan jejak. Maka, bacalah dengan bijak, pikirkan sebelum mengetik, dan berkomunikasilah dengan penuh rasa hormat.',
        author: 'Kampanye Etika Digital UBP Karawang'
      }
    }
  },
  {
    pageNumber: 17,
    slug: 'instrumen-hukum',
    title: 'Instrumen Hukum Siber di Indonesia',
    subtitle: 'Konstitusi & UU Informasi dan Transaksi Elektronik (ITE)',
    hashtag: '#NETIZENBERETIKA',
    category: 'hukum',
    content: {
      lead: 'Pasal 1 Ayat (3) UUD NRI Tahun 1945 menegaskan: "Negara Indonesia adalah negara hukum". Kebebasan di ruang maya tidak bebas nilai, melainkan diatur oleh Undang-Undang No. 19 Tahun 2016 jo UU ITE.',
      points: [
        {
          title: 'Pasal 27 Ayat (1) — Muatan Kesusilaan',
          desc: 'Melarang setiap orang dengan sengaja dan tanpa hak mendistribusikan/mentransmisikan informasi elektronik yang memiliki muatan melanggar kesusilaan atau pornografi.'
        },
        {
          title: 'Pasal 27 Ayat (2) — Muatan Perjudian',
          desc: 'Melarang pendistribusian atau fasilitasi akses dokumen elektronik yang bermuatan perjudian online.'
        },
        {
          title: 'Pasal 27 Ayat (3) — Penghinaan & Pencemaran Nama Baik',
          desc: 'Melarang transmisi dokumen elektronik yang memiliki muatan penghinaan, fitnah, dan/atau pencemaran nama baik seseorang.'
        },
        {
          title: 'Pasal 27 Ayat (4) — Pemerasan & Pengancaman',
          desc: 'Melarang penggunaan sarana elektronik untuk melakukan pemerasan dan/atau pengancaman kepada pihak lain.'
        },
        {
          title: 'Sanksi Pidana Pasal 45 Ayat (1)',
          desc: 'Pelanggar ketentuan di atas dipidana dengan pidana penjara paling lama 6 (enam) tahun dan/atau denda paling banyak Rp 1.000.000.000,00 (satu miliar rupiah).',
          badge: 'Sanksi Berat'
        }
      ]
    }
  },
  {
    pageNumber: 18,
    slug: 'daftar-rujukan-1',
    title: 'Daftar Rujukan Bagian 1',
    subtitle: 'Literatur Akademik & Sumber Data Nasional',
    hashtag: '#KLIKDENGANBIJAK',
    category: 'rujukan',
    content: {
      points: [
        { title: 'Antoni, A. (2018)', desc: 'Kejahatan Dunia Maya (Cyber Crime) Dalam Simak Online. Nurani: Jurnal Kajian Syari’ah dan Masyarakat, 17(2), 261–274.' },
        { title: 'APJII (2023)', desc: 'Asosiasi Penyelenggara Jasa Internet Indonesia: Survei Pengguna Internet di Indonesia Tembus 215 Juta Orang.' },
        { title: 'BPS (2023)', desc: 'Badan Pusat Statistik: Data Jumlah Penduduk Indonesia Tahun 2023 (Proyeksi 278,8 Juta Jiwa).' },
        { title: 'Brooks, A. (2019)', desc: '10 Netiquette Guidelines Online Students Need to Know. Rasmussen University.' },
        { title: 'Ferdinand, G. R., dkk. (2017)', desc: 'Etika dalam Kehidupan Bermasyarakat. Universitas Atma Jaya.' },
        { title: 'KBBI (2024)', desc: 'Kamus Besar Bahasa Indonesia: Entri Resmi "Etika". Kemendikbudristek.' },
        { title: 'Komalasari, K., dkk. (2023)', desc: 'Students’ Digital Citizenship at Junior High School in Bandung Indonesia. ASSEHR, 885–892.' },
        { title: 'Kominfo RI (2021)', desc: 'Roadmap Literasi Digital 2021-2024: Menuju Indonesia Digital Nation.' },
        { title: 'Kurniawaty, I., & Faiz, A. (2022)', desc: 'Urgensi Digital Literasi Menuju Masyarakat Global Citizen. Jurnal Pendidikan Tambusai, 6(2), 1–2.' }
      ]
    }
  },
  {
    pageNumber: 19,
    slug: 'daftar-rujukan-2',
    title: 'Daftar Rujukan Bagian 2',
    subtitle: 'Kepustakaan Filsafat, Netiket, & Kewarganegaraan',
    hashtag: '#IZINSEBELUMSEBAR',
    category: 'rujukan',
    content: {
      points: [
        { title: 'Kusumastuti, F., Astuti, S. I., dkk. (2021)', desc: 'Modul Etis Bermedia Digital. Kementerian Kominfo & Japelidi.' },
        { title: 'Magnis-Suseno, F. (1989)', desc: 'Etika Dasar: Masalah-Masalah Pokok Filsafat Moral. Penerbit Kanisius.' },
        { title: 'Miller, A. C. (2002)', desc: 'Definitions and Dimensions of Etiquette. American Association for Artificial Intelligence.' },
        { title: 'Mutiah, T., Albar, I., dkk. (2019)', desc: 'Etika Komunikasi Dalam Media Sosial. Global Komunika, 1(1), 14–24.' },
        { title: 'Ribble, M. (2012)', desc: 'Digital citizenship for educational change. Kappa Delta Pi Record, 48(4), 148–151.' },
        { title: 'Ribble, M., & Bailey, G. (2007)', desc: 'Digital citizenship in schools. International Society for Technology in Education (ISTE).' },
        { title: 'Shea, V. (2011)', desc: 'The Core Rules of Netiquette. Albion Books.' },
        { title: 'Yusuf, I. M. (2017)', desc: 'Etika vs etiket: Suatu telaah tentang tuntutan dan tuntunan dalam penyelenggaraan pelayanan publik. Moderat, 3(2), 60–78.' },
        { title: 'Wulantika, L. (2011)', desc: 'Etika dan Etiket. Universitas Komputer Indonesia (UNIKOM).' }
      ]
    }
  },
  {
    pageNumber: 20,
    slug: 'penutup-sdgs',
    title: 'Bijak di Dunia Digital & SDGs 16',
    subtitle: 'Komitmen Bersama Menuju Harmoni Digital',
    hashtag: '#BERSAMABERETIKADIGITAL',
    category: 'pengantar',
    content: {
      lead: 'Ruang digital adalah bagian dari kehidupan kita sehari-hari. Setiap unggahan, komentar, pesan, dan informasi yang kita bagikan membawa dampak bagi diri sendiri maupun sesama.',
      points: [
        {
          title: 'Pancasila sebagai Kompas Digital',
          desc: 'Beriman & Beretika (Sila 1), Menghargai Sesama (Sila 2), Menjaga Persatuan (Sila 3), Bermusyawarah dengan Bijak (Sila 4), Berkeadilan & Bertanggung Jawab (Sila 5).'
        },
        {
          title: 'Aksi Nyata di Desa Sukaluyu',
          desc: 'Menjadi wadah bersama warga desa untuk saling mengingatkan, memupuk empati, dan menjaga kerukunan antartetangga baik di dunia nyata maupun di grup media sosial.'
        },
        {
          title: 'Kontribusi Nyata SDGs 16',
          desc: 'Mendukung terciptanya masyarakat yang damai, berkeadilan, inklusif, dan menjunjung tinggi supremasi hukum di era peradaban teknologi.'
        }
      ]
    }
  }
];

export const HANDBOOK_PAGES: HandbookPage[] = RAW_PAGES.map(p => ({
  ...p,
  pageLabel: p.pageLabel || getPageLabel(p.pageNumber),
  imageUrl: p.imageUrl || getPageImageUrl(p.pageNumber),
  imageFileName: p.imageFileName || getPageImageFileName(p.pageNumber),
}));


