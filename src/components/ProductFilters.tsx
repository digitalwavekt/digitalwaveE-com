import React from 'react';
import { Filter } from 'lucide-react';

interface ProductFiltersProps {
  filters: {
    priceRange: [number, number];
    categories: string[];
    brands: string[];
    inStock: boolean;
  };
  onFilterChange: (filters: any) => void;
}

export function ProductFilters({ filters, onFilterChange }: ProductFiltersProps) {
  const brands = ['Dell', 'HP', 'Lenovo', 'Asus', 'Acer'];
  
  return (
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
            onChange={(e) => onFilterChange({
              ...filters,
              priceRange: [Number(e.target.value), filters.priceRange[1]]
            })}
          />
          <span>-</span>
          <input
            type="number"
            className="w-24 px-2 py-1 border rounded"
            value={filters.priceRange[1]}
            onChange={(e) => onFilterChange({
              ...filters,
              priceRange: [filters.priceRange[0], Number(e.target.value)]
            })}
          />
        </div>
      </div>

      {/* Brands */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Brands</h3>
        {brands.map((brand) => (
          <label key={brand} className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              checked={filters.brands.includes(brand)}
              onChange={(e) => {
                const newBrands = e.target.checked
                  ? [...filters.brands, brand]
                  : filters.brands.filter(b => b !== brand);
                onFilterChange({ ...filters, brands: newBrands });
              }}
            />
            <span>{brand}</span>
          </label>
        ))}
      </div>

      {/* Stock Status */}
      <div>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={(e) => onFilterChange({
              ...filters,
              inStock: e.target.checked
            })}
          />
          <span>In Stock Only</span>
        </label>
      </div>
    </div>
  );
}