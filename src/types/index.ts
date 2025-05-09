export interface Product {
  availableSizes: any;
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  additionalImages: string[];
  category: string;
  details: string[];
  sizes: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
}