import { Product, Category, Collection } from "@/types";

// Mock Products
export const products: Product[] = [
  {
    id: "p1",
    name: "Structured Oversized Blazer",
    description: "A structured blazer with a modern oversized fit, perfect for both casual and formal occasions.",
    price: 129.99,
    images: ["/images/products/blazer-1.jpg", "/images/products/blazer-2.jpg", "/images/products/blazer-3.jpg"],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "Beige", value: "#E8DCCA" },
      { name: "Navy", value: "#0A142F" }
    ],
    sizes: [
      { name: "XS", value: "XS", inStock: true },
      { name: "S", value: "S", inStock: true },
      { name: "M", value: "M", inStock: true },
      { name: "L", value: "L", inStock: true },
      { name: "XL", value: "XL", inStock: false }
    ],
    categories: ["women", "outerwear", "formal"],
    tags: ["blazer", "office", "formal", "spring"],
    featured: true,
    bestseller: true,
    isNew: true,
    createdAt: "2025-06-01",
    stock: 45
  },
  {
    id: "p2",
    name: "Wide Leg Linen Pants",
    description: "Comfortable wide leg pants in breathable linen fabric, perfect for summer days.",
    price: 89.99,
    images: ["/images/products/pants-1.jpg", "/images/products/pants-2.jpg"],
    colors: [
      { name: "White", value: "#FFFFFF" },
      { name: "Sage", value: "#C2C5AA" },
      { name: "Terracotta", value: "#CD5C5C" }
    ],
    sizes: [
      { name: "XS", value: "XS", inStock: true },
      { name: "S", value: "S", inStock: true },
      { name: "M", value: "M", inStock: true },
      { name: "L", value: "L", inStock: true },
      { name: "XL", value: "XL", inStock: true }
    ],
    categories: ["women", "bottoms", "casual"],
    tags: ["linen", "summer", "pants"],
    featured: false,
    bestseller: true,
    isNew: true,
    createdAt: "2025-05-15",
    stock: 30
  },
  {
    id: "p3",
    name: "Premium Cotton T-Shirt",
    description: "A staple t-shirt made from premium cotton with a relaxed fit.",
    price: 39.99,
    images: ["/images/products/tshirt-1.jpg", "/images/products/tshirt-2.jpg"],
    colors: [
      { name: "White", value: "#FFFFFF" },
      { name: "Black", value: "#000000" },
      { name: "Gray", value: "#808080" },
      { name: "Blue", value: "#0000FF" }
    ],
    sizes: [
      { name: "S", value: "S", inStock: true },
      { name: "M", value: "M", inStock: true },
      { name: "L", value: "L", inStock: true },
      { name: "XL", value: "XL", inStock: true }
    ],
    categories: ["men", "tops", "casual"],
    tags: ["tshirt", "basics", "cotton"],
    featured: false,
    bestseller: true,
    isNew: false,
    createdAt: "2025-04-10",
    stock: 100
  },
  {
    id: "p4",
    name: "Pleated Midi Skirt",
    description: "An elegant pleated midi skirt that moves beautifully with every step.",
    price: 79.99,
    salePrice: 59.99,
    images: ["/images/products/skirt-1.jpg", "/images/products/skirt-2.jpg"],
    colors: [
      { name: "Navy", value: "#0A142F" },
      { name: "Cream", value: "#FFFDD0" },
      { name: "Black", value: "#000000" }
    ],
    sizes: [
      { name: "XS", value: "XS", inStock: true },
      { name: "S", value: "S", inStock: true },
      { name: "M", value: "M", inStock: true },
      { name: "L", value: "L", inStock: false }
    ],
    categories: ["women", "bottoms", "formal"],
    tags: ["skirt", "pleated", "midi", "elegant"],
    featured: true,
    bestseller: false,
    isNew: false,
    createdAt: "2025-03-20",
    stock: 25
  },
  {
    id: "p5",
    name: "Slim Fit Denim Jeans",
    description: "Classic slim fit jeans in premium denim that offers comfort and style.",
    price: 99.99,
    images: ["/images/products/jeans-1.jpg", "/images/products/jeans-2.jpg"],
    colors: [
      { name: "Light Wash", value: "#A8C0D6" },
      { name: "Medium Wash", value: "#5D82A8" },
      { name: "Dark Wash", value: "#293F54" }
    ],
    sizes: [
      { name: "28", value: "28", inStock: true },
      { name: "30", value: "30", inStock: true },
      { name: "32", value: "32", inStock: true },
      { name: "34", value: "34", inStock: true },
      { name: "36", value: "36", inStock: false }
    ],
    categories: ["men", "bottoms", "casual"],
    tags: ["jeans", "denim", "slim fit"],
    featured: true,
    bestseller: true,
    isNew: false,
    createdAt: "2025-02-15",
    stock: 60
  },
  {
    id: "p6",
    name: "Merino Wool Sweater",
    description: "A luxurious merino wool sweater that provides warmth without bulk.",
    price: 119.99,
    images: ["/images/products/sweater-1.jpg", "/images/products/sweater-2.jpg"],
    colors: [
      { name: "Camel", value: "#C19A6B" },
      { name: "Burgundy", value: "#800020" },
      { name: "Forest Green", value: "#014421" }
    ],
    sizes: [
      { name: "S", value: "S", inStock: true },
      { name: "M", value: "M", inStock: true },
      { name: "L", value: "L", inStock: true },
      { name: "XL", value: "XL", inStock: true }
    ],
    categories: ["men", "tops", "winter"],
    tags: ["sweater", "wool", "winter"],
    featured: false,
    bestseller: false,
    isNew: true,
    createdAt: "2025-07-01",
    stock: 35
  },
  {
    id: "p7",
    name: "Floral Print Maxi Dress",
    description: "A stunning floral print maxi dress, perfect for summer events.",
    price: 149.99,
    salePrice: 119.99,
    images: ["/images/products/dress-1.jpg", "/images/products/dress-2.jpg"],
    colors: [
      { name: "Blue Floral", value: "#6495ED" },
      { name: "Pink Floral", value: "#FFB6C1" }
    ],
    sizes: [
      { name: "XS", value: "XS", inStock: true },
      { name: "S", value: "S", inStock: true },
      { name: "M", value: "M", inStock: true },
      { name: "L", value: "L", inStock: true }
    ],
    categories: ["women", "dresses", "summer"],
    tags: ["dress", "floral", "maxi", "summer"],
    featured: true,
    bestseller: false,
    isNew: true,
    createdAt: "2025-06-15",
    stock: 20
  },
  {
    id: "p8",
    name: "Canvas Sneakers",
    description: "Classic canvas sneakers with a comfortable fit and timeless design.",
    price: 69.99,
    images: ["/images/products/sneakers-1.jpg", "/images/products/sneakers-2.jpg"],
    colors: [
      { name: "White", value: "#FFFFFF" },
      { name: "Black", value: "#000000" },
      { name: "Navy", value: "#0A142F" }
    ],
    sizes: [
      { name: "US 6", value: "6", inStock: true },
      { name: "US 7", value: "7", inStock: true },
      { name: "US 8", value: "8", inStock: true },
      { name: "US 9", value: "9", inStock: true },
      { name: "US 10", value: "10", inStock: true },
      { name: "US 11", value: "11", inStock: true }
    ],
    categories: ["shoes", "casual", "unisex"],
    tags: ["sneakers", "canvas", "casual"],
    featured: false,
    bestseller: true,
    isNew: false,
    createdAt: "2025-04-01",
    stock: 50
  }
];

