import { motion } from "motion/react";

export function Categories() {
  return (
    <section className="flex flex-col md:flex-row min-h-[600px]">
      <div className="relative flex-1 group overflow-hidden bg-black">
        <img 
          src="https://images.unsplash.com/photo-1724050168307-25389c9d89e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwYWVzdGhldGljfGVufDF8fHx8MTc2NDM2MjgxOHww&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Energía" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase mb-4"
          >
            Energía &<br/>Redes
          </motion.h2>
          <button className="px-8 py-3 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
            Explorar
          </button>
        </div>
      </div>

      <div className="relative flex-1 group overflow-hidden bg-black border-l border-white/10">
         <img 
          src="https://images.unsplash.com/photo-1761956424995-7e4543a1ed8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwYXJjaGl0ZWN0dXJhbCUyMGxpZ2h0aW5nfGVufDF8fHx8MTc2NDM2MjgxOHww&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Iluminación" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
           <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase mb-4"
          >
            Iluminación<br/>By Opplux
          </motion.h2>
          <button className="px-8 py-3 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
            Descubrir
          </button>
        </div>
      </div>
    </section>
  );
}
