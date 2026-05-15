import React from 'react';
import { motion } from 'motion/react';
import { Package, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PackageCardProps {
  id: string;
  name: string;
  price: number;
  isBestSeller?: boolean;
}

export default function PackageCard({ id, name, price, isBestSeller }: PackageCardProps) {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  });

  const originalPrice = Math.ceil(price * 1.05 / 100) * 100;
  const discountPercent = "5%";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-black border border-primary/30 rounded-2xl p-4 flex flex-col items-center justify-between hover:border-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all relative group h-full"
    >
      {/* Discount Badge */}
      <div className="absolute top-3 right-3 z-10 bg-accent text-[9px] font-black px-2 py-0.5 rounded shadow-lg text-white uppercase tracking-tighter ring-1 ring-white/20">
        -{discountPercent}
      </div>

      {/* Best Seller Badge */}
      {isBestSeller && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-secondary to-purple-800 text-[10px] font-black px-3 py-1 rounded-full text-white uppercase tracking-widest shadow-xl flex items-center gap-1">
          <span>🔥</span>
          <span>TERLARIS</span>
        </div>
      )}
      
      <div className="w-14 h-14 bg-gradient-to-tr from-yellow-600 to-yellow-300 rounded-full flex items-center justify-center text-3xl mb-4 shadow-[0_0_20px_rgba(212,175,55,0.3)] text-black group-hover:rotate-12 transition-transform">
        💰
      </div>
      
      <div className="text-center w-full flex-grow flex flex-col justify-center">
        <h3 className="font-black text-lg text-white uppercase tracking-tight mb-2 leading-tight">{name}</h3>
        
        <div className="flex flex-col items-center space-y-0.5">
          <span className="text-gray-500 text-[11px] line-through decoration-accent/70 font-medium">
            {formatter.format(originalPrice)}
          </span>
          <span className="text-primary font-black text-2xl font-mono drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]">
            {formatter.format(price).replace("Rp", "").trim()}
          </span>
          <span className="text-primary/60 text-[10px] font-bold">IDR</span>
        </div>

        <Link
          to={`/topup?id=${id}`}
          className="mt-6 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase hover:bg-primary hover:text-black hover:border-primary transition-all flex items-center justify-center gap-2 group-hover:border-primary/50"
        >
          <span>BELI SEKARANG</span>
          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
