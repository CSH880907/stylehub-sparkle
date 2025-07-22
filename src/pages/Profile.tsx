import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

export function Profile() {
  const { user, logout } = useAuth();
  const { itemCount } = useCart();
  
  if (!user) {
    return (
      <div className="container py-8">
        <Card className="p-6 max-w-md mx-auto text-center space-y-4">
          <h2 className="text-2xl font-bold">請先登入</h2>
          <p className="text-muted-foreground">
            登入以查看您的個人資料和訂單記錄
          </p>
          <Button asChild className="w-full">
            <Link to="/login">登入</Link>
          </Button>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="container py-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">會員中心</h1>
        <Button variant="outline" onClick={logout}>登出</Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">個人資料</h3>
          <p className="text-muted-foreground">{user.name}</p>
          <p className="text-muted-foreground">{user.email}</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="font-semibold mb-2">購物車</h3>
          <p className="text-muted-foreground">
            目前有 {itemCount} 件商品在購物車中
          </p>
          <Button asChild className="mt-4" variant="outline">
            <Link to="/cart">查看購物車</Link>
          </Button>
        </Card>
        
        <Card className="p-6">
          <h3 className="font-semibold mb-2">收藏清單</h3>
          <p className="text-muted-foreground">
            已收藏 {user.wishlist.length} 件商品
          </p>
          <Button asChild className="mt-4" variant="outline">
            <Link to="/wishlist">查看收藏</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
}