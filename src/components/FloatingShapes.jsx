import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FloatingShapes() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const shapes = gsap.utils.toArray('.floating-shape');
      
      shapes.forEach((shape, i) => {
        // Individual random floating
        gsap.to(shape, {
          y: "random(-100, 100)",
          x: "random(-50, 50)",
          rotation: "random(-45, 45)",
          duration: "random(10, 20)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });

        // Scroll Parallax Scrub
        gsap.to(shape, {
          y: (i % 2 === 0 ? '-300' : '200'),
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Navy Blobs */}
      <div className="floating-shape absolute top-20 left-[10%] w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl" />
      <div className="floating-shape absolute top-[60%] right-[15%] w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px]" />
      
      {/* Gold Accents */}
      <div className="floating-shape absolute top-[30%] right-[5%] w-48 h-48 bg-brand-accent/10 rounded-full blur-3xl" />
      <div className="floating-shape absolute bottom-20 left-[20%] w-80 h-80 bg-brand-accent/5 rounded-full blur-[100px]" />

      {/* Geometric Lines (Consulting Style) */}
      <div className="floating-shape absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/5 to-transparent rotate-12" />
      <div className="floating-shape absolute top-1/3 right-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-brand-accent/10 to-transparent -rotate-6" />
    </div>
  );
}
