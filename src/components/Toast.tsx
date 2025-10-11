import { CheckCircle, X } from 'lucide-react';
import { useEffect } from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-24 right-4 z-50 animate-slide-in">
      <div className="bg-gradient-to-r from-purple-900 to-purple-800 border border-purple-600 rounded-lg shadow-lg shadow-purple-900/50 p-4 flex items-center space-x-3 min-w-[300px]">
        <CheckCircle className="text-green-400 flex-shrink-0" size={24} />
        <p className="text-white flex-1">{message}</p>
        <button
          onClick={onClose}
          className="text-gray-300 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
