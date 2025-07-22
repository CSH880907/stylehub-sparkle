import { Link } from "react-router-dom";
import { Collection } from "@/types";

interface CollectionCardProps {
  collection: Collection;
  variant?: "default" | "overlay";
}

export function CollectionCard({ collection, variant = "default" }: CollectionCardProps) {
  const { id, name, description, image } = collection;
  
  if (variant === "overlay") {
    return (
      <Link 
        to={`/collection/${id}`}
        className="relative overflow-hidden rounded-lg aspect-[3/4] group"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foreground/70 z-10" />
        
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20 text-white">
          <h3 className="text-xl md:text-2xl font-bold">
            {name}
          </h3>
          {description && (
            <p className="mt-1 text-white/90 line-clamp-2">
              {description}
            </p>
          )}
          <span className="inline-flex items-center mt-3 text-sm font-medium underline-offset-4 hover:underline">
            Explore Collection
          </span>
        </div>
      </Link>
    );
  }
  
  return (
    <div className="group">
      <Link 
        to={`/collection/${id}`}
        className="block overflow-hidden rounded-lg aspect-video"
      >
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      
      <div className="mt-4">
        <Link to={`/collection/${id}`}>
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        
        {description && (
          <p className="mt-1 text-muted-foreground">
            {description}
          </p>
        )}
        
        <Link 
          to={`/collection/${id}`}
          className="inline-flex items-center mt-2 text-sm font-medium text-primary hover:underline underline-offset-4"
        >
          Shop the Collection
        </Link>
      </div>
    </div>
  );
}