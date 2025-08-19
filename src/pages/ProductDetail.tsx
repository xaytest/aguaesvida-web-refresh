import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Droplet, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import blueAmbient from "@/assets/blue-filter-ambient.jpg";
import bluePure from "@/assets/blue-filter-pure.jpg";
import blueCafe from "@/assets/blue-filter-cafe.jpg";
import blueSparkling from "@/assets/blue-filter-sparkling.jpg";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();

  const products = {
    "blue-ambient": {
      id: 1,
      name: "Blue Ambient",
      image: blueAmbient,
      description: "Sistema de filtración ambiental moderno con tecnología de membrana de ósmosis inversa. Puede eliminar virus, bacterias, gérmenes y hasta 3,500 contaminantes adicionales con una pureza de 0.0001μ, hasta 99.99% seguro para remover del agua.",
      features: [
        "Aumento de presión para máximo rendimiento / 1 litro por minuto",
        "Cambio de filtro fácil",
        "Autolimpieza automática / 96 h",
        "Control táctil con sensor",
        "Sin conexión posterior",
        "Seguridad Aqua-Stop"
      ],
      specifications: {
        dimensions: "B 22 cm x T 42 cm x H 42 cm",
        electricalPower: "20 W/h",
        tankVolume: "5 ltr",
        weight: "8 kg"
      },
      popular: false
    },
    "blue-pure": {
      id: 2,
      name: "Blue Pure",
      image: bluePure,
      description: "Sistema de purificación avanzada con tecnología de ósmosis inversa de última generación. Diseñado para eliminar hasta 99.99% de contaminantes, proporcionando agua ultra pura para el consumo diario.",
      features: [
        "Tecnología de ósmosis inversa avanzada",
        "Eliminación de contaminantes al 99.99%",
        "Sistema de filtración de 7 etapas",
        "Monitor digital de calidad del agua",
        "Autolimpieza programable",
        "Certificación internacional de calidad"
      ],
      specifications: {
        dimensions: "B 25 cm x T 45 cm x H 45 cm",
        electricalPower: "25 W/h",
        tankVolume: "7 ltr",
        weight: "10 kg"
      },
      popular: true
    },
    "blue-cafe": {
      id: 3,
      name: "Blue Café",
      image: blueCafe,
      description: "Sistema especializado para la preparación perfecta de café y bebidas calientes. Optimiza el contenido mineral del agua para realzar el sabor y aroma de cada taza.",
      features: [
        "Optimización específica para café",
        "Control preciso de minerales",
        "Temperatura ideal del agua",
        "Filtración especializada para sabor",
        "Sistema de calentamiento rápido",
        "Compatible con máquinas espresso"
      ],
      specifications: {
        dimensions: "B 20 cm x T 40 cm x H 38 cm",
        electricalPower: "30 W/h",
        tankVolume: "4 ltr",
        weight: "7 kg"
      },
      popular: false
    },
    "blue-sparkling": {
      id: 4,
      name: "Blue Sparkling",
      image: blueSparkling,
      description: "Sistema innovador que produce agua carbonatada fresca y purificada al instante. Combina filtración avanzada con tecnología de carbonatación para burbujas perfectas.",
      features: [
        "Agua carbonatada instantánea",
        "Sistema integrado de CO2",
        "Burbujas perfectas y duraderas",
        "Filtración previa a carbonatación",
        "Control de nivel de gas",
        "Diseño compacto y elegante"
      ],
      specifications: {
        dimensions: "B 24 cm x T 43 cm x H 46 cm",
        electricalPower: "35 W/h",
        tankVolume: "6 ltr",
        weight: "12 kg"
      },
      popular: false
    }
  };

  const product = productId ? products[productId as keyof typeof products] : null;

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
            <Link to="/">
              <Button>Volver al inicio</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <Link to="/#products" className="hover:text-primary transition-colors">
            Productos
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg shadow-water"
            />
            <p className="text-xs text-muted-foreground mt-4 text-center">
              La imagen puede diferir del producto entregado.
            </p>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-display text-4xl font-bold text-foreground mb-4">
                {product.name.toUpperCase()}
              </h1>
              {product.popular && (
                <Badge className="mb-4">
                  Más Popular
                </Badge>
              )}
            </div>

            {/* Description */}
            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <p className="text-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-crystal p-4 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Características:</h3>
                <ul className="space-y-2">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-muted-foreground">
                      <Droplet className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Dimensiones:</h3>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Droplet className="w-4 h-4 text-primary mr-2" />
                    {product.specifications.dimensions}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Potencia eléctrica:</h3>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Droplet className="w-4 h-4 text-primary mr-2" />
                    {product.specifications.electricalPower}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Volumen del tanque:</h3>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Droplet className="w-4 h-4 text-primary mr-2" />
                    {product.specifications.tankVolume}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Peso:</h3>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Droplet className="w-4 h-4 text-primary mr-2" />
                    {product.specifications.weight}
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div className="bg-gradient-crystal p-4 rounded-lg">
              <h3 className="font-semibold text-foreground mb-3">Características adicionales:</h3>
              <ul className="space-y-2">
                {product.features.slice(3).map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-muted-foreground">
                    <Droplet className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Button */}
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
              <Button size="lg" className="btn-ocean w-full">
                <Mail className="w-5 h-5 mr-2" />
                Contactarnos
              </Button>
            </div>

            {/* Back Button */}
            <Link to="/#products">
              <Button variant="ghost" className="btn-crystal">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Volver a productos
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;