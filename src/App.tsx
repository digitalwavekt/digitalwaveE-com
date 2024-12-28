import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ProductList } from './pages/ProductList';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { ContactUs } from './pages/ContactUs';
import { Dashboard } from './pages/Admin/Dashboard';
import { ProductManagement } from './pages/Admin/ProductManagement';
import { OrderManagement } from './pages/Admin/OrderManagement';
import { AdminManagement } from './pages/Admin/AdminManagement';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/products" element={<ProductManagement />} />
          <Route path="/admin/orders" element={<OrderManagement />} />
          <Route path="/admin/admins" element={<AdminManagement />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;  // Default export added
