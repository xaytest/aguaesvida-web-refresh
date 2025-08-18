import { Button } from "@/components/ui/button";
import { ArrowDown, Droplets } from "lucide-react";
import waterSplashHero from "@/assets/water-splash-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${waterSplashHero})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary-light/60 to-transparent" />
      
      {/* Floating Water Drops Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Droplets 
            key={i}
            className={`absolute text-white/20 water-drop`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              '--delay': `${i * 0.5}s`
            } as React.CSSProperties}
            size={24 + i * 4}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            AGUA
            <span className="block text-primary-glow">ES VIDA</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 font-light tracking-wide">
            filtra, tomar y disfruta
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
            La salud comienza con agua limpia. Sistemas avanzados de filtración 
            que transforman cada gota en una experiencia pura y revitalizante.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="btn-ocean text-lg px-8 py-6">
              Explorar Productos
            </Button>
            <Button size="lg" variant="ghost" className="btn-crystal text-lg px-8 py-6">
              Conocer Más
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white/70" size={32} />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;