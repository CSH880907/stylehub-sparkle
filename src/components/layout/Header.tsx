import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Heart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "New Arrivals", href: "/new" },
    { label: "Women", href: "/women" },
    { label: "Men", href: "/men" },
    { label: "Collections", href: "/collections" },
    { label: "About", href: "/about" },
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

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <Search className="size-5" />
          </Button>
          
          <Link to="/wishlist">
            <Button variant="ghost" size="icon">
              <Heart className="size-5" />
            </Button>
          </Link>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="size-5" />
            </Button>
          </Link>
          
          <Link to="/account">
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
              to="/account"
              className="text-lg py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Account
            </Link>
            <Link
              to="/search"
              className="text-lg py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Search
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}