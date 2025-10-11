import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function Contact() {
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
    <section id="contact" ref={sectionRef} className="min-h-screen py-20 px-4 bg-black flex items-center w-full overflow-x-hidden">
      <div className="container mx-auto max-w-6xl w-full">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or want to place a custom order? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-900/30 rounded-xl p-6 hover:border-purple-600 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Location</h3>
                  <p className="text-gray-400">
                    35 Georgia crescent<br />
                    Cosmo city
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-900/30 rounded-xl p-6 hover:border-purple-600 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-gray-400">083 574 8634</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-900/30 rounded-xl p-6 hover:border-purple-600 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-gray-400">23MisP@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-900/30 rounded-xl p-6 hover:border-purple-600 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Hours</h3>
                  <div className="text-gray-400 space-y-1">
                    <p>Monday - Friday: 7am - 8pm</p>
                    <p>Saturday: 8am - 9pm</p>
                    <p>Sunday: 9am - 6pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <form className="bg-gradient-to-br from-gray-900 to-black border border-purple-900/30 rounded-xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-black border border-purple-900/30 rounded-lg text-white focus:border-purple-600 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-black border border-purple-900/30 rounded-lg text-white focus:border-purple-600 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-purple-900/30 rounded-lg text-white focus:border-purple-600 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your inquiry or custom order..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg shadow-purple-900/50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
