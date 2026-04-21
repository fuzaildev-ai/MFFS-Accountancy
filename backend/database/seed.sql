-- Seeding MFFS Database with current hardcoded content
USE mffs_cms;

-- 1. News Articles
INSERT INTO news (date_label, title, excerpt) VALUES 
('APR 2024', 'National Insurance Cut Realized', 'Employee Class 1 NICs have been reduced from 10% to 8%. Self-employed Class 4 NICs also dropped to 6%, increasing take-home pay for business owners.'),
('MAR 2024', 'MTD for ITSA Roadmap Confirmed', 'HMRC confirms mandatory Making Tax Digital for income over £50k from April 2026. MFFS is already preparing digital transition strategies.'),
('MAY 2024', 'Child Benefit Threshold Expansion', 'The High Income Child Benefit Charge threshold has increased to £60k. We are auditing client files to reclaim eligible benefits.'),
('APR 2024', 'Dividend Allowance Reduction', 'The tax-free dividend allowance was halved to £500. We recommend a full remuneration review for Limited Company directors.'),
('JAN 2025', 'Abolition of FHL Status', 'The Furnished Holiday Lettings tax regime will be abolished from April 2025. Landlords should review portfolio structures now.'),
('JUN 2024', 'British ISA Announcement', 'A new £5,000 allowance for UK-listed companies, on top of the standard £20,000 ISA. Strategic diversifications are advised.');

-- 2. Team Members
INSERT INTO team (name, role, designations, image_url, order_index) VALUES
('Faisal Feroz', 'Principal Director', 'MSC, ICPA, AFA, MIPA, ATA', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop', 1),
('Milda Feroz', 'Secretary & Operations', 'Corporate Compliance', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop', 2),
('Aerin Creer', 'Senior Tax Consultant', 'Self Assessment Expert', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop', 3),
('Sanlay', 'Assistant Accountant', 'VAT & Payroll Specialist', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop', 4);
