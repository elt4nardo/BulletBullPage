import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addToCart } = useCart();
  const allImages = [product.image, ...product.additionalImages];

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onClose]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart({ ...product, selectedSize });
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 animate-fadeIn p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-4xl bg-black border border-gray-800 p-4 md:p-8 animate-slideIn max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white opacity-70 hover:opacity-100 transition-opacity z-10"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Galería de imágenes */}
          <div className="relative aspect-square bg-gray-900">
            <img 
              src={allImages[currentImageIndex]} 
              alt={product.name}
              className="w-full h-full object-cover animate-fadeIn"
            />

            {allImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-70 transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-70 transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {allImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentImageIndex === index ? 'bg-white' : 'bg-white opacity-50'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Detalles del producto */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-white mb-2">{product.name}</h2>
              <p className="text-2xl font-bold text-white">${product.price.toFixed(2)}</p>
            </div>

            <p className="text-white opacity-80">{product.description}</p>

            {/* Selección de talles */}
            {product.sizes?.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-3">Talles disponibles</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-md text-white transition-all ${
                        selectedSize === size
                          ? 'bg-white text-black border-white'
                          : 'border-gray-600 hover:border-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-3">Detalles</h3>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-white opacity-80 flex items-center">
                    <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart();
              }}
              disabled={!selectedSize}
              className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold tracking-wide text-sm uppercase transition-transform focus:outline-none ${
                selectedSize
                  ? 'bg-white text-black hover:translate-x-1'
                  : 'bg-gray-700 text-white cursor-not-allowed'
              }`}
            >
              Agregar al carrito
              <Plus size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
