import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import solarLightImg from "../assets/27f73711b1c3be77cf50c8cc0f5b04b01e089b1b.png";

const products = [
  {
    id: 1,
    title: "Luminaria Solar Urbana 100W",
    category: "Alumbrado Público",
    image: solarLightImg,
    price: "Cotizar",
    tag: "Best Seller"
  },
  {
    id: 2,
    title: "Reflector Solar Jardín 50W",
    category: "Jardín & Exteriores",
    image: solarLightImg,
    price: "Cotizar",
    tag: "Nuevo"
  },
  {
    id: 3,
    title: "Poste Solar Integrado 200W",
    category: "Alta Potencia",
    image: solarLightImg,
    price: "Cotizar",
    tag: "Pro"
  }
];

export function Solutions() {
  return (
    <section className="py-24 bg-[#111111] text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h3 className="text-orange-500 font-bold tracking-widest text-sm mb-2 uppercase">Nuestras Soluciones</h3>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">Innovación en<br />Iluminación</h2>
          </div>
          <p className="text-gray-400 max-w-md mt-6 md:mt-0">
            Tecnología solar de última generación para alumbrado público, residencial y comercial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-[#1a1a1a] border border-gray-800 hover:border-gray-600 transition-colors duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="aspect-square w-full overflow-hidden relative bg-white/5">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4 bg-white text-black text-xs font-bold px-2 py-1 uppercase tracking-wider rounded-full z-10">
                  {product.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <p className="text-orange-500 text-xs font-bold tracking-wider uppercase mb-2">
                  {product.category}
                </p>
                <h3 className="text-2xl font-bold leading-tight mb-3 group-hover:text-white transition-colors">
                  {product.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Solución de iluminación solar de alta eficiencia con tecnología LED avanzada y panel fotovoltaico integrado.
                </p>

                <button className="inline-flex items-center gap-2 text-[#FF8351] hover:text-[#ff6a31] transition-colors text-xs font-bold uppercase tracking-wider group/btn">
                  Ver Detalles
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12">
          <div className="flex items-center justify-between">
            <div className="text-zinc-600 text-md">
              Descubre nuestra línea completa de productos
            </div>
            <button className="text-zinc-600 hover:text-zinc-400 font-bold text-sm uppercase tracking-wider transition-colors flex items-center gap-2 group">
              Ver Todo El Catálogo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
