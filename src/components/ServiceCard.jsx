import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ServiceCard({ title, description, linkTo }) {
  return (
    <motion.div 
      whileHover={{ y: -12 }}
      className="finkash-card group flex flex-col h-full"
    >
      <div className="w-16 h-16 bg-brand-primary/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-accent transition-all duration-500 text-brand-primary">
         {/* Icon Placeholder (Can be updated with specific Icons) */}
         <div className="w-8 h-0.5 bg-current" />
         <div className="w-4 h-0.5 bg-current translate-y-2 -translate-x-4" />
      </div>
      
      <h3 className="text-2xl font-black text-brand-primary mb-6 transition-colors duration-500 group-hover:text-brand-primary">
        {title}
      </h3>
      
      <p className="text-slate-500 leading-relaxed text-lg mb-12 flex-grow">
        {description}
      </p>

      <Link 
        to={linkTo} 
        className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary group-hover:text-brand-accent transition-all duration-300"
      >
        <span>Discover Precision</span>
        <span className="w-8 h-[2px] bg-brand-primary group-hover:bg-brand-accent transition-all duration-500" />
      </Link>
    </motion.div>
  );
}
