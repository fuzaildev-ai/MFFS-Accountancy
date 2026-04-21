import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '../../components/PageHeader';
import SectionWrapper from '../../components/SectionWrapper';
import Button from '../../components/Button';
import FloatingShapes from '../../components/FloatingShapes';

gsap.registerPlugin(ScrollTrigger);

export default function ContractorServices() {
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
        <title>UK Contractor Accounting | IR35 & Dividend Advisory | MFFS</title>
        <meta name="description" content="Specialized accounting for UK contractors." />
      </Helmet>

      <PageHeader 
        title="Contractor Intelligence" 
        subtitle="Precision financial engineering for the UK's elite independent contractors and solo-entrepreneurs."
        bgImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop"
      />

      <SectionWrapper bg="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="scrub-text text-4xl md:text-5xl font-heading font-black text-brand-primary leading-none uppercase">
              Navigating <br /> <span className="text-brand-accent italic">IR35 & Beyond.</span>
            </h2>
            <p className="text-slate-500 text-xl leading-relaxed border-l-4 border-brand-accent pl-8">
              Operating as a contractor in the UK requires a sophisticated balance of compliance and dividend optimization. We ensure your personal and business wealth are aligned.
            </p>
            <div className="space-y-6">
               {[
                 "IR35 Status Reviews & Compliance",
                 "Optimal Salary/Dividend Structuring",
                 "Quarterly Tax Performance Audits",
                 "MTD-Compliant Expenses Hub"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 bg-brand-accent group-hover:w-8 transition-all duration-300" />
                    <span className="text-brand-primary font-bold tracking-tight">{item}</span>
                 </div>
               ))}
            </div>
            <Button to="/contact" variant="primary" className="py-6 px-12">Secure Expert Advisory</Button>
          </div>
          <div className="relative">
             <div className="bg-brand-light p-1 rounded-[60px] border border-brand-primary/5 shadow-inner">
                <div className="bg-white p-12 md:p-16 rounded-[55px] shadow-sm relative overflow-hidden group">
                   <FloatingShapes />
                   <h4 className="text-brand-primary font-black text-2xl mb-6 relative z-10">Contractor Tier</h4>
                   <p className="text-brand-accent font-black text-6xl mb-8 tracking-tighter relative z-10">£89<span className="text-xs text-slate-400 font-bold tracking-widest">/MO</span></p>
                   <p className="text-slate-500 mb-10 relative z-10">Flat-fee, all-inclusive accounting for established UK contractors.</p>
                   <Button to="/contact" variant="outline" className="w-full relative z-10">Consult Now</Button>
                </div>
             </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
