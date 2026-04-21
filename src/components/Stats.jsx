import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatItem = ({ label, targetValue, suffix = "", prefix = "" }) => {
  const countRef = useRef(null);

  useEffect(() => {
    const value = { val: 0 };
    gsap.to(value, {
      val: targetValue,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: countRef.current,
        start: "top 90%",
      },
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.innerText = prefix + Math.floor(value.val).toLocaleString() + suffix;
        }
      }
    });
  }, [targetValue, prefix, suffix]);

  return (
    <div className="text-center group">
      <div 
        ref={countRef} 
        className="text-4xl md:text-7xl font-black text-white mb-4 tracking-tighter group-hover:text-brand-accent transition-colors duration-500"
      >
        {prefix}0{suffix}
      </div>
      <div className="text-[10px] uppercase tracking-[0.4em] font-black text-white/30">
        {label}
      </div>
    </div>
  );
};

export default function Stats() {
  const stats = [
    { label: "Tax Optimized", targetValue: 35, suffix: "M", prefix: "£" },
    { label: "Corporate Clients", targetValue: 500, suffix: "" },
    { label: "Compliance Rate", targetValue: 99, suffix: ".8%" },
    { label: "Partner Experience", targetValue: 12, suffix: "+ Yrs" }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
      {stats.map((stat, idx) => (
        <StatItem key={idx} {...stat} />
      ))}
    </div>
  );
}
