import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { MinusCircle, PlusCircle, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export function Cart() {
  const { cart, subtotal, removeFromCart, updateQuantity, clearCart } = useCart();
  
  if (cart.length === 0) {
    return (
      <div className="container py-12">
        <div className="max-w-md mx-auto text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-muted">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
          </div>
          <h1 className="text-2xl font-bold">您的購物車是空的</h1>
          <p className="text-muted-foreground">
            看起來您還沒有將任何商品加入購物車
          </p>
          <Button asChild className="mt-4">
            <Link to="/shop">繼續購物</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">購物車</h1>
      
      <div className="grid lg:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_auto] gap-4 text-sm text-muted-foreground p-4">
            <div>商品</div>
            <div className="text-center">單價</div>
            <div className="text-center">數量</div>
            <div></div>
          </div>
          
          {cart.map((item, index) => (
            <Card key={`${item.product.id}-${item.color.value}-${item.size.value}`} className="overflow-hidden">
              <div className="md:grid md:grid-cols-[2fr_1fr_1fr_auto] gap-4 p-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-md overflow-hidden bg-muted">
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.product.name}</h3>
                    <div className="text-sm text-muted-foreground mt-1">
                      <div>顏色: {item.color.name}</div>
                      <div>尺寸: {item.size.name}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center mt-4 md:mt-0">
                  {item.product.salePrice ? (
                    <div className="text-center">
                      <span className="text-lg font-medium">${item.product.salePrice.toFixed(2)}</span>
                      <span className="text-sm text-muted-foreground line-through ml-2">
                        ${item.product.price.toFixed(2)}
                      </span>
                    </div>
                  ) : (
                    <span className="text-lg font-medium">${item.product.price.toFixed(2)}</span>
                  )}
                </div>
                
                <div className="flex items-center justify-center mt-4 md:mt-0">
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    >
                      <MinusCircle className="h-4 w-4" />
                      <span className="sr-only">減少</span>
                    </Button>
                    <Input
                      type="number"
                      min="1"
                      className="h-8 w-14 mx-1 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value) || 1)}
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    >
                      <PlusCircle className="h-4 w-4" />
                      <span className="sr-only">增加</span>
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-end mt-4 md:mt-0">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground h-8 w-8"
                    onClick={() => removeFromCart(item.product.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">刪除</span>
                  </Button>
                </div>
              </div>
              
              {index < cart.length - 1 && <Separator />}
            </Card>
          ))}
          
          <div className="flex justify-end">
            <Button variant="outline" onClick={clearCart}>
              清空購物車
            </Button>
          </div>
        </div>
        
        <div>
          <Card className="p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">訂單摘要</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">小計</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">運費</span>
                <span>免費</span>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="flex justify-between mb-6">
              <span className="font-semibold">總計</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            
            <Button className="w-full">
              前往結帳
            </Button>
            
            <div className="text-center mt-4">
              <Button variant="link" asChild className="text-muted-foreground">
                <Link to="/shop">繼續購物</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}