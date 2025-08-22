-- Add RLS policies for products table to allow admin operations
CREATE POLICY "Allow public insert on products" 
ON public.products 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public update on products" 
ON public.products 
FOR UPDATE 
USING (true);

CREATE POLICY "Allow public delete on products" 
ON public.products 
FOR DELETE 
USING (true);

-- Add RLS policies for instagram_posts table to allow admin operations
CREATE POLICY "Allow public insert on instagram_posts" 
ON public.instagram_posts 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public update on instagram_posts" 
ON public.instagram_posts 
FOR UPDATE 
USING (true);

CREATE POLICY "Allow public delete on instagram_posts" 
ON public.instagram_posts 
FOR DELETE 
USING (true);