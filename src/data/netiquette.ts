import { NetiquetteRule } from '../types';

export const NETIQUETTE_RULES: NetiquetteRule[] = [
  {
    number: 1,
    category: 'Karakter',
    title: 'Ingat Manusia di Balik Layar',
    summary: 'Di balik setiap akun avatar dan pesan teks, ada manusia nyata dengan perasaan, martabat, dan batas toleransi.',
    detailedExplanation: 'Ketika berkomunikasi secara daring, hilangnya kontak mata dan intonasi suara sering kali membuat orang lupa bahwa mereka sedang berbicara dengan manusia nyata. Jangan pernah mengetik sesuatu di internet yang tidak berani kamu ucapkan langsung di depan wajah orang tersebut di dunia nyata.',
    goodExample: '"Selamat pagi Pak/Bu, mohon maaf mengganggu waktunya. Saya ingin menanyakan terkait materi evaluasi kemarin jika berkenan. Terima kasih banyak."',
    badExample: '"P, woi bales dong cepet gimana sih kerjanya gak becus amat!!"'
  },
  {
    number: 2,
    category: 'Karakter',
    title: 'Patuhi Standar Moral yang Sama dengan Kehidupan Nyata',
    summary: 'Etika, kesopanan, dan hukum tidak berhenti berlaku hanya karena kita berada di balik layar perangkat.',
    detailedExplanation: 'Anonimitas semu di internet tidak menghapus tanggung jawab moral. Kejujuran, integritas akademik, penghormatan hak cipta, dan kepatuhan pada undang-undang tetap mengikat setiap individu di dunia digital.',
    goodExample: '"Kutipan data ini diambil dari laporan riset Dr. Suryadi (2025) dengan tautan terlampir."',
    badExample: 'Menyalin tulisan orang lain lalu mengganti nama penulis dengan nama sendiri tanpa izin (plagiarisme).'
  },
  {
    number: 3,
    category: 'Sosial',
    title: 'Pahami Konteks Ruang Siber yang Kamu Masuki',
    summary: 'Gaya komunikasi di LinkedIn sangat berbeda dengan di grup gaming Discord atau kolom komentar TikTok.',
    detailedExplanation: 'Setiap platform digital memiliki norma, budaya komunitas, dan tingkat formalitas yang berbeda (domain-specific etiquette). Mengetahui ruang siber tempatmu berada mencegah terjadinya kesalahpahaman dan menjaga reputasi profesional.',
    goodExample: 'Di LinkedIn: Menggunakan sapaan resmi, bahasa santun, dan fokus pada nilai profesionalisme kerja.',
    badExample: 'Mengirim stiker meme konyol atau bahasa gaul non-standar ke grup resmi koordinasi kantor/perusahaan.'
  },
  {
    number: 4,
    category: 'Teknis',
    title: 'Hormati Waktu dan Bandwidth Orang Lain',
    summary: 'Komunikasikan pesan secara padat, jelas, terstruktur, dan hindari spam atau mengirim berkas raksasa tanpa konfirmasi.',
    detailedExplanation: 'Waktu orang lain sangat berharga. Hindari kebiasaan mengirim pesan sepotong-sepotong seperti "P" atau "Halo gan" lalu menghilang berjam-jam tanpa langsung menyampaikan maksud inti pembicaraan.',
    goodExample: '"Halo Kak Maya, izin menyampaikan 3 poin revisi dokumen laporan penjualan untuk disetujui: 1... 2... 3... Dokumen lengkap terlampir via Google Drive. Terima kasih."',
    badExample: 'Mengirim 15 pesan terpisah: "P" "Halo" "Lagi dimana" "Bisa tanya?" "Halo woi" "Kok ga dibales".'
  },
  {
    number: 5,
    category: 'Karakter',
    title: 'Bangun Citra dan Jejak Tulisan yang Beradab',
    summary: 'Di dunia maya, kamu dinilai dari caramu merangkai kata, tata bahasa, dan argumentasi logismu.',
    detailedExplanation: 'Jejak digital (digital footprint) abadi dan dapat ditelusuri oleh calon pemberi kerja, kampus, atau klien. Menggunakan huruf kapital semua (ALL CAPS) dinilai seperti berteriak, dan menggunakan kata makian akan menurunkan kredibilitasmu secara instan.',
    goodExample: '"Saya memahami sudut pandang Anda, namun berdasarkan data resmi BPS tahun lalu, ada faktor X yang perlu kita pertimbangkan bersama."',
    badExample: '"BODOH BANGET ARGUMEN LU KELIATAN GA PERNAH SEKOLAH YA!!" (Menggunakan huruf besar dan serangan personal).'
  },
  {
    number: 6,
    category: 'Sosial',
    title: 'Bagikan Pengetahuan yang Valid & Bermanfaat',
    summary: 'Jadilah bagian dari solusi edukasi, bukan produsen atau penyebar kabut misinformasi.',
    detailedExplanation: 'Kekuatan internet adalah kolaborasi dan pertukaran ilmu. Ketika kamu membagikan informasi, pastikan keakuratan sumbernya, berikan nilai tambah bagi orang lain, dan bersikap terbuka terhadap sanggahan ilmiah.',
    goodExample: '"Berikut rangkuman panduan keamanan siber yang dirilis oleh BSSN untuk mencegah kebocoran akun kita."',
    badExample: 'Membagikan ramalan konspirasi palsu tentang obat mujarab atau pembagian saldo gratis dari akun bot palsu.'
  },
  {
    number: 7,
    category: 'Sosial',
    title: 'Kendalikan Api Perdebatan (Keep Flame Wars Under Control)',
    summary: 'Perbedaan opini itu sehat, namun caci maki emosional yang destruktif meracuni ruang publik.',
    detailedExplanation: 'Flame wars terjadi ketika diskusi beralih dari adu argumen logis menjadi saling serang pribadi (ad hominem). Netiket yang baik tidak melarang perdebatan, melainkan melarang agresi kebencian yang tidak produktif.',
    goodExample: '"Mari kita fokus pada solusi permasalahan kebijakannya, bukan pada suku, agama, atau latar belakang pribadinya."',
    badExample: 'Mengunggah screenshot kesalahan ketik lawan bicara untuk dijadikan bahan olok-olok publik.'
  },
  {
    number: 8,
    category: 'Karakter',
    title: 'Hormati Privasi Orang Lain Secara Mutlak',
    summary: 'Jangan pernah menyebarkan tangkapan layar chat pribadi, informasi kontak, atau rahasia orang lain tanpa izin.',
    detailedExplanation: 'Membaca atau menyebarkan pesan privat orang lain adalah pelanggaran etika serius dan berkonsekuensi hukum (UU Perlindungan Data Pribadi). Hak atas privasi adalah hak asasi di era digital.',
    goodExample: '"Sebelum saya lampirkan testimoni ini di portofolio, apakah Anda berkenan dan setuju identitasnya dicantumkan?"',
    badExample: 'Mengunggah chat curhat sahabat ke media sosial untuk konsumsi publik tanpa sensor nama/foto.'
  },
  {
    number: 9,
    category: 'Teknis',
    title: 'Jangan Menyalahgunakan Kekuasaan atau Keahlian Siber',
    summary: 'Memiliki akses admin sistem atau keahlian hacking tidak memberi hak untuk mengintip atau menindas orang lain.',
    detailedExplanation: 'Semakin besar kemampuan atau wewenang teknologi yang kamu miliki (seperti admin grup, sysadmin, atau pengembang perangkat lunak), semakin besar pula tanggung jawab moral untuk menjaga amanah data pengguna.',
    goodExample: 'Menggunakan akses administrator server secara profesional hanya untuk pemeliharaan sistem dengan logging transparan.',
    badExample: 'Mengintip riwayat obrolan pribadi pengguna lain melalui akses database internal kantor untuk kepuasan gosip.'
  },
  {
    number: 10,
    category: 'Karakter',
    title: 'Maafkan Kesalahan Orang Lain & Tegur di Jalur Pribadi',
    summary: 'Setiap orang pernah menjadi pemula di dunia digital. Tuntun mereka dengan kesabaran, bukan cemoohan.',
    detailedExplanation: 'Ketika melihat seseorang melakukan kesalahan netiket (seperti salah kirim ke grup atau percaya hoaks), jangan permalukan dia di depan umum. Kirim pesan privat (DM) dengan santun untuk membantu mereka memperbaikinya.',
    goodExample: 'Mengirim pesan WhatsApp privat: "Halo Bu Siti, sepertinya tautan kupon di grup tadi terindikasi phishing penipuan. Boleh dibantu hapus agar anggota lain tidak terklik ya Bu."',
    badExample: 'Mengutip pesan di grup dengan menandai @semua lalu mencibir: "Ini orang tua siapa sih nyampah mulu di grup ga jelas banget!"'
  }
];
