import React, { useEffect, useState } from 'react';
import { DataService } from '../services/dataService';
import { Order } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle, ShoppingBag, Utensils } from 'lucide-react';

export const KitchenDashboard: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const fetchOrders = async () => {
    const allOrders = await DataService.getOrders();
    // Filter only active orders
    const active = allOrders.filter(o => o.status !== 'served').sort((a,b) => a.timestamp - b.timestamp);
    setOrders(active);
  };

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleStatusUpdate = async (orderId: string, currentStatus: string) => {
    let nextStatus: any = 'preparing';
    if (currentStatus === 'preparing') nextStatus = 'ready';
    if (currentStatus === 'ready') return; // Waiter handles ready -> served

    await DataService.updateOrderStatus(orderId, nextStatus);
    fetchOrders();
  };

  return (
    <div className="pt-6 pb-20">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red]" />
        Kitchen Display System
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
            {orders.length === 0 && (
                <div className="col-span-full text-center py-20 bg-neutral-800/50 rounded-2xl border border-neutral-700 border-dashed">
                    <p className="text-neutral-500 text-lg">No active orders</p>
                </div>
            )}
            {orders.map((order) => (
                <motion.div 
                    key={order.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className={`p-6 rounded-xl border-2 flex flex-col h-full shadow-lg ${
                        order.status === 'ready' ? 'bg-green-900/10 border-green-500/50' : 
                        order.orderType === 'takeaway' ? 'bg-neutral-800 border-amber-500/50' :
                        'bg-neutral-800 border-neutral-700'
                    }`}
                >
                    <div className="flex justify-between items-start mb-4 pb-4 border-b border-neutral-700/50">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="bg-white text-black px-2 py-1 rounded text-lg font-bold">
                                    {order.tableId === 0 ? 'TK' : order.tableId}
                                </span>
                                {order.orderType === 'takeaway' ? (
                                    <span className="text-amber-500 font-bold text-sm flex items-center gap-1"><ShoppingBag size={14}/> Takeaway</span>
                                ) : (
                                    <span className="text-neutral-400 font-bold text-sm flex items-center gap-1"><Utensils size={14}/> Dine-in</span>
                                )}
                            </div>
                            <div className="text-xs text-neutral-500 font-mono">#{order.id}</div>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="flex items-center gap-1 text-neutral-300 font-medium">
                                <Clock size={16} className="text-amber-500" />
                                {Math.floor((Date.now() - order.timestamp) / 1000 / 60)}m
                            </div>
                            <span className="text-xs text-neutral-500">elapsed</span>
                        </div>
                    </div>

                    <div className="space-y-3 mb-6 flex-1">
                        {order.items.map((item, idx) => (
                            <div key={idx} className="flex justify-between text-white pb-2 border-b border-dashed border-neutral-700/50 last:border-0">
                                <span className="font-medium text-lg flex gap-3">
                                    <span className="text-amber-500 font-bold w-6 text-right">{item.quantity}</span> 
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto">
                        {order.status === 'pending' && (
                            <button 
                                onClick={() => handleStatusUpdate(order.id, 'pending')}
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg shadow-lg shadow-blue-900/20 transition-all active:scale-95"
                            >
                                Accept & Cook
                            </button>
                        )}
                        {order.status === 'preparing' && (
                            <button 
                                onClick={() => handleStatusUpdate(order.id, 'preparing')}
                                className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-lg shadow-lg shadow-amber-900/20 transition-all active:scale-95"
                            >
                                Mark Ready
                            </button>
                        )}
                        {order.status === 'ready' && (
                            <div className="w-full bg-green-500/10 text-green-500 font-bold py-3 rounded-lg flex items-center justify-center gap-2 border border-green-500/50">
                                <CheckCircle size={20} /> Ready for Pickup
                            </div>
                        )}
                    </div>
                </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};