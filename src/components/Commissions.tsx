
import { motion } from 'framer-motion';

const Commissions = () => {
  const commissions = [
    // Órganos Principales
    { icon: '🌐', name: 'Asamblea General', desc: 'Órgano plenario principal' },
    { icon: '🛡️', name: 'Consejo de Seguridad', desc: 'Paz y seguridad internacional' },
    { icon: '💰', name: 'ECOSOC', desc: 'Consejo Económico y Social' },
    { icon: '⚖️', name: 'Corte Internacional', desc: 'Órgano judicial principal' },
    
    // Comités de la Asamblea General
    { icon: '🕊️', name: 'Comité de Desarme', desc: 'Desarme y Seguridad Internacional' },
    { icon: '🤝', name: 'Comité de Asuntos Sociales', desc: 'Asuntos Humanitarios y Culturales' },
    
    // Consejos, Programas y Agencias Especializadas
    { icon: '🗣️', name: 'Consejo de Derechos Humanos', desc: 'Promoción de derechos humanos' },
    { icon: '👥', name: 'ACNUDH', desc: 'Oficina del Alto Comisionado' },
    { icon: '⛺', name: 'ACNUR', desc: 'ACNU para los Refugiados' },
    { icon: '👶', name: 'UNICEF', desc: 'Fondo para la Infancia' },
    { icon: '🌱', name: 'PNUMA', desc: 'Programa sobre el Medio Ambiente' },
    { icon: '🏥', name: 'OMS', desc: 'Organización Mundial de la Salud' },
    { icon: '🌾', name: 'FAO', desc: 'Agricultura y Alimentación' },
    { icon: '📈', name: 'FMI', desc: 'Fondo Monetario Internacional' },
    
    // Otros Foros y Organismos Internacionales
    { icon: '🌍', name: 'Grupo de los 20', desc: 'Foro principal de cooperación económica' },
    { icon: '⚖️', name: 'CIDH', desc: 'Comisión Interamericana de DD.HH.' }
  ];

  return (
    <section id="commissions" className="py-24 bg-dc-bg-alt relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-dc-sky/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-dc-teal font-bold tracking-widest uppercase text-sm mb-4 block">
            — Comisiones
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dc-navy mb-6">
            Explora las comisiones simuladas
          </h2>
          <p className="text-lg text-dc-text-muted">
            Desde la Asamblea General hasta el Consejo de Seguridad. Accede a información especializada de cada órgano y comisión de las Naciones Unidas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {commissions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white p-6 rounded-2xl border border-dc-teal/10 text-center cursor-pointer hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(27,58,75,0.08)] hover:border-dc-teal-light transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-dc-ice flex items-center justify-center text-3xl mb-4">
                {item.icon}
              </div>
              <h4 className="font-bold text-dc-navy mb-1">{item.name}</h4>
              <p className="text-xs text-dc-text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commissions;
