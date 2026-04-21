import React from 'react';
import { motion } from 'framer-motion';

export default function SectionWrapper({ children, id, className = '', bg = 'bg-brand-white' }) {
  return (
    <section id={id} className={`py-16 md:py-24 relative overflow-hidden ${bg} ${className}`}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}
