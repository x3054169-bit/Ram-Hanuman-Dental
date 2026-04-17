import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  "Very smooth and painless treatment",
  "Clean clinic and highly supportive staff",
  "Highly professional doctors in Jaipur",
  "World-class hygiene standards guaranteed",
  "Best and affordable RCT experience",
  "Excellent care for both adults & kids",
];

const ReviewStrip = () => {
  return (
    <div className="bg-brand-primary py-5 overflow-hidden border-y border-white/5 select-none relative">
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-transparent to-brand-primary z-10 pointer-events-none" />
      
      <div className="flex animate-marquee whitespace-nowrap relative z-0">
        {[...Array(4)].map((_, groupIdx) => (
          <div key={groupIdx} className="flex gap-16 items-center px-8">
            {reviews.map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, s) => <Star key={s} size={11} fill="currentColor" className="text-brand-accent" />)}
                </div>
                <span className="text-white text-[11px] font-bold uppercase tracking-[0.15em] opacity-90 italic">"{text}"</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ReviewStrip;
