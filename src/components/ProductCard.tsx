import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import ProductModal from './ProductModal';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(product.image);

  const originalPrice = product.price;
  const discountedPrice = product.price * 1.2; // 20% discount

  return (
    <>
      <div 
        className="group relative bg-transparent overflow-hidden border border-gray-800 transition-all duration-300 hover:border-white cursor-pointer"
        onClick={() => setIsModalOpen(true)}
        onMouseEnter={() => product.additionalImages.length > 0 && setCurrentImage(product.additionalImages[0])}
        onMouseLeave={() => setCurrentImage(product.image)}
      >
        <div className="aspect-square overflow-hidden">
          <img 
            src={currentImage} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"></div>
        </div>
        
        <div className="p-4 bg-black bg-opacity-90">
          <h3 className="text-white font-semibold tracking-wide uppercase text-sm mb-2">{product.name}</h3>
          <div className="flex items-baseline space-x-2">
            <p className="text-white text-lg font-bold">${(originalPrice / 1000).toFixed(3)}</p>
            <p className="text-red-500 text-sm line-through">${(discountedPrice / 1000).toFixed(3)}</p>
            <span className="text-xs bg-red-500 text-white px-2 py-1">-20%</span>
          </div>
        </div>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          className="absolute right-4 -bottom-10 group-hover:bottom-4 w-10 h-10 bg-white text-black flex items-center justify-center transition-all duration-300"
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus size={18} />
        </button>
      </div>

      {isModalOpen && (
        <ProductModal 
          product={product} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
};

export default ProductCard;