import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Footer from './components/Footer';
import Cart from './components/Cart';
import GoToTop from './components/GoToTop';
import BackgroundEffect from './components/BackgroundEffect';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-black text-white">
        <BackgroundEffect />
        <Navbar />
        <Hero />
        <ProductGrid />
        <About />
        <Footer />
        <Cart />
        <GoToTop />
      </div>
    </CartProvider>
  );
}

export default App