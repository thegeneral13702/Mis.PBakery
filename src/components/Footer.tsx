import { Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-purple-900/30 py-12 px-4 w-full overflow-x-hidden">
      <div className="container mx-auto max-w-6xl w-full">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Mis. P Bakery
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Where elegance meets indulgence. Extraordinary baked goods that blur the line between art and dessert.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-purple-900/30 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Facebook size={20} className="text-purple-400 hover:text-white" />
              </a>
              <a
                href="https://www.instagram.com/mis.pbakery?igsh=bGM1eXpwMmxzbWhl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="w-10 h-10 bg-purple-900/30 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Instagram size={20} className="text-purple-400 hover:text-white" />
              </a>
              <a
                href="https://www.tiktok.com/@mis.p.bakery?_t=ZS-90QPuijjj7p&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our TikTok page"
                className="w-10 h-10 bg-purple-900/30 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-purple-400 hover:text-white"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-900/30 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Mis P's Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
