/*
-- SQL SCHEMA FOR SUPABASE --

-- Products table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  price DECIMAL NOT NULL,
  original_price DECIMAL,
  discount_badge TEXT,
  category TEXT DEFAULT 'TOP UP',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Transactions table
CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT NOT NULL, -- Game Account ID
  product_name TEXT NOT NULL,
  amount DECIMAL NOT NULL,
  payment_method TEXT NOT NULL,
  status TEXT DEFAULT 'pending', -- pending, processing, completed, rejected
  transaction_type TEXT DEFAULT 'topup', -- topup, bongkar
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sell requests (Bongkar)
CREATE TABLE sell_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT NOT NULL,
  amount_coin TEXT NOT NULL,
  estimated_price DECIMAL NOT NULL,
  transfer_method TEXT NOT NULL,
  recipient_number TEXT NOT NULL,
  recipient_name TEXT,
  proof_image TEXT, -- URL to storage
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Admin table (Simple Auth)
CREATE TABLE admins (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL, -- In production use hashed passwords
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Initial Data (TOP UP)
INSERT INTO products (name, price, is_active) VALUES
('150M Royal Dream', 9900, true),
('200M Royal Dream', 12900, true),
('300M Royal Dream', 19400, true),
('400M Royal Dream', 25800, true),
('500M Royal Dream', 32300, true),
('600M Royal Dream', 38800, true),
('700M Royal Dream', 45200, true),
('800M Royal Dream', 51700, true),
('900M Royal Dream', 58200, true),
('1B Royal Dream', 63650, true),
('1.5B Royal Dream', 95600, true),
('2B Royal Dream', 127400, true),
('3B Royal Dream', 191000, true),
('4B Royal Dream', 255000, true),
('5B Royal Dream', 318500, true),
('10B Royal Dream', 637000, true),
('15B Royal Dream', 955000, true),
('20B Royal Dream', 1274000, true),
('30B Royal Dream', 1910000, true),
('40B Royal Dream', 2546000, true),
('50B Royal Dream', 3130000, true),
('75B Royal Dream', 4700000, true);
*/
