import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import streetLightImg from "../assets/street-light.png";
import ufoLightImg from "../assets/ufo-light.png";
import bannerImg from "../assets/product-section-banner-3.jpg";
import placeholderImage from "@/assets/street-light.png";

const categories = [
  { name: "Alumbrado Público", count: 12 },
  { name: "Iluminación Solar", count: 8 },
  { name: "High Bay LED", count: 15 },
  { name: "Proyectores", count: 6 },
];

const productsByCategory = [
  {
    category: "Alumbrado Público",
    products: [
      {
        id: 1,
        name: "OPP-NSL-ECO-40W",
        comment: "Eficiencia energética",
        image: streetLightImg,
        watts: 40,
        lumens: 5200,
        description: "40W LED solar street luminaire with integrated monocrystalline solar cell and Lumileds Philips 5030 2D LED source.",
        specs: ["40W", "5000K", "IP65", "L70>50,000hrs"],
      },
      {
        id: 2,
        name: "OPP-NSL-PRO-60W",
        comment: "Tecnología avanzada",
        image: streetLightImg,
        watts: 60,
        lumens: 7800,
        description: "Professional grade 60W LED solar street luminaire with advanced MPPT controller.",
        specs: ["60W", "5000K", "IP66", "L70>60,000hrs"],
      },
      {
        id: 3,
        name: "OPP-NSL-ECO-80W",
        comment: "Autonomía extendida",
        image: streetLightImg,
        watts: 80,
        lumens: 10400,
        description: "80W solar street light with extended battery autonomy and smart control system.",
        specs: ["80W", "5000K", "IP65", "3-Day Autonomy"],
      },
      {
        id: 4,
        name: "OPP-NSL-MAX-120W",
        comment: "Máxima performance",
        image: streetLightImg,
        watts: 120,
        lumens: 15600,
        description: "Maximum performance 120W LED solar street luminaire for demanding projects.",
        specs: ["120W", "5000K", "IP66", "L70>70,000hrs"],
      },
    ]
  },
  {
    category: "High Bay LED",
    products: [
      {
        id: 5,
        name: "OPPUS-HB-100W-MV",
        comment: "Alta potencia industrial",
        image: ufoLightImg,
        watts: 100,
        lumens: 17000,
        description: "High-Efficiency LED Luminaire for industrial applications with 170 LM/W performance.",
        specs: ["100W", "5000K", "IP65", "170LM/W"],
      },
      {
        id: 6,
        name: "OPPUS-HB-150W-MV",
        comment: "Máximo rendimiento",
        image: ufoLightImg,
        watts: 150,
        lumens: 25500,
        description: "Heavy-duty LED High Bay designed for warehouses and large industrial spaces.",
        specs: ["150W", "4000K", "IP65", "170LM/W"],
      },
      {
        id: 7,
        name: "OPPUS-HB-200W-MV",
        comment: "Disipación superior",
        image: ufoLightImg,
        watts: 200,
        lumens: 34000,
        description: "200W high-efficiency industrial LED with superior heat dissipation design.",
        specs: ["200W", "5000K", "IP65", "L80>80,000hrs"],
      },
      {
        id: 8,
        name: "OPPUS-HB-250W-MV",
        comment: "Potencia extrema",
        image: ufoLightImg,
        watts: 250,
        lumens: 42500,
        description: "250W industrial LED luminaire with extreme power output for large facilities.",
        specs: ["250W", "5000K", "IP65", "170LM/W"],
      },
    ]
  },
  {
    category: "Iluminación Solar",
    products: [
      {
        id: 9,
        name: "OPP-SOLAR-30W",
        comment: "Compacto y eficiente",
        image: streetLightImg,
        watts: 30,
        lumens: 3900,
        description: "Compact 30W solar LED luminaire ideal for residential areas and pathways.",
        specs: ["30W", "4000K", "IP65", "L70>40,000hrs"],
      },
      {
        id: 10,
        name: "OPP-SOLAR-50W",
        comment: "Rendimiento óptimo",
        image: streetLightImg,
        watts: 50,
        lumens: 6500,
        description: "50W solar LED with optimized panel configuration for maximum energy harvest.",
        specs: ["50W", "5000K", "IP65", "L70>50,000hrs"],
      },
      {
        id: 11,
        name: "OPP-SOLAR-100W",
        comment: "Alta capacidad",
        image: streetLightImg,
        watts: 100,
        lumens: 13000,
        description: "High-capacity 100W solar luminaire with intelligent battery management.",
        specs: ["100W", "5000K", "IP66", "L70>60,000hrs"],
      },
      {
        id: 12,
        name: "OPP-SOLAR-150W",
        comment: "Máxima autonomía",
        image: streetLightImg,
        watts: 150,
        lumens: 19500,
        description: "150W solar LED with extended autonomy for critical infrastructure lighting.",
        specs: ["150W", "5000K", "IP66", "5-Day Autonomy"],
      },
    ]
  },
  {
    category: "Proyectores",
    products: [
      {
        id: 13,
        name: "OPP-FLOOD-50W",
        comment: "Versatilidad total",
        image: ufoLightImg,
        watts: 50,
        lumens: 6500,
        description: "50W LED floodlight with adjustable mounting for versatile applications.",
        specs: ["50W", "4000K", "IP65", "Wide Beam"],
      },
      {
        id: 14,
        name: "OPP-FLOOD-100W",
        comment: "Iluminación potente",
        image: ufoLightImg,
        watts: 100,
        lumens: 13000,
        description: "100W high-power LED floodlight for large outdoor areas and sports facilities.",
        specs: ["100W", "5000K", "IP66", "150°Beam"],
      },
      {
        id: 15,
        name: "OPP-FLOOD-200W",
        comment: "Máxima cobertura",
        image: ufoLightImg,
        watts: 200,
        lumens: 26000,
        description: "200W professional floodlight with maximum coverage for stadiums and large venues.",
        specs: ["200W", "5000K", "IP66", "L80>70,000hrs"],
      },
      {
        id: 16,
        name: "OPP-FLOOD-300W",
        comment: "Potencia industrial",
        image: ufoLightImg,
        watts: 300,
        lumens: 39000,
        description: "300W industrial-grade floodlight for demanding commercial applications.",
        specs: ["300W", "5000K", "IP67", "180°Beam"],
      },
    ]
  },
];

