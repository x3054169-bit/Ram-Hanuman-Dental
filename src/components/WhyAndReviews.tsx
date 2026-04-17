import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    text: "Smooth RCT and capping experience. Doctors explained everything clearly and made us feel extremely comfortable throughout the process. Highly professional!",
    author: "Local Resident",
    rating: 5
  },
  {
    text: "Visited from Australia, excellent care for both me and my daughter. The hygiene standards are world-class and the equipment is state-of-the-art.",
    author: "International Patient",
    rating: 5
  },
  {
    text: "Very clean clinic, professional staff, highly recommended for any dental issues in Jaipur. Pricing is transparent and affordable.",
    author: "Satisfied Patient",
    rating: 5
  }
];

const reasons = [
  "Painless & smooth treatments",
  "Friendly and supportive staff",
  "Affordable & transparent pricing",
  "Clean and well-maintained clinic",
  "Highly experienced doctors"
];

const WhyAndReviews = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Element like reference */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-brand-accent" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-accent">Why Us</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black mb-10 tracking-tight leading-[1.1]">
              The Trusted Choice <br/> 
              <span className="font-serif italic text-brand-accent font-light">in Jaipur</span>
            </h2>
            
            <div className="space-y-6">
              {reasons.map((reason, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-[18px] bg-cream flex items-center justify-center font-serif italic text-xl text-brand-primary group-hover:bg-brand-accent transition-all duration-300 shadow-sm">
                    {i+1}
                  </div>
                  <p className="text-lg font-bold text-brand-primary/80 group-hover:text-brand-primary transition-colors tracking-tight italic">{reason}</p>
                </div>
              ))}
            </div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="mt-16 p-10 bg-brand-primary rounded-[50px] text-white flex items-center justify-between relative overflow-hidden shadow-2xl"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[40px] rounded-full translate-x-1/2 -translate-y-1/2" />
               <div className="relative z-10">
                  <p className="font-serif italic text-6xl text-brand-accent leading-none">5.0</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white/50 mt-2">Verified Google Score</p>
               </div>
               <div className="flex flex-col items-end relative z-10">
                  <div className="flex gap-1 text-brand-accent mb-3">
                     {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-xs font-black uppercase tracking-widest italic text-brand-accent">111+ Five-Star Reviews</p>
               </div>
            </motion.div>
          </motion.div>

          {/* Testimonials Swiper */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-10">
               <h3 className="text-brand-accent text-[11px] font-black uppercase tracking-[0.4em]">Testimonials</h3>
               <div className="h-px flex-1 ml-6 bg-gray-100" />
            </div>
            
            <div className="flex flex-row overflow-x-auto gap-6 -mx-5 px-5 lg:mx-0 lg:px-0 lg:flex-col lg:space-y-8 no-scrollbar snap-x snap-mandatory pb-8">
              {reviews.map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex-shrink-0 w-[85vw] md:w-full snap-center bg-white p-10 rounded-[45px] relative border border-gray-100 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.08)] hover:shadow-2xl transition-all duration-500 group"
                >
                  <Quote className="absolute top-8 right-10 text-brand-accent/10 transition-transform duration-500 group-hover:scale-125" size={60} />
                  <div className="flex gap-1 text-brand-accent mb-6">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-700 font-medium italic leading-relaxed mb-8 text-base md:text-lg">"{review.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-[18px] bg-brand-primary/5 flex items-center justify-center font-serif italic text-xl text-brand-primary border border-brand-primary/10">
                      {review.author[0]}
                    </div>
                    <div>
                      <span className="text-[11px] font-black text-brand-primary uppercase tracking-[0.2em] block">{review.author}</span>
                      <span className="text-[10px] text-brand-accent font-bold uppercase tracking-widest mt-1 block">Diamond Patient</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Swiper Indicators for Mobile */}
            <div className="flex gap-1.5 justify-center md:hidden">
              {reviews.map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-accent/30" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAndReviews;
