import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowRightLeft, ShieldCheck, Zap, Star, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PackageCard from '../components/PackageCard';
import BongkarCard from '../components/BongkarCard';

const FEATURED_PACKAGES = [
  { id: '150m', name: '150M Royal Dream', price: 9900 },
  { id: '200m', name: '200M Royal Dream', price: 12900, isBestSeller: true },
  { id: '300m', name: '300M Royal Dream', price: 19400 },
  { id: '400m', name: '400M Royal Dream', price: 25800 },
  { id: '500m', name: '500M Royal Dream', price: 32300, isBestSeller: true },
  { id: '600m', name: '600M Royal Dream', price: 38800 },
  { id: '700m', name: '700M Royal Dream', price: 45200 },
  { id: '800m', name: '800M Royal Dream', price: 51700 },
  { id: '900m', name: '900M Royal Dream', price: 58200 },
  { id: '1b', name: '1B Royal Dream', price: 63650, isBestSeller: true },
  { id: '1.5b', name: '1.5B Royal Dream', price: 95600 },
  { id: '2b', name: '2B Royal Dream', price: 127400 },
  { id: '3b', name: '3B Royal Dream', price: 191000 },
  { id: '4b', name: '4B Royal Dream', price: 255000 },
  { id: '5b', name: '5B Royal Dream', price: 318500 },
  { id: '10b', name: '10B Royal Dream', price: 637000 },
];

