import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductGrid: React.FC = () => {
  return (
    <section id="products" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tighter text-white mb-4">COLLECTION 0.01 </h2>
          <p className="text-white opacity-70 max-w-lg mx-auto">
          Diseños con actitud para los que no se esconden. Cada prenda dice algo, y lo dice fuerte.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;