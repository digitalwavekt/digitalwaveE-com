export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  address?: Address[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'laptop' | 'monitor' | 'desktop' | 'component';
  price: number;
  images: string[];
  variants: ProductVariant[];
  specs: Record<string, string>;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  specs: Record<string, string>;
  stock: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  status: OrderStatus;
  total: number;
  address: Address;
  paymentId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  productId: string;
  variantId?: string;
  quantity: number;
  price: number;
}

export interface Address {
  id: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

export type OrderStatus = 
  | 'pending'
  | 'payment_received'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'refund_requested'
  | 'refund_processing'
  | 'refunded';