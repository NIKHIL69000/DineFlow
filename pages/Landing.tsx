import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { QrCode, ArrowRight, Utensils } from 'lucide-react';

export const Landing: React.FC = () => {
  const [tableInput, setTableInput] = useState('1');
  const navigate = useNavigate();
  const { setSession } = useStore();

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    setSession({ role: 'customer', tableId: parseInt(tableInput) });
    navigate('/menu');
  };

  const handleStaffLogin = () => {
    setSession({ role: 'kitchen' }); // Default to kitchen, can switch in layout
    navigate('/kitchen');
  };

  return (
    <div className="h-screen flex flex-col justify-between bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-20 h-20 bg-amber-500 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20">
            <Utensils size={40} className="text-black" />
          </div>
          <h1 className="text-4xl font-bold mb-2 text-white">DineFlow</h1>
          <p className="text-neutral-300 text-lg">Experience modern dining.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full max-w-xs bg-neutral-900/80 p-6 rounded-3xl border border-neutral-800 backdrop-blur-xl"
        >
          <div className="flex justify-center mb-6">
            <QrCode size={64} className="text-amber-500 animate-pulse" />
          </div>
          <h2 className="text-xl font-semibold mb-4 text-white">Scan QR to Order</h2>
          
          <form onSubmit={handleStart} className="space-y-4">
             <div className="bg-neutral-800 rounded-xl p-2 flex items-center border border-neutral-700">
                <span className="text-neutral-400 pl-3 text-sm">Table #</span>
                <input 
                  type="number" 
                  value={tableInput}
                  onChange={(e) => setTableInput(e.target.value)}
                  className="bg-transparent w-full p-2 text-white focus:outline-none font-bold text-lg"
                  min="1"
                  max="50"
                />
             </div>
             
             <button 
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95"
             >
                Start Ordering <ArrowRight size={20} />
             </button>
          </form>
        </motion.div>
      </div>

      <div className="relative z-10 p-6 text-center">
        <button onClick={handleStaffLogin} className="text-neutral-500 text-sm hover:text-neutral-300 underline">
          Staff Login
        </button>
      </div>
    </div>
  );
};
