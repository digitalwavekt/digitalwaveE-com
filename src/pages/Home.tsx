import React from 'react';
import { CategorySection } from '../components/Home/CategorySection';
import { FeaturedProducts } from '../components/Home/FeaturedProducts';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Digital Wave IT Solutions
            </h1>
            <p className="text-xl mb-8">
              Your one-stop shop for premium computer hardware and accessories
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      <CategorySection />
      <FeaturedProducts />
    </div>
  );
}