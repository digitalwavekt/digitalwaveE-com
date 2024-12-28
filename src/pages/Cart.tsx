import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';

export function Cart() {
  const navigate = useNavigate();

  // Mock cart data
  const cartItems = [
    {
      id: '1',
      name: 'Gaming Laptop Pro X1',
      variant: '16GB RAM / 1TB SSD',
      price: 1499.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302',
    },
    // Add more items...
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 999 ? 0 : 29.99;
  const total = subtotal + shipping;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow flex gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.variant}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span>{item.quantity}</span>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button className="text-red-500 hover:text-red-600">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="border-t pt-3 font-semibold flex justify-between">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={() => navigate('/checkout')}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
          >
            Proceed to Checkout
          </button>

          <div className="mt-6 text-sm text-gray-600">
            <p className="mb-2">We accept:</p>
            <div className="flex gap-2">
              <span className="px-2 py-1 border rounded">Visa</span>
              <span className="px-2 py-1 border rounded">Mastercard</span>
              <span className="px-2 py-1 border rounded">PayU</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}