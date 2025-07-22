import { Search } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { products } from "@/lib/data";
import { Product } from "@/types";

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  
  const handleSearch = (value: string) => {
    setSearch(value);
    
    if (value.length < 2) {
      setResults([]);
      return;
    }
    
    const query = value.toLowerCase();
    const filtered = products.filter(product => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.categories.some(cat => cat.toLowerCase().includes(query)) ||
        product.tags.some(tag => tag.toLowerCase().includes(query))
      );
    });
    
    setResults(filtered);
  };
  
  const handleSelect = (product: Product) => {
    setOpen(false);
    // In a real app, this would navigate to the product detail page
    navigate(`/product/${product.id}`);
  };
  
  return (
    <>
      <div className="relative w-full max-w-sm">
        <Button
          variant="outline"
          className="w-full justify-start text-muted-foreground h-10"
          onClick={() => setOpen(true)}
        >
          <Search className="mr-2 h-4 w-4" />
          <span>搜尋商品...</span>
          <kbd className="pointer-events-none absolute right-4 top-2.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </div>
      
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="搜尋商品..." 
          value={search}
          onValueChange={handleSearch}
          className="border-none focus:ring-0"
        />
        <CommandList>
          <CommandEmpty>找不到符合的商品</CommandEmpty>
          {results.length > 0 && (
            <CommandGroup heading="商品">
              {results.map((product) => (
                <CommandItem
                  key={product.id}
                  onSelect={() => handleSelect(product)}
                  className="flex items-center gap-2 py-2"
                >
                  <div className="w-10 h-10 bg-muted rounded-md overflow-hidden">
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{product.name}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      ${product.salePrice || product.price}
                    </p>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}