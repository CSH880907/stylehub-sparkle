import { ProductGrid } from "@/components/shop/ProductGrid";
import { getNewProducts } from "@/lib/data";

export function NewArrivals() {
  const newProducts = getNewProducts();
  
  return (
    <div className="container py-8 space-y-6">
      <h1 className="text-4xl font-bold">新品上市</h1>
      <p className="text-muted-foreground">探索我們最新的時尚系列</p>
      <ProductGrid products={newProducts} columns={4} />
    </div>
  );
}