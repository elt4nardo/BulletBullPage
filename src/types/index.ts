export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  additionalImages: string[];
  category: string;
  details: string[];
  variants?: ProductVariant[];
}

export interface ProductVariant {
  id: string;
  name: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}