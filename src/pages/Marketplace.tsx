import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Tag, Filter, CheckCircle2, XCircle, Flame, MessageCircle, ArrowRight } from 'lucide-react';

interface Account {
  id: string;
  nickname: string;
  gameId: string;
  coins: string;
  coinsValue: number; // For filtering
  level: number;
  vip: number;
  price: string;
  isHot?: boolean;
  status: 'Ready' | 'Sold';
}

const ACCOUNTS: Account[] = [
  {
    id: '1',
    nickname: 'ProPlayer_RD',
    gameId: '12345678',
    coins: '15B',
    coinsValue: 15,
    level: 55,
    vip: 4,
    price: 'Rp 750.000',
    isHot: true,
    status: 'Ready',
  },
  {
    id: '2',
    nickname: 'LuckyStar',
    gameId: '87654321',
    coins: '3.5B',
    coinsValue: 3.5,
    level: 30,
    vip: 2,
    price: 'Rp 180.000',
    status: 'Ready',
  },
  {
    id: '3',
    nickname: 'KingOfCoin',
    gameId: '11223344',
    coins: '500M',
    coinsValue: 0.5,
    level: 15,
    vip: 1,
    price: 'Rp 35.000',
    status: 'Sold',
  },
  {
    id: '4',
    nickname: 'Royal_Legend',
    gameId: '55667788',
    coins: '12B',
    coinsValue: 12,
    level: 48,
    vip: 3,
    price: 'Rp 550.000',
    isHot: true,
    status: 'Ready',
  },
  {
    id: '5',
    nickname: 'Hoki_RD',
    gameId: '99887766',
    coins: '7.5B',
    coinsValue: 7.5,
    level: 40,
    vip: 4,
    price: 'Rp 320.000',
    status: 'Ready',
  },
];

