import { useState, useEffect } from "react";
import { Instagram, Heart, MessageCircle, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

interface InstagramPost {
  id: string;
  image_url: string;
  caption: string;
  likes: number;
  comments: number;
  time_ago: string;
}

const InstagramFeed = () => {
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('instagram_posts')
          .select('*')
          .order('display_order', { ascending: true });

        if (error) throw error;
        setInstagramPosts(data || []);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

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
          {isLoading ? (
            // Loading skeleton
            Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-64 bg-muted"></div>
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                </div>
              </Card>
            ))
          ) : (
            instagramPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden hover:shadow-glow transition-all duration-500 bg-card/50 backdrop-blur-sm border border-primary/20">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image_url} 
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
                  <span>{post.time_ago}</span>
                </div>
              </div>
            </Card>
            ))
          )}
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