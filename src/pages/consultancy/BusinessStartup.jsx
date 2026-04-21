import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/PageHeader';
import SectionWrapper from '../../components/SectionWrapper';
import Button from '../../components/Button';

export default function BusinessStartup() {
  return (
    <div>
      <Helmet>
        <title>Business Start-ups & Formations | MFFS Accountancy</title>
        <meta name="description" content="Expert advice for new UK businesses. From company formation to financial forecasting and structure advisory." />
      </Helmet>

      <PageHeader 
        title="Business Start-up" 
        subtitle="Launching your vision on solid foundations. We provide the structural intelligence and compliance advice for UK founders."
        bgImage="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2940&auto=format&fit=crop"
      />

      <SectionWrapper bg="bg-white">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-0.5 bg-brand-accent" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary/40">Founder Success Hub</span>
                 </div>
                 <h2 className="text-4xl md:text-6xl font-black text-brand-primary uppercase mb-8 leading-tight">Your Launch <br /><span className="text-brand-accent italic">Engineered.</span></h2>
                 <p className="text-slate-500 text-xl leading-relaxed mb-10">
                    Starting a business is exciting but requires careful planning. Most new ventures fail within the first few years due to poor financial structure. MFFS ensures you start with a map to success.
                 </p>
                 
                 <div className="space-y-6 mb-12">
                    {[
                      { t: "Company Formations", d: "Seamless registration with Companies House & HMRC." },
                      { t: "Structure Advisory", desc: "Deciding between Sole Trader, Partnership, or Limited Company." },
                      { t: "Business Forecasts", desc: "Detailed cashflow modeling and profit/loss projections." },
                      { t: "Statutory Registrations", desc: "Setting up your PAYE, VAT, and Corporation Tax protocols." }
                    ].map((item, idx) => (
                      <div key={idx} className="group">
                         <h4 className="text-lg font-black text-brand-primary mb-2 flex items-center gap-4 transition-colors group-hover:text-brand-accent">
                            <span className="text-[10px] font-black opacity-20 group-hover:opacity-100">0{idx+1}</span>
                            {item.t}
                         </h4>
                         <p className="text-slate-500 text-sm leading-relaxed pl-10">{item.d || item.desc}</p>
                      </div>
                    ))}
                 </div>
                 <Button to="/contact" variant="primary" className="px-12 py-5">Consult a Strategist</Button>
              </div>
              <div className="finkash-card bg-brand-light border-brand-accent/20 h-full flex flex-col justify-center">
                 <h3 className="text-3xl font-black text-brand-primary mb-8 uppercase tracking-tighter italic">Foundations for Growth.</h3>
                 <p className="text-slate-500 mb-10 leading-relaxed font-semibold">"A well-structured start-up is the difference between an expensive hobby and a scalable enterprise."</p>
                 <div className="space-y-6 pt-10 border-t border-brand-primary/5">
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Formations</span>
                       <span className="text-brand-primary font-black">Same Day</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Compliance</span>
                       <span className="text-brand-primary font-black">100% Digital</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
