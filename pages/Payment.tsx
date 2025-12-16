import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { DataService } from '../services/dataService';
import { motion } from 'framer-motion';
import { CreditCard, QrCode, Smartphone, Check, Loader2, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Order } from '../types';
import { Link } from 'react-router-dom';

export const Payment: React.FC = () => {
  const { cart, cartTotal, session, clearCart, orderType } = useStore();
  const [method, setMethod] = useState<'UPI' | 'CARD' | 'QR'>('UPI');
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const total = cartTotal * 1.1 + (orderType === 'takeaway' ? 50.0 : 0);

  const handlePay = async () => {
    setProcessing(true);
    
    // Create Mock Order
    const newOrder: Order = {
        id: `ORD-${Date.now().toString().slice(-6)}`,
        tableId: session.tableId || 0,
        items: cart,
        status: 'pending',
        total: total,
        timestamp: Date.now(),
        paymentMethod: (method === 'QR' ? 'UPI' : method === 'CARD' ? 'CARD' : 'UPI') as 'UPI' | 'CARD' | 'CASH',
        orderType: orderType
    };

    await DataService.placeOrder(newOrder);
    
    // Simulate payment gateway delay
    setTimeout(() => {
        clearCart();
        setProcessing(false);
        navigate('/tracking');
    }, 2000);
  };

  return (
    <div className="pt-4 pb-24 max-w-lg mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link to="/cart" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-white hover:bg-neutral-700">
            <ArrowLeft size={20} />
        </Link>
        <h2 className="text-2xl font-serif font-bold text-white">Payment</h2>
      </div>
      
      <div className="bg-neutral-800 rounded-2xl p-8 mb-8 text-center border border-neutral-700 shadow-xl relative overflow-hidden">
         <div className="absolute top-0 right-0 p-3 opacity-10">
            <ShieldCheck size={100} />
         </div>
         <span className="text-neutral-400 text-sm uppercase tracking-widest font-bold">Total Amount</span>
         <div className="text-5xl font-bold text-amber-500 mt-2 mb-2">₹{total.toFixed(2)}</div>
         <div className="inline-block px-3 py-1 bg-neutral-700 rounded text-xs text-neutral-300 font-medium">
             {orderType === 'takeaway' ? 'Takeaway Order' : 'Dine-in Order'}
         </div>
      </div>

      <h3 className="text-lg font-bold text-white mb-4 pl-1">Choose Payment Method</h3>
      <div className="space-y-4 mb-10">
        <label className={`block p-4 rounded-xl border-2 cursor-pointer transition-all ${method === 'UPI' ? 'border-amber-500 bg-amber-500/10' : 'border-neutral-700 bg-neutral-800 hover:border-neutral-600'}`}>
            <div className="flex items-center gap-4">
                <input type="radio" name="pay" className="hidden" onChange={() => setMethod('UPI')} checked={method === 'UPI'} />
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black">
                    <Smartphone size={24} />
                </div>
                <div className="flex-1">
                    <div className="font-bold text-white">UPI Apps</div>
                    <div className="text-xs text-neutral-400">Google Pay, PhonePe, Paytm</div>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${method === 'UPI' ? 'border-amber-500 bg-amber-500' : 'border-neutral-600'}`}>
                    {method === 'UPI' && <Check size={14} className="text-black" />}
                </div>
            </div>
        </label>

        <label className={`block p-4 rounded-xl border-2 cursor-pointer transition-all ${method === 'CARD' ? 'border-amber-500 bg-amber-500/10' : 'border-neutral-700 bg-neutral-800 hover:border-neutral-600'}`}>
            <div className="flex items-center gap-4">
                <input type="radio" name="pay" className="hidden" onChange={() => setMethod('CARD')} checked={method === 'CARD'} />
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black">
                    <CreditCard size={24} />
                </div>
                <div className="flex-1">
                    <div className="font-bold text-white">Credit / Debit Card</div>
                    <div className="text-xs text-neutral-400">Visa, Mastercard, Amex</div>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${method === 'CARD' ? 'border-amber-500 bg-amber-500' : 'border-neutral-600'}`}>
                    {method === 'CARD' && <Check size={14} className="text-black" />}
                </div>
            </div>
        </label>
        
        <label className={`block p-4 rounded-xl border-2 cursor-pointer transition-all ${method === 'QR' ? 'border-amber-500 bg-amber-500/10' : 'border-neutral-700 bg-neutral-800 hover:border-neutral-600'}`}>
            <div className="flex items-center gap-4">
                <input type="radio" name="pay" className="hidden" onChange={() => setMethod('QR')} checked={method === 'QR'} />
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black">
                    <QrCode size={24} />
                </div>
                <div className="flex-1">
                    <div className="font-bold text-white">Scan Payment QR</div>
                    <div className="text-xs text-neutral-400">Show QR code to waiter</div>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${method === 'QR' ? 'border-amber-500 bg-amber-500' : 'border-neutral-600'}`}>
                    {method === 'QR' && <Check size={14} className="text-black" />}
                </div>
            </div>
        </label>
      </div>

      <button 
        onClick={handlePay}
        disabled={processing}
        className="w-full bg-green-500 hover:bg-green-400 disabled:bg-neutral-700 disabled:text-neutral-500 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-lg shadow-lg shadow-green-500/20 transition-all active:scale-95"
      >
        {processing ? (
            <>
                <Loader2 className="animate-spin" /> Processing Payment...
            </>
        ) : (
            `Pay ₹${total.toFixed(2)}`
        )}
      </button>
      <p className="text-center text-neutral-500 text-xs mt-4 flex items-center justify-center gap-1">
          <ShieldCheck size={12} /> Secure encrypted transaction
      </p>
    </div>
  );
};