export default function Marketplace() {
  const [vipFilter, setVipFilter] = useState('Semua');
  const [coinFilter, setCoinFilter] = useState('Semua');

  // New state for Sell Account Form
  const [sellForm, setSellForm] = useState({
    nickname: '',
    gameId: '',
    coins: '',
    level: '',
    vip: '',
    price: '',
    paymentMethod: 'BCA',
    accountNumber: ''
  });

  const filteredAccounts = ACCOUNTS.filter(acc => {
    const matchVip = 
      vipFilter === 'Semua' || 
      (vipFilter === 'VIP 4+' ? acc.vip >= 4 : acc.vip === parseInt(vipFilter.replace('VIP ', '')));
    
    let matchCoin = true;
    if (coinFilter === '< 1B') matchCoin = acc.coinsValue < 1;
    else if (coinFilter === '1B – 5B') matchCoin = acc.coinsValue >= 1 && acc.coinsValue <= 5;
    else if (coinFilter === '5B – 10B') matchCoin = acc.coinsValue > 5 && acc.coinsValue <= 10;
    else if (coinFilter === '> 10B') matchCoin = acc.coinsValue > 10;

    return matchVip && matchCoin;
  });

  const handleSellFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSellForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSellAccount = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const isFormIncomplete = Object.values(sellForm).some(val => val.trim() === '');
    if (isFormIncomplete) {
      alert('⚠️ Mohon lengkapi semua field sebelum melanjutkan!');
      return;
    }

    const message = encodeURIComponent(
      `Halo admin MH COIN RD,\nSaya ingin menjual akun Royal Dream\n\nNickname: ${sellForm.nickname}\nID: ${sellForm.gameId}\nJumlah Coin: ${sellForm.coins}\nLevel Akun: ${sellForm.level}\nVIP Level: ${sellForm.vip}\nHarga yang diinginkan: ${sellForm.price}\n\nMetode Pembayaran: ${sellForm.paymentMethod}\nNomor Rekening / DANA: ${sellForm.accountNumber}\n\nPassword akan saya kirim melalui WhatsApp setelah admin menghubungi saya.\n\nMohon penawaran 🙏`
    );
    window.open(`https://wa.me/62895610058176?text=${message}`, '_blank');
  };

  const handleBuyAccount = (acc: Account) => {
    const message = encodeURIComponent(
      `Halo admin MH COIN RD,\nSaya ingin membeli akun Royal Dream\n\nNickname: ${acc.nickname}\nID: ${acc.gameId}\nJumlah Coin: ${acc.coins}\nLevel Akun: ${acc.level}\nVIP Level: ${acc.vip}\nHarga: ${acc.price}\n\nMohon info lanjut 🙏`
    );
    window.open(`https://wa.me/62895610058176?text=${message}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter"
        >
          🔥 Jual & Beli <span className="text-primary">Akun Royal Dream</span>
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          Tempat terbaik untuk upgrade pengalaman bermainmu. Aman, terpercaya, dan amanah.
        </p>
      </div>

      {/* Sell Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden p-8 rounded-3xl bg-gradient-to-br from-primary/20 via-black to-black border border-primary/30 space-y-8"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
          <Tag className="w-32 h-32 text-primary" />
        </div>
        
        <div className="relative z-10 text-center space-y-4">
          <h2 className="text-3xl font-black text-white italic uppercase">Jual Akun Kamu</h2>
          <p className="text-gray-300 max-w-md mx-auto text-sm">
            Punya akun sultan atau koin melimpah? Isi detail di bawah untuk mendapatkan penawaran terbaik!
          </p>
        </div>

        <form onSubmit={handleSellAccount} className="relative z-10 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] text-primary font-black uppercase ml-1">Nickname Akun</label>
              <input 
                type="text" 
                name="nickname"
                value={sellForm.nickname}
                onChange={handleSellFormChange}
                placeholder="Masukkan Nickname"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-primary outline-none transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-primary font-black uppercase ml-1">ID Akun</label>
              <input 
                type="text" 
                name="gameId"
                value={sellForm.gameId}
                onChange={handleSellFormChange}
                placeholder="Masukkan ID Game"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-primary outline-none transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-primary font-black uppercase ml-1">Jumlah Coin</label>
              <input 
                type="text" 
                name="coins"
                value={sellForm.coins}
                onChange={handleSellFormChange}
                placeholder="Contoh: 5B atau 10B"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-primary outline-none transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-primary font-black uppercase ml-1">Level Akun</label>
              <input 
                type="text" 
                name="level"
                value={sellForm.level}
                onChange={handleSellFormChange}
                placeholder="Contoh: Level 45"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-primary outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] text-primary font-black uppercase ml-1">VIP Level</label>
              <input 
                type="text" 
                name="vip"
                value={sellForm.vip}
                onChange={handleSellFormChange}
                placeholder="Contoh: VIP 3"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-primary outline-none transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-primary font-black uppercase ml-1">Harga yang Diinginkan</label>
              <input 
                type="text" 
                name="price"
                value={sellForm.price}
                onChange={handleSellFormChange}
                placeholder="Contoh: Rp 500.000"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-primary outline-none transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-primary font-black uppercase ml-1">Metode Penerimaan Dana</label>
              <select 
                name="paymentMethod"
                value={sellForm.paymentMethod}
                onChange={handleSellFormChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-primary outline-none transition-all appearance-none"
              >
                <option value="BCA" className="bg-[#111]">BCA</option>
                <option value="DANA" className="bg-[#111]">DANA</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-primary font-black uppercase ml-1">Nomor Rekening / Nomor DANA</label>
              <input 
                type="text" 
                name="accountNumber"
                value={sellForm.accountNumber}
                onChange={handleSellFormChange}
                placeholder="Masukkan Nomor Rekening/DANA"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-primary outline-none transition-all"
              />
            </div>
          </div>

          <div className="md:col-span-2 pt-4">
            <button 
              type="submit"
              className="w-full py-4 bg-primary text-black font-black uppercase tracking-[0.2em] rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
            >
              <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />
              Jual Sekarang
            </button>
            
            {/* Notice Section */}
            <div className="mt-4 p-4 bg-red-600/10 border border-red-600/20 rounded-xl">
              <p className="text-[10px] text-white font-bold leading-relaxed">
                <span className="text-red-500">📌 Penting:</span><br/>
                Password akun akan diminta oleh admin melalui WhatsApp setelah proses deal. 
                Jangan berikan password sebelum ada konfirmasi dari admin.
              </p>
            </div>
          </div>
        </form>
      </motion.section>

      {/* Buy Section & Filters */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h2 className="text-2xl font-black text-white italic uppercase flex items-center gap-3">
            <ShoppingCart className="text-primary" />
            Akun Tersedia
          </h2>
          
          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            {/* VIP Filter */}
            <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
              <span className="text-[10px] uppercase font-black text-gray-500 ml-2">VIP</span>
              <select 
                value={vipFilter}
                onChange={(e) => setVipFilter(e.target.value)}
                className="bg-transparent text-white text-xs font-bold outline-none cursor-pointer pr-4"
              >
                {['Semua', 'VIP 1', 'VIP 2', 'VIP 3', 'VIP 4+'].map(v => (
                  <option key={v} value={v} className="bg-[#111]">{v}</option>
                ))}
              </select>
            </div>

            {/* Coin Filter */}
            <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
              <span className="text-[10px] uppercase font-black text-gray-500 ml-2">COIN</span>
              <select 
                value={coinFilter}
                onChange={(e) => setCoinFilter(e.target.value)}
                className="bg-transparent text-white text-xs font-bold outline-none cursor-pointer pr-4"
              >
                {['Semua', '< 1B', '1B – 5B', '5B – 10B', '> 10B'].map(c => (
                  <option key={c} value={c} className="bg-[#111]">{c}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Grid Akun */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredAccounts.map((acc) => (
              <motion.div
                layout
                key={acc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`relative group bg-[#0a0a0a] rounded-2xl border transition-all duration-300 ${
                  acc.status === 'Sold' 
                    ? 'opacity-60 grayscale border-white/5' 
                    : 'border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]'
                }`}
              >
                {acc.isHot && acc.status === 'Ready' && (
                  <div className="absolute -top-3 -right-3 z-10 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1 shadow-lg shadow-red-600/20">
                    <Flame className="w-3 h-3" /> HOT
                  </div>
                )}

                <div className="p-6 space-y-6">
                  {/* Status & ID */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      {acc.status === 'Ready' 
                        ? <CheckCircle2 className="w-4 h-4 text-green-500" /> 
                        : <XCircle className="w-4 h-4 text-red-500" />
                      }
                      <span className={`text-[10px] font-black uppercase ${acc.status === 'Ready' ? 'text-green-500' : 'text-red-500'}`}>
                        {acc.status}
                      </span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">ID: {acc.gameId}</span>
                  </div>

                  {/* Nickname & Price */}
                  <div>
                    <h3 className="text-xl font-black text-white italic uppercase tracking-wider truncate">
                      {acc.nickname}
                    </h3>
                    <p className="text-2xl font-black text-primary tracking-tighter">{acc.price}</p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/5">
                    <div className="text-center">
                      <p className="text-[8px] text-gray-500 uppercase font-black">COIN</p>
                      <p className="text-sm font-bold text-white">{acc.coins}</p>
                    </div>
                    <div className="text-center border-x border-white/5">
                      <p className="text-[8px] text-gray-500 uppercase font-black">LEVEL</p>
                      <p className="text-sm font-bold text-white">{acc.level}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[8px] text-gray-500 uppercase font-black">VIP</p>
                      <p className="text-sm font-bold text-white">{acc.vip}</p>
                    </div>
                  </div>

                  {/* Action */}
                  <button 
                    disabled={acc.status === 'Sold'}
                    onClick={() => handleBuyAccount(acc)}
                    className={`w-full py-3 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all ${
                      acc.status === 'Sold'
                        ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                        : 'bg-white/5 text-white hover:bg-primary hover:text-black group-hover:scale-[1.02]'
                    }`}
                  >
                    {acc.status === 'Sold' ? 'Terjual' : 'Beli Akun'}
                    {acc.status === 'Ready' && <ArrowRight className="w-4 h-4" />}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredAccounts.length === 0 && (
          <div className="py-20 text-center space-y-4">
            <Filter className="w-12 h-12 text-white/10 mx-auto" />
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Tidak ada akun yang sesuai kriteria</p>
          </div>
        )}
      </section>

      {/* Disclaimer */}
      <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
        <p className="text-[10px] text-gray-500 text-center uppercase font-bold tracking-tight leading-relaxed">
          ⚠️ Disclaimer: Transaksi akun bersifat jual beli antar user dan bukan bagian resmi dari pihak game. 
          MH COIN RD hanya berperan sebagai marketplace penyedia layanan.
        </p>
      </div>
    </div>
  );
}
