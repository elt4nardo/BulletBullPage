import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product, CustomerInfo } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, size: string) => void;
  removeFromCart: (productId: string, size: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getItemCount: () => number;
  generateWhatsAppLink: (firstName: string, lastName: string) => string;
  isCartOpen: boolean;
  toggleCart: () => void;
  customerInfo: CustomerInfo | null;
  setCustomerInfo: (info: CustomerInfo) => void;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  getCartTotal: () => 0,
  getItemCount: () => 0,
  generateWhatsAppLink: () => '',
  isCartOpen: false,
  toggleCart: () => {},
  customerInfo: null,
  setCustomerInfo: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart from localStorage');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product, size: string) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => 
        item.product.id === product.id && item.size === size
      );
      
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { product, quantity: 1, size }];
      }
    });
  };

  const removeFromCart = (productId: string, size: string) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => 
        item.product.id === productId && item.size === size
      );
      
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map(item =>
          item.product.id === productId && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevItems.filter(item => 
          !(item.product.id === productId && item.size === size)
        );
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
    setCustomerInfo(null);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const getItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const generateWhatsAppLink = (firstName: string, lastName: string) => {
    if (cartItems.length === 0 || !firstName || !lastName) return '';
    
    const phoneNumber = '+5493412157523';
    
    const itemsText = cartItems.map(item => 
      `${item.product.name} (${item.size}) x${item.quantity} - $${(item.product.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    const totalText = `\nTotal: $${getCartTotal().toFixed(2)}`;
    const customerText = `\nNombre: ${firstName} ${lastName}`;
    
    const message = `Buenos días, me gustaría hacer el siguiente pedido:\n${itemsText}${totalText}${customerText}`;
    
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      getCartTotal,
      getItemCount,
      generateWhatsAppLink,
      isCartOpen,
      toggleCart,
      customerInfo,
      setCustomerInfo
    }}>
      {children}
    </CartContext.Provider>
  );
};