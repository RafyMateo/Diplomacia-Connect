
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background with soft gradients */}
      <div className="absolute inset-0 z-0 bg-dc-bg">
        <div className="absolute top-[20%] left-[30%] w-[500px] h-[500px] bg-dc-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[20%] w-[600px] h-[600px] bg-dc-red/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: 'linear-gradient(rgba(44, 95, 124, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(44, 95, 124, 0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-dc-teal/10 border border-dc-teal/20 px-4 py-1.5 rounded-full text-sm font-semibold text-dc-teal mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-dc-red-light animate-pulse" />
            Plataforma en Desarrollo
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-playfair font-bold text-dc-navy leading-[1.1] mb-6"
          >
            La diplomacia se <br />
            <span className="text-gradient">conecta aquí.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-dc-text-muted leading-relaxed mb-10"
          >
            La primera plataforma integral para delegados de los
            Modelos de Naciones Unidas en República Dominicana.
            Wiki diplomática, hilos comunitarios por comisión y un asistente de IA
            que domina el procedimiento parlamentario del PLERD.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#register"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-dc-teal to-dc-teal-light text-white font-semibold px-8 py-4 rounded-xl hover:-translate-y-1 hover:shadow-lg hover:shadow-dc-teal/20 transition-all duration-300"
            >
              Únete Ahora
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="group inline-flex items-center gap-2 bg-transparent border-2 border-dc-teal/20 text-dc-teal font-semibold px-8 py-4 rounded-xl hover:bg-dc-teal/5 hover:border-dc-teal/50 transition-all duration-300"
            >
              Descubrir Más
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-10 mt-16 pt-8 border-t border-dc-teal/10"
          >
            <div>
              <h3 className="text-3xl font-black text-dc-teal">30+</h3>
              <p className="text-xs font-bold text-dc-text-muted uppercase tracking-wider mt-1">Comisiones</p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-dc-teal">500+</h3>
              <p className="text-xs font-bold text-dc-text-muted uppercase tracking-wider mt-1">Artículos Wiki</p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-dc-teal">24/7</h3>
              <p className="text-xs font-bold text-dc-text-muted uppercase tracking-wider mt-1">IA Asistente</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual / Globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden lg:flex justify-center items-center h-[600px]"
        >
          {/* Rings */}
          <div className="absolute inset-0 rounded-full border-[1.5px] border-dc-teal/10 animate-[spin_25s_linear_infinite]" />
          <div className="absolute inset-[40px] rounded-full border-[1.5px] border-dc-teal/10 animate-[spin_35s_linear_infinite_reverse]" />
          <div className="absolute inset-[80px] rounded-full border-[1.5px] border-dc-teal/5 animate-[spin_45s_linear_infinite]" />

          {/* Logo in Center */}
          <img
            src="/DiplomaciaConnectPng.png"
            alt="Diplomacia Connect 3D"
            className="absolute w-[420px] h-[420px] object-contain drop-shadow-[0_10px_30px_rgba(44,95,124,0.15)] z-10"
          />

          {/* Orbital Dots */}
          <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -ml-[6px] w-3 h-3 bg-dc-teal-light rounded-full shadow-[0_0_15px_rgba(58,124,165,0.6)]" />
          </div>
          <div className="absolute inset-[40px] animate-[spin_30s_linear_infinite_reverse]">
            <div className="absolute bottom-0 left-1/2 -ml-[6px] w-3 h-3 bg-dc-teal rounded-full shadow-[0_0_15px_rgba(44,95,124,0.6)]" />
          </div>
          <div className="absolute inset-[80px] animate-[spin_15s_linear_infinite]">
            <div className="absolute top-1/2 right-0 -mt-[6px] w-3 h-3 bg-dc-red-light rounded-full shadow-[0_0_15px_rgba(193,55,74,0.6)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
