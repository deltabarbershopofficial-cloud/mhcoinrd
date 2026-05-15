import React from 'react';
import { motion } from 'motion/react';
import { Coins, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BongkarCardProps {
  id: string;
  name: string;
  price: number;
  isLaris?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function BongkarCard({ id, name, price, isLaris, isSelected, onClick }: BongkarCardProps) {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  });

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-black border rounded-2xl p-4 flex flex-col items-center justify-between transition-all relative group h-full cursor-pointer ${
        isSelected 
        ? 'border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.3)] ring-1 ring-orange-500' 
        : 'border-orange-500/30 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]'
      }`}
    >
      {/* Laris Badge */}
      {isLaris && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-orange-600 to-red-600 text-[10px] font-black px-3 py-1 rounded-full text-white uppercase tracking-widest shadow-xl flex items-center gap-1">
          <span>🔥</span>
          <span>LARIS</span>
        </div>
      )}

      {isSelected && (
        <div className="absolute top-2 right-2 text-orange-500">
          <CheckCircle2 size={16} />
        </div>
      )}
      
      <div className="w-14 h-14 bg-gradient-to-tr from-orange-600 to-yellow-500 rounded-full flex items-center justify-center text-3xl mb-4 shadow-[0_0_20px_rgba(249,115,22,0.3)] text-black group-hover:rotate-12 transition-transform">
        💰
      </div>
      
      <div className="text-center w-full flex-grow flex flex-col justify-center">
        <h3 className="font-black text-lg text-white uppercase tracking-tight mb-2 leading-tight">{name}</h3>
        
        <div className="flex flex-col items-center space-y-0.5">
          <span className="text-gray-500 text-[10px] uppercase font-bold tracking-tighter">ANDA TERIMA</span>
          <span className="text-green-500 font-black text-2xl font-mono drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]">
            {formatter.format(price).replace("Rp", "").trim()}
          </span>
          <span className="text-green-500/60 text-[10px] font-bold">IDR</span>
        </div>

        <Link
          to={`/bongkar?id=${id}`}
          className="mt-6 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all flex items-center justify-center gap-2 group-hover:border-orange-500/50"
        >
          <span>JUAL SEKARANG</span>
          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
