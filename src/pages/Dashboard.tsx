import React from 'react';
import { 
  Users, 
  ShoppingBag, 
  ArrowRightLeft, 
  TrendingUp, 
  Check, 
  X, 
  Clock,
  RefreshCw
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('transaksi');

  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  const MOCK_TRANSACTIONS = [
    { id: 'trx-001', type: 'topup', user: 'ID: 887211', product: '300M Coin', price: 'Rp 20.000', status: 'pending' },
    { id: 'trx-002', type: 'bongkar', user: 'ID: 991823', product: '1000M Coin', price: 'Rp 50.000', status: 'completed' },
    { id: 'trx-003', type: 'topup', user: 'ID: 112233', product: '500M Coin', price: 'Rp 32.000', status: 'pending' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-white italic">ADMIN DASHBOARD</h1>
          <p className="text-gray-500">Selamat bekerja, Admin Hidayat!</p>
        </div>
        <button 
          onClick={handleLogout}
          className="px-6 py-2 rounded-lg bg-red-500/10 text-red-500 font-bold border border-red-500/20 hover:bg-red-500 transition-all hover:text-white"
        >
          LOGOUT
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: ShoppingBag, label: 'Top Up Hari Ini', value: '42 Trax', color: 'text-primary' },
          { icon: ArrowRightLeft, label: 'Bongkar Hari Ini', value: '12 Trax', color: 'text-secondary' },
          { icon: TrendingUp, label: 'Omzet', value: 'Rp 1.450.000', color: 'text-green-500' },
          { icon: Users, label: 'Active Games', value: 'Royal Dream', color: 'text-blue-500' },
        ].map((stat, i) => (
          <div key={i} className="glass-card p-6 border-white/5 bg-white/5 space-y-2">
            <stat.icon className={stat.color} size={24} />
            <p className="text-xs text-gray-500 font-bold uppercase">{stat.label}</p>
            <p className="text-2xl font-black text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        <div className="flex space-x-2 border-b border-white/5 pb-4">
          {['transaksi', 'kelola-harga', 'pengaturan'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg text-sm font-bold capitalize transition-all ${
                activeTab === tab ? 'bg-primary text-dark' : 'text-gray-500 hover:text-white'
              }`}
            >
              {tab.replace('-', ' ')}
            </button>
          ))}
        </div>

        {activeTab === 'transaksi' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold uppercase tracking-wider">Antrean Transaksi</h2>
              <button className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white">
                <RefreshCw size={18} />
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/5 text-gray-500 text-xs uppercase tracking-widest font-bold">
                    <th className="py-4 px-4">ID / Tanggal</th>
                    <th className="py-4 px-4">User / Tipe</th>
                    <th className="py-4 px-4">Paket / Harga</th>
                    <th className="py-4 px-4">Status</th>
                    <th className="py-4 px-4">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {MOCK_TRANSACTIONS.map((trx) => (
                    <tr key={trx.id} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4">
                        <div className="text-sm font-mono text-primary font-bold">{trx.id}</div>
                        <div className="text-[10px] text-gray-500">Mei 15, 12:44</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm font-bold text-white">{trx.user}</div>
                        <div className={`text-[10px] font-bold uppercase ${trx.type === 'topup' ? 'text-green-500' : 'text-blue-500'}`}>
                          {trx.type}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm font-bold text-white">{trx.product}</div>
                        <div className="text-[10px] text-gray-500 font-bold">{trx.price}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className={`inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase ${
                          trx.status === 'completed' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'
                        }`}>
                          <Clock size={10} />
                          <span>{trx.status}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => toast.success('Berhasil diproses!')}
                            className="p-1.5 rounded-md bg-green-500/10 text-green-500 hover:bg-green-500 hover:text-white transition-all"
                          >
                            <Check size={16} />
                          </button>
                          <button 
                            onClick={() => toast.error('Berhasil dibatalkan!')}
                            className="p-1.5 rounded-md bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'kelola-harga' && (
          <div className="glass-card p-10 text-center border-white/5 space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-xl font-bold">KELOLA HARGA PRODUK</h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Segera hadir: Fitur untuk mengubah harga paket coin secara real-time di database Supabase.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
