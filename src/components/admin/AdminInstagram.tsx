import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Plus, Edit, Trash2, Instagram, Heart, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface InstagramPost {
  id: string;
  image_url: string;
  caption: string;
  likes: number;
  comments: number;
  time_ago: string;
  display_order: number;
  show_on_landing: boolean;
}

const AdminInstagram = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingPost, setEditingPost] = useState<InstagramPost | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    image_url: "",
    caption: "",
    likes: 0,
    comments: 0,
    time_ago: "1h",
    display_order: 0,
    show_on_landing: true
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('instagram_posts')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudieron cargar los posts",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingPost) {
        const { error } = await supabase
          .from('instagram_posts')
          .update(formData)
          .eq('id', editingPost.id);
        
        if (error) throw error;
        
        toast({
          title: "Post actualizado",
          description: "El post se actualizó correctamente"
        });
      } else {
        const { error } = await supabase
          .from('instagram_posts')
          .insert(formData);
        
        if (error) throw error;
        
        toast({
          title: "Post creado",
          description: "El post se creó correctamente"
        });
      }

      fetchPosts();
      resetForm();
      setIsDialogOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo guardar el post",
        variant: "destructive"
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("¿Estás seguro de que quieres eliminar este post?")) return;

    try {
      const { error } = await supabase
        .from('instagram_posts')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      
      fetchPosts();
      toast({
        title: "Post eliminado",
        description: "El post se eliminó correctamente"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo eliminar el post",
        variant: "destructive"
      });
    }
  };

  const resetForm = () => {
    setFormData({
      image_url: "",
      caption: "",
      likes: 0,
      comments: 0,
      time_ago: "1h",
      display_order: posts.length + 1,
      show_on_landing: true
    });
    setEditingPost(null);
  };

  const openEditDialog = (post: InstagramPost) => {
    setEditingPost(post);
    setFormData({
      image_url: post.image_url,
      caption: post.caption,
      likes: post.likes,
      comments: post.comments,
      time_ago: post.time_ago,
      display_order: post.display_order,
      show_on_landing: post.show_on_landing
    });
    setIsDialogOpen(true);
  };

  if (isLoading) {
    return <div className="flex items-center justify-center py-8">Cargando posts...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Posts de Instagram ({posts.length})</h3>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm} className="btn-ocean">
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Post
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingPost ? "Editar Post" : "Nuevo Post"}
              </DialogTitle>
              <DialogDescription>
                Completa la información del post de Instagram
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="image_url">URL de Imagen</Label>
                <Input
                  id="image_url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  placeholder="/src/assets/post-image.jpg"
                  required
                />
              </div>
              <div>
                <Label htmlFor="caption">Caption</Label>
                <Textarea
                  id="caption"
                  value={formData.caption}
                  onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
                  placeholder="💧 Descripción del post con hashtags #AguaEsVida"
                  required
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="likes">Likes</Label>
                  <Input
                    id="likes"
                    type="number"
                    value={formData.likes}
                    onChange={(e) => setFormData({ ...formData, likes: parseInt(e.target.value) || 0 })}
                  />
                </div>
                <div>
                  <Label htmlFor="comments">Comentarios</Label>
                  <Input
                    id="comments"
                    type="number"
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: parseInt(e.target.value) || 0 })}
                  />
                </div>
                <div>
                  <Label htmlFor="time_ago">Tiempo</Label>
                  <Input
                    id="time_ago"
                    value={formData.time_ago}
                    onChange={(e) => setFormData({ ...formData, time_ago: e.target.value })}
                    placeholder="2h, 1d, 3d"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="display_order">Orden de visualización</Label>
                  <Input
                    id="display_order"
                    type="number"
                    value={formData.display_order}
                    onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
                  />
                </div>
                <div className="flex items-center space-x-2 pt-6">
                  <Switch
                    id="show_on_landing"
                    checked={formData.show_on_landing}
                    onCheckedChange={(checked) => setFormData({ ...formData, show_on_landing: checked })}
                  />
                  <Label htmlFor="show_on_landing">Mostrar en página de inicio</Label>
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit" className="btn-ocean">
                  {editingPost ? "Actualizar" : "Crear"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-glow transition-shadow duration-300">
            <div className="relative">
              {post.image_url && (
                <img 
                  src={post.image_url} 
                  alt="Instagram post preview"
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="absolute top-2 right-2 bg-black/60 rounded-full p-1">
                <Instagram className="w-4 h-4 text-white" />
              </div>
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-sm">Post #{post.display_order}</CardTitle>
                <div className="flex gap-1">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openEditDialog(post)}
                  >
                    <Edit className="w-3 h-3" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(post.id)}
                    className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-muted-foreground mb-3 line-clamp-3">
                {post.caption}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    <span>{post.comments}</span>
                  </div>
                </div>
                <span>{post.time_ago}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminInstagram;