import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, User, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <h1 
              onClick={() => navigate('/')} 
              className="text-2xl font-bold text-indigo-600 cursor-pointer"
            >
              Digital Wave
            </h1>
            <div className="ml-10 space-x-4">
              <button onClick={() => navigate('/products')} className="text-gray-700 hover:text-indigo-600">
                Products
              </button>
              <button onClick={() => navigate('/offers')} className="text-gray-700 hover:text-indigo-600">
                Offers
              </button>
              <button onClick={() => navigate('/contact')} className="text-gray-700 hover:text-indigo-600">
                Contact
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate('/cart')}
              className="p-2 text-gray-700 hover:text-indigo-600"
            >
              <ShoppingCart className="h-6 w-6" />
            </button>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => navigate('/profile')}
                  className="p-2 text-gray-700 hover:text-indigo-600"
                >
                  <User className="h-6 w-6" />
                </button>
                <button 
                  onClick={logout}
                  className="p-2 text-gray-700 hover:text-indigo-600"
                >
                  <LogOut className="h-6 w-6" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Login
              </button>
            )}
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-gray-800 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-300">
                Your trusted source for premium computer hardware and accessories.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => navigate('/terms')} className="text-gray-300 hover:text-white">
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/privacy')} className="text-gray-300 hover:text-white">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/shipping')} className="text-gray-300 hover:text-white">
                    Shipping Information
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Email: support@techhub.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Tech Street, Digital City</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}