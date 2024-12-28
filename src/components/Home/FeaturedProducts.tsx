import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

export function FeaturedProducts() {
  const navigate = useNavigate();
  
  const featuredProducts = [
    {
      id: '1',
      name: 'Gaming Laptop Pro X1',
      price: 89999,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302',
      category: 'laptop'
    },
    {
      id: '2',
      name: '4K Ultra Gaming Monitor',
      price: 34999,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf',
      category: 'monitor'
    },
    {
      id: '3',
      name: 'Custom Gaming PC',
      price: 129999,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c',
      category: 'desktop'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-indigo-600">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}