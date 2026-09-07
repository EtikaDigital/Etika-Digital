import { DilemmaScenario } from '../types';

export const DILEMMA_SCENARIOS: DilemmaScenario[] = [
  {
    id: 'dilemma-1',
    category: 'Privasi & Data',
    title: 'Penyebaran Foto Aib Teman demi Viral',
    context: 'Kamu sedang berkumpul bersama teman-teman sekolah/kampus. Salah satu temanmu tertidur pulas dengan posisi lucu dan mulut terbuka. Teman lain memotretnya secara diam-diam dan berniat mengunggahnya ke Instagram Story dan grup WA publik dengan caption melecehkan.',
    character: 'Dimas (Saksi Kejadian)',
    avatar: '📸',
    difficulty: 'Pemula',
    choices: [
      {
        id: 'c1',
        text: 'Ikut menertawakan dan membagikan ulang (re-share) ke media sosial agar ikut viral.',
        isEthical: false,
        score: -50,
        ethicalEvaluation: 'Pelanggaran etika privasi berat dan berpotensi menjadi tindakan cyberbullying. Mengorbankan martabat orang lain demi kepuasan sesaat atau popularitas digital.',
        legalImpact: 'Berpotensi melanggar UU PDP No. 27/2022 terkait pemrosesan data pribadi tanpa persetujuan, serta UU ITE Pasal 27 ayat 3 tentang pencemaran nama baik/penghinaan.',
        socialImpact: 'Dapat menimbulkan kecemasan sosial, depresi, dan merusak persahabatan serta jejak digital korban seumur hidup.',
        recommendation: 'Jangan pernah menyebarkan foto atau video pribadi orang lain tanpa persetujuan eksplisit (consent).'
      },
      {
        id: 'c2',
        text: 'Diam saja dan tidak ikut campur karena menganggapnya hanya candaan biasa antar teman.',
        isEthical: false,
        score: 20,
        ethicalEvaluation: 'Sikap bystander apatis. Meskipun tidak aktif menyakiti, pembiaran melanggengkan budaya perundungan dan pelanggaran privasi di lingkungan digital.',
        legalImpact: 'Tidak terkena pasal langsung, namun secara moral gagal menjadi warga digital yang berintegritas.',
        socialImpact: 'Korban merasa tidak terlindungi dan pelaku merasa perbuatannya dapat diterima secara sosial.',
        recommendation: 'Jadilah "Upstander", bukan "Bystander". Tegur rekan secara bijak atau cegah sebelum konten tersebar luas.'
      },
      {
        id: 'c3',
        text: 'Menegur teman yang memotret secara privat dan mengingatkannya untuk menghapus foto tersebut demi menjaga kehormatan rekan.',
        isEthical: true,
        score: 100,
        ethicalEvaluation: 'Keputusan bermoral tinggi dengan empati digital dan keberanian sosial. Melindungi hak privasi rekan tanpa harus mempermalukan pelaku di depan umum.',
        legalImpact: 'Mencegah potensi sengketa hukum dan pelanggaran UU PDP serta UU ITE.',
        socialImpact: 'Membangun kultur pertemanan yang sehat, saling menghargai batas pribadi (boundaries), dan memutus rantai cyberbullying.',
        recommendation: 'Tegur di jalur pribadi (Japri/face-to-face) dengan bahasa persuasif tanpa menggurui secara agresif.'
      }
    ]
  },
  {
    id: 'dilemma-2',
    category: 'Integritas AI',
    title: 'Penggunaan Generative AI Tanpa Transparansi',
    context: 'Kamu mendapat tugas akhir membuat proposal proyek penting dengan tenggat waktu esok pagi. Karena terdesak, kamu meminta ChatGPT/Gemini menuliskan seluruh proposal dari awal hingga akhir, lalu menyalin teksnya 100% tanpa menyunting atau mencantumkan pengakuan atribusi bahwa teks tersebut dibuat oleh AI.',
    character: 'Alya (Mahasiswi/Karyawan)',
    avatar: '🤖',
    difficulty: 'Menengah',
    choices: [
      {
        id: 'c1',
        text: 'Kirimkan proposal tersebut apa adanya dan klaim sebagai buah pemikiran orisinal 100% milikmu.',
        isEthical: false,
        score: -40,
        ethicalEvaluation: 'Plagiarisme akademik/profesional dan penipuan intelektual. Menghilangkan proses belajar mandiri serta menodai kejujuran ilmiah.',
        legalImpact: 'Sanksi akademik (pembatalan nilai/skripsi) atau sanksi disipliner pemutusan hubungan kerja di dunia profesional.',
        socialImpact: 'Menghilangkan kepercayaan dosen/atasan dan merusak reputasi profesional dalam jangka panjang.',
        recommendation: 'Pemanfaatan AI harus transparan dan diposisikan sebagai asisten ideasi atau pengoreksi tata bahasa, bukan joki konten.'
      },
      {
        id: 'c2',
        text: 'Gunakan AI sebagai mitra bertukar pikiran (brainstorming), sintesis referensi, lalu tulis ulang dengan sudut pandangmu sendiri dan sertakan pernyataan penggunaan AI.',
        isEthical: true,
        score: 100,
        ethicalEvaluation: 'Penerapan etika AI terbaik: akuntabel, transparan, berintegritas, dan memadukan efisiensi teknologi dengan daya kritis manusiawi.',
        legalImpact: 'Sesuai dengan etika karya cipta (UU Hak Cipta No. 28/2014) dan pedoman integritas akademik modern.',
        socialImpact: 'Menjadi teladan pengguna teknologi cerdas yang bertanggung jawab dan tetap mengasah kapasitas intelektual diri.',
        recommendation: 'Selalu cantumkan disclaimer: "Dibantu dalam tahap riset struktur oleh GenAI [Model], analisis dan penulisan oleh [Nama]."'
      },
      {
        id: 'c3',
        text: 'Mengubah sedikit kata-kata dengan aplikasi parafrase agar tidak terdeteksi oleh AI detector software.',
        isEthical: false,
        score: -20,
        ethicalEvaluation: 'Tindakan manipulatif yang sengaja menyembunyikan ketidakjujuran. Memiliki intensi menipu sistem dan evaluator.',
        legalImpact: 'Pelanggaran kode etik institusi dan potensi diskualifikasi otomatis.',
        socialImpact: 'Membiasakan budaya jalan pintas yang mereduksi ketajaman analisa pribadi.',
        recommendation: 'Fokuslah pada proses penyerapan ilmu dan kejujuran orisinalitas ide.'
      }
    ]
  },
  {
    id: 'dilemma-3',
    category: 'Netiket & Komunikasi',
    title: 'Forward Pesan Berita Panik di Grup Keluarga',
    context: 'Di grup WhatsApp keluarga besar, seorang paman membagikan pesan berantai berhuruf kapital: "WASPADA!! Biskuit merk X mengandung zat berbahaya pembunuh dalam 24 jam! SEBARKAN KE SEMUA ORANG SEBELUM DIHAPUS!". Pesan tersebut tidak mencantumkan tautan BPOM atau media terpercaya.',
    character: 'Rian (Anggota Grup Keluarga)',
    avatar: '📱',
    difficulty: 'Pemula',
    choices: [
      {
        id: 'c1',
        text: 'Langsung mem-forward pesan itu ke semua grup teman dan kontak WA demi "niat baik mengingatkan sesama".',
        isEthical: false,
        score: -45,
        ethicalEvaluation: 'Menjadi mata rantai penyebar hoaks (infodemik). Niat baik tanpa verifikasi faktual justru menimbulkan kepanikan massal dan merugikan pihak tak bersalah.',
        legalImpact: 'Dapat dijerat UU ITE Pasal 28 ayat 1 tentang penyebaran berita bohong dan menyesatkan.',
        socialImpact: 'Menyebabkan kerugian finansial produsen terkait dan memicu histeria publik yang tidak berdasar.',
        recommendation: 'Pegang prinsip emas digital: "Saring sebelum Sharing" (Filter before Sharing).'
      },
      {
        id: 'c2',
        text: 'Cek fakta di portal resmi TurnBackHoax/Kominfo, lalu beri klarifikasi santun di grup dengan menyertakan tautan resmi bantahan.',
        isEthical: true,
        score: 100,
        ethicalEvaluation: 'Tindakan literasi digital teladan. Menghentikan misinformasi dengan santun tanpa mempermalukan orang yang lebih tua.',
        legalImpact: 'Membantu penegakan ekosistem informasi yang sehat sesuai amanat literasi digital nasional.',
        socialImpact: 'Mengedukasi keluarga besar untuk lebih kritis dan menghindarkan mereka dari penipuan digital lainnya.',
        recommendation: 'Gunakan kata-kata sopan seperti: "Izin berbagi info resmi dari klarifikasi BPOM ya Om/Tante agar kita semua lebih tenang."'
      },
      {
        id: 'c3',
        text: 'Mengejek paman di grup dengan kata-kata kasar: "Zaman sekarang masih percaya hoax ginian? Jadul banget!".',
        isEthical: false,
        score: -10,
        ethicalEvaluation: 'Meskipun berniat mengoreksi hoaks, cara penyampaian yang agresif melanggar kaidah netiket dan kesantunan antargenerasi.',
        legalImpact: 'Berpotensi memicu perselisihan keluarga dan aduan pencemaran nama baik di ruang privat/grup.',
        socialImpact: 'Membuat orang lain merasa malu, defensif, dan enggan menerima koreksi di masa mendatang.',
        recommendation: 'Fokus pada substansi data faktualnya, bukan menyerang pribadi orang yang membagikannya.'
      }
    ]
  },
  {
    id: 'dilemma-4',
    category: 'Anti-Cyberbullying',
    title: 'Ajakan Doxing Terhadap Sosok yang Sedang Dihujat',
    context: 'Seorang pengendara motor viral karena memotong antrean di SPBU. Di media sosial X (Twitter) dan TikTok, ribuan warganet marah. Seseorang membuat utas dan meminta warganet mencari nomor KTP, alamat rumah tinggal, tempat sekolah anak, serta tempat kerja sang pengendara untuk didatangi beramai-ramai (doxing).',
    character: 'Nadia (Pengguna Aktif X/TikTok)',
    avatar: '⚖️',
    difficulty: 'Lanjutan',
    choices: [
      {
        id: 'c1',
        text: 'Membantu mencari data pribadi pengendara tersebut lewat database terbuka/Getcontact lalu mempublikasikannya di kolom komentar.',
        isEthical: false,
        score: -60,
        ethicalEvaluation: 'Tindakan Doxing kriminal yang sangat berbahaya. Menghakimi secara sepihak dan membahayakan keselamatan fisik seseorang dan keluarganya.',
        legalImpact: 'Pelanggaran pidana UU Perlindungan Data Pribadi (Pasal 65 dan 67) dengan ancaman penjara hingga 5 tahun dan denda miliaran rupiah.',
        socialImpact: 'Main hakim sendiri di ruang siber dapat berujung teror fisik, pengrusakan rumah, dan trauma psikologis pada anak-anak korban.',
        recommendation: 'Serahkan penegakan hukum kepada instansi yang berwenang, jangan pernah menjadi vigilante siber.'
      },
      {
        id: 'c2',
        text: 'Melaporkan (report) utas atau postingan yang menyebarkan data pribadi tersebut ke fitur moderasi platform dan tidak ikut menyebarkan.',
        isEthical: true,
        score: 100,
        ethicalEvaluation: 'Perilaku warganet bertanggung jawab. Melindungi ketertiban umum di ruang siber dan menolak normalisasi persekusi digital.',
        legalImpact: 'Mendukung terciptanya ruang digital yang patuh hukum dan aman dari kejahatan siber.',
        socialImpact: 'Meredam gelombang kebencian liar dan mencegah terjadinya eskalasi kekerasan di dunia nyata.',
        recommendation: 'Gunakan fitur "Report: Harassment / Sharing Private Information" pada platform media sosial terkait.'
      },
      {
        id: 'c3',
        text: 'Menulis komentar mencaci maki pelaku tapi tidak ikut menyebarkan alamatnya.',
        isEthical: false,
        score: -15,
        ethicalEvaluation: 'Cyberbullying dan hate speech. Menambah kebisingan toxic di ruang publik digital tanpa memberikan solusi atau edukasi.',
        legalImpact: 'Dapat dikategorikan sebagai penghinaan ringan atau ujaran kebencian di media sosial.',
        socialImpact: 'Menciptakan lingkungan siber yang kasar, sinis, dan minim keadaban.',
        recommendation: 'Ekspresikan kritik secara objektif terhadap perbuatannya, bukan dengan caci maki personal.'
      }
    ]
  },
  {
    id: 'dilemma-5',
    category: 'Keamanan Siber',
    title: 'Permintaan Kode OTP Mengatasnamakan Sahabat',
    context: 'Kamu menerima pesan WhatsApp dari akun sahabat dekatmu: "Bro, sori banget aku salah masukin nomor pas mau login voucher belanja, SMS kodenya masuk ke nomor kamu ya? Tolong screenshot 6 digit angkanya kirim ke sini sekarang please, urgent!".',
    character: 'Fajar (Penerima SMS OTP)',
    avatar: '🔐',
    difficulty: 'Menengah',
    choices: [
      {
        id: 'c1',
        text: 'Langsung kirimkan screenshot SMS yang berisi kode 6 digit tersebut karena percaya itu sahabatmu.',
        isEthical: false,
        score: -50,
        ethicalEvaluation: 'Kelalaian keamanan siber fatal. Menjadi korban social engineering (rekayasa sosial) yang membahayakan akunmu sendiri dan orang lain.',
        legalImpact: 'Akun WhatsApp milikmu akan dibajak untuk melakukan penipuan pinjaman online atas namamu.',
        socialImpact: 'Kontak di HP-mu akan dijadikan target penipuan berikutnya, merugikan rekan dan keluarga dekat.',
        recommendation: 'Kode OTP bersifat rahasia seperti PIN ATM. Jangan pernah dibagikan kepada siapa pun, termasuk sahabat, keluarga, atau petugas bank.'
      },
      {
        id: 'c2',
        text: 'Menghubungi sahabatmu melalui panggilan telepon biasa atau jalur komunikasi lain untuk memverifikasi apakah akun WA miliknya telah diretas.',
        isEthical: true,
        score: 100,
        ethicalEvaluation: 'Tindakan cerdas berprinsip "Zero Trust" dalam keamanan siber. Melindungi diri sendiri sekaligus membantu teman yang akunnya sedang disalahgunakan.',
        legalImpact: 'Mencegah tindak pidana pencurian data identitas dan penipuan berbasis komputer.',
        socialImpact: 'Sahabatmu bisa segera mengamankan akun dan memberi peringatan ke kontak lainnya sebelum korban berjatuhan.',
        recommendation: 'Selalu lakukan verifikasi dua arah (out-of-band verification) jika ada permintaan kode/uang mendadak.'
      },
      {
        id: 'c3',
        text: 'Mengabaikan saja dan menghapus pesan tanpa memberitahu siapa-siapa.',
        isEthical: false,
        score: 30,
        ethicalEvaluation: 'Akunmu aman dari pembajakan, namun kurang berempati terhadap keselamatan akun sahabatmu yang mungkin sedang diretas.',
        legalImpact: 'Aman untuk dirimu secara hukum.',
        socialImpact: 'Pelaku peretasan bebas menipu kontak temanmu yang lain karena tidak ada tindakan pencegahan.',
        recommendation: 'Bantu beri tahu sahabatmu di media sosial lain agar ia dapat mengambil alih akunnya kembali.'
      }
    ]
  }
];
