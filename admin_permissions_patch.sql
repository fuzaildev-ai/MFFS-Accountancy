-- 1. Create Testimonials Table (if you didn't run the first schema fully)
CREATE TABLE IF NOT EXISTS testimonials (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    comment TEXT NOT NULL,
    company TEXT,
    order_index INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. ENABLE FULL ADMIN PERMISSIONS (Solve the 'Create' bug)
-- These allow Authenticated Users (Admins) to Manage the data

-- NEWS Policies
CREATE POLICY "Admin All Access" ON news FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- TEAM Policies
CREATE POLICY "Admin All Access" ON team FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- CASE STUDIES Policies
CREATE POLICY "Admin All Access" ON case_studies FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- TESTIMONIALS Policies
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Access" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Admin All Access" ON testimonials FOR ALL TO authenticated USING (true) WITH CHECK (true);
