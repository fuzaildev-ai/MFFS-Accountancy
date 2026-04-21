import { useEffect } from 'react';
import Lenis from 'lenis';

export default function Layout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
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

  return (
    <div className="min-h-screen relative overflow-hidden bg-wyxan-dark text-wyxan-light selection:bg-wyxan-accent selection:text-wyxan-dark">
      {/* Navigation Layer */}
      <header className="fixed top-0 w-full z-50 bg-wyxan-dark/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight">
             <a href="/" className="hover:text-wyxan-accent transition-colors">MFFS Accounting</a>
          </h1>
        </div>
      </header>
      
      {/* Page Content */}
      <main className="w-full relative z-10 pt-20"> 
        {children}
      </main>
    </div>
  );
}
