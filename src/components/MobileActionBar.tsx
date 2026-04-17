import React from 'react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const MobileActionBar = ({ onBookClick }: { onBookClick: () => void }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-3 safe-bottom bg-white/90 backdrop-blur-xl border-t border-white/20 md:hidden flex items-center justify-between gap-2 shadow-[0_-10px_40px_rgba(0,0,0,0.08)]">
      <a
        href="tel:+918104861306"
        className="flex-1 flex flex-col items-center justify-center gap-1 text-brand-primary h-14 rounded-2xl active:bg-gray-100 transition-colors"
      >
        <Phone size={20} />
        <span className="text-[9px] font-bold uppercase tracking-[0.15em]">Call</span>
      </a>
      
      <a
        href="https://maps.app.goo.gl/YourMapLink"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-1 text-brand-secondary h-14 rounded-2xl active:bg-gray-100 transition-colors"
      >
        <MapPin size={20} />
        <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-center">Map</span>
      </a>

      <button
        onClick={onBookClick}
        className="flex-[2] bg-brand-accent text-brand-primary h-14 rounded-2xl flex items-center justify-center gap-2 font-black transition-all text-sm micro-glow-accent uppercase tracking-wider"
      >
        Book Now
      </button>

      <a
        href="https://wa.me/918104861306?text=Hi%20Ram%20Hanuman%20Dental%2C%20I%20want%20to%20book%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-1 text-green-600 h-14 rounded-2xl active:bg-gray-100 transition-colors"
      >
        <MessageCircle size={22} />
        <span className="text-[9px] font-bold uppercase tracking-[0.15em]">Chat</span>
      </a>
    </div>
  );
};

export default MobileActionBar;