const BONGKAR_PACKAGES = [
  { id: '500m_b', name: '500M Royal Dream', price: 25000, isLaris: true },
  { id: '1b_b', name: '1B Royal Dream', price: 58500, isLaris: true },
  { id: '1.5b_b', name: '1.5B Royal Dream', price: 88500 },
  { id: '2b_b', name: '2B Royal Dream', price: 123500 },
  { id: '3b_b', name: '3B Royal Dream', price: 183500 },
  { id: '4b_b', name: '4B Royal Dream', price: 243500 },
  { id: '5b_b', name: '5B Royal Dream', price: 303500, isLaris: true },
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Premium Hero Banner */}
      <section className="relative px-0 md:px-4 pt-0 md:pt-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[250px] md:h-[400px] w-full md:rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-b md:border border-white/10 group">
            {/* Main Banner Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/banner.png" 
                alt="Banner MH COIN RD" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay for better readability */}
              <div className="absolute inset-0 bg-black/30 backdrop-brightness-90"></div>
            </div>

            {/* Content Over Banner */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4"
              >
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-2">
                  Tercepat • Termurah • Terpercaya
                </div>
                <h1 className="text-3xl md:text-6xl font-black italic uppercase text-white drop-shadow-2xl tracking-tighter leading-none">
                  TOP UP & BONGKAR <br />
                  <span className="text-primary drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">COIN ROYAL DREAM</span>
                </h1>
                
                <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                  <Link to="/topup">
                    <button className="px-8 py-3 rounded-full bg-primary text-black font-black uppercase text-xs md:text-sm shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:bg-white hover:scale-105 transition-all">
                      TOP UP SEKARANG
                    </button>
                  </Link>
                  <Link to="/bongkar">
                    <button className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-black uppercase text-xs md:text-sm hover:bg-white/20 transition-all">
                      BONGKAR COIN
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mode Selection */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-4">
        <Link to="/topup" className="group">
          <button className="w-full py-4 rounded-xl bg-gradient-to-b from-primary to-[#b8860b] text-black font-black uppercase text-sm shadow-[0_4px_15px_rgba(212,175,55,0.3)] group-hover:scale-[1.01] transition-transform flex items-center justify-center gap-2">
            <ShoppingBag size={18} />
            <span>TOP UP COIN (BELI)</span>
          </button>
        </Link>
        <Link to="/bongkar" className="group">
          <button className="w-full py-4 rounded-xl bg-[#1a1a1a] border border-gray-800 text-gray-400 font-black uppercase text-sm group-hover:border-orange-500 transition-all group-hover:text-white flex items-center justify-center gap-2">
            <ArrowRightLeft size={18} />
            <span>BONGKAR COIN (JUAL)</span>
          </button>
        </Link>
      </section>

      {/* Top Up Section */}
      <section id="packages" className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-2 h-8 bg-primary rounded-full"></div>
          <h2 className="text-2xl font-black uppercase tracking-tight">🛒 TOP UP COIN</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURED_PACKAGES.map((pkg) => (
            <PackageCard 
              key={pkg.id} 
              id={pkg.id}
              name={pkg.name}
              price={pkg.price}
              isBestSeller={pkg.isBestSeller}
            />
          ))}
        </div>
        <div className="flex justify-center pt-4">
          <Link to="/topup" className="text-primary text-xs font-black uppercase flex items-center gap-1 hover:underline">
            <span>Lihat Semua Paket Top Up</span>
            <Star size={12} fill="currentColor" />
          </Link>
        </div>
      </section>

      {/* Bongkar Section */}
      <section id="bongkar" className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-2 h-8 bg-orange-500 rounded-full"></div>
          <h2 className="text-2xl font-black uppercase tracking-tight">💰 BONGKAR COIN (JUAL)</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {BONGKAR_PACKAGES.map((pkg) => (
            <BongkarCard 
              key={pkg.id} 
              id={pkg.id}
              name={pkg.name}
              price={pkg.price}
              isLaris={pkg.isLaris}
            />
          ))}
        </div>
        <div className="flex justify-center pt-4">
          <Link to="/bongkar" className="text-orange-500 text-xs font-black uppercase flex items-center gap-1 hover:underline">
            <span>Lihat Semua Paket Bongkar</span>
            <ArrowRightLeft size={12} />
          </Link>
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="glass-card p-8 bg-gradient-to-r from-secondary/10 to-primary/5 border-primary/20">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-black mb-4 uppercase">Mengapa Harus di MH COIN RD?</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Kami memahami pentingnya kecepatan dan keamanan bagi para gamers. Di MH COIN RD, 
              kami menggunakan sistem integrasi otomatis yang memastikan koin terkirim langsung 
              setelah pembayaran terverifikasi. Tidak ada admin fee tersembunyi, semua transparan.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-medium">
              <li className="flex items-center space-x-2 text-primary">
                <ShieldCheck size={16} />
                <span>Customer Service 24 Jam</span>
              </li>
              <li className="flex items-center space-x-2 text-primary">
                <ShieldCheck size={16} />
                <span>Pembayaran QRIS Otomatis</span>
              </li>
              <li className="flex items-center space-x-2 text-primary">
                <ShieldCheck size={16} />
                <span>Tanpa Ribet, Cukup Pake ID</span>
              </li>
              <li className="flex items-center space-x-2 text-primary">
                <ShieldCheck size={16} />
                <span>Garansi Coin Masuk 100%</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* S&K & Panduan Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic inline-block relative">
            S&K & PANDUAN TRANSAKSI
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Cara Top Up */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#0f0f0f] border border-white/5 p-6 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-primary/30 transition-all group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
              <ShoppingBag size={24} />
            </div>
            <h3 className="text-primary font-black uppercase text-sm mb-4">Cara Top Up Coin</h3>
            <ul className="space-y-2 text-[11px] text-gray-400">
              <li className="flex gap-2"><span>1.</span> <span>Pilih nominal coin</span></li>
              <li className="flex gap-2"><span>2.</span> <span>Masukkan ID game</span></li>
              <li className="flex gap-2"><span>3.</span> <span>Pilih metode pembayaran (BCA / DANA)</span></li>
              <li className="flex gap-2"><span>4.</span> <span>Lakukan pembayaran</span></li>
              <li className="flex gap-2"><span>5.</span> <span>Kirim bukti via WhatsApp</span></li>
              <li className="flex gap-2"><span>6.</span> <span>Tunggu proses 1-5 menit</span></li>
            </ul>
          </motion.div>

          {/* Cara Bongkar */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#0f0f0f] border border-white/5 p-6 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-orange-500/30 transition-all group"
          >
            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 transition-transform">
              <ArrowRightLeft size={24} />
            </div>
            <h3 className="text-orange-500 font-black uppercase text-sm mb-4">Cara Bongkar / Jual</h3>
            <ul className="space-y-2 text-[11px] text-gray-400">
              <li className="flex gap-2"><span>1.</span> <span>Pilih jumlah coin</span></li>
              <li className="flex gap-2"><span>2.</span> <span>Masukkan ID akun</span></li>
              <li className="flex gap-2"><span>3.</span> <span>Isi metode penerimaan (DANA / BANK)</span></li>
              <li className="flex gap-2 leading-relaxed"><span>4.</span> <span>Kirim chip ke:<br/><span className="text-white font-bold">ID: 9740091</span><br/><span className="text-white font-bold">Nick: iya rei</span></span></li>
              <li className="flex gap-2"><span>5.</span> <span>Upload bukti</span></li>
              <li className="flex gap-2"><span>6.</span> <span>Hubungi admin via WhatsApp</span></li>
              <li className="flex gap-2"><span>7.</span> <span>Tunggu proses pencairan</span></li>
            </ul>
          </motion.div>

          {/* S&K */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#0f0f0f] border border-white/5 p-6 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-red-500/30 transition-all group"
          >
            <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-red-500 font-black uppercase text-sm mb-4">Syarat & Ketentuan</h3>
            <ul className="space-y-2 text-[11px] text-gray-400">
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1 flex-shrink-0"></div> <span>Wajib isi ID dengan benar</span></li>
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1 flex-shrink-0"></div> <span>Kesalahan ID bukan tanggung jawab admin</span></li>
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1 flex-shrink-0"></div> <span>Proses setelah pembayaran valid</span></li>
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1 flex-shrink-0"></div> <span>Simpan bukti transaksi</span></li>
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1 flex-shrink-0"></div> <span>Dilarang spam order</span></li>
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1 flex-shrink-0"></div> <span>Semua transaksi bersifat final</span></li>
            </ul>
          </motion.div>

          {/* Keunggulan */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#0f0f0f] border border-white/5 p-6 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-yellow-500/30 transition-all group"
          >
            <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-500 mb-4 group-hover:scale-110 transition-transform">
              <Zap size={24} />
            </div>
            <h3 className="text-yellow-500 font-black uppercase text-sm mb-4">Keunggulan Kami</h3>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
                <span className="text-lg">⚡</span>
                <span className="text-xs font-bold text-gray-300">Proses Cepat</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
                <span className="text-lg">💰</span>
                <span className="text-xs font-bold text-gray-300">Harga Murah</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
                <span className="text-lg">✅</span>
                <span className="text-xs font-bold text-gray-300">Aman & Terpercaya</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
                <span className="text-lg">🔥</span>
                <span className="text-xs font-bold text-gray-300">Fast Respon</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex justify-center">
          <a 
            href="https://wa.me/6285835410773" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-10 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full font-black uppercase text-xs md:text-sm shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:scale-105 transition-all"
          >
            <MessageCircle size={20} />
            <span>Chat Admin via WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
