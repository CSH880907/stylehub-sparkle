import { ProductGrid } from "@/components/shop/ProductGrid";
import { getBestsellerProducts, getFeaturedProducts } from "@/lib/data";

export function Recommendations() {
  const featured = getFeaturedProducts();
  const bestsellers = getBestsellerProducts();
  
  return (
    <div className="container py-8 space-y-12">
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">精選推薦</h2>
        <ProductGrid products={featured} columns={4} />
      </section>
      
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">熱銷商品</h2>
        <ProductGrid products={bestsellers} columns={4} />
      </section>
    </div>
  );
}