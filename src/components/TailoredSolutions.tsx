import { motion } from "motion/react";

export function TailoredSolutions() {
  return (
    <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FF8351]/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Small label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#FF8351] tracking-[0.2em] uppercase text-sm mb-8"
          >
            SOLUCIONES A TU MEDIDA
          </motion.p>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <p className="text-3xl md:text-4xl leading-relaxed text-zinc-100">
              En <span className="text-[#FF8351]">Opplux</span> estamos cerca de ti para aportarte{" "}
              <span className="text-[#FF8351]">soluciones personalizadas</span> que se adapten 
              perfectamente a las necesidades específicas de tu proyecto de iluminación.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

            <p className="text-xl md:text-2xl leading-relaxed text-zinc-400">
              Nos consideramos parte fundamental del éxito de tu negocio. Para nosotros no hay 
              proyectos imposibles, sólo <span className="text-zinc-200">desafíos que resolver</span>. 
              Nuestro conocimiento y experiencia nos permiten ofrecer la{" "}
              <span className="text-zinc-200">máxima flexibilidad</span>, contribuyendo a que 
              la iluminación perfecta llegue de la manera más eficiente a tus espacios, 
              adaptándose a tu presupuesto y objetivos.
            </p>
          </motion.div>

          {/* Stats or key points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-zinc-800"
          >
            <div>
              <div className="text-[#FF8351] text-5xl mb-3">100+</div>
              <p className="text-zinc-400">Proyectos personalizados entregados</p>
            </div>
            <div>
              <div className="text-[#FF8351] text-5xl mb-3">15+</div>
              <p className="text-zinc-400">Años de experiencia en iluminación</p>
            </div>
            <div>
              <div className="text-[#FF8351] text-5xl mb-3">24/7</div>
              <p className="text-zinc-400">Soporte técnico disponible</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
