import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import SectionWrapper from '../components/SectionWrapper';
import FloatingShapes from '../components/FloatingShapes';

export default function AboutUs() {
  return (
    <div>
      <Helmet>
        <title>About Our Firm | MFFS Accountancy | Institutional Trust</title>
        <meta name="description" content="Learn about MFFS Accountancy. A premier UK financial consulting firm built on precision and institutional excellence." />
      </Helmet>
      
      <PageHeader 
        title="Institutional Firm" 
        subtitle="Bridging the gap between traditional accounting values and modern financial intelligence for the UK's elite enterprises."
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2938&auto=format&fit=crop"
      />

      <SectionWrapper bg="bg-white">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div>
                 <div className="flex items-center gap-4 mb-6 lg:mb-8">
                    <div className="w-12 h-0.5 bg-brand-accent" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary/40">Our Professional Narrative</span>
                 </div>
                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-brand-primary leading-[0.95] uppercase mb-8 lg:mb-10">Math, <br /> <span className="text-brand-accent italic">Meticulously</span> Squared.</h2>
                 <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-10 border-l-4 border-brand-accent pl-6 lg:pl-8 font-medium">
                    MFFS is not merely an accounting firm; we are capital engineers. Since our founding, we have specialized in unraveling the complexities of UK tax policy to deliver mathematical certainty for our clients.
                 </p>
                 <div className="grid grid-cols-2 gap-8 lg:gap-10">
                    <div>
                       <p className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-primary mb-2">500+</p>
                       <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-black text-slate-400">Clients Managed</p>
                    </div>
                    <div>
                       <p className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-primary mb-2">99.8%</p>
                       <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-black text-slate-400">Compliance Rate</p>
                    </div>
                 </div>
              </div>
              <div className="relative">
                 <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative border-8 border-brand-light">
                    <img 
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop" 
                      alt="Modern Office"
                      className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-brand-primary/10" />
                 </div>
                 <div className="absolute -bottom-6 md:-bottom-12 -right-6 md:-right-12 bg-brand-accent p-6 md:p-12 rounded-[20px] md:rounded-[40px] shadow-2xl text-brand-primary max-w-[200px] md:max-w-xs hidden sm:block">
                    <p className="text-sm md:text-xl font-black italic">"Accuracy is the only currency that matters in UK compliance."</p>
                 </div>
              </div>
           </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="bg-brand-primary" className="text-white relative overflow-hidden">
        <FloatingShapes />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-24">
             <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase mb-8">Our Core <span className="text-brand-accent italic">Protocols</span>.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { title: "Direct Partner Access", desc: "You work exclusively with senior tax strategists, ensuring your data is handled at the executive level." },
               { title: "Fixed-Fee Clarity", desc: "No hourly ambiguity. We operate on a fixed-fee investment model for total fiscal predictability." },
               { title: "Real-Time MTD", desc: "Our cloud-native infrastructure provides a continuous, live view of your VAT and tax health." }
             ].map((item, idx) => (
               <div key={idx} className="bg-white/5 p-12 rounded-3xl border border-white/5 hover:bg-white/10 transition-all duration-500">
                  <div className="w-12 h-12 bg-brand-accent text-brand-primary rounded-xl flex items-center justify-center font-black mb-8 text-xl">0{idx+1}</div>
                  <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">{item.title}</h4>
                  <p className="text-white/40 text-lg leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </SectionWrapper>
      {/* The Switching Protocol */}
      <SectionWrapper bg="bg-brand-light">
        <div className="container-custom">
           <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-brand-primary uppercase mb-6">Switching to <span className="text-brand-accent italic">MFFS.</span></h2>
              <p className="text-slate-500 text-lg font-medium">Changing your accountant is simpler than you think. We handle the entire professional transition for you.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Initial Consultation", desc: "A free diagnostic session to understand your business and identify immediate tax efficiencies." },
                { title: "The Handover", desc: "We contact your previous accountant and request all professional clearance and historical data." },
                { title: "Onboarding", desc: "Your books are migrated to our digital ecosystem and your HMRC agent status is authorized." }
              ].map((step, idx) => (
                <div key={idx} className="relative group">
                   <div className="bg-white p-12 rounded-[40px] border border-brand-primary/5 shadow-xl relative z-10 h-full">
                      <div className="text-6xl font-black text-brand-accent/20 mb-8 group-hover:text-brand-accent transition-colors">0{idx+1}</div>
                      <h4 className="text-2xl font-black text-brand-primary mb-4 uppercase">{step.title}</h4>
                      <p className="text-slate-500 leading-relaxed font-medium">{step.desc}</p>
                   </div>
                   {idx < 2 && (
                     <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-brand-accent z-0" />
                   )}
                </div>
              ))}
           </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
