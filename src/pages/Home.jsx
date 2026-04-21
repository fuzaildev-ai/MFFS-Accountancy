import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import SectionWrapper from '../components/SectionWrapper';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import Stats from '../components/Stats';
import LogoCloud from '../components/LogoCloud';
import Team from '../components/Team';
import TaxNews from '../components/TaxNews';
import FAQ from '../components/FAQ';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const scrollRef = useRef(null);
  const [showAllNews, setShowAllNews] = React.useState(false);

  return (
    <div ref={scrollRef} className="bg-white">
      <Helmet>
        <title>MFFS Accountancy | Institutional Financial Advisory UK</title>
        <meta name="description" content="Precision UK chartered accounting and strategic auditing for modern enterprises. Finkash style premium corporate advisor." />
      </Helmet>

      <Hero />
      
      {/* Dynamic Trust Bar */}
      <div className="bg-brand-light py-12 border-y border-brand-primary/5">
        <LogoCloud />
      </div>

      {/* Expertise Hub */}
      <SectionWrapper id="services" bg="bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-0.5 bg-brand-accent" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary/40">Our Professional Ecosystem</span>
              </div>
              <h2 className="scrub-text text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-brand-primary leading-[0.9] uppercase">
                Strategic <br /> <span className="text-brand-accent italic">Capabilities.</span>
              </h2>
            </div>
            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-sm border-l-4 border-brand-primary/5 pl-8">
              From statutory audits to global tax optimization, MFFS provides the mathematical certainty your business needs to scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard title="Audit & Compliance" description="Statutory filings and rigorous audit protocols ensuring absolute HMRC compliance." linkTo="/services/tax-returns" />
            <ServiceCard title="Strategic Advisory" description="C-level financial planning and capital engineering for high-growth ventures." linkTo="/consultancy/business-planning" />
            <ServiceCard title="Ledger Intelligence" description="Precise cloud-native bookkeeping and forensic MTD VAT reconciliation." linkTo="/services/bookkeeping" />
          </div>
        </div>
      </SectionWrapper>

      {/* Institutional Advantage */}
      <SectionWrapper bg="bg-brand-primary" className="text-white relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
            <div className="space-y-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[0.9] uppercase">
                The <span className="text-brand-accent italic">Institutional</span> <br /> Priority.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 {[
                   { title: "Direct Accountability", desc: "No junior buffers. You have a constant direct line to senior tax strategists." },
                   { title: "Surgical Accuracy", desc: "Our double-entry automated verification eliminates ledger margin for error." },
                   { title: "Global Perspective", desc: "Local UK expertise combined with deep global tax strategy knowledge." },
                   { title: "MTD First", desc: "100% digital compliance from day one with secure cloud-native ecosystems." }
                 ].map((item, idx) => (
                   <div key={idx} className="space-y-4">
                      <div className="w-10 h-10 bg-brand-accent text-brand-primary rounded flex items-center justify-center font-black">0{idx+1}</div>
                      <h4 className="text-lg font-black uppercase tracking-tight">{item.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>
            </div>
            <div className="relative">
               <div className="aspect-square bg-brand-accent rounded-[60px] rotate-3 absolute inset-0 -z-10 opacity-20" />
               <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl relative border-8 border-white/5">
                  <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2942&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Expert" />
               </div>
            </div>
          </div>
          
          <div className="mt-32 pt-32 border-t border-white/5">
            <Stats />
          </div>
        </div>
      </SectionWrapper>

      {/* Leadership & Human Trust */}
      <SectionWrapper bg="bg-white" id="team">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-0.5 bg-brand-accent" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary/40">Strategic Leadership</span>
             </div>
             <h2 className="scrub-text text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-brand-primary leading-[0.9] uppercase mb-8">Executive <span className="text-brand-accent italic">Trust.</span></h2>
             <p className="text-slate-500 text-lg font-medium">Meet the senior tax strategists and consultants behind the MFFS success protocol.</p>
          </div>
          <Team />
        </div>
      </SectionWrapper>

      {/* Authority Hub: Tax Intelligence */}
      <SectionWrapper bg="bg-brand-light" id="news">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-0.5 bg-brand-accent" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary/40">Intelligence Hub</span>
              </div>
              <h2 className="scrub-text text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-brand-primary leading-[0.9] uppercase">
                Latest UK <br /> <span className="text-brand-accent italic">Tax News.</span>
              </h2>
            </div>
            <Link 
              to="/news" 
              className="px-10 py-4 bg-brand-primary text-brand-accent font-black text-[10px] uppercase tracking-widest hover:bg-brand-accent hover:text-brand-primary transition-all rounded-sm"
            >
              All Updates
            </Link>
          </div>
          
          <div className="space-y-12">
            <TaxNews limit={showAllNews ? 8 : 3} />
            
            <div className="flex justify-center pt-8">
               <button 
                 onClick={() => setShowAllNews(!showAllNews)}
                 className="group flex flex-col items-center gap-4"
               >
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary/40 group-hover:text-brand-accent transition-colors">
                   {showAllNews ? 'Show Less' : 'View More Intelligence'}
                 </span>
                 <div className={`w-10 h-10 border-2 border-brand-primary/10 rounded-full flex items-center justify-center transition-all group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-brand-primary ${showAllNews ? 'rotate-180' : ''}`}>
                    ↓
                 </div>
               </button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Expert Inquiry Resolution */}
      <SectionWrapper bg="bg-brand-light">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div>
                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-brand-primary leading-[0.9] uppercase mb-10">Expert <br /> <span className="text-brand-accent italic">Inquiries</span>.</h2>
                 <p className="text-slate-500 text-xl max-w-lg leading-relaxed mb-12">Navigating the complexity of UK tax policy requires clear answers. We resolve your most critical compliance concerns.</p>
                 <div className="p-10 bg-brand-primary rounded-3xl text-brand-accent border-l-8 border-brand-accent shadow-2xl">
                    <p className="text-[10px] font-black uppercase tracking-widest mb-4">Direct Access</p>
                    <p className="text-2xl font-black text-white italic">"Precision is our hallmark. Strategy is our engine."</p>
                 </div>
              </div>
              <FAQ />
           </div>
        </div>
      </SectionWrapper>

      {/* Final CTA Diagnostic */}
      <SectionWrapper id="cta" bg="bg-white">
         <div className="container-custom">
           <div className="bg-brand-primary p-16 md:p-32 rounded-[60px] text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] -mr-48 -mt-48 transition-all duration-1000 group-hover:scale-150" />
              <div className="relative z-10">
                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[100px] font-black text-white tracking-tighter mb-12 leading-[0.8] uppercase">
                    Ready to <br /> <span className="text-brand-accent italic">Scale</span> Safely?
                 </h2>
                 <p className="text-white/60 text-xl font-medium max-w-2xl mx-auto mb-16">Download our 'Tax Mitigation PDF' or book a senior diagnostic audit today.</p>
                 <div className="flex flex-col sm:flex-row justify-center gap-8">
                    <Button to="/contact" variant="secondary" className="bg-brand-accent text-brand-primary py-6 px-16 text-xl hover:bg-white transition-all">Request Diagnostic</Button>
                 </div>
              </div>
           </div>
         </div>
      </SectionWrapper>
    </div>
  );
}
