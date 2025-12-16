import { Order, OrderStatus } from '../types';

const ORDERS_KEY = 'dineflow_orders';

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const DataService = {
  getOrders: async (): Promise<Order[]> => {
    await delay(300);
    const stored = localStorage.getItem(ORDERS_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  placeOrder: async (order: Order): Promise<void> => {
    await delay(800);
    const orders = await DataService.getOrders();
    orders.push(order);
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  },

  updateOrderStatus: async (orderId: string, status: OrderStatus): Promise<void> => {
    await delay(400);
    const orders = await DataService.getOrders();
    const updated = orders.map(o => o.id === orderId ? { ...o, status } : o);
    localStorage.setItem(ORDERS_KEY, JSON.stringify(updated));
  },

  getTableActiveOrder: async (tableId: number): Promise<Order | undefined> => {
    await delay(200);
    const orders = await DataService.getOrders();
    // Find the most recent order that isn't fully completed/archived (assuming served is end of flow for now)
    return orders
      .filter(o => o.tableId === tableId && o.status !== 'served')
      .sort((a, b) => b.timestamp - a.timestamp)[0];
  },
  
  // For testing: Clear orders
  resetSystem: () => {
    localStorage.removeItem(ORDERS_KEY);
  }
};
