import { useState } from "react";
import { Filter, ChevronDown, ChevronUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";

// Filter types
type SortOption = 'recommended' | 'newest' | 'price-asc' | 'price-desc';

type FilterCategory = {
  id: string;
  name: string;
  options: FilterOption[];
};

type FilterOption = {
  id: string;
  name: string;
};

interface ProductFiltersProps {
  onSortChange: (option: SortOption) => void;
  onFilterChange: (category: string, option: string, checked: boolean) => void;
  activeFilters?: Record<string, string[]>;
  className?: string;
}

// Sample filter categories - In a real app, these would come from your API/backend
const filterCategories: FilterCategory[] = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { id: 'tops', name: 'Tops' },
      { id: 'bottoms', name: 'Bottoms' },
      { id: 'dresses', name: 'Dresses' },
      { id: 'outerwear', name: 'Outerwear' },
      { id: 'shoes', name: 'Shoes' },
      { id: 'accessories', name: 'Accessories' },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { id: 'xs', name: 'XS' },
      { id: 's', name: 'S' },
      { id: 'm', name: 'M' },
      { id: 'l', name: 'L' },
      { id: 'xl', name: 'XL' },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { id: 'black', name: 'Black' },
      { id: 'white', name: 'White' },
      { id: 'blue', name: 'Blue' },
      { id: 'green', name: 'Green' },
      { id: 'red', name: 'Red' },
      { id: 'beige', name: 'Beige' },
    ],
  },
  {
    id: 'price',
    name: 'Price',
    options: [
      { id: 'under-50', name: 'Under $50' },
      { id: '50-100', name: '$50 - $100' },
      { id: '100-200', name: '$100 - $200' },
      { id: 'over-200', name: 'Over $200' },
    ],
  },
];

export function ProductFilters({ 
  onSortChange, 
  onFilterChange, 
  activeFilters = {}, 
  className = ""
}: ProductFiltersProps) {
  const [sortValue, setSortValue] = useState<SortOption>('recommended');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const isMobile = useIsMobile();
  
  const handleSortChange = (value: string) => {
    const sortOption = value as SortOption;
    setSortValue(sortOption);
    onSortChange(sortOption);
  };
  
  const handleFilterChange = (category: string, option: string, checked: boolean) => {
    onFilterChange(category, option, checked);
  };
  
  const getActiveFilterCount = (): number => {
    return Object.values(activeFilters).reduce((count, filters) => count + filters.length, 0);
  };
  
  // Count active filters
  const activeFilterCount = getActiveFilterCount();
  
  // Mobile filters panel
  const MobileFilters = () => (
    <div className={`fixed inset-0 z-50 bg-background pt-header overflow-y-auto transform transition-transform ${
      showMobileFilters ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-medium">Filters</h2>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setShowMobileFilters(false)}
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="p-4">
        <Accordion type="multiple" className="space-y-4">
          {filterCategories.map((category) => (
            <AccordionItem key={category.id} value={category.id} className="border-0">
              <AccordionTrigger className="py-2 hover:no-underline">
                <span className="font-medium">{category.name}</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 ml-2 pt-2">
                  {category.options.map((option) => {
                    const isChecked = activeFilters[category.id]?.includes(option.id) || false;
                    
                    return (
                      <div key={option.id} className="flex items-center gap-2">
                        <Checkbox 
                          id={`${category.id}-${option.id}-mobile`}
                          checked={isChecked}
                          onCheckedChange={(checked) => {
                            handleFilterChange(category.id, option.id, checked === true);
                          }}
                        />
                        <label 
                          htmlFor={`${category.id}-${option.id}-mobile`}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {option.name}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      <div className="p-4 border-t sticky bottom-0 bg-background">
        <Button 
          className="w-full" 
          onClick={() => setShowMobileFilters(false)}
        >
          Apply Filters ({activeFilterCount})
        </Button>
      </div>
    </div>
  );
  
  return (
    <>
      <div className={`flex items-center justify-between mb-6 ${className}`}>
        <div className="flex items-center gap-2">
          {isMobile ? (
            <Button 
              variant="filter" 
              onClick={() => setShowMobileFilters(true)}
            >
              <Filter className="h-4 w-4" />
              Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
            </Button>
          ) : (
            <div className="hidden md:flex items-center gap-4">
              {filterCategories.map((category) => (
                <DropdownMenu key={category.id}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="filter">
                      {category.name}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    <div className="p-2">
                      {category.options.map((option) => {
                        const isChecked = activeFilters[category.id]?.includes(option.id) || false;
                        
                        return (
                          <div key={option.id} className="flex items-center gap-2 py-1.5">
                            <Checkbox 
                              id={`${category.id}-${option.id}`}
                              checked={isChecked}
                              onCheckedChange={(checked) => {
                                handleFilterChange(category.id, option.id, checked === true);
                              }}
                            />
                            <label 
                              htmlFor={`${category.id}-${option.id}`}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {option.name}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </div>
          )}
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="filter">
              Sort by: {sortValueToLabel(sortValue)}
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuRadioGroup value={sortValue} onValueChange={handleSortChange}>
              <DropdownMenuRadioItem value="recommended">Recommended</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="price-asc">Price: Low to High</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="price-desc">Price: High to Low</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      {/* Mobile filters panel */}
      {isMobile && <MobileFilters />}
    </>
  );
}

// Helper function to convert sort value to display label
function sortValueToLabel(value: SortOption): string {
  switch (value) {
    case 'recommended':
      return 'Recommended';
    case 'newest':
      return 'Newest';
    case 'price-asc':
      return 'Price: Low to High';
    case 'price-desc':
      return 'Price: High to Low';
    default:
      return 'Recommended';
  }
}