import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outputDir = path.resolve('public/handbook');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

// Data definitions for 20 pages
const pagesData = [
  {
    num: 1,
    label: 'Cover',
    tag: '#BERSAMABERETIKADIGITAL',
    userFile: 'Project Handbook Etika Digital - Cover Depan [DONE].png',
    title: 'ETIKA DIGITAL',
    subtitle: 'BERBASIS PANCASILA',
    type: 'cover'
  },
  {
    num: 2,
    label: 'i',
    tag: '#ETIKADIBALIKLAYAR',
    userFile: 'Project Handbook Etika Digital - Identitas Handbook [DONE].png',
    title: 'Identitas Handbook',
    subtitle: 'Data Proyek & Sasaran Pengguna',
    type: 'identitas'
  },
  {
    num: 3,
    label: 'ii',
    tag: '#DIGITALDENGANETIKA',
    userFile: 'Project Handbook Etika Digital - Kata Pengantar [DONE].png',
    title: 'Kata Pengantar',
    subtitle: 'Amanat Edukatif & Nilai Luhur Bangsa',
    type: 'pengantar'
  },
  {
    num: 4,
    label: 'iii',
    tag: '#BERANIBERSUARABIJAKBERKATA',
    userFile: 'Project Handbook Etika Digital - Daftar Isi [DONE].png',
    title: 'Daftar Isi Handbook',
    subtitle: 'Struktur Navigasi & Pembahasan',
    type: 'daftar_isi'
  },
  {
    num: 5,
    label: '1',
    tag: '#KLIKDENGANBIJAK',
    userFile: 'Project Handbook Etika Digital - Latar Belakang [DONE].png',
    title: 'Latar Belakang',
    subtitle: 'Transformasi Ruang Hidup Masyarakat',
    type: 'latar_belakang'
  },
  {
    num: 6,
    label: '2',
    tag: '#SANTUNDIDUNIAMAYA',
    userFile: 'Project Handbook Etika Digital - Data dan Fakta Internet [DONE].png',
    title: 'Data & Fakta Pengguna Internet',
    subtitle: 'Paradoks Keramahan Nyata vs Keberadaban Siber',
    type: 'hasil_survei'
  },
  {
    num: 7,
    label: '3',
    tag: '#BERSAMABERETIKADIGITAL',
    userFile: 'Project Handbook Etika Digital - Risiko Digital dan 5 Sila [DONE].png',
    title: 'Kenali Risiko & 5 Sila Pancasila',
    subtitle: 'Menjaga Nilai Moral Agar Tidak Tergerus',
    type: 'risiko_sila'
  },
  {
    num: 8,
    label: '4',
    tag: '#NETIZENBERETIKA',
    userFile: 'Project Handbook Etika Digital - Digital Citizenship [DONE].png',
    title: 'Digital Citizenship',
    subtitle: 'Kewarganegaraan Digital: 9 Elemen Standar',
    type: 'digital_citizenship'
  },
  {
    num: 9,
    label: '5',
    tag: '#SARINGSEBELUMSHARING',
    userFile: 'Project Handbook Etika Digital - Etika vs Etiket [DONE].png',
    title: 'Perbedaan Mendasar Etika & Etiket',
    subtitle: 'Kajian Filosofis Bahasa & Teori Moral',
    type: 'etika_vs_etiket'
  },
  {
    num: 10,
    label: '6',
    tag: '#BEDAPENDAPATTETAPHORMAT',
    userFile: 'Project Handbook Etika Digital - Digital Etiquette [DONE].png',
    title: 'Digital Etiquette (Etiket Digital)',
    subtitle: 'Aturan Main Tak Tertulis di Dunia Siber',
    type: 'digital_etiquette'
  },
  {
    num: 11,
    label: '7',
    tag: '#IZINSEBELUMSEBAR',
    userFile: 'Project Handbook Etika Digital - Mengapa Penting Diajarkan [DONE].png',
    title: 'Mengapa Etiket Digital Penting?',
    subtitle: '4 Alasan Krusial (Kusuma Astuti dkk., 2021)',
    type: 'mengapa_penting'
  },
  {
    num: 12,
    label: '8',
    tag: '#PIKIRSEBELUMKLIK',
    userFile: 'Project Handbook Etika Digital - Indikator Etiket Digital [DONE].png',
    title: 'Indikator dalam Etiket Digital',
    subtitle: 'Roadmap Literasi Digital Kominfo RI 2021-2024',
    type: 'indikator_kominfo'
  },
  {
    num: 13,
    label: '9',
    tag: '#BERSAMABERETIKADIGITAL',
    userFile: 'Project Handbook Etika Digital - 10 Aturan Inti Shea [DONE].png',
    title: '10 Aturan Inti dalam Etiket Digital',
    subtitle: 'The Core Rules of Netiquette (Virginia Shea)',
    type: 'aturan_shea'
  },
  {
    num: 14,
    label: '10',
    tag: '#KOMENTARDENGANEMPATI',
    userFile: 'Project Handbook Etika Digital - Panduan Brooks [DONE].png',
    title: 'Netiquette Guidelines (Brooks, 2019)',
    subtitle: '3 Prinsip Praktis Saat Membuka Ponsel',
    type: 'panduan_brooks'
  },
  {
    num: 15,
    label: '11',
    tag: '#BIJAKBERDIGITAL',
    userFile: 'Project Handbook Etika Digital - Do and Donts [DONE].png',
    title: 'Yuk, Jadi Warga Digital yang Bijak!',
    subtitle: 'Panduan Praktis Do & Don’t di Ruang Siber',
    type: 'do_and_donts'
  },
  {
    num: 16,
    label: '12',
    tag: '#JARIMUHARIMAUMU',
    userFile: 'Project Handbook Etika Digital - Kasus Komentar Buruk Netizen [DONE].png',
    title: 'Komentar Buruk: Tidak untuk Ditiru!',
    subtitle: 'Studi Kasus & Bahaya Perundungan Siber',
    type: 'kasus_komentar'
  },
  {
    num: 17,
    label: '13',
    tag: '#NETIZENBERETIKA',
    userFile: 'Project Handbook Etika Digital - Instrumen Hukum UU ITE [DONE].png',
    title: 'Instrumen Hukum Siber di Indonesia',
    subtitle: 'UUD 1945 & UU ITE No. 19/2016 Pasal 27 & 45',
    type: 'hukum_ite'
  },
  {
    num: 18,
    label: '14',
    tag: '#KLIKDENGANBIJAK',
    userFile: 'Project Handbook Etika Digital - Daftar Rujukan Bagian 1 [DONE].png',
    title: 'Daftar Rujukan (Bagian 1)',
    subtitle: 'Literatur Akademik & Data Nasional',
    type: 'rujukan_1'
  },
  {
    num: 19,
    label: '15',
    tag: '#IZINSEBELUMSEBAR',
    userFile: 'Project Handbook Etika Digital - Daftar Rujukan Bagian 2 [DONE].png',
    title: 'Daftar Rujukan (Bagian 2)',
    subtitle: 'Kepustakaan Filsafat & Kewarganegaraan',
    type: 'rujukan_2'
  },
  {
    num: 20,
    label: '16',
    tag: '#BERSAMABERETIKADIGITAL',
    userFile: 'Project Handbook Etika Digital - Cover Belakang [DONE].png',
    title: 'Bijak di Dunia Digital & SDGs 16',
    subtitle: 'Komitmen Bersama Menuju Harmoni Siber',
    type: 'cover_belakang'
  }
];

