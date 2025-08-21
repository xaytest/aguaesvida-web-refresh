import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Eye, Clock, TrendingUp } from "lucide-react";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const AdminAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState({
    pageViews: 0,
    sessions: 0,
    users: 0,
    avgSessionDuration: "0:00",
    isLoaded: false
  });

  useEffect(() => {
    // Check if Google Analytics is loaded
    const checkAnalytics = () => {
      if (typeof window.gtag !== 'undefined') {
        setAnalyticsData(prev => ({ ...prev, isLoaded: true }));
        
        // Simulate fetching analytics data
        // In production, you would use Google Analytics Reporting API
        setTimeout(() => {
          setAnalyticsData({
            pageViews: 1247,
            sessions: 892,
            users: 634,
            avgSessionDuration: "2:34",
            isLoaded: true
          });
        }, 1500);
      }
    };

    checkAnalytics();
    
    // Check every second if gtag is loaded
    const interval = setInterval(() => {
      if (typeof window.gtag !== 'undefined') {
        checkAnalytics();
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const metrics = [
    {
      title: "Usuarios",
      value: analyticsData.users.toLocaleString(),
      icon: Users,
      description: "Usuarios únicos"
    },
    {
      title: "Vistas de página",
      value: analyticsData.pageViews.toLocaleString(),
      icon: Eye,
      description: "Total de vistas"
    },
    {
      title: "Sesiones",
      value: analyticsData.sessions.toLocaleString(),
      icon: TrendingUp,
      description: "Sesiones activas"
    },
    {
      title: "Duración promedio",
      value: analyticsData.avgSessionDuration,
      icon: Clock,
      description: "Tiempo en sitio"
    }
  ];

  if (!analyticsData.isLoaded) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-amber-500 text-amber-700">
            Cargando Google Analytics...
          </Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader className="pb-2">
                <div className="h-4 bg-muted rounded w-20"></div>
              </CardHeader>
              <CardContent>
                <div className="h-8 bg-muted rounded w-16 mb-2"></div>
                <div className="h-3 bg-muted rounded w-24"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Badge className="bg-green-500 text-white">
          Google Analytics Conectado
        </Badge>
        <span className="text-sm text-muted-foreground">ID: G-77VVVZ4FC7</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="hover:shadow-glow transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{metric.value}</div>
              <p className="text-xs text-muted-foreground">
                {metric.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Información de Integración</CardTitle>
          <CardDescription>
            Detalles sobre la configuración de Google Analytics
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <span className="font-medium">Estado:</span>
            <Badge className="bg-green-500 text-white">Activo</Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <span className="font-medium">ID de Medición:</span>
            <code className="text-sm bg-background px-2 py-1 rounded">G-77VVVZ4FC7</code>
          </div>
          <div className="text-sm text-muted-foreground mt-4">
            <p>• Los datos se actualizan cada 24 horas</p>
            <p>• Para acceder a datos en tiempo real, usa la API de Google Analytics</p>
            <p>• Los datos mostrados son simulados para demostración</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAnalytics;