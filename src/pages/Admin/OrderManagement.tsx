import React from 'react';
import { Package, Truck, CheckCircle } from 'lucide-react';

export function OrderManagement() {
  // Mock orders data
  const orders = [
    {
      id: 'ORD-001',
      customer: 'John Doe',
      date: '2024-03-15',
      total: 1499.99,
      status: 'processing',
      items: [
        {
          name: 'Gaming Laptop Pro X1',
          quantity: 1,
          price: 1499.99,
        },
      ],
    },
    // Add more orders...
  ];

  const getStatusColor = (status: string) => {
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Package className="h-5 w-5" />;
      case 'shipped':
        return <Truck className="h-5 w-5" />;
      case 'delivered':
        return <CheckCircle className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Order Management</h1>

      {/* Order List */}
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">{order.id}</h3>
                <p className="text-sm text-gray-600">
                  {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
              <div className={`px-3 py-1 rounded-full flex items-center gap-2 ${getStatusColor(order.status)}`}>
                {getStatusIcon(order.status)}
                <span className="capitalize">{order.status}</span>
              </div>
            </div>

            <div className="border-t border-b py-4 my-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Customer</span>
                <span>{order.customer}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-2">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <span>${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                Update Status
              </button>
              <button className="flex-1 border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}