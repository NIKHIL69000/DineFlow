import React from 'react';
import { useStore } from '../context/StoreContext';
import { ShoppingBag, UtensilsCrossed, User, LayoutDashboard, Coffee, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { session, cart } = useStore();
  const location = useLocation();

  // Hide nav on landing page
  if (location.pathname === '/') {
    return <div className="min-h-screen bg-neutral-900 text-white overflow-hidden">{children}</div>;
  }

  const isCustomer = session.role === 'customer';

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 flex flex-col items-center">
      <div className="w-full max-w-7xl relative min-h-screen flex flex-col shadow-2xl bg-[#121212]">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800 p-4">
           <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
            <Link to="/menu" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                <UtensilsCrossed size={20} className="text-black" />
                </div>
                <h1 className="text-2xl font-bold tracking-tight font-serif">DineFlow</h1>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
                {isCustomer ? (
                    <>
                        <Link to="/menu" className={`text-sm font-medium hover:text-amber-500 ${location.pathname === '/menu' ? 'text-amber-500' : 'text-neutral-300'}`}>Menu</Link>
                        <Link to="/tracking" className={`text-sm font-medium hover:text-amber-500 ${location.pathname === '/tracking' ? 'text-amber-500' : 'text-neutral-300'}`}>Your Orders</Link>
                        <Link to="/cart" className="relative p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors">
                            <ShoppingBag size={20} />
                            {cart.length > 0 && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                                {cart.reduce((a, b) => a + b.quantity, 0)}
                            </span>
                            )}
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/kitchen" className={`text-sm font-medium hover:text-amber-500 ${location.pathname === '/kitchen' ? 'text-amber-500' : 'text-neutral-300'}`}>Kitchen</Link>
                        <Link to="/waiter" className={`text-sm font-medium hover:text-amber-500 ${location.pathname === '/waiter' ? 'text-amber-500' : 'text-neutral-300'}`}>Waiter</Link>
                        <Link to="/" className="text-sm font-medium text-red-400 hover:text-red-300 flex items-center gap-1"><LogOut size={16} /> Exit</Link>
                    </>
                )}
            </div>

            {/* Mobile Table Badge */}
            {isCustomer && session.tableId && (
                <div className="md:hidden">
                    <span className="text-xs font-medium bg-neutral-800 px-3 py-1 rounded-full text-amber-500 border border-neutral-700">
                    Table {session.tableId}
                    </span>
                </div>
            )}
            
            {/* Desktop Table Badge */}
            {isCustomer && session.tableId && (
                <div className="hidden md:block">
                    <span className="text-sm font-bold bg-neutral-800 px-4 py-2 rounded-lg text-amber-500 border border-neutral-700">
                    Table {session.tableId}
                    </span>
                </div>
            )}
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto px-4 pt-6 pb-24 md:pb-8 max-w-7xl mx-auto w-full">
          {children}
        </main>

        {/* Mobile Bottom Nav */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-neutral-800 py-3 px-6 flex justify-between items-center z-50">
          {isCustomer ? (
            <>
              <NavLink to="/menu" icon={<Coffee size={24} />} label="Menu" active={location.pathname === '/menu'} />
              <div className="relative">
                <Link to="/cart">
                  <div className={`p-3 rounded-full transition-all ${location.pathname === '/cart' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30' : 'bg-neutral-800 text-neutral-400'}`}>
                    <ShoppingBag size={24} />
                    {cart.length > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-neutral-900">
                        {cart.reduce((a, b) => a + b.quantity, 0)}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
              <NavLink to="/tracking" icon={<LayoutDashboard size={24} />} label="Orders" active={location.pathname === '/tracking'} />
            </>
          ) : (
            // Staff Nav
            <>
              <div className="w-full flex justify-between px-4">
                <NavLink to="/kitchen" icon={<UtensilsCrossed size={24} />} label="Kitchen" active={location.pathname === '/kitchen'} />
                <NavLink to="/waiter" icon={<User size={24} />} label="Waiter" active={location.pathname === '/waiter'} />
                <NavLink to="/" icon={<LogOut size={24} />} label="Exit" active={false} />
              </div>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

const NavLink: React.FC<{ to: string; icon: React.ReactNode; label: string; active: boolean }> = ({ to, icon, label, active }) => (
  <Link to={to} className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-amber-500' : 'text-neutral-500 hover:text-neutral-300'}`}>
    {icon}
    <span className="text-[10px] font-medium">{label}</span>
  </Link>
);