/*
  # Create Images Storage Bucket

  1. New Storage Bucket
    - `images` bucket for storing uploaded images
    - Public access enabled for reading images
  
  2. Security
    - RLS policies for authenticated users to upload images
    - Public read access for all images
*/

INSERT INTO storage.buckets (id, name, public)
VALUES ('images', 'images', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Anyone can view images"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'images');

CREATE POLICY "Authenticated users can upload images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'images');

CREATE POLICY "Authenticated users can update their images"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'images' AND auth.uid() = owner)
  WITH CHECK (bucket_id = 'images' AND auth.uid() = owner);

CREATE POLICY "Authenticated users can delete their images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'images' AND auth.uid() = owner);