// Mock Categories
export const categories: Category[] = [
  {
    id: "c1",
    name: "Women",
    description: "Shop our collection of women's clothing.",
    image: "/images/categories/women.jpg"
  },
  {
    id: "c2",
    name: "Men",
    description: "Shop our collection of men's clothing.",
    image: "/images/categories/men.jpg"
  },
  {
    id: "c3",
    name: "Shoes",
    description: "Step into style with our shoe collection.",
    image: "/images/categories/shoes.jpg"
  },
  {
    id: "c4",
    name: "Accessories",
    description: "Complete your look with our accessories.",
    image: "/images/categories/accessories.jpg"
  }
];

// Mock Collections
export const collections: Collection[] = [
  {
    id: "col1",
    name: "Summer Essentials",
    description: "Stay cool and stylish with our summer collection.",
    image: "/images/collections/summer.jpg",
    products: ["p2", "p7", "p8"]
  },
  {
    id: "col2",
    name: "Office Edit",
    description: "Elevate your workwear with our office collection.",
    image: "/images/collections/office.jpg",
    products: ["p1", "p4", "p5"]
  },
  {
    id: "col3",
    name: "Sustainable Picks",
    description: "Eco-friendly fashion for the conscious consumer.",
    image: "/images/collections/sustainable.jpg",
    products: ["p3", "p6"]
  }
];

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Helper function to filter products by category
export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.categories.includes(categoryId));
};

// Helper function to get products from a collection
export const getProductsByCollection = (collectionId: string): Product[] => {
  const collection = collections.find(c => c.id === collectionId);
  if (!collection) return [];
  
  return collection.products
    .map(id => getProductById(id))
    .filter((product): product is Product => product !== undefined);
};

// Helper function to get featured products
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

// Helper function to get bestseller products
export const getBestsellerProducts = (): Product[] => {
  return products.filter(product => product.bestseller);
};

// Helper function to get new products
export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};