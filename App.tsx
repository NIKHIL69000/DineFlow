import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext';
import { Layout } from './components/Layout';
import { Landing } from './pages/Landing';
import { Menu } from './pages/Menu';
import { Cart } from './pages/Cart';
import { Payment } from './pages/Payment';
import { OrderTracking } from './pages/OrderTracking';
import { KitchenDashboard } from './pages/KitchenDashboard';
import { WaiterDashboard } from './pages/WaiterDashboard';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            
            {/* Customer Routes */}
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/tracking" element={<OrderTracking />} />
            
            {/* Staff Routes */}
            <Route path="/kitchen" element={<KitchenDashboard />} />
            <Route path="/waiter" element={<WaiterDashboard />} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </HashRouter>
    </StoreProvider>
  );
};

export default App;
