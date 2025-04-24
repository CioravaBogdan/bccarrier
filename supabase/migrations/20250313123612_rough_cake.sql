/*
  # Initial Schema Setup for BC Carrier

  1. New Tables
    - `contacts`
      - Stores contact form submissions
      - Fields for name, email, message, status
    - `quotes`
      - Stores transportation quote requests
      - Fields for customer details, route info, cargo details
    - `customers`
      - Stores customer information
      - Fields for company details, contact info
    - `orders`
      - Stores transportation orders
      - Links to customers, includes route and cargo details
    - `vehicles`
      - Stores fleet information
      - Details about each truck including type, capacity

  2. Security
    - Enable RLS on all tables
    - Policies for staff to manage all data
    - Policies for customers to view their own data
*/

-- Contacts table for form submissions
CREATE TABLE contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  handled_by uuid REFERENCES auth.users,
  handled_at timestamptz
);

-- Quotes table for transportation quote requests
CREATE TABLE quotes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  customer_name text NOT NULL,
  company_name text,
  email text NOT NULL,
  phone text,
  origin text NOT NULL,
  destination text NOT NULL,
  cargo_type text NOT NULL,
  weight numeric,
  volume numeric,
  preferred_date date,
  status text DEFAULT 'pending',
  notes text
);

-- Customers table
CREATE TABLE customers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  company_name text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL UNIQUE,
  phone text,
  address text,
  country text,
  tax_id text,
  status text DEFAULT 'active'
);

-- Orders table
CREATE TABLE orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  customer_id uuid REFERENCES customers(id),
  quote_id uuid REFERENCES quotes(id),
  origin text NOT NULL,
  destination text NOT NULL,
  cargo_type text NOT NULL,
  weight numeric,
  volume numeric,
  pickup_date date,
  delivery_date date,
  status text DEFAULT 'scheduled',
  vehicle_id uuid,
  notes text
);

-- Vehicles table
CREATE TABLE vehicles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  vehicle_type text NOT NULL,
  plate_number text UNIQUE NOT NULL,
  capacity_weight numeric,
  capacity_volume numeric,
  year integer,
  status text DEFAULT 'active'
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Staff can manage contacts"
  ON contacts
  TO authenticated
  USING (auth.jwt() ->> 'email' LIKE '%@bccarrier.com');

CREATE POLICY "Staff can manage quotes"
  ON quotes
  TO authenticated
  USING (auth.jwt() ->> 'email' LIKE '%@bccarrier.com');

CREATE POLICY "Staff can manage customers"
  ON customers
  TO authenticated
  USING (auth.jwt() ->> 'email' LIKE '%@bccarrier.com');

CREATE POLICY "Staff can manage orders"
  ON orders
  TO authenticated
  USING (auth.jwt() ->> 'email' LIKE '%@bccarrier.com');

CREATE POLICY "Staff can manage vehicles"
  ON vehicles
  TO authenticated
  USING (auth.jwt() ->> 'email' LIKE '%@bccarrier.com');

-- Customers can view their own orders
CREATE POLICY "Customers can view their orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (customer_id IN (
    SELECT id FROM customers 
    WHERE email = auth.jwt() ->> 'email'
  ));