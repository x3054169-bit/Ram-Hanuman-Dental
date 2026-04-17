import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, Star } from 'lucide-react';

const Hero = ({ onBookClick }: { onBookClick: () => void }) => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-20 overflow-hidden bg-brand-primary">
      {/* Background with Stronger Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1920&q=80&fm=webp"
          alt="Professional Dental Care in Action"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary via-brand-primary/95 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white relative"
        >
          {/* Text Glow Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-primary/20 blur-[120px] -z-10" />
          
          <div className="space-y-4 mb-2">
            <div className="inline-flex items-center gap-4">
              <div className="h-px w-10 bg-brand-accent" />
              <span className="text-[11px] font-black uppercase tracking-[0.45em] text-brand-accent uppercase">Excellence Since 2014</span>
            </div>
          </div>

          <h1 className="text-white text-6xl md:text-[6.5rem] font-display font-black leading-[0.9] mb-10 tracking-tighter drop-shadow-2xl">
            Advanced <br />
            <span className="font-serif italic text-brand-accent font-light drop-shadow-none">Dental care</span> <br />
            with <span className="relative inline-block">Precision <div className="absolute bottom-2 left-0 w-full h-1 bg-brand-accent/30 -rotate-1" /></span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-14 max-w-xl leading-relaxed font-serif italic border-l-2 border-brand-accent/50 pl-8">
            "Where clinical perfection meets artistic dentistry. Trusted by Jaipur's most discerning families."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 relative">
            {/* Subtle Trust Inject */}
            <div className="absolute -top-7 left-0 flex items-center gap-1.5 drop-shadow-sm">
              <Star size={10} className="text-brand-accent fill-brand-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent shadow-sm">Jaipur's Elite Choice</span>
            </div>

            <button
              onClick={onBookClick}
              className="w-full sm:w-auto px-10 h-16 bg-brand-accent text-brand-primary rounded-2xl font-black text-lg flex items-center justify-center gap-2 active:scale-95 transition-all micro-glow-accent shadow-[0_10px_40px_-5px_rgba(212,175,55,0.3)]"
            >
              <Phone size={22} />
              Book Now
            </button>
            <a
              href="tel:+918104861306"
              className="sm:hidden w-full h-16 bg-white text-brand-primary rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone size={22} />
              Call Now
            </a>
            <a
              href="#services"
              className="hidden sm:flex px-10 h-16 bg-white/5 border border-white/20 text-white rounded-2xl font-bold text-lg items-center justify-center gap-2 hover:bg-white/10 transition-colors backdrop-blur-md"
            >
              Our Services
              <ArrowRight size={22} />
            </a>
          </div>

          {/* Trust Counters */}
          <div className="mt-16 grid grid-cols-3 gap-8">
             <div className="space-y-1">
                <p className="text-brand-accent font-black text-4xl">111+</p>
                <p className="text-[10px] uppercase font-bold text-white tracking-[0.2em] opacity-80">Happy Patients</p>
             </div>
             <div className="space-y-1">
                <p className="text-brand-accent font-black text-4xl">100+</p>
                <p className="text-[10px] uppercase font-bold text-white tracking-[0.2em] opacity-80">Smile Makeovers</p>
             </div>
             <div className="space-y-1">
                <p className="text-brand-accent font-black text-4xl">10+</p>
                <p className="text-[10px] uppercase font-bold text-white tracking-[0.2em] opacity-80">Years Exp.</p>
             </div>
          </div>

          {/* Doctors Short List */}
          <div className="mt-16 flex items-center gap-5">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-brand-primary bg-brand-secondary flex items-center justify-center text-xs font-bold text-white shadow-xl">
                  DR
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-widest font-black text-brand-accent">Our Specialists</p>
              <p className="font-bold text-white italic text-lg drop-shadow-sm">Dr. Hemant, Dr. Pooja & Dr. Aarti</p>
            </div>
          </div>
        </motion.div>

        {/* Improved Floating Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white/5 backdrop-blur-sm">
             <img 
               src="https://images.unsplash.com/photo-1667133295315-820bb6481730?auto=format&fit=crop&w=800&h=1000&q=80&fm=webp"
               alt="Smile Makeover Result"
               className="w-full aspect-[4/5] object-cover"
               referrerPolicy="no-referrer"
               loading="lazy"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent" />
             <div className="absolute inset-x-0 bottom-0 p-10 flex justify-between items-end">
                <div className="space-y-2">
                  <div className="bg-brand-accent text-brand-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest inline-block shadow-lg">Smile Makeover</div>
                  <h4 className="text-white font-bold text-3xl tracking-tight leading-tight">Healthy Smiles <br/> Everyday</h4>
                  <p className="text-white font-medium italic opacity-100">Because your smile is our passion</p>
                </div>
                <div className="w-16 h-16 bg-brand-accent border-4 border-white/20 rounded-2xl flex items-center justify-center text-brand-primary shadow-2xl transform rotate-12">
                   <ArrowRight size={28} />
                </div>
             </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-accent/20 blur-[100px] rounded-full animate-float" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-brand-secondary/40 blur-[100px] rounded-full animate-float [animation-delay:2s]" />
        </motion.div>
      </div>

      {/* Modern Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] fill-white">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-12 md:h-24 w-[150%] md:w-full rotate-180">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
