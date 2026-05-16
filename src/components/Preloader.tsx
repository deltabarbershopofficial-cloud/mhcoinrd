import React from 'react';
import { motion } from 'motion/react';

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center p-4 overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container with Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
          className="mb-8"
        >
          <img 
            src="/logo.png" 
            alt="MH COIN RD" 
            className="h-20 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          />
        </motion.div>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ 
              duration: 1.5, 
              ease: "easeInOut", 
              repeat: Infinity 
            }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </div>

        {/* Text Animation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-4 text-primary text-[10px] uppercase font-black tracking-[0.4em]"
        >
          Loading your experience...
        </motion.p>
      </div>
    </motion.div>
  );
}
