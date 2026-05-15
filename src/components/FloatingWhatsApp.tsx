import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  const WHATSAPP_NUMBER = '6285835410773';
  
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden md:block bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-bold shadow-2xl animate-pulse text-gray-300"
      >
        Ada Kendala? Chat CS Kami
      </motion.div>
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] cursor-pointer"
      >
        <MessageCircle size={32} />
      </motion.a>
    </div>
  );
}
