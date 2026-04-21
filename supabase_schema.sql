-- Supabase Cloud Schema (PostgreSQL)
-- Paste this into the "SQL Editor" in your Supabase Dashboard

-- 1. News Articles
CREATE TABLE IF NOT EXISTS news (
    id SERIAL PRIMARY KEY,
    date_label TEXT NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Team Members
CREATE TABLE IF NOT EXISTS team (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    designations TEXT,
    image_url TEXT,
    order_index INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Case Studies
CREATE TABLE IF NOT EXISTS case_studies (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    result TEXT,
    image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Enable Public Read Access (Optional based on your security preference)
-- Run these if you want anyone to see your news/team without needing a token
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Access" ON news FOR SELECT USING (true);

ALTER TABLE team ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Access" ON team FOR SELECT USING (true);

ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Access" ON case_studies FOR SELECT USING (true);

-- Insert Initial Seed Data (Optional)
INSERT INTO news (date_label, title, excerpt) VALUES 
('APR 2024', 'National Insurance Cut Realized', 'Employee Class 1 NICs have been reduced from 10% to 8%. Self-employed Class 4 NICs also dropped to 6%...'),
('MAR 2024', 'MTD for ITSA Roadmap Confirmed', 'HMRC confirms mandatory Making Tax Digital for income over £50k from April 2026.');
