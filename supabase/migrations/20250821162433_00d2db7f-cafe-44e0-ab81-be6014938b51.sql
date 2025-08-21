-- Create products table
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  features TEXT[] DEFAULT '{}',
  price TEXT DEFAULT 'Consultar precio',
  popular BOOLEAN DEFAULT false,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create instagram_posts table
CREATE TABLE public.instagram_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  image_url TEXT NOT NULL,
  caption TEXT NOT NULL,
  likes INTEGER DEFAULT 0,
  comments INTEGER DEFAULT 0,
  time_ago TEXT DEFAULT '1h',
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (RLS) for admin access only
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.instagram_posts ENABLE ROW LEVEL SECURITY;

-- Allow read access for everyone (public products and posts)
CREATE POLICY "Allow public read access to products" 
ON public.products 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public read access to instagram posts" 
ON public.instagram_posts 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_instagram_posts_updated_at
  BEFORE UPDATE ON public.instagram_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert existing products data
INSERT INTO public.products (name, slug, description, features, popular, image_url) VALUES
('Blue Ambient', 'blue-ambient', 'Sistema de filtración ambiental para uso doméstico diario', 
 ARRAY['Filtración de 5 etapas', 'Fácil instalación', 'Mantenimiento simple'], false, '/src/assets/blue-filter-ambient.jpg'),
('Blue Pure', 'blue-pure', 'Purificación avanzada para máxima calidad del agua', 
 ARRAY['Tecnología de ósmosis inversa', 'Eliminación de contaminantes', 'Agua ultra pura'], false, '/src/assets/blue-filter-pure.jpg'),
('Blue Café', 'blue-cafe', 'Especializado para preparación de café y bebidas calientes', 
 ARRAY['Optimizado para café', 'Control de minerales', 'Sabor perfecto'], false, '/src/assets/blue-filter-cafe.jpg'),
('Blue Infinity', 'blue-infinity', 'Agua con gas fresca y purificada al instante', 
 ARRAY['Agua carbonatada', 'Sistema integrado', 'Burbujas perfectas'], true, '/src/assets/blue-filter-sparkling.jpg');

-- Insert existing Instagram posts data
INSERT INTO public.instagram_posts (image_url, caption, likes, comments, time_ago, display_order) VALUES
('/src/assets/blue-filter-pure.jpg', '💧 Agua pura para toda la familia. Conocé nuestra línea Blue de filtros de agua #AguaEsVida #AguaPura', 127, 23, '2h', 1),
('/src/assets/blue-filter-cafe.jpg', '☕ El mejor café comienza con agua de calidad. Blue Café para los amantes del buen café #BlueSeriesFilter', 89, 15, '1d', 2),
('/src/assets/blue-filter-ambient.jpg', '🏠 Transformá tu hogar con agua cristalina. Blue Ambient te acompaña en cada momento #VidaSaludable', 156, 31, '2d', 3),
('/src/assets/blue-filter-sparkling.jpg', '✨ Agua con gas natural en tu casa. Blue Sparkling para los momentos especiales #AguaConGas #Lifestyle', 203, 42, '3d', 4);