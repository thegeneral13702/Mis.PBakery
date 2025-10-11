import { useState, useEffect } from 'react';
import { supabase, getSessionId } from '../lib/supabase';
import { CartItem, Product } from '../types';

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCartItems = async () => {
    const sessionId = getSessionId();
    const { data, error } = await supabase
      .from('cart_items')
      .select('*, product:products(*)')
      .eq('session_id', sessionId);

    if (error) {
      console.error('Error fetching cart items:', error);
    } else {
      setCartItems(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const addToCart = async (product: Product) => {
    const sessionId = getSessionId();

    const existingItem = cartItems.find(item => item.product_id === product.id);

    if (existingItem) {
      const { error } = await supabase
        .from('cart_items')
        .update({
          quantity: existingItem.quantity + 1,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingItem.id);

      if (error) {
        console.error('Error updating cart item:', error);
        return false;
      }
    } else {
      const { error } = await supabase
        .from('cart_items')
        .insert({
          session_id: sessionId,
          product_id: product.id,
          quantity: 1
        });

      if (error) {
        console.error('Error adding to cart:', error);
        return false;
      }
    }

    await fetchCartItems();
    return true;
  };

  const updateQuantity = async (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      return removeFromCart(itemId);
    }

    const { error } = await supabase
      .from('cart_items')
      .update({
        quantity,
        updated_at: new Date().toISOString()
      })
      .eq('id', itemId);

    if (error) {
      console.error('Error updating quantity:', error);
      return false;
    }

    await fetchCartItems();
    return true;
  };

  const removeFromCart = async (itemId: string) => {
    const { error } = await supabase
      .from('cart_items')
      .delete()
      .eq('id', itemId);

    if (error) {
      console.error('Error removing from cart:', error);
      return false;
    }

    await fetchCartItems();
    return true;
  };

  const clearCart = async () => {
    const sessionId = getSessionId();
    const { error } = await supabase
      .from('cart_items')
      .delete()
      .eq('session_id', sessionId);

    if (error) {
      console.error('Error clearing cart:', error);
      return false;
    }

    await fetchCartItems();
    return true;
  };

  const cartTotal = cartItems.reduce((sum, item) => {
    return sum + (item.product?.price || 0) * item.quantity;
  }, 0);

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return {
    cartItems,
    loading,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    cartItemCount,
    refreshCart: fetchCartItems
  };
}
