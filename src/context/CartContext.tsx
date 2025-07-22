import { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "sonner";
import { CartItem, Product, Color, Size } from "@/types";

interface CartContextType {
  cart: CartItem[];
  itemCount: number;
  subtotal: number;
  addToCart: (product: Product, quantity: number, color: Color, size: Size) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  const subtotal = cart.reduce(
    (total, item) => 
      total + (item.product.salePrice || item.product.price) * item.quantity, 
    0
  );
  
  const addToCart = (product: Product, quantity: number, color: Color, size: Size) => {
    // Check if the item already exists in the cart with the same options
    const existingItemIndex = cart.findIndex(
      item => 
        item.product.id === product.id && 
        item.color.value === color.value && 
        item.size.value === size.value
    );
    
    if (existingItemIndex !== -1) {
      // Update quantity of existing item
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
      
      toast.success("Cart updated", {
        description: `Updated quantity of ${product.name}`,
      });
    } else {
      // Add new item to cart
      setCart([...cart, { product, quantity, color, size }]);
      
      toast.success("Added to cart", {
        description: `${product.name} has been added to your cart`,
      });
    }
  };
  
  const removeFromCart = (itemId: string) => {
    const itemIndex = cart.findIndex(item => item.product.id === itemId);
    if (itemIndex === -1) return;
    
    const itemName = cart[itemIndex].product.name;
    const updatedCart = cart.filter((_, index) => index !== itemIndex);
    setCart(updatedCart);
    
    toast.info("Removed from cart", {
      description: `${itemName} has been removed from your cart`,
    });
  };
  
  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(itemId);
      return;
    }
    
    const updatedCart = cart.map(item => 
      item.product.id === itemId ? { ...item, quantity } : item
    );
    
    setCart(updatedCart);
  };
  
  const clearCart = () => {
    setCart([]);
    toast.info("Cart cleared", {
      description: "All items have been removed from your cart",
    });
  };
  
  return (
    <CartContext.Provider value={{
      cart,
      itemCount,
      subtotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}