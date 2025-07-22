import { Link } from "react-router-dom";
import { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
  size?: "default" | "large";
}

export function CategoryCard({ category, size = "default" }: CategoryCardProps) {
  const { id, name, description, image } = category;
  
  return (
    <Link 
      to={`/category/${id}`}
      className={`relative overflow-hidden rounded-lg group ${
        size === "large" ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-square"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foreground/70 z-10" />
      
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20 text-white">
        <h3 className={`font-bold ${size === "large" ? "text-2xl md:text-3xl" : "text-xl"}`}>
          {name}
        </h3>
        {description && (
          <p className="mt-1 text-white/90 line-clamp-2">
            {description}
          </p>
        )}
        <span className="inline-flex items-center mt-3 text-sm font-medium underline-offset-4 hover:underline">
          Shop Now
        </span>
      </div>
    </Link>
  );
}