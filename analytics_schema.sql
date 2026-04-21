-- 1. Page Views Tracking
CREATE TABLE IF NOT EXISTS page_views (
    id SERIAL PRIMARY KEY,
    path TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Leads Tracking (Contact Conversions)
CREATE TABLE IF NOT EXISTS leads (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    type TEXT, -- 'contact', 'quote', etc.
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Permissions
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Public can INSERT (needed for visitor tracking)
CREATE POLICY "Public Append Views" ON page_views FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Append Leads" ON leads FOR INSERT WITH CHECK (true);

-- Admin can READ
CREATE POLICY "Admin Read Views" ON page_views FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admin Read Leads" ON leads FOR SELECT TO authenticated USING (true);
