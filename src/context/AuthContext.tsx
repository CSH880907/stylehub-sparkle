import { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "sonner";
import { User } from "@/types";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  toggleWishlist: (productId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  
  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, this would call your authentication API
    try {
      // Mock successful login
      setUser({
        id: "user1",
        name: "John Doe",
        email: email,
        wishlist: [],
        cart: []
      });
      
      toast.success("Login successful", {
        description: "Welcome back!",
      });
      
      return true;
    } catch (error) {
      toast.error("Login failed", {
        description: "Invalid email or password",
      });
      return false;
    }
  };
  
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // In a real app, this would call your registration API
    try {
      // Mock successful registration
      setUser({
        id: "user1",
        name: name,
        email: email,
        wishlist: [],
        cart: []
      });
      
      toast.success("Registration successful", {
        description: "Your account has been created",
      });
      
      return true;
    } catch (error) {
      toast.error("Registration failed", {
        description: "Could not create your account",
      });
      return false;
    }
  };
  
  const logout = () => {
    setUser(null);
    toast.info("Logged out", {
      description: "You have been logged out successfully",
    });
  };
  
  const toggleWishlist = (productId: string) => {
    if (!user) {
      toast.error("Please login", {
        description: "You must be logged in to save items",
      });
      return;
    }
    
    const isInWishlist = user.wishlist.includes(productId);
    
    if (isInWishlist) {
      // Remove from wishlist
      setUser({
        ...user,
        wishlist: user.wishlist.filter(id => id !== productId)
      });
      
      toast.info("Removed from wishlist", {
        description: "Item has been removed from your wishlist",
      });
    } else {
      // Add to wishlist
      setUser({
        ...user,
        wishlist: [...user.wishlist, productId]
      });
      
      toast.success("Added to wishlist", {
        description: "Item has been added to your wishlist",
      });
    }
  };
  
  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      register,
      logout,
      toggleWishlist
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}