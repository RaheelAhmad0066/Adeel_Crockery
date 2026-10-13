-- =======================================================================
-- EARTHWARE CROCKERY STORE & ADMIN DATABASE SCHEMA (SUPABASE SQL)
-- Run this script in your Supabase SQL Editor:
-- Dashboard -> SQL Editor -> New Query -> Run
-- =======================================================================

-- 1. CATEGORIES TABLE (Navbar Mega-Menu & Filters)
CREATE TABLE IF NOT EXISTS categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  status TEXT DEFAULT 'Active',
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. SUBCATEGORIES TABLE
CREATE TABLE IF NOT EXISTS subcategories (
  id BIGSERIAL PRIMARY KEY,
  category_id TEXT REFERENCES categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. PRODUCTS TABLE (Inventory, Pricing in PKR, Placements)
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  subcategory TEXT DEFAULT 'General',
  price NUMERIC NOT NULL DEFAULT 100,
  cost_price NUMERIC DEFAULT 60,
  stock INT DEFAULT 10,
  sku TEXT,
  image TEXT NOT NULL,
  show_on_home_categories BOOLEAN DEFAULT FALSE,
  show_on_home_featured BOOLEAN DEFAULT FALSE,
  status TEXT DEFAULT 'In Stock',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. HERO BANNERS TABLE (Home Multi-Slide CMS)
CREATE TABLE IF NOT EXISTS hero_banners (
  id TEXT PRIMARY KEY,
  headline TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  cta_text TEXT DEFAULT 'Buy Now',
  cta_link TEXT DEFAULT '#products',
  image TEXT NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. ORDERS TABLE (Foodpanda-style Live Delivery Tracker)
CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  customer TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT DEFAULT 'Lahore',
  items JSONB NOT NULL DEFAULT '[]'::jsonb,
  items_count INT DEFAULT 1,
  total NUMERIC NOT NULL,
  status TEXT DEFAULT 'Pending',
  payment_method TEXT DEFAULT 'Cash on Delivery',
  payment_status TEXT DEFAULT 'Unpaid',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. SERVICES TABLE (/service)
CREATE TABLE IF NOT EXISTS services (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT,
  status TEXT DEFAULT 'Published',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. SERVICE INQUIRIES TABLE (B2B Leads)
CREATE TABLE IF NOT EXISTS service_inquiries (
  id TEXT PRIMARY KEY,
  client TEXT NOT NULL,
  service TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  units INT DEFAULT 1,
  budget TEXT,
  status TEXT DEFAULT 'New Inquiry',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. ARTICLES TABLE (/news)
CREATE TABLE IF NOT EXISTS articles (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  category TEXT DEFAULT 'Ceramic Art',
  tags TEXT[] DEFAULT ARRAY[]::TEXT[],
  date TEXT,
  views TEXT DEFAULT '0',
  status TEXT DEFAULT 'Published',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ENABLE ROW LEVEL SECURITY (RLS) & PUBLIC READ/WRITE ACCESS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE subcategories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE hero_banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Allow Public Full Access Policies (Anon Key)
CREATE POLICY "Public Read Categories" ON categories FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read Subcategories" ON subcategories FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read Products" ON products FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read Hero Banners" ON hero_banners FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read Orders" ON orders FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read Services" ON services FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read Service Inquiries" ON service_inquiries FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Read Articles" ON articles FOR ALL USING (true) WITH CHECK (true);

-- =======================================================================
-- INITIAL SEED DATA INSERTION
-- =======================================================================

-- Seed Navbar Categories
INSERT INTO categories (id, name, slug, status, sort_order) VALUES
  ('cat-crockery', 'Crockery', 'crockery', 'Active', 1),
  ('cat-new-arrivals', 'New Arrivals', 'new-arrivals', 'Active', 2),
  ('cat-silverware', 'Silverware', 'silverware', 'Active', 3),
  ('cat-copperware', 'Copperware', 'copperware', 'Active', 4),
  ('cat-brass-ware', 'Brass Ware', 'brass-ware', 'Active', 5),
  ('cat-serveware', 'Serveware', 'serveware', 'Active', 6),
  ('cat-casserole-dish', 'Casserole Dish', 'casserole-dish', 'Active', 7),
  ('cat-home-decor', 'Home Decor', 'home-decor', 'Active', 8),
  ('cat-bathroom-set', 'Bathroom Set', 'bathroom-set', 'Active', 9)
ON CONFLICT (id) DO NOTHING;

-- Seed Subcategories
INSERT INTO subcategories (category_id, name, slug) VALUES
  ('cat-crockery', 'Plate sets', 'plate-sets'),
  ('cat-crockery', 'Tea cups and Saucers', 'tea-cups-and-saucers'),
  ('cat-crockery', '2-Tier & 3-Tier', '2-tier-3-tier'),
  ('cat-crockery', 'Dessert Set', 'dessert-set'),
  ('cat-crockery', 'Cutlery', 'cutlery'),
  ('cat-crockery', 'Cake Stand', 'cake-stand'),
  ('cat-crockery', 'Cake Lifter', 'cake-lifter'),
  ('cat-crockery', 'Mugs', 'mugs'),
  ('cat-crockery', 'Trays', 'trays'),
  ('cat-crockery', 'Glass and water set', 'glass-and-water-set'),
  ('cat-crockery', 'Jars', 'jars'),
  ('cat-crockery', 'GlassLock Storage Containers', 'glasslock-containers'),
  ('cat-silverware', 'Silver Bowl', 'silver-bowl'),
  ('cat-silverware', 'Silver Platters', 'silver-platters'),
  ('cat-silverware', 'Chafing Dish', 'chafing-dish'),
  ('cat-brass-ware', 'Brass Ware', 'brass-ware'),
  ('cat-brass-ware', 'Brass Serving / Thaal', 'brass-serving-thaal'),
  ('cat-brass-ware', 'Brass Chafing Dish', 'brass-chafing-dish'),
  ('cat-home-decor', 'Candle stands', 'candle-stands'),
  ('cat-home-decor', 'Accessories', 'accessories'),
  ('cat-home-decor', 'Planters', 'planters'),
  ('cat-home-decor', 'Table mats/ placemats', 'table-mats-placemats')
ON CONFLICT DO NOTHING;

-- Seed Initial Products
INSERT INTO products (id, name, category, subcategory, price, cost_price, stock, sku, image, show_on_home_categories, show_on_home_featured, status) VALUES
  ('PROD-001', 'River Vase', 'Home Decor', 'Accessories', 100, 65, 24, 'EW-RV-01', '/assets/images/cat-river-vase.png', TRUE, FALSE, 'In Stock'),
  ('PROD-002', 'Ripple Vase', 'Home Decor', 'Planters', 100, 70, 18, 'EW-RP-02', '/assets/images/cat-ripple-vase.png', TRUE, FALSE, 'In Stock'),
  ('PROD-003', 'Bulb Vase', 'Home Decor', 'Planters', 100, 60, 12, 'EW-BV-03', '/assets/images/cat-bulb-vase.png', TRUE, FALSE, 'In Stock'),
  ('PROD-004', 'Glass Bowl Premium', 'Crockery', 'Glass and water set', 100, 58, 15, 'EW-GB-04', '/assets/images/cat-glass-bowl-1.png', TRUE, FALSE, 'In Stock'),
  ('PROD-005', 'Glass Bowl Wide', 'Crockery', 'Glass and water set', 100, 60, 9, 'EW-GB-05', '/assets/images/cat-glass-bowl-2.png', TRUE, FALSE, 'In Stock'),
  ('PROD-006', 'Box Deal B-Stock ASA (Set 1)', 'Crockery', 'Plate sets', 32999, 22000, 7, 'EW-BX-01', '/assets/images/prod-1.png', FALSE, TRUE, 'In Stock'),
  ('PROD-007', 'Box Deal B-Stock ASA (Set 2)', 'Crockery', 'Plate sets', 32999, 22000, 5, 'EW-BX-02', '/assets/images/prod-2.png', FALSE, TRUE, 'In Stock'),
  ('PROD-008', 'Box Deal B-Stock ASA (Set 3)', 'Crockery', 'Plate sets', 32999, 22000, 3, 'EW-BX-03', '/assets/images/prod-3.png', FALSE, TRUE, 'Low Stock'),
  ('PROD-009', 'Box Deal B-Stock ASA (Set 4)', 'Crockery', 'Plate sets', 32999, 22000, 11, 'EW-BX-04', '/assets/images/prod-4.png', FALSE, TRUE, 'In Stock')
ON CONFLICT (id) DO NOTHING;

-- Seed Hero Banners
INSERT INTO hero_banners (id, headline, subtitle, cta_text, cta_link, image, is_active, sort_order) VALUES
  ('slide-1', 'Feel it, Feel the Uniqueness.', 'Is filament of the highest quality that we are proud to offer our customers.', 'Buy Now', '#products', '/assets/images/hero-pot.png', TRUE, 1),
  ('slide-2', 'Artisan Terracotta Craftsmanship', 'Hand-thrown earthen clay dining sets crafted by master pottery artisans.', 'Explore Shop', '/shop', '/assets/images/prod-1.png', FALSE, 2)
ON CONFLICT (id) DO NOTHING;

