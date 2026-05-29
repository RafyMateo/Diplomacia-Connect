
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const AIAssistant = () => {
  const chatMessages = [
    { sender: 'user', text: '¿Cuál es el procedimiento para presentar una moción de orden en el Consejo de Seguridad?' },
    { sender: 'ai', text: 'Según el Manual PLERD, Art. 47: El punto de orden se presenta levantando el plaquet durante un cuarto intermedio o al ser reconocido por la Mesa. El delegado debe especificar el artículo presuntamente violado. La Mesa deliberará y emitirá un fallo inapelable.' },
    { sender: 'user', text: '¿Y cómo difiere del procedimiento en Asamblea General?' },
    { sender: 'ai', text: 'En la Asamblea General el procedimiento es esencialmente el mismo, pero la diferencia clave radica en que el Consejo de Seguridad opera con reglas de votación distintas dado el derecho a veto de los P5.' }
  ];

  const featuresList = [
    "Consultas sobre procedimiento parlamentario en tiempo real",
    "Análisis de documentos de posición y resoluciones",
    "Referencia rápida de artículos del Manual PLERD",
    "Guía para redacción de cláusulas operativas y preambulares",
    "Información actualizada de comisiones y tópicos"
  ];

  return (
    <section id="ai-assistant" className="py-24 bg-dc-navy relative overflow-hidden text-white">
      {/* Decorative Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-dc-teal/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-dc-red/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-dc-sky font-bold tracking-widest uppercase text-sm mb-4 block">
            — Asistente Inteligente
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Tu copiloto parlamentario con IA
          </h2>
          <p className="text-lg text-dc-ice/80">
            Respuestas inmediatas sobre procedimiento, análisis de documentos y asistencia en tiempo real basada en el Manual del PLERD.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Chat Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-white/10 px-6 py-4 border-b border-white/10 flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="font-semibold text-sm">Diplomacia AI — En línea</span>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6 h-[400px] overflow-y-auto custom-scrollbar">
              {chatMessages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.3 }}
                  key={i}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 text-sm leading-relaxed ${msg.sender === 'user'
                      ? 'bg-gradient-to-br from-dc-teal to-dc-teal-light text-white rounded-2xl rounded-br-sm shadow-lg'
                      : 'bg-white/10 border border-white/5 text-dc-ice rounded-2xl rounded-bl-sm'
                    }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-white/5 border-t border-white/10 flex gap-3">
              <input
                type="text"
                placeholder="Pregunta sobre procedimiento..."
                disabled
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none"
              />
              <button disabled className="bg-dc-teal text-white p-3 rounded-xl hover:bg-dc-teal-light transition-colors">
                <Send size={18} />
              </button>
            </div>
          </motion.div>

          {/* Text Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-playfair font-bold text-white mb-6">
              Inteligencia al servicio de la diplomacia
            </h3>
            <p className="text-dc-ice/80 text-lg mb-8 leading-relaxed">
              Nuestro asistente de IA está entrenado con el Manual General Académico y Normativo del PLERD, resoluciones históricas y prácticas parlamentarias de los MUN en República Dominicana.
            </p>

            <ul className="space-y-5">
              {featuresList.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  className="flex items-start gap-4 text-dc-ice"
                >
                  <CheckCircle2 className="w-6 h-6 text-dc-teal-light shrink-0" />
                  <span className="font-medium">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
