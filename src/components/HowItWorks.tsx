
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Crea tu Perfil de Delegado",
      desc: "Regístrate con tu institución, selecciona tus comisiones de interés y personaliza tu experiencia en la plataforma. Las Mesas Directivas pueden gestionar información."
    },
    {
      num: "02",
      title: "Explora la Wiki Diplomática",
      desc: "Investiga sobre comisiones con apoyo de IA, aprende sobre el procedimiento parlamentario del PLERD y prepárate con información verificada."
    },
    {
      num: "03",
      title: "Participa en los Hilos",
      desc: "Únete a discusiones por comisión, comparte Documentos de Posición, resolutivos y estrategias con la comunidad MUN."
    },
    {
      num: "04",
      title: "Consulta el Asistente de IA",
      desc: "Pregunta sobre mociones, puntos de orden, formato de resoluciones o cualquier duda procedimental. Respuestas instantáneas y precisas."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-dc-teal font-bold tracking-widest uppercase text-sm mb-4 block">
            — Cómo Funciona
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dc-navy mb-6">
            Tu camino en la plataforma
          </h2>
          <p className="text-lg text-dc-text-muted">
            Desde el registro hasta dominar el procedimiento parlamentario, te acompañamos en cada paso.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-dc-teal via-dc-teal-light to-dc-sky -translate-x-1/2 opacity-20 rounded-full" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'} text-center md:px-8`}>
                  <h3 className="text-2xl font-bold text-dc-navy mb-3">{step.title}</h3>
                  <p className="text-dc-text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Number Badge */}
                <div className="relative z-10 w-16 h-16 shrink-0 bg-gradient-to-br from-dc-teal to-dc-teal-light rounded-2xl flex items-center justify-center text-xl font-black text-white shadow-[0_10px_25px_rgba(44,95,124,0.3)] rotate-3 hover:rotate-0 transition-transform duration-300">
                  {step.num}
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
