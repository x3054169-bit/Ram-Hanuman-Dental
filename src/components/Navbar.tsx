import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Stethoscope } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const Navbar = ({ onBookClick }: { onBookClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#results' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 py-3 md:px-12',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_40px_-5px_rgba(0,0,0,0.1)] border-b border-gray-100' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group relative outline-none focus:ring-2 focus:ring-brand-accent rounded-xl" aria-label="Go to homepage">
          <div className={cn(
            "w-12 h-12 rounded-[16px] flex items-center justify-center p-2.5 transition-all duration-500 group-hover:rotate-12 group-hover:bg-brand-accent shadow-xl border overflow-hidden",
            isScrolled ? "bg-brand-primary border-brand-primary/10" : "bg-white/20 backdrop-blur-md border-white/30"
          )}>
            <div className="w-full h-full flex items-center justify-center transition-colors">
              <Stethoscope className={cn(
                "w-full h-full transition-colors duration-500",
                isScrolled ? "text-brand-accent" : "text-white"
              )} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-display font-black text-lg tracking-[-0.03em] leading-none transition-colors",
              isScrolled ? "text-brand-primary" : "text-white"
            )}>RAM HANUMAN</span>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-accent mt-1">Super Specialty</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[10px] font-black uppercase tracking-[0.25em] transition-all hover:text-brand-accent relative group/link",
                  isScrolled ? "text-brand-primary/80" : "text-white/80"
                )}
              >
                {link.name}
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-brand-accent transition-all duration-500 group-hover/link:w-full" />
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="tel:+918104861306"
              className={cn(
                "hidden xl:flex items-center gap-2 text-sm font-bold",
                isScrolled ? "text-brand-primary" : "text-white"
              )}
            >
              <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center">
                <Phone size={14} className="text-brand-accent" />
              </div>
              810-486-1306
            </a>
            <button
              onClick={onBookClick}
              className="bg-brand-accent text-brand-primary px-6 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 hover:scale-105 transition-all micro-glow-accent shadow-lg"
            >
              <Phone size={16} />
              Book Appointment
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-xl transition-colors",
            isScrolled ? "bg-gray-100 text-brand-primary" : "bg-white/10 text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl p-6 md:hidden flex flex-col gap-2 border-t border-gray-100 rounded-b-3xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-primary font-bold py-4 px-4 hover:bg-brand-light rounded-2xl transition-colors text-lg flex items-center justify-between"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
                <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
              </a>
            ))}
            <button
              onClick={() => { setMobileMenuOpen(false); onBookClick(); }}
              className="mt-4 bg-brand-primary text-white p-4 rounded-2xl text-center font-bold flex items-center justify-center gap-2 h-14"
            >
              <Phone size={18} />
              Book Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
