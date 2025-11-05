### Nama: Dira Rohmaeni
### NIM: 312410465
### Kelas / Prodi: TI.24.A5 / Teknik Informatika
### Dosen Pengampu: [Nama Dosen Kamu]

## Deskripsi Proyek

Website Toko Buku Edu ini merupakan proyek Ujian Tengah Semester (UTS) mata kuliah Pemrograman Web 1.
Aplikasi ini menampilkan simulasi sistem toko buku sederhana berbasis HTML, CSS, dan JavaScript (DOM Manipulation) dengan tema pink pastel aesthetic 💗

| No | Fitur                    | Halaman                | Deskripsi                                                                                          |
| -- | ------------------------ | ---------------------- | -------------------------------------------------------------------------------------------------- |
| 1  | **Login**                | `index.html`           | Form login validasi menggunakan data user di `data.js`. Redirect ke dashboard bila login berhasil. |
| 2  | **Dashboard**            | `dashboard.html`       | Menampilkan menu utama: Stok Buku, Checkout, Tracking, dan Laporan.                                |
| 3  | **Stok / Katalog Buku**  | `stok.html`            | Menampilkan daftar buku lengkap dengan gambar, stok, harga, dan form tambah data baru.             |
| 4  | **Checkout / Pemesanan** | `checkout.html`        | Fitur simulasi pemesanan buku dengan input nama, alamat, pilihan buku, dan jumlah pembelian.       |
| 5  | **Tracking Pengiriman**  | `tracking.html`        | Menampilkan status pengiriman berdasarkan nomor DO dengan progress bar dan detail pengiriman.      |
| 6  | **Laporan**              | `laporan.html`         | Menampilkan rekap pemesanan dari data tracking.                                                    |
| 7  | **Logout / Navigasi**    | Navbar di tiap halaman | Tombol Logout/Kembali dengan warna pink tua dan ikon ⬅️.                                           |

## Desain & Teknologi

- Framework CSS: Bootstrap 5.3 (CDN)

- Ikon: Bootstrap Icons (CDN)

- Bahasa: HTML, CSS, JavaScript (DOM)

- Font: Poppins (Google Fonts)

- Tema Warna: Pink pastel (#F48FB1) dengan aksen pink tua (#D81B60)



## Cara Menjalankan Proyek

1. Buka folder tugas-uts-web1 di Visual Studio Code

2. Jalankan Live Server pada index.html

   - Klik kanan → Open with Live Server
   
3.Masukkan akun contoh:

  - Email: rina@gmail.com

  - Password: rina123

4. Kamu akan diarahkan ke halaman Dashboard, lalu bisa menjelajahi seluruh fitur.


## Fungsi JavaScript Utama

- login() → Validasi user dari data.js

- renderKatalog() → Menampilkan daftar buku ke tabel stok

- tambahPesanan() → Tambah buku ke keranjang di checkout

- confirmCheckout() → Konfirmasi & reset pemesanan

- cariTracking() → Menampilkan detail status pengiriman

- loadLaporan() → Render ulang tabel laporan








## Dibuat oleh

Dira Rohmaeni
Mahasiswa Universitas Pelita Bangsa
Program Studi Teknik Informatika — Semester 3
UTS Pemrograman Web 1 — 2025
