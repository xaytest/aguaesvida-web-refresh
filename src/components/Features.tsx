import { Shield, Award, Wrench, Heart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Purificación Garantizada",
      description: "Eliminamos el 99.9% de contaminantes, bacterias y químicos nocivos para tu salud."
    },
    {
      icon: Award,
      title: "Calidad Certificada",
      description: "Productos certificados internacionalmente con los más altos estándares de calidad."
    },
    {
      icon: Wrench,
      title: "Fácil Mantenimiento",
      description: "Sistemas diseñados para un mantenimiento simple y económico."
    },
    {
      icon: Heart,
      title: "Salud y Bienestar",
      description: "Agua pura que cuida tu salud y la de tu familia todos los días."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            ¿Por qué elegir Agua es Vida?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprometidos con brindarte la mejor experiencia en filtración de agua
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto shadow-water group-hover:shadow-glow transition-shadow duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                {/* Ripple Effect */}
                <div className="absolute inset-0 w-20 h-20 bg-primary-glow rounded-full mx-auto opacity-0 group-hover:animate-ripple" />
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;