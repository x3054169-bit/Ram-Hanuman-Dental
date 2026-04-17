import React from 'react';
import { motion } from 'motion/react';
import { 
  Activity, 
  ShieldCheck, 
  Stethoscope, 
  Smile, 
  Sparkles, 
  Settings2,
  ChevronRight
} from 'lucide-react';

const services = [
  {
    title: "Root Canal Treatment (RCT)",
    desc: "Single-sitting, painless RCT with advanced rotary systems for precise results.",
    icon: Activity,
    color: "bg-blue-50"
  },
  {
    title: "Dental Implants",
    desc: "Premium quality implants to restore your smile and chewing functionality.",
    icon: ShieldCheck,
    color: "bg-purple-50"
  },
  {
    title: "Tooth Capping",
    desc: "Highly aesthetic Zirconia and E-max crowns for natural-looking teeth.",
    icon: Stethoscope,
    color: "bg-green-50"
  },
  {
    title: "Cosmetic Dentistry",
    desc: "Smile makeovers, veneers, and teeth whitening for a celebrity smile.",
    icon: Smile,
    color: "bg-pink-50"
  },
  {
    title: "Painless Dental Procedures",
    desc: "Laser dentistry and gentle techniques for a stress-free dental experience.",
    icon: Sparkles,
    color: "bg-yellow-50"
  },
  {
    title: "General Dentistry",
    desc: "Regular checkups, scaling, and fillings to keep your oral health in peak shape.",
    icon: Settings2,
    color: "bg-orange-50"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-cream/30 relative overflow-hidden">
      {/* Background Texture/Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2A2359 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-brand-accent" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-accent">Excellence in Care</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black leading-tight tracking-tight">
              Specialized <br/>
              <span className="font-serif italic text-brand-accent font-light">Expertise</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-sm text-sm font-medium leading-relaxed italic border-l-2 border-brand-accent/30 pl-6 lg:mb-4"
          >
            "Elevating your dental experience with global standards, advanced technology, and artistic clinical precision."
          </motion.p>
        </div>

        <div className="flex flex-row overflow-x-auto pb-12 -mx-5 px-5 gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 no-scrollbar snap-x snap-mandatory">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[300px] md:w-auto snap-center group relative overflow-hidden bg-white p-10 rounded-[50px] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-brand-accent/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-bl-[100px] -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150" />
              
              <div className={`w-16 h-16 ${service.color} rounded-[22px] flex items-center justify-center mb-10 transition-all duration-500 group-hover:shadow-lg group-hover:rotate-6`}>
                 <service.icon size={30} className="text-brand-primary" />
              </div>
              
              <h4 className="text-2xl font-display font-bold mb-4 text-brand-primary group-hover:text-brand-secondary transition-colors italic leading-tight">{service.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed mb-10 font-medium">
                {service.desc}
              </p>
              
              <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity">Consult Expert</span>
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-primary group-hover:translate-x-2 transition-transform">
                   View Service
                   <ChevronRight size={16} className="text-brand-accent" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
