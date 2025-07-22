import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { toast } from "sonner";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { id, name, price, salePrice, images, isNew, bestseller } = product;
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    
    if (!isFavorite) {
      toast.success("Added to wishlist", {
        description: `${name} has been added to your wishlist.`,
      });
    } else {
      toast.info("Removed from wishlist", {
        description: `${name} has been removed from your wishlist.`,
      });
    }
  };
  
  return (
    <div className="group">
      <div 
        className="relative overflow-hidden rounded-lg bg-secondary/30 aspect-[3/4]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={`/product/${id}`}>
          <img 
            src={images[0]} 
            alt={name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered && images.length > 1 ? "opacity-0" : "opacity-100"
            }`}
          />
          
          {images.length > 1 && (
            <img 
              src={images[1]} 
              alt={`${name} - alternate view`}
              className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
          
          {/* Product labels */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {isNew && (
              <span className="bg-primary text-primary-foreground text-xs py-1 px-2 rounded">
                New
              </span>
            )}
            {bestseller && (
              <span className="bg-accent text-accent-foreground text-xs py-1 px-2 rounded">
                Bestseller
              </span>
            )}
            {salePrice && (
              <span className="bg-destructive text-destructive-foreground text-xs py-1 px-2 rounded">
                Sale
              </span>
            )}
          </div>
          
          {/* Favorite button */}
          <Button
            variant="wishlist"
            size="icon-sm"
            className={`absolute top-2 right-2 ${isFavorite ? 'text-pink-500 border-pink-200 bg-pink-50 dark:bg-pink-950' : ''}`}
            onClick={toggleFavorite}
          >
            <Heart className={isFavorite ? "fill-current" : ""} size={18} />
          </Button>
          
          {/* Quick shop */}
          <div className={`absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm p-3 transform transition-transform duration-300 ${
            isHovered ? "translate-y-0" : "translate-y-full"
          }`}>
            <Button variant="add-to-cart" size="sm" className="w-full">
              Quick Add
            </Button>
          </div>
        </Link>
      </div>
      
      <div className="mt-3 space-y-1">
        <Link to={`/product/${id}`} className="block">
          <h3 className="font-medium text-foreground hover:text-primary transition-colors line-clamp-1">
            {name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-2">
          {salePrice ? (
            <>
              <span className="text-destructive font-medium">{formatCurrency(salePrice)}</span>
              <span className="text-muted-foreground text-sm line-through">{formatCurrency(price)}</span>
            </>
          ) : (
            <span className="font-medium">{formatCurrency(price)}</span>
          )}
        </div>
      </div>
    </div>
  );
}