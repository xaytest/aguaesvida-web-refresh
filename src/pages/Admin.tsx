import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Package, Instagram, Shield, Home } from "lucide-react";
import AdminAnalytics from "@/components/admin/AdminAnalytics";
import AdminProducts from "@/components/admin/AdminProducts";
import AdminInstagram from "@/components/admin/AdminInstagram";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-crystal">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-display font-bold bg-gradient-ocean bg-clip-text text-transparent">
              Panel de Administración
            </h1>
          </div>
          <Button 
            onClick={() => navigate('/')} 
            variant="outline" 
            className="flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Volver al Inicio
          </Button>
        </div>

        <Tabs defaultValue="analytics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="products" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Productos
            </TabsTrigger>
            <TabsTrigger value="instagram" className="flex items-center gap-2">
              <Instagram className="w-4 h-4" />
              Instagram
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Google Analytics
                </CardTitle>
                <CardDescription>
                  Estadísticas de tráfico y comportamiento de usuarios
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AdminAnalytics />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Gestión de Productos
                </CardTitle>
                <CardDescription>
                  Administra los productos de la Serie Blue
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AdminProducts />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="instagram" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Instagram className="w-5 h-5" />
                  Posts de Instagram
                </CardTitle>
                <CardDescription>
                  Gestiona los posts que aparecen en la página principal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AdminInstagram />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;