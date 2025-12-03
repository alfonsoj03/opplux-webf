import { motion } from "motion/react";

const features = [
  {
    title: "AMPLIO INVENTARIO PERMANENTE",
    description: "Tu pides, nosotros despachamos. Stock disponible para entrega inmediata.",
    image: "https://images.unsplash.com/photo-1747085040719-55282cc206b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwaW50ZXJpb3IlMjBsb2dpc3RpY3MlMjBtb2Rlcm58ZW58MXx8fHwxNzY0NDQ5Mjg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "ENVIAMOS A NIVEL NACIONAL",
    description: "Desde Leticia hasta Riohacha. Llevamos la luz a cada rincón del país.",
    image: "https://images.unsplash.com/photo-1609520113718-8c9068f23666?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHRydWNrJTIwc2hpcHBpbmclMjBsb2dpc3RpY3MlMjBuaWdodCUyMGhpZ2h3YXl8ZW58MXx8fHwxNzY0NDQ5Mjg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "ASESORÍA PROFESIONAL",
    description: "Te acompañamos en los aspectos técnicos para garantizar el éxito de tu proyecto.",
    image: "https://images.unsplash.com/photo-1600869009558-c0dca8dcbc37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBlbmdpbmVlciUyMGFyY2hpdGVjdCUyMG1lZXRpbmd8ZW58MXx8fHwxNzY0NDQ5Mjg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "GARANTÍA Y RESPALDO",
    description: "Seguridad total en tu inversión con nuestro respaldo directo de fábrica.",
    image: "https://images.unsplash.com/photo-1649562065680-fa7a5a1c4318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJyYW50eSUyMHF1YWxpdHklMjBzZWFsJTIwaGFuZHNoYWtlJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY0NDQ5Mjg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-zinc-100 text-black">
      <div className="container mx-auto px-6">
        {/* Header Section similar to 'Why are our books free?' */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-lg">
             <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
              ¿POR QUÉ<br />
              ELEGIR <span className="text-[#FF8351]">OPPLUX?</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-zinc-600 text-lg leading-relaxed font-medium">
              Entendemos que en el mundo de la iluminación, la confianza lo es todo. 
              En Opplux, nuestra misión va más allá de vender productos; nos dedicamos a 
              construir relaciones duraderas basadas en la calidad, el servicio y el respaldo.
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-black"
            >
              {/* Background Image */}
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Text Content Centered/Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                <h3 className="text-3xl font-black uppercase text-[#FF8351] leading-none mb-4 drop-shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                  {feature.title}
                </h3>
                
                {/* Description reveals on hover */}
                <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-300">
                  <p className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              {/* Always visible description for mobile/touch or alternative design */}
              {/* Using a visually striking design like the reference (Yellow text over image) */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
