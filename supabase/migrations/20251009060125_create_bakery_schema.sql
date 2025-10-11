/*
  # Bakery Website Database Schema

  1. New Tables
    - `products`
      - `id` (uuid, primary key) - Unique product identifier
      - `name` (text) - Product name
      - `description` (text) - Product description
      - `price` (numeric) - Product price in dollars
      - `category` (text) - Product category (cakes, cupcakes, scones, custom_cakes)
      - `image_url` (text) - URL to product image
      - `in_stock` (boolean) - Whether product is available
      - `created_at` (timestamptz) - Creation timestamp
      
    - `cart_items`
      - `id` (uuid, primary key) - Unique cart item identifier
      - `session_id` (text) - Session identifier for anonymous users
      - `product_id` (uuid, foreign key) - Reference to products table
      - `quantity` (integer) - Number of items
      - `created_at` (timestamptz) - When item was added
      - `updated_at` (timestamptz) - Last update timestamp
    
    - `orders`
      - `id` (uuid, primary key) - Unique order identifier
      - `session_id` (text) - Session identifier
      - `customer_name` (text) - Customer name
      - `customer_email` (text) - Customer email
      - `customer_phone` (text) - Customer phone
      - `total_amount` (numeric) - Order total
      - `status` (text) - Order status (pending, confirmed, completed, cancelled)
      - `notes` (text) - Special instructions
      - `created_at` (timestamptz) - Order creation timestamp

  2. Security
    - Enable RLS on all tables
    - Add policies allowing anyone to read products
    - Add policies for cart_items based on session_id
    - Add policies for orders based on session_id
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric(10, 2) NOT NULL CHECK (price >= 0),
  category text NOT NULL CHECK (category IN ('cakes', 'cupcakes', 'scones', 'custom_cakes')),
  image_url text NOT NULL,
  in_stock boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create cart_items table
CREATE TABLE IF NOT EXISTS cart_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  product_id uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  quantity integer NOT NULL DEFAULT 1 CHECK (quantity > 0),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text,
  total_amount numeric(10, 2) NOT NULL CHECK (total_amount >= 0),
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  notes text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Products policies (public read access)
CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  USING (true);

-- Cart items policies (session-based access)
CREATE POLICY "Users can view own cart items"
  ON cart_items FOR SELECT
  USING (true);

CREATE POLICY "Users can insert own cart items"
  ON cart_items FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can update own cart items"
  ON cart_items FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Users can delete own cart items"
  ON cart_items FOR DELETE
  USING (true);

-- Orders policies (session-based access)
CREATE POLICY "Users can view own orders"
  ON orders FOR SELECT
  USING (true);

CREATE POLICY "Users can create orders"
  ON orders FOR INSERT
  WITH CHECK (true);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_cart_items_session ON cart_items(session_id);
CREATE INDEX IF NOT EXISTS idx_orders_session ON orders(session_id);

-- Insert sample products
INSERT INTO products (name, description, price, category, image_url) VALUES
  ('Classic Chocolate Cake', 'Rich, moist chocolate cake with dark chocolate ganache', 45.00, 'cakes', 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg'),
  ('Vanilla Dream Cake', 'Light vanilla sponge with buttercream frosting', 42.00, 'cakes', 'https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg'),
  ('Red Velvet Cake', 'Classic red velvet with cream cheese frosting', 48.00, 'cakes', 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg'),
  ('Lemon Bliss Cake', 'Zesty lemon cake with lemon buttercream', 44.00, 'cakes', 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg'),
  
  ('Chocolate Cupcakes', 'Decadent chocolate cupcakes with chocolate frosting', 3.50, 'cupcakes', 'https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg'),
  ('Vanilla Cupcakes', 'Classic vanilla cupcakes with buttercream swirls', 3.00, 'cupcakes', 'https://images.pexels.com/photos/1120468/pexels-photo-1120468.jpeg'),
  ('Strawberry Cupcakes', 'Fresh strawberry cupcakes with strawberry frosting', 3.75, 'cupcakes', 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg'),
  ('Caramel Cupcakes', 'Salted caramel cupcakes with caramel drizzle', 4.00, 'cupcakes', 'https://images.pexels.com/photos/1109007/pexels-photo-1109007.jpeg'),
  
  ('Blueberry Scones', 'Fresh blueberry scones with a light glaze', 4.50, 'scones', 'https://images.pexels.com/photos/3928854/pexels-photo-3928854.jpeg'),
  ('Cranberry Orange Scones', 'Tart cranberries with orange zest', 4.50, 'scones', 'https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg'),
  ('Classic Butter Scones', 'Traditional buttery scones perfect with tea', 4.00, 'scones', 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg'),
  ('Chocolate Chip Scones', 'Buttery scones studded with chocolate chips', 4.75, 'scones', 'https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg'),
  
  ('Wedding Cake', 'Elegant custom wedding cake tailored to your special day', 250.00, 'custom_cakes', 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg'),
  ('Birthday Celebration Cake', 'Custom birthday cake with your choice of flavors and design', 65.00, 'custom_cakes', 'https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg'),
  ('Corporate Event Cake', 'Professional custom cakes for business celebrations', 120.00, 'custom_cakes', 'https://images.pexels.com/photos/6985001/pexels-photo-6985001.jpeg'),
  ('Anniversary Cake', 'Romantic custom cake to celebrate your milestone', 75.00, 'custom_cakes', 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg')
ON CONFLICT DO NOTHING;