// Datos de ejemplo para el producto
const productData = {
  category: "BRACKETS",
  title: "HIGHBAY VAL BRACKET 63W-83",
  seriesTitle: "RDX",
  seriesSubtitle: "ROUND MAX SERIES",
  description: "Luminaria high-bay diseñada para iluminación interior de gran altura. Perfecta para aplicaciones industriales como refinerías, almacenes, muelles de carga, plantas de manufactura y centros de distribución. Ofrece alta eficiencia luminosa y durabilidad excepcional en entornos exigentes con techos altos.",
  previousModel: "PEL-K",
  image: placeholderImage,
  versions: [
    { id: "1", name: "BRACKET 63W-83", gtin: "4096854203689" },
    { id: "2", name: "BRACKET 63W-85", gtin: "4096854203690" },
    { id: "3", name: "BRACKET 63W-87", gtin: "4096854203691" },
  ],
  specifications: [
    { label: "Potencia del LED", value: "40W" },
    { label: "Potencia Panel Solar", value: "70W" },
    { label: "Batería", value: "Litio Ferro-fosfato 40AH" },
    { label: "Flujo Luminoso Máximo", value: "6800 Lm" },
    { label: "Eficiencia", value: "170 Lm/W" },
    { label: "Dist. Lumínica", value: "IES II L Simétrica" },
    { label: "Horas de Vida", value: "100,000 Horas" },
    { label: "Control", value: "100/30 Configurable 2.4Ghz" },
    { label: "Tiempo de Carga", value: "4-5 Horas" },
    { label: "Tiempo de Autonomía", value: "2-3 días nublados" },
    { label: "Tipo de Cargador", value: "MPPT" },
    { label: "Instalación", value: "En brazo o punta de poste" },
    { label: "Altura Recom.", value: "4-5m (20-30ft interposta)" },
    { label: "Peso Neto/Total", value: "8Kg/10Kg" },
  ],
  technicalDescription: [
    "Luminaria solar LED de 40W para alumbrado público, con panel monocristalino integrado y autonomía superior a 3 días. Equipada con LED Philips 3030 2D (170 lm/W, certificación L70 para 100,000 horas) y lente de policarbonato (pérdida de luz <9%). Incluye batería LiFePO4 (garantía de 3 años) y controlador MPPT con 99% de eficiencia (>2,500 ciclos).",
    "Ideal para carreteras, parques, autopistas y zonas costeras. Ofrece programación personalizada, soporte de ingeniería (archivos IES/Dialux) y adaptabilidad para montaje en poste. Fabricada en policarbonato e integra una fotocélula solar para mayor durabilidad.",
  ],
  technicalImages: [
    {
      title: "Dimensiones (mm)",
      image: "https://images.unsplash.com/photo-1764737734436-7eb904d3a4ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      title: "Diseño",
      image: "https://images.unsplash.com/photo-1740660281156-435ce0cc1aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      title: "Curva de Distribución",
      image: "https://images.unsplash.com/photo-1717501217912-933d2792d493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      title: "Certificaciones",
      image: "https://images.unsplash.com/photo-1730692504752-c411cf0306ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
  ],
};

export function ProductShowcase() {
  return (
    <section id="productos" className="bg-white">
      {/* Banner Hero Section - Just the image */}
      <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        {/* Background Image */}
        <img
          src={bannerImg}
          alt="Productos"
          className="absolute inset-0 w-full h-full object-cover"
        />

      </div>

      {/* Title and Breadcrumb - Outside the banner */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 mt-8"
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-zinc-500 text-xs uppercase tracking-widest">
            <span>Inicio</span>
            <span className="text-[#FF8351]">/</span>
            <span className="text-[#FF8351]">Productos</span>
          </div>
        </motion.div>
      </div>

      {/* Existing Content */}
      <div className="pt-6 pb-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Sidebar */}
            <aside className="lg:w-72 flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-12">
                  <h2 className="text-6xl font-black tracking-tight text-black leading-none mb-6">
                    Nueva
                    <br />
                    colección
                  </h2>
                  <div className="h-1 w-16 bg-[#FF8351] mb-6"></div>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Descubre las últimas soluciones en iluminación LED para proyectos comerciales e industriales.
                  </p>
                </div>

                <div className="space-y-1">
                  {categories.map((category, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="w-full flex items-center justify-between text-left py-2 hover:text-[#FF8351] transition-colors group"
                    >
                      <span className="text-base text-zinc-900 group-hover:text-[#FF8351] transition-all">
                        {category.name}
                      </span>
                      <span className="text-black font-bold text-sm">
                        {category.count}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productsByCategory.map((categoryGroup, categoryIndex) => (
                  <Fragment key={`category-group-${categoryIndex}`}>
                    {/* Category Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
                      className="group relative bg-[#FF8351] cursor-pointer flex items-center justify-center aspect-square hover:bg-[#ff6a31] transition-all duration-300"
                    >
                      <div className="text-center p-8">
                        <h3 className="text-white font-black text-3xl tracking-tight leading-tight">
                          {categoryGroup.category}
                        </h3>
                        <div className="mt-6 inline-flex items-center justify-center w-12 h-12 bg-white text-black group-hover:scale-110 transition-transform">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Category Products */}
                    {categoryGroup.products.map((product, productIndex) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (categoryIndex * 0.15) + ((productIndex + 1) * 0.08) }}
                        className="group relative bg-white cursor-pointer"
                      >
                        {/* Product Image Container */}
                        <div className="relative aspect-square bg-zinc-50 flex items-end justify-center overflow-hidden">

                          {/* Technical Specs Badges - Top Left */}
                          <div className="absolute inset-0 pointer-events-none">
                            {/* Key specs at top left */}
                            <div className="absolute top-4 left-4 flex gap-2">
                              <div className="bg-black/80 backdrop-blur-sm px-3 py-1.5 border-l-2 border-[#FF8351]">
                                <span className="text-white text-xs font-bold">
                                  {product.specs[0]}
                                </span>
                              </div>
                              <div className="bg-black/80 backdrop-blur-sm px-3 py-1.5 border-l-2 border-[#FF8351]">
                                <span className="text-white text-xs font-bold">
                                  {product.specs[1]}
                                </span>
                              </div>
                            </div>
                          </div>

                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-[180%] h-[180%] object-contain object-bottom drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                          />

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-white">
                            <p className="text-xs leading-relaxed text-center mb-4 text-white/90">
                              {product.description}
                            </p>

                            <div className="flex flex-wrap gap-2 justify-center mb-5">
                              {product.specs.map((spec, i) => (
                                <span
                                  key={i}
                                  className="text-[10px] font-bold bg-white/20 px-2.5 py-1"
                                >
                                  {spec}
                                </span>
                              ))}
                            </div>

                            <Link
                              to={`/producto/${product.id}`}
                              className="bg-[#FF8351] hover:bg-[#ff6a31] text-white px-8 py-3 font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 transition-all"
                            >
                              Ver detalles
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="pt-2 flex items-end justify-between">
                          <p className="text-[11px] text-zinc-900 uppercase tracking-wide">
                            {product.name}
                          </p>
                          <p className="text-[9px] text-zinc-400 uppercase tracking-wider">
                            {product.comment}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}