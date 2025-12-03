import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import solarLightImg from "figma:asset/27f73711b1c3be77cf50c8cc0f5b04b01e089b1b.png";

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
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">Innovación en<br/>Iluminación</h2>
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
              className="group relative bg-[#1a1a1a] border border-gray-800 hover:border-gray-600 transition-colors duration-300 overflow-hidden rounded-[2rem]"
            >
              {/* Image Container */}
              <div className="aspect-[3/4] w-full overflow-hidden relative bg-white/5 rounded-t-[2rem]">
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
              <div className="p-8">
                <p className="text-orange-500 text-xs font-bold tracking-wider uppercase mb-2">
                  {product.category}
                </p>
                <h3 className="text-2xl font-bold leading-tight mb-6 group-hover:text-white transition-colors">
                  {product.title}
                </h3>
                
                <button className="w-full py-4 border border-white/20 hover:bg-white hover:text-black transition-all uppercase text-xs font-bold tracking-[0.2em] flex items-center justify-center gap-2 group-hover:border-white rounded-xl">
                  Ver Detalles
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
