import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FloatingShapes from './FloatingShapes';

gsap.registerPlugin(ScrollTrigger);

export default function PageHeader({ title, subtitle, bgImage }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Wyxan word reveal logic
      const titleEl = textRef.current.querySelector('.header-title');
      if (titleEl) {
        const words = titleEl.innerText.split(' ');
        titleEl.innerHTML = words.map(word => `<span class="inline-block overflow-hidden"><span class="word inline-block">${word}&nbsp;</span></span>`).join('');
        
        gsap.from(".word", {
          y: 100,
          opacity: 0,
          duration: 1.2,
          stagger: 0.08,
          ease: "expo.out",
          delay: 0.2
        });
      }

      gsap.from(".header-sub", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.8,
        ease: "power3.out"
      });

      // Background Parallax Effect
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          y: "20%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [title]);

  const defaultBg = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop";

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[60vh] flex items-center overflow-hidden bg-brand-primary pt-32 lg:pt-40"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <img 
          ref={bgRef}
          src={bgImage || defaultBg} 
          alt={title}
          className="w-full h-[120%] object-cover opacity-40 grayscale mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/80 to-transparent z-10" />
      </div>

      <FloatingShapes />
      
      <div ref={textRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-20">
        <div className="max-w-4xl">
          {/* Breadcrumb (Modern Corporate Detail) */}
          <div className="flex items-center gap-2 mb-6 text-brand-accent/60 font-black text-[10px] uppercase tracking-[0.4em]">
            <span>UK</span>
            <span className="w-4 h-[1px] bg-brand-accent/40" />
            <span>MFFS ADVISORY</span>
          </div>

          <h1 className="header-title text-4xl md:text-6xl lg:text-8xl font-heading font-black text-white tracking-tighter leading-[0.85] uppercase mb-10">
            {title}
          </h1>
          <p className="header-sub text-xl md:text-2xl text-white/70 max-w-2xl font-body leading-relaxed border-l-4 border-brand-accent pl-8">
            {subtitle}
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-8 md:left-20 flex items-center gap-4 text-white/20 select-none z-20">
         <span className="text-[10px] font-black uppercase tracking-[0.8em] [writing-mode:vertical-lr] rotate-180">EXPLORE</span>
         <div className="w-[1px] h-20 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
