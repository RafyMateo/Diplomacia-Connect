import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Funcionalidades', href: '#features' },
    { name: 'Comisiones', href: '#commissions' },
    { name: 'Cómo Funciona', href: '#how-it-works' },
    { name: 'IA Asistente', href: '#ai-assistant' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src="/DiplomaciaConnectPng.png" alt="Diplomacia Connect Logo" className="w-12 h-12 object-contain" />
          <span className="font-playfair text-xl font-bold text-dc-navy tracking-wide">
            Diplomacia Connect
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-dc-text-muted hover:text-dc-navy transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dc-teal transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-dc-teal/20 pl-6">
            <a href="#login" className="text-sm font-semibold text-dc-navy hover:text-dc-teal transition-colors">
              Iniciar Sesión
            </a>
            <a
              href="#register"
              className="bg-gradient-to-r from-dc-teal to-dc-teal-light text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:-translate-y-0.5 hover:shadow-lg hover:shadow-dc-teal/30 transition-all duration-300"
            >
              Regístrate
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dc-navy p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-dc-teal/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-dc-text hover:text-dc-teal transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <hr className="border-dc-teal/10 my-2" />
            <a href="#login" className="text-base font-medium text-dc-navy">
              Iniciar Sesión
            </a>
            <a
              href="#register"
              className="bg-dc-teal text-white text-center font-semibold py-3 rounded-xl mt-2"
            >
              Regístrate
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
