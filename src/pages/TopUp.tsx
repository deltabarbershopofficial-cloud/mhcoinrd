import React from 'react';
import { motion } from 'motion/react';
import { Search, User, CreditCard, ShoppingCart, CheckCircle2, Copy } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const PACKAGES = [
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
  { id: '15b', name: '15B Royal Dream', price: 955000 },
  { id: '20b', name: '20B Royal Dream', price: 1274000 },
  { id: '30b', name: '30B Royal Dream', price: 1910000 },
  { id: '40b', name: '40B Royal Dream', price: 2546000 },
  { id: '50b', name: '50B Royal Dream', price: 3130000 },
  { id: '75b', name: '75B Royal Dream', price: 4700000 },
];

const METHODS = [
  { id: 'qris', name: 'QRIS (All E-Wallet)', icon: '📱' },
  { id: 'dana', name: 'DANA', icon: '💎' },
  { id: 'ovo', name: 'OVO', icon: '🟣' },
  { id: 'gopay', name: 'GoPay', icon: '🔵' },
  { id: 'bca', name: 'BCA Transfer', icon: '🏦' },
];

export default function TopUp() {
  const [searchParams] = useSearchParams();
  const selectedPackageId = searchParams.get('id');

  const [id, setId] = React.useState('');
  const [nickname, setNickname] = React.useState('');
  const [selectedPkg, setSelectedPkg] = React.useState(selectedPackageId || '');
  const [selectedMethod, setSelectedMethod] = React.useState('');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Berhasil disalin!');
  };

  const selectedPkgData = PACKAGES.find(p => p.id === selectedPkg);

  const handleProcess = () => {
    if (!id) return toast.error('Masukkan ID Akun dulu bosku!');
    if (!nickname) return toast.error('Masukkan Nickname akun dulu!');
    if (!selectedPkg) return toast.error('Pilih nominal koin dulu!');
    if (!selectedMethod) return toast.error('Pilih metode pembayaran!');

    const whatsappMessage = `Halo MH COIN RD, saya ingin TOP UP Royal Dream

DATA:
ID: ${id}
Nickname: ${nickname}
Nominal: ${selectedPkgData?.name}
Harga: Rp ${selectedPkgData?.price.toLocaleString('id-ID')}

PEMBAYARAN:
BCA - 2941084780 (Muhammad Hidayat)
atau
DANA - 087899804147 (Muhammad Hidayat)

Metode: ${selectedMethod.toUpperCase()}

Saya akan segera bayar.
Mohon diproses ya.
Fast respon = prioritas ⚡`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/6285835410773?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Step 1: ID */}
          <section className="bg-[#0a0a0a] border border-secondary/30 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-secondary/30 bg-secondary/10 flex items-center gap-2">
              <div className="w-2 h-6 bg-primary rounded-full"></div>
              <h2 className="font-bold uppercase tracking-wider">1. Masukkan ID Akun</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={20} />
                <input 
                  type="text" 
                  placeholder="Masukkan User ID (Contoh: 9740091)"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="input-field pl-12 h-14 text-xl font-mono"
                />
              </div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={20} />
                <input 
                  type="text" 
                  placeholder="Masukkan Nickname (Contoh: iya rei)"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className="input-field pl-12 h-14 text-lg font-bold"
                />
              </div>
              <p className="text-[10px] text-gray-500 mt-2 italic px-1">
                *Pastikan Nickname dan ID sudah benar agar tidak terjadi kesalahan kirim.
              </p>
            </div>
          </section>

          {/* Step 2: Package */}
          <section className="bg-[#0a0a0a] border border-secondary/30 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-secondary/30 bg-secondary/10 flex items-center gap-2">
              <div className="w-2 h-6 bg-primary rounded-full"></div>
              <h2 className="font-bold uppercase tracking-wider">2. Pilih Nominal Coin</h2>
            </div>
            <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              {PACKAGES.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => setSelectedPkg(pkg.id)}
                  className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden group ${
                    selectedPkg === pkg.id 
                    ? 'border-primary bg-primary/10 shadow-[0_0_20px_rgba(212,175,55,0.2)] scale-[1.02]' 
                    : 'border-white/5 bg-black hover:border-white/20'
                  }`}
                >
                  {pkg.isBestSeller && (
                    <div className="absolute top-0 right-0 bg-accent text-[8px] font-black px-2 py-1 rounded-bl-lg text-white uppercase tracking-tighter flex items-center gap-1">
                      <span>🔥</span>
                      <span>TERLARIS</span>
                    </div>
                  )}
                  
                  <div className="flex flex-col h-full">
                    <p className={`font-black text-[13px] mb-2 uppercase leading-tight ${selectedPkg === pkg.id ? 'text-primary' : 'text-white'}`}>
                      {pkg.name.replace('Royal Dream', '').trim()}
                    </p>
                    
                    <div className="mt-auto space-y-0.5">
                      <p className="text-[9px] text-gray-500 line-through font-medium">
                        Rp {(Math.ceil(pkg.price * 1.05 / 100) * 100).toLocaleString('id-ID')}
                      </p>
                      <p className={`text-sm font-black font-mono ${selectedPkg === pkg.id ? 'text-primary' : 'text-primary'}`}>
                        Rp {pkg.price.toLocaleString('id-ID')}
                      </p>
                    </div>
                  </div>

                  {selectedPkg === pkg.id && (
                    <div className="absolute top-2 right-2 text-primary">
                      <CheckCircle2 size={14} />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </section>

          {/* Step 3: Payment */}
          <section className="bg-[#0a0a0a] border border-secondary/30 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-secondary/30 bg-secondary/10 flex items-center gap-2">
              <div className="w-2 h-6 bg-primary rounded-full"></div>
              <h2 className="font-bold uppercase tracking-wider">3. Metode Pembayaran</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {METHODS.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${
                      selectedMethod === method.id 
                      ? 'border-primary bg-primary/10' 
                      : 'border-white/5 bg-[#111]'
                    }`}
                  >
                    <span className="text-2xl">{method.icon}</span>
                    <span className={`text-[10px] font-bold uppercase ${selectedMethod === method.id ? 'text-primary' : 'text-gray-300'}`}>
                      {method.name}
                    </span>
                  </button>
                ))}
              </div>

              {selectedMethod === 'qris' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-4 rounded-2xl flex flex-col items-center space-y-4 max-w-sm mx-auto"
                >
                  <p className="text-black font-black text-xs uppercase text-center">Scan QRIS untuk melakukan pembayaran</p>
                  <img 
                    src="/qris.jpg" 
                    alt="QRIS Payment" 
                    className="w-full h-auto aspect-square object-contain rounded-lg"
                  />
                  <div className="p-2 bg-primary/10 border border-primary/20 rounded-lg w-full">
                    <p className="text-[10px] text-black font-bold text-center uppercase tracking-tighter">MH COIN RD - QRIS ALL PAYMENT</p>
                  </div>
                </motion.div>
              )}
            </div>
          </section>
        </div>

        {/* Right Column: Checkout Info */}
        <div className="lg:sticky lg:top-24 h-fit">
          <div className="bg-[#0a0a0a] border border-secondary/40 rounded-2xl flex flex-col shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-secondary/40 bg-secondary/10 flex items-center gap-2">
              <div className="w-2 h-6 bg-primary rounded-full"></div>
              <h3 className="font-bold uppercase tracking-wider">Konfirmasi Pesanan</h3>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-4 space-y-2">
                <div className="flex justify-between text-[10px] text-gray-500 uppercase font-black">
                  <span>Item:</span>
                  <span className="text-white">{selectedPkgData?.name || '-'}</span>
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 uppercase font-black">
                  <span>ID Akun:</span>
                  <span className="text-white font-mono">{id || '-'}</span>
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 uppercase font-black border-t border-white/5 pt-2 mt-2">
                  <span>Nickname:</span>
                  <span className="text-primary italic font-bold">{nickname || '-'}</span>
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 uppercase font-black">
                  <span>Metode:</span>
                  <span className="text-white uppercase">{selectedMethod || '-'}</span>
                </div>
                <div className="border-t border-white/5 my-2"></div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-primary font-black uppercase text-sm">TOTAL:</span>
                  <span className="text-2xl font-black text-white italic font-mono">
                    {selectedPkgData ? `Rp ${selectedPkgData.price.toLocaleString('id-ID')}` : '-'}
                  </span>
                </div>
              </div>

              {/* Alert for Transfer */}
              <div className="p-3 bg-accent/10 border border-accent/20 rounded-lg text-[10px] leading-relaxed">
                <p className="text-accent font-bold mb-1 uppercase tracking-tighter">⚠️ INFORMASI PEMBAYARAN:</p>
                <p className="text-gray-400">
                  {selectedMethod === 'qris' 
                    ? 'Silakan scan QRIS dan bayar sesuai nominal. Setelah itu klik BELI untuk konfirmasi via WhatsApp.'
                    : 'Pastikan nominal transfer sesuai dengan total harga agar koin terkirim otomatis.'}
                </p>
              </div>

              <button 
                onClick={handleProcess}
                className="w-full py-4 bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-black uppercase rounded-xl transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)] active:scale-95"
              >
                BELI SEKARANG
              </button>

              <div className="space-y-3 pt-4">
                <p className="text-[10px] text-center text-gray-500 font-bold uppercase tracking-widest">Metode Manual</p>
                
                <div className="p-3 rounded-lg bg-dark-input border border-primary/10 flex justify-between items-center group">
                  <div>
                    <p className="text-[10px] text-primary font-bold">BCA</p>
                    <p className="font-bold text-sm text-white select-all">2941084780</p>
                    <p className="text-[8px] text-gray-500">M. HIDAYAT</p>
                  </div>
                  <button onClick={() => copyToClipboard('2941084780')} className="p-2 bg-white/5 rounded-lg group-hover:bg-primary transition-colors group-hover:text-black">
                    <Copy size={14} />
                  </button>
                </div>

                <div className="p-3 rounded-lg bg-dark-input border border-primary/10 flex justify-between items-center group">
                  <div>
                    <p className="text-[10px] text-secondary font-bold">DANA</p>
                    <p className="font-bold text-sm text-white select-all">087899804147</p>
                    <p className="text-[8px] text-gray-500">M. HIDAYAT</p>
                  </div>
                  <button onClick={() => copyToClipboard('087899804147')} className="p-2 bg-white/5 rounded-lg group-hover:bg-secondary transition-colors group-hover:text-white">
                    <Copy size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
