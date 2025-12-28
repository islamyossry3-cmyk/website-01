/*
  # Create CV Storage Bucket

  1. New Storage Bucket
    - `cvs` bucket for storing candidate CVs and resumes
    - Public access disabled for privacy
    - Allowed file types: PDF, DOC, DOCX
    - Max file size: 5MB

  2. Security
    - Enable RLS on storage.objects
    - Allow public to upload CVs
    - Allow service role to read all CVs for processing
*/

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'cvs',
  'cvs',
  false,
  5242880,
  ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
)
ON CONFLICT (id) DO NOTHING;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Allow public CV uploads'
  ) THEN
    CREATE POLICY "Allow public CV uploads"
      ON storage.objects
      FOR INSERT
      TO public
      WITH CHECK (bucket_id = 'cvs');
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Allow service role to read CVs'
  ) THEN
    CREATE POLICY "Allow service role to read CVs"
      ON storage.objects
      FOR SELECT
      TO service_role
      USING (bucket_id = 'cvs');
  END IF;
END $$;