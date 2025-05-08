import React from 'react';
import { ArrowRight } from 'lucide-react';
import RainEffect from './RainEffect';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <RainEffect />
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">
              NO ONE <br /> 
              <span className="text-4xl md:text-6xl font-light tracking-wider">LIKE US</span>
            </h1>
            <p className="text-white opacity-80 text-lg mb-6 max-w-lg">
              Streetwear minimalista y de alto contraste para quienes se destacan entre la multitud. Diseñado para el futuro, usado hoy.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#products"
                className="group inline-flex items-center bg-white text-black px-8 py-3 font-semibold tracking-wide text-sm uppercase transition-transform hover:translate-x-1 focus:outline-none"
              >
                Comprar Ahora
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a 
                href="#about"
                className="group inline-flex items-center bg-transparent border border-white text-white px-8 py-3 font-semibold tracking-wide text-sm uppercase transition-transform hover:translate-x-1 focus:outline-none"
              >
                Nuestra Historia
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative h-80 md:h-[500px] overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <img src="https://i.ibb.co/fRNgMyP/Sin-t-tulo-15-1.webp" alt="Imagen" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Optional decorative elements */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-gray-800 opacity-50 rotate-12"></div>
      <div className="absolute top-1/4 right-0 w-20 h-20 border border-gray-800 opacity-50 -rotate-12"></div>
    </section>
  );
};

export default Hero