import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="border-b border-brand-primary/10 overflow-hidden last:border-0">
    <button 
      onClick={onClick}
      className="w-full py-8 flex justify-between items-center text-left group"
    >
      <span className={`text-xl font-black uppercase tracking-tight transition-colors ${isOpen ? 'text-brand-accent' : 'text-brand-primary group-hover:text-brand-accent'}`}>
        {title}
      </span>
      <div className={`w-8 h-8 rounded-full border-2 border-brand-primary/10 flex items-center justify-center transition-all ${isOpen ? 'rotate-180 bg-brand-accent border-brand-accent text-brand-primary' : 'group-hover:border-brand-accent'}`}>
        ↓
      </div>
    </button>
    
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          <div className="pb-10 pt-2 prose prose-slate max-w-none prose-sm lg:prose-base font-medium text-slate-500 leading-relaxed space-y-6">
             {content}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function LegalAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-brand-light/50 p-6 md:p-12 rounded-[40px] border border-brand-primary/5 shadow-inner">
      {items.map((item, idx) => (
        <AccordionItem 
          key={idx} 
          {...item} 
          isOpen={openIndex === idx} 
          onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
        />
      ))}
    </div>
  );
}
