import React from 'react';
import { Lock, User, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simple auth logic for demo
    setTimeout(() => {
      if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('isLoggedIn', 'true');
        toast.success('Selamat datang, Admin!');
        navigate('/dashboard');
      } else {
        toast.error('Username atau Password salah!');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card w-full max-w-md p-10 border-primary/20 space-y-8"
      >
        <div className="text-center">
          <h1 className="text-3xl font-black text-white italic">ADMIN PANEL</h1>
          <p className="text-gray-500 text-sm mt-2">Kelola transaksi dan harga MH COIN RD</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50" size={18} />
              <input 
                type="text" 
                placeholder="Username"
                className="w-full bg-dark border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-primary outline-none transition-all"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50" size={18} />
              <input 
                type="password" 
                placeholder="Password"
                className="w-full bg-dark border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-primary outline-none transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-primary text-dark font-black text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center"
          >
            {loading ? <Loader2 className="animate-spin" /> : 'LOGIN SEKARANG'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
