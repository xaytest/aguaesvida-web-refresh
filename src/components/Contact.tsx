import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+595 21 123 456", "+595 981 234 567"],
      description: "Llámanos para consultas inmediatas"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@aguaesvida.com.py", "ventas@aguaesvida.com.py"],
      description: "Escríbenos tus consultas"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      details: ["Asunción, Paraguay"],
      description: "Visita nuestras oficinas"
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lun - Vie: 8:00 - 18:00", "Sáb: 8:00 - 12:00"],
      description: "Horarios de atención"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-crystal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Listo para mejorar la calidad de tu agua? Estamos aquí para ayudarte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-crystal border-0">
            <CardHeader>
              <CardTitle className="font-display text-2xl text-foreground">
                Solicita tu Cotización
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Nombre
                  </label>
                  <Input placeholder="Tu nombre completo" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Teléfono
                  </label>
                  <Input placeholder="Tu número de teléfono" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input type="email" placeholder="tu@email.com" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Producto de Interés
                </label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                  <option>Selecciona un producto</option>
                  <option>Blue Ambient</option>
                  <option>Blue Pure</option>
                  <option>Blue Café</option>
                  <option>Blue Sparkling</option>
                  <option>Blue Infinity</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Mensaje
                </label>
                <Textarea 
                  placeholder="Cuéntanos más sobre tus necesidades..."
                  rows={4}
                />
              </div>

              <Button className="btn-ocean w-full" size="lg">
                Enviar Consulta
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-crystal border-0 hover:shadow-water transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-ocean rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-1">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        {info.description}
                      </p>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-foreground font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;