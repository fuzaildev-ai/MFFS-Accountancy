import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '../components/PageHeader';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const scrollRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray('.scrub-text').forEach((text) => {
        gsap.to(text, {
          color: '#002e5b',
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
            end: "top 50%",
            scrub: true,
          }
        });
      });
    }, scrollRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={scrollRef}>
      <Helmet>
        <title>Pricing Plans | MFFS Accountancy | Transparent UK Fees</title>
        <meta name="description" content="Transparent, fixed-fee accounting packages for UK businesses. No hidden costs, just exceptional financial management." />
      </Helmet>

      <PageHeader 
        title="Transparent Strategy" 
        subtitle="Professional Intelligence shouldn't be a mystery. We provide fixed-fee investment tiers tailored to your growth trajectory."
        bgImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2940&auto=format&fit=crop"
      />

      <SectionWrapper bg="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-end">
          {/* Pricing cards */}
          <div className="bg-brand-light p-12 rounded-[40px] border border-brand-primary/5 text-center flex flex-col h-full hover:border-brand-accent/20 transition-all duration-500 shadow-sm">
             <h3 className="text-sm font-black text-slate-400 mb-6 uppercase tracking-[0.3em]">Foundation</h3>
             <p className="text-6xl font-black text-brand-primary mb-12 tracking-tighter">£49<span className="text-xs text-slate-400 font-bold tracking-widest">/MO</span></p>
             <ul className="text-slate-500 space-y-6 mb-16 text-left flex-grow font-medium">
               <li className="flex gap-4 items-start"><span className="text-brand-accent font-black">✓</span> Self Assessment Filings</li>
               <li className="flex gap-4 items-start"><span className="text-brand-accent font-black">✓</span> Basic Bookkeeping Hub</li>
               <li className="flex gap-4 items-start"><span className="text-brand-accent font-black">✓</span> Digital Record Capture</li>
             </ul>
             <Button to="/contact" variant="outline" className="w-full">Select Foundation</Button>
          </div>

          <div className="bg-brand-primary p-16 rounded-[60px] shadow-2xl shadow-brand-primary/20 text-center flex flex-col relative transform lg:scale-110 z-10 overflow-hidden group">
             <div className="absolute top-0 right-0 bg-brand-accent text-brand-primary px-6 py-2 rounded-bl-3xl font-black text-[10px] uppercase tracking-widest">Most Requested</div>
             <h3 className="text-sm font-black text-brand-accent mb-6 uppercase tracking-[0.3em]">The Elite</h3>
             <p className="text-7xl font-black text-white mb-12 tracking-tighter">£149<span className="text-xs text-white/40 font-bold tracking-widest">/MO</span></p>
             <ul className="text-white/80 space-y-6 mb-16 text-left flex-grow font-medium">
               <li className="flex gap-4 items-start"><span className="text-brand-accent font-black">✓</span> Statutory Accounts Preparation</li>
               <li className="flex gap-4 items-start"><span className="text-brand-accent font-black">✓</span> CT600 Corporation Tax Filing</li>
               <li className="flex gap-4 items-start"><span className="text-brand-accent font-black">✓</span> MTD VAT Performance Checks</li>
               <li className="flex gap-4 items-start"><span className="text-brand-accent font-black">✓</span> Director-Level Tax Advisory</li>
               <li className="flex gap-4 items-start"><span className="text-brand-accent font-black">✓</span> Priority Partner Support</li>
             </ul>
             <Button to="/contact" variant="secondary" className="w-full py-6 text-lg">Acquire Elite Status</Button>
          </div>

          <div className="bg-brand-light p-12 rounded-[40px] border border-brand-primary/5 text-center flex flex-col h-full hover:border-brand-accent/20 transition-all duration-500 shadow-sm">
             <h3 className="text-sm font-black text-slate-400 mb-6 uppercase tracking-[0.3em]">Strategic</h3>
             <p className="text-6xl font-black text-brand-primary mb-12 tracking-tighter">Custom</p>
             <ul className="text-slate-500 space-y-6 mb-16 text-left flex-grow font-medium">
               <li className="flex gap-4 items-start"><span className="text-brand-accent font-black">✓</span> Fractional CFO Advisory</li>
               <li className="flex gap-4 items-start"><span className="text-brand-accent font-black">✓</span> Complex R&D Tax Recovery</li>
               <li className="flex gap-4 items-start"><span className="text-brand-accent font-black">✓</span> Global Expansion Strategy</li>
               <li className="flex gap-4 items-start"><span className="text-brand-accent font-black">✓</span> Monthly Board-Level Reporting</li>
             </ul>
             <Button to="/contact" variant="outline" className="w-full">Tailor Plan</Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
