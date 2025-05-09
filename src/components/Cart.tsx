import React, { useState } from 'react';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    getCartTotal,
    isCartOpen,
    toggleCart,
    generateWhatsAppLink,
    setCustomerInfo,
    customerInfo
  } = useCart();

  const [firstName, setFirstName] = useState(customerInfo?.firstName || '');
  const [lastName, setLastName] = useState(customerInfo?.lastName || '');

  if (!isCartOpen) return null;

  const handleWhatsAppClick = () => {
    if (!firstName.trim() || !lastName.trim()) {
      alert('Por favor, completa tu nombre y apellido antes de realizar el pedido.');
      return;
    }

    setCustomerInfo({ firstName: firstName.trim(), lastName: lastName.trim() });
    const url = generateWhatsAppLink(firstName.trim(), lastName.trim());
    
    // Open WhatsApp in a new window with specific features to avoid popup blocking
    const whatsappWindow = window.open(
      url,
      '_blank',
      'width=600,height=600,scrollbars=yes,resizable=yes'
    );

    if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed === 'undefined') {
      // Fallback if popup is blocked
      alert('Por favor, habilita las ventanas emergentes para continuar con tu compra por WhatsApp');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-50 animate-fadeIn">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={toggleCart}
      ></div>

      <div className="relative w-full max-w-md bg-black border-l border-gray-800 h-full overflow-y-auto animate-slideIn">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white text-xl font-bold tracking-tighter flex items-center">
              <ShoppingBag className="mr-2" size={20} />
              Carrito
            </h2>
            <button
              onClick={toggleCart}
              className="text-white opacity-70 hover:opacity-100"
            >
              <X size={24} />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="py-12 text-center">
              <div className="inline-block p-6 border border-gray-800 rounded-full mb-4">
                <ShoppingBag size={32} className="text-white opacity-50" />
              </div>
              <p className="text-white opacity-70 mb-6">Tu carrito está vacío</p>
              <button
                onClick={toggleCart}
                className="inline-flex items-center bg-white text-black px-6 py-2 font-semibold text-sm uppercase hover:translate-x-1"
              >
                Continuar Comprando
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-8">
                {cartItems.map((item) => (
                  <div key={`${item.product.id}-${item.size}`} className="flex border-b border-gray-800 pb-4">
                    <div className="w-20 h-20 bg-gray-900 flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="text-white text-sm font-semibold">{item.product.name}</h3>
                      <p className="text-white opacity-70 text-sm">Talle: {item.size}</p>
                      <p className="text-white opacity-70 text-sm">Cantidad: {item.quantity}</p>
                      <p className="text-white font-bold mt-1">${(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id, item.size)}
                      className="text-white opacity-70 hover:opacity-100 self-start"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="space-y-8 mb-6">
                <div className="flex justify-between">
                  <h3 className="italic">Gracias por elegirnos</h3>
                </div>
                <div className="flex justify-between pt-4 border-t border-gray-800">
                  <span className="text-white text-lg">Total</span>
                  <span className="text-white text-lg font-bold">${getCartTotal().toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-2 focus:outline-none focus:border-white"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-2 focus:outline-none focus:border-white"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full inline-flex items-center justify-center bg-white text-black px-6 py-3 font-semibold text-sm uppercase hover:translate-x-1"
                >
                  Comprar ahora vía WhatsApp
                </button>
                <button
                  onClick={clearCart}
                  className="w-full inline-flex items-center justify-center border border-gray-800 text-white px-6 py-3 font-semibold text-sm uppercase hover:opacity-80"
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