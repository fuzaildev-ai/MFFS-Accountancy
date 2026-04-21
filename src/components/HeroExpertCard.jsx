import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function HeroExpertCard({ title, value, label, icon, className = "" }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative group h-40 w-72 ${className}`}
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-0 bg-white/60 backdrop-blur-xl border border-brand-primary/10 rounded-3xl p-8 flex flex-col justify-between shadow-2xl transition-all duration-500 group-hover:border-brand-accent/50"
      >
        <div className="flex justify-between items-start">
           <div className="text-3xl">{icon || '🏛️'}</div>
           <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">{label}</div>
        </div>
        <div>
           <div className="text-3xl font-heading font-black text-brand-primary tracking-tighter">{value}</div>
           <div className="text-[10px] font-bold text-brand-primary/40 uppercase tracking-widest">{title}</div>
        </div>
      </div>
      
      {/* Dynamic Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-brand-accent/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
}
