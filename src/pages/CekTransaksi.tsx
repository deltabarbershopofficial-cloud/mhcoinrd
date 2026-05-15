import React from 'react';
import { Search, Loader2, CheckCircle, Clock, XCircle, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

export default function CekTransaksi() {
  const [trxId, setTrxId] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<any>(null);

  const handleSearch = async () => {
    if (!trxId) return toast.error('Masukkan ID Transaksi!');
    
    setLoading(true);
    setResult(null);
    
    try {
      const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .eq('id', trxId)
        .single();
        
      if (error) throw error;
      setResult(data);
    } catch (err: any) {
      console.error('Search error:', err.message);
      toast.error(err.message.includes('Supabase configuration') ? err.message : 'Transaksi tidak ditemukan!');
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="text-green-500" />;
      case 'pending': return <Clock className="text-yellow-500" />;
      case 'rejected': return <XCircle className="text-red-500" />;
      default: return <AlertCircle className="text-gray-500" />;
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-black text-white italic">RIWAYAT PESANAN</h1>
        <p className="text-gray-500">Lacak status pesanan kamu dengan ID transaksi</p>
      </div>

      <div className="glass-card p-1 p-b-0 border-primary/20">
        <div className="flex p-2 gap-2">
          <input 
            type="text" 
            placeholder="Masukkan ID Transaksi (Contoh: trx-123...)"
            className="flex-grow bg-dark border border-white/5 rounded-lg py-4 px-6 outline-none focus:border-primary transition-all text-sm"
            value={trxId}
            onChange={(e) => setTrxId(e.target.value)}
          />
          <button 
            onClick={handleSearch}
            disabled={loading}
            className="px-8 bg-primary text-dark font-black rounded-lg hover:bg-yellow-400 transition-all flex items-center justify-center min-w-[120px]"
          >
            {loading ? <Loader2 className="animate-spin" /> : <Search size={22} />}
          </button>
        </div>
      </div>

      {result && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 border-primary/20 space-y-6"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">DETAIL TRANSAKSI</h3>
            <div className="flex items-center space-x-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 capitalize text-xs">
              {getStatusIcon(result.status)}
              <span className="font-bold">{result.status}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
            <div className="space-y-1">
              <p className="text-[10px] text-gray-500 font-bold uppercase">ID Transaksi</p>
              <p className="text-sm font-mono text-white opacity-60 truncate">{result.id}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-gray-500 font-bold uppercase">Game ID</p>
              <p className="text-sm font-bold text-white">{result.user_id}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-gray-500 font-bold uppercase">Layanan</p>
              <p className="text-sm font-bold text-white">{result.product_name}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-gray-500 font-bold uppercase">Metode</p>
              <p className="text-sm font-bold text-white uppercase">{result.payment_method}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-gray-500 font-bold uppercase">Waktu</p>
              <p className="text-sm text-gray-400">{new Date(result.created_at).toLocaleString('id-ID')}</p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 flex flex-col items-center">
            <p className="text-xs text-gray-500 mb-2">Punya kendala? Hubungi Admin</p>
            <a 
              href="https://wa.me/6285835410773" 
              className="text-xs font-bold text-primary hover:underline"
            >
              WhatsApp Support
            </a>
          </div>
        </motion.div>
      )}

      {/* Dummy Data for demonstration if results are empty */}
      <div className="p-4 bg-yellow-500/5 border border-yellow-500/10 rounded-lg">
        <p className="text-[10px] text-yellow-500/60 leading-relaxed italic text-center">
          Note: Jika transaksi baru saja dilakukan, harap tunggu 1-3 menit sampai sistem memperbarui status otomatis. 
          Database Supabase harus dikonfigurasi dengan URL & Key di .env untuk fungsi pencarian live.
        </p>
      </div>
    </div>
  );
}
