import { Droplets, Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Productos",
      links: [
        { name: "Blue Ambient", href: "#" },
        { name: "Blue Pure", href: "#" },
        { name: "Blue Café", href: "#" },
        { name: "Blue Sparkling", href: "#" },
        { name: "Blue Infinity", href: "#" }
      ]
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nosotros", href: "#about" },
        { name: "Nuestro Equipo", href: "#" },
        { name: "Certificaciones", href: "#" },
        { name: "Testimonios", href: "#" }
      ]
    },
    {
      title: "Soporte",
      links: [
        { name: "Centro de Ayuda", href: "#" },
        { name: "Instalación", href: "#" },
        { name: "Mantenimiento", href: "#" },
        { name: "Garantías", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary to-primary-light text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Droplets className="w-10 h-10" />
              <span className="font-display font-bold text-2xl">Agua es Vida</span>
            </div>
            <p className="text-white/90 text-lg mb-6 leading-relaxed max-w-md">
              Filtra, toma y disfruta. Transformando vidas a través de agua pura 
              y sistemas de filtración de alta calidad.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/aguaesvida_py/" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="mailto:info@aguaesvida.com.py" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm">
            © {currentYear} Agua es Vida. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
              Términos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;