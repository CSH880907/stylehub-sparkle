import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// These would typically be separate files in a real application
const ProductsPage = () => <div className="container mx-auto px-4 py-12"><h1 className="text-3xl font-bold">All Products</h1></div>;
const NewArrivalsPage = () => <div className="container mx-auto px-4 py-12"><h1 className="text-3xl font-bold">New Arrivals</h1></div>;
const WomenPage = () => <div className="container mx-auto px-4 py-12"><h1 className="text-3xl font-bold">Women's Collection</h1></div>;
const MenPage = () => <div className="container mx-auto px-4 py-12"><h1 className="text-3xl font-bold">Men's Collection</h1></div>;
const CollectionsPage = () => <div className="container mx-auto px-4 py-12"><h1 className="text-3xl font-bold">Collections</h1></div>;
const AboutPage = () => <div className="container mx-auto px-4 py-12"><h1 className="text-3xl font-bold">About Us</h1></div>;
const CartPage = () => <div className="container mx-auto px-4 py-12"><h1 className="text-3xl font-bold">Shopping Cart</h1></div>;
const AccountPage = () => <div className="container mx-auto px-4 py-12"><h1 className="text-3xl font-bold">My Account</h1></div>;
const WishlistPage = () => <div className="container mx-auto px-4 py-12"><h1 className="text-3xl font-bold">My Wishlist</h1></div>;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/new" element={<NewArrivalsPage />} />
                <Route path="/women" element={<WomenPage />} />
                <Route path="/men" element={<MenPage />} />
                <Route path="/collections" element={<CollectionsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
