import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">STYLEIO</h3>
            <p className="text-muted-foreground mb-6">
              Your premier destination for curated fashion that elevates your style to new heights.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/new" className="text-muted-foreground hover:text-primary">New Arrivals</Link></li>
              <li><Link to="/women" className="text-muted-foreground hover:text-primary">Women</Link></li>
              <li><Link to="/men" className="text-muted-foreground hover:text-primary">Men</Link></li>
              <li><Link to="/collections" className="text-muted-foreground hover:text-primary">Collections</Link></li>
              <li><Link to="/sale" className="text-muted-foreground hover:text-primary">Sale</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-muted-foreground hover:text-primary">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
              <li><Link to="/size-guide" className="text-muted-foreground hover:text-primary">Size Guide</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Subscribe</h4>
            <p className="text-muted-foreground mb-4">
              Sign up for our newsletter to receive exclusive offers and style updates.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background"
              />
              <Button variant="gradient" size="icon">
                <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} STYLEIO. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms</Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy</Link>
              <Link to="/accessibility" className="text-sm text-muted-foreground hover:text-primary">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}