function buildSvgForPage(p) {
  const isCover = p.type === 'cover';
  const isBack = p.type === 'cover_belakang';

  const header = !isCover && !isBack ? `
    <rect x="0" y="0" width="1200" height="70" fill="#ffffff" fill-opacity="0.9" stroke="#93c5fd" stroke-width="1.5"/>
    <text x="50" y="44" fill="#0369a1" font-size="20" font-family="system-ui, sans-serif" font-weight="800" letter-spacing="2">KAMPANYE ETIKA DIGITAL</text>
    <rect x="1000" y="18" width="46" height="34" rx="8" fill="#0284c7"/>
    <text x="1023" y="42" fill="#ffffff" font-size="18" font-family="system-ui, sans-serif" font-weight="900" text-anchor="middle">ED</text>
    <text x="1060" y="42" fill="#082f49" font-size="20" font-family="system-ui, sans-serif" font-weight="900">ETIKADIGITAL</text>
  ` : '';

  const footer = `
    <rect x="0" y="1610" width="1200" height="90" fill="url(#blueBar)"/>
    <text x="50" y="1665" fill="#f0f9ff" font-size="22" font-family="monospace" font-weight="800">${escapeXml(p.tag)}</text>
    
    <circle cx="600" cy="1655" r="28" fill="#f59e0b"/>
    <text x="600" y="1663" fill="#0f172a" font-size="20" font-family="system-ui, sans-serif" font-weight="900" text-anchor="middle">${escapeXml(p.label)}</text>

    <text x="1120" y="1667" fill="#facc15" font-size="32" font-family="system-ui, sans-serif" font-weight="900" text-anchor="middle">✦ ✦</text>
  `;

  // Content body per page type
  let body = '';

  if (p.type === 'cover') {
    body = `
      <rect x="60" y="60" width="1080" height="90" rx="20" fill="#ffffff" fill-opacity="0.95" stroke="#93c5fd" stroke-width="2"/>
      <circle cx="115" cy="105" r="28" fill="#0369a1"/>
      <text x="115" y="113" fill="#ffffff" font-size="20" font-family="system-ui, sans-serif" font-weight="900" text-anchor="middle">UBP</text>
      <text x="160" y="98" fill="#082f49" font-size="20" font-family="system-ui, sans-serif" font-weight="800">PPG CALON GURU</text>
      <text x="160" y="122" fill="#0369a1" font-size="16" font-family="system-ui, sans-serif" font-weight="600">Universitas Buana Perjuangan Karawang</text>

      <rect x="940" y="82" width="160" height="46" rx="12" fill="#e0f2fe"/>
      <text x="1020" y="112" fill="#0369a1" font-size="18" font-family="system-ui, sans-serif" font-weight="800" text-anchor="middle">SDGs 16</text>

      <text x="600" y="270" fill="#075985" font-size="32" font-family="system-ui, sans-serif" font-weight="800" letter-spacing="4" text-anchor="middle">HANDBOOK</text>
      <text x="600" y="370" fill="#082f49" font-size="76" font-family="system-ui, sans-serif" font-weight="900" letter-spacing="1" text-anchor="middle">ETIKA DIGITAL</text>
      <text x="600" y="450" fill="#2563eb" font-size="52" font-family="system-ui, sans-serif" font-weight="800" letter-spacing="2" text-anchor="middle">BERBASIS PANCASILA</text>

      <rect x="300" y="500" width="600" height="84" rx="42" fill="#ffffff" fill-opacity="0.9" stroke="#bae6fd" stroke-width="2"/>
      <text x="600" y="536" fill="#0c4a6e" font-size="22" font-family="system-ui, sans-serif" font-weight="700" text-anchor="middle">Tim (C) Projek Kepemimpinan PPG PPKN</text>
      <text x="600" y="566" fill="#0284c7" font-size="19" font-family="system-ui, sans-serif" font-weight="600" text-anchor="middle">Universitas Buana Perjuangan Karawang</text>

      <rect x="250" y="640" width="700" height="660" rx="40" fill="#ffffff" fill-opacity="0.8" stroke="#ffffff" stroke-width="3"/>
      
      <rect x="440" y="700" width="320" height="440" rx="36" fill="#0f172a" stroke="#ffffff" stroke-width="8"/>
      <rect x="460" y="730" width="280" height="380" rx="20" fill="#1e293b"/>
      
      <rect x="485" y="770" width="230" height="150" rx="16" fill="#2563eb"/>
      <text x="600" y="835" fill="#ffffff" font-size="26" font-family="system-ui, sans-serif" font-weight="900" text-anchor="middle">Etika &amp; Netiket</text>
      <text x="600" y="870" fill="#dbeafe" font-size="18" font-family="system-ui, sans-serif" font-weight="600" text-anchor="middle">Desa Sukaluyu</text>
      
      <text x="600" y="980" fill="#38bdf8" font-size="22" font-family="system-ui, sans-serif" font-weight="700" text-anchor="middle">#JarimuHarimaumu</text>
      <text x="600" y="1020" fill="#94a3b8" font-size="16" font-family="system-ui, sans-serif" text-anchor="middle">Sopan • Kritis • Berkeadaban</text>

      <rect x="310" y="1190" width="160" height="50" rx="25" fill="#dbeafe"/>
      <text x="390" y="1222" fill="#1e40af" font-size="18" font-family="system-ui, sans-serif" font-weight="800" text-anchor="middle">Keadilan</text>

      <rect x="520" y="1190" width="160" height="50" rx="25" fill="#d1fae5"/>
      <text x="600" y="1222" fill="#065f46" font-size="18" font-family="system-ui, sans-serif" font-weight="800" text-anchor="middle">Persatuan</text>

      <rect x="730" y="1190" width="160" height="50" rx="25" fill="#fef3c7"/>
      <text x="810" y="1222" fill="#92400e" font-size="18" font-family="system-ui, sans-serif" font-weight="800" text-anchor="middle">Musyawarah</text>

      <rect x="120" y="1380" width="960" height="120" rx="24" fill="#ffffff" fill-opacity="0.95" stroke="#93c5fd" stroke-width="2"/>
      <text x="160" y="1430" fill="#0c4a6e" font-size="24" font-family="system-ui, sans-serif" font-weight="800">Mendukung Pencapaian SDGs 16</text>
      <text x="160" y="1468" fill="#0284c7" font-size="18" font-family="system-ui, sans-serif" font-weight="600">Peace, Justice, and Strong Institutions (Perdamaian, Keadilan, &amp; Kelembagaan Tangguh)</text>
      <rect x="940" y="1405" width="100" height="70" rx="16" fill="#0369a1"/>
      <text x="990" y="1450" fill="#ffffff" font-size="34" font-family="system-ui, sans-serif" font-weight="900" text-anchor="middle">16</text>
    `;
  } else if (p.type === 'identitas') {
    body = `
      <text x="600" y="150" fill="#082f49" font-size="44" font-family="system-ui, sans-serif" font-weight="900" text-anchor="middle">Identitas Handbook</text>
      <text x="600" y="195" fill="#0369a1" font-size="22" font-family="system-ui, sans-serif" font-weight="600" text-anchor="middle">Spesifikasi Projek &amp; Sasaran Pengguna</text>

      <rect x="80" y="240" width="1040" height="1280" rx="28" fill="#ffffff" fill-opacity="0.96" stroke="#93c5fd" stroke-width="2"/>

      <!-- Table Rows -->
      <!-- Row 1 -->
      <rect x="80" y="240" width="340" height="140" fill="#f0f9ff" rx="28 0 0 0"/>
      <text x="110" y="320" fill="#0369a1" font-size="24" font-family="system-ui, sans-serif" font-weight="800">Judul Handbook</text>
      <text x="450" y="305" fill="#0f172a" font-size="24" font-family="system-ui, sans-serif" font-weight="800">Handbook “Etika Digital Berbasis Nilai Pancasila”</text>
      <text x="450" y="340" fill="#475569" font-size="19" font-family="system-ui, sans-serif">Panduan Praktis Bersama Beretika Digital Masyarakat</text>
      <line x1="80" y1="380" x2="1120" y2="380" stroke="#e2e8f0" stroke-width="2"/>

      <!-- Row 2 -->
      <rect x="80" y="380" width="340" height="160" fill="#ffffff"/>
      <text x="110" y="465" fill="#0369a1" font-size="24" font-family="system-ui, sans-serif" font-weight="800">Tema Projek</text>
      <text x="450" y="445" fill="#1e293b" font-size="22" font-family="system-ui, sans-serif" font-weight="600">Kampanye Etika Digital Berbasis Pancasila di Desa Sukaluyu,</text>
      <text x="450" y="480" fill="#1e293b" font-size="22" font-family="system-ui, sans-serif" font-weight="600">Kecamatan Telukjambe Timur, Kabupaten Karawang</text>
      <line x1="80" y1="540" x2="1120" y2="540" stroke="#e2e8f0" stroke-width="2"/>

      <!-- Row 3 -->
      <rect x="80" y="540" width="340" height="140" fill="#f0f9ff"/>
      <text x="110" y="625" fill="#0369a1" font-size="24" font-family="system-ui, sans-serif" font-weight="800">Keterkaitan SDGs</text>
      <text x="450" y="605" fill="#1e293b" font-size="22" font-family="system-ui, sans-serif" font-weight="700">SDG 16: Peace, Justice, and Strong Institutions</text>
      <text x="450" y="640" fill="#475569" font-size="19" font-family="system-ui, sans-serif">(Perdamaian, Keadilan, dan Kelembagaan yang Tangguh)</text>
      <line x1="80" y1="680" x2="1120" y2="680" stroke="#e2e8f0" stroke-width="2"/>

      <!-- Row 4 -->
      <rect x="80" y="680" width="340" height="340" fill="#ffffff"/>
      <text x="110" y="800" fill="#0369a1" font-size="24" font-family="system-ui, sans-serif" font-weight="800">Sasaran Pengguna</text>
      <text x="450" y="730" fill="#0f172a" font-size="22" font-family="system-ui, sans-serif" font-weight="700">Warga Desa Sukaluyu, khususnya:</text>
      <text x="470" y="775" fill="#334155" font-size="20" font-family="system-ui, sans-serif">• Remaja dan pemuda desa</text>
      <text x="470" y="815" fill="#334155" font-size="20" font-family="system-ui, sans-serif">• Pengurus &amp; Anggota Karang Taruna</text>
      <text x="470" y="855" fill="#334155" font-size="20" font-family="system-ui, sans-serif">• Siswa SMA / SMK / Sederajat</text>
      <text x="470" y="895" fill="#334155" font-size="20" font-family="system-ui, sans-serif">• Kelompok Ibu-ibu PKK &amp; Pengurus RT/RW</text>
      <text x="470" y="935" fill="#334155" font-size="20" font-family="system-ui, sans-serif">• Tokoh Masyarakat, Tokoh Agama, &amp; Perangkat Desa</text>
      <line x1="80" y1="1020" x2="1120" y2="1020" stroke="#e2e8f0" stroke-width="2"/>

      <!-- Row 5 -->
      <rect x="80" y="1020" width="340" height="260" fill="#f0f9ff"/>
      <text x="110" y="1150" fill="#0369a1" font-size="24" font-family="system-ui, sans-serif" font-weight="800">Tujuan Handbook</text>
      <text x="450" y="1075" fill="#1e293b" font-size="21" font-family="system-ui, sans-serif">Menjadi panduan praktis bagi warga dalam menerapkan etika</text>
      <text x="450" y="1115" fill="#1e293b" font-size="21" font-family="system-ui, sans-serif">digital berdasarkan nilai-nilai Pancasila untuk menciptakan</text>
      <text x="450" y="1155" fill="#1e293b" font-size="21" font-family="system-ui, sans-serif">interaksi digital yang santun, aman, bertanggung jawab, dan</text>
      <text x="450" y="1195" fill="#1e293b" font-size="21" font-family="system-ui, sans-serif">menjaga keharmonisan serta kerukunan masyarakat.</text>
      <line x1="80" y1="1280" x2="1120" y2="1280" stroke="#e2e8f0" stroke-width="2"/>

      <!-- Row 6 -->
      <rect x="80" y="1280" width="340" height="120" fill="#ffffff"/>
      <text x="110" y="1350" fill="#0369a1" font-size="24" font-family="system-ui, sans-serif" font-weight="800">Penyusun</text>
      <text x="450" y="1335" fill="#0f172a" font-size="22" font-family="system-ui, sans-serif" font-weight="700">Tim (C) Projek Kepemimpinan PPG PPKN</text>
      <text x="450" y="1370" fill="#475569" font-size="19" font-family="system-ui, sans-serif">Universitas Buana Perjuangan Karawang, 2026</text>
      <line x1="80" y1="1400" x2="1120" y2="1400" stroke="#e2e8f0" stroke-width="2"/>

      <!-- Row 7 -->
      <rect x="80" y="1400" width="340" height="120" fill="#f0f9ff" rx="0 0 0 28"/>
      <text x="110" y="1470" fill="#0369a1" font-size="24" font-family="system-ui, sans-serif" font-weight="800">Tahun &amp; Lokasi</text>
      <text x="450" y="1470" fill="#082f49" font-size="24" font-family="system-ui, sans-serif" font-weight="800">2026 — Desa Sukaluyu, Telukjambe Timur, Karawang</text>
    `;
  } else if (p.type === 'pengantar') {
    body = `
      <text x="600" y="150" fill="#082f49" font-size="44" font-family="system-ui, sans-serif" font-weight="900" text-anchor="middle">Kata Pengantar</text>
      <text x="600" y="195" fill="#0369a1" font-size="22" font-family="system-ui, sans-serif" font-weight="600" text-anchor="middle">Amanat Edukatif &amp; Pengamalan Nilai Luhur</text>

      <rect x="80" y="240" width="1040" height="1060" rx="28" fill="#ffffff" fill-opacity="0.96" stroke="#93c5fd" stroke-width="2"/>
      <g fill="#1e293b" font-size="22" font-family="system-ui, sans-serif">
        <text x="130" y="320">Puji syukur ke hadirat Tuhan Yang Maha Esa atas rahmat dan karunia-Nya sehingga</text>
        <text x="130" y="360">Handbook <tspan font-weight="800" fill="#082f49">“Etika Digital Berbasis Nilai Pancasila”</tspan> ini dapat disusun sebagai salah</text>
        <text x="130" y="400">satu artefak utama dalam Projek Kepemimpinan Program PPG PPKN Universitas Buana</text>
        <text x="130" y="440">Perjuangan Karawang.</text>

        <text x="130" y="520">Handbook ini disusun sebagai bentuk ikhtiar edukatif untuk mendorong masyarakat,</text>
        <text x="130" y="560">khususnya warga Desa Sukaluyu, agar mampu menggunakan teknologi dan media digital</text>
        <text x="130" y="600">secara bijak, santun, aman, dan bertanggung jawab.</text>

        <text x="130" y="680">Perkembangan teknologi digital memberikan banyak kemudahan dalam berkomunikasi dan</text>
        <text x="130" y="720">memperoleh informasi. Namun, kemudahan tersebut perlu diiringi kesadaran akan etika,</text>
        <text x="130" y="760">tanggung jawab sosial, dan saling menghargai sesama manusia.</text>

        <text x="130" y="840">Oleh karena itu, nilai-nilai Pancasila dihadirkan sebagai landasan dalam membangun perilaku</text>
        <text x="130" y="880">digital yang tidak hanya cakap secara teknologi, tetapi juga menjunjung kemanusiaan,</text>
        <text x="130" y="920">persatuan, musyawarah, keadilan, dan toleransi antarsesama warga bangsa.</text>

        <text x="130" y="1000">Handbook ini memuat panduan praktis: menyaring informasi sebelum membagikannya,</text>
        <text x="130" y="1040">berkomunikasi dengan empati, menjaga privasi diri dan keluarga, serta memahami rekam jejak digital.</text>

        <text x="130" y="1120">Semoga kehadiran handbook ini memberikan manfaat nyata bagi seluruh warga.</text>
      </g>

      <!-- Signature Card -->
      <rect x="680" y="1340" width="440" height="200" rx="20" fill="#ffffff" fill-opacity="0.95" stroke="#93c5fd" stroke-width="2"/>
      <text x="720" y="1390" fill="#64748b" font-size="20" font-family="system-ui, sans-serif">Karawang, 2026</text>
      <text x="720" y="1435" fill="#082f49" font-size="22" font-family="system-ui, sans-serif" font-weight="800">Tim (C) Projek Kepemimpinan</text>
      <text x="720" y="1470" fill="#0284c7" font-size="19" font-family="system-ui, sans-serif" font-weight="700">PPG PPKN Calon Guru</text>
      <text x="720" y="1505" fill="#475569" font-size="17" font-family="system-ui, sans-serif">Universitas Buana Perjuangan Karawang</text>
    `;
  } else if (p.type === 'daftar_isi') {
    const items = [
      { t: 'Latar Belakang Transformasi Digital', hal: '1' },
      { t: 'Data & Fakta Pengguna Internet di Indonesia', hal: '2' },
      { t: 'Kenali Risiko Digital & Nilai 5 Sila Pancasila', hal: '3' },
      { t: 'Digital Citizenship (Kewarganegaraan Digital)', hal: '4' },
      { t: 'Perbedaan Mendasar Etika & Etiket', hal: '5' },
      { t: 'Digital Etiquette (Etiket Digital)', hal: '6' },
      { t: 'Mengapa Etiket Digital Penting Diajarkan?', hal: '7' },
      { t: 'Indikator dalam Etiket Digital (Kominfo)', hal: '8' },
      { t: '10 Aturan Inti dalam Etiket Digital (Shea)', hal: '9' },
      { t: 'Netiquette Guidelines (Brooks, 2019)', hal: '10' },
      { t: 'Yuk, Jadi Warga Digital yang Bijak! (Do & Don’t)', hal: '11' },
      { t: 'Komentar Buruk Netizen Indonesia (Studi Kasus)', hal: '12' },
      { t: 'Instrumen Hukum Siber di Indonesia (UU ITE)', hal: '13' },
      { t: 'Daftar Rujukan Akademik (Bagian 1)', hal: '14' },
      { t: 'Daftar Rujukan Akademik (Bagian 2)', hal: '15' },
      { t: 'Komitmen Bersama & Kontribusi SDGs 16', hal: '16' }
    ];

    let itemsSvg = '';
    items.forEach((item, idx) => {
      const y = 250 + idx * 78;
      itemsSvg += `
        <rect x="80" y="${y}" width="1040" height="66" rx="14" fill="#ffffff" fill-opacity="0.95" stroke="#bae6fd" stroke-width="1.5"/>
        <circle cx="120" cy="${y + 33}" r="16" fill="#0284c7"/>
        <text x="120" y="${y + 39}" fill="#ffffff" font-size="16" font-family="system-ui, sans-serif" font-weight="800" text-anchor="middle">${idx + 1}</text>
        <text x="155" y="${y + 40}" fill="#0f172a" font-size="21" font-family="system-ui, sans-serif" font-weight="700">${escapeXml(item.t)}</text>
        
        <rect x="1010" y="${y + 13}" width="80" height="40" rx="10" fill="#0369a1"/>
        <text x="1050" y="${y + 39}" fill="#ffffff" font-size="20" font-family="system-ui, sans-serif" font-weight="900" text-anchor="middle">Hal. ${item.hal}</text>
      `;
    });

    body = `
      <text x="600" y="150" fill="#082f49" font-size="44" font-family="system-ui, sans-serif" font-weight="900" text-anchor="middle">Daftar Isi Handbook</text>
      <text x="600" y="195" fill="#0369a1" font-size="22" font-family="system-ui, sans-serif" font-weight="600" text-anchor="middle">16 Pembahasan Tematik Edukasi Etika Digital</text>
      ${itemsSvg}
    `;
  } else {
    // Generic high-craft template for pages 5 through 20 based on their actual content
    body = `
      <rect x="80" y="100" width="160" height="44" rx="22" fill="#0284c7"/>
      <text x="160" y="129" fill="#ffffff" font-size="18" font-family="system-ui, sans-serif" font-weight="900" text-anchor="middle">Halaman ${p.label}</text>

      <text x="600" y="180" fill="#082f49" font-size="42" font-family="system-ui, sans-serif" font-weight="900" text-anchor="middle">${escapeXml(p.title)}</text>
      <text x="600" y="225" fill="#0369a1" font-size="22" font-family="system-ui, sans-serif" font-weight="700" text-anchor="middle">${escapeXml(p.subtitle)}</text>

      <!-- Main Content Card -->
      <rect x="80" y="270" width="1040" height="1280" rx="30" fill="#ffffff" fill-opacity="0.96" stroke="#93c5fd" stroke-width="2"/>
    `;

    if (p.type === 'latar_belakang') {
      body += `
        <rect x="120" y="320" width="960" height="340" rx="24" fill="#f0f9ff" stroke="#38bdf8" stroke-width="2" stroke-dasharray="8 8"/>
        <g fill="#0f172a" font-size="23" font-family="system-ui, sans-serif" font-weight="500">
          <text x="160" y="385">Perkembangan teknologi digital yang amat pesat telah membawa</text>
          <text x="160" y="430">berbagai dampak yang signifikan bagi kehidupan manusia, baik</text>
          <text x="160" y="475"><tspan font-weight="800" fill="#0369a1">positif maupun negatif</tspan>.</text>
          <text x="160" y="540">Digitalisasi memberikan kemudahan dalam menyelesaikan pekerjaan,</text>
          <text x="160" y="585">mempercepat penyebaran info serta interaksi lintas belahan dunia.</text>
        </g>

        <!-- 3 Pillars Grid -->
        <rect x="120" y="710" width="300" height="300" rx="20" fill="#eff6ff" stroke="#bfdbfe" stroke-width="2"/>
        <circle cx="270" cy="790" r="44" fill="#3b82f6"/>
        <text x="270" y="802" fill="#ffffff" font-size="34" font-weight="900" text-anchor="middle">🌐</text>
        <text x="270" y="875" fill="#1e3a8a" font-size="22" font-weight="800" text-anchor="middle">Konektivitas Global</text>
        <text x="270" y="915" fill="#475569" font-size="18" text-anchor="middle">Pertukaran informasi</text>
        <text x="270" y="945" fill="#475569" font-size="18" text-anchor="middle">tanpa batas negara</text>

        <rect x="450" y="710" width="300" height="300" rx="20" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="2"/>
        <circle cx="600" cy="790" r="44" fill="#10b981"/>
        <text x="600" y="802" fill="#ffffff" font-size="34" font-weight="900" text-anchor="middle">⚡</text>
        <text x="600" y="875" fill="#064e3b" font-size="22" font-weight="800" text-anchor="middle">Interaksi Realtime</text>
        <text x="600" y="915" fill="#475569" font-size="18" text-anchor="middle">Kemudahan pesan &amp;</text>
        <text x="600" y="945" fill="#475569" font-size="18" text-anchor="middle">kolaborasi seketika</text>

        <rect x="780" y="710" width="300" height="300" rx="20" fill="#fef2f2" stroke="#fecaca" stroke-width="2"/>
        <circle cx="930" cy="790" r="44" fill="#ef4444"/>
        <text x="930" y="802" fill="#ffffff" font-size="34" font-weight="900" text-anchor="middle">🛡️</text>
        <text x="930" y="875" fill="#7f1d1d" font-size="22" font-weight="800" text-anchor="middle">Tantangan Etika</text>
        <text x="930" y="915" fill="#475569" font-size="18" text-anchor="middle">Ancaman konflik sosial</text>
        <text x="930" y="945" fill="#475569" font-size="18" text-anchor="middle">tanpa kontrol moral</text>

        <!-- Quote -->
        <rect x="120" y="1060" width="960" height="200" rx="20" fill="#0c4a6e"/>
        <text x="600" y="1135" fill="#fef08a" font-size="26" font-family="system-ui, sans-serif" font-weight="800" text-anchor="middle">“Kecepatan teknologi menuntut kedewasaan budi pekerti.”</text>
        <text x="600" y="1185" fill="#bae6fd" font-size="20" font-family="system-ui, sans-serif" text-anchor="middle">Etika digital memastikan peradaban siber tetap menjaga harkat kemanusiaan.</text>
      `;
    } else if (p.type === 'hasil_survei') {
      body += `
        <!-- APJII Stats Box -->
        <rect x="120" y="310" width="960" height="230" rx="20" fill="#f0f9ff" stroke="#bae6fd" stroke-width="2"/>
        <text x="160" y="365" fill="#0369a1" font-size="26" font-weight="900">DATA PENGGUNA INTERNET INDONESIA (APJII &amp; BPS)</text>
        <g fill="#1e293b" font-size="21" font-family="system-ui, sans-serif">
          <text x="160" y="420">Berdasarkan data APJII (2023), penetrasi pengguna internet di Indonesia mencapai</text>
          <text x="160" y="460"><tspan font-weight="900" fill="#0284c7">215,63 juta orang</tspan> dari total proyeksi penduduk <tspan font-weight="900">278,8 juta jiwa</tspan> (BPS, 2023).</text>
          <text x="160" y="500">Tingkat penetrasi internet melampaui <tspan font-weight="800" fill="#059669">77% total populasi</tspan>!</text>
        </g>

        <!-- Contrast Row -->
        <rect x="120" y="570" width="460" height="280" rx="20" fill="#ecfdf5" stroke="#6ee7b7" stroke-width="2"/>
        <rect x="150" y="600" width="200" height="40" rx="10" fill="#059669"/>
        <text x="250" y="627" fill="#ffffff" font-size="18" font-weight="800" text-anchor="middle">CITRA DUNIA NYATA</text>
        <text x="150" y="685" fill="#064e3b" font-size="26" font-weight="900">Masyarakat Sangat Ramah</text>
        <text x="150" y="730" fill="#334155" font-size="19">Dikenal ramah, gemar menyapa,</text>
        <text x="150" y="765" fill="#334155" font-size="19">gotong royong, dan memiliki rasa</text>
        <text x="150" y="800" fill="#334155" font-size="19">kekeluargaan yang amat tinggi.</text>

        <rect x="620" y="570" width="460" height="280" rx="20" fill="#fef2f2" stroke="#fca5a5" stroke-width="2"/>
        <rect x="650" y="600" width="220" height="40" rx="10" fill="#dc2626"/>
        <text x="760" y="627" fill="#ffffff" font-size="18" font-weight="800" text-anchor="middle">FAKTA DUNIA MAYA</text>
        <text x="650" y="685" fill="#7f1d1d" font-size="26" font-weight="900">Skor Kesopanan Rendah</text>
        <text x="650" y="730" fill="#334155" font-size="19">Laporan Microsoft DCI menempatkan</text>
        <text x="650" y="765" fill="#334155" font-size="19">netizen Indonesia di kelompok paling</text>
        <text x="650" y="800" fill="#334155" font-size="19">tidak sopan bersama Rusia &amp; Meksiko.</text>

        <!-- DCI Chart -->
        <rect x="120" y="880" width="960" height="340" rx="20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
        <text x="600" y="930" fill="#0f172a" font-size="22" font-weight="900" text-anchor="middle">Indeks Ketidaksopanan Digital (Digital Civility Index)</text>
        
        <!-- Bars -->
        <text x="160" y="990" fill="#334155" font-size="20" font-weight="700">Meksiko</text>
        <rect x="320" y="965" width="500" height="34" rx="8" fill="#38bdf8"/>
        <text x="840" y="990" fill="#0369a1" font-size="20" font-weight="800">65%</text>

        <text x="160" y="1050" fill="#334155" font-size="20" font-weight="700">Afrika Selatan</text>
        <rect x="320" y="1025" width="540" height="34" rx="8" fill="#0284c7"/>
        <text x="880" y="1050" fill="#0369a1" font-size="20" font-weight="800">70%</text>

        <text x="160" y="1110" fill="#334155" font-size="20" font-weight="700">Rusia</text>
        <rect x="320" y="1085" width="580" height="34" rx="8" fill="#6366f1"/>
        <text x="920" y="1110" fill="#4338ca" font-size="20" font-weight="800">74%</text>

        <text x="160" y="1170" fill="#991b1b" font-size="21" font-weight="900">Indonesia</text>
        <rect x="320" y="1145" width="630" height="36" rx="8" fill="#ef4444"/>
        <text x="970" y="1170" fill="#b91c1c" font-size="22" font-weight="900">78% (Tinggi)</text>
      `;
    } else if (p.type === 'risiko_sila') {
      body += `
        <!-- 4 Threats Grid -->
        <rect x="120" y="310" width="220" height="150" rx="16" fill="#fef2f2" stroke="#fecaca" stroke-width="2"/>
        <text x="230" y="360" fill="#b91c1c" font-size="20" font-weight="900" text-anchor="middle">Ujaran Kebencian</text>
        <text x="230" y="400" fill="#475569" font-size="16" text-anchor="middle">Komentar kasar yang</text>
        <text x="230" y="425" fill="#475569" font-size="16" text-anchor="middle">melukai perasaan</text>

        <rect x="370" y="310" width="220" height="150" rx="16" fill="#fef2f2" stroke="#fecaca" stroke-width="2"/>
        <text x="480" y="360" fill="#b91c1c" font-size="20" font-weight="900" text-anchor="middle">Hoaks &amp; Fitnah</text>
        <text x="480" y="400" fill="#475569" font-size="16" text-anchor="middle">Berita bohong pemecah</text>
        <text x="480" y="425" fill="#475569" font-size="16" text-anchor="middle">belah kerukunan</text>

        <rect x="620" y="310" width="220" height="150" rx="16" fill="#fef2f2" stroke="#fecaca" stroke-width="2"/>
        <text x="730" y="360" fill="#b91c1c" font-size="20" font-weight="900" text-anchor="middle">Kebocoran Data</text>
        <text x="730" y="400" fill="#475569" font-size="16" text-anchor="middle">Doxing dan pencurian</text>
        <text x="730" y="425" fill="#475569" font-size="16" text-anchor="middle">identitas pribadi</text>

        <rect x="860" y="310" width="220" height="150" rx="16" fill="#fef2f2" stroke="#fecaca" stroke-width="2"/>
        <text x="970" y="360" fill="#b91c1c" font-size="20" font-weight="900" text-anchor="middle">Cyberbullying</text>
        <text x="970" y="400" fill="#475569" font-size="16" text-anchor="middle">Perundungan yang</text>
        <text x="970" y="425" fill="#475569" font-size="16" text-anchor="middle">merusak mental</text>

        <!-- 5 Sila Rows -->
        <rect x="120" y="490" width="960" height="80" rx="16" fill="#0f172a"/>
        <text x="600" y="540" fill="#facc15" font-size="24" font-weight="900" text-anchor="middle">5 SILA PANCASILA SEBAGAI BENTENG DI RUANG SIBER</text>

        <!-- Sila 1 to 5 -->
        <g font-family="system-ui, sans-serif">
          <rect x="120" y="590" width="960" height="110" rx="16" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
          <circle cx="170" cy="645" r="26" fill="#16a34a"/>
          <text x="170" y="654" fill="#ffffff" font-size="22" font-weight="900" text-anchor="middle">1</text>
          <text x="220" y="635" fill="#14532d" font-size="22" font-weight="800">Sila 1: Ketuhanan Yang Maha Esa</text>
          <text x="220" y="670" fill="#475569" font-size="18">Hormati keyakinan orang lain; tolak penistaan agama &amp; ujaran kebencian berbasis keyakinan.</text>

          <rect x="120" y="720" width="960" height="110" rx="16" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
          <circle cx="170" cy="775" r="26" fill="#2563eb"/>
          <text x="170" y="784" fill="#ffffff" font-size="22" font-weight="900" text-anchor="middle">2</text>
          <text x="220" y="765" fill="#1e3a8a" font-size="22" font-weight="800">Sila 2: Kemanusiaan yang Adil dan Beradab</text>
          <text x="220" y="800" fill="#475569" font-size="18">Perlakukan manusia secara bermartabat di balik layar; tolak perundungan siber dan pelecehan.</text>

          <rect x="120" y="850" width="960" height="110" rx="16" fill="#fef3c7" stroke="#fcd34d" stroke-width="2"/>
          <circle cx="170" cy="905" r="26" fill="#d97706"/>
          <text x="170" y="914" fill="#ffffff" font-size="22" font-weight="900" text-anchor="middle">3</text>
          <text x="220" y="895" fill="#78350f" font-size="22" font-weight="800">Sila 3: Persatuan Indonesia</text>
          <text x="220" y="930" fill="#475569" font-size="18">Rawat kerukunan dan persaudaraan bangsa; hindari provokasi isu SARA pemecah belah.</text>

          <rect x="120" y="980" width="960" height="110" rx="16" fill="#fdf4ff" stroke="#f0abfc" stroke-width="2"/>
          <circle cx="170" cy="1035" r="26" fill="#c026d3"/>
          <text x="170" y="1044" fill="#ffffff" font-size="22" font-weight="900" text-anchor="middle">4</text>
          <text x="220" y="1025" fill="#701a75" font-size="22" font-weight="800">Sila 4: Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan...</text>
          <text x="220" y="1060" fill="#475569" font-size="18">Sampaikan aspirasi dengan santun, utamakan musyawarah, dan hargai perbedaan sudut pandang.</text>

          <rect x="120" y="1110" width="960" height="110" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>
          <circle cx="170" cy="1165" r="26" fill="#475569"/>
          <text x="170" y="1174" fill="#ffffff" font-size="22" font-weight="900" text-anchor="middle">5</text>
          <text x="220" y="1155" fill="#0f172a" font-size="22" font-weight="800">Sila 5: Keadilan Sosial bagi Seluruh Rakyat Indonesia</text>
          <text x="220" y="1190" fill="#475569" font-size="18">Hormati hak cipta &amp; privasi orang lain, jangan mencari keuntungan dengan merugikan hak sesama.</text>
        </g>
      `;
    } else {
      // General body for other chapters with custom text
      body += `
        <rect x="120" y="320" width="960" height="120" rx="20" fill="#f0f9ff" stroke="#bae6fd" stroke-width="2"/>
        <text x="160" y="375" fill="#0369a1" font-size="24" font-weight="900">POKOK BAHASAN RESMI PROJEK</text>
        <text x="160" y="412" fill="#334155" font-size="19">Materi edukasi interaktif Handbook Etika Digital Berbasis Pancasila PPG UBP Karawang.</text>

        <!-- Dynamic Content Preview based on chapter -->
        <rect x="120" y="480" width="960" height="740" rx="24" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
        <g fill="#0f172a" font-size="22" font-family="system-ui, sans-serif">
          <text x="160" y="550" font-weight="800" fill="#0369a1">Ringkasan Materi &amp; Panduan Aksi:</text>
          <text x="160" y="605">1. Memahami esensi ${escapeXml(p.title)} secara holistik.</text>
          <text x="160" y="655">2. Pengamalan norma budi pekerti dalam interaksi percakapan daring.</text>
          <text x="160" y="705">3. Mengutamakan tabayun (verifikasi fakta) sebelum menyebarkan konten.</text>
          <text x="160" y="755">4. Melindungi kerahasiaan data diri, keluarga, dan tetangga sekitar.</text>
          <text x="160" y="805">5. Menjadikan ruang digital sebagai wahana persatuan dan kebaikan bersama.</text>
        </g>

        <rect x="160" y="870" width="880" height="180" rx="16" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
        <text x="200" y="930" fill="#1e3a8a" font-size="22" font-weight="900">Rujukan &amp; Landasan Ilmiah:</text>
        <text x="200" y="970" fill="#334155" font-size="19">Kajian Tim PPG PPKN UBP Karawang (2026) berlandaskan Falsafah Pancasila,</text>
        <text x="200" y="1005" fill="#334155" font-size="19">Roadmap Kominfo RI, serta Kerangka Digital Citizenship Internasional.</text>
      `;
    }
  }

  return `
    <svg width="1200" height="1700" viewBox="0 0 1200 1700" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#b8daf7"/>
          <stop offset="50%" stop-color="#cfe5fc"/>
          <stop offset="100%" stop-color="#aed2f6"/>
        </linearGradient>
        <linearGradient id="blueBar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#1e3a8a"/>
          <stop offset="50%" stop-color="#1e40af"/>
          <stop offset="100%" stop-color="#1e3a8a"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="1700" fill="url(#bg)"/>
      ${header}
      ${body}
      ${footer}
    </svg>
  `;
}

async function run() {
  console.log('Generating 20 PNG handbook images into', outputDir);
  for (const page of pagesData) {
    const svg = buildSvgForPage(page);
    const standardFile = path.join(outputDir, `page-${page.num}.png`);
    const namedFile = path.join(outputDir, page.userFile);

    const buffer = await sharp(Buffer.from(svg))
      .png({ quality: 100, compressionLevel: 8 })
      .toBuffer();

    fs.writeFileSync(standardFile, buffer);
    fs.writeFileSync(namedFile, buffer);
    console.log(`✓ Page ${page.num} (${page.label}) saved -> ${path.basename(standardFile)} & ${page.userFile}`);
  }
  console.log('All 20 authentic handbook images generated successfully!');
}

run().catch(err => {
  console.error('Error generating images:', err);
  process.exit(1);
});
