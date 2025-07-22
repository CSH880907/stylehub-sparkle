import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { getProductById } from "@/lib/data";
import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { Product } from "@/types";

export function Wishlist() {
  const { user, toggleWishlist } = useAuth();
  const { addToCart } = useCart();
  
  // Get wishlist products
  const wishlistProducts = user?.wishlist
    .map(id => getProductById(id))
    .filter((product): product is Product => product !== undefined) || [];
  
  if (!user) {
    return (
      <div className="container py-12">
        <div className="max-w-md mx-auto text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-muted">
              <Heart className="w-12 h-12 text-muted-foreground" />
            </div>
          </div>
          <h1 className="text-2xl font-bold">請先登入</h1>
          <p className="text-muted-foreground">
            您需要先登入才能查看和管理您的收藏清單
          </p>
          <Button asChild className="mt-4">
            <Link to="/login">登入</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  if (wishlistProducts.length === 0) {
    return (
      <div className="container py-12">
        <div className="max-w-md mx-auto text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-muted">
              <Heart className="w-12 h-12 text-muted-foreground" />
            </div>
          </div>
          <h1 className="text-2xl font-bold">您的收藏清單是空的</h1>
          <p className="text-muted-foreground">
            您還沒有收藏任何商品
          </p>
          <Button asChild className="mt-4">
            <Link to="/shop">探索商品</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container py-8 space-y-6">
      <h1 className="text-4xl font-bold">我的收藏</h1>
      <p className="text-muted-foreground">您總共收藏了 {wishlistProducts.length} 件商品</p>
      
      <ProductGrid products={wishlistProducts} columns={4} />
    </div>
  );
}