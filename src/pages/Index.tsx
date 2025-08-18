import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductGrid from "@/components/ProductGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <ProductGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
