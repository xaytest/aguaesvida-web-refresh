import { Instagram, Heart, MessageCircle, Send } from "lucide-react";
import { Card } from "@/components/ui/card";

const InstagramFeed = () => {
  const instagramPosts = [
    {
      id: 1,
      image: "/src/assets/blue-filter-pure.jpg",
      caption: "💧 Agua pura para toda la familia. Conocé nuestra línea Blue de filtros de agua #AguaEsVida #AguaPura",
      likes: 127,
      comments: 23,
      timeAgo: "2h"
    },
    {
      id: 2,
      image: "/src/assets/blue-filter-cafe.jpg", 
      caption: "☕ El mejor café comienza con agua de calidad. Blue Café para los amantes del buen café #BlueSeriesFilter",
      likes: 89,
      comments: 15,
      timeAgo: "1d"
    },
    {
      id: 3,
      image: "/src/assets/blue-filter-ambient.jpg",
      caption: "🏠 Transformá tu hogar con agua cristalina. Blue Ambient te acompaña en cada momento #VidaSaludable",
      likes: 156,
      comments: 31,
      timeAgo: "2d"
    },
    {
      id: 4,
      image: "/src/assets/blue-filter-sparkling.jpg",
      caption: "✨ Agua con gas natural en tu casa. Blue Sparkling para los momentos especiales #AguaConGas #Lifestyle",
      likes: 203,
      comments: 42,
      timeAgo: "3d"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instagramPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden hover:shadow-glow transition-all duration-500 bg-card/50 backdrop-blur-sm border border-primary/20">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt="Instagram post"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Instagram overlay icons */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="w-6 h-6 text-white drop-shadow-lg" />
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-sm text-foreground/80 mb-3 line-clamp-3">
                  {post.caption}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
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