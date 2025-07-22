import { ProductGrid } from "@/components/shop/ProductGrid";
import { ProductFilters } from "@/components/shop/ProductFilters";
import { products } from "@/lib/data";
import { useState, useMemo } from "react";
import { Product } from "@/types";

export function Shop() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  const [sortOption, setSortOption] = useState<'recommended' | 'newest' | 'price-asc' | 'price-desc'>('recommended');
  
  const handleFilterChange = (category: string, option: string, checked: boolean) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      if (!newFilters[category]) newFilters[category] = [];
      
      if (checked) {
        newFilters[category] = [...newFilters[category], option];
      } else {
        newFilters[category] = newFilters[category].filter(item => item !== option);
      }
      
      // Remove empty categories
      if (newFilters[category].length === 0) {
        delete newFilters[category];
      }
      
      return newFilters;
    });
  };
  
  const handleSortChange = (option: 'recommended' | 'newest' | 'price-asc' | 'price-desc') => {
    setSortOption(option);
  };
  
  // Apply filters and sorting
  useMemo(() => {
    let result = [...products];
    
    // Apply filters
    if (Object.keys(activeFilters).length > 0) {
      // Filter by category
      if (activeFilters.category?.length) {
        result = result.filter(product => 
          product.categories.some(cat => activeFilters.category.includes(cat))
        );
      }
      
      // Filter by price
      if (activeFilters.price?.length) {
        result = result.filter(product => {
          const price = product.salePrice || product.price;
          return activeFilters.price.some(range => {
            switch (range) {
              case 'under-50':
                return price < 50;
              case '50-100':
                return price >= 50 && price < 100;
              case '100-200':
                return price >= 100 && price < 200;
              case 'over-200':
                return price >= 200;
              default:
                return true;
            }
          });
        });
      }
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'price-asc':
        result.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
        break;
      case 'price-desc':
        result.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
        break;
      default:
        // 'recommended' - no specific sorting, use default
        break;
    }
    
    setFilteredProducts(result);
  }, [activeFilters, sortOption]);
  
  return (
    <div className="container py-8 space-y-6">
      <h1 className="text-4xl font-bold">商品目錄</h1>
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr] gap-6">
        <ProductFilters 
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
          activeFilters={activeFilters}
        />
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}