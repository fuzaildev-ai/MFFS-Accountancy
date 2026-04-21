import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Button({ to, href, children, variant = "primary", className = "", ...props }) {
  const baseStyles = "relative inline-flex items-center justify-center font-heading font-black transition-all duration-300 active:scale-95 overflow-hidden group";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-accent px-8 py-4 text-sm tracking-[0.2em] uppercase",
    secondary: "bg-brand-accent text-brand-primary px-8 py-4 text-sm tracking-[0.2em] uppercase",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-4 text-sm tracking-[0.2em] uppercase",
    ghost: "text-brand-primary hover:text-brand-accent px-4 py-2 text-xs tracking-widest uppercase"
  };

  const Content = () => (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <motion.div 
        initial={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{ duration: 0.5, ease: "expo.out" }}
        className="absolute inset-0 bg-white/10"
      />
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
        <Content />
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
        <Content />
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <Content />
    </button>
  );
}
