import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    category: "Alumbrado Público",
    title: "Modernización Avenida Reforma: Eficiencia y Seguridad Vial",
    description: "Implementación de sistema inteligente de telegestión punto a punto, logrando un ahorro energético del 60% y mejorando la seguridad vial nocturna con una temperatura de color óptima.",
    location: "Ciudad de México",
    image: "https://images.unsplash.com/photo-1600206085398-f6ede93b06f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwc3RyZWV0JTIwbGlnaHRzJTIwbmlnaHR8ZW58MXx8fHwxNzY0NDQzNjIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    category: "Iluminación Arquitectónica",
    title: "Torre Corporativa Zenith: Identidad Nocturna Dinámica",
    description: "Diseño lumínico integral para fachada e interiores, utilizando tecnología RGBW para crear escenas dinámicas que resaltan la arquitectura moderna y reducen la contaminación lumínica.",
    location: "Monterrey, NL",
    image: "https://images.unsplash.com/photo-1762506168883-0f829364d598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYnVpbGRpbmclMjBsaWdodGluZyUyMG5pZ2h0JTIwbW9kZXJufGVufDF8fHx8MTc2NDQ0MzYyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    category: "Iluminación Deportiva",
    title: "Estadio Olímpico: Experiencia Visual de Clase Mundial",
    description: "Iluminación deportiva de alta potencia cumpliendo estándares internacionales para transmisión 4K, garantizando uniformidad y confort visual superior para jugadores y espectadores.",
    location: "Guadalajara, Jal",
    image: "https://images.unsplash.com/photo-1697562160779-fed83c21a2cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFkaXVtJTIwZmxvb2RsaWdodHMlMjBuaWdodCUyMG1hdGNofGVufDF8fHx8MTc2NDQ0MzYyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Projects() {
  return (
    <section className="py-24 bg-white text-zinc-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <span className="text-[#FF8351] text-sm font-bold tracking-widest uppercase">
              Casos de Éxito
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
              Proyectos Destacados
            </h2>
          </div>
          
          <motion.button
            whileHover={{ x: 5 }}
            className="hidden md:flex items-center gap-2 text-zinc-600 hover:text-[#FF8351] transition-colors font-medium"
          >
            <span>Ver portafolio completo</span>
            <ArrowRight size={16} />
          </motion.button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              className="group flex flex-col"
            >
              {/* Image Area */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-zinc-900 text-xs font-bold px-3 py-1.5 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-zinc-900 leading-tight mb-4 min-h-[3.5rem]">
                  {project.title}
                </h3>
                
                <p className="text-zinc-600 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100">
                  <div className="flex items-center gap-2 text-zinc-400 text-xs">
                    <MapPin size={14} />
                    <span>{project.location}</span>
                  </div>
                  
                  <button className="bg-[#FF8351] hover:bg-[#e06b3d] text-white text-sm font-bold px-6 py-2.5 rounded-full transition-colors flex items-center gap-2">
                    Ver detalles
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile "View All" Button */}
        <div className="mt-12 flex md:hidden justify-center">
          <button className="text-zinc-900 font-bold border-b-2 border-[#FF8351] pb-1">
            Ver todos los proyectos
          </button>
        </div>
      </div>
    </section>
  );
}
