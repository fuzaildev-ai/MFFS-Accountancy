import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/PageHeader';
import SectionWrapper from '../../components/SectionWrapper';
import Button from '../../components/Button';

export default function PropertyTax() {
  return (
    <div>
      <Helmet>
        <title>Property Tax & Landlord Accounting | MFFS Accountancy</title>
        <meta name="description" content="Specialist property tax advice for UK landlords. CGT strategy, SDLT advice, and institutional real estate portfolio management." />
      </Helmet>

      <PageHeader 
        title="Property Tax" 
        subtitle="Specialist financial advice for landlords and property investors. We optimize your real estate returns while ensuring absolute compliance."
        bgImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2873&auto=format&fit=crop"
      />

      <SectionWrapper bg="bg-white">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-0.5 bg-brand-accent" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary/40">Real Estate Strategy Hub</span>
                 </div>
                 <h2 className="text-4xl md:text-6xl font-black text-brand-primary uppercase mb-8 leading-tight">Optimizing <br /><span className="text-brand-accent italic">Property Portfolios.</span></h2>
                 <p className="text-slate-500 text-xl leading-relaxed mb-10">
                    The tax landscape for property investors has changed significantly in recent years. From Section 24 interest relief changes to Capital Gains Tax (CGT) reporting windows, landlords need expert guidance.
                 </p>
                 
                 <div className="space-y-6 mb-12">
                    {[
                      { t: "Rental Accounts", d: "Preparation of annual P&L for your buy-to-let portfolio." },
                      { t: "Capital Gains Tax", d: "Calculating and reporting CGT within the 60-day HMRC window." },
                      { t: "Incorporation Advice", d: "Evaluating if a Limited Company structure is right for your portfolio." },
                      { t: "Stamp Duty (SDLT)", d: "Technical advice on multiple dwellings relief and extra 3% surcharges." }
                    ].map((item, idx) => (
                      <div key={idx} className="finkash-card !p-8 transition-transform hover:-translate-y-2">
                         <h4 className="font-black text-brand-primary mb-2 uppercase tracking-tighter">{item.t}</h4>
                         <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                      </div>
                    ))}
                 </div>
                 <Button to="/contact" variant="primary">Audit My Portfolio</Button>
              </div>
              <div className="relative h-full flex flex-col justify-center">
                 <div className="bg-brand-primary p-20 rounded-[80px] shadow-2xl text-white relative z-10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent z-0" />
                    <h3 className="text-2xl font-black mb-8 italic text-brand-accent uppercase tracking-widest relative z-10">Institutional Insight</h3>
                    <p className="text-white/60 mb-10 leading-relaxed italic relative z-10">"Real estate is a high-stakes asset class. We ensure your tax strategy is as robust as your investment."</p>
                    <div className="space-y-4 pt-10 border-t border-white/10 relative z-10">
                       <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-brand-accent">
                          <span>Portfolio Management</span>
                          <span>✓ ACTIVE</span>
                       </div>
                       <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-brand-accent">
                          <span>CGT Reporting</span>
                          <span>✓ 60-DAY SYNC</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
