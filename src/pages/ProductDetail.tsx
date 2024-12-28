import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, Truck } from 'lucide-react';

export function ProductDetail() {
  const { id } = useParams();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    id,
    name: 'Gaming Laptop Pro X1',
    price: 1299.99,
    description: 'High-performance gaming laptop with the latest technology...',
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302',
      'https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf',
    ],
    variants: [
      { id: '1', name: '8GB RAM / 512GB SSD', price: 1299.99 },
      { id: '2', name: '16GB RAM / 1TB SSD', price: 1499.99 },
    ],
    specs: {
      processor: 'Intel Core i7-12700H',
      graphics: 'NVIDIA RTX 3070',
      display: '15.6" 165Hz QHD',
      storage: '512GB NVMe SSD',
      memory: '16GB DDR4',
      os: 'Windows 11 Pro',
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          <div className="mb-4">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-bold text-indigo-600">
              ${product.variants[selectedVariant].price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500">
              Free shipping on orders over $999
            </span>
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Variants */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Configuration</h3>
            <div className="grid grid-cols-1 gap-2">
              {product.variants.map((variant, index) => (
                <button
                  key={variant.id}
                  className={`p-3 border rounded-lg text-left ${
                    selectedVariant === index
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedVariant(index)}
                >
                  <div className="flex items-center justify-between">
                    <span>{variant.name}</span>
                    <span className="font-semibold">
                      ${variant.price.toFixed(2)}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Quantity</h3>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 border rounded-lg"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                className="w-20 px-3 py-1 border rounded-lg text-center"
              />
              <button
                className="px-3 py-1 border rounded-lg"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mb-8">
            <button className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-700">
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
            <button className="p-3 border rounded-lg hover:bg-gray-50">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-3 border rounded-lg hover:bg-gray-50">
              <Share2 className="h-5 w-5" />
            </button>
          </div>

          {/* Shipping */}
          <div className="border-t pt-6">
            <div className="flex items-center gap-3 text-gray-600">
              <Truck className="h-5 w-5" />
              <span>Free shipping & returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(product.specs).map(([key, value]) => (
            <div key={key} className="border-b pb-4">
              <div className="text-gray-600 capitalize">{key}</div>
              <div className="font-medium">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}