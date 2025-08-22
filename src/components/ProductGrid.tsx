import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Info, Star } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  features: string[];
  price: string;
  popular: boolean;
  image_url: string;
  show_on_landing: boolean;
  show_on_products_page: boolean;
}

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const isProductsPage = location.pathname === '/productos';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq(isProductsPage ? 'show_on_products_page' : 'show_on_landing', true)
          .order('created_at', { ascending: true });

        if (error) throw error;
        setProducts(data || []);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [isProductsPage]);

  if (isLoading) {
    return (
      <section id="products" className="py-20 bg-gradient-crystal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Serie Blue
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cargando productos...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-20 bg-gradient-crystal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Serie Blue
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra línea completa de sistemas de filtración diseñados
            para cada necesidad y estilo de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-water transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 shadow-crystal"
            >
              <div className="relative overflow-hidden">
                {product.popular && (
                  <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Más Popular
                  </Badge>
                )}
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-lg text-primary">
                    {product.price}
                  </span>
                  <Link to={`/producto/${product.slug}`}>
                    <Button size="sm" variant="ghost" className="btn-crystal">
                      <Info className="w-4 h-4 mr-2" />
                      Más Info
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!isProductsPage && (
          <div className="text-center mt-16">
            <Link to="/productos">
              <Button size="lg" className="btn-ocean">
                Ver Todos los Productos
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
