import { motion } from "motion/react";
import { Zap, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Soluciones Escalables",
    description: "Diseñamos sistemas de iluminación que crecen con tu negocio, adaptándose a tus necesidades actuales y futuras sin complicaciones.",
  },
  {
    icon: Shield,
    title: "Garantía Extendida",
    description: "Respaldo técnico completo con garantías extendidas en todos nuestros productos y soporte post-venta continuo.",
  },
  {
    icon: Users,
    title: "Equipo Especializado",
    description: "Profesionales certificados en iluminación industrial y arquitectónica listos para asesorarte en cada etapa de tu proyecto.",
  },
];

export function ScalableFeatures() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-2xl">
            <p className="text-[#FF8351] tracking-[0.2em] uppercase text-sm mb-4">
              CRECIMIENTO INTELIGENTE
            </p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              Una experiencia que crece con tu escala.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-zinc-400 text-lg leading-relaxed">
              Implementamos soluciones de iluminación diseñadas para negocios en 
              crecimiento con sistemas modulares y gestión simplificada de proyectos.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group"
              >
                {/* Icon Container */}
                <div className="mb-6 w-16 h-16 flex items-center justify-center border-2 border-zinc-800 rounded-lg group-hover:border-[#FF8351] transition-colors duration-300">
                  <Icon className="w-8 h-8 text-zinc-400 group-hover:text-[#FF8351] transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-2xl mb-4 group-hover:text-[#FF8351] transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
