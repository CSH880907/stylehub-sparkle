export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  images: string[];
  colors: Color[];
  sizes: Size[];
  categories: string[];
  tags: string[];
  featured: boolean;
  bestseller: boolean;
  isNew: boolean;
  createdAt: string;
  stock: number;
}

export type Color = {
  name: string;
  value: string; // hex or tailwind color
};

export type Size = {
  name: string;
  value: string; // S, M, L, XL, etc.
  inStock: boolean;
};

export interface CartItem {
  product: Product;
  quantity: number;
  color: Color;
  size: Size;
}

export interface User {
  id: string;
  name: string;
  email: string;
  wishlist: string[]; // product ids
  cart: CartItem[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  products: string[]; // product ids
}