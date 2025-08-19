import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Info, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import blueAmbient from "@/assets/blue-filter-ambient.jpg";
import bluePure from "@/assets/blue-filter-pure.jpg";
import blueCafe from "@/assets/blue-filter-cafe.jpg";
import blueSparkling from "@/assets/blue-filter-sparkling.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Blue Ambient",
      slug: "blue-ambient",
      image: blueAmbient,
      description: "Sistema de filtración ambiental moderno con tecnología de membrana de ósmosis inversa. Puede eliminar virus, bacterias, gérmenes y hasta 3,500 contaminantes adicionales con una pureza de 0.0001μ, hasta 99.99% seguro para remover del agua.",
      features: ["Filtración de 5 etapas", "Fácil instalación", "Mantenimiento simple", "Autolimpieza automática"],
      price: "Consultar precio",
      popular: false
    },
    {
      id: 2,
      name: "Blue Pure",
      slug: "blue-pure",
      image: bluePure,
      description: "Sistema de purificación avanzada con tecnología de ósmosis inversa de última generación. Diseñado para eliminar hasta 99.99% de contaminantes, proporcionando agua ultra pura para el consumo diario.",
      features: ["Tecnología de ósmosis inversa", "Eliminación de contaminantes", "Agua ultra pura", "Monitor digital de calidad"],
      price: "Consultar precio",
      popular: true
    },
    {
      id: 3,
      name: "Blue Café",
      slug: "blue-cafe",
      image: blueCafe,
      description: "Sistema especializado para la preparación perfecta de café y bebidas calientes. Optimiza el contenido mineral del agua para realzar el sabor y aroma de cada taza.",
      features: ["Optimizado para café", "Control de minerales", "Sabor perfecto", "Compatible con máquinas espresso"],
      price: "Consultar precio",
      popular: false
    },
    {
      id: 4,
      name: "Blue Sparkling",
      slug: "blue-sparkling",
      image: blueSparkling,
      description: "Sistema innovador que produce agua carbonatada fresca y purificada al instante. Combina filtración avanzada con tecnología de carbonatación para burbujas perfectas.",
      features: ["Agua carbonatada", "Sistema integrado", "Burbujas perfectas", "Control de nivel de gas"],
      price: "Consultar precio",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Todos Nuestros Productos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explora toda la línea completa de sistemas de filtración Blue. 
            Cada producto está diseñado para satisfacer necesidades específicas y 
            proporcionar agua de la más alta calidad.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-water transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 shadow-crystal">
              <div className="relative overflow-hidden">
                {product.popular && (
                  <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Más Popular
                  </Badge>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {product.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <span className="font-semibold text-lg text-primary block">
                    {product.price}
                  </span>
                  <Link to={`/producto/${product.slug}`} className="block">
                    <Button className="btn-ocean w-full">
                      <Info className="w-4 h-4 mr-2" />
                      Ver Detalles
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-crystal p-12 rounded-lg text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            ¿Necesitas ayuda para elegir?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está aquí para ayudarte a encontrar 
            el sistema de filtración perfecto para tus necesidades específicas.
          </p>
          <Link to="/#contact">
            <Button size="lg" className="btn-ocean">
              Contactar Especialista
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;