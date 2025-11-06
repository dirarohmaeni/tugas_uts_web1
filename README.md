# Toko Buku — UTS Pemrograman Web 1
### Nama: Dira Rohmaeni
### NIM: 312410465
### Kelas / Prodi: TI.24.A5 / Teknik Informatika
### Dosen Pengampu: Agung Nugroho, S.Kom., M.Kom.

## Deskripsi Proyek

Website Toko Buku Edu ini merupakan proyek Ujian Tengah Semester (UTS) mata kuliah Pemrograman Web 1.
Aplikasi ini menampilkan simulasi sistem toko buku sederhana berbasis HTML, CSS, dan JavaScript (DOM Manipulation) dengan tema pink pastel aesthetic 💗

## Tujuan Proyek
Website ini dibuat untuk mensimulasikan sistem penjualan buku secara online,
dengan tujuan agar pengguna dapat:
- Melihat stok dan katalog buku pendidikan.
- Melakukan pemesanan dan pelacakan pengiriman.
- Mengelola laporan pemesanan secara efisien.
Proyek ini juga melatih kemampuan HTML, CSS, dan JavaScript DOM Manipulation.


## FITUR UTAMA — Website Toko Buku
| No    | Fitur                              | File / Halaman   | Deskripsi Singkat                                                                                                                                                         |
| ----- | ---------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | **Login User**                     | `index.html`     | Form login untuk pengguna. Validasi menggunakan data di `data.js`. Jika login berhasil, diarahkan ke `dashboard.html`.                                                    |
| **2** | **Dashboard Utama**                | `dashboard.html` | Halaman utama setelah login. Menampilkan empat menu utama: **Stok Buku**, **Checkout**, **Tracking**, dan **Laporan**. Navbar berwarna pink pastel dengan tombol kembali. |
| **3** | **Katalog / Stok Buku**            | `stok.html`      | Menampilkan daftar buku (judul, stok, harga, dan gambar). Pengguna dapat menambah stok baru. Data diambil dari `data.js`.                                                 |
| **4** | **Checkout / Pemesanan Buku**      | `checkout.html`  | Simulasi proses pemesanan: pengguna memasukkan nama, alamat, memilih buku dan jumlah. Total harga dihitung otomatis.                                                      |
| **5** | **Tracking Pengiriman**            | `tracking.html`  | Pengguna dapat memasukkan **Nomor Delivery Order (DO)** untuk melihat status pengiriman (dengan progress bar dan detail).                                                 |
| **6** | **Laporan Pemesanan**              | `laporan.html`   | Menampilkan laporan pemesanan dan pengiriman. Data diambil dari objek `dataTracking` di `data.js`.                                                                        |
| **7** | **Navigasi dan Logout**            | Semua halaman    | Navbar di atas setiap halaman berisi tombol **Kembali ke Dashboard** dengan ikon ⬅️ dan warna pink tua agar kontras.                                                      |
| **8** | **Desain Responsif dan Aesthetic** | `style.css`      | Tema *pink pastel*, elemen dengan efek hover, card bayangan lembut, dan background gambar alat tulis di halaman login.                                                    |

## STRUKTUR FOLDER LENGKAP — tugas_uts
```
tugas_uts/
│
├── css/
│   └── style.css                  ← File utama untuk styling dan tema warna
│
├── img/
│   ├── background.png             ← Latar belakang halaman login
│   ├── paud_perkembangan.jpg      ← Gambar buku 1
│   ├── mikrobiologi.jpg           ← Gambar buku 2
│   ├── kepemimpinan.jpg           ← Gambar buku 3
│   ├── manajemen_keuangan.jpg     ← Gambar buku 4
│   └── pengantar_komunikasi.jpg   ← Gambar buku 5
│
├── js/
│   ├── data.js                    ← Data user, katalog buku, dan tracking
│   └── script.js                  ← Logika interaktif (login, checkout, laporan)
│
├── index.html                     ← Halaman login awal (user masuk)
├── dashboard.html                 ← Menu utama setelah login
├── stok.html                      ← Daftar stok & katalog buku
├── checkout.html                  ← Simulasi pemesanan buku
├── tracking.html                  ← Pelacakan pengiriman buku
└── laporan.html                   ← Laporan pemesanan & pengiriman
```

## Desain & Teknologi

- Framework CSS: Bootstrap 5.3 (CDN)

- Ikon: Bootstrap Icons (CDN)

- Bahasa: HTML, CSS, JavaScript (DOM)

- Font: Poppins (Google Fonts)

- Tema Warna: Pink pastel (#F48FB1) dengan aksen pink tua (#D81B60)



## Cara Menjalankan Proyek
1. Buka `index.html` di browser  
2. Login menggunakan akun dari `data.js`  
3. Jalankan urutan:
   - Stok → Checkout → Laporan → Tracking  
4. Nikmati animasi pengiriman otomatis


## Fungsi JavaScript Utama

- login() → Validasi user dari data.js

- renderKatalog() → Menampilkan daftar buku ke tabel stok

- tambahPesanan() → Tambah buku ke keranjang di checkout

- confirmCheckout() → Konfirmasi & reset pemesanan

- cariTracking() → Menampilkan detail status pengiriman

- loadLaporan() → Render ulang tabel laporan





## 🎥 Video Penjelasan
Durasi maksimal: **15 menit**

Isi video mencakup:
1. Penjelasan struktur folder & teknologi.
2. Demo tiap fitur (Login, Dashboard, Stok, Checkout, Tracking, Laporan).
3. Penjelasan singkat kode JavaScript utama.
4. Kesimpulan & cara menjalankan web.

**Link Pengumpulan Video:**  
[Tambahkan link Google Drive / YouTube kamu di sini]


## 💡 Catatan & Kendala
Selama proses pembuatan website ini, saya menghadapi beberapa kendala seperti:
- Penyesuaian struktur folder agar link antarhalaman tetap berfungsi.
- Penggunaan Bootstrap Icons dan CDN agar website lebih ringan.
- Menyesuaikan tema warna pink pastel agar tidak terlalu mencolok.

**Solusi:**
- Menggunakan Bootstrap CDN agar semua halaman bisa jalan tanpa file tambahan.
- Mengatur ulang CSS dan menambahkan variabel warna agar desain konsisten.


## ✅ Checklist Fungsional
```
| Fitur | Status |
|-------|--------|
| Login & Redirect | ✅ |
| Dashboard & Navigasi | ✅ |
| Stok Buku & Gambar | ✅ |
| Checkout & Total Otomatis | ✅ |
| Tracking DO | ✅ |
| Laporan Pemesanan | ✅ |
| Desain Responsif (Bootstrap) | ✅ |
| Tema Pink Pastel | ✅ |
```


## 📜 Lisensi
Proyek ini dibuat untuk keperluan akademik (UTS Pemrograman Web 1).
Seluruh gambar buku digunakan hanya sebagai ilustrasi pendidikan.


## Dibuat oleh
Dira Rohmaeni

Mahasiswa Universitas Pelita Bangsa

Program Studi Teknik Informatika — Semester 3

UTS Pemrograman Web 1 — 2025
