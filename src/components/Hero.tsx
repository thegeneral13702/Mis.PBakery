import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/WhatsApp Image 2025-10-09 at 10.43.41_e155a278.jpg')" }}
      ></div>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent animate-fade-in font-dancing-script">
          Decadent Delights
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Rise to the occasion with Our handcrafted artisan baked goods that seduce your senses.
        </p>
        <button
          onClick={scrollToProducts}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-900 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-900/50 animate-bounce"
        >
          Explore Our Collection
        </button>

        <button
          onClick={scrollToProducts}
          className="absolute bottom-0 transform animate-bounce cursor-pointer hover:text-purple-300 transition-colors"
          style={{ left: 'calc(50% - 2mm)' }}
          aria-label="Scroll to products"
        >
          <ChevronDown size={32} className="text-purple-400" />
        </button>
      </div>
    </section>
  );
}
