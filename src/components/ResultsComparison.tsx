import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Sparkles, Smile, ShieldCheck } from 'lucide-react';

const cases = [
  {
    title: "Smile Correction",
    desc: "Veneers and Orthodontic treatment",
    before: "https://images.unsplash.com/photo-1667133295315-820bb6481730?auto=format&fit=crop&w=800&h=800&q=80&fm=webp",
    after: "https://images.unsplash.com/photo-1623862657351-cc36a28ff91d?auto=format&fit=crop&w=800&h=800&q=80&fm=webp",
    icon: Sparkles
  },
  {
    title: "Dental Implants",
    desc: "Single tooth replacement",
    before: "https://images.unsplash.com/photo-1667133295352-ef4c83620e8e?auto=format&fit=crop&w=800&h=800&q=80&fm=webp",
    after: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&h=800&q=80&fm=webp",
    icon: ShieldCheck
  },
  {
    title: "Teeth Cleaning",
    desc: "Scaling and deep polishing",
    before: "https://images.unsplash.com/photo-1628102422700-166ed2853243?auto=format&fit=crop&w=800&h=800&q=80&fm=webp",
    after: "https://images.unsplash.com/photo-1606233454316-24874409395d?auto=format&fit=crop&w=800&h=800&q=80&fm=webp",
    icon: Smile
  }
];

const ComparisonSlider = ({ before, after, id }: { before: string, after: string, id?: number }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, position)));
  };

  return (
    <div 
      ref={containerRef}
      className="relative aspect-square w-full rounded-[40px] overflow-hidden cursor-ew-resize group select-none shadow-xl border-4 border-white/10"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image (Background) */}
      <img 
        src={after} 
        alt="Dental treatment after result" 
        className="absolute inset-0 w-full h-full object-cover" 
        referrerPolicy="no-referrer" 
        loading="lazy"
        width="800"
        height="800"
      />
      
      {/* Before Image (Overlay) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden" 
        style={{ width: `${sliderPos}%` }}
      >
        <img 
          src={before} 
          alt="Dental condition before treatment" 
          className="absolute inset-0 w-full h-full object-cover max-w-none" 
          style={{ width: containerRef.current?.offsetWidth }} 
          referrerPolicy="no-referrer" 
          loading="lazy"
          width="800"
          height="800"
        />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-brand-accent">
           <div className="flex gap-1 text-brand-primary">
              <div className="w-1 h-3 bg-brand-primary rounded-full animate-pulse" />
              <div className="w-1 h-3 bg-brand-primary rounded-full animate-pulse delay-75" />
           </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-6 left-6 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] uppercase font-bold text-white tracking-widest border border-white/10">Before</div>
      <div className="absolute bottom-6 right-6 px-3 py-1 bg-brand-accent/80 backdrop-blur-md rounded-full text-[10px] uppercase font-bold text-brand-primary tracking-widest border border-white/10">After</div>
    </div>
  );
};

const ResultsComparison = () => {
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section id="results" className="py-24 bg-brand-primary relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-accent/10 blur-[100px] rounded-full" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-secondary/20 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="premium-label mb-4">Visible Results</h3>
            <h2 className="text-white text-4xl md:text-6xl font-bold mb-8 leading-tight">Smile Transformations <br/> <span className="text-brand-accent italic font-light">That Speak Volumes</span></h2>
            
            <div className="space-y-4">
              {cases.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCase(i)}
                  className={cn(
                    "w-full p-6 p-4 rounded-3xl text-left transition-all flex items-center gap-6 border border-white/5",
                    activeCase === i ? "bg-white/10 border-white/20 shadow-xl" : "hover:bg-white/5"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors shadow-sm",
                    activeCase === i ? "bg-brand-accent text-brand-primary" : "bg-white/5 text-brand-accent"
                  )}>
                    <c.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xl mb-1 tracking-tight text-white">{c.title}</h4>
                    <p className="text-sm text-white font-medium">{c.desc}</p>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-white/5 rounded-[40px] border border-white/10 backdrop-blur-md">
               <p className="text-sm font-medium text-white/70 italic mb-2 tracking-wide leading-relaxed">
                 "Our specialized procedures are designed for lasting results. We use world-class materials to ensure your smile remains perfect for years."
               </p>
               <p className="text-xs uppercase font-bold text-brand-accent tracking-widest">— Clinical Quality Assurance</p>
            </div>
          </motion.div>

          {/* Slider Display */}
          <div className="relative">
             <ComparisonSlider 
               id={activeCase}
               before={cases[activeCase].before}
               after={cases[activeCase].after}
             />
             
             {/* Float details for mobile/desktop */}
             <div className="absolute -top-6 -right-6 bg-brand-accent text-brand-primary px-4 py-2 rounded-2xl font-bold text-xs rotate-6 shadow-xl z-20">
                100% Real Results
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResultsComparison;
