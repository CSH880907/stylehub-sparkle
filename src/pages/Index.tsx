import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { CategoryCard } from "@/components/shop/CategoryCard";
import { CollectionCard } from "@/components/shop/CollectionCard";
import { getFeaturedProducts, categories, collections } from "@/lib/data";

// Import images
import heroImage from "@/assets/hero.jpg";

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <img 
          src={heroImage} 
          alt="STYLEIO Fashion Collection" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-transparent" />
        
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Elevate Your Style
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Discover our new collection of premium clothing designed for the modern lifestyle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/new">Shop New Arrivals</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                <Link to="/collections">View Collections</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
            <p className="text-muted-foreground">Find exactly what you're looking for</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(0, 4).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Handpicked by our style experts</p>
            </div>
            <Link to="/products" className="text-primary hover:underline underline-offset-4">
              View All
            </Link>
          </div>
          
          <ProductGrid products={featuredProducts} columns={4} />
        </div>
      </section>
      
      {/* Collections Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Shop Collections</h2>
            <p className="text-muted-foreground">Curated looks for every style and occasion</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-xl opacity-90 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new arrivals, and styling tips.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-md border-0 text-foreground"
              required
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;