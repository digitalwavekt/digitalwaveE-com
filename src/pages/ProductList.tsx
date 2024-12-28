import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, Search } from 'lucide-react';

interface ProductListProps {
  category?: string;
}

export function ProductList({ category }: ProductListProps) {
  const [filters, setFilters] = useState({
    priceRange: [0, 10000],
    categories: category ? [category] : [],
    brands: [],
    inStock: false
  });
  
  const navigate = useNavigate();

  // Mock products for demonstration
  const products = [
    {
      id: '1',
      name: 'Gaming Laptop Pro',
      price: 1299.99,
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302',
      category: 'laptop',
      brand: 'TechBrand'
    },
    // Add more mock products...
  ];

  return (
    <div className="flex gap-6">
      {/* Filters Sidebar */}
      <div className="w-64 flex-shrink-0">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Filters</h2>
            <Filter className="h-5 w-5 text-gray-500" />
          </div>
          
          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Price Range</h3>
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="w-24 px-2 py-1 border rounded"
                value={filters.priceRange[0]}
                onChange={(e) => setFilters({
                  ...filters,
                  priceRange: [Number(e.target.value), filters.priceRange[1]]
                })}
              />
              <span>-</span>
              <input
                type="number"
                className="w-24 px-2 py-1 border rounded"
                value={filters.priceRange[1]}
                onChange={(e) => setFilters({
                  ...filters,
                  priceRange: [filters.priceRange[0], Number(e.target.value)]
                })}
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Categories</h3>
            {['laptop', 'monitor', 'desktop', 'component'].map((cat) => (
              <label key={cat} className="flex items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(cat)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFilters({
                        ...filters,
                        categories: [...filters.categories, cat]
                      });
                    } else {
                      setFilters({
                        ...filters,
                        categories: filters.categories.filter(c => c !== cat)
                      });
                    }
                  }}
                />
                <span className="capitalize">{cat}</span>
              </label>
            ))}
          </div>

          {/* In Stock Only */}
          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.inStock}
                onChange={(e) => setFilters({
                  ...filters,
                  inStock: e.target.checked
                })}
              />
              <span>In Stock Only</span>
            </label>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex-1">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
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
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500 capitalize">
                    {product.brand}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}