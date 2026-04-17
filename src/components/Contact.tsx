import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Mail, ExternalLink, Star } from 'lucide-react';

const Contact = () => {
  const info = [
    {
      icon: MapPin,
      title: "Our Location",
      desc: "22-23, Bhagawan Marg, Ganesh Nagar, Ramnagar, Jaipur, Rajasthan 302015",
      link: "https://maps.app.goo.gl/9R6K1E7Z1Y1Z1Z1Z1" // Placeholder link
    },
    {
      icon: Phone,
      title: "Phone Number",
      desc: "081048 61306",
      link: "tel:+918104861306"
    },
    {
      icon: Clock,
      title: "Opening Hours",
      desc: "Daily: 9:00 AM – 9:00 PM",
      sub: "Hours may vary on holidays"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-brand-light font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-brand-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">Connect With Us</h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Visit Our Super Specialty Hospital</h2>
              <p className="text-gray-600 text-lg">We are located in the heart of Jaipur, easily accessible for all your dental emergencies and routine checkups.</p>
            </div>

            <div className="space-y-8">
              {info.map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-brand-accent transition-colors">
                    <item.icon className="text-brand-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    {item.link ? (
                       <a href={item.link} className="text-gray-500 hover:text-brand-secondary transition-colors inline-flex items-center gap-1">
                          {item.desc}
                          <ExternalLink size={14} />
                       </a>
                    ) : (
                      <p className="text-gray-500">{item.desc}</p>
                    )}
                    {item.sub && <p className="text-[10px] uppercase font-bold text-brand-secondary mt-1 tracking-wider opacity-60">{item.sub}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
               <a 
                 href="tel:+918104861306"
                 className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 h-14 bg-brand-primary text-brand-accent rounded-2xl font-bold active:scale-95 transition-all shadow-lg text-lg"
               >
                 <Phone size={20} />
                 Book appointment now
               </a>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative rounded-[40px] overflow-hidden shadow-2xl bg-white p-4 h-[500px] lg:h-full min-h-[500px]"
          >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.3608975391558!2d75.77480487616168!3d26.89203916097742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5f1b4973c61%3A0xe678701e9ea0401d!2sRam%20hanuman%20dental%20super%20specialty!5e0!3m2!1sen!2sin!4v1776440047650!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
                className="rounded-[32px] grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
             
             {/* Floating Badge on Map */}
             <div className="absolute top-8 left-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block max-w-[200px]">
                <p className="font-bold text-brand-primary text-sm mb-1 italic">Best Rated Dental Clinic</p>
                <div className="flex text-brand-accent mb-2">
                   {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                </div>
                <p className="text-[10px] text-gray-500 font-medium leading-tight">Located at Bhagawan Marg, Ramnagar.</p>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
