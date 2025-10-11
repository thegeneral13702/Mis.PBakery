import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemCount, onCartClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-purple-900/30 w-full">
      <nav className="container mx-auto px-4 py-4 max-w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 flex-shrink min-w-0">
            <span className="text-2xl sm:text-3xl font-dancing-script bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent truncate">
              Mis. P Bakery
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-300 hover:text-purple-400 transition-colors"
            >
              <ShoppingCart size={24} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-300 hover:text-purple-400 transition-colors"
            >
              <ShoppingCart size={24} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-300 hover:text-purple-400 transition-colors py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left text-gray-300 hover:text-purple-400 transition-colors py-2"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-300 hover:text-purple-400 transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-300 hover:text-purple-400 transition-colors py-2"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
