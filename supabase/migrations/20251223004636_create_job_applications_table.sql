/*
  # Create Job Applications Table

  1. New Tables
    - `job_applications`
      - `id` (uuid, primary key)
      - `job_title` (text) - The position applied for
      - `full_name` (text) - Applicant's full name
      - `email` (text) - Applicant's email address
      - `phone` (text) - Applicant's phone number
      - `linkedin` (text, optional) - LinkedIn profile URL
      - `cv_url` (text) - Link to uploaded CV in storage
      - `cover_letter` (text, optional) - Cover letter or message
      - `created_at` (timestamptz) - Application submission date

  2. Security
    - Enable RLS on `job_applications` table
    - Only service role can read applications (for admin access)
    - Public can insert applications (to submit)
*/

CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_title text NOT NULL,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  linkedin text,
  cv_url text NOT NULL,
  cover_letter text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'job_applications' 
    AND policyname = 'Allow public to submit applications'
  ) THEN
    CREATE POLICY "Allow public to submit applications"
      ON job_applications
      FOR INSERT
      TO public
      WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'job_applications' 
    AND policyname = 'Service role can read applications'
  ) THEN
    CREATE POLICY "Service role can read applications"
      ON job_applications
      FOR SELECT
      TO service_role
      USING (true);
  END IF;
END $$;