import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { CartItem, Order, UserSession } from '../types';
import { DataService } from '../services/dataService';

interface StoreContextType {
  session: UserSession;
  setSession: (session: UserSession) => void;
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (cartId: string) => void;
  updateQuantity: (cartId: string, delta: number) => void;
  clearCart: () => void;
  activeOrder: Order | null;
  refreshActiveOrder: () => Promise<void>;
  cartTotal: number;
  orderType: 'dine-in' | 'takeaway';
  setOrderType: (type: 'dine-in' | 'takeaway') => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<UserSession>({ role: 'customer' });
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeOrder, setActiveOrder] = useState<Order | null>(null);
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('dine-in');

  // Calculate total
  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const addToCart = (item: CartItem) => {
    setCart(prev => [...prev, item]);
  };

  const removeFromCart = (cartId: string) => {
    setCart(prev => prev.filter(i => i.cartId !== cartId));
  };

  const updateQuantity = (cartId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.cartId === cartId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const clearCart = () => setCart([]);

  const refreshActiveOrder = useCallback(async () => {
    if (session.role === 'customer' && session.tableId) {
      const order = await DataService.getTableActiveOrder(session.tableId);
      setActiveOrder(order || null);
    }
  }, [session.role, session.tableId]);

  // Poll for status updates if there is an active order
  useEffect(() => {
    let interval: any;
    if (activeOrder && activeOrder.status !== 'served') {
      interval = setInterval(refreshActiveOrder, 5000);
    }
    return () => clearInterval(interval);
  }, [activeOrder, refreshActiveOrder]);

  return (
    <StoreContext.Provider value={{
      session,
      setSession,
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      activeOrder,
      refreshActiveOrder,
      cartTotal,
      orderType,
      setOrderType
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within StoreProvider");
  return context;
};