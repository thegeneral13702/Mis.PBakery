import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductSection } from './components/ProductSection';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { Toast } from './components/Toast';
import { useCart } from './hooks/useCart';
import { Product } from './types';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    cartTotal,
    cartItemCount,
  } = useCart();

  const handleAddToCart = async (product: Product) => {
    const success = await addToCart(product);
    if (success) {
      setToastMessage(`${product.name} added to cart!`);
    }
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden w-full">
      <Header cartItemCount={cartItemCount} onCartClick={() => setIsCartOpen(true)} />
      <Hero />
      <ProductSection onAddToCart={handleAddToCart} />
      <About />
      <Contact />
      <Footer />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        cartTotal={cartTotal}
      />
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </div>
  );
}

export default App;
