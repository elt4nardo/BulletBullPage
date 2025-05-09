import React, { useState } from 'react';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import ProductModal from './ProductModal';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const allImages = [product.image, ...product.additionalImages];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const originalPrice = product.price;
  const discountedPrice = product.price * 1.2; // 20% discount

  return (
    <>
      <div 
        className="group relative bg-transparent overflow-hidden border border-gray-800 transition-all duration-300 hover:border-white cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-square overflow-hidden relative">
          <img 
            src={allImages[currentImageIndex]} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
          
          {allImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
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
            setIsModalOpen(true);
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