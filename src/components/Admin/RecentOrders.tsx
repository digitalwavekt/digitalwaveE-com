import React from 'react';
import { Package, Truck, CheckCircle } from 'lucide-react';

interface Order {
  id: string;
  customer: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  date: string;
}

export function RecentOrders() {
  const orders: Order[] = [
    {
      id: 'ORD-001',
      customer: 'John Doe',
      total: 1499.99,
      status: 'processing',
      date: '2024-03-15',
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      total: 899.99,
      status: 'shipped',
      date: '2024-03-14',
    },
  ];

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'processing':
        return <Package className="h-5 w-5" />;
      case 'shipped':
        return <Truck className="h-5 w-5" />;
      case 'delivered':
        return <CheckCircle className="h-5 w-5" />;
      default:
        return <Package className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Recent Orders</h2>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <div className="font-medium">{order.customer}</div>
                <div className="text-sm text-gray-600">Order {order.id}</div>
              </div>
              <div className="text-right">
                <div className="font-medium">₹{order.total.toFixed(2)}</div>
                <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                  {getStatusIcon(order.status)}
                  <span className="capitalize">{order.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}