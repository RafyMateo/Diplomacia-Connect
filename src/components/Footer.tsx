

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1B3A4B] via-[#2C5F7C] to-[#3A7CA5]/70 border-t border-dc-teal/20 py-16 relative overflow-hidden">
      {/* Elementos decorativos del fondo del footer */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-dc-red via-dc-gold to-dc-teal-light opacity-80" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-dc-teal-light/20 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Logo & Name */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img src="/DiplomaciaConnectPng.png" alt="DC Logo" className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(232,241,247,0.4)]" />
              <span className="font-playfair font-bold text-white text-2xl tracking-wide">
                Diplomacia Connect
              </span>
            </div>
            <p className="text-dc-ice/70 text-sm max-w-xs text-center md:text-left">
              Elevando el debate y la diplomacia estudiantil en la República Dominicana a través de la innovación tecnológica.
            </p>
          </div>

          {/* Links */}
          <ul className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-sm font-semibold text-dc-ice/80">
            <li><a href="#features" className="hover:text-white hover:underline underline-offset-4 transition-all">Funcionalidades</a></li>
            <li><a href="#commissions" className="hover:text-white hover:underline underline-offset-4 transition-all">Comisiones</a></li>
            <li><a href="#ai-assistant" className="hover:text-white hover:underline underline-offset-4 transition-all">IA Asistente</a></li>
            <li><a href="#how-it-works" className="hover:text-white hover:underline underline-offset-4 transition-all">Cómo Funciona</a></li>
          </ul>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-dc-ice/50 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} Diplomacia Connect. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
