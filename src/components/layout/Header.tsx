import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { SearchBar } from "@/components/shop/SearchBar";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

export function Header() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const { user, isAuthenticated } = useAuth();

  const menuItems = [
    { label: "商品目錄", href: "/shop" },
    { label: "新品上市", href: "/new-arrivals" },
    { label: "精選推薦", href: "/recommendations" },
    { label: "關於我們", href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-header z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            STYLEIO
          </Link>
          
          {!isMobile && (
            <nav className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>

        <div className="hidden md:block mx-4 flex-1 max-w-md">
          <SearchBar />
        </div>
          
        <div className="flex items-center gap-2">
          <Link to="/wishlist">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="size-5" />
              {isAuthenticated && user?.wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {user.wishlist.length}
                </span>
              )}
            </Button>
          </Link>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="size-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>
          
          <Link to="/profile">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <User className="size-5" />
            </Button>
          </Link>

          {isMobile && (
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 top-header bg-background z-40 animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <div className="py-2">
              <SearchBar />
            </div>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-lg py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <hr className="my-4 border-border" />
            <Link
              to="/profile"
              className="text-lg py-2 text-foreground hover:text-primary transition-colors flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="size-5" />
              <span>會員中心</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}