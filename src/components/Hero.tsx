import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { ArrowRight, MapPin, Sun } from "lucide-react";
import heroBg from "../assets/b9f87d67fa36b578fc899193ed536f1e87f40b82.png";
import { MouseEvent, useEffect } from "react";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // OPTIMIZACIÓN 1: Física más agresiva para sensación "Snappy"
  // mass: 0.5 lo hace sentir más ligero
  const springConfig = {
    stiffness: 600,
    damping: 40,
    mass: 0.5,
  };

  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Initialize in the center
    if (typeof window !== "undefined") {
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
    }
  }, []);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    const { width, height } =
      currentTarget.getBoundingClientRect();

    // Calculate dimensions relative to center
    const centerX = width / 2;
    const centerY = height / 2;

    // Calculate distance from center
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // Constrain movement relative to center
    // Increased to 0.4 as suggested for more reactivity/noticeable movement
    // while still preventing it from hitting the absolute edges hard
    const moveFactor = 0.4;

    const targetX = centerX + deltaX * moveFactor;
    const targetY = centerY + deltaY * moveFactor;

    mouseX.set(targetX);
    mouseY.set(targetY);
  }

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-black text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Opplux Solar Street Light"
          className="w-full h-full object-cover opacity-80"
        />
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

        {/* Interactive Brand Colors Glow Effect */}
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-[#FF8351] to-[#922CDC] rounded-full blur-[150px] opacity-15 pointer-events-none"
          style={{
            left: 0,
            top: 0,
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col items-center justify-center">
        {/* Top Label - Nordic Style */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-32 md:top-40 flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-white/60"
        >
          <span className="w-12 h-[1px] bg-white/60" />
          <span>Colección 2025</span>
          <span className="w-12 h-[1px] bg-white/60" />
        </motion.div>

        {/* Center Title */}
        <div className="text-center flex flex-col items-center gap-6 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]"
          >
            <span className="block">Energía</span>

            {/* Pura - Static Gradient */}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF8351] to-white">
              Pura
            </span>
          </motion.h1>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-20 md:bottom-24"
        >
          <button className="relative group flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full overflow-hidden transition-all duration-500">
            {/* Shadow Gradient Layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8351] to-[#922CDC] opacity-0 group-hover:opacity-80 transition-opacity duration-500 z-0" />

            <div className="relative z-10 flex items-center gap-4">
              <span className="font-bold tracking-wider uppercase text-sm group-hover:text-white transition-colors">
                Ver Catálogo 2025
              </span>
              <div className="bg-white text-black rounded-full p-1 group-hover:bg-white/20 group-hover:text-white transition-colors">
                <ArrowRight size={14} />
              </div>
            </div>
          </button>
        </motion.div>

        {/* Floating Details */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-6 md:left-12 hidden md:block"
        >
          <div className="flex flex-col gap-2 text-xs text-white/60 font-mono">
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-[#FF8351]" />
              <span>Diseñado en México</span>
            </div>
            <div className="flex items-center gap-2">
              <Sun size={12} className="text-[#FF8351]" />
              <span>Autonomía Solar 12h+</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 right-6 md:right-12 hidden md:block text-right"
        >
          <div className="flex flex-col gap-2 text-xs text-white/60 font-mono uppercase">
            <p>Serie Opplux Pro</p>
            <p>Modelo: OX-200W</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}