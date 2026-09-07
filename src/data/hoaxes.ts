import { HoaxCase } from '../types';

export const HOAX_CASES: HoaxCase[] = [
  {
    id: 'case-1',
    type: 'phishing_email',
    title: 'Phishing Rekening Bank & Ancaman Blokir',
    sender: 'pusat-layanan@bank-bca-verifikasi-keamanan.xyz',
    date: 'Hari ini, 03:14 WIB',
    previewNote: 'Email darurat penutupan rekening otomatis dalam kurun waktu 12 jam jika tidak verifikasi.',
    content: {
      heading: 'PERINGATAN RESMI: PEMBARUAN SISTEM KEAMANAN REKENING ANDA',
      body: 'Kepada Nasabah Yang Terhormat,\n\nKami mendeteksi aktivitas mencurigakan pada akses m-Banking Anda dari perangkat tidak dikenal. Sesuai regulasi terbaru, Anda DIWAJIBKAN segera memverifikasi nomor kartu ATM dan PIN 6-digit Anda dalam waktu 12 JAM.\n\nKegagalan verifikasi akan mengakibatkan PEMBEKUAN REKENING dan denda administratif senilai Rp 2.500.000,-.',
      actionText: 'KLIK DISINI UNTUK VERIFIKASI AKUN SAYA SEKARANG',
      sourceUrl: 'http://bit.ly/update-bca-security-emergency'
    },
    redFlags: [
      {
        id: 'rf-domain',
        x: 60,
        y: 12,
        label: 'Domain Pengirim Palsu',
        description: 'Alamat pengirim menggunakan ekstensi mencurigakan (.xyz) dan domain panjang tiruan, bukan domain resmi bank (seperti @bca.co.id).'
      },
      {
        id: 'rf-urgency',
        x: 75,
        y: 42,
        label: 'Desakan Panik & Ancaman Denda',
        description: 'Taktik psikologis rekayasa sosial (urgency). Penipu menakut-nakuti korban dengan tenggat 12 jam dan ancaman denda agar korban panik dan tidak sempat berpikir logis.'
      },
      {
        id: 'rf-pin',
        x: 45,
        y: 62,
        label: 'Permintaan Data Sangat Rahasia (PIN/Kartu)',
        description: 'Bank resmi TIDAK AKAN PERNAH meminta PIN, nomor CVV, atau kode OTP melalui tautan email/formulir web.'
      },
      {
        id: 'rf-shorturl',
        x: 50,
        y: 84,
        label: 'Tautan Pendek / URL Palsu',
        description: 'Tombol aksi mengarah ke URL shortener (bit.ly) atau situs phishing tiruan, bukan portal internet banking resmi dengan sertifikat SSL asli.'
      }
    ],
    summaryLesson: 'Ingat: Bank tidak pernah meminta data rahasia melalui email atau chat. Selalu periksa domain resmi dan jangan pernah panik atas ancaman pembekuan rekening.'
  },
  {
    id: 'case-2',
    type: 'apk_scam',
    title: 'Surat Undangan Pernikahan Palsu Format APK di WhatsApp',
    sender: '+62 821-9981-4432 (Nomor Tidak Dikenal)',
    date: 'Kemarin, 14:22 WIB',
    previewNote: 'File dokumen pernikahan dengan ekstensi file .APK yang dapat meretas SMS dan menguras rekening.',
    content: {
      heading: 'Undangan Pernikahan Digital Kami',
      body: 'Halo teman, mohon doa restunya kami akan melangsungkan akad & resepsi pernikahan minggu depan. Dikarenakan keterbatasan undangan fisik, kami sertakan Surat Undangan Digital resmi kami di bawah ini. Mohon diinstal dan dibuka untuk melihat denah lokasi ya!',
      attachmentName: 'Surat Undangan Pernikahan Kami.apk',
      attachmentSize: '8.4 MB'
    },
    redFlags: [
      {
        id: 'rf-apk-ext',
        x: 55,
        y: 76,
        label: 'Ekstensi File .APK (Bukan Dokumen / PDF)',
        description: 'Ekstensi .apk adalah paket aplikasi Android, bukan dokumen undangan (yang biasanya berformat PDF atau tautan website). Jika diinstal, aplikasi ini meminta izin membaca SMS untuk mencuri kode OTP perbankan!'
      },
      {
        id: 'rf-unknown-sender',
        x: 35,
        y: 15,
        label: 'Nomor Asing Tanpa Nama Pengirim Spesifik',
        description: 'Pengirim tidak menyebutkan nama mempelai atau sapaan nama pribadi kita. Pesan dibuat generik untuk disebar massal secara acak.'
      },
      {
        id: 'rf-force-install',
        x: 65,
        y: 50,
        label: 'Instruksi Memaksa Memasang Aplikasi',
        description: 'Pelaku meminta target untuk "menginstal" file di ponsel mereka untuk mengecoh pengguna awam.'
      }
    ],
    summaryLesson: 'Jangan pernah klik atau instal file berkas berakhiran .APK di WhatsApp dari siapa pun! Undangan asli adalah website tautan resmi atau gambar/video/PDF tanpa instalasi aplikasi.'
  },
  {
    id: 'case-3',
    type: 'hoax_news',
    title: 'Berita Manipulasi & Clickbait Vaksin / Kesehatan',
    sender: 'Kanal Berita Viral Tanpa Editor',
    date: '3 Hari Lalu',
    previewNote: 'Judul sensasional berhuruf kapital dengan gambar editan dan mencatut nama dokter ternama tanpa konfirmasi.',
    content: {
      heading: 'GEGER DUNIA MEDIS!! Ilmuwan Ternama Bongkar Rahasia Tanaman Liar Ini Sembuhkan 99 Penyakit Ganas Dalam Semalam!',
      body: 'Para dokter dan industri farmasi panik! Rahasia yang selama ini disembunyikan akhirnya bocor. Konsumsi rebusan daun ini setiap subuh dijamin menyembuhkan diabetes stadium akhir dan kanker tanpa operasi. Sebarkan sebelum postingan ini dihapus pemerintah!',
      sourceUrl: 'https://kabar-gempar-nusantara.blogspot.com/2026/09/bocoran-medis.html'
    },
    redFlags: [
      {
        id: 'rf-headline',
        x: 48,
        y: 20,
        label: 'Judul Bombastis & Huruf Kapital Berlebih',
        description: 'Ciri utama hoaks: penggunaan kata bombastis seperti "GEGER", "TERBONGKAR", tanda seru ganda, dan janji muluk tanpa basis ilmiah.'
      },
      {
        id: 'rf-conspiracy',
        x: 60,
        y: 55,
        label: 'Narasi Konspirasi & Desakan Sebarkan',
        description: 'Memanfaatkan narasi ketakutan bahwa informasi "akan dihapus pihak berwenang" untuk memanipulasi emosi warganet agar segera menyebarkannya.'
      },
      {
        id: 'rf-blogspot',
        x: 52,
        y: 85,
        label: 'Sumber Blog Gratisan Tanpa Redaksi Resmi',
        description: 'Informasi medis krusial berasal dari blogspot/domain gratisan tanpa nama jurnalis, tidak ada izin redaksi, dan tanpa kutipan jurnal ilmiah berwasit.'
      }
    ],
    summaryLesson: 'Selalu lakukan "Cek Fakta": cek siapa penulisnya, verifikasi dengan institusi resmi (Kemenkes/WHO/Jurnal Ilmiah), dan jangan pernah membagikan klaim kesehatan instan.'
  }
];
