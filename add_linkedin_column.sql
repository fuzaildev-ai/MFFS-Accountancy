-- Add LinkedIn URL column to the team table
ALTER TABLE team ADD COLUMN IF NOT EXISTS linkedin_url TEXT;
