import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  cartTotal: number;
}

export function Cart({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  cartTotal,
}: CartProps) {
  if (!isOpen) return null;

  const tax = cartTotal * 0.08;
  const total = cartTotal + tax;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      ></div>

      <div className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-gradient-to-b from-gray-900 to-black border-l border-purple-900/30 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out overflow-hidden flex flex-col">
        <div className="p-6 border-b border-purple-900/30 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 bg-purple-900/20 rounded-full flex items-center justify-center mb-4">
                <Trash2 size={48} className="text-purple-600/50" />
              </div>
              <p className="text-gray-400 text-lg mb-2">Your cart is empty</p>
              <p className="text-gray-500 text-sm">Add some delicious treats to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-black/50 border border-purple-900/30 rounded-lg p-4 hover:border-purple-600/50 transition-colors"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.product?.image_url}
                      alt={item.product?.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">
                        {item.product?.name}
                      </h3>
                      <p className="text-purple-400 font-bold">
                        ${item.product?.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-3 bg-gray-800 rounded-lg p-1">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-700 rounded transition-colors"
                      >
                        <Minus size={16} className="text-white" />
                      </button>
                      <span className="text-white font-semibold w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-700 rounded transition-colors"
                      >
                        <Plus size={16} className="text-white" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-purple-900/30 bg-black/80">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-white text-xl font-bold pt-2 border-t border-purple-900/30">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg shadow-purple-900/50">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
