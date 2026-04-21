import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ name, comment, company, initial }) => (
  <div className="flex-shrink-0 w-[400px] whitespace-normal bg-brand-light p-10 rounded-[40px] border border-brand-primary/5 mr-8 group hover:bg-brand-primary hover:text-white transition-all duration-500 flex flex-col">
    <div className="flex items-center gap-4 mb-6">
       <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-brand-primary group-hover:bg-brand-accent group-hover:text-brand-primary transition-all">
          {initial}
       </div>
       <div>
          <h4 className="font-black text-lg uppercase tracking-tight">{name}</h4>
          {company && <p className="text-[10px] font-black uppercase tracking-widest text-brand-accent">{company}</p>}
       </div>
    </div>
    <p className="text-slate-500 group-hover:text-white/70 text-lg leading-relaxed font-medium italic">
      "{comment}"
    </p>
  </div>
);

export default function Testimonials() {
  const reviews = [
    { name: "Mehrdad Kh", initial: "M", comment: "A very professional company to deal with. They look after all my personal accounts and business accounts. Highly recommended." },
    { name: "Atif Malik", initial: "A", comment: "I have been using MFFS Accountancy for nearly a year. We get support and regular advice and guidance on our businesses. Faisal is very professional." },
    { name: "Eniko Nagy", initial: "E", comment: "I would give 10 stars if I could! Since the very beginning I am very happy with the whole team. Professional and reliable." },
    { name: "Irfan Khan", initial: "I", comment: "Faisal and his team deal with their clients in a very professional and pro-active manner. Customer service is second to none." },
    { name: "Interior Design Concepts Ltd", initial: "I", comment: "MFFS has significantly improved our financial clarity and simplified our VAT reporting process." },
    { name: "Kizen Logistics Ltd", initial: "K", comment: "Professionalism at its best. They handle our complex logistics accounts with absolute precision." },
    { name: "A M Accountancy", initial: "A", comment: "A great partner for our practice. Professional support and technical expertise." }
  ];

  return (
    <section className="py-24 overflow-hidden bg-white border-y border-brand-primary/5">
      <div className="container-custom mb-16">
         <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-brand-accent" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary/40">Market Feedback</span>
         </div>
         <h2 className="text-4xl md:text-7xl font-black text-brand-primary uppercase leading-tight">Trust <span className="text-brand-accent italic">Engineered.</span></h2>
      </div>

      {/* Marquee Loop */}
      <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div 
          animate={{ x: [0, -1600] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {reviews.concat(reviews).map((r, i) => (
            <TestimonialCard key={i} {...r} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
