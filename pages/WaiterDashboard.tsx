import React, { useEffect, useState } from 'react';
import { DataService } from '../services/dataService';
import { Order } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { BellRing, Check } from 'lucide-react';

export const WaiterDashboard: React.FC = () => {
  const [readyOrders, setReadyOrders] = useState<Order[]>([]);

  const fetchReadyOrders = async () => {
    const allOrders = await DataService.getOrders();
    // Waiter only cares about Ready orders
    const ready = allOrders.filter(o => o.status === 'ready');
    setReadyOrders(ready);
  };

  useEffect(() => {
    fetchReadyOrders();
    const interval = setInterval(fetchReadyOrders, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleServe = async (orderId: string) => {
    await DataService.updateOrderStatus(orderId, 'served');
    fetchReadyOrders();
  };

  return (
    <div className="pt-6 pb-20">
      <h2 className="text-2xl font-bold text-white mb-6">Waiter View</h2>

      <div className="grid gap-4">
        {readyOrders.length === 0 && (
             <div className="text-center py-20 text-neutral-500">
                 <p>No orders ready to serve.</p>
             </div>
        )}
        
        <AnimatePresence>
            {readyOrders.map((order) => (
                <motion.div 
                    key={order.id}
                    layout
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    className="p-6 rounded-xl bg-neutral-800 border-l-4 border-l-green-500 shadow-lg"
                >
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-3">
                             <div className="bg-neutral-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white">
                                 {order.tableId}
                             </div>
                             <div>
                                 <div className="text-xs text-neutral-400">Table Number</div>
                                 <div className="text-green-500 font-bold flex items-center gap-1"><BellRing size={14} /> Ready</div>
                             </div>
                        </div>
                        <div className="text-right">
                             <div className="text-xl font-bold text-white">Order #{order.id.slice(-4)}</div>
                        </div>
                    </div>

                    <div className="bg-neutral-900/50 p-3 rounded-lg mb-4 text-sm text-neutral-300">
                        {order.items.map(i => i.name).join(', ')}
                    </div>

                    <button 
                        onClick={() => handleServe(order.id)}
                        className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2"
                    >
                        <Check size={20} /> Mark Served
                    </button>
                </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
