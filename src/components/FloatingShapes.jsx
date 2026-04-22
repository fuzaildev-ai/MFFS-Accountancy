import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function FloatingShapes() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Floating Animation on the inner elements
    const inners = gsap.utils.toArray('.shape-inner');
    inners.forEach((shape) => {
      gsap.to(shape, {
        y: "random(-50, 50)",
        x: "random(-50, 50)",
        rotation: "random(-45, 45)",
        duration: "random(10, 20)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    // 2. Parallax Scroll on the outer wrappers (Prevents GSAP property collision with the 'y' movement)
    const wrappers = gsap.utils.toArray('.shape-wrapper');
    wrappers.forEach((wrapper, i) => {
      gsap.to(wrapper, {
        y: (i % 2 === 0 ? '-300' : '250'),
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        }
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Navy Blobs */}
      <div className="shape-wrapper absolute top-20 left-[10%] w-64 h-64">
         <div className="shape-inner w-full h-full bg-brand-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="shape-wrapper absolute top-[60%] right-[15%] w-96 h-96">
         <div className="shape-inner w-full h-full bg-brand-primary/10 rounded-full blur-[120px]" />
      </div>

      {/* Gold Accents */}
      <div className="shape-wrapper absolute top-[30%] right-[5%] w-48 h-48">
         <div className="shape-inner w-full h-full bg-brand-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="shape-wrapper absolute bottom-20 left-[20%] w-80 h-80">
         <div className="shape-inner w-full h-full bg-brand-accent/5 rounded-full blur-[100px]" />
      </div>

      {/* Geometric Lines (Consulting Style) */}
      <div className="shape-wrapper absolute top-1/2 left-0 w-full h-[1px]">
         <div className="shape-inner w-full h-full bg-gradient-to-r from-transparent via-brand-primary/5 to-transparent rotate-12" />
      </div>
      
      <div className="shape-wrapper absolute top-1/3 right-0 w-1/2 h-[1px]">
         <div className="shape-inner w-full h-full bg-gradient-to-r from-transparent via-brand-accent/10 to-transparent -rotate-6" />
      </div>
    </div>
  );
}
