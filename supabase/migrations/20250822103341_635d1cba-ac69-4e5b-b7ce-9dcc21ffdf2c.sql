-- Add visibility control columns to products table
ALTER TABLE public.products 
ADD COLUMN show_on_landing boolean DEFAULT true,
ADD COLUMN show_on_products_page boolean DEFAULT true;

-- Add visibility control column to instagram_posts table  
ALTER TABLE public.instagram_posts
ADD COLUMN show_on_landing boolean DEFAULT true;