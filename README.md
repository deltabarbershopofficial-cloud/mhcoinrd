# MH COIN RD - Top Up Game Premium

Website Top Up & Bongkar Coin Royal Dream dengan desain modern gaming premium.

## Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS 4.0
- **Database**: Supabase
- **Animations**: Motion
- **Deployment**: Netlify / Cloud Run

## Cara Setup Supabase
1. Buat project baru di [Supabase Console](https://app.supabase.com/).
2. Masuk ke menu **SQL Editor**.
3. Copy-paste isi dari file `SUPABASE_SCHEMA.sql` lalu jalankan (**Run**).
4. Ambil `SUPABASE_URL` dan `SUPABASE_ANON_KEY` dari menu **Project Settings > API**.
5. Masukkan ke file `.env` (atau Secrets di AI Studio).

## Fitur Utama
- **Top Up Otomatis**: Pilih paket, isi ID, redirect WA dengan format rapi.
- **Bongkar Coin**: Input data jual, petunjuk ID transfer, redirect WA.
- **Cek Transaksi**: Lacak status pesanan via ID Transaksi.
- **Admin Dashboard**: Kelola transaksi dan pantau omzet (Login default: `admin` / `admin123`).

## Cara Deploy ke Netlify
1. Hubungkan repository GitHub kamu ke Netlify.
2. Gunakan Build Command: `npm run build`.
3. Gunakan Publish Directory: `dist`.
4. Masukkan Environment Variables (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) di settings Netlify.

## Kontak Admin
- WhatsApp: 085835410773
- Hubungi untuk bantuan teknis atau kerjasama.
