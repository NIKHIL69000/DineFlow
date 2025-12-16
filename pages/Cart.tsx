import React from 'react';
import { useStore } from '../context/StoreContext';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, orderType, setOrderType } = useStore();

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
  };

  if (cart.length === 0) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center">
        <div className="w-24 h-24 bg-neutral-800 rounded-full flex items-center justify-center mb-6">
            <ShoppingBag className="text-neutral-600" size={40} />
        </div>
        <h2 className="text-2xl font-bold text-white mb-3">Your cart is empty</h2>
        <p className="text-neutral-500 mb-8 max-w-xs text-center">Hungry? Explore our menu and find something delicious!</p>
        <Link to="/menu" className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-3 rounded-xl font-bold transition-colors">Browse Menu</Link>
      </div>
    );
  }

  return (
    <div className="pb-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-white mb-6">Your Order</h2>
      
      {/* Order Type Toggle */}
      <div className="bg-neutral-800 p-1.5 rounded-xl flex mb-8 relative">
          <motion.div 
            layout
            className="absolute top-1.5 bottom-1.5 rounded-lg bg-neutral-700 shadow-md"
            initial={false}
            animate={{ 
                x: orderType === 'dine-in' ? 0 : '100%',
                width: '50%' 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          <button 
            onClick={() => setOrderType('dine-in')}
            className={`flex-1 py-3 text-sm font-bold rounded-lg relative z-10 transition-colors ${orderType === 'dine-in' ? 'text-white' : 'text-neutral-400 hover:text-white'}`}
          >
            Dine In
          </button>
          <button 
             onClick={() => setOrderType('takeaway')}
             className={`flex-1 py-3 text-sm font-bold rounded-lg relative z-10 transition-colors ${orderType === 'takeaway' ? 'text-white' : 'text-neutral-400 hover:text-white'}`}
          >
            Takeaway
          </button>
      </div>

      <div className="space-y-4 mb-8">
        {cart.map((item) => (
          <motion.div 
            layout
            key={item.cartId}
            className="bg-neutral-800 p-4 rounded-2xl flex gap-4 border border-neutral-700/50"
          >
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-24 h-24 object-cover rounded-xl bg-neutral-700" 
              onError={handleImageError}
            />
            
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-white text-base">{item.name}</h3>
                        <button onClick={() => removeFromCart(item.cartId)} className="text-neutral-500 hover:text-red-500 p-1 rounded-md hover:bg-neutral-700 transition-colors">
                            <Trash2 size={16} />
                        </button>
                    </div>
                    <p className="text-amber-500 font-bold text-sm">₹{item.price}</p>
                </div>
                
                <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-3 bg-neutral-900 rounded-lg p-1">
                        <button 
                            onClick={() => updateQuantity(item.cartId, -1)}
                            className="w-8 h-8 rounded-md hover:bg-neutral-800 flex items-center justify-center text-white transition-colors"
                        >
                            <Minus size={14} />
                        </button>
                        <span className="font-bold text-white w-4 text-center text-sm">{item.quantity}</span>
                        <button 
                            onClick={() => updateQuantity(item.cartId, 1)}
                            className="w-8 h-8 rounded-md bg-white text-black hover:bg-neutral-200 flex items-center justify-center transition-colors"
                        >
                            <Plus size={14} />
                        </button>
                    </div>
                    <div className="flex-1 text-right text-sm font-bold text-neutral-300">
                        ₹{(item.price * item.quantity).toFixed(2)}
                    </div>
                </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-neutral-800 p-6 rounded-2xl mb-24 border border-neutral-700/50 shadow-xl">
         <div className="flex justify-between mb-3 text-neutral-400 text-sm">
            <span>Subtotal</span>
            <span>₹{cartTotal.toFixed(2)}</span>
         </div>
         <div className="flex justify-between mb-4 text-neutral-400 text-sm">
            <span>Taxes (10%)</span>
            <span>₹{(cartTotal * 0.1).toFixed(2)}</span>
         </div>
         {orderType === 'takeaway' && (
             <div className="flex justify-between mb-4 text-amber-500 text-sm">
                <span>Packaging Fee</span>
                <span>₹50.00</span>
             </div>
         )}
         
         <div className="border-t border-neutral-700 pt-4 flex justify-between items-center mb-6">
            <span className="text-lg font-bold text-white">Total</span>
            <span className="text-3xl font-bold text-amber-500">
                ₹{(cartTotal * 1.1 + (orderType === 'takeaway' ? 50 : 0)).toFixed(2)}
            </span>
         </div>
         
         <Link to="/payment">
             <button className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-lg shadow-lg shadow-amber-500/20 transition-all active:scale-95">
                Proceed to Pay <ArrowRight size={20} />
             </button>
         </Link>
      </div>
    </div>
  );
};