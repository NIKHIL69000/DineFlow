import React, { useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, ChefHat, Bell, Clock, Utensils } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const OrderTracking: React.FC = () => {
  const { activeOrder, refreshActiveOrder } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    refreshActiveOrder();
  }, [refreshActiveOrder]);

  if (!activeOrder) {
     return (
        <div className="h-full flex flex-col items-center justify-center pt-20">
            <Clock size={40} className="text-neutral-600 mb-4" />
            <p className="text-neutral-400">No active orders right now.</p>
            <button onClick={() => navigate('/menu')} className="mt-4 text-amber-500 font-bold">Order Something</button>
        </div>
     )
  }

  const steps = [
    { id: 'pending', label: 'Order Sent', icon: CheckCircle2 },
    { id: 'preparing', label: 'In Kitchen', icon: ChefHat },
    { id: 'ready', label: 'Ready to Serve', icon: Bell },
    { id: 'served', label: 'Served', icon: Utensils }
  ];

  const getCurrentStepIndex = () => {
    const status = activeOrder.status;
    return steps.findIndex(s => s.id === status);
  };

  const currentStep = getCurrentStepIndex();

  return (
    <div className="pt-8 pb-20">
      <div className="text-center mb-8">
        <span className="bg-neutral-800 text-amber-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-neutral-700">
             Order #{activeOrder.id}
        </span>
        <h2 className="text-3xl font-serif font-bold text-white mt-4 mb-2">
            {activeOrder.status === 'served' ? 'Bon Appétit!' : 'Preparing your meal'}
        </h2>
        <p className="text-neutral-400 text-sm">Estimated wait time: 15 mins</p>
      </div>

      <div className="bg-neutral-800 rounded-2xl p-8 mb-8 border border-neutral-700 relative overflow-hidden">
         <div className="relative z-10 space-y-8">
             {steps.map((step, index) => {
                 const isCompleted = index <= currentStep;
                 const isCurrent = index === currentStep;
                 const Icon = step.icon;

                 return (
                    <div key={step.id} className="flex items-center gap-4 relative">
                        {/* Line connector */}
                        {index < steps.length - 1 && (
                            <div className={`absolute left-5 top-10 w-0.5 h-8 ${index < currentStep ? 'bg-amber-500' : 'bg-neutral-700'}`} />
                        )}
                        
                        <motion.div 
                            initial={false}
                            animate={{ 
                                scale: isCurrent ? 1.2 : 1,
                                backgroundColor: isCompleted ? '#f59e0b' : '#262626',
                                borderColor: isCompleted ? '#f59e0b' : '#404040'
                            }}
                            className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors"
                        >
                            <Icon size={18} className={isCompleted ? 'text-black' : 'text-neutral-500'} />
                        </motion.div>
                        
                        <div className={isCompleted ? 'opacity-100' : 'opacity-40'}>
                            <h4 className={`font-bold ${isCurrent ? 'text-amber-500' : 'text-white'}`}>{step.label}</h4>
                        </div>
                    </div>
                 )
             })}
         </div>
         
         {/* Background Pulse Effect */}
         {activeOrder.status === 'preparing' && (
             <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
         )}
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
         <h3 className="text-neutral-500 text-xs font-bold uppercase mb-4">Order Summary</h3>
         {activeOrder.items.map(item => (
             <div key={item.cartId} className="flex justify-between text-sm mb-2 text-neutral-300">
                 <span>{item.quantity}x {item.name}</span>
                 <span>₹{(item.price * item.quantity).toFixed(2)}</span>
             </div>
         ))}
         <div className="border-t border-neutral-800 mt-4 pt-4 flex justify-between font-bold text-white">
             <span>Total Paid</span>
             <span>₹{(activeOrder.total).toFixed(2)}</span>
         </div>
      </div>
    </div>
  );
};