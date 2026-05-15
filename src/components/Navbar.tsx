import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Send, Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Top Up', href: '/topup' },
    { name: 'Bongkar', href: '/bongkar' },
    { name: 'Cek Transaksi', href: '/cek-transaksi' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-dark/80 backdrop-blur-md border-b border-primary/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/logo.png" 
              alt="MH COIN RD" 
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-widest transition-colors hover:text-white",
                  location.pathname === link.href ? "text-white border-b-2 border-primary pb-1" : "text-gray-400"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/login"
              className="px-5 py-2 bg-secondary/20 border border-secondary rounded-full text-sm font-bold text-purple-400 hover:bg-secondary hover:text-white transition-all"
            >
              Login Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-dark-lighter border-b border-primary/20 px-4 py-6"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium transition-colors",
                  location.pathname === link.href ? "text-primary" : "text-gray-400"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/login"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-lg bg-primary text-dark font-bold text-center"
            >
              Login Admin
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
