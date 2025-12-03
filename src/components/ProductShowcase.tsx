import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import streetLightImg from "figma:asset/4d67e3c68b5c294e16fc312a84617be5fdde3a3c.png";
import ufoLightImg from "figma:asset/073c99c3eaee2dcfdbe11165e914a0604d80ca1a.png";

const categories = [
  { name: "Alumbrado Público", count: 12 },
  { name: "Iluminación Solar", count: 8 },
  { name: "High Bay LED", count: 15 },
  { name: "Proyectores", count: 6 },
];

const products = [
  {
    id: 1,
    name: "OPP-NSL-ECO-40W",
    category: "Street Solar LED",
    comment: "Eficiencia energética",
    image: streetLightImg,
    description: "40W LED solar street luminaire with integrated monocrystalline solar cell and Lumileds Philips 5030 2D LED source.",
    specs: ["40W", "5000K", "IP65", "L70>50,000hrs"],
  },
  {
    id: 2,
    name: "OPPUS-HB-100W-MV",
    category: "UFO High Bay",
    comment: "Alta potencia industrial",
    image: ufoLightImg,
    description: "High-Efficiency LED Luminaire for industrial applications with 170 LM/W performance.",
    specs: ["100W", "5000K", "IP65", "170LM/W"],
  },
  {
    id: 3,
    name: "OPP-NSL-PRO-60W",
    category: "Street Solar LED",
    comment: "Tecnología avanzada",
    image: streetLightImg,
    description: "Professional grade 60W LED solar street luminaire with advanced MPPT controller.",
    specs: ["60W", "5000K", "IP66", "L70>60,000hrs"],
  },
  {
    id: 4,
    name: "OPPUS-HB-150W-MV",
    category: "UFO High Bay",
    comment: "Máximo rendimiento",
    image: ufoLightImg,
    description: "Heavy-duty LED High Bay designed for warehouses and large industrial spaces.",
    specs: ["150W", "4000K", "IP65", "170LM/W"],
  },
  {
    id: 5,
    name: "OPP-NSL-ECO-80W",
    category: "Street Solar LED",
    comment: "Autonomía extendida",
    image: streetLightImg,
    description: "80W solar street light with extended battery autonomy and smart control system.",
    specs: ["80W", "5000K", "IP65", "3-Day Autonomy"],
  },
  {
    id: 6,
    name: "OPPUS-HB-200W-MV",
    category: "UFO High Bay",
    comment: "Disipación superior",
    image: ufoLightImg,
    description: "200W high-efficiency industrial LED with superior heat dissipation design.",
    specs: ["200W", "5000K", "IP65", "L80>80,000hrs"],
  },
  {
    id: 7,
    name: "OPP-NSL-MAX-120W",
    category: "Street Solar LED",
    comment: "Máxima performance",
    image: streetLightImg,
    description: "Maximum performance 120W LED solar street luminaire for demanding projects.",
    specs: ["120W", "5000K", "IP66", "L70>70,000hrs"],
  },
];

export function ProductShowcase() {
  return (
    <section id="productos" className="py-32 bg-white">
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
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative bg-white cursor-pointer"
                >
                  {/* Product Image Container */}
                  <div className="relative aspect-square bg-zinc-50 flex items-end justify-center overflow-hidden">
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

                      <button className="bg-[#FF8351] hover:bg-[#ff6a31] text-white px-8 py-3 font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 transition-all">
                        Ver detalles
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="pt-4 flex items-end justify-between">
                    <p className="text-[11px] text-zinc-900 uppercase tracking-wide">
                      {product.name}
                    </p>
                    <p className="text-[9px] text-zinc-400 uppercase tracking-wider">
                      {product.comment}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* See All Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: products.length * 0.08 }}
                className="group relative bg-[#FF8351] cursor-pointer flex items-center justify-center aspect-square hover:bg-[#ff6a31] transition-all duration-300"
              >
                <div className="text-center p-8">
                  <h3 className="text-white font-black text-4xl mb-6 tracking-tight leading-none">
                    Ver toda
                    <br />
                    la colección
                  </h3>
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white text-black group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}