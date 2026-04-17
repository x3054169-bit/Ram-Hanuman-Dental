import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Stethoscope, 
  Calendar, 
  User, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Clock,
  MessageCircle,
  X,
  Phone
} from 'lucide-react';
import { cn } from '../lib/utils';

const treatments = [
  "Root Canal Treatment",
  "Dental Implants",
  "Smile Makeover",
  "Teeth Whitening",
  "Braces & Orthodontics",
  "General Consultation"
];

const timeSlots = [
  "09:30 AM", "11:00 AM", "12:30 PM", 
  "03:00 PM", "04:30 PM", "06:00 PM", "08:00 PM"
];

const AppointmentBooking = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    treatment: '',
    date: '',
    time: '',
    name: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleBooking = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Auto-WhatsApp message
    const message = `Hi, I'd like to book an appointment for ${formData.treatment} at ${formData.time} on ${formData.date}. Name: ${formData.name}, Phone: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/918104861306?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClose();
      // Reset after close
      setTimeout(() => {
        setStep(1);
        setIsSuccess(false);
      }, 500);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-primary/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden p-6 md:p-8"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-3 hover:bg-gray-100 rounded-full transition-colors z-20"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Stepper Header */}
            {!isSuccess && (
              <div className="mb-6 md:mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 bg-brand-accent rounded-full flex items-center justify-center font-bold text-brand-primary text-xs shrink-0">
                    {step}
                  </div>
                  <h3 className="font-display font-bold text-lg md:text-xl">
                    {step === 1 && "Select Treatment"}
                    {step === 2 && "Pick Your Slot"}
                    {step === 3 && "Final Details"}
                  </h3>
                </div>
                <div className="flex gap-1.5 md:gap-2">
                  {[1, 2, 3].map(i => (
                    <div 
                      key={i} 
                      className={cn(
                        "h-1 rounded-full flex-1 transition-all duration-500",
                        step >= i ? "bg-brand-accent" : "bg-gray-100"
                      )}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Step Content */}
            <div className="min-h-[350px] md:min-h-[300px]">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 md:py-12 text-center"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <Check size={32} md:size={40} strokeWidth={3} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-2">Booking Confirmed!</h3>
                  <p className="text-sm text-gray-500 mb-8 max-w-[240px] md:max-w-xs leading-relaxed">
                    We've received your request. Finalize on WhatsApp to confirm your slot instantly.
                  </p>
                  <div className="flex items-center gap-2 text-brand-secondary font-bold text-sm">
                    <MessageCircle size={18} />
                    <span>Connecting WhatsApp...</span>
                  </div>
                </motion.div>
              ) : (
                <>
                  {step === 1 && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="grid grid-cols-1 gap-2 md:gap-3"
                    >
                      {treatments.map(t => (
                        <button
                          key={t}
                          onClick={() => { setFormData({...formData, treatment: t}); nextStep(); }}
                          className={cn(
                            "p-4 md:p-5 h-14 md:h-auto rounded-2xl border-2 text-left transition-all flex items-center justify-between group",
                            formData.treatment === t ? "border-brand-accent bg-brand-light" : "border-gray-50 active:border-brand-accent/30"
                          )}
                        >
                          <span className="font-bold text-sm md:text-base text-gray-700">{t}</span>
                          <ChevronRight size={18} className="text-gray-300 group-hover:text-brand-accent" />
                        </button>
                      ))}
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 block italic">Select Date</label>
                        <input 
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          className="w-full h-14 p-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-brand-accent outline-none text-sm font-medium"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 block italic">Select Time</label>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map(t => (
                            <button
                              key={t}
                              onClick={() => setFormData({...formData, time: t})}
                              className={cn(
                                "h-12 md:h-11 rounded-xl text-[10px] md:text-xs font-bold transition-all",
                                formData.time === t ? "bg-brand-primary text-white" : "bg-gray-100 text-gray-600 active:bg-gray-200"
                              )}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-5"
                    >
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block italic">Your Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                          <input 
                            type="text"
                            placeholder="Full Name"
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full h-14 p-4 pl-12 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-brand-accent outline-none text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block italic">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                          <input 
                            type="tel"
                            placeholder="Contact Number"
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full h-14 p-4 pl-12 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-brand-accent outline-none text-sm"
                          />
                        </div>
                      </div>
                      <div className="p-4 bg-brand-light rounded-2xl border border-brand-accent/10">
                         <div className="flex justify-between text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-wider">
                            <span>{formData.treatment || 'Treatment'}</span>
                            <span>{formData.time || 'Time'}</span>
                         </div>
                         <p className="text-brand-primary font-bold">{formData.date || 'Pick a Date'}</p>
                      </div>
                    </motion.div>
                  )}
                </>
              )}
            </div>

            {/* Navigation Footer */}
            {!isSuccess && (
              <div className="mt-8 flex gap-3">
                {step > 1 && (
                  <button 
                    onClick={prevStep}
                    className="w-14 md:flex-1 h-14 rounded-2xl border-2 border-gray-100 font-bold flex items-center justify-center text-gray-600 active:bg-gray-50 transition-colors"
                  >
                    <ArrowLeft size={20} /> <span className="hidden md:inline ml-2">Back</span>
                  </button>
                )}
                {step < 3 ? (
                  step > 1 && (
                    <button 
                      onClick={nextStep}
                      disabled={!formData.date || !formData.time}
                      className="flex-[2] h-14 rounded-2xl bg-brand-primary text-white font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg active:scale-95 transition-all"
                    >
                      Continue <ArrowRight size={18} />
                    </button>
                  )
                ) : (
                  <button 
                    onClick={handleBooking}
                    disabled={!formData.name || !formData.phone || isSubmitting}
                    className="flex-[2] h-14 rounded-2xl bg-brand-accent text-brand-primary font-bold flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg active:scale-95 transition-all"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-brand-primary border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>Confirm Booking <ArrowRight size={18} /></>
                    )}
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Simple Chevron for step 1
const ChevronRight = ({ size, className }: { size: number, className: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

export default AppointmentBooking;
