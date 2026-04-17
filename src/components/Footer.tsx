import React from 'react';
import { Phone, MapPin, Instagram, Facebook, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Wave at Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] fill-white">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-12 w-[150%] md:w-full">
           <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center font-bold text-brand-primary">
                RH
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight">Ram Hanuman</span>
                <span className="text-[10px] uppercase tracking-widest font-medium text-brand-accent">Super Specialty Dental</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bringing advanced, precision-based dental care to Jaipur. Award-winning treatments for the whole family.
            </p>
            <div className="flex gap-4">
               {[Instagram, Facebook, Twitter].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-all">
                    <Icon size={18} />
                 </a>
               ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg italic">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Home', 'About Us', 'Our Services', 'Patient Reviews', 'Book Appointment'].map((item) => (
                <li key={item}><a href="#" className="hover:text-brand-accent transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg italic">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Root Canal Treatment', 'Dental Implants', 'Smile Makeover', 'Laser Dentistry', 'Gum Therapy'].map((item) => (
                <li key={item}><a href="#" className="hover:text-brand-accent transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Location Col */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg italic">Clinic Info</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex gap-3">
                 <MapPin size={18} className="text-brand-accent shrink-0" />
                 <span>22-23, Bhagawan Marg, Ramnagar, Jaipur, Rajasthan 302015</span>
              </div>
              <div className="flex gap-3">
                 <Phone size={18} className="text-brand-accent shrink-0" />
                 <span>081048 61306</span>
              </div>
            </div>
            <div className="pt-2">
               <div className="bg-brand-secondary/50 p-4 rounded-2xl border border-white/5">
                  <p className="text-[10px] uppercase font-bold text-brand-accent tracking-widest mb-1">Open Hours</p>
                  <p className="text-xs font-medium">Daily: 09:00 AM – 09:00 PM</p>
               </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-medium">
          <p>© 2026 Ram Hanuman Dental Super Specialty. All Rights Reserved.</p>
          <div className="flex items-center gap-1">
            Made with <Heart size={12} className="text-brand-accent fill-brand-accent" /> for Jaipur
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
