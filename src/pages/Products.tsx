import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <Link
            to="/"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Todos Nuestros Productos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explora toda la línea completa de sistemas de filtración Blue. Cada
            producto está diseñado para satisfacer necesidades específicas y
            proporcionar agua de la más alta calidad.
          </p>
        </div>

        {/* Products Grid - Use the same component as landing page */}
        <div className="mb-16">
          <ProductGrid />
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-crystal p-12 rounded-lg text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            ¿Necesitas ayuda para elegir?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está aquí para ayudarte a encontrar el
            sistema de filtración perfecto para tus necesidades específicas.
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
