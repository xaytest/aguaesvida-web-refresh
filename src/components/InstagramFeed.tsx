import { Instagram, Heart, MessageCircle, Send } from "lucide-react";
import { Card } from "@/components/ui/card";

const InstagramFeed = () => {
  const instagramPosts = [
    {
      id: 1,
      image: "/src/assets/instagram-post-1.jpg",
      caption: "💧 Comenzá tu día con agua pura! Nuestros filtros Blue garantizan agua de calidad para toda tu familia. #AguaEsVida #AguaPura #Paraguay #VidaSaludable",
      likes: 247,
      comments: 18,
      timeAgo: "3h",
      hashtags: ["#AguaEsVida", "#FiltroPurificador", "#Paraguay"]
    },
    {
      id: 2,
      image: "/src/assets/instagram-post-2.jpg", 
      caption: "☕ ¿Sabías que el 98% del café es agua? Por eso es tan importante usar agua filtrada para preparar tu café perfecto. Blue Café - El secreto de un buen café ☕✨",
      likes: 189,
      comments: 25,
      timeAgo: "1d",
      hashtags: ["#BlueCafe", "#CafeConAguaPura", "#AguaFiltrada"]
    },
    {
      id: 3,
      image: "/src/assets/blue-filter-ambient.jpg",
      caption: "🏠 Transformá tu hogar con Blue Ambient. Agua cristalina directo de la canilla, sin botellas plásticas. Cuidamos el medio ambiente y tu salud 🌱💚",
      likes: 156,
      comments: 31,
      timeAgo: "2d",
      hashtags: ["#BlueAmbient", "#EcoFriendly", "#SinPlasticos"]
    },
    {
      id: 4,
      image: "/src/assets/instagram-post-4.jpg",
      caption: "✨ Agua con gas natural en casa! Blue Sparkling te da la frescura que necesitás en cualquier momento. Perfecta para acompañar tus comidas 🥤",
      likes: 203,
      comments: 42,
      timeAgo: "3d",
      hashtags: ["#BlueSparkling", "#AguaConGas", "#Frescura"]
    },
    {
      id: 5,
      image: "/src/assets/instagram-post-5.jpg",
      caption: "🧪 Tecnología de última generación en filtración. Nuestros sistemas Blue eliminan el 99.9% de impurezas del agua. Ciencia al servicio de tu bienestar 🔬",
      likes: 134,
      comments: 19,
      timeAgo: "4d",
      hashtags: ["#TecnologiaBlue", "#FiltracionAvanzada", "#CienciaYSalud"]
    },
    {
      id: 6,
      image: "/src/assets/blue-filter-pure.jpg",
      caption: "💎 Blue Pure: La pureza que tu familia merece. Instalación gratuita y garantía de por vida. Llamanos al 0981-123456 para más información 📞",
      likes: 278,
      comments: 56,
      timeAgo: "5d",
      hashtags: ["#BluePure", "#InstalacionGratis", "#GarantiaDeVida"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-display font-bold bg-gradient-ocean bg-clip-text text-transparent">
              Seguinos en Instagram
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubrí las últimas novedades, consejos sobre agua pura y conocé más sobre nuestros productos
          </p>
          <a 
            href="https://www.instagram.com/aguaesvida_py/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
            @aguaesvida_py
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((post) => (
            <a 
              key={post.id} 
              href="https://www.instagram.com/aguaesvida_py/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
            <Card className="group overflow-hidden hover:shadow-glow transition-all duration-500 bg-card/50 backdrop-blur-sm border border-primary/20 h-full">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt="Instagram post de Agua es Vida"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Instagram overlay icons */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="w-6 h-6 text-white drop-shadow-lg" />
                </div>
                
                {/* Post stats overlay */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-4 text-white">
                    <div className="flex items-center gap-1">
                      <Heart className="w-5 h-5 fill-current" />
                      <span className="font-semibold">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-semibold">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-sm text-foreground/80 mb-3 line-clamp-4 flex-1">
                  {post.caption}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <span>{post.timeAgo}</span>
                </div>
              </div>
            </Card>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.instagram.com/aguaesvida_py/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-primary-foreground rounded-full hover:shadow-water transition-all duration-300 hover:scale-105 font-semibold"
          >
            Ver más en Instagram
            <Send className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;