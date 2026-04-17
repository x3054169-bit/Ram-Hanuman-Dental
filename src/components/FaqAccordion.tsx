import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    q: "Is Root Canal Treatment (RCT) painful?",
    a: "Absolutely not! With advanced local anesthesia and modern rotary instruments, RCT at our clinic is virtually painless. We prioritize patient comfort above all else."
  },
  {
    q: "How long does a dental implant take?",
    a: "The entire process usually takes 3 to 6 months. This includes the placement of the implant, the healing period (osseointegration), and finally the attachment of the custom crown."
  },
  {
    q: "What are the consultation charges?",
    a: "Our consultation is designed to be affordable for everyone. Please contact us via WhatsApp or Call for the latest fee structure and special package offers."
  },
  {
    q: "Are you open on Sundays?",
    a: "Our standard hours are 9 AM to 9 PM daily. However, for specific holiday hours or emergency Sunday appointments, we recommend giving us a quick call."
  }
];

const FaqAccordion = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-brand-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">Patient FAQ</h3>
          <h2 className="text-4xl font-bold">Common Concerns</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className={cn(
                "rounded-[32px] overflow-hidden transition-all duration-300",
                activeIdx === i ? "bg-white shadow-xl ring-1 ring-gray-100" : "bg-white/50 border border-gray-100"
              )}
            >
              <button
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                onMouseEnter={() => setActiveIdx(i)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-10 h-10 rounded-2xl flex items-center justify-center transition-colors",
                    activeIdx === i ? "bg-brand-accent text-brand-primary" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                  )}>
                    <HelpCircle size={20} />
                  </div>
                  <span className="font-bold text-lg text-brand-primary italic">{faq.q}</span>
                </div>
                {activeIdx === i ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              
              <AnimatePresence>
                {activeIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-20 pb-8 text-gray-500 leading-relaxed font-medium text-sm md:text-base">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Local SEO SEO Boost block embedded within Section */}
        <div className="mt-24 p-12 bg-white rounded-[40px] border border-gray-100 text-center shadow-sm">
           <h4 className="text-brand-secondary font-bold text-2xl mb-4 italic">Best Dental Clinic in Jaipur</h4>
           <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm">
             Ram Hanuman Dental Super Specialty serves patients from across <strong>Ramnagar</strong>, <strong>Ganesh Nagar</strong>, and the wider <strong>Jaipur</strong> area. From RCT to Implants, we are recognized as the top-rated clinic (5.0 stars) for comprehensive dental care in Rajasthan.
           </p>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
