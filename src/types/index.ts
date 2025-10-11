export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'cakes' | 'cupcakes' | 'scones' | 'custom_cakes';
  image_url: string;
  in_stock: boolean;
  created_at: string;
}

export interface CartItem {
  id: string;
  session_id: string;
  product_id: string;
  quantity: number;
  created_at: string;
  updated_at: string;
  product?: Product;
}

export interface Order {
  id: string;
  session_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  total_amount: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  created_at: string;
}
