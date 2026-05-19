import React from 'react';
import Navbar from './Navbar';
import FloatingWhatsApp from './FloatingWhatsApp';
import { Toaster } from 'react-hot-toast';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-dark selection:bg-primary selection:text-dark">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="border-t border-secondary/20 bg-dark-lighter px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-[10px] text-gray-500 max-w-sm text-center md:text-left flex items-center justify-center md:justify-start gap-2">
          <img src="/logo.png" alt="MH COIN RD Logo" className="w-5 h-5 object-contain" />
          <span>&copy; {new Date().getFullYear()} <span className="text-white font-bold">MH COIN RD</span> - Top Up Game Aman & Terpercaya. Layanan pengisian coin Royal Dream 24 jam otomatis tanpa antre.</span>
        </div>
        <div className="flex gap-8 uppercase font-bold tracking-widest text-[10px] text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="https://wa.me/62895610058176" className="hover:text-white transition-colors">Contact Us</a>
        </div>
      </footer>
      <FloatingWhatsApp />
      <Toaster position="top-right" />
    </div>
  );
}
