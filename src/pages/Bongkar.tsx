import React from 'react';
import { motion } from 'motion/react';
import { User, Wallet, ArrowRightLeft, Info, HelpCircle, Upload, CheckCircle2, X } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import BongkarCard from '../components/BongkarCard';

const BONGKAR_PACKAGES = [
  { id: '500m_b', name: '500M Royal Dream', price: 25000, isLaris: true },
  { id: '1b_b', name: '1B Royal Dream', price: 58500, isLaris: true },
  { id: '1.5b_b', name: '1.5B Royal Dream', price: 88500 },
  { id: '2b_b', name: '2B Royal Dream', price: 123500 },
  { id: '3b_b', name: '3B Royal Dream', price: 183500 },
  { id: '4b_b', name: '4B Royal Dream', price: 243500 },
  { id: '5b_b', name: '5B Royal Dream', price: 303500, isLaris: true },
];

export default function Bongkar() {
  const [searchParams] = useSearchParams();
  const selectedPackageId = searchParams.get('id');

  const [formData, setFormData] = React.useState({
    userId: '',
    pkgId: selectedPackageId || '',
    method: 'DANA',
    recipientNumber: '',
    recipientName: ''
  });
  const [previewImage, setPreviewImage] = React.useState<string | null>(null);

  const selectedPkg = BONGKAR_PACKAGES.find(p => p.id === formData.pkgId);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error('Ukuran file maksimal 2MB bosku!');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProcess = () => {
    if (!formData.userId) return toast.error('Masukkan ID Akun dulu!');
    if (!formData.pkgId) return toast.error('Pilih jumlah koin yang mau dibongkar!');
    if (!formData.recipientName) return toast.error('Masukkan nama rekening penerima!');
    if (!formData.recipientNumber) return toast.error('Masukkan nomor rekening/HP!');
    if (!previewImage) return toast.error('Upload bukti transfer chip dulu!');

    const whatsappMessage = `Halo MH COIN RD, saya ingin JUAL / BONGKAR COIN Royal Dream

DATA:
ID: ${formData.userId}
Jumlah Coin: ${selectedPkg?.name}
Uang diterima: Rp ${selectedPkg?.price.toLocaleString('id-ID')}

PENERIMAAN:
Metode: ${formData.method}
Nama: ${formData.recipientName}
Nomor: ${formData.recipientNumber}

Saya sudah kirim chip ke:
ID: 9740091 (MH CoinRd)

Bukti sudah saya upload di website.

Mohon diproses.
Fast respon = prioritas ⚡`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/62895610058176?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-12">
      <div className="text-center space-y-2">
        <h1 className="text-5xl font-black text-white italic uppercase tracking-tighter">BONGKAR <span className="text-orange-500 underline decoration-secondary">COIN</span></h1>
        <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">Tukarkan koin kado menjadi saldo nyata</p>
      </div>

      {/* Package Selection */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-2 h-8 bg-orange-500 rounded-full"></div>
          <h2 className="text-2xl font-black uppercase tracking-tight">1. Pilih Nominal Bongkar</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {BONGKAR_PACKAGES.map((pkg) => (
            <BongkarCard 
              key={pkg.id}
              id={pkg.id}
              name={pkg.name}
              price={pkg.price}
              isLaris={pkg.isLaris}
              isSelected={formData.pkgId === pkg.id}
              onClick={() => setFormData({...formData, pkgId: pkg.id})}
            />
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <section className="bg-[#0a0a0a] border border-orange-500/40 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-orange-500/40 bg-orange-500/10 flex items-center gap-2">
              <div className="w-2 h-6 bg-orange-500 rounded-full"></div>
              <h2 className="font-bold uppercase tracking-wider">2. Isi Data Penerima</h2>
            </div>
            <div className="p-6 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">ID AKUN ANDA</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" size={16} />
                    <input 
                      type="text" 
                      placeholder="Masukkan ID Akun"
                      className="input-field pl-11 py-3 h-12"
                      value={formData.userId}
                      onChange={(e) => setFormData({...formData, userId: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">METODE PENERIMAAN</label>
                  <select 
                    className="input-field py-3 h-12 appearance-none"
                    value={formData.method}
                    onChange={(e) => setFormData({...formData, method: e.target.value})}
                  >
                    <option value="DANA">DANA (FAST)</option>
                    <option value="OVO">OVO</option>
                    <option value="BANK">BANK MANDIRI/BCA/BNI</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">NAMA REKENING/E-WALLET</label>
                  <input 
                    type="text" 
                    placeholder="Nama Lengkap Sesuai Rekening"
                    className="input-field py-3 h-12 font-bold text-primary"
                    value={formData.recipientName}
                    onChange={(e) => setFormData({...formData, recipientName: e.target.value})}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">NOMOR REKENING / HP</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: 0812xxx atau 123xxx"
                    className="input-field py-3 h-12 font-mono"
                    value={formData.recipientNumber}
                    onChange={(e) => setFormData({...formData, recipientNumber: e.target.value})}
                  />
                </div>
              </div>

              {/* Image Upload */}
              <div className="space-y-2 pt-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">3. UPLOAD BUKTI KIRIM CHIP (SCRENSHOT)</label>
                {!previewImage ? (
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer hover:border-orange-500/50 hover:bg-white/5 transition-all">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 text-gray-400 mb-2" />
                      <p className="text-xs text-gray-500 uppercase font-bold">Klik untuk upload bukti</p>
                      <p className="text-[9px] text-gray-600 mt-1">JPG, PNG (MAX. 2MB)</p>
                    </div>
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                  </label>
                ) : (
                  <div className="relative rounded-2xl overflow-hidden border border-orange-500/30 h-48">
                    <img src={previewImage} alt="Bukti Transfer" className="w-full h-full object-cover" />
                    <button 
                      onClick={() => setPreviewImage(null)}
                      className="absolute top-2 right-2 p-1 bg-black/50 text-white rounded-full hover:bg-red-500 transition-colors"
                    >
                      <X size={16} />
                    </button>
                    <div className="absolute bottom-0 inset-x-0 p-2 bg-black/60 text-[10px] text-white font-bold text-center">
                      Bukti Terlampir ✅
                    </div>
                  </div>
                )}
              </div>

              <button 
                onClick={handleProcess}
                className="w-full py-5 mt-4 bg-orange-600 hover:bg-orange-700 text-white font-black uppercase rounded-2xl transition-all shadow-[0_0_30px_rgba(234,88,12,0.3)] flex items-center justify-center space-x-2 active:scale-95"
              >
                <ArrowRightLeft size={20} />
                <span>KIRIM SEKARANG</span>
              </button>
            </div>
          </section>
        </div>

        {/* Note Section */}
        <section className="space-y-6 lg:sticky lg:top-24">
          <div className="bg-[#0a0a0a] border border-orange-500/40 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-orange-500/40 bg-orange-500/10 flex items-center gap-2">
              <div className="w-2 h-6 bg-orange-500 rounded-full"></div>
              <h2 className="font-bold uppercase tracking-wider text-orange-500 text-sm">INSTRIKSI BONGKAR</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-3">
                 <p className="text-xs text-gray-400 leading-relaxed font-black uppercase">
                  Harap kirim chip ke ID admin resmi:
                </p>
                <div className="bg-dark border border-orange-500/20 rounded-xl p-6 text-center space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] text-gray-500 uppercase font-black">ID ADMIN</span>
                    <h3 className="font-black text-4xl text-white tracking-[0.2em] font-mono select-all">9740091</h3>
                  </div>
                  <div className="h-px bg-white/5 w-1/2 mx-auto"></div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-gray-500 uppercase font-black">NICKNAME</span>
                    <p className="font-black text-xl text-primary italic uppercase tracking-widest">MH CoinRd</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-orange-500/5 border border-orange-500/20 rounded-xl space-y-3">
                <div className="flex items-center space-x-2 text-orange-500 font-black text-[10px] uppercase">
                  <HelpCircle size={14} />
                  <span>ALUR PROSES</span>
                </div>
                <div className="space-y-2 text-[10px] text-gray-500 font-medium uppercase leading-relaxed">
                  <p className="flex gap-2"><span className="text-orange-500">01</span> Kirim coin ke ID di atas</p>
                  <p className="flex gap-2"><span className="text-orange-500">02</span> Screenshot Bukti sukses kirim (Kado)</p>
                  <p className="flex gap-2"><span className="text-orange-500">03</span> Isi form & Upload Screenshot</p>
                  <p className="flex gap-2"><span className="text-orange-500">04</span> Klik tombol kirim & hubungi WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
