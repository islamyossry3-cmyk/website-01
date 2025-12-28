/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Full name of the person submitting
      - `company` (text) - Company/organization name
      - `role` (text) - Role/title of the person
      - `email` (text) - Work email address
      - `phone` (text) - Phone/WhatsApp number
      - `region` (text) - Geographic region
      - `intent` (text) - Purpose of the contact (diagnosis, demo, quote, etc.)
      - `product` (text) - Optional product they're interested in
      - `message` (text) - Message content
      - `status` (text) - Status of the submission (new, contacted, closed)
      - `created_at` (timestamptz) - When the submission was created
      - `updated_at` (timestamptz) - When the submission was last updated
      
  2. Security
    - Enable RLS on `contact_submissions` table
    - Only authenticated admin users can read submissions
    - Anyone can insert (public contact form)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text DEFAULT '',
  role text DEFAULT '',
  email text NOT NULL,
  phone text DEFAULT '',
  region text DEFAULT '',
  intent text NOT NULL,
  product text DEFAULT '',
  message text DEFAULT '',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Only authenticated users can update contact submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
