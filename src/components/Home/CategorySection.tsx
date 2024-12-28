import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Laptop, Monitor, Cpu, HardDrive } from 'lucide-react';

export function CategorySection() {
  const navigate = useNavigate();
  
  const categories = [
    {
      id: 'laptops',
      name: 'Laptops',
      icon: <Laptop className="h-8 w-8" />,
      description: 'High-performance laptops for work and gaming'
    },
    {
      id: 'monitors',
      name: 'Monitors',
      icon: <Monitor className="h-8 w-8" />,
      description: 'Professional and gaming monitors'
    },
    {
      id: 'desktops',
      name: 'Desktop PCs',
      icon: <Cpu className="h-8 w-8" />,
      description: 'Custom-built desktop computers'
    },
    {
      id: 'components',
      name: 'Components',
      icon: <HardDrive className="h-8 w-8" />,
      description: 'PC parts and hardware components'
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => navigate(`/products?category=${category.id}`)}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-indigo-100 rounded-full mb-4">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}