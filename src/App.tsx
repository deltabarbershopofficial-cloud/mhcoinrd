import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import TopUp from './pages/TopUp';
import Bongkar from './pages/Bongkar';
import CekTransaksi from './pages/CekTransaksi';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Preloader from './components/Preloader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading atau menunggu window.onload
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!isLoading && (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topup" element={<TopUp />} />
            <Route path="/bongkar" element={<Bongkar />} />
            <Route path="/cek-transaksi" element={<CekTransaksi />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Layout>
      )}
    </Router>
  );
}
