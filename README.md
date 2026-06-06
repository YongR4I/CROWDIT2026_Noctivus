# Suara Warga

Suara Warga adalah platform berbasis web yang dirancang untuk memfasilitasi pelaporan warga, menyediakan konten edukasi yang bermanfaat, serta membangun interaksi komunitas. Proyek ini dikembangkan dengan antarmuka yang modern, responsif, dan mengutamakan kenyamanan pengguna (mobile-first design).

## 👥 Tim Pengembang

| Nama | Peran |
| :--- | :--- |
| **Raihan Daffa** | Full Stack Developer |
| **Vio Aditya Syahputra** | Full Stack Developer |

## ✨ Fitur Utama

- **Laporan Warga (`/report`)**: Memungkinkan pengguna untuk melaporkan berbagai masalah atau kejadian di lingkungan sekitar. Dilengkapi dengan form pelaporan dan halaman untuk melihat seluruh laporan.
- **Pusat Edukasi (`/edukasi`)**: Menyajikan konten edukatif berupa artikel, tips, dan video untuk meningkatkan wawasan warga.
- **Komunitas & Acara (`/komunitas`)**: Wadah bagi warga untuk menemukan dan mengikuti berbagai kegiatan maupun acara komunitas.
- **Dashboard (`/dashboard`)**: Panel interaktif untuk memantau ringkasan laporan dan aktivitas dalam platform.

## 🛠️ Teknologi yang Digunakan

- **HTML5 & CSS3**
- **Tailwind CSS** (Framework CSS)
- **Vanilla JavaScript**

## 📁 Struktur Direktori Utama

- `/assets/` - Penyimpanan aset statis seperti CSS, fonts, ikon, gambar, dan JS. (Output Tailwind berada di `/assets/css/style.css`).
- `index.html` - Halaman pendaratan utama (Landing Page).
- `/dashboard/` - Halaman terkait panel pemantauan.
- `/edukasi/` - Halaman-halaman konten edukasi.
- `/komunitas/` - Halaman terkait penemuan acara komunitas.
- `/report/` - Halaman sistem pelaporan warga.
- `/srs/` - Dokumen pedoman pengembangan (contoh: *Clean Code*, *Mobile First Design*).

## 🚀 Panduan Instalasi & Menjalankan Proyek

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) di perangkat Anda.

1. **Clone repository ini**
   ```bash
   git clone <url-repository>
   cd "Suara Warga"
   ```

2. **Instal dependensi**
   ```bash
   npm install
   ```

3. **Jalankan development server (Tailwind watch)**
   ```bash
   npm run dev
   ```

4. **Build untuk production (Tailwind minify)**
   ```bash
   npm run build
   ```

## 📝 Panduan Pengembangan (Guidelines)

Untuk menjaga kualitas proyek, kami menerapkan aturan pengembangan berikut:

- **Clean Code**: Semua kontribusi harus mengikuti standar *clean code* yang tertuang di dalam `srs/cleancode.md`.
- **Mobile First Design**: Desain UI harus memprioritaskan perangkat mobile (ponsel) terlebih dahulu sesuai panduan di `srs/mobilefirstdesign.md`.
- **Styling**: Penulisan gaya (style) diwajibkan menggunakan utility classes dari Tailwind. Konfigurasi dapat disesuaikan pada `tailwind.config.js`.

---
*Dibuat dengan ❤️ oleh Tim Pengembang Suara Warga*
