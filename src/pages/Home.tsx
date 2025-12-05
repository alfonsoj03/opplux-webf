import { Hero } from "../components/Hero";
import { Marquee } from "../components/Marquee";
import { Features } from "../components/Features";
import { StarProducts } from "../components/StarProducts";
import { Solutions } from "../components/Solutions";
import { Categories } from "../components/Categories";
import { Projects } from "../components/Projects";
import { ScalableFeatures } from "../components/ScalableFeatures";
import { TailoredSolutions } from "../components/TailoredSolutions";
import { TrustSection } from "../components/TrustSection";
import { ProductCatalog } from "@/components/ProductCatalog";
import { OurProducts } from "@/components/OurProducts";

export function Home() {
    return (
        <>
            <Hero />
            <Marquee />
            <Features />
            <Solutions />
            <Projects />
            {/*<StarProducts />*/}
            <ScalableFeatures />
            <TailoredSolutions />
            {/*<TrustSection />*/}
            {/*Our Products */}
            <Categories />
        </>
    );
}
