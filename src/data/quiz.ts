import { QuizQuestion } from '../types';

export const ETHICS_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    question: 'Apa arti slogan prinsip utama literasi digital: "Saring sebelum Sharing"?',
    options: [
      'Menyaring foto dengan filter kecantikan sebelum mengunggahnya ke Instagram',
      'Menghapus kontak orang-orang yang jarang mengirimkan pesan di WhatsApp',
      'Memverifikasi kebenaran, sumber, serta dampak informasi sebelum menyebarkannya ke publik atau grup obrolan',
      'Hanya membagikan berita yang disukai oleh algoritma media sosial'
    ],
    correctIndex: 2,
    explanation: 'Saring sebelum Sharing adalah kaidah kritis untuk memverifikasi keabsahan fakta (akurasi sumber) dan mempertimbangkan dampak etis sebelum sebuah informasi dibagikan ke orang lain.',
    legalBasis: 'UU ITE Pasal 28 ayat 1 & Panduan Literasi Digital Kominfo'
  },
  {
    id: 2,
    question: 'Di Indonesia, menyebarkan data pribadi orang lain seperti nomor KTP, nomor HP, atau alamat rumah tanpa izin (Doxing) melanggar undang-undang apa?',
    options: [
      'UU Perlindungan Data Pribadi (UU PDP) No. 27 Tahun 2022',
      'UU Perlindungan Konsumen No. 8 Tahun 1999',
      'UU Kepabeanan Nasional',
      'Peraturan Tata Tertib Media Sosial'
    ],
    correctIndex: 0,
    explanation: 'UU PDP No. 27 Tahun 2022 secara tegas melarang perolehan dan penyebaran data pribadi yang bukan miliknya secara melawan hukum, dengan ancaman pidana penjara hingga 5 tahun dan denda hingga Rp 5 miliar.',
    legalBasis: 'Pasal 65 dan Pasal 67 UU PDP No. 27/2022'
  },
  {
    id: 3,
    question: 'Mengapa menulis pesan menggunakan SELURUH HURUF KAPITAL (ALL CAPS) dianggap melanggar etika netiket?',
    options: [
      'Karena huruf kapital menghabiskan lebih banyak kuota internet pengguna',
      'Karena server perpesanan tidak mendukung pemrosesan huruf besar',
      'Hanya diperbolehkan untuk pengguna yang berusia di atas 50 tahun',
      'Karena dalam komunikasi teks, huruf kapital diinterpretasikan seperti sedang BERTERIAK atau marah secara agresif'
    ],
    correctIndex: 3,
    explanation: 'Dalam tradisi Netiket (Internet Etiquette), penulisan seluruh kalimat menggunakan huruf kapital mencerminkan nada suara yang keras, membentak, atau emosional.',
    legalBasis: 'Kaidah ke-5 Netiket Virginia Shea'
  },
  {
    id: 4,
    question: 'Bagaimanakah etika yang tepat dalam menggunakan Generative AI (seperti ChatGPT, Claude, atau Gemini) untuk tugas akademik atau profesional?',
    options: [
      'Menyalin mentah-mentah seluruh tulisan AI dan mengakuinya sebagai hasil pemikiran sendiri tanpa atribusi',
      'Menggunakan AI sebagai mitra sintesis, riset, atau perbaikan struktur, lalu menulis kembali dengan analisis mandiri serta mencantumkan sitasi/transparansi penggunaan AI',
      'Mengharamkan teknologi AI sepenuhnya dan menolak membaca materi yang dibantu AI',
      'Mengacak kata-kata dengan bot lain agar tidak terdeteksi oleh pemeriksa'
    ],
    correctIndex: 1,
    explanation: 'Etika kecerdasan buatan menuntut akuntabilitas dan transparansi. Pengguna wajib bertanggung jawab penuh atas kebenaran fakta tulisan dan bersikap jujur atas alat bantu yang digunakan.',
    legalBasis: 'Panduan Etika AI UNESCO & Kominfo SE No. 9 Tahun 2023'
  },
  {
    id: 5,
    question: 'Apa tindakan paling bijak ketika melihat teman mengunggah screenshot percakapan pribadi (curhat) orang lain di media sosial untuk mempermalukannya?',
    options: [
      'Ikut membagikan ulang postingan tersebut dan menandai akun korban',
      'Mengunduh screenshot untuk disimpan sebagai bahan ancaman di kemudian hari',
      'Menegur teman tersebut secara santun di jalur pribadi (DM/Japri) dan memintanya menghapus demi menghormati privasi sesama',
      'Membuat postingan sindiran balik yang lebih kasar dan memicu keributan publik'
    ],
    correctIndex: 2,
    explanation: 'Menegur di jalur privat melindungi martabat semua pihak tanpa menciptakan eskalasi permusuhan di ruang publik.',
    legalBasis: 'Kaidah ke-8 dan ke-10 Netiket'
  },
  {
    id: 6,
    question: 'Seseorang mengirimi kamu file via WhatsApp dengan nama "Foto_Paket_Kurir.apk". Apa yang harus kamu lakukan?',
    options: [
      'Jangan pernah menginstal file tersebut, laporkan dan blokir nomornya karena file .APK adalah modus pencurian data & perbankan',
      'Langsung klik dan instal karena penasaran dengan kiriman paket tersebut',
      'Teruskan file ke grup keluarga untuk menanyakan isi paketnya',
      'Instal di ponsel lama untuk mencobanya terlebih dahulu'
    ],
    correctIndex: 0,
    explanation: 'File berekstensi .APK di luar Google Play Store yang dikirim via chat adalah modus malware pencuri SMS OTP perbankan (sniffing). Jangan pernah membukanya!',
    legalBasis: 'Edukasi Keamanan Siber BSSN'
  },
  {
    id: 7,
    question: 'Apa yang dimaksud dengan "Jejak Digital Pasif" (Passive Digital Footprint)?',
    options: [
      'Foto dan video yang sengaja kita unggah ke profil Instagram',
      'Komentar dan opini yang kita tulis di kolom komentar media sosial',
      'Pesan lamaran pekerjaan dan riwayat hidup yang dikirimkan via email',
      'Data yang terkumpul secara otomatis di latar belakang tanpa tindakan langsung kita, seperti alamat IP, lokasi GPS, dan riwayat klik cookie peramban'
    ],
    correctIndex: 3,
    explanation: 'Jejak digital pasif tercipta tanpa disadari pengguna secara aktif, dikumpulkan oleh sistem analitik, cookie, dan sensor perangkat.',
    legalBasis: 'Dasar Keamanan Data Siber'
  },
  {
    id: 8,
    question: 'Di sebuah grup diskusi komunitas, terjadi perdebatan panas yang berujung saling melontarkan hinaan fisik (body shaming) dan suku (SARA). Sikap etis seorang moderator atau anggota adalah:',
    options: [
      'Mendukung pihak yang paling populer agar perdebatan cepat selesai',
      'Meredakan "Flame War" dengan mengingatkan aturan komunitas, fokus kembali pada substansi topik, dan menghapus komentar kebencian',
      'Keluar dari grup tanpa pamit dan membiarkan konflik meluas',
      'Memanas-manasi suasana agar grup semakin ramai dan viral'
    ],
    correctIndex: 1,
    explanation: 'Menjaga keadaban digital di komunitas membutuhkan peran aktif untuk menghentikan flame wars sebelum merusak persatuan dan kesehatan mental anggota.',
    legalBasis: 'Kaidah ke-7 Netiket: Keep Flame Wars Under Control'
  },
  {
    id: 9,
    question: 'Sebelum mengunggah foto bersama anak kecil atau balita rekan kerja ke media sosial publik, etika digital mewajibkan kita untuk:',
    options: [
      'Langsung unggah tanpa izin karena anak kecil lucu dan mengundang interaksi positif',
      'Mengunggahnya hanya pada jam malam agar tidak dilihat banyak orang',
      'Meminta izin tertulis/lisan kepada orang tua kandungnya dan mempertimbangkan risiko keamanan anak (Sharenting)',
      'Cukup menandai (tag) akun media sosial anak tersebut jika ada'
    ],
    correctIndex: 2,
    explanation: 'Fenomena over-sharenting tanpa persetujuan orang tua dapat mengekspos anak pada bahaya predator online dan pencurian identitas digital sejak dini.',
    legalBasis: 'Konvensi Hak Anak PBB & Etika Privasi Digital'
  },
  {
    id: 10,
    question: 'Apa yang membedakan kritik yang sehat dan konstruktif dengan perundungan siber (Cyberbullying)?',
    options: [
      'Kritik sehat berfokus pada substansi gagasan atau karya dengan data yang santun, sedangkan cyberbullying menyerang fisik, martabat pribadi, dan bertujuan merendahkan psikologis',
      'Kritik sehat hanya boleh disampaikan oleh akun centang biru terverifikasi',
      'Tidak ada perbedaan nyata, seluruh perdebatan di internet tergolong perundungan',
      'Cyberbullying hanya berlaku apabila menggunakan makian dalam bahasa asing'
    ],
    correctIndex: 0,
    explanation: 'Esensi kritik konstruktif adalah membangun dan mendiskusikan gagasan secara argumentatif tanpa mendegradasi kemanusiaan seseorang.',
    legalBasis: 'Indeks Keadaban Digital (Digital Civility Index)'
  }
];
