import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Features } from "./components/Features";
import { StarProducts } from "./components/StarProducts";
import { Solutions } from "./components/Solutions";
import { Categories } from "./components/Categories";
import { Projects } from "./components/Projects";
import { ScalableFeatures } from "./components/ScalableFeatures";
import { TailoredSolutions } from "./components/TailoredSolutions";
import { TrustSection } from "./components/TrustSection";
import { ProductShowcase } from "./components/ProductShowcase";
import { ProductCatalog } from "./components/ProductCatalog";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans antialiased bg-white text-gray-900 selection:bg-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <StarProducts />
        <Solutions />
        <Projects />
        <ScalableFeatures />
        <TailoredSolutions />
        <TrustSection />
        <ProductShowcase />
        <ProductCatalog />
        <Categories />
      </main>
      <Footer />
    </div>
  );
}