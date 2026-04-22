import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Testimonials from './Testimonials';
import WhatsAppButton from './WhatsAppButton';
import { supabase } from '../supabaseClient';

export default function MainLayout({ children }) {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // ANALYTICS: Capture Page View on route change
  useEffect(() => {
    const trackView = async () => {
      try {
        await supabase.from('page_views').insert([{ path: location.pathname }]);
      } catch (e) {
        console.warn("Analytics Sync Paused:", e.message);
      }
    };
    trackView();
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      {!isContactPage && <Testimonials />}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
