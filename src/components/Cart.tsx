import React from 'react';
import { X, ShoppingBag, Trash2, ExternalLink } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { 
    cartItems, 
    removeFromCart, 
    clearCart, 
    getCartTotal, 
    isCartOpen, 
    toggleCart,
    generateWhatsAppLink
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-50 animate-fadeIn">
      {/* Cart overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={toggleCart}
      ></div>
      
      {/* Cart content */}
      <div className="relative w-full max-w-md bg-black border-l border-gray-800 h-full overflow-y-auto animate-slideIn">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white text-xl font-bold tracking-tighter flex items-center">
              <ShoppingBag className="mr-2" size={20} />
              Carrito
            </h2>
            <button 
              onClick={toggleCart}
              className="text-white opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="py-12 text-center">
              <div className="inline-block p-6 border border-gray-800 rounded-full mb-4">
                <ShoppingBag size={32} className="text-white opacity-50" />
              </div>
              <p className="text-white opacity-70 mb-6">Tu carrito esta vacío</p>
              <button 
                onClick={toggleCart}
                className="inline-flex items-center bg-white text-black px-6 py-2 font-semibold tracking-wide text-sm uppercase transition-transform hover:translate-x-1 focus:outline-none"
              >
                Continuar Comprando
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-8">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex border-b border-gray-800 pb-4">
                    <div className="w-20 h-20 bg-gray-900 flex-shrink-0">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="text-white text-sm font-semibold">{item.product.name}</h3>
                      <p className="text-white opacity-70 text-sm">Cantidad:{item.quantity}</p>
                      <p className="text-white font-bold mt-1">${(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-white opacity-70 hover:opacity-100 transition-opacity self-start"
                      aria-label={`Remove ${item.product.name} from cart`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-white opacity-70">Subtotal</span>
                  <span className="text-white font-bold">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                </div>
                <div className="flex justify-between pt-4 border-t border-gray-800">
                  <span className="text-white text-lg">Total</span>
                  <span className="text-white text-lg font-bold">${getCartTotal().toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-3">
                <a 
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-white text-black px-6 py-3 font-semibold tracking-wide text-sm uppercase transition-transform hover:translate-x-1 focus:outline-none"
                >
                  Comprar ahora vía WhatsApp
                  <ExternalLink className="ml-2" size={16} />
                </a>
                <button 
                  onClick={clearCart}
                  className="w-full inline-flex items-center justify-center bg-transparent border border-gray-800 text-white px-6 py-3 font-semibold tracking-wide text-sm uppercase transition-opacity hover:opacity-80 focus:outline-none"
                >
                  Limpiar Carrito
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;