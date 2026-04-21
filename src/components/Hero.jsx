import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './Button';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Finkash Stencil Reveal
      const lines = gsap.utils.toArray('.hero-line');
      lines.forEach((line) => {
        const text = line.innerText;
        line.innerHTML = `<span class="mask"><span class="inner">${text}</span></span>`;
      });

      gsap.from(".inner", {
        y: "110%",
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.8
      });

      gsap.from(".hero-subtext", {
        opacity: 0,
        x: -30,
        duration: 1,
        delay: 1.8,
        ease: "power3.out"
      });

      gsap.from(".hero-cta", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 2.2,
        ease: "power2.out"
      });

      gsap.from(".hero-image-reveal", {
        scale: 1.2,
        opacity: 0,
        duration: 2,
        delay: 0.5,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen pt-40 pb-20 flex items-center bg-white overflow-hidden"
    >
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Authority Text */}
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
             <div className="w-12 h-0.5 bg-brand-accent" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary/40">MFFS Institutional Advisory</span>
          </div>

          <div className="mb-10">
            <h1 className="hero-line text-6xl md:text-8xl font-black text-brand-primary leading-[0.95] tracking-tight uppercase">
              Financial
            </h1>
            <h1 className="hero-line text-6xl md:text-8xl font-black text-brand-accent leading-[0.95] tracking-tight uppercase">
              Excellence
            </h1>
            <h1 className="hero-line text-4xl md:text-6xl font-black text-brand-primary leading-[1.1] tracking-tight uppercase">
              Precision Scaled.
            </h1>
          </div>

          <p className="hero-subtext text-xl text-slate-500 font-medium leading-relaxed max-w-xl mb-12 border-l-4 border-brand-accent pl-8">
            Bespoke UK chartered accounting and strategic auditing designed for enterprises that demand mathematical certainty and absolute compliance.
          </p>

          <div className="hero-cta flex flex-wrap gap-6">
             <Button to="/contact" variant="primary" className="px-12 py-6 bg-brand-primary text-brand-accent hover:bg-brand-accent hover:text-brand-primary">
                Get Started
             </Button>
             <Button to="/services" variant="outline" className="px-12 py-6 border-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white">
                View Solutions
             </Button>
          </div>
        </div>

        {/* Right: Modern High-Trust Visual */}
        <div className="relative hero-image-reveal">
           <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop" 
                alt="Corporate Advisory"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply" />
           </div>
           
           {/* Floating Authority Badge */}
           <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-2xl shadow-2xl border-t-8 border-brand-accent max-w-xs hidden md:block">
              <div className="text-4xl font-black text-brand-primary mb-2">12+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Years of Institutional Expertise</div>
           </div>
        </div>

      </div>

      {/* Background Graphic Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-light -z-10 skew-x-[-12deg] translate-x-20" />
    </section>
  );
}
