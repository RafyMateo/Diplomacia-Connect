
import { BookOpen, MessageSquare, Bot, Building2, ClipboardList, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-dc-teal" />,
      title: "Wiki Diplomática",
      desc: "Enciclopedia completa de comisiones, países, tópicos históricos y procedimiento parlamentario según el Manual del PLERD."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-dc-teal" />,
      title: "Hilos Comunitarios",
      desc: "Foros tipo Reddit organizados por comisión y uno general. Discute estrategias, comparte documentos y conecta con otros delegados."
    },
    {
      icon: <Bot className="w-8 h-8 text-dc-teal" />,
      title: "Asistente de IA",
      desc: "Consulta procedimiento parlamentario, analiza documentos de posición y obtén respuestas instantáneas sobre normativas MUN."
    },
    {
      icon: <Building2 className="w-8 h-8 text-dc-teal" />,
      title: "Guía de Comisiones",
      desc: "Información detallada de cada comisión simulada: mandato, competencias, tópicos frecuentes y delegaciones históricas."
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-dc-teal" />,
      title: "Manual PLERD",
      desc: "Referencia rápida y navegable del Manual General Académico y Normativo. Búsqueda por artículo, mociones y procedimientos."
    },
    {
      icon: <Globe2 className="w-8 h-8 text-dc-teal" />,
      title: "Red de Delegados",
      desc: "Conecta con delegados de toda la República Dominicana. Perfiles, logros en modelos y colaboración inter-institucional."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-dc-teal font-bold tracking-widest uppercase text-sm mb-4 block">
            — Funcionalidades
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dc-navy mb-6">
            Todo lo que necesitas como delegado
          </h2>
          <p className="text-lg text-dc-text-muted">
            Desde información de comisiones hasta asistencia parlamentaria en tiempo real. 
            Una plataforma diseñada por y para la comunidad MUN dominicana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-dc-bg-card border border-dc-teal/10 p-8 rounded-3xl hover:shadow-[0_20px_50px_rgba(27,58,75,0.08)] hover:-translate-y-1 hover:border-dc-teal/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Gradient Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-dc-teal to-dc-teal-light opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-16 h-16 rounded-2xl bg-dc-ice flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-dc-teal/10 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-dc-navy mb-3">{item.title}</h3>
              <p className="text-dc-text-muted leading-relaxed text-justify">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
