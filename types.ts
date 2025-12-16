export type Category = 'starters' | 'main' | 'drinks' | 'desserts';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  isVeg: boolean;
  ingredients: string[];
  calories?: number;
}

export interface CartItem extends MenuItem {
  cartId: string;
  quantity: number;
  specialInstructions?: string;
}

export type OrderStatus = 'pending' | 'preparing' | 'ready' | 'served' | 'paid';

export interface Order {
  id: string;
  tableId: number;
  items: CartItem[];
  status: OrderStatus;
  total: number;
  timestamp: number;
  customerNote?: string;
  paymentMethod: 'UPI' | 'CARD' | 'CASH';
  orderType: 'dine-in' | 'takeaway';
}

export interface UserSession {
  role: 'customer' | 'kitchen' | 'waiter' | 'admin';
  tableId?: number;
}