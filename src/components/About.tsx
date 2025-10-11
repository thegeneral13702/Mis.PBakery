import { Heart, Award, Clock } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="min-h-screen py-20 px-4 bg-gradient-to-b from-black to-purple-950 flex items-center w-full overflow-x-hidden">
      <div className="container mx-auto max-w-6xl w-full">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            About Mis. P
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Where elegance meets indulgence. We craft extraordinary baked goods that blur the line between art and dessert.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div
            className={`bg-gradient-to-br from-gray-900 to-black border border-purple-900/30 rounded-xl p-8 text-center hover:border-purple-600 transition-all duration-500 hover:transform hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-purple-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Crafted with Passion</h3>
            <p className="text-gray-400">
              Every creation is made with love and attention to detail, using only the finest ingredients.
            </p>
          </div>

          <div
            className={`bg-gradient-to-br from-gray-900 to-black border border-purple-900/30 rounded-xl p-8 text-center hover:border-purple-600 transition-all duration-500 hover:transform hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-purple-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Certificate in baking and pastry</h3>
            <p className="text-gray-400">
            Trained and recognized as a proffessional in artisan baking and Tapestry.
            </p>
          </div>

          <div
            className={`bg-gradient-to-br from-gray-900 to-black border border-purple-900/30 rounded-xl p-8 text-center hover:border-purple-600 transition-all duration-500 hover:transform hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-purple-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Fresh Daily </h3>
            <p className="text-gray-400">
              Baked fresh upon your order to ensure the highest quality and taste in every bite.
            </p>
          </div>
        </div>

        <div
          className={`bg-gradient-to-br from-purple-950 to-black border border-purple-900/30 rounded-2xl p-8 md:p-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Mis. P's Bakery was born from a vision to create something extraordinary. We believe that desserts should be an experience, not just a treat. Our master bakers combine traditional techniques with modern innovation to create confections that are as beautiful as they are delicious.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From our signature dark chocolate creations to our delicate pastries, every item is crafted to perfection. We take pride in sourcing premium ingredients and supporting local suppliers, ensuring that every bite tells a story of quality and care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
