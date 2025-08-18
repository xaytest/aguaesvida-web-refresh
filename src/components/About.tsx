import { Button } from "@/components/ui/button";
import { Quote, Users, Trophy, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <Quote className="w-12 h-12 text-primary mb-4" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Pasión por el agua pura
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                La salud comienza con agua limpia. En Agua es Vida, creemos que cada 
                persona merece acceso a agua pura y segura.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ahora es el momento adecuado para tomar una buena decisión. 
                Nuestros sistemas de filtración Blue Series transforman el agua 
                común en una experiencia extraordinaria de pureza y sabor.
              </p>
            </div>

            <Button size="lg" className="btn-ocean">
              Conoce Nuestra Historia
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-effect rounded-2xl p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">10,000+</div>
              <div className="text-muted-foreground">Familias Satisfechas</div>
            </div>

            <div className="glass-effect rounded-2xl p-6 text-center">
              <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">15+</div>
              <div className="text-muted-foreground">Años de Experiencia</div>
            </div>

            <div className="glass-effect rounded-2xl p-6 text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">Paraguay</div>
              <div className="text-muted-foreground">Cobertura Nacional</div>
            </div>

            <div className="glass-effect rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">99.9%</span>
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">Pureza</div>
              <div className="text-muted-foreground">Garantizada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;