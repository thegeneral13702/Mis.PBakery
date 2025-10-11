import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Loader2 } from 'lucide-react';

interface ProductSectionProps {
  onAddToCart: (product: Product) => void;
}

const categories = [
  { id: 'cakes', label: 'Cakes' },
  { id: 'cupcakes', label: 'Cupcakes' },
  { id: 'scones', label: 'Scones' },
  { id: 'custom_cakes', label: 'Custom Cakes' },
];

export function ProductSection({ onAddToCart }: ProductSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('cakes');
  const { products, loading } = useProducts(selectedCategory);

  return (
    <section id="products" className="min-h-screen py-20 px-4 bg-black flex items-center w-full overflow-x-hidden">
      <div className="container mx-auto max-w-7xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Our Collection
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our handcrafted selection of decadent treats, each baked with passion and the finest ingredients.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 max-w-full">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg shadow-purple-900/50'
                  : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white border border-purple-900/30'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="animate-spin text-purple-600" size={48} />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} onAddToCart={onAddToCart} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
