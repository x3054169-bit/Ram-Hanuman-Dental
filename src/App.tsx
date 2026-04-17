import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyAndReviews from './components/WhyAndReviews';
import ResultsComparison from './components/ResultsComparison';
import FaqAccordion from './components/FaqAccordion';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';
import MobileActionBar from './components/MobileActionBar';
import AppointmentBooking from './components/AppointmentBooking';
import ReviewStrip from './components/ReviewStrip';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Navigation & CTAs */}
      <Navbar onBookClick={() => setIsBookingOpen(true)} />
      <FloatingCallButton />
      <MobileActionBar onBookClick={() => setIsBookingOpen(true)} />
      <AppointmentBooking isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Main Sections */}
      <div id="home">
        <Hero onBookClick={() => setIsBookingOpen(true)} />
      </div>

      {/* Review Strip Moved Here */}
      <ReviewStrip />
      
      <About />
      
      <div className="relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] fill-brand-light">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-12 w-full rotate-180">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
        <Services />
      </div>

      <ResultsComparison />
      <WhyAndReviews />
      <FaqAccordion />
      <Contact />
      <Footer />
    </main>
  );
}
